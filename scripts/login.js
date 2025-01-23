//closing button
document.querySelector(".closebutton").addEventListener("click", function () {
  document.querySelector(".container").style.display = "none";
});

//form validation
document.querySelector("form").addEventListener("submit", function (event) {
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  if (!email || !password) {
    alert("Please fill in all required fields.");
    event.preventDefault();
  }
});

//google and apple options
function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  const id_token = googleUser.getAuthResponse().id_token;

  // Send the ID token to your server for verification and login
  fetch("/auth/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id_token }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        window.location.href = "homepage.html"; // Redirect on success
      } else {
        alert("Login failed: " + data.message);
      }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("googleSignIn")
    .addEventListener("click", function () {
      gapi.load("auth2", function () {
        const auth2 = gapi.auth2.init({
          client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
        });
        auth2.signIn().then(onSignIn);
      });
    });

  document.getElementById("appleSignIn").addEventListener("click", function () {
    const appleAuth = new AppleID.auth();
    appleAuth
      .signIn()
      .then((response) => {
        const id_token = response.id_token;

        // Send the ID token to your server for verification and login
        fetch("/auth/apple", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id_token }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              window.location.href = "homepage.html"; // Redirect on success
            } else {
              alert("Login failed: " + data.message);
            }
          });
      })
      .catch((error) => {
        console.error("Error during Apple Sign-In:", error);
      });
  });
});

//redirecting to main page
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  // Assume login is successful
  window.location.href = "homepage.html"; // Redirect to homepage
});
