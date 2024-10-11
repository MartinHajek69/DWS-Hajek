let jedna = document.getElementById('jedna')

jedna.addEventListener('click', function(){
    alert("alert")

})

const dva = document.getElementById('dva')

dva.addEventListener('click', function(){
    dva.textContent = "ahoj";
   

})

function Showtext(){
    var p = document.createElement("p");
    p.innerText = "ZDRAVIM";
    document.getElementById('text').appendChild(p);
}

document.getElementById("hoverText").addEventListener("mouseover", function() {
    this.textContent = "Text byl změněn!";
});

document.getElementById("hoverText").addEventListener("mouseout", function() {
    this.textContent = "Přejeďte myší sem.";
});

function hellouser(){
    let user = document.getElementById('user').value;
    alert('Vítám tě na webové stránce ' + user);
}

let time= document.getElementById('time');
let finaltime = document 

document.getElementById("dateButton").addEventListener("click", function() {
    const now = new Date();
    document.getElementById("currentDate").textContent = now.toLocaleDateString();
});