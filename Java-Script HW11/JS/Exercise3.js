import { cities } from "../JS/Exercise3-city.js";
import { formValidation } from "../JS/Exercise3-fun.js";

const citiesSelect = cities.slice(0, 50);
const selectCity = document.querySelector('#city');
citiesSelect.forEach((city) =>{
    selectCity.innerHTML += `<option value="${city.city}">${city.city}</option>`;
}); 

const [...formElements] = document.querySelectorAll(".form-control, .form-select");
formElements.forEach((formElement) => {
    formElement.addEventListener("focusout", formValidation);
});
document.querySelector("#submit").addEventListener("click", formValidation);