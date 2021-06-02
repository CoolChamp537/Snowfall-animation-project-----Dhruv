class Snowball{
    constructor(x, y,width,height) {
        var options = {
            restitution: 0,
            isStatic: false
        }
        this.width = width 
        this.height = height
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x, y, this.width,this.height, options);
        this.image = loadImage("Snowball.jpg");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width,this.height)
        pop();
      }
}