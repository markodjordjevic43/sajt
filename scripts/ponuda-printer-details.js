var productTitleEl = document.getElementById("product-title");
var productTableEl = document.getElementById("product-table");
var productImageEl = document.getElementById("product-image");

var prod = getProduct();

productTitleEl.textContent = prod.naziv;
productImageEl.src = "../../" + prod.slika;

addSection("Štampa", "stampa", prod, productTableEl);
addSection("Povezivost", "povezivost", prod, productTableEl);
addSection("Potrošni", "potrosniMaterijal", prod, productTableEl);
addSection("Ostalo", "ostalo", prod, productTableEl);
addSection("Fizičke karakteristike", "fizickeKarakteristike", prod, productTableEl);