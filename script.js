const checkbox = document.querySelectorAll(".subCat");

checkbox.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.closest("li");
    const childUl = parent.querySelector("ul");
    if (item.checked) {
      childUl.style.display = "block";
    } else {
      childUl.style.display = "none";
    }
  });
});