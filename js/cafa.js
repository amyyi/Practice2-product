$(document).ready(function(){

    //menu and logo slide



//menu and logo slide function name
    $('.to_nav').on('click',menubar_slideToggle());

    function menubar_slideToggle(){
        $('.to_nav').on('click',function name(){
            $('.menubg').slideToggle();
        });
    }
//over

   // page top
    $(function() {
        var topBtn = $('.pagetop');
        topBtn.hide();
        //按鈕顯示一旦滾動達到100
        $(window).scroll(function () {
            if ($(this).scrollTop() > 60) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
        //頂部滾動
        topBtn.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

    $('.panel-title').on('click',pro_content_slideToggle());

    function pro_content_slideToggle() {
        $('.panel-title').click(function (e) {
            var chevState = $(e.target).siblings("span.indicator").toggleClass('glyphicon-chevron-down       glyphicon-chevron-up');
            $("span.indicator").not(chevState).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");

            var chevState2 = $(e.target).siblings("span.indicator2").toggleClass('glyphicon-plus-sign      glyphicon-minus-sign');
            $("span.indicator2").not(chevState2).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
        });
    }

//    $('.panel-heading').click(function (e){
//        var chevState = $(e.target).siblings("span.indicator").toggleClass('glyphicon-chevron-down       glyphicon-chevron-up');
//        $("span.indicator").not(chevState).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
//
//        var chevState2 = $(e.target).siblings("span.indicator2").toggleClass('glyphicon-plus-sign      glyphicon-minus-sign');
//        $("span.indicator2").not(chevState2).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
//    });


});