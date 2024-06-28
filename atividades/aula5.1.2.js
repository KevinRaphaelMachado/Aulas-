console.log('qual a sua idade');
process.stdin.once("data" , function (data) {
    let idade = data.toString().trim();
    if (idade >= 18 ){
    
        console.log('Voçê pode fazer sua cnh?');
    
    }else {console.log('Voçê ainda não pode fazer sua cnh?')}
        
            });  

