let outter_function = () => {
    let count = 0;

    function inner_function() {
        count += 1;
        return count;  
    }

    return inner_function;
};

const start_counter = outter_function();

console.log(start_counter());
console.log(start_counter());
console.log(start_counter());
console.log(start_counter());
console.log(start_counter());

console.log(start_counter());
console.log(start_counter());
console.log(start_counter());