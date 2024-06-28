process.stdout.write("digite até 3 robbies ou digite 'sair':");
let listaHobbie = [];
let hobbie = '';

process.stdin.on("data" , function(data) {
    let hobbie = data.toString().trim();

    if(hobbie === "sair") {
        
        listaHobbie.forEach((element,indice) => {
            console.log(indice + 1 + "." + element)
        });
        console.log(hobbie + 'Esses são seus robies')
    } else {   
        listaHobbie.push(hobbie);
    }
    process.exit()
});
