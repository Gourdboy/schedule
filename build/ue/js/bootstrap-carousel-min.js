/*! Generated by Clam: tools 2014-02-26 04:57:20 */
!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(b){var c=this.getActiveIndex(),d=this;if(!(b>this.$items.length-1||0>b))return this.sliding?this.$element.one("slid",function(){d.to(b)}):c==b?this.pause().cycle():this.slide(b>c?"next":"prev",a(this.$items[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(b,c){var d,e=this.$element.find(".item.active"),f=c||e[b](),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(this.sliding=!0,g&&this.pause(),f=f.length?f:this.$element.find(".item")[i](),d=a.Event("slide",{relatedTarget:f[0],direction:h}),!f.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(j.$indicators.children()[j.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(d),d.isDefaultPrevented())return;f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),this.$element.one(a.support.transition.end,function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger("slid")},0)})}else{if(this.$element.trigger(d),d.isDefaultPrevented())return;e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return g&&this.cycle(),this}}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d,e=a(this),f=a(e.attr("data-target")||(c=e.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),g=a.extend({},f.data(),e.data());f.carousel(g),(d=e.attr("data-slide-to"))&&f.data("carousel").pause().to(d).cycle(),b.preventDefault()})}(window.jQuery);