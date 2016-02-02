$(document).ready(function() {

	$('.swap1').click(function() {
		// $('.limage').html("<iframe src='https://player.vimeo.com/video/29364234?color=f0050a' width='1280' height='720' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
		$('.limage').html("<img src='/assets/img/1.jpg'>");
		$('#lightbox').fadeToggle(400);
	});

	$(".work-item.swap1").hover(function() {
	    $(this).find('.BW1').toggle(0);
	    $(this).find('.clr').toggle(0);
	}, function() {
	    $(this).find('.BW1').toggle(0);
	    $(this).find('.clr').toggle(0);
		}
	);

	$('.swap2').click(function() {
		$('.limage').html("<img src='/assets/img/2.jpg'>");
		$('#lightbox').fadeToggle(400);
	});

	$(".work-item.swap2").hover(function() {
	    $(this).find('.BW2').toggle(0);
	    $(this).find('.clr').toggle(0);
	}, function() {
	    $(this).find('.BW2').toggle(0);
	    $(this).find('.clr').toggle(0);
		}
	);

	$('.swap3').click(function() {
		$('.limage').html("<img src='/assets/img/3.jpg'>");
		$('#lightbox').fadeToggle(400);
	});

	$(".work-item.swap3").hover(function() {
	    $(this).find('.BW3').toggle(0);
	    $(this).find('.clr').toggle(0);
	}, function() {
	    $(this).find('.BW3').toggle(0);
	    $(this).find('.clr').toggle(0);
		}
	);

	$('.swap4').click(function() {
		$('.limage').html("<img src='/assets/img/4.jpg'>");
		$('#lightbox').fadeToggle(400);
	});

	$(".work-item.swap4").hover(function() {
	    $(this).find('.BW4').toggle(0);
	    $(this).find('.clr').toggle(0);
	}, function() {
	    $(this).find('.BW4').toggle(0);
	    $(this).find('.clr').toggle(0);
		}
	);

	$('.swap12').click(function() {
		$('.limage').html("<img src='/assets/img/12.jpg'>");
		$('#lightbox').fadeToggle(400);
	});

	$(".work-item.swap12").hover(function() {
	    $(this).find('.BW12').toggle(0);
	    $(this).find('.clr').toggle(0);
	}, function() {
	    $(this).find('.BW12').toggle(0);
	    $(this).find('.clr').toggle(0);
		}
	);



	$('#lightbox').click(function() {
		$('#lightbox').fadeToggle(400);
	});

});