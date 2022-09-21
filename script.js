//selectores
let palabras= ["ALURA" , "ORACLE" , "ONE" , "HTML" , "CSS" , "ZAPATO", "HUEVO", "VERANO" , "AMARILLO"];
let palabraSecreta= "";
let inputTexto = document.querySelector("#input-texto");
let letter = '';
let campoPalabra= document.querySelector('.palabra-secreta');
let teclado = document.querySelector('#teclado');

let letraErronea = [];
let letrasAcertadas = [];
let oportunidades = 9;
let intentos = 0;
let codigoPalNueva = '';

function escogerPalabra(){
    let palabra= palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta= palabra;

    console.log(palabras);
    console.log(palabraSecreta);
    campoPalabra = palabraSecreta;
}




//iniciar juego

function btnIniciar(){
    document.getElementById("botones").style.display = "none";
    document.getElementById("nuevaPalabra").style.display = "none";
    document.getElementById("iniciar").style.display = "block";
    document.querySelector("canvas").style.display = "block";
    document.addEventListener('keydown', itIsALetter);

    if (scrWidth<1590){
        document.getElementById('teclado').style.display = 'block';
        document.getElementById('teclado').style.visibility = 'visible';
        sacarTeclado();
    }

    if (scrWidth<480){
        limpiarPantalla();
        escogerPalabra();
        dibujarCanvasMov();
        dibujarLineaMov();
        dibLetrasMov();
        limpiarVariables();
    }
    else{
        limpiarPantalla();
        escogerPalabra();
        dibujarCanvas();
        dibujarLinea();
        dibLetras();
        limpiarVariables();
    }
}

function sacarTeclado(){
    teclado.focus();
}

//capturar tecla

function itIsALetter (event){
    if (scrWidth<1590 && teclado.length > 0){
        let valorInput = teclado.value;
        valorInput = valorInput.toUpperCase();
        let codigoMov = valorInput.charCodeAt(valorInput.length -1);
        console.log(codigoMov)
        letter = String.fromCharCode(codigoMov);
        console.log(letter);
        if (codigoMov >=65 && codigoMov <= 90){
            verificarLetra();
        }

        else {
            console.log('no es una letra');
        }
    }

    else{
        let codigo = event.which;
        letter = String.fromCharCode(codigo);
        console.log(letter);
        if (codigo >=65 && codigo <= 90){
            verificarLetra();
        }

        else {
            console.log('no es una letra');
        }
    }
    return letter;

}

let coincide = false;
var coincidencias = [];
let puedeJugar = true;

function verificarLetra(){
    if (puedeJugar == true){
        for (let i = 0; i < palabraSecreta.length; i++){
            let letraSecreta = palabraSecreta[i];
            let contador = i;
            let erroneaRep = false;
            let coincideRep = false;
            if (letter == letraSecreta){
                if (coincidencias.length > 0){
                    for (let a = 0; a < coincidencias.length; a++){
                        if (contador == coincidencias[a]){
                            console.log('letra repetida');
                            coincideRep = true;
                            coincide = true;
                        } 
                    }
                    if (coincideRep == false) {
                        console.log('coincide')
                        coincidencias.push(contador);
                        console.log(coincidencias);
                        letrasAcertadas.push(letter);
                        if (scrWidth<480){
                            dibLetrasMov(letter, contador);
                        }
                        else{
                            dibLetras(letter, contador);
                        }         
                        coincide = true;
                    }
                }
                else {
                    console.log('coincide')
                    coincidencias.push(contador);
                    console.log(coincidencias);
                    letrasAcertadas.push(letter);
                    if (scrWidth<480){
                        dibLetrasMov(letter, contador);
                    }
                    else{
                        dibLetras(letter, contador);
                    }   
                    coincide = true;
                }    
            }
            else if (i == palabraSecreta.length -1 && coincide == false && letter != letraSecreta){  
                if (letraErronea.length > 0){
                    for (let a=0; a < letraErronea.length; a++){
                        if (letter == letraErronea[a]) {
                            console.log('letra repetida');
                            erroneaRep = true;
                        }
                    }
                    if (erroneaRep == false){
                        console.log('no coincide');
                        letraErronea.push(letter);
                        console.log(letraErronea);
                        intentos++;
                        console.log('intentos: ', intentos)
                        if (scrWidth<480){
                            wrongLettersMov(letter);
                            horcaMov();
                        }
                        else{
                            wrongLetters(letter);
                            horca();
                        } 
                        erroneaRep = false;  
                    }
                }
                else {
                    console.log('no coincide');
                    letraErronea.push(letter);
                    console.log(letraErronea)
                    intentos++;
                    console.log('intentos: ', intentos)
                    if (scrWidth<480){
                        wrongLettersMov(letter);
                        horcaMov();
                    }
                    else{
                        wrongLetters(letter);
                        horca();
                    } 
                }
                
            }
            else if (i < palabraSecreta.length && coincide == true && i > palabraSecreta.length - 2){ 
                coincide = false
            }

            if (intentos == oportunidades){
                console.log('perdiste');
                if (scrWidth<480){
                    pincel.font="bold 30px Rubik, serif";
                    pincel.fillStyle = "#ff0000";
                    pincel.fillText('Fin del juego!', scrWidth/6, 50, 300);
                }
                else{
                    pincel.font="bold 30px Rubik, serif";
                    pincel.fillStyle = "#ff0000";
                    pincel.fillText('Fin del juego!', scrWidth/2+160, 400, 300);
                }                
                puedeJugar = false;
            }

            if (coincidencias.length == palabraSecreta.length){
                console.log('ganaste');
                if (scrWidth<480){
                    pincel.font="bold 25px Rubik, serif";
                    pincel.fillStyle = "#5CFF5C";
                    pincel.fillText('Ganaste,', scrWidth/6, 40, 300);
                    pincel.fillText('Felicidades!', scrWidth/6, 65, 300);
                }

                else{
                    pincel.font="bold 30px Rubik, serif";
                    pincel.fillStyle = "#5CFF5C";
                    pincel.fillText('Ganaste,', scrWidth/2+180, 400, 300);
                    pincel.fillText('Felicidades!', scrWidth/2+180, 425, 300);
                }
                puedeJugar = false;
                coincidencias = [];
                letrasAcertadas = [];
            }
        }
    }
    else{
        console.log(coincidencias);
    }
}


function btnDesistir(){
    document.getElementById("botones").style.display = "block";
    document.getElementById("iniciar").style.display = "none";
    document.querySelector("canvas").style.display = "none";
    puedeJugar = false;
}

function btnNuevoJuego(){
    btnIniciar();
}

//Nueva Palabra

function btnAgregar(){
    document.getElementById("botones").style.display = "none";
    document.getElementById("nuevaPalabra").style.display = "block";
    inputTexto.value = '';
    inputTexto.focus();
    
}

function btnCancelar(){
    document.getElementById("botones").style.display = "block";
    document.getElementById("nuevaPalabra").style.display = "none";
}
;
function btnGuardar(){
    let palabraNueva = inputTexto.value
    let valid = false;
    let existe = false;
    palabraNueva = palabraNueva.toUpperCase();
    for (i=0; i < palabraNueva.length; i++){ 
        let codigo = parseInt(palabraNueva.charCodeAt(i));
        if (palabraNueva.length > 8){
            valid = true; 
            alert('Máx. 8 letras, sin espacios ni caracteres especiales')
            break;
        }
        else if (codigo < 65 || codigo > 90){
            valid = true; 
            alert('Máx. 8 letras, sin espacios ni caracteres especiales')
        }
    }
    if (valid == false){
        for (let i = 0; i < palabras.length; i++){
            if (palabraNueva == palabras[i]){
                alert('La palabra ya existe.');
                existe = true;
                inputTexto.value = '';
            }
        }
        if (existe == false){
            palabras.push(palabraNueva);
            btnIniciar();
        }
    }
    
}


//limpiar variables
function limpiarVariables (){
    coincidencias = [];
    letraErronea = [];
    intentos = 0;
    puedeJugar = true;
    teclado.value = '';
}

function limpiarPantalla(){
    pincel.clearRect(0,0,pantalla.width, pantalla.height);
}
