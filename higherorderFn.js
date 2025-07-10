function greet(name){
    return `hello ${name}`
}

const processUserInput = (fn) => {
    const name = "Alice";
    console.log(fn(name));
    
}
// processUserInput(greet)


function multi(factor){
    return function (num){
        console.log(num*factor)
        return num * factor;
    }
}

const double = multi(2);
double(6);