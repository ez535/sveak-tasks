'use strict';

const btn = document.querySelector('.js-btn-color');
const colors = ['red', 'blue', 'green', 'yellow', 'default-color'];
const items = document.querySelectorAll('.js-change-color');
let rand = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
};

if(btn) {
    btn.addEventListener('click', () => {
        items.forEach((item) => {
            colors.forEach((color) => {
                if(item.classList.contains(color)) {
                    item.classList.remove(color);
                }
            })
    
            item.classList.add(rand(colors));
        })
    })
}
