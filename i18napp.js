define( [ "i18n!nls/colors" ], function( colors ){
  
  function _init(){
    console.log( "colors.red", colors.red );
  }
  
  return {
    init: _init
  }
  
} );