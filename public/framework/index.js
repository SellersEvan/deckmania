window.addEventListener("scroll", (event) => {
    console.log("hi")
    let height = "innerHeight" in window ? window.innerHeight : document.body.offsetHeight;
    let scoll = window.scrollY;
    let ribbon = document.querySelectorAll(".navigation");

    if (scoll > height * 0.05) {
        ribbon.forEach( elm => {
            elm.classList.add("isScrolled");
        });
    } else {
        ribbon.forEach( elm => {
            elm.classList.remove("isScrolled");
        });
    }
});