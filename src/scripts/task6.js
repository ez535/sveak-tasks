'use strict';

const start = document.querySelector('.btn__start');
const change = document.querySelector('.btn__change');
const colors = ['red', 'blue', 'green', 'yellow'];
const blockIcon = document.querySelector('.block-icon');

let rand = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
};

if(start && change) {
    start.addEventListener('click', () => {
        blockIcon.classList.add('animate');
    })
    
    change.addEventListener('click', () => {
        colors.forEach((color) => {
            if(blockIcon.classList.contains(color)) {
                blockIcon.classList.remove(color);
            }
        })
    
        blockIcon.classList.add(rand(colors));
    })
}
