'use strict';

const btnProgress = document.querySelector('.btn__link');
const progress = document.querySelector('.progress-bar');
const newValue = document.querySelector('.new-value');
let width = 1;

if(btnProgress) {
    btnProgress.addEventListener('click', () => {
        let id = setInterval(frame, 10);
    
        function frame() {
            if((width >= newValue.value) && (newValue.value != '') || (width >= 100) ) {
                width = 0;
                clearInterval(id);
            } else {
                console.log(1);
                width++;
                progress.style.width = width + "%";
            }
        }
    });
}