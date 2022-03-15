/* 
    1) check to see if a string has any repeating characters
*/

const string_sample_1 = "door";
const string_sample_2 = "cat";
const string_sample_3 = "support";
const string_sample_4 = "donor";

const check_for_dupe_char = (str) => {
    input_str_array = str.split("");
    
    for(let i = 0; i < input_str_array.length; i++) {
        for(let j = i+1; j < input_str_array.length; j++) {
            if(input_str_array[i] === input_str_array[j]) {
                return `Duplicate found! The duplicate letter is "${input_str_array[i]}"\nThe Time Complexity is: n^2`;
            }
        }
    }

    return `No duplicates found in "${str}".`;
};

console.log(check_for_dupe_char(string_sample_4));