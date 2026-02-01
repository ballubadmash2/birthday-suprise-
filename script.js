// Multi-page flow
document.getElementById("page1").classList.add("active");

function go(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");
}

// Countdown Timer - Ticking to 2nd Feb 12 PM
const birthday = new Date("2026-02-02T12:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  if(diff <= 0){
    document.getElementById("timer").innerHTML = "🎉 Happy Birthday! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000*60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Display in English labels
  document.getElementById("timer").innerHTML =
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left 💗`;
}, 1000);

// Secret Letter
function unlock() {
  const pass = document.getElementById("pass").value.trim().toLowerCase();
  const correctCode = "iloveyou"; // <-- change to your secret code
  if(pass === correctCode) {
    document.getElementById("secret").innerHTML = 
      "💖 You are my favorite person in this world ❤️ I love you endlessly 💕";
    confetti();
  } else {
    document.getElementById("secret").innerHTML = "❌ Wrong code 😢 Try again!";
  }
}

// Confetti Effect
function confetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];
  for (let i=0; i<150; i++) {
    pieces.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*6+2,
      dy: Math.random()*3+2,
      color: `hsl(${Math.random()*360},100%,75%)`
    });
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.dy;
      if(p.y>canvas.height) p.y=0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// Auto-play music fix
window.addEventListener('load', () => {
  const music = document.getElementById("bgMusic");
  music.play().catch(()=>{}); 
});
