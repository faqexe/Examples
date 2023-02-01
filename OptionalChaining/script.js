// const auto = {
//   brand: "Tesla",
//   model: "ModelX",
//   details: {
//     color: "Красный",
//     year: 2021,
//     atStock: true,
//   },
// };

// const cars = [auto];

// cars.forEach(car => {
//   console.log(`${car.brand} ${car.details?.year}: цвет - ${car.details?.color}`);
//   // Tesla 2021: цвет - Красный
// })

// Оператор ?. будет проверять приходят ли данные от details и существует ли сам details.
// Если не существует, то ошибок появляться не будет, а просто пропишется undefined
// вместо отсутствующих данных

// Тоже самое работает для методов

const auto = {
  brand: "Tesla",
  model: "ModelX",
  drive() {
    console.log("rrrrrr");
  },
};

auto.drive?.();
// Если метод присутствует в объекте, то он запускается,
// если нет - ничего не происходит

// Можно делать проверки наличия свойств внутри объекта
console.log(auto?.['brand']);
// Если свойство будет отсутствовать - вернет undefined