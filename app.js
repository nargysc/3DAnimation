const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const coffee = document.querySelector('.coffee img');
const purchase = document.querySelector('.purchase button');
const desc = document.querySelectorAll(".info");
const grindtype = document.querySelector('.grindtype')
//moving animation 
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  coffee.style.transform = "translateZ(150px) rotateZ(-360deg)";
  desc.style.transform = "translateZ(125px)";
  grindtype.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.2s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  coffee.style.transform = "translateZ(0px) rotateZ(0deg)";
  desc.style.transform = "translateZ(0px)";
  grindtype.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
  //popout