var database;
var drawing=[]  
function setup(){
    database=firebase.database()
  canvas=  createCanvas(400,400);
   var drawing=database.ref('drawing/positiom')
   drawing.on("value",readPosition)
}

function draw(){
    background("black");
   
  
    beginShape();
    stroke(255)
    strokeWeight(4);
    noFill();
    for (var i=0;i<drawing.length;i++){
      vertex(drawing[i].x,drawing[i].y)
      
    }
    endShape();
    drawSprites();
}
function mouseDragged(){
    var point={
        x: mouseX,
        y: mouseY}
      drawing.push(point)
      
}
function readPosition(data){
  position =data.val();

}