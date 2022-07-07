/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

document.addEventListener('mousemove', (e) => {});

export function createDiv() {
  const diva = document.createElement('div');
  diva.style.backgroundColor =
    'rgb(' +
    Math.floor(Math.random() * 255) +
    ', ' +
    Math.floor(Math.random() * 255) +
    ', ' +
    Math.floor(Math.random() * 255) +
    ')';
  diva.style.width = Math.floor(Math.random() * 1000) + 'px';
  diva.style.height = Math.floor(Math.random() * 1000) + 'px';
  diva.style.position = 'absolute';
  diva.style.top = Math.floor(Math.random() * 500) + 'px';
  diva.style.left = Math.floor(Math.random() * 500) + 'px';
  diva.draggable = true;

  console.log(diva);
  homeworkContainer.appendChild(diva);

  diva.addEventListener('dragstart', function () {
    e.dataTransfer.setData('text/plain', e.target.id);
  });

  diva.addEventListener('dragover', function () {
    e.preventDefault();
  });
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  // homeworkContainer.appendChild(div);
});
