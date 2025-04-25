$(document).ready(function(){
    // 탭 전환
    $(".btn-gallery").click(function(){
        $(".B-gallery").show();
        $(".tab-news").hide();
    });
    $(".btn-news").click(function(){
        $(".B-gallery").hide();
        $(".tab-news").show();
    });

    // 메뉴 슬라이드 다운/업
    $(".main-23 > li").hover(
        function() { $(".A-menu").stop().slideDown(); },
        function() { $(".A-menu").stop().slideUp(); }
    );

    // 사이드 메뉴 토글
    let menuOpen = false;
    $(".menu-button").click(function(){
        $(".menu").css("right", menuOpen ? "-300px" : "0");
        menuOpen = !menuOpen;
    });

    // 메뉴 닫기
    $(".buuuu").click(function() {
        $(".menu").css("right", "-300px");
        menuOpen = false;
    });
});


window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 이미지 슬라이드 함수
let currentIndex = 0;
const images = document.querySelectorAll('.slides img');
const slides = document.querySelector('.slides');
const slideWidth = 490; // 슬라이더 너비
const totalSlides = images.length;

const moveToSlide = (index) => {
    currentIndex = (index + totalSlides) % totalSlides;
    const offset = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${offset}px)`;
};

const startAutoSlide = () => setInterval(() => moveToSlide(currentIndex + 1), 3000);
let autoSlideInterval = startAutoSlide();

const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = startAutoSlide();
};

document.getElementById('prevButton').addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
    resetAutoSlide();
});

document.getElementById('nextButton').addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
    resetAutoSlide();
});

document.getElementById('slider').addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

document.getElementById('slider').addEventListener('mouseout', () => {
    autoSlideInterval = startAutoSlide();
});

