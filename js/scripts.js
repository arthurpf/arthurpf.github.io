$(function(){



	/*toggle menu usuario*/
	(function(){

		var $hdMenuBtn = $('.hd-menu-btn'),
		$mainMenuContainer = $('.main-menu-container');
		$hdMenuBtn.bind('click touchstart keydown',function(e){

			if(e.keyCode == 13 || e.keyCode == 0 || e.type == "click"){

				$mainMenuContainer.toggleClass('is-opened');

				//skips redundant event
				e.preventDefault();
			}

		});
	})();

	/*portfolio*/
	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

});
