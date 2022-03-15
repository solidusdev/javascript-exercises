/*
    1) If first is greater than last, return -1
    2) Find the middle index
    3) If that middle index is equal to the target number, return that index
    4) If the target number is higher than the middle index, adjust the start by +1
    5) If the target number is lower than the middle index, adjust the last by -1
    6) If no match, then return -1
*/

const sample_array_1 = [10,11,12,13,14,15];

const binary_search = (array_input, target_number) => {

    let first_index = 0;
    let last_index = array_input.length - 1;

    while(first_index <= last_index) {

        let middle_index = Math.floor((first_index + last_index) / 2);

        if(target_number === array_input[middle_index]) {
            return `Your target number ${target_number} was found at index: ${middle_index}`;
        }

        else if(target_number > array_input[middle_index]) {
            first_index = middle_index + 1;
        }

        else if(target_number < array_input[middle_index]) {
            last_index = middle_index - 1;
        }

        else {
            return `Your target number: ${target_number} does not exist in the array`;
        }
    }

    // first index is greater than the last index; skipped while loop
    return -1;

};

console.log(binary_search(sample_array_1, 14));