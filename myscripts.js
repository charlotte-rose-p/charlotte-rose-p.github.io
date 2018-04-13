//Skill bar scripts from Code Pen
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});
//Image carousel javascript from Coursera online course with adaptions
var paused = false;
$(".crop-img").click(function(){
			$("#bigimage").attr('src',
				$(this).attr('src'));
		});
var counter = 1;
$("#image"+counter).click();
$("#backward").click(function (){
	counter = counter - 1;

	if(counter < 1){
		 counter = 6;
	 }

	$("#image"+counter).click();
		});
		$("#forward").click(function (){
			counter = counter + 1;
			if(counter > 6){
				counter = 1;
			}
			$("#image"+counter).click();
				});
				$("#bigimage").click(function (){
						paused = !paused;
					});
	setInterval(function (){
		if(!paused){
		$("#forward").click();
	};
}, 3000);
