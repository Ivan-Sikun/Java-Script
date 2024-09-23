window.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("focusout", () => {
            const testElement = document.querySelector("#test");
            testElement.textContent = input.value;
        });
    });
});