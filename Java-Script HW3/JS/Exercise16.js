const number = prompt("Введіть номер сторінки")
let list = []
for(let i = 0; i < number; i++){
    list.push(i)
}
document.write(list)