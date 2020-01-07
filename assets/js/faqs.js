$( document ).ready( function() {

	$( '.panel-heading a, .fa-chevron-down' ).on( 'click', function() {

		var chevron = $( this ).find( 'i' )[0];
		var $this = $( this );

		if ( $( chevron ).hasClass( 'down' ) || $( $this ).hasClass( 'down' ) ){
			$( chevron ).removeClass( 'down' );	
		} else {
			$( '.down' ).removeClass('down');
			$( chevron ).addClass( 'down' );	
		}
		
	})

});