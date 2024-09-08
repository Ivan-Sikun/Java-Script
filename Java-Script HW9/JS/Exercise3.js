window.onload = () => {
    const container = document.querySelector('.container');
    const inputPhone = document.createElement('input');
    inputPhone.placeholder = '000-000-00-00';
    const buttonSave = document.createElement('button');
    buttonSave.textContent = 'Зберегти';
    container.append(inputPhone, buttonSave);

    const errorBlock = document.createElement('div');
    errorBlock.classList.add('error');
    container.append(errorBlock);

    const phoneRegex = /^\d{3}-\d{3}-\d{2}-\d{2}$/;

    const showError = (message) => {
        errorBlock.textContent = message;
        errorBlock.style.display = 'block';
    };

    const hideError = () => {
        errorBlock.style.display = 'none';
    };

    const handleSave = () => {
        const phoneNumber = inputPhone.value.trim();

        hideError();

        if (!phoneNumber) {
            showError('Номер телефону не може бути пустим');
            return;
        }

        if (!phoneRegex.test(phoneNumber)) {
            showError('Невірний формат номера телефону');
            return;
        }

        inputPhone.classList.add('success');
        setTimeout(() => {
            document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
        }, 2000);
    };

    buttonSave.addEventListener('click', handleSave);
}