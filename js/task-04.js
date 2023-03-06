// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// =======================================================================================================================================

// const CounterValue = function ({
//     rootSelector, 
//     initialValue = 0, 
//     step = 1} = {}) {
//         this._value = initialValue;
//         this._step = step;

//       this._refs = this._getRefs(rootSelector);
//       this._bindEvents();
//       this.updateValueUI();
      
// };

// CounterValue.prototype._getRefs = function (rootSelector) {
// const refs = {};
// refs.contaner = document.querySelector(rootSelector);
// refs.incrementBtn = refs.contaner.querySelector('[data-action="increment"]');
// refs.decrementBtn = refs.contaner.querySelector('[data-action="decrement"]');
// refs.value = refs.contaner.querySelector('#value')

// return refs;
// };

// CounterValue.prototype._bindEvents = function () {
//     this._refs.incrementBtn.addEventListener('click', () => {
//         console.log(" this._refs.incrementBtn.addEventListener ~ this:", this)
//         this.increment();
//         this.updateValueUI();
//     });

//     this._refs.decrementBtn.addEventListener('click', () => {
//         console.log("this._refs.decrementBtn.addEventListener ~ this:", this)
//         this.decrement();
//         this.updateValueUI();
//     });
// };

// CounterValue.prototype.updateValueUI = function () {
//     this._refs.value.textContent = this._value;
// }

// CounterValue.prototype.increment = function () {
// this._value += this._step;
// };

// CounterValue.prototype.decrement = function () {
//     this._value -= this._step;
// };
// new CounterValue({rootSelector: '#counter'});
// new CounterValue({rootSelector: '#counter-2'});

let counterValue = 0;
const valueCounet = document.querySelector('#value');

const decrementBtm = document.querySelector('[data-action="decrement"]');
decrementBtm.addEventListener('click', () =>{
    counterValue -= 1;
    valueCounet.textContent = counterValue;
});
const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', () =>{
    counterValue += 1;
    valueCounet.textContent = counterValue;
})


