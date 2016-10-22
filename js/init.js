'use strict';
$(function() {

const $cartTotal=$('#total');
const $cartTax=$('#tax');
const $cartSubTotal=$('#subtotal');
const $cartTable=$('#cartTable');
const $menu=$('#menu');

//works for now, but we'd want to import these as an object of objects in a .js file and inject them dynamically//
function addToCart(event) {
  const $thisItem=$(event.target);
  console.log($thisItem);
  var $parentDiv=$thisItem.parent();
  if ($parentDiv.hasClass('card-action')) {
    console.log('adding to order');
    var $cardContent=$parentDiv.siblings('.card-content');
    var price=$cardContent.children('p').text();
    var item=$cardContent.children('span').text();
    console.log('price:',price,'item:',item);
    //$cartTable.
    //tr
    //td class="item"
    //td class="price right"
  }


}
console.log('adding click-listener to',$menu);
$menu.click(addToCart);
//update totals, etc. whenever cart is updated (add event listener to cart)
});
