const headline = "Your Tube Downloader";
var animationText = "";
var i = 0;
function textAnimation() {
    if (headline.length == animationText.length) {
        i = 0;
        animationText = "";
        document.getElementById("headline").innerText = "";
    }
    else {
        animationText = animationText + headline[i];
        i += 1;
        document.getElementById("headline").innerText = animationText;
    }


}

setInterval(textAnimation, 500);


document.getElementById("btn").addEventListener('click', function () {
    const res = document.getElementById("resolution").value;

    const text = document.getElementById("inputurl").value;
    var vid = "";
    if (text.includes("be/")) {

        let index = text.indexOf("be/");
        index += 3;
        for (let i = 0; i < 11; i++) {
            vid = vid + text[index];
            index++;

        }
    }
    else if (text.includes("?v=")) {
        let index = text.indexOf("?v=");
        index += 3;
        for (let i = 0; i < 11; i++) {
            vid = vid + text[index];
            index++;


        }
    }
    else {
        console.log("Please enter a valid url !");
    }

    videoId(vid);
    function videoId(vid) {
        if (vid) {
            document.getElementById("image").innerHTML = `<img src="https://img.youtube.com/vi/${vid}/${res}.jpg">`
            document.getElementById("download").innerHTML = `<a href="https://img.youtube.com/vi/${vid}/${res}.jpg" download>Download</a>`

        }
    }




})


function updatescreen() {

    if (window.innerWidth > 700) {
        document.getElementById("submenu").style.display = "none"
    }

}
updatescreen();
window.addEventListener("resize", updatescreen);


document.getElementById("menubar").addEventListener('click', function () {

    let toogle = document.getElementById("submenu").style.display;

    if (toogle == "none") {
        document.getElementById("submenu").style.display = "block";

    }
    else {
        document.getElementById("submenu").style.display = "none";
    }



})

