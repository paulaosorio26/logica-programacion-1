const prompt = require('prompt-sync')();
console.log("Bienvenido a el juego ");
// Array para guardar numeros ingresados
let numbers = []; 

// Ciclo for para ingresar numeros 1 
for (let i=0; i<3; i++){
    numbers [i] = Number(prompt(`Escribe el numero ${i+1}: `));
    let verif = numbers[i];
    if (isNaN(verif)){
        console.log("No es un numero valido. Intente de nuevo")
        i--;
    }
}

//Verificacion de números

if (numbers[0] === numbers [1] && numbers [1] === numbers [2]){
    console.log("Los tres números son iguales");
} 

else if (numbers[0] === numbers [1]) {
     
    console.log("Los dos primeros números son iguales");
}

else if (numbers[1] === numbers [2]) {
    console.log("El segundo y el tercer número son iguales");
}

else if (numbers[0] === numbers [2]) {
    console.log("El primero y el tercer número son iguales");
}

//Función para ordenar numeros de menor a mayor 
let menorAMayor = numbers.sort(function(a, b){return a - b});
    console.log("Numeros de menor a mayor: ", menorAMayor); 

//Función para ordenar numeros de mayor a menor 
let mayoraMenor = numbers.sort(function(a, b){return b - a});
    console.log("Numeros de mayor a menor: ", mayoraMenor);

