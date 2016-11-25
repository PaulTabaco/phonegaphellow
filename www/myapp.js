/**
 * Created by paul on 24.11.16.
 */
function buttonClick(){
    console.log("Message here!");
}

document.addEventListener("deviceready", function(){
    alert("Device is Ready!");

    document.addEventListener("backbutton", function(){
       alert("Back button pressed!");
    });
});

