function getRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}
function getElement(id) {
  return document.getElementById(id);
}
function spin() {
  const slot1 = getElement(`slot1`);
  const slot2 = getElement(`slot2`);
  const slot3 = getElement(`slot3`);

  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const num3 = getRandomNumber();

  slot1.innerHTML = `${num1}`;
  slot2.innerHTML = `${num2}`;
  slot3.innerHTML = `${num3}`;

  if (num1 === num2 && num1 === num3) {
    playSound();
    showMessage();
    showBg();
    hideButton();
  } else {
    gameSound();
    hideMessage();
    setTimeout(() => {
      return alert("Better Luck Next Time!");
    }, 300);
  }
}
function playSound() {
  const cash = document.getElementById("cash");
  cash.play();
}
function gameSound() {
  const game = document.getElementById("game");
  game.play();
}
function showMessage() {
  const msg = document.getElementById("message");
  msg.style.display = "block";
  msg.classList.add();
}
function hideMessage() {
  const msg = document.getElementById("message");
  msg.style.display = "none";
}
function showBg() {
  const bg = document.getElementById("bg");
  bg.style.removeProperty("background-color");
  bg.classList.add();
}

function hideButton() {
  const button = document.getElementById("btn");
  button.style.display = "none";
}
