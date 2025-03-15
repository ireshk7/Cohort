let array=[1,4,2,3,5,9];

function sumfac(numbers){
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i];
        
    }
    return sum;
}

let res = sumfac(array);

console.log(res);

let anoth = sumfac([3,2,3,6,4]);
console.log(`My result is ${anoth}`);

