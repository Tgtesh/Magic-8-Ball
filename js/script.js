const answersList = [
  { answer: "It is certain.", type: "affirmative" },
  { answer: "It is decidedly so.", type: "affirmative" },
  { answer: "Without a doubt.", type: "affirmative" },
  { answer: "Yes – definitely.", type: "affirmative" },
  { answer: "You may rely on it.", type: "affirmative" },
  { answer: "As I see it, yes.", type: "affirmative" },
  { answer: "Most likely.", type: "affirmative" },
  { answer: "Outlook good.", type: "affirmative" },
  { answer: "Yes.", type: "affirmative" },
  { answer: "Signs point to yes.", type: "affirmative" },
  { answer: "Reply hazy, try again.", type: "neutral" },
  { answer: "Ask again later.", type: "neutral" },
  { answer: "Better not tell you now.", type: "neutral" },
  { answer: "Cannot predict now.", type: "neutral" },
  { answer: "Concentrate and ask again.", type: "neutral" },
  { answer: "Don't count on it.", type: "negative" },
  { answer: "My reply is no.", type: "negative" },
  { answer: "My sources say no.", type: "negative" },
  { answer: "Outlook not so good.", type: "negative" },
  { answer: "Very doubtful. ", type: "negative" },
];

//element selection

const input = document.querySelector("input");
const button = document.querySelector(".button");
const questionInputContainer = document.querySelector(
  ".question__input__container"
);
const answerContainer = document.querySelector(".wrapper");
const text = document.querySelector(".answer__text");
const button2 = document.querySelector(".button2");
const answersImage = document.querySelector("#answers");
const reloadButton = document.querySelector("#reload");
const errorMsg = document.querySelector(".error__msg");
const lable = document.querySelector(".lable");
const answerType = document.querySelector(".answer__type");
const questionDisplay = document.querySelector(".question__display");

//create element

const h4 = document.createElement("h4");
text.appendChild(h4);

// functions

let randomNum;
const generateRandomAnswer = () => {
  randomNum = Math.floor(Math.random() * answersList.length);
  return answersList[randomNum];
};

function reload() {
  location.reload();
}

//event listners

button.addEventListener("click", () => {
  if (!input.value) {
    errorMsg.innerHTML = "Please ask a question";
  } else {
    errorMsg.innerHTML = "";
    answersImage.classList.add("answers");
    questionInputContainer.style.display = "none";
    answerContainer.style.width = "100%";
    questionDisplay.innerHTML = input.value;
    reloadButton.style.display = "block";
    setTimeout(() => {
      h4.classList.add("fade-in-image");
      randomAnswer = generateRandomAnswer();
      h4.innerHTML = randomAnswer.answer;
      answerType.innerHTML = `Answer Type: ${randomAnswer.type}`;
    }, 2000);
  }
});

reloadButton.addEventListener("click", reload);
