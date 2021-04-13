const express = require( "express" );
const path    = require( "path" );
const app     = express();
const GAMES   = require( "./decks/decks.json" );

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.use( "/public", express.static( "public" ) );

app.get( "/deck/:id", function( req, res ) {

	GAMES.forEach( game => {
		if ( game.id == req.params.id ) {
			res.render( "game", game );
		}
	});

	if( !res.headersSent ) {
		res.render( "error", {
				"message": "Deck Not Found",
				"description": `We were unable to find the game
								deck (${ req.params.id }) you were looking for
								it may have changed locations.`
			});
	}
	
});

app.listen( 3000 );