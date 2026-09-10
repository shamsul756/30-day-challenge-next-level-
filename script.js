"use strict"

const lineCheck = document.querySelector(".text-hide");

const checkBtn = document.getElementById("hide");

checkBtn.addEventListener("click", () => {
      lineCheck.classList.remove("text-hide", "bold");
     
});

const containerId = document.getElementById("container");
let name = "devloper shamsul build this button";
const div = document.createElement("div");
div.innerHTML = `    <p>woudl u please click ${name} to get surprise</p>
    <button id = "hide">clicked</button>`;

    containerId.appendChild(div);


    let arra = [2, 34, 23, 5];
     const filterCheck = arra.filter(i => i != 23);
     console.log(filterCheck);