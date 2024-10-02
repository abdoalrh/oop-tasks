class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot create instance of abstract class Shape.");
        }
    }
}

class Rectangle extends Shape {
    static count = 0; 

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        Rectangle.count++; 
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    displayInfo() {
        console.log(`Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
    }

    toString() {
        return `Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }

    static getCount() {
        return Rectangle.count;
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength); 
    }

    displayInfo() {
        console.log(`Square - Side Length: ${this.width}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
    }

    toString() {
        return `Square - Side Length: ${this.width}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}

try {
    const rect1 = new Rectangle(5, 10);
    rect1.displayInfo(); 

    const square1 = new Square(4);
    square1.displayInfo(); 

    console.log(`Total Rectangles created: ${Rectangle.getCount()}`); 
} catch (error) {
    console.error(error.message);
}
