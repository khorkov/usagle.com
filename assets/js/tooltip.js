$(document).ready(function(){
	$('.tool-item').hover(function(){
		var helptext = $(this).attr('data')
		$('.tooltip-block').html(helptext).show();
		$('.tooltip-block').offset({top:$(this).offset().top+$(this).height(),left:$(this).offset().left});
	},function(){
		$('.tooltip-block').hide(); 
	});
});