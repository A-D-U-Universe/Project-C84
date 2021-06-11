canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d")

car1_width = 100;
car1_height = 90;

car2_width = 100;
car2_height = 90;

background_image = "racing.jpg"
car1_image = "car1.png"
car2_image="car2.png"

function add(){
    background_imageTag - new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1_imageTag - new Image();
    car1_imageTag.onload = uploadCar1;
    car1_imageTag.src = car1_image;

    car2_imageTag - new Image();
    car2_imageTag.onload = uploadCar2;
    car2_imageTag.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(backgound_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up")
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down")
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left")
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right")
    }
}

function up(){
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = "+  rover_x + "/y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = "+  rover_x + "/y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = "+  rover_x + "/y = " + rover_y);
        uploadBackground();
        uploadRover();
    }

    function right(){
        if(rover_y <=700)
        {
            rover_x = rover_x + 10;
            console.log("When right arrow is pressed, x = "+  rover_x + "/y = " + rover_y);
            uploadBackground();
            uploadRover();
        }
    }
}