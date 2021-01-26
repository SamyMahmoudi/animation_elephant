const hero = document.querySelector(".hero");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(hero, 0.8, {height: "0%"}, {height: "70%", ease: Power2.easeInOut})
    .fromTo(hero, 1, {width: "100%"}, {width: "90%", ease: Power2.easeInOut})
    .fromTo(headline, 1.5, {opacity:0, top: "30%"}, {opacity:1, top:"50%", ease:Power2.easeInOut})