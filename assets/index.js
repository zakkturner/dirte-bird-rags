let logo = document.getElementById('anLogo');
let leftBar = document.getElementById('leftBar');
let rightBar = document.getElementById('rightBar');
let circle = document.getElementById('circle');
let header = document.getElementById('shopify-section-header');
let homeMask = document.getElementById('homeMask');

gsap.registerPlugin(DrawSVGPlugin)

let tl = gsap.timeline()
function init(){
    
    tl.set(document.body, {overflow: "hidden"})
    tl.set(circle, {autoAlpha: 1})
    tl.from(logo, .8, { delay: .5, opacity: 0, autoAlpha: 0, y: 100, ease: "power3.inOut"}, 'logo');
    // tl.to(circle, { delay:.5, duration: .1, autoAlpha: 1})
    tl.fromTo(circle, 1, {drawSVG: 0 },{  drawSVG: '100%', autoAlpha: 1,   delay: .7, ease: "circ.inOut"},'logo');
    
    tl.to([logo, circle], .5, { opacity: 0, delay: 3.5, stagger: .2}, 'logo')
    tl.to( leftBar, 1, { delay: -.3, x: '-100%',  ease: "expo.inOut"}, 'bars')
    tl.to( rightBar, 1, { delay: -.3, x: '100%',  ease: "expo.inOut"} , 'bars')
    tl.to(homeMask, .1,{delay: 1, css:{display: "none"}}, 'bars')
    tl.fromTo(header, { delay: 2, y: -200, autoAlpha: 1, display: "none"}, { y: 0, display: "block", ease: "power3.inOut"}, 'bars')
    tl.set(document.body, { delay: 1, overflow: "auto"}, 'bars')
    

}

window.addEventListener("load", function(event){
    init();
})