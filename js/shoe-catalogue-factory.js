var shoes =
[  {id:1,color : 'white', brand : "Nike", price : 1350, size : 1, in_stock : 3},
   {id:2,color : 'green', brand : "Adidas", price : 1999, size : 1,in_stock : 25},
   {id:3,color : 'black', brand : "Lacoste", price : 1540, size : 2,in_stock : 12},
   {id:4,color : 'orange', brand : "Nike", price : 1350, size : 2,in_stock : 3},
   {id:5,color : 'orange', brand : "Vans", price : 1999, size : 3,in_stock : 50},
   {id:6,color : 'white', brand : "Nike", price : 11200, size : 3,in_stock : 1},
   {id:7,color : 'orange', brand : "Nike", price : 1350, size : 4,in_stock : 2},
   {id:8,color : 'red', brand : "Fila", price : 750, size : 4,in_stock : 10},
   {id:9,color : 'blue', brand : "Vans", price : 2999, size : 5,in_stock : 8},
   {id:10,color : 'white', brand : "Fila", price : 5000, size : 5, in_stock : 3},
   {id:11,color : 'brown', brand : "Adidas", price : 1350, size : 6,in_stock : 25},
   {id:12,color : 'black', brand : "Caterpillar", price : 1350, size : 6,in_stock : 12},
   {id:13,color : 'orange', brand : "Nike", price : 1350, size : 7,in_stock : 3},
   {id:14,color : 'orange', brand : "Vans", price : 350, size : 7,in_stock : 50},
   {id:15,color : 'white', brand : "Fila", price : 15000, size : 8,in_stock : 1},
   {id:16,color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 2},
   {id:17,color : 'red', brand : "Reebok", price : 750, size : 9,in_stock : 10},
   {id:18,color : 'blue', brand : "Vans", price : 1999, size : 9,in_stock : 8},
   {id:19,color : 'green', brand : "Asics", price : 1350, size : 10,in_stock : 25},
   {id:20,color : 'black', brand : "Lacoste", price : 1350, size : 10,in_stock : 12},
   {id:21,color : 'orange', brand : "Nike", price : 750, size : 11,in_stock : 3},
   {id:22,color : 'orange', brand : "Vans", price : 350, size : 11,in_stock : 50},
   {id:23,color : 'white', brand : "Nike", price : 15000, size : 12,in_stock : 1},
   {id:24,color : 'pink', brand : "Converse", price : 1350, size : 12,in_stock : 2},
   {id:25,color : 'red', brand : "Reebok", price : 750, size : 13,in_stock : 10},
   {id:26,color : 'blue', brand : "Vans", price : 1000, size : 13,in_stock : 8},
   {id:27,color : 'white', brand : "Nike", price : 1050, size : 14, in_stock : 3},
   {id:28,color : 'green', brand : "Adidas", price : 1350, size : 14,in_stock : 25},
   {id:29,color : 'black', brand : "DC", price : 850, size : 15,in_stock : 12},
   {id:30,color : 'orange', brand : "Nike", price : 1350, size : 15,in_stock : 3},
   {id:31,color : 'orange', brand : "Vans", price : 750, size : 3,in_stock : 50},
   {id:32,color : 'white', brand : "Fila", price : 9000, size : 2,in_stock : 1},
   {id:33,color : 'orange', brand : "Nike", price : 1350, size : 1,in_stock : 2},
   {id:34,color : 'red', brand : "Lacoste", price : 750, size : 5,in_stock : 10},
   {id:35,color : 'blue', brand : "Vans", price : 1000, size : 8,in_stock : 8}
];

function ShoeCatalogue(){



   function getShoes(){
      return shoes;
   }

   function filterShoes(color,size,brand){
     var filteredShoes = [];
     for (var i = 0; i < shoes.length; i++) {
       if (shoes[i].brand === brand || brand === "") {
         if (shoes[i].size === size || size === 0) {
           if (shoes[i].color === color || color === "") {
             filteredShoes.push(shoes[i]);
           }
         }
       }
     }
     return filteredShoes;
   }
   // .in_stock += Stock;
   function addItem(Color,Brand,Price,Size,Stock){
      var shoe = {color : Color, brand : Brand, price : Price, size : Size,in_stock : Stock};
      for (var i = 0; i < shoes.length; i++) {
         if (shoes[i].color === Color && shoes[i].brand === Brand && shoes[i].size === Size ) {
            var theShoe = shoes[i];
         }
      }
      var result = false;
      for (var k = 0; k < shoes.length; k++) {
         if (shoes[k].color === Color && shoes[k].brand === Brand && shoes[k].size === Size && shoes[k].price === Price) {
            result = true;
         }
      }
      if(result){
         alert("Shoe Is in List, Updating Stock");
         theShoe.in_stock += Stock;
      }else{
         shoes.push({id:shoes.length+1,color : Color, brand : Brand, price : Price, size : Size,in_stock : Stock});
         alert("Succesfully added Shoe");
         console.log(shoes);
      }
   }


   function addItemToCart(id){
     for (var i = 0; i < shoes.length; i++) {
       if (shoes[i].id === id) {
         console.log(shoes[i]);
         return shoes[i];
       }
     }
   }

   return {
      shoesInStock : getShoes,
      filteredShoes : filterShoes,
      addStockItem : addItem,
      addCart : addItemToCart
   }
}
