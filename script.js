// Multi-page flow
document.getElementById("page1").classList.add("active");

function go(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");
}

// Start music on first interaction
function startMusic() {
  const music = document.getElementById("bgMusic");
  music.play().catch(()=>{});
}

// Countdown Timer - 2nd Feb 12 AM
const birthday = new Date("2026-02-02T00:00:00").getTime();

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

  document.getElementById("timer").innerHTML =
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left 💗`;
}, 1000);

// Secret Letter
function unlock() {
  const pass = document.getElementById("pass").value.trim().toLowerCase();
  const correctCode = "iloveyou"; 
  const celebration = document.getElementById("celebration");
  
  celebration.innerHTML = ""; // Clear previous

  if(pass === correctCode) {
    celebration.innerHTML = `
      <div class="balloons">🎈🎈🎈</div>
      <div class="cake">🎂</div>
      <h2>Happy Birthday My Jaan 💖</h2>
      <div class="balloons">🎈🎈🎈</div>
    `;
  } else {
    celebration.innerHTML = "❌ Wrong code 😢 Try again!";
  }
}
