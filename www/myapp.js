/**
 * Created by paul on 24.11.16.
 */

document.addEventListener("deviceready", function () {
    console.log("Device is ready!");
    //StatusBar.hide();
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByName("red");
});
    
function notifyMe(){
    navigator.notification.alert("You'v been Notified!", null, "Header of Alert here", "Ok");
}
    
function confirmCallback(buttonIndex){
    navigator.notification.alert("Test " + buttonIndex, null)
}

function confirmDelete(){
    navigator.notification.confirm("Are you sure?", confirmCallback, "Header of Alert here", ["Delete","No"]);
}
    
    
    //    alert("Device is Ready!");

//    document.addEventListener("backbutton", function(){
//       alert("Back button pressed!");

//function buttonClick(){
//    console.log("Message here!");
//}



