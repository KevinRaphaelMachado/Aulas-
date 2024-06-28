process.stdout.write("digite a nota1: \n");
let notas = []

process.stdin.once("data" , function (data) {
    let nota1 = Number(data.toString().trim());
        notas.push(nota1) ;

    process.stdin.once("data" , function (data) {
        let nota2 = Number(data.toString().trim());
        notas.push(nota2) ;

        process.stdin.once("data" , function (data) {
        let nota3 = Number(data.toString().trim());
        notas.push(nota3) ;
                
            let result = ((notas[0] + notas[1] + notas[2]) / 3);

            console.log('a media das 3 notas eh' + result)

            if (notas[0] > notas[1] && notas[0] > nota[2]) {
                console.log('a maior nota eh' + notas[0])
            }
            if (notas[0] > notas[1] && notas[0] > notas[2]) {
                console.log('a maior nota eh' + notas[0])
            }
            if (notas[1] > notas[0] && notas[1] > notas[2]) {
                    console.log('a maior nota eh' + notas[1])
            }
            else{
            console.log('a maior nota eh' + notas[2])
            }
        })
    })
})
