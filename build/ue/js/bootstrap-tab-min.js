/*! Generated by Clam: tools 2014-01-21 02:21:28 */
!function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b,c,d,e=this.element,f=e.closest("ul:not(.dropdown-menu)"),g=e.attr("data-target");g||(g=e.attr("href"),g=g&&g.replace(/.*(?=#[^\s]*$)/,"")),e.parent("li").hasClass("active")||(b=f.find(".active:last a")[0],d=a.Event("show",{relatedTarget:b}),e.trigger(d),d.isDefaultPrevented()||(c=a(g),this.activate(e.parent("li"),f),this.activate(c,c.parent(),function(){e.trigger({type:"shown",relatedTarget:b})})))},activate:function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e):e(),f.removeClass("in")}};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery);