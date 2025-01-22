// Handle clicks on menu options
document.querySelectorAll(".options").forEach((option) => {
  option.addEventListener("click", function () {
    // Remove active class from all options and add to the clicked one
    document
      .querySelectorAll(".options")
      .forEach((el) => el.classList.remove("selected"));
    this.classList.add("selected");

    // Log the selected section
    console.log(`Selected: ${this.textContent}`);
  });
});

// Handle the "Add Social Link" button click
document.querySelector(".addlink").addEventListener("click", function () {
  const newLink = prompt("Enter your social media link:");
  if (newLink) {
    alert(`Link added: ${newLink}`);
  } else {
    alert("No link added.");
  }
});

// Handle share button click
document.querySelector(".share").addEventListener("click", function () {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => alert("Profile link copied to clipboard!"))
    .catch((err) => alert("Failed to copy link."));
});

// Handle sorting dropdown change
document.querySelector(".topics").addEventListener("change", function () {
  alert(`Sorted by: ${this.value}`);
});
