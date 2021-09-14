// print the outer HTML of the navigation bar
const navBar = document.querySelector(".nav-bar");
// console.log(navBar.outerHTML);

// print the inner HTML of the navigation bar
// console.log(navBar.innerHTML);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);

// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");
// select the img element and add a src attribute
document.querySelector("img").src = "";
// change the font color of the h1 element
