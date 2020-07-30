function fullScreen(clicked_id) {
    var classes = document.getElementById(clicked_id).className;
    if (classes = "align-bottom-cell") {
        document.getElementById(clicked_id).classList.toggle("align-bottom-cell");
    }
    document.getElementById(clicked_id).classList.toggle("full-screen");
    document.getElementById("body").classList.toggle("faded");
}

function fullScreen1(clicked_id) {
    document.getElementById(clicked_id).classList.toggle("full-screen");
    document.getElementById("body").classList.toggle("faded");
}