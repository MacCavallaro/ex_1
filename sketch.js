let value = 0
let direction = 1
let img;
let img2;
let img3;
let img4;
let gif;
let x = 0;
let y = 0;
function preload(){
img = loadImage("cute_eyes.png")
img2 = loadImage("cute_hair.png")
img3 = loadImage("lebron.jpg")
img4 = loadImage("FACE.png")
gif = loadImage("explode.gif")
}
function setup() {
 createCanvas(500,500);
 background(0);
 stroke(0);
 rectMode(CENTER)
 pixelDensity(2);
}
function draw() {


//BREATHING MODE

  // value += direction * .1;

  // if (value >= 10 || value <= 0) {
  //   direction *= -1;
  // }

//ANGRY MODE!!!!!!!!!!!!!!!!!!!!!
if (mouseX >= 0 && mouseX <= 130 && mouseY >= 335 && mouseY <= 405 &&mouseIsPressed == true) {
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      rand = random(255);
      fill(rand, 0, 0);
      rect( i+5, j+5, 40, 40 );
      console.log("Mouse is pressed. Drawing red squares.");
    }
  }
}
else {
  console.log("Mouse is not pressed. Filling background with black.");
  fill(0);
  rect(250,250,width,height);
}
//----------------------------------------------------------
//FACE CODE:

//skin color
fill(210, 180, 140);

//Ears
ellipse(180, 190, value+30, value+50);
ellipse(340, 190, value+30, value+50);

//head
rect(260, 200, value+170, value+200, 5);

//Nose
triangle(265,180,250,200,280,200)

//Closed Eyes
line(210, 175, 245, 175);
line(283, 175, 315, 175);

//Unibrow
fill(123, 63, 0);
rect(260, 150, value+125, value+20, 5);

//Beard
rect(260,250,value+120,value+70, 5);

//ANGRY EYES!!!!!!!!!!!!!!!!!
fill('RED')
rect(70, 370, 120, 70)
fill(255)
textSize(20)
text('ANGRY', 35, 375)

if (mouseX >= 250 && mouseX <= 280 && mouseY >= 180 && mouseY <= 200){
  fill('red')
  triangle(265,180,250,200,280,200)
}


let ran = random(5);
let ran2 = random(5);
fill(240);
if (mouseX >= 0 && mouseX <= 130 && mouseY >= 335 && mouseY <= 405 && mouseIsPressed == true) {
ellipse(ran+225, ran2+175, value+40);
ellipse(ran+295, ran2+175, value+40);
fill(0);
ellipse(ran+230, ran2+175, value+25);
ellipse(ran+300, ran2+175, value+25);
console.log("Mouse pressed! ran:", ran, "ran2:", ran2);
}

fill('pink')
rect(250, 370, 120, 70)
fill(255)
text('CUTE', 225, 375)

if (mouseX >= 180 && mouseX <= 310 && mouseY >= 335 && mouseY <= 405 && mouseIsPressed == true) {
  fill('pink')
  ellipse(180,205, value+40, value+20)
  ellipse(335,205, value+40, value+20)
  img.resize(value+150,value+50)
  image(img,185,150)
  img2.resize(value+300,value+250)
  image(img2,112.5,30)
  }


fill('blue')
rect(430, 370, 120, 70)
fill(255)
text('SLEEPY', 395, 375)
if (mouseX >= 370 && mouseX <= 490 && mouseY >= 335 && mouseY <= 405 && mouseIsPressed == true) {
  value += direction * .3;
  textSize(value+30)
  text('Z', 350, 80)
  text('Z', 340, 95)
  text('Z', 330, 110)
  if (value >= 10 || value <= 0) {
    direction *= -1;
  }
  }
  fill(100)
rect(160, 450, 120, 70)
fill(255)
textSize(20)
text('EXPLODE', 112.5, 455)
if (mouseX >= 100 && mouseX <= 220 && mouseY >= 415 && mouseY <= 485 && mouseIsPressed == true) {
image(gif,120,50)

}
fill('yellow')
rect(340, 450, 120, 70)
fill(255)
textSize(20)
text('LEBRON', 300, 455)
  if (mouseX >= 280 && mouseX <= 400 && mouseY >= 415 && mouseY <= 485 && mouseIsPressed == true) {
    img3.resize(500,500)
    image(img3,0,0)
    img4.resize(50,50)
    image(img4,150,80)
}


}