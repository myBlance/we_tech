document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttons button");
    const serviceList = document.getElementById("service-list");

    const services = {
        t1: [
            { img: "/assets/images/a1.jpg", title: "Công ty TNHH 1 thành viên", desc: "Đăng ký thành lập công ty TNHH 1 thành viên.", price: "300.000đ" },
            { img: "/assets/images/a2.jpg", title: "Dịch vụ hỗ trợ TNHH 1TV", desc: "Hỗ trợ thủ tục pháp lý công ty TNHH.", price: "500.000đ" },
            { img: "/assets/images/a1.jpg", title: "Công ty TNHH 1 thành viên", desc: "Đăng ký thành lập công ty TNHH 1 thành viên.", price: "300.000đ" },
            { img: "/assets/images/a1.jpg", title: "Công ty TNHH 1 thành viên", desc: "Đăng ký thành lập công ty TNHH 1 thành viên.", price: "300.000đ" },
            { img: "/assets/images/a1.jpg", title: "Công ty TNHH 1 thành viên", desc: "Đăng ký thành lập công ty TNHH 1 thành viên.", price: "300.000đ" },
        ],
        t2: [
            { img: "/assets/images/b1.jpg", title: "Công ty TNHH 2 thành viên", desc: "Thành lập công ty TNHH có từ 2 thành viên.", price: "400.000đ" },
            { img: "/assets/images/b2.jpg", title: "Dịch vụ hỗ trợ TNHH 2TV", desc: "Dịch vụ đăng ký và tư vấn TNHH 2 thành viên.", price: "600.000đ" },
        ],
        t3: [
            { img: "/assets/images/c1.jpg", title: "Công ty Cổ phần", desc: "Đăng ký thành lập công ty Cổ phần.", price: "500.000đ" },
            { img: "/assets/images/c2.jpg", title: "Dịch vụ hỗ trợ Cổ phần", desc: "Hỗ trợ pháp lý cho công ty Cổ phần.", price: "700.000đ" },
        ],
    };

    function renderServices(type) {
        serviceList.innerHTML = services[type]
            .map(service => `
                <div class="card">
                    <img src="${service.img}" alt="Service Image" class="card-img">
                    <div class="card-body">
                        <h3 class="card-title">${service.title}</h3>
                        <p class="card-desc">${service.desc}</p>
                        <div class="card-info">
                            <div class="card-actions">
                                <div class="card-price">${service.price}</div>
                                <a href="#" class="card-detail">Chi tiết</a>
                            </div>
                        </div> 
                    </div>
                </div>
            `)
            .join("");
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            renderServices(this.dataset.type);
        });
    });

    renderServices("t1"); // Hiển thị mặc định danh sách đầu tiên
});
