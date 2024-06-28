let resultado

process.stdout.write("Digite uma numero \n");
    
    process.stdin.on("data" , function (data) {
        let contagem = data.toString().trim()
        contagem = contagem.length;
        if(contagem % 2 === 0)  {
            console.log("é igual a " + contagem + " é par.")
        } else {  
            console.log("é igual a " + contagem + " é impar.")
            }
        process.exit()
        })
