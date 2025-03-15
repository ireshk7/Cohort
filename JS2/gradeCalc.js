// 90-A
// 80-B
// 70-C
// 60>=D
// F

function grade(num){
    if(num>=90){
        return "A";
    }
    else if(num>=80){
        return "B";

    }
    else if(num>=70){
        return "C";
    }
    else if(num>=60){
        return "D";

    }
    else{
        return "F"
    }
}

let result = grade(59);

console.log(result);;

