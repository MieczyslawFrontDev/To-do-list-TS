const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLLIElement = document.createElement("li");
    const categoryId = `category-${category}`;

    const categoryRadioElement: HTMLInputElement =
      document.createElement("input");
    categoryRadioElement.type = "radio";
    categoryRadioElement.name = "category";
    categoryRadioElement.value = category;
    categoryRadioElement.id = categoryId;

    categoryRadioElement.addEventListener("change", () => {
      selectedCategory = category;
    });

    const categoryLabelElement: HTMLLabelElement =
      document.createElement("label");
    categoryLabelElement.setAttribute("for", `category-${category}`);
    categoryLabelElement.innerText = category;

    categoryElement.appendChild(categoryRadioElement);
    categoryElement.appendChild(categoryLabelElement);
    categoriesContainer.appendChild(categoryElement);
  });
};
