class Render {
    static Home() {
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
            <a class="deck" href="/deck/${ game.id }">
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
    }

    static GamePreview( gameId ) {
        document.querySelector( "#previewPageTitle" ).innerHTML = "Deck Not Found";
        document.querySelector( "#previewPageDescription" ).innerHTML = "Unable to try find the Deck you are looking for.";
        document.querySelector( "#previewPage18Plus" ).style.display = "none";
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

        document.querySelector( "#previewPagePlay" ).addEventListener( "click", () => {
            ViewPage.GamePlay();
        });
    }
}