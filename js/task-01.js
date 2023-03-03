const listOfCategories = document.querySelector("#categories");
const arryListOfCategories = listOfCategories.children;
console.log('Number of categories: ', arryListOfCategories.length);

const ListAnimals = arryListOfCategories[0].children;
console.log('Category: ', ListAnimals[0].textContent);
console.log('Elements: ', ListAnimals[1].children.length);


const ListProduct = arryListOfCategories[1].children;
console.log('Category: ', ListProduct[0].textContent)
console.log('Elements: ', ListProduct[1].children.length);

const ListTechnologies = arryListOfCategories[2].children;
console.log('Category: ', ListTechnologies[0].textContent)
console.log('Elements: ', ListTechnologies[1].children.length);

// const list = document.querySelectorAll('.item');
// console.log(list)