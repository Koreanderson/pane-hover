$(document).ready(function(){
	$('.pane:first-child, .pane:nth-child(3) ').hover(
		function(){
			$(this).find('.pane-info').stop().fadeIn('fast');
		}, function(){
			$(this).find('.pane-info').stop().fadeOut('fast');
		}
	);
});
