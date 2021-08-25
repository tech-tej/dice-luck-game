var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage2 = "dice" + randomNumber2 +".png"
var randomdiceimage1 = "dice" + randomNumber1 + ".png";

var randomimagesource1 = "images/" + randomdiceimage1;
var randomimagesource2 = "images/" + randomdiceimage2; 

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomimagesource1);
image2.setAttribute("src", randomimagesource2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "🏆 Player 1 wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h2").innerHTML = "🏆 Player 2 wins";
}
else{
    document.querySelector("h2").innerHTML = "draw";
}