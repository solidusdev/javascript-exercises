/*  A palindrome is a word that mirrors itself reversely
    example: civic, stats, racecar
*/

const string1 = "civic";
const string2 = "tom";
const string3 = "racecar";

const check_for_palindrome = (string_input) => {

    let reversed_string = "";
    let reversed_array = [];
    
    for(let i = string_input.length - 1; i >= 0; i--) {
        reversed_array.push(string_input[i])
    }

    reversed_string = reversed_array.join("");

    if(string_input === reversed_string) {
        return `${string_input} is a palindrome!`;
    }

    else {
        return `${string_input} is NOT a palindrome!`;
    }
}

console.log(check_for_palindrome(string1));
console.log(check_for_palindrome(string2));
console.log(check_for_palindrome(string3));
