// Qual o seu nome 
process.stdin.write('digite sua idade\n')
// Ler o que o usuario digitou  
process.stdin.once("data" , function (data) {
    const YEAR = 2024;

    // Ler idade 
    let idade = parseInt(data.toString().trim());
    let ano = YEAR - idade;
    // Exibir uma mensagem personalizada com as informações do usuário
    process.stdout.write('Olá você nasceu em; ' + ano); 
    process.exit(); 
})



