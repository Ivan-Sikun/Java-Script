let a = prompt("Введіть число")
if(isNaN(a) || a === ""){
    document.write("Число не вірне")
}
else if (a>0){
    function ggg(){
        document.write("!")
    }
}
else{
    function ggg(){
        document.write("!!")
    }
}
ggg()