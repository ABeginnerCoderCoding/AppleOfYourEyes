Webcam.set({
    width:350,
    height:300,
    iamge_format:'png',
    png_quality:90,
    });
camera = document.getElementById("camera");
Webcam.attach("#camera");
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;    
}