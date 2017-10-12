//Getting the canvas 
// 放在哪個ID的canvas

var stage = document.getElementById("stage-2");
//Establishing a context to the canvas 
var ctx = stage.getContext("2d");
//Width and height for our canvas
var canvasWidth = 375; 
var canvasHeight = 667;

//setting width and height of the canvas 
stage.width = canvasWidth;
stage.height = canvasHeight; 

//To get the width of a single sprite we divided the width of sprite with the number of cols
//because all the sprites are of equal width and height 
var doorWidth = 312; 

//Same for the height we divided the height with number of rows 
var doorHeight = 487; 

//Each row contains 8 frame and at start we will display the first frame (assuming the index from 0)
var doorCurFrame = 0; 

//The total frame is 8 
var doorFrameCount = 20;

//x and y coordinates of the canvas to get the single frame 
var doorSrcX = 0; 
var doorSrcY = 0; 

//x and y coordinates to render the sprite 
// 把圖放在canvas中的哪
var doorX=20;
var doorY=100; 

//Creating an Image object for our character 
//Setting the source to the image file 
var door = new Image(); 
door.src = "src/image/animate-sprite/stage2-door.png";

/////////////////

function drawDoorTo(){
	//Updating the frame index 
	if(doorCurFrame == doorFrameCount -1){
		console.log(clearInterval(SIDdrawDoor))
		clearInterval(SIDdrawDoor);
	} else {
		doorCurFrame = ++doorCurFrame % doorFrameCount; 
	}
	doorSrcY = doorCurFrame * doorHeight; 
	// ctx.clearRect(doorX, doorY, doorWidth, doorHeight);
	ctx.drawImage(door,doorSrcX, doorSrcY, doorWidth, doorHeight, doorX, doorY, doorWidth, doorHeight);	
	console.log("draw door")
}


// shadow

var shadowWidth = 145; 
var shadowHeight = 251; 
var shadowCurFrame = 0; 
var shadowFrameCount = 8;
var shadowSrcX = 0; 
var shadowSrcY = 0; 
var shadowX= 120;
var shadowY= 350; 

var shadow = new Image(); 
shadow.src = "src/image/animate-sprite/stage2-shadow.png";
console.log(shadow)
/////////////////

function drawShadowTo(){
	//Updating the frame index 
	if(shadowCurFrame == shadowFrameCount -1){
		console.log("stop shadow")
		clearInterval(SIDdrawShadow);
	} else {
		shadowCurFrame = ++shadowCurFrame % shadowFrameCount; 
	}
	shadowSrcY = shadowCurFrame * shadowHeight; 
	// ctx.clearRect(shadowX, shadowY, shadowWidth, shadowHeight);
	ctx.globalAlpha = 0.2;
	ctx.drawImage(shadow, shadowSrcX, shadowSrcY, shadowWidth, shadowHeight, shadowX, shadowY, shadowWidth, shadowHeight);	
	console.log("draw shadow")
}
		