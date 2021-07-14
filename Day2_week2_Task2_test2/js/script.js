class Shape2 {
    constructor(name) {
        this.name = name;
    }
}


class Square extends Shape2 {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    area(side) {
        return side * side;
    }
}



const obj2 = new Square("square");
document.getElementById("headin1").innerText="Area of Square is "+obj2.area(4);

