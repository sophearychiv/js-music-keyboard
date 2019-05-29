$(document).ready( function() {
  $("button.note").on('click', function(event) {
    const myAudio = $("#" + event.currentTarget.textContent + "Audio");
    playAudio(myAudio);
  });
});

document.addEventListener('keydown', function(event) {
  let myAudio = $('#'+ event.key + 'Audio');
  playAudio(myAudio);
});

function playAudio(audioComponent) {
  if (audioComponent && audioComponent.length > 0) {
    audioComponent[0].currentTime = 0;
    audioComponent[0].play();
  }
}