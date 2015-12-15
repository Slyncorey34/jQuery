$(document).ready (
	function(){

	$(".verbz").on("click",
	function(e) {
	
		e.preventDefault();
		var $image = $("#chosen-image");
		$image.attr("src", $(this).attr("src")); 
		$(".backdrop").show(1000,function() { 
	
		$(".backdrop").on("click",
		function() {
		$(".backdrop").hide();

		});
	});
});  
	
	$("h1").hover(
	function() {

		$(this).fadeOut(600);
		$(this).fadeIn(500);
		});
	// });
	
	$(".color li").on("click", function() { 
	$(".color li").css("background","red"); 
	   });
	
	$("h5").hover(
	function() { 
		$(this).css("font-size", "36px");
		// $(this).css("font-size","smaller");	
	
	});
});