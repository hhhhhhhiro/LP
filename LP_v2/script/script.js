// JavaScript Document

$(document).ready(function(){

// Usermenu 动态实现	
		window.setTimeout(function(){
			$('#userMenu').animate({height:"130px"},500);
			$('#userMenu li').css('display','block');
		},2000);
	     // jQuery允许通过链式语法绑定多个事件处理函数
	    $('#contact-item .item').hover(function(){
			$(this).css({
				color:'white',
				background:'#5d4ac8'
			});
		},
		function(){
			$(this).css(
				'background','#fb6a5e'
			);
		}							  );  

	
		$('#fullPage').fullpage({
			 navigation:true, //是否显示导航菜单项
			 navigationPosition:'left', //  设置导航小圆点位置
			 navigationTooltips:['TOP','FEATURES','USAGE','CONTACT'], // 导航小圆点提示文字，注意按照顺序来
			 sectionsColor:['white','white','white','#ff7561'], // 设置每个页面的背景颜色（数组形式）
			 // 之前的蓝色备份 #62A4E9  粉色备份：'#f69cb9' '#fccfe4'   // 黄色和 西瓜红 '#fed35b','#fb6a5e'
			 anchors:['top','features','usage','contact'],// 定义锚链接,
			 scrollingSpeed:800,
			 //loopHorizontal:true, // 控制水平幻灯片是否循环播放
			 //controlArrows:true, // 是否通过箭头来控制幻灯片的切换
			 autoScrolling:true, // 是否使用插件的滚动方式（按页滚动） → 值为false时 ，将是浏览器自己滚动条的滚动方式
             /*scrollBar:true, *///是否显示浏览器滚动条 
			 /*loopTop:true,*/  // 是否在到达页面顶部时跳转到底部进行循环
			 /*loopBottom:true */  // 是否在到达底部是跳转到页面顶部时跳转到顶部进行循环
			 /*paddingTop:20, */// 设置每个section的顶部内边距 (不加单位) 
			 fixedElements:'#userMenu', // 设置位置固定的元素，比如说导航菜单（默认值为null，需要配合jQuery选择器一起使用）
			 // ※  多个固定元素的情况下，用逗号隔开
			 /*continuousVertical:true, */// 页面是否循环滚动 → 不会像loopTop 和 loopBottom属性那样出现跳动
			 // ※ 注意使用这个属性时，scrollBar属性值一定要设置为false
			 menu:'#userMenu',
			 scrollOverflow:true, // 内容超过满屏时是否显示滚动条（需要配合jQuery.slimscroll插件一起使用
			 resize:true
		});
	    
/*	    function autoScrolling(){
			var s_w=$(window).width();
			if(s_w<1024){
				$.fn.fullpage.setAutoScrolling(false);
			}else
				{
					$.fn.fullpage.setAutoScrolling(true);
				}
		}
		autoScrolling();*/

	});