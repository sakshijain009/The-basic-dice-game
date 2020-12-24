document.getElementById("button").addEventListener("click",function(){
	var random1 = Math.floor(Math.random() * 6) + 1;
	var random2 = Math.floor(Math.random() * 6) + 1;

	var diceA = "images/dice" + random1 + ".png";
	var diceB = "images/dice" + random2 + ".png";

	document.querySelector(".img1").setAttribute("src",diceA);
	document.querySelector(".img2").setAttribute("src",diceB);

	if(diceA>diceB){
		document.querySelector(".container h1").innerHTML="Player1 Wins!"
	}else if(diceA<diceB){
		document.querySelector(".container h1").innerHTML="Player2 Wins!"
	}else{
		document.querySelector(".container h1").innerHTML="Game is Draw!"
	}
});