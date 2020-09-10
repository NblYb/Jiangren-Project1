let current_box = document.getElementsByClassName('main_container')[0];



const add_animation = (ith_title) => {




    current_box.classList.add(`move_${ith_title}`);

    let t = setTimeout(() => {
        for (let i = 0; i < 4; i++) {
            current_box.classList.remove(`move_${i}`); clearTimeout(t);
            if (ith_title === 0) {
                current_box.setAttribute('style', 'left: 0');
            }
            else if (ith_title === 1) {
                current_box.setAttribute('style', 'left:-100%');
            }
            else if (ith_title === 2) {
                current_box.setAttribute('style', 'left:-200%');
            }
            else if (ith_title === 3) {
                current_box.setAttribute('style', 'left:-300%');
            }

        }
    }, 1500);

}

