$(document).ready(
	function(){

	$(".verbz").on("click",
	function(e) {
		// $(".verbz").css("background-color", "lightgreen");
		// var source = $('#verbz').attr('src');
		// console.log(source);
		e.preventDefault();
		var $image = $("#chosen-image");
		$image.attr("src", $(this).attr("src")); 
	$(".backdrop").show(1000,function() { 
	// $("#this-image").attr("src","ab.jpg");

	$(".backdrop").on("click",
	function() {
	$(".backdrop").hide();

	});
	});
});  
	$("h1").hover(
	function() {
		$(this).fadeOut(100);
		$(this).fadeIn(300);
		})
});