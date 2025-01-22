// Handle sidebar link clicks
document.querySelectorAll(".sidebar ul li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    alert(`Navigating to: ${this.textContent}`);
  });
});

// Handle Draft button click
document.querySelector(".draft").addEventListener("click", function () {
  alert("Viewing your drafts");
});

// Handle community selection input
document
  .querySelector(".selectcom input")
  .addEventListener("focus", function () {
    this.placeholder = "Type to search communities...";
  });
document
  .querySelector(".selectcom input")
  .addEventListener("blur", function () {
    this.placeholder = "Select a community";
  });

// Handle post options selection
document.querySelectorAll(".postoptions .options").forEach((option) => {
  option.addEventListener("click", function () {
    document
      .querySelectorAll(".postoptions .options")
      .forEach((el) => el.classList.remove("selectedoption"));
    this.classList.add("selectedoption");
  });
});

// Handle title input character count
const titleInput = document.querySelector(".title");
const charCount = document.querySelector(".limit");
titleInput.addEventListener("input", function () {
  charCount.textContent = `${this.value.length}/300`;
});

// Handle Add Tags button click
document.querySelector(".addtags").addEventListener("click", function () {
  const tags = prompt("Enter tags separated by commas:");
  if (tags) {
    alert(`Tags added: ${tags}`);
  } else {
    alert("No tags added.");
  }
});

// Handle text formatting buttons
document.querySelectorAll(".tools").forEach((tool) => {
  tool.addEventListener("click", function () {
    alert(
      `Formatting applied: ${
        this.innerText || this.querySelector("i").className
      }`
    );
  });
});

// Handle Markdown Editor button
document.querySelector(".Markdown").addEventListener("click", function () {
  alert("Switching to Markdown Editor");
});

// Handle Save Draft and Post button clicks
document.querySelectorAll(".footerButton").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.textContent == "Save draft") {
      alert("Saved draft");
    } else {
      alert(`${this.textContent}ed draft`);
    }
  });
});

//js for thw writing area
