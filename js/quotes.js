document.addEventListener('DOMContentLoaded', function () {
    var quotes = [
        "Your sky-high English starts right here✨",
    ];

    var options = {
        strings: quotes,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 2100,
        startDelay: 0,
        loop: false,
        showCursor: false,
    };
    var typed = new Typed('#quote-container', options);

   
});