function PreviewOverlay() {
    document.querySelector( ".card-control-overlay" ).classList.add( "preview" );
    setTimeout( () => {
        document.querySelector( ".card-control-overlay" ).classList.remove( "preview" );
    }, 500 );
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