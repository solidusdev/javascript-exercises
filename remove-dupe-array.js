/**
    1) first scan the array
    2) check for any duplicates in the array
    3) if a duplicate is found, remove that duplicate
    4) return an array with non-duplicate elements 
 */

const array_sample_1 = [1,2,3,4,5];
const array_sample_2 = [1,2,2,3,3,3,3,3,4,5]; // output array should be: [1,2,3,4,5]
const array_sample_3 = [1,1,2,2,2,2,3,4,4,4,5,6,7,8,8,8,8,8,8,8,8,8,9,9,10];
const array_sample_4 = [1,2,2,3,4,5];
const sample_array_5 = [3, 'a', 'a', 2, 5, 6, 3, 'a', 3, 'a', 2, 4, 9, 3];

const check_for_duplicates_destructive = (arr) => {
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {

                // remove the adjacent duplicate element
                arr.splice(j, 1);

                // decrement 1 to i to repeat the comparison
                i--;
            }
        }
    }
    return arr;
};

// const check_for_duplicates_filter = (arr) => {

//     let filtered_array = arr.filter(function(element, index, array) {
        
//         if(element !== array[index+1]) {
//             index--;
//             return element;
//         }
//     });

//     return filtered_array
// };

const check_for_duplicates_unique = (arr) => {

    let unique_array = [];

    for(let i = 0; i < arr.length; i++) {

        // if the current element does not exist in the unique array
        if(unique_array.indexOf(arr[i]) === -1) {
            unique_array.push(arr[i]);
        }
    }

    return unique_array;
};

console.log(check_for_duplicates_filter(sample_array_5));