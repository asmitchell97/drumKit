//Check button clicked
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

//Check for key press
document.addEventListener("keydown", event => {
  playSound(event.key);
  buttonAnimation(event.key);
})

//Play the sound for the click.press
function playSound(character){

  switch (character) {
    case 'w':
      var tom1Audio = new Audio('sounds/tom-1.mp3');
      tom1Audio.play();
      break;

    case 'a':
      var tom2Audio = new Audio('sounds/tom-2.mp3');
      tom2Audio.play();
      break;

    case 's':
      var tom3Audio = new Audio('sounds/tom-3.mp3');
      tom3Audio.play();
      break;

    case 'd':
      var tom4Audio = new Audio('sounds/tom-4.mp3');
      tom4Audio.play();
      break;

    case 'j':
      var snareAudio = new Audio('sounds/snare.mp3');
      snareAudio.play();
      break;

    case 'k':
      var crashAudio = new Audio('sounds/crash.mp3');
      crashAudio.play();
      break;

    case 'l':
      var kickBassAudio = new Audio('sounds/kick-bass.mp3');
      kickBassAudio.play();
      break;

    default:
      console.log(character + " is not assigned to a drum sound");
  };

}

function buttonAnimation(character){
  try{
    var pressedButton = document.querySelector('.drum.' + character);
    pressedButton.classList.add("pressed");

    setTimeout(function() {
      pressedButton.classList.remove("pressed");
    }, 100);
  }
  catch(err){
    console.log(character + " does not have a drum sound");
    return err;
  };

}


// var tom1Audio = new Audio('sounds/tom-1.mp3');
// tom1Audio.play();
