                                                  // завдання 1

 function areaOfTheRectangle(aNum:number,bNum:number):number {
    return aNum * bNum
}
console.log(areaOfTheRectangle(5,10))



                                                  // завдання 2


  function areaOfCircle(r:number):number{
    return Math.PI * r * r
}
console.log(areaOfCircle(7))


                                                  // завдання 3

                                                  function areaOfCylinder(r:number, h:number):number{
                                                      return 2 * Math.PI * r * h
                                                  }
                                                  console.log(areaOfCylinder(9,3))

                                                  // завдання 4

                                                  function Elements<T>(array:T[]):void{
                                                      for (let item:number = 0; item < array.length; item++){
                                                          console.log(array[item])
                                                      }
                                                  }
                                                  const Arr:number[]= [123,456,789,258,369];
                                                      Elements(Arr);

                                                  // завдання 5

                                                  function createParagraph(text:string):void{
                                                      document.write(`<p>${text}</p>`)
                                                  }

                                                     createParagraph("Hello okten")

                                                  // завдання 6

                                                  function creatList(text:string):void {
                                                            document.write(`
                                                            <ul>
                                                                   <li>${text}</li>
                                                                   <li>${text}</li>
                                                                   <li>${text}</li>
                                                                   </ul>
                                                                   `);
                                                        }
                                                  creatList("three elements")

                                                  // завдання 7

                                                  function createList (text:string,numbers:number):void{
                                                      document.write("<ul>");
                                                      for (let item:number = 0; item < numbers; item++){
                                                          document.write(`<li>${text}</li>`)
                                                      }
                                                      document.write("</ul>");
                                                  }

                                                  createList("text elements",3);

                                                  // завдання 8

                                                  function fromArray(items:(string | number | boolean)[]):void{
                                                        document.write("<ul>");
                                                        for (let i:number = 0; i < items.length; i++){
                                                            document.write(`<li>${items[i]}</li>`);
                                                        }
                                                        document.write("</ul>")
                                                    }
                                                  fromArray(["qwe","asd","zxc",true,125,1263])

                                                    // завдання 9

                                                  interface Object{
                                                      id:number;
                                                      name:string;
                                                      age:number;
                                                  }
                                                  function arrayObjects(objects:Object[]):void{
                                                    for (const item of objects){
                                                        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
                                                    }
                                                  }
                                                  arrayObjects([
                                                          { id:1, name:`vasya`, age:20},
                                                          { id:2, name:`kolya`, age:21},
                                                          { id:3, name:`petya`, age:22},
                                                      ])

                                                  // завдання 10

                                                   function findMin(numbers:number[]) :number{
                                                      let min:number = numbers[0];
                                                      for (let i:number = 0; i < numbers.length; i++) {
                                                          let number:number = numbers[i];
                                                          if (number < min) {
                                                              min = number;
                                                          }

                                                      }
                                                      return min;
                                                  }

                                                  console.log(findMin([5,9,-9,10,45]));

                                                  // завдання 11

                                                  function sum(arr:number[]):number{
                                                       let item:number = 0;
                                                       for (const array of arr){
                                                           item = item + array
                                                       }
                                                       return item
                                                  }
                                                  console.log(sum([1,2,10]));

                                                  // завдання 12


                                                  function swap<T>(arr:T[], index1:number, index2:number) : T[]{
                                                      let item = arr[index1];
                                                      arr[index1] = arr[index2];
                                                      arr[index2] = item;

                                                      return arr
                                                  }
                                                  console.log(swap([11,22,33,44],0,1));

                                                  // завдання 13

                                                  interface CurrencyRate{
                                                      currency:string;
                                                      value: number;
                                                  }
                                                  function exchange(sumUAH:number,currencyValues:CurrencyRate[],exchangeCurrency:string):number{
                                                      for (let i:number =0; i<currencyValues.length; i++){
                                                         if (currencyValues[i].currency === exchangeCurrency){
                                                              return sumUAH / currencyValues[i].value;
                                                          }

                                                      }


                                                  }
                                                  const result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
                                                  console.log(result)


