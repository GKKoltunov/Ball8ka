let input = document.querySelector("#input");
let button = document.querySelector('#button');
let text = document.querySelector('#text');


let answer = [
  "да",
  "конечно",
  "бесспорно",
  "должно быть так",
  "возможно",
  "шансов мало",
  "нет",
  "звезды говорят нет",
  "не могу сказать",
  "сейчас неизвестно",
  "спросите позже",
];

let words = [
  "Почему",
  "Зачем",
  "Как",
  "Где",
  "Что",
  "Кто",
  "Чей",
  "Когда",
  "Сколько",
  "Насколько",
  "Который",
  "Какой",
  "Каков",
  "Куда",
  "Откуда",
  "Докуда",
];

let getQuestion = function () {
  let check = () =>
    words.some((el) =>
      input.value.toLowerCase().split(" ")[0].includes(el.toLowerCase())
    );
  check();

  let shar = () => {
    check() === false
      ? (text.textContent = answer[Math.floor(Math.random() * answer.length)])
      : (text.textContent = "Задайте вопрос на да или нет");
  };
  shar();
  input.value = '';
};

button.addEventListener('click', getQuestion);

