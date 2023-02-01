// const myDate = new Date();
// console.log(myDate); // покажет текущую дату
// console.log(typeof myDate); // object
// console.log(myDate instanceof Date); // true - действительно ли myDate является объектом Date

// Создадим собсвенный головной объект для создания его экземпляров
// Используем для этого функцию-конструктор
function Auto(brand, price, gas) {
  this.brand = brand;
  this.price = price;
  this.gas = gas;
  // Добавим метод drive, который расходует топливо машин
  //   this.drive = function () {
  //     if (this.gas > 0) {
  //       this.gas = this.gas - 20;
  //       return this.gas;
  //     } else {
  //       console.log("Бензин закончился!");
  //     }
  //   };
}

// Теперь мы можем использовать наш объект для создания отдельных экземпляров
// const bmw = new Auto();
// console.log(bmw); // Auto {}
// console.log(bmw.constructor);
// // ƒ Auto() {
// //    console.log('наша машина');
// // }
// console.log(bmw instanceof Auto); // true
const bmw = new Auto("bmw", "100,000", 100);
const nissan = new Auto("nissan", "40,000", 100);

// Каждый вызов функции будет уменьшать количество топлива
// console.log(bmw.drive());
// console.log(nissan.drive());

// Нюанс. Создавая новый экземпляр машины, создается новая функция drive
// console.log(bmw.drive === nissan.drive); // false

// Чтобы не создавалась новая функция каждый раз, мы можем
// поместить метод в прототип нашего головного объекта.
// И таким образом мы создадим один метод, который будет
// использовать всеми машинами
Auto.prototype.drive = function () {
  if (this.gas > 0) {
    this.gas = this.gas - 20;
    return this.gas;
  } else {
    console.log("Бензин закончился!");
  }
};

// Создаем новый метод
Auto.prototype.info = function () {
  return `Стоимость ${this.brand} = ${this.price}`;
};
console.log(bmw.info()); // Стоимость bmw = 100,000

// Если нужно изменить работу метода
Auto.prototype.info = function () {
  return `Уровень топлива ${this.brand} = ${this.gas}`;
};
console.log(bmw.info()); // Уровень топлива bmw = 100

console.log(bmw.drive());
console.log(nissan.drive());
// Суть прототипного наследования - мы получаем метод, к которому имеют доступ все экземпляры
// нашего головного объекта и при этом мы не создаем кучу копий этого метода
// для каждого экземпляра
