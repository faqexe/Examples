const auto = {
  brand: "BMW",
  drive() {
    return `Заведем наш ${this.brand}`;
  },
};

//! ВАЖНО! В JS значение this внутри какой-то функции определяется тем,
//! где вызывается эта функция, а не где эта функция была изначально определена
// Наша функция drive была изначально создана внутри объекта auto,
// но эта функция будет привязана к этому объекту auto только в том случае
// если мы будет вызывать эту функция через объект auto - auto.drive()

// ## Метод Bind

// Мы можем использовать метод, чтобы принудительно привязать контекст
// нашей функции к нужному объекту, т.е. мы можем менять значение this внутри нашей функции
const autoDrive = auto.drive.bind(auto);
// Мы говорим JS'у - создай новую функцию autoDrive и когда она будет вызываться
// значение this внутри этой функции будет равняться тому, что я передаю внутрь метода bind
// В данном случае передаем объект auto и теперь значение this равно объекту autoDrive
// и функция может

// Пример использования
// Создаем новый объект
const motorBike = {
  brand: "Suzuki",
};
// Присваем функцию и значение this новой переменной с данными из объекта motoBike
const motoDrive = auto.drive.bind(motorBike);

// Практическое применение
// Чтобы постоянно не прописывать document.querySelector при выборе объектов DOM,
// создаем переменную, присваиваем ей значение document.querySelector
// и с помощью метода bind присваиваем значение this объекта document
const $ = document.querySelector.bind(document);
// Теперь мы можем использовать сокращенную запись для выбора объектов DOM
const header = $("h2");

// Еще пример использования bind
const bill = {
  tip: 0.1,
  calculate(total) {
    return total + total * this.tip;
  },
  detail(dish1, dish2, sum) {
    return `Ваш обед (${dish1}, ${dish2}) стоит ${this.calculate(sum)}`;
  },
};

// const pay = bill.calculate(1000);
// const payCount = bill.calculate.bind({ tip: 0.2 });
// console.log(payCount(1000)); // 1200

//? Что будет если продолжать привязывать bind?
//? Например - const payCount = bill.calculate.bind(bill).bind({ tip: 0.2 }).bind({ tip: 0.5 });
//* Ничего. Контекст привязывается только один раз и мы не можем его повторно привязывать по цепочке

// ## Методы Call и Apply

// Работают также, как и Bind, за исключением того,
// что эти методы будут автоматически запускать новую функцию
const pay = bill.calculate.bind(bill);
console.log(pay(1000)); // 1100
// При использовании Call после объекта передаем сразу и значение
const payCount = bill.calculate.call(bill, 1000);
console.log(payCount); // 1100
// При использовании Apply значение передается в массиве
const payCount2 = bill.calculate.apply(bill, [1000]);
console.log(payCount2); // 1100

// Использование второго функции detail с методами bind, call и apply
const pay2 = bill.detail("pizza", "salad", 1000);
console.log(pay2);
const count = bill.detail.call(bill, "pizza", "salad", 1000);
console.log(count);
// Внутри метода call можно передавать массив, используя оператор spread
// const count = bill.detail.call(bill, ...["pizza", "salad", 1000]);
const count2 = bill.detail.apply(bill, ["pizza", "salad", 1000]);
console.log(count2);
