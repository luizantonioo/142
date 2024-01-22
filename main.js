music.mp3
music2.mp3
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
function preload(){
 song = loadSound("music.mp3");
 song = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);//image(fonte da imagem, posição x e y, larg, alt)
    fill("#FF0000");
    stroke("#FF0000");

}
function modelLoaded(){
    console.log("PoseNet foi inicializado!");
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
}}










