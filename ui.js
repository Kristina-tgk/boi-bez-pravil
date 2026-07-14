function updateUI() {
  document.getElementById("name1").textContent = fighter1.name;
  document.getElementById("name2").textContent = fighter2.name;

  document.getElementById("hp1text").textContent = "❤️ " + fighter1.hp;
  document.getElementById("hp2text").textContent = "❤️ " + fighter2.hp;

  document.getElementById("bar1").style.width = fighter1.hp + "%";
  document.getElementById("bar2").style.width = fighter2.hp + "%";
}
