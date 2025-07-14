// اسلایدشو
let slideIndex = 1;
let autoSlideInterval;

// تابع برای نمایش اسلایدها و به‌روزرسانی نقطه‌ها
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dotsContainer = document.getElementById("dotsContainer");
    
    if (!dotsContainer) { // اگر کانتینر نقاط وجود ندارد، فقط اسلاید را نمایش بده
        if (slides.length > 0) slides[slideIndex-1].style.display = "block";
        return;
    }

    let dots = dotsContainer.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (dots.length > 0) { // اگر نقاطی برای مدیریت وجود دارند
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active-dot";
    } else { // اگر نقاطی نیست فقط اسلاید رو نمایش بده
        slides[slideIndex-1].style.display = "block";
    }
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
    if (!dotsContainer) return; // اگر کانتینر نقاط وجود ندارد، خارج شو

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
    const leafContainer = document.querySelector('.leaf-container');
    if (!leafContainer) return;

    const numberOfLeaves = 20; // تعداد برگ‌ها
    const leafShapes = [
        'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // الماس
        'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // شش ضلعی
        'circle(50% at 50% 50%)', // دایره
        'polygon(0% 15%, 15% 0%, 100% 0%, 85% 15%, 100% 50%, 85% 85%, 100% 100%, 15% 100%, 0% 85%, 15% 50%)', // ستاره
        'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' // ستاره پنج‌پر
    ];
    const leafColors = [
        '#d2691e', // نارنجی پاییزی
        '#b8860b', // زرد مایل به قهوه‌ای
        '#a0522d', // قهوه‌ای
        '#8b0000', // قرمز تیره
        '#f4a460',  // نارنجی روشن‌تر
        '#cc6600' // نارنجی تیره
    ];

    for (let i = 0; i < numberOfLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';

        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 10 + 6}s`;
        leaf.style.animationDelay = `${Math.random() * -15}s`;
        leaf.style.transform = `scale(${Math.random() * 0.7 + 0.3})`;

        leaf.style.clipPath = leafShapes[Math.floor(Math.random() * leafShapes.length)];
        leaf.style.backgroundColor = leafColors[Math.floor(Math.random() * leafColors.length)];

        leafContainer.appendChild(leaf);
    }
}

// تابع برای به‌روزرسانی ساعت تهران
function updateTehranClock() {
    const now = new Date();
    // تنظیم منطقه زمانی به تهران (Asia/Tehran)
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // فرمت 24 ساعته
        timeZone: 'Asia/Tehran'
    };
    const tehranTime = now.toLocaleTimeString('en-US', options); // از 'en-US' برای اطمینان از فرمت HH:MM:SS استفاده می‌کنیم

    const clockElement = document.getElementById('tehran-clock');
    if (clockElement) {
        clockElement.textContent = `تهران: ${tehranTime}`;
    }
}


// اجرای اولیه هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', (event) => {
    createDots();
    showSlides(slideIndex);
    resetAutoSlide();
    createFallingLeaves();
    
    // اجرای اولیه ساعت و سپس به‌روزرسانی هر ثانیه
    updateTehranClock();
    setInterval(updateTehranClock, 1000); // هر 1000 میلی‌ثانیه (1 ثانیه) به‌روزرسانی شود
});