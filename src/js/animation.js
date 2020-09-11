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
    console.log(target_box);

    Object.keys(pages).forEach(function (key) {
        if (current_box.className.indexOf(key) !== -1) {
            current_box_index = pages[key];
        }
    });
    if (target_box !== current_box) {
        target_box.classList.remove("page_inactive");
        target_box.classList.add("page_active");
        current_box.classList.remove("page_active");
        current_box.classList.add("page_inactive");
    }
    /*     switch (true) {
            case (current_box_index < ith_title):
                current_box.setAttribute('style', "width:50%");
                target_box.setAttribute('style', "width:50%");
                current_box.classList.add("move_to_left");
                target_box.classList.remove("page_inactive");
                target_box.classList.add("page_active");
                current_box.classList.remove("page_active");
                current_box.classList.add("page_inactive");
                target_box.classList.add("move_to_left");
                            let t = setTimeout(() => {
                                current_box.classList.remove("move_to_left");
                                target_box.classList.remove("move_to_left");
                                current_box.classList.remove("page_active");
                                current_box.classList.add("page_inactive");
                                current_box.removeAttribute('style', "width:50%");
                                target_box.removeAttribute('style', "width:50%");
                                clearTimeout(t);
                            }, 1500);
        }; */




}