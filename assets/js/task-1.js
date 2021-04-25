"use strict";

/*Две вспомогательные функции */
const changeValue = (value) => value === 0 ? 0 : --value;

const counterClosure = (counter) => () => counter = changeValue(counter);

/*Функция изменяет значение на кнопке и в data-counter */

const buttonHandler = ({
  target,
  target: {
    dataset: {
      counter
    }
  }
}) => {
  /*Создается временная переменная, так как counter передается по ссылке, а не по значению, так же конвертируется в число,
    так как имеет тип string
  */
  let tempCounter = +counter;
  if(isNaN(tempCounter)){
    tempCounter = 0;
    alert("Нельзя изменять data-counter через разметку! Счетчик сброшен до 0!");
  }
  const result = changeValue(tempCounter);
  if(result === 0){
    target.dataset.counter = 0;
    target.innerText = 0;
    target.removeEventListener("click", buttonHandler);
    return;
  }
  target.dataset.counter = result;
  target.innerText = result;
  
}


/*Функция изменяет значение на кнопке, но не изменяет значение data-counter */

const  buttonHandlerWithClosure = (closure) => {
  return ({target}) => {
    const result = closure();
    if(result === 0){
      target.innerText = 0;
      target.removeEventListener("click", buttonHandlerWithClosure);
      return;
    }
    target.innerText = result;
  }
}

const changeDataButtons = [...document.querySelectorAll(".change-data")];
for(const button of changeDataButtons){
  button.dataset.counter = +button.dataset.counter || 0;
  button.innerText = button.dataset.counter;
}
changeDataButtons.forEach((button) => button.addEventListener("click", buttonHandler));


/*Создается массив объектов типа {button: htmlElement, closure: function}
  для того, что бы у каждой кнопки было свое собственное поле со счетчиком,
  таким образом кнопок может быть сколько угодно
 */
const saveDataButtons = [...document.querySelectorAll(".save-data")].reduce((acc, nextValue) => {
  const buttonData = {};
  buttonData.button = nextValue;
  buttonData.button.dataset.counter = +nextValue.dataset.counter || 0;
  buttonData.button.innerText = buttonData.button.dataset.counter;
  buttonData.closure = counterClosure(+buttonData.button.dataset.counter);
  acc.push(buttonData);
  return acc;
}, []);

saveDataButtons.forEach(({button, closure}) => {
  button.addEventListener("click", buttonHandlerWithClosure(closure));
})


