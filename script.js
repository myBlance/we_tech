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
             // Ngăn chặn nhảy trang khi click vào link
            submenu.classList.toggle("active"); // Bật/tắt menu con
        });

        // Ẩn menu khi chuột rời khỏi menu cha
        menu.addEventListener("mouseleave", function () {
            submenu.classList.remove("active");
        });
    });
});

//=------------ Search--------------



// -----Banner------
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".swiper-slide");
    const slideWrapper = document.querySelector(".swiper-wrapper");
    let currentIndex = 0;
    let totalSlides = slides.length;

    const prevButton = document.querySelector(".fa-angle-left");
    const nextButton = document.querySelector(".fa-angle-right");

    function moveToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        slideWrapper.style.transition = "transform 0.6s ease-in-out"; // Hiệu ứng mượt hơn
        slideWrapper.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    prevButton.addEventListener("click", function () {
        moveToSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
        moveToSlide(currentIndex + 1);
    });

    setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 5000);
});

// ------------featured------------

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const slideWrapper = document.querySelector(".slider-wrapper");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let isDragging = false;
    let startX, currentTranslate, prevTranslate, animationID;

    function moveToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        slideWrapper.style.transition = "transform 0.6s ease-in-out";
        slideWrapper.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            moveToSlide(index);
        });
    });

    // Drag Slider bằng chuột
    slideWrapper.addEventListener("mousedown", (event) => {
        isDragging = true;
        startX = event.clientX;
        prevTranslate = currentIndex * -100;
        cancelAnimationFrame(animationID);
        slideWrapper.style.transition = "none";
    });

    slideWrapper.addEventListener("mousemove", (event) => {
        if (!isDragging) return;
        const currentX = event.clientX;
        const moveX = currentX - startX;
        currentTranslate = prevTranslate + (moveX / window.innerWidth) * 100;
        slideWrapper.style.transform = `translateX(${currentTranslate}%)`;
    });

    slideWrapper.addEventListener("mouseup", () => {
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -10) {
            moveToSlide(currentIndex + 1);
        } else if (movedBy > 10) {
            moveToSlide(currentIndex - 1);
        } else {
            moveToSlide(currentIndex);
        }
    });

    slideWrapper.addEventListener("mouseleave", () => {
        if (isDragging) {
            isDragging = false;
            moveToSlide(currentIndex);
        }
    });

});


// ------------Review----------------------

const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");
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
