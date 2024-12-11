                                          // завдання 1

for (let item:number = 1; item <= 10; item++){
    document.write(`<div> Це довільний текст</div>`);
}

                                          // завдання 2

                                          for (let item:number = 0; item < 10; item++){
                                              document.write(`<div> Це довільний текст ${item}</div>`);
                                          }

                                            // завдання 3

                                          let  item2:number = 1;
                                          while (item2 <= 20){
                                              document.write(`<h1> це довільний текст</h1>`);
                                              item2++
                                          }

                                          // завдання 4


                                          let  item:number = 0;
                                          while (item < 20){
                                              document.write(`<h1> це довільний текст ${item}</h1>`);
                                              item++
                                          }

                                          // завдання 5


                                          let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

                                          document.write(`<ul>`);
                                          for (let item:number = 0; item < listOfItems.length; item++){
                                              document.write(`<li>${listOfItems[item]}</li>`);
                                          }
                                          document.write(`</ul>`);


                                      // завдання  6
class Product {
    title: string;
    price: number;
    image: string;
};

                                        let products:Product[] = [
                                              {
                                                  title: 'Milk',
                                                  price: 22,
                                                  image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
                                              },
                                              {
                                                  title: 'Juice',
                                                  price: 27,
                                                  image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
                                              },
                                              {
                                                  title: 'Tomato',
                                                  price: 47,
                                                  image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
                                              },
                                              {
                                                  title: 'Tea',
                                                  price: 15,
                                                  image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
                                              },
                                          ];

                                          for (const product of products){
                                              document.write(`
                                                      <div class="product-card">
                                                          <h3 class="product-title">${product.title}</h3>
                                                            <h3 class="product-title">  price - ${product.price}</h3>
                                                          <img src="${product.image}" alt="" class="product-image">
                                                      </div>
                                              `)
                                          }

                                          // завдання  7
class User {
    name: string;
    age: number;
    status: boolean;
};

                                          let users:User[] = [
                                              {name: 'vasya', age: 31, status: false},
                                              {name: 'petya', age: 30, status: true},
                                              {name: 'kolya', age: 29, status: true},
                                              {name: 'olya', age: 28, status: false},
                                              {name: 'max', age: 30, status: true},
                                              {name: 'anya', age: 31, status: false},
                                              {name: 'oleg', age: 28, status: false},
                                              {name: 'andrey', age: 29, status: true},
                                              {name: 'masha', age: 30, status: true},
                                              {name: 'olya', age: 31, status: false},
                                              {name: 'max', age: 31, status: true}
                                          ];


                                          for (const user of users) {
                                              if (user.status) {
                                                  console.log(user);
                                              }
                                          }

                                          for (const user of users) {
                                              if (!user.status) {
                                                  console.log(user);
                                              }
                                          }

                                          for (const user of users) {
                                              if (user.age > 30) {
                                                  console.log(user);
                                              }
                                          }











