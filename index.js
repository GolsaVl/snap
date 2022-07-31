let feature = document.getElementById("featur");
let company = document.getElementById("compani");
let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let down1 = document.getElementById("down1");
let down2 = document.getElementById("down2");
let menu = document.getElementById("menu-icon");
let close = document.getElementById("close-icon");
let topp = document.getElementById("top");
let pic = document.getElementById("hero-mobile-img");
let boddy = document.body;

feature.addEventListener("click", function() {
  if (arrow1.alt == "arrow-down") {
    arrow1.src ="images/icon-arrow-up.svg";
    arrow1.alt ="arrow-up";
    down1.style.display = "block";
  } else {
    arrow1.src ="images/icon-arrow-down.svg";
    arrow1.alt ="arrow-down";
    down1.style.display = "none";}
});

company.addEventListener("click", function() {
  if (arrow2.alt == "arrow-down") {
    arrow2.src ="images/icon-arrow-up.svg";
    arrow2.alt ="arrow-up";
    down2.style.display = "block";
  } else {
    arrow2.src ="images/icon-arrow-down.svg";
    arrow2.alt ="arrow-down";
    down2.style.display = "none";}
});

menu.addEventListener("click", function() {
  topp.style.display = "block";
  pic.src = "images/image-hero-darken-mobile.jpg";
  boddy.style.backgroundColor = "rgba(80,80,80,255)";
  topp.style.backgroundColor = "hsl(0, 0%, 98%)";
});

close.addEventListener("click", function() {
  topp.style.display = "none";
  pic.src = "images/image-hero-mobile.png";
  boddy.style.backgroundColor = "hsl(0, 0%, 98%)";
  if (arrow1.alt == "arrow-up") {
    arrow1.src ="images/icon-arrow-down.svg";
    arrow1.alt ="arrow-down";
    down1.style.display = "none";}
  if (arrow2.alt == "arrow-up") {
    arrow2.src ="images/icon-arrow-down.svg";
    arrow2.alt ="arrow-down";
    down2.style.display = "none";}
});
