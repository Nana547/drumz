const newClapA = new Audio("sounds/clap.wav");
const newHitHats = new Audio("sounds/hihat.wav");
const newKickD = new Audio("sounds/kick.wav");
const newOpenHatF = new Audio("sounds/openhat.wav");
const newBoomG = new Audio("sounds/boom.wav");
const newRideH = new Audio("sounds/ride.wav");
const newSnareJ =new Audio("sounds/snare.wav");
const newTomK = new Audio("sounds/tom.wav");
const newTinkL = new Audio("sounds/tink.wav");


const clap = document.getElementById("clapA");
clap.addEventListener("click", () =>{
    FileList.clapA = newClapA.play()
})
const hit = document.getElementById( "hitHats");
hit.addEventListener("click", () =>{
    hit.hitHatsF = newHitHats.play()
})
const kick = document.getElementById("kickD");
kick.addEventListener("click", () => {
    kick.kickD = newKickD.play()
})
const openh = document.getElementById("openHatF");
openh.addEventListener("click", () =>{
    openh.openHatF = newOpenHatF.play()
})
const boom = document.getElementById("boomG");
boom.addEventListener("click" , () =>{ 
    boom.boomG = newBoomG.play()
})
const ride = document.getElementById("rideH");
ride.addEventListener("click", ( )=> {
    ride.rideH = newRideH.play( )
})
const snare = document.getElementById("snareJ");
snare.addEventListener("click" ,( ) => {
    snare.snareJ = newSnareJ.play()
})
const tom = document.getElementById("tomK");
tom.addEventListener("click", () => { 
    tom.tomk = newTomK.play()
})
const tink = document.getElementById("tinkL");
tink.addEventListener("click", ( ) => {
    tink.tinkL = newTinkL.play()
})


