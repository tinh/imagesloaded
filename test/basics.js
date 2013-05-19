test( 'basics', function() {

  'use strict';

  var elem = document.querySelector('#basics');
  var isCallbacked, isDone, isAlways, isAllProgressed;
  // stop();
  var imgLoader = new ImagesLoaded( elem, function( obj ) {
    ok( true, 'callback function triggered' );
    equal( imgLoader, obj, 'callback argument and instance match' );
    isCallbacked = true;
    checkReady();
  });
  imgLoader.on( 'done', function() {
    ok( true, 'done event triggered' );
    isDone = true;
    checkReady();
  });
  imgLoader.on( 'always', function() {
    ok( true, 'always event triggered' );
    isAlways = true;
    checkReady();
  });

  var progressCount = 0;
  imgLoader.on( 'progress', function( loader, image ) {
    ok( image.isLoaded, 'image is loaded');
    progressCount++;
    if ( progressCount >= 4 ) {
      equal( progressCount, 4, 'progressed 4 times' );
      isAllProgressed = true;
      checkReady();
    }
  });

  stop();

  function checkReady() {
    if ( isCallbacked && isDone && isAlways && isAllProgressed ) {
      start();
    }
  }


});
