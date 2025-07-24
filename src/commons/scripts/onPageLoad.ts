const root = document.getElementById("root");
if(root) {
    document.addEventListener("astro:page-load", () => {
        const path = window.location.pathname;
        if(path.length <= 4){
            const top = localStorage.getItem("rootScroll");
            if(!top) return;
            root.scrollTo({top: Number(top), behavior: "smooth"});
        }
    })
    root.addEventListener("scrollend", () => {
        const path = window.location.pathname;
        const top = root.scrollTop;
        if (path.length <= 4) {
            //IS HOME
            localStorage.setItem("rootScroll", top.toString());
        }
    })
}