'use strict';
$(function() {

const $cartTotal=$('#total');
const $cartTax=$('#tax');
const $cartSubTotal=$('#subtotal');
const $cartTable=$('#cartTable');
const $menu=$('#menu');

//ideally we'd want to import our menu cards as an object of objects in a .js file and inject them dynamically//

function updateCart() {
  console.log('updating cart');

}

function addToCart(event) {
  const $thisItem=$(event.target);
  console.log('you clicked:',$thisItem);
  var $parentDiv=$thisItem.parent();
  if ($parentDiv.hasClass('card-action')) {
    console.log('adding to order');
    var $cardContent=$parentDiv.siblings('.card-content');
    var price=$cardContent.children('p').text();
    var item=$cardContent.children('span').text();
    var newCartItem='<tr class="addedItem"><td class="item">'+item+'</td><td class="price right">'+price+'</td></tr>';
    $cartTable.append(newCartItem);
    return updateCart();
  }
  return;
}

console.log('adding click-listener to',$menu);
$menu.click(addToCart);
});
