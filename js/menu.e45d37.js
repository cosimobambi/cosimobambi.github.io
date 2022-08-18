var registerMenuClass,initMenu;function MenuItem(){this.parent=void 0,this.element=void 0,this.data=void 0}function Menu(){this.items=new Array}!function(){var t=$,e=/chrome/i.test(navigator.userAgent),n=/firefox/i.test(navigator.userAgent),i={},r=void 0,a=!1,u=!1,o=!1,s=function(e){if(menuData=h(e),null==menuData)return!1;var n=menuData.items,i=function(t){var e=null!=t&&null!=t.menuClass?t.menuClass:"Menu";return new window[e]}(menuData),r=t(e).parent(),a=t(r)[0].itemData;null!=a&&(a.subMenu=i),i.setData(menuData,e);var u=!0;return t(e).children("li").each(function(){var e=function(t){var e=null!=t&&null!=t.menuItemClass?t.menuItemClass:"MenuItem";return new window[e]}(n);e.setData(n,this),i.items.push(e),t(this).children("ul").each(function(){s(this)||(u=!1)}),e.addEvents()}),i.addEvents(),u},l=function(e){t(e).each(function(){var e=t(this)[0].itemData;null!=e&&(null!=e.subMenu&&t(this).children("ul").each(function(){l(t(this).children())}),"none"!=t(this).children().first().css("display")&&e.animate("hover_out"),e.restore(),e.open=!1,e.autoHoverOut=void 0)})},h=function(e){var n=void 0,i=t(e).attr("class").split(/\s+/);return t.each(i,function(t,e){if(null!=(n=p(e)))return!1}),n},p=function(t){return i[t]},d=function(e){t(e).each(function(){"none"==t(this).css("display")&&t(this).css("display","block")}),null==d.id&&(d.id=0),++d.id,t(document).on("touchend.menu."+d.id,function(e,n){return function(i){for(var r=t(e)[0].itemData,a=e;null!=r.parent;)a=r.element,r=r.parent;a.contains(i.target)||(n<=d.id&&(l(a),d.id=n-1),t(document).off("touchend.menu."+n))}}(e,d.id))};registerMenuClass=function(t,e){i[t]=e},initMenu=function(t){return!!s(t)},MenuItem.prototype.setData=function(e,n){this.data=e,this.element=n,parentElement=t(n).parent();var i=t(parentElement)[0].itemData;this.parent=null!=i?i:void 0,t(n)[0].itemData=this};var f=function(e,n){for(var i in n)if(0==i.indexOf("child:")){for(var r=i.substr(6).split(":"),a=e,u=0;u<r.length;u++)a=t(a).children().eq(r[u]);null!=n[i].tag&&(a=t(a).find(n[i].tag)),f(a,n[i].properties)}else"animate"!=i&&"duration"!=i&&("style"==i?n[i].length?t(e).attr(i,n[i]):t(e).removeAttr(i):t(e).css(i,n[i]))},m=function(t){return t&&"object"==typeof t&&!Array.isArray(t)},c=function(t){var e={};for(var n in t)m(t[n])?e[n]=c(t[n]):e[n]=t[n];return e},v=function(t,e){var n=c(t);for(var i in e)m(n[i])&&m(e[i])?n[i]=v(t[i],e[i]):n[i]=e[i];return n};MenuItem.prototype.addEvents=function(){var e=function(e){if("touchstart"==e.type){if(o=!1,0==u&&(u=!0,1==a))return}else if("touchend"==e.type&&(o=!0),1==u&&("touchend"==e.type||0==o&&"click"==e.type))return;for(var n,i=e.target,r=t(i)[0].itemData;null==r&&null!=i;)i=i.parentElement,r=t(i)[0].itemData;if(null!=r.subMenu)"none"==t(r.subMenu.element).css("display")?(r.hoverIn.call(r.element,e),r.expand()):t(r.subMenu.element).is(":animated")||setTimeout((n=r.element,function(){l(n)}),50);else{for(var s;null!=r.parent;)s=r.element,r=r.parent;setTimeout(function(t){return function(){l(t)}}(s),500)}},n=this.element,i=this.subMenu;null!=this.data.hover?(t(n).hover(this.hover),null==i&&t(n).on("touchstart",this.hover)):null!=this.data.hover_in&&null!=this.data.hover_out&&(t(n).hover(this.hoverIn,this.hoverOut),t(n).on("touchstart",null!=i?e:this.hoverIn),null==i&&t(n).on("touchend",e)),t(n).on("click",e)},MenuItem.prototype.getAnimationProperties=function(e,n){if(null!=e){null==this.values&&(this.values={});var i=currDev?currDev():0;if(null==this.values[i]){var r=this.element;this.values[i]={width:t(r).width(),height:t(r).height(),marginLeft:t(r).css("margin-left"),marginTop:t(r).css("margin-top")}}for(var a=i;null!=e&&a>=0&&null==e[a];)--a;a>=0&&null!=e&&(e=e[a]);var u=t.extend({},e);if("initial"==u.width?u.width=this.values[i].width:"+dx"==u.width?u.width=parseInt(this.values[i].width)+parseInt(n.dx)+"px":"dx"==u.width&&(u.width=parseInt(n.dx)+"px"),"initial"==u.height?u.height=this.values[i].height:"+dy"==u.height?u.height=parseInt(this.values[i].height)+parseInt(n.dy)+"px":"dy"==u.height&&(u.height=parseInt(n.dy)+"px"),"dx"==u.left&&(u.left=n.dx+"px"),"dy"==u.top&&(u.top=n.dy+"px"),"dy"==u.marginTop?u.marginTop=parseInt(n.dy)+"px":"-dy"==u.marginTop&&(u.marginTop=-parseInt(n.dy)+"px"),"-dy"==u.paddingTop&&(u.paddingTop=-parseInt(n.dy)+"px"),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){var o={};for(var s in Object.assign(o,u),u)s.startsWith("@dark:")&&(o[s.substring(6)]=u[s]);u=o}return u}},MenuItem.prototype.animate=function(e,n){var i=this.element,r=null!=n&&null!=n.queue?n.queue:"fx",a=e.indexOf(":"),u=void 0;a>0&&(u=e.substring(a+1),e=e.substring(0,a));var o=this.data[e];null!=u&&(o=v(o,this.data[e+"_"+u])),null!=o.autoHoverOut&&(this.autoHoverOut=o.autoHoverOut),null!=o.before&&f(i,this.getAnimationProperties(o.before,n));var s,l=currDev?currDev():0;if(t(i).stop(r,!0).animate(this.getAnimationProperties(o.properties,n),{duration:1==o.animate?o.duration:0,queue:r,complete:(s=this.getAnimationProperties(o.after,n),function(){null==s&&(s={}),s.overflow="",f(this,s)}),step:function(e,n,i){return function(){null==e&&(e={}),null==e.overflow&&(e.overflow="visible");var r=e.calc;if(null!=r){Array.isArray(r)||(r=[r]);for(var a=t(this).width(),u=0;u<r.length;u++)"marginTop"==r[u]?e.marginTop=parseInt(n.values[i].marginTop)+(parseInt(n.values[i].height)-t(this).height())+"px":"marginLeft"==r[u]?e.marginLeft=parseInt(n.values[i].marginLeft)+(parseInt(n.values[i].width)-a)+"px":"width"==r[u]&&(a=0,t(this).children("li").each(function(){a+=t(this).width(),a+=parseInt(t(this).css("margin-left")),a+=parseInt(t(this).css("border-left")),a+=parseInt(t(this).css("margin-right")),a+=parseInt(t(this).css("border-right"))}),e.width=a+1+"px")}f(this,e)}}(this.getAnimationProperties(o.step,n),this,l)}).dequeue(r),null!=o.content&&this.animateContent(o.content.event,n),null!=o.submenu){var h=o.submenu.event;null!=this.subMenu&&("function"==typeof this.subMenu[h]?this.subMenu[h].call(this.subMenu.element):this.subMenu.animate(h,n))}if(null!=o.parentmenu){var p=o.parentmenu.event;null!=this.parent&&("function"==typeof this.parent[p]?this.parent[p].call(this.parent.element):this.parent.animate(p,n))}},MenuItem.prototype.animateContent=function(t,e){this.doAnimateContent(t,e)},MenuItem.prototype.doAnimateContent=function(e,n){var i=this.element,r=t(i).children().first().find(".menu-content");0==r.length&&(r=t(i).children().first());var a=this.data.content[e];null!=a.before&&f(r,this.getAnimationProperties(a.before,n));var u,o=null!=n&&null!=n.queue?n.queue:"fx";for(var s in t(r).stop(o,!0).animate(this.getAnimationProperties(a.properties,n),{duration:1==a.animate?a.duration:0,queue:o,complete:(u=this.getAnimationProperties(a.after,n),function(){null!=u&&f(this,u)}),step:function(t){return function(){null!=t&&f(this,t)}}(this.getAnimationProperties(a.step,n))}).dequeue(o),a)if(0==s.indexOf("child:")){for(var l=s.substr(6).split(":"),h=r,p=0;p<l.length;p++)h=t(h).children().eq(l[p]);null!=a[s].tag&&(h=t(h).find(a[s].tag)),t(h).stop(o,!0).animate(this.getAnimationProperties(a[s].properties,n),{duration:1==a.animate?null!=a[s].duration?a[s].duration:a.duration:0,queue:o,complete:function(t){return function(){null!=t&&f(this,t)}}(this.getAnimationProperties(a[s].after,n)),step:function(t){return function(){null!=t&&f(this,t)}}(this.getAnimationProperties(a[s].step,n))}).dequeue(o)}},MenuItem.prototype.hover=function(){0!=t(this).height()&&t(this)[0].itemData.animate("hover")},MenuItem.prototype.hoverIn=function(i,o){if("mouseenter"==i.type){if(1==u)return;0==a&&(a=!0)}if(0!=t(this).height()){if(1!=o){var s=t(this).find("div")[0].getBoundingClientRect(),l=i.clientX;if(!n){var h=parseFloat(window.getComputedStyle(document.body).getPropertyValue("zoom"));h||(h=1),s={left:s.left*h,right:s.right*h,top:s.top*h,bottom:s.bottom*h},e||(s.top+=window.pageYOffset*(h-1),s.bottom+=window.pageYOffset*(h-1))}if(l<parseInt(s.left)||l>=parseInt(s.right))return;var p=i.clientY;if(p<parseInt(s.top)||p>=parseInt(s.bottom))return}var d=t(this)[0].itemData;if(1==d.open)return;d.animate("hover_in"),d.expand(),d.open=!0,null==r||r==d||r.element.contains(i.target)||r.hoverOut.call(r.element),r=d}},MenuItem.prototype.hoverOut=function(e){if((1!=u||null==e||"mouseleave"!=e.type)&&0!=t(this).height()){var n=t(this)[0].itemData;!1!==n.autoHoverOut&&(l(n.element),n.animate("hover_out"),n.restore(),n.open=!1,n.autoHoverOut=void 0,r=void 0)}},MenuItem.prototype.expand=function(){var e=this.element,n=t(e).attr("data-anim");if(null!=n){var i=n.split(";"),r=currDev?currDev():0;if(r<i.length){var a=i[r];if(a.length>0){var u,o=a.split(":"),s=o[0];if("push_right"==s)(l=o[2])<0&&(s+=":move_up"),u={dx:o[1],dy:l};else if("push_left"==s){(l=o[2])<0&&(s+=":move_up"),u={dx:o[1],dy:l}}else if("push_up"==s){u={dx:o[1],dy:o[2]}}else if("push_down"==s){u={dx:o[1],dy:o[2]}}else if("expand_up"==s){u={dx:o[1],dy:o[2]}}else if("expand_down"==s){u={dx:o[1],dy:o[2]}}else if("expand_right"==s){(l=o[2])<0&&(s+=":move_up"),u={dx:o[1],dy:l}}else if("expand_left"==s){var l;(l=o[2])<0&&(s+=":move_up"),u={dx:o[1],dy:l}}t.extend(u,{queue:"alt_fx"}),this.animate(s,u)}}}},MenuItem.prototype.restore=function(){var e=this.element,n=t(e).attr("data-anim");if(null!=n){var i=n.split(";"),r=currDev?currDev():0;if(r<i.length){var a=i[r];if(a.length>0){var u,o=a.split(":"),s=o[0];if("push_right"==s)s="pull_left",(l=o[2])<0&&(s+=":move_down"),u={dx:o[1],dy:l};else if("push_left"==s){s="pull_right",(l=o[2])<0&&(s+=":move_down"),u={dx:o[1],dy:l}}else if("push_up"==s){s="pull_down",u={dx:o[1],dy:o[2]}}else if("push_down"==s){s="pull_up",u={dx:o[1],dy:o[2]}}else if("expand_up"==s){s="shrink_down",u={dx:o[1],dy:o[2]}}else if("expand_down"==s){s="shrink_up",u={dx:o[1],dy:o[2]}}else if("expand_right"==s){s="shrink_left",(l=o[2])<0&&(s+=":move_down"),u={dx:o[1],dy:l}}else if("expand_left"==s){var l;s="shrink_right",(l=o[2])<0&&(s+=":move_down"),u={dx:o[1],dy:l}}t.extend(u,{queue:"alt_fx"}),this.animate(s,u)}}}},MenuItem.prototype.show=function(){var e=t(this)[0].itemData;!0,d(this),e.animate("show",{complete:function(){!1,console.log("menuShow = false")}})},MenuItem.prototype.hide=function(){t(this)[0].itemData.animate("hide")},Menu.prototype=new MenuItem,Menu.prototype.animateContent=function(t){for(var e in this.items){this.items[e].animateContent(t)}},t(window).on("touchmove",function(t){null!=r&&r.hoverOut.call(r.element)})}();
