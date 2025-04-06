const root = document.querySelector(":root"); //grabbing the root element
var rand = Math.floor(Math.random() * 90) + 1;
const fins = ["url( '/assets/img/shark-fin-notch.svg' )","url( '/assets/img/shark-fin-notch-reverse.svg' )"]
var fins_rand = Math.round(Math.random());
root.style.setProperty("--hrfin-position", rand + "%");
root.style.setProperty("--hrfin-content", fins[fins_rand]);