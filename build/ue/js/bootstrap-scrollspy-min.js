/*! Generated by Clam: tools 2014-01-20 04:44:25 */
!function(a){"use strict";function b(b,c){var d,e=a.proxy(this.process,this),f=a(a(b).is("body")?window:b);this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=f.on("scroll.scroll-spy.data-api",e),this.selector=(this.options.target||(d=a(b).attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}b.prototype={constructor:b,refresh:function(){var b,c=this;this.offsets=a([]),this.targets=a([]),b=this.$body.find(this.selector).map(function(){var b=a(this),d=b.data("target")||b.attr("href"),e=/^#\w/.test(d)&&a(d);return e&&e.length&&[[e.position().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},process:function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f="object"==typeof c&&c;e||d.data("scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery);