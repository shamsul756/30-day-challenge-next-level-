

let demoValue = "dew";


try {
    if (demoValue == "") throw "empty string";

    if (demoValue.length > 2)
        throw `demovalue length ${demoValue.length}`;
}
catch (err) {
console.log(err);
}
