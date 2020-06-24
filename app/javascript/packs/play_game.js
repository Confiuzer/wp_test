
var counter = 10;
var gameId = document.getElementsByClassName('game')[0].id;
var currentImage = '';

window.onload = getRandomImages;


function timerFunction() {
  if(counter == 0) { counter = 10; }
  document.getElementById('timer').innerHTML = counter;
  showImage();
  counter--;
  setTimeout(timerFunction, 1000);
}

function showImage() {
  currentImage = images[10 - counter];
  var element = document.getElementById('image-holder');
  element.style.display = '';
  element.src = currentImage;
}

function verifyImagesLength() {
  var i;
  var j = 0;
  if (images.length < 10) {
    for (i = (images.length -1); i < 10; i++) {
      images[i] = images[j];
      j++
    }
  }
}

function addToPlaysTable(play) {
  var table = document.getElementById("plays-table");
  var row = table.insertRow(1); // Insert it right after the table header
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = play.tick;
  cell2.innerHTML = "<a target='_blank' href=" + play.image_url + "><img src=" + play.image_url + " width='100' height='100'></a>";
}




var images = [];
function getRandomImages() {
  var ajaxGetRandomImages = new XMLHttpRequest();
  ajaxGetRandomImages.onreadystatechange = function(){

    if(ajaxGetRandomImages.readyState == 4){
      //the request is completed, now check its status
      if(ajaxGetRandomImages.status == 200){
        images = JSON.parse(ajaxGetRandomImages.responseText);
        verifyImagesLength();
        setTimeout(timerFunction, 1000);
      }
      else{
        console.log("Status error: " + ajaxGetRandomImages.status);
      }
    }
  }
  ajaxGetRandomImages.open('GET', '/games/random_images/' + gameId);
  ajaxGetRandomImages.setRequestHeader("Content-Type", "application/json");
  ajaxGetRandomImages.send();
}


window.postPlay = function() {
  var token = document.querySelector('meta[name="csrf-token"]').content;
  var ajaxPostPlay = new XMLHttpRequest();
  ajaxPostPlay.onreadystatechange = function(){

    if(ajaxPostPlay.readyState == 4){
      //the request is completed, now check its status
      if(ajaxPostPlay.status == 201){
        result = JSON.parse(ajaxPostPlay.responseText);
        addToPlaysTable(result);
      }
      else{
        console.log("Status error: " + ajaxPostPlay.status);
      }
    }
  }
  ajaxPostPlay.open('POST', '/plays');
  ajaxPostPlay.setRequestHeader("Content-Type", "application/json");
  ajaxPostPlay.setRequestHeader('X-CSRF-Token', token);
  ajaxPostPlay.send(JSON.stringify({tick: counter, image_url: currentImage, game_id: gameId}));
}

