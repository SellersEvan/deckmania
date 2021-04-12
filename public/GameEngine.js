class GameEngine {


    constructor() {
        this.favorites   = localStorage.getItem( "favorite" );
        this.positions   = localStorage.getItem( "positions" );
        this.currentGame = null;
    }

    addFavorite( gameId ) {
        // implement later
    }

    isFavorite( gameId ) {
        // implement later
    }

    getFavorites( gameId ) {
        // implement later
    }

    getGame( gameId ) {
        return GAME_LIST.find( game => {
                return game.id === gameId;
            });
    }

    nextQuestion( gameId ) {

    }

    lastQuestion( gameId ) {

    }

}