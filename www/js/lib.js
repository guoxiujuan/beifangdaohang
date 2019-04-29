

$(document).ready(function($) {
	$(window).scroll(function(){
		var _myHd = $(window).scrollTop();
		if( _myHd<50 ){
			$('#hd').removeClass('hdbg');
		}else{
			$('#hd').addClass('hdbg');
		}
	});


});