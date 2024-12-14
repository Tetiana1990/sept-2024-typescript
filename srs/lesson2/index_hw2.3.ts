

let string:string[] = ['hello world', 'lorem ipsum', 'javascript is cool'];
            for (const item of string) {
    console.log(item.length)
}




 let string1:string = 'hello world'
    const s1:string = string1.toUpperCase()
      console.log(s1)
let string2:string = 'lorem ipsum'
    const s2:string = string2.toUpperCase()
      console.log(s2)
let string3:string = 'javascript is cool'
    const s3:string = string3.toUpperCase()
       console.log(s3)




        let string5:string = 'HELLO WORLD'
    const s5:string = string5.toLowerCase()
      console.log(s5)
let string6:string = 'LOREM IPSUM'
    const s6:string = string6.toLowerCase()
      console.log(s6)
let string7:string = 'JAVASCRIPT IS COOL'
    const s7:string = string7.toLowerCase()
       console.log(s7)





let str:string =' dirty string   ';
     const s = str.trim();
     console.log(s);
     console.log(str.length);
     console.log(s.length)



function stringToArray(str:string):string[] {
         if(str) {
             const split:string[] = str.split(` `);
             return split;
         }
         return [``];
     }

console.log(stringToArray('Ревуть воли як ясла повні'))




let num:number[] =[10,8,-7,55,987,-1011,0,1050,0];
     let strings =num.map(num=>num + ``);


console.log(strings)




type Direction = 'ascending' | 'descending';
let nums:number[] = [11,21,3];
      function sortNums(array:number[],direction:Direction):number[]{
          if (direction ==='ascending' ){
              return array.sort((a,b) => a-b);

          }

              if (direction ==='descending'){
                  return array.sort((a,b) => b-a);
              }

      }
console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))




//
// type Course = {
//           title:string;
//           monthDuration:number;
// }
//
// type CourseWithId = {
//           Id:number;
//           title:string;
//           monthDuration:number
// }
//
// let coursesAndDurationArray:Course[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4},
//    ];
// let map1:Course[] = coursesAndDurationArray
//     .sort((a:Course,b:Course) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration>5)
//     .map((value, index) => {
//         value.id = index +1;
//         return value
// });
//
// console.log(map1)
//



//
// type Suit = 'spade' | 'diamond' | 'heart' | 'club';
// type Value = '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';
//
// interface Card{
//     cardSuit: Suit;
//     value: Value;
//     color: 'red' | 'black';
// }
//
// const suits:Suit[] =[`spade`,`diamond`,`heart`,`club`];
// const values:Value[] =[`6`,`7`,`8`,`9`,`10`, `jack`,`queen`,`king`,`ace`];
// const cards:Card[] =[];
// for (const suit of suits){
//     for (const value of values){
//         const card:Card = {cardSuit: suit,value:value, color: 'black'};
//         if (suit === `heart`|| suit ===`diamond`){
//             card.color =`red`;
//         }else {
//             card.color = `black`
//         }
//         cards. push(card);
//     }
// }
// console.log(cards)
//
//    console.log(cards.find(card => card.value ===`ace` && card.cardSuit === `spade`));
//   console.log(cards.filter(card => card.value === `6`));
//   console.log(cards.filter(card => card.cardSuit ===`heart`||card.cardSuit ===`diamond` ))
//    console.log(cards.filter(card => card.cardSuit ===`diamond`))
//    console.log(cards.filter(card => card.cardSuit === `club` && (card.value ===`6` || card.value === `7` ||  card.value === `8`|| card.value === `9`)));







// type Suits = 'spade' | 'diamond' | 'heart' | 'club';
// type Values = '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';
//
// interface Card{
//     cardSuit: Suits;
//     value: Values;
//     color: 'red' | 'black';
// }
//
// interface CategorizedCards{
//     spades: Card[];
//     diamonds: Card[];
//     hearts: Card[];
//     clubs: Card[];
// }
//
// const suits:Suits[] =[`spade`,`diamond`,`heart`,`club`];
// const value:Values[] =[`6`,`7`,`8`,`9`,`10`, `jack`,`queen`,`king`,`ace`];
// const cards:Card[] =[];
// for (const suit of suits){
//     for (const value of values){
//         const card:Card = {cardSuit: suit,value:value, color: 'black'};
//         if (suit === `heart`|| suit ===`diamond`){
//             card. color =`red`;
//         }else {
//             card.color = `black`
//         }
//         cards. push(card);
//     }
// }
// console.log(cards)
//
//    const reduce:CategorizedCards = cards.reduce((accum:CategorizedCards,card:Card) =>{
//         switch (card.cardSuit) {
//             case `spade`:
//                 accum.spades.push(card);
//               break;
//             case `diamond`:
//                 accum.diamonds.push(card);
//                 break;
//             case `heart`:
//                 accum.hearts.push(card);
//                 break;
//             case `club`:
//                 accum.clubs.push(card);
//                 break;
//         }
//         return accum
//     },{
//         spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
//     })
//
// console.log(reduce)




// interface Course {
//     title: string;
//     monthDuration:number;
//     hourDuration:number;
//     modules: string[];
// }
//
//
// let coursesArray:Course[] = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.filter(value => {
//    return value.modules.includes(`sass`)
// }));
//
// console.log(coursesArray.filter(value => {
//     return value.modules.includes(`docker`)
// }));