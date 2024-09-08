window.onload = () => {
    const obj = document.querySelector('.obj');
    const style = getComputedStyle(obj);
    console.log(style.getPropertyValue('margin'));
}