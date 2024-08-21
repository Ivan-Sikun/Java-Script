function validateName(firstname){
    if(!isNaN(firstname.split("")[0])){
        alert("Ваше ім'я не може починатися з цифри")
        return true
    }
    else if(firstname.length < 3){
        alert("Ваше ім'я не повинне бути коротшим ніж 3 символи")
        return true
    }
}
function validateSurname(lastname){
    if(!isNaN(lastname.split("")[0])){
        alert("Ваше прізвище не може починатися з цифри")
        return true
    }
    else if(lastname.length < 3){
        alert("Ваше прізвище не повинне бути коротшим ніж 3 символи")
        return true
    }
}
function validateDate(date){
    const [day,month,year] = date.split(".")
    const birthdate = new Date(year,month-1,day)
    if(birthdate.toString() === "Invalid Date"){
        alert("Ви ввели не коректні символи")
        return true
    }
}
function createNewUser(){
    let firstname = prompt("Введіть ваше ім'я")
    if(validateName(firstname)){
        return
    }
    let lastname = prompt("Введіть ваше прізвище")
    if(validateSurname(lastname)){
        return
    }
    let bdate = prompt("Введіть дату вашого народження (dd.mm.yyyy)") 
    if(validateDate(bdate)){
        return
    }
    return new newUser(firstname,lastname,bdate)
}
class newUser{
    constructor(firstName,lastName,birthday){
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = birthday
    }
    getLogin(){
        let firstletter = this.firstName.split("")[0].toLowerCase()
        let lastname = this.lastName.split("").map(x => x.toLowerCase()).join("")
        return firstletter + lastname
    }
    getAge(){
        return new Date().getFullYear() - this.birthday.split(".")[2]
    }
    getPassword(){
        return this.firstName.split("")[0].toUpperCase() + this.lastName.split("").map(x => x.toLowerCase()).join("") + this.birthday.split(".")[2]
    }
}
const user1 = createNewUser()
document.write(user1.firstName +" ")
document.write(user1.lastName +"</br>")
document.write(user1.getLogin()+"</br>")
document.write(user1.getAge())
document.write(user1.getPassword())