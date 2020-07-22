function moveLeft3() {
    
    var picture = document.getElementsByClassName("scroll")[0].getAttribute('id');
    picture = parseFloat(picture);
    picture = picture + 1;

    if (picture > 3) {
        picture = picture - 3;
    }

    document.getElementsByClassName("scroll")[0].src = "images/ScrewConveyor" + picture + ".jpg";
    document.getElementsByClassName("scroll")[0].id = picture;
}

function moveRight3() {
    
    var picture = document.getElementsByClassName("scroll")[0].getAttribute('id');
    picture = parseFloat(picture);
    picture = picture - 1;

    if (picture == 0) {
        picture = picture + 3;
    }

    document.getElementsByClassName("scroll")[0].src = "images/ScrewConveyor" + picture + ".jpg";
    document.getElementsByClassName("scroll")[0].id = picture;
}

function moveLeft4() {
    
    var picture = document.getElementsByClassName("scroll")[1].getAttribute('id');
    picture = parseFloat(picture);
    picture = picture + 1;

    if (picture > 3) {
        picture = picture - 4;
    }

    document.getElementsByClassName("scroll")[1].src = "images/ArchitecturalProjectSingleStory" + picture + ".jpg";
    document.getElementsByClassName("scroll")[1].id = picture;
}

function moveRight4() {
    
    var picture = document.getElementsByClassName("scroll")[1].getAttribute('id');
    picture = parseFloat(picture);
    picture = picture - 1;

    if (picture < 0) {
        picture = picture + 4;
    }

    document.getElementsByClassName("scroll")[1].src = "images/ArchitecturalProjectSingleStory" + picture + ".jpg";
    document.getElementsByClassName("scroll")[1].id = picture;
}