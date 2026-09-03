// What is prototype
// Javascript object have a special property called prototype 
//    that is either null or refrence onther object.

// Setting prototype

// let a={
//     Name:"aman kushwaha",
//     Rollno:"34"
// }
// console.log(a)
// let p={
//     run:()=>{
// alert("run")
//     }
// }
// a.__proto__=p={
//     Name1:"aman singh",
// }
// // a.run()
// console.log(a.Name1)


// Class and object

// class railwayFrom{
//     Submited(){
//         alert( this.name+ " From is the submited and train number  " + this.trainnumber)
//     }
//     Canceled(){
//         alert( this.name+ " From is the canceled and train no  " + this.trainnumber )
//     }
//     fill(givenname,trainnumber){
//         this.name=givenname
//         this.trainnumber=trainnumber

//     }
// }

// let amanFrom=new railwayFrom()
// amanFrom.fill("aman","34561")

// let atulFrom=new railwayFrom()
// atulFrom.fill("Atul","34231")

// amanFrom.Submited()
// atulFrom.Canceled()



// Contructor method 




// class railwayFrom{
//     constructor( givenname,trainno,address){
        
//         this.name=givenname
//         this.traino=trainno
//         this.address=address
//     }

//     preview(){
//         fromisthesubmited.textContent=  ( this.name+" Your From is for train number " +this.traino + "and your adress is "+ this.address)
//     }
//     submied(){
//         fromisthesubmited.textContent=( this.name+" Your from is submited and train number is "+this.traino)
//     }
//     canceled(){
//         fromisthesubmited.textContent=(this.name+" Your from is canceled and train number "+this.traino)
//     }
// }
// let amanfrom=new railwayFrom("aman","34231","arna bazar and Gopalganj pin: 41440, state: Bihar")

// amanfrom.submied()
// amanfrom.preview()
// amanfrom.canceled()

// class RoombokingFrom{
//     constructor(givenname,roomAddress){
//         this.name=givenname
//         this.roomAddress=roomAddress
//     }


//     bookingroom(){
//         alert("Yes I an booking Room so buitifully Room in the rishikesh")
//     }
//     RoomCanceled(){
//         alert("Room is canceled ")
//     }
//     VisitRoom(){
//         alert( this.name+" Yes  you  visity room  come in "+this.roomAddress)
//     }
// }
// let aman=new RoombokingFrom("mukesh kumar", "Rishikesh Haridour")
// aman.bookingroom()
// aman.RoomCanceled()
// aman.VisitRoom()


// class railwayFrom{
//     constructor(Givenname,trainname,trainno){
//         this.name=Givenname
//         this.trainno=trainno
//         this.trainname=trainname
//     }
//     distancetrain(){
//         fromisthesubmited.textContent=(this.name+" Siwan to NewDelhi")
//     }
//     TrainBookig(){
//         fromisthesubmited.textContent=( this.name+" Yes booking train and train name  "+this.trainname+ "and trainnumber "+this.trainno)

//     }
//     Traincanceled(){
//         fromisthesubmited.textContent=( this.name+ " Not Booking train and trainname "+this.trainname +" and trainno is "+this.trainno)

//     }
//     WhyNotBookingtrain(){
//         fromisthesubmited.textContent=(this.name+" Not time train more then  lait and train name "+this.trainname)


//     }
// }
// let Atul=new railwayFrom("aman kushwaha","Vaishali Express" ,"23876")
// let vishal=new railwayFrom("Vishal","Bihar Karanti","45231")
// let Suraj =new railwayFrom("Suraj Kushwaha","Bhag Express","34123")

// Atul.TrainBookig()
// Atul.Traincanceled()




// Extends keywords Methods

// class Animals{
//     constructor(color,name){
//         this.color=color
//         this.name=name
//     }
//     eat(){
//         console.log( this.color+" this is eating a mango....")
//     }
//     shourt(){
//         console.log("this is sourting.....")
//     }

// }
// class Monkey extends Animals{
//     eatBanana(){
//         console.log( this.color+" is eating banana")
//     }
// }

// let aman=new Animals("red ","aman")
// let a=new Monkey("orang","aman")

// aman.eat()
// a.eatBanana()


// class animal{
//     constructor(name){
//         this.name=name
        
//     }
//     eat(){
//         console.log( this.name+" eating is mango")
//     }
// }
// class man extends animal{
//     m(){
//         console.log( this.name+" his is ")
//     }
// }
// let aman=new animal("aman")

// let vishal=new man("vishal")

// aman.eat()
// vishal.m() 



// parestice


class schoolResult{
    constructor(name,schoolname,Resultnu){
        this.name=name
        this.Resultnu=Resultnu
        this.schoolname=schoolname
    }
    Bhimschoole(){
        console.log( this.name+" for any student pass and lagbhag number "+this.Resultnu ,"and school name is "+this.schoolname)

    }
    Biharpulice(){
        console.log(this.name+" Not student is very simple number lagbhag "+this.schoolname)
    }

}
let student=new schoolResult("student","Bimroambhedkar","300+")
let student2=new schoolResult("Biharpublice ","200 markes")
student2.Biharpulice()
student.Bhimschoole()


let aman=prompt("Enter your color name")

document.body.style.background=aman



// let age=prompt("enter you age limited and car drive")
// if(age>18){
//     alert("your are a car drive")

// }
// else{
//     alert("Your are a not car drive")
// }




