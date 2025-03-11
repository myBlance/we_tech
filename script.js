document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const submenus = document.querySelectorAll(".has-submenu");

    submenus.forEach((menu) => {
        const submenu = menu.querySelector(".submenu");

        menu.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn nhảy trang khi click vào link
            submenu.classList.toggle("active"); // Bật/tắt menu con
        });

        // Ẩn menu khi chuột rời khỏi menu cha
        menu.addEventListener("mouseleave", function () {
            submenu.classList.remove("active");
        });
    });
});

const sliderWrapper = document.querySelector('.slider-wrapper');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = dots.length; 

function moveToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentIndex = index;
}

