import { numbers, operators, actions } from "./Calculator-blanks.js";
import { calculate, inputShow, memorySave, memoryClear, memoryRead, createDisplayValue, getDisplayValue } from "./Calculator-fun.js";

let resetInput = true;
let operand1 = null;
let operand2 = null;
let operator = null;
let memory = null;

inputShow(0);

document.querySelector('.keys').addEventListener('click', function(e) {
    const inputValue = e.target.value;

    if (numbers.test(inputValue)) { 
        handleNumberInput(inputValue);
    }

    if (operators.test(inputValue)) { 
        handleOperatorInput(inputValue);
    }

    if (actions.test(inputValue)) { 
        handleActionInput(inputValue);
    }
});

function handleNumberInput(inputValue) {
    const currentValue = resetInput ? "0" : getDisplayValue();
    
    if (operator) {
        document.querySelector('input[value="="]').disabled = false;
    }

    inputShow(createDisplayValue(currentValue, inputValue));
    resetInput = false;
}

function handleOperatorInput(inputValue) {
    if (operator && operand1 !== null) {
        operand2 = getDisplayValue();
        inputShow(calculate(operand1, operand2, operator)); 
        operator = ''; 
        document.querySelector('input[value="="]').disabled = true;
    }

    if (inputValue !== "=") {
        operator = inputValue;
    }
    
    operand1 = getDisplayValue();
    resetInput = true;
}

function handleActionInput(inputValue) {
    switch (inputValue) {
        case "m+":
            memory = memorySave();
            break;
        case "m-":
            memory = memoryClear();
            break;
        case "mrc":
            memoryRead(memory);
            if (operator) {
                document.querySelector('input[value="="]').disabled = false;
            }
            break;
        case "C":
            operator = '';
            inputShow(0);
            break;
    }
    resetInput = true;
}