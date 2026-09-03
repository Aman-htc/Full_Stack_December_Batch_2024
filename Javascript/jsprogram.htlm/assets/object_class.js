


// object
// const person = {
//     name:'aman',
//     gae:20,
//     greet:function(){
//         console.log(`Hello my name is ${this.name}`)
//     }
    
// }

// Object.keys(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));

// Object.keys(person).forEach(key=>{
//     if(typeof(person[key]) === 'function'){
//        person[key]();
//     }else{
//         console.log(person[key])
//     }
// })


// Object.value(person).forEach(key=>{
//     if(typeof(value) === 'function' && value.name === 'greet'){
//        console.log((value()));
//     }else{
//         console.log(value)
//     }
// })

// Object.entries(person).forEach(pair => {
//     if(typeof(pair[1]) === 'function' && pair[0]==='greet'){
//         pair[i]();
        
//     }else{
//       console.log(pair[1])
//     }
    
// });





// javascript class

class railwaySystem{
    constructor(passengerName,trainName,trainNo,source,destination){
        this.passengerName=passengerName;
        this.trainName=trainName;
        this.trainNo=trainNo;
        this.source=source;
        this.destination=destination;
        this.isBooked=false;
    }
    distanceTrain(){
    
        console.log(`${this.passengerName} is traveling from ${this.source} to ${this.destination} by ${this.trainName} (${this.trainNo})`)
    }
    bookTicked(){
        
        if(!this.isBooked){
            this.isBooked=true;
            console.log(`Ticket booked successfully!\n passenger: ${this.passengerName}\n Train: ${this.trainName} (${this.trainNo}) \n Route: ${this.source}  ${this.destination}`)
        }else{
            console.log(`Ticket already booked for ${this.passengerName} on ${this.trainName}`)
        }
    }
    Traincanceled(){
        
        if(this.isBooked){
            this.isBooked=false;
            console.log(`Ticket canceled for ${this.passengerName} on ${this.trainName} (${this.trainNo})`)
        }

    }
    Waitinglist(){
    
        console.log(`sorry ${this.passengerName}, no seat available in ${this.trainName}. you are in the Waiting list`)


    }
}
let passenger=new railwaySystem("aman ","Vaishali Express" ,"23876","siwam ", "New Delhi")

// let passenger1=new railwaySystem("Vishal","Bihar Karanti","45231","Patna","Mumbai")
// let passenger2 =new railwaySystem("Suraj","Bhag Express","34123",'gorkhpur','New Delhi')

// passenger.distanceTrain()
// passenger.bookTicked()
// passenger.Traincanceled()
// passenger.Waitinglist()

class aman extends railwaySystem{
    constructor(passengerName,trainName,trainNo,source,destination){
        super(passengerName,trainName,trainNo,source,destination)
    }
}
let a= new aman('Aman','maitor','763827','siwan','new delhi')
// console.log(a)
a.bookTicked()



