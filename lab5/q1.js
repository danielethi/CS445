// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false; 
//     return num > 1;
// }
 

// After making change to isPrime function, if you make a call as below:

// console.log('start');
// isPrime(7)
//     .then(res => console.log(res))
//     .catch(err => console.error(err));
// console.log('end');
// In the console, you should expect:

// start
// end
// { prime: true } //this is printed after 500 millionseconds





const isPrime = (num) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if (num % i === 0) {
                    reject({ prime: false });
                }
            }
            resolve({ prime: num > 1 });
        }, 500);
    });
};
console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');





