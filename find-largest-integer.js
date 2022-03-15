let array_sample_1 = [3,53,77,99,23,43];
let array_sample_2 = [77,29,23,43];
let array_sample_3 = [3,53,99,203,43];

const find_highest_integer = (arr_input) => {

    let current_highest_integer = arr_input[0];

    for(let i = 0; i < arr_input.length; i++) {

        // check through each iteration; comparing indices for the largest integer
        if(arr_input[i] > current_highest_integer) {
            current_highest_integer = arr_input[i];
        }
    }

    return current_highest_integer;
};

console.log(find_highest_integer(array_sample_1));
console.log(find_highest_integer(array_sample_2));
console.log(find_highest_integer(array_sample_3));