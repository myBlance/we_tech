  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      loop: true, // Cho phép lặp vô hạn
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // Cho phép click vào dấu tròn để chuyển slide
      },
      autoplay: {
        delay: 3000, // Slide tự động chạy sau 3 giây
        disableOnInteraction: false, // Dừng khi tương tác
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


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const reviewTrack = document.querySelector(".review-track");
const reviews = document.querySelectorAll(".review-card");

let index = 1; // Bắt đầu ở thẻ thứ 2 (giữa)
const cardWidth = reviews[0].offsetWidth + 20; // Kích thước thẻ + khoảng cách

function updateActiveCard() {
    reviews.forEach((card, i) => {
        if (i === index) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });

    
    // Cập nhật vị trí của track
    reviewTrack.style.transform = `translateX(-${(index - 1) * cardWidth}px)`;
}



nextBtn.addEventListener("click", () => {
    if (index < reviews.length - 2) { // Luôn giữ 3 thẻ trên màn hình
        index++;
        updateActiveCard();
    }
});

prevBtn.addEventListener("click", () => {
    if (index > 1) {
        index--;
        updateActiveCard();
    }
});

// Set mặc định thẻ ở giữa to hơn
updateActiveCard();
