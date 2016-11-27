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
    alert("Notified!");
}
    
    
    
    //    alert("Device is Ready!");

//    document.addEventListener("backbutton", function(){
//       alert("Back button pressed!");

//function buttonClick(){
//    console.log("Message here!");
//}



