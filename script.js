// Multi-page flow
let current = 1;
document.getElementById("page1").classList.add("active");

function go(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");
}

// Countdown Timer - Days, Hours, Minutes, Seconds
const birthday = new Date("2026-02-14T00:00:00").getTime(); // <-- replace with her birthday YYYY-MM-DD

setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  if(diff <= 0){
    document.getElementById("timer").innerHTML = "🎉 ہیپی برتھ ڈے! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000*60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    `${days} دن ${hours} گھنٹے ${minutes} منٹ ${seconds} سیکنڈ باقی 💗`;
}, 1000);

// Secret Letter
function unlock() {
  const pass = document.getElementById("pass").value.trim().toLowerCase();
  if (pass === "iloveyou") { // <-- replace with your secret code
    document.getElementById("secret").innerHTML =
      "💖 تم میری زندگی کی سب سے خاص شخصیت ہو ❤️ میں تم سے ہمیشہ محبت کروں گا 💕";
    confetti(); // trigger confetti automatically
  } else {
    document.getElementById("secret").innerHTML = "❌ غلط کوڈ 😢 دوبارہ کوشش کریں!";
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
