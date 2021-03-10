document.addEventListener("load", function(t) {
    "SCRIPT" === t.target.tagName && (t.target.dataset.loaded = "loaded")
}, ! function() {
    var e = !1,
        t = {
            get passive() {
                return !(e = !0)
            }
        };
    try {
        window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
    } catch (t) {
        e = !1
    }
    return e
}() || {
    capture: !0
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
};
! function() {
    "use strict";

    function i() {}
    var u, e, r, o = null,
        n = "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)),
        c = n ? self : global,
        t = c.Promise,
        f = c.process,
        s = c.console,
        a = !1,
        l = Array,
        h = Error,
        _ = 1,
        v = 2,
        p = 3,
        d = "Symbol",
        y = "species",
        m = "return",
        b = "_pt",
        w = "_st",
        g = "Invalid argument",
        j = "\nFrom previous ",
        k = "Chaining cycle detected for promise",
        S = "unhandledRejection",
        x = {
            e: o
        },
        T = /^.+\/node_modules\/yaku\/.+\n?/gm,
        R = function(n) {
            var t = this;
            if (!F(t) || t._s !== u) throw U("Invalid this");
            if (t._s = p, a && (t[b] = Y()), n !== i) {
                if (!E(n)) throw U(g);
                (n = P(n)(G(t, v), G(t, _))) === x && M(t, _, n.e)
            }
        };

    function C() {
        return R[d][y] || "Symbol(species)"
    }

    function F(n) {
        return n && "object" === (void 0 === n ? "undefined" : _typeof(n))
    }

    function E(n) {
        return "function" == typeof n
    }

    function H(n, t) {
        return n instanceof t
    }

    function I(n, t, e) {
        if (!t(n)) throw U(e)
    }

    function L() {
        try {
            return e.apply(r, arguments)
        } catch (n) {
            return x.e = n, x
        }
    }

    function P(n, t) {
        return e = n, r = t, L
    }

    function A(t, e) {
        var r = l(t),
            o = 0;

        function i() {
            for (var n = 0; n < o;) e(r[n], r[n + 1]), r[n++] = u, r[n++] = u;
            o = 0, r.length > t && (r.length = t)
        }
        return function(n, t) {
            r[o++] = n, r[o++] = t, 2 === o && R.nextTick(i)
        }
    }

    function O(n, t) {
        var e, r, o, i = 0;
        if (!n) throw U(g);
        var u = n[R[d].iterator];
        if (E(u)) r = u.call(n);
        else {
            if (!E(n.next)) {
                if (H(n, l)) {
                    for (e = n.length; i < e;) t(n[i], i++);
                    return i
                }
                throw U(g)
            }
            r = n
        }
        for (; !(o = r.next()).done;)
            if ((o = P(t)(o.value, i++)) === x) throw E(r[m]) && r[m](), o.e;
        return i
    }

    function U(n) {
        return new TypeError(n)
    }

    function Y(n) {
        return (n ? "" : j) + (new h).stack
    }(function(n, t) {
        for (var e in t) n[e] = t[e]
    })((R.default = R).prototype, {
        then: function(n, t) {
            if (void 0 === this._s) throw U();
            return function(n, t, e, r) {
                E(e) && (t._onFulfilled = e);
                E(r) && (n._uh && z("rejectionHandled", n), t._onRejected = r);
                a && (t._p = n);
                n[n._c++] = t, n._s !== p && $(n, t);
                return t
            }(this, D(R.speciesConstructor(this, R)), n, t)
        },
        catch: function(n) {
            return this.then(u, n)
        },
        finally: function(t) {
            return this.then(function(n) {
                return R.resolve(t()).then(function() {
                    return n
                })
            }, function(n) {
                return R.resolve(t()).then(function() {
                    throw n
                })
            })
        },
        _c: 0,
        _p: o
    }), R.resolve = function(n) {
        return B(n) ? n : N(D(this), n)
    }, R.reject = function(n) {
        return M(D(this), _, n)
    }, R.race = function(n) {
        function t(n) {
            M(o, v, n)
        }

        function e(n) {
            M(o, _, n)
        }
        var r = this,
            o = D(r),
            n = P(O)(n, function(n) {
                r.resolve(n).then(t, e)
            });
        return n === x ? r.reject(n.e) : o
    }, R.all = function(n) {
        var e, r = this,
            o = D(r),
            i = [];

        function u(n) {
            M(o, _, n)
        }
        return (e = P(O)(n, function(n, t) {
            r.resolve(n).then(function(n) {
                i[t] = n, --e || M(o, v, i)
            }, u)
        })) === x ? r.reject(e.e) : (e || M(o, v, []), o)
    }, R.Symbol = c[d] || {}, P(function() {
        Object.defineProperty(R, C(), {
            get: function() {
                return this
            }
        })
    })(), R.speciesConstructor = function(n, t) {
        n = n.constructor;
        return n && n[C()] || t
    }, R.unhandledRejection = function(n, t) {
        s && s.error("Uncaught (in promise)", a ? t.longStack : J(n, t))
    }, R.rejectionHandled = i, R.enableLongStackTrace = function() {
        a = !0
    }, R.nextTick = n ? function(n) {
        t ? new t(function(n) {
            n()
        }).then(n) : setTimeout(n)
    } : f.nextTick, R._s = 1;
    var $ = A(999, function(n, t) {
            var e = n._s !== _ ? t._onFulfilled : t._onRejected;
            e !== u ? (e = P(K)(e, n._v)) !== x ? N(t, e) : M(t, _, e.e) : M(t, n._s, n._v)
        }),
        q = A(9, function(n) {
            ! function n(t) {
                {
                    if (t._umark) return !0;
                    t._umark = !0
                }
                var e, r = 0,
                    o = t._c;
                for (; r < o;)
                    if ((e = t[r++])._onRejected || n(e)) return !0
            }(n) && (n._uh = 1, z(S, n))
        });

    function z(n, t) {
        var e = "on" + n.toLowerCase(),
            e = c[e];
        f && f.listeners(n).length ? n === S ? f.emit(n, t._v, t) : f.emit(n, t) : e ? e({
            reason: t._v,
            promise: t
        }) : R[n](t._v, t)
    }

    function B(n) {
        return n && n._s
    }

    function D(n) {
        if (B(n)) return new n(i);
        var e, r, o = new n(function(n, t) {
            if (o) throw U();
            e = n, r = t
        });
        return I(e, E), I(r, E), o
    }

    function G(t, e) {
        var r = !1;
        return function(n) {
            r || (r = !0, a && (t[w] = Y(!0)), e === v ? N(t, n) : M(t, e, n))
        }
    }

    function J(n, t) {
        var e = [];

        function r(n) {
            return e.push(n.replace(/^\s+|\s+$/g, ""))
        }
        return a && (t[w] && r(t[w]), function n(t) {
            t && b in t && (n(t._next), r(t[b] + ""), n(t._p))
        }(t)), (n && n.stack ? n.stack : n) + ("\n" + e.join("\n")).replace(T, "")
    }

    function K(n, t) {
        return n(t)
    }

    function M(n, t, e) {
        var r = 0,
            o = n._c;
        if (n._s === p)
            for (n._s = t, n._v = e, t === _ && (a && H(e, h) && (e.longStack = J(e, n)), q(n)); r < o;) $(n, n[r++]);
        return n
    }

    function N(n, t) {
        if (t === n && t) return M(n, _, U(k)), n;
        if (t !== o && (E(t) || F(t))) {
            var e = P(Q)(t);
            if (e === x) return M(n, _, e.e), n;
            E(e) ? (a && B(t) && (n._next = t), B(t) ? V(n, t, e) : R.nextTick(function() {
                V(n, t, e)
            })) : M(n, v, t)
        } else M(n, v, t);
        return n
    }

    function Q(n) {
        return n.then
    }

    function V(t, e, n) {
        n = P(n, e)(function(n) {
            e && (e = o, N(t, n))
        }, function(n) {
            e && (e = o, M(t, _, n))
        });
        n === x && e && (M(t, _, n.e), e = o)
    }
    try {
        module.exports = R
    } catch (n) {
        c.Yaku = R
    }
}();
! function() {
    function e(e, t) {
        var n = document.createEvent("CustomEvent");
        return t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }

    function t(e, t) {
        var n = t || {},
            t = document.createEvent("MouseEvent");
        return t.initMouseEvent(e, n.bubbles || !1, n.cancelable || !1, window, n.detail || {}, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t
    }

    function n() {
        window.requestAnimationFrame(function() {
            document.documentElement.classList.add("is-window-loaded")
        }), window.ElementQueries && !window.ElementQueries.instance && window.ElementQueries.init()
    }
    "function" != typeof Element.prototype.closest && (Element.prototype.closest = function(e) {
        for (var t = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].reduceRight(function(e, t) {
                return "function" == typeof document.body[t] ? t : e
            }), n = this; n;) {
            if (n[t](e)) return n;
            n = n.parentElement
        }
        return null
    }), "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e), "function" != typeof Object.assign && (Object.assign = function(e) {
        return Array.prototype.slice.call(arguments, 1).reduce(function(t, n) {
            return Object.keys(n || {}).forEach(function(e) {
                t[e] = n[e]
            }), t
        }, e)
    }), "function" != typeof window.MouseEvent && (t.prototype = window.Event.prototype, window.MouseEvent = t), "complete" === document.readyState ? n() : window.addEventListener("load", n, !1), "function" != typeof window.Promise && (window.Promise = Yaku), "function" != typeof Element.prototype.matches && (Element.prototype.matches = Element.prototype.msMatchesSelector || function(e) {
        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this;);
        return -1 < n
    }), String.prototype.includes || (String.prototype.includes = function(e, t) {
        if (e instanceof RegExp) throw TypeError("first argument must not be a RegExp");
        return -1 !== this.indexOf(e, t)
    }), "function" != typeof Array.from && (Array.from = function() {
        var l = void 0;
        try {
            l = Symbol.iterator || "Symbol(Symbol.iterator)"
        } catch (e) {
            l = "Symbol(Symbol.iterator)"
        }
        var t = Object.prototype.toString;

        function s(e) {
            return "function" == typeof e || "[object Function]" === t.call(e)
        }
        var n = Math.pow(2, 53) - 1;

        function f(e) {
            e = e, e = Number(e), e = isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (0 < e ? 1 : -1) * Math.floor(Math.abs(e)) : e;
            return Math.min(Math.max(e, 0), n)
        }
        return function(e) {
            var t = Object(e),
                n = s(t[l]);
            if (null === e && !n) throw new TypeError("Array.from requires an array-like object or iterator - not null or undefined");
            var o = 1 < arguments.length ? arguments[1] : void 0,
                r = void 0;
            if (void 0 !== o) {
                if (!s(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                2 < arguments.length && (r = arguments[2])
            }
            var i, c, a, u = f(t.length);
            return function(e, t, n, o, r, i) {
                for (var c = 0; c < n || r;) {
                    var a = o(c),
                        u = r ? a.value : a;
                    if (r && a.done) return t;
                    t[c] = i ? void 0 === e ? i(u, c) : i.call(e, u, c) : u, c += 1
                }
                if (r) throw new TypeError("Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1");
                return t.length = n, t
            }(r, s(this) ? Object(new this(u)) : new Array(u), u, (c = t, a = (i = n) && c[l](), function(e) {
                return i ? a.next() : c[e]
            }), n, o)
        }
    }()), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function(e) {
        e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                var e = Array.prototype.slice.call(arguments),
                    n = document.createDocumentFragment();
                e.forEach(function(e) {
                    var t = e instanceof Node;
                    n.appendChild(t ? e : document.createTextNode(String(e)))
                }), this.insertBefore(n, this.firstChild)
            }
        })
    })
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(n, c, o) {
    function d(e) {
        return "function" != typeof c.createElement ? c.createElement(e) : y ? c.createElementNS.call(c, "http://www.w3.org/2000/svg", e) : c.createElement.apply(c, arguments)
    }
    var f = [],
        p = [],
        e = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                p.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                p.push({
                    name: null,
                    fn: e
                })
            }
        },
        u = function() {};
    u.prototype = e, u = new u;
    var s, m = c.documentElement,
        y = "svg" === m.nodeName.toLowerCase(),
        t = (s = !("onblur" in c.documentElement), function(e, t) {
            var n;
            return !!e && (!(n = (e = "on" + e) in (t = !t || "string" == typeof t ? d(t || "div") : t)) && s && ((t = !t.setAttribute ? d("div") : t).setAttribute(e, ""), n = "function" == typeof t[e], t[e] !== o && (t[e] = o), t.removeAttribute(e)), n)
        });
    e.hasEvent = t;
    var i = e._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    e._prefixes = i;
    var a, r, l, h = e.testStyles = function(e, t, n, o) {
        var s, i, a, r = "modernizr",
            l = d("div"),
            f = ((a = c.body) || ((a = d(y ? "svg" : "body")).fake = !0), a);
        if (parseInt(n, 10))
            for (; n--;)(s = d("div")).id = o ? o[n] : r + (n + 1), l.appendChild(s);
        return (a = d("style")).type = "text/css", a.id = "s" + r, (f.fake ? f : l).appendChild(a), f.appendChild(l), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(c.createTextNode(e)), l.id = r, f.fake && (f.style.background = "", f.style.overflow = "hidden", i = m.style.overflow, m.style.overflow = "hidden", m.appendChild(f)), e = t(l, e), f.fake ? (f.parentNode.removeChild(f), m.style.overflow = i, m.offsetHeight) : l.parentNode.removeChild(l), !!e
    };
    u.addTest("touchevents", function() {
            var t, e;
            return "ontouchstart" in n || n.DocumentTouch && c instanceof DocumentTouch ? t = !0 : (e = ["@media (", i.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join(""), h(e, function(e) {
                t = 9 === e.offsetTop
            })), t
        }),
        function() {
            var e, t, n, o, s, i, a, r, l;
            for (a in p)
                if (p.hasOwnProperty(a)) {
                    if (e = [], (t = p[a]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (r = t.fn, l = "function", o = (void 0 === r ? "undefined" : _typeof(r)) === l ? t.fn() : t.fn, s = 0; s < e.length; s++) 1 === (i = e[s].split(".")).length ? u[i[0]] = o : (!u[i[0]] || u[i[0]] instanceof Boolean || (u[i[0]] = new Boolean(u[i[0]])), u[i[0]][i[1]] = o), f.push((o ? "" : "no-") + i.join("-"))
                }
        }(), a = f, r = m.className, l = u._config.classPrefix || "", y && (r = r.baseVal), u._config.enableJSClass && (t = new RegExp("(^|\\s)" + l + "no-js(\\s|$)"), r = r.replace(t, "$1" + l + "js$2")), u._config.enableClasses && (r += " " + l + a.join(" " + l), y ? m.className.baseVal = r : m.className = r), delete e.addTest, delete e.addAsyncTest;
    for (var v = 0; v < u._q.length; v++) u._q[v]();
    n.Modernizr = u
}(window, document);
var docCookies = {
    getItem: function(e) {
        e = document.cookie.match(new RegExp("^ |" + e + "=([^;]+)"));
        return e ? decodeURIComponent(e[1]) : null
    },
    setItem: function(e, o, n, t, c, r) {
        var i = "";
        if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
        if (n) switch (n.constructor) {
            case Number:
                i = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                break;
            case String:
                i = "; expires=" + n;
                break;
            case Date:
                i = "; expires=" + n.toUTCString()
        }
        return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(o) + i + (c ? "; domain=" + c : "") + (t ? "; path=" + t : "") + (r ? "; secure" : ""), !0
    },
    removeItem: function(e, o, n) {
        return !!this.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (o ? "; path=" + o : ""), !0)
    },
    hasItem: function(e) {
        return !!e && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
    },
    keys: function() {
        for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), o = e.length, n = 0; n < o; n++) e[n] = decodeURIComponent(e[n]);
        return e
    }
};
var querystring = {
    parse: function(n) {
        var o = {};
        if ("string" == typeof(n = void 0 !== n ? n : window.location.search) && 0 < n.length)
            for (var e = 0, r = (n = (n = "?" === n[0] ? n.substring(1) : n).split("&")).length; e < r; e++) {
                var t, i = n[e],
                    s = i.indexOf("="),
                    i = 0 <= s ? (t = i.substr(0, s), i.substr(s + 1)) : (t = i, "");
                i = decodeURIComponent(i), void 0 === o[t] ? o[t] = i : o[t] instanceof Array ? o[t].push(i) : o[t] = [o[t], i]
            }
        return o
    },
    stringify: function(n) {
        var o = [];
        if (n && n.constructor === Object)
            for (var e in n)
                if (n[e] instanceof Array)
                    for (var r = 0, t = n[e].length; r < t; r++) o.push([encodeURIComponent(e), encodeURIComponent(n[e][r])].join("="));
                else o.push([encodeURIComponent(e), encodeURIComponent(n[e])].join("="));
        return o.join("&")
    }
};
! function(s) {
    var n = (s.Mntl = s.Mntl || {}, s.Mntl.VueInGlobe = s.Mntl.VueInGlobe || {}, s.Mntl.VueInGlobe.apps = s.Mntl.VueInGlobe.apps || {}, s.Mntl.VueInGlobe.comps = s.Mntl.VueInGlobe.comps || {}, s.debug || (s.Mntl.DEBUG = -1 !== location.search.indexOf("jsdebug=true"), s.Mntl.DEBUG && s.console ? s.debug = {
        log: s.console.log.bind(s.console, "Mntl: %s"),
        error: s.console.error.bind(s.console, "Mntl: error: %s"),
        info: s.console.info.bind(s.console, "Mntl: info: %s"),
        warn: s.console.warn.bind(s.console, "Mntl: warn: %s")
    } : s.debug = {
        log: t,
        error: t,
        info: t,
        warn: t
    }, s.debug.info("debug loaded from Mantle utilities.js")), {
        ajaxPromiseGetCall: function(o, r, a) {
            return new Promise(function(n, t) {
                var e = new XMLHttpRequest;
                e.onTimeout = a, e.open("GET", o), e.onload = function() {
                    200 === e.status ? n(e.response) : t(e.statusText)
                }, e.onerror = function() {
                    t(r)
                }, e.send()
            })
        },
        ajaxPromisePost: function(r, a, i) {
            return new Promise(function(n, t) {
                var e = new FormData;
                Object.keys(a).forEach(function(n) {
                    e.append(n, a[n])
                }), e.append("CSRFToken", s.Mntl.csrf() || "");
                var o = new XMLHttpRequest;
                o.onTimeout = i, o.open("POST", r), o.onload = function() {
                    200 === o.status ? n(o.response) : t(o.statusText)
                }, o.onerror = function() {
                    t("Error getting data at " + r)
                }, o.send(e)
            })
        },
        getClosestMatchingParent: function(n, t) {
            for (var e = n.parentNode; e !== document;) {
                if (e.matches(t)) return e;
                e = e.parentNode
            }
            return null
        },
        getDomain: e,
        getQueryParams: function(n) {
            var t = querystring.parse(n),
                e = void 0;
            for (e in t) t.hasOwnProperty(e) && t[e] instanceof Array && (t[e] = t[e][0]);
            return t
        },
        getW: function() {
            var n, t = s.breakpoints,
                e = void 0,
                o = !1;
            for (e in t) void 0 !== t[e].arg && (n = t[e].altKey || e, n = "(" + t[e].arg + ": " + t[n].width + ")", s.matchMedia(n).matches && (o = e));
            return o
        },
        getStaticPath: function() {
            return "/static/" + o()
        },
        isCurrentDomain: function(n) {
            return -1 < (-1 < n.indexOf("://") ? n.split("/")[2] : n.split("/")[0]).split(":")[0].indexOf(e())
        },
        initVueApp: function(n, t) {
            Mntl.VueInGlobe.apps[n] = s.Mntl.VueInGlobe.apps[n] || {}, Mntl.VueInGlobe.apps[n].baseApp = t
        },
        loadExternalJS: function(n, t) {
            var e = document.createElement("script"),
                o = void 0;
            for (o in e.type = "text/javascript", n) e.setAttribute(o, n[o]);
            e.hasAttribute("id") && !n.id && e.removeAttribute("id"), t && a(e, t), document.getElementsByTagName("head")[0].appendChild(e)
        },
        onFontLoad: function(e, n) {
            var o = Date.now() + (n || 3e3),
                r = void 0;
            document.fonts ? r = setInterval(function() {
                var n = document.fonts.status,
                    t = "loaded" === n || "error" === n;
                (t || Date.now() > o) && (clearInterval(r), s.debug.log("onFontLoad: " + (t ? n : "timed out")), e())
            }, 200) : (s.debug.log("onFontLoad browser unsupported"), e())
        },
        onLoad: function(n, t) {
            "complete" === document.readyState ? n() : s.addEventListener("load", n, t || !1)
        },
        openWindow: function(n) {
            var t = screen.width / 2 - 417.5,
                e = screen.height / 2 - 250;
            return s.open(n, "shareWindow", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=835, height=500, top=" + e + ", left=" + t)
        },
        pushToDataLayer: function(t) {
            return function(n) {
                s.dataLayer = s.dataLayer || [], s.dataLayer.push(Object.assign({}, t, n))
            }
        },
        ready: function(n) {
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : n()
        },
        resourceVersion: o,
        scriptOnLoad: a,
        scriptsOnLoad: function(n, t, e) {
            if (n.length) {
                var o = s.Mntl.fnUtilities.curry(a, 2),
                    r = Array.prototype.map.call(n, function(n) {
                        return o(n)
                    });
                return s.Mntl.fnUtilities.all(r, function() {
                    t.apply(n, e || [])
                }), !0
            }
            return !1
        }
    });

    function t() {}

    function e() {
        var n = s.location.hostname;
        return n.substring(n.lastIndexOf(".", n.lastIndexOf(".") - 1) + 1)
    }

    function o(n) {
        n = (n ? "data-" + n + "-" : "data-") + "resource-version";
        return document.querySelector("HTML").getAttribute(n)
    }

    function a(n, t, e) {
        return e = e || [], n || t ? n.dataset.loaded ? t.apply(n, e) : n.readyState ? n.onreadystatechange = function() {
            "scriptAvailable" !== n.readyState && "complete" !== n.readyState && "loaded" !== n.readyState || (n.onreadystatechange = null, t.apply(n, e))
        } : n.onload = function() {
            t.apply(n, e)
        } : s.debug.error("Mntl.utilities.scriptOnLoad() needs script and callback arguments"), !1
    }
    s.Mntl.utilities = Object.assign({}, s.Mntl.utilities || {}, n)
}(window);
var Mntl = window.Mntl || {};
Mntl.fnUtilities = function() {
    function r(n) {
        return n
    }

    function e(e, n, t) {
        var u = n || r,
            i = t || r;
        return Object.keys(e).reduce(function(n, t) {
            var r = u(t);
            return r && (n[r] = i(e[t])), n
        }, {})
    }

    function n(n, t) {
        t = t || 0;
        return Array.prototype.slice.call(n, t)
    }
    return {
        all: function(n, t) {
            var r = n.length;
            n.forEach(function(n) {
                n(function() {
                    0 == --r && t()
                })
            })
        },
        curry: function(r, n) {
            var e = n || r.length;
            if (e < 1) throw new TypeError("Mntl.fnUtilities.curry expects the provided function to have at least one argument, or set arity explicity");
            return function n() {
                var t = Array.prototype.slice.call(arguments);
                return t.length >= e ? r.apply(null, t) : function() {
                    return n.apply(null, t.concat(Array.prototype.slice.call(arguments)))
                }
            }
        },
        deepExtend: function n(t, r) {
            for (var e in r) r[e] && r[e].constructor && r[e].constructor === Object ? (t[e] = t[e] || {}, n(t[e], r[e])) : t[e] = r[e];
            return t
        },
        getDeepValue: function(n) {
            return Array.prototype.slice.call(arguments, 1).reduce(function(n, t) {
                return void 0 !== n ? null === n ? void 0 : n[t] : n
            }, n)
        },
        iterate: function(n, t) {
            for (var r in n) n.hasOwnProperty(r) && t(n, r)
        },
        mapObject: e,
        pickObject: function(n, t) {
            return e(n, function(n) {
                return -1 !== (t || []).indexOf(n) ? n : null
            })
        },
        once: function(n) {
            var t = !1;
            return function() {
                return t ? void 0 : (t = !0, n.apply(this, arguments))
            }
        },
        pipe: function() {
            var t = n(arguments);
            if (!t.reduce(function(n, t) {
                    return n && "function" == typeof t
                }, !0)) throw new TypeError("All arguments provided to Mntl.fnUtilities.pipe must be functions");
            return function(n) {
                return t.reduce(function(n, t) {
                    return t(n)
                }, n)
            }
        },
        safeJsonParse: function(n) {
            var t;
            try {
                t = JSON.parse(n)
            } catch (n) {
                t = null
            }
            return t
        },
        toArray: n,
        trimAllWhitespace: function(n) {
            return n ? n.trim().replace(/\n/g, " ") : ""
        }
    }
}();
var Mntl = window.Mntl || {};
Mntl.domUtilities = function() {
    function o(t, e, n) {
        "className" === t ? n.className = e : n.setAttribute(t, e)
    }

    function i(e, n) {
        Object.keys(n).forEach(function(t) {
            o(t, n[t], e)
        })
    }
    return {
        closestPreviousSibling: function t(e, n) {
            return null === n ? null : e(n) ? n : t(e, n.previousElementSibling)
        },
        createEl: function t(e) {
            var n;
            return "string" == typeof e ? document.createTextNode(e) : (i(n = document.createElement(e.type), e.props), e.children.map(t).forEach(n.appendChild.bind(n)), n)
        },
        getData: function(t, e) {
            return void 0 === (t = e.dataset ? e.dataset[t] : e.getAttribute(["data-", t.replace(/([A-Z])/g, function(t) {
                return ["-", t.toLowerCase()].join("")
            })].join(""))) ? t : "null" === t ? null : null === Mntl.fnUtilities.safeJsonParse(t) ? t : Mntl.fnUtilities.safeJsonParse(t)
        },
        getResourceRootUrl: function() {
            return [window.location.protocol, "//", window.location.host].join("")
        },
        outerHeight: function(t) {
            var n = window.getComputedStyle(t);
            return Math.ceil(["height", "paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth", "marginTop", "marginBottom"].reduce(function(t, e) {
                return t + parseFloat(n[e])
            }, 0))
        },
        setDataAttrs: function(t, e) {
            for (var n in t) try {
                e.dataset[n] = t[n]
            } catch (t) {
                window.debug.error("Mntl.domUtilities.setDataAttrs: " + n + " is a bad key. Pass keys in camelCase")
            }
        },
        setProp: o,
        setProps: i
    }
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    Mntl = window.Mntl || {},
    googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [], Mntl.GPT = function() {
    var n = Mntl.utilities.getQueryParams().kw_only,
        o = 0,
        s = {},
        d = {},
        l = {},
        g = ["displayOnScroll"],
        i = {},
        a = !1,
        r = {
            domain: "",
            isMobile: !1,
            pageTargeting: {
                ugc: "0",
                dc_ref: encodeURIComponent(window.location.href),
                hgt: "" + window.screen.height,
                wdth: "" + window.screen.width,
                kw: Mntl.utilities.getQueryParams().kw || ""
            },
            baseSlotTargeting: {
                pc: docCookies.getItem("pc")
            },
            initialSlots: [],
            utils: {},
            dfpId: "",
            displayOnScroll: "false",
            displayOnConsent: "false"
        };

    function u(t) {
        for (var e = [], n = 0, i = t.length; n < i; n++) t[n].gptSlot && e.push(t[n].gptSlot);
        return e
    }

    function c(t) {
        var e = u(t);
        e.length && ("fakeAds" === r.pageTargeting.kw && -1 !== window.location.search.indexOf("state=PREVIEW") ? e.forEach(function(t) {
            var e = t.getSlotId().getDomId(),
                n = document.getElementById(e),
                e = t.getSizes().reduce(function(t, e) {
                    return "object" === (void 0 === e ? "undefined" : _typeof(e)) && e.getHeight() * e.getWidth() > t.height * t.width ? {
                        height: e.getHeight(),
                        width: e.getWidth()
                    } : t
                }, {
                    height: 50,
                    width: 50
                }),
                t = document.createElement("div");
            null !== n && (t.style.backgroundColor = "#e8e8e8", t.style.width = e.width + "px", t.style.height = e.height + "px", n.parentNode.setAttribute("data-ad-height", e.height), n.parentNode.setAttribute("data-ad-width", e.width), n.appendChild(t))
        }) : (n && (e.forEach(function(t) {
            t.clearTargeting()
        }), googletag.pubads().clearTargeting(), googletag.pubads().setTargeting("kw_only", n)), googletag.cmd.push(function() {
            window.debug.log("Rendering slots", t), googletag.pubads().refresh(e, {
                changeCorrelator: !1
            })
        })))
    }

    function f(i) {
        var o, t, e, g = [],
            l = [];
        for (window.debug.log("Slots to display:", i), t = 0, e = i.length; t < e; t++) ! function(n) {
            g.push(setInterval(function() {
                var t = i[n],
                    e = t.config.id;
                document.getElementById(e) && (document.getElementById(e).slotObj = t, clearInterval(g[n]), window.debug.log("Found slot " + e + ". Calling googletag.display()"), googletag.display(e), t.displayState = "displayed", r.singleRequest ? (l.push(t), l.length === i.length && (clearTimeout(o), window.debug.log("Single request mode: all slots found, now calling refresh"), c(i))) : c([t]))
            }, 25))
        }(t);
        o = setTimeout(function() {
            for (var t = 0, e = g.length; t < e; t++) clearInterval(g[t]);
            r.singleRequest && l.length !== i.length && (window.debug.log("Single request mode: all slots not found, calling refresh on found slots"), c(l))
        }, 1e4)
    }

    function p(t) {
        var e = [],
            n = [];
        t.length && (Mntl.RTB ? (t.forEach(function(t) {
            (t.config.rtb ? e : n).push(t)
        }), window.debug.log("Passing slot ids to Mntl RTB refresh", e), Mntl.RTB.refresh(e, function() {
            window.debug.log("Running Mntl RTB refresh callback and refreshing slots", e), c(e)
        }), window.debug.log("Bypassing RTB and refreshing slots", n), f(n)) : (window.debug.log("Refreshing slots", t), c(t)))
    }

    function h(t) {
        for (var i = [], e = [], n = 0, o = t.length; n < o; n++) "displayed" !== t[n].displayState && "displaying" !== t[n].displayState ? (t[n].displayState = "displaying", i.push(t[n])) : "displayed" === t[n].displayState && e.push(t[n]);
        e.length && p(e), i.length && googletag.cmd.push(function() {
            var e = [],
                n = [];
            Mntl.RTB && -1 === window.location.search.indexOf("google_nofetch") ? (t.forEach(function(t) {
                (t.config.rtb ? e : n).push(t)
            }), window.debug.log("Passing slots to Mntl RTB", e), Mntl.RTB.init(e, function() {
                window.debug.log("Running Mtnl RTB init callback"), f(e)
            }), window.debug.log("Bypassing RTB and displaying slots", n), f(n)) : f(i)
        })
    }

    function b(t) {
        return "string" == typeof t && -1 !== g.indexOf(t) && "true" === r[t]
    }

    function w(t) {
        return !b(t) || i[t]
    }

    function y(t, e) {
        i[t] = !0, g.every(w) && (a = !0, h(e))
    }

    function S(t) {
        if (null == t)
            for (var e in t = [], l) t.push(l[e]);
        t.length ? !a && g.some(b) ? (b("displayOnScroll") && window.addEventListener("scroll", y.bind(null, "displayOnScroll", t), {
            once: !0
        }), b("displayOnConsent") && Mntl.CMP.onConsentChange(y.bind(null, "displayOnConsent", t))) : h(t) : window.debug.error("No slots to display")
    }

    function m(t) {
        return null != t && "" !== t
    }

    function v(t, e) {
        t[e] = {
            fn: [],
            rendered: !1
        }
    }

    function M() {
        var e = this;
        return this.config.id ? l[this.config.id] ? (window.debug.error("Error instantiating slot " + this.config.id + ": slot already exists"), l[this.config.id]) : (l[this.config.id] = this, googletag.cmd.push(function() {
            var n, t;
            e.targeting = Mntl.fnUtilities.deepExtend(e.targeting, r.baseSlotTargeting), e.targeting.tile = "" + o++, "string" == typeof e.config.id && -1 !== e.config.id.indexOf("dynamic-inline") ? e.targeting.slot = "dynamic-inline" : e.targeting.slot = e.config.id, t = r.utils.buildGptUrl(e.config, e.targeting, r.pageTargeting), window.debug.log("Defining gpt slot with url: " + t + "..."), n = "outofpage" === e.config.type ? googletag.defineOutOfPageSlot(t, e.config.id) : googletag.defineSlot(t, e.config.sizes, e.config.id), window.debug.log("Gpt slot defined", n), r.pageTargeting.companion && (googletag.pubads().collapseEmptyDivs(!0), window.debug.log("Adding companionAds service"), n.addService(googletag.companionAds())), Mntl.fnUtilities.iterate(e.targeting, function(t, e) {
                m(t[e]) && (window.debug.log("Setting slot targeting key " + e + " as " + t[e]), n.setTargeting(e, t[e]))
            }), window.debug.log("Adding pubads service"), n.addService(googletag.pubads()), e.gptSlot = n, s[e.config.id] || v(s, e.config.id)
        }), this) : (window.debug.error("Error instantiating slot: no id provided"), null)
    }

    function E() {
        return this.config = {}, this.targeting = {}, this.gptSlot = null, this.el = null, this.displayState = null, this
    }

    function T(t) {
        var e = t.slot.getSlotId().getDomId(),
            t = document.getElementById(e),
            e = new CustomEvent("adViewable", {
                bubbles: !0
            });
        t.dispatchEvent(e)
    }

    function R(t) {
        var e, n, i = t.slot.getSlotId().getDomId(),
            o = document.getElementById(i),
            g = t.slot.getSizes().some(function(t) {
                return "fluid" === t
            }),
            l = o.parentElement,
            a = s[i],
            r = new CustomEvent("adRendered", {
                bubbles: !0
            });
        if (window.debug.log("Slot render ended", i), window.debug.log("Slot supportsFluid equals", g), t.size && t.size.length && (0 === t.size[0] && 0 === t.size[1] && g ? (l.setAttribute("data-ad-width", "fluid"), l.setAttribute("data-ad-height", "fluid")) : (l.setAttribute("data-ad-width", t.size[0]), l.setAttribute("data-ad-height", t.size[1]))), o.dispatchEvent(r), a.rendered = !0, a.args = {
                id: i,
                slot: t.slot,
                lid: t.lineItemId,
                size: t.size,
                isEmpty: t.isEmpty
            }, 0 < a.fn.length)
            for (e = 0, n = a.fn.length; e < n; e++) a.fn[e](a.args);
        Mntl.fnUtilities.iterate(d, function(t, e) {
            null !== i.match(new RegExp(e)) && t[e].forEach(function(t) {
                t(a.args)
            })
        })
    }

    function C(e, t, n) {
        Mntl.fnUtilities.iterate(e, function(t, e) {
            m(t[e]) ? (r.baseSlotTargeting[e] = t[e], window.debug.log("Setting slot targeting key " + e + " to " + t[e].toString())) : r.baseSlotTargeting[e] && (delete r.baseSlotTargeting[e], window.debug.log("Clearing slot targeting key " + e))
        }), t && Object.keys(l).forEach(function(t) {
            t = l[t];
            !t || !n && t.displayState || t.updateTargeting(e)
        })
    }

    function t(t) {
        var e, n = [];
        for (e in t) n.push(e + "=" + encodeURIComponent(t[e]));
        return encodeURIComponent(n.join("&"))
    }

    function z() {
        googletag.cmd.push(function() {
            var t, e = {};
            if (Mntl.CMP) {
                if (t = Mntl.CMP.hasTargetingConsent(), !Mntl.CMP.isConsentRequired()) return e.adconsent = "na", void C(e, !0, !0);
                e.adconsent = t ? "y" : "n", C(e, !0, !0), googletag.pubads().setRequestNonPersonalizedAds(t ? 0 : 1)
            }
        })
    }
    return E.prototype.byElement = function(t, e, n) {
        return this.config.id = e || t.getAttribute("id"), this.config.type = t.getAttribute("data-type"), this.config.sizes = Mntl.fnUtilities.safeJsonParse(t.getAttribute("data-sizes").replace(/'/g, '"')), this.config.rtb = "true" === t.getAttribute("data-rtb"), this.targeting = n || {}, this.targeting = Mntl.fnUtilities.deepExtend(this.targeting, Mntl.fnUtilities.safeJsonParse(t.getAttribute("data-targeting"))), this.targeting = Mntl.fnUtilities.deepExtend(this.targeting, {
            pos: t.getAttribute("data-pos"),
            priority: +t.getAttribute("data-priority"),
            floor_id: t.getAttribute("data-auction-floor-id"),
            floor: t.getAttribute("data-auction-floor-value")
        }), this.setEl(t), M.call(this)
    }, E.prototype.byConfig = function(t, e, n) {
        return this.config = t, this.targeting = e, n && this.setEl(n), M.call(this)
    }, E.prototype.setEl = function(t) {
        (this.el = t).setAttribute("id", this.config.id), t.slotObj = this
    }, E.prototype.updateTargeting = function(t) {
        var n = this;
        this.gptSlot ? (this.gptSlot.clearTargeting(), Mntl.fnUtilities.iterate(t, function(t, e) {
            m(t[e]) ? n.targeting[e] = t[e] : delete n.targeting[e]
        }), Mntl.fnUtilities.iterate(n.targeting, function(t, e) {
            n.gptSlot.setTargeting(e, t[e])
        })) : window.debug.error("No GPT slot defined")
    }, {
        init: function(t) {
            var e, n, i = [];
            for (r = Mntl.fnUtilities.deepExtend(r, t), window.debug.log("Mntl.GPT initialized with config", r), document.domain = r.domain, Mntl.CMP && (g.push("displayOnConsent"), Mntl.CMP.onConsentChange(z)), googletag.cmd.push(function() {
                    Mntl.fnUtilities.iterate(r.pageTargeting, function(t, e) {
                        m(t[e]) && (window.debug.log("Setting page targeting key " + e + " to " + t[e].toString()), googletag.pubads().setTargeting(e, t[e].toString()))
                    })
                }), e = 0, n = r.initialSlots.length; e < n; e++) i.push((new E).byConfig(r.initialSlots[e].config, r.initialSlots[e].targeting));
            googletag.cmd.push(function() {
                googletag.pubads().collapseEmptyDivs(!1), window.debug.log("Adding impressionViewable listener"), googletag.pubads().addEventListener("impressionViewable", T), window.debug.log("Adding slotRenderEnded listener"), googletag.pubads().addEventListener("slotRenderEnded", R), window.debug.log("Enabling async rending"), googletag.pubads().enableAsyncRendering(), window.debug.log("Disabling initial load"), googletag.pubads().disableInitialLoad(), r.singleRequest && (window.debug.log("Enabling single request mode"), googletag.pubads().enableSingleRequest()), window.debug.log("Enabling services"), googletag.enableServices()
            }), S(i)
        },
        serializeAllTargeting: function() {
            return t(Object.assign({}, r.baseSlotTargeting, r.pageTargeting))
        },
        serializePageTargeting: function() {
            return t(r.pageTargeting)
        },
        serializeBaseSlotTargeting: function() {
            return t(r.baseSlotTargeting)
        },
        sortSlotsByPriority: function(t) {
            return t.sort(function(t, e) {
                return t.targeting.priority || e.targeting.priority ? t.targeting.priority && !e.targeting.priority ? -1 : e.targeting.priority && !t.targeting.priority || t.targeting.priority > e.targeting.priority ? 1 : e.targeting.priority > t.targeting.priority ? -1 : 0 : 0
            })
        },
        isSingleRequest: function() {
            return r.singleRequest
        },
        isMobile: function() {
            return r.isMobile
        },
        updateBaseSlotTargeting: C,
        registerCallback: function(t, o) {
            function g(t) {
                s.hasOwnProperty(t) ? s[t].fn.push(o) : s[t] = {}, s[t].rendered && o(s[t].args)
            }
            window.debug.log("Registering callback", t, o), t.forEach(function(t) {
                var n, i, e; - 1 < t.indexOf("*") ? (n = t.replace("*", "(?:(?:.+)|^|$)"), e = n, d.hasOwnProperty(e) ? d[e].push(o) : d[e] = [o], Mntl.fnUtilities.iterate(s, function(t, e) {
                    null !== (i = e.match(new RegExp(n))) && i.length && g(e)
                })) : (s.hasOwnProperty(t) || v(s, t), g(t))
            })
        },
        Slot: E,
        displaySlots: S,
        clearSlots: function(t) {
            var e = u(t);
            e.length && googletag.cmd.push(function() {
                window.debug.log("Clearing slots", e), googletag.pubads().clear(e)
            })
        },
        destroySlots: function(t) {
            var e, n, i = u(t);
            if (i.length) {
                for (e = 0, n = t.length; e < n; e++) l[t[e].config.id] && (window.debug.log("Deleting slot " + t[e].config.id), delete l[t[e].config.id], o--);
                googletag.cmd.push(function() {
                    googletag.destroySlots(i)
                })
            }
        },
        addRequestSizeToSlot: function(t, e) {
            var n = Mntl.fnUtilities.getDeepValue(l, t, "gptSlot");
            n && (t = n.getSizes().map(function(t) {
                return "fluid" === t ? "fluid" : [t.getWidth(), t.getHeight()]
            }), e = googletag.sizeMapping().addSize([0, 0], t.concat([e])).build(), n.defineSizeMapping(e))
        },
        removeRequestSizeFromSlot: function(t, e) {
            var n, i, o = l[t],
                t = o ? o.gptSlot : null,
                g = !1;
            if (t) {
                for (n = t.getSizes(), i = 0; i < n.length; i++) n[i].getWidth() === e[0] && n[i].getHeight() === e[1] && (g = !0, n.splice(i, 1));
                g && (t.defineSizeMapping(n), p([o]))
            }
        },
        updatePageview: function() {
            googletag.cmd.push(function() {
                googletag.pubads().updateCorrelator()
            })
        },
        getGptSlotsFromSlots: u,
        getUtils: function() {
            return r.utils
        },
        getDfpId: function() {
            return r.dfpId
        }
    }
}();
var Mntl = Mntl || {};
Mntl.throttle = function(u, i, l) {
    var o, r;
    return i = i || 250,
        function() {
            var t = l || this,
                n = +new Date,
                e = arguments;
            o && n < o + i ? (clearTimeout(r), r = setTimeout(function() {
                o = n, u.apply(t, e)
            }, i)) : (o = n, u.apply(t, e))
        }
}, Mntl.debounce = function(e, u) {
    var i = null;
    return function() {
        var t = this,
            n = arguments;
        clearTimeout(i), i = setTimeout(function() {
            e.apply(t, n)
        }, u)
    }
};
var Mntl = window.Mntl || {};
Mntl.RevenueTracking = function(c) {
    var g = ["an", "qsrc", "q", "am", "dqi", "askid"],
        d = {
            shareurlbuttons: {
                facebook: ["S0", "S8"],
                stumble: ["S1", "S9"],
                reddit: ["S2", "S10"],
                pinterest: ["S3", "S11"],
                google: ["S4", "S12"],
                linkedin: ["S5", "S13"],
                twitter: ["S6", "S14"],
                permalink: ["S7", "S15"],
                social1: ["S64", "S65"]
            },
            mobilesharebutton2: {
                facebook: ["S16", "S24"],
                stumble: ["S17", "S25"],
                reddit: ["S18", "S26"],
                pinterest: ["S19", "S27"],
                google: ["S20", "S28"],
                linkedin: ["S21", "S29"],
                twitter: ["S22", "S30"],
                permalink: ["S23", "S31"]
            },
            cmssocialpub: {
                facebook: ["S32", "S40"],
                stumble: ["S33", "S41"],
                reddit: ["S34", "S42"],
                pinterest: ["S35", "S43"],
                google: ["S36", "S44"],
                linkedin: ["S37", "S45"],
                twitter: ["S38", "S46"],
                permalink: ["S39", "S47"]
            },
            cmsocialposting: {
                facebook: ["S48", "S56"],
                stumble: ["S49", "S57"],
                reddit: ["S50", "S58"],
                pinterest: ["S51", "S59"],
                google: ["S52", "S60"],
                linkedin: ["S53", "S61"],
                twitter: ["S54", "S62"],
                permalink: ["S55", "S63"]
            },
            socialads1: {
                facebook: ["S66", "S67"],
                twitter: ["S68", "S69"]
            },
            zergnet: {
                news: ["S121"],
                food: ["S122"],
                health: ["S123"],
                entertainment: ["S124"],
                autos: ["S125"],
                careers: ["S126"],
                technology: ["S127"],
                homeandgarden: ["S128"],
                money: ["S129"],
                parenting: ["S130"],
                people: ["S131"],
                sports: ["S132"],
                style: ["S133"],
                travel: ["S134"]
            },
            con: {
                out: ["S76"],
                tbl: ["S77"],
                facebook: ["S78"],
                oth: ["S79"]
            },
            email: {
                exp_nl: ["MO"],
                cn_nl: ["M1"],
                abt_td: ["M2"],
                ecou: ["M3"],
                do: ["M4"],
                welc: ["M5"]
            },
            ity: {
                indexsem: ["A1"],
                display: ["A2"],
                boostsem: ["A3"],
                boostorg: ["A4"],
                web: ["A5"],
                boostdd: ["A6"]
            }
        };

    function p(t, e) {
        var n = c.getItem(t),
            e = n ? function(t) {
                var e, n;
                if (t)
                    for (e in d)
                        for (n in d[e])
                            if (t === d[e][n][0]) return d[e][n][1];
                return !1
            }(n) : e;
        e && c.setItem(t, e, null, "/", Mntl.utilities.getDomain())
    }

    function t() {
        var t, e, n, o, i, S = Mntl.utilities.getQueryParams(),
            r = S.utm_campaign ? S.utm_campaign.toLowerCase() : "",
            a = S.utm_source ? S.utm_source.toLowerCase() : "",
            m = S.utm_medium ? S.utm_medium.toLowerCase() : "",
            s = S.o ? S.o.toLowerCase() : "",
            l = S.ity ? S.ity.toLowerCase() : "",
            u = S.utm_content,
            e = (e = JSON.parse(window.sessionStorage.getItem("abtUtm")), n = Mntl.utilities.getQueryParams(), o = {
                utm_content: null,
                utm_medium: null,
                utm_source: null,
                utm_campaign: null,
                utm_term: null
            }, Object.keys(n).map(function(t) {
                return !!o.hasOwnProperty(t) && (o[t] = n[t], t)
            }).filter(function(t) {
                return !1 !== t
            }).length ? window.sessionStorage.setItem("abtUtm", JSON.stringify(o)) : e && (o = e), o);
        d[r] && d[r][a] ? t = d[r][a][0] : d[m] && d[m][a] && ("email" === m || "con" === m) ? t = d[m][a][0] : "zergnet" === a && d[a] && d[a][r] ? t = d[a][r][0] : s && (t = l ? d.ity[l][0] : "A1", i = S, s = s, c.setItem("askoc", s, 1800, "/", Mntl.utilities.getDomain()), g.forEach(function(t) {
            i[t] && c.setItem(t, i[t].toLowerCase(), 1800, "/", Mntl.utilities.getDomain())
        })), (t || u || c.getItem("mpt") || c.getItem("GMCID")) && (u = "con" === m ? u : t, p("GMCID", t), p("mpt", u)), Mntl.GPT && Mntl.GPT.updateBaseSlotTargeting({
            mpt: c.getItem("mpt"),
            o: c.getItem("askoc"),
            uco: e.utm_content,
            umd: e.utm_medium,
            usc: e.utm_source,
            uca: e.utm_campaign,
            utr: e.utm_term
        })
    }
    return t(), c.setItem("lb_ld", "search", null, "/", Mntl.utilities.getDomain()), {
        setTrackingCookies: t
    }
}(window.docCookies);
var breakpoints = {
    0: {
        arg: "min-width",
        width: "0em"
    },
    extraSmall: {
        arg: "min-width",
        width: "23em"
    },
    small: {
        arg: "min-width",
        width: "29em"
    },
    small2: {
        arg: "min-width",
        width: "34em"
    },
    medium: {
        arg: "min-width",
        width: "40em"
    },
    medium2: {
        arg: "min-width",
        width: "50em"
    },
    large: {
        arg: "min-width",
        width: "65em"
    },
    large2: {
        arg: "min-width",
        width: "70em"
    },
    extraLarge: {
        arg: "min-width",
        width: "80em"
    }
};
window.Mntl = window.Mntl || {}, window.Mntl.PubSub = function() {
    var o = "once",
        i = "on";

    function s() {}

    function t(t) {
        this.events = t.reduce(function(t, e) {
            return t[e] = [], t
        }, {})
    }
    return t.prototype.what = function() {
        return Object.keys(this.events).join(", ")
    }, t.prototype.addEvent = function(t) {
        return !this.events.hasOwnProperty(t) && (this.events[t] = [], !0)
    }, t.prototype.deleteEvent = function(t) {
        return !!this.events.hasOwnProperty(t) && (delete this.events[t], !0)
    }, t.prototype.publish = function(t, e) {
        if (!this.events.hasOwnProperty(t)) throw new ReferenceError("Attempted to publish an event that doesn't exist");
        (e = e || {}).type = e.type || t, this.events[t].forEach(function(t) {
            t.instigator && t.instigator !== e.instigator || (t.callback(e), t.frequency === o && (t.callback = s, t.frequency = null))
        })
    }, t.prototype.subscribe = function(t, e, n, r) {
        if (!this.events.hasOwnProperty(t)) throw new ReferenceError("Attempted to subscribe to an event that doesn't exist");
        if (-1 === [i, o].indexOf(r)) throw new ReferenceError('Attempted to listen to an event at an incorrect frequency. Please use "on" or "once".');
        return e = this.events[t].push({
            callback: n,
            frequency: r,
            instigator: e
        }) - 1, {
            unSubscribe: function(t, e) {
                this.events[t][e].callback = s, this.events[t][e].frequency = null
            }.bind(this, t, e)
        }
    }, t.prototype.on = function(t, e, n) {
        this.subscribe(t, e, n, i)
    }, t.prototype.once = function(t, e, n) {
        this.subscribe(t, e, n, o)
    }, t
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    Mntl = window.Mntl || {};
Mntl.RTB = function(o, s, a) {
    var n, r, i, d, u, e, g, l, t, c = new Mntl.PubSub(["onBeforeLoad", "onAfterLoad", "onBeforeSetup", "onAfterSetup"]),
        f = {},
        p = [!1, []],
        b = [900, 500],
        h = {},
        m = !1,
        w = 0;

    function y() {
        return Mntl.CMP && Mntl.CMP.isConsentRequired()
    }

    function v(t) {
        var e, n, i = {};
        try {
            e = t.getAudiences(), n = t.getProfileId(), e && (i.ccaud = e, debug.log("Mntl.RTB.lotameLightning: audiences ready")), n && (i.lpid = n, debug.log("Mntl.RTB.lotameLightning: profile id ready")), l.setTargeting(i)
        } catch (t) {
            debug.log("Mntl.RTB.lotameLightning: failed inside ready callback", t)
        }
    }

    function T(t) {
        function e(t) {
            return "tax" + t
        }
        var n, i = [],
            o = [],
            r = a.getDomain().split(".")[0];
        for (o.push(r), n = 0; e(n) in t && t[e(n)]; ++n) o.push(t[e(n)]), 0 < n && i.push(o.join(" : "));
        return i
    }

    function B(t, e) {
        return function() {
            t.decrementCount(), debug.log("Mntl.RTB: gpt rtb callback", f.size - t.count, f.size, Date.now()), !e && 0 !== t.count || (debug.log("Mntl.RTB: executing ad call, forced: ", e, Date.now()), debug.log("Mntl.RTB: triggering RTBSlotsBidded event for", t.gptSlots), o.dispatchEvent(new CustomEvent("RTBSlotsBidded", {
                bubbles: !0,
                detail: {
                    force: e,
                    slots: t.gptSlots.map(function(t) {
                        return t.config.id
                    })
                }
            })), t.callback(), t.reset(), r.go())
        }
    }

    function M(t, e, n) {
        this.gptSlots = t, this.callback = e, this.count = f.size, this.timeout = null, this.caller = n
    }
    return i = {
        noop: {
            preload: function() {
                return !1
            },
            src: function() {
                return !1
            },
            setup: function() {}
        },
        permutive: (t = "99938cde-ab91-4fe6-9082-470871c63015", {
            preload: function() {
                ! function(n) {
                    if (!n) {
                        n = n || {}, (window.permutive = n).q = [], n.config = {}, n.config.projectId = "99938cde-ab91-4fe6-9082-470871c63015", n.config.apiKey = "a059c8d5-308f-4dac-bf33-cff7ef68a7f5", n.config.environment = n.config.environment || "production";
                        for (var t = ["addon", "identify", "track", "trigger", "query", "segment", "segments", "ready", "on", "once", "user", "consent"], e = 0; e < t.length; e++) {
                            var i = t[e];
                            n[i] = function(e) {
                                return function() {
                                    var t = Array.prototype.slice.call(arguments, 0);
                                    n.q.push({
                                        functionName: e,
                                        arguments: t
                                    })
                                }
                            }(i)
                        }
                    }
                }(window.permutive), window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function() {
                    var t;
                    0 === window.googletag.pubads().getTargeting("permutive").length && (t = window.localStorage.getItem("_pdfps"), window.googletag.pubads().setTargeting("permutive", t ? JSON.parse(t) : []))
                }), window.permutive.addon("web", {})
            },
            src: function() {
                return "//cdn.permutive.com/" + t + "-web.js"
            },
            setup: function(t, e) {
                c.publish("onAfterSetup", {
                    instigator: "permutive"
                }), e()
            }
        }),
        ixid: {
            preload: function() {
                return !1
            },
            src: function() {
                return !(y() || !Mntl.RTB.Plugins.prebid.hasBidder("ix")) && (debug.log("Mntl.RTB.ixid: loading index exchange identity adapter for prebid"), "//js-sec.indexww.com/ht/p/183710-16979354036509.js")
            },
            setup: function(t, e) {
                c.publish("onAfterSetup", {
                    instigator: "ixid"
                }), e()
            }
        },
        prebid: {
            config: {},
            priceGranularity: {},
            preload: function() {
                window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], window.pbjs.que.push(function() {
                    window.pbjs.onEvent("bidResponse", this.setOutstreamRenderer), window.pbjs.onEvent("bidWon", function(t) {
                        debug.log("Prebid winner: " + t.bidder + " on slot: " + t.adUnitCode)
                    })
                }.bind(this)), Object.keys(this.priceGranularity).length && window.pbjs.que.push(function() {
                    debug.log("Mntl.RTB.prebid: setting custom price granularity", this.priceGranularity), window.pbjs.setConfig({
                        priceGranularity: this.priceGranularity
                    })
                }.bind(this)), y() && (window.pbjs.que.push(function() {
                    debug.log("Mntl.RTB.prebid: enabling consent management for GDPR"), window.pbjs.setConfig({
                        consentManagement: {
                            gdpr: {
                                cmpApi: "iab",
                                timeout: 1e4,
                                defaultGdprScope: !0,
                                allowAuctionWithoutConsent: !1
                            }
                        }
                    })
                }), Mntl.CMP.onConsentChange(function() {
                    Mntl.CMP.hasPurpose1Consent().then(function(t) {
                        t || (debug.log("Mntl.RTB.prebid: disabling device access due to lack of consent for purpose 1"), window.pbjs.que.push(function() {
                            window.pbjs.setConfig({
                                deviceAccess: !1
                            })
                        }))
                    })
                })), this.hasBidder("ix") && window.pbjs.que.push(function() {
                    var t = this.getFirstPartyData();
                    debug.log("Mntl.RTB.prebid: setting index first party data", t), window.pbjs.setConfig({
                        ix: {
                            firstPartyData: t
                        }
                    })
                }.bind(this))
            },
            src: function() {
                var t = "default";
                return -1 !== (window.location.search || "").indexOf("globeResourceMinify=false") ? t += "/dev" : t += "/dist", a.getStaticPath() + "/static/js/prebidjs/" + t + "/prebid.js"
            },
            setup: function(t, e) {
                var n = t.map(this.getAdUnitForSlot.bind(this)).filter(function(t) {
                    return t
                });
                n.length ? (debug.log("Mntl.RTB.prebid: requesting bids for ad units:", n), window.pbjs.que.push(function() {
                    window.pbjs.requestBids({
                        timeout: b[1],
                        adUnits: n,
                        bidsBackHandler: function() {
                            t.forEach(function(t) {
                                var e = window.pbjs.getAdserverTargetingForAdUnitCode(t.config.id);
                                e && Object.keys(e).length ? (debug.log("Mntl.RTB.prebid: updating", t.config.id, "slot", t, "with targeting", e), t.updateTargeting(e)) : debug.log("Mntl.RTB.prebid: no targeting for", t.config.id, "slot", t)
                            }), c.publish("onAfterSetup", {
                                instigator: "prebid"
                            }), e()
                        }
                    })
                })) : (debug.log("Mntl.RTB.prebid: no ad units were mapped from slots:", t), c.publish("onAfterSetup", {
                    instigator: "prebid"
                }), e())
            },
            setOutstreamRenderer: function(t) {
                t && "grid" === t.bidder && "video" === t.mediaType ? t.renderer = {
                    url: "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
                    render: function(t) {
                        var e = o.getElementById(t.adUnitCode).querySelectorAll("div[id^='google_ads']");
                        e[0] && e[0].style.setProperty("display", "none"), Mntl.utilities.loadExternalJS({
                            src: t.renderer.url
                        }, function() {
                            ANOutstreamVideo.renderAd({
                                targetId: t.adUnitCode,
                                adResponse: t.adResponse,
                                rendererOptions: {
                                    width: 443 <= window.innerWidth ? 443 : 300,
                                    height: 443 <= window.innerWidth ? 250 : 168.75,
                                    playback_method: "auto_play_sound_off",
                                    playVideoVisibleThreshold: 20,
                                    nonViewableBehavior: "pause",
                                    disableCollapse: !0,
                                    allowFullscreen: !1,
                                    disableTopBar: !0,
                                    playerSkin: {
                                        controlBarColor: "black",
                                        bigPlayButtonColor: "white",
                                        controlBarControlsColor: "white"
                                    }
                                }
                            }, function(t, e) {
                                var n;
                                "loaded" === e && (n = o.getElementById(t), e = o.createElement("div"), n && (n.insertBefore(e, n.childNodes[0]), n.classList.add("video-ad"), e.classList.add("video-placeholder", "video-placeholder--" + t)))
                            })
                        })
                    }
                } : t.renderer = null
            },
            getAdUnitForSlot: function(t) {
                var e = this.getConfigForSlot(t);
                return e && {
                    code: t.config.id,
                    mediaTypes: {
                        banner: {
                            sizes: t.config.sizes.filter(function(t) {
                                return Array.isArray(t) && t.every(function(t) {
                                    return "number" == typeof t
                                })
                            })
                        },
                        video: {
                            context: "outstream",
                            playerSize: [
                                [640, 480]
                            ]
                        }
                    },
                    bids: e,
                    renderer: {}
                }
            },
            getConfigForSlot: function(t) {
                var e = null;
                return (e = this.config ? this.config[t.config.id] || null : e) ? e.forEach(function(t) {
                    switch (t.bidder) {
                        case "grid":
                            t.params.keywords = this.getFirstPartyData();
                            break;
                        case "rubicon":
                            t.params.inventory = this.getFirstPartyData()
                    }
                }.bind(this)) : debug.log("Mntl.RTB.prebid: no config for", t.config.id, "slot:", t), e
            },
            setConfig: function(t) {
                this.config = Object.assign(this.config, t)
            },
            setPriceGranularity: function(t) {
                t && t.buckets && (this.priceGranularity.buckets = t.buckets.map(function(t) {
                    return s.mapObject(t, null, function(t) {
                        return Number(t)
                    })
                }))
            },
            hasBidder: function(e) {
                var n = this.config || {};
                return Object.keys(n).some(function(t) {
                    return n[t].some(function(t) {
                        return t.bidder === e
                    })
                })
            },
            getFirstPartyData: function() {
                var t = s.pickObject(h, ["tax1", "tax2", "tax3"]),
                    e = window.docCookies.getItem("pc");
                return e && (t.pc = e), t
            }
        },
        indexUniversal: {
            preload: function() {
                return !1
            },
            src: function() {
                return ["//js-sec.indexww.com/ht/p/", this.id, ".js"].join("")
            },
            setup: function(t, e) {
                var n = /^(?:\dx|728x(?:9[1-9]|\d{3,})|970x(?:90|25[1-9])|300x25[1-6]|300x601|300x1050|320x51|468x60|180x150|200x200|250x250)/,
                    i = {},
                    o = t.map(function(t) {
                        var e = t.config.sizes.map(function(t) {
                                return !!Array.isArray(t) && t.join("x")
                            }).filter(function(t) {
                                return t && !n.test(t)
                            }).sort().join("|"),
                            e = [t.config.id, "_", e, Mntl.GPT.isMobile() ? "_mobile" : ""].join("");
                        return {
                            htSlotName: i[t.config.id] = e
                        }
                    });

                function r(n) {
                    debug.log("Mntl.RTB.indexUniversal: handleDemand: the raw demand is: ", n), n.slot && Object.keys(n.slot).length && (debug.log("Mntl.RTB.indexUniversal: handling raw demand"), t.forEach(function(t) {
                        var e = i[t.config.id];
                        n.slot.hasOwnProperty(e) && ((e = n.slot[e]).sort(function(t, e) {
                            return e.price - t.price
                        }), e = s.mapObject(e[0].targeting, null, function(t) {
                            return Array.isArray(t) ? t[0] : t
                        }), debug.log("Mntl.RTB.indexUniversal: setup: setting targeting on slot " + t.config.id, e), t.updateTargeting(e))
                    })), c.publish("onAfterSetup", {
                        instigator: "indexUniversal"
                    }), e()
                }
                debug.log("Mntl.RTB.indexUniversal: the slots to retrieve are: ", o), s.getDeepValue(window, "headertag", "cmd") && s.getDeepValue(window, "headertag", "retrieveDemand") ? window.headertag.cmd.push(function() {
                    window.headertag.retrieveDemand(o, r)
                }) : (c.publish("onAfterSetup", {
                    instigator: "indexUniversal"
                }), e())
            }
        },
        mediaGrid: {
            preload: function() {
                return !1
            },
            src: function() {
                return "//grid-cdn.pdc.bidswitch.net/grid.js"
            },
            setup: function(e, n) {
                var t, i = this.mediaGridConfig.requestSettings,
                    o = this.mediaGridConfig.adUnitIds,
                    r = ["gridId", "gridPb", "gridSize"];
                return void 0 === window.grid || 0 === Object.keys(this.mediaGridConfig.adUnitIds).length || e.length > this.mediaGridConfig.maxSlots || 0 === e.length ? (debug.log("Error setting up MediaGrid Bidding"), c.publish("onAfterSetup", {
                    instigator: "mediaGrid"
                }), void n()) : (t = this.setMediaGridSlots(e)) && "object" === (void 0 === t ? "undefined" : _typeof(t)) && 0 !== Object.keys(t).length ? (debug.log("Setting up MediaGrid ad units ", t), void window.grid.que.push(function() {
                    window.grid.fetchBids({
                        timeout: b[1],
                        adUnits: t,
                        keyWords: i.keyWords,
                        endpoint: i.endpoint,
                        callback: function(t, i) {
                            t ? debug.log("MediaGrid Error: ", t) : "object" === (void 0 === i ? "undefined" : _typeof(i)) && 0 < Object.keys(i).length ? e.forEach(function(t) {
                                var n, e = t.config.id; - 1 !== e.indexOf("dynamic-inline") && (e = "dynamic-inline"), n = i[e], debug.log("MediaGrid Bid for  " + t.config.id, n), e in o && "object" === (void 0 === n ? "undefined" : _typeof(n)) && r.every(function(t) {
                                    return n[t]
                                }) ? t.updateTargeting(r.reduce(function(t, e) {
                                    return t[e] = n[e], t
                                }, {})) : debug.log("Did not set MediaGrid targeting values due to an unexpected error in the bid object above")
                            }) : debug.log("MediaGrid Bids did not resolve in an expected manner and did not error out. The bids are: ", i), c.publish("onAfterSetup", {
                                instigator: "mediaGrid"
                            }), n()
                        }
                    })
                })) : (debug.log("None of the slots are MediaGrid ad units"), c.publish("onAfterSetup", {
                    instigator: "mediaGrid"
                }), void n())
            },
            setMediaGridSlots: function(t) {
                var n = {};
                return t.forEach(function(t) {
                    var e = t.config.id;
                    (e = -1 !== e.indexOf("dynamic-inline") ? "dynamic-inline" : e) in this.mediaGridConfig.adUnitIds && (n[e] = {
                        bids: [{
                            id: this.mediaGridConfig.adUnitIds[e]
                        }],
                        size: t.config.sizes
                    })
                }.bind(this)), n
            },
            mediaGridConfig: {
                maxSlots: 10,
                adUnitIds: {},
                requestSettings: {
                    endpoint: "https://grid.bidswitch.net/hb",
                    keyWords: ""
                }
            }
        },
        amazon: {
            preload: function() {
                return !1
            },
            src: function() {
                return "//c.amazon-adsystem.com/aax2/apstag.js"
            },
            setup: function(e, n) {
                var t;
                if (window.apstag) {
                    if (this.initialize(), this.clearTargeting(e), 0 === (t = this.getApstagSlots(e)).length) return c.publish("onAfterSetup", {
                        instigator: "amazon"
                    }), void n();
                    window.debug.log("Mntl.RTB.amazon: setup: fetching apstag bids", t), window.apstag.fetchBids({
                        slots: t,
                        timeout: b[1]
                    }, function(t) {
                        window.debug.log("Mntl.RTB.amazon: setup: apstag bid response received", t), e.forEach(function(e) {
                            t.forEach(function(t) {
                                t.slotID === e.config.id && (t = t.targeting || {
                                    amznbid: t.amznbid,
                                    amzniid: t.amzniid,
                                    amznsz: t.amznsz,
                                    amznp: t.amznp
                                }, window.debug.log("Mntl.RTB.amazon: setup: setting targeting on slot " + e.config.id, t), e.updateTargeting(t))
                            })
                        }), c.publish("onAfterSetup", {
                            instigator: "amazon"
                        }), n()
                    })
                }
            },
            initialize: s.once(function() {
                var t = {
                    deals: !0,
                    pubID: this.id,
                    adServer: "googletag",
                    section: this.amazonConfigs.amazonSection || "",
                    params: this.amazonConfigs.mapTaxValues || {},
                    blockedBidders: this.amazonConfigs.blockedBidders || [],
                    sis_sitesection: this.amazonConfigs.amazonSection ? a.getDomain() + ":" + this.amazonConfigs.amazonSection : "",
                    gdpr: {
                        enabled: m
                    }
                };
                window.apstag.init(t), Mntl.DEBUG && window.apstag.debug("enable"), window.debug.log("Mntl.RTB.amazon: setup: apstag initialized")
            }),
            clearTargeting: function(t) {
                t.forEach(function(t) {
                    var e = window.apstag.targetingKeys(t.config.id);
                    Array.isArray(e) && t.updateTargeting(e.reduce(function(t, e) {
                        return t[e] = "", t
                    }, {}))
                })
            },
            getApstagSlots: function(t) {
                return t.map(function(t) {
                    var e = {
                        slotID: t.config.id,
                        sizes: t.config.sizes.filter(function(t) {
                            return t.join && -1 === t.indexOf(1)
                        })
                    };
                    return this.amazonConfigs.amazonSlotName && (e.slotName = Mntl.GPT.getUtils().buildGptUrl(t.config, t.targeting)), e.slotParams = {
                        fb_pid: this.amazonConfigs.mapFBValues[t.config.id] || this.amazonConfigs.mapFBValues.default || ""
                    }, e
                }, this).filter(function(t) {
                    return 0 < t.sizes.length
                })
            },
            amazonConfigs: {}
        },
        lotameLightning: (e = {}, g = [], l = {
            getTargeting: function(t) {
                Object.keys(e).length ? t(e) : g.push(t)
            },
            setTargeting: function(t) {
                if (Object.keys(t).length)
                    for (e = t; g.length;) g.pop().call(null, e)
            }
        }, {
            config: {},
            reset: function() {
                d = null
            },
            init: function(t, e) {
                return this.config = Object.assign(this.config, t), this.mockTargetingManager = e, (d = t.clientId) ? (u = "lotame_" + d + "_auds", !0) : (debug.log("Mntl.RTB.lotameLightning: must call init first to set the client id"), !1)
            },
            preload: function() {
                return !!d && (function() {
                    var t, e = {};
                    try {
                        u && ((t = window.localStorage.getItem(u)) && (e.ccaud = t.split(","), debug.log("Mntl.RTB.lotameLightning: audiences loaded from local storage")), (t = window.localStorage.getItem("_cc_id")) && (e.lpid = t, debug.log("Mntl.RTB.lotameLightning: profile id loaded from local storage")), l.setTargeting(e))
                    } catch (t) {
                        debug.log("Mntl.RTB.lotameLightning: failed to load from local storage")
                    }
                }(), window["lotame_" + d] = {
                    cmd: [],
                    config: {
                        audienceLocalStorage: u,
                        onProfileReady: v
                    },
                    data: {
                        behaviors: {
                            int: T(this.config)
                        }
                    }
                }, !0)
            },
            src: function() {
                return d ? "https://tags.crwdcntrl.net/lt/c/" + d + "/lt.min.js" : (debug.log("Mntl.RTB.lotameLightning: must call init first to set the client id"), !1)
            },
            setup: function(t, n) {
                (this.mockTargetingManager || l).getTargeting(function(e) {
                    debug.log("Mntl.RTB.lotameLightning: adding: ", e, " to ", t), t.forEach(function(t) {
                        t.updateTargeting(e)
                    }), c.publish("onAfterSetup", {
                        instigator: "lotameLightning"
                    }), n()
                })
            }
        }),
        ias: {
            preload: function() {
                return !1
            },
            src: function() {
                return "//cdn.adsafeprotected.com/iasPET.1.js"
            },
            setup: function(t, e) {
                var n = window.__iasPET || {},
                    i = this.parseSlots(t),
                    e = this.handleResponse.bind(this, t, e);
                window.__iasPET && (n.queue = n.queue || [], n.pubId = this.id, debug.log("Mntl.RTB.ias: initialized with ", i), window.__iasPET.queue.push({
                    adSlots: i,
                    dataHandler: e,
                    pubId: this.id,
                    timeout: b[1]
                }))
            },
            parseSlots: function(t) {
                return t.map(function(t) {
                    return {
                        adSlotId: t.config.id,
                        size: t.config.sizes.filter(Array.isArray),
                        adUnitPath: t.gptSlot.getAdUnitPath()
                    }
                })
            },
            handleResponse: function(t, e, n) {
                var i = s.safeJsonParse(n) || {},
                    o = i.slots ? Object.keys(i.slots) : [];
                debug.log("Mntl.RTB.ias: demand returned ", n), o.length && t.forEach(function(t) {
                    var e; - 1 < o.indexOf(t.config.id) ? (e = this.setTargetingValues(i, t), t.updateTargeting(e), debug.log("Mntl.RTB.ias: Slot updating for slot: ", t), debug.log("Mntl.RTB.ias: IAS targeting values are ", e)) : debug.log("Mntl.RTB.ias: Slot did not update target value for slot: ", t)
                }.bind(this)), c.publish("onAfterSetup", {
                    instigator: "ias"
                }), e()
            },
            setTargetingValues: function(t, e) {
                var n = {};
                return n.fr = t.fr || "false", t.custom["ias-kw"] && (n["ias-kw"] = t.custom["ias-kw"] || []), n = Object.assign(n, t.brandSafety, s.mapObject(t.slots[e.config.id], function(t) {
                    return "id" === t ? "iasid" : t
                }))
            }
        },
        s2s: {
            preload: function() {
                return !1
            },
            src: function() {
                return !1
            },
            setup: function(e, t) {
                var n = e.map(function(t) {
                        return t.config.id
                    }),
                    i = this.s2sConfigs.partners.split(",").map(function(t) {
                        return t.trim()
                    }).join("+");
                debug.log("Mntl.RTB.s2s: initialized with ", n), i && this.makePromise(i, n).then(function(t) {
                    this.handleResponse(e, t)
                }.bind(this)).catch(function(t) {
                    debug.log("error getting bids from globe server (s2s):" + t.message)
                }).finally(function() {
                    c.publish("onAfterSetup", {
                        instigator: "s2s"
                    }), t()
                })
            },
            makePromise: function(t, e) {
                var n = this.s2sConfigs.timeout,
                    t = "?modelId=getBids&slots=" + e.join("+") + "&partners=" + t + "&timeout=" + (Number(n) - 100),
                    t = "".concat("/servemodel/model.json", t);
                return debug.log("s2s request is being with url" + t), a.ajaxPromiseGetCall(t, "Error getting bids from globe server", Number(n))
            },
            handleResponse: function(t, e) {
                var i = s.safeJsonParse(e) || {},
                    n = i ? Object.keys(i) : [];
                debug.log("Mntl.RTB.s2s: bids returned ", e), n.forEach(function(e) {
                    var n = i[e].slots ? Object.keys(i[e].slots) : [];
                    n.length && t.forEach(function(t) {
                        -1 < n.indexOf(t.config.id) && t.updateTargeting(Object.assign(i[e].slots[t.config.id]))
                    })
                })
            },
            s2sConfigs: {}
        }
    }, n = s.once(function() {
        var e, n = f.size;

        function i(t) {
            p[1].push(t), 0 == --n && (clearTimeout(e), p[0] = !0, r.go(), debug.log("Mntl.RTB: triggering RTBPluginsLoaded event"), o.dispatchEvent(new CustomEvent("RTBPluginsLoaded", {
                bubbles: !0
            })))
        }
        f.keys.forEach(function(t) {
            var e = f[t].src(),
                n = {};
            f[t].preload(), e ? (c.publish("onBeforeLoad", {
                instigator: f[t].type
            }), debug.log("Mntl.RTB.Plugins.", f[t].type, " load start", Date.now()), n = {
                async: !0,
                src: e
            }, f[t].scriptId && (n.id = f[t].scriptId), a.loadExternalJS(n, function() {
                c.publish("onAfterLoad", {
                    instigator: f[t].type
                }), debug.log("Mntl.RTB.Plugins.", f[t].type, " loaded", Date.now()), o.dispatchEvent(new CustomEvent("RTBPluginLoad:" + f[t].type, {
                    bubbles: !0
                })), i(f[t].type)
            })) : (debug.log("Mntl.RTB.Plugins.", f[t].type, " loaded(no src)", Date.now()), i(f[t].type))
        }), debug.log("Mntl.RTB.Plugins: library load timeout", b[0], Date.now()), e = setTimeout(function() {
            clearTimeout(e), p[0] = !0, r.go()
        }, b[0])
    }), r = {
        _queue: [],
        push: function(t) {
            this._queue.push(t), this.go()
        },
        go: function() {
            var e;
            p[0] && 0 < this._queue.length && (e = this._queue.shift(), debug.log("Mntl.RTB: requesting bids ", p[1], " for ", e.gptSlots, Date.now()), f.keys.forEach(function(t) {
                debug.log("Mntl.RTB.Plugins.", f[t].type, ".setup (", e.caller, ")", f[t], Date.now()), c.publish("onBeforeSetup", {
                    instigator: f[t].type
                }), f[t].setup.call(f[t], e.gptSlots, B(e))
            }), debug.log("Mntl.RTB:", e.caller, " RTB wait for ", b[1] + w, Date.now()), e.timeout = window.setTimeout(B(e, !0), b[1] + w))
        }
    }, M.prototype.reset = function() {
        this.count = 0, clearTimeout(this.timeout)
    }, M.prototype.decrementCount = function() {
        this.count = this.count - 1
    }, a.onLoad(function() {
        f.size && n()
    }), {
        setTaxonomyStampValues: function(t) {
            h = t
        },
        init: function(t, e) {
            e = new M(t, e, "init"), n(), r.push(e)
        },
        initBidders: function(t) {
            (f = t.reduce(function(t, e) {
                return i[e.type] && null !== e.id && (t[e.type] = Object.assign({}, i[e.type], e)), t
            }, {})).keys = Object.keys(f), f.size = f.keys.length
        },
        refresh: function(t, e) {
            e = new M(t, e, "refresh"), r.push(e)
        },
        Plugins: i,
        subscribe: c.subscribe.bind(c),
        getTimeoutLength: function() {
            return b[1]
        },
        setTimeoutLength: function(t) {
            Array.isArray(t) ? Object.assign(b, t) : b[1] = t
        },
        setGDPR: function(t) {
            m = t
        },
        setLatencyBuffer: function(t) {
            w = t
        }
    }
}(window.document, window.Mntl.fnUtilities || {}, window.Mntl.utilities || {});
var Mntl = window.Mntl || {};
Mntl.RTBTracking = function() {
    "use strict";
    var i, n = ["onBeforeLoad", "onAfterLoad", "onBeforeSetup", "onAfterSetup"],
        o = {
            event: "analyticsEvent",
            eventCategory: "Ad Timing Metrics",
            eventAction: "Load",
            eventLabel: {},
            nonInteraction: !0
        };

    function a(e) {
        var t = /load$/i.test(e.type) ? "lib" : "bid",
            n = /before/i.test(e.type) ? 0 : 1;
        o.eventLabel[e.instigator][t][n] = Date.now(), 0 == --i && (o.eventLabel = JSON.stringify(o.eventLabel), dataLayer.push(o))
    }

    function t(e) {
        -1 < e.detail.slots.indexOf("leaderboard") && 0 !== i && (document.removeEventListener("RTBSlotsBidded", t), i = -1, dataLayer.push(o))
    }
    return {
        init: function(e) {
            i = e.length * n.length, e.forEach(function(t) {
                o.eventLabel[t] = {
                    lib: [-1, -1],
                    bid: [-1, -1]
                }, n.forEach(function(e) {
                    Mntl.RTB.subscribe(e, t, a, "once")
                })
            }), document.addEventListener("RTBSlotsBidded", t)
        }
    }
}();
var Mntl = window.Mntl || {};
Mntl.Maybe = function() {
    function n(t) {
        this._v = t
    }
    return n.of = function(t) {
        return new n(t)
    }, n.prototype.isNothing = function() {
        return null === this._v || void 0 === this._v
    }, n.prototype.map = function(t) {
        return this.isNothing() ? n.of(null) : n.of(t(this._v))
    }, n.prototype.flatMap = function(t) {
        return this.isNothing() ? null : t(this._v)
    }, n.prototype.orElse = function(t) {
        return this.isNothing() ? t : this._v
    }, n
}();
var Lifestyle = window.Lifestyle || {};
Lifestyle.GPT = function(n) {
    function a() {
        var i = n.utilities.getDomain();
        return i.substring(i.lastIndexOf("."), -1)
    }

    function i(i) {
        var e = void 0,
            t = void 0,
            d = void 0,
            n = void 0;
        null !== i.size && 1 !== i.size[0] && 1 !== i.size[1] && 2 !== i.size[0] && 2 !== i.size[1] || (-1 !== i.id.indexOf("leaderboard") ? e = ".leaderboard" : -1 !== i.id.indexOf("billboard") ? e = ".billboard" : -1 !== i.id.indexOf("dynamic-inline") && (e = ".dynamic-inline"), (n = (t = document.getElementById(i.id)).closest(e)) && (n.className += " collapsed"), (d = t.closest(".ad-wrapper")) && (d.className += " collapsed")), void 0 !== Lifestyle.Sticky && Lifestyle.Sticky.refreshSticky()
    }
    return n.GPT.registerCallback(["leaderboard*", "billboard*", "dynamic-inline*"], i), {
        buildGptUrl: function(i, e, t) {
            var d = "/" + n.GPT.getDfpId() + "/" + a() + (n.GPT.isMobile() ? ".mob" : ""),
                i = 0 <= i.id.indexOf("dynamic-inline") ? "/dynamic-inline" : i.id ? "/" + i.id : "";
            return d + "/" + ("" === e.ptax ? e.tax2 || e.tax1 || t.tax0 + "_homepage" : e.ptax) + i
        },
        testIds: function(i) {
            var e = (e = document.documentElement.getAttribute("data-ab")) ? e.split(",") : [];
            docCookies.setItem("ds_ab", JSON.stringify(e), 0, "/", "." + a() + ".com"), i.ab = e, i.bts = e
        },
        collapseAd: i
    }
}(window.Mntl || {});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    Mntl = window.Mntl || {},
    dataLayer = window.dataLayer || [];
Mntl.PageView = function(e) {
    var o = {
            event: "unifiedPageview"
        },
        n = window.location.href.substring(window.location.href.indexOf("."), window.location.href.indexOf(".com")) + ".com",
        i = !1;
    return Mntl.utilities.onLoad(function() {
        e.removeItem("pageEntryType", "/", n)
    }), {
        pushToDataLayer: function(t) {
            return i ? (t && (n = t = t, Mntl.fnUtilities.iterate(t, function(t, e) {
                _typeof(o[e]) === _typeof(t[e]) || "" === t[e] || "" === o[e] && "number" == typeof t[e] || ("string" == typeof o[e] && (n[e] += ""), "number" == typeof o[e] && (n[e] = parseInt(t[e], 10)))
            }), e = n, Object.keys(o).forEach(function(t) {
                e.hasOwnProperty(t) && (o[t] = e[t])
            })), dataLayer.push(Mntl.fnUtilities.deepExtend({}, o))) : (debug.warn("Mntl.PageView not initialized with default values. Cannot push data."), !1);
            var e, n
        },
        setEntryType: function(t) {
            e.setItem("pageEntryType", t, null, "/", n)
        },
        init: function(t) {
            return !i && (o = Mntl.fnUtilities.deepExtend(o, t), i = !0, dataLayer.push(Mntl.fnUtilities.deepExtend({}, o)))
        }
    }
}(window.docCookies);
var Mntl = window.Mntl || {},
    dataLayer = window.dataLayer || [];
! function(g, u) {
    function s(t, e) {
        return t.getAttribute(e) || ""
    }

    function k(t) {
        t = s(t, "href");
        return 0 === t.indexOf("//") ? t = window.location.protocol + t : 0 === t.indexOf("/") && (t = window.location.protocol + "//" + window.location.host + t), t
    }
    Mntl.clickTracking = {
        getPixelsFromContent: function(t) {
            var e = document.querySelector("main") || document.getElementById("main");
            return e ? ((e = Mntl.clickTracking.getAbsoluteCoordinates(e)).top = window.scrollY, {
                top: t.top - e.top,
                left: t.left - e.left
            }) : {
                top: "",
                left: ""
            }
        },
        getAbsoluteCoordinates: function(t) {
            var e = t.getBoundingClientRect(),
                n = window.scrollY,
                t = window.scrollX;
            return {
                left: e.left + t,
                top: e.top + n
            }
        },
        trackClick: function(t, e, n, i, r) {
            var a, o, l = {
                    event: "linkClick",
                    linkId: s(e, "id"),
                    linkText: (d = e, (a = t).target === d || "" === g.trimAllWhitespace(a.target.innerText) && "" === g.trimAllWhitespace(a.target.textContent) ? d ? g.trimAllWhitespace(d.innerText || d.textContent || "") : "" : g.trimAllWhitespace(a.target.innerText || a.target.textContent)),
                    linkLabel: s(e, "title") || s(e, "aria-label"),
                    pageWidth: document.body.clientWidth,
                    pageHeight: document.body.clientHeight
                },
                c = Mntl.clickTracking.getAbsoluteCoordinates(e),
                d = Mntl.clickTracking.getPixelsFromContent(c);
            return "#" === (e.getAttribute("href") || "")[0] ? (l.linkTargetURL = e.getAttribute("href"), l.linkTargetType = "onpage") : e.dataset.useChildUrl ? (l.linkTargetURL = (a = e, u.of(a.querySelector(a.dataset.useChildUrl)).map(k).orElse("")), l.linkTargetType = "" !== l.linkTargetURL ? "offpage" : "") : "button" === e.nodeName.toLowerCase() || "true" === e.getAttribute("data-click-tracked") ? (l.linkTargetURL = "", l.linkTargetType = "") : (l.linkTargetURL = k(e), l.linkTargetType = "offpage"), l.dataOrdinal = n, l.linkContainerId = i, l.domAncestorIds = r.reverse(), l.pixelsFromTopOfPage = c.top, l.pixelsFromLeftOfPage = c.left, l.pixelsFromTopOfMainContainer = d.top, l.pixelsFromLeftOfMainContainer = d.left, d = e, o = l, Array.prototype.forEach.call(d.attributes, function(t) {
                var e;
                0 === t.name.indexOf("data-") && (e = t.value, t = t.name.replace(/-([a-z])/g, function(t) {
                    return t[1].toUpperCase()
                }), o[t] = e)
            }), l = o, Mntl.clickTracking.fireEvent(l, t, e)
        },
        searchDom: function(t) {
            var e, n = t.path || null,
                i = t.target,
                r = null,
                a = [],
                o = "",
                l = "";

            function c(t) {
                return "false" === t.dataset.clickTracked
            }

            function d(t) {
                var e, n;
                return !c(t) && (t.hasAttribute && ("" === o && (o = t.dataset.ordinal || ""), "" === l && (n = "", l = n = "true" === (e = t).dataset.trackingContainer ? e.dataset.trackingId || e.getAttribute("id") : n), t.hasAttribute("id") && a.push(t.getAttribute("id")), "A" !== t.nodeName && "BUTTON" !== t.nodeName && "true" !== t.getAttribute("data-click-tracked") || null !== r || (r = t)), 1)
            }
            if (t.target.wasTracked) return !0;
            if (Modernizr.touchevents && !0 === Mntl.clickTracking.dragging) return !0;
            if (c(i)) return !1;
            if (n && 2 < n.length) {
                for (e = 0; e < n.length - 2; e++)
                    if (!d(n[e])) return !1
            } else
                for (; null !== i.parentNode && null !== i.nodeName;) {
                    if (!d(i)) return !1;
                    i = i.parentNode
                }
            return null !== r && Mntl.clickTracking.trackClick(t, r, o, l, a)
        },
        fireEvent: function(t, e, n) {
            var i, r, a, o = t.linkTargetURL,
                l = e.target,
                i = (i = n, r = o, o = [window.location.protocol, "//", window.location.hostname].join(""), !(0 === r.indexOf(o) && !/blank/.test(i.getAttribute("target"))));

            function c() {
                document.body.removeEventListener("click-sent", c, !1), window.clearTimeout(a), l.wasTracked = !0;
                try {
                    l.click()
                } catch (t) {
                    (l = l.closest("A")).wasTracked = !0, l.click()
                }
            }
            return "offpage" !== t.linkTargetType || e.ctrlKey || e.shiftKey || e.metaKey || i || "button" === n.nodeName.toLowerCase() || 1 !== e.which ? dataLayer.push(t) : (document.body.addEventListener("click-sent", c, !1), a = setTimeout(c, 2e3), dataLayer.push(t), e.preventDefault(), !1)
        },
        setDragging: function() {
            Mntl.clickTracking.dragging = !0
        },
        endDragging: function() {
            Mntl.clickTracking.dragging = !1
        },
        dragging: !1,
        init: function() {
            (document.body || window).addEventListener("click", Mntl.clickTracking.searchDom, !0)
        }
    }, Mntl.clickTracking.init()
}(window.Mntl.fnUtilities || {}, window.Mntl.Maybe || {});