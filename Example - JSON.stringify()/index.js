//JSON.stringify() = converts a JS object to a JSON string

const names = ["Austin", "Liam", "Lily", "George"];
const person = {
    "name": "Austin",
    "age": "30",
    "isMarried": "true",
    "hobbies": ["Singing", "cooking", "traveling"]
}

const people = [{
    "name": "Austin",
    "age": "30",
    "isMarried": "true"
},

{
    "name": "Liam",
    "age": "25",
    "isMarried": "false"
},

{
    "name": "George",
    "age": "45",
    "isMarried": "true"
},

{
    "name": "Lily",
    "age": "28",
    "isMarried": "false"
}
]

const jsonString = JSON.stringify(people);      //pass in array/object into the variable

console.log(people);
console.log(jsonString);

