$(document).ready(function(){function t(t){this.el=$(t.el),this.status=$.extend({},{init:{width:"100%",opacity:1,transform:"rotate(0deg)",top:0,left:0}},t.status),this.init=function(){this.transform("init")},this.arrow=function(){this.transform("arrow")},this.close=function(){this.transform("close")},this.transform=function(t){this.el.css(this.status[t])}}function i(){var t=$("#footer").attr("position")?$(".container").height()+$("#footer").outerHeight(!0):$(".container").height();t<window.innerHeight?$("#footer").css({position:"fixed",bottom:0,left:0,right:0}).attr("position","fixed"):$("#footer").removeAttr("style position")}var e={lines:[],push:function(t){this.lines.push(t)},init:function(){this.lines.forEach(function(t){t.init()})},arrow:function(){this.lines.forEach(function(t){t.arrow()})},close:function(){this.lines.forEach(function(t){t.close()})}},s="left"!==CONFIG.sidebar.position,o=new t({el:".sidebar-toggle-line-first",status:s?{arrow:{width:"50%",transform:"rotate(-45deg)",top:"2px"},close:{width:"100%",transform:"rotate(-45deg)",top:"5px"}}:{arrow:{width:"50%",transform:"rotate(45deg)",top:"2px",left:"50%"},close:{width:"100%",transform:"rotate(-45deg)",top:"5px",left:"0px"}}}),n=new t({el:".sidebar-toggle-line-middle",status:s?{arrow:{width:"90%"},close:{opacity:0}}:{arrow:{width:"90%",left:"2px"},close:{opacity:0,left:"0px"}}}),a=new t({el:".sidebar-toggle-line-last",status:s?{arrow:{width:"50%",transform:"rotate(45deg)",top:"-2px"},close:{width:"100%",transform:"rotate(45deg)",top:"-5px"}}:{arrow:{width:"50%",transform:"rotate(-45deg)",top:"-2px",left:"50%"},close:{width:"100%",transform:"rotate(45deg)",top:"-5px",left:"0px"}}});e.push(o),e.push(n),e.push(a);var r=CONFIG.sidebar.width||"320px",d=200,l={},h={},c={sidebarEl:$(".sidebar"),isSidebarVisible:!1,init:function(){e.init(),$("body").on("mousedown",this.mousedownHandler.bind(this)).on("mouseup",this.mouseupHandler.bind(this)),$("#sidebar-dimmer").on("click",this.clickHandler.bind(this)),$(".sidebar-toggle").on("click",this.clickHandler.bind(this)).on("mouseenter",this.mouseEnterHandler.bind(this)).on("mouseleave",this.mouseLeaveHandler.bind(this)),this.sidebarEl.on("touchstart",this.touchstartHandler.bind(this)).on("touchend",this.touchendHandler.bind(this)).on("touchmove",function(t){t.preventDefault()}),$(document).on("sidebar.isShowing",function(){NexT.utils.isDesktop()&&$("body").stop().animate(s?{"padding-right":r}:{"padding-left":r},d)})},mousedownHandler:function(t){l.X=t.pageX,l.Y=t.pageY},mouseupHandler:function(t){var i=t.pageX-l.X,e=t.pageY-l.Y;this.isSidebarVisible&&Math.sqrt(i*i+e*e)<20&&$(t.target).is(".main")&&this.clickHandler()},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar(),this.isSidebarVisible=!this.isSidebarVisible},mouseEnterHandler:function(){this.isSidebarVisible||e.arrow()},mouseLeaveHandler:function(){this.isSidebarVisible||e.init()},touchstartHandler:function(t){h.X=t.originalEvent.touches[0].clientX,h.Y=t.originalEvent.touches[0].clientY},touchendHandler:function(t){var i=t.originalEvent.changedTouches[0].clientX-h.X,e=t.originalEvent.changedTouches[0].clientY-h.Y;Math.abs(e)<20&&(i>30&&s||-30>i&&!s)&&this.clickHandler()},showSidebar:function(){var t=this;e.close(),$.isFunction($("html").velocity)?this.sidebarEl.stop().velocity({width:r},{display:"block",duration:d,begin:function(){$(".sidebar .motion-element").not(".site-state").velocity(s?"transition.slideRightIn":"transition.slideLeftIn",{stagger:50,drag:!0}),$(".site-state").velocity(s?"transition.slideRightIn":"transition.slideLeftIn",{stagger:50,drag:!0,display:"flex"})},complete:function(){t.sidebarEl.addClass("sidebar-active")}}):($(".sidebar .motion-element").show(),this.sidebarEl.stop().animate({width:r,display:"block"},d,function(){t.sidebarEl.addClass("sidebar-active")})),this.sidebarEl.trigger("sidebar.isShowing")},hideSidebar:function(){NexT.utils.isDesktop()&&$("body").stop().animate(s?{"padding-right":0}:{"padding-left":0}),this.sidebarEl.find(".motion-element").hide(),this.sidebarEl.stop().animate({width:0,display:"none"}).removeClass("sidebar-active"),e.init(),$(".post-toc-wrap")&&("block"===$(".site-overview-wrap").css("display")?$(".post-toc-wrap").removeClass("motion-element"):$(".post-toc-wrap").addClass("motion-element"))}};c.init(),i(),$(window).on("resize scroll",i)});