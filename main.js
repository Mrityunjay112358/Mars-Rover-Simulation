canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_heigth=100;
rover_width=90;
rover_x=10;
rover_y=10;

number_of_images_array = ["mars.jpg","nasaimg1.jpeg","nasaimg2.jpeg","nasaimg3.jpg","nasaimg4.jpg"];
random_numbers = Math.floor(Math.random()*5);
console.log(random_numbers);

background_img=number_of_images_array[random_numbers];
console.log("background image is "+background_img);
rover_img = "rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground_img;
    background_imgTag.src=background_img;

    roverimg_Tag = new Image();
    roverimg_Tag.onload = uploadrover;
    roverimg_Tag.src=rover_img;
}

function uploadbackground_img(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimg_Tag,rover_x,rover_y,rover_width,rover_heigth);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(keypress == 38){
        up();
        console.log("up");
    }

    if(keypress == 40){
        down();
        console.log("down");
    }

 if(keypress ==37){
     left();
     console.log("left");
 }

 if(keypress == 39){
     right();
     console.log("right")
 }
}

function up(){
if(rover_y >= 0){
    rover_y = rover_y-10;
    console.log("the x position of rover is"+rover_x+"the y is"+rover_y);
    uploadbackground_img();
    uploadrover();
}
}

function down(){
   if(rover_y <= 500){
       rover_y=rover_y+10;
       console.log("the x position of rover is"+rover_x+"the y is"+rover_y)
       uploadbackground_img();
       uploadrover();
   } 
}

function left(){
   if(rover_x >= 0){
       rover_x = rover_x-10;
       console.log("the x position of rover is"+rover_x+"the y is"+rover_y);
       uploadbackground_img();
       uploadrover();

   } 
}

function right(){
    if(rover_x <= 700){
rover_x = rover_x+10;
console.log("the x position of rover is"+rover_x+"the y is"+rover_y);
uploadbackground_img();
uploadrover();
    }
}
