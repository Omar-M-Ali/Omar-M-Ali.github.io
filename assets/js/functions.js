$(document).ready(function() {

	$('.swap1').click(function() {
		$('.limage').html("<iframe src='https://player.vimeo.com/video/29364234?color=f0050a' width='1280' height='720' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
		$('#lightbox').fadeToggle(400);
	});

	$(".swap1").hover(function() {
	    $(this).find('.sora1').toggle(0);
	    $(this).find('.soraBW').toggle(0);
	}, function() {
	    $(this).find('.sora1').toggle(0);
	    $(this).find('.soraBW').toggle(0);
		}
	);

	$('.swap4').click(function() {
		$('.limage').html("<img src='/assets/img/robosBIG.jpg'>");
		$('#lightbox').fadeToggle(400);
	});

	$(".swap4").hover(function() {
	    $(this).find('.sora4').toggle(0);
	    $(this).find('.soraBW').toggle(0);
	}, function() {
	    $(this).find('.sora4').toggle(0);
	    $(this).find('.soraBW').toggle(0);
		}
	);

	$('.swap3').click(function() {
		$('.limage').html("<img src='/assets/img/wiresBIG.jpg'>");
		$('#lightbox').fadeToggle(400);
	});

	$(".swap3").hover(function() {
	    $(this).find('.sora3').toggle(0);
	    $(this).find('.soraBW').toggle(0);
	}, function() {
	    $(this).find('.sora3').toggle(0);
	    $(this).find('.soraBW').toggle(0);
		}
	);

	$('.swap2').click(function() {
		$('.limage').html("<img src='/assets/img/lokalBIG.jpg'>");
		$('#lightbox').fadeToggle(400);
	});

	$(".swap2").hover(function() {
	    $(this).find('.sora2').toggle(0);
	    $(this).find('.soraBW').toggle(0);
	}, function() {
	    $(this).find('.sora2').toggle(0);
	    $(this).find('.soraBW').toggle(0);
		}
	);

	$('#lightbox').click(function() {
		$('#lightbox').fadeToggle(400);
	});

});