const $td = document.querySelectorAll("td");
const $paula = document.getElementById("paula");
const $mariaJesus = document.getElementById("mariaJesus");
const $bruno = document.getElementById("bruno");
const $angel = document.getElementById("angel");
const $javi = document.getElementById("javi");
const $mariaMar = document.getElementById("mariaMar");

$td.forEach((td) => {
    td.addEventListener("mouseover", (event) => {
        if(td.textContent.includes("Cliente")){
         bruno.style.color = "lightblue";
         console.log("Cliente");
    }-
})
});


