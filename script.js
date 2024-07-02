let displayValue = '';

function isValid(){
    let str = displayValue;
    let n = str.length;
    let operators = ['+', '-', '*', '/'];
    for (let i = 1; i < n; i++){
        if (operators.includes(str[i]) && operators.includes(str[i-1])){
            return false;
        }
    }
    return true;
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function removeEnd(){
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function append(number) {
    if (displayValue == "undefined"){
        displayValue = number + "";
    }
    else{
        displayValue += number;
    }
    updateDisplay();
}

function calculate() {
    try{
        if (!isValid()){
            alert("Please Enter a valid expression\nNote: Only one operator is allowed between two operands!");
            clearDisplay();
            return;
        }
        displayValue = eval(displayValue);
        displayValue += '';
        updateDisplay();
    }
    catch(error){
        alert("Please Enter a valid expression\nNote: Only one operator is allowed between two operands!");
        clearDisplay();
    }
}

