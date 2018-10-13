let c = document.getElementById('alisonCanvas');
let ctx = c.getContext("2d");

// Position variables
c.width = window.innerWidth;
c.height = window.innerHeight;

// Time variables
let years = 0;
let months = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

// Color variables
let colors = ['#FEFFFD','#00FF0D','#FF0079','#0C3EE8','#FF5000'];
let white = '#FEFFFD';
let green = '#00FF0D';
let pink = '#FF0079';
let blue = '#0C3EE8';
let orange = '#FF5000';


let startDate = new Date("02/18/2017 18:00");

setup();

function setup(){
    
    //Set background
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, c.width, c.height);

    // Call draw function
    setInterval(draw, 1000);
}

function draw(){
    //Erase canvas
    ctx.clearRect(0,0, c.width, c.height);

    updateTime();
    displayText();
    displayClock();
}

function displayText(){
    posX = (c.width/2)-70;
    posY = (c.height/2)+40;
    //Print text
    ctx.font = "40px Reenie Beanie";
    ctx.fillStyle = white;
    ctx.fillText("Années: " + years, posX, posY-120);
    ctx.fillText("Mois: " + months, posX, posY-80);
    ctx.fillText("Jours: " + days, posX, posY-40);
    ctx.fillText("Heures: " + hours, posX, posY);
    ctx.fillText("Minutes: " + minutes, posX, posY+40);
    ctx.fillText("Secondes: " + seconds, posX, posY+80);
}

function displayClock(){
    let radius = 200;
    let lWidth = 30;
    let spacing = 35;
    let startPos = -1.5708;

    //draw circle
    //for (i=0; i<=5; i++){
    //    ctx.beginPath();
    //    ctx.arc(c.width/2, c.height/2, 200, startPos, (2*Math.PI)*(seconds/60));
    //    ctx.strokeStyle = colors[i];
    //    ctx.lineWidth = lWidth;
    //    ctx.stroke();
    //}
    // Seconds:
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, startPos, (2*Math.PI)*(seconds/60)+startPos);
    ctx.strokeStyle = white;
    ctx.lineWidth = lWidth;
    ctx.stroke();
    // Minutes:
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 200 + spacing, startPos, (2*Math.PI)*(minutes/60)+startPos);
    ctx.strokeStyle = green;
    ctx.lineWidth = lWidth;
    ctx.stroke();
    // Hours:
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 200 + (2 * spacing), startPos, (2*Math.PI)*(hours/24)+startPos);
    ctx.strokeStyle = pink;
    ctx.lineWidth = lWidth;
    ctx.stroke();
    // Days:
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 200 + (3 * spacing), startPos, (2*Math.PI)*(days/30)+startPos);
    ctx.strokeStyle = blue;
    ctx.lineWidth = lWidth;
    ctx.stroke();
    // Months:
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 200 + (4 * spacing), startPos, (2*Math.PI)* (months/12)+startPos);
    ctx.strokeStyle = orange;
    ctx.lineWidth = lWidth;
    ctx.stroke();
    // Years:
    //ctx.beginPath();
    //ctx.arc(c.width/2, c.height/2, 200 + (5 * spacing), startPos , (2*Math.PI)*(hours/24));
    //ctx.strokeStyle = blue;
    //ctx.lineWidth = lWidth;
    //ctx.stroke();
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
