/*
Conteudo
variaveis var, let, const
number,string,boolean,undefined,null,
incremento e decremento
operadores logicos
estrutura condicional
operador ternario
estruturas interativas de controle ( for, while e do while)



Exibir dados
*/


// alert("Davi is gay")
document.write("Olá mundo") // exibir dentro da pagina
console.log("Hércules - Olá Mundo")// no console do terminal ou do browner


// DECLARAÇÃO DE VARIAVEIS
/*
VAR - LET - CONST
VAR -> Pode ser redeclarada e reatribuida
LET -> Não pode ser redeclarada mas pode ser reatribuida
CONST -> Não pode ser redeclarada e não pode ser reatribuida
*/

//VAR
var x = 20
//x=60
console.log(x)

//LET
let y = 90
console.log(y)
//y= 79;

//CONST
const m = 70;

//TIPOS DE DADOS NO JS
/*
number - string - boolean - undefined - null

Undefined -> É usado quando uma variavel foi declarada mas não foi inicializada
Null -> É usado quando varivel não possui valor
*/

console.log("Tipos de dados no JS")

let num = 90
let string = "Hello"
let bool = true
let nulo = null
let undef

console.log(typeof num)
console.log(typeof string)
console.log(typeof bool)
console.log(typeof undef)

// ATRIBUIÇÃO DE VALORES

var num1 = 20
var num2 = 30

// num1 += 40
// console.log(num1)

// //INCREMENTO E DECREMENTO
// let w = 20
// console.log(++w)//21
// console.log(--w)//19

// // OPERADORES CONDICIONAIS
// console.log("OPERADORES RELACIONAIS")

// let num1 = 10
// let num2 = 15
// console.log(num1 = num2)
// console.log(num2 != num2)
// console.log(num1 === num2)
// console.log(num1 <= num2)

// //OPERADORES LÓGICOS
// console.log("OPERADORES LÓGICOS")

// console.log(!(num1 === num2)) //NOT
// console.log((num1 != num2) && (num1 === num2)) //AND
// console.log((num1 === num2) || (num1 !=num2)) // OR

// //ESTRUTURA CONDICIONAL
// console.log("ESTRUTURA CONDICIONAL")
// if (num1 != num2){
//     console.log("São diferentes")
// }else{
//     console.log("São iguais")
// }

// // OPERADOR TERNARIO
// console.log("OPERADOR TERNARIO")
// let n1 = (num1 < num2) ? "SIM" : "NÃO"
// console.log(n1)

//IF ELSE IF
console.log("IF ELSE IF")   

if(num1 > num2)
{
    console.log("Num1 < Num2")
}else if(num1< num2){
    console.log("Num1 > Num2")
}else{
    console.log("Num1 == Num2")
}

// SWITCH
    console.log("SWITCH")

    let fruta = "uva"

switch(fruta){
    case "uva":
        console.log("É uma uva")
        break
    case "pera":
        console.log("É uma pera")
        break
    default:
        console.log("Procure outra fruta")    
    }

// WHILE
let i = 1;
while(i<10){
    console.log(i)
    i++
}



