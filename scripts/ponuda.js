var createProductItem = function(productName, productImage, productUrlSlug) {
    var li = document.createElement("li");
    var containerEl = document.createElement("div");
    containerEl.className = "ponuda-row";
    containerEl.dataset.name = productName;
    var imageLink = document.createElement("a");
    imageLink.href = "ponuda/multifunkcijski/p.html#" + productUrlSlug;
    var imageEl = document.createElement("img");
    imageEl.className = "ponuda-thumbnail";
    imageEl.src = productImage;
    imageLink.appendChild(imageEl);
    var nameLink = document.createElement("a");
    nameLink.href = "ponuda/" + routePart + "/p.html#" + productUrlSlug;
    var productNameEl = document.createTextNode(productName);
    nameLink.appendChild(productNameEl);
    containerEl.appendChild(imageLink);
    containerEl.appendChild(nameLink);
    li.appendChild(containerEl);
    return li;
}

var productsList = document.getElementById("ponuda-lista-proizvoda");

for (var i = 0; i < productsData.length; i++) {
    var product = productsData[i];
    var productItem = createProductItem(product.naziv, product.slika, product.urlSlug);
    productsList.appendChild(productItem);
}