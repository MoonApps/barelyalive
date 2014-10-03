var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
var encodingType; // sets the encoding of the pic
var btnText = "Continue";

function onBodyLoad() {
    // Wait for Cordova to connect with the device
    document.addEventListener("deviceready",onDeviceReady,false);
}

// Cordova is ready to be used
function onDeviceReady() {
    // display welcome scree
    //
    //navigator.splashscreen.show();
    // set camera env vars
    //
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
    encodingType=navigator.camera.EncodingType;
    // load app
    //
//    setTimeout(function() {
//        navigator.splashscreen.hide();
//    }, 3000);
}

// Called when a photo is successfully retrieved
function onPhotoURISuccess(imageURI) {
    // Uncomment to view the base64 encoded image data
      // console.log(imageData);
      //window.location = "result.html";
      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = imageURI;
      var ff = new FaceFucker();
      ff.addBarelyAlive(smallImage);
    
}
function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);
      //window.location = "result.html";
      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
      var ff = new FaceFucker();
      ff.addBarelyAlive(smallImage);
    }
// Also called when a photo is successfully retrieved
//function onPhotoDataSuccess(imageData) {
//    // Uncomment to view the image file URI 
//    //goToView("result.html");
//    // Get image handle
//    //
//    $('#result').attr({
//        src: "data:image/jpeg;base64," + imageData
//    });
//
//    // Show the captured photo
//    // The inline CSS rules are used to resize the image
//    //
//    console.log("post img src assignment");
//}

// on photo.html load
//
function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true});
}

// Button calls the following function
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image uri
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
      destinationType: destinationType.FILE_URI });
}

// Button calls the following function
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
      destinationType: destinationType.FILE_URI,
      sourceType: source });
}

// Called if something bad happens.
function onFail(message) {
    alert('There may have been a camera issue: ' + message);
}