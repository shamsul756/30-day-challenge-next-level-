let products =[

    {title: "mouse", price : 500, category: "electronics"},
    {title: "bike", price : 4500, category: "rider"},
    {title: "keyboard", price : 1400, category: "electronics"},
    {title: "venche cycle", price : 1500, category: "vehicle"},
];

let totalPrice = products.reduce((acc, current)=>{
    return acc += current.price;
}, 0);

console.log(totalPrice);



let sorted = [32, 4, 2, 45, 2, 22, 4222, 423434, 45].sort((a , b) => b - a);
console.log(sorted);