let Clock = class{

    constructor(){
        this.radius = 200;
        this.lWidth = 30;
        this.spacing = 35;
        this.startPos = -1.5708;
        this.colors = ['#FEFFFD', '#00FF0D', '#FF0079', '#0C3EE8', '#FF5000'];
        this.displayClock = true;
        this.displayText = true;
    }

    set showClock(enabled){
        this.displayClock = enabled;
    }

    set showText(enabled){
        this.displayText = enabled;
    }

    drawClock(seconds, minutes, hours, days, months){

        if (this.displayClock === true){
            //console.log(this.show);
            let time = [seconds, minutes, hours, days, months];
            let limit = [60, 60, 24, 30, 12];
            c = document.getElementById("alisonCanvas");
            ctx = c.getContext("2d");
    
            // Seconds:
            for(let i=0; i<5; i++){
                ctx.beginPath();
                ctx.arc(c.width/2, c.height/2, this.radius + (i * this.spacing), this.startPos, (2*Math.PI)*(time[i]/limit[i])+this.startPos);
                ctx.strokeStyle = this.colors[i];
                ctx.lineWidth = this.lWidth;
                ctx.stroke();
            } 
        }
    }

    drawText(seconds, minutes, hours, days, months){
        if(this.displayText === true){
            let posX = (c.width/2)-70;
            let posY = (c.height/2)+40;
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
        
    }
}