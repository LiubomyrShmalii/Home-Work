// Написать цикл, который создает множество параграфов, с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const slava = document.querySelector("div")

// for (let i = 100; i >= 50; i-=10) {
//   slava.innerHTML += `<p>${i}</p>`
//     console.log(slava)
//   } 






// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
// const arr = ["wtf", "was?", "wo", "hello"]
// const slava = document.querySelector(".strings_container")

// for (let i = 0; i < arr.length; i++) {
//   slava.innerHTML += `<p>${arr[i]}</p>`
//       console.log(slava)
//     } 






// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

// const users = [
//   {
//     first_name: "Abraham",
//     last_name: "Lincoln",
//     age: 159
//   },
//   {
//     first_name: "Taras",
//     last_name: "Shevchenko",
//     age: 210
//   },
//   {
//     first_name: "Nelson",
//     last_name: "Mandela",
//     age: 106
//   },
//   {
//     first_name: "Vasiliy",
//     last_name: "Pypkin",
//     age: 16
//   }
// ]

// const clients = document.querySelector('.users_container');

// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   if (user.age >= 18) {
//   clients.innerHTML += `<article>${user.first_name}, ${user.last_name}, ${user.age}</article>`;
//   }
// }