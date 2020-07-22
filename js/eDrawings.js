function showHandle(clicked_id) {
    document.getElementById("handle").setAttribute("src", "images/Handle.html");

    document.getElementById("handle").classList.toggle("hide");

    document.getElementById(clicked_id).classList.toggle("full-screen");
    document.getElementById("body").classList.toggle("faded");

    document.getElementById("handleImg").classList.toggle("hide");
}

function showValve(clicked_id) {
    document.getElementById("valve").setAttribute("src", "images/valve.html");

    document.getElementById("valve").classList.toggle("hide");

    document.getElementById(clicked_id).classList.toggle("full-screen");
    document.getElementById("body").classList.toggle("faded");

    document.getElementById("valveImg").classList.toggle("hide");
}

function showExplode(clicked_id) {
    document.getElementById("valveVideo").classList.toggle("hide");

    document.getElementById(clicked_id).classList.toggle("full-screen");
    document.getElementById("body").classList.toggle("faded");
}