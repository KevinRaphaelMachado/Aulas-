//1) descreva a funcionalidade de uma variavel criando um exemplo pratico.crie uma variavel que armazene 
//o nome de uma pessoa else, em seguida exiba no console. resposta= armazenar dados como string, pastas etc.

/*let nome = 'Kevin'
console.log(nome)*/

// 2)  crie um codico que declare uma  variavel booleana  verifique se é par ou impar

/*let numero = 10
let verdade = true

if(numero % 2 === 0) {

    console.log(' esse numero é par', verdade);
} else {
    console.log('esse numero é impar' );
}*/

// 3) escreva um codigo se ele é positivo negativo ou 0 escreva no console. 

/*let numero = 0

if (numero > 0) {
console.log('maior que 0');
}
else if (numero < 0) {
console.log('menor que 0');
} else {
    console.log('é 0')
}*/

// 3.1 modificar idade 

/*let idade = 18
let mensagem
    if(idade >= 16) {
    console.log('voçê pode votar')
    } else {
    console.log('voçê não pode votar');
    }*/

    // 4 modifique o codigo para que a mensagem seja 'você pode dirigir' ou 'você não pode dirigir'

    /*let idade = 21;
let mensagem;

if (idade >= 18) {
    mensagem = 'você pode dirigir'
} else {
    mensagem = 'você não pode dirigir'
}
console.log(mensagem);*/

// 5) some apenas os numeros impares

/* let numeros = [1, 2, 3, 4, 5]
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 !== 0) {
    soma += numeros[i]     
    // ou soma =  numeros[i] + soma 
}
}
    console.log(soma);*/


// 6) 

/*let notas = [7.5, 8.0, 6.0, 9,5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let media = 0;
let soma = 0;
let maxima = notas[0];
let minimo = notas[0];

// A
for(let i = 0; i < notas.length; i++) {
    console.log(notas[i])

    soma = notas[i] + soma;


    //media = soma / notas.length
//console.log(media);*/

//B

/*(notas[i] > maxima) {
    maxima = notas[i]

} else if (notas[i] < minimo) {
    minimo = notas[i]
}
}
console.log( 'minimo' + minimo);
console.log(' maxima' + maxima);*/


/*let maxima = notas[0];
let minimo = notas[0];
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0;
let media = 0;
for (let i = 0; i < notas.length; i++) {

    soma = notas[i] + soma;
   // soma += notas[i];
}

/*media = soma / notas.length
console.log(media);


for (let i = 0; i < notas.length; i++) {
    if(notas[i] > maxima) {
        maxima = notas[i]

    } else if (notas[i] < minimo) {
        minimo = notas[i]
    }
}
console.log(minimo, maxima)*/


/*let nota = 9;
let verd = true

if(nota >= 10) {
    console.log(verd);
}else {
    console.log(false);
}*/
let notas = [7.5, 8.0, 6.0, 9.5, 5.0 ]