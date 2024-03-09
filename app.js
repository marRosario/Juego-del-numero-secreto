
let numeroMaximoPosible= 100;
let numeroSecreto= Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario=0;
let intentos= 1;
//let palabraIntentos= "intento";
let maximosIntentos=6;
console.log(numeroSecreto);
while(numeroUsuario != numeroSecreto){
 numeroUsuario= parseInt (prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor? `)); //parseInt: me convierte el string en number
console.log (typeof(numeroUsuario)); //typeof:le estoy pidiendo que me diga que tipo de dato es.(ver en consola)

    if(numeroUsuario==numeroSecreto){
    alert(`¡Acertaste el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos==1 ? "intento":"intentos"}!`);
     /*el signo de interrogacion se convierte en el if, y los dos puntos en else.*/

    }else{
        if(numeroUsuario>numeroSecreto){
            alert("El numero secreto es menor");
        }else{
            alert("el numero secreto es mayor");
        }
        intentos++;
        //palabraIntentos= "intentos"; quito esta variable y la de la linea 5, para agregar codigo ternario en la 12.(agrego codigo js dentro del if) 
        if(intentos >maximosIntentos){
        alert(`Superaste la cantidad de ${maximosIntentos} intentos`);
         break;
        }
    }
}