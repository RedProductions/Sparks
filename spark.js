function spark(hue){
  
  this.x = mouseX;
  this.y = mouseY;
  
  this.speedx = random(-7, 7);
  this.speedy = random(-13, 5);
  
  this.sat = 0;
  this.bri = 255;
  
  this.size = random(2, 4);
  
  this.alive = true;
  
  this.grav = -0.8;
  
  this.col = hue
  
  if(this.col == 1){
    this.hue = 60 * 255 / 360;
  }else {
    this.hue = 220 * 255 / 360;
  }
  
  
  this.is_alive = function(){return this.alive;}
  
  
  this.show = function(){
    
    fill(this.hue, this.sat, this.bri);
    
    ellipse(this.x, this.y, this.size, this.size);
    
  }
  
  this.update = function(){
    
    this.speedy -= this.grav;
    
    this.y += this.speedy;
    this.x += this.speedx;
    
    if(this.sat < 255){
      this.sat += 50;
    }
    
    if(this.col == 1){
      if(this.hue > 0){
        this.hue -= 2;
      }else {
        this.hue = 0;
      }
    }else {
      if(this.hue < (275 * 255 / 360)){
        this.hue += 2;
      }else {
        this.hue = (275 * 255 / 360);
      }
    }
    
    if(this.y - this.size > height || this.x + this.size < 0 || this.x - this.size > width){
      this.alive = false;
    }
    
  }
  
  
  
}