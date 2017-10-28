
$(function(){
	
	//导航
	$('.sf-menu>li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active')
	},function(){
		$('.act').addClass('active').siblings().removeClass('active')
	});
	
		
	//隐藏导航
	var num=0
	
	$(window).resize(function(){
		var w = $(window);
		if ( w.width() > 768 ) {
			$('#wrapper').css({left:'0%'});
			num=0
		}	
	});

	$('.nav-toggle').click(function(){
		num++
		if(num%2==1){
			$('#wrapper').animate({left:'-30%'},500)
		}else{
			$('#wrapper').animate({left:'0%'},500)
		}
	})
	
	
	
	//**************** 动画 *******************
	var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	
})
