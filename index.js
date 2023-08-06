function makeSound(key){
    switch (key) {
        case "w":
            let wSound = new Audio("/drum/sounds/crash.mp3");
            wSound.play();
            break;
        case "a":
            let aSound = new Audio("/sounds/kick-bass.mp3");
            aSound.play();
            break;
        case "s":
            let sSound = new Audio("/drum/sounds/snare.mp3");
            sSound.play();
            break;
        case "d":
            let dSound = new Audio("/drum/sounds/tom-1.mp3");
            dSound.play();
            break;
        case "j":
            let jSound = new Audio("/drum/sounds/tom-2.mp3");
            jSound.play();
            break;
        case "k":
            let kSound = new Audio("/drum/sounds/tom-3.mp3");
            kSound.play();
            break;
       case "l":
            let lSound = new Audio("/drum/sounds/tom-4.mp3");
            lSound.play();      
            break;
    
        default:
            break;
    }
}


let btn  = document.querySelectorAll(".drum");
for(let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        let text = this.innerHTML;
        makeSound(text);
    });
}

document.addEventListener("keypress" , function(e){
    makeSound(e.key);
});

