
// readline digite seu nome
/*
let readline = require('readline');
let rl = readline.createInterface({
input: process.stdin,
output: process.stdout

});

rl.question(`digite seu nome: `, (nome) => {
console.log(`ola,  ${nome} !`);
rl.close();

})*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdont,
})

//soma nume 1 2 3 

/*
let resultado

rl.question('digite um numero: ', (nume1) => {
    rl.question('digite outro  numero:', (nume2) => {
        rl.question('digite o terceiro numero:', (nume3) => {
        
            console.log(typeof num1);
        
        nume1 = parseFloat(nume1);
        nume2 = parseFloat(nume2);
        nume3 = parseFloat(nume3);
        resultado = nume1 + nume2 + nume3;
        
        console.log('valor da operação' , resultado);
        
        rl.close();

        });
    });
});*/


//soma 1 2 3 
let num1;
let num2;
let num3;
let contador = 0;
let resposta 

console.log('digite um numero: ');

process.stdin.on('data' , (data)  => {
    resposta = data.toString().trim();

    contador++;

if (contador == 1) {
    num1 = parseFloat(resposta);
    console.log('digite um numero: ');
}else if (contador == 2){
    num2 = parseFloat(resposta);
    console.log('digite um numero: ');
}else if (contador == 3) {
    num3 = parseFloat(resposta);
    console.log('digite um numero: ');

    const resultado = num1 + num2 + num3;
console.log('valor total' , resultado);
process.exit();
}
})