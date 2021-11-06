console.log("hello");
var numberofdrumbtn = document.querySelectorAll(".drum").length;

for (i = 0; i <= numberofdrumbtn; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
            console.log(this.className); //we can also user instead of innerHTML
        var aud = this.innerHTML;
        makesound(aud);
       

    });

}

document.addEventListener("keypress",function(event){
    console.log(event.key);
    makesound(event.key);
})


function makesound(key){
    switch (key) {
        case 's':
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
    

        case "r":
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;

        case "g":
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;

        case "m":
            var audio4 = new Audio("sounds/kick-bass.mp3");
            audio4.play();
            break;

        case "p":
            var audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;

        case "d":
            var audio6 = new Audio("sounds/tom-4.mp3");
            audio6.play();
            break;
        case "n":
            var audio7 = new Audio("sounds/crash.mp3");
            audio7.play();
            break;

        default:
            console.log(this.innerHTML);
            break;


    }

}






















