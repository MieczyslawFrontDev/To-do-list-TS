import { Category } from "../types/types";

export const renderCategories = (
  categories: Category[],
  categoriesContainer: HTMLUListElement,
  updateSelectedCategory: (category: Category) => void
) => {
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
      updateSelectedCategory(category);
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
