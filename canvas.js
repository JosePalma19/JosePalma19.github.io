var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
let scrWidth = screen.width;

function dibujarCanvas(){
    pincel.lineWidth = 8;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "#8A3871";


        pincel.fillRect(0,0,1200,860);
        pincel.beginPath();
        pincel.moveTo(scrWidth/2-375/2,450);
        pincel.lineTo(scrWidth/2+375/2,450);
        pincel.stroke();
        pincel.closePath();
}

function dibujarLinea(){
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "#8A3871";

    let ancho = 550/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        pincel.moveTo(scrWidth/2-600/2+30 + (ancho*i), 590);
        pincel.lineTo(scrWidth/2-600/2+80 + (ancho*i), 590);
    }
    pincel.stroke();
    pincel.closePath();
}

function dibLetras (letras, x){
    pincel.font="bold 60px Rubik, serif";
    pincel.fillStyle = "#0A3871";
    let ancho = 550/palabraSecreta.length;
    for (let i = 0; i < coincidencias.length; i++){
        pincel.fillText(letras, scrWidth/2-600/2+30 + (ancho*x), 580, 600)
    }
}

function wrongLetters (letra){
    pincel.font="bold 40px Rubik, serif";
    pincel.fillStyle = "#aa0033";
    let ancho = 400/oportunidades;
    pincel.fillText(letra, scrWidth/2-600/2+20 + (ancho*intentos), 650);
}

function horca(){
    switch (intentos){
        case 1:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/2-400/2+25, 450);
            pincel.lineTo(scrWidth/2-400/2+25, 150);
            pincel.stroke();
            pincel.closePath();
            break;
        
        case 2:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/2-400/2+25, 150);
            pincel.lineTo(scrWidth/2-400/2+205, 150);
            pincel.stroke();
            pincel.closePath();
            break;
        
        case 3:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/2-400/2+205, 150);
            pincel.lineTo(scrWidth/2-400/2+205, 200);
            pincel.stroke();
            pincel.closePath();
            break;

        case 4:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.strokeStyle = "#8A3871";
            pincel.beginPath();
            pincel.arc(scrWidth/2-400/2+205, 230, 30, 0, 2*Math.PI);
            pincel.fillStyle = "#F3F5F6";
            pincel.stroke();
            pincel.closePath();
            break;
        
        case 5:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/2-400/2+205, 260);
            pincel.lineTo(scrWidth/2-400/2+205, 350);
            pincel.stroke();
            pincel.closePath();
            break;

        case 6:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/2-400/2+205, 275);
            pincel.lineTo(scrWidth/2-400/2+180, 310);
            pincel.stroke();
            pincel.closePath();
            break;

        case 7:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/2-400/2+205, 275);
            pincel.lineTo(scrWidth/2-400/2+230, 310);
            pincel.stroke();
            pincel.closePath();
            break;

        case 8:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/2-400/2+205, 350);
            pincel.lineTo(scrWidth/2-400/2+180, 385);
            pincel.stroke();
            pincel.closePath();
            break;

        case 9:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/2-400/2+205, 350);
            pincel.lineTo(scrWidth/2-400/2+230, 385);
            pincel.stroke();
            pincel.closePath();
            break;

        default:

    }
}

//canvas version mobileWidth < 480

function dibujarCanvasMov(){
    pincel.lineWidth = 8;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "#8A3871";


        pincel.fillRect(0,0,scrWidth,860);
        pincel.beginPath();
        pincel.moveTo(scrWidth/6,300);
        pincel.lineTo(scrWidth/1.17,300);
        pincel.stroke();
        pincel.closePath();
}

function dibujarLineaMov(){
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "#8A3871";

    let ancho = scrWidth/palabraSecreta.length-5;
    for (let i = 0; i < palabraSecreta.length; i++){
        pincel.moveTo(scrWidth/9 + (ancho*i), 340);
        pincel.lineTo(scrWidth/9+25 + (ancho*i), 340);
    }
    pincel.stroke();
    pincel.closePath();
}

function dibLetrasMov (letras, x){
    pincel.font="bold 30px Rubik, serif";
    pincel.fillStyle = "#0A3871";
    let ancho = scrWidth/palabraSecreta.length-5;
    for (let i = 0; i < coincidencias.length; i++){
        pincel.fillText(letras, scrWidth/9 + (ancho*x), 330, 100)
    }
}

function wrongLettersMov (letra){
    pincel.font="bold 20px Rubik, serif";
    pincel.fillStyle = "#aa0033";
    let ancho = scrWidth/oportunidades-5;
    pincel.fillText(letra, ancho*intentos, 370);
}

function horcaMov(){
    switch (intentos){
        case 1:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/6+10, 300);
            pincel.lineTo(scrWidth/6+10, 80);
            pincel.stroke();
            pincel.closePath();
            break;
        
        case 2:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/6+10, 80);
            pincel.lineTo(scrWidth/6+170, 80);
            pincel.stroke();
            pincel.closePath();
            break;
        
        case 3:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/6+170, 80);
            pincel.lineTo(scrWidth/6+170, 120);
            pincel.stroke();
            pincel.closePath();
            break;

        case 4:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.strokeStyle = "#8A3871";
            pincel.beginPath();
            pincel.arc(scrWidth/6+170, 140, 20, 0, 2*Math.PI);
            pincel.fillStyle = "#F3F5F6";
            pincel.stroke();
            pincel.closePath();
            break;
        
        case 5:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/6+170, 160);
            pincel.lineTo(scrWidth/6+170, 240);
            pincel.stroke();
            pincel.closePath();
            break;

        case 6:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/6+170, 170);
            pincel.lineTo(scrWidth/6+145, 195);
            pincel.stroke();
            pincel.closePath();
            break;

        case 7:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/6+170, 170);
            pincel.lineTo(scrWidth/6+195, 195);
            pincel.stroke();
            pincel.closePath();
            break;

        case 8:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/6+170, 240);
            pincel.lineTo(scrWidth/6+145, 275);
            pincel.stroke();
            pincel.closePath();
            break;

        case 9:
            pincel.lineWidth = 6;
            pincel.lineCap = "round";
            pincel.lineJoin = "round";
            pincel.fillStyle = "#F3F5F6";
            pincel.strokeStyle = "#8A3871";
            pincel.moveTo(scrWidth/6+170, 240);
            pincel.lineTo(scrWidth/6+195, 275);
            pincel.stroke();
            pincel.closePath();
            
            break;

        default:

    }
}




