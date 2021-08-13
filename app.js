for (let i = 0; i < 42; i++) {
  const btn = document.createElement("button");
  btn.innerText = "Click Me";
  document.body.appendChild(btn);
}

for (let i = 0; i < 5; i++) {
  const p = document.createElement("p");
  p.innerText = "Click To Change My Color ..";
  document.body.appendChild(p);
}

const makeRandomColors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", colorize);
}

const ps = document.querySelectorAll("p");
for (let p of ps) {
  p.addEventListener("click", colorize);
}

function colorize () {
  this.style.backgroundColor = makeRandomColors();
  this.style.color = makeRandomColors();
};
