/* 
Declare variables:
masthead (HTML container storing 
the current slide - slide-show part)

slides (array of elements storing 
all slides - slide-show part)

buttons (collected list of 
3 buttons in array - main content hide/reveal part)

contents (array of 3 elements - contents 
in main content hide/reveal part)

container (HTML element that will get a content
from array contents)

i (variable to be used as index-pointer 
inside loops for slide-show part)

k (variable to be used as index-pointer
inside loops for hide/reveal content part) */

(function () {
    var masthead, slides, buttons, contents, container, i, k

masthead = document.querySelector(".mh-image");

slides = [
    '<figure>' +
    '<img src="./img/1.jpg" alt="Look into the future">' +
    '<figcaption>Look into the future!</figcaption>' +
    '</figure>',

    '<figure>' +
    '<img src="./img/2.jpg" alt="Yellow Flower">' +
    '<figcaption>Yellow Flower</figcaption>' +
    '</figure>',

    '<figure>' +
    '<img src="./img/3.png" alt="Nature is breathtaking.">' +
    '<figcaption>Nature is breathtaking.</figcaption>' +
    '</figure>',

    '<figure>' +
    '<img src="./img/4.jpg" alt="Green energy">' +
    '<figcaption>Green energy = Green planet</figcaption>' +
    '</figure>'
];

function fadeOut () {
    masthead.style.opacity = 0;
}

i = 0;

function runSlides () {
    masthead.style.opacity = 1;
    if(i > 3) {
        i=0;
    }
    masthead.innerHTML = slides[i];
    i += 1;
    window.setTimeout(fadeOut, 5000);
    
}

runSlides();
window.setInterval(runSlides, 6000)
    



/*
-------------------------------------
START CODING REVEAL-HIDE MAIN-CONTENT
-------------------------------------
*/

var buttons = document.querySelectorAll("main span");

var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/tesla.jpg" alt="hydro-plant">' +
            '<figcaption>Electric cars have zero emissions and are more efficient than cars that run on fossil fuel.</figcaption>' +
        '</figure>',

         '<figure class="clearfix">' +
            '<img src="./img/solar.jpg" alt="hydro-plant">' +
            '<figcaption>Solar energy is an alternative for fossil fuels as it is non-polluting, clean, reliable and renewable source of energy. It does not pollute the air by releasing harmful gases like carbon dioxide, nitrogen oxide or sulphur oxide. So, the risk of damage to the environment is reduced.</figcaption>' +
        '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/windmill.jpg" alt="hydro-plant">' +
            '<figcaption>An average onshor wind turbine can produce more than 6 million kWh of electricity in a year.</figcaption>' +
        '</figure>'
];

var container = document.querySelector(".container");
container.innerHTML = contents[0];

function handleClick(ev) {
    ev.preventDefault();
    var target = ev.target;

    for (z = 0; z < buttons.length; z++) {
        if (buttons[z].hasAttribute("id")) {
            buttons[z].removeAttribute("id");
        }
    }

    if (ev.target.innerHTML === "Electricity") {
        container.innerHTML = contents[0];
    } else if (ev.target.innerHTML === "Solar") {
        container.innerHTML = contents[1];
    } else {
        container.innerHTML = contents[2];
    }

    ev.target.setAttribute("id", "active");
}

for (z = 0; z < buttons.length; z++) {
        buttons[z].addEventListener("click", handleClick);
}

}());