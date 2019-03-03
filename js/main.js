
//Access Key

$.getJSON( 'https://api.unsplash.com/collections/214/photos?client_id=1b31b08eb4152203d656a37ba1b2742c6be3fe2c1718d127c18036adb9b17ad3', function( data ){
    console.log( data );
    
    $.each( data, function( index, value ){
        console.log( value );
        
        var colour = value.color;
        console.log( colour );
        var location = value.user.location;
        console.log( location );
        
        $( '.colour-box' ).css( "background-color", colour );
    } );
} );//////