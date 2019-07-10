
function openItem( $item ) {
	$item.find( 'img[src*="-grey"]' ).stop().fadeTo( 1500, 0 );
	$item.addClass( 'selected' );
	// $item.stop().animate({
	// 	height: 300
	// });
	$('body').css( 'backgroundColor', $item.css( 'backgroundColor' ) );
}
 
$(function() {
	$('#carousel').carouFredSel({
		circular: true,
		infinite: false,
		width: '100%',
		height: 400,
		items: 3,
		auto: true,
		prev: '#prev',
		next: '#next',
		scroll: {
			items: 1,
			duration: 1000,
			easing: 'quadratic',
			onBefore: function( data ) {
				data.items.old.find( 'img[src*="-grey"]' ).stop().fadeTo( 500, 1 );
				data.items.old.removeClass( 'selected' );
				// data.items.old.stop().animate({
				// 	height: 313
				// });
				$('body').css( 'backgroundColor', 'white' );
			},
			onAfter: function( data ) {
				openItem( data.items.visible.eq( 10 ) );
			}
		},
		onCreate: function( data ) {
			openItem( data.items.eq( 10 ) );
		}
	});
});




// ********************** CARD CAROUSEL ***************************
// *************************************card1**********************
$(function() {
	var _visible = 4;
	var $pagers = $('#pager a');
	var _onBefore = function() {
		$(this).find('img').stop().fadeTo( 300, 1 );
		$pagers.removeClass( 'selected' );
	};
 
	$('#card-carousel').carouFredSel({
		items: _visible,
		width: '100%',
		auto: false,
		scroll: {
			duration: 750
		},
		prev: {
			button: '#card-prev',
			items: 1,
			onBefore: _onBefore
		},
		next: {
			button: '#card-next',
			items: 1,
			onBefore: _onBefore
		},
	});
 
	$pagers.click(function( e ) {
		e.preventDefault();
		
		var group = $(this).attr( 'href' ).slice( 1 );
		var slides = $('#card-carousel div.' + group);
		var deviation = Math.floor( ( _visible - slides.length ) / 2 );
		if ( deviation < 0 ) {
			deviation = 0;
		}
 
		$('#card-carousel').trigger( 'slideTo', [ $('#' + group), -deviation ] );
		$('#card-carousel div img').stop().fadeTo( 300, 0.3 );
		slides.find('img').stop().fadeTo( 300, 1 );
 
		$(this).addClass( 'selected' );
	});
});

// *******************************card2******************************
$(function() {
	var _visible = 4;
	var $pagers = $('#pager a');
	var _onBefore = function() {
		$(this).find('img').stop().fadeTo( 300, 1 );
		$pagers.removeClass( 'selected' );
	};
 
	$('#card-carousel2').carouFredSel({
		items: _visible,
		width: '100%',
		auto: false,
		scroll: {
			duration: 750
		},
		prev: {
			button: '#card-prev2',
			items: 1,
			onBefore: _onBefore
		},
		next: {
			button: '#card-next2',
			items: 1,
			onBefore: _onBefore
		},
	});
 
	$pagers.click(function( e ) {
		e.preventDefault();
		
		var group = $(this).attr( 'href' ).slice( 1 );
		var slides = $('#card-carousel2 div.' + group);
		var deviation = Math.floor( ( _visible - slides.length ) / 2 );
		if ( deviation < 0 ) {
			deviation = 0;
		}
 
		$('#card-carousel2').trigger( 'slideTo', [ $('#' + group), -deviation ] );
		$('#card-carousel2 div img').stop().fadeTo( 300, 0.3 );
		slides.find('img').stop().fadeTo( 300, 1 );
 
		$(this).addClass( 'selected' );
	});
});

// ****************************************card3******************************
$(function() {
	var _visible = 4;
	var $pagers = $('#pager a');
	var _onBefore = function() {
		$(this).find('img').stop().fadeTo( 300, 1 );
		$pagers.removeClass( 'selected' );
	};
 
	$('#card-carousel3').carouFredSel({
		items: _visible,
		width: '100%',
		auto: false,
		scroll: {
			duration: 750
		},
		prev: {
			button: '#card-prev3',
			items: 1,
			onBefore: _onBefore
		},
		next: {
			button: '#card-next3',
			items: 1,
			onBefore: _onBefore
		},
	});
 
	$pagers.click(function( e ) {
		e.preventDefault();
		
		var group = $(this).attr( 'href' ).slice( 1 );
		var slides = $('#card-carousel3 div.' + group);
		var deviation = Math.floor( ( _visible - slides.length ) / 2 );
		if ( deviation < 0 ) {
			deviation = 0;
		}
 
		$('#card-carousel3').trigger( 'slideTo', [ $('#' + group), -deviation ] );
		$('#card-carousel3 div img').stop().fadeTo( 300, 0.3 );
		slides.find('img').stop().fadeTo( 300, 1 );
 
		$(this).addClass( 'selected' );
	});
});

// ********************************************ideas slider***********************
$(function() {
 
	$('#idcarousel').carouFredSel({
		width: '100%',
		items: 5,
		scroll: 1,
		auto: {
			duration: 1250,
			timeoutDuration: 2500
		},
		// prev: '#idprev',
		// next: '#idnext',
		pagination: '#idpager'
	});
	
});