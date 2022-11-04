function createUser(pName,pAge) {
    return{
        name: pName,
        age: pAge,
        displayInfo : function(){
        document.write("Sakheli" + this.name + "Asaki" + this.age)
        }
    };
};

var tom = createUser("Tom", 26);
tom.displayInfo()



// var tom = new Object();

// function User (pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }
// var tom = new User ("tom", 26)

// document.write(tom.name)



