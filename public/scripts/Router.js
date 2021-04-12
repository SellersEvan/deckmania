const router = new SPARouter( { historyMode : true } );


// Home Page
router.get( "/", function( req, router ) {
    ViewPage.Home();
}).setName( "home" );


// Preview Page of Game // ${req.param.game}
router.get( "/{game}/preview", function( req, router ) {
    ViewPage.GamePreview();
}).setName( "preview-game" );


// Peak at Game Questions
router.get( "/{game}/peak", function( req, router ) {
    ViewPage.GamePeak();
}).setName( "peak-game" );


// Play the Game
router.get( "/{game}/play", function( req, router ) {
    ViewPage.GamePlay();
}).setName( "play-game" );


router.notFoundHandler( function() {
    console.log( "oops! the page you are looking for is probably eaten by a snake" );
});


window.addEventListener( "load", () => {
    router.init();
});
