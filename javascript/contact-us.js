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

const ScriptUrl = "https://script.google.com/macros/s/AKfycbyhSsZlhLbJZhgmI1F6y_CtUXjRy6BL9RV-BYv6eFIAqPCqDz381Oa22ybT6e2VIap1/exec";
const form = document.forms["contact-us-form"];
form.addEventListener("submit", (e) => {
    const btn = document.getElementById("submit")
    const btn1 = document.getElementById("submit1")

    btn.style.display = "none";
    btn1.style.display = "block";

    e.preventDefault();

    const formData = new FormData(form);

    var name = document.getElementById("Name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    fetch(ScriptUrl, { method: "POST", body: formData }).then((response) => {
        alert("Data Submitted. Our Team Will Conatct You as Soon As Possible");
    })
})