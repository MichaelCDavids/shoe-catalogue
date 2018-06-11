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
      // call function in factory
      //shoeCatalogue.addToCart(id)
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
     console.log(c);
     var b = addBrand.value;
     console.log(b);
     var p = Number(addPrice.value);
     console.log(p);
     var s = Number(addSize.value);
     console.log(s);
     var i = Number(addStock.value);
     console.log(i);
     shoeCatalogue.addStockItem(c,b,p,s,i);
     console.log(shoeCatalogue.shoesInStock());
     availableStockElement.innerHTML = templateCatalogue({shoes : shoeCatalogue.shoesInStock()});
   });
