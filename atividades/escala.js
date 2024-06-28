// transferencia de escalas kelvin, fahrenheit e celsius. (gpt)

/*
const readline  = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


let fahrenheit = 0;
let celsius = 0;
let kelvin = 0;

console.log('escolha uma escala usando "k" para KELVIN, "c" para CELSIUS ou "f" para FAHRENHEIT');

rl.question('qual valor da temperatura?  ', (valor) => {
        let valorNumerico = parseFloat(valor);
            if(isNaN(valorNumerico)) {
                console.log('valor invalido');
                rl.close();
                return;
            }

            rl.question('escolha uma escala usando "k" para KELVIN, "c" para CELSIUS ou "f" para FAHRENHEIT:  ',
            (escala) =>  {

            switch (escala) {
        case 'f':
            celsius = valorNumerico;
            fahrenheit = (celsius *9 /5 ) + 32;
            kelvin = celsius + 273.15;
            break;
    
        
            case 'c':
            kelvin = valorNumerico; fahrenheit =  (celsius * 9 / 5 ) + 32
            celsius= kelvin + 273.15;
            break;
    

            case 'k':
            kelvin = valorNumerico; celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;
            break;
            
            default:
                console.log('escala invalida');
                
                rl.close();
                return;
            }

            console.log(`celsius: ${celsius.toFixed(2)} C`);
            console.log(`fahrenheit'${fahrenheit.toFixed(2)} F`);
            console.log(`kelvin ${kelvin.toFixed(2)} K`);
            rl.close();


        });

});*/

