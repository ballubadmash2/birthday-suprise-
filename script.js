// Show first page
document.getElementById("page1").classList.add("active");

// Navigation
function go(n){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+n).classList.add("active");
}

// Countdown to 2nd Feb 12:00 AM
const birthday=new Date("2026-02-02T00:00:00").getTime();
setInterval(()=>{
  const now=new Date().getTime();
  let diff=birthday-now;
  if(diff<=0){
    document.getElementById("timer").innerHTML="🎉 Happy Birthday! 🎉";
    return;
  }
  const totalSeconds=Math.floor(diff/1000);
  const days=Math.floor(totalSeconds/(24*60*60));
  const hours=Math.floor((totalSeconds%(24*60*60))/3600);
  const minutes=Math.floor((totalSeconds%3600)/60);
  const seconds=totalSeconds%60;
  document.getElementById("timer").innerHTML=
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left 💗`;
},1000);
