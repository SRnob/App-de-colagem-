var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textBox");


   function start() { 
    Textbox.innerHTML = ""; 
    recognition.start();
 }


recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    if(content == "tire minha selfie"){
        speak();
        console.log("Tirando selfie");
    };
    
}

function speak(){
    var synth = window.speechSynthesis;
    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeselfie();
        save();
    },5000);
}

camera = document.getElementById("Camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});

function takeselfie(){
    console.log("função take selfie");
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieimg" src="' +data_uri+'"/>';
    });
}

function save(){
    link = document.getElementById("link");
    img = document.getElementById("result1").src;
    link.href = img;
    link.click();

}

