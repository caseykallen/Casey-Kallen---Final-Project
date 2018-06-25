var table;
var img;

function preload() {
  table = loadTable("free fallin with commas.csv");
  img = loadImage("guitar hole.jpg");
}

function setup() {
  createCanvas(1000, 1000);
  console.log(table.getRowCount());
  console.log(table.getColumnCount());
  ellipseMode(CORNER);
}

function draw() {
  image(img, 0, 0, width, height);
  var dataTipXY = drawLine();
  dataTip( dataTipXY[0],dataTipXY[1], dataTipXY[2] );
}

function drawLine() {
  var dataTipX = -1;
  var dataTipY = -1;
  var message = "";
  strokeWeight(2);
  var lastXax = width * .25;
  var lastYax = 0;

  var lastXay = width * .25;
  var lastYay = 0;

  var lastXaz = width * .25;
  var lastYaz = 0;

  var markerSize = 5;

  for (i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    var ax = row.get(0); //accelerometer x reading
    var ay = row.get(1);
    var az = row.get(2);
    var timeStamp = i * 200;
    //x accelerometer
    var y = map(ax, -20, 15, 0, height);
    var x = map(timeStamp, 0, 200 * table.getRowCount(), width * .25, width * .75);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    ellipse(x, y, markerSize, markerSize);
    line(lastXax, lastYax, x, y);
    if (mouseX < x + markerSize && mouseX > x &&
      mouseY < y + markerSize && mouseY > y) {
      dataTipX = x;
      dataTipY = y;
      message = "Acceleration in X =" + ax + "m/s^2\n" + "Time=" + timeStamp + "ms"
      }
    lastXax = x;
    lastYax = y;
}


    /*
        //y accelerometer
        var y = map (ay, -15, 15, 0, height);
        var x = map( timeStamp, 0, 200 * table.getRowCount(), width*.25, width*.75);
        fill(0,0,128);
        stroke(0,0,128);
        rect(x, y, 3, 3);
        line ( lastXay, lastYay, x, y);
        lastXay = x;
        lastYay = y;

        //z accelerometer
        var y = map (az, -15, 15, 0, height);
        var x = map( timeStamp, 0, 200 * table.getRowCount(), width*.25, width*.75);
        fill(255,215,0);
        stroke(255,215,0);
        ellipse(x, y, 3, 3);
        line ( lastXaz, lastYaz, x, y);
        lastXaz = x;
        lastYaz = y;
        */
  return [dataTipX, dataTipY, message];
}

function dataTip( x, y, message) {
    //  console.log("Acceleration in X =" + ax + "m/s^2");
    //  console.log("Time=" + timeStamp + "ms");
    if(x>0 && y>0){
    var boxWidth = 300;
    var boxHeight = 200;
    if( y < boxHeight) {
      rect(x - boxWidth / 2, y, boxWidth, boxHeight );
      textSize(18);
      fill(0, 0, 0);
      text(message,
        x - boxWidth / 2, y, boxWidth, boxHeight);
    } else {
      rect(x - boxWidth / 2, y - boxHeight, boxWidth, boxHeight);
      textSize(18);
      fill(0, 0, 0);
      text(message,
        x - boxWidth / 2, y - boxHeight, boxWidth, boxHeight);
    }
}
}
