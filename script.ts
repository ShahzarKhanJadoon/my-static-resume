const showMoreButton = document.getElementById("show-more-btn") as HTMLButtonElement;
const skillsList = document.getElementById("show-skills") as HTMLUListElement;

if (showMoreButton && skillsList) {
  showMoreButton.addEventListener("click", () => {
    if (skillsList.style.display === "none") {
      skillsList.style.display = "block"; 
      showMoreButton.textContent = "Show Less"; 
    } else {
      skillsList.style.display = "none";
      showMoreButton.textContent = "Read More"; 
    }
  });
}
