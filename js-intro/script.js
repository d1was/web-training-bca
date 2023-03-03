// console.log("First program");

// console.log(document.body.style.background = "red");

// window.setTimeout(function () {
//     document.body.style.background = "brown";
// }, 5000);

// window.setInterval(function () {
//     document.body.innerHTML = `<h1>${new Date()}</h1>`
// }, 1000);


// const result = window.prompt("What is your name ?");
// console.log(result);

// JS Selectors

// const title = document.getElementsByClassName("red");
// title.forEach(function (item) {
//     item.style.fontSize = "40px";
// })

const firstList = document.querySelectorAll(".red");

firstList.forEach(function (item) {
    item.style.color = 'red';
})

// Events
const button = document.querySelector('button');

document.addEventListener("keyup", function (event) {
    console.log(event);
    document.body.style.background = "purple";
})
