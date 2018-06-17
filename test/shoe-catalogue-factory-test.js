describe('The getShoes Function',function(){

   it('should fetch the shoe data',function(){
      var shoeData = ShoeCatalogue();
      assert.deepEqual(shoeData.shoesInStock(),
      [
         {id:1,color : 'white', brand : "Nike", price : 1350, size : 1, in_stock : 3},
         {id:2,color : 'green', brand : "Adidas", price : 1999, size : 1,in_stock : 25},
         {id:3,color : 'black', brand : "Lacoste", price : 1540, size : 2,in_stock : 12},
         {id:4,color : 'orange', brand : "Nike", price : 1350, size : 2,in_stock : 3},
         {id:5,color : 'orange', brand : "Vans", price : 1999, size : 3,in_stock : 50},
         {id:6,color : 'white', brand : "Nike", price : 11200, size : 3,in_stock : 1},
         {id:7,color : 'orange', brand : "Nike", price : 1350, size : 4,in_stock : 2},
         {id:8,color : 'red', brand : "Fila", price : 750, size : 4,in_stock : 10},
         {id:9,color : 'blue', brand : "Vans", price : 2999, size : 5,in_stock : 8},
         {id:10,color : 'white', brand : "Fila", price : 5000, size : 5, in_stock : 3}
      ]);
   });
});

describe('The filterShoes Function',function(){

   it('should return the shoes that matches the search criteria',function(){
      var shoeData = ShoeCatalogue();
      assert.deepEqual(shoeData.filteredShoes("white",1,"Nike"),[
         {id:1,color : 'white', brand : "Nike", price : 1350, size : 1, in_stock : 3}]);
   });

});


describe('The addItemToCart Function',function(){

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

   it('should add item to cart and decrement stock of the item',function(){
      var shoeData = ShoeCatalogue();

      shoeData.addCart(5);

      assert.deepEqual(shoeData.shoesInStock(),[{id:1,color : 'white', brand : "Nike", price : 1350, size : 1, in_stock : 3},
         {id:2,color : 'green', brand : "Adidas", price : 1999, size : 1,in_stock : 25},
         {id:3,color : 'black', brand : "Lacoste", price : 1540, size : 2,in_stock : 12},
         {id:4,color : 'orange', brand : "Nike", price : 1350, size : 2,in_stock : 3},
         {id:5,color : 'orange', brand : "Vans", price : 1999, size : 3,in_stock : 49},
         {id:6,color : 'white', brand : "Nike", price : 11200, size : 3,in_stock : 1},
         {id:7,color : 'orange', brand : "Nike", price : 1350, size : 4,in_stock : 2},
         {id:8,color : 'red', brand : "Fila", price : 750, size : 4,in_stock : 10},
         {id:9,color : 'blue', brand : "Vans", price : 2999, size : 5,in_stock : 8},
         {id:10,color : 'white', brand : "Fila", price : 5000, size : 5, in_stock : 3}]);
   });
});


describe('the Clear Function',function(){
   it('shoud empty the shopping cart and clear the cart total',function(){
      var shoeData = ShoeCatalogue();
      shoeData.Clear();
      assert.deepEqual(shoeData.Cart(),[]);
   });
});
