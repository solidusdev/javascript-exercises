/*
    1) If start is greater than last, return -1
    2) Find the middle index
    3) If that middle index is equal to the target number, return that index
    4) If the target number is higher than the middle index, adjust the start by +1
    5) If the target number is lower than the middle index, adjust the last by -1
    6) If no match, then return -1
*/

const sample_array_1 = [10,11,12,13,14,15];

const binary_search = (array_input, target_number, first_index, last_index) => {

    if(first_index > last_index) {
        return -1;
    }

    let middle_index = Math.floor((first_index + last_index) / 2);
    
    if(target_number === array_input[middle_index]) {
        return `Target number ${target_number} found at index ${middle_index}`;
    }

    else if (target_number > array_input[middle_index]) {
        return binary_search(array_input, target_number, first_index + 1, last_index);
    }

    else if(target_number < array_input[middle_index]) {
        return binary_search(array_input, target_number, first_index, last_index - 1);
    }

    else {
        return `Your target number: ${target_number} does not exist in the array.`;
    }
};

console.log(binary_search(sample_array_1, 15, 0, sample_array_1.length-1));