const router = new SPARouter( { historyMode : true } );


// Home Page
router.get( "/", function( req, router ) {
    ViewPage.Home();
}).setName( "home" );

// Home Page
router.get( "/search", function( req, router ) {
    ViewPage.Search();
}).setName( "search" );

// Preview Page of Game // ${req.param.game}
router.get( "/deck/{game}", function( req, router ) {
    ViewPage.GamePreview();
    Render.GamePreview( req.param.game );
}).setName( "preview-game" );


// Peak at Game Questions
router.get( "/deck/{game}/peak", function( req, router ) {
    ViewPage.GamePeak();
}).setName( "peak-game" );


router.notFoundHandler( function() {
    console.log( "oops! the page you are looking for is probably eaten by a snake" );
});


window.addEventListener( "load", () => {
    router.init();
    Render.Home();
    // Render.Search();
});
