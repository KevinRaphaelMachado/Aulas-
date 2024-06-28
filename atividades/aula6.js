console.log ('você está gostando da aula?')
process.stdin.once("data" , function (data){
    let resposta = data.toString().trim().toLowerCase();
    console.log(resposta)
    if(resposta == "sim") 
    {
    console.log ("Que bom que voçê está gostando")
    } else {
    console.log ( 'Que pena vamos tentar melhorar') 
    }
})

