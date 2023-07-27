'use strict';

function AppState() {
  this.allProducts = [];
}


AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage

  let valueStored = JSON.stringify(this.allProducts);
  localStorage.setItem('productsData', valueStored);
  console.log(localStorage.productsData);

}

AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
let rawData = localStorage.getItem('productsData');
if (rawData) {
  this.allProducts = JSON.parse(rawData);
} else {
  this.instantiateProducts();
  this.saveToLocalStorage();
}
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
