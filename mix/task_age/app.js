// ================================ 1 method start ================================
//     const Names = {
//     firstname: prompt('Adinizi daxil edin: '),
//     lastname: prompt("Soyadinizi daxil edin"),
//     today: Number(prompt("Hazirki ili daxil edin: ")),
//     birthday:  Number(prompt("Dogum ilinizi daxil edin: ")),
//     age: function(){
//         let calcAge = this.today - this.birthday
//         document.write(this.firstname+ " " +this.lastname +", " + calcAge+" yas");
//     }
// }
// Names.age();
// ================================ 1 method end ================================


// ================================ 2 method start ================================
//     class Names {
//     constructor(firstname, lastname, today, birthday){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.today = today;
//         this.birthday = birthday;
//     }
//     calcAge(){
//         const age = this.today - this.birthday;
//         console.log(this.firstname+ " " +this.lastname +", " + age +" yas");
//     }
// }

// let Bill = new Names("Bill", "Gates", 2022, 1955);
// Bill.calcAge();
// ================================ 2 method end ================================


// ================================ 3 method start ================================
// function addName(callback){
//     let firstname = prompt('Adinizi daxil edin: ');
//     let lastname = prompt('Soyadinizi daxil edin: ');
//     let fullname = firstname +" " + lastname + ", ";
    
//     document.write(fullname)
//     callback();
// }

// function getAge(){
//     let today = Number(prompt("Hazirki ili daxil edin: "));
//     let birthday = Number(prompt("Dogum ilinizi daxil edin: "));
//     let calcAge = today - birthday;

//     document.write (calcAge + " yas");
// }

// addName(getAge);
// ================================ 3 method end ================================


// ================================ 4 method start ================================
// function addName(firstname, lastname){
//     let fullname = firstname +" " + lastname + ", ";
//     document.write(fullname)
// }

// function getAge(today, birthday){
//     let calcAge = today - birthday;
//     document.write (calcAge + " yas");
// }

// function start(){
//     addName("Bill","Gates");
//     getAge(2022,1955);
// }

// start();
// ================================ 4 method end ================================