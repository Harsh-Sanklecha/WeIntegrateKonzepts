
// Typewriter in recurssive loop

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// new CircleType(document.getElementById('scrollDown'));


/* Random quote generator */

// function quoteGenerator(){
//     var quote = [
//         'Growth never comes by chance, it is the outcome of efforts taken together.',
//         'Together we are smarter than what we use to be as individuals.',
//         'Dont wait for opportunity, CREATE IT.',
//         'If you want to go fast, go alone.If you want to go far, go together.',
//         'Teamwork simply stated, it is less me more we.'
//     ];
//     var Pick = Math.floor(Math.random() * (quote.length));
//     document.getElementById('quoteGen').innerHTML = quote[Pick];
// }
// document.addEventListener("load", quoteGenerator());


/* Animate on scroll */

AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 2,
    duration: 1000,
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false,
});


/* Slick Carousel */

$(document).ready(function () {
    $('.inside-quotes').slick({
        dots: true,
        arrows: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear',
        autoplay: true,
  });
});
