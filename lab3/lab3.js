//Q1 convert this code to type script
function University(name, dept) { 
	this.name = name; 
	this.dept = dept; 
	this.graduation = function(year) { 
		 console.log(`Graduating ${this.dept} ${year} students`); 
	} 
} 
var miu = new Univeristy("MIU", "Computer Science"); 
miu.graduation(2019);

//Q2 convert this code to typescript
let bankAccount = { 
	money: 2000, 
	deposit(value) { 
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

//Q3 convert this code to typescript

function Car(name) { 
	this.name = name; 
	this.acceleration = 0; 
	this.honk = function() { 
		console.log(` ${this.name} is saying: Toooooooooot!`); 
	}; 
	this.accelerate = function(speed) { 
		this.acceleration = this.acceleration + speed; 
	} 
} 
var car = new Car("BMW"); 
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60); 
console.log(car.acceleration); // 60

//Q4 convert the following code to type script

class BaseObject {
    constructor(public width: number = 0, public length: number =0){
    }
    
}

class Rectangle extends BaseObject {
    calcSize():number{
        return this.width * this.length; 
    }
}


class Cube extends BaseObject {
    public height: number;
    constructor(width: number, length: number, height: number){
        super(width, length);
        this.height = height;
    }

    calcSize():number{
        return this.width * this.length * this.height;
    }
}

// interface BaseObject {
//     width: number;
//     length: number
// }

// class Rectangle implements BaseObject {

//     public width: number;
//     public length: number;

//     constructor(width: number, length: number) {
//         this.width = width;
//         this.length = length;
//     }
//     calcSize():number {
//         return this.width * this.length;
//     }
// }

const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize()); // 10