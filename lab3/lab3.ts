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

let bankAccount :{money:number;deposit:(value:number)=>void}={ 
	money: 2000, 
	deposit(value);void{ 
		this.money += value; 
	} 
}; 

let myself = { 
	name: "Asaad", 
	bankAccount:typeof bankAccount; 
	hobbies: string[]
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);


//AnswerQ3

class Car{
    pbulci acceleration:number=0;

    constructor(public name:string){
    }
    honk() :void{
        console.log(` ${this.name} is saying: Toooooooooot!`); 
    }; 
    accelerate = function(speed) { 
		this.acceleration = this.acceleration + speed; 
	} 
    }
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