function onload(){
    var thirtysix = document.getElementById("36");

    thirtysix.addEventListener("mouseover",mouseOver);
    thirtysix.addEventListener("mouseout",mouseOut);
    
    
    function mouseOver() {
        thirtysix.src = "https://pkk.netlify.com/img/s9/36h.png";
    }

    function mouseOut() {
        thirtysix.src = "https://pkk.netlify.com/img/s9/36.png";
    }
}