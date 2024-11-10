"use strict";
const showMoreButton = document.getElementById("show-more-btn");
const skillsList = document.getElementById("show-skills");
if (showMoreButton && skillsList) {
    showMoreButton.addEventListener("click", () => {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block"; // Show the skills list
            showMoreButton.textContent = "Show Less"; // Change button text
        }
        else {
            skillsList.style.display = "none"; // Hide the skills list
            showMoreButton.textContent = "Read More"; // Change button text back
        }
    });
}
