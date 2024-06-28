let valor1
let valor2
let valor3
let soma

console.log('digite 1 valores')
process.stdin.once("data" , function (data) {

    valor1 = Number(data.toString().trim())

    console.log('digite 2 valores')
    process.stdin.once("data", function (data) {

        valor2 = Number(data.toString().trim())

        console.log('digite 3 valores')
        process.stdin.once("data" , function (data) {

            valor3 = Number(data.toString().trim())

            soma = valor1 + valor2
            if(soma > valor3) {
                console.log('a soma é maior que valor3');
            } else {
                console.log('a soma é  que valor3');
            }
        })
    })
})