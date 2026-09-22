/*!  Douglass.cn | (c) 2011, 2020 BC network technology co., LTD | QQ: 156890583  */
$(document).ready(function(){
	$.fn.scroll_({arrows:false,mouseWheelSpeed: 30,verticalGutter:15});
	setTimeout(function(){
			$('#Introduction .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})	
			$("#Introduction .Tab").floatlines()
		},150)
		
	if ($("#newsBanner").length>0)
		{
			$("#newsBanner").ZHYslider({
					fullscreen	:false,
					arrow		:true,		
					speed: 1200, 
					space: 6000,
					auto: true, //自动滚动
					affect:'fade',
					ctag: '.Slide_'
			})
		}		
		
	$("#Floatingbar").Floatingbar();
	$("#ZhiYe").ZhiYe();
	$("#photoGundong").jcarousellite_gundong({btn:1,list:".PictureList li","visible":1,"auto":5500,"speed":700});
	$("#mainMenu").menu();
	$.fn.hovers();
	
	
	

})
//侧栏菜单
$.fn.menu=function(){
	var self	=	this;
	if (self.length==0){return;}
	var $btn_sq	=	self.find("._btn_showhidden");
	$("body").on("click",$btn_sq.selector,function(){
		var text	=	$(this).text();
		if (text.indexOf("收起")!=-1){
			$(this).text("展开 <")	
			self.animate({"right":"-270px"},300)
		}else{
			$(this).text("收起 >")	
			self.animate({"right":"0"},300)
		}
		
		
	});
	
	
}
//滚动条
$.fn.scroll_=function(config){
	var scrollobj=$("[data-scroll]");
	if (scrollobj.length==0) {return;}
	scrollobj.each(function(index, element) {
			var self		=	$(this),
				parentobj	=	self.parent(),
				parent_h	=	0,
				parent_w	=	0;
			if (self.length==0){return;}
			
			var h		=	self.attr("data-scroll-height"),
				w		=	self.attr("data-scroll-width"),
				bfb		=		0,
				color=self.attr("data-scroll-color");
				
				if (h.indexOf("%")!=-1){
					h	=	parseInt(h);
					parent_h	=	parentobj.outerHeight();
					h			=	parent_h*(h/100);
				} else {
					h	=	parseInt(h);
				}
				
				
				if (w.indexOf("%")!=-1){
					w	=	parseInt(w);
					
					parent_w	=	parentobj.outerWidth();
					w			=	parent_w*(w/100)-30;
				} else {
					w	=	parseInt(w);
				}
				
				self.css({"width":"100%"}).wrap('<div class="container1" style="width:'+w+'px"></div>').wrap('<div class="div_scroll"></div>');
				self.parents('.div_scroll').css({height:h}).scroll_absolute(config)	;
				self.find("img").load(function(){self.parents('.div_scroll').scroll_absolute(config);})
			
			if (typeof(color)!="undefined")
			{setTimeout(function(){self.parents(".container1").find(".scroll_drag").css({"background":color})},500);}
	});
};

//滚动
		$.fn.jcarousellite_gundong=function(options ){
			var self=$(this);
			if (self.length===0){return;}
			
			var items		=	options.list,
				liobj		=	self.find(items),
				liobj_parent=	liobj.parent(),
				liobj_len	=	liobj.length,
				config;
			
			if (liobj_len	<=	options.visible) {
				self.css({"margin":"0 auto","width":liobj_parent.outerWidth()})
				return;	
			}	else{
				var  width	=	liobj.outerWidth(),
					 margin	=	parseInt(liobj.css("margin-left"))+parseInt(liobj.css("margin-right")),
					 liwidth=	width+margin;
					 
				self.css({"overflow":"visible","margin-left":"auto","margin-right":"auto","width":liwidth*options.visible})
			}
			
			
			if (liobj.is("div")){
				liobj.wrap("<li></li>");
				self.find("li").wrapAll("<ul class='templist'></ul>");		
				liobj	=	self.find(".templist li");
				self.find(".templist").wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
			} else {
				liobj_parent.wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
			}
			
			
			if (options.btn!==0){
				if (!options.circular){
				self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left" ><span></span></a>');
				}else{
				self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left disabled" ><span></span></a>');
				}
			}
			
			self.find(".gundong").each(function(index){
				var myself	=	$(this);
				config={
							btnPrev:myself.find(".move_left"),
							btnNext: myself.find(".move_right"),
							visible:1,
							auto: 2500 ,
							speed: 300
						};
				if (options.btn===0){$.extend(config, {btnPrev:null,btnNext:null});}
				$.extend(config, options);
				myself.find(".jCarouselLite:eq("+index+")").jCarouselLite(config);	
			})
		}

//悬停效果
$.fn.hovers=function(){
	
	
	
		$(".PictureList li").hover_animate(
				{
				  aniobj:
				  [
					  
					   [
						  ".photo img",					//应用对象
						  "",//初始CSS
						  "width:110%;height:110%;margin-left:-5%;margin-top:-5%;opacity:1;",		//mouseenter动画CSS
						  "width:100%;height:100%;margin-left:0;margin-top:0;opacity:0.85;",			//mouseleave动画css
						  "1200",					//mouseenter 时间
						  "800"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
	
		$(".itemlist li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "._bg",					//应用对象
						  "",//初始CSS
						  "height:100%;",		//mouseenter动画CSS
						  "height:0%;",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					   [
						  ".photo img",					//应用对象
						  "",//初始CSS
						  "top:-30px;left:-30px;",		//mouseenter动画CSS
						  "top:-58px;left:-56px;",			//mouseleave动画css
						  "200",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ],
				  "set_class":"hover_item"
				}
				
			)
	
		
		/*菜单悬停*/
		$("#menu ul li").hover_animate(
				{
				  aniobj:
				  [
					 
					   [
						  "strong",					//应用对象
						  "",//初始CSS
						  "bottom:-18px;",		//mouseenter动画CSS
						  "bottom:0;",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
						  ,0
						  ,100
					  ],
					   [
						  "span",					//应用对象
						  "",//初始CSS
						  "top:-30px;",		//mouseenter动画CSS
						  "top:0;",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
						  ,0
						  ,100
					  ],
					   [
						  "._line",					//应用对象
						  "display:block;top:0;",//初始CSS
						  "height:100%;",		//mouseenter动画CSS
						  "height:0;top:0;",			//mouseleave动画css
						  "{duration:200,easing:'easeInCirc'}",					//mouseenter 时间
						  "200"						//mouseleave 时间
						  ,0
						  ,300
					  ],
					   [
						  "._bomline",					//应用对象
						  "display:block;height:0px;",//初始CSS
						  "height:7px;",		//mouseenter动画CSS
						  "height:0px;",			//mouseleave动画css
						  "{duration:800,easing:'easeOutElastic'}",					//mouseenter 时间
						  "300"						//mouseleave 时间
						  ,200
					  ]
				  ],
				  set_class:"hover_"
				}
				
			)
	

			$(".itemlist2 li").append("<span class='_bg01'></span><span class='_bg02'></span>")
			$(".itemlist2 li").hover_animate(
				{
				  aniobj:
				  [
					  
					 [
						  "._bg01",					//应用对象
						  "",//初始CSS
						  "height:125px;",		//mouseenter动画CSS
						  "height:0px;",			//mouseleave动画css
						  "{duration:800,easing:'easeOutExpo'}",					//mouseenter 时间
						  "300"	
					  ],  [
						  "._bg02",					//应用对象
						  "",//初始CSS
						  "height:105px;",		//mouseenter动画CSS
						  "height:0px;",			//mouseleave动画css
						  "{duration:800,easing:'easeOutExpo'}",					//mouseenter 时间
						  "300"	
					  ],  [
						  "._btn_more",					//应用对象
						  "",//初始CSS
						  "margin-left:30;",		//mouseenter动画CSS
						  "margin-left:-19px;",			//mouseleave动画css
						  "{duration:1300,easing:'easeOutExpo'}",					//mouseenter 时间
						  "300"	
					  ],  [
						  ".text",					//应用对象
						  "",//初始CSS
						  "margin-left:15px;",		//mouseenter动画CSS
						  "margin-left:0px;",			//mouseleave动画css
						  "{duration:1300,easing:'easeOutExpo'}",					//mouseenter 时间
						  "300"	
					  ], 
					  [
						  "img",					//应用对象
						  "",//初始CSS
						  "width:120%;height:120%;margin-left:-10%;margin-top:-10%;",		//mouseenter动画CSS
						  "width:100%;height:100%;margin-left:0%;margin-top:0%;",			//mouseleave动画css
						  "700",					//mouseenter 时间
						  "600"						//mouseleave 时间
					  ]
				  ],
				  "set_class":"hover_"
				}
				
			)
	
}
//职业切换
$.fn.ZhiYe=function(){
	var obj=this
	if (obj.length==0) return false;
	var navobj	=	obj.find("#ZhiYeTab"),
		$btn_prev=	obj.find(".btn_prev"),
		$btn_next=	obj.find(".btn_next"),
		boxobj	=	obj.find(".ZhiyeBox"),
		autoplay	=	null;
		
		
		obj.hover(function(){
			
			clearInterval(autoplay);
			
		},function(){
				autoplay	=	setInterval(function(){
					$btn_next.trigger("click");
				},9000)
			
		})
		
	autoplay	=	setInterval(function(){
		$btn_next.trigger("click");
	},5000)
	if (navobj.find("li.change").length==0) 
	{
		navobj.find("li:first").addClass("change");		
		var index	=	navobj.find("li.change").index();
	}
	$("body").on("click",$btn_prev.selector,function(){
		var $change	=	navobj.find("li.change")
		if ($change.is(":first-child") ){
			navobj.find("li:last-child").trigger("click");
		}else {
			$change.prev().trigger("click");
		}
	});
	
	$("body").on("click",$btn_next.selector,function(){
		var $change	=	navobj.find("li.change")
		if ($change.is(":last-child") ){
			navobj.find("li:eq(0)").trigger("click");
		}else {
			$change.next().trigger("click");
		}
	});
	
	obj.find(".ZhiyeBox:eq("+navobj.find("li.change").index()+")").fadeIn()
	navobj.find("li").bind("click",function(){
		if ($(this).is(".change")) return false;
		
		//已加载的
		var index2		=	$(this).siblings(".change").index(),
			$showobj	=	obj.find(".ZhiyeBox:eq("+index2+")"),
			$showpic	=	$showobj.find(".zy01"),
			$showpic2	=	$showobj.find(".zy02"),
			$showpic3	=	$showobj.find(".zy03"),
			$showtxt	=	$showobj.find(".text"),
			$border		=	$showobj.find(".ZhiyeBoxbg"),
			$border2	=	$showobj.find(".ZhiyeBoxbg2");
		$(this).addClass("change").siblings().removeClass("change");
		//等待加载的
		var index		=	$(this).index(),
			 $hideobj		=	obj.find(".ZhiyeBox:eq("+index+")"),
			 $hidepic	=	$hideobj.find(".zy01"),
			 $hidepic2	=	$hideobj.find(".zy02"),
			 $hidepic3	=	$hideobj.find(".zy03"),
			 $hidetext	=	$hideobj.find(".text")
			 $border_	=	$hideobj.find(".ZhiyeBoxbg")
			 $border2_	=	$hideobj.find(".ZhiyeBoxbg2")
			 
			  var outplay=[
				function(){
					
					$border.css({"opacity":0.4,"bottom":"10%"}).animate({"opacity":"0","right":0,"top":'70%',"bottom":"0","left":0},{duration:1200,easing:'easeInOutBack'});
					$border2.delay(200).css({"opacity":0.4,"bottom":"10%"}).animate({"opacity":"0","right":0,"top":'70%',"bottom":"4%","left":0},{duration:1200,easing:'easeInOutBack'});
					$showpic.delay(400).animate({"opacity":"0","left":"-815px"},{duration:300,easing:'easeInCirc'});
					$showpic2.delay(400).animate({"opacity":"0","left":"-815px"},{duration:500,easing:'easeInCirc'});
					$showpic3.delay(400).animate({"opacity":"0","left":"-815px"},{duration:600,easing:'easeInCirc'});
					$showtxt.delay(400).animate({"opacity":"0","left":"1515px"},{duration:300,easing:'easeInCirc'});
					$showobj.delay(400).animate({"opacity":"0"},500,function(){})
					setTimeout(function(){plays()},1300)
				},
				function()
				{
					
							 $border_.css({"opacity":"0.2","top":'70%',right:"0",bottom:"0",left:"0"}).animate({"opacity":"0","right":"50%","top":"80%","bottom":"10%","left":"50%"},400);
							 $border2_.delay(200).css({"opacity":"0.2","top":'70%',right:"0",bottom:"0",left:"0"}).animate({"opacity":"0","right":"50%","top":"80%","bottom":"10%","left":"50%"},400);
							 $hidepic.css({"display":"block","opacity":"0","left":"34px","top":"-100px"}).animate({"opacity":"0.2","top":"85px"},{duration:200,easing:'easeOutCirc'})
							 $hidepic2.css({"display":"block","opacity":"0","left":"34px","top":"-100px"}).animate({"opacity":"0.3","top":"85px"},{duration:600,easing:'easeOutCirc'})
							 $hidepic3.css({"display":"block","opacity":"0","left":"34px","top":"-100px"}).animate({"opacity":"0.5","top":"85px"},{duration:200,easing:'easeOutCirc'})
							 
							 $hidetext.css({"display":"block","opacity":"0","left":"1515px"}).animate({"opacity":"1","left":"715px"},{duration:300,easing:'easeOutCirc'})
							 $hideobj.css({"display":"block","opacity":"0"}).animate({"opacity":"1"},400,function(){})
				}
			 ]
				
			obj.queue("playlist01",outplay)	
			var plays=function(){obj.dequeue("playlist01")}
			plays()
		return false;	
		
	})
	
}



$.fn.hover_animate=function(obj){var time_delay=null,runlist=[],runlist_end=[],create_var=[],set_var=[],self=$(this);if(self.length===0||obj.aniobj.length===0){return}if(obj.set_class===""||typeof(obj.set_class)==="undefined"){$.extend(obj,{set_class:"hover"})}if(typeof(obj.delaytime)!=="number"||typeof(obj.delaytime)==="undefined"){$.extend(obj,{delaytime:100})}var fn={csschange:function(val){val=$.trim(val);if(val===""){return""}if(val.indexOf("{")<0||val.indexOf("}")<0){val=$.trim(val);var last_fh=val.lastIndexOf(";");if(last_fh+1===val.length){val=val.substring(0,last_fh);val="{'"+val.replace(/\:/g,"':'").replace(/\;/g,"','")+"'}"}else{val="{'"+val.replace(/\:/g,"':'").replace(/\;/g,"','")+"'}"}}return $.trim(val)}};$.each(obj.aniobj,function(index,val){if(val.length<6){return}var setobj=val[0],setobj_=setobj.replace(/\.|\ |\>/g,""),animate_css=fn.csschange(val[1]),animate_start=fn.csschange(val[2]),animate_end=fn.csschange(val[3]),animate_easing=val[4],animate_easing2=val[5],animate_delay=val[6],animate_delay2=val[7],animate_css_end=val[8],run="",run_end="";if(typeof(animate_delay)==="undefined"){animate_delay=0}if(typeof(animate_delay2)==="undefined"){animate_delay2=0}if(animate_css!==""){animate_css_=".css("+animate_css+")"}else{animate_css_=""}if(setobj===""){return}create_var.push("var _"+setobj_+"");if(setobj==="self"){set_var.push("_"+setobj_+"=[self]")}else{set_var.push("_"+setobj_+'=[self].find("'+setobj+'")')}if(animate_start!==""){run="_"+setobj_+animate_css_+".stop(true,false).delay("+animate_delay+").animate("+animate_start+","+animate_easing+")"}else{run="_"+setobj_+animate_css}if(animate_css_!==""||animate_start!==""){runlist.push(run)}if(animate_end!==""){if(typeof(animate_css)!="undefined"&&animate_css!=""&&animate_css.indexOf("display:block;")){if(animate_easing.indexOf("easing")==-1){run_end="_"+setobj_+".stop(true,false).delay("+animate_delay2+").animate("+animate_end+","+animate_easing2+",function(){$(this).css({'display':'none'});})"}else{run_end="_"+setobj_+".stop(true,false).delay("+animate_delay2+").animate("+animate_end+","+animate_easing2+")"}}else{run_end="_"+setobj_+".stop(true,false).delay("+animate_delay2+").animate("+animate_end+","+animate_easing2+")"}runlist_end.push(run_end)}});var selfobj=null;self.off(".s");$.each(create_var,function(index,val){eval(val)});self.on("mouseenter.s",function(){selfobj=$(this);$.each(set_var,function(index,val){eval(val.replace("[self]","selfobj"))});clearTimeout(time_delay);time_delay=setTimeout(function(){if(!selfobj.is(":animated")){selfobj.addClass(obj.set_class);$.each(runlist,function(index,val){eval(val)})}},obj.delaytime)}).on("mouseleave.s",function(){clearTimeout(time_delay);if(selfobj.is("."+obj.set_class)){$.each(runlist_end,function(index,val){eval(val)});selfobj.removeClass(obj.set_class)}})};

//浮动条
$.fn.Floatingbar	=	function(){
	var obj=$(this)
	if (obj.length==0) return false;
	
	//返回顶部
	$("body").on("click",obj.find(".btn_backtop").selector,function(){
		
		$("html,body").animate({scrollTop:0},1000);
		return false;
	});
	
	$("body").on("click",obj.find(".btn_openhide").selector,function(){
		var txt	=	$(this).text();
			if (txt.indexOf("收起")!=-1){
				$(this).text("展开<");
				obj.stop(true,false).animate({"right":"-133px"},300)
			}else{
				
				$(this).text("收起>");	
				obj.stop(true,false).animate({"right":"0"},300)
			}
		return false;
	});	
};
//浮动线条
	$.fn.floatlines=function(){
		var obj			=	$(this),
			times		=	300,
			delaytime	=	null;
		if (obj.length===0){return;}
			obj.css("position","relative");
			
			
		obj.each(function(index, element) {
			var tab_obj		=	$(this),
			 	li			=	tab_obj.find("li.change");
				
			if (li.length>0)
			{
				tab_obj.find("li:last-child").after("<span class='lines'></span>");
				
				var width	=	li.outerWidth(),
					lileft	=	li.position().left+parseInt(li.css("margin-left")),
					lineobj	=	tab_obj.find(".lines");
					
					lineobj.css({"width":width,"left":lileft});
				
					tab_obj.find("li")
					.bind("mouseenter",function(){
						
							clearTimeout(delaytime)
							var myself		=	$(this),
								thiswidth	=	myself.outerWidth(),
								left		=	myself.position().left+parseInt(myself.css("margin-left"));
								lineobj.stop(true,false).animate({"width":thiswidth,"left":left},times);
					})
					.bind("mouseleave",function(){
						var myself		=	$(this);
							delaytime=setTimeout(function(){
									if (!myself.is(".change"))
									{
									var changeobj	=	myself.siblings(".change"),
										 left		=	changeobj.css("position","static").position().left+parseInt(changeobj.css("margin-left")),
										 width		=	changeobj.outerWidth();
										 lineobj.stop(true,false).animate({"width":width,"left":left},times);
									}
									
							
							},200)
					})
					
				
			}
		});	
	}
//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this);
			var select_=0;
			var classname=config.labselect.replace(".","")
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			
			
			self.each(function(index, element) {
							
				self=$(this);
						
						if (self.find(config.labselect).length==0) 
						{self.find(config.lilab+":eq(0)").addClass(classname);}
						self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{
								self.siblings(config.Tabname+":eq("+index+")").hide();
							}
						});
						
						self.find(config.lilab).bind(config.labaction+".action",function(){
							
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated")){ 
							return false;
							
							}

							
							if ($(this).is(config.labselect)) return false;
							var index2=$(this).siblings(config.labselect).index()
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
						})
						
						config.animate=function(index,index2,active){
							
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{
										dr="100%";
										dr2="-100%"
									}
									else
									{
										dr="-100%";
										dr2="100%"
									}
									var top=selfs.position().top
									
									
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
														
												})
									},config.animateTime)		
								
									}
									
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
									
									
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								
								
								case "none":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").show();
								break;	
								
							}
							
							
						}


            });

		}

jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});