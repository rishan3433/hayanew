
const acc = document.getElementById("Acc");

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
var countertrue = false;

var h = window.innerHeight;

if (h < 620) {
    for (let i = 1; i < 7; i++) {
        const images = document.getElementById("slide-" + i);

        images.style.marginRight = "45vh"

    }
}


setInterval(() => {
    var w = window.innerWidth;
    var h = window.innerHeight;

    const firstSlide = document.getElementById("slide-1");

    if (h > 620) {
        if (w < 850) {
            if (counter < -300) {
                countertrue = true;
            }
            if (counter > 0) {
                countertrue = false;
            }

            if (countertrue) {
                counter = counter - counter;
                counter = counter + 290;
            } else {
                counter = counter - 1;
            }

        }

        if (w > 850) {
            if (counter < -350) {
                countertrue = true;
            }
            if (counter > 0) {
                countertrue = false;
            }

            if (countertrue) {
                counter = counter - counter;
                counter = counter + 340;
            } else {
                counter = counter - 1.75;
            }

        }

        if (h < 620) {
            if (w < 850) {
                if (counter < -300) {
                    countertrue = true;
                }
                if (counter > 0) {
                    countertrue = false;
                }

                if (countertrue) {
                    counter = counter - counter;
                    counter = counter + 290;
                } else {
                    counter = counter - 1;
                }

            }

            
        }

    } else if (h < 620) {
        if (w < 850) {
            if (counter < -300) {
                countertrue = true;
            }
            if (counter > 0) {
                countertrue = false;
            }

            if (countertrue) {
                counter = counter - counter;
                counter = counter + 290;
            } else {
                counter = counter - 1;
            }

        }

        if (w > 850) {
            if (counter < -500) {
                countertrue = true;
            }
            if (counter > 0) {
                countertrue = false;
            }

            if (countertrue) {
                counter = counter - counter;
                counter = counter + 500;
            } else {
                counter = counter - 1.75;
            }

        }

        if (h < 620) {
            if (w < 850) {
                if (counter < -300) {
                    countertrue = true;
                }
                if (counter > 0) {
                    countertrue = false;
                }

                if (countertrue) {
                    counter = counter - counter;
                    counter = counter + 290;
                } else {
                    counter = counter - 1;
                }

            }

            
        }

    }

    firstSlide.style.marginLeft = counter + "vh";

}, 150);

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
        if (brandcount < -55) {
            brandup = true;
        }
        if (brandcount > 0) {
            brandup = false
        }

        if (brandup) {
            brandcount = brandcount - brandcount;
            brandcount = brandcount + 53

        } else {
            brandcount = brandcount - 0.5
        }
    }

    img.style.marginLeft = brandcount + "vh";

}, 50);