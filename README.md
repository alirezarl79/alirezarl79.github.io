<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>اقامتگاه عمو حسین - رستم آباد</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700&display=swap" rel="stylesheet">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity.min.css" rel="stylesheet">

    <style>
        body {
            font-family: 'Vazirmatn', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.8;
            text-align: right;
        }
        .header {
            background-color: #2c3e50;
            color: #fff;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.8em;
            font-weight: 700;
        }
        .container {
            max-width: 900px;
            margin: 30px auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.15);
            text-align: center;
        }
        p {
            margin-bottom: 15px;
            font-size: 1.1em;
        }
        h2 {
            color: #2c3e50;
            text-align: center;
            margin-top: 40px;
            margin-bottom: 25px;
            font-size: 2em;
        }

        /* استایل‌های اسلایدشو */
        .slideshow-container {
            position: relative;
            max-width: 700px; /* عرض حداکثری اسلایدشو */
            margin: auto;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            margin-bottom: 40px;
        }
        .mySlides {
            display: none; /* به صورت پیش‌فرض مخفی */
            width: 100%;
            height: 400px; /* ارتفاع ثابت برای تصاویر اسلایدشو */
            object-fit: cover; /* پر کردن کادر بدون بهم ریختن نسبت تصویر */
            transition: opacity 0.5s ease-in-out; /* انیمیشن فید */
        }
        .mySlides img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block; /* حذف فضای اضافه زیر تصویر */
        }
        /* دکمه‌های بعدی/قبلی */
        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 30px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
            background-color: rgba(0,0,0,0.5);
            z-index: 10; /* بالای تصاویر */
        }
        .next {
            right: 0;
            border-radius: 3px 0 0 3px;
        }
        .prev:hover, .next:hover {
            background-color: rgba(0,0,0,0.8);
        }
        /* نقاط نشانگر اسلاید */
        .dots-container {
            text-align: center;
            padding: 20px 0 10px;
            background-color: #eee;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        .dot {
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 4px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
        }
        .active-dot, .dot:hover {
            background-color: #717171;
        }


        .contact-info {
            background-color: #e2f0d9;
            padding: 25px;
            border-radius: 8px;
            margin-top: 30px;
            text-align: center;
        }
        .contact-info p {
            margin: 8px 0;
            font-size: 1.2em;
            font-weight: bold;
            color: #1a5e20;
        }
        .contact-buttons {
            margin-top: 20px;
        }
        .contact-buttons a {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 12px 25px;
            text-align: center;
            text-decoration: none;
            font-size: 1.1em;
            border-radius: 6px;
            margin: 0 10px;
            transition: background-color 0.3s ease;
            font-weight: bold;
        }
        .contact-buttons a.telegram {
            background-color: #0088cc;
        }
        .contact-buttons a:hover {
            background-color: #45a049;
        }
        .contact-buttons a.telegram:hover {
            background-color: #006da7;
        }
        .address {
            font-style: italic;
            color: #555;
            text-align: center;
            margin-top: 25px;
            font-size: 1.05em;
        }
        .owner-name {
            text-align: center;
            margin-top: 40px;
            font-weight: bold;
            color: #666;
            font-size: 1.1em;
        }
        .footer {
            text-align: center;
            margin-top: 50px;
            padding: 20px;
            color: #777;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>به اقامتگاه عمو حسین خوش آمدید!</h1>
    </div>

    <div class="container">
        <p>اقامتگاه عمو حسین با افتخار آماده میزبانی از شما عزیزان در قلب طبیعت زیبای گیلان است.</p>
        <p>ما تنها یک اتاق دنج و اختصاصی برای رزرو داریم تا بتوانیم بهترین و آرامش‌بخش‌ترین اقامت را برای شما فراهم آوریم.</p>

        <h2>گالری تصاویر اقامتگاه</h2>
        <div class="slideshow-container">
            <div class="mySlides fade">
                <a href="(2).jpg" data-lity><img src="(2).jpg" alt="تصویری از نمای اقامتگاه عمو حسین"></a>
            </div>

            <div class="mySlides fade">
                <a href="(6).jpg" data-lity><img src="(6).jpg" alt="عکسی از فضای داخلی یا امکانات اقامتگاه"></a>
            </div>

            <div class="mySlides fade">
                <a href="(9).jpg" data-lity><img src="(9).jpg" alt="نمایی از حیاط یا محیط بیرونی اقامتگاه"></a>
            </div>

            <div class="mySlides fade">
                <a href="(12).jpg" data-lity><img src="(12).jpg" alt="منظره‌ای از طبیعت اطراف اقامتگاه"></a>
            </div>

            <div class="mySlides fade">
                <a href="(14).jpg" data-lity><img src="(14).jpg" alt="جزئیاتی از طراحی یا دکوراسیون داخلی"></a>
            </div>

            <div class="mySlides fade">
                <a href="(16).jpg" data-lity><img src="(16).jpg" alt="یک نمای کلی دیگر از اقامتگاه"></a>
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>
        <div class="dots-container">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
            <span class="dot" onclick="currentSlide(6)"></span>
        </div>

        <h2>اطلاعات تماس و رزرو</h2>
        <div class="contact-info">
            <p>جهت رزرو و هماهنگی، لطفاً با ما در تماس باشید:</p>
            <p>نام مسئول: علیرضا رمضانی لاسکی</p>
            <div class="contact-buttons">
                <a href="tel:+989380233594">تماس تلفنی: 09380233594</a>
                <a href="https://t.me/09380233594" target="_blank" class="telegram">ارسال پیام در تلگرام</a>
            </div>
        </div>

        <div class="address">
            <p>آدرس اقامتگاه: گیلان، رستم آباد، پشته، کوچه مهر، منزل اسماعیل رمضانی لاسکی</p>
        </div>

        <p class="owner-name">با آرزوی اقامتی دلنشین برای شما، علیرضا رمضانی لاسکی</p>
    </div>

    <div class="footer">
        <p>&copy; 2025 اقامتگاه عمو حسین. تمامی حقوق محفوظ است.</p>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity.min.js"></script>

    <script>
        let slideIndex = 1;
        showSlides(slideIndex);

        // کنترل‌های بعدی/قبلی
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // کنترل‌های نقطه
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
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
    </script>
</body>
</html>
