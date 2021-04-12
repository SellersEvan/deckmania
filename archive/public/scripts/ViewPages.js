class ViewPage {

    static Blank() {
		document.querySelectorAll( ".page" ).forEach( page => {
			page.classList.add( "hide" );
		});
	}

    static Home() {
        this.Blank();
        document.querySelector( ".page[page='home']" ).classList.remove( "hide" );
    }

    static GamePreview() {
        this.Blank();
        document.querySelector( ".page[page='preview']" ).classList.remove( "hide" );
    }

    static GamePeak() {
        this.Blank();
        document.querySelector( ".page[page='peak']" ).classList.remove( "hide" );
    }

    static GamePlay() {
        this.Blank();
        document.querySelector( ".page[page='play']" ).classList.remove( "hide" );
    }
}