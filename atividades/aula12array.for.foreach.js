let lista = []

console.log('"digite "15" numeros entre "0" a "100"' )

    process.stdin.on("data" , function (data) {
    let numeros = Number(data.toString().trim());
    
    if (lista.length > 14) {
        console.log('esses são os numeros digitados impessos por for' + (lista))
    
    
        //usando for
        for (let index = 0; lista.length > lista.length; index++) {
        
            console.log(lista[index]);

            //usando for Each
            console.log('usando foreach');
            lista.forEach(function(elemento) {
                console.log(elemento);
            }
        )
        }
        process.exit()
    }else {
        lista.push(numeros);
        console.log('insira outro numero')

    }
});