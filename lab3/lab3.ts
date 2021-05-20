//AnswerQ1
declare function University(name: any, dept: any): void;
declare class University {
    constructor(name: any, dept: any);
    name: any;
    dept: any;
    graduation: (year: any) => void;
}
declare var miu: any;

//AnswerQ2

declare namespace bankAccount {
    const money: number;
    function deposit(value: any): void;
    function deposit(value: any): void;
}
declare namespace myself {
    export const name: string;
    export { bankAccount };
    export const hobbies: string[];
}



//AnswerQ3

declare function Car(name: any): void;
declare var car: any;



//AnswerQ4
declare var baseObject: {
    width: number;
    length: number;
};
declare var rectangle: any;