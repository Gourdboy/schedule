/*! Generated by Clam: tools 2014-02-26 04:52:45 */
var Holder=Holder||{};!function(a,b){function c(a,b){var c="complete",d="readystatechange",e=!1,f=e,g=!0,h=a.document,i=h.documentElement,j=h.addEventListener?"addEventListener":"attachEvent",k=h.addEventListener?"removeEventListener":"detachEvent",l=h.addEventListener?"":"on",m=function(g){(g.type!=d||h.readyState==c)&&(("load"==g.type?a:h)[k](l+g.type,m,e),!f&&(f=!0)&&b.call(a,null))},n=function(){try{i.doScroll("left")}catch(a){return void setTimeout(n,50)}m("poll")};if(h.readyState==c)b.call(a,"lazy");else{if(h.createEventObject&&i.doScroll){try{g=!a.frameElement}catch(o){}g&&n()}h[j](l+"DOMContentLoaded",m,e),h[j](l+d,m,e),a[j](l+"load",m,e)}}function d(a){a=a.match(/^(\W)?(.*)/);var b=document["getElement"+(a[1]?"#"==a[1]?"ById":"sByClassName":"sByTagName")](a[2]),c=[];return null!=b&&(c=b.length?b:0==b.length?b:[b]),c}function e(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c}function f(a,b,c){var d=[b,a].sort(),e=Math.round(d[1]/16),f=(Math.round(d[0]/16),Math.max(c.size,e));return{height:f}}function g(a,b,c,d){var e=f(b.width,b.height,c),g=e.height,h=b.width*d,i=b.height*d,j=c.font?c.font:"sans-serif";p.width=h,p.height=i,a.textAlign="center",a.textBaseline="middle",a.fillStyle=c.background,a.fillRect(0,0,h,i),a.fillStyle=c.foreground,a.font="bold "+g+"px "+j;var k=c.text?c.text:b.width+"x"+b.height;return a.measureText(k).width/h>1&&(g=c.size/(a.measureText(k).width/h)),a.font="bold "+g*d+"px "+j,a.fillText(k,h/2,i/2,h),p.toDataURL("image/png")}function h(a,b,c,d){var f=c.dimensions,h=c.theme,i=c.text?decodeURIComponent(c.text):c.text,j=f.width+"x"+f.height;h=i?e(h,{text:i}):h,h=c.font?e(h,{font:c.font}):h;var k=1;window.devicePixelRatio&&window.devicePixelRatio>1&&(k=window.devicePixelRatio),"image"==a?(b.setAttribute("data-src",d),b.setAttribute("alt",i?i:h.text?h.text+" ["+j+"]":j),(o||!c.auto)&&(b.style.width=f.width+"px",b.style.height=f.height+"px"),o?b.style.backgroundColor=h.background:b.setAttribute("src",g(q,f,h,k))):o||(b.style.backgroundImage="url("+g(q,f,h,k)+")",b.style.backgroundSize=f.width+"px "+f.height+"px")}function k(a,b){var c=b.dimensions,d=b.theme,f=b.text,g=c.width+"x"+c.height;d=f?e(d,{text:f}):d;var h=document.createElement("div");h.style.backgroundColor=d.background,h.style.color=d.foreground,h.className=a.className+" holderjs-fluid",h.style.width=b.dimensions.width+(b.dimensions.width.indexOf("%")>0?"":"px"),h.style.height=b.dimensions.height+(b.dimensions.height.indexOf("%")>0?"":"px"),h.id=a.id,a.style.width=0,a.style.height=0,d.text?h.appendChild(document.createTextNode(d.text)):(h.appendChild(document.createTextNode(g)),r.push(h),setTimeout(l,0)),a.parentNode.insertBefore(h,a.nextSibling),window.jQuery&&jQuery(function(b){b(a).on("load",function(){a.style.width=h.style.width,a.style.height=h.style.height,b(a).show(),b(h).remove()})})}function l(){for(i in r)if(r.hasOwnProperty(i)){var a=r[i],b=a.firstChild;a.style.lineHeight=a.offsetHeight+"px",b.data=a.offsetWidth+"x"+a.offsetHeight}}function m(b,c){var d={theme:s.themes.gray},e=!1;for(sl=b.length,j=0;sl>j;j++){var f=b[j];a.flags.dimensions.match(f)?(e=!0,d.dimensions=a.flags.dimensions.output(f)):a.flags.fluid.match(f)?(e=!0,d.dimensions=a.flags.fluid.output(f),d.fluid=!0):a.flags.colors.match(f)?d.theme=a.flags.colors.output(f):c.themes[f]?d.theme=c.themes[f]:a.flags.text.match(f)?d.text=a.flags.text.output(f):a.flags.font.match(f)?d.font=a.flags.font.output(f):a.flags.auto.match(f)&&(d.auto=!0)}return e?d:!1}var n=!1,o=!1,p=document.createElement("canvas");if(document.getElementsByClassName||(document.getElementsByClassName=function(a){var b,c,d,e=document,f=[];if(e.querySelectorAll)return e.querySelectorAll("."+a);if(e.evaluate)for(c=".//*[contains(concat(' ', @class, ' '), ' "+a+" ')]",b=e.evaluate(c,e,null,0,null);d=b.iterateNext();)f.push(d);else for(b=e.getElementsByTagName("*"),c=new RegExp("(^|\\s)"+a+"(\\s|$)"),d=0;d<b.length;d++)c.test(b[d].className)&&f.push(b[d]);return f}),window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"==b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this}),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(a){var b=this.__proto__||this.constructor.prototype;return a in this&&(!(a in b)||b[a]!==this[a])}),p.getContext)if(p.toDataURL("image/png").indexOf("data:image/png")<0)o=!0;else var q=p.getContext("2d");else o=!0;var r=[],s={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12}},stylesheet:".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"};a.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(a){var b=this.regex.exec(a);return{width:+b[1],height:+b[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(a){var b=this.regex.exec(a);return{width:b[1],height:b[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(a){var b=this.regex.exec(a);return{size:s.themes.gray.size,foreground:"#"+b[2],background:"#"+b[1]}}},text:{regex:/text\:(.*)/,output:function(a){return this.regex.exec(a)[1]}},font:{regex:/font\:(.*)/,output:function(a){return this.regex.exec(a)[1]}},auto:{regex:/^auto$/}};for(var t in a.flags)a.flags.hasOwnProperty(t)&&(a.flags[t].match=function(a){return a.match(this.regex)});a.add_theme=function(b,c){return null!=b&&null!=c&&(s.themes[b]=c),a},a.add_image=function(b,c){var e=d(c);if(e.length)for(var f=0,g=e.length;g>f;f++){var h=document.createElement("img");h.setAttribute("data-src",b),e[f].appendChild(h)}return a},a.run=function(b){var c=e(s,b),f=[];for(imageNodes=c.images instanceof window.NodeList?c.images:c.images instanceof window.Node?[c.images]:d(c.images),bgnodes=c.elements instanceof window.NodeList?c.bgnodes:c.bgnodes instanceof window.Node?[c.bgnodes]:d(c.bgnodes),n=!0,l=0,j=imageNodes.length;j>l;l++)f.push(imageNodes[l]);var g=document.getElementById("holderjs-style");g||(g=document.createElement("style"),g.setAttribute("id","holderjs-style"),g.type="text/css",document.getElementsByTagName("head")[0].appendChild(g)),g.styleSheet?g.styleSheet+=c.stylesheet:g.textContent+=c.stylesheet;for(var i=new RegExp(c.domain+'/(.*?)"?\\)'),j=bgnodes.length,l=0;j>l;l++){var o=window.getComputedStyle(bgnodes[l],null).getPropertyValue("background-image"),p=o.match(i);if(p){var q=m(p[1].split("/"),c);q&&h("background",bgnodes[l],q,o)}}for(var j=f.length,l=0;j>l;l++){var o=f[l].getAttribute("src")||f[l].getAttribute("data-src");if(null!=o&&o.indexOf(c.domain)>=0){var q=m(o.substr(o.lastIndexOf(c.domain)+c.domain.length+1).split("/"),c);q&&(q.fluid?k(f[l],q,o):h("image",f[l],q,o))}}return a},c(b,function(){window.addEventListener?(window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)):window.attachEvent("onresize",l),n||a.run()}),"function"==typeof define&&define.amd&&define("Holder",[],function(){return a})}(Holder,window);