// variables 
//constantes
// condicional   
//ciclos
// funciones

// ---------------Variables y constantes

// Consulta inicial
const nombre = prompt("Cual es tu nombre?");


// variable de jugador
let vida= 100;
let mana= 100;
let fuerza= 100;
let botellasVida = 1;
let botellasMana = 1;

// variables del juego
let victoras = 0; // contador de victorias
let pelear = true; // Es la intencion del jugador de seguir peleando.

// variables del oponente. 

let vidaEnemy = 40;
let fuerzaEnemy =15;


//---- selector de boton de Juego

const btnJugar = document.querySelector('#btnJugar')
btnJugar.addEventListener("click", juego);


// --------------------------- Funciones:

function saludar(name){
    console.log(`Bienvenido gran ${name}`)
    console.log(`El objetivo del juego es ganar la mayor cantidad de duelos antes de que tu vida sea inferiro a 0.
    Descuida, el daño en este juego no afecta a tu vida real `)
 
}

function reglas(){
    accionesDisponibles();
    console.log("Recuerda que solo debes seleccionar el NÚMERO")
    console.log(`Al vencer a un oponente, obtendras un premio y automaticamente te enfrentaras a otro.
                Cuando estes lito presiona Comenzar el Botón de Comenzar a Jugar`);
}

// Esta funcion tiene el objetivo de mostrar al jugador cual es su estado
function actualizar(life, magia, strong, btLif, btMan, lifeEnemy ){
    console.log(`Tu estado:
    Vida: ${life}
    Mana: ${magia}
    Fuerza: ${strong}
    Botellas de Vida: ${btLif}
    Botellas de Mana: ${btMan}
    A tu enemigo le resta ${lifeEnemy} de vida.
    
    `)

}



function accionesDisponibles(){
    console.log(`En cada turno podras realizar una de las siguientes acciones:
    1-Usar un hechizo de Fuego
    2-Curarte con hechizo de Agua
    3 Atacar hechizo de Tierra
    4-Consumir una botella de Vida: Recupera 50pts de vida.
    5-Consumir una botella de Mana: Recupera 50pts de mana.
    6-Escapar: Podes simplemente irte corriendo.
        `) 
}

function acciones(){
    let accion = parseInt(prompt(`Que accion vas a hacer?
    1-Usar un hechizo de Fuego
    2-Curarte con hechizo de Agua
    3 Atacar hechizo de Tierra
    4-Consumir una botella de Vida: Recupera 50pts de vida.
    5-Consumir una botella de Mana: Recupera 50pts de mana.
    6-Escapar: Podes simplemente irte corriendo.
    `))
    switch (accion){
        case 1:
            magiaDeFuego()
            break;
        case 2:
            magiaDeAgua()
            break;
        case 3:
            magiaDeTierra()
            break;
        case 4:
            consumirBotellaVida()
        break;
        case 5:
            consumirBotellaMana()
            break;
         case 6:
            escapar()
            break;
        default:
           console.log("Esa no es una opcion válida. Vuelve a elegir")
           acciones();

}

}




// Funciones de magias (acciones del jugador)
//Notar que vuelvo a llamar a la funcion acciones, porque de lo contrario, el enemigo pega ante una accion invalida

function magiaDeFuego(){
    if (suficienteMana(15)){
        mana-=15;
        vidaEnemy-=30;
    }   else{
        console.log("No tenes suficiente mana...")
        acciones()

    } 

    console.log("Usaste un poderoso hechizo de fuego que dañó a tu enemigo, pero a costa de mucha mana.")

    
}

function magiaDeAgua(){
    if (suficienteMana(5)){
        mana-=5;
        vida+=40;
    }   else{
        console.log("No tenes suficiente mana...")
        acciones()

    } 
    console.log("Usaste un  hechizo de agua junto a un poquito de aloe vera, esto regenera en 40 puntos tu salud")
}

function magiaDeTierra(){
    if (suficienteMana(5)){
        mana-=5;
        vidaEnemy-=10;
        
    }   else{
        console.log("No tenes suficiente mana...")
        acciones()

    } 
    console.log("La buena piedra nunca falla. 10 puntos de daño para tu enemigo ")
    
}


function consumirBotellaVida(){
    if (botellasVida>0){
        vida+=50;
        botellasVida -=1;
        
    }   else{
        console.log("No tenes botellas para consumir.  Vuelve a elegir")
        acciones()

    } 

    console.log("Tomaste un tónico extraño. Probablemente no sea legal. Ganas 50 puntos de vida")
    
   
}

function consumirBotellaMana(){
    if (botellasMana>0){
        mana+=50;
        botellasMana -=1;
        
    }   else{
        console.log("No tenes botellas para consumir. El mundo mágico no escapa a la inflación. Vuelve a elegir")
        acciones()

    } 
    console.log("Tomaste un tónico extraño. Deberias consultar con un médico antes de seguir ingiriendo estas cosas.  Ganas 50 puntos de mana")
   
}

function escapar(){
    console.log("soldado que huye...")
    pelear = false;

}

//------------------------------------------------------------------------------------------------------

// valida que el jugador tenga suficiente mana para realizar un hechizo
function suficienteMana(cantidadDeMana){
   return   mana >  cantidadDeMana

    
}


///    Oponente.

function ataqueOponente(){
    vida-=fuerzaEnemy;
}

function generarEnemigo(){
    vidaEnemy = 40;
   fuerzaEnemy =15;

}

// ---------------------------------Funciones del jugo

// evalua e informa al jugador la cantidad de victorias
function victoria(){
    victoras+=1
    console.log("Felicitaciones, tenes " + victoras + " victorias.")
    console.log("Cuidado! Un nuevo enemigo se presenta.")
    generarEnemigo()
}

// Informa al jugador su resultado
function finJuego(){
    console.log(`El juego se terminó y tuviste: ${victoras} victorias. 
    Puedes volver a intentarlo Reiniciando la pagina, o bien, aprobar al humilde estudiante.  
    Podras notar que existe una recursividad que culmina, necesariamente, en "aprobar al humilde estudiante" `)
}

// se ejecuta en bucle mientras tenga condiciones para continuar peleando con el enemigo. 
function duelo(){
        acciones();
        if(vidaEnemy>0){
            ataqueOponente();

        }  else{
          victoria();
          }      
         actualizar(vida, mana, fuerza, botellasVida, botellasMana, vidaEnemy)
           
}


// se ejecuta en bucle mientras tenga condiciones para continuar jugando: Vida del jugador y que quiera pelear
function juego(){
    while (vida>0 && pelear){
        duelo()
    }
    finJuego()
}



// linea de ejecucion. Se ejecutan al comienzo, simplementen dando la bienvenida
saludar(nombre);
reglas();









