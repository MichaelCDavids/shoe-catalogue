document.addEventListener('DOMContentLoaded',function(){
   var brandSelector = document.querySelector(".brand");
   var sizeSelector = document.querySelector(".size");
   var colorSelector = document.querySelector(".color");
   var searchButton = document.querySelector("#search-button");

   //Reference to template
   var templateSource = document.querySelector(".ShoeCatalogueTemplate").innerHTML;
   //Compile the template
   var templateShoeCatalogue = Handlebars.compile(templateSource);
   //Reference to the place to insert template
   var insertDataElement = document.querySelector(".insertShoeCatalogueTemplate");

   //instance of the factory function
   var shoeCatalogue = ShoeCatalogue();

   //on page load event
   window.addEventListener('load',function(){
     insertDataElement.innerHTML = templateShoeCatalogue({
       shoes : shoeCatalogue.displayShoes()
     });
   });

   searchButton.addEventListener('click',function(){
      var brand = brandSelector.value;
      var size = sizeSelector.value;
      var color = colorSelector.value;

      insertDataElement.innerHTML = templateShoeCatalogue({
       shoes : shoeCatalogue.filteredShoes()
      });
   })

});
