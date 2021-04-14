
console.log( "Yes, very aware that the code is crappy. It's fine it is a protoype I built in 4 hours. Check it out on github to update." );

window.addEventListener( "load", () => {
    document.querySelector( "#search-input" ).addEventListener( "keyup", () => {
        let value = document.querySelector( "#search-input" ).value.toLowerCase();

        if ( value == "" ) {
            document.querySelectorAll( ".search .deck" ).forEach( elm => {
                elm.style.display = "block";
            });
        } else {
            document.querySelectorAll( ".search .deck" ).forEach( elm => {
                console.log( elm.dataset.name.toLowerCase() )
                if ( elm.dataset.name.toLowerCase().includes( value ) ) {
                    elm.style.display = "block";
                } else if ( elm.dataset[ "description" ].toLowerCase().includes( value ) ) {
                    elm.style.display = "block";
                } else {
                    elm.style.display = "none";
                }
            });
        }
    });
});

function ClearSearch() {
    document.querySelector( "#search-input" ).value = "";
    document.querySelectorAll( ".search .deck" ).forEach( elm => {
        elm.style.display = "block";
    });
    document.querySelector( "#search-input" ).focus();
}


function PreviewOverlay() {
    document.querySelector( ".card-control-overlay" ).classList.add( "preview" );
    setTimeout( () => {
        document.querySelector( ".card-control-overlay" ).classList.remove( "preview" );
    }, 500 );
}

function Share() {
    navigator
        .share({
            title: document.title,
            text: document.title,
            url: window.location.href
        })
        .then(() => console.log('Successful share! 🎉'))
        .catch(err => console.error(err));
}

function OpenGameBoard() {
    PreviewOverlay();
    document.querySelector( ".gameboard.container" ).classList.remove( "hide" );
}

function CloseGameBoard() {
    document.querySelector( ".gameboard.container" ).classList.add( "hide" );
}

function OpenPeak() {
    document.querySelector( ".peak.container" ).classList.remove( "hide" );
}

function ClosePeak() {
    document.querySelector( ".peak.container" ).classList.add( "hide" );
}

function nextCard() {
    document.querySelector( ".card-control-overlay" ).classList.remove( "preview" );
    let card   = document.querySelector( ".question-container" );
    card.classList.add( "flip-next" );
    setTimeout( () => {
        card.classList.remove( "flip-next" );

        let active = document.querySelector( ".question.question-active" );
        if ( active == null ) {
            document.querySelector( ".question" ).classList.add( "question-active" );
        } else {
            active.classList.remove( "question-active" );
            let number   = Number( active.dataset[ "card" ] ) + 1;
            let property = `.question[data-card="${ number }"]`;
            let element  = document.querySelector( property );
    
            if ( element == null ) {
                document.querySelector( ".question" ).classList.add( "question-active" );
            } else {
                element.classList.add( "question-active" );
            }
        }
    }, 300 );
}

function prevCard() {
    document.querySelector( ".card-control-overlay" ).classList.remove( "preview" );
    let card   = document.querySelector( ".question-container" );
    card.classList.add( "flip-prev" );
    setTimeout( () => {
        card.classList.remove( "flip-prev" );

        let active = document.querySelector( ".question.question-active" );
        if ( active == null ) {
            document.querySelector( ".question:last-child" ).classList.add( "question-active" );
        } else {
            active.classList.remove( "question-active" );
            let number   = Number( active.dataset[ "card" ] ) - 1;
            let property = `.question[data-card="${ number }"]`;
            let element  = document.querySelector( property );
    
            if ( element == null ) {
                document.querySelector( ".question:last-child" ).classList.add( "question-active" );
            } else {
                element.classList.add( "question-active" );
            }
        }
    }, 300 );
}