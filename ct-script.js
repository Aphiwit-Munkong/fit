document.addEventListener("DOMContentLoaded", function() {
    // ดึง URL ปัจจุบัน
    let currentPath = window.location.pathname;
    let navLinks = document.querySelectorAll('.nav-item'); // ลิงก์ในแถบนำทาง
   

    // ตรวจสอบเส้นทาง URL ปัจจุบัน
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPath || currentPath === "/" || currentPath.includes("max")) {
            link.classList.add('active'); 
        }
    });

    // ส่วนของการจัดการรูปภาพ, ขนาด และรสชาติ
    let productImage = document.getElementById('product-image');
    let flavorButtons = document.querySelectorAll('.flavor-btn'); 
    let sizeButtons = document.querySelectorAll('.size-btn');
    let priceElement = document.querySelector('h5'); // ที่แสดงราคา
    let currentSize = ''; // ขนาดเริ่มต้น
    let currentFlavor = ''; // รสชาติเริ่มต้น
    let quantityInput = document.getElementById('quantity');
    let increaseBtn = document.getElementById('increase');
    let decreaseBtn = document.getElementById('decrease');

    // ฟังก์ชันสำหรับเปลี่ยนรูปภาพตามขนาดและรสชาติ
    function changeImage() {
        if (currentPage === 'ctine') {
            if (currentSize === '300g' ) {
                switch (currentFlavor) {
                    case 'sc':
                        productImage.src = 'ct/cola.webp';
                        break;
                    case 'fbr':
                        productImage.src = 'ct/Frosty Blue Raspberry.webp';
                        break;
                        case 'jw':
                        productImage.src = 'ct/Juicy Watermelon.webp';
                        break;
                        case 'ap':
                        productImage.src = 'ct/Absolute Pure.webp';
                        break;
                    default:
                        productImage.src = defaultju;  // รูปค่าเริ่มต้นสำหรับ 
                }
            } 
        }
}

    // ตั้งค่าปุ่มที่ถูกเลือก
    function setActiveButton(buttons, clickedButton) {
        buttons.forEach(function(button) {
            button.classList.remove('active'); // ลบคลาส active จากปุ่มอื่น
        });
        clickedButton.classList.add('active'); // เพิ่มคลาส active ให้กับปุ่มที่ถูกคลิก
    }

    // ตรวจสอบปุ่มรสชาติ
    flavorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            currentFlavor = this.id;  // ตั้งค่ารสชาติที่เลือก
            if (currentPage === 'ctine') {
                if (currentSize === '300g') {
                    changeImage();  // เปลี่ยนภาพตามรสชาติและขนาด
                }
            } 
            setActiveButton(flavorButtons, this);  // ตั้งปุ่ม active สำหรับรสชาติที่เลือก
        });
    });
    


    // ฟังก์ชันสำหรับ slider คลิกที่รูปด้านซ้าย
    window.slider = function(image) {
        productImage.src = image; 
        // รีเฟรชข้อมูลเสมอ ไม่ว่าจะเลือกขนาดเดิมหรือไม่
        if (currentPath.includes("creatine.html")) {
            if (image === 'ct/cola.webp') {
                priceElement.textContent = '฿375';  
                currentSize = '300g';  // 
                setActiveButton(sizeButtons, document.getElementById('threes-lb'));  // 
                changeImage(currentFlavor);
            } 
    }
};

    
    // ฟังก์ชันเพิ่มจำนวน
    increaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (!isNaN(currentValue)) {
            quantityInput.value = currentValue + 1;
        }
    });

    // ฟังก์ชันลดจำนวน
    decreaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1 && !isNaN(currentValue)) {
            quantityInput.value = currentValue - 1;
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        if (currentPage === 'ctine') {
            currentSize = '300g';
            currentFlavor = 'sc';
            setActiveButton(sizeButtons, document.getElementById('threes-lb'));
            setActiveButton(flavorButtons, document.getElementById('sc'));
            priceElement.textContent = '฿375';
            changeImage();  // เรียกฟังก์ชันเปลี่ยนรูปตามค่าที่ตั้ง
        } 
    });
    


document.querySelector('.btn2').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.getElementById('product-details').scrollIntoView({
        behavior: 'smooth'
    });
});
function openTab(tabName) {
    let tabLinks = document.getElementsByClassName("tab-link");
    let tabContents = document.getElementsByClassName("tab-content");

    // Hide all tab contents
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove active class from all tab links
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the current tab and set it as active
    document.getElementById(tabName).style.display = "block";
    Event.currentTarget.classList.add("active");
}
navLinks.forEach(function(link) {
    // ถ้าลิงก์ตรงกับหน้าปัจจุบัน
    if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active'); // เพิ่มคลาส 'active' ให้กับลิงก์นั้น
    }
});
})
