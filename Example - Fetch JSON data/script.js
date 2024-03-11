console.log("Hello")

fetch("books.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("books.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.title)))

fetch("books.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.author)))