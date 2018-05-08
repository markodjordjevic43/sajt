var getProduct = function() {
    var urlSlug = window.location.hash.substr(1);
    for (var i = 0; i < productsData.length; i++) {
        var currentProduct = productsData[i];
        if (currentProduct.urlSlug === urlSlug) {
            return currentProduct;
        }
    }
}

var createRowEl = function(firstCell, secondCell, thirdCell) {
    var rowEl = document.createElement("tr");

    var firstCellEl = document.createElement("td");
    if (firstCell) {
        firstCellEl.className = "proizvod-sekcija-polje"
        var firstCellText = document.createTextNode(firstCell);
        firstCellEl.appendChild(firstCellText);
    }

    var secondCellEl = document.createElement("td");
    var secondCellText = document.createTextNode(secondCell);
    secondCellEl.appendChild(secondCellText);

    var thirdCellEl = document.createElement("td");
    var thirdCellText = document.createTextNode(thirdCell);
    thirdCellEl.appendChild(thirdCellText);

    rowEl.appendChild(firstCellEl);
    rowEl.appendChild(secondCellEl);
    rowEl.appendChild(thirdCellEl);

    return rowEl;
}

var addSection = function(sectionName, sectionLabel, product, tableEl) {
    if (product[sectionLabel]) {
        if (product[sectionLabel].length > 0) {
            for (var i = 0; i < product[sectionLabel].length; i++) {
                var item = product[sectionLabel][i];
                var row;
                if (i === 0) {
                    row = createRowEl(sectionName, item.labela, item.vrednost);
                }
                else {
                    row = createRowEl(null, item.labela, item.vrednost);
                }
                tableEl.appendChild(row);
            }
            addSectionSeparator(tableEl);
        }
    }
}

var addSectionSeparator = function(tableEl) {
    var separatorEl = document.createElement("tr");
    separatorEl.className = "proizvod-sekcija-redrazdvajac";

    var firstCellEl = document.createElement("td");
    firstCellEl.innerHTML = "&nbsp;";
    var secondCellEl = document.createElement("td");
    secondCellEl.innerHTML = "&nbsp;";
    var thirdCellEl = document.createElement("td");
    thirdCellEl.innerHTML = "&nbsp;";

    separatorEl.appendChild(firstCellEl);
    separatorEl.appendChild(secondCellEl);
    separatorEl.appendChild(thirdCellEl);

    tableEl.appendChild(separatorEl);
}