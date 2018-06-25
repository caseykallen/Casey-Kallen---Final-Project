function setup() {
  createCanvas(500, 500);
  noLoop();
}

//this starts drawing on the canvas
function draw(){
strokeWeight(0);
drawLandscape();
drawSun();
drawCloud(80,170);
drawCloud(163,125);
drawCloud(270,180);
drawCloud(300,70);
drawCloud(350,120);
drawCloud(400,30);
drawCloud(420,165);

}

function mouseClicked(){
  plantTree();
}

//this function creates the earth
function drawLandscape(){
  fill('#53a1bd');
  rect(0,0,500,300);
  fill('#5B703E');
  rect(0,300,500,200);
}

//This is going to draw the sun on the canvas
function drawSun(){
  fill('#eaad44');
  ellipse(75,75,100);
}

// this draws a cloud on the canvas
function drawCloud(x,y){
  fill('#e7dfd0');
  ellipse(x-13, y+10, 40, 20);
  ellipse(x+13, y+10, 40, 20);
  ellipse(x, y, 40, 20);
}

// this draws a tree on the canvas
function drawTree (x,y) {
  fill('#573610');
  rect(x,y,20,65);
  treeTriangle(x+10,y-20);
  treeTriangle(x+10,y-50);
  treeTriangle(x+10,y-80);
}

//this function creates one of the trees in the triangle
function treeTriangle (x,y) {
  fill('#2c4608');
  triangle(x-50,y+50,x+50,y+50,x, y);
}

//this function will create the forest
function plantTree(){

  var x_Seed = Math.floor(Math.random() * 50);
  var y_Seed = Math.floor(Math.random() * 50);

  //y < 200 so that trees are on the ground
  var tree_x = x_Seed * 10;
  var tree_y = y_Seed * 10;
  if (tree_y < 235) {
    tree_y = 235;
  }
  drawTree(tree_x, tree_y);


}
