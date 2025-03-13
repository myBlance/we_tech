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



document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".review-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const cardWidth = document.querySelector(".review-card").offsetWidth + 20; // Tính cả margin
    let index = 0;
    const totalCards = document.querySelectorAll(".review-card").length;
    const visibleCards = 3;

    // Khi nhấn nút Next
    nextBtn.addEventListener("click", () => {
        if (index < totalCards - visibleCards) {
            index++;
        } else {
            index = 0; // Quay lại card đầu tiên
        }
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    });

    // Khi nhấn nút Prev
    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = totalCards - visibleCards; // Quay lại card cuối cùng
        }
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    });
});
