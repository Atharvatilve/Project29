class Polygon {
    constructor(x,y,radius){
        var options ={
            isstatic:false,
            
        }
        polygon = Bodies.cirle(50,200,20);
        World.add(world,polygon)
    }
    display(){
        ellipseMode(RADIUS);

        fill(255);

        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}