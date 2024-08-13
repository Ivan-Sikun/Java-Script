class MyString{
    reverse(str){
        if(typeof str !== typeof ""){
            return 'something went wrong'
        }
        return str.split("").reverse().join("")
    }
    ucFirst(str){
        if(typeof str !== typeof ""){
            return 'something went wrong'
        }
        return str.split("")[0].toUpperCase() + str.split("").slice(1).join('')
        
    }
    ucWords(str){
        if(typeof str !== typeof ""){
            return 'something went wrong'
        }
        return str.split(" ").map((str) => 
            str.split("")[0].toUpperCase() + str.split("").slice(1).join('')
        ).join(" ")
    }
}
const string = new MyString()
document.write(string.reverse("Hello")+"</br>")
document.write(string.ucFirst("hello")+"</br>")
document.write(string.ucWords("hello world")+"</br>")