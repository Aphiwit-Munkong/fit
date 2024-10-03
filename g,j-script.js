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
        if (currentPage === 'mass') {
            if (currentSize === '6lb' ) {
                switch (currentFlavor) {
                    case 'King-Kong-Chocolate':
                        productImage.src = 'mass/6 lb-c.webp';
                        break;
                    case 'Kaiju-Vanilla':
                        productImage.src = 'mass/KAIJU VANILLA.webp';
                        break;
                    // เพิ่มรสชาติอื่น ๆ ของ MASS ที่นี่
                    default:
                        productImage.src = defaultmass;  // รูปค่าเริ่มต้นสำหรับ MASS
                }
            } else if (currentSize === '20lb') {
                switch (currentFlavor) {
                    case 'King-Kong-Chocolate':
                        productImage.src = 'mass/20 lb.webp';
                        break;
                    case 'Kaiju-Vanilla':
                        productImage.src = 'mass/KAIJU VANILLA 20.webp';
                        break;
                    // เพิ่มรสชาติอื่น ๆ ของ MASS ที่นี่
                    default:
                        productImage.src = 'mass/20 lb.webp';  // รูปค่าเริ่มต้นสำหรับขนาด 20lb ใน MASS
                }
            }
        } else if (currentPage === 'intra') {
            if (currentSize === '30 servings' ) {
                switch (currentFlavor) {
                    case 'Blue':
                        productImage.src = 'ju/Blue.webp';
                        break;
                    case 'Water':
                        productImage.src = 'ju/reviv.webp';
                        break;
                    case 'Cola':
                        productImage.src = 'ju/charge.webp';
                        break;
                    default:
                        productImage.src = defaultju;
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
            if (currentPage === 'mass') {
                if (currentSize === '6lb' || currentSize === '20lb') {
                    changeImage();  // เปลี่ยนภาพตามรสชาติและขนาด
                }
            } else if (currentPage === 'intra') {
                if (currentSize === '30 servings' ) {
                    changeImage();  // 
                }
            }

            setActiveButton(flavorButtons, this);  // ตั้งปุ่ม active สำหรับรสชาติที่เลือก
        });
    });
    


    // ฟังก์ชันสำหรับ slider คลิกที่รูปด้านซ้าย
    window.slider = function(image) {
        productImage.src = image; 
        // รีเฟรชข้อมูลเสมอ ไม่ว่าจะเลือกขนาดเดิมหรือไม่
        if (currentPath.includes("gainer.html")) {
            if (image === 'mass/6 lb-c.webp') {
                priceElement.textContent = '฿1400';  
                currentSize = '6lb';  // 
                setActiveButton(sizeButtons, document.getElementById('six-lb'));  // ปุ่ม 6 lb เป็น active
                changeImage(currentFlavor);
            } else if (image === 'mass/20 lb.webp') {
                priceElement.textContent = '฿3372';  // ตั้งราคา 20 lb
                currentSize = '20lb';  // อัปเดตขนาดเป็น 20lb
                setActiveButton(sizeButtons, document.getElementById('twenty-lb'));  // ตั้งปุ่ม active
                changeImage(currentFlavor);
        }         
    }
    else if (currentPath.includes("intra.html")) {
        if (image === 'ju/Blue.webp') {
            priceElement.textContent = '฿1500';  // 
            currentSize = '30 servings';  // 
            setActiveButton(sizeButtons, document.getElementById('three-lb'));  
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
        if (currentPage === 'mass') {
            // ตั้งค่าที่ต่างกันสำหรับหน้า mass
            currentSize = '6lb';
            currentFlavor = 'King-Kong-Chocolate';
            setActiveButton(sizeButtons, document.getElementById('six-lb'));
            setActiveButton(flavorButtons, document.getElementById('King-Kong-Chocolate'));
            priceElement.textContent = '฿1400';
            changeImage();  // เรียกฟังก์ชันเปลี่ยนรูปตามค่าที่ตั้ง
        } else if (currentPage === 'intra') {
            currentSize = '30 servings';
            currentFlavor = 'Blue';
            setActiveButton(sizeButtons, document.getElementById('three-lb'));
            setActiveButton(flavorButtons, document.getElementById('Blue'));
            priceElement.textContent = '฿1500';
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
