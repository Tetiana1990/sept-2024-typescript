//                                      завдання 1

let fruits:string[]=['apple','avocado','avocado','banana','coconat','kiwi','lemon','lime','mango','orange'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[5]);
console.log(fruits[6]);
console.log(fruits[7]);
console.log(fruits[8]);
console.log(fruits[9]);

                                                    // завдання 2


let book1:{title:string;pageCount:number;genre:string;}={
    title: 'kobzar',
    pageCount: 720,
    genre:  'poetic',
}
let book2:{title:string;pageCount:number;genre:string;} ={
    title: 'Forest Song',
    pageCount: 152,
    genre: 'drama-extravaganza',
}
let book3:{title:string;pageCount:number;genre:string;}={
    title: 'Marusya Churai',
    pageCount: 188,
    genre: 'novel',
}
//                                              завдання 3

class Authors{
    name: string;
    age: number;
}

let books1:{title:string;pageCount:number;genre:string; authors:Authors[];}={
    title: 'A house in which time has lost its way',
    pageCount: 384,
    genre: 'Classical and modern prose and poetry',
    authors:[
        { name: 'Victoria', age:43},
        { name: ' Nikulina Anastasia', age:34},
        {name:  ' Odnorog Maryna', age:38}
    ]
}


let books2:{title:string;pageCount:number;genre:string; authors:Authors[];}={
    title: 'Gwendys remote',
    pageCount: 160,
    genre: 'mystery',
    authors:[
        {name: 'Stephen', age:76,},
        {name: ' Cheesemar Richard', age:58,}
    ]
}

let books3:{title:string;pageCount:number;genre:string; authors:Authors[];}={
    title: 'Lott and her disasters',
    pageCount: 160,
    genre:'adventures',
    authors:[
        { name: ' Pantermüller Alice', age: 56,},
        { name: 'Kohl Daniela', age:52,},
    ]
}

                                            // завдання 4


let user10:{name:string, username:string, password:number;}[]=[
    {name:'Copper',username:'Crush',password:789456},
    {name: 'Flora',username: 'Finesse',password: 456123},
    {name: 'Minty',username: 'Marble',password: 123741},
    {name: 'RoseGold',username: 'Realm',password: 741852},
    {name: 'Vintage',username: 'Vibes',password: 852963},
    {name: 'Dreamy',username: 'Daze',password:  78891524},
    {name: 'Barefoot',username: 'Bohemian',password: 2486852},
    {name: 'Gilded',username: 'Goddess',password: 152634},
    {name: 'Blush',username: 'Boudoir',password: 365659},
    {name: 'Artisan',username: 'Artisan',password: 5264855},
]

//                                              завдання 5

let temp:{morning:number, afternoon:number,evening:number}[] = [
    {morning:15,afternoon:30,evening:20},
    {morning:12,afternoon:28,evening:21},
    {morning:17,afternoon:27,evening:19},
    {morning:14,afternoon:26,evening:18},
    {morning:17,afternoon:28,evening:19},
    {morning:15,afternoon:30,evening:20},
    {morning:14,afternoon:31,evening:22},
]

                                              // завдання 6


let numbers = [1, 0, -3];

for (let i:number = 0; i< numbers.length; i++){
    let x:number = numbers[i];
    if (x !==0){
        console.log("вірно")
    } else {
        console.log("не вірно")
    }
}

//                                          завдання 7

 let time:number = 34;

switch (true) {
    case (time >= 0 && time < 15):
        console.log("Перша четверть години");
    break;
    case (time >= 15 && time < 30):
        console.log("Друга четверть години");
        break;
    case (time >= 30 && time < 45):
        console.log("Третя четверть години");
        break;
    case (time >= 45 && time <60):
        console.log("Четверта четверть години");
        break;

    default:
        console.log("Невірне значення time")


}

                                                    // завдання 8


let day:number = 15;

if (day >= 1 && day <= 10) {
    console.log("Перша половина місяця");
 } else if (day >= 11 && day <= 20){
    console.log("Друга половина місяця")
} else if (day >= 21 && day <= 31) {
    console.log("Третя половина місяця")
} else {
    console.log("Невірне значення Day")
}

//                                                завдання 9

//
// let dayOfWeek:string = prompt("Введіть порядковий номер дня тижня (1-7)");
//
// switch (dayOfWeek) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Невірний номер дня!")
// }

                                                    // завдання 10




let num1 :string= prompt("Введіть перше число:");
let  num2:string = prompt("Введіть друге число:");

if (num1 > num2){
  console.log( "Максимальне число: " + num1);
} else if (num2> num1){
  console.log("Максимальне число: " + num2);
} else {
  console.log("Числа рівня.");
}

//                                               завдання 11

let x: string | number | undefined | null | boolean;
const defaultValue : string = 'default';
 x = x ||  defaultValue

console.log(x)

                                         // завдання 11


let coursesAndDurationArray:{title:string, monthDuration:number}[] = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

for ( let i:number =0; i < coursesAndDurationArray.length; i++) {
  if (coursesAndDurationArray[i].monthDuration > 5) {
    console.log("Супер")
  }
}