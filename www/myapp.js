document.addEventListener("deviceready", function () {
    console.log("Device is ready!");
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByName("red");
});
    
function notifyMe() {
    navigator.notification.alert("You'v been Notified!", null, "Header of Alert here", "Ok");
}
    
function confirmDelCallback(buttonIndex) {
    navigator.notification.alert("Test " + buttonIndex, null);
}

function confirmDelete() {
    navigator.notification.confirm("Are you sure?", confirmDelCallback, "Header of Alert here", ["Delete", "No"]);
}
    
// PICTURE //

function cameraFailed() {
    navigator.notification.alert("Camera not aviable", null);
}

function takePicture() {
    navigator.camera.getPicture(takePictureCallback, cameraFailed, 
    {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
    });
}

function takePictureCallback(picture) {
    var img = document.querySelector("#output img");
    img.src = "data:image/jpg;base64,"+ picture;
}

/* SELFIE */

function takeSelfie() {
    navigator.camera.getPicture(takePictureCallback, cameraFailed, 
    { 
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: true,
        cameraDirection: Camera.Direction.FRONT
    });
}


/* PICK FROM GALLERY */

function pickPictureCallback(pictureURL) {
    var img = document.querySelector("#output img");
    img.src = pictureURL;
}

function pickPicture() {
    navigator.camera.getPicture(pickPictureCallback, cameraFailed, 
    { quality: 80,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true  });
}