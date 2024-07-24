// Define an interface
interface Shape {
    color: string;
}

interface ShapeWithOps extends Shape {
    area: () => number;
    perimeter: () => number;
}
  
// Implement the interface in a class
class Rectangle implements ShapeWithOps {
    // Properties defined by the interface
    color: string; // Note that `color` is declared again
    // new properties
    width: number;
    height: number;

    // Constructor to initialize properties
    constructor(color: string, width: number, height: number) {
        this.color = color;
        this.width = width;
        this.height = height;
    }

    // Methods defined by the interface
    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

export default function test_implementing_interface() {
    // Using the class
    const myRectangle = new Rectangle("blue", 5, 10);
    console.log(`Color: ${myRectangle.color}`);
    console.log(`Area: ${myRectangle.area()}`);
    console.log(`Perimeter: ${myRectangle.perimeter()}`);
}
