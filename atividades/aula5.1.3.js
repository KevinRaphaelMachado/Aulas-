    console.log("quantos anos voce tem?")
    process.stdin.once("data" , function (data) {
    let = idade = data.toString().trim();
    let = idade
    if (idade >= 18){
        console.log('Parabens está apto para dirigir'); 
    } if (idade < 18) {
    console.log('Atenção, você não está apto a dirigir');
    }

    process.exit()

    
})


