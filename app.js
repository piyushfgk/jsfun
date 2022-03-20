// "use strict"

const element = {
    age: document.getElementById("age")
};

(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    myconsole = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }

        console.log(message);
    }
})();

function better(p){
    let remark = "";

    if (p.age == 0) remark = "Shame 🤔🤔🤔";
    else remark = checkBetter(p.age);

    myconsole(remark);
}


function checkBetter(v){
    if (v > 20) return "You are not authorised 😛";
    if (v > 15) return "You are welcomed 🙏";
    if (v > 5) return "Go to hell 😫";
    if (v <= 5) return "Sweet boy 👦, go to home 🏠";
}


element.age.setAttribute("min", 0);
element.age.setAttribute("max", 26);
element.age.addEventListener("change", (e) => {

    const el = e.target;

    if (el.value == 0 || el.value == 26) document.getElementById('log').textContent = "";
    if (el.value == 26) el.value = 25;

    const person = {
        age: el.value
    };

    better(person);

    e.preventDefault();
})