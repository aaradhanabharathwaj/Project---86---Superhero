var canvas= new fabric.Canvas("myCanvas");
var current_width=30;
var current_height=30;

var player_x=10;
var player_y=10;

player_object="";
block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);

        });
}
function object(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(current_width);
        block_object.scaleToHeight(current_height);
        block_object.set({
        top:player_y,
        left:player_x
        });
canvas.add(block_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=="80"){
        console.log("shift and p is pressed");
        current_height=current_height+10;
        current_width=current_width+10;
        document.getElementById("current_width").innerHTML=current_width;
        document.getElementById("current_height").innerHTML=current_height;
    }
    if(e.shiftKey==true && keyPressed=="77"){
        console.log("shift and m is pressed");
        current_height=current_height-10;
        current_width=current_width-10;
        document.getElementById("current_width").innerHTML=current_width;
        document.getElementById("currentheight").innerHTML=current_height;
    }
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
   if(keyPressed=='39'){
       right();
       console.log("right");
   }
if(keyPressed=='70'){
    object("ironman_face.png");
    console.log("f");
}
if(keyPressed=='66'){
    object("ironman_body.png");
    console.log("b");
}
if(keyPressed=='76'){
    object("hulk_legs.png");
    console.log("l");
}
if(keyPressed=='82'){
    object("thor_right_hand.png");
    console.log("r");
}
if(keyPressed=='72'){
    object("hulk_left_hand.png");
    console.log("h");
}
}
function up(){
    if(player_y>=0){
        player_y=player_y-current_height;
        console.log("Block_height="+current_height);
        console.log("When Up Arrow Is Pressed X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+current_height;
        console.log("Block Height="+current_height);
        console.log("when down arrow is pressed x="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-current_width;
        console.log("Block Width="+current_width);
        console.log("When left arrow is pressed X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=800){
        player_x=player_x+current_width;
        console.log("Block Width="+current_width);
        console.log("when right arrow is pressed X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}