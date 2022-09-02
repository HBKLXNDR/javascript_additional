// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
//
// let array = []
//
// const user1 = new User(1, "Victor", "Black", "123@noemail.com", 123321);
// const user2 = new User(2, "Victor", "Black", "123@noemail.com", 123321);
// const user3 = new User(3, "Victor", "Black", "123@noemail.com", 123321);
// const user4 = new User(4, "Victor", "Black", "123@noemail.com", 123321);
// const user5 = new User(54, "Victor", "Black", "123@noemail.com", 123321);
// const user6 = new User(6, "Victor", "Black", "123@noemail.com", 123321);
// const user7 = new User(7, "Victor", "Black", "123@noemail.com", 123321);
// const user8 = new User(8, "Victor", "Black", "123@noemail.com", 123321);
// const user9 = new User(99, "Victor", "Black", "123@noemail.com", 123321);
// const user10 = new User(10, "Victor", "Black", "123@noemail.com", 123321);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(array);
// //

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// const filter = array.filter(value => value.id % 2 === 0);
// console.log(filter);
// // - Взяти масив з b User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// const sort = array.sort((a, b) => a.id - b.id);
// console.log(sort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// class User {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
// }
//
// let array = []
//
// const user1 = new User(1, "Victor", "Black", "123@noemail.com", 123321, [1, 2, 3,9]);
// const user2 = new User(2, "Victor", "Black", "123@noemail.com", 123321, [2, 3]);
// const user3 = new User(3, "Victor", "Black", "123@noemail.com", 123321, [5, 8]);
// const user4 = new User(4, "Victor", "Black", "123@noemail.com", 123321, [8, 2, 6, 7,7,4]);
// const user5 = new User(54, "Victor", "Black", "123@noemail.com", 123321, [5, 9]);
// const user6 = new User(6, "Victor", "Black", "123@noemail.com", 123321, [2, 6]);
// const user7 = new User(7, "Victor", "Black", "123@noemail.com", 123321, [6, 9]);
// const user8 = new User(8, "Victor", "Black", "123@noemail.com", 123321, [7, 9, 2,8,8]);
// const user9 = new User(99, "Victor", "Black", "123@noemail.com", 123321, [6, 8, 3]);
// const user10 = new User(10, "Victor", "Black", "123@noemail.com", 123321, [2, 2,8,9, 7, 9,9]);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = array.sort((a, b) => a.order.length - b.order.length)
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     }
//     //itin, go by each obj in this!
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== "function") {
//                 console.log(`${carKey}  ${this[carKey]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// const car = new Car("BMW", "Germany", 2005, 300, 3.0);
// console.log(car);
// car.drive()
// car.info()
// car.increaseMaxSpeed(30)
// car.addDriver({name: "Max", age: 22})
// car.changeYear(2009)
// console.log(car);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class ClassCar {
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     }
//
//     info() {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== "function") {
//                 console.log(`${carKey}  ${this[carKey]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//
//     changeYear(newValue) {
//         this.year = newValue
//     }
//
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// const driverObject = {name: "Viktor", age: 30}
//
// const classCar = new ClassCar("Mercedes", "Germany", 2008, 290, 2.6)
// console.log(classCar);
// classCar.drive()
// classCar.info()
// classCar.increaseMaxSpeed(50)
// classCar.addDriver(driverObject)
// classCar.changeYear(2009)
// console.log(classCar);
//


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Cinderella {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//
// const cinderella1 = new Cinderella("Mia", 25, 31);
// const cinderella2 = new Cinderella("Mia", 25, 32);
// const cinderella3 = new Cinderella("Mia", 25, 33);
// const cinderella4 = new Cinderella("Mia", 25, 34);
// const cinderella5 = new Cinderella("Mia", 25, 35);
// const cinderella6 = new Cinderella("Mia", 25, 36);
// const cinderella7 = new Cinderella("Moana", 25, 37);
// const cinderella8 = new Cinderella("Mia", 25, 38);
// const cinderella9 = new Cinderella("Mia", 25, 39);
// const cinderella10 = new Cinderella("Mia", 25, 40);
//
// const array = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10]
//
// class Prince extends Cinderella {
//     constructor(name, age, shoe) {
//         super(name, age);
//         this.shoe = shoe
//     }
// }
//
// const prince = new Prince("Max", 22, 37);
//
// const find = (array, prince) => {
//     for (const arrayElement of array) {
//         if (prince.shoe === arrayElement.footsize){
//             return `My dear ${arrayElement.name}, that is your shoe!`
//         }
//     }
// }
//
// console.log(find(array, prince));
// const cinderella = array.find(value => prince.shoe === value.footsize);
// console.log(cinderella);













