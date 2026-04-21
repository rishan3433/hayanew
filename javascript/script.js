function ShowSide() {
    const Side = document.querySelector(".nav-ul")
    Side.style.display = 'block'

    const btn = document.querySelector(".clickbtn")
    btn.style.display = 'none'
}

function CloseSide() {
    const Side = document.querySelector(".nav-ul")
    Side.style.display = 'none'

    const btn = document.querySelector(".clickbtn")
    btn.style.display = 'block'
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

var brandcount = -2;
var brandup = false;

setInterval(() => {
    var w = window.innerWidth;

    const img = document.getElementById("LM1-P");


    if (w > 850) {
        if (brandcount < -125) {
            brandup = true;
        }
        if (brandcount > 0) {
            brandup = false
        }

        if (brandup) {
            brandcount = brandcount - brandcount;
            brandcount = brandcount + 123

        } else {
            brandcount = brandcount - 0.5
        }
    }

    if (w < 850) {
        if (brandcount < -45) {
            brandup = true;
        }
        if (brandcount > 0) {
            brandup = false
        }

        if (brandup) {
            brandcount = brandcount - brandcount;
            brandcount = brandcount + 43

        } else {
            brandcount = brandcount - 0.5
        }
    }

    img.style.marginLeft = brandcount + "vh";

}, 50);