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
const sliding_window_postion = {
    0: "sliding_window_first_position",
    1: "sliding_window_second_position",
    2: "sliding_window_third_position",
    3: "sliding_window_fourth_position"
};

const add_animation = (ith_title) => {

    let current_box = document.getElementsByClassName('page_active')[0];
    let target_box = document.getElementsByClassName(pages_reverse[ith_title])[0];
    let sliding_window = document.getElementsByClassName('sliding_window')[0];

    Object.keys(pages).forEach(function (key) {
        if (current_box.className.indexOf(key) !== -1) {
            current_box_index = pages[key];
        }
    });

    if (current_box_index - ith_title === -3) {
        console.log("left");
        sliding_window.classList.add("move_to_left_three_sections");


        let timer_1 = setTimeout(() => {
            current_box.classList.remove("page_active");
            target_box.classList.add("page_active");
            sliding_window.classList.add(sliding_window_postion[ith_title]);
            sliding_window.classList.remove(sliding_window_postion[current_box_index]);
            sliding_window.classList.remove("move_to_left_three_sections");
            clearTimeout(timer_1);
        }, 1500);
    }

    else if(current_box_index - ith_title === -2){
        console.log(current_box_index);
        console.log(ith_title);
        console.log("right");
        sliding_window.classList.add("move_to_left_two_sections");


        let timer_2 = setTimeout(() => {
            current_box.classList.remove("page_active");
            target_box.classList.add("page_active");
            sliding_window.classList.add(sliding_window_postion[ith_title]);
            sliding_window.classList.remove(sliding_window_postion[current_box_index]);
            sliding_window.classList.remove("move_to_left_two_sections");
            clearTimeout(timer_2);
        }, 1500);
    }

    else if(current_box_index - ith_title === -1){
        console.log(current_box_index);
        console.log(ith_title);
        console.log("right");
        sliding_window.classList.add("move_to_left_one_section");


        let timer_3 = setTimeout(() => {
            current_box.classList.remove("page_active");
            target_box.classList.add("page_active");
            sliding_window.classList.add(sliding_window_postion[ith_title]);
            sliding_window.classList.remove(sliding_window_postion[current_box_index]);
            sliding_window.classList.remove("move_to_left_one_section");
            clearTimeout(timer_3);
        }, 1500);
    }

    else if(current_box_index - ith_title === 1){
        console.log(current_box_index);
        console.log(ith_title);
        console.log("right");
        sliding_window.classList.add("move_to_right_one_section");


        let timer_4 = setTimeout(() => {
            current_box.classList.remove("page_active");
            target_box.classList.add("page_active");
            sliding_window.classList.add(sliding_window_postion[ith_title]);
            sliding_window.classList.remove(sliding_window_postion[current_box_index]);
            sliding_window.classList.remove("move_to_right_one_section");
            clearTimeout(timer_4);
        }, 1500);
    }

    else if(current_box_index - ith_title === 2){
        console.log(current_box_index);
        console.log(ith_title);
        console.log("right");
        sliding_window.classList.add("move_to_right_two_sections");


        let timer_5 = setTimeout(() => {
            current_box.classList.remove("page_active");
            target_box.classList.add("page_active");
            sliding_window.classList.add(sliding_window_postion[ith_title]);
            sliding_window.classList.remove(sliding_window_postion[current_box_index]);
            sliding_window.classList.remove("move_to_right_two_sections");
            clearTimeout(timer_5);
        }, 1500);
    }

    else if(current_box_index - ith_title === 3){
        console.log(current_box_index);
        console.log(ith_title);
        console.log("right");
        sliding_window.classList.add("move_to_right_three_sections");


        let timer_6 = setTimeout(() => {
            current_box.classList.remove("page_active");
            target_box.classList.add("page_active");
            sliding_window.classList.add(sliding_window_postion[ith_title]);
            sliding_window.classList.remove(sliding_window_postion[current_box_index]);
            sliding_window.classList.remove("move_to_right_three_sections");
            clearTimeout(timer_6);
        }, 1500);
    }
}