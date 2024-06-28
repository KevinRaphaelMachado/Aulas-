console.log ('você está gostando da aula?')
process.stdin.once("data" , function (data){
    let aula = data.toString().trim();
    
    if(aula == "sim") 
    {
    console.log ("Que bom que voçê está gostando")
    } else {
        if (aula == 'não') {
            console.log ( 'Que pena vamos tentar melhorar')
        }
        else {
            console.log ('responda apenas sim ou não')
        }
    


    
}
})
