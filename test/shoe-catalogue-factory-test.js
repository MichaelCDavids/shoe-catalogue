describe('The getShoes Function',function(){
   it('should fetch the shoe data',function(){
      var shoeData = ShoeCatalogue();
      assert.deepEqual(shoeData.shoesInStock(),
      [  {color : 'white', brand : "Nike", price : 1350, size : 6, in_stock : 3},
         {color : 'green', brand : "Adidas", price : 1350, size : 7,in_stock : 25},
         {color : 'black', brand : "Puma", price : 1350, size : 7,in_stock : 12},
         {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 3},
         {color : 'orange', brand : "Vans", price : 350, size : 6,in_stock : 50},
         {color : 'white', brand : "Nike", price : 15000, size : 10,in_stock : 1},
         {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 2},
         {color : 'red', brand : "Reebok", price : 750, size : 10,in_stock : 10},
         {color : 'blue', brand : "Vans", price : 1000, size : 19,in_stock : 8},
         {color : 'white', brand : "Nike", price : 1350, size : 6, in_stock : 3},
         {color : 'green', brand : "Adidas", price : 1350, size : 7,in_stock : 25},
         {color : 'black', brand : "Puma", price : 1350, size : 7,in_stock : 12},
         {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 3},
         {color : 'orange', brand : "Vans", price : 350, size : 16,in_stock : 50},
         {color : 'white', brand : "Nike", price : 15000, size : 10,in_stock : 1},
         {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 2},
         {color : 'red', brand : "Reebok", price : 750, size : 10,in_stock : 10},
         {color : 'blue', brand : "Vans", price : 1000, size : 19,in_stock : 8}
      ]);
   });
});
describe('The filterShoes Function',function(){
   it('should return the shoes that matches the search criteria',function(){
      var shoeData = ShoeCatalogue();
      assert.deepEqual(shoeData.filteredShoes("orange",8,"Nike"),[
        {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 3},
        {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 2},
        {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 3},
        {color : 'orange', brand : "Nike", price : 1350, size : 8,in_stock : 2},
      ]);
   });
});
describe('The addToCart Function',function(){
   it('should add item to cart and decrement stock of the item',function(){
      var shoeData = ShoeCatalogue();

      shoeData.addCart(10);

      assert.deepEqual(shoeData.shoesInStock(),[{id:1,color : 'white', brand : "Nike", price : 1350, size : 1, in_stock : 3},
         {id:2,color : 'green', brand : "Adidas", price : 1999, size : 1,in_stock : 25},
         {id:3,color : 'black', brand : "Lacoste", price : 1540, size : 2,in_stock : 12},
         {id:4,color : 'orange', brand : "Nike", price : 1350, size : 2,in_stock : 3},
         {id:5,color : 'orange', brand : "Vans", price : 1999, size : 3,in_stock : 50},
         {id:6,color : 'white', brand : "Nike", price : 11200, size : 3,in_stock : 1},
         {id:7,color : 'orange', brand : "Nike", price : 1350, size : 4,in_stock : 2},
         {id:8,color : 'red', brand : "Fila", price : 750, size : 4,in_stock : 10},
         {id:9,color : 'blue', brand : "Vans", price : 2999, size : 5,in_stock : 8},
         {id:10,color : 'white', brand : "Fila", price : 5000, size : 5, in_stock : 2}]);
   });
});
// describe('',function(){
//    it('',function(){
//       var instance = ShoeCatalogue();
//       assert.equal(instance.functionName(),);
//    });
// });
// describe('',function(){
//    it('',function(){
//       var instance = ShoeCatalogue();
//       assert.equal(instance.functionName(),);
//    });
// });
// describe('',function(){
//    it('',function(){
//       var instance = ShoeCatalogue();
//       assert.equal(instance.functionName(),);
//    });
// });
