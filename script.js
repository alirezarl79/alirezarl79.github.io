// اسلایدشو
let slideIndex = 1;
let autoSlideInterval;

// تابع برای نمایش اسلایدها و به‌روزرسانی نقطه‌ها
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dotsContainer = document.getElementById("dotsContainer");
    let dots = dotsContainer.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
}

// کنترل‌های بعدی/قبلی
function plusSlides(n) {
    resetAutoSlide(); // اسلاید خودکار را ریست کن
    showSlides(slideIndex += n);
}

// کنترل‌های نقطه
function currentSlide(n) {
    resetAutoSlide(); // اسلاید خودکار را ریست کن
    showSlides(slideIndex = n);
}

// ایجاد نقاط به صورت داینامیک بر اساس تعداد اسلایدها
function createDots() {
    let slides = document.getElementsByClassName("mySlides");
    let dotsContainer = document.getElementById("dotsContainer");
    dotsContainer.innerHTML = ''; // پاک کردن نقاط قبلی
    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('span');
        dot.className = 'dot';
        dot.setAttribute('onclick', `currentSlide(${i + 1})`);
        dotsContainer.appendChild(dot);
    }
}

// اسلاید خودکار
function autoSlide() {
    plusSlides(1); // برو به اسلاید بعدی
}

// ریست کردن اسلاید خودکار (هنگام کلیک کاربر)
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // اینتروال قبلی را پاک کن
    autoSlideInterval = setInterval(autoSlide, 5000); // اینتروال جدید (هر 5 ثانیه)
}

// تابع برای ایجاد برگ‌های پاییزی
function createFallingLeaves() {
    const leafContainer = document.querySelector('.leaf-container'); // از کانتینر برگ‌ها استفاده کن
    const numberOfLeaves = 12; // تعداد برگ‌ها
    const leafShapes = [
        'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // الماس
        'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // شش ضلعی
        'circle(50% at 50% 50%)', // دایره
        'polygon(0% 15%, 15% 0%, 100% 0%, 85% 15%, 100% 50%, 85% 85%, 100% 100%, 15% 100%, 0% 85%, 15% 50%)' // ستاره
    ];
    const leafColors = [
        '#d2691e', // نارنجی پاییزی
        '#b8860b', // زرد مایل به قهوه‌ای
        '#a0522d', // قهوه‌ای
        '#8b0000', // قرمز تیره
        '#f4a460'  // نارنجی روشن‌تر
    ];

    for (let i = 0; i < numberOfLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';

        leaf.style.left = `${Math.random() * 100}vw`; // موقعیت شروع تصادفی افقی
        leaf.style.animationDuration = `${Math.random() * 8 + 5}s`; // 5 تا 13 ثانیه برای سقوط
        leaf.style.animationDelay = `${Math.random() * -6}s`; // تاخیر منفی برای شروع از ابتدا (همه با هم شروع نشوند)
        leaf.style.transform = `scale(${Math.random() * 0.7 + 0.3})`; // اندازه تصادفی

        // انتخاب تصادفی شکل و رنگ
        leaf.style.clipPath = leafShapes[Math.floor(Math.random() * leafShapes.length)];
        leaf.style.backgroundColor = leafColors[Math.floor(Math.random() * leafColors.length)];

        leafContainer.appendChild(leaf);
    }
}


// اجرای اولیه هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', (event) => {
    createDots(); // ایجاد نقاط پس از بارگذاری DOM
    showSlides(slideIndex); // نمایش اولین اسلاید
    resetAutoSlide(); // شروع اسلاید خودکار
    createFallingLeaves(); // شروع ریزش برگ‌ها
});