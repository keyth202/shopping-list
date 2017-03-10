$(document).ready(function(){
  formActions();
});

function formActions() {
 //Add Item Action Code 
   $('#js-shopping-list-form').submit(function(e){
      console.log("hello");
      e.preventDefault();
      var shopItem = $('#shopping-list-entry').val();
      console.log(shopItem);

      var itemBox = '<li>'+'<span class="shopping-item">'+ shopItem + '</span>'
      + '<div class="shopping-item-controls">'
            + '<button class="shopping-item-toggle">'
            + '<span class="button-label">check</span>'
            + '</button>'
            + '<button class="shopping-item-delete">'
            + '<span class="button-label">delete</span>'
            + '</button>'
          + '</div>'
          + '</li>';
      console.log(itemBox);    

    $('ul').append(itemBox);
  });
//Toggle Action Code
  $('ul').on('click','.shopping-item-toggle',function(e){
    e.preventDefault();
    $(this).parent().parent().children('span').toggleClass('shopping-item__checked');
  });
// Delete Action Code
  $('ul').on('click','.shopping-item-delete',function(e){
    e.preventDefault();
    $(this).closest('li').remove();
    console.log("Clicked on event");
  });
};


//handle if #shopping-list-entry is clicked. 
//Take the input from that and put it in a variable 
//Add it inside the .shopping-list 
// include .shopping-item
//all of this below needs to be included 
/*       <li>
        <span class="shopping-item">apples</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      <li>
*/
/* function addItem(){
	$('#shopping-list-form').submit(function(e){
		console.log("hello");
		e.preventDefault();
		var shopItem = $('#shopping-list-entry').val();
		console.log(shopItem);

		var itemBox = html({
			'<li>'
			+'<span class"shopping-item>'+ shopItem + '</span>'
			+ '<div class="shopping-item-controls">'
          	+ '<button class="shopping-item-toggle">'
            + '<span class="button-label">check</span>'
          	+ '</button>'
          	+ '<button class="shopping-item-delete">'
            + '<span class="button-label">delete</span>'
          	+ '</button>'
        	+ '</div>'
      		+ '</li>'

		});
  })

		$('.shopping-item li').insertAfter('itemBox');
}

//Part 2 
// .shopping-item-toggle needs to add or remove the .shopping-item__checked

function shoppinglistChange(){

}
*/