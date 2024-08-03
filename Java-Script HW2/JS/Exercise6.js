const height = prompt("Введіть висоту трикутника")
for(let i = 1; i <= height; i++){
    for(let h = 1; h <= height-i; h++){
        document.write('&nbsp;')
    }
    for(let j = 1; j<=i*2-1; j++){
        
        document.write("*")
        
    }
    document.write("<br />")
} 