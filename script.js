const student = {
    name: "shamsul islam shams",
    age: 22,
    address: "sylhet, bangladesh",
    history: {
        about: "hi iam a front end devloper i really do it which i love ",
        gogl: "next goal is concur new tech"
    }
}

// destructuring 

const { history: { about, gogl } } = student;

console.log(history);