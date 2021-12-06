
    
    function playPause() 
    {    
        var music = document.getElementById('music2');    
        var music_btn = document.getElementById('music_btn2');    
        if (music.paused)
        {    
            music.play();    
            music_btn.src = 'logo/music.png';    
        }    
        else
        {    
            music.pause();    
            music_btn.src = 'logo/music.png';     
        }    
    }  
  

        $(function(){
            $("#gotop").click(function(){
                jQuery("html,body").animate({
                    scrollTop:0
                },700);
            });
            $(window).scroll(function() {
                if ( $(this).scrollTop() > 430){
                    $('#gotop,#about,#skill').fadeIn("fast");
                } else {
                    $('#gotop').stop().fadeOut("fast");
                }
            });
        });
        $(function () {
        
        var city_top = $('.section2').offset().top;
        $('#about').click(function () {
            $('html,body').animate({scrollTop:city_top},500);
    })
    })
    $(function () {
        
        var city_top = $('.section3').offset().top;
        $('#skill').click(function () {
            $('html,body').animate({scrollTop:city_top},500);
    })
    })
    $(function () {
        
        var city_top = $('.section5').offset().top;
        $('#E').click(function () {
            $('html,body').animate({scrollTop:city_top},500);
    })
    })
    $(function () {
        
        var city_top = $('.section6').offset().top;
        $('#contact').click(function () {
            $('html,body').animate({scrollTop:city_top},500);
    })
    })
 