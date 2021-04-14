window.addEventListener("scroll", (event) => {
    let height = "innerHeight" in window ? window.innerHeight : document.body.offsetHeight;
    let scoll = window.scrollY;
    let ribbon = document.querySelector(".navigation");

    if (scoll > height * 0.05) {
        ribbon.classList.add("isScrolled");
    } else {
        if (ribbon.classList.contains("isScrolled")) {
            ribbon.classList.remove("isScrolled");
        }
    }
});


window.addEventListener( "load", () => {
    document.querySelector( ".peak.container" ).addEventListener( "scroll", (event) => {
        let height = "innerHeight" in window ? window.innerHeight : document.body.offsetHeight;
        let scoll = window.scrollY;
        let ribbon = document.querySelector( ".peak.container.navigation" );
    
        if (scoll > height * 0.05) {
            ribbon.classList.add("isScrolled");
        } else {
            if (ribbon.classList.contains("isScrolled")) {
                ribbon.classList.remove("isScrolled");
            }
        }
    });
});
