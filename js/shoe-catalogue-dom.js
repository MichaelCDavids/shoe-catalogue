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



var clearButton = document.querySelector("#clear-button");
var stockButton = document.querySelector("#stock-button");
var showButton = document.querySelector("#show-button");

//Template for available stock
var availableStockTemplateSource = document.querySelector(".availableStockTemplate").innerHTML;
var templateCatalogue = Handlebars.compile(availableStockTemplateSource);
var availableStockElement = document.querySelector(".insertAvailableStockElement");

//Template for search results
var templateSource = document.querySelector(".afterSearchTemplate").innerHTML;
var templateShoeCatalogue = Handlebars.compile(templateSource);
var insertSearchDataElement = document.querySelector(".insertSearchDataElement");

//Template for shoppingCart
var templateSource = document.querySelector(".shoppingCartTemplate").innerHTML;
var templateShoppingCart = Handlebars.compile(templateSource);
var insertShoppingCartElement = document.querySelector(".insertShoppingCartElement");

//Getting shoes in the Cart from Local Storage
var cartStore = localStorage.getItem('Cart');
var storedCart = JSON.parse(cartStore);

//Getting sthe available shoes from Local Storage
var shoeStore = localStorage.getItem('Shoes');
var storedShoes = JSON.parse(shoeStore);

//instance of the factory function
var shoeCatalogue = ShoeCatalogue(storedShoes, storedCart);

//on page load event
window.addEventListener('load',function(){
   availableStockElement.innerHTML = templateCatalogue({shoes : shoeCatalogue.shoesInStock()});
   location.hash = "";
});

searchButton.addEventListener('click',function(){
   location.hash = "search";
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
   localStorage.setItem("Shoes",JSON.stringify(shoeCatalogue.shoesInStock()))
   availableStockElement.innerHTML = templateCatalogue({shoes : shoeCatalogue.shoesInStock()});
});

function addToCart(id) {
   shoeCatalogue.addCart(id);
   if (location.hash === "#search") {
      insertSearchDataElement.innerHTML = templateShoeCatalogue({scannedShoes : shoeCatalogue.filteredShoes(colorSelector.value,Number(sizeSelector.value),brandSelector.value)});
   }else if(location.hash === ""){
      availableStockElement.innerHTML = templateCatalogue({shoes : shoeCatalogue.shoesInStock()});
   }
   localStorage.setItem('Cart',JSON.stringify(shoeCatalogue.Cart()));
   localStorage.setItem('Shoes',JSON.stringify(shoeCatalogue.shoesInStock()));
}


stockButton.addEventListener("click",function(){
  availableStockElement.innerHTML = templateCatalogue({shoes : shoeCatalogue.shoesInStock()});
  insertShoppingCartElement.innerHTML = "";
});

clearButton.addEventListener('click',function(){
   shoeCatalogue.Clear();
   localStorage.removeItem('Cart');
   localStorage.setItem("Shoes",JSON.stringify(shoeCatalogue.shoesInStock()))
   availableStockElement.innerHTML = templateCatalogue({shoes : shoeCatalogue.shoesInStock()});
   insertShoppingCartElement.innerHTML = "";
   location.hash = "";
});


showButton.addEventListener('click',function(){
   //location.hash = "cart";
   insertShoppingCartElement.innerHTML = templateShoppingCart({cartShoes : shoeCatalogue.Cart(), total: shoeCatalogue.cartTotal()});
   insertSearchDataElement.innerHTML = "";
   availableStockElement.innerHTML = ""
});
