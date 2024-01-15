
const plusimg = document.getElementById('plus-img');
const imagemMenos = document.getElementById('menos-imagem');

const plusimg2 = document.getElementById('plus-img2');
const imagemMenos2 = document.getElementById('menos-imagem2')

const plusimg3 = document.getElementById('plus-img3');
const imagemMenos3 = document.getElementById('menos-imagem2')

function showhide() {
    const hiddentext1 = document.querySelector("#hidden-text1");
    hiddentext1.classList.toggle('hidden');
    plusimg.classList.add('hidden');
    imagemMenos.classList.remove('hidden');
}
function hideshow() {
    const hiddentext1 = document.querySelector("#hidden-text1");
   hiddentext1.classList.add('hidden')
    plusimg.classList.remove('hidden');
    imagemMenos.classList.add('hidden');
}
//////////////////////////////////////////////

function showhide2() {
    const hiddentext2 = document.querySelector("#hidden-text2");
    hiddentext2.classList.toggle('hidden');
    plusimg2.classList.add('hidden');
    imagemMenos2.classList.remove('hidden');
}
function hideshow2() {
    const hiddentext2 = document.querySelector("#hidden-text2");
   hiddentext2.classList.add('hidden')
    plusimg2.classList.remove('hidden');
    imagemMenos2.classList.add('hidden');
}
/////////////////////////////////////////////////////////

function showhide3() {
    const hiddentext3 = document.querySelector("#hidden-text3");
    hiddentext3.classList.toggle('hidden');
    plusimg3.classList.add('hidden');
    imagemMenos3.classList.remove('hidden');
}
function hideshow3() {
    const hiddentext3 = document.querySelector("#hidden-text3");
   hiddentext3.classList.add('hidden')
    plusimg3.classList.remove('hidden');
    imagemMenos3.classList.add('hidden');
}