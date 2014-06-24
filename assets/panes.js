$(document).ready(function(){

	$('.pane-fade > .pane-info').hide();
	$('.pane-fade').hover(
		function(){
			$(this).find('.pane-info').stop().fadeIn('fast');
		}, function(){
			$(this).find('.pane-info').stop().fadeOut('fast');
		}
	);
});
