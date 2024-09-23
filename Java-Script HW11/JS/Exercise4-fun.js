const createPriceInput = () => {
    const inputPrice = document.createElement("input");
    inputPrice.type = "number";
    inputPrice.placeholder = "Price";
    return inputPrice;
};

const activatePriceInput = (event) => {
    const inputPrice = event.target;
    inputPrice.classList.add("active");
    removeError(inputPrice);
};

const removeError = (inputPrice) => {
    inputPrice.classList.remove("error");
    const errorText = document.querySelector(`${inputPrice.localName} + div`);
    if (errorText) {
        errorText.remove();
    }
};

const displayError = (inputPrice) => {
    inputPrice.classList.add("error");
    inputPrice.insertAdjacentHTML("afterEnd", "<div>Please enter correct price</div>");
};

const deletePrice = (event) => {
    event.target.parentElement.remove();
};

const createPriceDisplay = (inputPrice) => {
    inputPrice.classList.add("success");

    const priceContainer = document.createElement("div");
    priceContainer.className = "price";

    const priceText = document.createElement("span");
    priceText.textContent = `Price: ${inputPrice.value}`;
    priceContainer.append(priceText);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    priceContainer.append(deleteButton);

    deleteButton.addEventListener("click", deletePrice);
    inputPrice.before(priceContainer);
};

const processPriceInput = (event) => {
    const inputPrice = event.target;
    inputPrice.classList.remove("active");

    if (inputPrice.value > 0) {
        createPriceDisplay(inputPrice);
    } else {
        displayError(inputPrice);
    }
};

export {
    activatePriceInput,
    processPriceInput,
    createPriceInput
};