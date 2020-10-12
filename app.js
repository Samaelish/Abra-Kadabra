const ABRA = document.querySelector('.abra');
const strText = ABRA.textContent;
const splitText = strText.split("");
ABRA.textContent = "";


for (let i = 0; i < splitText.length; i++) {
    let char = (splitText[i] === " ") ? "&nbsp;" : splitText[i];
    ABRA.innerHTML += "<span>" + char + "</span>";
}


let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = ABRA.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}