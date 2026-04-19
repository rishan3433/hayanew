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
    counter++;
    var closed = document.querySelector("#slide-" + counter);

    if (counter == 7) {
        counter = 1;
        closed = document.querySelector("#slide-" + counter);

    }

    Opened.style.display = 'none';
    closed.style.display = 'block';
}, 2000);
