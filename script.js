let movies = [
 {movieName: "jhankar", rating: 4.5, category: "scifi"},
 {movieName: "abdullahpur", rating: 5.3, category: "fury"},
 {movieName: "abdullahpur", rating: 8.3, category: "scifi"},
];

let topMovies = movies.filter
((m)=>
    m.category === "scifi").sort
((a, b)=> b.rating - a.rating)?.map
((m)=> `the top movie is ${m.movieName} and its rating rate ${m.rating}`).forEach
((m)=> console.log(`see or not want or not ${m}`));

console.log(topMovies);

