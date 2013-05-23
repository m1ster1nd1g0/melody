$(".tree").click(function(){
			$("#feed").removeClass("feedcenter invcenter").addClass("treecenter");
});
$(".feed").click(function(){
	$("#feed").removeClass("treecenter invcenter").addClass("feedcenter");

});
$(".inv").click(function(){
	$("#feed").removeClass("feedcenter treecenter").addClass("invcenter");
});
