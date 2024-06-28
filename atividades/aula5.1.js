 //   console.log('você nasceu em: ' + ano);
    console.log("você tem CNH? ")
    process.stdin.once("data" , function (data) {
    let = CNH = data.toString().trim();
    if (CNH === 'sim'){
        console.log('Parabens está apto para dirigir'); 
    } else {
    console.log('Atenção, você não está apto a dirigir');
    }

    process.exit()

})


