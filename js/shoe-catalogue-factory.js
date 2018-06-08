var shoes =
[  {color : 'white', brand : "Nike", price : 1350, size : 6, in_stock : 3},
   {color : 'green', brand : "Adidas", price : 1350, size : 7,in_stock : 25},
   {color : 'black', brand : "Puma", price : 1350, size : 7,in_stock : 12},
   {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 3},
   {color : 'orange', brand : "Vans", price : 350, size : 6,in_stock : 50},
   {color : 'white', brand : "Nike", price : 15000, size : 10,in_stock : 1},
   {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 2},
   {color : 'red', brand : "Reebok", price : 750, size : 10,in_stock : 10},
   {color : 'blue', brand : "Vans", price : 1000, size : 9,in_stock : 8},
   {color : 'white', brand : "Nike", price : 1350, size : 6, in_stock : 3},
   {color : 'green', brand : "Adidas", price : 1350, size : 7,in_stock : 25},
   {color : 'black', brand : "Puma", price : 1350, size : 7,in_stock : 12},
   {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 3},
   {color : 'orange', brand : "Vans", price : 350, size : 6,in_stock : 50},
   {color : 'white', brand : "Nike", price : 15000, size : 10,in_stock : 1},
   {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 2},
   {color : 'red', brand : "Reebok", price : 750, size : 10,in_stock : 10},
   {color : 'blue', brand : "Vans", price : 1000, size : 9,in_stock : 8}
];

function ShoeCatalogue(){

   // function displayShoes(){
   //
   // }

   function returnShoes(){
      return shoes;
   }

   return {
      returnedShoes : returnShoes
   }
}
