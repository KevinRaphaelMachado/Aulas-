//feito sem auxilio
let numero 

console.log ('digite um numero')

process.stdin.once("data" , function (data){
    let numero = Number(data.toString().trim());
        
    if (numero) {
        console.log(numero -1)
        console.log(numero +1)
    }
    process.exit()
    })