let nome 
let notas = []

console.log('digite seu nome')
process.stdin.once("data",function (data) {


    console.log('digite suas 4 notas')

    process.stdin.once("data" , function (data) {
        let nota1 = Number(data.toString().trim());
        notas.push(nota1) ;
    
    
        process.stdin.once("data" , function (data) {
        let nota2 = Number(data.toString().trim());
        notas.push(nota2) ;
        
            process.stdin.once("data" ,function (data) {
            let nota3 = Number(data.toString().trim());
            notas.push(nota3) ;

                process.stdin.once("data" , function (data) {
                let nota4 = Number(data.toString().trim());
                notas.push(nota4) ;
                    

                let result = ((notas[0] + notas[1] + notas[2] + notas[3]) / 4);
                console.log('a media das suas notas é' + ' ' + result)

                if(result >= 7){
                    console.log('aprovado')
                    process.exit()
                }
                else {
                    console.log('reprovado')
                    process.exit()
                }
            
                
            


                })
            })
        })
    })
    
})
