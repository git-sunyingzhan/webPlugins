$(function(){
	
	$("#add").on("click",function(){
		var num = $("#num").val();
		if(num){
			$(".scrool-right").text("+"+num).css("color","red");
		}
	});
	$("#subtract").on("click",function(){
		var num = $("#num").val();
		if(num){
			$(".scrool-right").text("-"+num).css("color","green");
		}
	});
});