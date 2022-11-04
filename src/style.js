// სახელი, წელი 2

// function createUser(pName,pAge) {
//     return{
//         name: pName,
//         age: pAge,
//         displayInfo: function(){
//         document.write("Name" + this.name + "Age" + this.age)
//         }
//     };
// };

// var tom = createUser("Giorgi", 26);
// tom.displayInfo()



// სახელი, წელი 2
// function User (pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }
// var giorgi = new User ("Giorgi", 26)

// document.write(giorgi.name, giorgi.age)




// შექმენით Constructor Function სახელად Car, რომელიც იღებს შემდეგ არგუმენტებს:
// function Car(name, model, year) {
// // your code goes here...
// }

// function Car(mName, mYear){
//     this.name = mName;
//     this.year = mYear;
//     this.getCarInfo = function() {
//         document.write("model" + this.name + "released" + this.year)
//     }
// }

// function User (pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.driveCar = function(car) {
//         document.write(this.name + "Drive" + car.name + car.year)
//     };
//     this.displayInfo = function (){
//         document.write("Name" + this.name + "Year" +this.age)
//     }
// }

// var tom = new User ("Irma", 26);
// tom.displayInfo();

// var Mitsubishi = new Car ("Mitsubishi",2022);
// tom.driveCar(Mitsubishi)






// სად მუშაობენ

// function User (name, age,company) {
//     this.name = name;
//     this.age = age;
//     this.company = company;
//     this.displayInfo = function() {
//         document.write("Name" + this.name + "Year" + this.age+ "company" + this.company);
//     }
// }

// User.prototype.maxage = 110;

// function Employee( name,age,company) {
//     this.name = name;
//     this.age = age;
//     this.company = company;
//     this.displayInfo = function() {
//       document.write("Name" + this.name + "Year" + this.age + "company" + this.company);
//     }
// }

// Employee.prototype = Object.create(User.prototype);

// var irma = new User("Irma", 30, "TBC")
// var giorgi = new Employee ("Giorgi", 25, "Google");

// irma.displayInfo()
// giorgi.displayInfo()


// მანქანის მოდელი

// function User (name, age,car) {
//     this.name = name;
//     this.age = age;
//     this.car = car;
//     this.displayInfo = function() {
//         document.write("Name" + this.name + "Year" + this.age+ "car" + this.car);
//     }
// }

// User.prototype.maxage = 110;

// function Employee( name,age,car) {
//     this.name = name;
//     this.age = age;
//     this.car = car;
//     this.displayInfo = function() {
//       document.write("Name" + this.name + "Year" + this.age + "car" + this.car);
//     }
// }

// Employee.prototype = Object.create(User.prototype);

// var irma = new User("Irma", 30, "Mitsubishi")
// var giorgi = new Employee ("Giorgi", 25, "BMW");



// irma.displayInfo()
// giorgi.displayInfo()


// მანქანის მოდელი 2

// function createUser(pName,pAge,pcar) {
//     return{
//         name: pName,
//         age: pAge,
//         car: pcar,
//         displayInfo: function(){
//         document.write("Name" + this.name + "Age" + this.age + "Car" + this.car)
//         }
//     };
// };

// var tom = createUser("Giorgi", 26, "BMW");
// tom.displayInfo()