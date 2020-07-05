$(function () {
    // ==========show_hide code start

    $('#hide').click(function(){
        $('.show_hide').hide(800)
    })
    $('#show').click(function(){
        $('.show_hide').show(800)
    })
    $('#toggle').click(function(){
        $('.show_hide').toggle(800)
    })

    // ==========fade code start

    $('#fadeout').click(function(){
        $('.fade').fadeOut(800)
    })
    $('#fadein').click(function(){
        $('.fade').fadeIn(500)
    })
    $('#fadetoggle').click(function(){
        $('.fade').fadeToggle(800)
    })
    $('#fadeto').click(function(){
        $('.fade').fadeTo(800,.7)
    })

    // ==========slide code start

    $('#slideup').click(function(){
        $('.slide').slideUp(800)
    })
    $('#slidedown').click(function(){
        $('.slide').slideDown(800)
    })
    $('#slidetoggle').click(function(){
        $('.slide').slideToggle(800)
    })

    // ==========add_remove code start

    var col = $('.col')

    $('#blue').on('click',function(){
        col.addClass('blue')
        col.removeClass('green black yellow')
    })
    $('#green').on('click',function(){
        col.addClass('green')
        col.removeClass('blue black yellow')
    })
    $('#black').on('click',function(){
        col.addClass('black')
        col.removeClass('green blue yellow')
    })
    $('#yellow').on('click',function(){
        col.addClass('yellow')
        col.removeClass('green black blue')
    })


    var menu_offset = $('.header').offset().top

    $(window).on('scroll', function () {
       var scroll_size = $(window).scrollTop()
 
       if (scroll_size > menu_offset) {
          $('.header').addClass('menu_fixed')
       } else {
          $('.header').removeClass('menu_fixed')
       }
    })

})

