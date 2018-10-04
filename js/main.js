// Eventlistener
document.getElementById('ctr-menu').addEventListener('click', displayMenu);
document.getElementById('color1').addEventListener('change', changeColor);
document.getElementById('color2').addEventListener('change', changeColor);
document.getElementById('color3').addEventListener('change', changeColor);

window.onload = main;

function main(){
	var startDate = new Date("02/18/2017 18:00");
	var endDate = new Date();

	var passedTime = endDate.getTime() - startDate.getTime();

	years = transformMS(passedTime).years;
	months = transformMS(passedTime).months;
	days = transformMS(passedTime).days;
	hours = transformMS(passedTime).hours;
	minutes = transformMS(passedTime).minutes;
	seconds = transformMS(passedTime).seconds;

    document.getElementById("content").innerHTML = "Années: " + years + "<br> Mois: " + months + "<br> Jours: " + days + " <br>Heures: " + hours + " <br>Minutes: " + minutes + " <br>Secondes: " + seconds ;

    setInterval(main, 1000);
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

function displayMenu(){
	let state = document.getElementById('menu').style.visibility;

	if (state == 'hidden'){
		document.getElementById('menu').style.visibility = 'visible';
	} else {
		document.getElementById('menu').style.visibility = 'hidden';
	}
}

function changeColor(){
	let color;
	let c1 = document.getElementById('color1').value;
	let c2 = document.getElementById('color2').value;
	let c3 = document.getElementById('color3').value;

	color = "rgb(" + c1 + "," + c2 + "," + c3 + ")";

	document.getElementById('content').style.color = color;
}