"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(color, passengerCount) {
        this.color = color;
        this.passengerCount = passengerCount;
        console.log(`This car is ${color} and has ${passengerCount} passengers`);
    }
}
exports.default = Car;
