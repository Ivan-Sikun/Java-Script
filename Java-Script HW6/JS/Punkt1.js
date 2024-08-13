function Worker(name,surname,rate,days){
    this.name = name
    this.surname = surname
    this.rate = rate
    this.days = days
}
Worker.prototype.getSalary = function(){
    return this.rate * this.days
}
const worker = new Worker("myName","mySurname",3000,7)
document.write(worker.getSalary())