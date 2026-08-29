// example of spread opearator
const profail = {
    name: "rayhan",
    age: 32
};

const stdHistory = {
    pastYear: 2022,
    currentYear: 2026
}
const fullHistory = {
    ...profail,
    ...stdHistory
};

console.log(fullHistory);