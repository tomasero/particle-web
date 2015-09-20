$( document ).ready( function () { 

    $( '.menu-item' ).hover( 
        function () {
            var activeName = $( this ).attr( 'id' ).split( "-" )[2];
            $( "#menu-text" ).stop().text( activeName );
            setTimeout( function () {
                $( "#menu-text ").stop().fadeIn( 100 );           
            }, 100 );
        },
        function () {
            $( "#menu-text ").stop().fadeOut( 100 ); 
            setTimeout( function () {
                $( "#menu-text" ).stop().text( "" );
            }, 100 );
        }
    );

   $( '.menu-item' ).click( function () {
        $( this ).parent().addClass( 'menu-container-small' );      
        var panelName = $( this ).attr( 'id' ).split("-" )[2];
        $( '#home-subtitle' ).addClass( 'move-subtitle' );
        $( '.panel' ).fadeOut( 300 );
        setTimeout( function () {
            $( '#panel-' + panelName ).fadeIn( 300 );
        }, 300 );
    });

});
