/*
console.log("produto");

process.stdin.on("data", function (data) {
let numero = Number(data.toString().trim())

    switch (numero) {
    case 1:
        console.log('alimento nao perecivel');
        break;

        case 2:
        console.log('alimento perecivel');
        break;

        case 3:
        console.log('vestuario');
        break;

        case 4:
        console.log('limpeza');
        break;
    default:
        
}
})*/

/*
console.log('Digite um mes do ano para saber a sua estação');
process.stdin.once("data", function (data) {
    let mes = data.toString().trim()
    
        switch (mes) {
        case 'marco':
        case 'abril':
        case 'maio':
        case 'junho':
            console.log('a estação é outono');
            break;
        case 'julho':
        case 'agosto':
        case 'setembro':
        
        console.log('a estação é inverno');
            break;
    
            case 'outubro':
            case 'novembro':
            case 'dezembro':
            
            console.log('a estação é primavera');
            break;
    
            case 'janeiro':
            case 'fevereiro':
            console.log('esta estação é verão');
            break;
        default: 
        
        
    }
    process.exit()
})
*/

/*console.log('digite o numero de um mes para saber, quantos dias ele tem');
process.stdin.once("data", function (data) {
    let mes = Number(data.toString().trim())
    
        switch (mes) {
        
        case 2:
            console.log('esse mês tem 28 dias');
        break;
        
        case 4:
        case 6:
        case 9:
        case 11:
            console.log('esse mês tem 30 dias');
        break;
    
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log('esse mês tem 31 dias');
        
    
    }
    process.exit()
    })*/
    

//resultado de PI

/*resultado = Math.PI
console.log(resultado);*/


//toFixed arredonda os numeros depois do ponto
/*
resultado = Math.PI;
console.log(resultado.toFixed(4));*/

/*let resultado
resultado = Math.PI;
resultado= Math.random().toFixed(4);
resultado = Math.floor(Math.random() + (5 - 0)) + 0;
console.log(resultado);*/


// gerando indice aleatorio usando floor para arredondar o array e a função.ramdom para escolher o nome aleatório

/*const nomes = ['luiz', 'maria', 'helena', 'felipe', 'joão']
const indiceArray = Math.floor(Math.random() * nomes.length)
console.log(indiceArray);
const randomElement = nomes[indiceArray];
console.log(randomElement);*/


// executando valor maximo e minimo dentro do arrey
/*
let r1 = [38, 16, 71, 44, 17, 100];
//resultado = Math.min(...r4);
resultado = Math.max(...r1);
console.log(resultado);*/

/*let numero = 0;
let surp = 0;
let max = 10;
let min = 1;
console.log('digite um numero de 1 a 10');

Process.stdin.once("data", function (data) {
    numero = Number(data.toString().trim())
    surp = Math.floor(Math.random() * (max - min +1))
if ( numero == surp) {
    console.log('voçê acertou' +  surp) 

}else {
    console.log("voçe errou" + surp);
}
Process.exit()
})*/



//reslizando um codigo onde um numero'correto' é escolhido aleatoriamente pelo console
/*let numero = 0;
let correto = 0;
let contador = 0;

console.log('digite um numero de 1 a 10');

// cria uma escolha de numero aleatorio de 1 a 10 
// math.floor para arredondar o valor 
//Math.random para escolher numero aleatorio
correto = Math.floor(Math.random() * (10 - 1))

process.stdin.on("data", function (data) {
    numero = Number(data.toString().trim())
    
    //verificar com professor a necessidade obs rodou sem ele 
    contador ++
/*
if (contador < 10) {
if (numero == correto) {
        console.log('esse numero esta certo');
} else {
console.log('não é esse');
}
} else {
    console.log('numero de tentativas excedido');

    process.exit()
}
})*/
