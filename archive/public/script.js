
class gameEngine {

	static closeAllPages() {
		document.querySelectorAll( ".page" ).forEach( elm => {
			elm.classList.add( "hide" )
		});
	}

	static openMainMenu() {
		this.closeAllPages();
		document.querySelector( ".page[page='home']" ).classList.remove( "hide" );
	}

	static openGamePreview( gameId ) {
		this.closeAllPages();
		document.querySelector( ".page[page='preview']" ).classList.remove( "hide" );
		GAME_LIST.forEach( game => {
			if ( game.id == gameId ) {
				document.querySelector( "#previewPageTitleRibbon" ).innerHTML = game.name;
				document.querySelector( "#previewPageTitle" ).innerHTML = game.name;
				document.querySelector( "#previewPageDescription" ).innerHTML = game.description;
				if ( game.is18Plus ) {
					document.querySelector( "#previewPage18Plus" ).style.display = "block";
				} else {
					document.querySelector( "#previewPage18Plus" ).style.display = "none";
				}
			}
		});
	}

	static openGamePreview( gameId ) {
		this.closeAllPages();
		document.querySelector( ".page[page='preview']" ).classList.remove( "hide" );
		GAME_LIST.forEach( game => {
			if ( game.id == gameId ) {
				document.querySelector( "#previewPageTitleRibbon" ).innerHTML = game.name;
				document.querySelector( "#previewPageTitle" ).innerHTML = game.name;
				document.querySelector( "#previewPageDescription" ).innerHTML = game.description;
				if ( game.is18Plus ) {
					document.querySelector( "#previewPage18Plus" ).style.display = "block";
				} else {
					document.querySelector( "#previewPage18Plus" ).style.display = "none";
				}
			}
		});
	}
	
}

// Load Home Page
window.addEventListener( "load", (event) => {
	GAME_CATEGORIES.forEach( gameCategory => {
		let title = document.createElement( "h3" );
		let text  = document.createTextNode( gameCategory );
		title.appendChild( text );
		document.querySelector( "#homePageDeckLists" ).appendChild( title );
		let container = document.createElement( "div" );
		container.classList.add( "deck-selection" );
		container.dataset[ "category" ] = gameCategory;
		document.querySelector( "#homePageDeckLists" ).appendChild( container );
	});

	GAME_LIST.forEach( game => {
		let div = `
		<a class="deck">
			<div class="banner">
				${ game.is18Plus ? "<div class=badge>18+</div>" : "" }
				${ game.banner ? `<img src="${ game.banner }" alt="${ game.name }" srcset="">` : "" }
				<h3>${ game.name }</h3>
			</div>
		</a>
		`
		game.categories.forEach( gameCategory => {
			document.querySelector( `.deck-selection[data-category="${ gameCategory }"]` ).innerHTML += div;
		});
	});

	GAME_CATEGORIES.forEach( gameCategory => {
		document.querySelector( `.deck-selection[data-category="${ gameCategory }"]` ).innerHTML += `<a class="deck"><p style="width: 1px;"></p></a>`;
	});

	gameEngine.openGamePreview( "example_game_1" );
});
