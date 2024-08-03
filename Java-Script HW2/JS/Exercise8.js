const height = prompt("Введіть висоту ромба")
for(let i = 1; i <= height; i++){
    for(let h = 1; h <= height-i; h++){
        document.write('&nbsp;')
    }
    for(let j = 1; j<=i*2-1; j++){
        document.write("*")
    }
    for(let h = height-1; h >= 0; h--){
        document.write('&nbsp;')
    }
    document.write("<br />")
}
for(let i = height-1; i > 0; i--){
    for(let h = height-i; h > 0; h--){
        document.write('&nbsp;')
    }
    for(let j = 1; j<=i*2-1; j++){
        document.write("*")
    }
    document.write("<br />")
}