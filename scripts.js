const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

var score = 0;

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
    score = score + 1 + score * 2;
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft >= 0 && dinoTop >= 140) {
    // collision
    alert("Game Over! Your Score is: " + score);
    score = 0;
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
