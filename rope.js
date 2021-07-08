class rope{
	constructor(body1,body2,pointA,pointB)
	{
      this.pointA = pointA;
	  this.pointB = pointB;
	  var options ={
		  bodyA :body1,
		  bodyB :body2,
          pointB :{x:this.pointA,y:this.pointB}

	  }
	//create rope constraint here
       this.constraint=Constraint.create(options);
	   World.add(world,this.constraint);
	}


    //create display() here 
		display(){
			strokeWeight(2);

			var ropePointA = this.constraint.bodyA.position;
		var  ropePointB = this.constraint.bodyB.position;
		line(ropePointA.x,ropePointA.y,ropePointB.x,ropePointB.y,pointA,pointB);
			}

}
