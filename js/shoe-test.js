var shoes = [
   {color : 'white', brand : "Nike", price : 1350, size : 6, in_stock : 3},
   {color : 'green', brand : "Adidas", price : 1350, size : 7,in_stock : 25},
   {color : 'black', brand : "Puma", price : 1350, size : 7,in_stock : 12},
   {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 3},
   {color : 'orange', brand : "Vans", price : 350, size : 6,in_stock : 50},
   {color : 'white', brand : "Nike", price : 15000, size : 10,in_stock : 1},
   {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 2},
   {color : 'red', brand : "Reebok", price : 750, size : 10,in_stock : 10},
   {color : 'blue', brand : "Vans", price : 1000, size : 9,in_stock : 8},
  {
      color : 'red',
      brand : "Adidas",
      price : 700,
      in_stock : 7,
      size : 8,
  },
  {
      color : 'green',
      brand : "Nike",
      price : 699,
      size : 11,
      in_stock : 10
  },
  {
      color : 'orange',
      brand : "Puma",
      price : 820,
      size : 11,
      in_stock : 12
  },
  {
      color : 'black',
      brand : "Nike",
      price : 799,
      size : 7,
      in_stock : 12
  },
  {
      color : 'orange',
      brand : "Puma",
      price : 820,
      size : 7,
      in_stock : 12
  },
  {
      color : 'orange',
      brand : "Adidas",
      price : 820,
      size : 5,
      in_stock : 12
  },
  {
      color : 'blue',
      brand : "Puma",
      price : 820,
      size : 7,
      in_stock : 12
  },
  {
      color : 'orange',
      brand : "Nike",
      price : 820,
      size : 11,
      in_stock : 12
  },
  {
      color : 'white',
      brand : "Reebok",
      price : 550,
      size : 5,
      in_stock : 4
  },
  {
      color : 'red',
      brand : "Adidas",
      price : 869,
      size : 10,
      in_stock : 2
  },
  {
      color : 'white',
      brand : "Adidas",
      price : 2750,
      size : 9,
      in_stock : 1
  },
  {
      color : 'black',
      brand : "Nike",
      price : 1500,
      size : 6,
      in_stock : 1
  },
];


function displayColorsCount(data,c,s,b){
   var brand = 0;
   var count = 0;
   var size = 0;
   for (var i = 0; i < data.length; i++) {

      if (data[i].brand === b) {
         brand++;
      }
   }
   for (var i = 0; i < data.length; i++) {

      if (data[i].color === c) {
         count++;
      }
   }
   for (var i = 0; i < data.length; i++) {

      if (data[i].size === s) {
         size++;
      }
   }
   console.log("How many shoes of the "+c+":"+count);
   console.log("How many shoes of size "+s+": "+size);
   console.log("How many shoes of the brand "+b+": "+brand);
}

function addShoes(){

}

displayColorsCount(shoes,'black',7,'Vans');
