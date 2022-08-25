// - Створити функцію конструктор для об'єктів User з полями id,
// name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surName , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surName = surName;
//     this.email = email;
//     this.phone = phone;
// }

// let array=[];
//
// let user1 =new User(1,'Nazar','Petrov','Nazar.@gmail',380973485627)
// let user2 =new User(2,'Vasa','Petrov','Vasa.@gmail',380973485627)
// let user3 =new User(3,'Ilona','Petrov','Ilona.@gmail',380973485627)
// let user4 =new User(4,'Ilona','Petrov','Ilona.@gmail',380973485627)
// let user5 =new User(5,'Viktor','Petrov','Viktor.@gmail',380973485627)
// let user6 =new User(6,'Viktoria','Petrov','Viktoria.@gmail',380973485627)
// let user7 =new User(7,'Ivan','Petrov','Ivan.@gmail',380973485627)
// let user8 =new User(8,'Ivana','Petrov','Ivana.@gmail',380973485627)
// let user9 =new User(9,'Stepan','Petrov','Stepan.@gmail',380973485627)
//
// array.push (user1,user2,user3,user6,user7,user8,user9);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter(value => value.id % 2===0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = array.sort((a, b) => a.id-b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname ,
// email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class User {
//     constructor(id, name, surName , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surName = surName;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array=[];
//
// let user1 =new User(1,'Nazar','Petrov','Nazar.@gmail',380973485627,[1,2,3,4])
// let user2 =new User(2,'Vasa','Petrov','Vasa.@gmail',380973485627,[2,5,1,65,4])
// let user3 =new User(3,'Ilona','Petrov','Ilona.@gmail',380973485627,[8,5,6,32,2,4,55])
// let user4 =new User(4,'Ilona','Petrov','Ilona.@gmail',380973485627,[8,65,24,85,74,28,75])
// let user5 =new User(5,'Viktor','Petrov','Viktor.@gmail',380973485627,[8])
// let user6 =new User(6,'Viktoria','Petrov','Viktoria.@gmail',380973485627,[54])
// let user7 =new User(7,'Ivan','Petrov','Ivan.@gmail',380973485627,[655,85,8589,5,9])
// let user8 =new User(8,'Ivana','Petrov','Ivana.@gmail',380973485627,[9,6])
// let user9 =new User(9,'Stepan','Petrov','Stepan.@gmail',380973485627,[3,2,7])
//
// array.push (user1,user2,user3,user6,user7,user8,user9);
//
// let sort = array.sort((a, b) => a.order.length-b.order.length );
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producer,year,maxSpeed,engine) {
// this.model=model;
// this.producer=producer;
// this.year=year;
// this.maxSpeed=maxSpeed;
// this.engine=engine;
//
// this.drive=function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
// }
//
// this.infO=function () {
//     for (const item in this) {
//         if (typeof this[item] !== 'function'){
//             console.log(`${item}--${this[item]}`);
//         }
//     }
//
// }
//
// this.increaseMaxSpeed=function (newSpeed) {
//  this.maxSpeed +=newSpeed;
// }
//
// this.addDriver=function (driver) {
//     this.driver=driver;
// }
//
// }
//
// let car = new Car('Kia','Japan',2022,340,3);
// console.log(car);
// car.drive();
// car.infO()
// car.increaseMaxSpeed(200);
// car.addDriver({name:'Taras',age:24});
// console.log(car);


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model,producer,year,maxSpeed,engine) {
//         this.model=model;
//         this.producer=producer;
//         this.year=year;
//         this.maxSpeed=maxSpeed;
//         this.engine=engine;
//     }
//   drive(){
//       console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//   }
//   infO() {
//         for (const item in this) {
//             if (typeof this[item] !== 'function'){
//                 console.log(`${item}--${this[item]}`);
//             }
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed +=newSpeed; ///this.maxSpeed=maxSpeed+newSpeed///
//     }
//     addDriver(driver){
//         this.driver=driver;
//     }
// }
// let car = new Car('Kia','Japan',2022,340,3);
//
// let objDriver= {
//     name:'Petro',
//     age:26
// }
//
//
// console.log(car);
// car.drive();
// car.infO()
// car.increaseMaxSpeed(100);
// car.addDriver(objDriver);
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву
//     find та відповідного колбеку


// class Cinderella{
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderella1 = new Cinderella('Viktoria',19,33);
// let cinderella2 = new Cinderella('Ilona',20,34);
// let cinderella3 = new Cinderella('Olena',35,39);
// let cinderella4 = new Cinderella('Ira',65,42);
// let cinderella5 = new Cinderella('Alina',23,38);
//
// let array = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5];
//
// class Prince extends Cinderella{
//     constructor(name, age, findFootSize) {
//         super(name,age);
//         this.findFootSize = findFootSize;
//     }
// }
//
// let prince = new Prince('Taras', 25, 33);
//
// let find = (array, prince) => {
//     for (const item of array) {
//         if (prince.findFootSize === item.footSize) {
//             return `My Cinderella is ${item.name}`
//         }
//     }
// }
// console.log(find(array, prince));
//
// let cinderella = array.find(value => prince.findFootSize === value.footSize);
// console.log(cinderella);