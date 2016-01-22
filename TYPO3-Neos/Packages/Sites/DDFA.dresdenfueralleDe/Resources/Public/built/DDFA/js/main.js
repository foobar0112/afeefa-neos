/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */

/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */

/** qooxdoo v4.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */

//     Underscore.js 1.8.2
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */

/*!
 * Restive.JS v1.3.5
 * http://restivejs.com
 *
 * Copyright 2015 Obinwanne Hill <https://about.me/obinwanne.hill>
 * Released under MIT License
*/

/*! PHP-JS | @link https://github.com/kvz/phpjs | @copyright Kevin van Zonneveld | @license MIT and GPL */

/*! md5.js - MD5 Message-Digest - v2.0.0 | @copyright 1999,2002 Masanao Izumo <iz@onicos.co.jp>  */

/*! json2.js | @link https://github.com/douglascrockford/JSON-js | @copyright Douglas Crockford <douglas@crockford.com> */

/*! AmplifyJS-Store - v1.1.0 | @link http://amplifyjs.com/api/store/ | @copyright 2012 AppendTo <http://appendto.com/contact> | @license MIT and GPL V2 */

/*! ios-orientationchange-fix.js | Script by @scottjehl rebound by @wilto, modified by Peter Wooster | @link https://github.com/scottjehl/iOS-Orientationchange-Fix | @copyright Scott Jehl <@scottjehl> | @license MIT / GPLV2 */

/*! jQuery resize event - v1.1 | @link http://benalman.com/projects/jquery-resize-plugin/ | Copyright (c) 2010 "Cowboy" Ben Alman | @license MIT/GPL */

/*! Restive.JS | @copyright 2013 Obinwanne Hill */

//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'

function count(e, t) {
    var n, r = !1, i = 0;
    switch (!0) {
        case null === e || "undefined" == typeof e:
            return 0;
        case!isArray(e) && !isObject(e):
            r = !0
    }
    switch (!0) {
        case e.hasOwnProperty("length"):
            return e.length
    }
    switch (!0) {
        case r:
            return 1
    }
    switch (!0) {
        case"COUNT_RECURSIVE" === t:
            t = 1
    }
    switch (!0) {
        case 1 != t:
            t = 0
    }
    for (n in e)switch (!0) {
        case e.hasOwnProperty(n):
            switch (i++, !0) {
                case 1 == t && e[n] && (isArray(e[n]) || isObject(e[n])):
                    i += this.count(e[n], 1)
            }
    }
    return i
}
function in_array(e, t, n) {
    var r = "", i = !!n;
    if (i) {
        for (r in t)if (t[r] === e)return !0
    } else for (r in t)if (t[r] == e)return !0;
    return !1
}
function array_search(e, t, n) {
    var r = !!n, i = "";
    if (t && "object" == typeof t && t.change_key_case)return t.search(e, n);
    if ("object" == typeof e && e.exec) {
        if (!r) {
            var s = "i" + (e.global ? "g" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "");
            e = new RegExp(e.source, s)
        }
        for (i in t)if (e.test(t[i]))return i;
        return !1
    }
    for (i in t)if (r && t[i] === e || !r && t[i] == e)return i;
    return !1
}
function array_keys(e, t, n) {
    var r = "undefined" != typeof t, i = [], s = !!n, o = !0, u = "";
    if (e && "object" == typeof e && e.change_key_case)return e.keys(t, n);
    for (u in e)e.hasOwnProperty(u) && (o = !0, r && (s && e[u] !== t ? o = !1 : e[u] != t && (o = !1)), o && (i[i.length] = u));
    return i
}
function array_values(e) {
    var t = [], n = "";
    if (e && "object" == typeof e && e.change_key_case)return e.values();
    for (n in e)t[t.length] = e[n];
    return t
}
function array_combine(e, t) {
    var n = {}, r = e && e.length, i = 0;
    if ("object" != typeof e || "object" != typeof t || "number" != typeof r || "number" != typeof t.length || !r)return !1;
    if (r != t.length)return !1;
    for (i = 0; r > i; i++)n[e[i]] = t[i];
    return n
}
function implode(e, t) {
    var n = Array.prototype.slice.call(arguments), r = n[2], i = "", s = "", o = "";
    if (1 === arguments.length && (t = e, e = ""), "object" == typeof t) {
        if (r)for (i = 0; i < count(t); i++)s += o + t[i], o = e; else for (i in t)s += o + t[i], o = e;
        return s
    }
    return t
}
function explode(e, t, n) {
    if (arguments.length < 2 || "undefined" == typeof e || "undefined" == typeof t)return null;
    if ("" === e || e === !1 || null === e)return !1;
    if ("function" == typeof e || "object" == typeof e || "function" == typeof t || "object" == typeof t)return {0: ""};
    e === !0 && (e = "1"), e += "", t += "";
    var r = t.split(e);
    return "undefined" == typeof n ? r : (0 === n && (n = 1), n > 0 ? n >= r.length ? r : r.slice(0, n - 1).concat([r.slice(n - 1).join(e)]) : -n >= r.length ? [] : (r.splice(r.length + n), r))
}
function urlencode(e) {
    return e = (e + "").toString(), encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
}
function strrpos(e, t, n) {
    var r = -1;
    return n ? (r = (e + "").slice(n).lastIndexOf(t), -1 !== r && (r += n)) : r = (e + "").lastIndexOf(t), r >= 0 ? r : !1
}
function uasort(e, t) {
    var n = [], r = "", i = 0, s = !1, o = {};
    "string" == typeof t ? t = this[t] : "[object Array]" === Object.prototype.toString.call(t) && (t = this[t[0]][t[1]]), this.php_js = this.php_js || {}, this.php_js.ini = this.php_js.ini || {}, s = this.php_js.ini["phpjs.strictForIn"] && this.php_js.ini["phpjs.strictForIn"].local_value && "off" !== this.php_js.ini["phpjs.strictForIn"].local_value, o = s ? e : o;
    for (r in e)e.hasOwnProperty(r) && (n.push([r, e[r]]), s && delete e[r]);
    for (n.sort(function (e, n) {
        return t(e[1], n[1])
    }), i = 0; i < n.length; i++)o[n[i][0]] = n[i][1];
    return s || o
}
function microtime(e) {
    var t = (new Date).getTime() / 1e3, n = parseInt(t, 10);
    return e ? t : Math.round(1e3 * (t - n)) / 1e3 + " " + n
}
function substr_count(e, t) {
    var n = t.replace(/(?=[\\^$*+?.\(\)|{\}[\]])/g, "\\"), r = new RegExp("" + n, "g"), i = e.match(r);
    return i ? i.length : 0
}
function isString(e) {
    return "string" == typeof e
}
function isNumber(e) {
    return !isNaN(parseFloat(e)) && isFinite(e)
}
function isBool(e) {
    return e === !0 || e === !1
}
function isArray(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}
function isObject(e) {
    switch (!0) {
        case isArray(e):
            return !1
    }
    var t;
    for (var n in e)if (e.hasOwnProperty(n)) {
        t = !1;
        break
    }
    switch (t = isBool(t) ? t : !0, !0) {
        case"object" == typeof e && t === !1:
            return !0
    }
    return !1
}
function isFunction(e) {
    return !!(e && e.constructor && e.call && e.apply)
}
function arrayToInteger(e) {
    var t, n, r = [], i = [], s = [], o = [];
    r = array_keys(e), i = array_values(e), n = count(e);
    for (var u = 0; n > u; u++)t = parseInt(i[u]), s.push(t);
    return o = array_combine(r, s)
}
function arrayHasDuplicates(e) {
    for (var t = {}, n = count(e), r = 0; n > r; ++r) {
        var i = e[r];
        if (Object.prototype.hasOwnProperty.call(t, i))return !0;
        t[i] = !0
    }
    return !1
}
function getValueAfterExplode(e, t, n) {
    var r = explode(t, e);
    return r[n]
}
function getSortedKeys(e) {
    for (var t = [], n = 0; n < e.length; n++)t.push({key: n, value: e[n]});
    t.sort(function (e, t) {
        return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
    });
    for (var r = [], n = 0; n < t.length; n++)r.push(t[n].key);
    return r
}
function getClosestNumberMatchArray(e, t) {
    var n, r, i, s, o = Array.prototype.slice.call(arguments), u = isBool(o[2]) ? o[2] : !1, a = isBool(o[3]) ? o[3] : !0, f = isNumber(o[4]) ? o[4] : 0, l = [], c = [];
    e = arrayToInteger(e), t = parseInt(t);
    for (var h = 0; h < count(e); h++)n = t - e[h], n = Math.abs(n), c.push(n);
    switch (l = getSortedKeys(c), r = l[0], i = e[r], s = i - t, s = Math.abs(s), !0) {
        case t > i:
            a = f >= s ? !1 : a, r = a ? r + 1 : r
    }
    return i = e[r], u ? r : i
}
function isEvenDecimal(e) {
    var t, n, r = Array.prototype.slice.call(arguments), i = isBool(r[1]) ? r[1] : !1;
    switch (t = 0 > e && i ? -1 * e : e, n = t % 1, !0) {
        case!isNumber(t) || 1 > t || 0 == n:
            return !1
    }
    return t = Math.floor(t), n = t % 2, 0 == n
}
function getUrl() {
    var e, t = Array.prototype.slice.call(arguments), n = isString(t[0]) && "" != t[0] ? t[0] : "", r = isString(t[1]) && "" != t[1] ? t[1] : document.URL, i = [], s = /\?+/.test(r), o = r.match(/^([h|f]{1}[t]{0,1}tp[s]{0,1}\:\/\/)([^ ]+?)\?([^ ]*)/i);
    switch (!0) {
        case"basepath" == n || "bp" == n:
            return s ? o[1] + o[2] : r;
        case"basedir" == n || "bd" == n:
            return e = s ? o[1] + o[2] : r, i = explode("/", e), i.pop(), implode("/", i);
        case"query" == n || "q" == n:
            return s ? o[3] : "";
        default:
            return r
    }
}
define("domReady", [], function () {
    "use strict";
    function u(e) {
        var t;
        for (t = 0; t < e.length; t += 1)e[t](s)
    }

    function a() {
        var e = o;
        i && e.length && (o = [], u(e))
    }

    function f() {
        i || (i = !0, n && clearInterval(n), a())
    }

    function c(e) {
        return i ? e(s) : o.push(e), c
    }

    var e, t, n, r = typeof window != "undefined" && window.document, i = !r, s = r ? document : null, o = [];
    if (r) {
        if (document.addEventListener)document.addEventListener("DOMContentLoaded", f, !1), window.addEventListener("load", f, !1); else if (window.attachEvent) {
            window.attachEvent("onload", f), t = document.createElement("div");
            try {
                e = window.frameElement === null
            } catch (l) {
            }
            t.doScroll && e && window.external && (n = setInterval(function () {
                try {
                    t.doScroll(), f()
                } catch (e) {
                }
            }, 30))
        }
        document.readyState === "complete" && f()
    }
    return c.version = "2.0.1", c.load = function (e, t, n, r) {
        r.isBuild ? n(null) : c(n)
    }, c
}), function (e, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}(typeof window != "undefined" ? window : this, function (window, noGlobal) {
    function isArraylike(e) {
        var t = e.length, n = jQuery.type(e);
        return n === "function" || jQuery.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
    }

    function winnow(e, t, n) {
        if (jQuery.isFunction(t))return jQuery.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return jQuery.grep(e, function (e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (risSimple.test(t))return jQuery.filter(t, e, n);
            t = jQuery.filter(t, e)
        }
        return jQuery.grep(e, function (e) {
            return indexOf.call(t, e) >= 0 !== n
        })
    }

    function sibling(e, t) {
        while ((e = e[t]) && e.nodeType !== 1);
        return e
    }

    function createOptions(e) {
        var t = optionsCache[e] = {};
        return jQuery.each(e.match(rnotwhite) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1), jQuery.ready()
    }

    function Data() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = jQuery.expando + Data.uid++
    }

    function dataAttr(e, t, n) {
        var r;
        if (n === undefined && e.nodeType === 1) {
            r = "data-" + t.replace(rmultiDash, "-$1").toLowerCase(), n = e.getAttribute(r);
            if (typeof n == "string") {
                try {
                    n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : rbrace.test(n) ? jQuery.parseJSON(n) : n
                } catch (i) {
                }
                data_user.set(e, t, n)
            } else n = undefined
        }
        return n
    }

    function returnTrue() {
        return !0
    }

    function returnFalse() {
        return !1
    }

    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (e) {
        }
    }

    function manipulationTarget(e, t) {
        return jQuery.nodeName(e, "table") && jQuery.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function disableScript(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e
    }

    function restoreScript(e) {
        var t = rscriptTypeMasked.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function setGlobalEval(e, t) {
        var n = 0, r = e.length;
        for (; n < r; n++)data_priv.set(e[n], "globalEval", !t || data_priv.get(t[n], "globalEval"))
    }

    function cloneCopyEvent(e, t) {
        var n, r, i, s, o, u, a, f;
        if (t.nodeType !== 1)return;
        if (data_priv.hasData(e)) {
            s = data_priv.access(e), o = data_priv.set(t, s), f = s.events;
            if (f) {
                delete o.handle, o.events = {};
                for (i in f)for (n = 0, r = f[i].length; n < r; n++)jQuery.event.add(t, i, f[i][n])
            }
        }
        data_user.hasData(e) && (u = data_user.access(e), a = jQuery.extend({}, u), data_user.set(t, a))
    }

    function getAll(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && jQuery.nodeName(e, t) ? jQuery.merge([e], n) : n
    }

    function fixInput(e, t) {
        var n = t.nodeName.toLowerCase();
        if (n === "input" && rcheckableType.test(e.type))t.checked = e.checked; else if (n === "input" || n === "textarea")t.defaultValue = e.defaultValue
    }

    function actualDisplay(e, t) {
        var n, r = jQuery(t.createElement(e)).appendTo(t.body), i = window.getDefaultComputedStyle && (n = window.getDefaultComputedStyle(r[0])) ? n.display : jQuery.css(r[0], "display");
        return r.detach(), i
    }

    function defaultDisplay(e) {
        var t = document, n = elemdisplay[e];
        if (!n) {
            n = actualDisplay(e, t);
            if (n === "none" || !n)iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = iframe[0].contentDocument, t.write(), t.close(), n = actualDisplay(e, t), iframe.detach();
            elemdisplay[e] = n
        }
        return n
    }

    function curCSS(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || getStyles(e), n && (o = n.getPropertyValue(t) || n[t]), n && (o === "" && !jQuery.contains(e.ownerDocument, e) && (o = jQuery.style(e, t)), rnumnonpx.test(o) && rmargin.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), o !== undefined ? o + "" : o
    }

    function addGetHookIf(e, t) {
        return {
            get: function () {
                if (e()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function vendorPropName(e, t) {
        if (t in e)return t;
        var n = t[0].toUpperCase() + t.slice(1), r = t, i = cssPrefixes.length;
        while (i--) {
            t = cssPrefixes[i] + n;
            if (t in e)return t
        }
        return r
    }

    function setPositiveNumber(e, t, n) {
        var r = rnumsplit.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function augmentWidthOrHeight(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
        for (; s < 4; s += 2)n === "margin" && (o += jQuery.css(e, n + cssExpand[s], !0, i)), r ? (n === "content" && (o -= jQuery.css(e, "padding" + cssExpand[s], !0, i)), n !== "margin" && (o -= jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i))) : (o += jQuery.css(e, "padding" + cssExpand[s], !0, i), n !== "padding" && (o += jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i)));
        return o
    }

    function getWidthOrHeight(e, t, n) {
        var r = !0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = getStyles(e), o = jQuery.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = curCSS(e, t, s);
            if (i < 0 || i == null)i = e.style[t];
            if (rnumnonpx.test(i))return i;
            r = o && (support.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + augmentWidthOrHeight(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function showHide(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style)continue;
            s[o] = data_priv.get(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && isHidden(r) && (s[o] = data_priv.access(r, "olddisplay", defaultDisplay(r.nodeName)))) : (i = isHidden(r), (n !== "none" || !i) && data_priv.set(r, "olddisplay", i ? n : jQuery.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style)continue;
            if (!t || r.style.display === "none" || r.style.display === "")r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function Tween(e, t, n, r, i) {
        return new Tween.prototype.init(e, t, n, r, i)
    }

    function createFxNow() {
        return setTimeout(function () {
            fxNow = undefined
        }), fxNow = jQuery.now()
    }

    function genFx(e, t) {
        var n, r = 0, i = {height: e};
        t = t ? 1 : 0;
        for (; r < 4; r += 2 - t)n = cssExpand[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function createTween(e, t, n) {
        var r, i = (tweeners[t] || []).concat(tweeners["*"]), s = 0, o = i.length;
        for (; s < o; s++)if (r = i[s].call(n, t, e))return r
    }

    function defaultPrefilter(e, t, n) {
        var r, i, s, o, u, a, f, l, c = this, h = {}, p = e.style, d = e.nodeType && isHidden(e), v = data_priv.get(e, "fxshow");
        n.queue || (u = jQuery._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
            u.unqueued || a()
        }), u.unqueued++, c.always(function () {
            c.always(function () {
                u.unqueued--, jQuery.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], f = jQuery.css(e, "display"), l = f === "none" ? data_priv.get(e, "olddisplay") || defaultDisplay(e.nodeName) : f, l === "inline" && jQuery.css(e, "float") === "none" && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if (rfxtypes.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (d ? "hide" : "show")) {
                    if (i !== "show" || !v || v[r] === undefined)continue;
                    d = !0
                }
                h[r] = v && v[r] || jQuery.style(e, r)
            } else f = undefined
        }
        if (!jQuery.isEmptyObject(h)) {
            v ? "hidden"in v && (d = v.hidden) : v = data_priv.access(e, "fxshow", {}), s && (v.hidden = !d), d ? jQuery(e).show() : c.done(function () {
                jQuery(e).hide()
            }), c.done(function () {
                var t;
                data_priv.remove(e, "fxshow");
                for (t in h)jQuery.style(e, t, h[t])
            });
            for (r in h)o = createTween(d ? v[r] : 0, r, c), r in v || (v[r] = o.start, d && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        } else(f === "none" ? defaultDisplay(e.nodeName) : f) === "inline" && (p.display = f)
    }

    function propFilter(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = jQuery.camelCase(n), i = t[r], s = e[n], jQuery.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = jQuery.cssHooks[r];
            if (o && "expand"in o) {
                s = o.expand(s), delete e[r];
                for (n in s)n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Animation(e, t, n) {
        var r, i, s = 0, o = animationPrefilters.length, u = jQuery.Deferred().always(function () {
            delete a.elem
        }), a = function () {
            if (i)return !1;
            var t = fxNow || createFxNow(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
            for (; o < a; o++)f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
        }, f = u.promise({
            elem: e,
            props: jQuery.extend({}, t),
            opts: jQuery.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: fxNow || createFxNow(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = jQuery.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? f.tweens.length : 0;
                if (i)return this;
                i = !0;
                for (; n < r; n++)f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
            }
        }), l = f.props;
        propFilter(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = animationPrefilters[s].call(f, e, l, f.opts);
            if (r)return r
        }
        return jQuery.map(l, createTween, f), jQuery.isFunction(f.opts.start) && f.opts.start.call(e, f), jQuery.fx.timer(jQuery.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function addToPrefiltersOrTransports(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0, s = t.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(n))while (r = s[i++])r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function inspectPrefiltersOrTransports(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, jQuery.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f])return t.dataTypes.unshift(f), o(f), !1;
                if (s)return !(a = f)
            }), a
        }

        var i = {}, s = e === transports;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function ajaxExtend(e, t) {
        var n, r, i = jQuery.ajaxSettings.flatOptions || {};
        for (n in t)t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && jQuery.extend(!0, e, r), e
    }

    function ajaxHandleResponses(e, t, n) {
        var r, i, s, o, u = e.contents, a = e.dataTypes;
        while (a[0] === "*")a.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)for (i in u)if (u[i] && u[i].test(r)) {
            a.unshift(i);
            break
        }
        if (a[0]in n)s = a[0]; else {
            for (i in n) {
                if (!a[0] || e.converters[i + " " + a[0]]) {
                    s = i;
                    break
                }
                o || (o = i)
            }
            s = s || o
        }
        if (s)return s !== a[0] && a.unshift(s), n[s]
    }

    function ajaxConvert(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])for (o in e.converters)f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)if (s === "*")s = a; else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o)for (i in f) {
                    u = i.split(" ");
                    if (u[1] === s) {
                        o = f[a + " " + u[0]] || f["* " + u[0]];
                        if (o) {
                            o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                            break
                        }
                    }
                }
                if (o !== !0)if (o && e["throws"])t = o(t); else try {
                    t = o(t)
                } catch (c) {
                    return {state: "parsererror", error: o ? c : "No conversion from " + a + " to " + s}
                }
            }
        }
        return {state: "success", data: t}
    }

    function buildParams(e, t, n, r) {
        var i;
        if (jQuery.isArray(t))jQuery.each(t, function (t, i) {
            n || rbracket.test(e) ? r(e, i) : buildParams(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        }); else if (!n && jQuery.type(t) === "object")for (i in t)buildParams(e + "[" + i + "]", t[i], n, r); else r(e, t)
    }

    function getWindow(e) {
        return jQuery.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
    }

    var arr = [], slice = arr.slice, concat = arr.concat, push = arr.push, indexOf = arr.indexOf, class2type = {}, toString = class2type.toString, hasOwn = class2type.hasOwnProperty, support = {}, document = window.document, version = "2.1.3", jQuery = function (e, t) {
        return new jQuery.fn.init(e, t)
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function (e, t) {
        return t.toUpperCase()
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function () {
            return slice.call(this)
        },
        get: function (e) {
            return e != null ? e < 0 ? this[e + this.length] : this[e] : slice.call(this)
        },
        pushStack: function (e) {
            var t = jQuery.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return jQuery.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(jQuery.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(slice.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    }, jQuery.extend = jQuery.fn.extend = function () {
        var e, t, n, r, i, s, o = arguments[0] || {}, u = 1, a = arguments.length, f = !1;
        typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object" && !jQuery.isFunction(o) && (o = {}), u === a && (o = this, u--);
        for (; u < a; u++)if ((e = arguments[u]) != null)for (t in e) {
            n = o[t], r = e[t];
            if (o === r)continue;
            f && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r))) ? (i ? (i = !1, s = n && jQuery.isArray(n) ? n : []) : s = n && jQuery.isPlainObject(n) ? n : {}, o[t] = jQuery.extend(f, s, r)) : r !== undefined && (o[t] = r)
        }
        return o
    }, jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {
        },
        isFunction: function (e) {
            return jQuery.type(e) === "function"
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return e != null && e === e.window
        },
        isNumeric: function (e) {
            return !jQuery.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function (e) {
            return jQuery.type(e) !== "object" || e.nodeType || jQuery.isWindow(e) ? !1 : e.constructor && !hasOwn.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        },
        type: function (e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? class2type[toString.call(e)] || "object" : typeof e
        },
        globalEval: function (code) {
            var script, indirect = eval;
            code = jQuery.trim(code), code && (code.indexOf("use strict") === 1 ? (script = document.createElement("script"), script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code))
        },
        camelCase: function (e) {
            return e.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0, s = e.length, o = isArraylike(e);
            if (n)if (o)for (; i < s; i++) {
                r = t.apply(e[i], n);
                if (r === !1)break
            } else for (i in e) {
                r = t.apply(e[i], n);
                if (r === !1)break
            } else if (o)for (; i < s; i++) {
                r = t.call(e[i], i, e[i]);
                if (r === !1)break
            } else for (i in e) {
                r = t.call(e[i], i, e[i]);
                if (r === !1)break
            }
            return e
        },
        trim: function (e) {
            return e == null ? "" : (e + "").replace(rtrim, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return e != null && (isArraylike(Object(e)) ? jQuery.merge(n, typeof e == "string" ? [e] : e) : push.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return t == null ? -1 : indexOf.call(t, e, n)
        },
        merge: function (e, t) {
            var n = +t.length, r = 0, i = e.length;
            for (; r < n; r++)e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [], s = 0, o = e.length, u = !n;
            for (; s < o; s++)r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0, s = e.length, o = isArraylike(e), u = [];
            if (o)for (; i < s; i++)r = t(e[i], i, n), r != null && u.push(r); else for (i in e)r = t(e[i], i, n), r != null && u.push(r);
            return concat.apply([], u)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            return typeof t == "string" && (n = e[t], t = e, e = n), jQuery.isFunction(e) ? (r = slice.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(slice.call(arguments)))
            }, i.guid = e.guid = e.guid || jQuery.guid++, i) : undefined
        },
        now: Date.now,
        support: support
    }), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        class2type["[object " + t + "]"] = t.toLowerCase()
    });
    var Sizzle = function (e) {
        function ot(e, t, r, i) {
            var s, u, f, l, c, d, g, y, S, x;
            (t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, r = r || [], l = t.nodeType;
            if (typeof e != "string" || !e || l !== 1 && l !== 9 && l !== 11)return r;
            if (!i && v) {
                if (l !== 11 && (s = Z.exec(e)))if (f = s[1]) {
                    if (l === 9) {
                        u = t.getElementById(f);
                        if (!u || !u.parentNode)return r;
                        if (u.id === f)return r.push(u), r
                    } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f)return r.push(u), r
                } else {
                    if (s[2])return D.apply(r, t.getElementsByTagName(e)), r;
                    if ((f = s[3]) && n.getElementsByClassName)return D.apply(r, t.getElementsByClassName(f)), r
                }
                if (n.qsa && (!m || !m.test(e))) {
                    y = g = w, S = t, x = l !== 1 && e;
                    if (l === 1 && t.nodeName.toLowerCase() !== "object") {
                        d = o(e), (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", c = d.length;
                        while (c--)d[c] = y + gt(d[c]);
                        S = et.test(e) && vt(t.parentNode) || t, x = d.join(",")
                    }
                    if (x)try {
                        return D.apply(r, S.querySelectorAll(x)), r
                    } catch (T) {
                    } finally {
                        g || t.removeAttribute("id")
                    }
                }
            }
            return a(e.replace(z, "$1"), t, r, i)
        }

        function ut() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }

            var e = [];
            return t
        }

        function at(e) {
            return e[w] = !0, e
        }

        function ft(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"), i = e.length;
            while (i--)r.attrHandle[n[i]] = t
        }

        function ct(e, t) {
            var n = t && e, r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || L) - (~e.sourceIndex || L);
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return -1;
            return e ? 1 : -1
        }

        function ht(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function pt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function dt(e) {
            return at(function (t) {
                return t = +t, at(function (n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function vt(e) {
            return e && typeof e.getElementsByTagName != "undefined" && e
        }

        function mt() {
        }

        function gt(e) {
            var t = 0, n = e.length, r = "";
            for (; t < n; t++)r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var r = t.dir, i = n && r === "parentNode", s = x++;
            return t.first ? function (t, n, s) {
                while (t = t[r])if (t.nodeType === 1 || i)return e(t, n, s)
            } : function (t, n, o) {
                var u, a, f = [S, s];
                if (o) {
                    while (t = t[r])if (t.nodeType === 1 || i)if (e(t, n, o))return !0
                } else while (t = t[r])if (t.nodeType === 1 || i) {
                    a = t[w] || (t[w] = {});
                    if ((u = a[r]) && u[0] === S && u[1] === s)return f[2] = u[2];
                    a[r] = f;
                    if (f[2] = e(t, n, o))return !0
                }
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function wt(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++)ot(e, t[r], n);
            return n
        }

        function Et(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)if (s = e[u])if (!n || n(s, r, i))o.push(s), f && t.push(u);
            return o
        }

        function St(e, t, n, r, i, s) {
            return r && !r[w] && (r = St(r)), i && !i[w] && (i = St(i, s)), at(function (s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || wt(t || "*", u.nodeType ? [u] : u, []), m = e && (s || !t) ? Et(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = Et(g, p), r(f, [], u, a), l = f.length;
                    while (l--)if (c = f[l])g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = Et(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : D.apply(o, g)
            })
        }

        function xt(e) {
            var t, n, i, s = e.length, o = r.relative[e[0].type], u = o || r.relative[" "], a = o ? 1 : 0, l = yt(function (e) {
                return e === t
            }, u, !0), c = yt(function (e) {
                return H(t, e) > -1
            }, u, !0), h = [function (e, n, r) {
                var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                return t = null, i
            }];
            for (; a < s; a++)if (n = r.relative[e[a].type])h = [yt(bt(h), n)]; else {
                n = r.filter[e[a].type].apply(null, e[a].matches);
                if (n[w]) {
                    i = ++a;
                    for (; i < s; i++)if (r.relative[e[i].type])break;
                    return St(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({value: e[a - 2].type === " " ? "*" : ""})).replace(z, "$1"), n, a < i && xt(e.slice(a, i)), i < s && xt(e = e.slice(i)), i < s && gt(e))
                }
                h.push(n)
            }
            return bt(h)
        }

        function Tt(e, t) {
            var n = t.length > 0, i = e.length > 0, s = function (s, o, u, a, l) {
                var c, h, d, v = 0, m = "0", g = s && [], y = [], b = f, w = s || i && r.find.TAG("*", l), E = S += b == null ? 1 : Math.random() || .1, x = w.length;
                l && (f = o !== p && o);
                for (; m !== x && (c = w[m]) != null; m++) {
                    if (i && c) {
                        h = 0;
                        while (d = e[h++])if (d(c, o, u)) {
                            a.push(c);
                            break
                        }
                        l && (S = E)
                    }
                    n && ((c = !d && c) && v--, s && g.push(c))
                }
                v += m;
                if (n && m !== v) {
                    h = 0;
                    while (d = t[h++])d(g, y, o, u);
                    if (s) {
                        if (v > 0)while (m--)!g[m] && !y[m] && (y[m] = M.call(a));
                        y = Et(y)
                    }
                    D.apply(a, y), l && !s && y.length > 0 && v + t.length > 1 && ot.uniqueSort(a)
                }
                return l && (S = E, f = b), g
            };
            return n ? at(s) : s
        }

        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date, E = e.document, S = 0, x = 0, T = ut(), N = ut(), C = ut(), k = function (e, t) {
            return e === t && (c = !0), 0
        }, L = 1 << 31, A = {}.hasOwnProperty, O = [], M = O.pop, _ = O.push, D = O.push, P = O.slice, H = function (e, t) {
            var n = 0, r = e.length;
            for (; n < r; n++)if (e[n] === t)return n;
            return -1
        }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", j = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", I = F.replace("w", "w#"), q = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]", R = ":(" + F + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|" + ".*" + ")\\)|)", U = new RegExp(j + "+", "g"), z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"), W = new RegExp("^" + j + "*," + j + "*"), X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"), V = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"), $ = new RegExp(R), J = new RegExp("^" + I + "$"), K = {
            ID: new RegExp("^#(" + F + ")"),
            CLASS: new RegExp("^\\.(" + F + ")"),
            TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + q),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + B + ")$", "i"),
            needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
        }, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /[+~]/, tt = /'|\\/g, nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"), rt = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        }, it = function () {
            h()
        };
        try {
            D.apply(O = P.call(E.childNodes), E.childNodes), O[E.childNodes.length].nodeType
        } catch (st) {
            D = {
                apply: O.length ? function (e, t) {
                    _.apply(e, P.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = ot.support = {}, s = ot.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, h = ot.setDocument = function (e) {
            var t, i, o = e ? e.ownerDocument || e : E;
            if (o === p || o.nodeType !== 9 || !o.documentElement)return p;
            p = o, d = o.documentElement, i = o.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)), v = !s(o), n.attributes = ft(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ft(function (e) {
                return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Y.test(o.getElementsByClassName), n.getById = ft(function (e) {
                return d.appendChild(e).id = w, !o.getElementsByName || !o.getElementsByName(w).length
            }), n.getById ? (r.find.ID = function (e, t) {
                if (typeof t.getElementById != "undefined" && v) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function (e) {
                var t = e.replace(nt, rt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function (e) {
                var t = e.replace(nt, rt);
                return function (e) {
                    var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName != "undefined")return t.getElementsByTagName(e);
                if (n.qsa)return t.querySelectorAll(e)
            } : function (e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++])n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (v)return t.getElementsByClassName(e)
                }, g = [], m = [];
            if (n.qsa = Y.test(o.querySelectorAll))ft(function (e) {
                d.appendChild(e).innerHTML = "<a id='" + w + "'></a>" + "<select id='" + w + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
            }), ft(function (e) {
                var t = o.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            });
            return (n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function (e) {
                n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", R)
            }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Y.test(d.compareDocumentPosition), b = t || Y.test(d.contains) ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return !0;
                return !1
            }, k = t ? function (e, t) {
                if (e === t)return c = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === o || e.ownerDocument === E && b(E, e) ? -1 : t === o || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : r & 4 ? -1 : 1)
            } : function (e, t) {
                if (e === t)return c = !0, 0;
                var n, r = 0, i = e.parentNode, s = t.parentNode, u = [e], a = [t];
                if (!i || !s)return e === o ? -1 : t === o ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
                if (i === s)return ct(e, t);
                n = e;
                while (n = n.parentNode)u.unshift(n);
                n = t;
                while (n = n.parentNode)a.unshift(n);
                while (u[r] === a[r])r++;
                return r ? ct(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
            }, o
        }, ot.matches = function (e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']");
            if (n.matchesSelector && v && (!g || !g.test(t)) && (!m || !m.test(t)))try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11)return r
            } catch (i) {
            }
            return ot(t, p, null, [e]).length > 0
        }, ot.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && h(e), b(e, t)
        }, ot.attr = function (e, t) {
            (e.ownerDocument || e) !== p && h(e);
            var i = r.attrHandle[t.toLowerCase()], s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : undefined;
            return s !== undefined ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }, ot.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function (e) {
            var t, r = [], i = 0, s = 0;
            c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k);
            if (c) {
                while (t = e[s++])t === e[s] && (i = r.push(s));
                while (i--)e.splice(r[i], 1)
            }
            return l = null, e
        }, i = ot.getText = function (e) {
            var t, n = "", r = 0, s = e.nodeType;
            if (!s)while (t = e[r++])n += i(t); else if (s === 1 || s === 9 || s === 11) {
                if (typeof e.textContent == "string")return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)n += i(e)
            } else if (s === 3 || s === 4)return e.nodeValue;
            return n
        }, r = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(nt, rt), e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return e === "*" ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function (e) {
                            return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute != "undefined" && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ot.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", u = t === "of-type";
                    return r === 1 && i === 0 ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())if (c.nodeType === 1 && ++h && c === t) {
                                    l[e] = [S, p, h];
                                    break
                                }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S)h = f[1]; else while (c = ++p && c && c[v] || (h = p = 0) || d.pop())if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                y && ((c[w] || (c[w] = {}))[e] = [S, h]);
                                if (c === t)break
                            }
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
                        var r, s = i(e, t), o = s.length;
                        while (o--)r = H(e, s[o]), e[r] = !(n[r] = s[o])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: at(function (e) {
                    var t = [], n = [], r = u(e.replace(z, "$1"));
                    return r[w] ? at(function (e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)if (s = o[u])e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                    }
                }), has: at(function (e) {
                    return function (t) {
                        return ot(e, t).length > 0
                    }
                }), contains: at(function (e) {
                    return e = e.replace(nt, rt), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }), lang: at(function (e) {
                    return J.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(), function (t) {
                        var n;
                        do if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === d
                }, focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !r.pseudos.empty(e)
                }, header: function (e) {
                    return G.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                }, text: function (e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                }, first: dt(function () {
                    return [0]
                }), last: dt(function (e, t) {
                    return [t - 1]
                }), eq: dt(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: dt(function (e, t) {
                    var n = 0;
                    for (; n < t; n += 2)e.push(n);
                    return e
                }), odd: dt(function (e, t) {
                    var n = 1;
                    for (; n < t; n += 2)e.push(n);
                    return e
                }), lt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;)e.push(r);
                    return e
                }), gt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;)e.push(r);
                    return e
                })
            }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})r.pseudos[t] = ht(t);
        for (t in{submit: !0, reset: !0})r.pseudos[t] = pt(t);
        return mt.prototype = r.filters = r.pseudos, r.setFilters = new mt, o = ot.tokenize = function (e, t) {
            var n, i, s, o, u, a, f, l = N[e + " "];
            if (l)return t ? 0 : l.slice(0);
            u = e, a = [], f = r.preFilter;
            while (u) {
                if (!n || (i = W.exec(u)))i && (u = u.slice(i[0].length) || u), a.push(s = []);
                n = !1;
                if (i = X.exec(u))n = i.shift(), s.push({value: n, type: i[0].replace(z, " ")}), u = u.slice(n.length);
                for (o in r.filter)(i = K[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
                    value: n,
                    type: o,
                    matches: i
                }), u = u.slice(n.length));
                if (!n)break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }, u = ot.compile = function (e, t) {
            var n, r = [], i = [], s = C[e + " "];
            if (!s) {
                t || (t = o(e)), n = t.length;
                while (n--)s = xt(t[n]), s[w] ? r.push(s) : i.push(s);
                s = C(e, Tt(i, r)), s.selector = e
            }
            return s
        }, a = ot.select = function (e, t, i, s) {
            var a, f, l, c, h, p = typeof e == "function" && e, d = !s && o(e = p.selector || e);
            i = i || [];
            if (d.length === 1) {
                f = d[0] = d[0].slice(0);
                if (f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && v && r.relative[f[1].type]) {
                    t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0];
                    if (!t)return i;
                    p && (t = t.parentNode), e = e.slice(f.shift().value.length)
                }
                a = K.needsContext.test(e) ? 0 : f.length;
                while (a--) {
                    l = f[a];
                    if (r.relative[c = l.type])break;
                    if (h = r.find[c])if (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && vt(t.parentNode) || t)) {
                        f.splice(a, 1), e = s.length && gt(f);
                        if (!e)return D.apply(i, s), i;
                        break
                    }
                }
            }
            return (p || u(e, d))(s, t, !v, i, et.test(e) && vt(t.parentNode) || t), i
        }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = ft(function (e) {
            return e.compareDocumentPosition(p.createElement("div")) & 1
        }), ft(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || lt("type|href|height|width", function (e, t, n) {
            if (!n)return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!n.attributes || !ft(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && lt("value", function (e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input")return e.defaultValue
        }), ft(function (e) {
            return e.getAttribute("disabled") == null
        }) || lt(B, function (e, t, n) {
            var r;
            if (!n)return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ot
    }(window);
    jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
    var rneedsContext = jQuery.expr.match.needsContext, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, risSimple = /^.[^:#\[\.,]*$/;
    jQuery.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function (e) {
            return e.nodeType === 1
        }))
    }, jQuery.fn.extend({
        find: function (e) {
            var t, n = this.length, r = [], i = this;
            if (typeof e != "string")return this.pushStack(jQuery(e).filter(function () {
                for (t = 0; t < n; t++)if (jQuery.contains(i[t], this))return !0
            }));
            for (t = 0; t < n; t++)jQuery.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? jQuery.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }, filter: function (e) {
            return this.pushStack(winnow(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(winnow(this, e || [], !0))
        }, is: function (e) {
            return !!winnow(this, typeof e == "string" && rneedsContext.test(e) ? jQuery(e) : e || [], !1).length
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function (e, t) {
        var n, r;
        if (!e)return this;
        if (typeof e == "string") {
            e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? n = [null, e, null] : n = rquickExpr.exec(e);
            if (n && (n[1] || !t)) {
                if (n[1]) {
                    t = t instanceof jQuery ? t[0] : t, jQuery.merge(this, jQuery.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : document, !0));
                    if (rsingleTag.test(n[1]) && jQuery.isPlainObject(t))for (n in t)jQuery.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = document.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = document, this.selector = e, this
            }
            return !t || t.jquery ? (t || rootjQuery).find(e) : this.constructor(t).find(e)
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : jQuery.isFunction(e) ? typeof rootjQuery.ready != "undefined" ? rootjQuery.ready(e) : e(jQuery) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), jQuery.makeArray(e, this))
    };
    init.prototype = jQuery.fn, rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    jQuery.extend({
        dir: function (e, t, n) {
            var r = [], i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9)if (e.nodeType === 1) {
                if (i && jQuery(e).is(n))break;
                r.push(e)
            }
            return r
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling)e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    }), jQuery.fn.extend({
        has: function (e) {
            var t = jQuery(e, this), n = t.length;
            return this.filter(function () {
                var e = 0;
                for (; e < n; e++)if (jQuery.contains(this, t[e]))return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, s = [], o = rneedsContext.test(e) || typeof e != "string" ? jQuery(e, t || this.context) : 0;
            for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && jQuery.find.matchesSelector(n, e))) {
                s.push(n);
                break
            }
            return this.pushStack(s.length > 1 ? jQuery.unique(s) : s)
        }, index: function (e) {
            return e ? typeof e == "string" ? indexOf.call(jQuery(e), this[0]) : indexOf.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(e, t))))
        }, addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), jQuery.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        }, parents: function (e) {
            return jQuery.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return jQuery.dir(e, "parentNode", n)
        }, next: function (e) {
            return sibling(e, "nextSibling")
        }, prev: function (e) {
            return sibling(e, "previousSibling")
        }, nextAll: function (e) {
            return jQuery.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return jQuery.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return jQuery.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return jQuery.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return jQuery.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return jQuery.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || jQuery.merge([], e.childNodes)
        }
    }, function (e, t) {
        jQuery.fn[e] = function (n, r) {
            var i = jQuery.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = jQuery.filter(r, i)), this.length > 1 && (guaranteedUnique[e] || jQuery.unique(i), rparentsprev.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var rnotwhite = /\S+/g, optionsCache = {};
    jQuery.Callbacks = function (e) {
        e = typeof e == "string" ? optionsCache[e] || createOptions(e) : jQuery.extend({}, e);
        var t, n, r, i, s, o, u = [], a = !e.once && [], f = function (c) {
            t = e.memory && c, n = !0, o = i || 0, i = 0, s = u.length, r = !0;
            for (; u && o < s; o++)if (u[o].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1, u && (a ? a.length && f(a.shift()) : t ? u = [] : l.disable())
        }, l = {
            add: function () {
                if (u) {
                    var n = u.length;
                    (function o(t) {
                        jQuery.each(t, function (t, n) {
                            var r = jQuery.type(n);
                            r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && o(n)
                        })
                    })(arguments), r ? s = u.length : t && (i = n, f(t))
                }
                return this
            }, remove: function () {
                return u && jQuery.each(arguments, function (e, t) {
                    var n;
                    while ((n = jQuery.inArray(t, u, n)) > -1)u.splice(n, 1), r && (n <= s && s--, n <= o && o--)
                }), this
            }, has: function (e) {
                return e ? jQuery.inArray(e, u) > -1 : !!u && !!u.length
            }, empty: function () {
                return u = [], s = 0, this
            }, disable: function () {
                return u = a = t = undefined, this
            }, disabled: function () {
                return !u
            }, lock: function () {
                return a = undefined, t || l.disable(), this
            }, locked: function () {
                return !a
            }, fireWith: function (e, t) {
                return u && (!n || a) && (t = t || [], t = [e, t.slice ? t.slice() : t], r ? a.push(t) : f(t)), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return l
    }, jQuery.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return jQuery.Deferred(function (n) {
                        jQuery.each(t, function (t, s) {
                            var o = jQuery.isFunction(e[t]) && e[t];
                            i[s[1]](function () {
                                var e = o && o.apply(this, arguments);
                                e && jQuery.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return e != null ? jQuery.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, jQuery.each(t, function (e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = slice.call(arguments), r = n.length, i = r !== 1 || e && jQuery.isFunction(e.promise) ? r : 0, s = i === 1 ? e : jQuery.Deferred(), o = function (e, t, n) {
                return function (r) {
                    t[e] = this, n[e] = arguments.length > 1 ? slice.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++)n[t] && jQuery.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    });
    var readyList;
    jQuery.fn.ready = function (e) {
        return jQuery.ready.promise().done(e), this
    }, jQuery.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? jQuery.readyWait++ : jQuery.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? --jQuery.readyWait : jQuery.isReady)return;
            jQuery.isReady = !0;
            if (e !== !0 && --jQuery.readyWait > 0)return;
            readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready"))
        }
    }), jQuery.ready.promise = function (e) {
        return readyList || (readyList = jQuery.Deferred(), document.readyState === "complete" ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1))), readyList.promise(e)
    }, jQuery.ready.promise();
    var access = jQuery.access = function (e, t, n, r, i, s, o) {
        var u = 0, a = e.length, f = n == null;
        if (jQuery.type(n) === "object") {
            i = !0;
            for (u in n)jQuery.access(e, t, u, n[u], !0, s, o)
        } else if (r !== undefined) {
            i = !0, jQuery.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function (e, t, n) {
                return f.call(jQuery(e), n)
            }));
            if (t)for (; u < a; u++)t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
        }
        return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
    };
    jQuery.acceptData = function (e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
    }, Data.uid = 1, Data.accepts = jQuery.acceptData, Data.prototype = {
        key: function (e) {
            if (!Data.accepts(e))return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = Data.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, jQuery.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var r, i = this.key(e), s = this.cache[i];
            if (typeof t == "string")s[t] = n; else if (jQuery.isEmptyObject(s))jQuery.extend(this.cache[i], t); else for (r in t)s[r] = t[r];
            return s
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return t === undefined ? n : n[t]
        }, access: function (e, t, n) {
            var r;
            return t === undefined || t && typeof t == "string" && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, jQuery.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
        }, remove: function (e, t) {
            var n, r, i, s = this.key(e), o = this.cache[s];
            if (t === undefined)this.cache[s] = {}; else {
                jQuery.isArray(t) ? r = t.concat(t.map(jQuery.camelCase)) : (i = jQuery.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(rnotwhite) || [])), n = r.length;
                while (n--)delete o[r[n]]
            }
        }, hasData: function (e) {
            return !jQuery.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var data_priv = new Data, data_user = new Data, rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
    jQuery.extend({
        hasData: function (e) {
            return data_user.hasData(e) || data_priv.hasData(e)
        }, data: function (e, t, n) {
            return data_user.access(e, t, n)
        }, removeData: function (e, t) {
            data_user.remove(e, t)
        }, _data: function (e, t, n) {
            return data_priv.access(e, t, n)
        }, _removeData: function (e, t) {
            data_priv.remove(e, t)
        }
    }), jQuery.fn.extend({
        data: function (e, t) {
            var n, r, i, s = this[0], o = s && s.attributes;
            if (e === undefined) {
                if (this.length) {
                    i = data_user.get(s);
                    if (s.nodeType === 1 && !data_priv.get(s, "hasDataAttrs")) {
                        n = o.length;
                        while (n--)o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = jQuery.camelCase(r.slice(5)), dataAttr(s, r, i[r])));
                        data_priv.set(s, "hasDataAttrs", !0)
                    }
                }
                return i
            }
            return typeof e == "object" ? this.each(function () {
                data_user.set(this, e)
            }) : access(this, function (t) {
                var n, r = jQuery.camelCase(e);
                if (s && t === undefined) {
                    n = data_user.get(s, e);
                    if (n !== undefined)return n;
                    n = data_user.get(s, r);
                    if (n !== undefined)return n;
                    n = dataAttr(s, r, undefined);
                    if (n !== undefined)return n;
                    return
                }
                this.each(function () {
                    var n = data_user.get(this, r);
                    data_user.set(this, r, t), e.indexOf("-") !== -1 && n !== undefined && data_user.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                data_user.remove(this, e)
            })
        }
    }), jQuery.extend({
        queue: function (e, t, n) {
            var r;
            if (e)return t = (t || "fx") + "queue", r = data_priv.get(e, t), n && (!r || jQuery.isArray(n) ? r = data_priv.access(e, t, jQuery.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = jQuery.queue(e, t), r = n.length, i = n.shift(), s = jQuery._queueHooks(e, t), o = function () {
                jQuery.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return data_priv.get(e, n) || data_priv.access(e, n, {
                    empty: jQuery.Callbacks("once memory").add(function () {
                        data_priv.remove(e, [t + "queue", n])
                    })
                })
        }
    }), jQuery.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? jQuery.queue(this[0], e) : t === undefined ? this : this.each(function () {
                var n = jQuery.queue(this, e, t);
                jQuery._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && jQuery.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                jQuery.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = jQuery.Deferred(), s = this, o = this.length, u = function () {
                --r || i.resolveWith(s, [s])
            };
            typeof e != "string" && (t = e, e = undefined), e = e || "fx";
            while (o--)n = data_priv.get(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, cssExpand = ["Top", "Right", "Bottom", "Left"], isHidden = function (e, t) {
        return e = t || e, jQuery.css(e, "display") === "none" || !jQuery.contains(e.ownerDocument, e)
    }, rcheckableType = /^(?:checkbox|radio)$/i;
    (function () {
        var e = document.createDocumentFragment(), t = e.appendChild(document.createElement("div")), n = document.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), support.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    })();
    var strundefined = typeof undefined;
    support.focusinBubbles = "onfocusin"in window;
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    jQuery.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.get(e);
            if (!m)return;
            n.handler && (s = n, n = s.handler, i = s.selector), n.guid || (n.guid = jQuery.guid++), (a = m.events) || (a = m.events = {}), (o = m.handle) || (o = m.handle = function (t) {
                return typeof jQuery !== strundefined && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : undefined
            }), t = (t || "").match(rnotwhite) || [""], f = t.length;
            while (f--) {
                u = rtypenamespace.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p)continue;
                c = jQuery.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, c = jQuery.event.special[p] || {}, l = jQuery.extend({
                    type: p,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && jQuery.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, s), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, (!c.setup || c.setup.call(e, r, d, o) === !1) && e.addEventListener && e.addEventListener(p, o, !1)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), jQuery.event.global[p] = !0
            }
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.hasData(e) && data_priv.get(e);
            if (!m || !(a = m.events))return;
            t = (t || "").match(rnotwhite) || [""], f = t.length;
            while (f--) {
                u = rtypenamespace.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in a)jQuery.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = jQuery.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length;
                while (s--)l = h[s], (i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
                o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && jQuery.removeEvent(e, p, m.handle), delete a[p])
            }
            jQuery.isEmptyObject(a) && (delete m.handle, data_priv.remove(e, "events"))
        },
        trigger: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = [n || document], h = hasOwn.call(e, "type") ? e.type : e, p = hasOwn.call(e, "namespace") ? e.namespace.split(".") : [];
            s = o = n = n || document;
            if (n.nodeType === 3 || n.nodeType === 8)return;
            if (rfocusMorph.test(h + jQuery.event.triggered))return;
            h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, e = e[jQuery.expando] ? e : new jQuery.Event(h, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = t == null ? [e] : jQuery.makeArray(t, [e]), l = jQuery.event.special[h] || {};
            if (!r && l.trigger && l.trigger.apply(n, t) === !1)return;
            if (!r && !l.noBubble && !jQuery.isWindow(n)) {
                u = l.delegateType || h, rfocusMorph.test(u + h) || (s = s.parentNode);
                for (; s; s = s.parentNode)c.push(s), o = s;
                o === (n.ownerDocument || document) && c.push(o.defaultView || o.parentWindow || window)
            }
            i = 0;
            while ((s = c[i++]) && !e.isPropagationStopped())e.type = i > 1 ? u : l.bindType || h, f = (data_priv.get(s, "events") || {})[e.type] && data_priv.get(s, "handle"), f && f.apply(s, t), f = a && s[a], f && f.apply && jQuery.acceptData(s) && (e.result = f.apply(s, t), e.result === !1 && e.preventDefault());
            return e.type = h, !r && !e.isDefaultPrevented() && (!l._default || l._default.apply(c.pop(), t) === !1) && jQuery.acceptData(n) && a && jQuery.isFunction(n[h]) && !jQuery.isWindow(n) && (o = n[a], o && (n[a] = null), jQuery.event.triggered = h, n[h](), jQuery.event.triggered = undefined, o && (n[a] = o)), e.result
        },
        dispatch: function (e) {
            e = jQuery.event.fix(e);
            var t, n, r, i, s, o = [], u = slice.call(arguments), a = (data_priv.get(this, "events") || {})[e.type] || [], f = jQuery.event.special[e.type] || {};
            u[0] = e, e.delegateTarget = this;
            if (f.preDispatch && f.preDispatch.call(this, e) === !1)return;
            o = jQuery.event.handlers.call(this, e, a), t = 0;
            while ((i = o[t++]) && !e.isPropagationStopped()) {
                e.currentTarget = i.elem, n = 0;
                while ((s = i.handlers[n++]) && !e.isImmediatePropagationStopped())if (!e.namespace_re || e.namespace_re.test(s.namespace))e.handleObj = s, e.data = s.data, r = ((jQuery.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return f.postDispatch && f.postDispatch.call(this, e), e.result
        },
        handlers: function (e, t) {
            var n, r, i, s, o = [], u = t.delegateCount, a = e.target;
            if (u && a.nodeType && (!e.button || e.type !== "click"))for (; a !== this; a = a.parentNode || this)if (a.disabled !== !0 || e.type !== "click") {
                r = [];
                for (n = 0; n < u; n++)s = t[n], i = s.selector + " ", r[i] === undefined && (r[i] = s.needsContext ? jQuery(i, this).index(a) >= 0 : jQuery.find(i, this, null, [a]).length), r[i] && r.push(s);
                r.length && o.push({elem: a, handlers: r})
            }
            return u < t.length && o.push({elem: this, handlers: t.slice(u)}), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, s = t.button;
                return e.pageX == null && t.clientX != null && (n = e.target.ownerDocument || document, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[jQuery.expando])return e;
            var t, n, r, i = e.type, s = e, o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = rmouseEvent.test(i) ? this.mouseHooks : rkeyEvent.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new jQuery.Event(s), t = r.length;
            while (t--)n = r[t], e[n] = s[n];
            return e.target || (e.target = document), e.target.nodeType === 3 && (e.target = e.target.parentNode), o.filter ? o.filter(e, s) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== safeActiveElement() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === safeActiveElement() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input"))return this.click(), !1
                }, _default: function (e) {
                    return jQuery.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = jQuery.extend(new jQuery.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? jQuery.event.trigger(i, null, t) : jQuery.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, jQuery.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, jQuery.Event = function (e, t) {
        if (!(this instanceof jQuery.Event))return new jQuery.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === !1 ? returnTrue : returnFalse) : this.type = e, t && jQuery.extend(this, t), this.timeStamp = e && e.timeStamp || jQuery.now(), this[jQuery.expando] = !0
    }, jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        jQuery.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                if (!i || i !== r && !jQuery.contains(r, i))e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), support.focusinBubbles || jQuery.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            jQuery.event.simulate(t, e.target, jQuery.event.fix(e), !0)
        };
        jQuery.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = data_priv.access(r, t);
                i || r.addEventListener(e, n, !0), data_priv.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = data_priv.access(r, t) - 1;
                i ? data_priv.access(r, t, i) : (r.removeEventListener(e, n, !0), data_priv.remove(r, t))
            }
        }
    }), jQuery.fn.extend({
        on: function (e, t, n, r, i) {
            var s, o;
            if (typeof e == "object") {
                typeof t != "string" && (n = n || t, t = undefined);
                for (o in e)this.on(o, t, n, e[o], i);
                return this
            }
            n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t == "string" ? (r = n, n = undefined) : (r = n, n = t, t = undefined));
            if (r === !1)r = returnFalse; else if (!r)return this;
            return i === 1 && (s = r, r = function (e) {
                return jQuery().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = jQuery.guid++)), this.each(function () {
                jQuery.event.add(this, e, r, n, t)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if (typeof e == "object") {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            if (t === !1 || typeof t == "function")n = t, t = undefined;
            return n === !1 && (n = returnFalse), this.each(function () {
                jQuery.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                jQuery.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n)return jQuery.event.trigger(e, t, n, !0)
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u = e.cloneNode(!0), a = jQuery.contains(e.ownerDocument, e);
            if (!support.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !jQuery.isXMLDoc(e)) {
                o = getAll(u), s = getAll(e);
                for (r = 0, i = s.length; r < i; r++)fixInput(s[r], o[r])
            }
            if (t)if (n) {
                s = s || getAll(e), o = o || getAll(u);
                for (r = 0, i = s.length; r < i; r++)cloneCopyEvent(s[r], o[r])
            } else cloneCopyEvent(e, u);
            return o = getAll(u, "script"), o.length > 0 && setGlobalEval(o, !a && getAll(e, "script")), u
        }, buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l = t.createDocumentFragment(), c = [], h = 0, p = e.length;
            for (; h < p; h++) {
                i = e[h];
                if (i || i === 0)if (jQuery.type(i) === "object")jQuery.merge(c, i.nodeType ? [i] : i); else if (!rhtml.test(i))c.push(t.createTextNode(i)); else {
                    s = s || l.appendChild(t.createElement("div")), o = (rtagName.exec(i) || ["", ""])[1].toLowerCase(), u = wrapMap[o] || wrapMap._default, s.innerHTML = u[1] + i.replace(rxhtmlTag, "<$1></$2>") + u[2], f = u[0];
                    while (f--)s = s.lastChild;
                    jQuery.merge(c, s.childNodes), s = l.firstChild, s.textContent = ""
                }
            }
            l.textContent = "", h = 0;
            while (i = c[h++]) {
                if (r && jQuery.inArray(i, r) !== -1)continue;
                a = jQuery.contains(i.ownerDocument, i), s = getAll(l.appendChild(i), "script"), a && setGlobalEval(s);
                if (n) {
                    f = 0;
                    while (i = s[f++])rscriptType.test(i.type || "") && n.push(i)
                }
            }
            return l
        }, cleanData: function (e) {
            var t, n, r, i, s = jQuery.event.special, o = 0;
            for (; (n = e[o]) !== undefined; o++) {
                if (jQuery.acceptData(n)) {
                    i = n[data_priv.expando];
                    if (i && (t = data_priv.cache[i])) {
                        if (t.events)for (r in t.events)s[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
                        data_priv.cache[i] && delete data_priv.cache[i]
                    }
                }
                delete data_user.cache[n[data_user.expando]]
            }
        }
    }), jQuery.fn.extend({
        text: function (e) {
            return access(this, function (e) {
                return e === undefined ? jQuery.text(this) : this.empty().each(function () {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9)this.textContent = e
                })
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = manipulationTarget(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = manipulationTarget(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var n, r = e ? jQuery.filter(e, this) : this, i = 0;
            for (; (n = r[i]) != null; i++)!t && n.nodeType === 1 && jQuery.cleanData(getAll(n)), n.parentNode && (t && jQuery.contains(n.ownerDocument, n) && setGlobalEval(getAll(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            var e, t = 0;
            for (; (e = this[t]) != null; t++)e.nodeType === 1 && (jQuery.cleanData(getAll(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return jQuery.clone(this, e, t)
            })
        }, html: function (e) {
            return access(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === undefined && t.nodeType === 1)return t.innerHTML;
                if (typeof e == "string" && !rnoInnerhtml.test(e) && !wrapMap[(rtagName.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (; n < r; n++)t = this[n] || {}, t.nodeType === 1 && (jQuery.cleanData(getAll(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, jQuery.cleanData(getAll(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = concat.apply([], e);
            var n, r, i, s, o, u, a = 0, f = this.length, l = this, c = f - 1, h = e[0], p = jQuery.isFunction(h);
            if (p || f > 1 && typeof h == "string" && !support.checkClone && rchecked.test(h))return this.each(function (n) {
                var r = l.eq(n);
                p && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
            });
            if (f) {
                n = jQuery.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, n.childNodes.length === 1 && (n = r);
                if (r) {
                    i = jQuery.map(getAll(n, "script"), disableScript), s = i.length;
                    for (; a < f; a++)o = n, a !== c && (o = jQuery.clone(o, !0, !0), s && jQuery.merge(i, getAll(o, "script"))), t.call(this[a], o, a);
                    if (s) {
                        u = i[i.length - 1].ownerDocument, jQuery.map(i, restoreScript);
                        for (a = 0; a < s; a++)o = i[a], rscriptType.test(o.type || "") && !data_priv.access(o, "globalEval") && jQuery.contains(u, o) && (o.src ? jQuery._evalUrl && jQuery._evalUrl(o.src) : jQuery.globalEval(o.textContent.replace(rcleanScript, "")))
                    }
                }
            }
            return this
        }
    }), jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        jQuery.fn[e] = function (e) {
            var n, r = [], i = jQuery(e), s = i.length - 1, o = 0;
            for (; o <= s; o++)n = o === s ? this : this.clone(!0), jQuery(i[o])[t](n), push.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var iframe, elemdisplay = {}, rmargin = /^margin/, rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"), getStyles = function (e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : window.getComputedStyle(e, null)
    };
    (function () {
        function s() {
            i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i.innerHTML = "", n.appendChild(r);
            var s = window.getComputedStyle(i, null);
            e = s.top !== "1%", t = s.width === "4px", n.removeChild(r)
        }

        var e, t, n = document.documentElement, r = document.createElement("div"), i = document.createElement("div");
        if (!i.style)return;
        i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = i.style.backgroundClip === "content-box", r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(i), window.getComputedStyle && jQuery.extend(support, {
            pixelPosition: function () {
                return s(), e
            }, boxSizingReliable: function () {
                return t == null && s(), t
            }, reliableMarginRight: function () {
                var e, t = i.appendChild(document.createElement("div"));
                return t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", i.style.width = "1px", n.appendChild(r), e = !parseFloat(window.getComputedStyle(t, null).marginRight), n.removeChild(r), i.removeChild(t), e
            }
        })
    })(), jQuery.swap = function (e, t, n, r) {
        var i, s, o = {};
        for (s in t)o[s] = e.style[s], e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t)e.style[s] = o[s];
        return i
    };
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"), cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {letterSpacing: "0", fontWeight: "400"}, cssPrefixes = ["Webkit", "O", "Moz", "ms"];
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = curCSS(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)return;
            var i, s, o, u = jQuery.camelCase(t), a = e.style;
            t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(a, u)), o = jQuery.cssHooks[t] || jQuery.cssHooks[u];
            if (n === undefined)return o && "get"in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
            s = typeof n, s === "string" && (i = rrelNum.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(jQuery.css(e, t)), s = "number");
            if (n == null || n !== n)return;
            s === "number" && !jQuery.cssNumber[u] && (n += "px"), !support.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
            if (!o || !("set"in o) || (n = o.set(e, n, r)) !== undefined)a[t] = n
        },
        css: function (e, t, n, r) {
            var i, s, o, u = jQuery.camelCase(t);
            return t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(e.style, u)), o = jQuery.cssHooks[t] || jQuery.cssHooks[u], o && "get"in o && (i = o.get(e, !0, n)), i === undefined && (i = curCSS(e, t, r)), i === "normal" && t in cssNormalTransform && (i = cssNormalTransform[t]), n === "" || n ? (s = parseFloat(i), n === !0 || jQuery.isNumeric(s) ? s || 0 : i) : i
        }
    }), jQuery.each(["height", "width"], function (e, t) {
        jQuery.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)return rdisplayswap.test(jQuery.css(e, "display")) && e.offsetWidth === 0 ? jQuery.swap(e, cssShow, function () {
                    return getWidthOrHeight(e, t, r)
                }) : getWidthOrHeight(e, t, r)
            }, set: function (e, n, r) {
                var i = r && getStyles(e);
                return setPositiveNumber(e, n, r ? augmentWidthOrHeight(e, t, r, jQuery.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (e, t) {
        if (t)return jQuery.swap(e, {display: "inline-block"}, curCSS, [e, "marginRight"])
    }), jQuery.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        jQuery.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0, i = {}, s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++)i[e + cssExpand[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, rmargin.test(e) || (jQuery.cssHooks[e + t].set = setPositiveNumber)
    }), jQuery.fn.extend({
        css: function (e, t) {
            return access(this, function (e, t, n) {
                var r, i, s = {}, o = 0;
                if (jQuery.isArray(t)) {
                    r = getStyles(e), i = t.length;
                    for (; o < i; o++)s[t[o]] = jQuery.css(e, t[o], !1, r);
                    return s
                }
                return n !== undefined ? jQuery.style(e, t, n) : jQuery.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return showHide(this, !0)
        }, hide: function () {
            return showHide(this)
        }, toggle: function (e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
                isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
            })
        }
    }), jQuery.Tween = Tween, Tween.prototype = {
        constructor: Tween, init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (jQuery.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Tween.propHooks[this.prop];
            return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this
        }
    }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = jQuery.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            }, set: function (e) {
                jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : e.elem.style && (e.elem.style[jQuery.cssProps[e.prop]] != null || jQuery.cssHooks[e.prop]) ? jQuery.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, jQuery.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [defaultPrefilter], tweeners = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = rfxnum.exec(t), s = i && i[3] || (jQuery.cssNumber[e] ? "" : "px"), o = (jQuery.cssNumber[e] || s !== "px" && +r) && rfxnum.exec(jQuery.css(n.elem, e)), u = 1, a = 20;
            if (o && o[3] !== s) {
                s = s || o[3], i = i || [], o = +r || 1;
                do u = u || ".5", o /= u, jQuery.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
            }
            return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
        }]
    };
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function (e, t) {
            jQuery.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++)n = e[r], tweeners[n] = tweeners[n] || [], tweeners[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? animationPrefilters.unshift(e) : animationPrefilters.push(e)
        }
    }), jQuery.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? jQuery.extend({}, e) : {
            complete: n || !n && t || jQuery.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !jQuery.isFunction(t) && t
        };
        r.duration = jQuery.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in jQuery.fx.speeds ? jQuery.fx.speeds[r.duration] : jQuery.fx.speeds._default;
        if (r.queue == null || r.queue === !0)r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            jQuery.isFunction(r.old) && r.old.call(this), r.queue && jQuery.dequeue(this, r.queue)
        }, r
    }, jQuery.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = jQuery.isEmptyObject(e), s = jQuery.speed(t, n, r), o = function () {
                var t = Animation(this, jQuery.extend({}, e), s);
                (i || data_priv.get(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return typeof e != "string" && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = e != null && e + "queueHooks", s = jQuery.timers, o = data_priv.get(this);
                if (i)o[i] && o[i].stop && r(o[i]); else for (i in o)o[i] && o[i].stop && rrun.test(i) && r(o[i]);
                for (i = s.length; i--;)s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                (t || !n) && jQuery.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = data_priv.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = jQuery.timers, o = r ? r.length : 0;
                n.finish = !0, jQuery.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--;)s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), jQuery.each(["toggle", "show", "hide"], function (e, t) {
        var n = jQuery.fn[t];
        jQuery.fn[t] = function (e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i)
        }
    }), jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        jQuery.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), jQuery.timers = [], jQuery.fx.tick = function () {
        var e, t = 0, n = jQuery.timers;
        fxNow = jQuery.now();
        for (; t < n.length; t++)e = n[t], !e() && n[t] === e && n.splice(t--, 1);
        n.length || jQuery.fx.stop(), fxNow = undefined
    }, jQuery.fx.timer = function (e) {
        jQuery.timers.push(e), e() ? jQuery.fx.start() : jQuery.timers.pop()
    }, jQuery.fx.interval = 13, jQuery.fx.start = function () {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
    }, jQuery.fx.stop = function () {
        clearInterval(timerId), timerId = null
    }, jQuery.fx.speeds = {slow: 600, fast: 200, _default: 400}, jQuery.fn.delay = function (e, t) {
        return e = jQuery.fx ? jQuery.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, function () {
        var e = document.createElement("input"), t = document.createElement("select"), n = t.appendChild(document.createElement("option"));
        e.type = "checkbox", support.checkOn = e.value !== "", support.optSelected = n.selected, t.disabled = !0, support.optDisabled = !n.disabled, e = document.createElement("input"), e.value = "t", e.type = "radio", support.radioValue = e.value === "t"
    }();
    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function (e, t) {
            return access(this, jQuery.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                jQuery.removeAttr(this, e)
            })
        }
    }), jQuery.extend({
        attr: function (e, t, n) {
            var r, i, s = e.nodeType;
            if (!e || s === 3 || s === 8 || s === 2)return;
            if (typeof e.getAttribute === strundefined)return jQuery.prop(e, t, n);
            if (s !== 1 || !jQuery.isXMLDoc(e))t = t.toLowerCase(), r = jQuery.attrHooks[t] || (jQuery.expr.match.bool.test(t) ? boolHook : nodeHook);
            if (n === undefined)return r && "get"in r && (i = r.get(e, t)) !== null ? i : (i = jQuery.find.attr(e, t), i == null ? undefined : i);
            if (n !== null)return r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n);
            jQuery.removeAttr(e, t)
        }, removeAttr: function (e, t) {
            var n, r, i = 0, s = t && t.match(rnotwhite);
            if (s && e.nodeType === 1)while (n = s[i++])r = jQuery.propFix[n] || n, jQuery.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!support.radioValue && t === "radio" && jQuery.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), boolHook = {
        set: function (e, t, n) {
            return t === !1 ? jQuery.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = attrHandle[t] || jQuery.find.attr;
        attrHandle[t] = function (e, t, r) {
            var i, s;
            return r || (s = attrHandle[t], attrHandle[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, attrHandle[t] = s), i
        }
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({
        prop: function (e, t) {
            return access(this, jQuery.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[jQuery.propFix[e] || e]
            })
        }
    }), jQuery.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var r, i, s, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2)return;
            return s = o !== 1 || !jQuery.isXMLDoc(e), s && (t = jQuery.propFix[t] || t, i = jQuery.propHooks[t]), n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && (r = i.get(e, t)) !== null ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || rfocusable.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), support.optSelected || (jQuery.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        jQuery.propFix[this.toLowerCase()] = this
    });
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        addClass: function (e) {
            var t, n, r, i, s, o, u = typeof e == "string" && e, a = 0, f = this.length;
            if (jQuery.isFunction(e))return this.each(function (t) {
                jQuery(this).addClass(e.call(this, t, this.className))
            });
            if (u) {
                t = (e || "").match(rnotwhite) || [];
                for (; a < f; a++) {
                    n = this[a], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++])r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = jQuery.trim(r), n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, s, o, u = arguments.length === 0 || typeof e == "string" && e, a = 0, f = this.length;
            if (jQuery.isFunction(e))return this.each(function (t) {
                jQuery(this).removeClass(e.call(this, t, this.className))
            });
            if (u) {
                t = (e || "").match(rnotwhite) || [];
                for (; a < f; a++) {
                    n = this[a], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
                        o = e ? jQuery.trim(r) : "", n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : jQuery.isFunction(e) ? this.each(function (n) {
                jQuery(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var t, r = 0, i = jQuery(this), s = e.match(rnotwhite) || [];
                    while (t = s[r++])i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else if (n === strundefined || n === "boolean")this.className && data_priv.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : data_priv.get(this, "__className__") || ""
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++)if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(rclass, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            if (!arguments.length) {
                if (i)return t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()], t && "get"in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(rreturn, "") : n == null ? "" : n);
                return
            }
            return r = jQuery.isFunction(e), this.each(function (n) {
                var i;
                if (this.nodeType !== 1)return;
                r ? i = e.call(this, n, jQuery(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : jQuery.isArray(i) && (i = jQuery.map(i, function (e) {
                    return e == null ? "" : e + ""
                })), t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!t || !("set"in t) || t.set(this, i, "value") === undefined)this.value = i
            })
        }
    }), jQuery.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = jQuery.find.attr(e, "value");
                    return t != null ? t : jQuery.trim(jQuery.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !jQuery.nodeName(n.parentNode, "optgroup"))) {
                            t = jQuery(n).val();
                            if (s)return t;
                            o.push(t)
                        }
                    }
                    return o
                }, set: function (e, t) {
                    var n, r, i = e.options, s = jQuery.makeArray(t), o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = jQuery.inArray(r.value, s) >= 0)n = !0
                    }
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {
            set: function (e, t) {
                if (jQuery.isArray(t))return e.checked = jQuery.inArray(jQuery(e).val(), t) >= 0
            }
        }, support.checkOn || (jQuery.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        jQuery.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), jQuery.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var nonce = jQuery.now(), rquery = /\?/;
    jQuery.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, jQuery.parseXML = function (e) {
        var t, n;
        if (!e || typeof e != "string")return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = undefined
        }
        return (!t || t.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + e), t
    };
    var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), ajaxLocation = window.location.href, ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function (e, t) {
            function S(e, t, s, u) {
                var f, m, g, b, E, S = t;
                if (y === 2)return;
                y = 2, o && clearTimeout(o), n = undefined, i = u || "", w.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || e === 304, s && (b = ajaxHandleResponses(l, w, s)), b = ajaxConvert(l, b, w, f);
                if (f)l.ifModified && (E = w.getResponseHeader("Last-Modified"), E && (jQuery.lastModified[r] = E), E = w.getResponseHeader("etag"), E && (jQuery.etag[r] = E)), e === 204 || l.type === "HEAD" ? S = "nocontent" : e === 304 ? S = "notmodified" : (S = b.state, m = b.data, g = b.error, f = !g); else {
                    g = S;
                    if (e || !S)S = "error", e < 0 && (e = 0)
                }
                w.status = e, w.statusText = (t || S) + "", f ? p.resolveWith(c, [m, S, w]) : p.rejectWith(c, [w, S, g]), w.statusCode(v), v = undefined, a && h.trigger(f ? "ajaxSuccess" : "ajaxError", [w, l, f ? m : g]), d.fireWith(c, [w, S]), a && (h.trigger("ajaxComplete", [w, l]), --jQuery.active || jQuery.event.trigger("ajaxStop"))
            }

            typeof e == "object" && (t = e, e = undefined), t = t || {};
            var n, r, i, s, o, u, a, f, l = jQuery.ajaxSetup({}, t), c = l.context || l, h = l.context && (c.nodeType || c.jquery) ? jQuery(c) : jQuery.event, p = jQuery.Deferred(), d = jQuery.Callbacks("once memory"), v = l.statusCode || {}, m = {}, g = {}, y = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (y === 2) {
                        if (!s) {
                            s = {};
                            while (t = rheaders.exec(i))s[t[1].toLowerCase()] = t[2]
                        }
                        t = s[e.toLowerCase()]
                    }
                    return t == null ? null : t
                },
                getAllResponseHeaders: function () {
                    return y === 2 ? i : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return y || (e = g[n] = g[n] || e, m[e] = t), this
                },
                overrideMimeType: function (e) {
                    return y || (l.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (y < 2)for (t in e)v[t] = [v[t], e[t]]; else w.always(e[w.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || b;
                    return n && n.abort(t), S(0, t), this
                }
            };
            p.promise(w).complete = d.add, w.success = w.done, w.error = w.fail, l.url = ((e || l.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = jQuery.trim(l.dataType || "*").toLowerCase().match(rnotwhite) || [""], l.crossDomain == null && (u = rurl.exec(l.url.toLowerCase()), l.crossDomain = !(!u || u[1] === ajaxLocParts[1] && u[2] === ajaxLocParts[2] && (u[3] || (u[1] === "http:" ? "80" : "443")) === (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))), l.data && l.processData && typeof l.data != "string" && (l.data = jQuery.param(l.data, l.traditional)), inspectPrefiltersOrTransports(prefilters, l, t, w);
            if (y === 2)return w;
            a = jQuery.event && l.global, a && jQuery.active++ === 0 && jQuery.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !rnoContent.test(l.type), r = l.url, l.hasContent || (l.data && (r = l.url += (rquery.test(r) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = rts.test(r) ? r.replace(rts, "$1_=" + nonce++) : r + (rquery.test(r) ? "&" : "?") + "_=" + nonce++)), l.ifModified && (jQuery.lastModified[r] && w.setRequestHeader("If-Modified-Since", jQuery.lastModified[r]), jQuery.etag[r] && w.setRequestHeader("If-None-Match", jQuery.etag[r])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : l.accepts["*"]);
            for (f in l.headers)w.setRequestHeader(f, l.headers[f]);
            if (!l.beforeSend || l.beforeSend.call(c, w, l) !== !1 && y !== 2) {
                b = "abort";
                for (f in{success: 1, error: 1, complete: 1})w[f](l[f]);
                n = inspectPrefiltersOrTransports(transports, l, t, w);
                if (!n)S(-1, "No Transport"); else {
                    w.readyState = 1, a && h.trigger("ajaxSend", [w, l]), l.async && l.timeout > 0 && (o = setTimeout(function () {
                        w.abort("timeout")
                    }, l.timeout));
                    try {
                        y = 1, n.send(m, S)
                    } catch (E) {
                        if (!(y < 2))throw E;
                        S(-1, E)
                    }
                }
                return w
            }
            return w.abort()
        },
        getJSON: function (e, t, n) {
            return jQuery.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return jQuery.get(e, undefined, t, "script")
        }
    }), jQuery.each(["get", "post"], function (e, t) {
        jQuery[t] = function (e, n, r, i) {
            return jQuery.isFunction(n) && (i = i || r, r = n, n = undefined), jQuery.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), jQuery._evalUrl = function (e) {
        return jQuery.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, jQuery.fn.extend({
        wrapAll: function (e) {
            var t;
            return jQuery.isFunction(e) ? this.each(function (t) {
                jQuery(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild)e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return jQuery.isFunction(e) ? this.each(function (t) {
                jQuery(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = jQuery(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = jQuery.isFunction(e);
            return this.each(function (n) {
                jQuery(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
            }).end()
        }
    }), jQuery.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, jQuery.expr.filters.visible = function (e) {
        return !jQuery.expr.filters.hidden(e)
    };
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = jQuery.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        t === undefined && (t = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional);
        if (jQuery.isArray(e) || e.jquery && !jQuery.isPlainObject(e))jQuery.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)buildParams(n, e[n], t, i);
        return r.join("&").replace(r20, "+")
    }, jQuery.fn.extend({
        serialize: function () {
            return jQuery.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = jQuery.prop(this, "elements");
                return e ? jQuery.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(e) && (this.checked || !rcheckableType.test(e))
            }).map(function (e, t) {
                var n = jQuery(this).val();
                return n == null ? null : jQuery.isArray(n) ? jQuery.map(n, function (e) {
                    return {name: t.name, value: e.replace(rCRLF, "\r\n")}
                }) : {name: t.name, value: n.replace(rCRLF, "\r\n")}
            }).get()
        }
    }), jQuery.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var xhrId = 0, xhrCallbacks = {}, xhrSuccessStatus = {0: 200, 1223: 204}, xhrSupported = jQuery.ajaxSettings.xhr();
    window.attachEvent && window.attachEvent("onunload", function () {
        for (var e in xhrCallbacks)xhrCallbacks[e]()
    }), support.cors = !!xhrSupported && "withCredentials"in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function (e) {
        var t;
        if (support.cors || xhrSupported && !e.crossDomain)return {
            send: function (n, r) {
                var i, s = e.xhr(), o = ++xhrId;
                s.open(e.type, e.url, e.async, e.username, e.password);
                if (e.xhrFields)for (i in e.xhrFields)s[i] = e.xhrFields[i];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n)s.setRequestHeader(i, n[i]);
                t = function (e) {
                    return function () {
                        t && (delete xhrCallbacks[o], t = s.onload = s.onerror = null, e === "abort" ? s.abort() : e === "error" ? r(s.status, s.statusText) : r(xhrSuccessStatus[s.status] || s.status, s.statusText, typeof s.responseText == "string" ? {text: s.responseText} : undefined, s.getAllResponseHeaders()))
                    }
                }, s.onload = t(), s.onerror = t("error"), t = xhrCallbacks[o] = t("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (u) {
                    if (t)throw u
                }
            }, abort: function () {
                t && t()
            }
        }
    }), jQuery.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return jQuery.globalEval(e), e
            }
        }
    }), jQuery.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), jQuery.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = jQuery("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i(e.type === "error" ? 404 : 200, e.type)
                    }), document.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            return this[e] = !0, e
        }
    }), jQuery.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, s, o = e.jsonp !== !1 && (rjsonp.test(e.url) ? "url" : typeof e.data == "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(e.data) && "data");
        if (o || e.dataTypes[0] === "jsonp")return r = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(rjsonp, "$1" + r) : e.jsonp !== !1 && (e.url += (rquery.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return s || jQuery.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", i = window[r], window[r] = function () {
            s = arguments
        }, n.always(function () {
            window[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, oldCallbacks.push(r)), s && jQuery.isFunction(i) && i(s[0]), s = i = undefined
        }), "script"
    }), jQuery.parseHTML = function (e, t, n) {
        if (!e || typeof e != "string")return null;
        typeof t == "boolean" && (n = t, t = !1), t = t || document;
        var r = rsingleTag.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = jQuery.buildFragment([e], t, i), i && i.length && jQuery(i).remove(), jQuery.merge([], r.childNodes))
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function (e, t, n) {
        if (typeof e != "string" && _load)return _load.apply(this, arguments);
        var r, i, s, o = this, u = e.indexOf(" ");
        return u >= 0 && (r = jQuery.trim(e.slice(u)), e = e.slice(0, u)), jQuery.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (i = "POST"), o.length > 0 && jQuery.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            s = arguments, o.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
                o.each(n, s || [e.responseText, t, e])
            }), this
    }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        jQuery.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), jQuery.expr.filters.animated = function (e) {
        return jQuery.grep(jQuery.timers, function (t) {
            return e === t.elem
        }).length
    };
    var docElem = window.document.documentElement;
    jQuery.offset = {
        setOffset: function (e, t, n) {
            var r, i, s, o, u, a, f, l = jQuery.css(e, "position"), c = jQuery(e), h = {};
            l === "static" && (e.style.position = "relative"), u = c.offset(), s = jQuery.css(e, "top"), a = jQuery.css(e, "left"), f = (l === "absolute" || l === "fixed") && (s + a).indexOf("auto") > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), jQuery.isFunction(t) && (t = t.call(e, n, u)), t.top != null && (h.top = t.top - u.top + o), t.left != null && (h.left = t.left - u.left + i), "using"in t ? t.using.call(e, h) : c.css(h)
        }
    }, jQuery.fn.extend({
        offset: function (e) {
            if (arguments.length)return e === undefined ? this : this.each(function (t) {
                jQuery.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0], i = {top: 0, left: 0}, s = r && r.ownerDocument;
            if (!s)return;
            return t = s.documentElement, jQuery.contains(t, r) ? (typeof r.getBoundingClientRect !== strundefined && (i = r.getBoundingClientRect()), n = getWindow(s), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        }, position: function () {
            if (!this[0])return;
            var e, t, n = this[0], r = {top: 0, left: 0};
            return jQuery.css(n, "position") === "fixed" ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), jQuery.nodeName(e[0], "html") || (r = e.offset()), r.top += jQuery.css(e[0], "borderTopWidth", !0), r.left += jQuery.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - r.top - jQuery.css(n, "marginTop", !0),
                left: t.left - r.left - jQuery.css(n, "marginLeft", !0)
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || docElem;
                while (e && !jQuery.nodeName(e, "html") && jQuery.css(e, "position") === "static")e = e.offsetParent;
                return e || docElem
            })
        }
    }), jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        jQuery.fn[e] = function (r) {
            return access(this, function (e, r, i) {
                var s = getWindow(e);
                if (i === undefined)return s ? s[t] : e[r];
                s ? s.scrollTo(n ? window.pageXOffset : i, n ? i : window.pageYOffset) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }), jQuery.each(["top", "left"], function (e, t) {
        jQuery.cssHooks[t] = addGetHookIf(support.pixelPosition, function (e, n) {
            if (n)return n = curCSS(e, t), rnumnonpx.test(n) ? jQuery(e).position()[t] + "px" : n
        })
    }), jQuery.each({Height: "height", Width: "width"}, function (e, t) {
        jQuery.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            jQuery.fn[r] = function (r, i) {
                var s = arguments.length && (n || typeof r != "boolean"), o = n || (r === !0 || i === !0 ? "margin" : "border");
                return access(this, function (t, n, r) {
                    var i;
                    return jQuery.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? jQuery.css(t, n, o) : jQuery.style(t, n, r, o)
                }, t, s ? r : undefined, s, null)
            }
        })
    }), jQuery.fn.size = function () {
        return this.length
    }, jQuery.fn.andSelf = jQuery.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function () {
        return jQuery
    });
    var _jQuery = window.jQuery, _$ = window.$;
    return jQuery.noConflict = function (e) {
        return window.$ === jQuery && (window.$ = _$), e && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
    }, typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery), jQuery
}), function () {
    this.window || (window = this), window.navigator || (window.navigator = {
        userAgent: "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; de-de) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8",
        product: "",
        cpuClass: ""
    }), window.qx || (window.qx = {}), window.qxvariants || (qxvariants = {}), qx.$$environment || (qx.$$environment = {});
    var e = {
        "qx.aspects": !1,
        "qx.debug": !1,
        "qx.debug.databinding": !1,
        "qx.debug.dispose": !1,
        "qx.globalErrorHandling": !1,
        "qx.optimization.basecalls": !0,
        "qx.optimization.privates": !0,
        "qx.optimization.strings": !0,
        "qx.optimization.variables": !0,
        "qx.optimization.variants": !0,
        "qx.optimization.whitespace": !0
    };
    for (var t in e)qx.$$environment[t] = e[t];
    qx.$$packageData = {}, qx.$$loader = {}
}(), qx.$$packageData[0] = {locales: {}, resources: {}, translations: {C: {}}}, function () {
    var e = ".prototype", t = "function", n = "Boolean", r = "Error", i = "Object.keys requires an object as argument.", s = "constructor", o = "warn", u = "default", a = "Null", f = "hasOwnProperty", l = "Undefined", c = "string", h = "Object", p = "toLocaleString", d = "error", v = "toString", m = "qx.debug", g = "()", y = "RegExp", b = "String", w = "info", E = "BROKEN_IE", S = "isPrototypeOf", x = "Date", T = "", N = "qx.Bootstrap", C = "Function", k = "]", L = "Cannot call super class. Method is not derived: ", A = "Array", O = "[Class ", M = "valueOf", _ = "Number", D = "Class", P = "debug", H = "ES5", B = ".", j = "propertyIsEnumerable", F = "object";
    window.qx || (window.qx = {}), qx.Bootstrap = {
        genericToString: function () {
            return O + this.classname + k
        }, createNamespace: function (e, t) {
            var n = e.split(B), r = n[0], i = qx.$$namespaceRoot && qx.$$namespaceRoot[r] ? qx.$$namespaceRoot : window;
            for (var s = 0, o = n.length - 1; s < o; s++, r = n[s])i[r] ? i = i[r] : i = i[r] = {};
            return i[r] = t, r
        }, setDisplayName: function (e, t, n) {
            e.displayName = t + B + n + g
        }, setDisplayNames: function (e, t) {
            for (var n in e) {
                var r = e[n];
                r instanceof Function && (r.displayName = t + B + n + g)
            }
        }, base: function (e, t) {
            if (qx.Bootstrap.DEBUG && !qx.Bootstrap.isFunction(e.callee.base))throw new Error(L + e.callee.displayName);
            return arguments.length === 1 ? e.callee.base.call(this) : e.callee.base.apply(this, Array.prototype.slice.call(arguments, 1))
        }, define: function (t, n) {
            n || (n = {statics: {}});
            var r, i = null;
            qx.Bootstrap.setDisplayNames(n.statics, t);
            if (n.members || n.extend) {
                qx.Bootstrap.setDisplayNames(n.members, t + e), r = n.construct || new Function, n.extend && this.extendClass(r, r, n.extend, t, d);
                var s = n.statics || {};
                for (var o = 0, u = qx.Bootstrap.keys(s), a = u.length; o < a; o++) {
                    var f = u[o];
                    r[f] = s[f]
                }
                i = r.prototype, i.base = qx.Bootstrap.base, i.name = i.classname = t;
                var l = n.members || {}, f, c;
                for (var o = 0, u = qx.Bootstrap.keys(l), a = u.length; o < a; o++)f = u[o], c = l[f], c instanceof Function && i[f] && (c.base = i[f]), i[f] = c
            } else {
                r = n.statics || {};
                if (qx.Bootstrap.$$registry && qx.Bootstrap.$$registry[t]) {
                    var h = qx.Bootstrap.$$registry[t];
                    if (this.keys(r).length !== 0) {
                        n.defer && n.defer(r, i);
                        for (var p in r)h[p] = r[p];
                        return h
                    }
                }
            }
            r.$$type = D, r.hasOwnProperty(v) || (r.toString = this.genericToString);
            var d = t ? this.createNamespace(t, r) : T;
            return r.name = r.classname = t, r.basename = d, r.$$events = n.events, n.defer && n.defer(r, i), t != null && (qx.Bootstrap.$$registry[t] = r), r
        }
    }, qx.Bootstrap.define(N, {
        statics: {
            LOADSTART: qx.$$start || new Date,
            DEBUG: function () {
                var e = !0;
                return qx.$$environment && qx.$$environment[m] === !1 && (e = !1), e
            }(),
            getEnvironmentSetting: function (e) {
                if (qx.$$environment)return qx.$$environment[e]
            },
            setEnvironmentSetting: function (e, t) {
                qx.$$environment || (qx.$$environment = {}), qx.$$environment[e] === undefined && (qx.$$environment[e] = t)
            },
            createNamespace: qx.Bootstrap.createNamespace,
            setRoot: function (e) {
                qx.$$namespaceRoot = e
            },
            base: qx.Bootstrap.base,
            define: qx.Bootstrap.define,
            setDisplayName: qx.Bootstrap.setDisplayName,
            setDisplayNames: qx.Bootstrap.setDisplayNames,
            genericToString: qx.Bootstrap.genericToString,
            extendClass: function (e, t, n, r, i) {
                var s = n.prototype, o = new Function;
                o.prototype = s;
                var u = new o;
                e.prototype = u, u.name = u.classname = r, u.basename = i, t.base = n, e.superclass = n, t.self = e.constructor = u.constructor = e
            },
            getByName: function (e) {
                return qx.Bootstrap.$$registry[e]
            },
            $$registry: {},
            objectGetLength: function (e) {
                return qx.Bootstrap.keys(e).length
            },
            objectMergeWith: function (e, t, n) {
                n === undefined && (n = !0);
                for (var r in t)if (n || e[r] === undefined)e[r] = t[r];
                return e
            },
            __a: [S, f, p, v, M, j, s],
            keys: {
                ES5: Object.keys, BROKEN_IE: function (e) {
                    if (e === null || typeof e != F && typeof e != t)throw new TypeError(i);
                    var n = [], r = Object.prototype.hasOwnProperty;
                    for (var s in e)r.call(e, s) && n.push(s);
                    var o = qx.Bootstrap.__a;
                    for (var u = 0, a = o, f = a.length; u < f; u++)r.call(e, a[u]) && n.push(a[u]);
                    return n
                }, "default": function (e) {
                    if (e === null || typeof e != F && typeof e != t)throw new TypeError(i);
                    var n = [], r = Object.prototype.hasOwnProperty;
                    for (var s in e)r.call(e, s) && n.push(s);
                    return n
                }
            }[typeof Object.keys == t ? H : function () {
                for (var e in{toString: 1})return e
            }() !== v ? E : u],
            __b: {
                "[object String]": b,
                "[object Array]": A,
                "[object Object]": h,
                "[object RegExp]": y,
                "[object Number]": _,
                "[object Boolean]": n,
                "[object Date]": x,
                "[object Function]": C,
                "[object Error]": r
            },
            bind: function (e, t, n) {
                var r = Array.prototype.slice.call(arguments, 2, arguments.length);
                return function () {
                    var n = Array.prototype.slice.call(arguments, 0, arguments.length);
                    return e.apply(t, r.concat(n))
                }
            },
            firstUp: function (e) {
                return e.charAt(0).toUpperCase() + e.substr(1)
            },
            firstLow: function (e) {
                return e.charAt(0).toLowerCase() + e.substr(1)
            },
            getClass: function (e) {
                if (e === undefined)return l;
                if (e === null)return a;
                var t = Object.prototype.toString.call(e);
                return qx.Bootstrap.__b[t] || t.slice(8, -1)
            },
            isString: function (e) {
                return e !== null && (typeof e === c || qx.Bootstrap.getClass(e) == b || e instanceof String || !!e && !!e.$$isString)
            },
            isArray: function (e) {
                return e !== null && (e instanceof Array || e && qx.data && qx.data.IListData && qx.util.OOUtil.hasInterface(e.constructor, qx.data.IListData) || qx.Bootstrap.getClass(e) == A || !!e && !!e.$$isArray)
            },
            isObject: function (e) {
                return e !== undefined && e !== null && qx.Bootstrap.getClass(e) == h
            },
            isFunction: function (e) {
                return qx.Bootstrap.getClass(e) == C
            },
            $$logs: [],
            debug: function (e, t) {
                qx.Bootstrap.$$logs.push([P, arguments])
            },
            info: function (e, t) {
                qx.Bootstrap.$$logs.push([w, arguments])
            },
            warn: function (e, t) {
                qx.Bootstrap.$$logs.push([o, arguments])
            },
            error: function (e, t) {
                qx.Bootstrap.$$logs.push([d, arguments])
            },
            trace: function (e) {
            }
        }
    })
}(), function () {
    var e = "qx.util.OOUtil";
    qx.Bootstrap.define(e, {
        statics: {
            classIsDefined: function (e) {
                return qx.Bootstrap.getByName(e) !== undefined
            }, getPropertyDefinition: function (e, t) {
                while (e) {
                    if (e.$$properties && e.$$properties[t])return e.$$properties[t];
                    e = e.superclass
                }
                return null
            }, hasProperty: function (e, t) {
                return !!qx.util.OOUtil.getPropertyDefinition(e, t)
            }, getEventType: function (e, t) {
                var e = e.constructor;
                while (e.superclass) {
                    if (e.$$events && e.$$events[t] !== undefined)return e.$$events[t];
                    e = e.superclass
                }
                return null
            }, supportsEvent: function (e, t) {
                return !!qx.util.OOUtil.getEventType(e, t)
            }, getByInterface: function (e, t) {
                var n, r, i;
                while (e) {
                    if (e.$$implements) {
                        n = e.$$flatImplements;
                        for (r = 0, i = n.length; r < i; r++)if (n[r] === t)return e
                    }
                    e = e.superclass
                }
                return null
            }, hasInterface: function (e, t) {
                return !!qx.util.OOUtil.getByInterface(e, t)
            }, getMixins: function (e) {
                var t = [];
                while (e)e.$$includes && t.push.apply(t, e.$$flatIncludes), e = e.superclass;
                return t
            }
        }
    })
}(), function () {
    var e = "qx.core.Environment", t = "default", n = " type)", r = "&", i = "qx/static/blank.html", s = "true", o = "|", u = "qx.core.Environment for a list of predefined keys.", a = "false", f = '] found, and no default ("default") given', l = ":", c = '" (', h = " in variants [", p = ".", d = "qx.allowUrlSettings", v = 'No match for variant "', m = " is not a valid key. Please see the API-doc of ", g = "qxenv";
    qx.Bootstrap.define(e, {
        statics: {
            _checks: {},
            _asyncChecks: {},
            __c: {},
            _checksMap: {},
            _defaults: {
                "true": !0,
                "qx.allowUrlSettings": !1,
                "qx.allowUrlVariants": !1,
                "qx.debug.property.level": 0,
                "qx.debug": !0,
                "qx.debug.ui.queue": !0,
                "qx.aspects": !1,
                "qx.dynlocale": !0,
                "qx.dyntheme": !0,
                "qx.blankpage": i,
                "qx.debug.databinding": !1,
                "qx.debug.dispose": !1,
                "qx.optimization.basecalls": !1,
                "qx.optimization.comments": !1,
                "qx.optimization.privates": !1,
                "qx.optimization.strings": !1,
                "qx.optimization.variables": !1,
                "qx.optimization.variants": !1,
                "module.databinding": !0,
                "module.logger": !0,
                "module.property": !0,
                "module.events": !0,
                "qx.nativeScrollBars": !1
            },
            get: function (e) {
                if (this.__c[e] != undefined)return this.__c[e];
                var t = this._checks[e];
                if (t) {
                    var n = t();
                    return this.__c[e] = n, n
                }
                var r = this._getClassNameFromEnvKey(e);
                if (r[0] != undefined) {
                    var i = r[0], s = r[1], n = i[s]();
                    return this.__c[e] = n, n
                }
                qx.Bootstrap.DEBUG && (qx.Bootstrap.warn(e + m + u), qx.Bootstrap.trace(this))
            },
            _getClassNameFromEnvKey: function (e) {
                var t = this._checksMap;
                if (t[e] != undefined) {
                    var n = t[e], r = n.lastIndexOf(p);
                    if (r > -1) {
                        var i = n.slice(0, r), s = n.slice(r + 1), o = qx.Bootstrap.getByName(i);
                        if (o != undefined)return [o, s]
                    }
                }
                return [undefined, undefined]
            },
            getAsync: function (e, t, n) {
                var r = this;
                if (this.__c[e] != undefined) {
                    window.setTimeout(function () {
                        t.call(n, r.__c[e])
                    }, 0);
                    return
                }
                var i = this._asyncChecks[e];
                if (i) {
                    i(function (i) {
                        r.__c[e] = i, t.call(n, i)
                    });
                    return
                }
                var s = this._getClassNameFromEnvKey(e);
                if (s[0] != undefined) {
                    var o = s[0], a = s[1];
                    o[a](function (i) {
                        r.__c[e] = i, t.call(n, i)
                    });
                    return
                }
                qx.Bootstrap.DEBUG && (qx.Bootstrap.warn(e + m + u), qx.Bootstrap.trace(this))
            },
            select: function (e, t) {
                return this.__d(this.get(e), t)
            },
            selectAsync: function (e, t, n) {
                this.getAsync(e, function (r) {
                    var i = this.__d(e, t);
                    i.call(n, r)
                }, this)
            },
            __d: function (e, r) {
                var i = r[e];
                if (r.hasOwnProperty(e))return i;
                for (var s in r)if (s.indexOf(o) != -1) {
                    var u = s.split(o);
                    for (var a = 0; a < u.length; a++)if (u[a] == e)return r[s]
                }
                if (r[t] !== undefined)return r[t];
                if (qx.Bootstrap.DEBUG)throw new Error(v + e + c + typeof e + n + h + qx.Bootstrap.keys(r) + f)
            },
            filter: function (e) {
                var t = [];
                for (var n in e)this.get(n) && t.push(e[n]);
                return t
            },
            invalidateCacheKey: function (e) {
                delete this.__c[e]
            },
            add: function (e, t) {
                this._checks[e] == undefined && (t instanceof Function ? (!this._checksMap[e] && t.displayName && (this._checksMap[e] = t.displayName.substr(0, t.displayName.length - 2)), this._checks[e] = t) : this._checks[e] = this.__g(t))
            },
            addAsync: function (e, t) {
                this._checks[e] == undefined && (this._asyncChecks[e] = t)
            },
            getChecks: function () {
                return this._checks
            },
            getAsyncChecks: function () {
                return this._asyncChecks
            },
            _initDefaultQxValues: function () {
                var e = function (e) {
                    return function () {
                        return e
                    }
                };
                for (var t in this._defaults)this.add(t, e(this._defaults[t]))
            },
            __e: function () {
                if (qx && qx.$$environment)for (var e in qx.$$environment) {
                    var t = qx.$$environment[e];
                    this._checks[e] = this.__g(t)
                }
            },
            __f: function () {
                if (window.document && window.document.location) {
                    var e = window.document.location.search.slice(1).split(r);
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t].split(l);
                        if (n.length != 3 || n[0] != g)continue;
                        var i = n[1], o = decodeURIComponent(n[2]);
                        o == s ? o = !0 : o == a ? o = !1 : /^(\d|\.)+$/.test(o) && (o = parseFloat(o)), this._checks[i] = this.__g(o)
                    }
                }
            },
            __g: function (e) {
                return qx.Bootstrap.bind(function (e) {
                    return e
                }, null, e)
            }
        }, defer: function (e) {
            e._initDefaultQxValues(), e.__e(), e.get(d) === !0 && e.__f()
        }
    })
}(), function () {
    var e = "ecmascript.array.lastindexof", t = "function", n = "stack", r = "ecmascript.array.map", i = "ecmascript.date.now", s = "ecmascript.array.reduce", o = "e", u = "qx.bom.client.EcmaScript", a = "ecmascript.object.keys", f = "ecmascript.error.stacktrace", l = "ecmascript.string.trim", c = "ecmascript.array.indexof", h = "stacktrace", p = "ecmascript.error.toString", d = "[object Error]", v = "ecmascript.array.foreach", m = "ecmascript.function.bind", g = "ecmascript.array.reduceright", y = "ecmascript.array.some", b = "ecmascript.array.filter", w = "ecmascript.array.every";
    qx.Bootstrap.define(u, {
        statics: {
            getStackTrace: function () {
                var e, t = new Error(o);
                e = t.stack ? n : t.stacktrace ? h : null;
                if (!e)try {
                    throw t
                } catch (r) {
                    t = r
                }
                return t.stacktrace ? h : t.stack ? n : null
            }, getArrayIndexOf: function () {
                return !!Array.prototype.indexOf
            }, getArrayLastIndexOf: function () {
                return !!Array.prototype.lastIndexOf
            }, getArrayForEach: function () {
                return !!Array.prototype.forEach
            }, getArrayFilter: function () {
                return !!Array.prototype.filter
            }, getArrayMap: function () {
                return !!Array.prototype.map
            }, getArraySome: function () {
                return !!Array.prototype.some
            }, getArrayEvery: function () {
                return !!Array.prototype.every
            }, getArrayReduce: function () {
                return !!Array.prototype.reduce
            }, getArrayReduceRight: function () {
                return !!Array.prototype.reduceRight
            }, getErrorToString: function () {
                return typeof Error.prototype.toString == t && Error.prototype.toString() !== d
            }, getFunctionBind: function () {
                return typeof Function.prototype.bind === t
            }, getObjectKeys: function () {
                return !!Object.keys
            }, getDateNow: function () {
                return !!Date.now
            }, getStringTrim: function () {
                return typeof String.prototype.trim === t
            }
        }, defer: function (t) {
            qx.core.Environment.add(c, t.getArrayIndexOf), qx.core.Environment.add(e, t.getArrayLastIndexOf), qx.core.Environment.add(v, t.getArrayForEach), qx.core.Environment.add(b, t.getArrayFilter), qx.core.Environment.add(r, t.getArrayMap), qx.core.Environment.add(y, t.getArraySome), qx.core.Environment.add(w, t.getArrayEvery), qx.core.Environment.add(s, t.getArrayReduce), qx.core.Environment.add(g, t.getArrayReduceRight), qx.core.Environment.add(i, t.getDateNow), qx.core.Environment.add(p, t.getErrorToString), qx.core.Environment.add(f, t.getStackTrace), qx.core.Environment.add(m, t.getFunctionBind), qx.core.Environment.add(a, t.getObjectKeys), qx.core.Environment.add(l, t.getStringTrim)
        }
    })
}(), function () {
    var e = "qx.lang.normalize.Function", t = "ecmascript.function.bind", n = "function", r = "Function.prototype.bind called on incompatible ";
    qx.Bootstrap.define(e, {
        statics: {
            bind: function (e) {
                var t = Array.prototype.slice, i = this;
                if (typeof i != n)throw new TypeError(r + i);
                var s = t.call(arguments, 1), o = function () {
                    if (this instanceof o) {
                        var n = function () {
                        };
                        n.prototype = i.prototype;
                        var r = new n, u = i.apply(r, s.concat(t.call(arguments)));
                        return Object(u) === u ? u : r
                    }
                    return i.apply(e, s.concat(t.call(arguments)))
                };
                return o
            }
        }, defer: function (e) {
            qx.core.Environment.get(t) || (Function.prototype.bind = e.bind)
        }
    })
}(), function () {
    var e = "ecmascript.object.keys", t = "qx.lang.normalize.Object";
    qx.Bootstrap.define(t, {
        statics: {keys: qx.Bootstrap.keys}, defer: function (t) {
            qx.core.Environment.get(e) || (Object.keys = t.keys)
        }
    })
}(), function () {
    var e = "function", t = "ecmascript.array.lastindexof", n = "ecmascript.array.map", r = "ecmascript.array.filter", i = "Length is 0 and no second argument given", s = "qx.lang.normalize.Array", o = "ecmascript.array.indexof", u = "First argument is not callable", a = "ecmascript.array.reduce", f = "ecmascript.array.foreach", l = "ecmascript.array.reduceright", c = "ecmascript.array.some", h = "ecmascript.array.every";
    qx.Bootstrap.define(s, {
        statics: {
            indexOf: function (e, t) {
                t == null ? t = 0 : t < 0 && (t = Math.max(0, this.length + t));
                for (var n = t; n < this.length; n++)if (this[n] === e)return n;
                return -1
            }, lastIndexOf: function (e, t) {
                t == null ? t = this.length - 1 : t < 0 && (t = Math.max(0, this.length + t));
                for (var n = t; n >= 0; n--)if (this[n] === e)return n;
                return -1
            }, forEach: function (e, t) {
                var n = this.length;
                for (var r = 0; r < n; r++) {
                    var i = this[r];
                    i !== undefined && e.call(t || window, i, r, this)
                }
            }, filter: function (e, t) {
                var n = [], r = this.length;
                for (var i = 0; i < r; i++) {
                    var s = this[i];
                    s !== undefined && e.call(t || window, s, i, this) && n.push(this[i])
                }
                return n
            }, map: function (e, t) {
                var n = [], r = this.length;
                for (var i = 0; i < r; i++) {
                    var s = this[i];
                    s !== undefined && (n[i] = e.call(t || window, s, i, this))
                }
                return n
            }, some: function (e, t) {
                var n = this.length;
                for (var r = 0; r < n; r++) {
                    var i = this[r];
                    if (i !== undefined && e.call(t || window, i, r, this))return !0
                }
                return !1
            }, every: function (e, t) {
                var n = this.length;
                for (var r = 0; r < n; r++) {
                    var i = this[r];
                    if (i !== undefined && !e.call(t || window, i, r, this))return !1
                }
                return !0
            }, reduce: function (t, n) {
                if (typeof t !== e)throw new TypeError(u);
                if (n === undefined && this.length === 0)throw new TypeError(i);
                var r = n === undefined ? this[0] : n;
                for (var s = n === undefined ? 1 : 0; s < this.length; s++)s in this && (r = t.call(undefined, r, this[s], s, this));
                return r
            }, reduceRight: function (t, n) {
                if (typeof t !== e)throw new TypeError(u);
                if (n === undefined && this.length === 0)throw new TypeError(i);
                var r = n === undefined ? this[this.length - 1] : n;
                for (var s = n === undefined ? this.length - 2 : this.length - 1; s >= 0; s--)s in this && (r = t.call(undefined, r, this[s], s, this));
                return r
            }
        }, defer: function (e) {
            qx.core.Environment.get(o) || (Array.prototype.indexOf = e.indexOf), qx.core.Environment.get(t) || (Array.prototype.lastIndexOf = e.lastIndexOf), qx.core.Environment.get(f) || (Array.prototype.forEach = e.forEach), qx.core.Environment.get(r) || (Array.prototype.filter = e.filter), qx.core.Environment.get(n) || (Array.prototype.map = e.map), qx.core.Environment.get(c) || (Array.prototype.some = e.some), qx.core.Environment.get(h) || (Array.prototype.every = e.every), qx.core.Environment.get(a) || (Array.prototype.reduce = e.reduce), qx.core.Environment.get(l) || (Array.prototype.reduceRight = e.reduceRight)
        }
    })
}(), function () {
    var e = "qx.Mixin", t = ".prototype", n = "]", r = 'Conflict between mixin "', i = "constructor", s = "Array", o = '"!', u = '" and "', a = "destruct", f = '" in property "', l = "Mixin", c = '" in member "', h = "[Mixin ";
    qx.Bootstrap.define(e, {
        statics: {
            define: function (e, n) {
                if (n) {
                    n.include && qx.Bootstrap.getClass(n.include) !== s && (n.include = [n.include]);
                    var r = n.statics ? n.statics : {};
                    qx.Bootstrap.setDisplayNames(r, e);
                    for (var o in r)r[o]instanceof Function && (r[o].$$mixin = r);
                    n.construct && (r.$$constructor = n.construct, qx.Bootstrap.setDisplayName(n.construct, e, i)), n.include && (r.$$includes = n.include), n.properties && (r.$$properties = n.properties), n.members && (r.$$members = n.members, qx.Bootstrap.setDisplayNames(n.members, e + t));
                    for (var o in r.$$members)r.$$members[o]instanceof Function && (r.$$members[o].$$mixin = r);
                    n.events && (r.$$events = n.events), n.destruct && (r.$$destructor = n.destruct, qx.Bootstrap.setDisplayName(n.destruct, e, a))
                } else var r = {};
                return r.$$type = l, r.name = e, r.toString = this.genericToString, r.basename = qx.Bootstrap.createNamespace(e, r), this.$$registry[e] = r, r
            }, checkCompatibility: function (e) {
                var t = this.flatten(e), n = t.length;
                if (n < 2)return !0;
                var i = {}, s = {}, a = {}, l;
                for (var h = 0; h < n; h++) {
                    l = t[h];
                    for (var p in l.events) {
                        if (a[p])throw new Error(r + l.name + u + a[p] + c + p + o);
                        a[p] = l.name
                    }
                    for (var p in l.properties) {
                        if (i[p])throw new Error(r + l.name + u + i[p] + f + p + o);
                        i[p] = l.name
                    }
                    for (var p in l.members) {
                        if (s[p])throw new Error(r + l.name + u + s[p] + c + p + o);
                        s[p] = l.name
                    }
                }
                return !0
            }, isCompatible: function (e, t) {
                var n = qx.util.OOUtil.getMixins(t);
                return n.push(e), qx.Mixin.checkCompatibility(n)
            }, getByName: function (e) {
                return this.$$registry[e]
            }, isDefined: function (e) {
                return this.getByName(e) !== undefined
            }, getTotalNumber: function () {
                return qx.Bootstrap.objectGetLength(this.$$registry)
            }, flatten: function (e) {
                if (!e)return [];
                var t = e.concat();
                for (var n = 0, r = e.length; n < r; n++)e[n].$$includes && t.push.apply(t, this.flatten(e[n].$$includes));
                return t
            }, genericToString: function () {
                return h + this.name + n
            }, $$registry: {}, __h: null, __i: function (e, t) {
            }
        }
    })
}(), function () {
    var e = 'Implementation of method "', t = '"', n = "function", r = '" is not supported by Class "', i = "Boolean", s = "qx.Interface", o = 'The event "', u = '" required by interface "', a = '" is missing in class "', f = '"!', l = 'The property "', c = "Interface", h = "toggle", p = "]", d = "[Interface ", v = "is", m = "Array", g = 'Implementation of member "';
    qx.Bootstrap.define(s, {
        statics: {
            define: function (e, t) {
                if (t) {
                    t.extend && qx.Bootstrap.getClass(t.extend) !== m && (t.extend = [t.extend]);
                    var n = t.statics ? t.statics : {};
                    t.extend && (n.$$extends = t.extend), t.properties && (n.$$properties = t.properties), t.members && (n.$$members = t.members), t.events && (n.$$events = t.events)
                } else var n = {};
                return n.$$type = c, n.name = e, n.toString = this.genericToString, n.basename = qx.Bootstrap.createNamespace(e, n), qx.Interface.$$registry[e] = n, n
            }, getByName: function (e) {
                return this.$$registry[e]
            }, isDefined: function (e) {
                return this.getByName(e) !== undefined
            }, getTotalNumber: function () {
                return qx.Bootstrap.objectGetLength(this.$$registry)
            }, flatten: function (e) {
                if (!e)return [];
                var t = e.concat();
                for (var n = 0, r = e.length; n < r; n++)e[n].$$extends && t.push.apply(t, this.flatten(e[n].$$extends));
                return t
            }, __j: function (r, i, s, o, f) {
                var l = s.$$members;
                if (l)for (var c in l)if (qx.Bootstrap.isFunction(l[c])) {
                    var h = this.__k(i, c), p = h || qx.Bootstrap.isFunction(r[c]);
                    if (!p) {
                        if (f)throw new Error(e + c + a + i.classname + u + s.name + t);
                        return !1
                    }
                    var d = o === !0 && !h && !qx.util.OOUtil.hasInterface(i, s);
                    d && (r[c] = this.__n(s, r[c], c, l[c]))
                } else if (typeof r[c] === undefined && typeof r[c] !== n) {
                    if (f)throw new Error(g + c + a + i.classname + u + s.name + t);
                    return !1
                }
                if (!f)return !0
            }, __k: function (e, t) {
                var n = t.match(/^(is|toggle|get|set|reset)(.*)$/);
                if (!n)return !1;
                var r = qx.Bootstrap.firstLow(n[2]), s = qx.util.OOUtil.getPropertyDefinition(e, r);
                if (!s)return !1;
                var o = n[0] == v || n[0] == h;
                return o ? qx.util.OOUtil.getPropertyDefinition(e, r).check == i : !0
            }, __l: function (e, t, n) {
                if (t.$$properties)for (var i in t.$$properties)if (!qx.util.OOUtil.getPropertyDefinition(e, i)) {
                    if (n)throw new Error(l + i + r + e.classname + f);
                    return !1
                }
                if (!n)return !0
            }, __m: function (e, t, n) {
                if (t.$$events)for (var i in t.$$events)if (!qx.util.OOUtil.supportsEvent(e, i)) {
                    if (n)throw new Error(o + i + r + e.classname + f);
                    return !1
                }
                if (!n)return !0
            }, assertObject: function (e, t) {
                var n = e.constructor;
                this.__j(e, n, t, !1, !0), this.__l(n, t, !0), this.__m(n, t, !0);
                var r = t.$$extends;
                if (r)for (var i = 0, s = r.length; i < s; i++)this.assertObject(e, r[i])
            }, assert: function (e, t, n) {
                this.__j(e.prototype, e, t, n, !0), this.__l(e, t, !0), this.__m(e, t, !0);
                var r = t.$$extends;
                if (r)for (var i = 0, s = r.length; i < s; i++)this.assert(e, r[i], n)
            }, objectImplements: function (e, t) {
                var n = e.constructor;
                if (!this.__j(e, n, t) || !this.__l(n, t) || !this.__m(n, t))return !1;
                var r = t.$$extends;
                if (r)for (var i = 0, s = r.length; i < s; i++)if (!this.objectImplements(e, r[i]))return !1;
                return !0
            }, classImplements: function (e, t) {
                if (!this.__j(e.prototype, e, t) || !this.__l(e, t) || !this.__m(e, t))return !1;
                var n = t.$$extends;
                if (n)for (var r = 0, i = n.length; r < i; r++)if (!this.has(e, n[r]))return !1;
                return !0
            }, genericToString: function () {
                return d + this.name + p
            }, $$registry: {}, __n: function (e, t, n, r) {
            }, __h: null, __i: function (e, t) {
            }
        }
    })
}(), function () {
    var e = "ecmascript.error.toString", t = "qx.lang.normalize.Error", n = ": ", r = "Error", i = "";
    qx.Bootstrap.define(t, {
        statics: {
            toString: function () {
                var e = this.name || r, t = this.message || i;
                return e === i && t === i ? r : e === i ? t : t === i ? e : e + n + t
            }
        }, defer: function (t) {
            qx.core.Environment.get(e) || (Error.prototype.toString = t.toString)
        }
    })
}(), function () {
    var e = "qx.lang.normalize.Date", t = "ecmascript.date.now";
    qx.Bootstrap.define(e, {
        statics: {
            now: function () {
                return +(new Date)
            }
        }, defer: function (e) {
            qx.core.Environment.get(t) || (Date.now = e.now)
        }
    })
}(), function () {
    var e = "", t = "ecmascript.string.trim", n = "qx.lang.normalize.String";
    qx.Bootstrap.define(n, {
        statics: {
            trim: function () {
                return this.replace(/^\s+|\s+$/g, e)
            }
        }, defer: function (e) {
            qx.core.Environment.get(t) || (String.prototype.trim = e.trim)
        }
    })
}(), function () {
    var e = "!==inherit){", t = "qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)", n = "value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)", r = "set", i = ";", s = "resetThemed", o = "value !== null && value.nodeType === 9 && value.documentElement", u = "===value)return value;", a = 'value !== null && value.$$type === "Mixin"', f = "return init;", l = "var init=this.", c = "value !== null && value.nodeType === 1 && value.attributes", h = "var parent = this.getLayoutParent();", p = "Error in property ", d = "var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){", v = "();", m = ".validate.call(this, value);", g = "qx.core.Assert.assertInstance(value, Date, msg) || true", y = "else{", b = "if (!parent) return;", w = " in method ", E = "qx.core.Assert.assertInstance(value, Error, msg) || true", S = "=computed;", x = "Undefined value is not allowed!", T = "(backup);", N = "else ", C = "=true;", k = "if(old===undefined)old=this.", L = "if(computed===inherit){", A = "old=computed=this.", O = "inherit", M = "if(this.", _ = "return this.", D = "else if(this.", P = "Is invalid!", H = 'if(value===undefined)prop.error(this,2,"', B = '", "', j = "var computed, old=this.", F = "else if(computed===undefined)", I = "delete this.", q = "resetRuntime", R = "': ", U = " of class ", z = "value !== null && value.nodeType !== undefined", W = "===undefined)return;", X = "value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)", V = "reset", $ = "string", J = "')){", K = "module.events", Q = "return this.", G = "qx.core.Assert.assertPositiveInteger(value, msg) || true", Y = "else this.", Z = "value=this.", et = '","', tt = "if(init==qx.core.Property.$$inherit)init=null;", nt = "get", rt = 'value !== null && value.$$type === "Interface"', it = "var inherit=prop.$$inherit;", st = "', qx.event.type.Data, [computed, old]", ot = "var value = parent.", ut = "$$useinit_", at = "computed=undefined;delete this.", ft = "(value);", lt = "this.", ct = "Requires exactly one argument!", ht = '",value);', pt = "computed=value;", dt = "$$runtime_", vt = "setThemed", mt = ";}", gt = "(value);", yt = "$$user_", bt = "!==undefined)", wt = "){", Et = "qx.core.Assert.assertArray(value, msg) || true", St = "if(computed===undefined||computed===inherit){", xt = ";", Tt = "qx.core.Assert.assertPositiveNumber(value, msg) || true", Nt = ".prototype", Ct = "Boolean", kt = ")}", Lt = "(a[", At = '(computed, old, "', Ot = "setRuntime", Mt = "return value;", _t = "this.", Dt = 'if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ', Pt = "if(reg.hasListener(this, '", Ht = "Does not allow any arguments!", Bt = ")a[i].", jt = "()", Ft = "var a=arguments[0] instanceof Array?arguments[0]:arguments;", It = ".$$properties.", qt = 'value !== null && value.$$type === "Theme"', Rt = "old=this.", Ut = "var reg=qx.event.Registration;", zt = "())", Wt = "=value;", Xt = "return null;", Vt = "qx.core.Assert.assertObject(value, msg) || true", $t = '");', Jt = "if(old===computed)return value;", Kt = "qx.core.Assert.assertString(value, msg) || true", Qt = "if(old===undefined)old=null;", Gt = "var pa=this.getLayoutParent();if(pa)computed=pa.", Yt = "if (value===undefined) value = parent.", Zt = 'value !== null && value.$$type === "Class"', en = "qx.core.Assert.assertFunction(value, msg) || true", tn = "!==undefined&&", nn = "var computed, old;", rn = "var backup=computed;", sn = "}else{", on = "}", un = "object", an = "$$init_", fn = "$$theme_", ln = "!==undefined){", cn = "if(computed===undefined)computed=null;", hn = "Unknown reason: ", pn = "init", dn = "qx.core.Assert.assertMap(value, msg) || true", vn = "qx.core.Assert.assertNumber(value, msg) || true", mn = "if((computed===undefined||computed===inherit)&&", gn = "reg.fireEvent(this, '", yn = "Null value is not allowed!", bn = "qx.core.Assert.assertInteger(value, msg) || true", wn = "value", En = "shorthand", Sn = "computed=this.", xn = "qx.core.Assert.assertInstance(value, RegExp, msg) || true", Tn = "value !== null && value.type !== undefined", Nn = "value !== null && value.document", Cn = "", kn = 'throw new Error("Property ', Ln = "(!this.", An = "qx.core.Assert.assertBoolean(value, msg) || true", On = "if(a[i].", Mn = " of an instance of ", _n = "toggle", Dn = "refresh", Pn = "$$inherit_", Hn = "var prop=qx.core.Property;", Bn = "boolean", jn = " with incoming value '", Fn = "a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));", In = "if(computed===undefined||computed==inherit)computed=null;", qn = "qx.core.Property", Rn = "is", Un = ' is not (yet) ready!");', zn = "]);", Wn = "Could not change or apply init value after constructing phase!";
    qx.Bootstrap.define(qn, {
        statics: {
            __o: function () {
                qx.core.Environment.get(K) && (qx.event.type.Data, qx.event.dispatch.Direct)
            },
            __p: {
                Boolean: An,
                String: Kt,
                Number: vn,
                Integer: bn,
                PositiveNumber: Tt,
                PositiveInteger: G,
                Error: E,
                RegExp: xn,
                Object: Vt,
                Array: Et,
                Map: dn,
                Function: en,
                Date: g,
                Node: z,
                Element: c,
                Document: o,
                Window: Nn,
                Event: Tn,
                Class: Zt,
                Mixin: a,
                Interface: rt,
                Theme: qt,
                Color: t,
                Decorator: X,
                Font: n
            },
            __q: {Node: !0, Element: !0, Document: !0, Window: !0, Event: !0},
            $$inherit: O,
            $$store: {runtime: {}, user: {}, theme: {}, inherit: {}, init: {}, useinit: {}},
            $$method: {
                get: {},
                set: {},
                reset: {},
                init: {},
                refresh: {},
                setRuntime: {},
                resetRuntime: {},
                setThemed: {},
                resetThemed: {}
            },
            $$allowedKeys: {
                name: $,
                dereference: Bn,
                inheritable: Bn,
                nullable: Bn,
                themeable: Bn,
                refine: Bn,
                init: null,
                apply: $,
                event: $,
                check: null,
                transform: $,
                deferredInit: Bn,
                validate: null
            },
            $$allowedGroupKeys: {name: $, group: un, mode: $, themeable: Bn},
            $$inheritable: {},
            __r: function (e) {
                var t = this.__s(e);
                if (!t.length)var n = function () {
                }; else n = this.__t(t);
                e.prototype.$$refreshInheritables = n
            },
            __s: function (e) {
                var t = [];
                while (e) {
                    var n = e.$$properties;
                    if (n)for (var r in this.$$inheritable)n[r] && n[r].inheritable && t.push(r);
                    e = e.superclass
                }
                return t
            },
            __t: function (e) {
                var t = this.$$store.inherit, n = this.$$store.init, r = this.$$method.refresh, i = [h, b];
                for (var s = 0, o = e.length; s < o; s++) {
                    var u = e[s];
                    i.push(ot, t[u], xt, Yt, n[u], xt, _t, r[u], ft)
                }
                return new Function(i.join(Cn))
            },
            attachRefreshInheritables: function (e) {
                e.prototype.$$refreshInheritables = function () {
                    return qx.core.Property.__r(e), this.$$refreshInheritables()
                }
            },
            attachMethods: function (e, t, n) {
                n.group ? this.__u(e, n, t) : this.__v(e, n, t)
            },
            __u: function (e, t, n) {
                var i = qx.Bootstrap.firstUp(n), o = e.prototype, u = t.themeable === !0, a = [], f = [];
                if (u)var l = [], c = [];
                var h = Ft;
                a.push(h), u && l.push(h);
                if (t.mode == En) {
                    var p = Fn;
                    a.push(p), u && l.push(p)
                }
                for (var d = 0, m = t.group, g = m.length; d < g; d++)a.push(_t, this.$$method.set[m[d]], Lt, d, zn), f.push(_t, this.$$method.reset[m[d]], v), u && (l.push(_t, this.$$method.setThemed[m[d]], Lt, d, zn), c.push(_t, this.$$method.resetThemed[m[d]], v));
                this.$$method.set[n] = r + i, o[this.$$method.set[n]] = new Function(a.join(Cn)), this.$$method.reset[n] = V + i, o[this.$$method.reset[n]] = new Function(f.join(Cn)), u && (this.$$method.setThemed[n] = vt + i, o[this.$$method.setThemed[n]] = new Function(l.join(Cn)), this.$$method.resetThemed[n] = s + i, o[this.$$method.resetThemed[n]] = new Function(c.join(Cn)))
            },
            __v: function (e, t, n) {
                var i = qx.Bootstrap.firstUp(n), o = e.prototype;
                t.dereference === undefined && typeof t.check === $ && (t.dereference = this.__w(t.check));
                var u = this.$$method, a = this.$$store;
                a.runtime[n] = dt + n, a.user[n] = yt + n, a.theme[n] = fn + n, a.init[n] = an + n, a.inherit[n] = Pn + n, a.useinit[n] = ut + n, u.get[n] = nt + i, o[u.get[n]] = function () {
                    return qx.core.Property.executeOptimizedGetter(this, e, n, nt)
                }, u.set[n] = r + i, o[u.set[n]] = function (t) {
                    return qx.core.Property.executeOptimizedSetter(this, e, n, r, arguments)
                }, u.reset[n] = V + i, o[u.reset[n]] = function () {
                    return qx.core.Property.executeOptimizedSetter(this, e, n, V)
                };
                if (t.inheritable || t.apply || t.event || t.deferredInit)u.init[n] = pn + i, o[u.init[n]] = function (t) {
                    return qx.core.Property.executeOptimizedSetter(this, e, n, pn, arguments)
                };
                t.inheritable && (u.refresh[n] = Dn + i, o[u.refresh[n]] = function (t) {
                    return qx.core.Property.executeOptimizedSetter(this, e, n, Dn, arguments)
                }), u.setRuntime[n] = Ot + i, o[u.setRuntime[n]] = function (t) {
                    return qx.core.Property.executeOptimizedSetter(this, e, n, Ot, arguments)
                }, u.resetRuntime[n] = q + i, o[u.resetRuntime[n]] = function () {
                    return qx.core.Property.executeOptimizedSetter(this, e, n, q)
                }, t.themeable && (u.setThemed[n] = vt + i, o[u.setThemed[n]] = function (t) {
                    return qx.core.Property.executeOptimizedSetter(this, e, n, vt, arguments)
                }, u.resetThemed[n] = s + i, o[u.resetThemed[n]] = function () {
                    return qx.core.Property.executeOptimizedSetter(this, e, n, s)
                }), t.check === Ct && (o[_n + i] = new Function(Q + u.set[n] + Ln + u.get[n] + zt), o[Rn + i] = new Function(Q + u.get[n] + jt))
            },
            __w: function (e) {
                return !!this.__q[e]
            },
            __x: {0: Wn, 1: ct, 2: x, 3: Ht, 4: yn, 5: P},
            error: function (e, t, n, r, i) {
                var s = e.constructor.classname, o = p + n + U + s + w + this.$$method[r][n] + jn + i + R;
                throw new Error(o + (this.__x[t] || hn + t))
            },
            __y: function (e, t, n, r, i, s) {
                var o = this.$$method[r][n];
                return t[o] = new Function(wn, i.join(Cn)), qx.Bootstrap.setDisplayName(t[o], e.classname + Nt, o), s === undefined ? e[o]() : e[o](s[0])
            },
            executeOptimizedGetter: function (e, t, n, r) {
                var s = t.$$properties[n], o = t.prototype, u = [], a = this.$$store;
                return u.push(M, a.runtime[n], bt), u.push(_, a.runtime[n], i), s.inheritable && (u.push(D, a.inherit[n], bt), u.push(_, a.inherit[n], i), u.push(N)), u.push(M, a.user[n], bt), u.push(_, a.user[n], i), s.themeable && (u.push(D, a.theme[n], bt), u.push(_, a.theme[n], i)), s.deferredInit && s.init === undefined && (u.push(D, a.init[n], bt), u.push(_, a.init[n], i)), u.push(N), s.init !== undefined ? s.inheritable ? (u.push(l, a.init[n], i), s.nullable ? u.push(tt) : s.init !== undefined ? u.push(_, a.init[n], i) : u.push(Dt, n, Mn, t.classname, Un), u.push(f)) : u.push(_, a.init[n], i) : s.inheritable || s.nullable ? u.push(Xt) : u.push(kn, n, Mn, t.classname, Un), this.__y(e, o, n, r, u)
            },
            executeOptimizedSetter: function (e, t, n, i, s) {
                var o = t.$$properties[n], u = t.prototype, a = [], f = i === r || i === vt || i === Ot || i === pn && o.init === undefined, l = o.apply || o.event || o.inheritable, c = this.__z(i, n);
                return this.__A(a, o, n, i, f), f && this.__B(a, t, o, n), l && this.__C(a, f, c, i), o.inheritable && a.push(it), l ? this.__F(a, o, n, i, f) : this.__E(a, n, i, f), o.inheritable ? this.__G(a, o, n, i) : l && this.__H(a, o, n, i), l && (this.__I(a, o, n, i), o.inheritable && u._getChildren && this.__J(a, n)), f && a.push(Mt), this.__y(e, u, n, i, a, s)
            },
            __z: function (e, t) {
                if (e === Ot || e === q)var n = this.$$store.runtime[t]; else e === vt || e === s ? n = this.$$store.theme[t] : e === pn ? n = this.$$store.init[t] : n = this.$$store.user[t];
                return n
            },
            __A: function (e, t, n, i, s) {
                (!t.nullable || t.check || t.inheritable) && e.push(Hn), i === r && e.push(H, n, et, i, ht)
            },
            __B: function (e, t, n, r) {
                n.transform && e.push(Z, n.transform, gt), n.validate && (typeof n.validate === $ ? e.push(lt, n.validate, gt) : n.validate instanceof Function && (e.push(t.classname, It, r), e.push(m)))
            },
            __C: function (e, t, n, r) {
                var i = r === V || r === s || r === q;
                t ? e.push(M, n, u) : i && e.push(M, n, W)
            },
            __D: undefined,
            __E: function (e, t, n, o) {
                n === Ot ? e.push(lt, this.$$store.runtime[t], Wt) : n === q ? (e.push(M, this.$$store.runtime[t], bt), e.push(I, this.$$store.runtime[t], i)) : n === r ? e.push(lt, this.$$store.user[t], Wt) : n === V ? (e.push(M, this.$$store.user[t], bt), e.push(I, this.$$store.user[t], i)) : n === vt ? e.push(lt, this.$$store.theme[t], Wt) : n === s ? (e.push(M, this.$$store.theme[t], bt), e.push(I, this.$$store.theme[t], i)) : n === pn && o && e.push(lt, this.$$store.init[t], Wt)
            },
            __F: function (e, t, n, o, u) {
                t.inheritable ? e.push(j, this.$$store.inherit[n], i) : e.push(nn), e.push(M, this.$$store.runtime[n], ln), o === Ot ? e.push(Sn, this.$$store.runtime[n], Wt) : o === q ? (e.push(I, this.$$store.runtime[n], i), e.push(M, this.$$store.user[n], bt), e.push(Sn, this.$$store.user[n], i), e.push(D, this.$$store.theme[n], bt), e.push(Sn, this.$$store.theme[n], i), e.push(D, this.$$store.init[n], ln), e.push(Sn, this.$$store.init[n], i), e.push(lt, this.$$store.useinit[n], C), e.push(on)) : (e.push(A, this.$$store.runtime[n], i), o === r ? e.push(lt, this.$$store.user[n], Wt) : o === V ? e.push(I, this.$$store.user[n], i) : o === vt ? e.push(lt, this.$$store.theme[n], Wt) : o === s ? e.push(I, this.$$store.theme[n], i) : o === pn && u && e.push(lt, this.$$store.init[n], Wt)), e.push(on), e.push(D, this.$$store.user[n], ln), o === r ? (t.inheritable || e.push(Rt, this.$$store.user[n], i), e.push(Sn, this.$$store.user[n], Wt)) : o === V ? (t.inheritable || e.push(Rt, this.$$store.user[n], i), e.push(I, this.$$store.user[n], i), e.push(M, this.$$store.runtime[n], bt), e.push(Sn, this.$$store.runtime[n], i), e.push(M, this.$$store.theme[n], bt), e.push(Sn, this.$$store.theme[n], i), e.push(D, this.$$store.init[n], ln), e.push(Sn, this.$$store.init[n], i), e.push(lt, this.$$store.useinit[n], C), e.push(on)) : (o === Ot ? e.push(Sn, this.$$store.runtime[n], Wt) : t.inheritable ? e.push(Sn, this.$$store.user[n], i) : e.push(A, this.$$store.user[n], i), o === vt ? e.push(lt, this.$$store.theme[n], Wt) : o === s ? e.push(I, this.$$store.theme[n], i) : o === pn && u && e.push(lt, this.$$store.init[n], Wt)), e.push(on), t.themeable && (e.push(D, this.$$store.theme[n], ln), t.inheritable || e.push(Rt, this.$$store.theme[n], i), o === Ot ? e.push(Sn, this.$$store.runtime[n], Wt) : o === r ? e.push(Sn, this.$$store.user[n], Wt) : o === vt ? e.push(Sn, this.$$store.theme[n], Wt) : o === s ? (e.push(I, this.$$store.theme[n], i), e.push(M, this.$$store.init[n], ln), e.push(Sn, this.$$store.init[n], i), e.push(lt, this.$$store.useinit[n], C), e.push(on)) : o === pn ? (u && e.push(lt, this.$$store.init[n], Wt), e.push(Sn, this.$$store.theme[n], i)) : o === Dn && e.push(Sn, this.$$store.theme[n], i), e.push(on)), e.push(D, this.$$store.useinit[n], wt), t.inheritable || e.push(Rt, this.$$store.init[n], i);
                if (o === pn)u ? e.push(Sn, this.$$store.init[n], Wt) : e.push(Sn, this.$$store.init[n], i); else if (o === r || o === Ot || o === vt || o === Dn)e.push(I, this.$$store.useinit[n], i), o === Ot ? e.push(Sn, this.$$store.runtime[n], Wt) : o === r ? e.push(Sn, this.$$store.user[n], Wt) : o === vt ? e.push(Sn, this.$$store.theme[n], Wt) : o === Dn && e.push(Sn, this.$$store.init[n], i);
                e.push(on);
                if (o === r || o === Ot || o === vt || o === pn)e.push(y), o === Ot ? e.push(Sn, this.$$store.runtime[n], Wt) : o === r ? e.push(Sn, this.$$store.user[n], Wt) : o === vt ? e.push(Sn, this.$$store.theme[n], Wt) : o === pn && (u ? e.push(Sn, this.$$store.init[n], Wt) : e.push(Sn, this.$$store.init[n], i), e.push(lt, this.$$store.useinit[n], C)), e.push(on)
            },
            __G: function (t, n, r, s) {
                t.push(St), s === Dn ? t.push(pt) : t.push(Gt, this.$$store.inherit[r], i), t.push(mn), t.push(lt, this.$$store.init[r], tn), t.push(lt, this.$$store.init[r], e), t.push(Sn, this.$$store.init[r], i), t.push(lt, this.$$store.useinit[r], C), t.push(sn), t.push(I, this.$$store.useinit[r], mt), t.push(on), t.push(Jt), t.push(L), t.push(at, this.$$store.inherit[r], i), t.push(on), t.push(F), t.push(I, this.$$store.inherit[r], i), t.push(Y, this.$$store.inherit[r], S), t.push(rn), n.init !== undefined && s !== pn ? t.push(k, this.$$store.init[r], xt) : t.push(Qt), t.push(In)
            },
            __H: function (e, t, n, i) {
                i !== r && i !== Ot && i !== vt && e.push(cn), e.push(Jt), t.init !== undefined && i !== pn ? e.push(k, this.$$store.init[n], xt) : e.push(Qt)
            },
            __I: function (e, t, n, r) {
                t.apply && e.push(lt, t.apply, At, n, B, r, $t), t.event && e.push(Ut, Pt, t.event, J, gn, t.event, st, kt)
            },
            __J: function (e, t) {
                e.push(d), e.push(On, this.$$method.refresh[t], Bt, this.$$method.refresh[t], T), e.push(on)
            }
        }
    })
}(), function () {
    var e = ".prototype", t = "$$init_", n = "constructor", r = "Property module disabled.", i = "extend", s = "module.property", o = "singleton", u = "qx.event.type.Data", a = "module.events", f = "toString", l = "extend", c = "Array", h = "static", p = "", d = "Events module not enabled.", v = "]", m = "Class", g = "qx.Class", y = '"extend" parameter is null or undefined', b = "[Class ", w = "destruct", E = ".";
    qx.Bootstrap.define(g, {
        statics: {
            __K: qx.core.Environment.get(s) ? qx.core.Property : null,
            define: function (e, t) {
                t || (t = {}), t.include && qx.Bootstrap.getClass(t.include) !== c && (t.include = [t.include]), t.implement && qx.Bootstrap.getClass(t.implement) !== c && (t.implement = [t.implement]);
                var n = !1;
                !t.hasOwnProperty(i) && !t.type && (t.type = h, n = !0);
                var r = this.__N(e, t.type, t.extend, t.statics, t.construct, t.destruct, t.include);
                if (t.extend) {
                    t.properties && this.__P(r, t.properties, !0), t.members && this.__R(r, t.members, !0, !0, !1), t.events && this.__O(r, t.events, !0);
                    if (t.include)for (var s = 0, o = t.include.length; s < o; s++)this.__V(r, t.include[s], !1)
                } else if (t.hasOwnProperty(l) && !1)throw new Error(y);
                if (t.environment)for (var u in t.environment)qx.core.Environment.add(u, t.environment[u]);
                if (t.implement)for (var s = 0, o = t.implement.length; s < o; s++)this.__T(r, t.implement[s]);
                return t.defer && (t.defer.self = r, t.defer(r, r.prototype, {
                    add: function (e, t) {
                        var n = {};
                        n[e] = t, qx.Class.__P(r, n, !0)
                    }
                })), r
            },
            undefine: function (e) {
                delete this.$$registry[e];
                var t = e.split(E), n = [window];
                for (var r = 0; r < t.length; r++)n.push(n[r][t[r]]);
                for (var r = n.length - 1; r >= 1; r--) {
                    var i = n[r], s = n[r - 1];
                    if (!qx.Bootstrap.isFunction(i) && qx.Bootstrap.objectGetLength(i) !== 0)break;
                    delete s[t[r - 1]]
                }
            },
            isDefined: qx.util.OOUtil.classIsDefined,
            getTotalNumber: function () {
                return qx.Bootstrap.objectGetLength(this.$$registry)
            },
            getByName: qx.Bootstrap.getByName,
            include: function (e, t) {
                qx.Class.__V(e, t, !1)
            },
            patch: function (e, t) {
                qx.Class.__V(e, t, !0)
            },
            isSubClassOf: function (e, t) {
                return e ? e == t ? !0 : e.prototype instanceof t ? !0 : !1 : !1
            },
            getPropertyDefinition: qx.util.OOUtil.getPropertyDefinition,
            getProperties: function (e) {
                var t = [];
                while (e)e.$$properties && t.push.apply(t, Object.keys(e.$$properties)), e = e.superclass;
                return t
            },
            getByProperty: function (e, t) {
                while (e) {
                    if (e.$$properties && e.$$properties[t])return e;
                    e = e.superclass
                }
                return null
            },
            hasProperty: qx.util.OOUtil.hasProperty,
            getEventType: qx.util.OOUtil.getEventType,
            supportsEvent: qx.util.OOUtil.supportsEvent,
            hasOwnMixin: function (e, t) {
                return e.$$includes && e.$$includes.indexOf(t) !== -1
            },
            getByMixin: function (e, t) {
                var n, r, i;
                while (e) {
                    if (e.$$includes) {
                        n = e.$$flatIncludes;
                        for (r = 0, i = n.length; r < i; r++)if (n[r] === t)return e
                    }
                    e = e.superclass
                }
                return null
            },
            getMixins: qx.util.OOUtil.getMixins,
            hasMixin: function (e, t) {
                return !!this.getByMixin(e, t)
            },
            hasOwnInterface: function (e, t) {
                return e.$$implements && e.$$implements.indexOf(t) !== -1
            },
            getByInterface: qx.util.OOUtil.getByInterface,
            getInterfaces: function (e) {
                var t = [];
                while (e)e.$$implements && t.push.apply(t, e.$$flatImplements), e = e.superclass;
                return t
            },
            hasInterface: qx.util.OOUtil.hasInterface,
            implementsInterface: function (e, t) {
                var n = e.constructor;
                return this.hasInterface(n, t) ? !0 : qx.Interface.objectImplements(e, t) ? !0 : qx.Interface.classImplements(n, t) ? !0 : !1
            },
            getInstance: function () {
                return this.$$instance || (this.$$allowconstruct = !0, this.$$instance = new this, delete this.$$allowconstruct), this.$$instance
            },
            genericToString: function () {
                return b + this.classname + v
            },
            $$registry: qx.Bootstrap.$$registry,
            __h: null,
            __L: null,
            __i: function (e, t) {
            },
            __M: function (e) {
            },
            __N: function (e, t, r, i, s, u, a) {
                var l;
                if (!r && !0)l = i || {}, qx.Bootstrap.setDisplayNames(l, e); else {
                    l = {}, r && (s || (s = this.__W()), this.__X(r, a) ? l = this.__Y(s, e, t) : l = s, t === o && (l.getInstance = this.getInstance), qx.Bootstrap.setDisplayName(s, e, n));
                    if (i) {
                        qx.Bootstrap.setDisplayNames(i, e);
                        var c;
                        for (var h = 0, d = Object.keys(i), v = d.length; h < v; h++) {
                            c = d[h];
                            var g = i[c];
                            l[c] = g
                        }
                    }
                }
                var y = e ? qx.Bootstrap.createNamespace(e, l) : p;
                return l.name = l.classname = e, l.basename = y, l.$$type = m, t && (l.$$classtype = t), l.hasOwnProperty(f) || (l.toString = this.genericToString), r && (qx.Bootstrap.extendClass(l, s, r, e, y), u && (l.$$destructor = u, qx.Bootstrap.setDisplayName(u, e, w))), this.$$registry[e] = l, l
            },
            __O: function (e, t, n) {
                var r, r;
                if (e.$$events)for (var r in t)e.$$events[r] = t[r]; else e.$$events = t
            },
            __P: function (e, n, i) {
                if (!qx.core.Environment.get(s))throw new Error(r);
                var o;
                i === undefined && (i = !1);
                var f = e.prototype;
                for (var l in n) {
                    o = n[l], o.name = l, o.refine || (e.$$properties === undefined && (e.$$properties = {}), e.$$properties[l] = o), o.init !== undefined && (e.prototype[t + l] = o.init);
                    if (o.event !== undefined) {
                        if (!qx.core.Environment.get(a))throw new Error(d);
                        var c = {};
                        c[o.event] = u, this.__O(e, c, i)
                    }
                    o.inheritable && (this.__K.$$inheritable[l] = !0, f.$$refreshInheritables || this.__K.attachRefreshInheritables(e)), o.refine || this.__K.attachMethods(e, l, o)
                }
            },
            __Q: null,
            __R: function (t, n, r, i, s) {
                var o = t.prototype, u, a;
                qx.Bootstrap.setDisplayNames(n, t.classname + e);
                for (var f = 0, l = Object.keys(n), c = l.length; f < c; f++)u = l[f], a = n[u], i !== !1 && a instanceof Function && a.$$type == null && (s == 1 ? a = this.__S(a, o[u]) : (o[u] && (a.base = o[u]), a.self = t)), o[u] = a
            },
            __S: function (e, t) {
                return t ? function () {
                    var n = e.base;
                    e.base = t;
                    var r = e.apply(this, arguments);
                    return e.base = n, r
                } : e
            },
            __T: function (e, t) {
                var n = qx.Interface.flatten([t]);
                e.$$implements ? (e.$$implements.push(t), e.$$flatImplements.push.apply(e.$$flatImplements, n)) : (e.$$implements = [t], e.$$flatImplements = n)
            },
            __U: function (e) {
                var t = e.classname, n = this.__Y(e, t, e.$$classtype);
                for (var r = 0, i = Object.keys(e), s = i.length; r < s; r++)a = i[r], n[a] = e[a];
                n.prototype = e.prototype;
                var o = e.prototype;
                for (var r = 0, i = Object.keys(o), s = i.length; r < s; r++) {
                    a = i[r];
                    var u = o[a];
                    u && u.self == e && (u.self = n)
                }
                for (var a in this.$$registry) {
                    var f = this.$$registry[a];
                    if (!f)continue;
                    f.base == e && (f.base = n), f.superclass == e && (f.superclass = n), f.$$original && (f.$$original.base == e && (f.$$original.base = n), f.$$original.superclass == e && (f.$$original.superclass = n))
                }
                return qx.Bootstrap.createNamespace(t, n), this.$$registry[t] = n, n
            },
            __V: function (e, t, n) {
                if (this.hasMixin(e, t))return;
                var r = e.$$original;
                t.$$constructor && !r && (e = this.__U(e));
                var i = qx.Mixin.flatten([t]), s;
                for (var o = 0, u = i.length; o < u; o++)s = i[o], s.$$events && this.__O(e, s.$$events, n), s.$$properties && this.__P(e, s.$$properties, n), s.$$members && this.__R(e, s.$$members, n, n, n);
                e.$$includes ? (e.$$includes.push(t), e.$$flatIncludes.push.apply(e.$$flatIncludes, i)) : (e.$$includes = [t], e.$$flatIncludes = i)
            },
            __W: function () {
                function e() {
                    e.base.apply(this, arguments)
                }

                return e
            },
            __X: function (e, t) {
                if (e && e.$$includes) {
                    var n = e.$$flatIncludes;
                    for (var r = 0, i = n.length; r < i; r++)if (n[r].$$constructor)return !0
                }
                if (t) {
                    var s = qx.Mixin.flatten(t);
                    for (var r = 0, i = s.length; r < i; r++)if (s[r].$$constructor)return !0
                }
                return !1
            },
            __Y: function (e, t, n) {
                var r = function () {
                    var e = r, t = e.$$original.apply(this, arguments);
                    if (e.$$includes) {
                        var n = e.$$flatIncludes;
                        for (var i = 0, s = n.length; i < s; i++)n[i].$$constructor && n[i].$$constructor.apply(this, arguments)
                    }
                    return t
                }, i;
                return r.$$original = e, e.wrapper = r, r
            }
        }, defer: function () {
            var e, t, n
        }
    })
}(), function () {
    var e = "qx.data.MBinding";
    qx.Mixin.define(e, {
        construct: function () {
            this.__ba = this.toHashCode()
        }, members: {
            __ba: null, bind: function (e, t, n, r) {
                return qx.data.SingleValueBinding.bind(this, e, t, n, r)
            }, removeBinding: function (e) {
                qx.data.SingleValueBinding.removeBindingFromObject(this, e)
            }, removeRelatedBindings: function (e) {
                qx.data.SingleValueBinding.removeRelatedBindings(this, e)
            }, removeAllBindings: function () {
                qx.data.SingleValueBinding.removeAllBindingsForObject(this)
            }, getBindings: function () {
                return qx.data.SingleValueBinding.getAllBindingsForObject(this)
            }
        }, destruct: function () {
            this.$$hash = this.__ba, this.removeAllBindings(), delete this.$$hash
        }
    })
}(), function () {
    var e = "qx.core.Aspect", t = "before", n = "*", r = "static";
    qx.Bootstrap.define(e, {
        statics: {
            __bU: [], wrap: function (e, t, i) {
                var s = [], o = [], u = this.__bU, a;
                for (var f = 0; f < u.length; f++)a = u[f], (a.type == null || i == a.type || a.type == n) && (a.name == null || e.match(a.name)) && (a.pos == -1 ? s.push(a.fcn) : o.push(a.fcn));
                if (s.length === 0 && o.length === 0)return t;
                var l = function () {
                    for (var n = 0; n < s.length; n++)s[n].call(this, e, t, i, arguments);
                    var r = t.apply(this, arguments);
                    for (var n = 0; n < o.length; n++)o[n].call(this, e, t, i, arguments, r);
                    return r
                };
                return i !== r && (l.self = t.self, l.base = t.base), t.wrapper = l, l.original = t, l
            }, addAdvice: function (e, n, r, i) {
                this.__bU.push({fcn: e, pos: n === t ? -1 : 1, type: r, name: i})
            }
        }
    })
}(), function () {
    var e = ". Error message: ", t = "Boolean", n = ").", r = "set", i = "deepBinding", s = ") to the object '", o = "item", u = "Please use only one array at a time: ", a = "Integer", f = "reset", l = " of object ", c = "qx.data.SingleValueBinding", h = "Binding property ", p = "Failed so set value ", d = "change", v = "Binding could not be found!", m = "get", g = "^", y = " does not work.", b = "String", w = "Binding from '", E = "", S = "PositiveNumber", x = "]", T = "[", N = ".", C = "PositiveInteger", k = "No number or 'last' value hast been given in an array binding: ", L = "' (", A = " on ", O = "Binding does not exist!", M = "Number", _ = ".[", D = "Date", P = " not possible: No event available. ", H = "last";
    qx.Class.define(c, {
        statics: {
            __bb: {}, __bc: {}, bind: function (e, t, n, r, s) {
                var o = this.__be(e, t, n, r, s), u = t.split(N), a = this.__bm(u), f = [], l = [], c = [], h = [], p = e;
                try {
                    for (var v = 0; v < u.length; v++) {
                        a[v] !== E ? h.push(d) : h.push(this.__bf(p, u[v])), f[v] = p;
                        if (v == u.length - 1)if (a[v] !== E) {
                            var g = a[v] === H ? p.length - 1 : a[v], y = p.getItem(g);
                            this.__bl(y, n, r, s, e), c[v] = this.__bn(p, h[v], n, r, s, a[v])
                        } else {
                            if (u[v] != null && p[m + qx.lang.String.firstUp(u[v])] != null) {
                                var y = p[m + qx.lang.String.firstUp(u[v])]();
                                this.__bl(y, n, r, s, e)
                            }
                            c[v] = this.__bn(p, h[v], n, r, s)
                        } else {
                            var b = {
                                index: v,
                                propertyNames: u,
                                sources: f,
                                listenerIds: c,
                                arrayIndexValues: a,
                                targetObject: n,
                                targetPropertyChain: r,
                                options: s,
                                listeners: l
                            }, w = qx.lang.Function.bind(this.__bd, this, b);
                            l.push(w), c[v] = p.addListener(h[v], w)
                        }
                        if (p[m + qx.lang.String.firstUp(u[v])] == null)p = undefined; else if (a[v] !== E) {
                            var g = a[v] === H ? p.length - 1 : a[v];
                            p = p[m + qx.lang.String.firstUp(u[v])](g)
                        } else p = p[m + qx.lang.String.firstUp(u[v])](), p === null && u.length - 1 != v && (p = undefined);
                        if (!p) {
                            this.__bl(p, n, r, s, e);
                            break
                        }
                    }
                } catch (S) {
                    for (var v = 0; v < f.length; v++)f[v] && c[v] && f[v].removeListenerById(c[v]);
                    var x = o.targets, T = o.listenerIds;
                    for (var v = 0; v < x.length; v++)x[v] && T[v] && x[v].removeListenerById(T[v]);
                    throw S
                }
                var C = {type: i, listenerIds: c, sources: f, targetListenerIds: o.listenerIds, targets: o.targets};
                return this.__bo(C, e, t, n, r), C
            }, __bd: function (e) {
                e.options && e.options.onUpdate && e.options.onUpdate(e.sources[e.index], e.targetObject);
                for (var t = e.index + 1; t < e.propertyNames.length; t++) {
                    var n = e.sources[t];
                    e.sources[t] = null;
                    if (!n)continue;
                    n.removeListenerById(e.listenerIds[t])
                }
                var n = e.sources[e.index];
                for (var t = e.index + 1; t < e.propertyNames.length; t++) {
                    e.arrayIndexValues[t - 1] !== E ? n = n[m + qx.lang.String.firstUp(e.propertyNames[t - 1])](e.arrayIndexValues[t - 1]) : n = n[m + qx.lang.String.firstUp(e.propertyNames[t - 1])](), e.sources[t] = n;
                    if (!n) {
                        if (e.options && e.options.converter) {
                            var r = !1;
                            if (e.options.ignoreConverter) {
                                var i = e.propertyNames.slice(0, t).join(N), s = i.match(new RegExp(g + e.options.ignoreConverter));
                                r = s ? s.length > 0 : !1
                            }
                            r ? this.__bg(e.targetObject, e.targetPropertyChain) : this.__bh(e.targetObject, e.targetPropertyChain, e.options.converter())
                        } else this.__bg(e.targetObject, e.targetPropertyChain);
                        break
                    }
                    if (t == e.propertyNames.length - 1)if (qx.Class.implementsInterface(n, qx.data.IListData)) {
                        var o = e.arrayIndexValues[t] === H ? n.length - 1 : e.arrayIndexValues[t], u = n.getItem(o);
                        this.__bl(u, e.targetObject, e.targetPropertyChain, e.options, e.sources[e.index]), e.listenerIds[t] = this.__bn(n, d, e.targetObject, e.targetPropertyChain, e.options, e.arrayIndexValues[t])
                    } else {
                        if (e.propertyNames[t] != null && n[m + qx.lang.String.firstUp(e.propertyNames[t])] != null) {
                            var u = n[m + qx.lang.String.firstUp(e.propertyNames[t])]();
                            this.__bl(u, e.targetObject, e.targetPropertyChain, e.options, e.sources[e.index])
                        }
                        var a = this.__bf(n, e.propertyNames[t]);
                        e.listenerIds[t] = this.__bn(n, a, e.targetObject, e.targetPropertyChain, e.options)
                    } else {
                        if (e.listeners[t] == null) {
                            var f = qx.lang.Function.bind(this.__bd, this, e);
                            e.listeners.push(f)
                        }
                        if (qx.Class.implementsInterface(n, qx.data.IListData))var a = d; else var a = this.__bf(n, e.propertyNames[t]);
                        e.listenerIds[t] = n.addListener(a, e.listeners[t])
                    }
                }
            }, __be: function (e, t, n, r, i) {
                var s = r.split(N), o = this.__bm(s), u = [], a = [], f = [], l = [], c = n;
                for (var h = 0; h < s.length - 1; h++) {
                    if (o[h] !== E)l.push(d); else try {
                        l.push(this.__bf(c, s[h]))
                    } catch (p) {
                        break
                    }
                    u[h] = c;
                    var v = function () {
                        for (var l = h + 1; l < s.length - 1; l++) {
                            var c = u[l];
                            u[l] = null;
                            if (!c)continue;
                            c.removeListenerById(f[l])
                        }
                        var c = u[h];
                        for (var l = h + 1; l < s.length - 1; l++) {
                            var p = qx.lang.String.firstUp(s[l - 1]);
                            if (o[l - 1] !== E) {
                                var g = o[l - 1] === H ? c.getLength() - 1 : o[l - 1];
                                c = c[m + p](g)
                            } else c = c[m + p]();
                            u[l] = c, a[l] == null && a.push(v);
                            if (qx.Class.implementsInterface(c, qx.data.IListData))var y = d; else try {
                                var y = qx.data.SingleValueBinding.__bf(c, s[l])
                            } catch (b) {
                                break
                            }
                            f[l] = c.addListener(y, a[l])
                        }
                        qx.data.SingleValueBinding.updateTarget(e, t, n, r, i)
                    };
                    a.push(v), f[h] = c.addListener(l[h], v);
                    var g = qx.lang.String.firstUp(s[h]);
                    c[m + g] == null ? c = null : o[h] !== E ? c = c[m + g](o[h]) : c = c[m + g]();
                    if (!c)break
                }
                return {listenerIds: f, targets: u}
            }, updateTarget: function (e, t, n, r, i) {
                var s = this.resolvePropertyChain(e, t);
                s = qx.data.SingleValueBinding.__bp(s, n, r, i, e), this.__bh(n, r, s)
            }, resolvePropertyChain: function (e, t) {
                var n = this.__bj(t);
                return this.__bk(e, n, n.length)
            }, __bf: function (e, t) {
                var n = this.__bq(e, t);
                if (n == null)if (qx.Class.supportsEvent(e.constructor, t))n = t; else {
                    if (!qx.Class.supportsEvent(e.constructor, d + qx.lang.String.firstUp(t)))throw new qx.core.AssertionError(h + t + l + e + P);
                    n = d + qx.lang.String.firstUp(t)
                }
                return n
            }, __bg: function (e, t) {
                var n = this.__bj(t), i = this.__bk(e, n);
                if (i != null) {
                    var s = n[n.length - 1], o = this.__bi(s);
                    if (o) {
                        this.__bh(e, t, null);
                        return
                    }
                    i[f + qx.lang.String.firstUp(s)] != undefined ? i[f + qx.lang.String.firstUp(s)]() : i[r + qx.lang.String.firstUp(s)](null)
                }
            }, __bh: function (e, t, n) {
                var i = this.__bj(t), s = this.__bk(e, i);
                if (s) {
                    var o = i[i.length - 1], u = this.__bi(o);
                    u ? (u === H && (u = s.length - 1), s.setItem(u, n)) : s[r + qx.lang.String.firstUp(o)](n)
                }
            }, __bi: function (e) {
                var t = /^\[(\d+|last)\]$/, n = e.match(t);
                return n ? n[1] : null
            }, __bj: function (e) {
                return e.replace(/\[/g, _).split(N).filter(function (e) {
                    return e !== E
                })
            }, __bk: function (e, t, n) {
                n = n || t.length - 1;
                var r = e;
                for (var i = 0; i < n; i++)try {
                    var s = t[i], o = this.__bi(s);
                    o ? (o === H && (o = r.length - 1), r = r.getItem(o)) : r = r[m + qx.lang.String.firstUp(s)]()
                } catch (u) {
                    return null
                }
                return r
            }, __bl: function (t, n, r, i, s) {
                t = this.__bp(t, n, r, i, s), t === undefined && this.__bg(n, r);
                if (t !== undefined)try {
                    this.__bh(n, r, t), i && i.onUpdate && i.onUpdate(s, n, t)
                } catch (o) {
                    if (!(o instanceof qx.core.ValidationError))throw o;
                    i && i.onSetFail ? i.onSetFail(o) : qx.log.Logger.warn(p + t + A + n + e + o)
                }
            }, __bm: function (e) {
                var t = [];
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (qx.lang.String.endsWith(r, x)) {
                        var i = r.substring(r.indexOf(T) + 1, r.indexOf(x));
                        if (r.indexOf(x) != r.length - 1)throw new Error(u + r + y);
                        if (i !== H)if (i == E || isNaN(parseInt(i, 10)))throw new Error(k + r + y);
                        r.indexOf(T) != 0 ? (e[n] = r.substring(0, r.indexOf(T)), t[n] = E, t[n + 1] = i, e.splice(n + 1, 0, o), n++) : (t[n] = i, e.splice(n, 1, o))
                    } else t[n] = E
                }
                return t
            }, __bn: function (t, n, r, i, s, o) {
                var u, a = function (n, o) {
                    if (n !== E) {
                        n === H && (n = t.length - 1);
                        var u = t.getItem(n);
                        u === undefined && qx.data.SingleValueBinding.__bg(r, i);
                        var a = o.getData().start, f = o.getData().end;
                        if (n < a || n > f)return
                    } else var u = o.getData();
                    u = qx.data.SingleValueBinding.__bp(u, r, i, s, t);
                    try {
                        u !== undefined ? qx.data.SingleValueBinding.__bh(r, i, u) : qx.data.SingleValueBinding.__bg(r, i), s && s.onUpdate && s.onUpdate(t, r, u)
                    } catch (l) {
                        if (!(l instanceof qx.core.ValidationError))throw l;
                        s && s.onSetFail ? s.onSetFail(l) : qx.log.Logger.warn(p + u + A + r + e + l)
                    }
                };
                o || (o = E), a = qx.lang.Function.bind(a, t, o);
                var f = t.addListener(n, a);
                return f
            }, __bo: function (e, t, n, r, i) {
                var s;
                s = t.toHashCode(), this.__bb[s] === undefined && (this.__bb[s] = []);
                var o = [e, t, n, r, i];
                this.__bb[s].push(o), s = r.toHashCode(), this.__bc[s] === undefined && (this.__bc[s] = []), this.__bc[s].push(o)
            }, __bp: function (e, t, n, r, i) {
                if (r && r.converter) {
                    var s;
                    return t.getModel && (s = t.getModel()), r.converter(e, s, i, t)
                }
                var o = this.__bj(n), u = this.__bk(t, o), a = n.substring(n.lastIndexOf(N) + 1, n.length);
                if (u == null)return e;
                var f = qx.Class.getPropertyDefinition(u.constructor, a), l = f == null ? E : f.check;
                return this.__br(e, l)
            }, __bq: function (e, t) {
                var n = qx.Class.getPropertyDefinition(e.constructor, t);
                return n == null ? null : n.event
            }, __br: function (e, n) {
                var r = qx.lang.Type.getClass(e);
                return (r == M || r == b) && (n == a || n == C) && (e = parseInt(e, 10)), (r == t || r == M || r == D) && n == b && (e += E), (r == M || r == b) && (n == M || n == S) && (e = parseFloat(e)), e
            }, removeBindingFromObject: function (e, t) {
                if (t.type == i) {
                    for (var n = 0; n < t.sources.length; n++)t.sources[n] && t.sources[n].removeListenerById(t.listenerIds[n]);
                    for (var n = 0; n < t.targets.length; n++)t.targets[n] && t.targets[n].removeListenerById(t.targetListenerIds[n])
                } else e.removeListenerById(t);
                var r = this.getAllBindingsForObject(e);
                if (r != undefined)for (var n = 0; n < r.length; n++)if (r[n][0] == t) {
                    var s = r[n][3];
                    this.__bc[s.toHashCode()] && qx.lang.Array.remove(this.__bc[s.toHashCode()], r[n]);
                    var o = r[n][1];
                    this.__bb[o.toHashCode()] && qx.lang.Array.remove(this.__bb[o.toHashCode()], r[n]);
                    return
                }
                throw new Error(v)
            }, removeAllBindingsForObject: function (e) {
                var t = this.getAllBindingsForObject(e);
                if (t != undefined)for (var n = t.length - 1; n >= 0; n--)this.removeBindingFromObject(e, t[n][0])
            }, removeRelatedBindings: function (e, t) {
                var n = this.getAllBindingsForObject(e);
                if (n != undefined)for (var r = n.length - 1; r >= 0; r--) {
                    var i = n[r][1], s = n[r][3];
                    (i === t || s === t) && this.removeBindingFromObject(e, n[r][0])
                }
            }, getAllBindingsForObject: function (e) {
                var t = e.toHashCode();
                this.__bb[t] === undefined && (this.__bb[t] = []);
                var n = this.__bb[t], r = this.__bc[t] ? this.__bc[t] : [];
                return qx.lang.Array.unique(n.concat(r))
            }, removeAllBindings: function () {
                for (var e in this.__bb) {
                    var t = qx.core.ObjectRegistry.fromHashCode(e);
                    if (t == null) {
                        delete this.__bb[e];
                        continue
                    }
                    this.removeAllBindingsForObject(t)
                }
                this.__bb = {}
            }, getAllBindings: function () {
                return this.__bb
            }, showBindingInLog: function (e, t) {
                var r;
                for (var i = 0; i < this.__bb[e.toHashCode()].length; i++)if (this.__bb[e.toHashCode()][i][0] == t) {
                    r = this.__bb[e.toHashCode()][i];
                    break
                }
                if (r === undefined)var o = O; else var o = w + r[1] + L + r[2] + s + r[3] + L + r[4] + n;
                qx.log.Logger.debug(o)
            }, showAllBindingsInLog: function () {
                for (var e in this.__bb) {
                    var t = qx.core.ObjectRegistry.fromHashCode(e);
                    for (var n = 0; n < this.__bb[e].length; n++)this.showBindingInLog(t, this.__bb[e][n][0])
                }
            }
        }
    })
}(), function () {
    var e = "anonymous", t = "...", n = "qx.dev.StackTrace", r = "", i = "\n", s = "?", o = "/source/class/", u = "Error created at", a = "ecmascript.error.stacktrace", f = "Backtrace:", l = "stack", c = ":", h = ".", p = "function", d = "prototype", v = "stacktrace";
    qx.Bootstrap.define(n, {
        statics: {
            FILENAME_TO_CLASSNAME: null, FORMAT_STACKTRACE: null, getStackTrace: function () {
                var t = [];
                try {
                    throw new Error
                } catch (n) {
                    if (qx.dev.StackTrace.hasEnvironmentCheck && qx.core.Environment.get(a)) {
                        var r = qx.dev.StackTrace.getStackTraceFromError(n), i = qx.dev.StackTrace.getStackTraceFromCaller(arguments);
                        qx.lang.Array.removeAt(r, 0), t = i.length > r.length ? i : r;
                        for (var s = 0; s < Math.min(i.length, r.length); s++) {
                            var o = i[s];
                            if (o.indexOf(e) >= 0)continue;
                            var u = null, f = o.split(h), l = /(.*?)\(/.exec(f[f.length - 1]);
                            l && l.length == 2 && (u = l[1], f.pop()), f[f.length - 1] == d && f.pop();
                            var p = f.join(h), v = r[s], g = v.split(c), y = g[0], b = g[1], w;
                            g[2] && (w = g[2]);
                            var E = null;
                            qx.Class && qx.Class.getByName(y) ? E = y : E = p;
                            var S = E;
                            u && (S += h + u), S += c + b, w && (S += c + w), t[s] = S
                        }
                    } else t = this.getStackTraceFromCaller(arguments)
                }
                return t
            }, getStackTraceFromCaller: function (e) {
                var n = [], r = qx.lang.Function.getCaller(e), i = {};
                while (r) {
                    var s = qx.lang.Function.getName(r);
                    n.push(s);
                    try {
                        r = r.caller
                    } catch (o) {
                        break
                    }
                    if (!r)break;
                    var u = qx.core.ObjectRegistry.toHashCode(r);
                    if (i[u]) {
                        n.push(t);
                        break
                    }
                    i[u] = r
                }
                return n
            }, getStackTraceFromError: function (e) {
                var t = [], n, r, s, o, h, p, d, g = qx.dev.StackTrace.hasEnvironmentCheck ? qx.core.Environment.get(a) : null;
                if (g === l) {
                    if (!e.stack)return t;
                    n = /@(.+):(\d+)$/gm;
                    while ((r = n.exec(e.stack)) != null)d = r[1], o = r[2], s = this.__bR(d), t.push(s + c + o);
                    if (t.length > 0)return this.__bT(t);
                    n = /at (.*)/gm;
                    var y = /\((.*?)(:[^\/].*)\)/, b = /(.*?)(:[^\/].*)/;
                    while ((r = n.exec(e.stack)) != null) {
                        var w = y.exec(r[1]);
                        w || (w = b.exec(r[1])), w ? (s = this.__bR(w[1]), t.push(s + w[2])) : t.push(r[1])
                    }
                } else if (g === v) {
                    var E = e.stacktrace;
                    if (!E)return t;
                    E.indexOf(u) >= 0 && (E = E.split(u)[0]), n = /line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
                    while ((r = n.exec(E)) != null)o = r[1], h = r[2], d = r[3], s = this.__bR(d), t.push(s + c + o + c + h);
                    if (t.length > 0)return this.__bT(t);
                    n = /Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
                    while ((r = n.exec(E)) != null)o = r[1], d = r[2], s = this.__bR(d), t.push(s + c + o)
                } else if (e.message && e.message.indexOf(f) >= 0) {
                    var S = e.message.split(f)[1].trim(), x = S.split(i);
                    for (var T = 0; T < x.length; T++) {
                        var N = x[T].match(/\s*Line ([0-9]+) of.* (\S.*)/);
                        N && N.length >= 2 && (o = N[1], p = this.__bR(N[2]), t.push(p + c + o))
                    }
                } else e.sourceURL && e.line && t.push(this.__bR(e.sourceURL) + c + e.line);
                return this.__bT(t)
            }, __bR: function (e) {
                if (typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME == p) {
                    var t = qx.dev.StackTrace.FILENAME_TO_CLASSNAME(e);
                    return t
                }
                return qx.dev.StackTrace.__bS(e)
            }, __bS: function (e) {
                var t = o, n = e.indexOf(t), i = e.indexOf(s);
                i >= 0 && (e = e.substring(0, i));
                var u = n == -1 ? e : e.substring(n + t.length).replace(/\//g, h).replace(/\.js$/, r);
                return u
            }, __bT: function (e) {
                return typeof qx.dev.StackTrace.FORMAT_STACKTRACE == p && (e = qx.dev.StackTrace.FORMAT_STACKTRACE(e)), e
            }
        }, defer: function (e) {
            e.hasEnvironmentCheck = qx.bom && qx.bom.client && qx.bom.client.EcmaScript && qx.bom.client.EcmaScript.getStackTrace
        }
    })
}(), function () {
    var e = "mshtml", t = "engine.name", n = "[object Array]", r = "qx.lang.Array", i = "Cannot clean-up map entry doneObjects[", s = "]", o = "qx", u = "number", a = "][", f = "string";
    qx.Bootstrap.define(r, {
        statics: {
            cast: function (r, i, s) {
                if (r.constructor === i)return r;
                if (qx.data && qx.data.IListData && qx.Class && qx.Class.hasInterface(r, qx.data.IListData))var r = r.toArray();
                var o = new i;
                if (qx.core.Environment.get(t) == e && r.item) {
                    for (var u = s || 0, a = r.length; u < a; u++)o.push(r[u]);
                    return o
                }
                return Object.prototype.toString.call(r) === n && s == null ? o.push.apply(o, r) : o.push.apply(o, Array.prototype.slice.call(r, s || 0)), o
            }, fromArguments: function (e, t) {
                return Array.prototype.slice.call(e, t || 0)
            }, fromCollection: function (n) {
                if (qx.core.Environment.get(t) == e && n.item) {
                    var r = [];
                    for (var i = 0, s = n.length; i < s; i++)r[i] = n[i];
                    return r
                }
                return Array.prototype.slice.call(n, 0)
            }, fromShortHand: function (e) {
                var t = e.length, n = qx.lang.Array.clone(e);
                switch (t) {
                    case 1:
                        n[1] = n[2] = n[3] = n[0];
                        break;
                    case 2:
                        n[2] = n[0];
                    case 3:
                        n[3] = n[1]
                }
                return n
            }, clone: function (e) {
                return e.concat()
            }, insertAt: function (e, t, n) {
                return e.splice(n, 0, t), e
            }, insertBefore: function (e, t, n) {
                var r = e.indexOf(n);
                return r == -1 ? e.push(t) : e.splice(r, 0, t), e
            }, insertAfter: function (e, t, n) {
                var r = e.indexOf(n);
                return r == -1 || r == e.length - 1 ? e.push(t) : e.splice(r + 1, 0, t), e
            }, removeAt: function (e, t) {
                return e.splice(t, 1)[0]
            }, removeAll: function (e) {
                return e.length = 0, this
            }, append: function (e, t) {
                return Array.prototype.push.apply(e, t), e
            }, exclude: function (e, t) {
                for (var n = 0, r = t.length, i; n < r; n++)i = e.indexOf(t[n]), i != -1 && e.splice(i, 1);
                return e
            }, remove: function (e, t) {
                var n = e.indexOf(t);
                if (n != -1)return e.splice(n, 1), t
            }, contains: function (e, t) {
                return e.indexOf(t) !== -1
            }, equals: function (e, t) {
                var n = e.length;
                if (n !== t.length)return !1;
                for (var r = 0; r < n; r++)if (e[r] !== t[r])return !1;
                return !0
            }, sum: function (e) {
                var t = 0;
                for (var n = 0, r = e.length; n < r; n++)e[n] != undefined && (t += e[n]);
                return t
            }, max: function (e) {
                var t, n = e.length, r = e[0];
                for (t = 1; t < n; t++)e[t] > r && (r = e[t]);
                return r === undefined ? null : r
            }, min: function (e) {
                var t, n = e.length, r = e[0];
                for (t = 1; t < n; t++)e[t] < r && (r = e[t]);
                return r === undefined ? null : r
            }, unique: function (e) {
                var t = [], n = {}, r = {}, l = {}, c, p = 0, d = o + Date.now(), v = !1, m = !1, y = !1;
                for (var b = 0, w = e.length; b < w; b++) {
                    c = e[b];
                    if (c === null)v || (v = !0, t.push(c)); else if (c !== undefined)if (c === !1)m || (m = !0, t.push(c)); else if (c === !0)y || (y = !0, t.push(c)); else if (typeof c === f)n[c] || (n[c] = 1, t.push(c)); else if (typeof c === u)r[c] || (r[c] = 1, t.push(c)); else {
                        var E = c[d];
                        E == null && (E = c[d] = p++), l[E] || (l[E] = c, t.push(c))
                    }
                }
                for (var E in l)try {
                    delete l[E][d]
                } catch (S) {
                    try {
                        l[E][d] = null
                    } catch (x) {
                        throw new Error(i + E + a + d + s)
                    }
                }
                return t
            }, range: function (e, t, n) {
                arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
                var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = Array(r);
                while (i < r)s[i++] = e, e += n;
                return s
            }
        }
    })
}(), function () {
    var e = "[object Opera]", t = "function", n = "[^\\.0-9]", r = "4.0", i = "gecko", s = "1.9.0.0", o = "Version/", u = "9.0", a = "8.0", f = "Gecko", l = "Maple", c = "AppleWebKit/", h = "Trident", p = "Unsupported client: ", d = "", v = "opera", m = "engine.version", g = "! Assumed gecko version 1.9.0.0 (Firefox 3.0).", y = "mshtml", b = "engine.name", w = "webkit", E = "5.0", S = ".", x = "qx.bom.client.Engine";
    qx.Bootstrap.define(x, {
        statics: {
            getVersion: function () {
                var e = window.navigator.userAgent, i = d;
                if (qx.bom.client.Engine.__bv()) {
                    if (/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(e))if (e.indexOf(o) != -1) {
                        var f = e.match(/Version\/(\d+)\.(\d+)/);
                        i = f[1] + S + f[2].charAt(0) + S + f[2].substring(1, f[2].length)
                    } else i = RegExp.$1 + S + RegExp.$2, RegExp.$3 != d && (i += S + RegExp.$3)
                } else if (qx.bom.client.Engine.__bw()) {
                    if (/AppleWebKit\/([^ ]+)/.test(e)) {
                        i = RegExp.$1;
                        var l = RegExp(n).exec(i);
                        l && (i = i.slice(0, l.index))
                    }
                } else if (qx.bom.client.Engine.__by() || qx.bom.client.Engine.__bx())/rv\:([^\);]+)(\)|;)/.test(e) && (i = RegExp.$1); else if (qx.bom.client.Engine.__bz()) {
                    var c = /Trident\/([^\);]+)(\)|;)/.test(e);
                    if (/MSIE\s+([^\);]+)(\)|;)/.test(e))i = RegExp.$1, i < 8 && c && (RegExp.$1 == r ? i = a : RegExp.$1 == E && (i = u)); else if (c) {
                        var f = /\brv\:(\d+?\.\d+?)\b/.exec(e);
                        f && (i = f[1])
                    }
                } else {
                    var h = window.qxFail;
                    h && typeof h === t ? i = h().FULLVERSION : (i = s, qx.Bootstrap.warn(p + e + g))
                }
                return i
            }, getName: function () {
                var e;
                if (qx.bom.client.Engine.__bv())e = v; else if (qx.bom.client.Engine.__bw())e = w; else if (qx.bom.client.Engine.__by() || qx.bom.client.Engine.__bx())e = i; else if (qx.bom.client.Engine.__bz())e = y; else {
                    var n = window.qxFail;
                    n && typeof n === t ? e = n().NAME : (e = i, qx.Bootstrap.warn(p + window.navigator.userAgent + g))
                }
                return e
            }, __bv: function () {
                return window.opera && Object.prototype.toString.call(window.opera) == e
            }, __bw: function () {
                return window.navigator.userAgent.indexOf(c) != -1
            }, __bx: function () {
                return window.navigator.userAgent.indexOf(l) != -1
            }, __by: function () {
                return window.navigator.mozApps && window.navigator.product === f && window.navigator.userAgent.indexOf(l) == -1 && window.navigator.userAgent.indexOf(h) == -1
            }, __bz: function () {
                return window.navigator.cpuClass && (/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent) || /Trident\/\d+?\.\d+?/.test(window.navigator.userAgent))
            }
        }, defer: function (e) {
            qx.core.Environment.add(m, e.getVersion), qx.core.Environment.add(b, e.getName)
        }
    })
}(), function () {
    var a = "anonymous()", b = "()", c = "qx.lang.Function", d = ".", e = ".prototype.", f = ".constructor()";
    qx.Bootstrap.define(c, {
        statics: {
            getCaller: function (e) {
                return e.caller ? e.caller.callee : e.callee.caller
            }, getName: function (t) {
                if (t.displayName)return t.displayName;
                if (t.$$original || t.wrapper || t.classname)return t.classname + f;
                if (t.$$mixin) {
                    for (var n in t.$$mixin.$$members)if (t.$$mixin.$$members[n] == t)return t.$$mixin.name + e + n + b;
                    for (var n in t.$$mixin)if (t.$$mixin[n] == t)return t.$$mixin.name + d + n + b
                }
                if (t.self) {
                    var r = t.self.constructor;
                    if (r) {
                        for (var n in r.prototype)if (r.prototype[n] == t)return r.classname + e + n + b;
                        for (var n in r)if (r[n] == t)return r.classname + d + n + b
                    }
                }
                var i = t.toString().match(/function\s*(\w*)\s*\(.*/);
                return i && i.length >= 1 && i[1] ? i[1] + b : a
            }, globalEval: function (data) {
                return window.execScript ? window.execScript(data) : eval.call(window, data)
            }, create: function (e, t) {
                return t ? t.self || t.args || t.delay != null || t.periodical != null || t.attempt ? function (n) {
                    var r = qx.lang.Array.fromArguments(arguments);
                    t.args && (r = t.args.concat(r));
                    if (!t.delay && !t.periodical) {
                        if (t.attempt) {
                            var s = !1;
                            try {
                                s = e.apply(t.self || this, r)
                            } catch (o) {
                            }
                            return s
                        }
                        return e.apply(t.self || this, r)
                    }
                    var i = function () {
                        return e.apply(t.self || this, r)
                    };
                    if (t.delay)return window.setTimeout(i, t.delay);
                    if (t.periodical)return window.setInterval(i, t.periodical)
                } : e : e
            }, bind: function (e, t, n) {
                return this.create(e, {
                    self: t,
                    args: arguments.length > 2 ? qx.lang.Array.fromArguments(arguments, 2) : null
                })
            }, curry: function (e, t) {
                return this.create(e, {args: arguments.length > 1 ? qx.lang.Array.fromArguments(arguments, 1) : null})
            }, listener: function (e, t, n) {
                if (arguments.length < 3)return function (n) {
                    return e.call(t || this, n || window.event)
                };
                var r = qx.lang.Array.fromArguments(arguments, 2);
                return function (n) {
                    var i = [n || window.event];
                    i.push.apply(i, r), e.apply(t || this, i)
                }
            }, attempt: function (e, t, n) {
                return this.create(e, {
                    self: t,
                    attempt: !0,
                    args: arguments.length > 2 ? qx.lang.Array.fromArguments(arguments, 2) : null
                })()
            }, delay: function (e, t, n, r) {
                return this.create(e, {
                    delay: t,
                    self: n,
                    args: arguments.length > 3 ? qx.lang.Array.fromArguments(arguments, 3) : null
                })()
            }, periodical: function (e, t, n, r) {
                return this.create(e, {
                    periodical: t,
                    self: n,
                    args: arguments.length > 3 ? qx.lang.Array.fromArguments(arguments, 3) : null
                })()
            }
        }
    })
}(), function () {
    var e = "qx.lang.Type", t = "Error", n = "RegExp", r = "Date", i = "Number", s = "Boolean";
    qx.Bootstrap.define(e, {
        statics: {
            getClass: qx.Bootstrap.getClass,
            isString: qx.Bootstrap.isString,
            isArray: qx.Bootstrap.isArray,
            isObject: qx.Bootstrap.isObject,
            isFunction: qx.Bootstrap.isFunction,
            isRegExp: function (e) {
                return this.getClass(e) == n
            },
            isNumber: function (e) {
                return e !== null && (this.getClass(e) == i || e instanceof Number)
            },
            isBoolean: function (e) {
                return e !== null && (this.getClass(e) == s || e instanceof Boolean)
            },
            isDate: function (e) {
                return e !== null && (this.getClass(e) == r || e instanceof Date)
            },
            isError: function (e) {
                return e !== null && (this.getClass(e) == t || e instanceof Error)
            }
        }
    })
}(), function () {
    var e = " != ", t = "qx.core.Object", n = "Expected value to be an array but found ", r = "' (rgb(", i = ") was fired.", s = "Expected value to be an integer >= 0 but found ", o = "' to be not equal with '", u = "' to '", a = "Expected object '", f = "Called assertTrue with '", l = "Expected value to be a map but found ", c = "The function did not raise an exception!", h = "Expected value to be undefined but found ", p = "Expected value to be a DOM element but found  '", d = "Expected value to be a regular expression but found ", v = "' to implement the interface '", m = "Expected value to be null but found ", g = "Invalid argument 'type'", y = "Called assert with 'false'", b = "Assertion error! ", w = "'", E = "null", S = "' but found '", x = "'undefined'", T = ",", N = "' must must be a key of the map '", C = "Expected '", k = "The String '", L = "Expected value to be a string but found ", A = "Event (", O = "Expected value to be the CSS color '", M = "!", _ = "Expected value not to be undefined but found undefined!", D = "qx.util.ColorUtil", P = ": ", H = "The raised exception does not have the expected type! ", B = ") not fired.", j = "'!", F = "qx.core.Assert", I = "", q = "Expected value to be typeof object but found ", R = "' but found ", U = "' (identical) but found '", z = "' must have any of the values defined in the array '", W = "Expected value to be a number but found ", X = "Called assertFalse with '", V = "qx.ui.core.Widget", $ = "]", J = "Expected value to be a qooxdoo object but found ", K = "' arguments.", Q = "Expected value '%1' to be in the range '%2'..'%3'!", G = "Array[", Y = "' does not match the regular expression '", Z = "' to be not identical with '", et = "Expected [", tt = "' arguments but found '", nt = "', which cannot be converted to a CSS color!", rt = ", ", it = "qx.core.AssertionError", st = "Expected value to be a boolean but found ", ot = "Expected value not to be null but found null!", ut = "))!", at = "Expected value to be a qooxdoo widget but found ", ft = "The value '", lt = "Expected value to be typeof '", ct = "\n Stack trace: \n", ht = "Expected value to be typeof function but found ", pt = "Expected value to be an integer but found ", dt = "Called fail().", vt = "The parameter 're' must be a string or a regular expression.", mt = ")), but found value '", gt = "qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'", yt = "Expected value to be a number >= 0 but found ", bt = "Expected value to be instanceof '", wt = "], but found [", Et = "Wrong number of arguments given. Expected '", St = "object";
    qx.Bootstrap.define(F, {
        statics: {
            __bK: !0, __bL: function (e, t) {
                var n = I;
                for (var r = 1, i = arguments.length; r < i; r++)n += this.__bM(arguments[r] === undefined ? x : arguments[r]);
                var s = I;
                n ? s = e + P + n : s = e;
                var o = b + s;
                if (qx.Class && qx.Class.isDefined(it)) {
                    var u = new qx.core.AssertionError(e, n);
                    throw this.__bK && qx.Bootstrap.error(o + ct + u.getStackTrace()), u
                }
                throw this.__bK && qx.Bootstrap.error(o), new Error(o)
            }, __bM: function (e) {
                var t;
                if (e === null)t = E; else if (qx.lang.Type.isArray(e) && e.length > 10)t = G + e.length + $; else if (e instanceof Object && e.toString == null)t = qx.lang.Json.stringify(e, null, 2); else try {
                    t = e.toString()
                } catch (n) {
                    t = I
                }
                return t
            }, assert: function (e, t) {
                e == 1 || this.__bL(t || I, y)
            }, fail: function (e, t) {
                var n = t ? I : dt;
                this.__bL(e || I, n)
            }, assertTrue: function (e, t) {
                e === !0 || this.__bL(t || I, f, e, w)
            }, assertFalse: function (e, t) {
                e === !1 || this.__bL(t || I, X, e, w)
            }, assertEquals: function (e, t, n) {
                e == t || this.__bL(n || I, C, e, S, t, j)
            }, assertNotEquals: function (e, t, n) {
                e != t || this.__bL(n || I, C, e, o, t, j)
            }, assertIdentical: function (e, t, n) {
                e === t || this.__bL(n || I, C, e, U, t, j)
            }, assertNotIdentical: function (e, t, n) {
                e !== t || this.__bL(n || I, C, e, Z, t, j)
            }, assertNotUndefined: function (e, t) {
                e !== undefined || this.__bL(t || I, _)
            }, assertUndefined: function (e, t) {
                e === undefined || this.__bL(t || I, h, e, M)
            }, assertNotNull: function (e, t) {
                e !== null || this.__bL(t || I, ot)
            }, assertNull: function (e, t) {
                e === null || this.__bL(t || I, m, e, M)
            }, assertJsonEquals: function (e, t, n) {
                this.assertEquals(qx.lang.Json.stringify(e), qx.lang.Json.stringify(t), n)
            }, assertMatch: function (e, t, n) {
                this.assertString(e), this.assert(qx.lang.Type.isRegExp(t) || qx.lang.Type.isString(t), vt), e.search(t) >= 0 || this.__bL(n || I, k, e, Y, t.toString(), j)
            }, assertArgumentsCount: function (e, t, n, r) {
                var i = e.length;
                i >= t && i <= n || this.__bL(r || I, Et, t, u, n, tt, i, K)
            }, assertEventFired: function (e, t, n, r, i) {
                var s = !1, o = function (t) {
                    r && r.call(e, t), s = !0
                }, u;
                try {
                    u = e.addListener(t, o, e), n.call(e)
                } catch (a) {
                    throw a
                } finally {
                    try {
                        e.removeListenerById(u)
                    } catch (f) {
                    }
                }
                s === !0 || this.__bL(i || I, A, t, B)
            }, assertEventNotFired: function (e, t, n, r) {
                var s = !1, o = function (e) {
                    s = !0
                }, u = e.addListener(t, o, e);
                n.call(), s === !1 || this.__bL(r || I, A, t, i), e.removeListenerById(u)
            }, assertException: function (t, n, r, i) {
                var n = n || Error, s;
                try {
                    this.__bK = !1, t()
                } catch (o) {
                    s = o
                } finally {
                    this.__bK = !0
                }
                s == null && this.__bL(i || I, c), s instanceof n || this.__bL(i || I, H, n, e, s), r && this.assertMatch(s.toString(), r, i)
            }, assertInArray: function (e, t, n) {
                t.indexOf(e) !== -1 || this.__bL(n || I, ft, e, z, t, w)
            }, assertArrayEquals: function (e, t, n) {
                this.assertArray(e, n), this.assertArray(t, n), n = n || et + e.join(rt) + wt + t.join(rt) + $, e.length !== t.length && this.fail(n, !0);
                for (var r = 0; r < e.length; r++)e[r] !== t[r] && this.fail(n, !0)
            }, assertKeyInMap: function (e, t, n) {
                t[e] !== undefined || this.__bL(n || I, ft, e, N, t, w)
            }, assertFunction: function (e, t) {
                qx.lang.Type.isFunction(e) || this.__bL(t || I, ht, e, M)
            }, assertString: function (e, t) {
                qx.lang.Type.isString(e) || this.__bL(t || I, L, e, M)
            }, assertBoolean: function (e, t) {
                qx.lang.Type.isBoolean(e) || this.__bL(t || I, st, e, M)
            }, assertNumber: function (e, t) {
                qx.lang.Type.isNumber(e) && isFinite(e) || this.__bL(t || I, W, e, M)
            }, assertPositiveNumber: function (e, t) {
                qx.lang.Type.isNumber(e) && isFinite(e) && e >= 0 || this.__bL(t || I, yt, e, M)
            }, assertInteger: function (e, t) {
                qx.lang.Type.isNumber(e) && isFinite(e) && e % 1 === 0 || this.__bL(t || I, pt, e, M)
            }, assertPositiveInteger: function (e, t) {
                var n = qx.lang.Type.isNumber(e) && isFinite(e) && e % 1 === 0 && e >= 0;
                n || this.__bL(t || I, s, e, M)
            }, assertInRange: function (e, t, n, r) {
                e >= t && e <= n || this.__bL(r || I, qx.lang.String.format(Q, [e, t, n]))
            }, assertObject: function (e, t) {
                var n = e !== null && (qx.lang.Type.isObject(e) || typeof e === St);
                n || this.__bL(t || I, q, e, M)
            }, assertArray: function (e, t) {
                qx.lang.Type.isArray(e) || this.__bL(t || I, n, e, M)
            }, assertMap: function (e, t) {
                qx.lang.Type.isObject(e) || this.__bL(t || I, l, e, M)
            }, assertRegExp: function (e, t) {
                qx.lang.Type.isRegExp(e) || this.__bL(t || I, d, e, M)
            }, assertType: function (e, t, n) {
                this.assertString(t, g), typeof e === t || this.__bL(n || I, lt, t, R, e, M)
            }, assertInstance: function (e, t, n) {
                var r = t.classname || t + I;
                e instanceof t || this.__bL(n || I, bt, r, R, e, M)
            }, assertInterface: function (e, t, n) {
                qx.Class && qx.Class.implementsInterface(e, t) || this.__bL(n || I, a, e, v, t, j)
            }, assertCssColor: function (e, t, n) {
                var i = qx.Class ? qx.Class.getByName(D) : null;
                if (!i)throw new Error(gt);
                var s = i.stringToRgb(e);
                try {
                    var o = i.stringToRgb(t)
                } catch (u) {
                    this.__bL(n || I, O, e, r, s.join(T), mt, t, nt)
                }
                var a = s[0] == o[0] && s[1] == o[1] && s[2] == o[2];
                a || this.__bL(n || I, O, s, r, s.join(T), mt, t, r, o.join(T), ut)
            }, assertElement: function (e, t) {
                !!e && e.nodeType === 1 || this.__bL(t || I, p, e, j)
            }, assertQxObject: function (e, n) {
                this.__bN(e, t) || this.__bL(n || I, J, e, M)
            }, assertQxWidget: function (e, t) {
                this.__bN(e, V) || this.__bL(t || I, at, e, M)
            }, __bN: function (e, t) {
                if (!e)return !1;
                var n = e.constructor;
                while (n) {
                    if (n.classname === t)return !0;
                    n = n.superclass
                }
                return !1
            }
        }
    })
}(), function () {
    var e = ": ", t = "qx.type.BaseError", n = "", r = "error";
    qx.Bootstrap.define(t, {
        extend: Error, construct: function (e, t) {
            var r = Error.call(this, t);
            r.stack && (this.stack = r.stack), r.stacktrace && (this.stacktrace = r.stacktrace), this.__bO = e || n, this.message = t || qx.type.BaseError.DEFAULTMESSAGE
        }, statics: {DEFAULTMESSAGE: r}, members: {
            __bP: null, __bO: null, message: null, getComment: function () {
                return this.__bO
            }, toString: function () {
                return this.__bO + (this.message ? e + this.message : n)
            }
        }
    })
}(), function () {
    var e = "qx.core.AssertionError";
    qx.Bootstrap.define(e, {
        extend: qx.type.BaseError, construct: function (e, t) {
            qx.type.BaseError.call(this, e, t), this.__bQ = qx.dev.StackTrace.getStackTrace()
        }, members: {
            __bQ: null, getStackTrace: function () {
                return this.__bQ
            }
        }
    })
}(), function () {
    var e = "\0\b\n\f\r	", t = "-", n = "function", r = "[null,null,null]", i = "T", s = "+", o = ",\n", u = "constructor", a = "{\n", f = '"+275760-09-13T00:00:00.000Z"', l = "true", c = "\\n", h = "false", p = '"-271821-04-20T00:00:00.000Z"', d = "json", v = "object", m = '""', g = "qx.lang.Json", y = "{}", b = "hasOwnProperty", w = "@", E = "prototype", S = "hasOwnProperty", x = '"', T = "toLocaleString", N = "0", C = "function", k = "", L = '\\"', A = "	", O = "string", M = "}", _ = "\r", D = "toJSON", P = ":", H = "[\n 1,\n 2\n]", B = "\\f", j = '"1969-12-31T23:59:59.999Z"', F = "/", I = "\\b", q = "Z", R = "\\t", U = "\b", z = "[object Number]", W = "isPrototypeOf", X = "{", V = "toString", $ = "0x", J = "[1]", K = "\\r", Q = "]", G = ",", Y = "null", Z = "\\u00", et = "\n", tt = "json-stringify", nt = "[]", rt = "1", it = "000000", st = "[object Boolean]", ot = "valueOf", ut = "\\\\", at = "[object String]", ft = "json-parse", lt = "bug-string-char-index", ct = "[object Array]", ht = "$", pt = "[\n", dt = '"-000001-01-01T00:00:00.000Z"', vt = "[", mt = "[null]", gt = "\\", yt = "[object Date]", bt = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}', wt = "a", Et = " ", St = ".", xt = "[object Function]", Tt = "01", Nt = '"	"', Ct = "propertyIsEnumerable", kt = "\f", Lt = "object";
    qx.Bootstrap.define(g, {statics: {stringify: null, parse: null}}), function () {
        var g, At, Ot;
        (function (g) {
            function It(t) {
                if (t == lt)return wt[0] != wt;
                var i, s = bt, o = t == d;
                if (o || t == tt || t == ft) {
                    if (t == tt || o) {
                        var u = Bt.stringify, a = typeof u == n && jt;
                        if (a) {
                            (i = function () {
                                return 1
                            }).toJSON = i;
                            try {
                                a = u(0) === N && u(new Number) === N && u(new String) == m && u(Mt) === Pt && u(Pt) === Pt && u() === Pt && u(i) === rt && u([i]) == J && u([Pt]) == mt && u(null) == Y && u([Pt, Mt, null]) == r && u({a: [i, true, false, null, e]}) == s && u(null, i) === rt && u([1, 2], null, 1) == H && u(new Date(-864e13)) == p && u(new Date(864e13)) == f && u(new Date(-621987552e5)) == dt && u(new Date(-1)) == j
                            } catch (l) {
                                a = !1
                            }
                        }
                        if (!o)return a
                    }
                    if (t == ft || o) {
                        var c = Bt.parse;
                        if (typeof c == n)try {
                            if (c(N) === 0 && !c(!1)) {
                                i = c(s);
                                var h = i[wt].length == 5 && i[wt][0] === 1;
                                if (h) {
                                    try {
                                        h = !c(Nt)
                                    } catch (v) {
                                    }
                                    if (h)try {
                                        h = c(Tt) !== 1
                                    } catch (g) {
                                    }
                                }
                            }
                        } catch (y) {
                            h = !1
                        }
                        if (!o)return h
                    }
                    return a && h
                }
            }

            var Mt = {}.toString, _t, Dt, Pt, Ht = typeof Ot === n && Ot.amd, Bt = typeof At == Lt && At;
            Bt || Ht ? typeof JSON == Lt && JSON ? Bt ? (Bt.stringify = JSON.stringify, Bt.parse = JSON.parse) : Bt = JSON : Ht && (Bt = g.JSON = {}) : Bt = g.JSON || (g.JSON = {});
            var jt = new Date(-0xc782b5b800cec);
            try {
                jt = jt.getUTCFullYear() == -109252 && jt.getUTCMonth() === 0 && jt.getUTCDate() === 1 && jt.getUTCHours() == 10 && jt.getUTCMinutes() == 37 && jt.getUTCSeconds() == 6 && jt.getUTCMilliseconds() == 708
            } catch (Ft) {
            }
            if (!It(d)) {
                var qt = xt, Rt = yt, Ut = z, zt = at, Wt = ct, Xt = st, Vt = It(lt);
                if (!jt)var $t = Math.floor, Jt = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Kt = function (e, t) {
                    return Jt[t] + 365 * (e - 1970) + $t((e - 1969 + (t = +(t > 1))) / 4) - $t((e - 1901 + t) / 100) + $t((e - 1601 + t) / 400)
                };
                (_t = {}.hasOwnProperty) || (_t = function (e) {
                    var t = {}, n;
                    return (t.__ca = null, t.__ca = {toString: 1}, t).toString != Mt ? _t = function (e) {
                        var t = this.__ca, n = e in(this.__ca = null, this);
                        return this.__ca = t, n
                    } : (n = t.constructor, _t = function (e) {
                        var t = (this.constructor || n).prototype;
                        return e in this && !(e in t && this[e] === t[e])
                    }), t = null, _t.call(this, e)
                });
                var Qt = {"boolean": 1, number: 1, string: 1, "undefined": 1}, Gt = function (e, t) {
                    var n = typeof e[t];
                    return n == v ? !!e[t] : !Qt[n]
                };
                Dt = function (e, t) {
                    var n = 0, r, i, s, o;
                    (r = function () {
                        this.valueOf = 0
                    }).prototype.valueOf = 0, i = new r;
                    for (s in i)_t.call(i, s) && n++;
                    return r = i = null, n ? n == 2 ? o = function (e, t) {
                        var n = {}, r = Mt.call(e) == qt, i;
                        for (i in e)(!r || i != E) && !_t.call(n, i) && (n[i] = 1) && _t.call(e, i) && t(i)
                    } : o = function (e, t) {
                        var n = Mt.call(e) == qt, r, i;
                        for (r in e)(!n || r != E) && _t.call(e, r) && !(i = r === u) && t(r);
                        (i || _t.call(e, r = u)) && t(r)
                    } : (i = [ot, V, T, Ct, W, b, u], o = function (e, t) {
                        var n = Mt.call(e) == qt, r, s, o = !n && typeof e.constructor != C && Gt(e, S) ? e.hasOwnProperty : _t;
                        for (r in e)(!n || r != E) && o.call(e, r) && t(r);
                        for (s = i.length; r = i[--s]; o.call(e, r) && t(r));
                    }), o(e, t)
                };
                if (!It(tt)) {
                    var Yt = {92: ut, 34: L, 8: I, 12: B, 10: c, 13: K, 9: R}, Zt = it, en = function (e, t) {
                        return (Zt + (t || 0)).slice(-e)
                    }, tn = Z, nn = function (e) {
                        var t = x, n = 0, r = e.length, i = r > 10 && Vt, s;
                        i && (s = e.split(k));
                        for (; n < r; n++) {
                            var o = e.charCodeAt(n);
                            switch (o) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    t += Yt[o];
                                    break;
                                default:
                                    if (o < 32) {
                                        t += tn + en(2, o.toString(16));
                                        break
                                    }
                                    t += i ? s[n] : Vt ? e.charAt(n) : e[n]
                            }
                        }
                        return t + x
                    }, rn = function (e, r, u, f, l, c, h) {
                        var p = r[e], d, v, m, g, b, w, E, S, x, T, N, C, L, A, O, _;
                        try {
                            p = r[e]
                        } catch (H) {
                        }
                        if (typeof p == Lt && p) {
                            d = Mt.call(p);
                            if (d == Rt && !_t.call(p, D))if (p > -1 / 0 && p < 1 / 0) {
                                if (Kt) {
                                    g = $t(p / 864e5);
                                    for (v = $t(g / 365.2425) + 1970 - 1; Kt(v + 1, 0) <= g; v++);
                                    for (m = $t((g - Kt(v, 0)) / 30.42); Kt(v, m + 1) <= g; m++);
                                    g = 1 + g - Kt(v, m), b = (p % 864e5 + 864e5) % 864e5, w = $t(b / 36e5) % 24, E = $t(b / 6e4) % 60, S = $t(b / 1e3) % 60, x = b % 1e3
                                } else v = p.getUTCFullYear(), m = p.getUTCMonth(), g = p.getUTCDate(), w = p.getUTCHours(), E = p.getUTCMinutes(), S = p.getUTCSeconds(), x = p.getUTCMilliseconds();
                                p = (v <= 0 || v >= 1e4 ? (v < 0 ? t : s) + en(6, v < 0 ? -v : v) : en(4, v)) + t + en(2, m + 1) + t + en(2, g) + i + en(2, w) + P + en(2, E) + P + en(2, S) + St + en(3, x) + q
                            } else p = null; else typeof p.toJSON == n && (d != Ut && d != zt && d != Wt || _t.call(p, D)) && (p = p.toJSON(e))
                        }
                        u && (p = u.call(r, e, p));
                        if (p === null)return Y;
                        d = Mt.call(p);
                        if (d == Xt)return k + p;
                        if (d == Ut)return p > -1 / 0 && p < 1 / 0 ? k + p : Y;
                        if (d == zt)return nn(k + p);
                        if (typeof p == Lt) {
                            for (L = h.length; L--;)if (h[L] === p)throw TypeError();
                            h.push(p), T = [], A = c, c += l;
                            if (d == Wt) {
                                for (C = 0, L = p.length; C < L; O || (O = !0), C++)N = rn(C, p, u, f, l, c, h), T.push(N === Pt ? Y : N);
                                _ = O ? l ? pt + c + T.join(o + c) + et + A + Q : vt + T.join(G) + Q : nt
                            } else Dt(f || p, function (e) {
                                var t = rn(e, p, u, f, l, c, h);
                                t !== Pt && T.push(nn(e) + P + (l ? Et : k) + t), O || (O = !0)
                            }), _ = O ? l ? a + c + T.join(o + c) + et + A + M : X + T.join(G) + M : y;
                            return h.pop(), _
                        }
                    };
                    Bt.stringify = function (e, t, r) {
                        var i, s, o;
                        if (typeof t == n || typeof t == Lt && t)if (Mt.call(t) == qt)s = t; else if (Mt.call(t) == Wt) {
                            o = {};
                            for (var u = 0, a = t.length, f; u < a; f = t[u++], (Mt.call(f) == zt || Mt.call(f) == Ut) && (o[f] = 1));
                        }
                        if (r)if (Mt.call(r) == Ut) {
                            if ((r -= r % 1) > 0)for (i = k, r > 10 && (r = 10); i.length < r; i += Et);
                        } else Mt.call(r) == zt && (i = r.length <= 10 ? r : r.slice(0, 10));
                        return rn(k, (f = {}, f[k] = e, f), s, o, i, k, [])
                    }
                }
                if (!It(ft)) {
                    var sn = String.fromCharCode, on = {
                        92: gt,
                        34: x,
                        47: F,
                        98: U,
                        116: A,
                        110: et,
                        102: kt,
                        114: _
                    }, un, an, fn = function () {
                        throw un = an = null, SyntaxError()
                    }, ln = function () {
                        var e = an, t = e.length, n, r, i, s, o;
                        while (un < t) {
                            o = e.charCodeAt(un);
                            switch (o) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    un++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return n = Vt ? e.charAt(un) : e[un], un++, n;
                                case 34:
                                    for (n = w, un++; un < t;) {
                                        o = e.charCodeAt(un);
                                        if (o < 32)fn(); else if (o == 92) {
                                            o = e.charCodeAt(++un);
                                            switch (o) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    n += on[o], un++;
                                                    break;
                                                case 117:
                                                    r = ++un;
                                                    for (i = un + 4; un < i; un++)o = e.charCodeAt(un), o >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || fn();
                                                    n += sn($ + e.slice(r, un));
                                                    break;
                                                default:
                                                    fn()
                                            }
                                        } else {
                                            if (o == 34)break;
                                            o = e.charCodeAt(un), r = un;
                                            while (o >= 32 && o != 92 && o != 34)o = e.charCodeAt(++un);
                                            n += e.slice(r, un)
                                        }
                                    }
                                    if (e.charCodeAt(un) == 34)return un++, n;
                                    fn();
                                default:
                                    r = un, o == 45 && (s = !0, o = e.charCodeAt(++un));
                                    if (o >= 48 && o <= 57) {
                                        o == 48 && (o = e.charCodeAt(un + 1), o >= 48 && o <= 57) && fn(), s = !1;
                                        for (; un < t && (o = e.charCodeAt(un), o >= 48 && o <= 57); un++);
                                        if (e.charCodeAt(un) == 46) {
                                            i = ++un;
                                            for (; i < t && (o = e.charCodeAt(i), o >= 48 && o <= 57); i++);
                                            i == un && fn(), un = i
                                        }
                                        o = e.charCodeAt(un);
                                        if (o == 101 || o == 69) {
                                            o = e.charCodeAt(++un), (o == 43 || o == 45) && un++;
                                            for (i = un; i < t && (o = e.charCodeAt(i), o >= 48 && o <= 57); i++);
                                            i == un && fn(), un = i
                                        }
                                        return +e.slice(r, un)
                                    }
                                    s && fn();
                                    if (e.slice(un, un + 4) == l)return un += 4, !0;
                                    if (e.slice(un, un + 5) == h)return un += 5, !1;
                                    if (e.slice(un, un + 4) == Y)return un += 4, null;
                                    fn()
                            }
                        }
                        return ht
                    }, hn = function (e) {
                        var t, n;
                        e == ht && fn();
                        if (typeof e == O) {
                            if ((Vt ? e.charAt(0) : e[0]) == w)return e.slice(1);
                            if (e == vt) {
                                t = [];
                                for (; ; n || (n = !0)) {
                                    e = ln();
                                    if (e == Q)break;
                                    n && (e == G ? (e = ln(), e == Q && fn()) : fn()), e == G && fn(), t.push(hn(e))
                                }
                                return t
                            }
                            if (e == X) {
                                t = {};
                                for (; ; n || (n = !0)) {
                                    e = ln();
                                    if (e == M)break;
                                    n && (e == G ? (e = ln(), e == M && fn()) : fn()), (e == G || typeof e != O || (Vt ? e.charAt(0) : e[0]) != w || ln() != P) && fn(), t[e.slice(1)] = hn(ln())
                                }
                                return t
                            }
                            fn()
                        }
                        return e
                    }, pn = function (e, t, n) {
                        var r = dn(e, t, n);
                        r === Pt ? delete e[t] : e[t] = r
                    }, dn = function (e, t, n) {
                        var r = e[t], i;
                        if (typeof r == Lt && r)if (Mt.call(r) == Wt)for (i = r.length; i--;)pn(r, i, n); else Dt(r, function (e) {
                            pn(r, e, n)
                        });
                        return n.call(e, t, r)
                    };
                    Bt.parse = function (e, t) {
                        var n, r;
                        return un = 0, an = k + e, n = hn(ln()), ln() != ht && fn(), un = an = null, t && Mt.call(t) == qt ? dn((r = {}, r[k] = n, r), k, t) : n
                    }
                }
            }
            Ht && Ot(function () {
                return Bt
            })
        })(this)
    }(), qx.lang.Json.stringify = window.JSON.stringify, qx.lang.Json.parse = window.JSON.parse
}(), function () {
    var e = "-", t = "]", n = "\\u", r = "undefined", i = "", s = "\\$1", o = "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC", u = "\\\\", a = "-", f = "g", l = '\\"', c = "qx.lang.String", h = "(^|[^", p = "0", d = "%", v = '"', m = " ", g = "\n", y = "])[";
    qx.Bootstrap.define(c, {
        statics: {
            __bs: o, __bt: null, __bu: {}, camelCase: function (t) {
                var n = this.__bu[t];
                return n || (n = t.replace(/\-([a-z])/g, function (e, t) {
                    return t.toUpperCase()
                }), t.indexOf(e) >= 0 && (this.__bu[t] = n)), n
            }, hyphenate: function (t) {
                var n = this.__bu[t];
                return n || (n = t.replace(/[A-Z]/g, function (e) {
                    return a + e.charAt(0).toLowerCase()
                }), t.indexOf(e) == -1 && (this.__bu[t] = n)), n
            }, capitalize: function (e) {
                if (this.__bt === null) {
                    var r = n;
                    this.__bt = new RegExp(h + this.__bs.replace(/[0-9A-F]{4}/g, function (e) {
                            return r + e
                        }) + y + this.__bs.replace(/[0-9A-F]{4}/g, function (e) {
                            return r + e
                        }) + t, f)
                }
                return e.replace(this.__bt, function (e) {
                    return e.toUpperCase()
                })
            }, clean: function (e) {
                return e.replace(/\s+/g, m).trim()
            }, trimLeft: function (e) {
                return e.replace(/^\s+/, i)
            }, trimRight: function (e) {
                return e.replace(/\s+$/, i)
            }, startsWith: function (e, t) {
                return e.indexOf(t) === 0
            }, endsWith: function (e, t) {
                return e.substring(e.length - t.length, e.length) === t
            }, repeat: function (e, t) {
                return e.length > 0 ? (new Array(t + 1)).join(e) : i
            }, pad: function (e, t, n) {
                var i = t - e.length;
                return i > 0 ? (typeof n === r && (n = p), this.repeat(n, i) + e) : e
            }, firstUp: qx.Bootstrap.firstUp, firstLow: qx.Bootstrap.firstLow, contains: function (e, t) {
                return e.indexOf(t) != -1
            }, format: function (e, t) {
                var n = e, r = t.length;
                while (r--)n = n.replace(new RegExp(d + (r + 1), f), function () {
                    return t[r] + i
                });
                return n
            }, escapeRegexpChars: function (e) {
                return e.replace(/([.*+?^${}()|[\]\/\\])/g, s)
            }, toArray: function (e) {
                return e.split(/\B|\b/g)
            }, stripTags: function (e) {
                return e.replace(/<\/?[^>]+>/gi, i)
            }, stripScripts: function (e, t) {
                var n = i, r = e.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function () {
                    return n += arguments[1] + g, i
                });
                return t === !0 && qx.lang.Function.globalEval(n), r
            }, quote: function (e) {
                return v + e.replace(/\\/g, u).replace(/\"/g, l) + v
            }
        }
    })
}(), function () {
    var e = "-", t = "", n = "qx.core.ObjectRegistry", r = "Disposed ", i = "$$hash", s = "-0", o = " objects", u = "Could not dispose object ", a = ": ";
    qx.Bootstrap.define(n, {
        statics: {
            inShutDown: !1,
            __bU: {},
            __bV: 0,
            __bW: [],
            __bX: t,
            __bY: {},
            register: function (e) {
                var t = this.__bU;
                if (!t)return;
                var n = e.$$hash;
                if (n == null) {
                    var r = this.__bW;
                    r.length > 0 && !0 ? n = r.pop() : n = this.__bV++ + this.__bX, e.$$hash = n
                }
                t[n] = e
            },
            unregister: function (e) {
                var t = e.$$hash;
                if (t == null)return;
                var n = this.__bU;
                n && n[t] && (delete n[t], this.__bW.push(t));
                try {
                    delete e.$$hash
                } catch (r) {
                    e.removeAttribute && e.removeAttribute(i)
                }
            },
            toHashCode: function (e) {
                var t = e.$$hash;
                if (t != null)return t;
                var n = this.__bW;
                return n.length > 0 ? t = n.pop() : t = this.__bV++ + this.__bX, e.$$hash = t
            },
            clearHashCode: function (e) {
                var t = e.$$hash;
                if (t != null) {
                    this.__bW.push(t);
                    try {
                        delete e.$$hash
                    } catch (n) {
                        e.removeAttribute && e.removeAttribute(i)
                    }
                }
            },
            fromHashCode: function (e) {
                return this.__bU[e] || null
            },
            shutdown: function () {
                this.inShutDown = !0;
                var e = this.__bU, t = [];
                for (var n in e)t.push(n);
                t.sort(function (e, t) {
                    return parseInt(t, 10) - parseInt(e, 10)
                });
                var i, s = 0, l = t.length;
                for (; ;) {
                    try {
                        for (; s < l; s++)n = t[s], i = e[n], i && i.dispose && i.dispose()
                    } catch (c) {
                        qx.Bootstrap.error(this, u + i.toString() + a + c, c);
                        if (s !== l) {
                            s++;
                            continue
                        }
                    }
                    break
                }
                qx.Bootstrap.debug(this, r + l + o), delete this.__bU
            },
            getRegistry: function () {
                return this.__bU
            },
            getNextHash: function () {
                return this.__bV
            },
            getPostId: function () {
                return this.__bX
            },
            getStackTraces: function () {
                return this.__bY
            }
        }, defer: function (t) {
            if (window && window.top) {
                var n = window.top.frames;
                for (var r = 0; r < n.length; r++)if (n[r] === window) {
                    t.__bX = e + (r + 1);
                    return
                }
            }
            t.__bX = s
        }
    })
}(), function () {
    var e = "qx.util.RingBuffer";
    qx.Bootstrap.define(e, {
        extend: Object, construct: function (e) {
            this.setMaxEntries(e || 50)
        }, members: {
            __cb: 0, __cc: 0, __cd: !1, __ce: 0, __cf: null, __cg: null, setMaxEntries: function (e) {
                this.__cg = e, this.clear()
            }, getMaxEntries: function () {
                return this.__cg
            }, addEntry: function (e) {
                this.__cf[this.__cb] = e, this.__cb = this.__ch(this.__cb, 1);
                var t = this.getMaxEntries();
                this.__cc < t && this.__cc++, this.__cd && this.__ce < t && this.__ce++
            }, mark: function () {
                this.__cd = !0, this.__ce = 0
            }, clearMark: function () {
                this.__cd = !1
            }, getAllEntries: function () {
                return this.getEntries(this.getMaxEntries(), !1)
            }, getEntries: function (e, t) {
                e > this.__cc && (e = this.__cc), t && this.__cd && e > this.__ce && (e = this.__ce);
                if (e > 0) {
                    var n = this.__ch(this.__cb, -1), r = this.__ch(n, -e + 1), i;
                    r <= n ? i = this.__cf.slice(r, n + 1) : i = this.__cf.slice(r, this.__cc).concat(this.__cf.slice(0, n + 1))
                } else i = [];
                return i
            }, clear: function () {
                this.__cf = new Array(this.getMaxEntries()), this.__cc = 0, this.__ce = 0, this.__cb = 0
            }, __ch: function (e, t) {
                var n = this.getMaxEntries(), r = (e + t) % n;
                return r < 0 && (r += n), r
            }
        }
    })
}(), function () {
    var e = "qx.log.appender.RingBuffer";
    qx.Bootstrap.define(e, {
        extend: qx.util.RingBuffer, construct: function (e) {
            this.setMaxMessages(e || 50)
        }, members: {
            setMaxMessages: function (e) {
                this.setMaxEntries(e)
            }, getMaxMessages: function () {
                return this.getMaxEntries()
            }, process: function (e) {
                this.addEntry(e)
            }, getAllLogEvents: function () {
                return this.getAllEntries()
            }, retrieveLogEvents: function (e, t) {
                return this.getEntries(e, t)
            }, clearHistory: function () {
                this.clear()
            }
        }
    })
}(), function () {
    var e = "qx.log.Logger", t = "[", n = "...(+", r = "array", i = ")", s = "info", o = "node", u = "instance", a = "string", f = "null", l = "error", c = "#", h = "class", p = ": ", d = "warn", v = "document", m = "{...(", g = "", y = "number", b = "stringify", w = "]", E = "date", S = "unknown", x = "function", T = "text[", N = "[...(", C = "boolean", k = "\n", L = ")}", A = "debug", O = ")]", M = "map", _ = "undefined", D = "object";
    qx.Bootstrap.define(e, {
        statics: {
            __ci: A,
            setLevel: function (e) {
                this.__ci = e
            },
            getLevel: function () {
                return this.__ci
            },
            setTreshold: function (e) {
                this.__cl.setMaxMessages(e)
            },
            getTreshold: function () {
                return this.__cl.getMaxMessages()
            },
            __cj: {},
            __ck: 0,
            register: function (e) {
                if (e.$$id)return;
                var t = this.__ck++;
                this.__cj[t] = e, e.$$id = t;
                var n = this.__cm, r = this.__cl.getAllLogEvents();
                for (var i = 0, s = r.length; i < s; i++)n[r[i].level] >= n[this.__ci] && e.process(r[i])
            },
            unregister: function (e) {
                var t = e.$$id;
                if (t == null)return;
                delete this.__cj[t], delete e.$$id
            },
            debug: function (e, t) {
                qx.log.Logger.__cn(A, arguments)
            },
            info: function (e, t) {
                qx.log.Logger.__cn(s, arguments)
            },
            warn: function (e, t) {
                qx.log.Logger.__cn(d, arguments)
            },
            error: function (e, t) {
                qx.log.Logger.__cn(l, arguments)
            },
            trace: function (e) {
                var t = qx.dev.StackTrace.getStackTrace();
                qx.log.Logger.__cn(s, [(typeof e !== _ ? [e].concat(t) : t).join(k)])
            },
            deprecatedMethodWarning: function (e, t) {
                var n
            },
            deprecatedClassWarning: function (e, t) {
                var n
            },
            deprecatedEventWarning: function (e, t, n) {
                var r
            },
            deprecatedMixinWarning: function (e, t) {
                var n
            },
            deprecatedConstantWarning: function (e, t, n) {
                var r, i
            },
            deprecateMethodOverriding: function (e, t, n, r) {
                var i
            },
            clear: function () {
                this.__cl.clearHistory()
            },
            __cl: new qx.log.appender.RingBuffer(50),
            __cm: {debug: 0, info: 1, warn: 2, error: 3},
            __cn: function (e, t) {
                var n = this.__cm;
                if (n[e] < n[this.__ci])return;
                var r = t.length < 2 ? null : t[0], i = r ? 1 : 0, s = [];
                for (var o = i, u = t.length; o < u; o++)s.push(this.__cp(t[o], !0));
                var a = new Date, f = {time: a, offset: a - qx.Bootstrap.LOADSTART, level: e, items: s, win: window};
                r && (r.$$hash !== undefined ? f.object = r.$$hash : r.$$type ? f.clazz = r : r.constructor && (f.clazz = r.constructor)), this.__cl.process(f);
                var l = this.__cj;
                for (var c in l)l[c].process(f)
            },
            __co: function (e) {
                if (e === undefined)return _;
                if (e === null)return f;
                if (e.$$type)return h;
                var t = typeof e;
                return t === x || t == a || t === y || t === C ? t : t === D ? e.nodeType ? o : e instanceof Error || e.name && e.message ? l : e.classname ? u : e instanceof Array ? r : e instanceof Date ? E : M : e.toString ? b : S
            },
            __cp: function (e, s) {
                var d = this.__co(e), k = S, A = [];
                switch (d) {
                    case f:
                    case _:
                        k = d;
                        break;
                    case a:
                    case y:
                    case C:
                    case E:
                        k = e;
                        break;
                    case o:
                        e.nodeType === 9 ? k = v : e.nodeType === 3 ? k = T + e.nodeValue + w : e.nodeType === 1 ? (k = e.nodeName.toLowerCase(), e.id && (k += c + e.id)) : k = o;
                        break;
                    case x:
                        k = qx.lang.Function.getName(e) || d;
                        break;
                    case u:
                        k = e.basename + t + e.$$hash + w;
                        break;
                    case h:
                    case b:
                        k = e.toString();
                        break;
                    case l:
                        A = qx.dev.StackTrace.getStackTraceFromError(e), k = (e.basename ? e.basename + p : g) + e.toString();
                        break;
                    case r:
                        if (s) {
                            k = [];
                            for (var D = 0, P = e.length; D < P; D++) {
                                if (k.length > 20) {
                                    k.push(n + (P - D) + i);
                                    break
                                }
                                k.push(this.__cp(e[D], !1))
                            }
                        } else k = N + e.length + O;
                        break;
                    case M:
                        if (s) {
                            var F, q = [];
                            for (var R in e)q.push(R);
                            q.sort(), k = [];
                            for (var D = 0, P = q.length; D < P; D++) {
                                if (k.length > 20) {
                                    k.push(n + (P - D) + i);
                                    break
                                }
                                R = q[D], F = this.__cp(e[R], !1), F.key = R, k.push(F)
                            }
                        } else {
                            var U = 0;
                            for (var R in e)U++;
                            k = m + U + L
                        }
                }
                return {type: d, text: k, trace: A}
            }
        }, defer: function (e) {
            var t = qx.Bootstrap.$$logs;
            for (var n = 0; n < t.length; n++)e.__cn(t[n][0], t[n][1]);
            qx.Bootstrap.debug = e.debug, qx.Bootstrap.info = e.info, qx.Bootstrap.warn = e.warn, qx.Bootstrap.error = e.error, qx.Bootstrap.trace = e.trace
        }
    })
}(), function () {
    var e = "qx.event.type.Data", t = "qx.event.type.Event", n = "qx.data.IListData";
    qx.Interface.define(n, {
        events: {change: e, changeLength: t}, members: {
            getItem: function (e) {
            }, setItem: function (e, t) {
            }, splice: function (e, t, n) {
            }, contains: function (e) {
            }, getLength: function () {
            }, toArray: function () {
            }
        }
    })
}(), function () {
    var e = "qx.core.ValidationError";
    qx.Class.define(e, {extend: qx.type.BaseError})
}(), function () {
    var e = "qx.core.MProperty", t = "get", n = "reset", r = "No such property: ", i = "set";
    qx.Mixin.define(e, {
        members: {
            set: function (e, t) {
                var n = qx.core.Property.$$method.set;
                if (qx.Bootstrap.isString(e)) {
                    if (!this[n[e]]) {
                        if (this[i + qx.Bootstrap.firstUp(e)] != undefined)return this[i + qx.Bootstrap.firstUp(e)](t), this;
                        throw new Error(r + e)
                    }
                    return this[n[e]](t)
                }
                for (var s in e) {
                    if (!this[n[s]]) {
                        if (this[i + qx.Bootstrap.firstUp(s)] != undefined) {
                            this[i + qx.Bootstrap.firstUp(s)](e[s]);
                            continue
                        }
                        throw new Error(r + s)
                    }
                    this[n[s]](e[s])
                }
                return this
            }, get: function (e) {
                var n = qx.core.Property.$$method.get;
                if (!this[n[e]]) {
                    if (this[t + qx.Bootstrap.firstUp(e)] != undefined)return this[t + qx.Bootstrap.firstUp(e)]();
                    throw new Error(r + e)
                }
                return this[n[e]]()
            }, reset: function (e) {
                var t = qx.core.Property.$$method.reset;
                if (!this[t[e]]) {
                    if (this[n + qx.Bootstrap.firstUp(e)] != undefined) {
                        this[n + qx.Bootstrap.firstUp(e)]();
                        return
                    }
                    throw new Error(r + e)
                }
                this[t[e]]()
            }
        }
    })
}(), function () {
    var e = "info", t = "debug", n = "warn", r = "qx.core.MLogging", i = "error";
    qx.Mixin.define(r, {
        members: {
            __cq: qx.log.Logger, debug: function (e) {
                this.__cr(t, arguments)
            }, info: function (t) {
                this.__cr(e, arguments)
            }, warn: function (e) {
                this.__cr(n, arguments)
            }, error: function (e) {
                this.__cr(i, arguments)
            }, trace: function () {
                this.__cq.trace(this)
            }, __cr: function (e, t) {
                var n = qx.lang.Array.fromArguments(t);
                n.unshift(this), this.__cq[e].apply(this.__cq, n)
            }
        }
    })
}(), function () {
    var e = "qx.dom.Node", t = "";
    qx.Bootstrap.define(e, {
        statics: {
            ELEMENT: 1,
            ATTRIBUTE: 2,
            TEXT: 3,
            CDATA_SECTION: 4,
            ENTITY_REFERENCE: 5,
            ENTITY: 6,
            PROCESSING_INSTRUCTION: 7,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11,
            NOTATION: 12,
            getDocument: function (e) {
                return e.nodeType === this.DOCUMENT ? e : e.ownerDocument || e.document
            },
            getWindow: function (e) {
                return e.nodeType == null ? e : (e.nodeType !== this.DOCUMENT && (e = e.ownerDocument), e.defaultView || e.parentWindow)
            },
            getDocumentElement: function (e) {
                return this.getDocument(e).documentElement
            },
            getBodyElement: function (e) {
                return this.getDocument(e).body
            },
            isNode: function (e) {
                return !!e && e.nodeType != null
            },
            isElement: function (e) {
                return !!e && e.nodeType === this.ELEMENT
            },
            isDocument: function (e) {
                return !!e && e.nodeType === this.DOCUMENT
            },
            isDocumentFragment: function (e) {
                return !!e && e.nodeType === this.DOCUMENT_FRAGMENT
            },
            isText: function (e) {
                return !!e && e.nodeType === this.TEXT
            },
            isWindow: function (e) {
                return !!(e && e.history && e.location && e.document)
            },
            isNodeName: function (e, t) {
                return !t || !e || !e.nodeName ? !1 : t.toLowerCase() == qx.dom.Node.getName(e)
            },
            getName: function (e) {
                return !e || !e.nodeName ? null : e.nodeName.toLowerCase()
            },
            getText: function (e) {
                if (!e || !e.nodeType)return null;
                switch (e.nodeType) {
                    case 1:
                        var n, r = [], i = e.childNodes, s = i.length;
                        for (n = 0; n < s; n++)r[n] = this.getText(i[n]);
                        return r.join(t);
                    case 2:
                    case 3:
                    case 4:
                        return e.nodeValue
                }
                return null
            },
            isBlockNode: function (e) {
                return qx.dom.Node.isElement(e) ? (e = qx.dom.Node.getName(e), /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(e)) : !1
            }
        }
    })
}(), function () {
    var e = "function", t = "loadeddata", n = "pointerover", r = "pause", i = "transitionend", s = "gecko", o = "browser.name", u = "timeupdate", a = "canplay", f = "HTMLEvents", l = "loadedmetadata", c = "css.transition", h = "mobile safari", p = "return;", d = "browser.documentmode", v = "safari", m = "play", g = "ended", y = "", b = "qx.bom.Event", w = "playing", E = "mouseover", S = "end-event", x = "mshtml", T = "engine.name", N = "progress", C = "webkit", k = "volumechange", L = "seeked", A = "on", O = "undefined";
    qx.Bootstrap.define(b, {
        statics: {
            addNativeListener: function (e, t, n, r) {
                e.addEventListener ? e.addEventListener(t, n, !!r) : e.attachEvent ? e.attachEvent(A + t, n) : typeof e[A + t] != O && (e[A + t] = n)
            }, removeNativeListener: function (e, t, n, r) {
                if (e.removeEventListener)e.removeEventListener(t, n, !!r); else if (e.detachEvent)try {
                    e.detachEvent(A + t, n)
                } catch (i) {
                    if (i.number !== -2146828218)throw i
                } else typeof e[A + t] != O && (e[A + t] = null)
            }, getTarget: function (e) {
                return e.target || e.srcElement
            }, getRelatedTarget: function (e) {
                if (e.relatedTarget !== undefined) {
                    if (qx.core.Environment.get(T) == s)try {
                        e.relatedTarget && e.relatedTarget.nodeType
                    } catch (t) {
                        return null
                    }
                    return e.relatedTarget
                }
                return e.fromElement === undefined || e.type !== E && e.type !== n ? e.toElement !== undefined ? e.toElement : null : e.fromElement
            }, preventDefault: function (e) {
                if (e.preventDefault)e.preventDefault(); else {
                    try {
                        e.keyCode = 0
                    } catch (t) {
                    }
                    e.returnValue = !1
                }
            }, stopPropagation: function (e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }, fire: function (e, t) {
                if (document.createEvent) {
                    var n = document.createEvent(f);
                    return n.initEvent(t, !0, !0), !e.dispatchEvent(n)
                }
                var n = document.createEventObject();
                return e.fireEvent(A + t, n)
            }, supportsEvent: function (n, s) {
                var f = qx.core.Environment.get(o), y = qx.core.Environment.get(T);
                if (s.toLowerCase().indexOf(i) != -1 && y === x && qx.core.Environment.get(d) > 9)return !0;
                var b = [h, v];
                if (y === C && b.indexOf(f) > -1) {
                    var E = [t, N, u, L, a, m, w, r, l, g, k];
                    if (E.indexOf(s.toLowerCase()) > -1)return !0
                }
                if (n != window && s.toLowerCase().indexOf(i) != -1) {
                    var O = qx.core.Environment.get(c);
                    return O && O[S] == s
                }
                var M = A + s.toLowerCase(), _ = M in n;
                return _ || (_ = typeof n[M] == e, !_ && n.setAttribute && (n.setAttribute(M, p), _ = typeof n[M] == e, n.removeAttribute(M))), _
            }, getEventName: function (e, t) {
                var n = [y].concat(qx.bom.Style.VENDOR_PREFIXES);
                for (var r = 0, i = n.length; r < i; r++) {
                    var s = n[r].toLowerCase();
                    if (qx.bom.Event.supportsEvent(e, s + t))return s ? s + qx.lang.String.firstUp(t) : t
                }
                return null
            }
        }
    })
}(), function () {
    var e = "-", t = "qx.bom.Style", n = "", r = "-", i = "Webkit", s = "ms", o = ":", u = ";", a = "Moz", f = "O", l = "string", c = "Khtml";
    qx.Bootstrap.define(t, {
        statics: {
            VENDOR_PREFIXES: [i, a, f, s, c],
            __cs: {},
            __ct: null,
            getPropertyName: function (e) {
                var t = document.documentElement.style;
                if (t[e] !== undefined)return e;
                for (var n = 0, r = this.VENDOR_PREFIXES.length; n < r; n++) {
                    var i = this.VENDOR_PREFIXES[n] + qx.lang.String.firstUp(e);
                    if (t[i] !== undefined)return i
                }
                return null
            },
            getCssName: function (t) {
                var n = this.__cs[t];
                return n || (n = t.replace(/[A-Z]/g, function (e) {
                    return r + e.charAt(0).toLowerCase()
                }), /^ms/.test(n) && (n = e + n), this.__cs[t] = n), n
            },
            getAppliedStyle: function (t, r, i, s) {
                var a = qx.bom.Style.getCssName(r), f = qx.dom.Node.getWindow(t), c = s !== !1 ? [null].concat(this.VENDOR_PREFIXES) : [null];
                for (var p = 0, d = c.length; p < d; p++) {
                    var v = !1, y = c[p] ? e + c[p].toLowerCase() + e + i : i;
                    qx.bom.Style.__ct ? v = qx.bom.Style.__ct.call(f, a, y) : (t.style.cssText += a + o + y + u, v = typeof t.style[r] == l && t.style[r] !== n);
                    if (v)return y
                }
                return null
            }
        }, defer: function (e) {
            window.CSS && window.CSS.supports ? qx.bom.Style.__ct = window.CSS.supports.bind(window.CSS) : window.supportsCSS && (qx.bom.Style.__ct = window.supportsCSS.bind(window))
        }
    })
}(), function () {
    var e = "rim_tabletos", t = "10.1", n = "Darwin", r = "10.3", i = "os.version", s = "10.7", o = "2003", u = ")", a = "iPhone", f = "android", l = "unix", c = "ce", h = "7", p = "SymbianOS", d = "10.5", v = "os.name", m = "10.9", g = "|", y = "MacPPC", b = "95", w = "iPod", E = "10.8", S = ".", x = "Win64", T = "linux", N = "me", C = "10.2", k = "Macintosh", L = "Android", A = "Windows", O = "98", M = "ios", _ = "vista", D = "8", P = "blackberry", H = "2000", B = "8.1", j = "(", F = "", I = "win", q = "Linux", R = "10.6", U = "BSD", z = "10.0", W = "10.4", X = "Mac OS X", V = "iPad", $ = "X11", J = "xp", K = "symbian", Q = "qx.bom.client.OperatingSystem", G = "g", Y = "Win32", Z = "osx", et = "webOS", tt = "RIM Tablet OS", nt = "BlackBerry", rt = "nt4", it = ".", st = "MacIntel", ot = "webos";
    qx.Bootstrap.define(Q, {
        statics: {
            getName: function () {
                if (!navigator)return F;
                var t = navigator.platform || F, r = navigator.userAgent || F;
                return t.indexOf(A) != -1 || t.indexOf(Y) != -1 || t.indexOf(x) != -1 ? I : t.indexOf(k) != -1 || t.indexOf(y) != -1 || t.indexOf(st) != -1 || t.indexOf(X) != -1 ? Z : r.indexOf(tt) != -1 ? e : r.indexOf(et) != -1 ? ot : t.indexOf(w) != -1 || t.indexOf(a) != -1 || t.indexOf(V) != -1 ? M : r.indexOf(L) != -1 ? f : t.indexOf(q) != -1 ? T : t.indexOf($) != -1 || t.indexOf(U) != -1 || t.indexOf(n) != -1 ? l : t.indexOf(p) != -1 ? K : t.indexOf(nt) != -1 ? P : F
            },
            __cu: {
                "Windows NT 6.3": B,
                "Windows NT 6.2": D,
                "Windows NT 6.1": h,
                "Windows NT 6.0": _,
                "Windows NT 5.2": o,
                "Windows NT 5.1": J,
                "Windows NT 5.0": H,
                "Windows 2000": H,
                "Windows NT 4.0": rt,
                "Win 9x 4.90": N,
                "Windows CE": c,
                "Windows 98": O,
                Win98: O,
                "Windows 95": b,
                Win95: b,
                "Mac OS X 10_9": m,
                "Mac OS X 10.9": m,
                "Mac OS X 10_8": E,
                "Mac OS X 10.8": E,
                "Mac OS X 10_7": s,
                "Mac OS X 10.7": s,
                "Mac OS X 10_6": R,
                "Mac OS X 10.6": R,
                "Mac OS X 10_5": d,
                "Mac OS X 10.5": d,
                "Mac OS X 10_4": W,
                "Mac OS X 10.4": W,
                "Mac OS X 10_3": r,
                "Mac OS X 10.3": r,
                "Mac OS X 10_2": C,
                "Mac OS X 10.2": C,
                "Mac OS X 10_1": t,
                "Mac OS X 10.1": t,
                "Mac OS X 10_0": z,
                "Mac OS X 10.0": z
            },
            getVersion: function () {
                var e = qx.bom.client.OperatingSystem.__cv(navigator.userAgent);
                return e == null && (e = qx.bom.client.OperatingSystem.__cw(navigator.userAgent)), e != null ? e : F
            },
            __cv: function (e) {
                var t = [];
                for (var n in qx.bom.client.OperatingSystem.__cu)t.push(n);
                var r = new RegExp(j + t.join(g).replace(/\./g, S) + u, G), i = r.exec(e);
                return i && i[1] ? qx.bom.client.OperatingSystem.__cu[i[1]] : null
            },
            __cw: function (e) {
                var t = e.indexOf(L) != -1, n = e.match(/(iPad|iPhone|iPod)/i) ? !0 : !1;
                if (t) {
                    var r = new RegExp(/ Android (\d+(?:\.\d+)+)/i), i = r.exec(e);
                    if (i && i[1])return i[1]
                } else if (n) {
                    var s = new RegExp(/(CPU|iPhone|iPod) OS (\d+)_(\d+)(?:_(\d+))*\s+/), o = s.exec(e);
                    if (o && o[2] && o[3])return o[4] ? o[2] + it + o[3] + it + o[4] : o[2] + it + o[3]
                }
                return null
            }
        }, defer: function (e) {
            qx.core.Environment.add(v, e.getName), qx.core.Environment.add(i, e.getVersion)
        }
    })
}(), function () {
    var e = "CSS1Compat", t = "IEMobile", n = " OPR/", r = "msie", i = "android", s = "operamini", o = "gecko", u = "maple", a = "AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|iPad|iPhone|OmniWeb|Maxthon|Pre|PhantomJS|Mobile Safari|Safari", f = "browser.quirksmode", l = "browser.name", c = "trident", h = "mobile chrome", p = ")(/| )([0-9]+.[0-9])", d = "iemobile", v = "prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox", m = "IEMobile|Maxthon|MSIE|Trident", g = "opera mobi", y = "Mobile Safari", b = "Maple", w = "operamobile", E = "ie", S = "mobile safari", x = "qx.bom.client.Browser", T = "(Maple )([0-9]+.[0-9]+.[0-9]*)", N = "", C = "opera mini", k = "(", L = "browser.version", A = "opera", O = "ce", M = ")(/|)?([0-9]+.[0-9])?", _ = "mshtml", D = "Opera Mini|Opera Mobi|Opera", P = "webkit", H = "browser.documentmode", B = "5.0", j = "Mobile/";
    qx.Bootstrap.define(x, {
        statics: {
            getName: function () {
                var e = navigator.userAgent, a = new RegExp(k + qx.bom.client.Browser.__cx + M), f = e.match(a);
                if (!f)return N;
                var l = f[1].toLowerCase(), p = qx.bom.client.Engine.getName();
                if (p === P)l === i ? l = h : e.indexOf(y) !== -1 || e.indexOf(j) !== -1 ? l = S : e.indexOf(n) != -1 && (l = A); else if (p === _) {
                    if (l === r || l === c) {
                        l = E, qx.bom.client.OperatingSystem.getVersion() === O && (l = d);
                        var a = new RegExp(t);
                        e.match(a) && (l = d)
                    }
                } else p === A ? l === g ? l = w : l === C && (l = s) : p === o && e.indexOf(b) !== -1 && (l = u);
                return l
            }, getVersion: function () {
                var e = navigator.userAgent, t = new RegExp(k + qx.bom.client.Browser.__cx + p), n = e.match(t);
                if (!n)return N;
                var i = n[1].toLowerCase(), s = n[3];
                e.match(/Version(\/| )([0-9]+\.[0-9])/) && (s = RegExp.$2), qx.bom.client.Engine.getName() == _ && (s = qx.bom.client.Engine.getVersion(), i === r && qx.bom.client.OperatingSystem.getVersion() == O && (s = B));
                if (qx.bom.client.Browser.getName() == u) {
                    t = new RegExp(T), n = e.match(t);
                    if (!n)return N;
                    s = n[2]
                }
                return (qx.bom.client.Engine.getName() == P || qx.bom.client.Browser.getName() == A) && e.match(/OPR(\/| )([0-9]+\.[0-9])/) && (s = RegExp.$2), s
            }, getDocumentMode: function () {
                return document.documentMode ? document.documentMode : 0
            }, getQuirksMode: function () {
                return qx.bom.client.Engine.getName() == _ && parseFloat(qx.bom.client.Engine.getVersion()) >= 8 ? qx.bom.client.Engine.DOCUMENT_MODE === 5 : document.compatMode !== e
            }, __cx: {webkit: a, gecko: v, mshtml: m, opera: D}[qx.bom.client.Engine.getName()]
        }, defer: function (e) {
            qx.core.Environment.add(l, e.getName), qx.core.Environment.add(L, e.getVersion), qx.core.Environment.add(H, e.getDocumentMode), qx.core.Environment.add(f, e.getQuirksMode)
        }
    })
}(), function () {
    var e = "qx.bom.client.CssTransition", t = "E", n = "transitionEnd", r = "e", i = "nd", s = "transition", o = "css.transition", u = "Trans";
    qx.Bootstrap.define(e, {
        statics: {
            getTransitionName: function () {
                return qx.bom.Style.getPropertyName(s)
            }, getSupport: function () {
                var e = qx.bom.client.CssTransition.getTransitionName();
                if (!e)return null;
                var s = qx.bom.Event.getEventName(window, n);
                return s = s == n ? s.toLowerCase() : s, s || (s = e + (e.indexOf(u) > 0 ? t : r) + i), {
                    name: e,
                    "end-event": s
                }
            }
        }, defer: function (e) {
            qx.core.Environment.add(o, e.getSupport)
        }
    })
}(), function () {
    var e = "__cD", t = "UNKNOWN_", n = "|bubble", r = "", i = "_", s = "c", o = "|", u = "unload", a = "|capture", f = "DOM_", l = "WIN_", c = "QX_", h = "qx.event.Manager", p = "capture", d = "__cC", v = "DOCUMENT_";
    qx.Class.define(h, {
        extend: Object,
        construct: function (e, t) {
            this.__cy = e, this.__cz = qx.core.ObjectRegistry.toHashCode(e), this.__cA = t;
            if (e.qx !== qx) {
                var n = this;
                qx.bom.Event.addNativeListener(e, u, qx.event.GlobalError.observeMethod(function () {
                    qx.bom.Event.removeNativeListener(e, u, arguments.callee), n.dispose()
                }))
            }
            this.__cB = {}, this.__cC = {}, this.__cD = {}, this.__cE = {}
        },
        statics: {
            __cF: 0, getNextUniqueId: function () {
                return this.__cF++ + r
            }
        },
        members: {
            __cA: null,
            __cB: null,
            __cD: null,
            __cG: null,
            __cC: null,
            __cE: null,
            __cy: null,
            __cz: null,
            getWindow: function () {
                return this.__cy
            },
            getWindowId: function () {
                return this.__cz
            },
            getHandler: function (e) {
                var t = this.__cC[e.classname];
                return t ? t : this.__cC[e.classname] = new e(this)
            },
            getDispatcher: function (e) {
                var t = this.__cD[e.classname];
                return t ? t : this.__cD[e.classname] = new e(this, this.__cA)
            },
            getListeners: function (e, t, r) {
                var i = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), s = this.__cB[i];
                if (!s)return null;
                var o = t + (r ? a : n), u = s[o];
                return u ? u.concat() : null
            },
            getAllListeners: function () {
                return this.__cB
            },
            serializeListeners: function (e) {
                var t = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), n = this.__cB[t], r = [];
                if (n) {
                    var i, u, a, f, l;
                    for (var c in n) {
                        i = c.indexOf(o), u = c.substring(0, i), a = c.charAt(i + 1) == s, f = n[c];
                        for (var h = 0, p = f.length; h < p; h++)l = f[h], r.push({
                            self: l.context,
                            handler: l.handler,
                            type: u,
                            capture: a
                        })
                    }
                }
                return r
            },
            toggleAttachedEvents: function (e, t) {
                var n = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), r = this.__cB[n];
                if (r) {
                    var i, s, u, a;
                    for (var f in r)i = f.indexOf(o), s = f.substring(0, i), u = f.charCodeAt(i + 1) === 99, a = r[f], t ? this.__cH(e, s, u) : this.__cI(e, s, u)
                }
            },
            hasListener: function (e, t, r) {
                var i = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), s = this.__cB[i];
                if (!s)return !1;
                var o = t + (r ? a : n), u = s[o];
                return !!(u && u.length > 0)
            },
            importListeners: function (e, t) {
                var i = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), s = this.__cB[i] = {}, o = qx.event.Manager;
                for (var u in t) {
                    var f = t[u], l = f.type + (f.capture ? a : n), c = s[l];
                    c || (c = s[l] = [], this.__cH(e, f.type, f.capture)), c.push({
                        handler: f.listener,
                        context: f.self,
                        unique: f.unique || o.__cF++ + r
                    })
                }
            },
            addListener: function (e, t, i, s, u) {
                var f, l = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), c = this.__cB[l];
                c || (c = this.__cB[l] = {});
                var h = t + (u ? a : n), p = c[h];
                p || (p = c[h] = []), p.length === 0 && this.__cH(e, t, u);
                var d = qx.event.Manager.__cF++ + r, v = {handler: i, context: s, unique: d};
                return p.push(v), h + o + d
            },
            findHandler: function (e, n) {
                var r = !1, s = !1, o = !1, u = !1, a;
                e.nodeType === 1 ? (r = !0, a = f + e.tagName.toLowerCase() + i + n) : e.nodeType === 9 ? (u = !0, a = v + n) : e == this.__cy ? (s = !0, a = l + n) : e.classname ? (o = !0, a = c + e.classname + i + n) : a = t + e + i + n;
                var h = this.__cE;
                if (h[a])return h[a];
                var p = this.__cA.getHandlers(), d = qx.event.IEventHandler, g, y, w, E;
                for (var S = 0, x = p.length; S < x; S++) {
                    g = p[S], w = g.SUPPORTED_TYPES;
                    if (w && !w[n])continue;
                    E = g.TARGET_CHECK;
                    if (E) {
                        var T = !1;
                        r && (E & d.TARGET_DOMNODE) != 0 ? T = !0 : s && (E & d.TARGET_WINDOW) != 0 ? T = !0 : o && (E & d.TARGET_OBJECT) != 0 ? T = !0 : u && (E & d.TARGET_DOCUMENT) != 0 && (T = !0);
                        if (!T)continue
                    }
                    y = this.getHandler(p[S]);
                    if (g.IGNORE_CAN_HANDLE || y.canHandleEvent(e, n))return h[a] = y, y
                }
                return null
            },
            __cH: function (e, t, n) {
                var r = this.findHandler(e, t);
                if (r) {
                    r.registerEvent(e, t, n);
                    return
                }
            },
            removeListener: function (e, t, r, i, s) {
                var o, u = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), f = this.__cB[u];
                if (!f)return !1;
                var l = t + (s ? a : n), c = f[l];
                if (!c)return !1;
                var h;
                for (var p = 0, d = c.length; p < d; p++) {
                    h = c[p];
                    if (h.handler === r && h.context === i)return qx.lang.Array.removeAt(c, p), c.length == 0 && this.__cI(e, t, s), !0
                }
                return !1
            },
            removeListenerById: function (e, t) {
                var r, i = t.split(o), s = i[0], u = i[1].charCodeAt(0) == 99, f = i[2], l = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), c = this.__cB[l];
                if (!c)return !1;
                var h = s + (u ? a : n), p = c[h];
                if (!p)return !1;
                var d;
                for (var v = 0, m = p.length; v < m; v++) {
                    d = p[v];
                    if (d.unique === f)return qx.lang.Array.removeAt(p, v), p.length == 0 && this.__cI(e, s, u), !0
                }
                return !1
            },
            removeAllListeners: function (e) {
                var t = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), n = this.__cB[t];
                if (!n)return !1;
                var r, i, s;
                for (var u in n)n[u].length > 0 && (r = u.split(o), i = r[0], s = r[1] === p, this.__cI(e, i, s));
                return delete this.__cB[t], !0
            },
            deleteAllListeners: function (e) {
                delete this.__cB[e]
            },
            __cI: function (e, t, n) {
                var r = this.findHandler(e, t);
                if (r) {
                    r.unregisterEvent(e, t, n);
                    return
                }
            },
            dispatchEvent: function (e, t) {
                var n, r = t.getType();
                if (!t.getBubbles() && !this.hasListener(e, r))return qx.event.Pool.getInstance().poolObject(t), !0;
                t.getTarget() || t.setTarget(e);
                var i = this.__cA.getDispatchers(), s, o = !1;
                for (var u = 0, a = i.length; u < a; u++) {
                    s = this.getDispatcher(i[u]);
                    if (s.canDispatchEvent(e, t, r)) {
                        s.dispatchEvent(e, t, r), o = !0;
                        break
                    }
                }
                if (!o)return !0;
                var f = t.getDefaultPrevented();
                return qx.event.Pool.getInstance().poolObject(t), !f
            },
            dispose: function () {
                this.__cA.removeManager(this), qx.util.DisposeUtil.disposeMap(this, d), qx.util.DisposeUtil.disposeMap(this, e), this.__cB = this.__cy = this.__cG = null, this.__cA = this.__cE = null
            }
        }
    })
}(), function () {
    var e = "qx.event.IEventHandler";
    qx.Interface.define(e, {
        statics: {TARGET_DOMNODE: 1, TARGET_WINDOW: 2, TARGET_OBJECT: 4, TARGET_DOCUMENT: 8},
        members: {
            canHandleEvent: function (e, t) {
            }, registerEvent: function (e, t, n) {
            }, unregisterEvent: function (e, t, n) {
            }
        }
    })
}(), function () {
    var e = "qx.event.Registration";
    qx.Class.define(e, {
        statics: {
            __cJ: {}, getManager: function (e) {
                e == null ? e = window : e.nodeType ? e = qx.dom.Node.getWindow(e) : qx.dom.Node.isWindow(e) || (e = window);
                var t = e.$$hash || qx.core.ObjectRegistry.toHashCode(e), n = this.__cJ[t];
                return n || (n = new qx.event.Manager(e, this), this.__cJ[t] = n), n
            }, removeManager: function (e) {
                var t = e.getWindowId();
                delete this.__cJ[t]
            }, addListener: function (e, t, n, r, i) {
                return this.getManager(e).addListener(e, t, n, r, i)
            }, removeListener: function (e, t, n, r, i) {
                return this.getManager(e).removeListener(e, t, n, r, i)
            }, removeListenerById: function (e, t) {
                return this.getManager(e).removeListenerById(e, t)
            }, removeAllListeners: function (e) {
                return this.getManager(e).removeAllListeners(e)
            }, deleteAllListeners: function (e) {
                var t = e.$$hash;
                t && this.getManager(e).deleteAllListeners(t)
            }, hasListener: function (e, t, n) {
                return this.getManager(e).hasListener(e, t, n)
            }, serializeListeners: function (e) {
                return this.getManager(e).serializeListeners(e)
            }, createEvent: function (e, t, n) {
                t == null && (t = qx.event.type.Event);
                var r = qx.event.Pool.getInstance().getObject(t);
                return n ? r.init.apply(r, n) : r.init(), e && r.setType(e), r
            }, dispatchEvent: function (e, t) {
                return this.getManager(e).dispatchEvent(e, t)
            }, fireEvent: function (e, t, n, r) {
                var i, s = this.createEvent(t, n || null, r);
                return this.getManager(e).dispatchEvent(e, s)
            }, fireNonBubblingEvent: function (e, t, n, r) {
                var i = this.getManager(e);
                if (!i.hasListener(e, t, !1))return !0;
                var s = this.createEvent(t, n || null, r);
                return i.dispatchEvent(e, s)
            }, PRIORITY_FIRST: -32e3, PRIORITY_NORMAL: 0, PRIORITY_LAST: 32e3, __cC: [], addHandler: function (e) {
                this.__cC.push(e), this.__cC.sort(function (e, t) {
                    return e.PRIORITY - t.PRIORITY
                })
            }, getHandlers: function () {
                return this.__cC
            }, __cD: [], addDispatcher: function (e, t) {
                this.__cD.push(e), this.__cD.sort(function (e, t) {
                    return e.PRIORITY - t.PRIORITY
                })
            }, getDispatchers: function () {
                return this.__cD
            }
        }
    })
}(), function () {
    var e = "qx.core.MEvent";
    qx.Mixin.define(e, {
        members: {
            __cK: qx.event.Registration, addListener: function (e, t, n, r) {
                return this.$$disposed ? null : this.__cK.addListener(this, e, t, n, r)
            }, addListenerOnce: function (e, t, n, r) {
                var i = function (i) {
                    this.removeListener(e, t, this, r), t.call(n || this, i)
                };
                return t.$$wrapped_callback || (t.$$wrapped_callback = {}), t.$$wrapped_callback[e + this.$$hash] = i, this.addListener(e, i, this, r)
            }, removeListener: function (e, t, n, r) {
                if (!this.$$disposed) {
                    if (t.$$wrapped_callback && t.$$wrapped_callback[e + this.$$hash]) {
                        var i = t.$$wrapped_callback[e + this.$$hash];
                        delete t.$$wrapped_callback[e + this.$$hash], t = i
                    }
                    return this.__cK.removeListener(this, e, t, n, r)
                }
                return !1
            }, removeListenerById: function (e) {
                return this.$$disposed ? !1 : this.__cK.removeListenerById(this, e)
            }, hasListener: function (e, t) {
                return this.__cK.hasListener(this, e, t)
            }, dispatchEvent: function (e) {
                return this.$$disposed ? !0 : this.__cK.dispatchEvent(this, e)
            }, fireEvent: function (e, t, n) {
                return this.$$disposed ? !0 : this.__cK.fireEvent(this, e, t, n)
            }, fireNonBubblingEvent: function (e, t, n) {
                return this.$$disposed ? !0 : this.__cK.fireNonBubblingEvent(this, e, t, n)
            }, fireDataEvent: function (e, t, n, r) {
                return this.$$disposed ? !0 : (n === undefined && (n = null), this.__cK.fireNonBubblingEvent(this, e, qx.event.type.Data, [t, n, !!r]))
            }
        }
    })
}(), function () {
    var e = "qx.event.IEventDispatcher";
    qx.Interface.define(e, {
        members: {
            canDispatchEvent: function (e, t, n) {
                this.assertInstance(t, qx.event.type.Event), this.assertString(n)
            }, dispatchEvent: function (e, t, n) {
                this.assertInstance(t, qx.event.type.Event), this.assertString(n)
            }
        }
    })
}(), function () {
    var e = "module.events", t = "Cloning only possible with properties.", n = "qx.core.Object", r = "module.property", i = "]", s = "[", o = "Object";
    qx.Class.define(n, {
        extend: Object,
        include: qx.core.Environment.filter({
            "module.databinding": qx.data.MBinding,
            "module.logger": qx.core.MLogging,
            "module.events": qx.core.MEvent,
            "module.property": qx.core.MProperty
        }),
        construct: function () {
            qx.core.ObjectRegistry.register(this)
        },
        statics: {$$type: o},
        members: {
            __K: qx.core.Environment.get(r) ? qx.core.Property : null, toHashCode: function () {
                return this.$$hash
            }, toString: function () {
                return this.classname + s + this.$$hash + i
            }, base: function (e, t) {
                return arguments.length === 1 ? e.callee.base.call(this) : e.callee.base.apply(this, Array.prototype.slice.call(arguments, 1))
            }, self: function (e) {
                return e.callee.self
            }, clone: function () {
                if (!qx.core.Environment.get(r))throw new Error(t);
                var e = this.constructor, n = new e, i = qx.Class.getProperties(e), s = this.__K.$$store.user, o = this.__K.$$method.set, u;
                for (var a = 0, f = i.length; a < f; a++)u = i[a], this.hasOwnProperty(s[u]) && n[o[u]](this[s[u]]);
                return n
            }, __cL: null, setUserData: function (e, t) {
                this.__cL || (this.__cL = {}), this.__cL[e] = t
            }, getUserData: function (e) {
                if (!this.__cL)return null;
                var t = this.__cL[e];
                return t === undefined ? null : t
            }, isDisposed: function () {
                return this.$$disposed || !1
            }, dispose: function () {
                if (this.$$disposed)return;
                this.$$disposed = !0, this.$$instance = null, this.$$allowconstruct = null;
                var e = this.constructor, t;
                while (e.superclass) {
                    e.$$destructor && e.$$destructor.call(this);
                    if (e.$$includes) {
                        t = e.$$flatIncludes;
                        for (var n = 0, r = t.length; n < r; n++)t[n].$$destructor && t[n].$$destructor.call(this)
                    }
                    e = e.superclass
                }
                var i, s
            }, _disposeObjects: function (e) {
                qx.util.DisposeUtil.disposeObjects(this, arguments)
            }, _disposeSingletonObjects: function (e) {
                qx.util.DisposeUtil.disposeObjects(this, arguments, !0)
            }, _disposeArray: function (e) {
                qx.util.DisposeUtil.disposeArray(this, e)
            }, _disposeMap: function (e) {
                qx.util.DisposeUtil.disposeMap(this, e)
            }
        },
        environment: {"qx.debug.dispose.level": 0},
        destruct: function () {
            qx.core.Environment.get(e) && (qx.core.ObjectRegistry.inShutDown ? qx.event.Registration.deleteAllListeners(this) : qx.event.Registration.removeAllListeners(this)), qx.core.ObjectRegistry.unregister(this), this.__cL = null;
            if (qx.core.Environment.get(r)) {
                var t = this.constructor, n, i = this.__K.$$store, s = i.user, o = i.theme, u = i.inherit, f = i.useinit, l = i.init;
                while (t) {
                    n = t.$$properties;
                    if (n)for (var c in n)n[c].dereference && (this[s[c]] = this[o[c]] = this[u[c]] = this[f[c]] = this[l[c]] = undefined);
                    t = t.superclass
                }
            }
        }
    })
}(), function () {
    var e = " is a singleton! Please use disposeSingleton instead.", t = "undefined", n = "qx.util.DisposeUtil", r = " of object: ", i = "!", s = " has non disposable entries: ", o = "The map field: ", u = "The array field: ", a = "The object stored in key ", f = "Has no disposable object under key: ";
    qx.Class.define(n, {
        statics: {
            disposeObjects: function (t, n, r) {
                var s;
                for (var o = 0, u = n.length; o < u; o++) {
                    s = n[o];
                    if (t[s] == null || !t.hasOwnProperty(s))continue;
                    if (!qx.core.ObjectRegistry.inShutDown) {
                        if (!t[s].dispose)throw new Error(f + s + i);
                        if (!r && t[s].constructor.$$instance)throw new Error(a + s + e);
                        t[s].dispose()
                    }
                    t[s] = null
                }
            }, disposeArray: function (e, t) {
                var n = e[t];
                if (!n)return;
                if (qx.core.ObjectRegistry.inShutDown) {
                    e[t] = null;
                    return
                }
                try {
                    var i;
                    for (var o = n.length - 1; o >= 0; o--)i = n[o], i && i.dispose()
                } catch (a) {
                    throw new Error(u + t + r + e + s + a)
                }
                n.length = 0, e[t] = null
            }, disposeMap: function (e, t) {
                var n = e[t];
                if (!n)return;
                if (qx.core.ObjectRegistry.inShutDown) {
                    e[t] = null;
                    return
                }
                try {
                    var i;
                    for (var u in n)i = n[u], n.hasOwnProperty(u) && i && i.dispose()
                } catch (a) {
                    throw new Error(o + t + r + e + s + a)
                }
                e[t] = null
            }, disposeTriggeredBy: function (e, t) {
                var n = t.dispose;
                t.dispose = function () {
                    n.call(t), e.dispose()
                }
            }, destroyContainer: function (e) {
                var t = [];
                this._collectContainerChildren(e, t);
                var n = t.length;
                for (var r = n - 1; r >= 0; r--)t[r].destroy();
                e.destroy()
            }, _collectContainerChildren: function (e, t) {
                var n = e.getChildren();
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    t.push(i), this.__cM(i) && this._collectContainerChildren(i, t)
                }
            }, __cM: function (e) {
                var n = [];
                qx.ui.mobile && e instanceof qx.ui.mobile.core.Widget ? n = [qx.ui.mobile.container.Composite] : n = [qx.ui.container.Composite, qx.ui.container.Scroll, qx.ui.container.SlideBar, qx.ui.container.Stack];
                for (var r = 0, i = n.length; r < i; r++)if (typeof n[r] !== t && qx.Class.isSubClassOf(e.constructor, n[r]))return !0;
                return !1
            }
        }
    })
}(), function () {
    var e = "qx.event.type.Event";
    qx.Class.define(e, {
        extend: qx.core.Object,
        statics: {CAPTURING_PHASE: 1, AT_TARGET: 2, BUBBLING_PHASE: 3},
        members: {
            init: function (e, t) {
                return this._type = null, this._target = null, this._currentTarget = null, this._relatedTarget = null, this._originalTarget = null, this._stopPropagation = !1, this._preventDefault = !1, this._bubbles = !!e, this._cancelable = !!t, this._timeStamp = (new Date).getTime(), this._eventPhase = null, this
            }, clone: function (e) {
                if (e)var t = e; else var t = qx.event.Pool.getInstance().getObject(this.constructor);
                return t._type = this._type, t._target = this._target, t._currentTarget = this._currentTarget, t._relatedTarget = this._relatedTarget, t._originalTarget = this._originalTarget, t._stopPropagation = this._stopPropagation, t._bubbles = this._bubbles, t._preventDefault = this._preventDefault, t._cancelable = this._cancelable, t
            }, stop: function () {
                this._bubbles && this.stopPropagation(), this._cancelable && this.preventDefault()
            }, stopPropagation: function () {
                this._stopPropagation = !0
            }, getPropagationStopped: function () {
                return !!this._stopPropagation
            }, preventDefault: function () {
                this._preventDefault = !0
            }, getDefaultPrevented: function () {
                return !!this._preventDefault
            }, getType: function () {
                return this._type
            }, setType: function (e) {
                this._type = e
            }, getEventPhase: function () {
                return this._eventPhase
            }, setEventPhase: function (e) {
                this._eventPhase = e
            }, getTimeStamp: function () {
                return this._timeStamp
            }, getTarget: function () {
                return this._target
            }, setTarget: function (e) {
                this._target = e
            }, getCurrentTarget: function () {
                return this._currentTarget || this._target
            }, setCurrentTarget: function (e) {
                this._currentTarget = e
            }, getRelatedTarget: function () {
                return this._relatedTarget
            }, setRelatedTarget: function (e) {
                this._relatedTarget = e
            }, getOriginalTarget: function () {
                return this._originalTarget
            }, setOriginalTarget: function (e) {
                this._originalTarget = e
            }, getBubbles: function () {
                return this._bubbles
            }, setBubbles: function (e) {
                this._bubbles = e
            }, isCancelable: function () {
                return this._cancelable
            }, setCancelable: function (e) {
                this._cancelable = e
            }
        },
        destruct: function () {
            this._target = this._currentTarget = this._relatedTarget = this._originalTarget = null
        }
    })
}(), function () {
    var e = "qx.util.ObjectPool", t = "Class needs to be defined!", n = "Object is already pooled: ", r = "Integer";
    qx.Class.define(e, {
        extend: qx.core.Object, construct: function (e) {
            qx.core.Object.call(this), this.__cN = {}, e != null && this.setSize(e)
        }, properties: {size: {check: r, init: Infinity}}, members: {
            __cN: null, getObject: function (e) {
                if (this.$$disposed)return new e;
                if (!e)throw new Error(t);
                var n = null, r = this.__cN[e.classname];
                return r && (n = r.pop()), n ? n.$$pooled = !1 : n = new e, n
            }, poolObject: function (e) {
                if (!this.__cN)return;
                var t = e.classname, r = this.__cN[t];
                if (e.$$pooled)throw new Error(n + e);
                r || (this.__cN[t] = r = []);
                if (r.length > this.getSize()) {
                    e.destroy ? e.destroy() : e.dispose();
                    return
                }
                e.$$pooled = !0, r.push(e)
            }
        }, destruct: function () {
            var e = this.__cN, t, n, r, i;
            for (t in e) {
                n = e[t];
                for (r = 0, i = n.length; r < i; r++)n[r].dispose()
            }
            delete this.__cN
        }
    })
}(), function () {
    var e = "singleton", t = "qx.event.Pool";
    qx.Class.define(t, {
        extend: qx.util.ObjectPool, type: e, construct: function () {
            qx.util.ObjectPool.call(this, 30)
        }
    })
}(), function () {
    var e = "qx.event.dispatch.Direct";
    qx.Class.define(e, {
        extend: qx.core.Object, implement: qx.event.IEventDispatcher, construct: function (e) {
            this._manager = e
        }, statics: {PRIORITY: qx.event.Registration.PRIORITY_LAST}, members: {
            canDispatchEvent: function (e, t, n) {
                return !t.getBubbles()
            }, dispatchEvent: function (e, t, n) {
                var r, i;
                t.setEventPhase(qx.event.type.Event.AT_TARGET);
                var s = this._manager.getListeners(e, n, !1);
                if (s)for (var o = 0, u = s.length; o < u; o++) {
                    var a = s[o].context || e;
                    s[o].handler.call(a, t)
                }
            }
        }, defer: function (e) {
            qx.event.Registration.addDispatcher(e)
        }
    })
}(), function () {
    var e = "qx.event.handler.Object";
    qx.Class.define(e, {
        extend: qx.core.Object,
        implement: qx.event.IEventHandler,
        statics: {
            PRIORITY: qx.event.Registration.PRIORITY_LAST,
            SUPPORTED_TYPES: null,
            TARGET_CHECK: qx.event.IEventHandler.TARGET_OBJECT,
            IGNORE_CAN_HANDLE: !1
        },
        members: {
            canHandleEvent: function (e, t) {
                return qx.Class.supportsEvent(e.constructor, t)
            }, registerEvent: function (e, t, n) {
            }, unregisterEvent: function (e, t, n) {
            }
        },
        defer: function (e) {
            qx.event.Registration.addHandler(e)
        }
    })
}(), function () {
    var e = "qx.event.type.Data";
    qx.Class.define(e, {
        extend: qx.event.type.Event, members: {
            __cO: null, __cP: null, init: function (e, t, n) {
                return qx.event.type.Event.prototype.init.call(this, !1, n), this.__cO = e, this.__cP = t, this
            }, clone: function (e) {
                var t = qx.event.type.Event.prototype.clone.call(this, e);
                return t.__cO = this.__cO, t.__cP = this.__cP, t
            }, getData: function () {
                return this.__cO
            }, getOldData: function () {
                return this.__cP
            }
        }, destruct: function () {
            this.__cO = this.__cP = null
        }
    })
}(), function () {
    var e = "qx.data.marshal.IMarshaler";
    qx.Interface.define(e, {
        members: {
            toClass: function (e, t) {
            }, toModel: function (e) {
            }
        }
    })
}(), function () {
    var e = '"', t = "Class '", n = "", r = "Unsupported type!", i = "change", s = "qx.data.marshal.Json", o = "Array", u = "_validate", a = "' could not be found.", f = "]", l = "[", c = "set", h = "_applyEventPropagation", p = "qx.data.model.";
    qx.Class.define(s, {
        extend: qx.core.Object, implement: [qx.data.marshal.IMarshaler], construct: function (e) {
            qx.core.Object.call(this), this.__tB = e
        }, statics: {
            $$instance: null, createModel: function (e, t) {
                return this.$$instance === null && (this.$$instance = new qx.data.marshal.Json), this.$$instance.toClass(e, t), this.$$instance.toModel(e)
            }
        }, members: {
            __tB: null, __tC: function (t) {
                return Object.keys(t).sort().join(e)
            }, toClass: function (e, t) {
                this.__tD(e, t, null, 0)
            }, __tD: function (e, t, r, s) {
                if (!qx.lang.Type.isObject(e) || !!e.$$isString || e instanceof qx.core.Object) {
                    if (e instanceof Array || qx.Bootstrap.getClass(e) == o)for (var a = 0; a < e.length; a++)this.__tD(e[a], t, r + l + a + f, s + 1);
                    return
                }
                var c = this.__tC(e);
                if (this.__tH(c, r, s))return;
                for (var d in e)this.__tD(e[d], t, d, s + 1);
                if (qx.Class.isDefined(p + c))return;
                if (this.__tB && this.__tB.getModelClass && this.__tB.getModelClass(c, e, r, s) != null)return;
                var v = {}, m = {__tE: this.__tE};
                for (var d in e) {
                    this.__tB && this.__tB.getPropertyMapping && (d = this.__tB.getPropertyMapping(d, c)), d = d.replace(/-|\.|\s+/g, n), v[d] = {}, v[d].nullable = !0, v[d].event = i + qx.lang.String.firstUp(d), t && (v[d].apply = h);
                    if (this.__tB && this.__tB.getValidationRule) {
                        var y = this.__tB.getValidationRule(c, d);
                        y && (v[d].validate = u + d, m[u + d] = y)
                    }
                }
                if (this.__tB && this.__tB.getModelSuperClass)var b = this.__tB.getModelSuperClass(c, r, s) || qx.core.Object; else var b = qx.core.Object;
                var w = [];
                if (this.__tB && this.__tB.getModelMixins) {
                    var E = this.__tB.getModelMixins(c, r, s);
                    qx.lang.Type.isArray(E) ? w = E : E != null && (w = [E])
                }
                t && w.push(qx.data.marshal.MEventBubbling);
                var S = {extend: b, include: w, properties: v, members: m, destruct: this.__tF};
                qx.Class.define(p + c, S)
            }, __tF: function () {
                var e = qx.util.PropertyUtil.getAllProperties(this.constructor);
                for (var t in e)this.__tE(this.get(e[t].name))
            }, __tE: function (e) {
                if (!(e instanceof qx.core.Object))return;
                if (e.isDisposed())return;
                e.dispose()
            }, __tG: function (e, n, r, i) {
                var s;
                this.__tB && this.__tB.getModelClass && (s = this.__tB.getModelClass(e, n, r, i));
                if (s != null)return new s;
                var o = p + e, u = qx.Class.getByName(o);
                if (!u)throw new Error(t + o + a);
                return new u
            }, __tH: function (e, t, n) {
                var r = this.__tB;
                return r && r.ignore && r.ignore(e, t, n)
            }, toModel: function (e) {
                return this.__tI(e, null, 0)
            }, __tI: function (e, t, i) {
                var s = qx.lang.Type.isObject(e), u = e instanceof Array || qx.Bootstrap.getClass(e) == o;
                if (!s && !u || !!e.$$isString || e instanceof qx.core.Object)return e;
                if (this.__tH(this.__tC(e), t, i))return e;
                if (u) {
                    var a = qx.data.Array;
                    if (this.__tB && this.__tB.getArrayClass) {
                        var h = this.__tB.getArrayClass(t, i);
                        a = h || a
                    }
                    var p = new a;
                    p.setAutoDisposeItems(!0);
                    for (var v = 0; v < e.length; v++)p.push(this.__tI(e[v], t + l + v + f, i + 1));
                    return p
                }
                if (s) {
                    var y = this.__tC(e), b = this.__tG(y, e, t, i);
                    for (var w in e) {
                        var E = w;
                        this.__tB && this.__tB.getPropertyMapping && (E = this.__tB.getPropertyMapping(w, y));
                        var S = E.replace(/-|\.|\s+/g, n);
                        E = S;
                        var x = c + qx.lang.String.firstUp(E);
                        b[x] && b[x](this.__tI(e[w], w, i + 1))
                    }
                    return b
                }
                throw new Error(r)
            }
        }, destruct: function () {
            this.__tB = null
        }
    })
}(), function () {
    var e = "$$theme_", t = "$$user_", n = "qx.util.PropertyUtil", r = "$$init_";
    qx.Class.define(n, {
        statics: {
            getProperties: function (e) {
                return e.$$properties
            }, getAllProperties: function (e) {
                var t = {}, n = e;
                while (n != qx.core.Object) {
                    var r = this.getProperties(n);
                    for (var i in r)t[i] = r[i];
                    n = n.superclass
                }
                return t
            }, getUserValue: function (e, n) {
                return e[t + n]
            }, setUserValue: function (e, n, r) {
                e[t + n] = r
            }, deleteUserValue: function (e, n) {
                delete e[t + n]
            }, getInitValue: function (e, t) {
                return e[r + t]
            }, setInitValue: function (e, t, n) {
                e[r + t] = n
            }, deleteInitValue: function (e, t) {
                delete e[r + t]
            }, getThemeValue: function (t, n) {
                return t[e + n]
            }, setThemeValue: function (t, n, r) {
                t[e + n] = r
            }, deleteThemeValue: function (t, n) {
                delete t[e + n]
            }, setThemed: function (e, t, n) {
                var r = qx.core.Property.$$method.setThemed;
                e[r[t]](n)
            }, resetThemed: function (e, t) {
                var n = qx.core.Property.$$method.resetThemed;
                e[n[t]]()
            }
        }
    })
}(), function () {
    var e = "qx.data.marshal.MEventBubbling", t = "", n = "]", r = "idBubble-", i = "[", s = "changeBubble", o = ".", u = "qx.event.type.Data";
    qx.Mixin.define(e, {
        events: {changeBubble: u}, members: {
            _applyEventPropagation: function (e, t, n) {
                this.fireDataEvent(s, {value: e, name: n, old: t, item: this}), this._registerEventChaining(e, t, n)
            }, _registerEventChaining: function (e, t, n) {
                if (t != null && t.getUserData && t.getUserData(r + this.$$hash) != null) {
                    var i = t.getUserData(r + this.$$hash);
                    for (var o = 0; o < i.length; o++)t.removeListenerById(i[o]);
                    t.setUserData(r + this.$$hash, null)
                }
                if (e instanceof qx.core.Object && qx.Class.hasMixin(e.constructor, qx.data.marshal.MEventBubbling)) {
                    var u = qx.lang.Function.bind(this.__lX, this, n), a = e.addListener(s, u, this), i = e.getUserData(r + this.$$hash);
                    i == null && (i = [], e.setUserData(r + this.$$hash, i)), i.push(a)
                }
            }, __lX: function (e, r) {
                var u = r.getData(), a = u.value, l = u.old;
                if (qx.Class.hasInterface(r.getTarget().constructor, qx.data.IListData))if (u.name.indexOf) {
                    var p = u.name.indexOf(o) != -1 ? u.name.indexOf(o) : u.name.length, d = u.name.indexOf(i) != -1 ? u.name.indexOf(i) : u.name.length;
                    if (d == 0)var v = e + u.name; else if (p < d) {
                        var m = u.name.substring(0, p), y = u.name.substring(p + 1, u.name.length);
                        y[0] != i && (y = o + y);
                        var v = e + i + m + n + y
                    } else if (d < p)var m = u.name.substring(0, d), y = u.name.substring(d, u.name.length), v = e + i + m + n + y; else var v = e + i + u.name + n
                } else var v = e + i + u.name + n; else {
                    parseInt(e) == e && e !== t && (e = i + e + n);
                    var v = e + o + u.name
                }
                this.fireDataEvent(s, {value: a, name: v, old: l, item: u.item || r.getTarget()})
            }
        }
    })
}(), function () {
    var e = "-", t = "add", n = "order", r = "add/remove", i = "Boolean", s = "", o = "change", u = "qx.data.Array", a = "Type of the parameter not supported!", f = "0-", l = "remove", c = "0", h = "number", p = "changeBubble", d = "changeLength", v = "qx.event.type.Data";
    qx.Class.define(u, {
        extend: qx.core.Object,
        include: qx.data.marshal.MEventBubbling,
        implement: [qx.data.IListData],
        construct: function (e) {
            qx.core.Object.call(this);
            if (e == undefined)this.__lY = []; else if (arguments.length > 1) {
                this.__lY = [];
                for (var t = 0; t < arguments.length; t++)this.__lY.push(arguments[t])
            } else if (typeof e == h)this.__lY = new Array(e); else {
                if (!(e instanceof Array))throw this.__lY = [], this.dispose(), new Error(a);
                this.__lY = qx.lang.Array.clone(e)
            }
            for (var t = 0; t < this.__lY.length; t++)this._applyEventPropagation(this.__lY[t], null, t);
            this.__ma()
        },
        properties: {autoDisposeItems: {check: i, init: !1}},
        events: {change: v, changeLength: v},
        members: {
            __lY: null, concat: function (e) {
                if (e)var t = this.__lY.concat(e); else var t = this.__lY.concat();
                return new qx.data.Array(t)
            }, join: function (e) {
                return this.__lY.join(e)
            }, pop: function () {
                var e = this.__lY.pop();
                return this.__ma(), this._registerEventChaining(null, e, this.length - 1), this.fireDataEvent(p, {
                    value: [],
                    name: this.length + s,
                    old: [e],
                    item: this
                }), this.fireDataEvent(o, {
                    start: this.length - 1,
                    end: this.length - 1,
                    type: l,
                    removed: [e],
                    added: []
                }, null), e
            }, push: function (e) {
                for (var n = 0; n < arguments.length; n++)this.__lY.push(arguments[n]), this.__ma(), this._registerEventChaining(arguments[n], null, this.length - 1), this.fireDataEvent(p, {
                    value: [arguments[n]],
                    name: this.length - 1 + s,
                    old: [],
                    item: this
                }), this.fireDataEvent(o, {
                    start: this.length - 1,
                    end: this.length - 1,
                    type: t,
                    added: [arguments[n]],
                    removed: []
                }, null);
                return this.length
            }, reverse: function () {
                if (this.length == 0)return;
                var e = this.__lY.concat();
                this.__lY.reverse(), this.__mb(0, this.length), this.fireDataEvent(o, {
                    start: 0,
                    end: this.length - 1,
                    type: n,
                    added: [],
                    removed: []
                }, null), this.fireDataEvent(p, {
                    value: this.__lY,
                    name: f + (this.__lY.length - 1),
                    old: e,
                    item: this
                })
            }, shift: function () {
                if (this.length == 0)return;
                var e = this.__lY.shift();
                return this.__ma(), this._registerEventChaining(null, e, this.length - 1), this.__mb(0, this.length), this.fireDataEvent(p, {
                    value: [],
                    name: c,
                    old: [e],
                    item: this
                }), this.fireDataEvent(o, {start: 0, end: this.length - 1, type: l, removed: [e], added: []}, null), e
            }, slice: function (e, t) {
                return new qx.data.Array(this.__lY.slice(e, t))
            }, splice: function (n, i, u) {
                var a = this.__lY.length, f = this.__lY.splice.apply(this.__lY, arguments);
                if (this.__lY.length != a)this.__ma(); else if (i == arguments.length - 2) {
                    var c = qx.lang.Array.fromArguments(arguments, 2);
                    for (var h = 0; h < c.length; h++) {
                        if (c[h] !== f[h])break;
                        if (h == c.length - 1)return new qx.data.Array
                    }
                }
                var d = i > 0, v = arguments.length > 2;
                if (d || v) {
                    var c = qx.lang.Array.fromArguments(arguments, 2);
                    if (f.length == 0)var m = t, y = n + c.length; else if (c.length == 0)var m = l, y = this.length - 1; else var m = r, y = n + Math.abs(c.length - f.length);
                    this.fireDataEvent(o, {start: n, end: y, type: m, added: c, removed: f}, null)
                }
                for (var h = 0; h < f.length; h++)this._registerEventChaining(null, f[h], h);
                for (var h = 2; h < arguments.length; h++)this._registerEventChaining(arguments[h], null, n + (h - 2));
                this.__mb(n + (arguments.length - 2) - i, this.length);
                if (d || v) {
                    var w = [];
                    for (var h = 2; h < arguments.length; h++)w[h - 2] = arguments[h];
                    var E = n + Math.max(arguments.length - 3, i - 1), S = n == E ? E : n + e + E, x = {
                        value: w,
                        name: S + s,
                        old: f,
                        item: this
                    };
                    this.fireDataEvent(p, x)
                }
                return new qx.data.Array(f)
            }, sort: function (e) {
                if (this.length == 0)return;
                var t = this.__lY.concat();
                this.__lY.sort.apply(this.__lY, arguments);
                if (qx.lang.Array.equals(this.__lY, t) === !0)return;
                this.__mb(0, this.length), this.fireDataEvent(o, {
                    start: 0,
                    end: this.length - 1,
                    type: n,
                    added: [],
                    removed: []
                }, null), this.fireDataEvent(p, {value: this.__lY, name: f + (this.length - 1), old: t, item: this})
            }, unshift: function (e) {
                for (var n = arguments.length - 1; n >= 0; n--)this.__lY.unshift(arguments[n]), this.__ma(), this.__mb(0, this.length), this.fireDataEvent(p, {
                    value: [this.__lY[0]],
                    name: c,
                    old: [this.__lY[1]],
                    item: this
                }), this.fireDataEvent(o, {
                    start: 0,
                    end: this.length - 1,
                    type: t,
                    added: [arguments[n]],
                    removed: []
                }, null);
                return this.length
            }, toArray: function () {
                return this.__lY
            }, getItem: function (e) {
                return this.__lY[e]
            }, setItem: function (e, t) {
                var n = this.__lY[e];
                if (n === t)return;
                this.__lY[e] = t, this._registerEventChaining(t, n, e), this.length != this.__lY.length && this.__ma(), this.fireDataEvent(p, {
                    value: [t],
                    name: e + s,
                    old: [n],
                    item: this
                }), this.fireDataEvent(o, {start: e, end: e, type: r, added: [t], removed: [n]}, null)
            }, getLength: function () {
                return this.length
            }, indexOf: function (e) {
                return this.__lY.indexOf(e)
            }, lastIndexOf: function (e) {
                return this.__lY.lastIndexOf(e)
            }, toString: function () {
                return this.__lY != null ? this.__lY.toString() : s
            }, contains: function (e) {
                return this.__lY.indexOf(e) !== -1
            }, copy: function () {
                return this.concat()
            }, insertAt: function (e, t) {
                this.splice(e, 0, t).dispose()
            }, insertBefore: function (e, t) {
                var n = this.indexOf(e);
                n == -1 ? this.push(t) : this.splice(n, 0, t).dispose()
            }, insertAfter: function (e, t) {
                var n = this.indexOf(e);
                n == -1 || n == this.length - 1 ? this.push(t) : this.splice(n + 1, 0, t).dispose()
            }, removeAt: function (e) {
                var t = this.splice(e, 1), n = t.getItem(0);
                return t.dispose(), n
            }, removeAll: function () {
                for (var e = 0; e < this.__lY.length; e++)this._registerEventChaining(null, this.__lY[e], e);
                if (this.getLength() == 0)return [];
                var t = this.getLength(), n = this.__lY.concat();
                return this.__lY.length = 0, this.__ma(), this.fireDataEvent(p, {
                    value: [],
                    name: f + (t - 1),
                    old: n,
                    item: this
                }), this.fireDataEvent(o, {start: 0, end: t - 1, type: l, removed: n, added: []}, null), n
            }, append: function (n) {
                n instanceof qx.data.Array && (n = n.toArray()), Array.prototype.push.apply(this.__lY, n);
                for (var r = 0; r < n.length; r++)this._registerEventChaining(n[r], null, this.__lY.length + r);
                var i = this.length;
                this.__ma();
                var u = i == this.length - 1 ? i : i + e + (this.length - 1);
                this.fireDataEvent(p, {value: n, name: u + s, old: [], item: this}), this.fireDataEvent(o, {
                    start: i,
                    end: this.length - 1,
                    type: t,
                    added: n,
                    removed: []
                }, null)
            }, remove: function (e) {
                var t = this.indexOf(e);
                if (t != -1)return this.splice(t, 1).dispose(), e
            }, equals: function (e) {
                if (this.length !== e.length)return !1;
                for (var t = 0; t < this.length; t++)if (this.getItem(t) !== e.getItem(t))return !1;
                return !0
            }, sum: function () {
                var e = 0;
                for (var t = 0; t < this.length; t++)e += this.getItem(t);
                return e
            }, max: function () {
                var e = this.getItem(0);
                for (var t = 1; t < this.length; t++)this.getItem(t) > e && (e = this.getItem(t));
                return e === undefined ? null : e
            }, min: function () {
                var e = this.getItem(0);
                for (var t = 1; t < this.length; t++)this.getItem(t) < e && (e = this.getItem(t));
                return e === undefined ? null : e
            }, forEach: function (e, t) {
                for (var n = 0; n < this.__lY.length; n++)e.call(t, this.__lY[n], n, this)
            }, filter: function (e, t) {
                return new qx.data.Array(this.__lY.filter(e, t))
            }, map: function (e, t) {
                return new qx.data.Array(this.__lY.map(e, t))
            }, some: function (e, t) {
                return this.__lY.some(e, t)
            }, every: function (e, t) {
                return this.__lY.every(e, t)
            }, reduce: function (e, t) {
                return this.__lY.reduce(e, t)
            }, reduceRight: function (e, t) {
                return this.__lY.reduceRight(e, t)
            }, __ma: function () {
                var e = this.length;
                this.length = this.__lY.length, this.fireDataEvent(d, this.length, e)
            }, __mb: function (e, t) {
                for (var n = e; n < t; n++)this._registerEventChaining(this.__lY[n], this.__lY[n], n)
            }
        },
        destruct: function () {
            for (var e = 0; e < this.__lY.length; e++) {
                var t = this.__lY[e];
                this._applyEventPropagation(null, t, e), this.isAutoDisposeItems() && t && t instanceof qx.core.Object && t.dispose()
            }
            this.__lY = null
        }
    })
}(), function () {
    var e = "", t = "runtime.name", n = "node.js", r = "rhino", i = "undefined", s = "titanium", o = "qx.bom.client.Runtime";
    qx.Bootstrap.define(o, {
        statics: {
            getName: function () {
                var t = e;
                return typeof environment !== i ? t = r : typeof process !== i ? t = n : typeof Titanium !== i && typeof Titanium.userAgent !== i ? t = s : t = qx.bom.client.Browser.getName(), t
            }
        }, defer: function (e) {
            qx.core.Environment.add(t, e.getName)
        }
    })
}();
if (typeof exports != "undefined")for (var key in qx)exports[key] = qx[key];
define("qx", function () {
}), function () {
    function e(e) {
        function t(t, n, r, i, s, o) {
            for (; s >= 0 && o > s; s += e) {
                var u = i ? i[s] : s;
                r = n(r, t[u], u, t)
            }
            return r
        }

        return function (n, r, i, s) {
            r = y(r, s, 4);
            var o = !x(n) && g.keys(n), u = (o || n).length, a = e > 0 ? 0 : u - 1;
            return arguments.length < 3 && (i = n[o ? o[a] : a], a += e), t(n, r, i, o, a, u)
        }
    }

    function t(e) {
        return function (t, n, r) {
            n = b(n, r);
            for (var i = null != t && t.length, s = e > 0 ? 0 : i - 1; s >= 0 && i > s; s += e)if (n(t[s], s, t))return s;
            return -1
        }
    }

    function n(e, t) {
        var n = L.length, r = e.constructor, i = g.isFunction(r) && r.prototype || o, s = "constructor";
        for (g.has(e, s) && !g.contains(t, s) && t.push(s); n--;)s = L[n], s in e && e[s] !== i[s] && !g.contains(t, s) && t.push(s)
    }

    var r = this, i = r._, s = Array.prototype, o = Object.prototype, u = Function.prototype, a = s.push, f = s.slice, l = o.toString, c = o.hasOwnProperty, h = Array.isArray, p = Object.keys, d = u.bind, v = Object.create, m = function () {
    }, g = function (e) {
        return e instanceof g ? e : this instanceof g ? void (this._wrapped = e) : new g(e)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = g), exports._ = g) : r._ = g, g.VERSION = "1.8.2";
    var y = function (e, t, n) {
        if (t === void 0)return e;
        switch (null == n ? 3 : n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                };
            case 4:
                return function (n, r, i, s) {
                    return e.call(t, n, r, i, s)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }, b = function (e, t, n) {
        return null == e ? g.identity : g.isFunction(e) ? y(e, t, n) : g.isObject(e) ? g.matcher(e) : g.property(e)
    };
    g.iteratee = function (e, t) {
        return b(e, t, 1 / 0)
    };
    var w = function (e, t) {
        return function (n) {
            var r = arguments.length;
            if (2 > r || null == n)return n;
            for (var i = 1; r > i; i++)for (var s = arguments[i], o = e(s), u = o.length, a = 0; u > a; a++) {
                var f = o[a];
                t && n[f] !== void 0 || (n[f] = s[f])
            }
            return n
        }
    }, E = function (e) {
        if (!g.isObject(e))return {};
        if (v)return v(e);
        m.prototype = e;
        var t = new m;
        return m.prototype = null, t
    }, S = Math.pow(2, 53) - 1, x = function (e) {
        var t = e && e.length;
        return "number" == typeof t && t >= 0 && S >= t
    };
    g.each = g.forEach = function (e, t, n) {
        t = y(t, n);
        var r, i;
        if (x(e))for (r = 0, i = e.length; i > r; r++)t(e[r], r, e); else {
            var s = g.keys(e);
            for (r = 0, i = s.length; i > r; r++)t(e[s[r]], s[r], e)
        }
        return e
    }, g.map = g.collect = function (e, t, n) {
        t = b(t, n);
        for (var r = !x(e) && g.keys(e), i = (r || e).length, s = Array(i), o = 0; i > o; o++) {
            var u = r ? r[o] : o;
            s[o] = t(e[u], u, e)
        }
        return s
    }, g.reduce = g.foldl = g.inject = e(1), g.reduceRight = g.foldr = e(-1), g.find = g.detect = function (e, t, n) {
        var r;
        return r = x(e) ? g.findIndex(e, t, n) : g.findKey(e, t, n), r !== void 0 && r !== -1 ? e[r] : void 0
    }, g.filter = g.select = function (e, t, n) {
        var r = [];
        return t = b(t, n), g.each(e, function (e, n, i) {
            t(e, n, i) && r.push(e)
        }), r
    }, g.reject = function (e, t, n) {
        return g.filter(e, g.negate(b(t)), n)
    }, g.every = g.all = function (e, t, n) {
        t = b(t, n);
        for (var r = !x(e) && g.keys(e), i = (r || e).length, s = 0; i > s; s++) {
            var o = r ? r[s] : s;
            if (!t(e[o], o, e))return !1
        }
        return !0
    }, g.some = g.any = function (e, t, n) {
        t = b(t, n);
        for (var r = !x(e) && g.keys(e), i = (r || e).length, s = 0; i > s; s++) {
            var o = r ? r[s] : s;
            if (t(e[o], o, e))return !0
        }
        return !1
    }, g.contains = g.includes = g.include = function (e, t, n) {
        return x(e) || (e = g.values(e)), g.indexOf(e, t, "number" == typeof n && n) >= 0
    }, g.invoke = function (e, t) {
        var n = f.call(arguments, 2), r = g.isFunction(t);
        return g.map(e, function (e) {
            var i = r ? t : e[t];
            return null == i ? i : i.apply(e, n)
        })
    }, g.pluck = function (e, t) {
        return g.map(e, g.property(t))
    }, g.where = function (e, t) {
        return g.filter(e, g.matcher(t))
    }, g.findWhere = function (e, t) {
        return g.find(e, g.matcher(t))
    }, g.max = function (e, t, n) {
        var r, i, s = -1 / 0, o = -1 / 0;
        if (null == t && null != e) {
            e = x(e) ? e : g.values(e);
            for (var u = 0, a = e.length; a > u; u++)r = e[u], r > s && (s = r)
        } else t = b(t, n), g.each(e, function (e, n, r) {
            i = t(e, n, r), (i > o || i === -1 / 0 && s === -1 / 0) && (s = e, o = i)
        });
        return s
    }, g.min = function (e, t, n) {
        var r, i, s = 1 / 0, o = 1 / 0;
        if (null == t && null != e) {
            e = x(e) ? e : g.values(e);
            for (var u = 0, a = e.length; a > u; u++)r = e[u], s > r && (s = r)
        } else t = b(t, n), g.each(e, function (e, n, r) {
            i = t(e, n, r), (o > i || 1 / 0 === i && 1 / 0 === s) && (s = e, o = i)
        });
        return s
    }, g.shuffle = function (e) {
        for (var t, n = x(e) ? e : g.values(e), r = n.length, i = Array(r), s = 0; r > s; s++)t = g.random(0, s), t !== s && (i[s] = i[t]), i[t] = n[s];
        return i
    }, g.sample = function (e, t, n) {
        return null == t || n ? (x(e) || (e = g.values(e)), e[g.random(e.length - 1)]) : g.shuffle(e).slice(0, Math.max(0, t))
    }, g.sortBy = function (e, t, n) {
        return t = b(t, n), g.pluck(g.map(e, function (e, n, r) {
            return {value: e, index: n, criteria: t(e, n, r)}
        }).sort(function (e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0)return 1;
                if (r > n || r === void 0)return -1
            }
            return e.index - t.index
        }), "value")
    };
    var T = function (e) {
        return function (t, n, r) {
            var i = {};
            return n = b(n, r), g.each(t, function (r, s) {
                var o = n(r, s, t);
                e(i, r, o)
            }), i
        }
    };
    g.groupBy = T(function (e, t, n) {
        g.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), g.indexBy = T(function (e, t, n) {
        e[n] = t
    }), g.countBy = T(function (e, t, n) {
        g.has(e, n) ? e[n]++ : e[n] = 1
    }), g.toArray = function (e) {
        return e ? g.isArray(e) ? f.call(e) : x(e) ? g.map(e, g.identity) : g.values(e) : []
    }, g.size = function (e) {
        return null == e ? 0 : x(e) ? e.length : g.keys(e).length
    }, g.partition = function (e, t, n) {
        t = b(t, n);
        var r = [], i = [];
        return g.each(e, function (e, n, s) {
            (t(e, n, s) ? r : i).push(e)
        }), [r, i]
    }, g.first = g.head = g.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : g.initial(e, e.length - t)
    }, g.initial = function (e, t, n) {
        return f.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }, g.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : g.rest(e, Math.max(0, e.length - t))
    }, g.rest = g.tail = g.drop = function (e, t, n) {
        return f.call(e, null == t || n ? 1 : t)
    }, g.compact = function (e) {
        return g.filter(e, g.identity)
    };
    var N = function (e, t, n, r) {
        for (var i = [], s = 0, o = r || 0, u = e && e.length; u > o; o++) {
            var a = e[o];
            if (x(a) && (g.isArray(a) || g.isArguments(a))) {
                t || (a = N(a, t, n));
                var f = 0, l = a.length;
                for (i.length += l; l > f;)i[s++] = a[f++]
            } else n || (i[s++] = a)
        }
        return i
    };
    g.flatten = function (e, t) {
        return N(e, t, !1)
    }, g.without = function (e) {
        return g.difference(e, f.call(arguments, 1))
    }, g.uniq = g.unique = function (e, t, n, r) {
        if (null == e)return [];
        g.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = b(n, r));
        for (var i = [], s = [], o = 0, u = e.length; u > o; o++) {
            var a = e[o], f = n ? n(a, o, e) : a;
            t ? (o && s === f || i.push(a), s = f) : n ? g.contains(s, f) || (s.push(f), i.push(a)) : g.contains(i, a) || i.push(a)
        }
        return i
    }, g.union = function () {
        return g.uniq(N(arguments, !0, !0))
    }, g.intersection = function (e) {
        if (null == e)return [];
        for (var t = [], n = arguments.length, r = 0, i = e.length; i > r; r++) {
            var s = e[r];
            if (!g.contains(t, s)) {
                for (var o = 1; n > o && g.contains(arguments[o], s); o++);
                o === n && t.push(s)
            }
        }
        return t
    }, g.difference = function (e) {
        var t = N(arguments, !0, !0, 1);
        return g.filter(e, function (e) {
            return !g.contains(t, e)
        })
    }, g.zip = function () {
        return g.unzip(arguments)
    }, g.unzip = function (e) {
        for (var t = e && g.max(e, "length").length || 0, n = Array(t), r = 0; t > r; r++)n[r] = g.pluck(e, r);
        return n
    }, g.object = function (e, t) {
        for (var n = {}, r = 0, i = e && e.length; i > r; r++)t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, g.indexOf = function (e, t, n) {
        var r = 0, i = e && e.length;
        if ("number" == typeof n)r = 0 > n ? Math.max(0, i + n) : n; else if (n && i)return r = g.sortedIndex(e, t), e[r] === t ? r : -1;
        if (t !== t)return g.findIndex(f.call(e, r), g.isNaN);
        for (; i > r; r++)if (e[r] === t)return r;
        return -1
    }, g.lastIndexOf = function (e, t, n) {
        var r = e ? e.length : 0;
        if ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)), t !== t)return g.findLastIndex(f.call(e, 0, r), g.isNaN);
        for (; --r >= 0;)if (e[r] === t)return r;
        return -1
    }, g.findIndex = t(1), g.findLastIndex = t(-1), g.sortedIndex = function (e, t, n, r) {
        n = b(n, r, 1);
        for (var i = n(t), s = 0, o = e.length; o > s;) {
            var u = Math.floor((s + o) / 2);
            n(e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, g.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), s = 0; r > s; s++, e += n)i[s] = e;
        return i
    };
    var C = function (e, t, n, r, i) {
        if (r instanceof t) {
            var s = E(e.prototype), o = e.apply(s, i);
            return g.isObject(o) ? o : s
        }
        return e.apply(n, i)
    };
    g.bind = function (e, t) {
        if (d && e.bind === d)return d.apply(e, f.call(arguments, 1));
        if (!g.isFunction(e))throw new TypeError("Bind must be called on a function");
        var n = f.call(arguments, 2), r = function () {
            return C(e, r, t, this, n.concat(f.call(arguments)))
        };
        return r
    }, g.partial = function (e) {
        var t = f.call(arguments, 1), n = function () {
            for (var r = 0, i = t.length, s = Array(i), o = 0; i > o; o++)s[o] = t[o] === g ? arguments[r++] : t[o];
            for (; r < arguments.length;)s.push(arguments[r++]);
            return C(e, n, this, this, s)
        };
        return n
    }, g.bindAll = function (e) {
        var t, n, r = arguments.length;
        if (1 >= r)throw new Error("bindAll must be passed function names");
        for (t = 1; r > t; t++)n = arguments[t], e[n] = g.bind(e[n], e);
        return e
    }, g.memoize = function (e, t) {
        var n = function (r) {
            var i = n.cache, s = "" + (t ? t.apply(this, arguments) : r);
            return g.has(i, s) || (i[s] = e.apply(this, arguments)), i[s]
        };
        return n.cache = {}, n
    }, g.delay = function (e, t) {
        var n = f.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, g.defer = g.partial(g.delay, g, 1), g.throttle = function (e, t, n) {
        var r, i, s, o = null, u = 0;
        n || (n = {});
        var a = function () {
            u = n.leading === !1 ? 0 : g.now(), o = null, s = e.apply(r, i), o || (r = i = null)
        };
        return function () {
            var f = g.now();
            u || n.leading !== !1 || (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), u = f, s = e.apply(r, i), o || (r = i = null)) : o || n.trailing === !1 || (o = setTimeout(a, l)), s
        }
    }, g.debounce = function (e, t, n) {
        var r, i, s, o, u, a = function () {
            var f = g.now() - o;
            t > f && f >= 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)))
        };
        return function () {
            s = this, i = arguments, o = g.now();
            var f = n && !r;
            return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u
        }
    }, g.wrap = function (e, t) {
        return g.partial(t, e)
    }, g.negate = function (e) {
        return function () {
            return !e.apply(this, arguments)
        }
    }, g.compose = function () {
        var e = arguments, t = e.length - 1;
        return function () {
            for (var n = t, r = e[t].apply(this, arguments); n--;)r = e[n].call(this, r);
            return r
        }
    }, g.after = function (e, t) {
        return function () {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, g.before = function (e, t) {
        var n;
        return function () {
            return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
        }
    }, g.once = g.partial(g.before, 2);
    var k = !{toString: null}.propertyIsEnumerable("toString"), L = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    g.keys = function (e) {
        if (!g.isObject(e))return [];
        if (p)return p(e);
        var t = [];
        for (var r in e)g.has(e, r) && t.push(r);
        return k && n(e, t), t
    }, g.allKeys = function (e) {
        if (!g.isObject(e))return [];
        var t = [];
        for (var r in e)t.push(r);
        return k && n(e, t), t
    }, g.values = function (e) {
        for (var t = g.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++)r[i] = e[t[i]];
        return r
    }, g.mapObject = function (e, t, n) {
        t = b(t, n);
        for (var r, i = g.keys(e), s = i.length, o = {}, u = 0; s > u; u++)r = i[u], o[r] = t(e[r], r, e);
        return o
    }, g.pairs = function (e) {
        for (var t = g.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++)r[i] = [t[i], e[t[i]]];
        return r
    }, g.invert = function (e) {
        for (var t = {}, n = g.keys(e), r = 0, i = n.length; i > r; r++)t[e[n[r]]] = n[r];
        return t
    }, g.functions = g.methods = function (e) {
        var t = [];
        for (var n in e)g.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, g.extend = w(g.allKeys), g.extendOwn = g.assign = w(g.keys), g.findKey = function (e, t, n) {
        t = b(t, n);
        for (var r, i = g.keys(e), s = 0, o = i.length; o > s; s++)if (r = i[s], t(e[r], r, e))return r
    }, g.pick = function (e, t, n) {
        var r, i, s = {}, o = e;
        if (null == o)return s;
        g.isFunction(t) ? (i = g.allKeys(o), r = y(t, n)) : (i = N(arguments, !1, !1, 1), r = function (e, t, n) {
            return t in n
        }, o = Object(o));
        for (var u = 0, a = i.length; a > u; u++) {
            var f = i[u], l = o[f];
            r(l, f, o) && (s[f] = l)
        }
        return s
    }, g.omit = function (e, t, n) {
        if (g.isFunction(t))t = g.negate(t); else {
            var r = g.map(N(arguments, !1, !1, 1), String);
            t = function (e, t) {
                return !g.contains(r, t)
            }
        }
        return g.pick(e, t, n)
    }, g.defaults = w(g.allKeys, !0), g.clone = function (e) {
        return g.isObject(e) ? g.isArray(e) ? e.slice() : g.extend({}, e) : e
    }, g.tap = function (e, t) {
        return t(e), e
    }, g.isMatch = function (e, t) {
        var n = g.keys(t), r = n.length;
        if (null == e)return !r;
        for (var i = Object(e), s = 0; r > s; s++) {
            var o = n[s];
            if (t[o] !== i[o] || !(o in i))return !1
        }
        return !0
    };
    var A = function (e, t, n, r) {
        if (e === t)return 0 !== e || 1 / e === 1 / t;
        if (null == e || null == t)return e === t;
        e instanceof g && (e = e._wrapped), t instanceof g && (t = t._wrapped);
        var i = l.call(e);
        if (i !== l.call(t))return !1;
        switch (i) {
            case"[object RegExp]":
            case"[object String]":
                return "" + e == "" + t;
            case"[object Number]":
                return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
            case"[object Date]":
            case"[object Boolean]":
                return +e === +t
        }
        var s = "[object Array]" === i;
        if (!s) {
            if ("object" != typeof e || "object" != typeof t)return !1;
            var o = e.constructor, u = t.constructor;
            if (o !== u && !(g.isFunction(o) && o instanceof o && g.isFunction(u) && u instanceof u) && "constructor"in e && "constructor"in t)return !1
        }
        n = n || [], r = r || [];
        for (var a = n.length; a--;)if (n[a] === e)return r[a] === t;
        if (n.push(e), r.push(t), s) {
            if (a = e.length, a !== t.length)return !1;
            for (; a--;)if (!A(e[a], t[a], n, r))return !1
        } else {
            var f, c = g.keys(e);
            if (a = c.length, g.keys(t).length !== a)return !1;
            for (; a--;)if (f = c[a], !g.has(t, f) || !A(e[f], t[f], n, r))return !1
        }
        return n.pop(), r.pop(), !0
    };
    g.isEqual = function (e, t) {
        return A(e, t)
    }, g.isEmpty = function (e) {
        return null == e ? !0 : x(e) && (g.isArray(e) || g.isString(e) || g.isArguments(e)) ? 0 === e.length : 0 === g.keys(e).length
    }, g.isElement = function (e) {
        return !!e && 1 === e.nodeType
    }, g.isArray = h || function (e) {
            return "[object Array]" === l.call(e)
        }, g.isObject = function (e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, g.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
        g["is" + e] = function (t) {
            return l.call(t) === "[object " + e + "]"
        }
    }), g.isArguments(arguments) || (g.isArguments = function (e) {
        return g.has(e, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (g.isFunction = function (e) {
        return "function" == typeof e || !1
    }), g.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, g.isNaN = function (e) {
        return g.isNumber(e) && e !== +e
    }, g.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" === l.call(e)
    }, g.isNull = function (e) {
        return null === e
    }, g.isUndefined = function (e) {
        return e === void 0
    }, g.has = function (e, t) {
        return null != e && c.call(e, t)
    }, g.noConflict = function () {
        return r._ = i, this
    }, g.identity = function (e) {
        return e
    }, g.constant = function (e) {
        return function () {
            return e
        }
    }, g.noop = function () {
    }, g.property = function (e) {
        return function (t) {
            return null == t ? void 0 : t[e]
        }
    }, g.propertyOf = function (e) {
        return null == e ? function () {
        } : function (t) {
            return e[t]
        }
    }, g.matcher = g.matches = function (e) {
        return e = g.extendOwn({}, e), function (t) {
            return g.isMatch(t, e)
        }
    }, g.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        t = y(t, n, 1);
        for (var i = 0; e > i; i++)r[i] = t(i);
        return r
    }, g.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, g.now = Date.now || function () {
            return (new Date).getTime()
        };
    var O = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, M = g.invert(O), _ = function (e) {
        var t = function (t) {
            return e[t]
        }, n = "(?:" + g.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
        return function (e) {
            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
        }
    };
    g.escape = _(O), g.unescape = _(M), g.result = function (e, t, n) {
        var r = null == e ? void 0 : e[t];
        return r === void 0 && (r = n), g.isFunction(r) ? r.call(e) : r
    };
    var D = 0;
    g.uniqueId = function (e) {
        var t = ++D + "";
        return e ? e + t : t
    }, g.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var P = /(.)^/, H = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, B = /\\|'|\r|\n|\u2028|\u2029/g, j = function (e) {
        return "\\" + H[e]
    };
    g.template = function (e, t, n) {
        !t && n && (t = n), t = g.defaults({}, t, g.templateSettings);
        var r = RegExp([(t.escape || P).source, (t.interpolate || P).source, (t.evaluate || P).source].join("|") + "|$", "g"), i = 0, s = "__p+='";
        e.replace(r, function (t, n, r, o, u) {
            return s += e.slice(i, u).replace(B, j), i = u + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t
        }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", s)
        } catch (u) {
            throw u.source = s, u
        }
        var a = function (e) {
            return o.call(this, e, g)
        }, f = t.variable || "obj";
        return a.source = "function(" + f + "){\n" + s + "}", a
    }, g.chain = function (e) {
        var t = g(e);
        return t._chain = !0, t
    };
    var F = function (e, t) {
        return e._chain ? g(t).chain() : t
    };
    g.mixin = function (e) {
        g.each(g.functions(e), function (t) {
            var n = g[t] = e[t];
            g.prototype[t] = function () {
                var e = [this._wrapped];
                return a.apply(e, arguments), F(this, n.apply(g, e))
            }
        })
    }, g.mixin(g), g.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = s[e];
        g.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], F(this, n)
        }
    }), g.each(["concat", "join", "slice"], function (e) {
        var t = s[e];
        g.prototype[e] = function () {
            return F(this, t.apply(this._wrapped, arguments))
        }
    }), g.prototype.value = function () {
        return this._wrapped
    }, g.prototype.valueOf = g.prototype.toJSON = g.prototype.value, g.prototype.toString = function () {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return g
    })
}.call(this), !function (e, t, n, r) {
    "use strict";
    function i(e, t, n) {
        return setTimeout(l(e, n), t)
    }

    function s(e, t, n) {
        return Array.isArray(e) ? (o(e, n[t], n), !0) : !1
    }

    function o(e, t, n) {
        var i;
        if (e)if (e.forEach)e.forEach(t, n); else if (e.length !== r)for (i = 0; i < e.length;)t.call(n, e[i], i, e), i++; else for (i in e)e.hasOwnProperty(i) && t.call(n, e[i], i, e)
    }

    function u(e, t, n) {
        for (var i = Object.keys(t), s = 0; s < i.length;)(!n || n && e[i[s]] === r) && (e[i[s]] = t[i[s]]), s++;
        return e
    }

    function a(e, t) {
        return u(e, t, !0)
    }

    function f(e, t, n) {
        var r, i = t.prototype;
        r = e.prototype = Object.create(i), r.constructor = e, r._super = i, n && u(r, n)
    }

    function l(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function c(e, t) {
        return typeof e == lt ? e.apply(t ? t[0] || r : r, t) : e
    }

    function h(e, t) {
        return e === r ? t : e
    }

    function p(e, t, n) {
        o(g(t), function (t) {
            e.addEventListener(t, n, !1)
        })
    }

    function d(e, t, n) {
        o(g(t), function (t) {
            e.removeEventListener(t, n, !1)
        })
    }

    function v(e, t) {
        for (; e;) {
            if (e == t)return !0;
            e = e.parentNode
        }
        return !1
    }

    function m(e, t) {
        return e.indexOf(t) > -1
    }

    function g(e) {
        return e.trim().split(/\s+/g)
    }

    function y(e, t, n) {
        if (e.indexOf && !n)return e.indexOf(t);
        for (var r = 0; r < e.length;) {
            if (n && e[r][n] == t || !n && e[r] === t)return r;
            r++
        }
        return -1
    }

    function b(e) {
        return Array.prototype.slice.call(e, 0)
    }

    function w(e, t, n) {
        for (var r = [], i = [], s = 0; s < e.length;) {
            var o = t ? e[s][t] : e[s];
            y(i, o) < 0 && r.push(e[s]), i[s] = o, s++
        }
        return n && (r = t ? r.sort(function (e, n) {
            return e[t] > n[t]
        }) : r.sort()), r
    }

    function E(e, t) {
        for (var n, i, s = t[0].toUpperCase() + t.slice(1), o = 0; o < at.length;) {
            if (n = at[o], i = n ? n + s : t, i in e)return i;
            o++
        }
        return r
    }

    function S() {
        return dt++
    }

    function x(e) {
        var t = e.ownerDocument;
        return t.defaultView || t.parentWindow
    }

    function T(e, t) {
        var n = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
            c(e.options.enable, [e]) && n.handler(t)
        }, this.init()
    }

    function N(e) {
        var t, n = e.options.inputClass;
        return new (t = n ? n : gt ? I : yt ? U : mt ? W : F)(e, C)
    }

    function C(e, t, n) {
        var r = n.pointers.length, i = n.changedPointers.length, s = t & Tt && r - i === 0, o = t & (Ct | kt) && r - i === 0;
        n.isFirst = !!s, n.isFinal = !!o, s && (e.session = {}), n.eventType = t, k(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
    }

    function k(e, t) {
        var n = e.session, r = t.pointers, i = r.length;
        n.firstInput || (n.firstInput = O(t)), i > 1 && !n.firstMultiple ? n.firstMultiple = O(t) : 1 === i && (n.firstMultiple = !1);
        var s = n.firstInput, o = n.firstMultiple, u = o ? o.center : s.center, a = t.center = M(r);
        t.timeStamp = pt(), t.deltaTime = t.timeStamp - s.timeStamp, t.angle = H(u, a), t.distance = P(u, a), L(n, t), t.offsetDirection = D(t.deltaX, t.deltaY), t.scale = o ? j(o.pointers, r) : 1, t.rotation = o ? B(o.pointers, r) : 0, A(n, t);
        var f = e.element;
        v(t.srcEvent.target, f) && (f = t.srcEvent.target), t.target = f
    }

    function L(e, t) {
        var n = t.center, r = e.offsetDelta || {}, i = e.prevDelta || {}, s = e.prevInput || {};
        (t.eventType === Tt || s.eventType === Ct) && (i = e.prevDelta = {
            x: s.deltaX || 0,
            y: s.deltaY || 0
        }, r = e.offsetDelta = {x: n.x, y: n.y}), t.deltaX = i.x + (n.x - r.x), t.deltaY = i.y + (n.y - r.y)
    }

    function A(e, t) {
        var n, i, s, o, u = e.lastInterval || t, a = t.timeStamp - u.timeStamp;
        if (t.eventType != kt && (a > xt || u.velocity === r)) {
            var f = u.deltaX - t.deltaX, l = u.deltaY - t.deltaY, c = _(a, f, l);
            i = c.x, s = c.y, n = ht(c.x) > ht(c.y) ? c.x : c.y, o = D(f, l), e.lastInterval = t
        } else n = u.velocity, i = u.velocityX, s = u.velocityY, o = u.direction;
        t.velocity = n, t.velocityX = i, t.velocityY = s, t.direction = o
    }

    function O(e) {
        for (var t = [], n = 0; n < e.pointers.length;)t[n] = {
            clientX: ct(e.pointers[n].clientX),
            clientY: ct(e.pointers[n].clientY)
        }, n++;
        return {timeStamp: pt(), pointers: t, center: M(t), deltaX: e.deltaX, deltaY: e.deltaY}
    }

    function M(e) {
        var t = e.length;
        if (1 === t)return {x: ct(e[0].clientX), y: ct(e[0].clientY)};
        for (var n = 0, r = 0, i = 0; t > i;)n += e[i].clientX, r += e[i].clientY, i++;
        return {x: ct(n / t), y: ct(r / t)}
    }

    function _(e, t, n) {
        return {x: t / e || 0, y: n / e || 0}
    }

    function D(e, t) {
        return e === t ? Lt : ht(e) >= ht(t) ? e > 0 ? At : Ot : t > 0 ? Mt : _t
    }

    function P(e, t, n) {
        n || (n = Bt);
        var r = t[n[0]] - e[n[0]], i = t[n[1]] - e[n[1]];
        return Math.sqrt(r * r + i * i)
    }

    function H(e, t, n) {
        n || (n = Bt);
        var r = t[n[0]] - e[n[0]], i = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(i, r) / Math.PI
    }

    function B(e, t) {
        return H(t[1], t[0], jt) - H(e[1], e[0], jt)
    }

    function j(e, t) {
        return P(t[0], t[1], jt) / P(e[0], e[1], jt)
    }

    function F() {
        this.evEl = It, this.evWin = qt, this.allow = !0, this.pressed = !1, T.apply(this, arguments)
    }

    function I() {
        this.evEl = zt, this.evWin = Wt, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function q() {
        this.evTarget = Vt, this.evWin = $t, this.started = !1, T.apply(this, arguments)
    }

    function R(e, t) {
        var n = b(e.touches), r = b(e.changedTouches);
        return t & (Ct | kt) && (n = w(n.concat(r), "identifier", !0)), [n, r]
    }

    function U() {
        this.evTarget = Kt, this.targetIds = {}, T.apply(this, arguments)
    }

    function z(e, t) {
        var n = b(e.touches), r = this.targetIds;
        if (t & (Tt | Nt) && 1 === n.length)return r[n[0].identifier] = !0, [n, n];
        var i, s, o = b(e.changedTouches), u = [], a = this.target;
        if (s = n.filter(function (e) {
                return v(e.target, a)
            }), t === Tt)for (i = 0; i < s.length;)r[s[i].identifier] = !0, i++;
        for (i = 0; i < o.length;)r[o[i].identifier] && u.push(o[i]), t & (Ct | kt) && delete r[o[i].identifier], i++;
        return u.length ? [w(s.concat(u), "identifier", !0), u] : void 0
    }

    function W() {
        T.apply(this, arguments);
        var e = l(this.handler, this);
        this.touch = new U(this.manager, e), this.mouse = new F(this.manager, e)
    }

    function X(e, t) {
        this.manager = e, this.set(t)
    }

    function V(e) {
        if (m(e, tn))return tn;
        var t = m(e, nn), n = m(e, rn);
        return t && n ? nn + " " + rn : t || n ? t ? nn : rn : m(e, en) ? en : Zt
    }

    function $(e) {
        this.id = S(), this.manager = null, this.options = a(e || {}, this.defaults), this.options.enable = h(this.options.enable, !0), this.state = sn, this.simultaneous = {}, this.requireFail = []
    }

    function J(e) {
        return e & ln ? "cancel" : e & an ? "end" : e & un ? "move" : e & on ? "start" : ""
    }

    function K(e) {
        return e == _t ? "down" : e == Mt ? "up" : e == At ? "left" : e == Ot ? "right" : ""
    }

    function Q(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }

    function G() {
        $.apply(this, arguments)
    }

    function Y() {
        G.apply(this, arguments), this.pX = null, this.pY = null
    }

    function Z() {
        G.apply(this, arguments)
    }

    function et() {
        $.apply(this, arguments), this._timer = null, this._input = null
    }

    function tt() {
        G.apply(this, arguments)
    }

    function nt() {
        G.apply(this, arguments)
    }

    function rt() {
        $.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function it(e, t) {
        return t = t || {}, t.recognizers = h(t.recognizers, it.defaults.preset), new st(e, t)
    }

    function st(e, t) {
        t = t || {}, this.options = a(t, it.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = N(this), this.touchAction = new X(this, this.options.touchAction), ot(this, !0), o(t.recognizers, function (e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
        }, this)
    }

    function ot(e, t) {
        var n = e.element;
        o(e.options.cssProps, function (e, r) {
            n.style[E(n.style, r)] = t ? e : ""
        })
    }

    function ut(e, n) {
        var r = t.createEvent("Event");
        r.initEvent(e, !0, !0), r.gesture = n, n.target.dispatchEvent(r)
    }

    var at = ["", "webkit", "moz", "MS", "ms", "o"], ft = t.createElement("div"), lt = "function", ct = Math.round, ht = Math.abs, pt = Date.now, dt = 1, vt = /mobile|tablet|ip(ad|hone|od)|android/i, mt = "ontouchstart"in e, gt = E(e, "PointerEvent") !== r, yt = mt && vt.test(navigator.userAgent), bt = "touch", wt = "pen", Et = "mouse", St = "kinect", xt = 25, Tt = 1, Nt = 2, Ct = 4, kt = 8, Lt = 1, At = 2, Ot = 4, Mt = 8, _t = 16, Dt = At | Ot, Pt = Mt | _t, Ht = Dt | Pt, Bt = ["x", "y"], jt = ["clientX", "clientY"];
    T.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(x(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(x(this.element), this.evWin, this.domHandler)
        }
    };
    var Ft = {mousedown: Tt, mousemove: Nt, mouseup: Ct}, It = "mousedown", qt = "mousemove mouseup";
    f(F, T, {
        handler: function (e) {
            var t = Ft[e.type];
            t & Tt && 0 === e.button && (this.pressed = !0), t & Nt && 1 !== e.which && (t = Ct), this.pressed && this.allow && (t & Ct && (this.pressed = !1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: Et,
                srcEvent: e
            }))
        }
    });
    var Rt = {pointerdown: Tt, pointermove: Nt, pointerup: Ct, pointercancel: kt, pointerout: kt}, Ut = {
        2: bt,
        3: wt,
        4: Et,
        5: St
    }, zt = "pointerdown", Wt = "pointermove pointerup pointercancel";
    e.MSPointerEvent && (zt = "MSPointerDown", Wt = "MSPointerMove MSPointerUp MSPointerCancel"), f(I, T, {
        handler: function (e) {
            var t = this.store, n = !1, r = e.type.toLowerCase().replace("ms", ""), i = Rt[r], s = Ut[e.pointerType] || e.pointerType, o = s == bt, u = y(t, e.pointerId, "pointerId");
            i & Tt && (0 === e.button || o) ? 0 > u && (t.push(e), u = t.length - 1) : i & (Ct | kt) && (n = !0), 0 > u || (t[u] = e, this.callback(this.manager, i, {
                pointers: t,
                changedPointers: [e],
                pointerType: s,
                srcEvent: e
            }), n && t.splice(u, 1))
        }
    });
    var Xt = {
        touchstart: Tt,
        touchmove: Nt,
        touchend: Ct,
        touchcancel: kt
    }, Vt = "touchstart", $t = "touchstart touchmove touchend touchcancel";
    f(q, T, {
        handler: function (e) {
            var t = Xt[e.type];
            if (t === Tt && (this.started = !0), this.started) {
                var n = R.call(this, e, t);
                t & (Ct | kt) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: bt,
                    srcEvent: e
                })
            }
        }
    });
    var Jt = {
        touchstart: Tt,
        touchmove: Nt,
        touchend: Ct,
        touchcancel: kt
    }, Kt = "touchstart touchmove touchend touchcancel";
    f(U, T, {
        handler: function (e) {
            var t = Jt[e.type], n = z.call(this, e, t);
            n && this.callback(this.manager, t, {pointers: n[0], changedPointers: n[1], pointerType: bt, srcEvent: e})
        }
    }), f(W, T, {
        handler: function (e, t, n) {
            var r = n.pointerType == bt, i = n.pointerType == Et;
            if (r)this.mouse.allow = !1; else if (i && !this.mouse.allow)return;
            t & (Ct | kt) && (this.mouse.allow = !0), this.callback(e, t, n)
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Qt = E(ft.style, "touchAction"), Gt = Qt !== r, Yt = "compute", Zt = "auto", en = "manipulation", tn = "none", nn = "pan-x", rn = "pan-y";
    X.prototype = {
        set: function (e) {
            e == Yt && (e = this.compute()), Gt && (this.manager.element.style[Qt] = e), this.actions = e.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var e = [];
            return o(this.manager.recognizers, function (t) {
                c(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }), V(e.join(" "))
        }, preventDefaults: function (e) {
            if (!Gt) {
                var t = e.srcEvent, n = e.offsetDirection;
                if (this.manager.session.prevented)return void t.preventDefault();
                var r = this.actions, i = m(r, tn), s = m(r, rn), o = m(r, nn);
                return i || s && n & Dt || o && n & Pt ? this.preventSrc(t) : void 0
            }
        }, preventSrc: function (e) {
            this.manager.session.prevented = !0, e.preventDefault()
        }
    };
    var sn = 1, on = 2, un = 4, an = 8, fn = an, ln = 16, cn = 32;
    $.prototype = {
        defaults: {}, set: function (e) {
            return u(this.options, e), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (e) {
            if (s(e, "recognizeWith", this))return this;
            var t = this.simultaneous;
            return e = Q(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
        }, dropRecognizeWith: function (e) {
            return s(e, "dropRecognizeWith", this) ? this : (e = Q(e, this), delete this.simultaneous[e.id], this)
        }, requireFailure: function (e) {
            if (s(e, "requireFailure", this))return this;
            var t = this.requireFail;
            return e = Q(e, this), -1 === y(t, e) && (t.push(e), e.requireFailure(this)), this
        }, dropRequireFailure: function (e) {
            if (s(e, "dropRequireFailure", this))return this;
            e = Q(e, this);
            var t = y(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (e) {
            return !!this.simultaneous[e.id]
        }, emit: function (e) {
            function t(t) {
                n.manager.emit(n.options.event + (t ? J(r) : ""), e)
            }

            var n = this, r = this.state;
            an > r && t(!0), t(), r >= an && t(!0)
        }, tryEmit: function (e) {
            return this.canEmit() ? this.emit(e) : void (this.state = cn)
        }, canEmit: function () {
            for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (cn | sn)))return !1;
                e++
            }
            return !0
        }, recognize: function (e) {
            var t = u({}, e);
            return c(this.options.enable, [this, t]) ? (this.state & (fn | ln | cn) && (this.state = sn), this.state = this.process(t), void (this.state & (on | un | an | ln) && this.tryEmit(t))) : (this.reset(), void (this.state = cn))
        }, process: function () {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, f(G, $, {
        defaults: {pointers: 1}, attrTest: function (e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        }, process: function (e) {
            var t = this.state, n = e.eventType, r = t & (on | un), i = this.attrTest(e);
            return r && (n & kt || !i) ? t | ln : r || i ? n & Ct ? t | an : t & on ? t | un : on : cn
        }
    }), f(Y, G, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Ht}, getTouchAction: function () {
            var e = this.options.direction, t = [];
            return e & Dt && t.push(rn), e & Pt && t.push(nn), t
        }, directionTest: function (e) {
            var t = this.options, n = !0, r = e.distance, i = e.direction, s = e.deltaX, o = e.deltaY;
            return i & t.direction || (t.direction & Dt ? (i = 0 === s ? Lt : 0 > s ? At : Ot, n = s != this.pX, r = Math.abs(e.deltaX)) : (i = 0 === o ? Lt : 0 > o ? Mt : _t, n = o != this.pY, r = Math.abs(e.deltaY))), e.direction = i, n && r > t.threshold && i & t.direction
        }, attrTest: function (e) {
            return G.prototype.attrTest.call(this, e) && (this.state & on || !(this.state & on) && this.directionTest(e))
        }, emit: function (e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = K(e.direction);
            t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
        }
    }), f(Z, G, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [tn]
        }, attrTest: function (e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & on)
        }, emit: function (e) {
            if (this._super.emit.call(this, e), 1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + t, e)
            }
        }
    }), f(et, $, {
        defaults: {event: "press", pointers: 1, time: 500, threshold: 5}, getTouchAction: function () {
            return [Zt]
        }, process: function (e) {
            var t = this.options, n = e.pointers.length === t.pointers, r = e.distance < t.threshold, s = e.deltaTime > t.time;
            if (this._input = e, !r || !n || e.eventType & (Ct | kt) && !s)this.reset(); else if (e.eventType & Tt)this.reset(), this._timer = i(function () {
                this.state = fn, this.tryEmit()
            }, t.time, this); else if (e.eventType & Ct)return fn;
            return cn
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (e) {
            this.state === fn && (e && e.eventType & Ct ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = pt(), this.manager.emit(this.options.event, this._input)))
        }
    }), f(tt, G, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [tn]
        }, attrTest: function (e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & on)
        }
    }), f(nt, G, {
        defaults: {event: "swipe", threshold: 10, velocity: .65, direction: Dt | Pt, pointers: 1},
        getTouchAction: function () {
            return Y.prototype.getTouchAction.call(this)
        },
        attrTest: function (e) {
            var t, n = this.options.direction;
            return n & (Dt | Pt) ? t = e.velocity : n & Dt ? t = e.velocityX : n & Pt && (t = e.velocityY), this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && ht(t) > this.options.velocity && e.eventType & Ct
        },
        emit: function (e) {
            var t = K(e.direction);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
    }), f(rt, $, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        }, getTouchAction: function () {
            return [en]
        }, process: function (e) {
            var t = this.options, n = e.pointers.length === t.pointers, r = e.distance < t.threshold, s = e.deltaTime < t.time;
            if (this.reset(), e.eventType & Tt && 0 === this.count)return this.failTimeout();
            if (r && s && n) {
                if (e.eventType != Ct)return this.failTimeout();
                var o = this.pTime ? e.timeStamp - this.pTime < t.interval : !0, u = !this.pCenter || P(this.pCenter, e.center) < t.posThreshold;
                this.pTime = e.timeStamp, this.pCenter = e.center, u && o ? this.count += 1 : this.count = 1, this._input = e;
                var a = this.count % t.taps;
                if (0 === a)return this.hasRequireFailures() ? (this._timer = i(function () {
                    this.state = fn, this.tryEmit()
                }, t.interval, this), on) : fn
            }
            return cn
        }, failTimeout: function () {
            return this._timer = i(function () {
                this.state = cn
            }, this.options.interval, this), cn
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == fn && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), it.VERSION = "2.0.4", it.defaults = {
        domEvents: !1,
        touchAction: Yt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[tt, {enable: !1}], [Z, {enable: !1}, ["rotate"]], [nt, {direction: Dt}], [Y, {direction: Dt}, ["swipe"]], [rt], [rt, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [et]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var hn = 1, pn = 2;
    st.prototype = {
        set: function (e) {
            return u(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
        }, stop: function (e) {
            this.session.stopped = e ? pn : hn
        }, recognize: function (e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n, r = this.recognizers, i = t.curRecognizer;
                (!i || i && i.state & fn) && (i = t.curRecognizer = null);
                for (var s = 0; s < r.length;)n = r[s], t.stopped === pn || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(e), !i && n.state & (on | un | an) && (i = t.curRecognizer = n), s++
            }
        }, get: function (e) {
            if (e instanceof $)return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)if (t[n].options.event == e)return t[n];
            return null
        }, add: function (e) {
            if (s(e, "add", this))return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
        }, remove: function (e) {
            if (s(e, "remove", this))return this;
            var t = this.recognizers;
            return e = this.get(e), t.splice(y(t, e), 1), this.touchAction.update(), this
        }, on: function (e, t) {
            var n = this.handlers;
            return o(g(e), function (e) {
                n[e] = n[e] || [], n[e].push(t)
            }), this
        }, off: function (e, t) {
            var n = this.handlers;
            return o(g(e), function (e) {
                t ? n[e].splice(y(n[e], t), 1) : delete n[e]
            }), this
        }, emit: function (e, t) {
            this.options.domEvents && ut(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                t.type = e, t.preventDefault = function () {
                    t.srcEvent.preventDefault()
                };
                for (var r = 0; r < n.length;)n[r](t), r++
            }
        }, destroy: function () {
            this.element && ot(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, u(it, {
        INPUT_START: Tt,
        INPUT_MOVE: Nt,
        INPUT_END: Ct,
        INPUT_CANCEL: kt,
        STATE_POSSIBLE: sn,
        STATE_BEGAN: on,
        STATE_CHANGED: un,
        STATE_ENDED: an,
        STATE_RECOGNIZED: fn,
        STATE_CANCELLED: ln,
        STATE_FAILED: cn,
        DIRECTION_NONE: Lt,
        DIRECTION_LEFT: At,
        DIRECTION_RIGHT: Ot,
        DIRECTION_UP: Mt,
        DIRECTION_DOWN: _t,
        DIRECTION_HORIZONTAL: Dt,
        DIRECTION_VERTICAL: Pt,
        DIRECTION_ALL: Ht,
        Manager: st,
        Input: T,
        TouchAction: X,
        TouchInput: U,
        MouseInput: F,
        PointerEventInput: I,
        TouchMouseInput: W,
        SingleTouchInput: q,
        Recognizer: $,
        AttrRecognizer: G,
        Tap: rt,
        Pan: Y,
        Swipe: nt,
        Pinch: Z,
        Rotate: tt,
        Press: et,
        on: p,
        off: d,
        each: o,
        merge: a,
        extend: u,
        inherit: f,
        bindFn: l,
        prefixed: E
    }), typeof define == lt && define.amd ? define("hammer", [], function () {
        return it
    }) : "undefined" != typeof module && module.exports ? module.exports = it : e[n] = it
}(window, document, "Hammer"), window.Modernizr = function (e, t, n) {
    function r(e) {
        g.cssText = e
    }

    function i(e, t) {
        return r(E.join(e + ";") + (t || ""))
    }

    function s(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!o(i, "-") && g[i] !== n)return t == "pfx" ? i : !0
        }
        return !1
    }

    function a(e, t, r) {
        for (var i in e) {
            var o = t[e[i]];
            if (o !== n)return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
        }
        return !1
    }

    function f(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + x.join(r + " ") + r).split(" ");
        return s(t, "string") || s(t, "undefined") ? u(i, t) : (i = (e + " " + T.join(r + " ") + r).split(" "), a(i, t, n))
    }

    function l() {
        h.input = function (n) {
            for (var r = 0, i = n.length; r < i; r++)L[n[r]] = n[r]in y;
            return L.list && (L.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), L
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function (e) {
            for (var r = 0, i, s, o, u = e.length; r < u; r++)y.setAttribute("type", s = e[r]), i = y.type !== "text", i && (y.value = b, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && y.style.WebkitAppearance !== n ? (d.appendChild(y), o = t.defaultView, i = o.getComputedStyle && o.getComputedStyle(y, null).WebkitAppearance !== "textfield" && y.offsetHeight !== 0, d.removeChild(y)) : /^(search|tel)$/.test(s) || (/^(url|email)$/.test(s) ? i = y.checkValidity && y.checkValidity() === !1 : i = y.value != b)), k[e[r]] = !!i;
            return k
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var c = "2.8.3", h = {}, p = !0, d = t.documentElement, v = "modernizr", m = t.createElement(v), g = m.style, y = t.createElement("input"), b = ":)", w = {}.toString, E = " -webkit- -moz- -o- -ms- ".split(" "), S = "Webkit Moz O ms", x = S.split(" "), T = S.toLowerCase().split(" "), N = {svg: "http://www.w3.org/2000/svg"}, C = {}, k = {}, L = {}, A = [], O = A.slice, M, _ = function (e, n, r, i) {
        var s, o, u, a, f = t.createElement("div"), l = t.body, c = l || t.createElement("body");
        if (parseInt(r, 10))while (r--)u = t.createElement("div"), u.id = i ? i[r] : v + (r + 1), f.appendChild(u);
        return s = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), f.id = v, (l ? f : c).innerHTML += s, c.appendChild(f), l || (c.style.background = "", c.style.overflow = "hidden", a = d.style.overflow, d.style.overflow = "hidden", d.appendChild(c)), o = n(f, e), l ? f.parentNode.removeChild(f) : (c.parentNode.removeChild(c), d.style.overflow = a), !!o
    }, D = function (t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n)return n(t) && n(t).matches || !1;
        var r;
        return _("@media " + t + " { #" + v + " { position: absolute; } }", function (t) {
            r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
        }), r
    }, P = function () {
        function e(e, i) {
            i = i || t.createElement(r[e] || "div"), e = "on" + e;
            var o = e in i;
            return o || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), o = s(i[e], "function"), s(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, o
        }

        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), H = {}.hasOwnProperty, B;
    !s(H, "undefined") && !s(H.call, "undefined") ? B = function (e, t) {
        return H.call(e, t)
    } : B = function (e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if (typeof t != "function")throw new TypeError;
        var n = O.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var i = function () {
                };
                i.prototype = t.prototype;
                var s = new i, o = t.apply(s, n.concat(O.call(arguments)));
                return Object(o) === o ? o : s
            }
            return t.apply(e, n.concat(O.call(arguments)))
        };
        return r
    }), C.flexbox = function () {
        return f("flexWrap")
    }, C.canvas = function () {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
    }, C.canvastext = function () {
        return !!h.canvas && !!s(t.createElement("canvas").getContext("2d").fillText, "function")
    }, C.webgl = function () {
        return !!e.WebGLRenderingContext
    }, C.touch = function () {
        var n;
        return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : _(["@media (", E.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = e.offsetTop === 9
        }), n
    }, C.geolocation = function () {
        return "geolocation"in navigator
    }, C.postmessage = function () {
        return !!e.postMessage
    }, C.websqldatabase = function () {
        return !!e.openDatabase
    }, C.indexedDB = function () {
        return !!f("indexedDB", e)
    }, C.hashchange = function () {
        return P("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, C.history = function () {
        return !!e.history && !!history.pushState
    }, C.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable"in e || "ondragstart"in e && "ondrop"in e
    }, C.websockets = function () {
        return "WebSocket"in e || "MozWebSocket"in e
    }, C.rgba = function () {
        return r("background-color:rgba(150,255,150,.5)"), o(g.backgroundColor, "rgba")
    }, C.hsla = function () {
        return r("background-color:hsla(120,40%,100%,.5)"), o(g.backgroundColor, "rgba") || o(g.backgroundColor, "hsla")
    }, C.multiplebgs = function () {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
    }, C.backgroundsize = function () {
        return f("backgroundSize")
    }, C.borderimage = function () {
        return f("borderImage")
    }, C.borderradius = function () {
        return f("borderRadius")
    }, C.boxshadow = function () {
        return f("boxShadow")
    }, C.textshadow = function () {
        return t.createElement("div").style.textShadow === ""
    }, C.opacity = function () {
        return i("opacity:.55"), /^0.55$/.test(g.opacity)
    }, C.cssanimations = function () {
        return f("animationName")
    }, C.csscolumns = function () {
        return f("columnCount")
    }, C.cssgradients = function () {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + E.join(n + e)).slice(0, -e.length)), o(g.backgroundImage, "gradient")
    }, C.cssreflections = function () {
        return f("boxReflect")
    }, C.csstransforms = function () {
        return !!f("transform")
    }, C.csstransforms3d = function () {
        var e = !!f("perspective");
        return e && "webkitPerspective"in d.style && _("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
            e = t.offsetLeft === 9 && t.offsetHeight === 3
        }), e
    }, C.csstransitions = function () {
        return f("transition")
    }, C.fontface = function () {
        var e;
        return _('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
            var i = t.getElementById("smodernizr"), s = i.sheet || i.styleSheet, o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
            e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
        }), e
    }, C.generatedcontent = function () {
        var e;
        return _(["#", v, "{font:0/0 a}#", v, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    }, C.video = function () {
        var e = t.createElement("video"), n = !1;
        try {
            if (n = !!e.canPlayType)n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (r) {
        }
        return n
    }, C.audio = function () {
        var e = t.createElement("audio"), n = !1;
        try {
            if (n = !!e.canPlayType)n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (r) {
        }
        return n
    }, C.localstorage = function () {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, C.sessionstorage = function () {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, C.webworkers = function () {
        return !!e.Worker
    }, C.applicationcache = function () {
        return !!e.applicationCache
    }, C.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
    }, C.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
    }, C.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
    }, C.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
    };
    for (var j in C)B(C, j) && (M = j.toLowerCase(), h[M] = C[j](), A.push((h[M] ? "" : "no-") + M));
    return h.input || l(), h.addTest = function (e, t) {
        if (typeof e == "object")for (var r in e)B(e, r) && h.addTest(r, e[r]); else {
            e = e.toLowerCase();
            if (h[e] !== n)return h;
            t = typeof t == "function" ? t() : t, typeof p != "undefined" && p && (d.className += " " + (t ? "" : "no-") + e), h[e] = t
        }
        return h
    }, r(""), m = y = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = y.elements;
            return typeof e == "string" ? e.split(" ") : e
        }

        function i(e) {
            var t = m[e[d]];
            return t || (t = {}, v++, e[d] = v, m[v] = t), t
        }

        function s(e, n, r) {
            n || (n = t);
            if (g)return n.createElement(e);
            r || (r = i(n));
            var s;
            return r.cache[e] ? s = r.cache[e].cloneNode() : h.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !c.test(e) && !s.tagUrn ? r.frag.appendChild(s) : s
        }

        function o(e, n) {
            e || (e = t);
            if (g)return e.createDocumentFragment();
            n = n || i(e);
            var s = n.frag.cloneNode(), o = 0, u = r(), a = u.length;
            for (; o < a; o++)s.createElement(u[o]);
            return s
        }

        function u(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return y.shivMethods ? s(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function (e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(y, t.frag)
        }

        function a(e) {
            e || (e = t);
            var r = i(e);
            return y.shivCSS && !p && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), g || u(e, r), e
        }

        var f = "3.7.0", l = e.html5 || {}, c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, p, d = "_html5shiv", v = 0, m = {}, g;
        (function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", p = "hidden"in e, g = e.childNodes.length == 1 || function () {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                    }()
            } catch (n) {
                p = !0, g = !0
            }
        })();
        var y = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: f,
            shivCSS: l.shivCSS !== !1,
            supportsUnknownElements: g,
            shivMethods: l.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: s,
            createDocumentFragment: o
        };
        e.html5 = y, a(t)
    }(this, t), h._version = c, h._prefixes = E, h._domPrefixes = T, h._cssomPrefixes = x, h.mq = D, h.hasEvent = P, h.testProp = function (e) {
        return u([e])
    }, h.testAllProps = f, h.testStyles = _, h.prefixed = function (e, t, n) {
        return t ? f(e, t, n) : f(e, "pfx")
    }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + A.join(" ") : ""), h
}(this, this.document), function (e, t, n) {
    function r(e) {
        return "[object Function]" == d.call(e)
    }

    function i(e) {
        return "string" == typeof e
    }

    function s() {
    }

    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function u() {
        var e = v.shift();
        m = 1, e ? e.t ? h(function () {
            ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), u()) : m = 0
    }

    function a(e, n, r, i, s, a, f) {
        function l(t) {
            if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                "img" != e && h(function () {
                    b.removeChild(c)
                }, 50);
                for (var r in T[n])T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }

        var f = f || k.errorTimeout, c = t.createElement(e), d = 0, g = 0, w = {t: r, s: n, e: s, a: a, x: f};
        1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function () {
            l.call(this, g)
        }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
    }

    function f(e, t, n, r, s) {
        return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
    }

    function l() {
        var e = k;
        return e.loader = {load: f, i: 0}, e
    }

    var c = t.documentElement, h = e.setTimeout, p = t.getElementsByTagName("script")[0], d = {}.toString, v = [], m = 0, g = "MozAppearance"in c.style, y = g && !!t.createRange().compareNode, b = y ? c : p.parentNode, c = e.opera && "[object Opera]" == d.call(e.opera), c = !!t.attachEvent && !c, w = g ? "object" : c ? "script" : "img", E = c ? "script" : w, S = Array.isArray || function (e) {
            return "[object Array]" == d.call(e)
        }, x = [], T = {}, N = {
        timeout: function (e, t) {
            return t.length && (e.timeout = t[0]), e
        }
    }, C, k;
    k = function (e) {
        function t(e) {
            var e = e.split("!"), t = x.length, n = e.pop(), r = e.length, n = {
                url: n,
                origUrl: n,
                prefixes: e
            }, i, s, o;
            for (s = 0; s < r; s++)o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
            for (s = 0; s < t; s++)n = x[s](n);
            return n
        }

        function o(e, i, s, o, u) {
            var a = t(e), f = a.autoCallback;
            a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function () {
                l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
            })))
        }

        function u(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e))n || (f = function () {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                    }), o(e, f, t, 0, u); else if (Object(e) === e)for (p in h = function () {
                        var t = 0, n;
                        for (n in e)e.hasOwnProperty(n) && t++;
                        return t
                    }(), e)e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function () {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                    } : f[p] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), c()
                        }
                    }(l[p])), o(e[p], f, t, p, u))
                } else!n && c()
            }

            var u = !!e.test, a = e.load || e.both, f = e.callback || s, l = f, c = e.complete || s, h, p;
            n(u ? e.yep : e.nope, !!a), a && n(a)
        }

        var a, f, c = this.yepnope.loader;
        if (i(e))o(e, 0, c, 0); else if (S(e))for (a = 0; a < e.length; a++)f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c); else Object(e) === e && u(e, c)
    }, k.addPrefix = function (e, t) {
        N[e] = t
    }, k.addFilter = function (e) {
        x.push(e)
    }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function () {
        t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
    }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function (e, n, r, i, a, f) {
        var l = t.createElement("script"), c, d, i = i || k.errorTimeout;
        l.src = e;
        for (d in r)l.setAttribute(d, r[d]);
        n = f ? u : n || s, l.onreadystatechange = l.onload = function () {
            !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
        }, h(function () {
            c || (c = 1, n(1))
        }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
    }, e.yepnope.injectCss = function (e, n, r, i, o, a) {
        var i = t.createElement("link"), f, n = a ? u : n || s;
        i.href = e, i.rel = "stylesheet", i.type = "text/css";
        for (f in r)i.setAttribute(f, r[f]);
        o || (p.parentNode.insertBefore(i, p), h(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, define("modernizr", function () {
}), qx.Class.define("Daddy", {
    type: "abstract", extend: qx.core.Object, properties: {}, members: {
        get: function (e) {
            var t = this;
            if (this[e] !== undefined)return this[e];
            throw new Error('requested attribute "' + e + '" does not exist')
        }, set: function (e, t) {
            var n = this;
            if (this[e] === undefined)throw new Error('requested attribute "' + e + '" does not exist');
            this[e] = t
        }, say: function (e, t) {
            console.log("say: " + e, "(" + this.name + ")", t);
            var n = jQuery.Event(e);
            t && (n.customData = t), $(document).trigger(n)
        }, listen: function (e, t) {
            var n = this;
            console.log("listen: " + e, "(" + n.name + ")"), $(document).on(e + "." + n.name, function (r) {
                console.log("heard: " + e, "(" + n.name + ")", r.customData), t(r)
            })
        }, unlisten: function (e) {
            var t = this;
            console.log("unlisten: " + e, "(" + t.name + ")"), $(document).off(e + "." + t.name)
        }
    }
}), define("Daddy", function () {
}), !function () {
    function e(e, t, n) {
        return e & t | ~e & n
    }

    function t(e, t, n) {
        return e & n | t & ~n
    }

    function n(e, t, n) {
        return e ^ t ^ n
    }

    function r(e, t, n) {
        return t ^ (e | ~n)
    }

    function i(e) {
        return String.fromCharCode(255 & e) + String.fromCharCode(e >>> 8 & 255) + String.fromCharCode(e >>> 16 & 255) + String.fromCharCode(e >>> 24 & 255)
    }

    function s(e) {
        for (; 0 > e;)e += 4294967296;
        for (; e > 4294967295;)e -= 4294967296;
        return e
    }

    function o(e, t, n, r, i) {
        var o, u, a, f, c, h, p, d, v;
        o = r[0], u = r[1], a = r[2], f = r[3], c = i[0], h = i[1], p = i[2], v = n(t[u], t[a], t[f]), d = t[o] + v + e[c] + l[p], d = s(d), d = d << h | d >>> 32 - h, d += t[u], t[o] = s(d)
    }

    function u(e) {
        for (var t, n = -1, r = (e = e.split("")).length, i = String.fromCharCode; ++n < r; e[n] = (t = e[n].charCodeAt(0)) >= 127 ? i(192 | t >>> 6) + i(128 | 63 & t) : e[n]);
        return e.join("")
    }

    function a(e) {
        var t, n, r, a, f, l, c, h, p, d, m, y, b;
        if (/[\x80-\xFF]/.test(e) && (e = u(e)), r = new Array(1732584193, 4023233417, 2562383102, 271733878), f = e.length, l = 63 & f, c = 56 > l ? 56 - l : 120 - l, c > 0)for (e += "", d = 0; c - 1 > d; d++)e += "\0";
        for (e += i(8 * f), e += i(0), f += c + 8, t = new Array(0, 1, 2, 3), n = new Array(16), a = new Array(4), y = 0; f > y; y += 64) {
            for (d = 0, m = y; 16 > d; d++, m += 4)n[d] = e.charCodeAt(m) | e.charCodeAt(m + 1) << 8 | e.charCodeAt(m + 2) << 16 | e.charCodeAt(m + 3) << 24;
            for (d = 0; 4 > d; d++)a[d] = r[d];
            for (d = 0; 4 > d; d++)for (h = v[d][0], p = v[d][1], m = 0; 16 > m; m++)o(n, a, h, t, p[m]), b = t[0], t[0] = t[3], t[3] = t[2], t[2] = t[1], t[1] = b;
            for (d = 0; 4 > d; d++)r[d] += a[d], r[d] = s(r[d])
        }
        return i(r[0]) + i(r[1]) + i(r[2]) + i(r[3])
    }

    function f(e) {
        var t, n, r, i;
        for (i = a(e), n = "", t = 0; 16 > t; t++)r = i.charCodeAt(t), n += "0123456789abcdef".charAt(r >> 4 & 15), n += "0123456789abcdef".charAt(15 & r);
        return n
    }

    var l = new Array(0, 3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745), c = new Array(new Array(0, 7, 1), new Array(1, 12, 2), new Array(2, 17, 3), new Array(3, 22, 4), new Array(4, 7, 5), new Array(5, 12, 6), new Array(6, 17, 7), new Array(7, 22, 8), new Array(8, 7, 9), new Array(9, 12, 10), new Array(10, 17, 11), new Array(11, 22, 12), new Array(12, 7, 13), new Array(13, 12, 14), new Array(14, 17, 15), new Array(15, 22, 16)), h = new Array(new Array(1, 5, 17), new Array(6, 9, 18), new Array(11, 14, 19), new Array(0, 20, 20), new Array(5, 5, 21), new Array(10, 9, 22), new Array(15, 14, 23), new Array(4, 20, 24), new Array(9, 5, 25), new Array(14, 9, 26), new Array(3, 14, 27), new Array(8, 20, 28), new Array(13, 5, 29), new Array(2, 9, 30), new Array(7, 14, 31), new Array(12, 20, 32)), p = new Array(new Array(5, 4, 33), new Array(8, 11, 34), new Array(11, 16, 35), new Array(14, 23, 36), new Array(1, 4, 37), new Array(4, 11, 38), new Array(7, 16, 39), new Array(10, 23, 40), new Array(13, 4, 41), new Array(0, 11, 42), new Array(3, 16, 43), new Array(6, 23, 44), new Array(9, 4, 45), new Array(12, 11, 46), new Array(15, 16, 47), new Array(2, 23, 48)), d = new Array(new Array(0, 6, 49), new Array(7, 10, 50), new Array(14, 15, 51), new Array(5, 21, 52), new Array(12, 6, 53), new Array(3, 10, 54), new Array(10, 15, 55), new Array(1, 21, 56), new Array(8, 6, 57), new Array(15, 10, 58), new Array(6, 15, 59), new Array(13, 21, 60), new Array(4, 6, 61), new Array(11, 10, 62), new Array(2, 15, 63), new Array(9, 21, 64)), v = new Array(new Array(e, c), new Array(t, h), new Array(n, p), new Array(r, d));
    md5 = function (e) {
        return f(e)
    }
}(), "object" != typeof JSON && (JSON = {}), function () {
    "use strict";
    function f(e) {
        return 10 > e ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, r, i, s, o, u = gap, a = t[e];
        switch (a && "object" == typeof a && "function" == typeof a.toJSON && (a = a.toJSON(e)), "function" == typeof rep && (a = rep.call(t, e, a)), typeof a) {
            case"string":
                return quote(a);
            case"number":
                return isFinite(a) ? String(a) : "null";
            case"boolean":
            case"null":
                return String(a);
            case"object":
                if (!a)return "null";
                if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(a)) {
                    for (s = a.length, n = 0; s > n; n += 1)o[n] = str(n, a) || "null";
                    return i = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + u + "]" : "[" + o.join(",") + "]", gap = u, i
                }
                if (rep && "object" == typeof rep)for (s = rep.length, n = 0; s > n; n += 1)"string" == typeof rep[n] && (r = rep[n], i = str(r, a), i && o.push(quote(r) + (gap ? ": " : ":") + i)); else for (r in a)Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && o.push(quote(r) + (gap ? ": " : ":") + i));
                return i = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + u + "}" : "{" + o.join(",") + "}", gap = u, i
        }
    }

    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function (e, t, n) {
        var r;
        if (gap = "", indent = "", "number" == typeof n)for (r = 0; n > r; r += 1)indent += " "; else"string" == typeof n && (indent = n);
        if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length)return str("", {"": e});
        throw new Error("JSON.stringify")
    }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && "object" == typeof i)for (n in i)Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }

        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function (e, t) {
    function n(e, n) {
        r.addType(e, function (s, o, u) {
            var f, l, h, p, v = o, m = (new Date).getTime();
            if (!s) {
                v = {}, p = [], h = 0;
                try {
                    for (s = n.length; s = n.key(h++);)i.test(s) && (l = JSON.parse(n.getItem(s)), l.expires && l.expires <= m ? p.push(s) : v[s.replace(i, "")] = l.data);
                    for (; s = p.pop();)n.removeItem(s)
                } catch (g) {
                }
                return v
            }
            if (s = "__amplify__" + s, o === t) {
                if (f = n.getItem(s), l = f ? JSON.parse(f) : {expires: -1}, !(l.expires && l.expires <= m))return l.data;
                n.removeItem(s)
            } else if (null === o)n.removeItem(s); else {
                l = JSON.stringify({data: o, expires: u.expires ? m + u.expires : null});
                try {
                    n.setItem(s, l)
                } catch (g) {
                    r[e]();
                    try {
                        n.setItem(s, l)
                    } catch (g) {
                        throw r.error()
                    }
                }
            }
            return v
        })
    }

    var r = e.store = function (e, t, n) {
        var i = r.type;
        return n && n.type && n.type in r.types && (i = n.type), r.types[i](e, t, n || {})
    };
    r.types = {}, r.type = null, r.addType = function (e, t) {
        r.type || (r.type = e), r.types[e] = t, r[e] = function (t, n, i) {
            return i = i || {}, i.type = e, r(t, n, i)
        }
    }, r.error = function () {
        return "amplify.store quota exceeded"
    };
    var i = /^__amplify__/;
    for (var s in{localStorage: 1, sessionStorage: 1})try {
        window[s].setItem("__amplify__", "x"), window[s].removeItem("__amplify__"), n(s, window[s])
    } catch (o) {
    }
    if (!r.types.localStorage && window.globalStorage)try {
        n("globalStorage", window.globalStorage[window.location.hostname]), "sessionStorage" === r.type && (r.type = "globalStorage")
    } catch (o) {
    }
    !function () {
        if (!r.types.localStorage) {
            var e = document.createElement("div"), n = "amplify";
            e.style.display = "none", document.getElementsByTagName("head")[0].appendChild(e);
            try {
                e.addBehavior("#default#userdata"), e.load(n)
            } catch (i) {
                return void e.parentNode.removeChild(e)
            }
            r.addType("userData", function (i, s, o) {
                e.load(n);
                var u, f, l, h, p, v = s, m = (new Date).getTime();
                if (!i) {
                    for (v = {}, p = [], h = 0; u = e.XMLDocument.documentElement.attributes[h++];)f = JSON.parse(u.value), f.expires && f.expires <= m ? p.push(u.name) : v[u.name] = f.data;
                    for (; i = p.pop();)e.removeAttribute(i);
                    return e.save(n), v
                }
                if (i = i.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-"), i = i.replace(/^-/, "_-"), s === t) {
                    if (u = e.getAttribute(i), f = u ? JSON.parse(u) : {expires: -1}, !(f.expires && f.expires <= m))return f.data;
                    e.removeAttribute(i)
                } else null === s ? e.removeAttribute(i) : (l = e.getAttribute(i), f = JSON.stringify({
                    data: s,
                    expires: o.expires ? m + o.expires : null
                }), e.setAttribute(i, f));
                try {
                    e.save(n)
                } catch (g) {
                    null === l ? e.removeAttribute(i) : e.setAttribute(i, l), r.userData();
                    try {
                        e.setAttribute(i, f), e.save(n)
                    } catch (g) {
                        throw null === l ? e.removeAttribute(i) : e.setAttribute(i, l), r.error()
                    }
                }
                return v
            })
        }
    }(), function () {
        function e(e) {
            return e === t ? t : JSON.parse(JSON.stringify(e))
        }

        var n = {}, i = {};
        r.addType("memory", function (r, s, o) {
            return r ? s === t ? e(n[r]) : (i[r] && (clearTimeout(i[r]), delete i[r]), null === s ? (delete n[r], null) : (n[r] = s, o.expires && (i[r] = setTimeout(function () {
                delete n[r], delete i[r]
            }, o.expires)), s)) : e(n)
        })
    }()
}(this.amplify = this.amplify || {}), function (e) {
    function t() {
        o.setAttribute("content", h), p = !0
    }

    function n() {
        o.setAttribute("content", c), p = !1
    }

    function r(r) {
        return e.orientation, 90 == Math.abs(e.orientation) ? void (p && t()) : (f = r.accelerationIncludingGravity, u = Math.abs(f.x), a = Math.abs(f.y), void (0 == a || u / a > 1.2 ? p && n() : p || t()))
    }

    var i = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(navigator.platform.toLowerCase()) && /os [1-5]_[0-9_]* like mac os x/i.test(i) && i.indexOf("applewebkit") > -1 && -1 == i.indexOf("crios")) {
        var s = e.document;
        if (s.querySelector) {
            var o = s.querySelector("meta[name=viewport]");
            if (o) {
                var u, a, f, l = o && o.getAttribute("content"), c = l + ",maximum-scale=1", h = l + ",maximum-scale=10", p = !0;
                e.addEventListener("orientationchange", t, !1), e.addEventListener("devicemotion", r, !1)
            }
        }
    }
}(this), function (e, t, n) {
    "$:nomunge";
    function r() {
        i = t[u](function () {
            s.each(function () {
                var t = e(this), n = t.width(), r = t.height(), i = e.data(this, f);
                (n !== i.w || r !== i.h) && t.trigger(a, [i.w = n, i.h = r])
            }), r()
        }, o[l])
    }

    var i, s = e([]), o = e.resizecontainer = e.extend(e.resize, {}), u = "setTimeout", a = "resizecontainer", f = a + "-special-event", l = "delay", c = "throttleWindow";
    o[l] = 250, o[c] = !0, e.event.special[a] = {
        setup: function () {
            if (!o[c] && this[u])return !1;
            var t = e(this);
            s = s.add(t), e.data(this, f, {w: t.width(), h: t.height()}), 1 === s.length && r()
        }, teardown: function () {
            if (!o[c] && this[u])return !1;
            var t = e(this);
            s = s.not(t), t.removeData(f), s.length || clearTimeout(i)
        }, add: function (t) {
            function r(t, r, s) {
                var o = e(this), u = e.data(this, f);
                u.w = r !== n ? r : o.width(), u.h = s !== n ? s : o.height(), i.apply(this, arguments)
            }

            if (!o[c] && this[u])return !1;
            var i;
            return e.isFunction(t) ? (i = t, r) : (i = t.handler, void (t.handler = r))
        }
    }
}(jQuery, window), function (e) {
    window.elementIsChildOf = function (t, n) {
        var r = !1, i = e("" + t), s = e("" + n);
        switch (!0) {
            case-1 != e(s).parents().index(i):
                r = !0
        }
        return r
    }, window.getSelector = function (t) {
        var n = e(t), r = n.attr("id");
        if (r)return "#" + r;
        var i = n[0].nodeName.toLowerCase();
        if ("html" == i || "body" == i)return i;
        var s = n.parents().map(function () {
            return this.tagName
        }).get().reverse().join(" ");
        s && (s += " " + n[0].nodeName);
        var o = n.attr("class");
        o && (s += "." + e.trim(o).replace(/\s/gi, "."));
        var u = n.attr("name");
        if (u && (s += "[name='" + u + "']"), !u) {
            var f = n.index();
            f && (f += 1, s += ":nth-child(" + f + ")")
        }
        return s
    }
}(jQuery);
var Restive = function (e, t, n) {
    function r() {
        a("rstv_timestamp_curr", microtime(!0)), a("rstv_timestamp_init", a("rstv_timestamp_curr")), i(), N(), a("rstv_ort_init", $()), a("rstv_ort_curr", $())
    }

    function i() {
        a("rstv_var_doc_client_w", mt.clientWidth), a("rstv_var_doc_client_h", mt.clientHeight), a("rstv_var_win_outer_w", e.outerWidth), a("rstv_var_win_outer_h", e.outerHeight), a("rstv_var_win_screen_w", yt.width), a("rstv_var_win_screen_h", yt.height)
    }

    function s() {
        var e = parseInt(a("rstv_loaded_count"));
        switch (!0) {
            case!isNumber(e):
                e = 0
        }
        e++, a("rstv_loaded_count", e, "", {expires: 1500})
    }

    function o() {
        var e = parseInt(a("rstv_loaded_count")), t = a("rstv_ffld_is_init");
        switch (!0) {
            case e > 1:
                switch (a("rstv_viewportW rstv_viewportW_dip rstv_viewportH rstv_viewportH_dip rstv_screenW rstv_screenH", null), a("rstv_is_ios rstv_is_android rstv_is_blackberry rstv_is_symbian rstv_is_windows rstv_is_windows_phone", null), a("rstv_is_android_1_ rstv_is_android_2_ rstv_is_android_3_", null), a("rstv_is_phone rstv_is_tablet rstv_is_tv rstv_is_pc", null), a("rstv_ort_curr rstv_timestamp_curr rstv_is_portrait rstv_is_landscape", null), a("rstv_multi_count rstv_multi_bpm_idx rstv_cache_bpm rstv_cache_bpm_lock rstv_cache_req rstv_cache_bpm_viewport_diff", null), a("rstv_user_agent", null), a("rstv_timestamp_curr", microtime(!0)), a("rstv_ort_curr", $()), !0) {
                    case!t:
                        a("rstv_timestamp_init", a("rstv_timestamp_curr")), a("rstv_ort_init", $()), a("rstv_ffld_is_init", !0)
                }
        }
    }

    function u() {
        try {
            localStorage.setItem("__test", "data")
        } catch (e) {
            if (/QUOTA_?EXCEEDED/i.test(e.name))return !0
        }
        return !1
    }

    function a() {
        var t, n, r = Array.prototype.slice.call(arguments), i = e.rstv_store.main.rstv_is_priv_browsing, s = r[0], o = r[1], u = "undefined" != typeof r[2] && null !== r[2] && isString(r[2]) && "" != r[2] ? r[2] : "ss", a = r[3], f = [], l = isString(s) && "" != s ? !1 : !0, c = "undefined" != typeof o && null !== o && !!(isString(o) && "" != o || isNumber(o) || isArray(o) && count(o) > 0 || isBool(o) || isObject(o)), h = null === o;
        try {
            switch (!0) {
                case i:
                    t = "storage", n = e.rstv_store[t];
                    break;
                default:
                    switch (!0) {
                        case"ls" == u:
                            t = "localStorage";
                            break;
                        default:
                            t = "sessionStorage"
                    }
                    switch (n = amplify.store[t], !0) {
                        case!e.sessionStorage || !e.localStorage:
                            n = amplify.store
                    }
                    switch (!0) {
                        case l:
                            return n()
                    }
            }
            switch (!0) {
                case!c && !h:
                    return n(s)
            }
            switch (!0) {
                case h:
                    f = explode(" ", s);
                    for (var p = 0; p < count(f); p++)n(f[p], null);
                    return null
            }
            n(s, null), n(s, o, a)
        } catch (d) {
            alert(d)
        }
    }

    function f(e, t) {
        var r, i, s = Array.prototype.slice.call(arguments), o = isString(s[2]) && "" != s[2] ? s[2] : "ck", u = isBool(s[3]) ? s[3] : !1, f = isNumber(s[4]) || isString(s[4]) ? parseInt(s[4]) : "", l = isNumber(s[4]) || isString(s[4]) ? parseInt(s[4]) : 30, c = isBool(s[5]) ? s[5] : !0, h = isString(s[6]) && "" != s[6] ? s[6] : "-!", p = isNumber(s[7]) || isString(s[7]) ? parseInt(s[7]) : 60, d = [], v = [];
        switch (r = "ls" == o ? a(e) : n.cookie(e), !0) {
            case null === r || "undefined" == typeof r:
                return "ls" == o ? a(e, t, "", {expires: f}) : n.cookie(e, t, {expires: l, path: "/"}), !0;
            case"undefined" != typeof r && null !== r && "" != r:
                switch (d = explode(h, r), !0) {
                    case in_array(t, d) && u:
                        return !1;
                    default:
                        switch (!0) {
                            case c:
                                d.unshift(t), v = d.slice(0, p), i = implode(h, v);
                                break;
                            default:
                                d.push(t), i = implode(h, d)
                        }
                        return "ls" == o ? a(e, i, "", {expires: f}) : n.cookie(e, i, {expires: l, path: "/"}), !0
                }
        }
    }

    function l(e, t) {
        var r = Array.prototype.slice.call(arguments), i = isString(r[2]) && "" != r[2] ? r[2] : "ck", s = isString(r[3]) && "" != r[3] ? r[3] : "-!", o = "ls" == i ? a(t) : n.cookie(t);
        switch (!0) {
            case"undefined" != typeof o && null !== o && "" != o:
                var u = [];
                switch (u = explode(s, o), !0) {
                    case in_array(e, u):
                        return !0;
                    default:
                        return !1
                }
                break;
            default:
                return !1
        }
    }

    function c(e) {
        var t = Array.prototype.slice.call(arguments), n = t[1], r = a("" + e), i = "undefined" != typeof n && null !== n, s = !1;
        switch (!0) {
            case isBool(r) || null !== r && "undefined" != typeof r && "" != r:
                s = !0
        }
        switch (!0) {
            case!i:
                return s
        }
        switch (!0) {
            case!s:
                a(e, n)
        }
    }

    function h(e) {
        var t, n = Array.prototype.slice.call(arguments), r = isNumber(n[1]) ? n[1] : 1, i = isBool(n[2]) ? n[2] : !1;
        switch (t = parseInt(a(e)), !0) {
            case!isNumber(t):
                return !1
        }
        return t = i ? t - r : t + r, a(e, t), t
    }

    function p(e) {
        var t = [120, 128, 160, 200, 240, 272, 300, 320, 352, 360, 480, 540, 576, 600, 640, 720, 768, 800, 864, 900, 1024, 1050, 1080, 1152, 1200, 1440, 1536, 1600, 1800, 2048, 2160, 2400, 3072, 3200, 4096, 4320, 4800], n = [160, 240, 260, 320, 400, 432, 480, 640, 720, 800, 854, 960, 1024, 1136, 1152, 1280, 1360, 1366, 1400, 1440, 1600, 1680, 1920, 2048, 2560, 2880, 3200, 3840, 4096, 5120, 6400, 7680];
        switch (!0) {
            case"w" == e:
                return t;
            case"h" == e:
                return n
        }
    }

    function d(e) {
        var t, n, r, i = Array.prototype.slice.call(arguments), s = isBool(i[1]) ? i[1] : !0, o = !1, u = !!W() || !!z(), f = C(), l = a("rstv_var_win_outer_w"), c = a("rstv_var_win_outer_h"), h = a("rstv_var_doc_client_w"), d = a("rstv_var_doc_client_h"), v = a("rstv_var_win_screen_w"), m = a("rstv_var_win_screen_h");
        switch (!0) {
            case u:
                switch (!0) {
                    case"vW" == e:
                        t = h;
                        break;
                    case"vH" == e:
                        t = d;
                        break;
                    case"sW" == e:
                        t = v;
                        break;
                    case"sH" == e:
                        t = m
                }
                switch (!0) {
                    case"vW" == e || "vH" == e:
                        t = f >= 1.5 ? t * f : t
                }
                return t = Math.floor(t)
        }
        var g, y, b, w, E, S, x, T, N, k, L = A(), O = /opera.+(mini|mobi)/i.test(L), M = !!_(), D = !!H(), B = !!j(), F = !!P(), I = !!P("1."), q = !!P("2."), R = !!(I || q || D || B), U = v, X = m, V = U, $ = p("w"), J = p("h"), K = $, Q = J;
        switch (!0) {
            case R:
                g = 0 >= l ? h : l, y = 0 >= c ? d : c, b = g, w = y;
                break;
            default:
                g = h, y = d, b = h, w = d
        }
        switch (!0) {
            case(q || D) && !O:
                U = 0 >= l ? U : l, X = 0 >= c ? X : c
        }
        switch (S = U / X, E = U - g, E = Math.abs(E), k = O && 260 > g ? 4 >= E && S >= 1 ? !0 : !1 : !0, T = !!(b >= w && k), N = U >= X, !0) {
            case M:
                K = K.slice(7), Q = Q.slice(6);
                break;
            case F:
                K = K.slice(4), Q = Q.slice(3);
                break;
            case D:
                K = K.slice(4)
        }
        switch (!0) {
            case T:
                $ = Q, J = K;
                break;
            default:
                $ = K, J = Q
        }
        switch (!0) {
            case"vW" == e:
                t = g;
                break;
            case"vH" == e:
                t = y;
                break;
            case"sW" == e:
                x = T === !0 && N === !1 || T === !1 && N === !0, t = x ? X : U, V = x ? X : U, n = t * f, o = s ? in_array(t, $) || in_array(n, $) ? !1 : !0 : !1;
                break;
            case"sH" == e:
                x = T === !0 && N === !1 || T === !1 && N === !0, t = x ? U : X, V = x ? X : U, n = t * f, o = s ? in_array(t, J) || in_array(n, J) ? !1 : !0 : !1
        }
        switch (r = V / g, !0) {
            case 1 >= f && 1.1 >= r:
                switch (!0) {
                    case"sW" == e && o:
                        t = getClosestNumberMatchArray($, t, "", "", 8);
                        break;
                    case"sH" == e && o:
                        t = getClosestNumberMatchArray(J, t, "", "", 8)
                }
                return t
        }
        switch (!0) {
            case M:
                t *= f;
                break;
            default:
                switch (!0) {
                    case!q:
                        switch (!0) {
                            case 1 >= f && r > 1.1:
                                t = in_array(e, ["vW", "vH"]) ? t * r : t;
                                break;
                            case f > 1 && 1.1 >= r:
                                switch (!0) {
                                    case 1.1 >= f:
                                        switch (!0) {
                                            case in_array(e, ["vW", "vH"]):
                                                t *= f, t = isEvenDecimal(t) ? Math.floor(t) : t
                                        }
                                        break;
                                    default:
                                        t *= f
                                }
                                break;
                            case f > 1 && r > 1.1:
                                switch (!0) {
                                    case in_array(e, ["vW", "vH"]):
                                        t *= f, t = isEvenDecimal(t) ? Math.floor(t) : Math.ceil(t)
                                }
                        }
                }
                switch (!0) {
                    case"sW" == e && o:
                        t = getClosestNumberMatchArray($, t, "", "", 8);
                        break;
                    case"sH" == e && o:
                        t = getClosestNumberMatchArray(J, t, "", "", 8)
                }
        }
        return t = Math.floor(t)
    }

    function v(e) {
        var t, n = "w" == e, r = !!W() || !!z(), i = C();
        switch (!0) {
            case r:
                i = 1.5 >= i ? 1 : i
        }
        return t = n ? b() / i : w() / i, Math.round(t)
    }

    function m(e, t) {
        var n, r = Array.prototype.slice.call(arguments), i = isString(r[2]) && "" != r[2] ? r[2] : "d", s = isBool(r[3]) ? r[3] : !1;
        switch (t = t.toLowerCase(), !0) {
            case"w" == t:
                switch (!0) {
                    case"i" == i:
                        n = e.innerWidth();
                        break;
                    case"o" == i:
                        n = e.outerWidth();
                        break;
                    default:
                        n = e.width()
                }
                break;
            case"h" == t:
                switch (!0) {
                    case"i" == i:
                        n = e.innerHeight();
                        break;
                    case"o" == i:
                        n = e.outerHeight();
                        break;
                    default:
                        n = e.height()
                }
                break;
            default:
                n = !1
        }
        switch (!0) {
            case s === !1:
                n *= C()
        }
        return n
    }

    function g(e) {
        var t = Array.prototype.slice.call(arguments), n = t[1], r = t[2];
        return m(e, "w", n, r)
    }

    function y(e) {
        var t = Array.prototype.slice.call(arguments), n = t[1], r = t[2];
        return m(e, "h", n, r)
    }

    function b() {
        return c("rstv_viewportW") ? a("rstv_viewportW") : d("vW", a("rstv_is_getdim_screen_adj"))
    }

    function w() {
        return c("rstv_viewportH") ? a("rstv_viewportH") : d("vH", a("rstv_is_getdim_screen_adj"))
    }

    function E() {
        return c("rstv_screenW") ? a("rstv_screenW") : d("sW", a("rstv_is_getdim_screen_adj"))
    }

    function S() {
        return c("rstv_screenH") ? a("rstv_screenH") : d("sH", a("rstv_is_getdim_screen_adj"))
    }

    function x() {
        return c("rstv_viewportW_dip") ? a("rstv_viewportW_dip") : v("w")
    }

    function T() {
        return c("rstv_viewportH_dip") ? a("rstv_viewportH_dip") : v("h")
    }

    function N() {
        a("rstv_viewportW rstv_viewportW_dip rstv_viewportH rstv_viewportH_dip rstv_screenW rstv_screenH", null), a("rstv_viewportW", b()), a("rstv_viewportH", w()), a("rstv_screenW", E()), a("rstv_screenH", S()), a("rstv_viewportW_dip", x()), a("rstv_viewportH_dip", T())
    }

    function C(e) {
        switch (!0) {
            case c("rstv_pixel_ratio"):
                return a("rstv_pixel_ratio")
        }
        var t, n, r, i, s = A(), o = /opera.+(mini|mobi)/i.test(s), u = a("rstv_var_doc_client_w"), f = a("rstv_var_win_outer_w"), l = a("rstv_var_win_screen_w"), h = !!H(), p = !!j(), d = !!P("1."), v = !!P("2."), m = !!(d || v || h || p), g = !!p || !!h, y = m ? 0 >= f ? u : f : u, b = !v && !h || o ? l : 0 >= f ? l : f;
        switch (n = vt.devicePixelRatio, !0) {
            case 0 >= n || "undefined" == typeof n || null === n:
                switch (r = b / y, t = r, !0) {
                    case g:
                        switch (!0) {
                            case t > .5 && 1.2 > t:
                                t = 1;
                                break;
                            case t >= 1.2 && 2 > t:
                                t = 1.5;
                                break;
                            case t >= 2 && 3 > t:
                                t = 2;
                                break;
                            case t >= 3:
                                t = 3;
                                break;
                            default:
                                t = 1
                        }
                }
                a("rstv_pixel_ratio_virtual", r);
                break;
            default:
                t = n
        }
        switch (!0) {
            case!isNumber(e):
                return i = t || (C(3) ? 3 : C(2) ? 2 : C(1.5) ? 1.5 : C(1) ? 1 : 0), a("rstv_pixel_ratio", i), i
        }
        switch (!0) {
            case!isFinite(e):
                return !1
        }
        switch (!0) {
            case t && t > 0:
                return t >= e
        }
        switch (e = "only all and (min--moz-device-pixel-ratio:" + e + ")", !0) {
            case bt(e).matches:
                return !0
        }
        return !!bt(e.replace("-moz-", "")).matches
    }

    function k() {
        var e = C();
        switch (!0) {
            case e >= 2:
                return !0
        }
        return !1
    }

    function L(e) {
        return function (t, n) {
            var r, i = Array.prototype.slice.call(arguments), s = i[2], o = !!isObject(s) && "undefined" != typeof s && null !== s, u = i[3], a = i[4], f = o ? e(s, u, a) : e();
            return r = f >= (t || 0), n ? r && n >= f : r
        }
    }

    function A() {
        switch (!0) {
            case c("rstv_user_agent"):
                return a("rstv_user_agent")
        }
        var e, t = navigator.userAgent.toLowerCase();
        switch (e = /mozilla.+x11(?!.*?(ubuntu|firefox|chrome|safari|opera|opr|qupzilla))/i.test(t), !0) {
            case e:
                n.ajax({
                    type: "GET",
                    async: !1,
                    crossDomain: !0,
                    url: "http://www.restive.io/ping/ua.php",
                    headers: {"Cache-Control": "no-cache", Pragma: "no-cache"},
                    success: function (e) {
                        t = e
                    },
                    error: function () {
                        console.log("error")
                    }
                })
        }
        return a("rstv_user_agent", t), t
    }

    function O() {
        switch (!0) {
            case M("ios"):
                return "ios";
            case M("android"):
                return "android";
            case M("symbian"):
                return "symbian";
            case M("blackberry"):
                return "blackberry";
            case M("windows"):
                return "windows";
            default:
                return "other"
        }
    }

    function M(e) {
        var t = Array.prototype.slice.call(arguments), n = !!isString(t[1]) && "" != t[1], r = "", i = "", s = "";
        switch (!0) {
            case n:
                r = t[1], r = r.replace(/^\s+|\s+$/g, ""), i = " " + r, s = "_" + r.replace(".", "_")
        }
        switch (!0) {
            case c("rstv_is_" + e + s):
                return a("rstv_is_" + e + s)
        }
        var o = A(), u = !1;
        switch (!0) {
            case"ios" == e:
                u = /\bipad|\biphone|\bipod/i.test(o);
                break;
            case"android" == e:
                var f = new RegExp("\\bandroid" + i, "i");
                u = f.test(o);
                break;
            case"symbian" == e:
                u = /series(4|6)0|symbian|symbos|syb-[0-9]+|\bs60\b/i.test(o);
                break;
            case"blackberry" == e:
                u = /bb[0-9]+|blackberry|playbook|rim +tablet/i.test(o);
                break;
            case"windows" == e:
                u = /window mobile|windows +(ce|phone)|windows +nt.+arm|windows +nt.+touch|xblwp7|zunewp7/i.test(o);
                break;
            case"windows_phone" == e:
                u = /windows +phone|xblwp7|zunewp7/i.test(o);
                break;
            default:
                return !1
        }
        return a("rstv_is_" + e + s, u), !!u
    }

    function _() {
        return M("ios")
    }

    function D() {
        return M("ios")
    }

    function P() {
        var e = Array.prototype.slice.call(arguments), t = e[0];
        return M("android", t)
    }

    function H() {
        return M("symbian")
    }

    function B() {
        return M("blackberry")
    }

    function j() {
        return M("windows")
    }

    function F() {
        return M("windows_phone")
    }

    function I(e) {
        return /android|android.+mobile|avantgo|bada\/|\bbb[0-9]+|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|\bip(hone|od|ad)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|motorola|mobile.+firefox|netfront|nokia|nintendo +3ds|opera m(ob|in)i|palm|palm( os)?|phone|p(ixi|re)\/|playbook|rim +tablet|playstation.+vita|plucker|pocket|psp|samsung|(gt\-|bgt\-|sgh\-|sph\-|sch\-)[a-z][0-9]+|series(4|6)0|symbian|symbos|\bs60\b|treo|up\.(browser|link)|vertu|vodafone|wap|windows (ce|phone)|windows +nt.+arm|windows +nt.+touch|xda|xiino|xblwp7|zunewp7/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb|b\-[0-9]+)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
    }

    function q() {
        var e = "";
        switch (!0) {
            case U():
                e = "tablet";
                break;
            case z():
                e = "tv";
                break;
            default:
                switch (!0) {
                    case R():
                        e = "phone";
                        break;
                    default:
                        e = "pc"
                }
        }
        return e
    }

    function R() {
        switch (!0) {
            case c("rstv_is_phone"):
                return a("rstv_is_phone")
        }
        switch (!0) {
            case U(!0) || z():
                return a("rstv_is_phone", !1), !1
        }
        switch (!0) {
            case I(A() || navigator.vendor.toLowerCase() || e.opera):
                return a("rstv_is_phone", !0), !0
        }
        return a("rstv_is_phone", !1), !1
    }

    function U() {
        var e = Array.prototype.slice.call(arguments), t = isBool(e[0]) ? e[0] : !1;
        switch (!0) {
            case c("rstv_is_tablet"):
                return a("rstv_is_tablet")
        }
        var n, r, i, s = A(), o = parseInt(a("rstv_viewportW_dip")), u = parseInt(a("rstv_viewportH_dip")), f = a("rstv_is_portrait") ? o : u;
        switch (r = new RegExp("ipad|playbook|rim +tablet", "i"), i = r.test(s), !0) {
            case i:
                return t || a("rstv_is_tablet", !0), !0
        }
        switch (r = new RegExp("windows +nt.+arm|windows +nt.+touch", "i"), i = r.test(s), !0) {
            case i:
                switch (!0) {
                    case isNumber(f) && 520 >= f:
                        return t || (a("rstv_is_tablet", !1), a("rstv_is_phone") === !1 && a("rstv_is_phone", !0)), !1;
                    default:
                        return t || a("rstv_is_tablet", !0), !0
                }
        }
        switch (n = "android.+kindle|kindle +fire|android.+silk|silk.*accelerated|android.+nexus +(7|10)|samsung.*tablet|galaxy.*tab|sc-01c|gt-p1000|gt-p1003|gt-p1010|gt-p3105|gt-p6210|gt-p6800|gt-p6810|gt-p7100|gt-p7300|gt-p7310|gt-p7500|gt-p7510|sch-i800|sch-i815|sch-i905|sgh-i957|sgh-i987|sgh-t849|sgh-t859|sgh-t869|sph-p100|gt-p3100|gt-p3108|gt-p3110|gt-p5100|gt-p5110|gt-p6200|gt-p7320|gt-p7511|gt-n8000|gt-p8510|sgh-i497|sph-p500|sgh-t779|sch-i705|sch-i915|gt-n8013|gt-p3113|gt-p5113|gt-p8110|gt-n8010|gt-n8005|gt-n8020|gt-p1013|gt-p6201|gt-p7501|gt-n5100|gt-n5110|shv-e140k|shv-e140l|shv-e140s|shv-e150s|shv-e230k|shv-e230l|shv-e230s|shw-m180k|shw-m180l|shw-m180s|shw-m180w|shw-m300w|shw-m305w|shw-m380k|shw-m380s|shw-m380w|shw-m430w|shw-m480k|shw-m480s|shw-m480w|shw-m485w|shw-m486w|shw-m500w|gt-i9228|sch-p739|sch-i925|gt-i9200|gt-i9205|gt-p5200|gt-p5210|sm-t311|sm-t310|sm-t210|sm-t210r|sm-t211|sm-p600|sm-p601|sm-p605|sm-p900|sm-t217|sm-t217a|sm-t217s|sm-p6000|sm-t3100|sgh-i467|xe500|htc flyer|htc jetstream|htc-p715a|htc evo view 4g|pg41200|xoom|sholest|mz615|mz605|mz505|mz601|mz602|mz603|mz604|mz606|mz607|mz608|mz609|mz615|mz616|mz617|transformer|^.*padfone((?!mobile).)*$|tf101|tf201|tf300|tf700|tf701|tf810|me171|me301t|me302c|me371mg|me370t|me372mg|me172v|me173x|me400c|slider *sl101|android.+nook|nookcolor|nook browser|bnrv200|bnrv200a|bntv250|bntv250a|bntv400|bntv600|logicpd zoom2|android.*\\b(a100|a101|a110|a200|a210|a211|a500|a501|a510|a511|a700|a701|w500|w500p|w501|w501p|w510|w511|w700|g100|g100w|b1-a71|b1-710|b1-711|a1-810)\\b|w3-810|android.*(at100|at105|at200|at205|at270|at275|at300|at305|at1s5|at500|at570|at700|at830)|toshiba.*folio|\\bl-06c|lg-v900|lg-v905|lg-v909|android.+(xenta.+tab|tab210|tab211|tab224|tab250|tab260|tab264|tab310|tab360|tab364|tab410|tab411|tab420|tab424|tab450|tab460|tab461|tab464|tab465|tab467|tab468|tab469)|android.+\\boyo\\b|life.*(p9212|p9514|p9516|s9512)|lifetab|an10g2|an7bg3|an7fg3|an8g3|an8cg3|an7g3|an9g3|an7dg3|an7dg3st|an7dg3childpad|an10bg3|an10bg3dt|android.+archos|\\b(101g9|80g9|a101it)\\b|qilive 97r|novo7|novo7aurora|novo7basic|novo7paladin|novo8|novo9|novo10|sony tablet|sony tablet s|sgpt12|sgpt121|sgpt122|sgpt123|sgpt111|sgpt112|sgpt113|sgpt211|sgpt213|ebrd1101|ebrd1102|ebrd1201|sgpt311|sgpt312|sonyso-03e|android.*(k8gt|u9gt|u10gt|u16gt|u17gt|u18gt|u19gt|u20gt|u23gt|u30gt)|cube u8gt|mid1042|mid1045|mid1125|mid1126|mid7012|mid7014|mid7034|mid7035|mid7036|mid7042|mid7048|mid7127|mid8042|mid8048|mid8127|mid9042|mid9740|mid9742|mid7022|mid7010|android.*(\\bmid\\b|mid-560|mtv-t1200|mtv-pnd531|mtv-p1101|mtv-pnd530)|android.*(rk2818|rk2808a|rk2918|rk3066)|rk2738|rk2808a|t-hub2|iq310|fly vision|bq.*(elcano|curie|edison|maxwell|kepler|pascal|tesla|hypatia|platon|newton|livingstone|cervantes|avant)|mediapad|ideos s7|s7-201c|s7-202u|s7-101|s7-103|s7-104|s7-105|s7-106|s7-201|s7-slim|\\bn-06d|\\bn-08d|pantech.*p4100|broncho.*(n701|n708|n802|a710)|touchpad.*[78910]|\\btouchtab\\b|z1000|z99 2g|z99|z930|z999|z990|z909|z919|z900|tb07sta|tb10sta|tb07fta|tb10fta|android.*\\bnabi|playstation.*(portable|vita)|dell.*streak|milagrow +tab.*top|android.+(ideapad|ideatab|lenovo +a1|s2110|s6000|k3011|a3000|a1000|a2107|a2109|a1107)|android.+f8-sup|android.*(k080|arc|vox)|android.*(msi.+enjoy|enjoy +7|enjoy +10)|dropad.+a8|android.+c906|android.+iberry.+auxus|android.+aigopad|android.*(airpad|liquid metal)|android.+hcl.+tablet|connect-3g-2.0|connect-2g-2.0|me tablet u1|me tablet u2|me tablet g1|me tablet x1|me tablet y2|me tablet sync|android.*(a39|a37|a34|st8|st10|st7|smarttab|smart +tab)|android.*(micromax.+funbook|funbook|p250|p275|p300|p350|p362|p500|p600)|micromax.*(p250|p275|p350|p362|p500|p600)|funbook|android.+penta|android.*(celkon.+ct|ct-[0-9])|android.+i-buddy|android.*(viewbook|viewpad)|android.*(v9|zte.+v8110|light tab|light pro|beeline|base.*tab)|chagall|android.*(vandroid|t3i)|android.*(ziio7|ziio10)|android.*(v-t100|v-tw100|v-tr200|v-t300)|android.+vtab1008|bookeen|cybook|android.*lifetab_(s9512|p9514|p9516)|m702pro|irulu-al101|pmp3170b|pmp3270b|pmp3470b|pmp7170b|pmp3370b|pmp3570c|pmp5870c|pmp3670b|pmp5570c|pmp5770d|pmp3970b|pmp3870c|pmp5580c|pmp5880d|pmp5780d|pmp5588c|pmp7280c|pmp7280|pmp7880d|pmp5597d|pmp5597|pmp7100d|per3464|per3274|per3574|per3884|per5274|per5474|pmp5097cpro|pmp5097|pmp7380d|pmp5297c|pmp5297c_quad|allview.*(viva|alldro|city|speed|all tv|frenzy|quasar|shine|tx1|ax1|ax2)|megafon +v9|android.+(z7c|z7h|z7s)|android.+iball.+slide.+(3g *7271|3g *7334|3g *7307|3g *7316|i7119|i7011)|android.+iball.+i6012|navipad|tb-772a|tm-7045|tm-7055|tm-9750|tm-7016|tm-7024|tm-7026|tm-7041|tm-7043|tm-7047|tm-8041|tm-9741|tm-9747|tm-9748|tm-9751|tm-7022|tm-7021|tm-7020|tm-7011|tm-7010|tm-7023|tm-7025|tm-7037w|tm-7038w|tm-7027w|tm-9720|tm-9725|tm-9737w|tm-1020|tm-9738w|tm-9740|tm-9743w|tb-807a|tb-771a|tb-727a|tb-725a|tb-719a|tb-823a|tb-805a|tb-723a|tb-715a|tb-707a|tb-705a|tb-709a|tb-711a|tb-890hd|tb-880hd|tb-790hd|tb-780hd|tb-770hd|tb-721hd|tb-710hd|tb-434hd|tb-860hd|tb-840hd|tb-760hd|tb-750hd|tb-740hd|tb-730hd|tb-722hd|tb-720hd|tb-700hd|tb-500hd|tb-470hd|tb-431hd|tb-430hd|tb-506|tb-504|tb-446|tb-436|tb-416|tb-146se|tb-126se|android.*\\bg1\\b|tx-a1301|tx-m9002|q702|ly-f528|android.+dslide.*\\b(700|701r|702|703r|704|802|970|971|972|973|974|1010|1012)\\b|m9701|m9000|m9100|m806|m1052|m806|t703|mid701|mid713|mid710|mid727|mid760|mid830|mid728|mid933|mid125|mid810|mid732|mid120|mid930|mid800|mid731|mid900|mid100|mid820|mid735|mid980|mid130|mid833|mid737|mid960|mid135|mid860|mid736|mid140|mid930|mid835|mid733|android.*\\b(f-01d|f-05e|f-10d|m532|q572)\\b|android.+casiatab8|android.+hudl|android.*(polaroid.*tablet|pmid1000|pmid10c|pmid800|pmid700|pmid4311|pmid701c|pmid701i|pmid705|pmid706|pmid70dc|pmid70c|pmid720|pmid80c|pmid901|ptab7200|ptab4300|ptab750|midc010|midc407|midc409|midc410|midc497|midc700|midc800|midc801|midc802|midc901)|e-boda.+(supreme|impresspeed|izzycomm|essential)|hp slate 7|hp elitepad 900|hp-tablet|elitebook.*touch|fine7 genius|fine7 shine|fine7 air|fine8 style|fine9 more|fine10 joy|fine11 wide|android.*\\b(n10|n10-4core|n78|n79|n83|n90 ii)\\b|\\b(pem63|plt1023g|plt1041|plt1044|plt1044g|plt1091|plt4311|plt4311pl|plt4315|plt7030|plt7033|plt7033d|plt7035|plt7035d|plt7044k|plt7045k|plt7045kb|plt7071kg|plt7072|plt7223g|plt7225g|plt7777g|plt7810k|plt7849g|plt7851g|plt7852g|plt8015|plt8031|plt8034|plt8036|plt8080k|plt8082|plt8088|plt8223g|plt8234g|plt8235g|plt8816k|plt9011|plt9045k|plt9233g|plt9735|plt9760g|plt9770g)\\b|bq1078|bc1003|bc1077|rk9702|bc9730|bc9001|it9001|bc7008|bc7010|bc708|bc728|bc7012|bc7030|bc7027|bc7026|tpc7102|tpc7103|tpc7105|tpc7106|tpc7107|tpc7201|tpc7203|tpc7205|tpc7210|tpc7708|tpc7709|tpc7712|tpc7110|tpc8101|tpc8103|tpc8105|tpc8106|tpc8203|tpc8205|tpc8503|tpc9106|tpc9701|tpc97101|tpc97103|tpc97105|tpc97106|tpc97111|tpc97113|tpc97203|tpc97603|tpc97809|tpc97205|tpc10101|tpc10103|tpc10106|tpc10111|tpc10203|tpc10205|tpc10503|android.*(roverpad|rp3wg70)|tab-p506|tab-navi-7-3g-m|tab-p517|tab-p-527|tab-p701|tab-p703|tab-p721|tab-p731n|tab-p741|tab-p825|tab-p905|tab-p925|tab-pr945|tab-pl1015|tab-p1025|tab-pi1045|tab-p1325|tab-protab[0-9]+|tab-protab25|tab-protab26|tab-protab27|tab-protab26xl|tab-protab2-ips9|tab-protab30-ips9|tab-protab25xxl|tab-protab26-ips10|tab-protab30-ips10|android.*ov-(steelcore|newbase|basecore|baseone|exellen|quattor|edutab|solution|action|basictab|teddytab|magictab|stream|tb-08|tb-09)|dps dream 9|dps dual 7|v97 hd|i75 3g|visture v4( hd)?|visture v5( hd)?|visture v10|ctp(-)?810|ctp(-)?818|ctp(-)?828|ctp(-)?838|ctp(-)?888|ctp(-)?978|ctp(-)?980|ctp(-)?987|ctp(-)?988|ctp(-)?989|android.*\\b97d\\b|tablet(?!.*pc)|viewpad7|lg-v909|mid7015|bntv250a|logicpd zoom2|\\ba7eb\\b|catnova8|a1_07|ct704|ct1002|\\bm721\\b|rk30sdk|\\bevotab\\b|smarttabii10|smarttab10", r = new RegExp(n, "i"), i = r.test(s), !0) {
            case i:
                return t || a("rstv_is_tablet", !0), !0
        }
        var l = /android/i.test(s), h = !/mobile/i.test(s);
        switch (!0) {
            case l:
                switch (!0) {
                    case isNumber(f) && f >= 520 && 810 >= f:
                        return t || (a("rstv_is_tablet", !0), a("rstv_is_phone") && a("rstv_is_phone", !1)), !0
                }
                switch (!0) {
                    case h:
                        return t || a("rstv_is_tablet", !0), !0
                }
        }
        return t || a("rstv_is_tablet", !1), !1
    }

    function z() {
        switch (!0) {
            case c("rstv_is_tv"):
                return a("rstv_is_tv")
        }
        var e = A(), t = /googletv|smart\-tv|smarttv|internet +tv|netcast|nettv|appletv|boxee|kylo|roku|vizio|dlnadoc|ce\-html|ouya|xbox|playstation *(3|4)|wii/i.test(e);
        switch (!0) {
            case t:
                return a("rstv_is_tv", !0), !0
        }
        return a("rstv_is_tv", !1), !1
    }

    function W() {
        switch (!0) {
            case c("rstv_is_pc"):
                return a("rstv_is_pc")
        }
        switch (!0) {
            case X() === !1 && z() === !1:
                return a("rstv_is_pc", !0), !0
        }
        return a("rstv_is_pc", !1), !1
    }

    function X() {
        switch (!0) {
            case R() || U(!0):
                return !0;
            default:
                return !1
        }
    }

    function V() {
        switch (!0) {
            case!X():
                return !0;
            default:
                return !1
        }
    }

    function $() {
        var e, t = Array.prototype.slice.call(arguments), n = isBool(t[0]) ? t[0] : !1;
        switch (!0) {
            case c("rstv_ort_curr") && !n:
                return a("rstv_ort_curr")
        }
        switch (!0) {
            case n:
                a("rstv_viewportW rstv_viewportW_dip rstv_viewportH rstv_viewportH_dip rstv_screenW rstv_screenH", null)
        }
        var r, i, s = A(), o = /opera.+(mini|mobi)/i.test(s), u = b(), f = w(), l = E(), h = S(), p = l / h, d = l - u;
        switch (d = Math.abs(d), r = o && 260 > u ? 4 >= d && p >= 1 ? !0 : !1 : !0, i = !!(u >= f && r), !0) {
            case i:
                switch (e = "landscape", !0) {
                    case!n:
                        a("rstv_is_portrait", !1), a("rstv_is_landscape", !0)
                }
                break;
            default:
                switch (e = "portrait", !0) {
                    case!n:
                        a("rstv_is_portrait", !0), a("rstv_is_landscape", !1)
                }
        }
        return e
    }

    function J() {
        a("rstv_ort_curr rstv_is_portrait rstv_is_landscape", null), a("rstv_ort_curr", $())
    }

    function K() {
        switch (!0) {
            case c("rstv_is_portrait"):
                return a("rstv_is_portrait")
        }
        return "portrait" == $()
    }

    function Q() {
        switch (!0) {
            case c("rstv_is_landscape"):
                return a("rstv_is_landscape")
        }
        return "landscape" == $()
    }

    function G() {
        var e, t, n = Q(), r = E(), i = S(), s = p(n ? "h" : "w"), o = p(n ? "w" : "h"), u = getClosestNumberMatchArray(s, r), a = getClosestNumberMatchArray(o, i), f = Z();
        switch (!0) {
            case u >= a:
                e = a + "_" + u;
                break;
            default:
                e = u + "_" + a
        }
        return t = array_search(e, f)
    }

    function Y() {
        switch (!0) {
            case c("rstv_is_cache_res_list"):
                return a("rstv_cache_res_list")
        }
        var e = ["qqvga", "qqvgax1", "hqvga", "hqvgax1", "hqvgax2", "hvgax1", "qvga", "wqvga", "wqvga1", "hvga", "hvga1", "hvga2", "hvga3", "hvgax1", "hvgax2", "vga", "wvga", "wvgax1", "fwvga", "svga", "dvga", "dvgax1", "wsvga", "wsvga1", "xga", "wxga", "wxga1", "wxga2", "wxga3", "wxga4", "wxga5", "xga+", "wxga+", "sxga", "sxga+", "wsxga+", "uxga", "wuxga", "qwxga", "qxga", "wqxga", "qsxga", "wqsxga", "quxga", "wquxga", "hxga", "whxga", "hsxga", "whsxga", "huxga", "whuxga", "nhd", "nhdx1", "qhd", "hd", "720p", "fhd", "1080p", "1080i", "wqhd", "mbprhd", "4kuhd", "8kuhd"];
        return a("rstv_is_cache_res_list", !0), a("rstv_cache_res_list", e), e
    }

    function Z() {
        switch (!0) {
            case c("rstv_is_cache_res_matrix"):
                return a("rstv_cache_res_matrix")
        }
        var e = {
            qqvga: "120_160",
            qqvgax1: "128_160",
            hqvga: "160_240",
            hqvgax1: "240_240",
            hqvgax2: "240_260",
            qvga: "240_320",
            wqvga: "240_400",
            wqvga1: "240_432",
            hvga: "320_480",
            hvga1: "360_480",
            hvga2: "272_480",
            hvga3: "240_640",
            hvgax1: "200_640",
            hvgax2: "300_640",
            hvgax3: "360_400",
            vga: "480_640",
            wvga: "480_800",
            wvgax1: "352_800",
            fwvga: "480_854",
            svga: "600_800",
            dvga: "640_960",
            dvgax1: "640_1136",
            wsvga: "576_1024",
            wsvga1: "600_1024",
            xga: "768_1024",
            wxga: "768_1280",
            wxga1: "720_1280",
            wxga2: "800_1280",
            wxga3: "768_1360",
            wxga4: "768_1366",
            wxga5: "720_720",
            "xga+": "864_1152",
            "wxga+": "900_1440",
            sxga: "1024_1280",
            "sxga+": "1050_1400",
            "wsxga+": "1050_1680",
            uxga: "1200_1600",
            wuxga: "1200_1920",
            qwxga: "1152_2048",
            qxga: "1536_2048",
            wqxga: "1600_2560",
            "wqxga+": "1800_3200",
            qsxga: "2048_2560",
            wqsxga: "2048_3200",
            quxga: "2400_3200",
            wquxga: "2400_3840",
            hxga: "3072_4096",
            whxga: "3200_5120",
            hsxga: "4096_5120",
            whsxga: "4096_6400",
            huxga: "4800_6400",
            whuxga: "4800_7680",
            nhd: "360_640",
            nhdx1: "320_640",
            qhd: "540_960",
            hd: "720_1280",
            "720p": "720_1280",
            fhd: "1080_1920",
            "1080p": "1080_1920",
            "1080i": "1080_1920",
            wqhd: "1440_2560",
            mbprhd: "1800_2880",
            "4kuhd": "2160_3840",
            "8kuhd": "4320_7680"
        };
        return a("rstv_is_cache_res_matrix", !0), a("rstv_cache_res_matrix", e), e
    }

    function et(e, t) {
        try {
            var n, r, i, s, o, u, a, f = [], l = "", c = "", h = "", p = [], d = "", v = [], m = "", g = [], y = [], b = [], w = [], E = !1, S = !1, x = 0, T = "", N = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax"], C = [], k = [], L = count(e), A = count(t), O = count(f);
            switch (!0) {
                case!isArray(e):
                    throw new Error("The first argument must be an array!");
                case isArray(e) && 0 == L:
                    throw new Error("The first argument must not be empty!")
            }
            switch (!0) {
                case A > 0 && O > 0:
                    throw new Error("You can only define either 'Classes' or 'Attributes' settings!")
            }
            switch (!0) {
                case A > 0:
                    switch (E = !0, !0) {
                        case A !== L:
                            throw new Error("The number items for 'Breakpoints' and 'Classes' settings must match")
                    }
            }
            switch (!0) {
                case O > 0:
                    switch (S = !0, !0) {
                        case O !== L:
                            throw new Error("The number items for 'Breakpoints' and 'Attributes' settings must match")
                    }
            }
            n = Y(), r = Z();
            for (var M = 0; L > M; M++) {
                switch (i = e[M], T = N[M], !0) {
                    case/-+/i.test(i) && !/^[^-]*-[^-]*$/i.test(i):
                        h += "2"
                }
                switch (l = "", c = "", !0) {
                    case substr_count(i, "-p") > 0:
                        l = "p", c = "-p", y.push("p");
                        break;
                    case substr_count(i, "-l") > 0:
                        l = "l", c = "-l", y.push("l");
                        break;
                    default:
                        y.push("x")
                }
                switch (s = i.replace("" + c, ""), !0) {
                    case in_array(s, n):
                        switch (o = r["" + s], w = arrayToInteger(explode("_", o)), d = parseInt(w[0]), m = parseInt(w[1]), u = d, a = m, !0) {
                            case"l" == l:
                                u = m, a = d
                        }
                        p[T] = u, v[T] = a, g.push("r");
                        break;
                    case/[0-9]+/i.test(s):
                        p[T] = parseInt(s), v[T] = parseInt(s), g.push("v");
                        break;
                    default:
                        h += "1"
                }
                C.push(T), x++
            }
            switch (!0) {
                case/[1]+/i.test(h):
                    throw new Error("There are errors in your 'Breakpoints' settings!");
                case/[2]+/i.test(h):
                    throw new Error("There are errors in your 'Breakpoints' settings with regard to the way you have defined orientation markers e.g. -p or -l!")
            }
            var _, D, P = function (e, t) {
                return e == t ? 0 : t > e ? -1 : 1
            }, H = [], B = [], j = [], F = [], I = [], q = [], R = [];
            q = f, H = uasort(p, P), k = array_keys(H);
            for (var U = count(H), M = 0; U > M; M++)_ = k[M], D = array_search(_, C), B[_] = v[_], j[M] = g[D], F[M] = y[D], I[M] = t[D], R[M] = q[D];
            switch (b.bp_w = implode("|", H), b.bp_h = implode("|", B), b.bp_o = implode("|", F), b.bp_t = implode("|", j), !0) {
                case E:
                    var z = implode("|", I);
                    b.bp_c = z
            }
            switch (!0) {
                case S:
                    var W = implode("|", R);
                    b.bp_a = W
            }
            return b
        } catch (X) {
            var V = "There was an error: " + X.message;
            alert(V)
        }
    }

    function tt(e, t) {
        var n = [];
        return n = et(e, t)
    }

    function nt() {
        var t = Array.prototype.slice.call(arguments), r = isNumber(t[0]) ? "_" + t[0] : "", s = function () {
            var t = a("rstv_viewportW"), s = a("rstv_viewportH");
            i();
            var o, u, f, l, c, h, p, d, v = X(), m = $(!0), g = a("rstv_ort_curr"), y = !1;
            switch (N(), !0) {
                case v:
                    switch (o = a("rstv_viewportW"), u = a("rstv_viewportH"), f = o - t, h = u - s, l = Math.abs(f), p = Math.abs(h), c = l / t * 100, d = p / s * 100, !0) {
                        case 1 > c:
                            switch (!0) {
                                case d > 35 && 0 > h:
                                    y = !0;
                                    break;
                                case d > 35 && h > 0:
                                    y = !0;
                                    break;
                                case d > 12 && 35 >= d && h > 0:
                                    y = !0;
                                    break;
                                case 0 == d:
                                    y = !0
                            }
                    }
            }
            switch (!0) {
                case!y:
                    switch (!0) {
                        case g !== m:
                            J(), n(e).trigger("change_orientation" + r);
                            break;
                        default:
                            switch (!0) {
                                case!v:
                                    n(e).trigger("resize_viewport" + r)
                            }
                    }
            }
        };
        it(s)
    }

    function rt(t) {
        var r = Array.prototype.slice.call(arguments), i = isNumber(r[1]) ? "_" + r[1] : "", s = function () {
            n(e).trigger("resize_container" + i)
        };
        st(t, s)
    }

    function it(e) {
        return gt.on("resize", e), ot
    }

    function st(e, t) {
        return e.on("resizecontainer", t), ot
    }

    switch (!0) {
        case"function" != typeof n:
            throw"Restive.JS requires JQuery to run!"
    }
    var ot, ut, at, ft, lt, ct, ht, pt, dt, vt = e, mt = t.documentElement, gt = n(vt), yt = vt.screen, bt = vt.matchMedia || vt.msMatchMedia || Object;
    e.rstv_store = {main: {}}, e.parent.rstv_store = {main: {}}, e.rstv_store.storage = function () {
        var t = Array.prototype.slice.call(arguments), n = t[0], r = t[1], i = "undefined" != typeof r && null !== r && !!(isString(r) && "" != r || isNumber(r) || isArray(r) && count(r) > 0 || isBool(r) || isObject(r)), s = null === r;
        switch (!0) {
            case i:
                return void (e.rstv_store.main["" + n] = r);
            case s:
                return void (e.rstv_store.main["" + n] = null);
            default:
                return e.rstv_store.main["" + n]
        }
    };
    var wt = function () {
        e.rstv_store.main.rstv_is_priv_browsing = !!u();
        var t, n = a("rstv_is_init");
        switch (!0) {
            case n:
                a("rstv_timestamp_curr", microtime(!0)), a("rstv_url", getUrl("bp")), s(), o(), i(), N(), J(), t = !1;
                break;
            default:
                a("rstv_timestamp_curr", microtime(!0)), a("rstv_timestamp_init", a("rstv_timestamp_curr")), a("rstv_loaded_count", 0, "", {expires: 1500}), a("rstv_is_init", !0), a("rstv_url", getUrl("bp")), a("rstv_url_hash", md5(getUrl("bp"))), i(), N(), a("rstv_ort_init", $()), a("rstv_ort_curr", $()), s(), t = !0
        }
        return t
    };
    return ut = L(b), at = L(w), ct = L(E), ht = L(S), ft = L(x), lt = L(T), pt = L(g), dt = L(y), ot = {
        init: wt(),
        reInit: r,
        getUserAgent: A,
        isStorageValueSet: c,
        store: a,
        storeVarTracker: f,
        storeVarValidator: l,
        incrementStorageValue: h,
        getBreakpoints: tt,
        viewportW: b,
        viewportH: w,
        screenW: E,
        screenH: S,
        pixelW: x,
        pixelH: T,
        vSpan: ut,
        vPitch: at,
        dSpan: ct,
        dPitch: ht,
        cSpan: ft,
        cPitch: lt,
        eSpan: pt,
        ePitch: dt,
        isRetina: k,
        getPixelRatio: C,
        getPlatform: O,
        getFormFactor: q,
        getOrientation: $,
        getResolution: G,
        isPortrait: K,
        isLandscape: Q,
        viewportMonitor: nt,
        containerMonitor: rt,
        isMobile: X,
        isNonMobile: V,
        isPhone: R,
        isTablet: U,
        isPC: W,
        isTV: z,
        isIOS: _,
        isApple: D,
        isAndroid: P,
        isSymbian: H,
        isBlackberry: B,
        isWindows: j,
        isWindowsPhone: F,
        resize: it,
        resizeContainer: st
    }
}(window, document, jQuery);
!function (e, t, n) {
    Function.prototype.getFuncBody = function () {
        var e = this.toString().match(/\{([\s\S]*)\}/m)[1];
        return e.replace(/^\s*\/\/.*$/gm, "")
    };
    var r = {
        init: function (t) {
            try {
                r._multiConstructorCounter(), r._multiConstructorManager();
                var i, s, o = t, u = ["all", "ios", "android", "symbian", "blackberry", "windows"], f = ["all", "pc", "tv", "tablet", "phone"], l = t.platform, h = t.formfactor, p = Restive.store("rstv_multi_start"), v = Restive.store("rstv_multi_count"), m = Restive.store("rstv_multi_abort_2");
                switch (!0) {
                    case in_array(l, u) === !1:
                        return r._error("rstv_error_001", '"' + l + '" is not a valid Platform option!'), !1
                }
                switch (!0) {
                    case in_array(h, f) === !1:
                        return r._error("rstv_error_002", '"' + h + '" is not a valid Form Factor option!'), !1
                }
                switch (!0) {
                    case m:
                        return r._error("rstv_error_003", "If you are calling the Restive.JS Constructor more than once, you must call $.restive.endMulti() at the end!"), !1
                }
                var g = [], y = [], b = [];
                y = t.breakpoints, b = t.classes, g = r.getBreakpoints(y, b);
                var w = [];
                switch (w.platform = r.getPlatform(), w.formfactor = r.getFormFactor(), w.is_mobile = r.isMobile(), w.pixelratio = r.getPixelRatio(), w.orientation = r.getOrientation(), w.selector = getSelector(this), w.tagname = this.prop("tagName").toLowerCase(), i = r._responsiveBasis(o, w), s = "c" == i, w.is_resp_basis_container = s, !0) {
                    case s:
                        r._containerMonitor(g, this, o, w);
                        break;
                    default:
                        switch (!0) {
                            case!p:
                                r._viewportMonitor(g, this, o, w), r._callbackManager(o, ["ready", "init"]);
                                break;
                            default:
                                e.parent.rstv_store.main["rstv_breakpoints_" + v] = g, e.parent.rstv_store.main["rstv_this_" + v] = this, e.parent.rstv_store.main["rstv_options_" + v] = o, e.parent.rstv_store.main["rstv_core_info_" + v] = w, e.rstv_store.main = e.parent.rstv_store.main
                        }
                }
                return Restive.store("rstv_turbo_classes_reflow_status_in", null), this.each(function () {
                    var e = n(this);
                    r.setBreakpoints(g, e, o, w)
                })
            } catch (E) {
                alert(E), console.log(E)
            }
        }, _error: function (e, t) {
            var n = "true" === String(Restive.store(e + "_init")).toLowerCase();
            switch (!0) {
                case!n:
                    throw Restive.store(e + "_init", !0), new Error(t)
            }
        }, _callbackManager: function () {
            var e, t, i = Array.prototype.slice.call(arguments), s = i[0], o = i[1];
            switch (!0) {
                case in_array("ready", o):
                    var u = s.onReady, a = s.onReady.getFuncBody().length;
                    switch (!0) {
                        case n.isFunction(u) && a > 0:
                            u()
                    }
            }
            switch (!0) {
                case in_array("resize", o):
                    var f = s.onResize, l = s.onResize.getFuncBody().length;
                    switch (!0) {
                        case n.isFunction(f) && l > 0:
                            f()
                    }
            }
            switch (!0) {
                case in_array("turboclassesreflow", o):
                    var h = o[1], p = s.onTurboClassReflow, v = s.onTurboClassReflow.getFuncBody().length;
                    switch (!0) {
                        case n.isFunction(p) && v > 0:
                            p()
                    }
                    var m = s.onTurboClassReflowIn, g = s.onTurboClassReflowIn.getFuncBody().length;
                    switch (!0) {
                        case n.isFunction(m) && g > 0:
                            switch (!0) {
                                case"in" == h:
                                    m()
                            }
                    }
                    var y = s.onTurboClassReflowOut, b = s.onTurboClassReflowOut.getFuncBody().length;
                    switch (!0) {
                        case n.isFunction(y) && b > 0:
                            switch (!0) {
                                case"out" == h:
                                    y()
                            }
                    }
            }
            switch (!0) {
                case in_array("rotate", o):
                    var w = Restive.getOrientation(), E = s.onRotate, S = s.onRotate.getFuncBody().length;
                    switch (!0) {
                        case n.isFunction(E) && S > 0:
                            E()
                    }
                    var x = s.onRotateToP, T = s.onRotateToP.getFuncBody().length;
                    switch (!0) {
                        case n.isFunction(x) && T > 0:
                            switch (!0) {
                                case"portrait" == w:
                                    x()
                            }
                    }
                    var N = s.onRotateToL, C = s.onRotateToL.getFuncBody().length;
                    switch (!0) {
                        case n.isFunction(N) && C > 0:
                            switch (!0) {
                                case"landscape" == w:
                                    N()
                            }
                    }
            }
            switch (!0) {
                case in_array("addclass", o) || in_array("removeclass", o):
                    var k = o[0], L = o[1], A = {addclass: "onAddClass", removeclass: "onRemoveClass"};
                    switch (e = s[A["" + k]], t = e.getFuncBody().length, !0) {
                        case n.isFunction(e) && t > 0:
                            e(L)
                    }
            }
            switch (!0) {
                case in_array("init", o):
                    switch (!0) {
                        case in_array("init", o):
                            for (var O = ["onPortrait", "onLandscape", "onRetina", "onPhone", "onTablet", "onPC", "onTV", "onIOS", "onAndroid", "onSymbian", "onBlackberry", "onWindows", "onWindowsPhone", "onMobile", "onNonMobile"], M = ["isPortrait", "isLandscape", "isRetina", "isPhone", "isTablet", "isPC", "isTV", "isIOS", "isAndroid", "isSymbian", "isBlackberry", "isWindows", "isWindowsPhone", "isMobile", "isNonMobile"], _ = 0; _ < count(M); _++)switch (e = s[O[_]], t = e.getFuncBody().length, !0) {
                                case n.isFunction(e) && t > 0:
                                    var D = r[M[_]], P = D();
                                    switch (!0) {
                                        case P:
                                            e()
                                    }
                            }
                    }
            }
        }, _URLMonitor: function () {
            var e = Restive.store("rstv_url"), t = Restive.store("rstv_url_hash"), n = md5(e);
            switch (!0) {
                case n != t:
                    Restive.store("rstv_multi_bpm_idx rstv_cache_bpm rstv_cache_bpm_lock rstv_cache_req rstv_cache_bpm_viewport_diff", null), Restive.store("rstv_url_hash", n)
            }
        }, _responsiveBasis: function (e, t) {
            var n, r = t.selector, i = /^#[^\s]+$/i.test(r), s = elementIsChildOf("body", r), o = e.anchor;
            try {
                switch (!0) {
                    case s && ("element" == o || "e" == o):
                        switch (!0) {
                            case!i:
                                throw new Error("You must use only the JQuery ID selector when the 'anchor' option is set to 'e' or 'element'!")
                        }
                        n = "c";
                        break;
                    default:
                        n = "v", Restive.store("rstv_resp_basis_viewport_init", !0)
                }
                return n
            } catch (u) {
                alert(u), console.log(u)
            }
        }, _viewportMonitor: function (t, i, s, o) {
            var u = "resize_viewport", f = "change_orientation";
            n(e).on(u, function () {
                r._onResizeViewport(t, i, s, o)
            }), n(e).on(f, function () {
                r._onChangeOrientation(t, i, s, o)
            }), Restive.viewportMonitor()
        }, _containerMonitor: function (e, t, n, i) {
            var s = "resizecontainer";
            t.on(s, function () {
                r._onResizeContainer(e, t, n, i)
            })
        }, _onResizeViewport: function (e, t, i, s) {
            try {
                return t.each(function () {
                    var t = n(this);
                    r.setBreakpoints(e, t, i, s, "rv"), r._callbackManager(i, ["resize"])
                })
            } catch (o) {
                alert(o), console.log(o)
            }
        }, _onResizeContainer: function (e, t, i, s) {
            try {
                return t.each(function () {
                    var t = n(this);
                    r.setBreakpoints(e, t, i, s, "rc")
                })
            } catch (o) {
                alert(o), console.log(o)
            }
        }, _onChangeOrientation: function (e, t, i, s) {
            try {
                return t.each(function () {
                    var t = n(this);
                    r.setBreakpoints(e, t, i, s, "co"), r._callbackManager(i, ["rotate"])
                })
            } catch (o) {
                alert(o), console.log(o)
            }
        }, getBreakpoints: function (e, t) {
            return Restive.getBreakpoints(e, t)
        }, setBreakpoints: function () {
            var e = Array.prototype.slice.call(arguments), t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], u = !1, a = !1, f = !1, l = s.is_resp_basis_container, c = Restive.store("rstv_multi_abort_1");
            switch (!0) {
                case"co" == o:
                    u = !0
            }
            switch (!0) {
                case"rv" == o:
                    a = !0
            }
            switch (!0) {
                case"rc" == o:
                    f = !0
            }
            switch (!0) {
                case c:
                    return r._error("rstv_error_004", "If you are calling the Restive.JS Constructor more than once, you must call $.restive.startMulti() before calling these constructors!"), !1
            }
            var h = Restive.store("rstv_multi_start"), p = parseInt(Restive.store("rstv_multi_count")), v = parseInt(Restive.store("rstv_multi_bpm_idx")), m = Restive.store("rstv_cache_bpm_lock");
            switch (!0) {
                case!l:
                    switch (!0) {
                        case h && !u && m:
                            switch (!0) {
                                case isNumber(p) && isNumber(v) && p != v:
                                    return !1
                            }
                    }
            }
            var g, y, b, w, E, S, x, T = (Restive.getUserAgent(), i.platform, i.formfactor, i.force_dip), N = s.platform, C = s.formfactor, k = (s.pixelratio, 1 == s.is_mobile ? "true" : "false", Restive.store("rstv_ort_init"), Restive.store("rstv_ort_curr"), Restive.isPortrait()), L = k === !0 ? !1 : !0, A = [], O = !1, M = t.bp_w, _ = t.bp_h, D = t.bp_o, P = t.bp_t, H = t.bp_c, B = [], j = [], F = [], I = [];
            switch (g = Restive.viewportW(), x = g, y = Restive.viewportH(), b = Restive.screenW(), w = Restive.screenH(), E = Restive.pixelW(), S = Restive.pixelH(), !0) {
                case 1 == T:
                    x = Restive.pixelW()
            }
            switch (B = arrayToInteger(explode("|", M)), j = arrayToInteger(explode("|", _)), F = explode("|", D), I = explode("|", P), !0) {
                case"undefined" != typeof H || null != H:
                    O = !0, A = explode("|", H)
            }
            var q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et, tt, nt, rt, it, st, ot = "", ut = !0, at = !0, ft = !1, lt = !1, ct = !1, ht = !0, pt = !0, dt = "", vt = count(B);
            q = arrayHasDuplicates(B), R = q ? !1 : !0;
            for (var mt = 0; vt > mt; mt++) {
                switch (!0) {
                    case"all" != i.platform && i.platform != N:
                        ht = !1
                }
                switch (!0) {
                    case"all" != i.formfactor && i.formfactor != C:
                        pt = !1
                }
                if (!ht || !pt)break;
                var gt = mt - 1;
                switch (U = B[mt], !0) {
                    case mt > 0:
                        z = B[gt];
                        break;
                    default:
                        z = 0, W = 0
                }
                switch (J = j[mt], Z = I[mt], et = F[mt], at = ut, !0) {
                    case"p" == et:
                        it = k ? !0 : !1, ft = !0, ut = it, ot = at === !1 ? W : ot;
                        break;
                    case"l" == et:
                        it = L ? !0 : !1, ft = !0, ut = it, ot = at === !1 ? W : ot;
                        break;
                    default:
                        ot = ft === !0 && at === !1 ? W : ot, W = mt > 0 ? U : 0, it = !0, ut = it
                }
                switch (!0) {
                    case 0 == mt:
                        X = 0, ot = U;
                        break;
                    case mt >= 1:
                        switch (!0) {
                            case U !== z:
                                ot = U + "-!" + ot
                        }
                        X = parseInt(getValueAfterExplode(ot, "-!", 1))
                }
                switch (tt = A[mt], !0) {
                    case 0 == mt:
                        V = X, $ = U;
                        break;
                    default:
                        V = 0 == X ? X : X + 1, $ = U
                }
                switch (!0) {
                    case l:
                        rt = Restive.eSpan(V, $, n, i.anchor_e_df, i.force_dip);
                        break;
                    default:
                        rt = 1 == T ? Restive.cSpan(V, $) : Restive.vSpan(V, $)
                }
                switch (!0) {
                    case rt && it:
                        switch (!0) {
                            case l:
                                lt = !0;
                                break;
                            default:
                                switch (K = $ - x, Q = Math.abs(K), G = x - V, Y = .1 * $, Y = Math.round(Y), !0) {
                                    case u:
                                        switch (!0) {
                                            case K > Y:
                                                dt = "4";
                                                break;
                                            default:
                                                dt = "2"
                                        }
                                        break;
                                    default:
                                        switch (!0) {
                                            case K > Y:
                                                dt = "3";
                                                break;
                                            default:
                                                dt = "1"
                                        }
                                }
                                switch (lt = !0, !0) {
                                    case lt:
                                        switch (ct = !0, nt = tt, !0) {
                                            case"x" != et:
                                                R = !0
                                        }
                                }
                        }
                        break;
                    default:
                        lt = !1
                }
                if (lt && R)break
            }
            switch (!0) {
                case ct:
                    lt = !0, tt = nt
            }
            switch (!0) {
                case!lt:
                    switch (!0) {
                        case l:
                            return void r.unsetElementDOM(n, i)
                    }
                    switch (V = 0, $ = 0, !0) {
                        case!Restive.store("rstv_multi_start") || u:
                            r.unsetElementDOM(n, i)
                    }
                    switch (!0) {
                        case!ht && pt:
                            dt = "7";
                            break;
                        case!pt && ht:
                            dt = "8";
                            break;
                        case!pt && !ht:
                            dt = "9";
                            break;
                        default:
                            switch (!0) {
                                case u:
                                    dt = "6";
                                    break;
                                default:
                                    dt = "5"
                            }
                    }
                    switch (st = r._addTurboClasses("", i.turbo_classes), st = r._addTurboClassesReflow(st, i), !0) {
                        case!Restive.store("rstv_multi_start") || u:
                            r.setElementDOM(n, st, i)
                    }
                    Restive.store("rstv_breakpoint_match_curr", !1);
                    break;
                case lt:
                    switch (st = r._addTurboClasses(tt, i.turbo_classes), st = r._addTurboClassesReflow(st, i), !0) {
                        case l:
                            return void r.setElementDOM(n, st, i)
                    }
                    switch (!0) {
                        case Restive.store("rstv_multi_start"):
                            var yt = parseInt(Restive.store("rstv_bpm_h_counter"));
                            switch (!0) {
                                case u:
                                    r.setElementDOM(n, st, i);
                                    break;
                                default:
                                    switch (!0) {
                                        case yt > 1:
                                            var bt = parseInt(Restive.store("rstv_cache_bpm_viewport_diff"));
                                            switch (!0) {
                                                case bt > Q:
                                                    switch (r.setElementDOM(n, st, i), !0) {
                                                        case!m:
                                                            Restive.store("rstv_multi_bpm_idx", p)
                                                    }
                                                    Restive.store("rstv_cache_bpm_viewport_diff", Q)
                                            }
                                            break;
                                        default:
                                            switch (r.setElementDOM(n, st, i), !0) {
                                                case!m:
                                                    Restive.store("rstv_multi_bpm_idx", p)
                                            }
                                            Restive.store("rstv_cache_bpm_viewport_diff", Q)
                                    }
                                    yt++, Restive.store("rstv_bpm_h_counter", yt, "", {expires: 1e3})
                            }
                            break;
                        default:
                            r.setElementDOM(n, st, i)
                    }
                    Restive.store("rstv_breakpoint_match_curr", !0)
            }
            var wt = Restive.store("rstv_cache_bpm_lock");
            switch (!0) {
                case h && !u && !(isString(wt) && "" != wt || isBool(wt)):
                    Restive.store("rstv_breakpoint_match_curr") ? r._extVarTracker("rstv_cache_bpm", "h", "ls", !1, "", !1) : r._extVarTracker("rstv_cache_bpm", "m", "ls", !1, "", !1)
            }
            switch (!0) {
                case lt:
                    return !0
            }
            return !1
        }, _addTurboClassesReflow: function (e, t) {
            switch (!0) {
                case r.isPC():
                    switch (!0) {
                        case t.turbo_classes_reflow && isString(t.turbo_classes) && "" != t.turbo_classes:
                            var n, i, s, o, u, a, f, l, c, h = [], p = [], v = e, m = !1, g = Restive.store("rstv_turbo_classes_reflow_status_in");
                            switch (h = explode(",", t.turbo_classes_reflow_limits), a = parseInt(h[0]), u = parseInt(h[1]), n = /is_mobile=/i.test(t.turbo_classes), !0) {
                                case n:
                                    p = explode(",", t.turbo_classes);
                                    for (var y = 0; y < count(p); y++) {
                                        switch (l = getValueAfterExplode(p[y], "=", 0), c = getValueAfterExplode(p[y], "=", 1), !0) {
                                            case"is_mobile" == l:
                                                switch (i = 1 == t.force_dip ? Restive.cSpan(0, u) : Restive.vSpan(0, u), !0) {
                                                    case i:
                                                        switch (v += " " + c, m = !0, !0) {
                                                            case!g && m:
                                                                Restive.store("rstv_turbo_classes_reflow_status_in", !0), r._callbackManager(t, ["turboclassesreflow", "in"])
                                                        }
                                                        break;
                                                    default:
                                                        switch (m = !1, !0) {
                                                            case g && !m:
                                                                Restive.store("rstv_turbo_classes_reflow_status_in", !1), r._callbackManager(t, ["turboclassesreflow", "out"])
                                                        }
                                                }
                                        }
                                        switch (!0) {
                                            case"is_phone" == l:
                                                s = 1 == t.force_dip ? Restive.cSpan(0, a) : Restive.vSpan(0, a), v = s ? v + " " + c : v
                                        }
                                        switch (!0) {
                                            case"is_tablet" == l:
                                                f = a + 1, o = 1 == t.force_dip ? Restive.cSpan(f, u) : Restive.vSpan(f, u), v = o ? v + " " + c : v
                                        }
                                    }
                                    return v
                            }
                    }
            }
            return e
        }, _addTurboClasses: function (e, t) {
            switch (!0) {
                case!isString(t) || "" == t:
                    return e
            }
            var n, i, s, o, u = [], a = [], f = "", l = "", c = {
                is_mobile: "isMobile",
                is_non_mobile: "isNonMobile",
                is_retina: "isRetina",
                is_phone: "isPhone",
                is_tablet: "isTablet",
                is_tv: "isTV",
                is_pc: "isPC",
                is_portrait: "isPortrait",
                is_landscape: "isLandscape"
            };
            u = explode(",", t);
            for (var h = 0; h < count(u); h++)switch (n = getValueAfterExplode(u[h], "=", 0), i = getValueAfterExplode(u[h], "=", 1), s = c[n], !0) {
                case isString(s) && "" != s:
                    switch (o = r[s], !0) {
                        case o():
                            a.push(i)
                    }
            }
            return f = implode(" ", a, !0), l = "" != f ? f + " " + e : e
        }, setElementDOM: function (e, t, n) {
            var i, s = md5(getSelector(e)), o = "rstv_bpm_class_" + s;
            switch (i = isString(Restive.store(o)) && "" != Restive.store(o) ? Restive.store(o) : "", !0) {
                case"" != i:
                    switch (e.removeClass(i).addClass(t), !0) {
                        case i != t:
                            r._callbackManager(n, ["removeclass", "" + i])
                    }
                    break;
                default:
                    e.addClass(t)
            }
            Restive.store(o, t), r._callbackManager(n, ["addclass", "" + t])
        }, unsetElementDOM: function (e, t) {
            var n, i = md5(getSelector(e)), s = "rstv_bpm_class_" + i;
            n = isString(Restive.store(s)) && "" != Restive.store(s) ? Restive.store(s) : "", e.removeClass(n), r._callbackManager(t, ["removeclass", "" + n])
        }, _extVarTracker: function (e, t) {
            var n = Array.prototype.slice.call(arguments), r = isString(n[2]) && "" != n[2] ? n[2] : "ck", i = isBool(n[3]) ? n[3] : !1, s = isNumber(n[4]) || isString(n[4]) ? parseInt(n[4]) : "", o = isBool(n[5]) ? n[5] : !0, u = isString(n[6]) && "" != n[6] ? n[6] : "-!", a = isNumber(n[7]) || isString(n[7]) ? parseInt(n[7]) : 80;
            return Restive.storeVarTracker(e, t, r, i, s, o, u, a)
        }, _multiConstructorSelectPos: function () {
            var e, t = Restive.store("rstv_cache_bpm"), n = explode("-!", t), r = parseInt(Restive.store("rstv_multi_bpm_idx"));
            e = implode("", n);
            var i, s, o = new RegExp("^[^h]*h[^h]*$", "gi"), u = new RegExp("^m+$", "gi");
            switch (!0) {
                case o.test(e):
                    i = strrpos(e, "h");
                    break;
                case u.test(e):
                    Restive.store("rstv_cache_bpm_all_miss", !0, "", {expires: 2e3}), i = strrpos(e, "m");
                    break;
                case substr_count(e, "h") > 1:
                    i = r - 1
            }
            return s = i + 1, Restive.store("rstv_multi_bpm_idx", s), i
        }, _multiConstructorManageEvents: function (t) {
            n(e).off("resize");
            var i = parseInt(t) + 1, s = e.parent.rstv_store.main["rstv_breakpoints_" + i], o = e.parent.rstv_store.main["rstv_this_" + i], u = e.parent.rstv_store.main["rstv_options_" + i], f = e.parent.rstv_store.main["rstv_core_info_" + i];
            switch (!0) {
                case Restive.store("rstv_resp_basis_viewport_init"):
                    r._viewportMonitor(s, o, u, f), r._callbackManager(u, ["ready", "init"])
            }
        }, _multiConstructorFinalize: function () {
            var e = r._multiConstructorSelectPos();
            r._multiConstructorManageEvents(e), Restive.store("rstv_cache_bpm_lock", !0), Restive.store("rstv_cache_req", null), Restive.store("rstv_multi_count", null)
        }, _multiConstructorStart: function () {
            switch (Restive.store("rstv_multi_count", 0), Restive.store("rstv_multi_start", !0), Restive.store("rstv_multi_abort_1", !1), Restive.store("rstv_multi_abort_2", !1), Restive.store("rstv_bpm_h_counter", 1, "", {expires: 1e3}), Restive.store("rstv_bpm_m_counter", 1, "", {expires: 1e3}), !0) {
                case!Restive.isStorageValueSet("rstv_multi_start_count"):
                    Restive.store("rstv_multi_start_count", 1), Restive.store("rstv_multi_end", !1);
                    break;
                default:
                    Restive.incrementStorageValue("rstv_multi_start_count")
            }
        }, _multiConstructorManager: function () {
            var e = Restive.store("rstv_multi_start"), t = Restive.store("rstv_multi_end"), n = parseInt(Restive.store("rstv_multi_count")), i = parseInt(Restive.store("rstv_multi_start_count"));
            switch (!0) {
                case n > 1:
                    switch (!0) {
                        case e === !1:
                            Restive.store("rstv_multi_abort_1", !0)
                    }
            }
            switch (!0) {
                case i > 1 && t === !1:
                    Restive.store("rstv_multi_abort_2", !0)
            }
            r._URLMonitor()
        }, _multiConstructorCounter: function () {
            Restive.incrementStorageValue("rstv_multi_count")
        }, _multiConstructorEnd: function () {
            Restive.store("rstv_multi_start_count", 0), Restive.store("rstv_multi_end", !0), r._multiConstructorFinalize()
        }, getUserAgent: function () {
            return Restive.getUserAgent()
        }, getPlatform: function () {
            return Restive.getPlatform()
        }, getFormFactor: function () {
            return Restive.getFormFactor()
        }, getOrientation: function () {
            return Restive.getOrientation()
        }, getResolution: function () {
            return Restive.getResolution()
        }, getPixelRatio: function (e) {
            return Restive.getPixelRatio(e)
        }, getViewportW: function () {
            return Restive.viewportW()
        }, getViewportH: function () {
            return Restive.viewportH()
        }, getScreenW: function () {
            return Restive.screenW()
        }, getScreenH: function () {
            return Restive.screenH()
        }, getPixelW: function () {
            return Restive.pixelW()
        }, getPixelH: function () {
            return Restive.pixelH()
        }, isRetina: function () {
            return Restive.isRetina()
        }, isMobile: function () {
            return Restive.isMobile()
        }, isNonMobile: function () {
            return Restive.isNonMobile()
        }, isPhone: function () {
            return Restive.isPhone()
        }, isTablet: function () {
            return Restive.isTablet()
        }, isTV: function () {
            return Restive.isTV()
        }, isPC: function () {
            return Restive.isPC()
        }, isIOS: function () {
            return Restive.isIOS()
        }, isApple: function () {
            return Restive.isApple()
        }, isAndroid: function () {
            return Restive.isAndroid()
        }, isSymbian: function () {
            return Restive.isSymbian()
        }, isBlackberry: function () {
            return Restive.isBlackberry()
        }, isWindows: function () {
            return Restive.isWindows()
        }, isWindowsPhone: function () {
            return Restive.isWindowsPhone()
        }, isPortrait: function () {
            return Restive.isPortrait()
        }, isLandscape: function () {
            return Restive.isLandscape()
        }
    };
    n.fn.restive = function (e) {
        if (r[e])return r[e].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" == typeof e || !e) {
            var t = n.extend({}, n.fn.restive.defaults, e), i = new Array(t);
            return r.init.apply(this, i)
        }
        n.error("Method " + e + " does not exist on Restive.JS")
    }, n.fn.restive.defaults = {
        breakpoints: [],
        classes: [],
        anchor: "window",
        anchor_e_df: "w",
        platform: "all",
        formfactor: "all",
        turbo_classes: "",
        turbo_classes_reflow: !1,
        turbo_classes_reflow_limits: "480,960",
        force_dip: !1,
        onReady: function () {
        },
        onResize: function () {
        },
        onRotate: function () {
        },
        onRotateToP: function () {
        },
        onRotateToL: function () {
        },
        onPortrait: function () {
        },
        onLandscape: function () {
        },
        onRetina: function () {
        },
        onPhone: function () {
        },
        onTablet: function () {
        },
        onPC: function () {
        },
        onTV: function () {
        },
        onIOS: function () {
        },
        onAndroid: function () {
        },
        onSymbian: function () {
        },
        onBlackberry: function () {
        },
        onWindows: function () {
        },
        onWindowsPhone: function () {
        },
        onMobile: function () {
        },
        onNonMobile: function () {
        },
        onTurboClassReflow: function () {
        },
        onTurboClassReflowIn: function () {
        },
        onTurboClassReflowOut: function () {
        },
        onAddClass: function () {
        },
        onRemoveClass: function () {
        }
    };
    var i = n.restive = function () {
    };
    n.extend(i, {
        getUserAgent: function () {
            return r.getUserAgent()
        }, getPlatform: function () {
            return r.getPlatform()
        }, getFormFactor: function () {
            return r.getFormFactor()
        }, getOrientation: function () {
            return r.getOrientation()
        }, getResolution: function () {
            return r.getResolution()
        }, getPixelRatio: function (e) {
            return r.getPixelRatio(e)
        }, getViewportW: function () {
            return r.getViewportW()
        }, getViewportH: function () {
            return r.getViewportH()
        }, getScreenW: function () {
            return r.getScreenW()
        }, getScreenH: function () {
            return r.getScreenH()
        }, getPixelW: function () {
            return r.getPixelW()
        }, getPixelH: function () {
            return r.getPixelH()
        }, isRetina: function () {
            return r.isRetina()
        }, isMobile: function () {
            return r.isMobile()
        }, isNonMobile: function () {
            return r.isNonMobile()
        }, isPhone: function () {
            return r.isPhone()
        }, isTablet: function () {
            return r.isTablet()
        }, isTV: function () {
            return r.isTV()
        }, isPC: function () {
            return r.isPC()
        }, isIOS: function () {
            return r.isIOS()
        }, isApple: function () {
            return r.isIOS()
        }, isAndroid: function () {
            return r.isAndroid()
        }, isSymbian: function () {
            return r.isSymbian()
        }, isBlackberry: function () {
            return r.isBlackberry()
        }, isWindows: function () {
            return r.isWindows()
        }, isWindowsPhone: function () {
            return r.isWindowsPhone()
        }, isPortrait: function () {
            return r.isPortrait()
        }, isLandscape: function () {
            return r.isLandscape()
        }, startMulti: function () {
            r._multiConstructorStart()
        }, endMulti: function () {
            r._multiConstructorEnd()
        }
    })
}(window, document, jQuery), define("restive", function () {
}), qx.Class.define("APPDDFA", {
    extend: Daddy,
    type: "singleton",
    construct: function () {
        var e = this;
        e.setTitle("connecteDD"), e.setDataManager(new DataManager), e.setRouter(new Router), e.setLM(new LanguageManager), e.setConfig({
            languages: ["de", "en", "ar", "fa", "fr", "sr", "ru", "ti", "ur", "it"],
            categoriesIni: ["consultation", "medic", "german", "jobs", "leisure", "translation", "children", "donation", "community"],
            categoriesMarket: ["consultation", "medic", "german", "jobs", "leisure", "translation", "children", "donation", "community"],
            categoriesEvent: [],
            categoriesBasic: ["housing", "christian", "islam", "jewish", "public", "wifi", "shop"],
            simpleProperties: ["description", "speakerPublic", "spokenLanguages", "phone", "mail", "web", "facebook", "openingHours", "dateFrom", "dateTo"],
            imgPath: "_Resources/Static/Packages/DDFA.dresdenfueralleDe/DDFA/img/"
        }), e.setActiveFilter(null)
    },
    properties: {
        title: {},
        DataManager: {},
        Router: {},
        LM: {},
        data: {},
        mapView: {},
        detailView: {},
        menuView: {},
        legendView: {},
        plusView: {},
        languageView: {},
        formView: {},
        includeView: {},
        userDevice: {},
        config: {},
        currentLang: {},
        activeFilter: {}
    },
    members: {
        init: function (e) {
            var t = this;
            t.detectUserDevice(), t.getLM().init();
            var n = {};
            t.getDataManager().fetchInitialData(function (t) {
                console.debug("fetchedInitialData", t), e()
            }), t.getDataManager().getAllLocations(function (e) {
                n.locations = e.locations, t.setData(n), t.say("fetchedNewData")
            })
        }, detectUserDevice: function () {
            var e = this;
            $("body").restive({
                breakpoints: ["10000"],
                classes: ["nb"],
                turbo_classes: "is_mobile=mobi,is_phone=phone,is_tablet=tablet,is_landscape=landscape"
            }), APP.setUserDevice("desktop"), ($("body").hasClass("mobi") || $("body").hasClass("phone")) && APP.setUserDevice("mobile"), $("body").hasClass("tablet") && APP.setUserDevice("tablet"), $("body").addClass(APP.getUserDevice())
        }
    }
}), define("APPDDFA", function () {
}), qx.Class.define("DataManager", {
    extend: Daddy, type: "singleton", construct: function () {
        var e = this;
        e.addEvents()
    }, members: {
        fetchInitialData: function (e) {
            var t = this, n = {};
            t.getLanguageBib(function (t) {
                APP.getLM().setBib(t[0]), e(n)
            })
        }, fetchAllData: function (e) {
            var t = this, n = {};
            t.getAllLocations(function (r) {
                n.locations = r.locations, t.getLanguageBib(function (t) {
                    APP.getLM().setBib(t[0]), e(n)
                })
            })
        }, _getAllLocations: function (e) {
            $.ajax({
                url: "_Resources/Static/Packages/DDFA.dresdenfueralleDe/DDFA/dummyData/locations.json",
                type: "GET",
                dataType: "text"
            }).done(function (t) {
                e(JSON.parse(t))
            }).fail(function (e) {
                console.debug(e)
            })
        }, getAllCategories: function (e) {
            $.ajax({url: "api/categories", type: "GET", dataType: "json"}).done(function (t) {
                e(t)
            }).fail(function (e) {
                console.debug(e)
            })
        }, getAllLocations: function (e) {
            $.ajax({
                url: "api/locations?locale=" + APP.getLM().getCurrentLang(),
                type: "GET",
                dataType: "json"
            }).done(function (t) {
                e(t)
            }).fail(function (e) {
                console.debug(e)
            })
        }, getLanguageBib: function (e) {
            $.ajax({
                url: "_Resources/Static/Packages/DDFA.dresdenfueralleDe/DDFA/lang/lang.json",
                type: "GET",
                dataType: "text"
            }).done(function (t) {
                e(JSON.parse(t))
            }).fail(function (e) {
                console.debug(e)
            })
        }, addMarketEntry: function (e, t) {
            console.debug("POST api/marketentries", e), $.ajax({
                url: "api/marketentries",
                type: "POST",
                data: e,
                cache: !1,
                dataType: "json",
                processData: !0,
                contentType: !1
            }).done(function (e) {
                t(e)
            }).fail(function (e) {
                t(e)
            })
        }, addLocation: function (e, t) {
            console.debug("POST api/locations", e), $.ajax({
                url: "api/locations",
                type: "POST",
                data: e,
                cache: !1,
                dataType: "json",
                processData: !0,
                contentType: !1
            }).done(function (e) {
                t(e)
            }).fail(function (e) {
                t(e)
            })
        }, addFeedback: function (e, t) {
            $.ajax({
                url: "api/feedback",
                type: "POST",
                data: e,
                cache: !1,
                dataType: "json",
                processData: !0,
                contentType: !1
            }).done(function (e) {
                t(e)
            }).fail(function (e) {
                t(e)
            })
        }, sendToSlack: function (e, t) {
            var n = "*" + e.heading + "*" + ":\n" + e.message;
            window.location.hostname == "afeefa.de" && $.ajax({
                url: "https://hooks.slack.com/services/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",
                type: "POST",
                data: JSON.stringify({text: n}),
                cache: !1,
                dataType: "text",
                processData: !1
            }).done(function (e) {
            }).fail(function (e) {
            })
        }, githubCreateIssue: function (e, t) {
            window.location.hostname == "afeefa.de" && $.ajax({
                url: "githubAPI/",
                type: "POST",
                data: e,
                cache: !1,
                dataType: "text",
                processData: !0
            }).done(function (e) {
            }).fail(function (e) {
            })
        }, addEvents: function () {
            var e = this
        }, importInis: function () {
            function o(e, n) {
                d3.csv(i + "inis_" + e + ".csv", function (r) {
                    s[e] = r, _.size(s) == t.length && n()
                })
            }

            function u() {
                _.each(s[n], function (e, t) {
                    a({
                        initiative: {
                            category: null,
                            description: e.description ? e.description : null,
                            facebook: e.facebook ? e.facebook : null,
                            image: null,
                            imageType: null,
                            locale: n,
                            mail: e.mail ? e.mail : null,
                            name: e.name ? e.name : null,
                            phone: e.phone ? e.phone : null,
                            rating: 3,
                            speakerPrivate: e.speakerPrivate ? e.speakerPrivate : null,
                            speakerPublic: e.speakerPublic ? e.speakerPublic : null,
                            spokenLanguages: e.spokenLanguages ? e.spokenLanguages : null,
                            supportWanted: !1,
                            web: e.web ? e.web : null
                        }
                    }, t, function (t, i) {
                        var o = t.initiative;
                        _.each(r, function (e) {
                            var t = s[e][i];
                            a({
                                initiative: {
                                    category: null,
                                    description: t.description ? t.description : null,
                                    entryId: o.entryId,
                                    locale: e,
                                    name: t.name ? t.name : null,
                                    speakerPublic: null,
                                    spokenLanguages: t.spokenLanguages ? t.spokenLanguages : null
                                }
                            })
                        }), f({
                            location: {
                                category: null,
                                city: e.city ? e.city : null,
                                description: null,
                                district: null,
                                event: null,
                                facebook: null,
                                image: null,
                                imageType: null,
                                initiative: o.identifier,
                                lat: e.lat ? e.lat : null,
                                locale: n,
                                lon: e.lon ? e.lon : null,
                                mail: null,
                                marketEntry: null,
                                name: e.name ? e.name : null,
                                openingHours: e.openingHours ? e.openingHours : null,
                                phone: null,
                                rating: 3,
                                scope: !1,
                                speakerPrivate: null,
                                speakerPublic: null,
                                spokenLanguages: null,
                                street: e.street ? e.street : null,
                                supportWanted: null,
                                type: 0,
                                web: null,
                                zip: e.zip ? e.zip : null
                            }
                        }, i, function (e, t) {
                            var n = e.location;
                            _.each(r, function (e) {
                                var r = s[e][t];
                                f({
                                    location: {
                                        category: null,
                                        description: null,
                                        entryId: n.entryId,
                                        event: null,
                                        locale: e,
                                        marketEntry: null,
                                        name: r.name ? r.name : null,
                                        openingHours: r.openingHours ? r.openingHours : null,
                                        speakerPublic: null,
                                        spokenLanguages: null,
                                        type: 0
                                    }
                                })
                            })
                        })
                    })
                })
            }

            function a(e, t, n) {
                $.ajax({
                    url: "api/initiatives",
                    type: "POST",
                    data: e,
                    cache: !1,
                    dataType: "json",
                    processData: !0,
                    contentType: !1
                }).done(function (e) {
                    n && n(e, t)
                }).fail(function (e) {
                    console.debug(e)
                })
            }

            function f(e, t, n) {
                $.ajax({
                    url: "api/locations",
                    type: "POST",
                    data: e,
                    cache: !1,
                    dataType: "json",
                    processData: !0,
                    contentType: !1
                }).done(function (e) {
                    n && n(e, t)
                }).fail(function (e) {
                    console.debug(e)
                })
            }

            var e = this, t = ["de", "en", "ar", "fa", "fr", "sr", "ru", "ti", "ur", "it"], n = "de", r = _.without(t, n), i = "_Resources/Static/Packages/DDFA.dresdenfueralleDe/DDFA/dummyData/", s = {};
            _.each(t, function (e, t) {
                o(e, function () {
                    u()
                })
            })
        }
    }
}), define("DataManager", function () {
}), qx.Class.define("Router", {
    extend: Daddy, type: "singleton", properties: {}, construct: function () {
        var e = this;
        e.registerHashChange()
    }, members: {
        registerHashChange: function () {
            var e = this;
            window.onhashchange = function () {
            }
        }, detectUrl: function () {
            var e = this;
            e.currentPath = [];
            var t = window.location.hash.split("#");
            t = _.without(t, ""), _.each(t, function (t) {
                e.currentPath.push(t)
            }), e.navigate()
        }, initialNavigate: function () {
            var e = APP.getUserDevice();
            e === "mobile" ? (APP.setMapView(new MapView), APP.setDetailView(new DetailViewMobile), APP.setMenuView(new MenuView), APP.setLanguageView(new LanguageViewMobile), APP.setIncludeView(new IncludeView)) : (APP.setMapView(new MapView), APP.setDetailView(new DetailView), APP.setMenuView(new MenuView), APP.setLegendView(new LegendView), APP.setPlusView(new PlusView), APP.setLanguageView(new LanguageView), APP.setFormView(new FormView), APP.setIncludeView(new IncludeView)), e === "mobile" ? (APP.getMapView().render(), APP.getDetailView().render(), APP.getLanguageView().render(), APP.getMenuView().render(), APP.getIncludeView().render()) : (APP.getMapView().render(), APP.getDetailView().render(), APP.getPlusView().render(), APP.getLanguageView().render(), APP.getMenuView().render(), APP.getLegendView().render(), APP.getFormView().render(), APP.getIncludeView().render())
        }, navigate: function (e) {
            var t = this;
            e ? t.currentPath = e : e = t.currentPath, console.log("navigate to: " + e), t.currentPath.length > 0 && APP.getMapView().selectMarkerById(t.currentPath)
        }, updateNavigation: function () {
            var e = this, t = e.currentPath[0];
            $("a"), d3.selectAll("nav a").each(function () {
                var e = d3.select(this);
                e.attr("href") == "#" + t ? e.classed("active", !0) : e.classed("active", !1)
            })
        }
    }
}), define("Router", function () {
}), qx.Class.define("LanguageManager", {
    extend: Daddy, type: "singleton", construct: function () {
        var e = this
    }, properties: {bib: {}, currentLang: {}}, members: {
        init: function (e) {
            var t = this, n = navigator.language.split("-")[0];
            _.contains(APP.getConfig().languages, n) ? t.setCurrentLang(n) : t.setCurrentLang(APP.getConfig().languages[0]), $("body").addClass(t.getCurrentLang()), t.addEvents()
        }, resolve: function (e, t) {
            var n = this;
            if (n.getBib()[e] === undefined)return "XXX";
            var r;
            return t ? r = n.getBib()[e][t] : r = n.getBib()[e][n.getCurrentLang()], r || (r = n.getBib()[e][APP.getConfig().languages[1]]), r || (r = n.getBib()[e][APP.getConfig().languages[0]]), r || (r = "XXX"), r
        }, addEvents: function () {
            var e = this;
            e.listen("languageChanged", function (t) {
                e.setCurrentLang(t.customData), APP.getDataManager().fetchAllData(function (t) {
                    console.debug("fetchedAllData in " + e.getCurrentLang(), t), APP.setData(t), e.say("fetchedNewData")
                }), _.each(APP.getConfig().languages, function (e) {
                    $("body").removeClass(e)
                }), $("body").addClass(e.getCurrentLang()), $("body").attr("lang", e.getCurrentLang())
            })
        }
    }
}), define("LanguageManager", function () {
}), qx.Class.define("View", {
    extend: Daddy,
    type: "abstract",
    properties: {viewId: {}, viewState: {}, loadable: {init: !1}},
    construct: function () {
        var e = this
    },
    members: {
        render: function () {
            var e = this;
            e.view.addClass("view-container");
            if (e.getLoadable()) {
                var t = $("<div />").addClass("loading-curtain");
                e.view.append(t)
            }
            e.addEvents(), e.say(e.classname + "Rendered")
        }, getWording: function (e, t) {
            var n = this;
            return APP.getLM().resolve(e, t)
        }, loading: function (e) {
            var t = this;
            e ? t.view.addClass("loading") : t.view.removeClass("loading")
        }, addEvents: function () {
            var e = this;
            e.listen("languageChanged", function () {
                e.changeLanguage()
            }), e.listen(e.classname + "Rendered", function () {
                $(function () {
                    console.debug("init tooltips"), e.view.find('[data-toggle="tooltip"]').tooltip()
                })
            })
        }, changeLanguage: function () {
        }
    }
}), define("Views/View", function () {
}), qx.Class.define("MapView", {
    extend: View,
    type: "singleton",
    properties: {userLocation: {}, markerLocationLookup: {}, selectedMarker: {}},
    construct: function () {
        var e = this;
        e.setViewId("mapView"), e.setLoadable(!0), e.setUserLocation(null), e.setSelectedMarker(null), e.setMarkerLocationLookup([])
    },
    members: {
        render: function () {
            var e = this;
            e.view = $("<div />"), e.view.attr("id", e.getViewId()), $("#main-container").append(e.view), e.mapCurtain = $("<div />").attr("id", "map-curtain"), $("#main-container").append(e.mapCurtain), e.locateBtn = $("<div />").attr("id", "locate-btn"), e.view.append(e.locateBtn), e.locateBtn.click(function () {
                e.locate()
            }), e.locateBtn.on("touchend", function () {
                e.locate()
            }), L.mapbox.accessToken = "pk.eyJ1IjoiZmVsaXhrYW1pbGxlIiwiYSI6Ilo1SHFOX0EifQ.pfAzun90Lj1UlVapKI3LiA", e.map = L.mapbox.map(e.getViewId(), "felixkamille.4128d9e7", {
                zoomControl: !1,
                maxBounds: [L.latLng(50.835169, 13.099075), L.latLng(51.365345, 14.759512)],
                tileLayer: {format: "jpg70"},
                tapTolerance: 30,
                maxZoom: 18
            }).setView([51.051, 13.74], 14), e.basicLayer = L.layerGroup(), e.map.addLayer(e.basicLayer), e.markerCluster = new L.MarkerClusterGroup({
                iconCreateFunction: function (e) {
                    return new L.DivIcon({
                        className: "location marker-cluster",
                        iconSize: [30, 30],
                        iconAnchor: [15, 15],
                        html: e.getChildCount()
                    })
                },
                maxClusterRadius: 10,
                spiderfyOnMaxZoom: !0,
                spiderfyDistanceMultiplier: 2,
                spiderLegPolylineOptions: {weight: 1.5, color: "#000"}
            }), e.map.addLayer(e.markerCluster), this.base(arguments), e.loading(!0), APP.getUserDevice() == "mobile" && e.locate()
        }, loadFromUrl: function (e) {
            var t = this, n = window.location.hash.split("#");
            n = _.without(n, "");
            var r = n[0];
            if (r) {
                var i = t.lookupMarkerById(r);
                i && (e && e.setView && t.map.setView([i.location.lat, i.location.lon], 15), t.selectMarker(i.marker, i.location))
            }
        }, loadNewData: function () {
            var e = this;
            e.markerCluster.clearLayers(), e.setMarkerLocationLookup([]);
            var t = APP.getData().locations, n = APP.getActiveFilter();
            n && (t = _.filter(t, function (e) {
                return _.contains([2, 3], e.type) ? !0 : e.category.name === n.category
            })), e.addLocations(t), e.loadFromUrl({setView: !0}), e.loading(!1)
        }, lookupMarkerById: function (e) {
            var t = this, n = _.find(t.getMarkerLocationLookup(), function (t) {
                return t.location.entryId == e
            });
            return n
        }, addEvents: function () {
            var e = this;
            e.listen("languageChanged", function () {
                e.changeLanguage()
            }), e.map.on("click", function (t) {
                e.say("mapclicked")
            }), e.mapCurtain.on("click", function (t) {
                e.say("curtainclicked")
            }), APP.getUserDevice() == "phone" && $("#main-container").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (t) {
                if (t.target != t.currentTarget)return;
                !$(this).hasClass("shifted") && !$(this).hasClass("shifted-small") && e.say("shiftMenuClosed")
            }), e.listen("mapclicked", function () {
                e.deselectMarker()
            }), e.listen("DetailViewMobileRendered", function () {
                e.loadFromUrl({setView: !0})
            }), e.listen("DetailViewRendered", function () {
                e.loadFromUrl({setView: !0})
            }), e.map.on("viewreset", function (e) {
            }), e.listen("fetchedNewData", function () {
                e.loadNewData()
            }), e.listen("filterSet", function () {
                e.loadNewData()
            })
        }, removeEvents: function () {
        }, changeLanguage: function () {
            var e = this;
            e.loading(!0)
        }, addLocations: function (e) {
            var t = this;
            _.each(e, function (e) {
                var n, r;
                e.type === 0 ? (n = [30, 30], r = [15, 15]) : e.type === 1 ? (n = [23, 23], r = [12, 12]) : e.type === 2 ? (n = [23, 23], r = [15, 15]) : e.type === 3 && (e.category && e.category.name === "housing" ? (n = [30, 30], r = [15, 15]) : (n = [15, 15], r = [8, 8]));
                if (!e.lat || !e.lon)return !1;
                var i = "location";
                i += " type-" + e.type, i += " rating-" + e.rating, e.category && (i += " cat cat-" + e.category.name), e.supportNeeded && (i += " support-needed");
                var s = L.marker([e.lat, e.lon], {
                    riseOnHover: !0,
                    icon: L.divIcon({className: i, iconSize: n, iconAnchor: r})
                }), o = e.name;
                o || (e.type === 0 ? o = e.initiative.name : e.type === 1 ? o = e.marketEntry.name : e.type === 2 && (o = e.event.name));
                var u = L.popup({
                    className: "ddfa-popup",
                    closeButton: !1,
                    offset: [0, 0]
                }).setLatLng([e.lat, e.lon]).setContent("<b>" + o + "</b>");
                s.on("mouseover", function (e) {
                    t.map.openPopup(u)
                }), s.on("mouseout", function (e) {
                    t.map.closePopup()
                }), s.on("click", function () {
                    t.selectMarker(s, e)
                }), e.type === 3 ? t.basicLayer.addLayer(s) : t.markerCluster.addLayer(s);
                var a = t.getMarkerLocationLookup();
                a.push({location: e, marker: s}), t.setMarkerLocationLookup(a)
            }), t.say("markersCreated")
        }, selectMarker: function (e, t, n) {
            var r = this;
            r.deselectMarker(), r.setSelectedMarker(e), n && r.map.setView([t.lat, t.lon], 15), $(e._icon).addClass("active"), APP.getDetailView().load(t), window.location.hash = t.entryId
        }, selectMarkerFromLink: function (e) {
            var t = this, n = t.lookupMarkerById(e);
            n && APP.getMapView().selectMarker(n.marker, n.location, !0)
        }, deselectMarker: function () {
            var e = this;
            e.getSelectedMarker() && $(e.getSelectedMarker()._icon).removeClass("active"), window.location.hash = "", APP.getDetailView().close(), e.setSelectedMarker(null)
        }, addPOIs: function (e, t) {
            var n = this;
            t === undefined && (t = "#333");
            var r = new L.LayerGroup;
            return _.each(e, function (e) {
                var t = L.marker(e.geo, {
                    riseOnHover: !0,
                    zIndexOffset: -1e3,
                    icon: L.divIcon({
                        className: "marker-station",
                        html: '<p><span class="fa fa-subway"></span> ' + e.name + "</p>",
                        iconSize: [100, 20],
                        iconAnchor: [50, 25]
                    })
                });
                r.addLayer(t)
            }), r
        }, setZoomFilter: function () {
            var e = this, t = e.stationMarkers.getLayers(), n = _.filter(t, function () {
                return e.map.getZoom() >= 14
            });
            e.poiMarkers.clearLayers(), _.each(n, function (t) {
                e.poiMarkers.addLayer(t)
            })
        }, find: function () {
            function t(t, n) {
                n.lbounds ? e.map.fitBounds(n.lbounds) : n.latlng && e.map.setView([n.latlng[0], n.latlng[1]], 13)
            }

            var e = this;
            geocoder.query("Chester, NJ", t)
        }, locate: function () {
            var e = this;
            e.map.locate({watch: !1, setView: !1, enableHighAccuracy: !0}), e.map.on("locationfound", function (t) {
                e.map.setView(t.latlng, 15), e.setUserLocation = t.latlng;
                var n = L.icon({
                    iconUrl: "_Resources/Static/Packages/DDFA.dresdenfueralleDe/img/noun_91817_cc.png",
                    iconSize: [30, 30],
                    iconAnchor: [15, 15],
                    popupAnchor: [40, -10]
                }), r = L.marker(t.latlng, {
                    icon: L.divIcon({
                        className: "marker-user-location",
                        html: "",
                        iconSize: [16, 16],
                        iconAnchor: [8, 8]
                    })
                }).addTo(e.map)
            }), e.map.on("locationerror", function (e) {
                alert("Locating failed")
            })
        }, addCartoDBLayer: function () {
        }
    }
}), define("Views/MapView", function () {
}), qx.Class.define("DetailView", {
    extend: View, type: "singleton", properties: {}, construct: function () {
        var e = this;
        e.setViewId("detailView"), e.setLoadable(!0), e.record = null
    }, members: {
        render: function () {
            var e = this;
            e.view = $("<div />"), e.view.attr("id", e.getViewId()), L.Browser.ie && e.view.css("overflow", "auto"), e.headingContainer = $("<div />").addClass("heading"), e.heading = $("<h1 />"), e.headingContainer.append(e.heading), e.view.append(e.headingContainer), e.scrollContainer = $("<div />").addClass("scroll-container"), e.view.append(e.scrollContainer), APP.getUserDevice() == "desktop" && e.scrollContainer.perfectScrollbar(), e.imageContainer = $("<div />").addClass("image"), e.image = $("<img />"), e.imageContainer.append(e.image), e.scrollContainer.append(e.imageContainer);
            var t = ["category", "description", "speakerPublic", "spokenLanguages", "location", "openingHours", "phone", "mail", "web", "facebook", "dateFrom", "dateTo"];
            _.each(t, function (t) {
                e["propertyContainer" + t] = $("<div />").addClass("property " + t), e["propertyIcon" + t] = $("<div />").addClass("property-icon"), e["propertyContainer" + t].append(e["propertyIcon" + t]);
                var n = $("<div />").addClass("property-text");
                e["propertyName" + t] = $("<p />").addClass("property-name"), e["propertyValue" + t] = $("<p />").addClass("property-value"), n.append(e["propertyName" + t]), n.append(e["propertyValue" + t]), e["propertyContainer" + t].append(n), e.scrollContainer.append(e["propertyContainer" + t])
            }), $("#main-container").append(e.view), this.base(arguments)
        }, load: function (e) {
            function s(e) {
                var t = "";
                return e.street && (t += e.street + "<br>"), e.zip && e.city ? t += e.zip + " " + e.city + "<br>" : e.city && (t += e.city + "<br>"), t
            }

            var t = this;
            t.record && t.reset(), t.record = e, t.view.addClass("type-" + e.type), t.view.addClass("cat-" + e.category.name), t.heading.append(e.name ? e.name : ""), e.image && (t.imageContainer.css("height", t.view.innerWidth() * .6), t.imageContainer.addClass(e.imageType), t.imageContainer.show(), t.image.attr("src", e.image));
            var n = "category", r = e[n] ? e[n].name : "nee";
            t["propertyIcon" + n].addClass("cat-" + r), t["propertyName" + n].append(t.getWording("cat_" + r));
            var i = e.type !== 1 ? t.getWording("misc_officialEntry") : t.getWording("misc_privateEntry");
            t["propertyValue" + n].append(i), t["propertyContainer" + n].show(), n = "location", t["propertyIcon" + n].addClass("icon-" + n), t["propertyName" + n].append(t.getWording("prop_" + n)), i = s(e), i.length > 0 && (t["propertyValue" + n].append(i), t["propertyContainer" + n].show());
            var o = APP.getConfig().simpleProperties;
            _.each(o, function (n) {
                e[n] && (t["propertyIcon" + n].addClass("icon-" + n), t["propertyName" + n].append(t.getWording("prop_" + n)), _.contains(["web", "facebook"], n) ? t["propertyValue" + n].append('<a target="_blank" href="' + e[n] + '">' + e[n] + "</a>") : _.contains(["description"], n) ? t["propertyValue" + n].append(e[n].replace(/(?:\r\n|\r|\n)/g, "<br />")) : t["propertyValue" + n].append(e[n]), t["propertyContainer" + n].show())
            }), t.loading(!1), t.view.addClass("active"), APP.getUserDevice() == "desktop" && t.scrollContainer.perfectScrollbar("update"), t.say("detailViewOpened")
        }, reset: function () {
            var e = this;
            e.view.removeClass("type-0 type-1 type-2 type-3"), e.view.removeClass(function (e, t) {
                return (t.match(/(^|\s)cat-\S+/g) || []).join(" ")
            }), e.heading.empty(), e.imageContainer.hide(), e.imageContainer.removeClass("logo photo");
            var t = _.union(["category", "location"], APP.getConfig().simpleProperties);
            e.propertyIconcategory.removeClass(function (e, t) {
                return (t.match(/(^|\s)cat-\S+/g) || []).join(" ")
            }), _.each(t, function (t) {
                e["propertyIcon" + t].removeClass(function (e, t) {
                    return (t.match(/(^|\s)icon-\S+/g) || []).join(" ")
                }), e["propertyName" + t].empty(), e["propertyValue" + t].empty(), e["propertyContainer" + t].hide()
            }), e.record = null
        }, close: function () {
            var e = this;
            e.view.removeClass("active"), e.reset(), e.say("detailViewClosed")
        }, changeLanguage: function () {
            var e = this;
            e.loading(!0)
        }, addEvents: function () {
            var e = this;
            this.base(arguments), e.listen("includeViewOpened", function () {
                APP.getUserDevice() === "mobile" ? e.close() : e.view.addClass("right")
            }), e.listen("includeViewClosed", function () {
                e.view.removeClass("right")
            }), e.listen("mapclicked", function () {
                e.close()
            })
        }
    }
}), define("Views/DetailView", function () {
}), qx.Class.define("MenuView", {
    extend: View, type: "singleton", construct: function () {
        var e = this;
        e.setViewId("menuView")
    }, members: {
        render: function () {
            var e = this;
            e.view = $("<div />"), e.view.attr("id", e.getViewId()), $("#main-container").append(e.view), e.menuBtn = $("<div />"), e.menuBtn.addClass("menu-btn"), e.menuBtn.attr({
                "data-toggle": "tooltip",
                "data-placement": "bottom",
                title: e.getWording("menu_menu")
            }), e.view.append(e.menuBtn), e.menu = $("<div />"), e.menu.attr("id", "main-menu"), e.view.append(e.menu);
            var t = $("<a />").attr("href", "http://afeefa.de").attr("id", "logo");
            e.logo = $("<img />").attr({
                src: APP.getConfig().imgPath + "afeefa_light.svg",
                alt: "Afeefa Logo",
                title: "Afeefa Logo"
            }), t.append(e.logo), e.menu.append(t), e.refugeeBtn = $("<div />").addClass("item refugee-guide"), e.refugeeLBtnLabel = $("<span />"), e.refugeeBtn.append(e.refugeeLBtnLabel), e.menu.append(e.refugeeBtn), e.supporterBtn = $("<div />").addClass("item supporter-guide"), e.supporterBtnLabel = $("<span />"), e.supporterBtn.append(e.supporterBtnLabel), e.menu.append(e.supporterBtn), e.aboutBtn = $("<div />").addClass("item about"), e.aboutBtnLabel = $("<span />"), e.aboutBtn.append(e.aboutBtnLabel), e.menu.append(e.aboutBtn), e.pressBtn = $("<div />").addClass("item press"), e.pressBtnLabel = $("<span />"), e.pressBtn.append(e.pressBtnLabel), e.menu.append(e.pressBtn), e.imprintBtn = $("<div />").addClass("item imprint"), e.imprintBtnLabel = $("<span />"), e.imprintBtn.append(e.imprintBtnLabel), e.menu.append(e.imprintBtn), e.facebookBtn = $("<div />").addClass("item facebook"), e.facebookBtnLabel = $("<a />").attr("href", "https://www.facebook.com/afeefa.de").attr("target", "_blank"), e.facebookBtn.append(e.facebookBtnLabel), e.menu.append(e.facebookBtn), t = $("<a />").attr({
                id: "dfa-logo",
                href: "http://dresdenfueralle.de",
                target: "_blank"
            }), e.dfaLogo = $("<img />").attr({
                src: APP.getConfig().imgPath + "icon_37.svg",
                alt: "Dresden für Alle Logo",
                title: "Dresden für Alle Logo"
            }), t.append(e.dfaLogo), e.menu.append(t), this.base(arguments)
        }, addEvents: function () {
            var e = this;
            this.base(arguments), e.menuBtn.click(function () {
                e.load(), e.say("mainMenuOpened")
            }), e.refugeeBtn.click(function () {
                e.close(), APP.getIncludeView().load(APP.getIncludeView().getIncludes().refugeeGuide)
            }), e.supporterBtn.click(function () {
                e.close(), APP.getIncludeView().load(APP.getIncludeView().getIncludes().supporterGuide)
            }), e.aboutBtn.click(function () {
                e.close(), APP.getIncludeView().load(APP.getIncludeView().getIncludes().about)
            }), e.pressBtn.click(function () {
                e.close(), APP.getIncludeView().load(APP.getIncludeView().getIncludes().press)
            }), e.imprintBtn.click(function () {
                e.close(), APP.getIncludeView().load(APP.getIncludeView().getIncludes().imprint)
            }), e.listen("curtainclicked", function () {
                e.close()
            }), e.listen("languageMenuOpened", function () {
                e.menu.addClass("hidden")
            }), e.listen("shiftMenuClosed", function () {
                e.menu.removeClass("hidden")
            }), e.listen("includeViewClosed", function () {
                e.load(), e.say("mainMenuOpened")
            }), require(["hammer"], function (t) {
                var n = new t(e.view[0]);
                n.on("swipeleft", function (t) {
                    e.close()
                })
            })
        }, load: function () {
            var e = this;
            e.reset(), $("#main-container").addClass("shifted"), e.refugeeLBtnLabel.append(e.getWording("menu_refugee")), e.supporterBtnLabel.append(e.getWording("menu_supporter")), e.aboutBtnLabel.append(e.getWording("menu_about")), e.pressBtnLabel.append(e.getWording("menu_press")), e.imprintBtnLabel.append(e.getWording("menu_imprint")), e.facebookBtnLabel.append(e.getWording("menu_facebook")), e.menuBtn.attr({
                title: e.getWording("menu_menu"),
                "data-original-title": e.getWording("menu_menu")
            })
        }, reset: function () {
            var e = this;
            e.refugeeLBtnLabel.empty(), e.supporterBtnLabel.empty(), e.aboutBtnLabel.empty(), e.pressBtnLabel.empty(), e.imprintBtnLabel.empty(), e.facebookBtnLabel.empty()
        }, close: function () {
            var e = this;
            $("#main-container").removeClass("shifted")
        }, changeLanguage: function () {
            var e = this;
            e.menuBtn.attr({title: e.getWording("menu_menu"), "data-original-title": e.getWording("menu_menu")})
        }
    }
}), define("Views/MenuView", function () {
}), qx.Class.define("LegendView", {
    extend: View,
    type: "singleton",
    properties: {categories: {}},
    construct: function () {
        var e = this;
        e.setViewId("legendView"), e.setCategories(_.union(APP.getConfig().categoriesIni, APP.getConfig().categoriesMarket))
    },
    members: {
        render: function () {
            function t() {
                var t = $("<div />");
                t.addClass("container filter-reset");
                var n = $("<div />");
                n.addClass("btn"), t.append(n), e["label-filter-reset"] = $("<p />"), t.append(e["label-filter-reset"]), e.legend.append(t), e["label-filter-reset"].click(function () {
                    e.resetFilter()
                })
            }

            var e = this;
            e.view = $("<div />"), e.view.attr("id", e.getViewId()), e.legend = $("<div />"), e.legend.attr("id", "legend"), e.view.append(e.legend), _.each(e.getCategories(), function (t) {
                var n = $("<div />");
                n.addClass("container");
                var r = $("<div />");
                r.addClass("btn cat-" + t), n.append(r), e["label-" + t] = $("<p />"), n.append(e["label-" + t]), e.legend.append(n), r.click(function () {
                    e.setFilter({category: t})
                }), e["label-" + t].click(function () {
                    e.setFilter({category: t})
                })
            }), t(), $("#main-container").append(e.view), this.base(arguments), e.load()
        }, load: function () {
            var e = this;
            _.each(e.getCategories(), function (t) {
                e["label-" + t].append(e.getWording("cat_" + t))
            }), e["label-filter-reset"].append(e.getWording("misc_filterReset"))
        }, setFilter: function (e) {
            var t = this;
            APP.setActiveFilter(e), t.say("filterSet")
        }, resetFilter: function () {
            var e = this;
            APP.setActiveFilter(null), e.say("filterSet")
        }, reset: function () {
            var e = this;
            _.each(e.getCategories(), function (t) {
                e["label-" + t].empty()
            }), e["label-filter-reset"].empty()
        }, addEvents: function () {
            var e = this;
            this.base(arguments), e.listen("filterSet", function () {
                var t = APP.getActiveFilter();
                t ? (e.view.addClass("filter-active"), e.view.find(".btn").parent().addClass("inactive"), e.view.find(".btn.cat-" + t.category).parent().removeClass("inactive")) : (e.view.removeClass("filter-active"), e.view.find(".btn").parent().removeClass("inactive"))
            })
        }, close: function () {
            var e = this
        }, changeLanguage: function () {
            var e = this;
            e.reset(), e.load()
        }
    }
}), define("Views/LegendView", function () {
}), qx.Class.define("LanguageView", {
    extend: View, type: "singleton", construct: function () {
        var e = this;
        e.setViewId("languageView")
    }, members: {
        render: function () {
            var e = this;
            e.view = $("<div />"), e.view.attr("id", e.getViewId()), e.buttons = [], _.each(APP.getConfig().languages, function (t) {
                var n = $("<div />");
                n.addClass("btn " + t), n.attr({
                    "data-toggle": "tooltip",
                    "data-placement": "bottom"
                }), n.click(function () {
                    e.say("languageChanged", t)
                }), e.buttons.push({el: n, lang: t}), e.view.append(n)
            }), $("#main-container").append(e.view), this.base(arguments), e.load()
        }, load: function () {
            var e = this;
            _.each(e.buttons, function (t) {
                t.el.hasClass(APP.getLM().getCurrentLang()) && t.el.addClass("active"), t.el.attr({
                    title: e.getWording("lan_" + t.lang, t.lang) + " (" + e.getWording("lan_" + t.lang) + ")",
                    "data-original-title": e.getWording("lan_" + t.lang, t.lang) + " (" + e.getWording("lan_" + t.lang) + ")"
                })
            })
        }, addEvents: function () {
            var e = this;
            this.base(arguments)
        }, reset: function () {
            var e = this;
            _.each(e.buttons, function (e) {
                e.el.removeClass("active")
            })
        }, changeLanguage: function () {
            var e = this;
            e.reset(), e.load()
        }, close: function () {
            var e = this
        }
    }
}), define("Views/LanguageView", function () {
}), qx.Class.define("PlusView", {
    extend: View,
    type: "singleton",
    properties: {propertiesMarket: {}, propertiesFeedback: {}, inputTypes: {}},
    construct: function () {
        var e = this;
        e.setViewId("plusView")
    },
    members: {
        render: function () {
            var e = this;
            e.view = $("<div />"), e.view.attr("id", e.getViewId()), e.feedbackBtn = $("<div />"), e.feedbackBtn.addClass("btn feedbackBtn"), e.view.append(e.feedbackBtn), e.requestBtn = $("<div />"), e.requestBtn.addClass("btn requestBtn"), e.view.append(e.requestBtn), e.offerBtn = $("<div />"), e.offerBtn.addClass("btn offerBtn"), e.view.append(e.offerBtn), e.plusBtn = $("<div />"), e.plusBtn.addClass("btn plusBtn"), e.view.append(e.plusBtn), $("#main-container").append(e.view), this.base(arguments)
        }, addEvents: function () {
            var e = this;
            this.base(arguments), e.offerBtn.click(function () {
                APP.getFormView().load(APP.getFormView().getFormTypes().marketOffer)
            }), e.requestBtn.click(function () {
                APP.getFormView().load(APP.getFormView().getFormTypes().marketRequest)
            }), e.feedbackBtn.click(function () {
                APP.getFormView().load(APP.getFormView().getFormTypes().feedback)
            }), e.offerBtn.attr({title: e.getWording("form_newMarketOffer")}), e.requestBtn.attr({title: e.getWording("form_newMarketRequest")}), e.feedbackBtn.attr({title: e.getWording("form_feedback")})
        }, close: function () {
            var e = this
        }, changeLanguage: function () {
            var e = this;
            e.offerBtn.attr({title: e.getWording("form_newMarketOffer")}), e.requestBtn.attr({title: e.getWording("form_newMarketRequest")}), e.feedbackBtn.attr({title: e.getWording("form_feedback")})
        }
    }
}), define("Views/PlusView", function () {
}), qx.Class.define("FormView", {
    extend: View,
    type: "singleton",
    properties: {formTypes: {}, currentFormType: {}, propertiesMarket: {}, propertiesFeedback: {}, html5InputTypes: {}},
    construct: function () {
        var e = this;
        e.setViewId("formView"), e.setLoadable(!0), e.setFormTypes({
            initiative: 0,
            marketOffer: 1,
            marketRequest: 2,
            event: 3,
            basic: 4,
            feedback: 5
        }), e.setPropertiesMarket([{
            name: "name",
            type: "text",
            required: !0,
            intoMarketEntry: !0,
            intoLocation: !0
        }, {
            name: "category",
            type: "select",
            required: !0,
            intoMarketEntry: !0,
            values: [["df402493-f467-4472-8b98-9038d2ac967e", "consultation"], ["fa815876-ad1d-433e-87ff-8de20639e2b1", "medic"], ["5dddf63d-ccf6-44e2-8daf-81bb44507fdd", "german"], ["d29bbe86-ecd6-42df-8054-70a90ec7b535", "jobs"], ["adfb2457-819c-4574-ace1-56f5b38d8f96", "leisure"], ["b63f01d2-3573-48dc-83a5-6c9577cfbc6b", "translation"], ["12914a3d-0cb5-4646-be56-3f671d737977", "children"], ["744f41e9-799c-432b-a9a3-e78d471ec51a", "donation"], ["07f88130-7d98-4a20-bbb8-d0d98f55c553", "community"], ["5cd18ce7-923d-47ff-af66-7f4286f420d0", "other"]]
        }, {name: "speakerPublic", type: "text", intoMarketEntry: !0}, {
            name: "mail",
            type: "email",
            required: !0,
            intoMarketEntry: !0
        }, {name: "web", type: "url", intoMarketEntry: !0}, {
            name: "facebook",
            type: "url",
            intoMarketEntry: !0
        }, {name: "description", type: "textarea", required: !0, intoMarketEntry: !0}, {
            name: "phone",
            type: "tel",
            intoMarketEntry: !0
        }, {name: "spokenLanguages", type: "text", intoMarketEntry: !0}, {
            name: "street",
            type: "text",
            intoLocation: !0
        }, {name: "zip", type: "text", intoLocation: !0}, {
            name: "city",
            type: "text",
            intoLocation: !0
        }, {name: "dateFrom", type: "date", intoMarketEntry: !0}, {
            name: "dateTo",
            type: "date",
            intoMarketEntry: !0
        }, {
            name: "datePeriodic",
            type: "select",
            intoMarketEntry: !0,
            values: [[0, "daily"], [1, "weekly"], [2, "secondWeekly"], [3, "monthly"]]
        }]), e.setPropertiesFeedback([{name: "author", type: "text", required: !0}, {
            name: "mail",
            type: "email",
            required: !0
        }, {
            name: "message",
            type: "textarea",
            required: !0
        }]), e.setHtml5InputTypes(["text", "number", "range", "url", "email", "tel", "date", "month", "week", "time", "datetime", "datetime-local"])
    },
    members: {
        render: function () {
            function n(t, n) {
                _.each(n, function (n) {
                    e[t + "_label_" + n.name] = $("<label />").attr("name", n.name), e.allInputLabels.push(e[t + "_label_" + n.name]), e.form.append(e[t + "_label_" + n.name]);
                    if (_.contains(e.getHtml5InputTypes(), n.type))e[t + "_field_" + n.name] = $("<input />").attr("type", n.type).attr("name", n.name); else if (n.type == "select") {
                        e[t + "_field_" + n.name] = $("<select />");
                        if (!n.required)var r = $("<option />").attr("selected", !0).append("");
                        e[t + "_field_" + n.name].append(r), _.each(n.values, function (r) {
                            var i = $("<option />").attr("value", r[0]);
                            n.name == "category" ? i.append(e.getWording("cat_" + r[1])) : n.name == "datePeriodic" ? i.append(e.getWording("prop_" + n.name + "_" + r[1])) : i.append(e.getWording("form_" + r[1])), e[t + "_field_" + n.name].append(i), e[t + "_field_" + n.name].attr("name", n.name)
                        })
                    } else n.type == "textarea" ? e[t + "_field_" + n.name] = $("<textarea />").attr("name", n.name).attr("rows", 5) : e[t + "_field_" + n.name] = $("<input />").attr("type", "text").attr("name", n.name);
                    n.required && e[t + "_field_" + n.name].attr("required", !0), e[t + "_field_" + n.name].addClass(n.name), e[t + "_label_" + n.name].addClass(n.name), e.allInputFields.push(e[t + "_field_" + n.name]), e.form.append(e[t + "_field_" + n.name])
                })
            }

            var e = this;
            e.view = $("<div />"), e.view.attr("id", e.getViewId()), L.Browser.ie && e.view.css("overflow", "auto"), $("#main-container").append(e.view), e.headingContainer = $("<div />").addClass("heading"), e.heading = $("<h1 />"), e.headingContainer.append(e.heading), e.view.append(e.headingContainer);
            var t = $("<div />").addClass("scroll-container");
            e.view.append(t), e.responseMessage = $("<p />").addClass("message"), e.view.append(e.responseMessage), e.form = $("<form />"), t.append(e.form), e.allInputLabels = [], e.allInputFields = [], n(e.getFormTypes().marketOffer, e.getPropertiesMarket()), n(e.getFormTypes().marketRequest, e.getPropertiesMarket()), n(e.getFormTypes().feedback, e.getPropertiesFeedback()), e.sendBtn = $("<button />").addClass("sendBtn").append(e.getWording("form_sendBtn")), e.form.append(e.sendBtn), e.cancelBtn = $("<button />").addClass("cancelBtn").append(e.getWording("form_cancelBtn")), e.form.append(e.cancelBtn), this.base(arguments)
        }, addEvents: function () {
            var e = this;
            this.base(arguments), e.form.submit(function (t) {
                t.preventDefault(), e.sendForm()
            }), e.cancelBtn.click(function (t) {
                t.preventDefault(), e.close()
            })
        }, load: function (e) {
            var t = this;
            t.reset(), e == t.getFormTypes().marketOffer ? (t.setCurrentFormType(t.getFormTypes().marketOffer), t.view.addClass("marketOffer"), t.heading.append(t.getWording("form_newMarketOffer")), _.each(t.getPropertiesMarket(), function (n) {
                t[e + "_label_" + n.name].show().append(t.getWording("prop_" + n.name)), n.required && t[e + "_field_" + n.name].attr("required", !0), t[e + "_field_" + n.name].show()
            })) : e == t.getFormTypes().marketRequest ? (t.setCurrentFormType(t.getFormTypes().marketRequest), t.view.addClass("marketRequest"), t.heading.append(t.getWording("form_newMarketRequest")), _.each(t.getPropertiesMarket(), function (n) {
                t[e + "_label_" + n.name].show().append(t.getWording("prop_" + n.name)), n.required && t[e + "_field_" + n.name].attr("required", !0), t[e + "_field_" + n.name].show()
            })) : e == t.getFormTypes().feedback ? (t.setCurrentFormType(t.getFormTypes().feedback), t.view.addClass("feedback"), t.heading.append(t.getWording("form_feedback")), _.each(t.getPropertiesFeedback(), function (n) {
                t[e + "_label_" + n.name].show().append(t.getWording("prop_" + n.name)), n.required && t[e + "_field_" + n.name].attr("required", !0), t[e + "_field_" + n.name].show()
            })) : console.warn("formType not configured"), t.view.addClass("active"), Modernizr.inputtypes.date || t.view.find(".dateFrom, .dateTo, .datePeriodic").hide()
        }, reset: function () {
            var e = this;
            e.view.removeClass("initiative marketOffer marketRequest event basic feedback"), e.heading.empty(), e.responseMessage.empty(), _.each(e.allInputLabels, function (e) {
                e.hide(), e.empty()
            }), _.each(e.allInputFields, function (e) {
                e.hide(), e.val(null), e.removeAttr("required")
            }), e.loading(!1)
        }, close: function () {
            var e = this;
            e.view.removeClass("active"), e.reset()
        }, closeSoftly: function () {
            var e = this;
            e.view.removeClass("active")
        }, sendForm: function () {
            function i(t, n) {
                APP.getDataManager().addMarketEntry(t, function (t) {
                    if (!t.marketentry) {
                        alert(e.getWording("form_fail")), e.loading(!1);
                        return
                    }
                    alert(e.getWording("form_success")), e.close(), n.location.marketEntry = t.marketentry.identifier, APP.getDataManager().addLocation(n, function () {
                    })
                }), APP.getDataManager().githubCreateIssue({
                    type: "marketentry",
                    data: _.extend({}, t.marketentry, n.location)
                });
                var r = t.marketentry.offer ? "Angebot" : "Gesuch";
                APP.getDataManager().sendToSlack({
                    heading: r + " von _" + t.marketentry.speakerPublic + "_ (" + t.marketentry.mail + ")",
                    message: "_Titel:_ " + t.marketentry.name + "\n" + "_Beschreibung:_ " + t.marketentry.description + "\n" + "_web:_ " + t.marketentry.web + "\n" + "_facebook:_ " + t.marketentry.facebook + "\n" + "_phone:_ " + t.marketentry.phone + "\n" + "_Sprachen:_ " + t.marketentry.spokenLanguages + "\n" + "_Str:_ " + n.location.street + "\n" + "_PLZ:_ " + n.location.zip + "\n" + "_Ort:_ " + n.location.city + "\n" + "_von:_ " + t.marketentry.dateFrom + "\n" + "_bis:_ " + t.marketentry.dateTo + "\n" + "_Wdh.:_ " + t.marketentry.datePeriodic + "\n\n"
                })
            }

            var e = this;
            e.loading(!0);
            var t = e.getCurrentFormType();
            if (t == e.getFormTypes().marketOffer) {
                var n = {marketentry: {}}, r = {location: {}};
                _.each(e.getPropertiesMarket(), function (i) {
                    i.intoMarketEntry && (n.marketentry[i.name] = e[t + "_field_" + i.name].val()), i.intoLocation && (r.location[i.name] = e[t + "_field_" + i.name].val())
                }), n.marketentry.dateFrom.length && n.marketentry.dateFrom.indexOf("T00:00:00+0200") < 0 && (n.marketentry.dateFrom += "T00:00:00+0200"), n.marketentry.dateFrom.length && n.marketentry.dateTo.indexOf("T00:00:00+0200") < 0 && (n.marketentry.dateTo += "T00:00:00+0200"), n.marketentry.offer = !0, n.marketentry.published = !1, r.location.type = 1, r.location.published = !1, i(n, r)
            } else if (t == e.getFormTypes().marketRequest) {
                var n = {marketentry: {}}, r = {location: {}};
                _.each(e.getPropertiesMarket(), function (i) {
                    i.intoMarketEntry && (n.marketentry[i.name] = e[t + "_field_" + i.name].val()), i.intoLocation && (r.location[i.name] = e[t + "_field_" + i.name].val())
                }), n.marketentry.dateFrom.length && n.marketentry.dateFrom.indexOf("T00:00:00+0200") < 0 && (n.marketentry.dateFrom += "T00:00:00+0200"), n.marketentry.dateFrom.length && n.marketentry.dateTo.indexOf("T00:00:00+0200") < 0 && (n.marketentry.dateTo += "T00:00:00+0200"), n.marketentry.offer = !1, n.marketentry.published = !1, r.location.type = 1, r.location.published = !1, i(n, r)
            } else if (t == e.getFormTypes().feedback) {
                var n = {feedback: {}};
                _.each(e.getPropertiesFeedback(), function (r) {
                    n.feedback[r.name] = e[t + "_field_" + r.name].val()
                }), n.feedback.metaData = L.Browser, APP.getDataManager().addFeedback(n, function (t) {
                    t.feedback ? (alert(e.getWording("form_feedbackSent")), e.close()) : (alert(e.getWording("form_fail")), e.loading(!1))
                }), APP.getDataManager().githubCreateIssue({
                    type: "feedback",
                    data: n.feedback,
                    metadata: JSON.stringify(n.feedback.metaData)
                }), APP.getDataManager().sendToSlack({
                    heading: "Feedback von _" + n.feedback.author + "_ (" + n.feedback.mail + ")",
                    message: n.feedback.message + "\n\n" + "_" + JSON.stringify(n.feedback.metaData) + "_"
                })
            }
        }
    }
}), define("Views/FormView", function () {
}), qx.Class.define("IncludeView", {
    extend: View,
    type: "singleton",
    properties: {includes: {}, baseUrl: {}},
    construct: function () {
        var e = this;
        e.setViewId("includeView"), e.setIncludes({
            refugeeGuide: "refugeeGuide",
            supporterGuide: "supporterGuide",
            imprint: "imprint",
            press: "press",
            about: "about"
        }), e.setBaseUrl("_Resources/Static/Packages/DDFA.dresdenfueralleDe/DDFA/inc/")
    },
    members: {
        render: function () {
            var e = this;
            e.view = $("<div />"), e.view.attr("id", e.getViewId()), e.content = $("<div />"), e.content.addClass("content"), e.view.append(e.content), e.closeBtn = $("<div />").addClass("closeBtn").append(""), e.view.append(e.closeBtn), $("#main-container").append(e.view), APP.getUserDevice() == "desktop" && e.content.perfectScrollbar(), this.base(arguments)
        }, load: function (e) {
            function n() {
                $("span.locationLink").click(function () {
                    APP.getMapView().selectMarkerFromLink($(this).attr("name"))
                });
                var e = t.content.find("h1").first().detach();
                t.content.before(e), APP.getUserDevice() == "desktop" && t.view.perfectScrollbar("update")
            }

            var t = this;
            t.reset(), t.view.addClass("active"), t.view.addClass(e), t.setViewState(0), t.say("includeViewOpened"), t.content.load(t.getBaseUrl() + t.getIncludes()[e] + "_" + APP.getLM().getCurrentLang() + ".html", function (r, i, s) {
                i == "error" && t.content.load(t.getBaseUrl() + t.getIncludes()[e] + "_en.html", function (r, i, s) {
                    i == "error" && t.content.load(t.getBaseUrl() + t.getIncludes()[e] + "_de.html", function (e, t, r) {
                        n()
                    }), n()
                }), n()
            })
        }, reset: function () {
            var e = this;
            e.view.find("h1").remove(), e.content.empty()
        }, minimize: function (e) {
            var t = this;
            e ? (t.view.addClass("small"), t.setViewState(1)) : (t.view.removeClass("small"), t.setViewState(0))
        }, addEvents: function () {
            var e = this;
            this.base(arguments), e.view.click(function () {
                e.say("includeViewClicked", {viewState: e.getViewState()})
            }), e.closeBtn.click(function () {
                e.close(), e.say("includeViewClosed")
            }), e.listen("detailViewOpened", function () {
                e.minimize(!0)
            }), e.listen("detailViewClosed", function () {
                e.minimize(!1)
            })
        }, close: function () {
            var e = this;
            e.view.removeClass("active"), _.each(e.getIncludes(), function (t, n) {
                e.view.removeClass(t)
            }), e.say("includeViewClosed")
        }, changeLanguage: function () {
            var e = this
        }
    }
}), define("Views/IncludeView", function () {
}), require.config({
    paths: {
        modernizr: "../../H5BP/js/vendor/modernizr-2.8.3.min",
        domReady: "../../requirejs/domReady",
        jquery: "../../jquery/jquery-2.1.3",
        perfectScrollbarJQuery: "https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.7/js/min/perfect-scrollbar.jquery.min",
        restive: "../../restive/restive.min",
        qx: "../../qooxdoo/qx-oo-4.1.min",
        underscore: "../../underscore/underscore-min",
        leaflet: "../../leaflet/leaflet",
        leafletCluster: "https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster",
        hammer: "../../hammerjs/hammer.min",
        cartodb: "http://libs.cartocdn.com/cartodb.js/v3/3.12/cartodb",
        bootstrap: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min",
        mapbox: "https://api.tiles.mapbox.com/mapbox.js/v2.1.9/mapbox",
        d3: "http://d3js.org/d3.v3.min"
    }, waitSeconds: 0
}), require(["domReady", "jquery", "perfectScrollbarJQuery", "qx", "underscore", "hammer", "modernizr", "bootstrap", "Daddy", "restive", "APPDDFA", "DataManager", "Router", "LanguageManager", "Views/View", "Views/MapView", "Views/DetailView", "Views/MenuView", "Views/LegendView", "Views/LanguageView", "Views/PlusView", "Views/FormView", "Views/IncludeView"], function (e, t, n, r, i) {
    e(function () {
        APP = new APPDDFA, APP.init(function () {
            APP.getUserDevice() === "mobile" ? require(["Views/DetailViewMobile", "Views/LanguageViewMobile"], function () {
                APP.getRouter().initialNavigate()
            }) : APP.getRouter().initialNavigate(), APP.say("appInitialized")
        })
    })
}), define("main", function () {
});