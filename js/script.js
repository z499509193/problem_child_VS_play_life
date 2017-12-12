$(document).ready(function() {
	function lunbo(lb,lis,t){
		var li_length = lis.length;
		var li_index = lis.index();
	    function direction(left,right){
	           left.click(function(){
	           		if (li_index <= 0) {
	           			li_index= li_length;
	           		}
	           		li_index--;
	           		lis.eq(li_index).addClass('item').siblings().removeClass('item');
	           });
	           right.click(function(){
	           		if (li_index >= li_length-1) {
	           			li_index=-1;
	           		}
	           		li_index++;
	           		lis.eq(li_index).addClass('item').siblings().removeClass('item');
	           });
	    }
	    direction($(".problem_child_lunbo_left"),$(".problem_child_lunbo_right"));
	    direction($(".play_life_lunbo_left"),$(".play_life_lunbo_right"))
	   function time(){ 
	       t =  setInterval(function(){
	    	   if (li_index >= li_length-1) {
	    	   	  li_index = -1;
	    	   }
	           li_index ++;
	           span_index = li_index;
	           lis.eq(li_index).addClass('item').siblings().removeClass('item');
	         },4000);
	 	}
	   time();
	   lb.mouseover(function(){
	        clearInterval(t);
	   });
	   lb.mouseout(function(){
	        time();
	   });	
	}
	lunbo( $(".problem_child_lunbo"),$(".problem_child_present"),"f");
	lunbo( $(".play_life_lunbo"),$(".play_life_present"),"g");
	function tabs(plan1,center1,center2,much,plan2,atlas1,atlas2,video1,video2){
		plan1.click(function(){
			center1.css('display', 'none');
			center2.css('display', 'block');
			much.css('display', 'block');
			plan2.css('display', 'none');
			atlas1.css('display', 'block');
			atlas2.css('display', 'none');
			video1.css('display', 'block');
			video2.css('display', 'none');
		});
		much.click(function(){
			$(this).css('display', 'none');
			plan2.css('display', 'block');
		});
	}
	tabs($(".problem_child_bg_present_plan"),$(".play_life_center"),$(".problem_child_center"),$(".problem_child_bg_present_much"),$(".play_life_bg_present_plan"),$(".problem_child_atlas_bg"),$(".play_life_atlas_bg"),$(".problem_child_bg_video"),$(".play_life_bg_video"));
	tabs($(".play_life_bg_present_plan"),$(".problem_child_center"),$(".play_life_center"),$(".play_life_bg_present_much"),$(".problem_child_bg_present_plan"),$(".play_life_atlas_bg"),$(".problem_child_atlas_bg"),$(".play_life_bg_video"),$(".problem_child_bg_video"));
	function tabs1(anjian,yincang,xianshi){
		anjian.click(function(){
			yincang.css('display', 'none');
			xianshi.css('display', 'block');
		});
	}
	tabs1($(".problem_child_play_file_video_pic p"),$(".problem_child_play_file_video_pic"),$(".problem_child_play_file_video_text"));
	tabs1($(".problem_child_play_file_video_text p"),$(".problem_child_play_file_video_text"),$(".problem_child_play_file_video_pic"));
	function heights(pic_p,videos,bgs,text_p){
		pic_p.click(function(){
			videos.height(200);
			bgs.height(200);
		});
		text_p.click(function(){
			videos.css('height', '700');
			bgs.css('height', '700');
		});
	}
	heights($(".problem_child_play_file_video_pic p"),$(".problem_child_bg_video"),$(".problem_child_play_file_video"),$(".problem_child_play_file_video_text p"));
	heights($(".problem_child_play_file_video_pic p"),$(".play_life_bg_video"),$(".problem_child_play_file_video"),$(".problem_child_play_file_video_text p"));
	 $(window).scroll(function(){
        var sc=$(window).scrollTop();
        var rwidth=$(window).width()+$(document).scrollLeft();
        var rheight=$(window).height()+$(document).scrollTop();
        if(sc>200){
            $("#problem_child_play_life_fanhui").css("display","block");
        }else{
            $("#problem_child_play_life_fanhui").css("display","none");
        }
    });
    $("#problem_child_play_life_fanhui").click(function(){
        $('body,html').animate({scrollTop:0},300);
    });
    $(".problem_child_novel_shang").click(function(){
    	$(".problem_child_novel_xianshi").removeClass('problem_child_novel_xianshi');
    	$(this).css('display', 'none');
    	$(".problem_child_novel_xia").css('display', 'block');
    });
    $(".problem_child_novel_xia").click(function(){
    	var xianyin_div = document.getElementById("problem_child_novel_xianyin").getElementsByTagName("div")[0];
    	xianyin_div.setAttribute('class',"problem_child_novel_xianshi");
    	$(this).css('display', 'none');
    	$(".problem_child_novel_shang").css('display', 'block');
    });
});