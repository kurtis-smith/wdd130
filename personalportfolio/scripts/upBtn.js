window.addEventListener("scroll", function() {

    if(document.documentElement.scrollTop == 0) {
        document.querySelector(".upBtn").classList.remove("btn--active");
    } else {
        document.querySelector(".upBtn").classList.add("btn--active");
    }

    
}) 

document.querySelector(".upBtn").addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
})