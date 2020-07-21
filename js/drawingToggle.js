function moveLeft() {
    
    var picture = document.getElementsByClassName("autocad")[0].getAttribute('id');
    console.log(picture);
    picture = parseFloat(picture);
    picture = picture + 1;

    if (picture > 3) {
        picture = picture - 3;
    }

    console.log(picture);

    document.getElementsByClassName("autocad")[0].src = "images/ScrewConveyor" + picture + ".jpg";
    document.getElementsByClassName("autocad")[0].id = picture;
    console.log("images/ScrewConveyor" + picture + ".jpg")
}

function moveRight() {
    
    var picture = document.getElementsByClassName("autocad")[0].getAttribute('id');
    console.log(picture);
    picture = parseFloat(picture);
    picture = picture - 1;

    if (picture == 0) {
        picture = picture + 3;
    }

    console.log(picture);

    document.getElementsByClassName("autocad")[0].src = "images/ScrewConveyor" + picture + ".jpg";
    document.getElementsByClassName("autocad")[0].id = picture;
    console.log("images/ScrewConveyor" + picture + ".jpg")
}