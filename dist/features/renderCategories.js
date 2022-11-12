import { Category } from "../types/types.js";
export var renderCategories = function (categories, categoriesContainer, updateSelectedCategory) {
    categories.forEach(function (category) {
        var categoryElement = document.createElement("li");
        var categoryId = "category-".concat(category);
        var categoryRadioElement = document.createElement("input");
        categoryRadioElement.type = "radio";
        categoryRadioElement.name = "category";
        categoryRadioElement.value = category;
        categoryRadioElement.id = categoryId;
        categoryRadioElement.addEventListener("change", function () {
            updateSelectedCategory(category);
            handleCategoryChangeEffect(category);
        });
        var categoryLabelElement = document.createElement("label");
        categoryLabelElement.setAttribute("for", "category-".concat(category));
        categoryLabelElement.innerText = category;
        categoryElement.appendChild(categoryRadioElement);
        categoryElement.appendChild(categoryLabelElement);
        categoriesContainer.appendChild(categoryElement);
    });
};
export var handleCategoryChangeEffect = function (category) {
    if (category === Category.General) {
        alert("Kategoria general");
    }
    else if (category === Category.Gym) {
        alert("Kategoria gym");
    }
    else if (category === Category.Hobby) {
        alert("Kategoria hobby");
    }
    else if (category === Category.Work) {
        alert("Kategoria work");
    }
    else {
        var never = category;
        alert("Obsługa typu never");
    }
};
