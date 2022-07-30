$('.slider22').slick({
	arrow: true,
	nextArrow: ' .next ',
	prevArrow: ' .prev ',
	dots: false,
	rtl: true,
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 1920,
      settings: {
		arrow: true,
		nextArrow: '.next',
		prevArrow: ' .prev',
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
		rtl: true,
		autoplay: true,
		autoplaySpeed: 4000,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.slider66').slick({
	dots: true,
	rtl: true,
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
		rtl: true,
		autoplay: true,
		autoplaySpeed: 4000,
      }
    },
    {
      breakpoint: 992,
      settings: {
		dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 568,
      settings: {
		dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


$(function () {
    $('.add').on('click',function(){
        var $qty=$(this).closest('div').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.minus').on('click',function(){
        var $qty=$(this).closest('div').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
});

