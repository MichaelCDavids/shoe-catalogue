function ShoeCatalogue(storedData,storedCart){
   var Total = 0
   var shoes = [
      {id:1,color : 'azure', brand : "Adidas", price : 1350, size : 1, in_stock : 3},
      {id:2,color : 'beige', brand : "Asics", price : 1999, size : 2,in_stock : 25},
      {id:3,color : 'black', brand : "Caterpillar", price : 1540, size : 3,in_stock : 12},
      {id:4,color : 'brown', brand : "Converse", price : 1350, size : 4,in_stock : 3},
      {id:5,color : 'green', brand : "DC Shoes", price : 1999, size : 5,in_stock : 50},
      {id:6,color : 'grey', brand : "Etnies", price : 11200, size : 6,in_stock : 1},
      {id:7,color : 'gold', brand : "Fila", price : 1350, size : 7,in_stock : 2},
      {id:8,color : 'navy', brand : "Nike", price : 750, size : 8,in_stock : 10},
      {id:9,color : 'orange', brand : "New Balance", price : 2999, size : 9,in_stock : 8},
      {id:10,color : 'olive', brand : "Lacoste", price : 5000, size : 10, in_stock : 3},
      {id:11,color : 'pink', brand : "Puma", price : 1350, size : 11, in_stock : 3},
      {id:12,color : 'powderblue', brand : "Timberland", price : 1999, size : 12,in_stock : 25},
      {id:13,color : 'purple', brand : "Vans", price : 1540, size : 13,in_stock : 12},
      {id:14,color : 'red', brand : "Reebok", price : 1350, size : 14,in_stock : 3},
      {id:15,color : 'slategray', brand : "Timberland", price : 1999, size : 15,in_stock : 50},
      {id:16,color : 'snow', brand : "Vans", price : 11200, size : 1,in_stock : 1},
      {id:17,color : 'white', brand : "Caterpillar", price : 1350, size : 2,in_stock : 2},
      {id:18,color : 'red', brand : "Nike", price : 750, size : 3,in_stock : 10},
      {id:19,color : 'blue', brand : "Vans", price : 2999, size : 4,in_stock : 8},
      {id:20,color : 'white', brand : "DC Shoes", price : 5000, size : 5, in_stock : 3}
   ];

   var shoppingCart = [];

   if (storedData && storedData.length>0) {
      shoes = [];
      for (var i = 0; i < storedData.length; i++) {
         shoes.push(storedData[i]);
      }
   }
   if (storedCart && storedCart.length>0) {
      for (var i = 0; i < storedCart.length; i++) {
         shoppingCart.push(storedCart[i]);
      }
   }

   function getShoes(){
     let stockShoes = [];
     for (var i = 0; i < shoes.length; i++) {
       if (shoes[i].in_stock!==0) {
         stockShoes.push(shoes[i]);
       }
     }
      return stockShoes;
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

   function addItem(Color,Brand,Price,Size,Stock){
      var shoe = {color : Color, brand : Brand, price : Price, size : Size,in_stock : Number(Stock)};
      for (var i = 0; i < shoes.length; i++) {
         if (shoes[i].color === Color && shoes[i].brand === Brand && shoes[i].size === Size ) {
            var theShoe = shoes[i];
         }
      }
      let result = false;
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
      }
   }

   function addItemToCart(id){
      let isThere = false;
      let foundItem = shoes.find((current) => (current.id === id));
      if (foundItem.in_stock > 0) {
         shoppingCart.map((current) => {
            if (current.id === id) {
               current.qty += 1;
               isThere = true;
            }
         });

         if (!isThere) {
            shoppingCart.push({
               id: foundItem.id,
               color : foundItem.color,
               brand : foundItem.brand,
               price : foundItem.price,
               size : foundItem.size,
               qty : 1
            });
         }

         shoes.map((current) => {
            if (current.id === id) {
               current.in_stock -= 1;
            }
         });
      }
   }


   function clearCart(){
      // for (var i = 0; i < shoppingCart.length; i++) {
      //    for (var k = 0; k < shoes.length; k++) {
      //       if (shoes[k].id === shoppingCart[i].id) {
      //          if (shoes[k].in_stock>0 && shoes[k].in_stock-shoppingCart[i].qty>0){
      //            shoppingCart[i].qty ;//removing stock on Checkout
      //          }
      //       }
      //    }
      // }
      Total = 0;
      return shoppingCart = [];
   }

   function getCart(){
      return shoppingCart;
   }

   function cartTotal(){
      let subTotal = 0;
      for (var i = 0; i < shoppingCart.length; i++) {
         subTotal += shoppingCart[i].price * shoppingCart[i].qty;
      }
      return Total + subTotal;
   }

   return {
      shoesInStock : getShoes,
      filteredShoes : filterShoes,
      addStockItem : addItem,
      addCart : addItemToCart,
      Cart : getCart,
      Clear : clearCart,
      cartTotal : cartTotal
   }
}
