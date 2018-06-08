   var brandSelector = document.querySelector(".brand");
   var sizeSelector = document.querySelector(".size");
   var colorSelector = document.querySelector(".color");
   var searchButton = document.querySelector("#search-button");

   var addBrand = document.querySelector(".brandBax");
   var addSize = document.querySelector(".sizeBox");
   var addColor = document.querySelector(".colorBox");
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

   //on page load event
   window.addEventListener('load',function(){
     availableStockElement.innerHTML = templateCatalogue({shoes : shoeCatalogue.returnedShoes()});
   });

   searchButton.addEventListener('click',function(){
      insertSearchDataElement.innerHTML = templateShoeCatalogue({filteredShoes : shoeCatalogue.filteredShoes()});
   });
   // addButton.addEventListener('click',function(){
   //
   // });
