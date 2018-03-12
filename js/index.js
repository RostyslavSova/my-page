$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        let target = this.hash;
        let $target = $(target);
        let scroll;
        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top) - 40
        }else{
            scroll =  ($target.offset().top) - 40
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        }, 500, 'swing', function () {
            //window.location.hash = target;
        });
    });
});

$(window).on('scroll', function () {
   let sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight()
    , cur_pos = $(this).scrollTop();
  sections.each(function() {
    let top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
    

      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});