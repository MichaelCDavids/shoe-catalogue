   var brandSelector = document.querySelector(".brand");
   var sizeSelector = document.querySelector(".size");
   var colorSelector = document.querySelector(".color");
   var searchButton = document.querySelector("#search-button");

   var addColor = document.querySelector(".addColor");
   var addBrand = document.querySelector(".addBrand");
   var addPrice = document.querySelector(".addPrice");
   var addSize = document.querySelector(".addSize");
   var addStock = document.querySelector(".addStock");
   var addButton = document.querySelector("#add-button");


   //Template for available stock
   var availableStockTemplateSource = document.querySelector(".availableStockTemplate").innerHTML;
   var templateCatalogue = Handlebars.compile(availableStockTemplateSource);
   var availableStockElement = document.querySelector(".insertAvailableStockElement");

   //Template for search results
   var templateSource = document.querySelector(".afterSearchTemplate").innerHTML;
   var templateShoeCatalogue = Handlebars.compile(templateSource);
   var insertSearchDataElement = document.querySelector(".insertSearchDataElement");

   //instance of the factory function
   var shoeCatalogue = ShoeCatalogue();

   function addToCart(id) {
      console.log(id);
      localStorage.setItem('cart',JSON.stringify(shoeCatalogue.addCart(id)));
   }

   //on page load event
   window.addEventListener('load',function(){
     availableStockElement.innerHTML = templateCatalogue({shoes : shoeCatalogue.shoesInStock()});
   });

   searchButton.addEventListener('click',function(){
      availableStockElement.innerHTML = "";
      insertSearchDataElement.innerHTML = templateShoeCatalogue({scannedShoes : shoeCatalogue.filteredShoes(colorSelector.value,Number(sizeSelector.value),brandSelector.value)});
   });

   addButton.addEventListener('click',function(){
     var c = addColor.value;
     var b = addBrand.value;
     var p = Number(addPrice.value);
     var s = Number(addSize.value);
     var i = Number(addStock.value);
     shoeCatalogue.addStockItem(c,b,p,s,i);
     availableStockElement.innerHTML = templateCatalogue({shoes : shoeCatalogue.shoesInStock()});
   });
