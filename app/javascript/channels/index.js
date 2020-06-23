// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)


function uploadImages(){
  var ajaxUploadImages = new XMLHttpRequest();
  ajaxUploadImages.onreadystatechange = function(){

    if(ajaxUploadImages.readyState == 4){
      //the request is completed, now check its status
      if(ajaxUploadImages.status == 200){
        // document.getElementById("welcome").innerHTML = ajaxUploadImages.responseText;
        console.log('Succesfully uploaded the images.');
      }
      else{
        console.log("Status error: " + ajaxUploadImages.status);
      }
    }
    else{
      console.log("Ignored readyState: " + ajaxUploadImages.readyState);
    }


  }
  ajaxUploadImages.open('GET', '/');
  ajaxUploadImages.send();
}