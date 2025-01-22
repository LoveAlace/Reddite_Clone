document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("retracted");
    });
});

function toggleSection(element) {
    const nestedList = element.nextElementSibling;
    
    if (nestedList.style.display === "block") {
        nestedList.style.display = "none";
        element.classList.remove("active");
    } else {
        nestedList.style.display = "block";
        element.classList.add("active");
    }
}