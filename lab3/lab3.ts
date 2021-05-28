//AnswerQ1
class University{
    constructor(public name:string, private dept: string){
    }
    
    graduation(year:number){
        console.log(`Graduating ${this.dept} ${year} students`); 
    }
}

var miu = new (University as any)("MIU", "Computer Science"); 
miu.graduation(2019);




//AnswerQ2

let bankAccount: {money: number; deposit: (value: number) => void} = { 
	money: 2000, 
	deposit(value:number):void { 
		this.money += value; 
	} 
}; 
let myself: {
    name: string;
    bankAccount: typeof bankAccount;
    hobbies: string[];
} = { 
	name: "Asaad", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);


//AnswerQ3

class Car{
    public acceleration: number = 0;
    constructor(public name: string){
    }
    honk():void{
        console.log(` ${this.name} is saying: Toooooooooot!`); 
    }
    accelerate(speed: number):void{
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
    constructor(public width:number=0, public length=0:number)
  
}

class Rectangle extends baseObject{
   
  clacSize(){
      return this.width*this.length;
  }

    
}
const rectangle=new Rectangele(5,2)
console.log(rectangle.calcSize()); // 10