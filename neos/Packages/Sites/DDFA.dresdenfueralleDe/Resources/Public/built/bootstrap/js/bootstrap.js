/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=2712719932dda4b9fe29)
 * Config saved to config.json and https://gist.github.com/2712719932dda4b9fe29
 */

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

if(typeof jQuery=="undefined")throw new Error("Bootstrap's JavaScript requires jQuery");+function(e){"use strict";var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||t[0]==1&&t[1]==9&&t[2]<1||t[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(e){"use strict";function n(n){return this.each(function(){var r=e(this),i=r.data("bs.tooltip"),s=typeof n=="object"&&n;if(!i&&/destroy|hide/.test(n))return;i||r.data("bs.tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})}var t=function(e,t){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",e,t)};t.VERSION="3.3.6",t.TRANSITION_DURATION=150,t.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},t.prototype.init=function(t,n,r){this.enabled=!0,this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.$viewport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1};if(this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");var i=this.options.trigger.split(" ");for(var s=i.length;s--;){var o=i[s];if(o=="click")this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if(o!="manual"){var u=o=="hover"?"mouseenter":"focusin",a=o=="hover"?"mouseleave":"focusout";this.$element.on(u+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},t.prototype.getDefaults=function(){return t.DEFAULTS},t.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},t.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults();return this._options&&e.each(this._options,function(e,r){n[e]!=r&&(t[e]=r)}),t},t.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState[t.type=="focusin"?"focus":"hover"]=!0);if(n.tip().hasClass("in")||n.hoverState=="in"){n.hoverState="in";return}clearTimeout(n.timeout),n.hoverState="in";if(!n.options.delay||!n.options.delay.show)return n.show();n.timeout=setTimeout(function(){n.hoverState=="in"&&n.show()},n.options.delay.show)},t.prototype.isInStateTrue=function(){for(var e in this.inState)if(this.inState[e])return!0;return!1},t.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState[t.type=="focusout"?"focus":"hover"]=!1);if(n.isInStateTrue())return;clearTimeout(n.timeout),n.hoverState="out";if(!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},t.prototype.show=function(){var n=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(n);var r=e.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(n.isDefaultPrevented()||!r)return;var i=this,s=this.tip(),o=this.getUID(this.type);this.setContent(),s.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&s.addClass("fade");var u=typeof this.options.placement=="function"?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,f=a.test(u);f&&(u=u.replace(a,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(u).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),c=s[0].offsetWidth,h=s[0].offsetHeight;if(f){var p=u,d=this.getPosition(this.$viewport);u=u=="bottom"&&l.bottom+h>d.bottom?"top":u=="top"&&l.top-h<d.top?"bottom":u=="right"&&l.right+c>d.width?"left":u=="left"&&l.left-c<d.left?"right":u,s.removeClass(p).addClass(u)}var v=this.getCalculatedOffset(u,l,c,h);this.applyPlacement(v,u);var m=function(){var e=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,e=="out"&&i.leave(i)};e.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(t.TRANSITION_DURATION):m()}},t.prototype.applyPlacement=function(t,n){var r=this.tip(),i=r[0].offsetWidth,s=r[0].offsetHeight,o=parseInt(r.css("margin-top"),10),u=parseInt(r.css("margin-left"),10);isNaN(o)&&(o=0),isNaN(u)&&(u=0),t.top+=o,t.left+=u,e.offset.setOffset(r[0],e.extend({using:function(e){r.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),r.addClass("in");var a=r[0].offsetWidth,f=r[0].offsetHeight;n=="top"&&f!=s&&(t.top=t.top+s-f);var l=this.getViewportAdjustedDelta(n,t,a,f);l.left?t.left+=l.left:t.top+=l.top;var c=/top|bottom/.test(n),h=c?l.left*2-i+a:l.top*2-s+f,p=c?"offsetWidth":"offsetHeight";r.offset(t),this.replaceArrow(h,r[0][p],c)},t.prototype.replaceArrow=function(e,t,n){this.arrow().css(n?"left":"top",50*(1-e/t)+"%").css(n?"top":"left","")},t.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},t.prototype.hide=function(n){function o(){r.hoverState!="in"&&i.detach(),r.$element.removeAttr("aria-describedby").trigger("hidden.bs."+r.type),n&&n()}var r=this,i=e(this.$tip),s=e.Event("hide.bs."+this.type);this.$element.trigger(s);if(s.isDefaultPrevented())return;return i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",o).emulateTransitionEnd(t.TRANSITION_DURATION):o(),this.hoverState=null,this},t.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},t.prototype.hasContent=function(){return this.getTitle()},t.prototype.getPosition=function(t){t=t||this.$element;var n=t[0],r=n.tagName=="BODY",i=n.getBoundingClientRect();i.width==null&&(i=e.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var s=r?{top:0,left:0}:t.offset(),o={scroll:r?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},u=r?{width:e(window).width(),height:e(window).height()}:null;return e.extend({},i,o,u,s)},t.prototype.getCalculatedOffset=function(e,t,n,r){return e=="bottom"?{top:t.top+t.height,left:t.left+t.width/2-n/2}:e=="top"?{top:t.top-r,left:t.left+t.width/2-n/2}:e=="left"?{top:t.top+t.height/2-r/2,left:t.left-n}:{top:t.top+t.height/2-r/2,left:t.left+t.width}},t.prototype.getViewportAdjustedDelta=function(e,t,n,r){var i={top:0,left:0};if(!this.$viewport)return i;var s=this.options.viewport&&this.options.viewport.padding||0,o=this.getPosition(this.$viewport);if(/right|left/.test(e)){var u=t.top-s-o.scroll,a=t.top+s-o.scroll+r;u<o.top?i.top=o.top-u:a>o.top+o.height&&(i.top=o.top+o.height-a)}else{var f=t.left-s,l=t.left+s+n;f<o.left?i.left=o.left-f:l>o.right&&(i.left=o.left+o.width-l)}return i},t.prototype.getTitle=function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},t.prototype.getUID=function(e){do e+=~~(Math.random()*1e6);while(document.getElementById(e));return e},t.prototype.tip=function(){if(!this.$tip){this.$tip=e(this.options.template);if(this.$tip.length!=1)throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")}return this.$tip},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1},t.prototype.toggleEnabled=function(){this.enabled=!this.enabled},t.prototype.toggle=function(t){var n=this;t&&(n=e(t.currentTarget).data("bs."+this.type),n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n))),t?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},t.prototype.destroy=function(){var e=this;clearTimeout(this.timeout),this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type),e.$tip&&e.$tip.detach(),e.$tip=null,e.$arrow=null,e.$viewport=null})};var r=e.fn.tooltip;e.fn.tooltip=n,e.fn.tooltip.Constructor=t,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=r,this}}(jQuery),+function(e){"use strict";function n(n){return this.each(function(){var r=e(this),i=r.data("bs.popover"),s=typeof n=="object"&&n;if(!i&&/destroy|hide/.test(n))return;i||r.data("bs.popover",i=new t(this,s)),typeof n=="string"&&i[n]()})}var t=function(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");t.VERSION="3.3.6",t.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),t.prototype.constructor=t,t.prototype.getDefaults=function(){return t.DEFAULTS},t.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content").children().detach().end()[this.options.html?typeof n=="string"?"html":"append":"text"](n),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find(".popover-title").hide()},t.prototype.hasContent=function(){return this.getTitle()||this.getContent()},t.prototype.getContent=function(){var e=this.$element,t=this.options;return e.attr("data-content")||(typeof t.content=="function"?t.content.call(e[0]):t.content)},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var r=e.fn.popover;e.fn.popover=n,e.fn.popover.Constructor=t,e.fn.popover.noConflict=function(){return e.fn.popover=r,this}}(jQuery),+function(e){"use strict";function n(t){var n,r=t.attr("data-target")||(n=t.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return e(r)}function r(n){return this.each(function(){var r=e(this),i=r.data("bs.collapse"),s=e.extend({},t.DEFAULTS,r.data(),typeof n=="object"&&n);!i&&s.toggle&&/show|hide/.test(n)&&(s.toggle=!1),i||r.data("bs.collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})}var t=function(n,r){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,r),this.$trigger=e('[data-toggle="collapse"][href="#'+n.id+'"],'+'[data-toggle="collapse"][data-target="#'+n.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};t.VERSION="3.3.6",t.TRANSITION_DURATION=350,t.DEFAULTS={toggle:!0},t.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},t.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var n,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(i&&i.length){n=i.data("bs.collapse");if(n&&n.transitioning)return}var s=e.Event("show.bs.collapse");this.$element.trigger(s);if(s.isDefaultPrevented())return;i&&i.length&&(r.call(i,"hide"),n||i.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var u=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return u.call(this);var a=e.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",e.proxy(u,this)).emulateTransitionEnd(t.TRANSITION_DURATION)[o](this.$element[0][a])},t.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var n=e.Event("hide.bs.collapse");this.$element.trigger(n);if(n.isDefaultPrevented())return;var r=this.dimension();this.$element[r](this.$element[r]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!e.support.transition)return i.call(this);this.$element[r](0).one("bsTransitionEnd",e.proxy(i,this)).emulateTransitionEnd(t.TRANSITION_DURATION)},t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},t.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(t,r){var i=e(r);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},t.prototype.addAriaAndCollapsedClass=function(e,t){var n=e.hasClass("in");e.attr("aria-expanded",n),t.toggleClass("collapsed",!n).attr("aria-expanded",n)};var i=e.fn.collapse;e.fn.collapse=r,e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=i,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var i=e(this);i.attr("data-target")||t.preventDefault();var s=n(i),o=s.data("bs.collapse"),u=o?"toggle":i.data();r.call(s,u)})}(jQuery),+function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(e.style[n]!==undefined)return{end:t[n]};return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,r=this;e(this).one("bsTransitionEnd",function(){n=!0});var i=function(){n||e(r).trigger(e.support.transition.end)};return setTimeout(i,t),this},e(function(){e.support.transition=t();if(!e.support.transition)return;e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}})}(jQuery);