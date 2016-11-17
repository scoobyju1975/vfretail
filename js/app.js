jQuery(function ($) {
    function checkCurrent(menu){
		if (menu.children('li.current_page_ancestor').length == 1){
            var submenu = menu.children('li.current_page_ancestor').children('ul.sub-menu');
            submenu.addClass('active-sub-menu');
            var thishtml = menu.children('li.current_page_ancestor').clone();
            thishtml.removeClass('menu-item-has-children');
            thishtml.removeClass('current_page_ancestor');
            thishtml.addClass('duplicated-menu-item');
            thishtml.find('ul').remove();
            thishtml.prependTo(submenu);
            submenu.prepend('<li class="back-btn"><a href="#">Back</a></li>');
            $('.menu-main-menu-container').animate({
                left: '-=310px'
            }, 10, function(){
                checkCurrent(submenu);
            });
        }else{
            if (menu.children('li.current-menu-item').hasClass('menu-item-has-children')){
                var submenu = menu.children('li.current-menu-item').children('ul.sub-menu');
                submenu.addClass('active-sub-menu');
                var thishtml = menu.children('li.current-menu-item').clone();
                thishtml.removeClass('menu-item-has-children');
                thishtml.addClass('duplicated-menu-item');
                thishtml.find('ul').remove();
                thishtml.prependTo(submenu);
                submenu.prepend('<li class="back-btn"><a href="#">Back</a></li>');
                $('.menu-main-menu-container').animate({
                    left: '-=310px'
                }, 10, function(){
                    if (submenu.children('li.duplicated-menu-item').length > 1){
                        submenu.children('li.duplicated-menu-item:nth-child(2)').remove();
                    }
                });
            }
        }
    }
    $('ul.menu').find('.current_page_item').parents('.menu-item-has-children').addClass('current_page_ancestor');
    checkCurrent($('ul.menu'));
    $(window).resize(function(){
        if ($('.menu-wrapper').hasClass('open')){
            $('.menu-wrapper').css({
                width: '385px'
            });
        }else{
            $('.menu-wrapper').css({
                width: '0'
            });
        }
    });
    $(document).on('click', '.menu-btn', function(){
        if ($(this).find('.c-hamburger').hasClass('is-active')){
            $(this).removeClass('activemenu');
            $($(this).find('.c-hamburger').removeClass('is-active'));
        }else{
            $(this).addClass('activemenu');
            $($(this).find('.c-hamburger').addClass('is-active'));
        }
        if ($('.menu-wrapper').hasClass('open')){
            $('.menu-wrapper').removeClass('open');
            $('.menu-wrapper').stop(true,true).animate({
                width: '0'
            }, 300);
        }else{
            $('.menu-wrapper').addClass('open');
            $('.menu-wrapper').stop(true,true).animate({
                width: '385px'
            }, 300);
        }
    });
    var menuani = 0;
    $(document).on('click', '.menu-item-has-children > a', function(){
		if (menuani == 0){
            menuani = 1;
            var submenu = $(this).parent('.menu-item-has-children').children('.sub-menu');
            submenu.addClass('active-sub-menu');
            var thishtml = $(this).parent('li').clone();
            thishtml.removeClass('menu-item-has-children');
            thishtml.removeClass('current_page_ancestor');
            thishtml.addClass('duplicated-menu-item');
            thishtml.find('ul').remove();
            thishtml.prependTo(submenu);
            submenu.prepend('<li class="back-btn"><a href="#">Back</a></li>');
            $('.menu-main-menu-container').animate({
                left: '-=310px'
            }, 300, function(){
                menuani = 0;
            });
        }
        return false;
    });
    $(document).on('click', '.back-btn > a', function(){
        var submenu = $(this).closest('.sub-menu');
        $('.menu-main-menu-container').animate({
            left: '+=310px'
        }, 300, function(){
            submenu.find('.back-btn').remove();
            submenu.removeClass('active-sub-menu');
            submenu.find('.duplicated-menu-item').remove();
        });
        return false;
    });
    $(document).on('click', '.menu-button-not-active', function(){
		$('.menu-main-menu-container').css('display','block');
        $('#social').css('display','none');
        $('#search').css('display','none');
        $('.buttons a').fadeTo(50,1);
        $('#menu-button').removeClass('menu-button-not-active');
        return false;
    });
    /* Home */
    $(document).find(".clickscroll a").click(function(e) {
		e.preventDefault();
		var section = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section).offset().top
		});
	});
    /* Career Opportunities */
    $(document).on('click', '.co-nav-item', function(e){
        if ($(this).hasClass('opened')){
            $(this).removeClass('opened');
            var thiscontent = $(this).find('.co-nav-item-content');
            thiscontent.slideUp();
        }else{
            $(this).addClass('opened');
            var thiscontent = $(this).find('.co-nav-item-content');
			 thiscontent.slideDown();
		}
        return false;
    });
    $('#c-tab').addClass('active');
    $('#c-content').addClass('active');
    $(document).on('click','.tab',function(){
        var thisid = $(this).attr('id');
        var tab = thisid.replace('-tab','');
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.care-content div').removeClass('active');
        $('#'+tab+'-content').addClass('active');
    });
    $(document).on('click','.pagenav a',function(e){
        var thisid = $(this).attr('href');
		$('html,body').animate({
            scrollTop: $(thisid).offset().top - 45
        }, 400, function(){
            var id = thisid.replace('#','');
            location.hash = id;
        });
        return false;
    });
	var hashloc = location.hash;
	if (hashloc){
		if($(hashloc).hasClass("co-nav-item")){
			$(hashloc).trigger( "click" );
		}
        if(hashloc == '#store-opportunities' || hashloc == '#early-careers' || hashloc == '#head-office'){
            var thehash = hashloc.replace('#','');
            $('.current_page_item').addClass('current_page_ancestor');
            $('.current_page_item').removeClass('current_page_item');
            $('.'+thehash+'-nav').addClass('current_page_item');
            $('.current_page_ancestor a').click();
        }
        $('html,body').animate({
            scrollTop: $(hashloc).offset().top - 45
        }, 400, function(){
            location.hash = hashloc;
        });
    }
	
	$(document).on('click', '.duplicated-menu-item .sop', function(e){
		//var hashloc = location.hash;
		$(".co-nav-item").removeClass('opened');
		var thiscontent = $(".co-nav-item").find('.co-nav-item-content');
		thiscontent.slideUp();
		
		var url=$(this).attr("href");
		var myString = url.substr(url.indexOf("#") + 1);
		$("#"+myString).trigger( "click" );	
		
		/* close the nav */
		if ($(".menu-btn").find('.c-hamburger').hasClass('is-active')){
            $(".menu-btn").removeClass('activemenu');
            $($(".menu-btn").find('.c-hamburger').removeClass('is-active'));
        }
        if ($('.menu-wrapper').hasClass('open')){
            $('.menu-wrapper').removeClass('open');
            $('.menu-wrapper').stop(true,true).animate({
                width: '0'
            }, 300);
        }
		
		
		
		
		
		
	});
	
    /* Hints & Tips */
    $(document).on('click', '.loadblog', function(e){
        if ($(this).hasClass('opened')){
            $(this).removeClass('opened');
            $(this).find('span').html('+');
            var thiscontent = $(this).parents('.blog-post').find('.blog-content');
            thiscontent.slideUp();
        }else{
            $(this).addClass('opened');
            $(this).find('span').html('&ndash;');
            var thishref = $(this).attr('href');
            var thiscontent = $(this).parents('.blog-post').find('.blog-content');
            if (thiscontent.hasClass('empty')){
                thiscontent.load(thishref + ' .blog-content-wrap', function(){
                    thiscontent.slideDown(function(){
                        thiscontent.removeClass('empty');
                    });
                });
            }else{
                thiscontent.slideDown();
            }
        }
        return false;
    });
});