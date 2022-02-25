noseX= 0;
noseY= 0;
leftWrist= 0;
rightWrist= 0;
difference= 0;

function setup(){
    canvas= createCanvas(560, 350);
    canvas.position(600);
    video= createCapture(VIDEO);
    video.size(560, 350);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
if(results.length > 0){
    console.log(results); 
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
leftWrist= results[0].pose.leftWrist.x;
rightWrist= results[0].pose.rightWrist.x;
difference= floor(leftWrist-rightWrist);
}
}

function draw(){
    background('yellow');
    textSize(difference);
    document.getElementById('current_font_size').innerHTML= "Font Size of the Word/Text is- " + difference + "px";
fill('green');
    text("Nandana", noseX, noseY);
}