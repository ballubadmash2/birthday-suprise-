// Multi-page flow
let current = 1;
document.getElementById("page1").classList.add("active");

function go(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");
}

// Countdown Timer
const birthday = new Date("2005-02-02").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("timer").innerHTML =
    days + " days until your special day 💗";
}, 1000);

// Secret Letter
function unlock() {
  const pass = document.getElementById("pass").value;
  if (pass.toLowerCase() === "iloveyou") { // <-- Change code if you want
    document.getElementById("secret").innerHTML =
      "You are my favorite person in this world ❤️ I love you endlessly 💕";
  } else {
    document.getElementById("secret").innerHTML = "Wrong code 😢 Try again!";
  }
}

// Confetti Effect
function confetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      dy: Math.random() * 3 + 2,
      color: `hsl(${Math.random()*360}, 100%, 75%)`
    });
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.dy;
      if(p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
