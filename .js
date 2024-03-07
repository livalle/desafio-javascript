//desafio codecademy inversão de valores,Interpolação e soma de resultados para obtenção de idade * idade de cachorro.
let myAge = 23; // minha idade humana
let earlyYears = 2;
earlyYears *= 10.5; // multiplicação dos primeiros anos por 10.5
    // substração da minha idade original por 2;
myAge -= 2;
let laterYears = myAge;
laterYears *= 4; // multiplicação do resultado da minha idade anterior por 4
console.log(earlyYears + laterYears); // soma dos resultados para obter a idade em "idade de cachorro"
let myAgeInDogYears = earlyYears + laterYears; // soma dos resultados para obter a idade em "idade de cachorro"
let myName = "Lidia".toLowerCase(); //variavel com nome + toLowerCase;

console.log(`My name is: ${myName}.`);
console.log(`I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
//interpolação das variaveis para obtenção do resultado requerido;
