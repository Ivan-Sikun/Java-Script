import { phonePattern, emailPattern, phoneOperators } from "../JS/Exercise3-patterns";

const isPhoneValid = (phone) => phonePattern.test(phone);

const displayPhoneOperator = (phone) => {
    phoneOperators.forEach(({ codes, logo }) => {
        if (new RegExp(`\\+380(${codes})`).test(phone)) {
            const operatorIcon = document.createElement("span");
            operatorIcon.className = "phoneOperator";
            operatorIcon.style.backgroundImage = `url("${logo}")`;
            document.querySelector("#phone").after(operatorIcon);
            return;
        }
    });
};

const isEmailValid = (email) => emailPattern.test(email);

const clearValidation = (elementId) => {
    const validationIcon = document.querySelector(`#${elementId} + .validation`);
    if (validationIcon) validationIcon.remove();

    if (elementId === "phone") {
        const operatorIcon = document.querySelector(`#${elementId} + .phoneOperator`);
        if (operatorIcon) operatorIcon.remove();
    }
};

const addValidationIcon = (element, isValid) => {
    const validationIcon = document.createElement("span");
    validationIcon.className = "validation";
    validationIcon.textContent = isValid ? "✅" : "❌";
    element.after(validationIcon);
};

const formValidation = (event) => {
    let formElementsSelector = ".form-control, .form-select";
    if (event.type !== "click") {
        formElementsSelector = `#${event.target.id}`;
    }

    const formElements = Array.from(document.querySelectorAll(formElementsSelector));
    
    formElements.forEach((element) => {
        let isValid = true;
        clearValidation(element.id);

        if (element.value.trim()) {
            switch (element.id) {
                case "phone":
                    isValid = isPhoneValid(element.value);
                    if (isValid) displayPhoneOperator(element.value);
                    break;
                case "email":
                    isValid = isEmailValid(element.value);
                    break;
                default:
                    break;
            }
        } else {
            isValid = false;
        }
        
        addValidationIcon(element, isValid);
    });
};

export { formValidation };