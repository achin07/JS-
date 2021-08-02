var x=document.querySelectorAll(".drum").length;

for(var i=0;i<x;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var butt=this.innerHTML;
        makeSound(butt);
        makeAnimation(butt);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "W":
            var audio=new Audio("tom-1.mp3");
            audio.play();
            break;
        case "A":
            var audio=new Audio("tom-2.mp3");
            audio.play();
            break;
        case "S":
            var audio=new Audio("tom-3.mp3");
            audio.play();
            break;
        case "D":
            var audio=new Audio("tom-4.mp3");
            audio.play();
            break;
        case "J":
            var audio=new Audio("snare.mp3");
            audio.play();
            break;
        case "K":
            var audio=new Audio("crash.mp3");
            audio.play();
            break;
        case "L":
            var audio=new Audio("kick-bass.mp3");
            audio.play();
            break;
    }

}

function makeAnimation(currkey){
    var actKey=document.querySelector("."+currkey);
    actKey.classList.add("pressed");
    setTimeout(function(){
        actKey.classList.remove("pressed")
    },100);
}