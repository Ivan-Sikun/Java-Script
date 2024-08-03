const height = prompt("Введіть висоту трикутника")
const width = prompt("Введіть ширину трикутника")

for(let i = 1; i <= height; i++){
    if(i === 1 || i === height-0){
        for(let j = 1; j <= width; j++){
            document.write("*")
        }
        document.write("<br />")
    }
    else{
        document.write("*")
        for(let w = 1; w <= width - 2; w++){
            document.write("&nbsp;")
        }
        document.write("*"+"<br />")
    }
}