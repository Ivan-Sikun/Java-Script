function isEmpty(obj){
    return Object.keys(obj).length === 0
}
let list = {
    name : "name",
    age : "age"
}
let emptyList = {
}
console.log(isEmpty(emptyList))
console.log(isEmpty(list))