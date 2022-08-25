// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function foo(a,b) {
//     return a*b ;
// }
// console.log(foo(50,30));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let Pi=3.14;
// function foo(Pi,r) {
// return Pi * r * r;
// }
// console.log(foo(Pi,60));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function foo(h,r) {
// return 2*3.14*r*(h*r);
// }
// console.log(foo(20,30));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let array=[1,2,5,6,8,6,3,4,7]
// function foo(arr) {
//    for (const arrElement of arr){
//        console.log(arrElement);
//    }
// }
// foo(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo(text) {
// document.write(`<p>${text}</p>`) ;
// }
// foo('text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
// document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }
// foo(`text`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo(text,count) {
// document.write(`<ul>`)  ;
// for (let i=0;i<count;i++){
//     document.write(`<li>${text}</li>`);
//     }
// document.write(`</ul>`);
// }
// foo(`text`,`7`);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [19,'hi',true];
// function foo(arr) {
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`);
// }
// foo(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let array=[
//     {
//         id:9,
//         age: 19,
//         name: 'Viktoria'
//     },
//     {
//         id:8,
//         age: 18,
//         name: 'Vasa'
//     },
//     {
//         id:7,
//         age: 20,
//         name: 'Ilona'
//     },
//     {
//         id:6,
//         age: 21,
//         name: 'Ivan'
//     },
//     {
//         id:5,
//         age: 22,
//         name: 'Nazar'
//     }
// ]
// function foo(arr){
//     for (const arrElement of arr) {
//        document.write(`<div>${arrElement.id}---${arrElement.name}---${arrElement.age}</div>`)
//     }
// }
// foo(array);
// - створити функцію яка повертає найменьше число з масиву
// let array=[1,2,3,4,5,6,7,8,9];
// function foo(arr) {
// let min=arr[0];
//     for (const minElement of arr) {
//         if (minElement<min){
//             min=minElement;
//         }
//     }
//     return min;
// }
//
// console.log(foo(array));
// - створити функцію яка приймає масив чисел, сумує
// значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let array=[1,2,3,4,6,7,8,0];
// const foo = arr => {
// let sum =0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// };
// console.log(foo(array));