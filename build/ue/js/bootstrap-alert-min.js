/*! Generated by Clam: tools 2014-01-20 04:14:52 */
!function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){d.trigger("closed").remove()}var d,e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,"")),d=a(f),b&&b.preventDefault(),d.length||(d=e.hasClass("alert")?e:e.parent()),d.trigger(b=a.Event("close")),b.isDefaultPrevented()||(d.removeClass("in"),a.support.transition&&d.hasClass("fade")?d.on(a.support.transition.end,c):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.alert.data-api",b,c.prototype.close)}(window.jQuery);