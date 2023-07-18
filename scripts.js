const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

// let value = setInterval(function () {
//   console.log("score");
// }, 100);

let score = 0;

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
    score += 2;
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  // window.console.log(dinoTop);

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  // window.console.log(cactusLeft);

  // detect collision
  if (cactusLeft <= 65 && cactusLeft > -20 && dinoTop >= 0) {
    // collision
    // window.console.log("collision");
    alert("Game Over! Your Score is: " + score);
    score = 0;
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
