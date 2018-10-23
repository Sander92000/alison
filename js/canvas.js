// Params
let enableClock = document.getElementById("showClock");
let enableText = document.getElementById("showTime");

// Create clock object
let clock = new Clock();

// Eventlisteners
enableClock.addEventListener("change", showClock);
enableText.addEventListener("change", showText);

let c = document.getElementById('alisonCanvas');
let ctx = c.getContext("2d");

// Position variables
c.width = 1152;
c.height = window.innerHeight;

// Colors
let white = '#FEFFFD';

// Time variables
let years = 0;
let months = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

let startDate = new Date("02/18/2017 18:00");

setup();

function setup(){
    
    //Set background    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, c.width, c.height);

    // Call draw function
    setInterval(draw, 10);
}

function draw(){
    //Erase canvas
    ctx.clearRect(0,0, c.width, c.height);

    updateTime();
    clock.drawText(seconds, minutes, hours, days, months);
    clock.drawClock(seconds, minutes, hours, days, months);
}

function updateTime(){
    let startDate = new Date("02/18/2017 18:00");
	let endDate = new Date();

    let passedTime = endDate.getTime() - startDate.getTime();
    
    years = transformMS(passedTime).years;
	months = transformMS(passedTime).months;
	days = transformMS(passedTime).days;
	hours = transformMS(passedTime).hours;
	minutes = transformMS(passedTime).minutes;
    seconds = transformMS(passedTime).seconds;
    
}

function transformMS(milliseconds){
	seconds = Math.floor(milliseconds / 1000);
	minutes = Math.floor(seconds / 60);
	seconds = seconds % 60;
	hours = Math.floor(minutes / 60)
	minutes = minutes % 60;
	days = Math.floor(hours / 24);
	hours = hours % 24;
	months = Math.floor(days / 30);
	days = days % 30;
	years = Math.floor(months / 12);
	months = months % 12;
	
	return{
		years: years,
		months: months, 
		days: days, 
		hours: hours, 
		minutes: minutes, 
		seconds: seconds
	}
}

function showClock(){
	clock.showClock = enableClock.checked;
}

function showText(){
	clock.showText = enableText.checked;
}
