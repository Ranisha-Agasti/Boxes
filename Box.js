class Box{
    constructor(x,y,w,h){
        var ball_options ={
            restitution: 0.2
        }
    
        this.box = Bodies.rectangle(x,y,w, h,ball_options);
        this.width = w
        this.height = h
        World.add(world,this.box);     
    }
    display(){
        push()
        translate(this.box.position.x, this.box.position.y)
        angleMode(RADIANS)
        rotate(this.box.angle)
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
    pop()
    }
}