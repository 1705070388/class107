prediction1 = "";
prediction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oa9B4k_45/model.json", modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speakData1 = "The first prediction is " + prediction1;
    speakData2 = "And the second prediction is" + prediction2;
    var utterthis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterthis);
}