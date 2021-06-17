
var num1 = Math.floor(Math.random() * 6) + 1;

var img = "dice" + num1 + ".png"; 

var path = "images/" + img; 

var image1 = document.querySelector(".img1");

image1.setAttribute("src", path);


var num2 = Math.floor(Math.random() * 6) + 1;

var path2 = "images/dice" + num2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", path2);



if (num1 > num2) {
  document.querySelector("h1").innerHTML = "Whoo! Play 1 Wins!";
}
else if (num2 > num1) {
  document.querySelector("h1").innerHTML = "Whoo !Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
