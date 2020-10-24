btn = document.getElementById("btn-atas");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function atas() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}