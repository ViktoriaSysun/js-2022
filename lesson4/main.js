// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Text</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
// document.write(`<div>Text ${i}</div>`);
//     document.write('<div>Text '+ i +' </div>');
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div>Text</div>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div>Text ${i}</div>`);
//     i++;
// }


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const listOfItem of listOfItems) {
//
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`)

//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// for (const product of products) {
//     document.write(`<div class="product-card">
//                  <h3 class="product-title">${product.title}  --  ${product.price}</h3>
//                  <img src="${product.image}" alt="${product.title}" class="product-image">
// </div>`)
// }

//
//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},// 0
//     {name: 'petya', age: 30, status: true},// 1
//     {name: 'kolya', age: 29, status: true},//2
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// // за допомоги циклу вивести:
// //     - користувачів зі статусом true
// // - користувачів зі статусом false
// // - користувачів які старші за 30 років
// for (const user of users) {
//     // if (user.status) {
//     //     console.log(user);
//     // }
//     for (const userKey in user) {
//         console.log(user[userKey]);
//     }
//     console.log('________________________________');
// }
// console.log('----------------------------------');
// for (const user of users) {
//     if (!user.status) {
//         console.log(user);
//     }
// }
// console.log('----------------------------------');
//
// for (const user of users) {
//     if (user.age > 30) {
//         console.log(user);
//     }
// }
//
// let arr = ['a', 'b', 'c'];
// let string = '';
// for (const stringElement of arr) {
//     string += stringElement;
// }
// console.log(string);
//
// let books = [
//     {
//         name: 'Alice in Wonderland',
//         pages: 256,
//         author: ['Lewis Carroll'],
//         genre: ['Children\'s literature', 'fantasy', 'literature of the absurd']
//     },
//     {
//         name: 'Cinderella',
//         pages: 134,
//         author: [' Charles Perrault', ' Brothers Grimm'],
//         genre: ['Fairy tale', 'Children\'s literature']
//     },
//     {
//         name: 'Harry Potter',
//         pages: 452,
//         author: ['Joanne Rowling'],
//         genre: ['fantasy']
//     }
// ]
// let max = books[0];
// for (const book of books) {
//     if (book.pages > max.pages) {
//         max = book.name;
//     }
// }
// console.log(max);