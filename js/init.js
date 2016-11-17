'use strict';
$(function() {

    const $cartTable = $('#cartTable');
    const $menu = $('#menu');
    const $submit = $('#submit-button');

    //ideally we'd want to import our menu cards as an object of objects in a .js file and inject them dynamically here//

    function updateCart() {
        const $cartTotal = $('#total');
        const $cartTax = $('#tax');
        const $cartSubTotal = $('#subtotal');

        var $pricesToAdd = $cartTable.find("td.price");
        var prices = $pricesToAdd.text().split('$');
        var newCost = 0;

        for (let i in prices) {
            if (prices[i]) {
                newCost += parseFloat(prices[i]);
            }
        }

        $cartSubTotal.text('$' + (newCost.toFixed(2)));

        $cartTax.text('$' + ((0.1) * parseFloat($cartSubTotal.text().substr(1))).toFixed(2));

        $cartTotal.text('$' + (newCost + parseFloat($cartTax.text().substr(1))).toFixed(2));

    }

    function addToCart(event) {
        const $thisItem = $(event.target);

        var $parentDiv = $thisItem.parent();

        if ($parentDiv.hasClass('card-action')) {
            console.log('adding to order');
            var $cardContent = $parentDiv.siblings('.card-content');
            var price = $cardContent.children('p').text();
            var item = $cardContent.children('span').text();
            var newCartItem = '<tr class="addedItem"><td class="item">' + item + '</td><td class="price right">' + price + '</td></tr>';
            $cartTable.append(newCartItem);
            return updateCart();
        } else {
            return;
        }
    }

    function submit(event) {
        // event.preventDefault();
        console.log($cartTable.text());
        if (($cartTable.find('td').length) && $('#address').val() && $('#phone').val() && $('#name').val()) {
          Materialize.toast('Thank you for your order!', 4000);
          return true;
        } else {
          Materialize.toast('Something\'s wrong!\nPlease validate your order information and try again', 4000);
          return false;
        }


    }

    $menu.click(addToCart);
    $submit.submit(submit);
});
