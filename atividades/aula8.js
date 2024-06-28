process.stdout.write("digite seu nome: \n");
    let usuario = {
        nome: '',
        idade: '',
        temcnh:'',
}   
process.stdin.once("data" , function (data) {
    usuario.nome = data.toString().trim()

    process.stdout.write("digite sua idade: \n");
    process.stdin.once("data" , function (data) {
        usuario.idade = data.toString().trim()
    
        process.stdout.write("voce possui cnh: \n");
        process.stdin.once("data" , function (data) {
            usuario.temcnh = data.toString().trim()

            console.log("Ola" + usuario.nome + " sua idade eh") 
            console.log("sua idade eh" + usuario.idade)
            console.log("voce possui cnh?" + usuario.temcnh )
        })
    })
})


