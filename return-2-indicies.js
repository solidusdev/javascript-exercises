/*
    Given an array along with a target value,
    return 2 indicies that will sum up to be equal to the target value
*/

const integers = [1,20,3,46,5,10,30];

const sum_of_two_integers = (arr, target_number) => {

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target_number) {
                return `Indices: ${i} and ${j} contain the elements that add up to the target number: ${target_number}`;
            }
        }
    }

    return `No such elements in the array add up to the target number: ${target_number}`;
};

console.log(sum_of_two_integers(integers, 4));