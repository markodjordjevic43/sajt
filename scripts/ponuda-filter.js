var ponudaFilter = (function () {

    var offerItems = document.getElementById("ponuda-lista-proizvoda").getElementsByClassName("ponuda-row");
    var searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", applyFilter);


    function applyFilter() {
        for (var offerItem of offerItems) {
            if(passesFilter(offerItem)) {
                offerItem.parentNode.style.display = "block";
            }
            else {
                offerItem.parentNode.style.display = "none";
            }
        }
    }

    function passesFilter(el) {
        if (!passesSearchFilter(el)) {
            return false;
        }
        return true;
    }

    function passesSearchFilter(el) {
        var passes = true;
        var searchTerm = searchInput.value.toLowerCase();
        if (searchTerm.length > 1) {
            var deviceName = el.dataset.name;
            var deviceType = el.dataset.type;
            passes = deviceName.toLowerCase().indexOf(searchTerm) !== -1;
        }
        return passes;
    }

    return {
        applyFilter: applyFilter
    };

})();