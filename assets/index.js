let logo = document.getElementById('anLogo');
let leftBar = document.getElementById('leftBar');
let rightBar = document.getElementById('rightBar');
let circle = document.getElementById('circle');
let header = document.getElementById('shopify-section-header');
let homeMask = document.getElementById('homeMask');
let text = document.getElementById('introTxt');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');
let line = document.getElementById('line')
let title = document.getElementById('title');
let desc = document.getElementById('desc');
let newRel = document.getElementById('newRel');
let firstProd = document.querySelector('#releases div:nth-child(1)');
let secProd = document.querySelector('#releases div:nth-child(2)');
let thirdProd = document.querySelector('#releases div:nth-child(3)');



console.log('hello')
console.log(firstProd)
console.log(newRel)
gsap.registerPlugin(DrawSVGPlugin, SplitText, ScrollTrigger)

var aniText = new SplitText(text, {type: "words,chars"});
var chars = aniText.chars;
var words = aniText.words;

var descText = new SplitText(desc, {type: "words"});
var descWords = descText.words

// **** intro animation ****

let tl = gsap.timeline();
function init(){
    tl.set(document.body, {overflow: "hidden"})
    tl.set(circle, {autoAlpha: 1})
    tl.set(text, {autoAlpha: 1})
    tl.from(logo, .8, { delay: .5, opacity: 0, autoAlpha: 0, y: 100, ease: "power3.inOut"}, 'logo');
    tl.fromTo(circle, 1, {drawSVG: 0 },{  drawSVG: '100%', autoAlpha: 1,   delay: 1, ease: "circ.inOut"},'logo');
    
    tl.to( circle, .5, { opacity: 0 }, 'text')
    tl.from(chars, .5, {x:-200, y:100, opacity: 0, ease: "expo.inOut", stagger: .1}, 'text')

    tl.to(logo, .8, {x: -200, scale: .5,  ease: "expo.inOut"}, 'text')
    tl.to([logo, words], {y: 200, opacity: 0, delay: 2, stagger: .1, ease: "power3.inOut"}, "text")
    tl.to( leftBar, 1, {  x: '-100%',  ease: "expo.inOut"}, 'bars')
    tl.to( rightBar, 1, {  x: '100%',  ease: "expo.inOut"} , 'bars')
    tl.to(homeMask, .1,{delay: 1, css:{display: "none"}}, 'bars')
    tl.fromTo(header, { delay: 2, y: -200, autoAlpha: 1, display: "none"}, { y: 0, duration: 1.5, display: "block", ease: "power3.inOut"}, 'bars')
    tl.set(document.body, { delay: 1, overflow: "auto"}, 'bars')
    

}

window.addEventListener("load", function(event){
    init();
})


// **** scroll triggers ****
let tl2 = gsap.timeline({scrollTrigger: {
    trigger: imgOne,
    start: "top center"
}});
tl2.fromTo(line, 1, {drawSVG: 0 },  {drawSVG: '100%', ease: 'power3.inOut'}, 'lineAndText');
tl2.from(title, 1, { x: 200, opacity: 0, ease: "power3.inOut", }, 'lineAndText');
tl2.from(descWords, 1, {opacity: 0, ease: 'power3.inOut', y: 50, stagger: .1}, 'imgs')
tl2.from(imgOne, {
    x: -400,
    opacity: 0,
    duration: 2,
    
    ease: "expo.inOut"
}, 'imgs');

tl2.from(imgTwo, {
    x: 100,
    opacity: 0,
    duration: 2,
    delay: .2,
    ease: "expo.inOut"
}, 'imgs');
tl2.from(imgThree, {
    y: 400,
    opacity: 0,
    duration: 2,
    delay: .3,
    ease: "expo.inOut"
}, 'imgs')


// **** new releases st ****
let tl3 = gsap.timeline({scrollTrigger: {
    trigger: newRel,
    start: "top center"
}}).from(firstProd, 1, {opacity: 0 , x: -200, delay: .1, ease: 'power3.inOut'}, 'newRel')
    .from(secProd, 1, {opacity: 0 , x: 200, delay: .5, ease: 'power3.inOut'}, 'newRel' )
    .from(thirdProd, 1, {opacity: 0 , x: -200, delay: .9, ease: 'power3.inOut'}, 'newRel' );

