
var s = [];

var spawnrate = 10;

var pressing = false;

var button = 1;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  noStroke();
  
  
  
}

function draw() {
  
  colorMode(RGB);
  
  background(0, 100);
  
  colorMode(HSB);
  
  updateall();
  
  showall();
  
}


function showall(){
  
  for(var i = 0; i < s.length; i++){
    
    s[i].show();
    
  }
  
}

function updateall(){
  
  for(var i = s.length - 1; i >=0; i--){
    
    s[i].update();
    
    if(!s[i].is_alive()){
      s.splice(i, 1);
    }
    
  }
  
  if(pressing){
    for(var i = 0; i < spawnrate; i++){
      s.push(new spark(button));
    }
  }
  
}



function mousePressed(){
  
  pressing = true;
  if(mouseButton == LEFT){
    button = 1;
  }else if(mouseButton == RIGHT){
    button = 2;
  }
  
}

function mouseReleased(){
  
  pressing = false;
  
}