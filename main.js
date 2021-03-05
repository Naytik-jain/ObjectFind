status="";
inputObject="";
objects="";
function preload(){

}
function setup(){
canvas=createCanvas(640,420);
canvas.center;
video=createCapture(VIDEO);
video.size(640,420);
video.hide();
}
function startButton(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    inputObject=document.getElementById("inputs").value;

}
function modelLoaded(){
console.log("Model Loaded");    
status=true;
}
function draw(){
image(video,0,0,640,420); 
if(status!= ""){
    for (let i = 0; i < objects.length; i++) {
        percent=floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15, objects[i].width, objects[i].height);    
        fill ('#ffffff');
        noFill();
        stroke('#ffffff');
        rect( objects[i].x, objects[i].y, objects[i].width , objects[i].height  );
        video_webcamLiveView.stop();
    }
}   
} 
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    
    }
    }