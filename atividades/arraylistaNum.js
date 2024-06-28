let listnumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Digite um numero')
    
process.stdin.once("data" , function (data) {
    let lista = Number(data.toString().trim())
        
    if(listnumeros.includes(lista) == true)  {
            console.log("esse numero está na lista " + lista)
    }else {  
        console.log("esse numero não está na lista")
    }
        
        process.exit()
    })
    



