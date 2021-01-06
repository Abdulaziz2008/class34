class Ball {
constructor(x,y,r){
var options = {
  restitution : 0.8,
  friction :1,
  density :0.04,
}
this.body = Bodies.circle(x,y,r,options)
this.x=x
this.y=y
this.r=r
World.add(world,this.body)

}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate (this.body.angle)
fill("red")
ellipseMode(RADIUS)
ellipse(0,0,this.r)
pop()
}
}
