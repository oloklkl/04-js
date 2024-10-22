// gsap.to('누구를', {어떻게});
// gsap.to('.green', { left: '50%', Transform: 'tanslateX(50%)' });

// gsap.to('.green', { y: 100 }, 1);

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.intro',
        pin: true,
        start: 'top 0',
        end: '+=500',
        scrub: 1,
        markers: true,
    },
});

tl.fromTo('.green', { x: 200, y: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
    .to('.green', { y: 0, duration: 1 })
    .from('.orange', { x: -200, y: 200, opacity: 0, duration: 1 })
    .from('.yellow', { x: 200, opacity: 0, duration: 1 })
    .to('.box-area', { rotation: 90, duration: 1 })
    .to('.green, .yellow, .orange', { borderRadius: '50%', duration: 1 })
    .from('.intro .txt', { scale: 0, opacity: 0, duration: 1 });

gsap.to('.grow', {
    scrollTrigger: '.grow',
    height: '70%',
    width: '70%',
    fontSize: '3rem',
    duration: 1,
    scrollTrigger: {
        trigger: '.sec-grow',
        pin: true,
        start: 'top 0',
        end: '+=500',
        scrub: 1,
        // markers: true,
    },
});

// header
// 윈도우가 스크롤 됐을 때
window.addEventListener('scroll', function () {
    // gsap을 이용해서 #header의 tanslateY 값을 -100%로 설정

    const scrolled = window.scrollY;
    console.log('스크롤 값 : ${scrolled}');

    // 만약 y축 스크롤 값(scrolled)이 80보다 크다면
    if (scrolled > 80) {
        //  참일 때 실행할 코드
        //  header를 없애고
        gsap.to('#herder', { yPercent: -100, duration: 0.3 });
        gsap.to('#to-top', { x: -70, duration: 0.3 });
    } else {
        gsap.to('#herder', { yPercent: 0, duration: 1 });
        gsap.to('#to-top', { x: 0, duration: 0.3 });
    }
});
