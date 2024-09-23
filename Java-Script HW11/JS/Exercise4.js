import {
    inputPriceActivate, 
    priceProcess, 
    inputPriceCreate
} from '../JS/Exercise4-fun.js';

const inputPrice = inputPriceCreate();

inputPrice.addEventListener("focusin", () => {
    inputPriceActivate();
});

inputPrice.addEventListener("focusout", () => {
    priceProcess();
});

const container = document.querySelector(".container");
container.prepend(inputPrice);