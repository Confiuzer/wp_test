
var counter = 10;
var gameId = document.getElementsByClassName('game')[0].id;
window.onload = getRandomImages;


function timerFunction() {
  if(counter == 0) { counter = 10; }
  document.getElementById('timer').innerHTML = counter;
  showImage();
  counter--;
  setTimeout(timerFunction, 1000);
}

function showImage() {
  var element = document.getElementById('image-holder');
  element.style.display = 'block';
  element.src = images[10 - counter];
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


// window.postPlay = function() {
//   var ajaxPostPlay = new XMLHttpRequest();
//   ajaxPostPlay.setRequestHeader("Content-Type", "application/json");
//   ajaxPostPlay.onreadystatechange = function(){

//     if(ajaxPostPlay.readyState == 4){
//       //the request is completed, now check its status
//       if(ajaxPostPlay.status == 200){
//         document.getElementById("results").innerHTML = ajaxPostPlay.responseText;
//         console.log('Succesfully uploaded the images.');
//         console.log(ajaxPostPlay.responseText);
//       }
//       else{
//         console.log("Status error: " + ajaxPostPlay.status);
//       }
//     }
//     else{
//       console.log("Ignored readyState: " + ajaxPostPlay.readyState);
//     }


//   }
//   ajaxPostPlay.open('POST', '/games');
//   ajaxPostPlay.send(JSON.stringify({name:"", time:"2pm"}));
// }

