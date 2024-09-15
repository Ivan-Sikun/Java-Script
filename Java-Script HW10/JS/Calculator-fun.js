function inputShow(value) {
    document.querySelector(".display input").value = value;
}

function getDisplayValue() {
    return document.querySelector(".display input").value;
}

function createDisplayValue(displayValue, inputValue) {
    if (inputValue === '.' && displayValue.indexOf(".") !== -1) {
        return displayValue;
    }
    if (displayValue === '0' && inputValue !== '.') {
        return inputValue;
    }
    return displayValue + inputValue;    
}

function memorySave() {
    document.querySelector(".memory").classList.remove('hide');
    return getDisplayValue();
}

function memoryClear() {
    document.querySelector(".memory").classList.add('hide');    
    return '';
}

function memoryRead(memory) {
    if (memory) {
        inputShow(memory);
    }
}

function calculate(operand1, operand2, operator) {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return operand1 / operand2;
    }
}

export { inputShow, getDisplayValue, createDisplayValue, memorySave, memoryClear, memoryRead, calculate };