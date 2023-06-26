const corousel = [
    'img/industries_img.jpg',
    'img/industries-img/kid.jpg',
    'img/industries-img/young.jpg',
    'img/industries-img/evil.jpg',
    'img/industries-img/vaider.jpg',
];

const imgHolder = document.querySelector('.js-industries-img');

let imgIndex = 1;

setInterval(() => {
    imgHolder.src = corousel[imgIndex];
    imgHolder.animate(
        [
            { opacity: 0 },
            { opacity: 1 },
        ],
        {
            duration: 1200,
            iterations: 1,
        }
    );

    imgIndex = imgIndex + 1;
    if (imgIndex > corousel.length - 1) {
        imgIndex = 0;
    }
}, 2000);
