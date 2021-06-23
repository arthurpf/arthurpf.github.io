$(function(){

	/*toggle user menu*/
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
	
	function getYearsFromDateToNow(date) {
	  var now = new Date();
	  var result = 0;
	  if(now.getMonth() === date.getMonth()) {
	  if(now.getDay() >= date.getDay()) {
	    result =  now.getFullYear() - date.getFullYear();
	  }
	} else if(now.getMonth() > date.getMonth()) {
	  result =  now.getFullYear() - date.getFullYear();
	} else {
	  result =  now.getFullYear() - date.getFullYear() - 1;
	}

		return result
	}
	
	
	/* age counter */
	var birthDate = new Date(1992, 0, 19);
	var developerStart = new Date(2012, 0, 1);;
	
	
	$('.js-age').text(getYearsFromDateToNow(birthDate));
	$('.js-work-years').text(getYearsFromDateToNow(developerStart))

	/*portfolio*/
	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

});
