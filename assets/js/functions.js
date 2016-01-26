$(document).ready(function() {

	$('.sora1').click(function() {
		$('.limage').html("<img src='/assets/img/asterBIG.jpg'>")
		$('#lightbox').fadeToggle(500);
	});

	$('.sora2').click(function() {
		$('.limage').html("<img src='/assets/img/robosBIG.jpg'>")
		$('#lightbox').fadeToggle(500);
	});

	$('.sora3').click(function() {
		$('.limage').html("<img src='/assets/img/wiresBIG.jpg'>")
		$('#lightbox').fadeToggle(500);
	});

	$('#lightbox').click(function() {
		$('#lightbox').fadeToggle(500);
	});

});