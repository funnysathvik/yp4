status="";
reswq = "";
function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    dectector = ml5.objectDetector("cococssd",modelloaded);
    document.getElementById("status").innerHTML = "Status is detecting objects";
    reswq = document.getElementById("reswq").status;
}

function modelloaded(){
    console.log("model is loaded");
    status = true;
}

function draw(){
    image(video,0,0,300,300);
}