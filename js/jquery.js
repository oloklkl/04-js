// loading 되면 bg-color를 lightblue로 변경
$('body').css({
    'background-color': 'lightblue',
    'font-size': '20px',
});

// 실행할 코드
// btn 을 클릭했을 때
$('.btn1')
    .on('mouseenter', function () {
        // .box를 없애기
        $('.box').slideDown(1000);
    })
    .on('mouseleave', function () {
        $('.box').slideUp(1000);
    });

// 다음 코드
$('.btn2')
    .mouseenter(function () {
        $('.box2').stop().hide();
    })
    .mouseleave(function () {
        $('.box2').stop().show();
    });

// animate
// .btn3을 클릭했을 때
// .box3가 1초 동안 왼쪽으로 100px 이동
$('.btn3').click(function () {
    $('.box3').animate(
        {
            width: '+=150px',
            left: '300px',
            top: '500px',
        },
        1000
    );
});
