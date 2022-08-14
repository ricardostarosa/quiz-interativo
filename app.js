const form = document.querySelector(".quiz-form");

const gabarito = ["A", "A", "A", "A"];

let score = 0;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const listaRespostas = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  listaRespostas.forEach((item, index) => {
    if (item === gabarito[index]) score += 25;
  });

  console.log(score);
});
