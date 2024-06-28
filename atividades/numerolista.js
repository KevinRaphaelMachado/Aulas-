let listnumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Digite um numero');
    
process.stdin.once("data" , function (data) {
    let numero = Number(data.toString().trim())
    for (let index = 0; index < listnumeros.length; index++) {
        if(numero == listnumeros[index])  {
            console.log("esse numero está na lista " + lista)
        }
        
    }
    console.log('esse numero não consta na lista')
})