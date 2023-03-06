// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.





const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngradients = document.querySelector('#ingredients');



const makeListElementIngradients = ingredients => {
  return ingredients.map((ingredient) => {
    const listElementIngradients = document.createElement('li');
    listElementIngradients.classList.add('item');
    listElementIngradients.textContent = ingredient;
return listElementIngradients;
  });
}
const elements = makeListElementIngradients(ingredients)
console.log(elements)
listIngradients.append(...elements)
console.log(listIngradients)