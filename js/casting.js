$(document).ready(function(){


  $(window).scroll(function () {

    let height = $(document).scrollTop();

    if(height>100){
      $(".up_btn>a>span").fadeIn(1500);
    }else{
      $(".up_btn>a>span").fadeOut(1000);
    };
    
    }); 

/* _______________________________________history_________________________ */
  $(".h_panel>li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기
	
	$(".h_tab>li").click(function(){
		$(".h_tab>li").removeClass("selected");//기존선택된 selected 클래스삭제
		$(this).addClass("selected"); //새로 선택된 selected 클래스 생성
		$(".h_panel>li").hide();//기존의 보여진 내용 숨기기
		$($(this).find("a").attr("href")).show();//새로 선택된 내용 href 연결된내용 보여주기
	});



});