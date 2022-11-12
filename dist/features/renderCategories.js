var renderCategories = function () {
    categories.forEach(function (category) {
        var categoryElement = document.createElement("li");
        var categoryId = "category-".concat(category);
        var categoryRadioElement = document.createElement("input");
        categoryRadioElement.type = "radio";
        categoryRadioElement.name = "category";
        categoryRadioElement.value = category;
        categoryRadioElement.id = categoryId;
        categoryRadioElement.addEventListener("change", function () {
            selectedCategory = category;
        });
        var categoryLabelElement = document.createElement("label");
        categoryLabelElement.setAttribute("for", "category-".concat(category));
        categoryLabelElement.innerText = category;
        categoryElement.appendChild(categoryRadioElement);
        categoryElement.appendChild(categoryLabelElement);
        categoriesContainer.appendChild(categoryElement);
    });
};
