process.stdout.write("leia os numeros");
process.stdin.once("data" , function (data) {
    let num = Number(data.toString().trim())
    for (let index = 1; index <=10; index++) {
        let result = index * num;

        console.log(index + " x " + num + " = " + result)
        
        
    }   
        process.exit()

})