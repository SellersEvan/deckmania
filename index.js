const express = require( "express" );
const path    = require( "path" );
const app     = express();

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.use( "/public", express.static( "public" ) );

app.get( "/deck/:game", function( req, res ) {
	res.render( "game", { name: "game" } );
});

app.listen( 3000 );