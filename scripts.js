const catbutton = document.getElementById("catbutton");
const closebutton = document.getElementById("closebutton");
const modal = document.getElementById("modal");
const morebutton = document.getElementById("morebutton");

catbutton.addEventListener("click", () => {
    modal.classList.add("active");
});

closebutton.addEventListener("click", () => {
    modal.classList.remove("active");
});

morebutton.addEventListener("click", () => {
    getExtra();
});

function getExtra() {
    var xml = new XMLHttpRequest();
    xml.open("GET", "extra.html", true);
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("extrastuff").innerHTML = xml.responseText;
        }
    };
    xml.send();
}

//React stuff below for jolan.dev/react.html
