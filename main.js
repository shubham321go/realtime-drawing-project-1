
difference = 0;
right_wristX= 0;
left_wristX= 0;

function setup()
{
    video= createCapture(VIDEO);
    video.size(550, 500);


canvas =  createCanvas(550, 550);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is Intialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX);
    
        console.log("leftWristX=" +left_wristX+"rightWristX=" +right_wristX+",difference"+difference+"px");

    }
}
function draw()
{
    background('#969A97')

    document.getElementById("square_side").innerHTML = "width and Height of a square will be - " + difference+"px";
    fill('#F90093');
    textSize(difference);
    text('DEVASHISH', 50, 400);
}