let homepage_images = ["images/homepage/Harold.jpg", "images/homepage/stethoscope.jpg", "images/homepage/hospital_h.jpg"]
let current_homepage_images = 0;


function change_image(direction){

    (direction === 'left') ? current_homepage_images--:current_homepage_images++;
    if (current_homepage_images < 0) current_homepage_images = homepage_images.length-1;
    else if (current_homepage_images === homepage_images.length) current_homepage_images = 0;

    document.getElementById('homepage_image_show').src = homepage_images[current_homepage_images];
}