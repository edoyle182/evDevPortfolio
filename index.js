// hook HTML project elements to JS
const projGif = document.getElementById('projGif');
const projTitle = document.getElementById('projTitle');
const projDescription = document.getElementById('projDescription');
const liveProjLink = document.getElementById('liveProjLink');
const gitHubRepoLink = document.getElementById('gitHubRepoLink');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Project Array(s)
const projectArray = [
  {
    gif: 'resources/LOTRquiz.gif',
    alt: 'lord of the rings quiz app gif',
    title: 'Lord of the Rings Quiz App',
    description: "A quiz application that tests your knowledge of Tolkien's LOTR trilogy. Includes score-tracking, correct/incorrect answer presentation after each answer submission, as well as a final results and restart quiz page.",
    liveLink: 'https://edoyle182.github.io/lotr_quiz_app/',
    repoLink: 'https://github.com/edoyle182/lotr_quiz_app'
  },
  {
    gif: 'resources/natParks.gif',
    alt: 'Nationl Parks Vacation App gif',
    title: 'National Parks Vacation App',
    description: "A National Parks Vacation App.",
    liveLink: 'https://edoyle182.github.io/nationalParksVacationApp/',
    repoLink: 'https://github.com/edoyle182/nationalParksVacationApp/'
  },
];

let startingIndex = 0;

function projectRender(object) {
  projGif.src = object.gif;
  projGif.alt = object.alt;
  projTitle.innerText = object.title;
  projDescription.innerText = object.description;
  liveProjLink.href = object.liveLink;
  gitHubRepoLink.href = object.repoLink;
}
projectRender(projectArray[startingIndex]);

function leftArrowClick() {
  console.log('left');
  if (startingIndex === 0) {
    startingIndex = projectArray.length - 1;
  } else {
    startingIndex -= 1;
  };
  projectRender(projectArray[startingIndex]);
}

function rightArrowClick() {
  console.log('right');
  if (startingIndex === projectArray.length -1) {
    startingIndex = 0;
  } else {
    startingIndex += 1;
  };
  projectRender(projectArray[startingIndex]);
}

leftArrow.addEventListener('click', leftArrowClick);
rightArrow.addEventListener('click', rightArrowClick);




