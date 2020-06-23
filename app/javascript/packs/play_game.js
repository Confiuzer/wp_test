
counter = 10;
document.onload = setTimeout(timerFunction, 1000);

function timerFunction() {
  if(counter == 0) { counter = 10; }
  document.getElementById('timer').innerHTML = counter;
  counter--;
  setTimeout(timerFunction, 1000);
}

window.getRandomImages = function() {
  var ajaxGetRandomImages = new XMLHttpRequest();
  ajaxGetRandomImages.onreadystatechange = function(){

    if(ajaxGetRandomImages.readyState == 4){
      //the request is completed, now check its status
      if(ajaxGetRandomImages.status == 200){
        document.getElementById("results").innerHTML = ajaxGetRandomImages.responseText;
        console.log(ajaxGetRandomImages.responseText);
      }
      else{
        console.log("Status error: " + ajaxGetRandomImages.status);
      }
    }
  }
  ajaxGetRandomImages.open('GET', '/games/random_images/10');
  ajaxGetRandomImages.setRequestHeader("Content-Type", "application/json");
  ajaxGetRandomImages.send();
}

// // POST EXAMPLE REQUEST
// window.getRandomImages = function() {
//   var ajaxGetRandomImages = new XMLHttpRequest();
//   ajaxGetRandomImages.setRequestHeader("Content-Type", "application/json");
//   ajaxGetRandomImages.onreadystatechange = function(){

//     if(ajaxGetRandomImages.readyState == 4){
//       //the request is completed, now check its status
//       if(ajaxGetRandomImages.status == 200){
//         document.getElementById("results").innerHTML = ajaxGetRandomImages.responseText;
//         console.log('Succesfully uploaded the images.');
//         console.log(ajaxGetRandomImages.responseText);
//       }
//       else{
//         console.log("Status error: " + ajaxGetRandomImages.status);
//       }
//     }
//     else{
//       console.log("Ignored readyState: " + ajaxGetRandomImages.readyState);
//     }


//   }
//   ajaxGetRandomImages.open('POST', '/games');
//   ajaxGetRandomImages.send(JSON.stringify({name:"", time:"2pm"}));
// }

