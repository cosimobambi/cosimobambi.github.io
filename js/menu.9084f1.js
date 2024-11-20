var registerMenuClass,initMenu;function MenuItem(){this.parent=void 0,this.element=void 0,this.data=void 0}function Menu(){this.items=new Array}function deepMerge(t,e){for(var n in e)e[n]&&"object"==typeof e[n]&&!Array.isArray(e[n])?(t[n]||(t[n]={}),deepMerge(t[n],e[n])):t[n]=e[n];return t}!function(){function l(){var t=getComputedStyle(document.body).getPropertyValue("--d");return t.length?parseInt(t):0}var o=/chrome/i.test(navigator.userAgent),r=/firefox/i.test(navigator.userAgent),n={},a=void 0,u=!1,s=!1,p=!1,d={};function h(i){[].concat(i).forEach(function(t){"none"===getComputedStyle(t).display&&(t.style.display="block")}),null==h.id&&(h.id=0);var o="touchend.menu."+ ++h.id;d[o]=function(t){for(var e=i.itemData,n=i;null!=e.parent;)n=e.element,e=e.parent;n.contains(t.target)||(0<=h.id&&(g(n),h.id=h.id-1),document.removeEventListener("touchend",d[o]),delete d[o])},document.addEventListener("touchend",d[o])}function y(t,e){for(var n in e)if(0==n.indexOf("child:")){for(var i=n.substr(6).split(":"),o=t,r=0;r<i.length;r++)o=o.children[i[r]];null!=e[n].tag&&(o=o.querySelector(e[n].tag)),y(o,e[n].properties)}else"animate"!=n&&"duration"!=n&&("style"==n?e[n].length?t.setAttribute(n,e[n]):t.removeAttribute(n):t.style[n.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()})]=e[n])}function w(t,e){var n,i=b(t);for(n in e)I(i[n])&&I(e[n])?i[n]=w(t[n],e[n]):i[n]=e[n];return i}var m=function(t){t=null!=t&&null!=t.menuItemClass?t.menuItemClass:"MenuItem";return new window[t]},f=function(t){t=null!=t&&null!=t.menuClass?t.menuClass:"Menu";return new window[t]},c=function(t){var n,i,e,o,r=v(t);return null!=r&&(n=r.items,i=f(r),null!=(e=(e=t.parentElement)?e.itemData:void 0)&&(e.subMenu=i),i.setData(r,t),o=!0,Array.from(t.children).forEach(function(t){var e;"li"===t.tagName.toLowerCase()&&((e=m(n)).setData(n,t),i.items.push(e),Array.from(t.children).forEach(function(t){"ul"!==t.tagName.toLowerCase()||c(t)||(o=!1)}),e.addEvents())}),o)},g=function(t){[].concat(t).forEach(function(t){var e=t.itemData;null!=e&&(null!=e.subMenu&&Array.from(t.children).forEach(function(t){"ul"===t.tagName.toLowerCase()&&g(Array.from(t.children))}),0<t.children.length&&"none"!==getComputedStyle(t.children[0]).display&&e.animate("hover_out"),e.restore(),e.open=!1,e.autoHoverOut=void 0)})},v=function(t){for(var e=void 0,n=t.className.split(/\s+/),i=0;i<n.length;i++){var o=n[i];if(null!=(e=x(o)))break}return e},x=function(t){return n[t]},I=(registerMenuClass=function(t,e){n[t]=e},initMenu=function(t){return!(!t||!c(t))},MenuItem.prototype.setData=function(t,e){this.data=t;t=(this.element=e).parentElement,t=t?t.itemData:void 0;this.parent=void 0!==t?t:void 0,e.itemData=this},function(t){return t&&"object"==typeof t&&!Array.isArray(t)}),b=function(t){var e,n={};for(e in t)I(t[e])?n[e]=b(t[e]):n[e]=t[e];return n};MenuItem.prototype.addEvents=function(){function e(t){if("touchstart"==t.type){if(p=!1,0==s&&(s=!0,1==u))return}else if("touchend"==t.type&&(p=!0),1==s&&("touchend"==t.type||0==p&&"click"==t.type))return;for(var e,n=t.target,i=n.itemData;null==i&&null!=n;)i=(n=n.parentElement).itemData;if(null!=i.subMenu)"none"===getComputedStyle(i.subMenu.element).display?(i.hoverIn.call(i.element,t),i.expand()):i.open&&g(i.element);else{for(;null!=i.parent;)e=i.element,i=i.parent;g(e)}}var n,t=this.element;t.getAttribute("data-hnd")||(t.setAttribute("data-hnd","1"),n=this.subMenu,null!=this.data.hover?(t.addEventListener("mouseenter",function(t){t.stopPropagation(),this.itemData.hover.call(this,t)}),null==n&&t.addEventListener("touchstart",function(t){t.stopPropagation(),this.itemData.hover.call(this,t)})):null!=this.data.hover_in&&null!=this.data.hover_out&&(t.addEventListener("mouseenter",function(t){t.stopPropagation(),this.itemData.hoverIn.call(this,t)}),t.addEventListener("mouseleave",function(t){t.stopPropagation(),this.itemData.hoverOut.call(this,t)}),t.addEventListener("touchstart",function(t){t.stopPropagation(),null!=n?e(t):this.itemData.hoverIn.call(this,t)}),null==n)&&t.addEventListener("touchend",function(t){t.stopPropagation(),e(t)}),t.addEventListener("click",function(t){t.stopPropagation(),e(t)}))},MenuItem.prototype.getAnimationProperties=function(t,e){if(null!=t){null==this.values&&(this.values={});for(var n,i=l(),o=(null==this.values[i]&&(n=this.element,this.values[i]={width:n.offsetWidth+"px",height:n.offsetHeight+"px",marginLeft:getComputedStyle(n).marginLeft,marginTop:getComputedStyle(n).marginTop}),i);null!=t&&0<=o&&null==t[o];)--o;0<=o&&null!=t&&(t=t[o]);var r=Object.assign({},t);if("initial"==r.width?r.width=this.values[i].width:"+dx"==r.width?r.width=parseInt(this.values[i].width)+parseInt(e.dx)+"px":"dx"==r.width&&(r.width=parseInt(e.dx)+"px"),"initial"==r.height?r.height=this.values[i].height:"+dy"==r.height?r.height=parseInt(this.values[i].height)+parseInt(e.dy)+"px":"dy"==r.height&&(r.height=parseInt(e.dy)+"px"),"dx"==r.left&&(r.left=e.dx+"px"),"dy"==r.top&&(r.top=e.dy+"px"),"dy"==r.marginTop?r.marginTop=parseInt(e.dy)+"px":"-dy"==r.marginTop&&(r.marginTop=-parseInt(e.dy)+"px"),"-dy"==r.paddingTop&&(r.paddingTop=-parseInt(e.dy)+"px"),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){var a,u={};for(a in Object.assign(u,r),r)a.startsWith("@dark:")&&(u[a.substring(6)]=r[a]);r=u}return r}},MenuItem.prototype.animate=function(t,e){var p,d,h,m,f,c,g,v,n=this,i=n.element,o=t.indexOf(":"),r=void 0,o=(0<o&&(r=t.substring(o+1),t=t.substring(0,o)),n.data[t]),t=(null!=(o=null!=r?w(o,n.data[t+"_"+r]):o).autoHoverOut&&(n.autoHoverOut=o.autoHoverOut),null!=o.before&&y(i,n.getAnimationProperties(o.before,e)),l());p=i,d=n.getAnimationProperties(o.properties,e),m=e,f=n,c=t,v=!(g=null)===(h=o).animate?h.duration:400,requestAnimationFrame(function t(e){g=g||e;var n,i=v?Math.min((e-g)/v,1):1,o=f.getAnimationProperties(h.step,m);if(null!=o){null==o.overflow&&(o.overflow="visible");var r=o.calc;if(null!=r){Array.isArray(r)||(r=[r]);for(var a=p.offsetWidth,u=0;u<r.length;u++)"marginTop"==r[u]?o.marginTop=parseInt(f.values[c].marginTop)+(parseInt(f.values[c].height)-p.offsetHeight)+"px":"marginLeft"==r[u]?o.marginLeft=parseInt(f.values[c].marginLeft)+(parseInt(f.values[c].width)-a)+"px":"width"==r[u]&&(a=0,Array.from(p.children).forEach(function(t){"li"===t.tagName.toLowerCase()&&(a=(a=(a=(a=(a+=t.offsetWidth)+parseInt(getComputedStyle(t).marginLeft))+parseInt(getComputedStyle(t).borderLeftWidth))+parseInt(getComputedStyle(t).marginRight))+parseInt(getComputedStyle(t).borderRightWidth))}),o.width=a+1+"px")}y(p,o)}for(n in d){var l=parseFloat(getComputedStyle(p)[n])||0,s=parseFloat(d[n])||0;p.style[n]=l+i*(s-l)+("opacity"===n?"":"px")}i<1?requestAnimationFrame(t):((e=null==(e=f.getAnimationProperties(h.after,m))?{}:e).overflow="",y(p,e))}),null!=o.content&&n.animateContent(o.content.event,e),null!=o.submenu&&(r=o.submenu.event,null!=n.subMenu)&&("function"==typeof n.subMenu[r]?n.subMenu[r].call(n.subMenu.element):n.subMenu.animate(r,e)),null!=o.parentmenu&&(i=o.parentmenu.event,null!=n.parent)&&("function"==typeof n.parent[i]?n.parent[i].call(n.parent.element):n.parent.animate(i,e))},MenuItem.prototype.animateContent=function(t,e){this.doAnimateContent(t,e)},MenuItem.prototype.doAnimateContent=function(t,l){function e(n,i,o,r,t){var a=null,u=t||400;requestAnimationFrame(function t(e){a=a||e;e=Math.min((e-a)/u,1);null!=o&&o(),y(n,i),e<1?requestAnimationFrame(t):(null!=(e=s.getAnimationProperties(p.after,l))&&y(n,e),null!=r&&r())})}var n,s=this,i=s.element,o=(o=i.querySelector(".menu-content"))||i.firstElementChild,p=s.data.content[t];null!=p.before&&y(o,s.getAnimationProperties(p.before,l));for(n in e(o,s.getAnimationProperties(p.properties,l),s.getAnimationProperties(p.step,l),function(){null!=p.after&&y(o,s.getAnimationProperties(p.after,l))},!0===p.animate?p.duration:0),p)if(0==n.indexOf("child:")){for(var r=n.substr(6).split(":"),a=o,u=0;u<r.length;u++)a=a.children[r[u]];e(a=null!=p[n].tag?a.querySelector(p[n].tag):a,s.getAnimationProperties(p[n].properties,l),s.getAnimationProperties(p[n].step,l),function(){null!=p[n].after&&y(a,s.getAnimationProperties(p[n].after,l))},!0===p.animate?(null!=p[n].duration?p[n]:p).duration:0)}},MenuItem.prototype.hover=function(){0!==this.offsetHeight&&this.itemData.animate("hover")},MenuItem.prototype.hoverIn=function(t,e){if("mouseenter"==t.type){if(!0===s)return;!1===u&&(u=!0)}if(0!==this.offsetHeight){if(!0!==e){var e=this.querySelector("div").getBoundingClientRect(),n=t.clientX;if(r||(i=(i=parseFloat(window.getComputedStyle(document.body).getPropertyValue("zoom")))||1,e={left:e.left*i,right:e.right*i,top:e.top*i,bottom:e.bottom*i},o)||(e.top+=window.pageYOffset*(i-1),e.bottom+=window.pageYOffset*(i-1)),n<parseInt(e.left)||n>=parseInt(e.right))return;var i=t.clientY;if(i<parseInt(e.top)||i>=parseInt(e.bottom))return}n=this.itemData;!0!==n.open&&(n.animate("hover_in"),n.expand(),n.open=!0,void 0===a||a===n||a.element.contains(t.target)||a.hoverOut.call(a.element),a=n)}},MenuItem.prototype.hoverOut=function(t){!0===s&&null!=t&&"mouseleave"===t.type||0!==this.offsetHeight&&!1!==(t=this.itemData).autoHoverOut&&(g(t.element),t.animate("hover_out"),t.restore(),t.open=!1,t.autoHoverOut=void 0,a=void 0)},MenuItem.prototype.expand=function(){var t,e,n,i=this.element.getAttribute("data-anim");null!=i&&(i=i.split(";"),(t=l())<i.length)&&0<(i=i[t]).length&&("push_right"==(i=(t=i.split(":"))[0])||"push_left"==i?((n=t[2])<0&&(i+=":move_up"),e={dx:t[1],dy:n}):"push_up"==i||"push_down"==i||"expand_up"==i||"expand_down"==i?e={dx:t[1],dy:t[2]}:"expand_right"!=i&&"expand_left"!=i||((n=t[2])<0&&(i+=":move_up"),e={dx:t[1],dy:n}),this.animate(i,e))},MenuItem.prototype.restore=function(){var t,e,n,i=this.element.getAttribute("data-anim");null!=i&&(i=i.split(";"),(t=l())<i.length)&&0<(i=i[t]).length&&("push_right"==(i=(t=i.split(":"))[0])?(i="pull_left",(n=t[2])<0&&(i+=":move_down"),e={dx:t[1],dy:n}):"push_left"==i?(i="pull_right",(n=t[2])<0&&(i+=":move_down"),e={dx:t[1],dy:n}):"push_up"==i?(i="pull_down",e={dx:t[1],dy:t[2]}):"push_down"==i?(i="pull_up",e={dx:t[1],dy:t[2]}):"expand_up"==i?(i="shrink_down",e={dx:t[1],dy:t[2]}):"expand_down"==i?(i="shrink_up",e={dx:t[1],dy:t[2]}):"expand_right"==i?(i="shrink_left",(n=t[2])<0&&(i+=":move_down"),e={dx:t[1],dy:n}):"expand_left"==i&&(i="shrink_right",(n=t[2])<0&&(i+=":move_down"),e={dx:t[1],dy:n}),this.animate(i,e))},MenuItem.prototype.show=function(){var t=this.itemData;h(this),t.animate("show",{complete:function(){}})},MenuItem.prototype.hide=function(){this.itemData.animate("hide")},Menu.prototype=new MenuItem,Menu.prototype.animateContent=function(t){for(var e in this.items)this.items[e].animateContent(t)},window.addEventListener("touchmove",function(t){null!=a&&a.hoverOut.call(a.element)})}();
