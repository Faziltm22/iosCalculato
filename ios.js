let display = document.getElementById("result");

function appendNumber(number){
    if (display.value == "0" ) {
        display.value = number;
    } else {
        display.value += number;
    }

}
function clearDisplay(){
    display.value = null;
}
function deleteLast(){
    display.value=display.value.slice(0, -1);
}
function calculate(){
    try{
        display.value=eval(display.value) ;
    }
    catch (error){
        display.value = "Error";
    }
}
function appendOperator(opreators){
    const lstchar = display.value[display.value.length -1];
    if(['+', '-', '*', '/', '%'].includes(lstchar)) {
        display.value=display.value.slice(0, -1) + opreators;    
    }else{
        display.value += opreators;
    }
}

function key(){
    
}

