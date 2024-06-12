let goTopBtn = document.getElementById("goTopBtn");


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.classList.add("active");
    } else {
        goTopBtn.classList.remove("active");
    }
}


goTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});
