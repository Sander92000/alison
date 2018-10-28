//Variables
document.cookie = "date=02/18/2017 18:00";



//Params
let canvas = document.getElementById("alisonCanvas");
let menu = document.getElementById("show-settings");
let redValue = document.getElementById("red");
let greenValue = document.getElementById("green");
let blueValue = document.getElementById("blue");
let next = document.getElementById("next");
let prev = document.getElementById("prev");


// Eventlistener
menu.addEventListener('click', showMenu);
redValue.addEventListener('change', changeColor);
greenValue.addEventListener('change', changeColor);
blueValue.addEventListener('change', changeColor);


// Globals
let dates = ["02/18/2017 18:00", "29/07/1986 15:00"];

function showMenu(){
	console.log("Show menu");
	let settings = document.getElementById('settings-menu');
	if(settings.style.visibility == "hidden"){
		settings.style.visibility = "visible";
	}else{
		settings.style.visibility = "hidden";
	}

	
}

function changeColor(){
	let red = redValue.value;
	let green = greenValue.value;
	let blue = blueValue.value;
	let prevColor = document.getElementById('color-prev');
	prevColor.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
	console.log(red, green, blue);
}

function nav(){
	console.log("next slide");
}