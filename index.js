var sugarcoat = require( 'sugarcoat' );

var config = require( './documentation/config.js' );

sugarcoat( config ).then( function( data ) {
    
    console.log( require( 'util' ).inspect( data, { depth: 8, colors: true } ) );

}).catch( errors => {

    if ( errors.length ) {
        
        errors.forEach( ( error, index ) => {

            console.log(index, error);
        });
    }
});