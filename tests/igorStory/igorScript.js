let body = document.querySelector('body');
let button2 = document.querySelector('.goStory2');
let button3 = document.querySelector('.goStory3');
let button4 = document.querySelector('.goStory4');
let button5 = document.querySelector('.goStory5');
let button6 = document.querySelector('.goStory6');
let button7 = document.querySelector('.goStory7');
let button8 = document.querySelector('.goStory8');
let button9 = document.querySelector('.goStory9');
let button10 = document.querySelector('.goStory10');
let button11 = document.querySelector('.goStory11');
let button12 = document.querySelector('.goStory12');
let button13 = document.querySelector('.goStory13');
let button14 = document.querySelector('.goStory14');
let button15 = document.querySelector('.goStory15');
let button16 = document.querySelector('.goStory16');
let button17 = document.querySelector('.goStory17');
let button18 = document.querySelector('.goStory18');
let button19 = document.querySelector('.goStory19');
let button20 = document.querySelector('.goStory20');
let button21 = document.querySelector('.goStory21');
let button22 = document.querySelector('.goStory22');
let button23 = document.querySelector('.goStory23');
let button24 = document.querySelector('.goStory24');
let button25 = document.querySelector('.goStory25');
let button26 = document.querySelector('.goStory26');
let button27 = document.querySelector('.goStory27');
let button28 = document.querySelector('.goStory28');
let button29 = document.querySelector('.goStory29');
let button30 = document.querySelector('.goStory30');
let button31 = document.querySelector('.goStory31');
let button32 = document.querySelector('.goStory32');
let button33 = document.querySelector('.goStory33');
let button34 = document.querySelector('.goStory34');
let button35 = document.querySelector('.goStory35');
let button36 = document.querySelector('.goStory36');
let button37 = document.querySelector('.goStory37');
let button38 = document.querySelector('.goStory38');
let button39 = document.querySelector('.goStory39');
let button40 = document.querySelector('.goStory40');
let button41 = document.querySelector('.goStory41');

let story1 = document.querySelector('#story1');
let story2 = document.querySelector('#story2');
let story3 = document.querySelector('#story3');
let story4 = document.querySelector('#story4');
let story5 = document.querySelector('#story5');
let story6 = document.querySelector('#story6');
let story7 = document.querySelector('#story7');
let story8 = document.querySelector('#story8');
let story9 = document.querySelector('#story9');
let story10 = document.querySelector('#story10');
let story11 = document.querySelector('#story11');
let story12 = document.querySelector('#story12');
let story13 = document.querySelector('#story13');
let story14 = document.querySelector('#story14');
let story15 = document.querySelector('#story15');
let story16 = document.querySelector('#story16');
let story17 = document.querySelector('#story17');
let story18 = document.querySelector('#story18');
let story19 = document.querySelector('#story19');
let story20 = document.querySelector('#story20');
let story21 = document.querySelector('#story21');
let story22 = document.querySelector('#story22');
let story23 = document.querySelector('#story23');
let story24 = document.querySelector('#story24');
let story25 = document.querySelector('#story25');
let story26 = document.querySelector('#story26');
let story27 = document.querySelector('#story27');
let story28 = document.querySelector('#story28');
let story29 = document.querySelector('#story29');
let story30 = document.querySelector('#story30');
let story31 = document.querySelector('#story31');
let story32 = document.querySelector('#story32');
let story33 = document.querySelector('#story33');
let story34 = document.querySelector('#story34');
let story35 = document.querySelector('#story35');
let story36 = document.querySelector('#story36');
let story37 = document.querySelector('#story37');
let story38 = document.querySelector('#story38');
let story39 = document.querySelector('#story39');
let story40 = document.querySelector('#story40');
let story41 = document.querySelector('#story41');

button2.onclick = function() {
    story1.style.display = "none";
    story2.style.display = "block";
}

button3.onclick = function() {
    story2.style.display = "none";
    story3.style.display = "block";
}

button4.onclick = function() {
    story3.style.display = "none";
    story4.style.display = "block";
}

button5.onclick = function() {
    story4.style.display = "none";
    story5.style.display = "block";
}

button6.onclick = function() {
    story5.style.display = "none";
    story6.style.display = "block";
}

button7.onclick = function() {
    story6.style.display = "none";
    story7.style.display = "block";
}

button8.onclick = function() {
    story7.style.display = "none";
    story8.style.display = "block";
}

button9.onclick = function() {
    story8.style.display = "none";
    story9.style.display = "block";
}

button10.onclick = function() {
    story9.style.display = "none";
    story10.style.display = "block";
}

button11.onclick = function() {
    story10.style.display = "none";
    story11.style.display = "block";
}

button12.onclick = function() {
    story11.style.display = "none";
    story12.style.display = "block";
}

button13.onclick = function() {
    story12.style.display = "none";
    story13.style.display = "block";
}

// button.onclick = function() {
//     body.removeChild(div);
//     newStory = document.createElement("div");
//     newStory.innerHTML = story1;
//     body.appendChild(newStory);
// }

// let storyContinious = document.querySelectorAll('.storyContinious');
// let goStory = document.querySelectorAll('.goStory');
// let numberStory = 0;

// for(let i = 0; i < goStory.length; i++) {
//     goStory[i].onclick = function() {
//         storyContinious[numberStory-1].style.display = "none";
//         storyContinious[numberStory].style.display = "block";
//         numberStory++;
//         window.location.hash=`story{$numberStory}`;
//     };
// };