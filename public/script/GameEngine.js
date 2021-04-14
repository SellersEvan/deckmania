

function OpenGameBoard() {
    document.querySelector( ".gameboard.container" ).style.display = "flex";
}

function CloseGameBoard() {
    document.querySelector( ".gameboard.container" ).style.display = "none";
}


function nextCard() {
    let card   = document.querySelector( ".question-container" );
    card.classList.add( "flip" );
    setTimeout( () => {
        card.classList.remove( "flip" );

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
    let card   = document.querySelector( ".question-container" );
    card.classList.add( "flip" );
    setTimeout( () => {
        card.classList.remove( "flip" );

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