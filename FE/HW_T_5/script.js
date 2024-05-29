let goods = [
  {id: 1, title: 'Микроволновка', price: 1500, count: 4},
  {id: 2, title: 'Телевизор', price: 2500, count: 1},
  {id: 3, title: 'Тумба', price: 5500, count: 5},
  {id: 4, title: 'Холодильник', price: 200, count: 2},
  {id: 5, title: 'Стол', price: 5600, count: 5},
  {id: 6, title: 'Телефон', price: 1900, count: 12},
  {id: 7, title: 'Компьютер', price: 4200, count: 11},
  {id: 8, title: 'Мангал', price: 250, count: 7},
  {id: 9, title: 'Люстра', price: 300, count: 3},
]


// 1. Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID
// let result = goods.filter(el => el.id % 2 === 0)
// console.log(result);

// 2. Отфильтруйте продукты с количеством менее 5 единиц
// let result = goods.filter(el => el.count < 5)
// console.log(result);

// 3. Найдите значение элемента массива (продукта), цена которого будет кратна 5
// let result = goods.filter(el => el.price % 5 === 0)
// console.log(result);

// 4. Найдите индекс элемента, count которого будет больше 11
// let result = goods.findIndex(el => el.count > 11)
// console.log(result);

// 5. Посчитайте количество элементов, count которых является нечетным числом
// let result = goods.filter(el => el.count % 2 !==0)
// console.log(result.length);

// 6. Посчитайте количество элементов, имя которых начинается на “Т”
// let result = goods.filter(el => el.title.startsWith('Т'));
// console.log(result.length);

// 7. Проверьте, есть ли хотя бы один продукт с ценой выше 500.
// let result = goods.some(el => el.price > 500);
// console.log(result);

// 8. Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)
// let result = goods.map(el => el.price * 0.65);
// console.log(result);

// 9. Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)
// let result = goods.map(el => ({...el, count: 0}));
// console.log(result);
