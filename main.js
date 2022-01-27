function startClassification(){
navigator.mediaDevices.getUserMedia({
    audio:true
});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Avr9RxpMU/model.json",modelReady)
}
function modelReady(){
classifier.classify(gotResult);
}
function gotResult(){
    if(error){
    console.log(error);
}
else{
    console.log(result);
    random_color_r=Math.floor(Math.random()*255)+1;
    random_color_g=Math.floor(Math.random()*255)+1;
    random_color_b=Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML="I can hear-"+result[0].label;
document.getElementById("result_confidence").innerHTML="Accuracy-"(result[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
document.getElementById("result_confidence").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";

img1=document.getElementById("cat.png");
img2=document.getElementById("dog.png");
img3=document.getElementById("tiger.png");


if(result[0].label=="Meowing"){
    img1.src='cat.gif';
    img2.src='dog.png';
    img3.src='tiger.png';


}
else if(result[0].label=="Roaring"){
    img1.src='cat.png';
    img2.src='dog.gif';
    img3.src='tiger.png';

}

else{
    img1.src='cat.png';
    img2.src='dog.png';
    img3.src='tiger.gif';

}

}
}