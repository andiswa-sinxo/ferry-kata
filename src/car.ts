export default class Car {

    public readonly color : string
    public readonly passengerCount : number
    
    constructor(color : string, passengerCount : number){
        this.color = color ;
        this.passengerCount = passengerCount
        
        console.log("This car is ${color} and has ${passengerCount}");
            }
        }