function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clickCountersessionStorage() {
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
        sessionStorage.clickcount = 0;
    }
    document.getElementById("btn2").innerHTML = sessionStorage.clickcount;
}

function clickCounterlocalStorage() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 0;
    }
    document.getElementById("btn3").innerHTML = localStorage.clickcount;
}
