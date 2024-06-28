console.log ('digite um numero')
process.stdin.once("data" , function (data){
    let numero = data.toString().trim();
    
    if(numero % 2 == 0) 
    
    console.log ("esse numero é par")
    })

