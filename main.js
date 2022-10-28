function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(50,120);
    canvas= createCanvas(550,500);
 
    canvas.position(900,120);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
 }
 function modelLoaded(){
     console.log('PoseNet initialized')
 }
 
 function draw(){
     background('white');
 }
 function gotPoses(results){
     if(results.length>0){
         console.log(results);
     }
 }
 
 