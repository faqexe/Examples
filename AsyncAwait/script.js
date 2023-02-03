// Использование промисов

// Получаем данные учетки GitHub с удаленного сервера
// fetch('https://api.github.com/users/faqexe').then(res => {
// При использовании fetch данные нужно получать в JSON
//    return res.json();
// }).then(res => {
//    console.log(res);
// }).catch(err => {    // обработка ошибок
//    console.log('Error >> ', err);
// })

// Взаимодействие с камерой в девайсе пользователя
// const video = document.querySelector("video");

// const myVideo = navigator.mediaDevices
//   .getUserMedia({ video: true })
//   .then((mediaStream) => {
//     video.srcObject = mediaStream;  // получаем доступ к своей камере
//   }).catch(err => {  // отрабатываем ошибку, если доступ к камере запрещен
//    console.log('Error >> ', err);
//   })
// console.log(myVideo);

// Создаем кастомный промис
// function sleep(time) {
//   // Конструктор промиса принимает 2 функции
//   // Первая запускается если все хорошо, вторая - если ошибка
//   return new Promise((resolve, reject) => {
//     // Все, что выше 500 считаем ошибкой
//     if (time < 500) {
//       reject("Слишком мало сна!");
//     }

//     setTimeout(() => resolve(`Поспал ${time}`), time);
//   });
// }
// sleep(1500)
//   .then((res) => {
//     console.log(res);
//     // Добавляем новые этапы сна
//     return sleep(1000);
//   })
//   .then((res) => {
//     console.log(res);
//     return sleep(500);
//   })
//   .then((res) => {
//     console.log(res);
//     return sleep(200);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Ошибка!!! ", err);
//   });

// Если у нас в коде начинает выполняться какая-то асинхронная задача,
// то JS не ждет когда она закончит свое выполнение.
// JS сразу переходит к выполнению следующей задачи или скрипта.
// Выполнение других задач не блокируется нашим асинхронным запросом.
// Поэтому страница не виснет пока на сервере осуществляется запрос
// и приходят наши данные.

// Использование Async, Await

// Переписываем первый пример
// async - говорит, что у нас асинхронная функция
async function getGitData() {
  // Можно использовать стрелочную - const getGitData = async () => {}
  // Конструкция try-catch отлавливает ошибки
  try {
    // await - просит подождать, пока получает данные
    const response = await fetch("https://api.github.com/users/faqexe");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error >>> ", err);
  }
}
getGitData();

// Преимущество такого метода в том, что это позволяет писать нам асинхронный код
// так как-будто мы пишем синхронный код

// Переписываем второй пример
const video = document.querySelector("video");

const getUserVideo = async () => {
  try {
    const response = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = response;
  } catch (err) {
    console.log("Error >>> ", err);
  }
};
getUserVideo();

// Переписываем третий пример

// Саму функцию мы не трогаем
function sleep(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject("Слишком мало сна!");
    }

    setTimeout(() => resolve(`Поспал ${time}`), time);
  });
}

const sleepSession = async () => {
  try {
    const sleep1 = await sleep(1500);
    console.log(sleep1);
    const sleep2 = await sleep(1000);
    console.log(sleep2);
    const sleep3 = await sleep(500);
    console.log(sleep3);
    const sleep4 = await sleep(200);
    console.log(sleep4);
  } catch (err) {
    console.log("Error >>> ", err);
  }
};

sleepSession();
