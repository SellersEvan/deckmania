



function nextCard() {
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
}

function prevCard() {
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
}