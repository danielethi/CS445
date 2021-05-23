//AnswerQ1
function University(name:string,dept:string){
     this.name=name;
     this.dept=dept;
     this.graduation = function(year:number) { 
        console.log(`Graduating ${this.dept} ${year} students`); 
   } 
} 
var miu = new Univeristy("MIU", "Computer Science"); 
miu.graduation(2019);




//AnswerQ2

let bankAccount = { 
	money: 2000, 
	deposit(value):void { 
		this.money += value; 
	} 
}; 

let myself = { 
	name: "Asaad", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);


//AnswerQ3

class Car{
    constructor(name:string,acceleration:number){
         this.name=name;
         this.acceleration=0;
      this.honk=function():void{
        console.log(` ${this.name} is saying: Toooooooooot!`); 
      }
      this.accelerate = function(speed):number { 
		this.acceleration = this.acceleration + speed; 
	} 
}
var car = new Car("BMW"); 
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60); 
console.log(car.acceleration); // 60



//AnswerQ4
class baseObject={
    constructor(width:number, length:number)
        this.width=0;
        this.length=0;
}

rectangle extends baseObject{
    constructor(width:number,length:number)
     this..width=5;
     this.length=2;

     rectangle.calcSize=function(){
         return thiswidth*this.length;
     }
}
console.log(rectangle.calcSize()); // 10