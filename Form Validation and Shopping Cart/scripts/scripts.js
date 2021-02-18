var Module = (function() {
    var brands = [{brand: "guitar", price: 1500},
    {brand: "amp", price: 850},
    {brand: "cable", price: 20},
    {brand: "stand", price: 30}];

    return { addItems: function(n) {

        // check which item is being clicked, according to object index
        if (n == 0) {
            // getting total number of items in cart
            var formerItems = document.getElementById("items").innerHTML
            var formerQuantity = Number(formerItems)

            // getting subtotal of individual item from Amount column, and adding to it
            var formerBrand = document.getElementById("detail").innerHTML
            var nowQuantity = Number(formerBrand)
            var newQuantity = nowQuantity + 1

            // displaying updated total quantity of items
            document.getElementById("items").innerHTML = formerQuantity + 1

            // displaying individual subtotal of item
            document.getElementById("detail").innerHTML = newQuantity
            document.getElementById("displayGuitar").innerHTML = newQuantity

        } else if (n == 1) {
            var formerItems = document.getElementById("items").innerHTML
            var formerQuantity = Number(formerItems)
            var formerBrand = document.getElementById("detail2").innerHTML
            var nowQuantity = Number(formerBrand)
            var newQuantity = nowQuantity + 1
            document.getElementById("items").innerHTML = formerQuantity + 1
            document.getElementById("detail2").innerHTML = newQuantity
            document.getElementById("displayAmp").innerHTML = newQuantity
        } else if (n == 2) {
            var formerItems = document.getElementById("items").innerHTML
            var formerQuantity = Number(formerItems)
            var formerBrand = document.getElementById("detail3").innerHTML
            var nowQuantity = Number(formerBrand)
            var newQuantity = nowQuantity + 1
            document.getElementById("items").innerHTML = formerQuantity + 1
            document.getElementById("detail3").innerHTML = newQuantity
            document.getElementById("displayCable").innerHTML = newQuantity
        } else {
            var formerItems = document.getElementById("items").innerHTML
            var formerQuantity = Number(formerItems)
            var formerBrand = document.getElementById("detail4").innerHTML
            var nowQuantity = Number(formerBrand)
            var newQuantity = nowQuantity + 1
            document.getElementById("items").innerHTML = formerQuantity + 1
            document.getElementById("detail4").innerHTML = newQuantity
            document.getElementById("displayStand").innerHTML = newQuantity
        }

        // previous code
        // var formerItems = document.getElementById("items").innerHTML
        // var formerQuantity = Number(formerItems)
        // var formerBrand = document.getElementById("detail").innerHTML
        // var nowBrand = brands[n].brand
        // document.getElementById("items").innerHTML = formerQuantity + 1
        // document.getElementById("detail").innerHTML = formerBrand + ' ' + nowBrand
    },
    
        addPrice: function(n) {
            var formerPrice = Number(document.getElementById("total").innerHTML)
            var itemPrice = brands[n].price
            var newPrice = formerPrice + itemPrice
            document.getElementById("total").innerHTML = newPrice
            document.getElementById("sumTotal").innerHTML = newPrice
            document.getElementById("yourTotal").innerHTML = newPrice
        },

        // displayItems: function(n) {
        //     var numberOfItems = Number(document.getElementById("detail").innerHTML);
        //     var showItem = document.getElementById("displayGuitar");
        //     showItem.innerHTML = numberOfItems + "Guitars";
        // }

        clear: function() {
            var x = 0
            document.getElementById("items").innerHTML = 0
            document.getElementById("total").innerHTML = 0
            document.getElementById("detail").innerHTML = ""
            document.getElementById("detail2").innerHTML = ""
            document.getElementById("detail3").innerHTML = ""
            document.getElementById("detail4").innerHTML = ""
            // document.getElementById("message").innerHTML = ""
        }
    };
})();

document.getElementById("guitar").addEventListener("click", function() {
    Module.addItems(0)
    Module.addPrice(0)});
    // Module.displayItems(0)});

document.getElementById("amp").addEventListener("click", function() {
    Module.addItems(1)
    Module.addPrice(1)});

document.getElementById("cable").addEventListener("click", function() {
    Module.addItems(2)
    Module.addPrice(2)});

document.getElementById("stand").addEventListener("click", function() {
    Module.addItems(3)
    Module.addPrice(3)});

document.getElementById("clear").addEventListener("click", function() {
    Module.clear();
    });


