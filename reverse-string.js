let string1 = "cat";
let string2 = "harry";
let string3 = "tom";

const reverse_string = (string_input) => {

    let reversed_string = "";
    let reversed_array = [];

    for(let i = string_input.length-1; i >= 0; i--) {
        reversed_array.push(string_input[i])
    }

    reversed_string = reversed_array.join("");

    console.log(`Original string: ${string_input}`)
    return `Reversed String: ${reversed_string} \n`;
}

console.log(reverse_string(string1));
console.log(reverse_string(string2));
console.log(reverse_string(string3));