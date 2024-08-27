const button = document.getElementById("button")
button.onclick = function(){
    const input1 = document.getElementById("input1")
    const input2 = document.getElementById("input2")
    const value = input1.value
    input1.value = input2.value
    input2.value = value
    console.log(input1.value)
    console.log(input2.value)
}