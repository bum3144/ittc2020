/*
*   Level 1 : Calculator01.js
*/
var sum = 0;
var note = ''; 

function plus(value){
    sum += value; // sum = sum + value;
    note += ' + ' + value; // " + value "
}
function minus(value){
    sum -= value; // sum = sum - value;
    note += ' - ' + value;  // " - value"
}
function multiple(value){
    sum *= value; // sum = sum * value;
    note += ' * ' + value; // " * value"
}
function divid(value){
    sum /= value; // sum = sum / value;
    note += ' / ' + value; // " / value"
}
function init(value){
    if(arguments.length == 0 ){
        sum = 0;
    }else{
        sum = value;
        note += + value; 
    }
} 


function printResult(){
    console.log(sum);
    console.log(note + " = " + sum);
}
