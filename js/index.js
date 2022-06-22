$(document).ready(function(){


	/*--->>>메뉴버튼(햄버거메뉴)*/
	$(".gnb_list").css({"right":"-60%"});  /*처음위치*/

	
	/*메뉴버튼*/
	$(".gnb_btn").click(function(){  
    $(this).hide();
		$(".gnb_list").stop(true,true).animate({"right":0});
		$(".back").stop(true,true).fadeIn(); //메뉴 뒤 검정배경 등장
	});


	/*닫기버튼*/	
	$(".gnb .close").click(function(){  
    $(".gnb_btn").show();
		$(".gnb_list").stop(true,true).animate({"right":"-60%"});
		$(".back").stop(true,true).fadeOut(); //메뉴 뒤 검정배경 사라짐
	});
  
  //________________________________________________________________________

  //main_page

  $(".main_logo, .font_logo").fadeIn(2000)
});