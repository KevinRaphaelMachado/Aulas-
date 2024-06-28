let nome = '';
let idade = '';

console.log('qual é o seu nome?');
process.stdin.once("data" , function (data) {
    //ler o que o usuario digitou
    let nome = data.toString().trim();
    // Exibir uma mensagem personalizada com as informações do usuário
        console.log('qual é a sua idade?');
        process.stdin.once("data" , function (data) {
        //ler o que o usuario digitou
        let idade = data.toString().trim();
        // Exibir uma mensagem personalizada com as informações do usuário
        console.log("seu nome é", nome)
        console.log("sua idade é", idade) 
        console.log('obridado pelas informações')
        process.exit()
    });
});



































