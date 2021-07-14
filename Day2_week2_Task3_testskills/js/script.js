class Shape{
    constructor(name,side,sidelength)
    {
        this.name=name;
        this.side=side;
        this.sidelength=sidelength;
    }
    calcPerameter(side,sidelength)
    {
        var sum = 0;
        for ( var i = 0; i < side; i++) {
            sum = sum + sidelength;
        }
        return sum;
    }
    area(side)
    {
        
        return side*side;
    }
}
const square=new Shape('SQUARE','4','6');
const triangle=new Shape('TRIANGLE','3','6');
document.getElementById("1").innerText="Perameter of sqaure is "+square.calcPerameter(4,13);
document.getElementById("2").innerText="Perameter of triangle is "+triangle.calcPerameter(3,13);
document.getElementById("3").innerText="Area of sqaure is "+square.area(5);