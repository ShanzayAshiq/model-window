'use strict';

const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModel= document.querySelector('.close-modal');
const btnsOpenModel= document.querySelectorAll('.show-modal');

// function to open modal
const openModal= function(){
    modal.classList.remove('hidden');
overlay.classList.remove('hidden');
};
// function to close modal
const closeModal= function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    };

for(let i=0; i<btnsOpenModel.length; i++)
btnsOpenModel[i].addEventListener('click',openModal);

// close modal by clicking close button
btnCloseModel.addEventListener('click', closeModal);

// close modal by clicking anywhere in overlay 
overlay.addEventListener('click',closeModal );

// close modal by clicking esc key
// here e as function parameter is the keyboard key press event
document.addEventListener('keydown', function(e){
if(e.key==='Escape' && !modal.classList.contains('hidden')){
    closeModal();
};
});
