const ul = document.querySelector("ul")
let [...li] = document.querySelectorAll("li")
let liIndex = 0 
function clear(){
    li.forEach(x => x.style.background = "none")
}
function selectFirstChild(){
    clear()
    liIndex = 0
    ul.firstElementChild.style.background = "green"
}
function selectLastChild(){
    clear()
    liIndex = ul.childElementCount - 1
    ul.lastElementChild.style.background = "green"
}
function selectNextNode(){
    clear()
    liIndex += 1
    if(liIndex === ul.childElementCount){
        liIndex = 0
    }
    li[liIndex].style.background = "green"
}
function selectPrevNode(){
    clear()
    liIndex -= 1
    if(liIndex === -1){
        liIndex = ul.childElementCount - 1
    }
    li[liIndex].style.background = "green"
}   
function createNewChildStart(){
    const addLi = document.createElement("li")
    ul.prepend(addLi)
    li.unshift(addLi)
    addLi.textContent = `List Item ${ul.childElementCount}`
}
function createNewChildEnd(){
    const addLi = document.createElement("li")
    ul.append(addLi)
    li.push(addLi)
    addLi.textContent = `List Item ${ul.childElementCount}`
}
function removeFirstChild(){
    const delLi = li[0]
    ul.removeChild(delLi)
    li.shift()
}
function removeLastChild(){
    const delLi = li[ul.childElementCount-1]
    ul.removeChild(delLi)
    li.pop()
}