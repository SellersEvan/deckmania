const express = require( "express" );
const path    = require( "path" );
const app     = express();
const GAMES   = require( "./decks/decks.json" );
const shuffle = require( "shuffle-array" );

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.use( "/public", express.static( "public" ) );


app.get( "/deck/:id", function( req, res ) {

	GAMES.forEach( game => {
		if ( game.id == req.params.id ) {
			let questions = require( `./decks/questions/${ game.questions }` );
			let basic     = game;
			basic.size    = questions.length;
			shuffle( questions );
			res.render( "game", {
					"basic": basic,
					"questions": questions
				});
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