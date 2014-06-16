$(document).ready(function(){
	$('.pane').hover(
		function(){
			$(this).find('.pane-info').stop().fadeIn('fast');
		}, function(){
			$(this).find('.pane-info').stop().fadeOut('fast');
		}
	);
});
$(document).ready(function(){
	
});
