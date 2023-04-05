// DOM selectors

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const board = document.querySelector(".board");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
const cards = document.querySelectorAll(".card");

let playerLives = 6;

// Link Text
playerLivesCount.textContent = playerLives;

//Generate the data

const getData = () => [
  { imgSrc: "images/Dobby.png", name: "dobby" },
  { imgSrc: "images/Girl.png", name: "girl" },
  { imgSrc: "images/Glasses.png", name: "glasses" },
  { imgSrc: "images/Hagrid.png", name: "hagrid" },
  { imgSrc: "images/Harry.png", name: "harry" },
  { imgSrc: "images/Hat.webp", name: "hat" },
  { imgSrc: "images/Hermione.png", name: "hermione" },
  { imgSrc: "images/Luna.jpeg", name: "luna" },
  { imgSrc: "images/Dobby.png", name: "dobby" },
  { imgSrc: "images/Girl.png", name: "girl" },
  { imgSrc: "images/Glasses.png", name: "glasses" },
  { imgSrc: "images/Hagrid.png", name: "hagrid" },
  { imgSrc: "images/Harry.png", name: "harry" },
  { imgSrc: "images/Hat.webp", name: "hat" },
  { imgSrc: "images/Hermione.png", name: "hermione" },
  { imgSrc: "images/Luna.jpeg", name: "luna" },
];

//Randmize
const randomize = () => {
  const cardData = getData();
  //Randomize an array
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Card Generator Function

const cardGenerator = () => {
  const cardData = randomize();
  //If you are generating card make sure the stats board is hidden
  board.classList.add("hidden");

  // Loop through objects and generate a HTML div
  cardData.forEach((item) => {
    // TODO generate HTML div
    const card = document.createElement("div");
    const faceCard = document.createElement("img");
    const backCard = document.createElement("div");
    const questionMark = document.createElement("p");

    //Add classes
    card.classList = "card";
    faceCard.classList = "face";
    backCard.classList = "back";
    questionMark.classList = "text";

    //Attach the info to the card
    faceCard.src = item.imgSrc;
    card.setAttribute("name", item.name);
    questionMark.innerHTML = "?";

    // Append the card to the section
    section.appendChild(card);
    card.appendChild(faceCard);
    card.appendChild(backCard);
    backCard.appendChild(questionMark);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

//Check Cards if they match
const checkCards = (e) => {
  //Here the order is important every time you click a card you add a flipped class then gets added to the flippedCards array
  const clickedCard = e.target;
  // Every time you click a pic will add a class='flipped'
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCards = document.querySelectorAll(".toggleCard");
  const cards = document.querySelectorAll(".card");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("It's a match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        // Once they match I want to make it unclickable
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        // This will delay the flipping of the second card
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      setTimeout(() => {
        if (playerLives === 0) {
          cards.forEach((card) => {
            console.log(card);
            card.classList.add("hidden");
          });
          const message = "You lost! 😬 Try again";
          board.classList.remove("hidden");
          showBoard(message, playerLives);
        }
      }, 1000);
    }
  }
  //Check if we won the game
  setTimeout(() => {
    const message = "Congrats 🥳 You won!";
    if (toggleCards.length === 16) {
      // restart("You won 🤩 🥳")
      toggleCards.forEach((card) => {
        card.classList.add("hidden");
      });
      board.classList.remove("hidden");
      showBoard(message, playerLives);
    }
  }, 2000);
};

// Restart the game
const restart = () => {
  // Randomize
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";

  cardData.forEach((card, index) => {
    cards[index].classList.remove("toggleCard");
    //  and then delay it by a second
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = card.imgSrc;
      cards[index].setAttribute("name", card.name);
      // section.style.pointerEvents = 'all'
    }, 1000);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
};

const showBoard = (message, lives) => {
  //Add the stats to the board
  const text = document.getElementById("board-title");
  const stats = document.getElementById("board-message");

  text.innerHTML = `${message}`;
  stats.innerHTML = `You had ${lives} ${lives !== 1 ? "lives" : "life"} left`;
};

const onRestart = () => {
  const cards = document.querySelectorAll(".card");
  board.classList.add("hidden");
  cards.forEach((card) => {
    card.classList.remove("hidden");
  });
  restart();
};

start.onclick = onRestart;
reset.onclick = onRestart;

cardGenerator();

