function ShowSide() {
    const Side = document.querySelector(".nav-ul")
    Side.style.display = 'block'

    const btn = document.querySelector(".clickbtn")
    btn.style.display='none'
}   

function CloseSide() {
    const Side = document.querySelector(".nav-ul")
    Side.style.display = 'none'

    const btn = document.querySelector(".clickbtn")
    btn.style.display='block'
}   

var counter = 1;

setInterval(() => {
    var Opened = document.querySelector("#slide-" + counter);
    var radio_open = document.querySelector(".slide-r-" + counter);
    counter++;
    var radio_close = document.querySelector(".slide-r-" + counter);
    var closed = document.querySelector("#slide-" + counter);

    if (counter == 7) {
        counter = 1;
        closed = document.querySelector("#slide-" + counter);
        radio_close = document.querySelector(".slide-r-" + counter);

    }

    Opened.style.display = 'none';
    closed.style.display = 'block';
    radio_open.checked = false;
    radio_close.checked = true;
}, 2000);
