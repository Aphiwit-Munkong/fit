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
        if (currentPage === 'max') {
            if (currentSize === '5lb' ) {
                switch (currentFlavor) {
                    case 'gourmet-dark-chocolate':
                        productImage.src = 'รูป/gourmet-dark-chocolate.png';
                        break;
                    case 'rich-chocolate':
                        productImage.src = 'รูป/rich-chocolate.webp';
                        break;
                    case 'orange-yuzu':
                        productImage.src = 'รูป/orange-yuzu.webp';
                        break;
                    case 'matcha-green-tea':
                        productImage.src = 'รูป/matcha-green-tea.webp';
                        break;
                    case 'cookies-cream':
                        productImage.src = 'รูป/cookies-cream.webp';
                        break;
                    case 'chocolate-hazelnut':
                        productImage.src = 'รูป/chocolate-hazelnut.webp';
                        break;
                    case 'vanilla-ice-cream':
                        productImage.src = 'รูป/vanilla-ice-cream.webp';
                        break;
                    case 'milk-tea':
                        productImage.src = 'รูป/milk-tea.webp';
                        break;
                    case 'strawberry':
                        productImage.src = 'รูป/strawberry.webp';
                        break;
                    case 'chocolate-cookies':
                        productImage.src = 'รูป/chocolate-cookies.webp';
                        break;
                    case 'nom-yen':
                        productImage.src = 'รูป/Nom-yen.webp';
                        break;
                    case 'cafe-mocha':
                        productImage.src = 'รูป/cafe-mocha.webp';
                        break;
                    case 'unflavored':
                        productImage.src = 'รูป/unflavored.webp';
                        break;
                    default:
                        productImage.src = defaultmax;
                }
            } else if (currentSize === '10lb') {
                // ใช้รูปเดียวสำหรับทุก flavor ของขนาด 10lb ใน MAX
                productImage.src = 'รูป/Baki 10LB.png';
            }
        } else if (currentPage === 'iso') {
            if (currentSize === '5lb' ) {
                switch (currentFlavor) {
                    case 'Hardcore-Dark-C':
                        productImage.src = 'iso/Hardcore-Dark-C.webp';
                        break;
                    case 'Deluxe-Rich-C':
                        productImage.src = 'iso/Deluxe-Rich-C.webp';
                        break;
                    case 'Bliss-Vanilla-ice-c':
                        productImage.src = 'iso/Bliss-Vanilla-ice-c.webp';
                        break;
                    case 'Banana-Smoothie-D':
                        productImage.src = 'iso/Banana-Smoothie-D.webp';
                        break;
                    case 'Fantasy-Strawberry-m':
                        productImage.src = 'iso/Fantasy-Strawberry-m.webp';
                        break;
                    case 'On':
                        productImage.src = 'iso/On.webp';
                        break;
                    case 'Iced-Cafe-M':
                        productImage.src = 'iso/Iced-Cafe-M.webp';
                        break;
                    default:
                        productImage.src = defaultiso;
                }
            } else if (currentSize === '8lb') {
                // ใช้รูปเดียวสำหรับทุก flavor ของขนาด 8lb ใน ISO
                productImage.src = 'iso/8 lb.webp';
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
            } else if (currentPage === 'max' || currentPage === 'iso') {
                if (currentSize === '5lb' || currentSize === '10lb') {
                    changeImage();  // เปลี่ยนภาพสำหรับขนาด 5lb และ 10lb
                }
            }

            setActiveButton(flavorButtons, this);  // ตั้งปุ่ม active สำหรับรสชาติที่เลือก
        });
    });
    


    // ฟังก์ชันสำหรับ slider คลิกที่รูปด้านซ้าย
    window.slider = function(image) {
        // เปลี่ยนรูปภาพเป็นรูปจาก slider
        productImage.src = image; 
        // รีเฟรชข้อมูลเสมอ ไม่ว่าจะเลือกขนาดเดิมหรือไม่
        if (currentPath.includes("index.html")) {
            if (image === 'รูป/Baki 10LB.png') {
                priceElement.textContent = '฿3099';  // ตั้งราคา 10 lb
                currentSize = '10lb';  // ตั้งขนาดเป็น 10 lb
                setActiveButton(sizeButtons, document.getElementById('ten-lb'));  // ปุ่ม 10 lb เป็น active
            } else if (image === 'รูป/Bakimax.png') {
                priceElement.textContent = '฿1699';  // ตั้งราคา 5 lb
                currentSize = '5lb';  // ตั้งขนาดเป็น 5 lb
                setActiveButton(sizeButtons, document.getElementById('five-lb'));  // ปุ่ม 5 lb เป็น active
                changeImage(currentFlavor);  // รีเฟรชรูปตามรสชาติที่เลือกไว้
            }
        }
        else if (currentPath.includes("iso.html")) {
            if (image === 'iso/Hardcore-Dark-C.webp') {
                priceElement.textContent = '฿2699';  // ตั้งราคา iso 5 lb
                currentSize = '5lb';  // ตั้งขนาดเป็น 5 lb
                setActiveButton(sizeButtons, document.getElementById('fives-lb'));  // ปุ่ม iso 5 lb เป็น active
                changeImage(currentFlavor);
            } else if (image === 'iso/8 lb.webp') {
                priceElement.textContent = '฿3799';  // ตั้งราคา iso 8 lb
                currentSize = '8lb';  // ตั้งขนาดเป็น 8 lb
                setActiveButton(sizeButtons, document.getElementById('eight-lb'));  // ปุ่ม 8 lb เป็น active
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
        if (currentPage === 'iso') {
            // ตั้งค่าเริ่มต้นเป็น 5lb และรสชาติ Hardcore-Dark-C สำหรับหน้า ISO
            currentSize = '5lb';
            currentFlavor = 'Hardcore-Dark-C';
            setActiveButton(sizeButtons, document.getElementById('fives-lb'));  // ทำให้ปุ่ม 5lb เป็น active
            setActiveButton(flavorButtons, document.getElementById('Hardcore-Dark-C'));  // ทำให้ปุ่มรสชาติ Hardcore-Dark-C เป็น active
            priceElement.textContent = '฿2699';  // ตั้งค่าราคาเริ่มต้น
            changeImage();  // เรียกฟังก์ชันเปลี่ยนรูปตามค่าที่ตั้ง
        } else if (currentPage === 'max') {
            // ตั้งค่าที่ต่างกันสำหรับหน้า MAX
            currentSize = '5lb';
            currentFlavor = 'gourmet-dark-chocolate';
            setActiveButton(sizeButtons, document.getElementById('five-lb'));
            setActiveButton(flavorButtons, document.getElementById('gourmet-dark-chocolate'));
            priceElement.textContent = '฿1699';
            changeImage();  // เรียกฟังก์ชันเปลี่ยนรูปตามค่าที่ตั้ง
        } 
    });
    


document.querySelector('.btn2').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.getElementById('product-details').scrollIntoView({
        behavior: 'smooth'
    });
});
function openTab(sectionId,) {
    // ซ่อนเนื้อหาของทุก section
    const sections = document.querySelectorAll('section'); // หาทุก section ในหน้า
    sections.forEach(function(section) {
        section.style.display = 'none'; // ซ่อนทุก section
    });

    // แสดง section ที่เลือก
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block'; // แสดง section ที่เลือก
    }

    // ลบคลาส active ออกจากปุ่มทั้งหมด
    const buttons = document.querySelectorAll('.btn2');
    buttons.forEach(function(button) {
        button.classList.remove('active'); // ลบคลาส active
    });

    // เพิ่มคลาส active ให้กับปุ่มที่ถูกคลิก
    event.currentTarget.classList.add('active');
}




navLinks.forEach(function(link) {
    // ถ้าลิงก์ตรงกับหน้าปัจจุบัน
    if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active'); // เพิ่มคลาส 'active' ให้กับลิงก์นั้น
    }
});
})



