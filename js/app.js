let numbers_input = document.querySelector('#numbers');

const button_one = document.querySelector('#one');
const button_two = document.querySelector('#two');
const button_three = document.querySelector('#three');
const button_for = document.querySelector('#for');
const button_five = document.querySelector('#five');
const button_six = document.querySelector('#six');
const button_seven = document.querySelector('#seven');
const button_eigth = document.querySelector('#eigth');
const button_nine = document.querySelector('#nine');
const button_zero = document.querySelector('#zero');

const delete_button = document.querySelector('#delete');
const clear = document.querySelector('#full_delete')
const equal = document.querySelector('#igual');

const suma_op = document.querySelector('#suma');
const resta_op = document.querySelector('#resta');
const multiplicacion_op = document.querySelector('#multiplicacion');
const division_op = document.querySelector('#division');


buttons_events();
function buttons_events(){
    button_one.addEventListener('click', button_value);
    button_two.addEventListener('click', button_value);
    button_three.addEventListener('click', button_value);
    button_for.addEventListener('click', button_value);
    button_five.addEventListener('click', button_value);
    button_six.addEventListener('click', button_value);
    button_seven.addEventListener('click', button_value);
    button_eigth.addEventListener('click', button_value);
    button_nine.addEventListener('click', button_value);
    button_zero.addEventListener('click', button_value);

    //Limpiar Input
    delete_button.addEventListener('click', () => {

        numbers_input.value = '';

    });
    clear.addEventListener('click', full_delete);

    //buttons_operations
    suma_op.addEventListener('click', suma_fc);
    resta_op.addEventListener('click', resta_fc);
    multiplicacion_op.addEventListener('click', multiplicacion_fc);
    division_op.addEventListener('click', division_fc);

    equal.addEventListener('click', equal_fc);

    
    
}

let estado = 0;


//Mostrar valores en el input
function button_value(values){

   
    valores = numbers_input.value;

    valores += values.target.attributes[1].textContent;

    numbers_input.value = valores;

    
}

const values_operations = {
    suma: [],
    resta: [],
    multiplicacion: [],
    division: [],
    result:[]
}

let { suma, resta, multiplicacion, division, result } = values_operations;


//Agregar valores al objeto
function suma_fc(){

    if(estado != 1 && estado != 0){
        equal_fc();
    }

    const value_input = Number(numbers_input.value); 
    suma.push(value_input);

    if(result.length == 0){

        result.push(value_input);
        numbers_input.attributes[2].value = value_input;
        numbers_input.value = '';

    }else{

        const suma_result = suma.reduce( (total, num) => total + num);
        result.push(suma_result);
        result.reverse();
        numbers_input.value = ''
        numbers_input.attributes[2].value = result[0];

        if(suma.length == 2){
            while(suma.length != 0){
                suma.pop()
            }
            suma.push(result[0])
        }

    }

    estado = 1;


}

function resta_fc(){

    if(estado != 2 && estado != 0){
        equal_fc();
    }

    const value_input = Number(numbers_input.value); 
    resta.push(value_input);

    if(result.length == 0){

        result.push(value_input);
        numbers_input.attributes[2].value = value_input;
        numbers_input.value = '';

    }else{

        const resta_result = resta.reduce( (total, num) => total - num);
        result.push(resta_result);
        result.reverse();
        numbers_input.value = ''
        numbers_input.attributes[2].value = result[0];

        if(resta.length == 2){
            while(resta.length != 0){
                resta.pop()
            }
            resta.push(result[0])
        }

    }

    estado = 2;


}

function multiplicacion_fc(){

    if(estado != 3 && estado != 0){
        equal_fc();
    }

    const value_input = Number(numbers_input.value); 
    multiplicacion.push(value_input);

    if(result.length == 0){

        result.push(value_input);
        numbers_input.attributes[2].value = value_input;
        numbers_input.value = '';

    }else{

        const multiplicacion_result = multiplicacion.reduce( (total, num) => total * num);
        result.push(multiplicacion_result);
        result.reverse();
        numbers_input.value = ''
        numbers_input.attributes[2].value = result[0];

        if(multiplicacion.length == 2){
            while(multiplicacion.length != 0){
                multiplicacion.pop()
            }
            multiplicacion.push(result[0])
        }


    }

    estado = 3;

}

function division_fc(){

    if(estado != 4 && estado != 0){
        equal_fc();
    }

    const value_input = Number(numbers_input.value); 
    division.push(value_input);

    if(result.length == 0){

        result.push(value_input);
        numbers_input.attributes[2].value = value_input;
        numbers_input.value = '';

    }else{

        const division_result = division.reduce( (total, num) => total / num);
        result.push(parseFloat(division_result));
        result.reverse();
        numbers_input.value = ''
        numbers_input.attributes[2].value = result[0];

        if(division.length == 2){
            while(division.length != 0){
                division.pop()
            }
            division.push(result[0])
        }

    }

    estado = 4;

}

function equal_fc(){
    switch(estado){
        case 1:
            suma_fc()
        break;

        case 2: 
            resta_fc();
        break;

        case 3: 
            multiplicacion_fc();
        break;

        case 4:
            division_fc();
        break;
    }

    numbers_input.value = values_operations.result[0];

    while(suma.length != 0 || resta != 0 || multiplicacion.length != 0 || division.length != 0){
        suma.pop();
        resta.pop();
        multiplicacion.pop();
        division.pop();
    } 
}

function full_delete(){

    while(suma.length != 0 || resta != 0 || multiplicacion.length != 0 || division.length != 0 || result != 0 ){
        suma.pop();
        resta.pop();
        multiplicacion.pop();
        division.pop();
        result.pop();
    }

    numbers_input.attributes[2].value = '0';
    numbers_input.value = '';

}













