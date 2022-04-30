

Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:90
});
mycame=document.getElementById("camera");
Webcam.attach(mycame);

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='captured_image'>"
    })

}
console.log("ml5version=",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/baUMUmgaS/model.json",modelloaded);
function modelloaded()
{
    console.log("moedelisloaded")
}
function chitchat()
{
    image=document.getElementById("captured_image");
    classifier.classify(image,gotresult);
}
function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
   }
   else{
       console.log(results);
       document.getElementById("result_object_name").innerHTML=results[0].label;
       document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
   }

}
