let current_box_index = -1;

const pages = {
    "home_page": 0,
    "about_me": 1,
    "resume": 2,
    "contact": 3
};
const pages_reverse = {
    0: "home_page",
    1: "about_me",
    2: "resume",
    3: "contact"
};



const add_animation = (ith_title) => {


    let current_box = document.getElementsByClassName('page_active')[0];
    let target_box = document.getElementsByClassName(pages_reverse[ith_title])[0];
    let sliding_window = document.getElementsByClassName('sliding_window')[0];
    console.log(target_box);

    Object.keys(pages).forEach(function (key) {
        if (current_box.className.indexOf(key) !== -1) {
            current_box_index = pages[key];
        }
    });
    console.log(current_box_index);
    // if (target_box !== current_box) {
    //     target_box.classList.remove("page_inactive");
    //     target_box.classList.add("page_active");
    //     current_box.classList.remove("page_active");
    //     current_box.classList.add("page_inactive");
    // }
    if (current_box_index < ith_title) {
        console.log("left");
        sliding_window.classList.add("move_to_left");


        let timer_1 = setTimeout(() => {
            current_box.classList.remove("page_active");
            target_box.classList.add("page_active");
            sliding_window.setAttribute("style", "left:-100%")
            sliding_window.classList.remove("move_to_left");
            clearTimeout(timer_1);
        }, 1500);
    }

    else if(current_box_index > ith_title){
        console.log(current_box_index);
        console.log(ith_title);
        console.log("right");
        sliding_window.classList.add("move_to_right");


        let timer_2 = setTimeout(() => {
            current_box.classList.remove("page_active");
            target_box.classList.add("page_active");
            sliding_window.removeAttribute("style", "left:-100%");
            sliding_window.classList.remove("move_to_right");
            clearTimeout(timer_2);
        }, 1500);
    }

    // switch (true) {
    //     case (current_box_index < ith_title):
    //         console.log("left");
    //         sliding_window.classList.add("move_to_left");


    //         let timer_1 = setTimeout(() => {
    //             current_box.classList.remove("page_active");
    //             target_box.classList.add("page_active");
    //             sliding_window.setAttribute("style", "left:-100%")
    //             sliding_window.classList.remove("move_to_left");
    //             clearTimeout(timer_1);
    //         }, 1500);

    //     case (current_box_index > ith_title):
    //         console.log(current_box_index);
    //         console.log(ith_title);
    //         console.log("right");
    //         sliding_window.classList.add("move_to_right");


    //         let timer_2 = setTimeout(() => {
    //             current_box.classList.remove("page_active");
    //             target_box.classList.add("page_active");
    //             sliding_window.setAttribute("style", "left:100%")
    //             sliding_window.classList.remove("move_to_right");
    //             clearTimeout(timer_2);
    //         }, 1500);

    // };




}