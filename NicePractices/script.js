//* ## Фишки с массивами

let cars = ["Honda", "Toyota", "Seat", "Opel", "VM", "BMV", "Audi"];
let nums = [
  1, 1, 1, 2, 3, 1, 2, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6, 6, 7, 8, 8, 9, 8,
];

//? Просуммировать все значения в массиве
let sum = nums.reduce((a, b) => a + b);
console.log(sum); // 104

//? Удалить ложные значения из массива
let arr = [false, "red", 2, 0, "", null, NaN, true, undefined];

let newArr = arr.filter(Boolean);
console.log(newArr); // [ 'red', 2, true ]

//? Конвертировать массив в объект
let obj = { ...cars };

//? Удалить повторяющиеся элементы из массива
// let uniNums = [...new Set(nums)];
// или
let uniNums = Array.from(new Set(nums));
console.log(uniNums); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//? Заменить конкретное значение в массиве
cars.splice(0, 2, "Nissan", "Tesla");
console.log(cars); // ['Nissan', 'Tesla', 'Seat', 'Opel', 'VM', 'BMV', 'Audi']

//? Перебор массива без метода map
let newCars = [
  { car: "Honda", color: "Red" },
  { car: "Toyota", color: "Green" },
  { car: "Seat", color: "Black" },
  { car: "BMW", color: "Pink" },
];

let carName = Array.from(newCars, ({ car }) => car);
console.log(carName); // [ 'Honda', 'Toyota', 'Seat', 'BMW' ]

//? Очистить массив
// nums = [];
// nums.splice(0, nums.length);

//? Найти пересечения (общие значения) массивов
let nums2 = [1, 4, 55, 6, 8, 11, 22, 55, 67];

// Создаем массив из уникальных чисел из первого массива с помощью Set
// Применяем метод filter, который отфильтрует значения по заданному условию
// В условии filter перебираем значения и с помощью includes проверяем есть ли они во втором массиве
let newNums = [...new Set(nums)].filter((item) => nums2.includes(item));
console.log(newNums); // [ 1, 4, 6, 8 ]

//? Перевернуть массив
// nums.reverse();

//? Найти индекс последнего вхождения значения в массиве
nums.lastIndexOf(1); // 8

//? Заполнить массив значениями
let newArr2 = new Array(10).fill(1);
console.log(newArr2); // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

//? Найти случайное число из массива
let randomNum = nums2[Math.floor(Math.random() * nums2.length)];
