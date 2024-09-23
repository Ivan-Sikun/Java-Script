const inputs = Array.from(document.querySelectorAll("input"));

inputs.forEach(input => {
    input.addEventListener("focusout", handleFocusOut);
    input.addEventListener("focus", handleFocus);
});

function handleFocusOut(event) {
    const input = event.target;
    const requiredLength = input.dataset.length;
    
    if (input.value.length == requiredLength) {
        input.classList.add("success");
    } else {
        input.classList.add("error");
    }
}

function handleFocus(event) {
    const input = event.target;
    input.classList.remove("success", "error");
}