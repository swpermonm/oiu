var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
    "use strict";
    "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";

    function g(e) {
        return null != e && e === e.window
    }
    var t = [],
        C = T.document,
        n = Object.getPrototypeOf,
        s = t.slice,
        v = t.concat,
        u = t.push,
        i = t.indexOf,
        r = {},
        o = r.toString,
        y = r.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        m = {},
        x = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function h(e) {
        return null == e ? e + "" : "object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? r[o.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e)
    }
    var f = "3.4.1",
        E = function e(t, n) {
            return new e.fn.init(t, n)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = h(e);
        return !x(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = E.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o = arguments[0] || {},
            a = 1,
            s = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" === (void 0 === o ? "undefined" : _typeof(o)) || x(o) || (o = {}), a === s && (o = this, a--); a < s; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = e[t], "__proto__" !== t && o !== n && (u && n && (E.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t], i = r && !Array.isArray(i) ? [] : r || E.isPlainObject(i) ? i : {}, r = !1, o[t] = E.extend(u, i, n)) : void 0 !== n && (o[t] = n));
        return o
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== o.call(e)) && (!(e = n(e)) || "function" == typeof(e = y.call(e, "constructor") && e.constructor) && a.call(e) === l)
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (d(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : u.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return v.apply([], a)
        },
        guid: 1,
        support: m
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        r["[object " + t + "]"] = t.toLowerCase()
    });
    var w = function(n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }

        function r() {
            T()
        }
        var e, d, b, o, i, h, p, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + +new Date,
            m = n.document,
            k = 0,
            x = 0,
            N = ue(),
            A = ue(),
            D = ue(),
            j = ue(),
            q = function(e, t) {
                return e === t && (l = !0), 0
            },
            L = {}.hasOwnProperty,
            t = [],
            H = t.pop,
            O = t.push,
            P = t.push,
            R = t.slice,
            M = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            _ = "[\\x20\\t\\r\\n\\f]",
            W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            $ = "\\[" + _ + "*(" + W + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + _ + "*\\]",
            F = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            B = new RegExp(_ + "+", "g"),
            z = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
            U = new RegExp("^" + _ + "*," + _ + "*"),
            X = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
            V = new RegExp(_ + "|>"),
            G = new RegExp(F),
            Y = new RegExp("^" + W + "$"),
            Q = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            re = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"),
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "???" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ae = me(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(t = R.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function(e, t) {
                    O.apply(e, R.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = te.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !j[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && V.test(t)) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(ie, oe) : e.setAttribute("id", s = S), o = (l = h(t)).length; o--;) l[o] = "#" + s + " " + ye(l[o]);
                        c = l.join(","), f = ne.test(t) && ge(e.parentNode) || e
                    }
                    try {
                        return P.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        j(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(z, "$1"), e, n, r)
        }

        function ue() {
            var n = [];

            function r(e, t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
            }
            return r
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function he(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    e = (e.ownerDocument || e).documentElement;
                return !J.test(t || e && e.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, e = e ? e.ownerDocument || e : m;
                return e !== C && 9 === e.nodeType && e.documentElement && (a = (C = e).documentElement, E = !i(C), m !== C && (t = C.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = ee.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(re, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        e = t.getElementById(e);
                        return e ? [e] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var t = e.replace(re, f);
                    return function(e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = ee.test(C.querySelectorAll)) && (ce(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + _ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + _ + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + _ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = ee.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = ee.test(a.compareDocumentPosition), y = t || ee.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, q = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? M(u, e) - M(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? M(u, e) - M(u, t) : 0;
                    if (i === o) return pe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !j[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    j(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    n = n && L.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== n ? n : d.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, se.escape = function(e) {
                return (e + "").replace(ie, oe)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(q), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(re, f), e[3] = (e[3] || e[4] || e[5] || "").replace(re, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(re, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && N(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, r) {
                        return function(e) {
                            e = se.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(B, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y != m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    for (; l;) {
                                        for (a = e; a = a[l];)
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    for (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();)
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (!1 === (d = p ? s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1] : d))
                                    for (;
                                        (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a !== e)););
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = M(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = p(e.replace(z, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(re, f),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return Y.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(re, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function ve() {}

        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = x++;
            return e.first ? function(e, t, n) {
                for (; e = e[s];)
                    if (1 === e.nodeType || c) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o = [k, f];
                if (n) {
                    for (; e = e[s];)
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || c)
                            if (r = (i = e[S] || (e[S] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[s] || e;
                            else {
                                if ((i = r[l]) && i[0] === k && i[1] === f) return o[2] = i[2];
                                if ((r[l] = o)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function xe(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function we(d, h, g, v, y, e) {
            return v && !v[S] && (v = we(v)), y && !y[S] && (y = we(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : be(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v)
                    for (i = be(p, u), v(i, [], n, r), o = i.length; o--;)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (y || d) {
                        if (y) {
                            for (i = [], o = p.length; o--;)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(a = p[o]) && -1 < (i = y ? M(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = be(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : P.apply(t, p)
            })
        }

        function Te(v, y) {
            function e(e, t, n, r, i) {
                var o, a, s, u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || x && b.find.TAG("*", i),
                    h = k += null == p ? 1 : Math.random() || .1,
                    g = d.length;
                for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                    if (x && o) {
                        for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = v[a++];)
                            if (s(o, t || C, n)) {
                                r.push(o);
                                break
                            } i && (k = h)
                    }
                    m && ((o = !s && o) && u--, e && c.push(o))
                }
                if (u += l, m && l !== u) {
                    for (a = 0; s = y[a++];) s(c, f, t, n);
                    if (e) {
                        if (0 < u)
                            for (; l--;) c[l] || f[l] || (f[l] = H.call(r));
                        f = be(f)
                    }
                    P.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                }
                return i && (k = h, w = p), c
            }
            var m = 0 < y.length,
                x = 0 < v.length;
            return m ? le(e) : e
        }
        return ve.prototype = b.filters = b.pseudos, b.setFilters = new ve, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = A[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = b.preFilter; a;) {
                for (o in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(z, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : A(e, s).slice(0)
        }, p = se.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = D[e + " "];
            if (!o) {
                for (n = (t = t || h(e)).length; n--;)((o = function e(t) {
                    for (var r, n, i, o = t.length, a = b.relative[t[0].type], s = a || b.relative[" "], u = a ? 1 : 0, l = me(function(e) {
                            return e === r
                        }, s, !0), c = me(function(e) {
                            return -1 < M(r, e)
                        }, s, !0), f = [function(e, t, n) {
                            return n = !a && (n || t !== w) || ((r = t).nodeType ? l : c)(e, t, n), r = null, n
                        }]; u < o; u++)
                        if (n = b.relative[t[u].type]) f = [me(xe(f), n)];
                        else {
                            if ((n = b.filter[t[u].type].apply(null, t[u].matches))[S]) {
                                for (i = ++u; i < o && !b.relative[t[i].type]; i++);
                                return we(1 < u && xe(f), 1 < u && ye(t.slice(0, u - 1).concat({
                                    value: " " === t[u - 2].type ? "*" : ""
                                })).replace(z, "$1"), n, u < i && e(t.slice(u, i)), i < o && e(t = t.slice(i)), i < o && ye(t))
                            }
                            f.push(n)
                        } return xe(f)
                }(t[n]))[S] ? r : i).push(o);
                (o = D(e, Te(i, r))).selector = e
            }
            return o
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(re, f), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Q.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(re, f), ne.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && ye(o))) return P.apply(n, r), n;
                        break
                    }
            }
            return (l || p(e, c))(r, t, !E, n, !t || ne.test(e) && ge(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(q).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(I, function(e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), se
    }(T);
    E.find = w, E.expr = w.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = w.uniqueSort, E.text = w.getText, E.isXMLDoc = w.isXML, E.contains = w.contains, E.escapeSelector = w.escape;

    function S(e, t, n) {
        for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && E(e).is(n)) break;
                r.push(e)
            } return r
    }

    function k(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var N = E.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return x(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        if (!e) return this;
        if (n = n || q, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (r[1]) {
            if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), D.test(r[1]) && E.isPlainObject(t))
                for (var r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (e = C.getElementById(r[2])) && (this[0] = e, this.length = 1), this
    }).prototype = E.fn, q = E(C);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && E(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            var t;
            return (t = e.parentNode) && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (O[r] || E.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function I(e) {
        throw e
    }

    function _(e, t, n, r) {
        var i;
        try {
            e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);

        function i() {
            for (s = s || r.once, a = o = !0; l.length; c = -1)
                for (t = l.shift(); ++c < u.length;) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
            r.memory || (t = !1), o = !1, s && (u = t ? [] : "")
        }
        var o, t, a, s, u = [],
            l = [],
            c = -1,
            f = {
                add: function() {
                    return u && (t && !o && (c = u.length - 1, l.push(t)), function n(e) {
                        E.each(e, function(e, t) {
                            x(t) ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== h(t) && n(t)
                        })
                    }(arguments), t && !o && i()), this
                },
                remove: function() {
                    return E.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = E.inArray(t, u, n));) u.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, u) : 0 < u.length
                },
                empty: function() {
                    return u = u && [], this
                },
                disable: function() {
                    return s = l = [], u = t = "", this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return s = l = [], t || o || (u = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || i()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return f
    }, E.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                var n = x(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, x(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }
                                var n = this,
                                    r = arguments,
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }
                        return E.Deferred(function(e) {
                            o[0][3].add(l(0, e, x(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, x(t) ? t : M)), o[2][3].add(l(0, e, x(n) ? n : I))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, a) : a
                    }
                },
                s = {};
            return E.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(i, o)
                }
            }
            var n = arguments.length,
                r = n,
                i = Array(r),
                o = s.call(arguments),
                a = E.Deferred();
            if (n <= 1 && (_(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || x(o[r] && o[r].then))) return a.then();
            for (; r--;) _(o[r], t(r), a.reject);
            return a.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && W.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    };
    var $ = E.Deferred();

    function F() {
        C.removeEventListener("DOMContentLoaded", F), T.removeEventListener("load", F), E.ready()
    }
    E.fn.ready = function(e) {
        return $.then(e).catch(function(e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || $.resolveWith(C, [E])
        }
    }), E.ready.then = $.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(E.ready) : (C.addEventListener("DOMContentLoaded", F), T.addEventListener("load", F));

    function B(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ("object" === h(n))
            for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0, x(r) || (a = !0), t = l ? a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                return l.call(E(e), n)
            }) : t))
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
    var z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }

    function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Y() {
        this.expando = E.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                void 0 !== t && !E.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !E.isEmptyObject(e)
        }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 !== n) return "object" === (void 0 === n ? "undefined" : _typeof(n)) ? this.each(function() {
                J.set(this, n)
            }) : B(this, function(e) {
                var t;
                return o && void 0 === e ? void 0 !== (t = J.get(o, n)) || void 0 !== (t = ee(o, n)) ? t : void 0 : void this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                Q.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, E.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(a, [a])
            }
            var r, i = 1,
                o = E.Deferred(),
                a = this,
                s = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = Q.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
            return n(), o.promise(t)
        }
    });
    var f = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + f + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = C.documentElement,
        ie = function(e) {
            return E.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });

    function ae(e, t, n, r) {
        var i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in r = n.apply(e, r || []), t) e.style[i] = o[i];
        return r
    }
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
    };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return E.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, E.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e, t) {
        for (var n, r, i, o, a, s = [], u = 0, l = e.length; u < l; u++)(r = e[u]).style && (n = r.style.display, t ? ("none" === n && (s[u] = Q.get(r, "display") || null, s[u] || (r.style.display = "")), "" === r.style.display && se(r) && (s[u] = (a = o = void 0, o = (i = r).ownerDocument, a = i.nodeName, (i = le[a]) || (o = o.body.appendChild(o.createElement(a)), i = E.css(o, "display"), o.parentNode.removeChild(o), "none" === i && (i = "block"), le[a] = i)))) : "none" !== n && (s[u] = "none", Q.set(r, "display", n)));
        for (u = 0; u < l; u++) null != s[u] && (e[u].style.display = s[u]);
        return e
    }
    E.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var fe = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ge(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
    var ye = /<|&#?\w+;/;

    function me(e, t, n, r, i) {
        for (var o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === h(o)) E.merge(f, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (a = a || c.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), s = he[s] || he._default, a.innerHTML = s[1] + E.htmlPrefilter(o) + s[2], l = s[0]; l--;) a = a.lastChild;
            E.merge(f, a.childNodes), (a = c.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (c.textContent = "", p = 0; o = f[p++];)
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (u = ie(o), a = ge(c.appendChild(o), "script"), u && ve(a), n)
            for (l = 0; o = a[l++];) de.test(o.type || "") && n.push(o);
        return c
    }
    t = C.createDocumentFragment().appendChild(C.createElement("div")), (w = C.createElement("input")).setAttribute("type", "radio"), w.setAttribute("checked", "checked"), w.setAttribute("name", "t"), t.appendChild(w), m.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    var xe = /^key/,
        be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Ce() {
        return !1
    }

    function Ee(e, t) {
        return e === function() {
            try {
                return C.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" === (void 0 === t ? "undefined" : _typeof(t))) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }

    function ke(e, i, o) {
        o ? (Q.set(e, i, !1), E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Q.set(this, i, {
                    value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && E.event.add(e, i, Te)
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h = Q.get(t);
            if (h)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (s = h.events) || (s = h.events = {}), (a = h.handle) || (a = h.handle = function(e) {
                        return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(R) || [""]).length; u--;) f = d = (l = we.exec(e[u]) || [])[1], p = (l[2] || "").split(".").sort(), f && (c = E.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = E.event.special[f] || {}, l = E.extend({
                    type: f,
                    origType: d,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = s[f]) || ((d = s[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(f, a)), c.add && (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), E.event.global[f] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(R) || [""]).length; l--;)
                    if (d = g = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a = E.event.fix(e),
                s = new Array(arguments.length),
                u = (Q.get(this, "events") || {})[a.type] || [],
                e = E.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (a.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                for (o = E.event.handlers.call(this, a, u), t = 0;
                    (r = o[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (i = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== i.namespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i, a.data = i.data, void 0 !== (i = ((E.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: x(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return fe.test(e.type) && e.click && A(e, "input") && ke(e, "click", Te), !1
                },
                trigger: function(e) {
                    e = this || e;
                    return fe.test(e.type) && e.click && A(e, "input") && ke(e, "click"), !0
                },
                _default: function(e) {
                    e = e.target;
                    return fe.test(e.type) && e.click && A(e, "input") && Q.get(e, "click") || A(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return ke(this, e, Ee), !1
            },
            trigger: function() {
                return ke(this, e), !0
            },
            delegateType: t
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, r) {
            return Se(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" !== (void 0 === e ? "undefined" : _typeof(e))) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() {
                E.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), s = o.events))
                for (i in delete a.handle, a.events = {}, s)
                    for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
            J.hasData(e) && (e = J.access(e), e = E.extend({}, e), J.set(t, e))
        }
    }

    function Pe(n, r, i, o) {
        r = v.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = x(d);
        if (h || 1 < f && "string" == typeof d && !m.checkClone && De.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ge(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), s && E.merge(a, ge(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, E.map(a, He), c = 0; c < s; c++) u = a[c], de.test(u.type || "") && !Q.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = qe(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !he[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me, Ie, _e, We, $e, Fe, Be, ze = new RegExp("^(" + f + ")(?!px)[a-z%]+$", "i"),
        Ue = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t = !t || !t.opener ? T : t).getComputedStyle(e)
        },
        Xe = new RegExp(ne.join("|"), "i");

    function Ve() {
        var e;
        Be && (Fe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Be.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(Fe).appendChild(Be), e = T.getComputedStyle(Be), Me = "1%" !== e.top, $e = 12 === Ge(e.marginLeft), Be.style.right = "60%", We = 36 === Ge(e.right), Ie = 36 === Ge(e.width), Be.style.position = "absolute", _e = 12 === Ge(Be.offsetWidth / 3), re.removeChild(Fe), Be = null)
    }

    function Ge(e) {
        return Math.round(parseFloat(e))
    }

    function Ye(e, t, n) {
        var r, i, o = e.style;
        return (n = n || Ue(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || ie(e) || (i = E.style(e, t)), !m.pixelBoxStyles() && ze.test(i) && Xe.test(t) && (r = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = r, o.minWidth = e, o.maxWidth = t)), void 0 !== i ? i + "" : i
    }

    function Qe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Fe = C.createElement("div"), (Be = C.createElement("div")).style && (Be.style.backgroundClip = "content-box", Be.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === Be.style.backgroundClip, E.extend(m, {
        boxSizingReliable: function() {
            return Ve(), Ie
        },
        pixelBoxStyles: function() {
            return Ve(), We
        },
        pixelPosition: function() {
            return Ve(), Me
        },
        reliableMarginLeft: function() {
            return Ve(), $e
        },
        scrollboxSize: function() {
            return Ve(), _e
        }
    }));
    var Je = ["Webkit", "Moz", "ms"],
        Ke = C.createElement("div").style,
        Ze = {};

    function et(e) {
        var t = E.cssProps[e] || Ze[e];
        return t || (e in Ke ? e : Ze[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
                if ((e = Je[n] + t) in Ke) return e
        }(e) || e)
    }
    var tt = /^(none|table(?!-c[ea]).+)/,
        nt = /^--/,
        rt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        it = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function ot(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function at(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function st(e, t, n) {
        var r = Ue(e),
            i = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Ye(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ze.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!m.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + at(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function ut(e, t, n, r, i) {
        return new ut.prototype.init(e, t, n, r, i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Ye(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = nt.test(t),
                    l = e.style;
                if (u || (t = et(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = void 0 === n ? "undefined" : _typeof(n)) && (i = te.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o = V(t);
            return nt.test(t) || (t = et(o)), "normal" === (i = void 0 === (i = (o = E.cssHooks[t] || E.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ? Ye(e, t, r) : i) && t in it && (i = it[t]), "" === n || n ? (t = parseFloat(i), !0 === n || isFinite(t) ? t || 0 : i) : i
        }
    }), E.each(["height", "width"], function(e, s) {
        E.cssHooks[s] = {
            get: function(e, t, n) {
                if (t) return !tt.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? st(e, s, n) : ae(e, rt, function() {
                    return st(e, s, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Ue(e),
                    o = !m.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                    n = n ? at(e, s, n, a, i) : 0;
                return a && o && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - at(e, s, "border", !1, i) - .5)), n && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = E.css(e, s)), ot(0, t, n)
            }
        }
    }), E.cssHooks.marginLeft = Qe(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (E.cssHooks[i + o].set = ot)
    }), E.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ue(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), (E.Tween = ut).prototype = {
        constructor: ut,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ut.propHooks[this.prop];
            return (e && e.get ? e : ut.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = ut.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : ut.propHooks._default).set(this), this
        }
    }, ut.prototype.init.prototype = ut.prototype, ut.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[et(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, ut.propHooks.scrollTop = ut.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = ut.prototype.init, E.fx.step = {};
    var lt, ct, ft = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;

    function dt() {
        ct && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(dt) : T.setTimeout(dt, E.fx.interval), E.fx.tick())
    }

    function ht() {
        return T.setTimeout(function() {
            lt = void 0
        }), lt = Date.now()
    }

    function gt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function yt(i, e, t) {
        var n, o, r = 0,
            a = yt.prefilters.length,
            s = E.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (o) return !1;
                for (var e = lt || ht(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++) l.tweens[n].run(t);
                return s.notifyWith(i, [l, t, e]), t < 1 && r ? e : (r || s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l]), !1)
            },
            l = s.promise({
                elem: i,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: lt || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    e = E.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(e), e
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l, e])) : s.rejectWith(i, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < a; r++)
            if (n = yt.prefilters[r].call(l, i, c, l.opts)) return x(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return E.map(c, vt, l), x(l.opts.start) && l.opts.start.call(i, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, {
            elem: i,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    E.Animation = E.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = x(e) ? (t = e, ["*"]) : e.match(R)).length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c = "width" in t || "height" in t,
                f = this,
                p = {},
                d = e.style,
                h = e.nodeType && se(e),
                g = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always(function() {
                    f.always(function() {
                        a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ft.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        h = !0
                    }
                    p[r] = g && g[r] || E.style(e, r)
                } if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                for (r in c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (l = g && g.display) && (l = Q.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (ce([e], !0), l = e.style.display || l, c = E.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (f.done(function() {
                        d.display = l
                    }), null == l && (c = d.display, l = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
                        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                    })), u = !1, p) u || (g ? "hidden" in g && (h = g.hidden) : g = Q.access(e, "fxshow", {
                    display: l
                }), o && (g.hidden = !h), h && ce([e], !0), f.done(function() {
                    for (r in h || ce([e]), Q.remove(e, "fxshow"), p) E.style(e, r, p[r])
                })), u = vt(h ? g[r] : 0, r, f), r in g || (g[r] = u.start, h && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }), E.speed = function(e, t, n) {
        var r = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) ? E.extend({}, e) : {
            complete: n || !n && t || x(e) && e,
            duration: e,
            easing: n && t || t && !x(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = E.isEmptyObject(t),
                o = E.speed(e, n, r),
                r = function() {
                    var e = yt(this, E.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(i, e, o) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = E.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = E.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function(e, r) {
        var i = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function() {
        var e, t = 0,
            n = E.timers;
        for (lt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), lt = void 0
    }, E.fx.timer = function(e) {
        E.timers.push(e), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function() {
        ct || (ct = !0, dt())
    }, E.fx.stop = function() {
        ct = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = T.setTimeout(e, r);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }, t = C.createElement("input"), f = C.createElement("select").appendChild(C.createElement("option")), t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = f.selected, (t = C.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value;
    var mt, xt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return B(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), mt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || E.find.attr;
        xt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;

    function Tt(e) {
        return (e.match(R) || []).join(" ")
    }

    function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Et(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return B(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (E.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s = 0;
            if (x(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, Ct(this)))
            });
            if ((e = Et(t)).length)
                for (; n = this[s++];)
                    if (a = Ct(n), r = 1 === n.nodeType && " " + Tt(a) + " ") {
                        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a !== (a = Tt(r)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s = 0;
            if (x(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, Ct(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = Et(t)).length)
                for (; n = this[s++];)
                    if (a = Ct(n), r = 1 === n.nodeType && " " + Tt(a) + " ") {
                        for (o = 0; i = e[o++];)
                            for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        a !== (a = Tt(r)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = void 0 === i ? "undefined" : _typeof(i),
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : x(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, Ct(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = E(this), r = Et(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = Ct(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== i && Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + Tt(Ct(t)) + " ").indexOf(r)) return !0;
            return !1
        }
    });
    var St = /\r/g;
    E.fn.extend({
        val: function(t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = x(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, E(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = E.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : i ? (n = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof(e = i.value) ? e.replace(St, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : Tt(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++)
                        if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
                            if (t = E(t).val(), i) return t;
                            o.push(t)
                        } return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, m.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), m.focusin = "onfocusin" in T;

    function kt(e) {
        e.stopPropagation()
    }
    var Nt = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f = [n || C],
                p = y.call(e, "type") ? e.type : e,
                d = y.call(e, "namespace") ? e.namespace.split(".") : [],
                h = c = o = n = n || C;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), s = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" === (void 0 === e ? "undefined" : _typeof(e)) && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), l = E.event.special[p] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !g(n)) {
                    for (a = l.delegateType || p, Nt.test(a + p) || (h = h.parentNode); h; h = h.parentNode) f.push(h), o = h;
                    o === (n.ownerDocument || C) && f.push(o.defaultView || o.parentWindow || T)
                }
                for (i = 0;
                    (h = f[i++]) && !e.isPropagationStopped();) c = h, e.type = 1 < i ? a : l.bindType || p, (u = (Q.get(h, "events") || {})[e.type] && Q.get(h, "handle")) && u.apply(h, t), (u = s && h[s]) && u.apply && G(h) && (e.result = u.apply(h, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !G(n) || s && x(n[p]) && !g(n) && ((o = n[s]) && (n[s] = null), E.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, kt), n[p](), e.isPropagationStopped() && c.removeEventListener(p, kt), E.event.triggered = void 0, o && (n[s] = o)), e.result
            }
        },
        simulate: function(e, t, n) {
            e = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(e, null, t)
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), m.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        }
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var At = T.location,
        Dt = Date.now(),
        jt = /\?/;
    E.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
    };
    var qt = /\[\]$/,
        Lt = /\r?\n/g,
        Ht = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    E.param = function(e, t) {
        function n(e, t) {
            t = x(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var r, i = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) ! function n(r, e, i, o) {
                if (Array.isArray(e)) E.each(e, function(e, t) {
                    i || qt.test(r) ? o(r, t) : n(r + "[" + ("object" === (void 0 === t ? "undefined" : _typeof(t)) && null != t ? e : "") + "]", t, i, o)
                });
                else if (i || "object" !== h(e)) o(r, e);
                else
                    for (var t in e) n(r + "[" + t + "]", e[t], i, o)
            }(r, e[r], t, n);
        return i.join("&")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Pt = /%20/g,
        Rt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _t = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        $t = {},
        Ft = {},
        Bt = "*/".concat("*"),
        zt = C.createElement("a");

    function Ut(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if (x(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Xt(t, r, i, o) {
        var a = {},
            s = t === Ft;

        function u(e) {
            var n;
            return a[e] = !0, E.each(t[e] || [], function(e, t) {
                t = t(r, i, o);
                return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1)
            }), n
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function Vt(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && E.extend(!0, e, r), e
    }
    zt.href = At.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Ut($t),
        ajaxTransport: Ut(Ft),
        ajax: function(e, t) {
            "object" === (void 0 === e ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};
            var u, l, c, n, f, r, p, d, i, h = E.ajaxSetup({}, t),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? E(g) : E.event,
                y = E.Deferred(),
                m = E.Callbacks("once memory"),
                x = h.statusCode || {},
                o = {},
                a = {},
                s = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = It.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? c : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (p) b.always(e[b.status]);
                            else
                                for (var t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || s;
                        return u && u.abort(e), w(0, e), this
                    }
                };
            if (y.promise(b), h.url = ((e || h.url || At.href) + "").replace(Wt, At.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = h.url, r.href = r.href, h.crossDomain = zt.protocol + "//" + zt.host != r.protocol + "//" + r.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), Xt($t, h, t, b), p) return b;
            for (i in (d = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !_t.test(h.type), l = h.url.replace(Rt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Pt, "+")) : (e = h.url.slice(l.length), h.data && (h.processData || "string" == typeof h.data) && (l += (jt.test(l) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (l = l.replace(Mt, "$1"), e = (jt.test(l) ? "&" : "?") + "_=" + Dt++ + e), h.url = l + e), h.ifModified && (E.lastModified[l] && b.setRequestHeader("If-Modified-Since", E.lastModified[l]), E.etag[l] && b.setRequestHeader("If-None-Match", E.etag[l])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]), h.headers) b.setRequestHeader(i, h.headers[i]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p)) return b.abort();
            if (s = "abort", m.add(h.complete), b.done(h.success), b.fail(h.error), u = Xt(Ft, h, t, b)) {
                if (b.readyState = 1, d && v.trigger("ajaxSend", [b, h]), p) return b;
                h.async && 0 < h.timeout && (f = T.setTimeout(function() {
                    b.abort("timeout")
                }, h.timeout));
                try {
                    p = !1, u.send(o, w)
                } catch (e) {
                    if (p) throw e;
                    w(-1, e)
                }
            } else w(-1, "No Transport");

            function w(e, t, n, r) {
                var i, o, a, s = t;
                p || (p = !0, f && T.clearTimeout(f), u = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a = a || i
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(h, b, n)), a = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, a, b, r), r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (E.lastModified[l] = n), (n = b.getResponseHeader("etag")) && (E.etag[l] = n)), 204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state, i = a.data, r = !(o = a.error))) : (o = s, !e && s || (s = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || s) + "", r ? y.resolveWith(g, [i, s, b]) : y.rejectWith(g, [b, s, o]), b.statusCode(x), x = void 0, d && v.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? i : o]), m.fireWith(g, [b, s]), d && (v.trigger("ajaxComplete", [b, h]), --E.active || E.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function(e, i) {
        E[i] = function(e, t, n, r) {
            return x(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E._evalUrl = function(e, t) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t)
            }
        })
    }, E.fn.extend({
        wrapAll: function(e) {
            return this[0] && (x(e) && (e = e.call(this[0])), e = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return x(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = x(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, E.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var Gt = {
            0: 200,
            1223: 204
        },
        Yt = E.ajaxSettings.xhr();
    m.cors = !!Yt && "withCredentials" in Yt, m.ajax = Yt = !!Yt, E.ajaxTransport(function(i) {
        var o, a;
        if (m.cors || Yt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Gt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && T.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = E("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Qt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Qt.pop() || E.expando + "_" + Dt++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Jt, "$1" + r) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || E.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = T[r], T[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? E(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Qt.push(r)), o && x(i) && i(o[0]), o = i = void 0
        }), "script"
    }), m.createHTMLDocument = ((t = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === t.childNodes.length), E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), r = !n && [], (n = D.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, r), r && r.length && E(r).remove(), E.merge([], n.childNodes)));
        var r
    }, E.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), x(t) ? (n = t, t = void 0) : t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && (i = "POST"), 0 < a.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s = E.css(e, "position"),
                u = E(e),
                l = {};
            "static" === s && (e.style.position = "relative"), o = u.offset(), r = E.css(e, "top"), a = E.css(e, "left"), a = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? (i = (s = u.position()).top, s.left) : (i = parseFloat(r) || 0, parseFloat(a) || 0), null != (t = x(t) ? t.call(e, n, E.extend({}, o)) : t).top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + a), "using" in t ? t.using.call(e, l) : u.css(l)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var r;
                return g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Qe(m.pixelPosition, function(e, t) {
            if (t) return t = Ye(e, n), ze.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var r;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), E.proxy = function(e, t) {
        var n, r;
        if ("string" == typeof t && (r = e[t], t = e, e = r), x(e)) return n = s.call(arguments, 2), (r = function() {
            return e.apply(t || this, n.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, r
    }, E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = x, E.isWindow = g, E.camelCase = V, E.type = h, E.now = Date.now, E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var Kt = T.jQuery,
        Zt = T.$;
    return E.noConflict = function(e) {
        return T.$ === E && (T.$ = Zt), e && T.jQuery === E && (T.jQuery = Kt), E
    }, e || (T.jQuery = T.$ = E), E
});
! function(l, c) {
    var e = l.Mntl || {},
        t = {
            loadStyleSheet: function(e, t) {
                var n, o, i, r = c('<link rel="stylesheet" type="text/css" href="' + e + '"/>');

                function a(e) {
                    for (var t = o.href, n = i.length; n--;)
                        if (i[n].href === t) return e();
                    setTimeout(function() {
                        a(e)
                    })
                }
                l.Modernizr.hasEvent("load", r) ? (t && r.on("load", t), c("head").append(r)) : (n = l.document, o = n.createElement("link"), r = (r = (n.body || n.getElementsByTagName("head")[0]).childNodes)[r.length - 1], i = n.styleSheets, o.rel = "stylesheet", o.href = e, o.media = "only x", r.parentNode.insertBefore(o, r.nextSibling), o.onloadcssdefined = a, a(function() {
                    o.media = "all", t && t()
                }))
            },
            readyAndDeferred: function(n) {
                var e = c("body");
                c(n.bind(e, e)), c(document).on("defer-batch-complete", function(e, t) {
                    t.forEach(function(e) {
                        n.call(e, e)
                    })
                })
            },
            isElementVisibleY: function(e, t, n) {
                var o = e.length ? e[0] : e,
                    i = o.offsetHeight,
                    r = 0,
                    a = o;
                for (n = n || 0, t = "number" != typeof t ? 0 : t, 1 < e.length && l.debug.warn("More than 1 element passed to isElementVisibleY(), running method against the first element only"); a && a !== document.body;) r += a.offsetTop, a = a.offsetParent;
                return e = r + i, t < Math.max(0, Math.min(i, l.pageYOffset + l.innerHeight - r + n, e - l.pageYOffset - n)) / i
            },
            getDocumentBaseUrl: function() {
                return c(document).find('meta[property="og:url"]').attr("content") || [location.protocol, "//", location.host, location.pathname].join("")
            },
            getDocumentSocialTitle: function() {
                return c(document).find("meta[itemprop=name]").attr("content") || ""
            },
            getDocumentMetaDescription: function() {
                return c(document).find("meta[name=description]").attr("content") || ""
            },
            scrollToElement: function(e, t, n) {
                n = n || 0, c("html, body").animate({
                    scrollTop: e.offset().top - n
                }, 500, t)
            }
        };
    e.utilities = e.utilities ? Object.assign(e.utilities, t) : t
}(window, window.jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
    t = t(e, e.document, Date), e.lazySizes = t, "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {}, function(a, f, o) {
    "use strict";
    var y, m;
    if (! function() {
            var e, t = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            for (e in m = a.lazySizesConfig || a.lazysizesConfig || {}, t) e in m || (m[e] = t[e])
        }(), !f || !f.getElementsByClassName) return {
        init: function() {},
        cfg: m,
        noSupport: !0
    };

    function s(e, t) {
        return S[t] || (S[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), S[t].test(e[A]("class") || "") && S[t]
    }

    function c(e, t) {
        s(e, t) || e.setAttribute("class", (e[A]("class") || "").trim() + " " + t)
    }

    function d(e, t) {
        (t = s(e, t)) && e.setAttribute("class", (e[A]("class") || "").replace(t, " "))
    }

    function u(t, n, e) {
        var a = e ? b : "removeEventListener";
        e && u(t, n), M.forEach(function(e) {
            t[a](e, n)
        })
    }

    function z(e, t, n, a, i) {
        var o = f.createEvent("Event");
        return (n = n || {}).instance = y, o.initEvent(t, !a, !i), o.detail = n, e.dispatchEvent(o), o
    }

    function h(e, t) {
        var n;
        !C && (n = a.picturefill || m.pf) ? (t && t.src && !e[A]("srcset") && e.setAttribute("srcset", t.src), n({
            reevaluate: !0,
            elements: [e]
        })) : t && t.src && (e.src = t.src)
    }

    function p(e, t) {
        return (getComputedStyle(e, null) || {})[t]
    }

    function i(e, t, n) {
        for (n = n || e.offsetWidth; n < m.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
        return n
    }
    var n, r, t, l, v, g = f.documentElement,
        C = a.HTMLPictureElement,
        b = "addEventListener",
        A = "getAttribute",
        e = a[b].bind(a),
        E = a.setTimeout,
        _ = a.requestAnimationFrame || E,
        w = a.requestIdleCallback,
        N = /^picture$/i,
        M = ["load", "error", "lazyincluded", "_lazyloaded"],
        S = {},
        x = Array.prototype.forEach,
        W = (l = [], v = t = [], L._lsFlush = B, L);

    function B() {
        var e = v;
        for (v = t.length ? l : t, r = !(n = !0); e.length;) e.shift()();
        n = !1
    }

    function L(e, t) {
        n && !t ? e.apply(this, arguments) : (v.push(e), r || (r = !0, (f.hidden ? E : _)(B)))
    }

    function T(n, e) {
        return e ? function() {
            W(n)
        } : function() {
            var e = this,
                t = arguments;
            W(function() {
                n.apply(e, t)
            })
        }
    }

    function F(e) {
        function t() {
            a = null, e()
        }

        function n() {
            var e = o.now() - i;
            e < 99 ? E(n, 99 - e) : (w || t)(t)
        }
        var a, i;
        return function() {
            i = o.now(), a = a || E(n, 99)
        }
    }
    var R, D, k, H, O, P, $, q, I, U, j, G, J, K, Q, V, X, Y, Z, ee, te, ne, ae, ie, oe, se, re, le, ce, de, ue = (Z = /^img$/i, ee = /^iframe$/i, te = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), ie = -1, J = me, Q = ae = ne = 0, V = m.throttleDelay, X = m.ricTimeout, Y = w && 49 < X ? function() {
        w(ze, {
            timeout: X
        }), X !== m.ricTimeout && (X = m.ricTimeout)
    } : T(function() {
        E(ze)
    }, !0), se = T(he), re = function(e) {
        se({
            target: e.target
        })
    }, le = T(function(t, e, n, a, i) {
        var o, s, r, l;
        (s = z(t, "lazybeforeunveil", e)).defaultPrevented || (a && (n ? c(t, m.autosizesClass) : t.setAttribute("sizes", a)), n = t[A](m.srcsetAttr), a = t[A](m.srcAttr), i && (o = (l = t.parentNode) && N.test(l.nodeName || "")), r = e.firesLoad || "src" in t && (n || a || o), s = {
            target: t
        }, c(t, m.loadingClass), r && (clearTimeout(k), k = E(fe, 2500), u(t, re, !0)), o && x.call(l.getElementsByTagName("source"), pe), n ? t.setAttribute("srcset", n) : a && !o && (ee.test(t.nodeName) ? (l = a, t.src = l) : t.src = a), i && (n || o) && h(t, {
            src: a
        })), t._lazyRace && delete t._lazyRace, d(t, m.lazyClass), W(function() {
            var e = t.complete && 1 < t.naturalWidth;
            r && !e || (e && c(t, "ls-is-cached"), he(s), t._lazyCache = !0, E(function() {
                "_lazyCache" in t && delete t._lazyCache
            }, 9)), "lazy" == t.loading && ae--
        }, !0)
    }), de = F(function() {
        m.loadMode = 3, oe()
    }), {
        _: function() {
            O = o.now(), y.elements = f.getElementsByClassName(m.lazyClass), R = f.getElementsByClassName(m.lazyClass + " " + m.preloadClass), e("scroll", oe, !0), e("resize", oe, !0), e("pageshow", function(e) {
                var t;
                !e.persisted || (t = f.querySelectorAll("." + m.loadingClass)).length && t.forEach && _(function() {
                    t.forEach(function(e) {
                        e.complete && ce(e)
                    })
                })
            }), a.MutationObserver ? new MutationObserver(oe).observe(g, {
                childList: !0,
                subtree: !0,
                attributes: !0
            }) : (g[b]("DOMNodeInserted", oe, !0), g[b]("DOMAttrModified", oe, !0), setInterval(oe, 999)), e("hashchange", oe, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
                f[b](e, oe, !0)
            }), /d$|^c/.test(f.readyState) ? ge() : (e("load", ge), f[b]("DOMContentLoaded", oe), E(ge, 2e4)), y.elements.length ? (me(), W._lsFlush()) : oe()
        },
        checkElems: oe = function(e) {
            var t;
            (e = !0 === e) && (X = 33), K || (K = !0, (t = V - (o.now() - Q)) < 0 && (t = 0), e || t < 9 ? Y() : E(Y, t))
        },
        unveil: ce = function(e) {
            var t, n, a, i;
            e._lazyRace || (!(i = "auto" == (a = (n = Z.test(e.nodeName)) && (e[A](m.sizesAttr) || e[A]("sizes")))) && D || !n || !e[A]("src") && !e.srcset || e.complete || s(e, m.errorClass) || !s(e, m.lazyClass)) && (t = z(e, "lazyunveilread").detail, i && Ee.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, ae++, le(e, t, i, a, n))
        },
        _aLSL: ve
    });

    function fe(e) {
        ae--, e && !(ae < 0) && e.target || (ae = 0)
    }

    function ye(e) {
        return (G = null == G ? "hidden" == p(f.body, "visibility") : G) || !("hidden" == p(e.parentNode, "visibility") && "hidden" == p(e, "visibility"))
    }

    function me() {
        var e, t, n, a, i, o, s, r, l, c, d, u = y.elements;
        if ((H = m.loadMode) && ae < 8 && (e = u.length)) {
            for (t = 0, ie++; t < e; t++)
                if (u[t] && !u[t]._lazyRace)
                    if (!te || y.prematureUnveil && y.prematureUnveil(u[t])) ce(u[t]);
                    else if ((s = u[t][A]("data-expand")) && (i = +s) || (i = ne), l || (l = !m.expand || m.expand < 1 ? 500 < g.clientHeight && 500 < g.clientWidth ? 500 : 370 : m.expand, c = (y._defEx = l) * m.expFactor, d = m.hFac, G = null, ne < c && ae < 1 && 2 < ie && 2 < H && !f.hidden ? (ne = c, ie = 0) : ne = 1 < H && 1 < ie && ae < 6 ? l : 0), r !== i && (P = innerWidth + i * d, $ = innerHeight + i, o = -1 * i, r = i), c = u[t].getBoundingClientRect(), (j = c.bottom) >= o && (q = c.top) <= $ && (U = c.right) >= o * d && (I = c.left) <= P && (j || U || I || q) && (m.loadHidden || ye(u[t])) && (D && ae < 3 && !s && (H < 3 || ie < 4) || function(e, t) {
                    var n, a = e,
                        i = ye(e);
                    for (q -= t, j += t, I -= t, U += t; i && (a = a.offsetParent) && a != f.body && a != g;)(i = 0 < (p(a, "opacity") || 1)) && "visible" != p(a, "overflow") && (n = a.getBoundingClientRect(), i = U > n.left && I < n.right && j > n.top - 1 && q < n.bottom + 1);
                    return i
                }(u[t], i))) {
                if (ce(u[t]), a = !0, 9 < ae) break
            } else !a && D && !n && ae < 4 && ie < 4 && 2 < H && (R[0] || m.preloadAfterLoad) && (R[0] || !s && (j || U || I || q || "auto" != u[t][A](m.sizesAttr))) && (n = R[0] || u[t]);
            n && !a && ce(n)
        }
    }

    function ze() {
        K = !1, Q = o.now(), J()
    }

    function he(e) {
        var t = e.target;
        t._lazyCache ? delete t._lazyCache : (fe(e), c(t, m.loadedClass), d(t, m.loadingClass), u(t, re), z(t, "lazyloaded"))
    }

    function pe(e) {
        var t, n = e[A](m.srcsetAttr);
        (t = m.customMedia[e[A]("data-media") || e[A]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
    }

    function ve() {
        3 == m.loadMode && (m.loadMode = 2), de()
    }

    function ge() {
        D || (o.now() - O < 999 ? E(ge, 999) : (D = !0, m.loadMode = 3, oe(), e("scroll", ve, !0)))
    }
    var Ce, be, Ae, Ee = (be = T(function(e, t, n, a) {
        var i, o, s;
        if (e._lazysizesWidth = a, a += "px", e.setAttribute("sizes", a), N.test(t.nodeName || ""))
            for (o = 0, s = (i = t.getElementsByTagName("source")).length; o < s; o++) i[o].setAttribute("sizes", a);
        n.detail.dataAttr || h(e, n.detail)
    }), {
        _: function() {
            Ce = f.getElementsByClassName(m.autosizesClass), e("resize", Ae)
        },
        checkElems: Ae = F(function() {
            var e, t = Ce.length;
            if (t)
                for (e = 0; e < t; e++) _e(Ce[e])
        }),
        updateElem: _e
    });

    function _e(e, t, n) {
        var a = e.parentNode;
        a && (n = i(e, a, n), (t = z(e, "lazybeforesizes", {
            width: n,
            dataAttr: !!t
        })).defaultPrevented || (n = t.detail.width) && n !== e._lazysizesWidth && be(e, a, t, n))
    }

    function we() {
        !we.i && f.getElementsByClassName && (we.i = !0, Ee._(), ue._())
    }
    return E(function() {
        m.init && we()
    }), y = {
        cfg: m,
        autoSizer: Ee,
        loader: ue,
        init: we,
        uP: h,
        aC: c,
        rC: d,
        hC: s,
        fire: z,
        gW: i,
        rAF: W
    }
});
var Mntl = window.Mntl || {};
Mntl.scroll = function(l) {
    var n = l(window),
        r = 0,
        o = Mntl.throttle(function(o) {
            o = l.extend({}, o);
            o.type = "mntl.scroll", o.scrollTop = n.scrollTop(), o.scrollTop > r ? o.direction = "down" : o.scrollTop < r && (o.direction = "up"), n.trigger(o), r = o.scrollTop
        }, 20);
    n.on("scroll", o)
}(window.jQuery || {});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    Mntl = window.Mntl || {};
Mntl.Deferred = function(h) {
    var s = [],
        l = [],
        p = !1,
        e = {
            jqSel: "[data-defer]",
            requestUrl: window.location.href
        },
        t = {
            timer: null,
            components: []
        },
        c = 1,
        m = null,
        g = null,
        v = null,
        n = h(window),
        o = h("body"),
        d = ["et"],
        r = void 0;

    function i() {
        var e, i = {},
            l = {},
            s = {},
            d = [];
        window.clearTimeout(t.timer), 0 < t.components.length && (p = !0, t.components.forEach(function(e) {
            var t = e.attr("id") || "",
                n = "string" == typeof(r = t) ? r.replace(/(_[0-9]+)(-[0-9]+)?(-[0-9]+)?$/, "$1") : "",
                o = e.data("defer-params"),
                r = void 0;
            o && ("string" == typeof o && (o = JSON.parse(o)), i = h.extend({}, i, o)), t || (r = e.data("type"), s[r] = r in s ? s[r] + 1 : 1, e.addClass(r), n = r + "_" + s[r], e.attr("id", n + "-" + c), d.push(n)), l[n] = e
        }), e = new Mntl.Deferred.RequestContext(l, null, null, null, null, d), Mntl.Deferred.requestComponents(e, i), debug.log("batchTimer - deferring " + t.components.join(", ")), t.components = [])
    }

    function a(e) {
        return e.replace(/^\/[^\/]+\/[^\/]+/, "")
    }

    function y(t, e) {
        e.forEach(function(e) {
            t[a(e)] = ""
        })
    }

    function w(e) {
        var t, n = void 0;
        if (0 < e.length)
            for (n = 0; n < e.length; n++) t = e[n], window.execScript ? window.execScript(t) : window.eval(t)
    }

    function S(e) {
        var t = e.indexOf("#"),
            n = e;
        return n = 0 < t ? e.substring(0, t) : n
    }

    function b(t) {
        var n, o, r, i = void 0,
            l = void 0,
            s = void 0;
        if (t) try {
            document.getElementsByTagName("STYLE")[0].innerHTML += t
        } catch (e) {
            for (n = /@media.*?}[\s]*?}(?:[\S]*mediaquery[\S]*)?/gm, i = t.replace(n, "").split("}"), l = document.styleSheets[document.styleSheets.length - 1], s = 0, o = i.length; s < o; s++) "" !== (r = i[s].trim()) && l.insertRule && l.insertRule(r + "}", l.cssRules.length)
        }
    }

    function M(e) {
        var t, n = void 0,
            o = void 0;
        if (e && (t = (r = r || new DOMParser).parseFromString('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + e + "</svg>", "image/svg+xml")))
            for ((o = document.querySelector("svg.mntl-svg-resource > defs")) || ((n = document.createElement("svg")).addClass("mntl-svg-resource"), o = document.createElement("defs"), n.appendChild(o), document.body.insertBefore(n, document.body.firstChild)); t.documentElement.firstChild;) o.appendChild(document.adoptNode(t.documentElement.firstChild))
    }

    function f(s, d, c) {
        var a = [],
            f = [],
            u = void 0;
        ! function(e, t) {
            var n, o = void 0,
                r = 0;

            function i() {
                ++r === e.length && t()
            }
            if (0 < e.length)
                for (o = 0; o < e.length; o++) n = e[o], 0 < h('link[href="' + n + '"]').length ? i() : Mntl.utilities.loadStyleSheet(n, i);
            else t()
        }(s.externalStylesheets, function() {
            var e, t, n, o, r = void 0,
                i = void 0;
            for (r in s.inlineSVGs && 0 < s.inlineSVGs.length && s.inlineSVGs.forEach(function(e) {
                    debug.log("Inline svg: " + e), M(e.content), y(v, [e.svg])
                }), s)
                if (s.hasOwnProperty(r) && "externalScripts" !== r && "externalStylesheets" !== r && "inlineSVGs" !== r) {
                    if (c[r] && null !== c[r]) u = c[r];
                    else
                        for (e = Object.keys(c), i = 0; i < e.length; i++)
                            if (0 === r.indexOf(e[i]) && null !== c[e[i]]) {
                                u = c[e[i]];
                                break
                            } u = u || h("#" + r),
                        function(e, t, n, o, r) {
                            var i = t.inlineStylesheets,
                                l = t.inlineScripts,
                                s = void 0,
                                d = void 0;
                            if (i && 1 < i.length)
                                for (s = 0; s < i.inline.length - 1; s++) debug.log("Inline style: " + i[s].stylesheet), b(i[s].content);
                            if (l && 1 < l.length)
                                for (d = 0; d < l.length - 1; d++) debug.log("Inline script: " + l[d].script), n.push(l[d].content);
                            o ? o(e, t.html) : r.html(t.html)
                        }(r, s[r], f, d, u), (u = d && 0 === u.length ? h("#" + r) : u).trigger("css-html-loaded"), a.push(u), u = null
                }
            function l() {
                ++o === t.length && n()
            }
            y(g, s.externalStylesheets), t = s.externalScripts, n = function() {
                var e = void 0;
                for (w(f), f = [], e = 0; e < a.length; e++) a[e].removeClass("defer-hidden").trigger("deferred-loaded"), debug.log("triggering load for ", a[e]);
                y(m, s.externalScripts), Mntl.Deferred.setBtfVals(), p = !1, h(document).trigger("defer-batch-complete", [a])
            }, (o = 0) < t.length ? t.forEach(function(e) {
                h.ajax({
                    type: "GET",
                    url: S(e),
                    success: l,
                    dataType: "script",
                    cache: !0
                })
            }) : n()
        })
    }

    function u(e, t, n, o, r, i) {
        this.componentIds = {}, this.forceCisComponents = i || [], this.urlOverload = t || null, this.skipGenerify = n || !1, this.htmlCallback = o || null, this.isPageview = r || !1, this.setComponentIds(e)
    }

    function x(e, t, n, o) {
        e.one("deferred-loaded", function() {
            Mntl.Deferred.removeEventListener(t, n, this.getAttribute("id"), o)
        })
    }

    function D(e) {
        e = h(e.target);
        Mntl.Deferred.addToBatch(e)
    }
    return u.prototype.setComponentIds = function(e) {
        var t = void 0 === e ? "undefined" : _typeof(e),
            n = {},
            o = 0;
        if ("undefined" !== t) {
            if (Array.isArray(e))
                for (; o < e.length; o++) n[e[o]] = null;
            else if ("string" === t)
                for (var r = e.split(","); o < r.length; o++) n[r[o].trim()] = null;
            else h.isPlainObject(e) && Mntl.fnUtilities.iterate(e, function(e, t) {
                n[t] = e[t] instanceof h ? e[t] : h("#" + e[t].id)
            });
            this.componentIds = n
        }
    }, n.on("resize", Mntl.throttle(function() {
        Mntl.Deferred.windowHeight = n.height()
    }, 50)), o.on("mntl.contentResize", function() {
        Mntl.Deferred.setBtfVals()
    }), {
        handleInlineCSS: b,
        handleInlineJS: w,
        handleInlineSVG: M,
        init: function(e) {
            var i = [],
                l = h(document).scrollTop() + n.height() + 200,
                e = e instanceof window.jQuery ? e : h(e);
            Mntl.Deferred.windowHeight = n.height(), Mntl.Deferred.DEFAULTS.requestUrl = Mntl.domUtilities.getResourceRootUrl() + window.location.pathname, e.find(Mntl.Deferred.DEFAULTS.jqSel).each(function(e, t) {
                    var n = h(t),
                        o = n.data("defer"),
                        r = n.attr("data-scroll-defer-offset"),
                        t = {};
                    "scroll" === o ? l >= n.offset().top ? i.push(n) : (n.addClass("defer-hidden"), t = {
                        $component: n,
                        pos: n.offset().top,
                        rendered: !1,
                        customOffset: !!r && parseInt(r, 10),
                        scrollTop: n.attr("data-scroll-defer-scrolltop") || !1
                    }, s.push(t)) : "load" === o ? i.push(n) : (h(document).on(o, "[data-defer=" + o + "]", D), x(n, "document", o, D))
                }), 0 < i.length && Mntl.Deferred.addToBatch(i),
                function() {
                    var e, t = void 0;
                    if (s.length)
                        for (s.sort(function(e, t) {
                                return e.pos - t.pos
                            }), e = function(e) {
                                var t = e.scrollTop,
                                    n = e.data,
                                    o = n.$component,
                                    e = n.customOffset || 300;
                                o.length && (n.rendered || (n.scrollTop && t >= n.scrollTop || t + Mntl.Deferred.windowHeight + e >= n.pos) && (Mntl.Deferred.addToBatch(o), n.rendered = !0))
                            }, t = 0; t < s.length; t++) n.on("mntl.scroll", s[t], e), x(s[t].$component, "window", "mntl.scroll", e)
                }()
        },
        RequestContext: u,
        requestComponents: function(t, e) {
            var n = {
                globeDeferVersion: "2",
                cr: Object.keys(t.componentIds).join(),
                loaded_cr: l.join(","),
                cis: c++,
                force_cis: t.forceCisComponents.join(","),
                pv: t.isPageView,
                loaded_css: function() {
                    var t = this;
                    return null === g && (g = {}, h("link[data-glb-css]").each(function() {
                        var e = h(t).attr("href");
                        "string" == typeof e && (g[a(e)] = "")
                    })), Object.keys(g)
                }(),
                loaded_js: (null === m && (m = {}, h("script[data-glb-js]").each(function() {
                    var e = h(this).attr("src");
                    "string" == typeof e && (m[a(e)] = "")
                })), Object.keys(m)),
                loaded_svg: (null === v && (v = {}, h("svg.mntl-svg-resource > defs > symbol[id]").each(function() {
                    v[h(this).attr("id")] = ""
                })), Object.keys(v))
            };
            e = e || {}, t.urlOverload && t.skipGenerify && (t.urlOverload = S(t.urlOverload)), h.extend(n, function() {
                var e = window.location.search.substring(1),
                    t = {},
                    n = void 0,
                    o = void 0,
                    r = void 0;
                if (e) {
                    for (n = e.split("&"), o = 0; o < n.length; o++) 0 !== (r = n[o].split("="))[0].indexOf("globe") && -1 === d.indexOf(r[0]) || (t[r[0]] = null !== r[1] && void 0 !== r[1] ? r[1] : "");
                    return t
                }
                return {}
            }(), e);
            var o, r, i = t.skipGenerify && t.urlOverload ? t.urlOverload : (o = t.urlOverload, i = o || Mntl.Deferred.DEFAULTS.requestUrl, e = void 0, o = o || window.location.href, e = r ? r + "&" : "", e += "url=" + encodeURIComponent(o), i = i, (e = e) ? -1 < i.indexOf("?") ? i + "&" + e : i + "?" + e : i);
            Mntl.fnUtilities.iterate(t.componentIds, function(e, t) {
                -1 === l.indexOf(t) && l.push(t)
            }), h.ajax({
                url: S(i),
                method: "POST",
                data: n,
                dataType: "json",
                traditional: !0,
                xhrFields: {
                    withCredentials: !0
                }
            }).done(function(e) {
                f(e, t.htmlCallback, t.componentIds)
            })
        },
        addToBatch: function(e) {
            debug.log("pauseReqs is " + p.toString()), p ? h(document).one("defer-batch-complete", function() {
                Mntl.Deferred.addToBatch(e)
            }) : (t.timer && window.clearTimeout(t.timer), t.components = t.components.concat(e), t.timer = window.setTimeout(i, 20))
        },
        setBtfVals: function() {
            s.forEach(function(e) {
                e.pos = e.$component.offset().top
            })
        },
        DEFAULTS: e,
        removeEventListener: function(e, t, n, o) {
            h(e).off(t, n, o)
        }
    }
}(window.jQuery || {}), Mntl.utilities.readyAndDeferred(Mntl.Deferred.init), Mntl.utilities.ready(Mntl.Deferred.init.bind(null, document.head));
var Mntl = window.Mntl || {};
Mntl.amazonAffiliateTagger = function() {
    var r, a, e;

    function n(t) {
        var n, i = function(t) {
            var n, i = t.attr("href").split(/\?|%3F/, 2);
            try {
                n = 1 < i.length && Mntl.utilities && Mntl.utilities.getQueryParams(decodeURIComponent(i[1])) || {}
            } catch (t) {
                n = {}
            }
            return {
                url: i[0],
                qp: n
            }
        }(t);
        i.qp.tag = r, i.qp.ascsubtag = [(n = a) ? String(n).replace(/,/g, "") : "", e].join("|"), i = i.url + "?" + querystring.stringify(i.qp), t.attr("href", i)
    }
    return {
        init: function(t, n, i) {
            r = t, a = n, e = i
        },
        processLink: function(t) {
            t.is('a[href*="amazon.com"]') && Mntl.utilities.ready(function() {
                n(t)
            })
        }
    }
}();
var Mntl = window.Mntl || {};
Mntl.externalizeLinks = function(e) {
    var n = window.location.hostname.split("."),
        n = n[n.length - 2] + "." + n[n.length - 1],
        t = 'a[href*="http"]:not([href*="' + n + '"]), a[href^="//"]:not([href*="' + n + '"])',
        i = [];

    function r(t) {
        var n = t.attr("rel") || ""; - 1 === n.indexOf("noopener") && (n += " noopener"), t.attr({
            target: "_blank",
            rel: n.trim()
        }), i.forEach(function(n) {
            n(t, e)
        })
    }

    function o(n) {
        n.find(t).each(function() {
            r(e(this))
        })
    }
    return {
        init: function() {
            Mntl.utilities.readyAndDeferred(o)
        },
        addPlugin: function(n) {
            n && i.push(n.processLink)
        },
        processLink: function(n) {
            n.is(t) && r(n)
        }
    }
}(window.jQuery || {});
var Lifestyle = window.Lifestyle || {};
Lifestyle.Ads = function(p, n) {
        var e = window.matchMedia("(max-width: " + window.breakpoints.medium.width + ")"),
            a = window.matchMedia("(min-width: " + window.breakpoints.medium.width + ") and (max-width: " + window.breakpoints.large2.width + ")"),
            s = window.matchMedia("(min-width: " + window.breakpoints.large2.width + ")"),
            i = window.matchMedia("(min-width: " + window.breakpoints.medium2.width + ")"),
            f = 100,
            y = 250,
            w = 1050,
            b = 600,
            u = i.matches;

        function m(t) {
            p.each(t, function(t, i) {
                var e = p(i).find(".wrapper"),
                    a = e.closest(".dynamic-inline-container"),
                    s = {},
                    i = void 0,
                    i = "native" === e.data("type") ? "native" : e.attr("id");
                return 0 < a.length && (s.dord = a.data("ordinal")), 0 < e.closest(".js-chop-ad").length && (s.chop = 1), 0 < e.closest(".js-rotating-ad").length && (s.rord = "0"), (new n.GPT.Slot).byElement(e[0], i, s)
            })
        }

        function v(t) {
            var a = [];
            p.each(t, function() {
                var t = p(this),
                    i = t.find(".wrapper"),
                    e = i[0].slotObj;
                void 0 === e ? window.debug.error("Slot does not exist for el: ", t) : (0 < i.closest(".js-lazyload-ad, .js-chop-ad, .js-rotating-ad, .js-chop-refresh").length && e.updateTargeting({
                    dload: 1
                }), 0 < i.closest(".js-chop-refresh").length && e.updateTargeting({
                    rord: 1,
                    chop: 1
                }), a.push(e))
            }), a = n.GPT.sortSlotsByPriority(a), n.GPT.displaySlots(a)
        }

        function d(t, i) {
            var n, d, e = ".billboard2-dynamic, .billboard3-dynamic, .billboard4-dynamic, .billboard5-dynamic, .billboard6-dynamic, .billboard7-dynamic",
                a = [],
                s = [],
                o = [],
                l = [],
                r = [],
                c = [],
                h = [];
            t && 0 !== t.length || i && 0 !== i.length ? (i && u && (c = i.filter(e)), t && 0 < t.length && (o = t.filter(".billboard1-dynamic"), l = t.filter(e), a = t.not(e).toArray()), h = p(p.merge(l, c)), u && (0 < h.length || 0 < o.length) ? (l = h, n = [], o = (c = p(".article__body")).outerHeight(!0), d = o + c.offset().top, c = c.find(".billboard1-dynamic"), o <= w && (c.closest(".billboard-sticky").addClass("no-stick"), void 0 !== Lifestyle.Sticky && Lifestyle.Sticky.unstickElements(c.closest(".spacer"))), l.each(function(t, i) {
                var e = p(i),
                    a = e.closest(".billboard-sticky"),
                    s = f + y,
                    i = f + b;
                d < a.offset().top + s ? e.addClass("outside-bounds") : (e.removeClass("outside-bounds"), n.push(e), e.addClass("is-rail-displayable"), a.removeClass("no-stick"), d <= a.offset().top + i && (e.hasClass("billboard2-dynamic") && e.find(".wrapper").attr("data-sizes", "[[300,250],[300,251],[2,1]]"), a.addClass("no-stick"), void 0 !== Lifestyle.Sticky && Lifestyle.Sticky.makeStillElements(e.closest(".spacer"))))
            }), r = n) : !u && 0 < h.length && (r = h.not(".js-breakpoint-view").toArray()), i && i.length && (s = (s = Lifestyle.Ads.initBreakpointHandling(i)).filter(function(t) {
                return 0 < t.not(e).length && t
            })), m(a.concat(r).concat(s)), v(a.concat(r).concat(s))) : window.debug.log("No ads provided.")
        }

        function o(t) {
            var i = [];
            p.each(t, function() {
                var t = p(this).find(".wrapper");
                void 0 !== t[0].slotObj && i.push(t[0].slotObj)
            }), n.GPT.destroySlots(i)
        }

        function l(t) {
            switch (!0) {
                case s.matches:
                    t.find(".wrapper").attr("data-sizes", t.attr("data-large-sizes") || "[[728, 90]]");
                    break;
                case a.matches:
                    t.find(".wrapper").attr("data-sizes", t.attr("data-medium-sizes") || "[[300, 250], [320, 50]]");
                    break;
                case e.matches:
                    t.find(".wrapper").attr("data-sizes", t.attr("data-small-sizes") || "[[300, 250]]");
                    break;
                default:
                    t.find(".wrapper").attr("data-sizes", "[[300, 250]]")
            }
            d(t)
        }

        function r(t) {
            var s = p(window);
            p.each(t.not(".is-loaded"), function(t, i) {
                var e = p(i),
                    a = e.data("offset") || 200,
                    i = void 0;
                e.offset().top - a < s.scrollTop() + s.height() && e.is(":visible") && (0 < (i = e.closest(".is-chopped")).length && i.offset().top + i.height() < e.offset().top || (e.is(".js-responsive-ad") ? l(e) : (0 < e.closest(".js-breakpoint-view").length ? d(null, e) : d(e), 0 < e.closest(".billboard-sticky").length && void 0 !== Lifestyle.Sticky && Lifestyle.Sticky.refreshSticky()), e.addClass("is-loaded is-requested"), e.hasClass("outside-bounds") && e.removeClass("is-loaded")))
            })
        }
        return {
            destroySlots: o,
            requestSlots: v,
            initResponsiveLeaderboards: function() {
                var i = p(".js-responsive-ad");

                function t(t) {
                    t.matches && (o(i), l(i))
                }
                e.addListener(t), a.addListener(t), s.addListener(t)
            },
            initLazyLoadingAds: function() {
                var i = p(".js-lazyload-ad"),
                    e = p(".js-post-destroy");
                r(i.filter(function(t, i) {
                    return 0 === p(i).closest(".billboard-sticky").length
                })), p(window).on("mntl.scroll", function() {
                    var t, a;
                    r(i), t = e, a = p(window), p.each(t.not(".is-destroyed"), function(t, i) {
                        var e = p(i),
                            i = e.siblings(".ad-label");
                        (e.hasClass("is-loaded") || e.hasClass("is-requested")) && e.offset().top + 1e3 < a.scrollTop() && (void 0 !== e.find(".wrapper")[0].slotObj && o(e), e.hasClass("js-keep-container") ? (e.height(e.data("ad-height") + "px"), e.width(e.data("ad-width") + "px"), e.addClass("is-destroyed"), i.addClass("ad-label--hidden")) : (e.remove(), i.remove()))
                    })
                })
            },
            initBreakpointHandling: function(o) {
                var l = [];
                return o.each(function(t, i) {
                    var e, a = p(i),
                        s = a.closest(".js-breakpoint-view"),
                        n = s.data("breakpoint"),
                        d = s.data("breakpoint-rule") || "min-width",
                        i = void 0;
                    void 0 !== n && "" !== n && (e = window.breakpoints[n].width, i = window.matchMedia("(" + d + ": " + e + ")"), a.data("isDisplayed", !1), i.matches && (s.addClass("breakpoint-view--active"), a.hasClass("is-rail-displayable") && (a.data("isDisplayed", !0), l.push(a))), i.addListener(function(t) {
                        t.matches && !a.data("isDisplayed") ? (a.data("isDisplayed", !0), s.addClass("breakpoint-view--active"), m(a), v(a)) : !t.matches && a.data("isDisplayed") && (a.data("isDisplayed", !1), Lifestyle.Ads.destroySlots(o), s.removeClass("breakpoint-view--active"))
                    }))
                }), l
            },
            resizeHandler: function() {
                var t = p(".billboard-sticky:not(.no-stick) .spacer");
                u && !i.matches && void 0 !== Lifestyle.Sticky && Lifestyle.Sticky.unstickElements(t), !u && i.matches && void 0 !== Lifestyle.Sticky && Lifestyle.Sticky.init(), u = i.matches
            },
            chopRefresh: function() {
                var t = p(".js-chop-refresh");
                0 < t.length && v(t)
            },
            dynamicChopTargeting: function() {
                return p(".dynamic-inline-container :not(.is-loaded) .wrapper").addClass("js-chop-ad")
            },
            init: d
        }
    }(window.jQuery || {}, window.Mntl || {}),
    function(e, i) {
        var t = e(".js-breakpoint-view .mntl-gpt-adunit, .js-breakpoint-view.mntl-gpt-adunit").filter(function(t, i) {
                return 0 === e(i).parents(".billboard-sticky").length
            }),
            a = window.matchMedia("(min-width: " + window.breakpoints.medium2.width + ")").matches,
            s = [];
        0 === e(".billboard-sticky").length && (s = e(".billboard.dynamic, .gpt.native.dynamic").not(".billboard-rotating").not(".js-chop-ad").not(".js-breakpoint-view.mntl-gpt-adunit").not(".js-lazyload-ad").not(".js-lazy-ad").filter(function(t, i) {
            return 0 === e(i).parents(".js-breakpoint-view").length && 0 === e(i).parents(".billboard-sticky").length
        })), Lifestyle.Ads.initBreakpointHandling(t), Lifestyle.Ads.init(s, t.not(".js-lazyload-ad")), e(window).on("load", function() {
            Lifestyle.Ads.initResponsiveLeaderboards(), Lifestyle.Ads.initLazyLoadingAds()
        }), i.GPT.registerCallback(["billboard3"], function() {
            var t = e("#adhesive");
            0 < t.closest(".js-refresh-adhesive").length && i.GPT.displaySlots([t[0].slotObj])
        }), e(".mntl-chop").on("mntl:chopOpen", function() {
            Lifestyle.Ads.init(e(".js-chop-ad").not(".js-lazyload-ad")), Lifestyle.Ads.chopRefresh(), Lifestyle.Ads.dynamicChopTargeting(), a && Lifestyle.Sticky && Lifestyle.Sticky.chopExpandHandler(e(".billboard-rotating-sticky > .spacer"))
        }), e(window).on("resize", i.throttle(Lifestyle.Ads.resizeHandler, 200))
    }(window.jQuery || {}, window.Mntl || {});
var Mntl = window.Mntl || {};
! function(o) {
    var h = o("#height-change-listener"),
        r = o(document),
        g = r.height(),
        t = Mntl.throttle(function(t) {
            var e = o.extend({}, t),
                n = r.height(),
                i = g ? n - g : 0,
                t = new CustomEvent("mntl.contentResize");
            i && (e.type = "mntl.contentResize", e.heightChange = i, e.newContentHeight = n, e.prevContentHeight = g, h.parent().trigger(e), document.dispatchEvent(t)), g = n
        }, 20);
    o(h[0].contentWindow).on("resize", t)
}(window.jQuery || {});
var Mntl = window.Mntl || {};
Mntl.Tooltip = function(t, a, l, r) {
    var d = "mntl-dynamic-tooltip",
        n = "auto",
        i = "auto",
        c = a.once(function() {
            var t = r.getElementById(d);
            t || (t = l.createEl({
                type: "DIV",
                props: {
                    id: d,
                    className: d,
                    "data-tracking-container": !0
                },
                children: []
            }), r.body.appendChild(t))
        }),
        s = t.pushToDataLayer({
            event: "mntlDynamicTooltip",
            eventCategory: "mntl-dynamic-tooltip Click",
            eventAction: "tooltip-open"
        });

    function o(t, e) {
        var n = void 0;
        return (n = e ? (t.getBoundingClientRect().left - e.getBoundingClientRect().left) / e.offsetWidth : t.getBoundingClientRect().left / window.innerWidth) < .33 ? "left" : n < .67 ? "center" : "right"
    }

    function p(t, e) {
        return (e ? (t.getBoundingClientRect().bottom - e.getBoundingClientRect().top) / e.offsetHeight : t.getBoundingClientRect().top / window.innerHeight) < .5 ? "bottom" : "top"
    }

    function u(t) {
        var e = t.closest("[data-contain-tooltips]");
        t.dataset.tooltipPositionX = "auto" === n ? o(t, e) : n, t.dataset.tooltipPositionY = "auto" === i ? p(t, e) : i
    }
    return {
        init: function(t) {
            var e = r.querySelectorAll("[data-tooltip]");
            n = a.getDeepValue(t, "defaultPositionX") || "auto", i = a.getDeepValue(t, "defaultPositionY") || "auto", a.toArray(e).forEach(u)
        },
        getTooltipPositionX: o,
        getTooltipPositionY: p,
        createDynamicTooltip: function(n, i) {
            var o = a.trimAllWhitespace(n.innerText),
                t = i.secondaryTriggerEl;

            function e() {
                var t = i.contentFactory(),
                    e = r.getElementById(d);
                e.parentNode !== n && (e = n.appendChild(e)), u(n), "string" == typeof t ? (e.innerHTML = t, a.getDeepValue(e, "firstChild", "classList") || (e.innerHTML = "", e.appendChild(l.createEl({
                    type: "DIV",
                    props: {},
                    children: [t]
                })))) : (e.innerHTML = "", e.appendChild(t)), e.firstChild.classList.add(d + "--content"), s(Object.assign({}, {
                    eventLabel: o
                }, i.tracking))
            }
            c(), n.classList.add(d + "--trigger"), n.addEventListener("mouseenter", e), t && t.addEventListener("mouseenter", e)
        }
    }
}(Mntl.utilities || {}, Mntl.fnUtilities || {}, Mntl.domUtilities || {}, window.document);
var Mntl = window.Mntl || {};
! function() {
    var t, e;
    if (Mntl.Tooltip && (t = document.getElementsByClassName("mntl-bio-tooltip")).length)
        for (e = 0; e < t.length; e++) ! function(t) {
            var e = t.closest("[data-tooltip]");
            e && (Mntl.Tooltip.createDynamicTooltip(e, {
                contentFactory: function() {
                    return t.cloneNode(!0)
                },
                tracking: {
                    event: "transmitInteractiveEvent",
                    eventCategory: "article-meta Click",
                    eventAction: "author-byline-tooltip-open",
                    eventLabel: window.location.href
                }
            }), (e = e.querySelector("[data-trigger-link]")) && e.addEventListener("click", function(t) {
                t.preventDefault()
            }))
        }(t[e])
}();
var Mntl = window.Mntl || {};
Mntl.SocialShare = function(n, e) {
    var a, o = n.getDomain();

    function i(t) {
        return 80 < t.length ? t.substring(0, 80) + ".." : t
    }

    function r(t) {
        var e = t.dataset.network.toUpperCase();
        return e in a ? a[e](t.closest(".mntl-social-share"), t) : ""
    }

    function d(t) {
        var e = t.dataset.href; - 1 !== e.indexOf(o) && (-1 === e.indexOf("?") || e.indexOf(o) < e.indexOf("?")) ? window.location = r(t) : (t.classList.contains("share-link-pinterest") && -1 === e.indexOf("&media=") && document.querySelector('meta[property="og:image"]') && (e += "&media=" + encodeURIComponent(document.querySelector('meta[property="og:image"]').getAttribute("content"))), n.openWindow(e))
    }
    return a = {
        WHATSAPP: function(t, e) {
            e = t.dataset.whatsappBody || i(t.dataset.title) + " " + e.dataset.href;
            return "whatsapp://send?text=" + encodeURIComponent(e)
        },
        SMS: function(t, e) {
            var n = /iPad|iPhone|iPod/.test(navigator.userAgent) ? "&" : "?",
                e = t.dataset.smsBody || i(t.dataset.title) + " " + e.dataset.href;
            return "sms:" + n + "body=" + encodeURIComponent(e)
        },
        EMAILSHARE: function(t, e) {
            var n = t.dataset.emailSubject || "Shared from " + o + ": " + i(t.dataset.title),
                e = t.dataset.emailBody || t.dataset.description + " Read More: " + e.dataset.href;
            return "mailto:?subject=" + encodeURIComponent(n) + "&body=" + encodeURIComponent(e)
        }
    }, {
        init: function(t) {
            (t instanceof window.jQuery ? t[0] : t).addEventListener("click", function(t) {
                e.of(t.target.classList.contains("share-link") ? t.target : t.target.closest("share-link")).map(d)
            })
        },
        buildNonHttpShareUrl: r
    }
}(window.Mntl.utilities || {}, window.Mntl.Maybe || {}), Mntl.utilities.readyAndDeferred(Mntl.SocialShare.init);
(function() {
    var A = this.jQuery || window.jQuery,
        j = A(window);
    A.fn.stick_in_parent = function(t) {
        var _, i, s, o, e, r, x = (t = null == t ? {} : t).sticky_class,
            P = t.inner_scrolling,
            V = t.recalc_every,
            F = t.parent,
            C = t.offset_top,
            z = t.spacer,
            I = t.bottoming;
        for (null == C && (C = 0), null == F && (F = void 0), null == P && (P = !0), null == x && (x = "is_stuck"), _ = A(document), null == I && (I = !0), s = function(t) {
                var i, o;
                return window.getComputedStyle ? (t[0], i = window.getComputedStyle(t[0]), o = parseFloat(i.getPropertyValue("width")) + parseFloat(i.getPropertyValue("margin-left")) + parseFloat(i.getPropertyValue("margin-right")), "border-box" !== i.getPropertyValue("box-sizing") && (o += parseFloat(i.getPropertyValue("border-left-width")) + parseFloat(i.getPropertyValue("border-right-width")) + parseFloat(i.getPropertyValue("padding-left")) + parseFloat(i.getPropertyValue("padding-right"))), o) : t.outerWidth(!0)
            }, o = function(r, n, l, a, c, p, d, u) {
                var f, t, h, g, y, k, m, v, i, b, w, e;
                if (!r.data("sticky_kit")) {
                    if (r.data("sticky_kit", !0), y = _.height(), m = r.parent(), !(m = null != F ? m.closest(F) : m).length) throw "failed to find stick parent";
                    if (f = h = !1, (w = null != z ? z && r.closest(z) : A("<div />")) && w.css("position", r.css("position")), (v = function() {
                            var t, i, o;
                            if (!u) return y = _.height(), t = parseInt(m.css("border-top-width"), 10), i = parseInt(m.css("padding-top"), 10), n = parseInt(m.css("padding-bottom"), 10), l = m.offset().top + t + i, a = m.height(), h && (f = h = !1, null == z && (r.insertAfter(w), w.detach()), r.css({
                                position: "",
                                top: "",
                                width: "",
                                bottom: ""
                            }).removeClass(x), o = !0), c = r.offset().top - (parseInt(r.css("margin-top"), 10) || 0) - C, p = r.outerHeight(!0), d = r.css("float"), w && w.css({
                                width: s(r),
                                height: p,
                                display: r.css("display"),
                                "vertical-align": r.css("vertical-align"),
                                float: d
                            }), o ? e() : void 0
                        })(), p !== a) return g = void 0, k = C, b = V, e = function() {
                        var t, i, o, e, s;
                        if (!u) return o = !1, null != b && --b <= 0 && (b = V, v(), o = !0), o || _.height() === y || (v(), o = !0), o = j.scrollTop(), null != g && (i = o - g), g = o, h ? (I && (e = a + l < o + p + k, f && !e && (f = !1, r.css({
                            position: "fixed",
                            bottom: "",
                            top: k
                        }).trigger("sticky_kit:unbottom"))), o < c && (h = !1, k = C, null == z && ("left" !== d && "right" !== d || r.insertAfter(w), w.detach()), t = {
                            position: "",
                            width: "",
                            top: ""
                        }, r.css(t).removeClass(x).trigger("sticky_kit:unstick")), P && (s = j.height()) < p + C && (f || (k -= i, k = Math.max(s - p, k), k = Math.min(C, k), h && r.css({
                            top: k + "px"
                        })))) : c < o && (h = !0, (t = {
                            position: "fixed",
                            top: k
                        }).width = "border-box" === r.css("box-sizing") ? r.outerWidth() + "px" : r.width() + "px", r.css(t).addClass(x), null == z && (r.after(w), "left" !== d && "right" !== d || w.append(r)), r.trigger("sticky_kit:stick")), h && I && (null == e && (e = a + l < o + p + k), !f && e) ? (f = !0, "static" === m.css("position") && m.css({
                            position: "relative"
                        }), r.css({
                            position: "absolute",
                            bottom: n,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")) : void 0
                    }, i = function() {
                        return v(), e()
                    }, t = function() {
                        if (u = !0, j.off("touchmove", e), j.off("scroll", e), j.off("resize", i), A(document.body).off("sticky_kit:recalc", i), r.off("sticky_kit:detach", t), r.removeData("sticky_kit"), r.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), m.position("position", ""), h) return null == z && ("left" !== d && "right" !== d || r.insertAfter(w), w.remove()), r.removeClass(x)
                    }, j.on("touchmove", e), j.on("scroll", e), j.on("resize", i), A(document.body).on("sticky_kit:recalc", i), r.on("sticky_kit:detach", t), setTimeout(e, 0)
                }
            }, e = 0, r = this.length; e < r; e++) i = this[e], o(A(i));
        return this
    }
}).call(this);
var Mntl = window.Mntl || {};
Mntl.LazyAds = function(e) {
    var n, l, o, i, s = e(window),
        a = e("body"),
        d = e("html").data("lazy-offset") || 200,
        r = 0,
        f = [],
        p = [],
        u = !1,
        c = e(".mntl-chop");

    function m(t, n) {
        return t.adTop = t.adTop || e(t).offset().top, n.adTop = n.adTop || e(n).offset().top, t.adTop === n.adTop ? 0 : t.adTop < n.adTop ? -1 : 1
    }

    function h() {
        return f.length && ((p = e(f.splice(0, 1))).slotOffset = parseInt(p.data("offset"), 10), n = p.offset().top, 1)
    }

    function T(t) {
        0 < p.length && !p.hasClass("is-requested") && (Mntl.utilities.isElementVisibleY(p, "", d) || t.scrollTop >= n) && (t = p.data("targeting") || {}, l = p.data("is-dynamic") || !1, o = p.find(".wrapper")[0], i = l ? o.id + r : null, l && (t.dord = ++r), i = (new Mntl.GPT.Slot).byElement(o, i, t), p.addClass("is-requested"), Mntl.GPT.displaySlots([i]), h() || (s.off("mntl.scroll", T), u = !(p = [])))
    }

    function g() {
        var t, n;
        t = (t = a).find(".js-lazy-ad").not(".is-requested"), n = 0 < c.length ? c.offset().top + c.height() : 0, t.length && (f = e.uniqueSort(e.makeArray(e.merge(e.merge(f, t), p))).filter(function(t) {
            return null === t.closest(".is-chopped") || n > e(t).offset().top
        }).sort(m)).forEach(function(t) {
            delete t.adTop
        }), h(), !u && p.length && (s.on("mntl.scroll", T), u = !0)
    }
    return a.on("mntl.contentResize", g), 0 < c.length && s.on("mntl.scroll", function t() {
        Mntl.utilities.isElementVisibleY(c) && (g(), s.off("mntl.scroll", t))
    }), {
        init: g
    }
}(window.jQuery || {}), Mntl.utilities.readyAndDeferred(Mntl.LazyAds.init);
! function(o) {
    var n, i = void 0 === document.body.msMatchesSelector ? "matches" : "msMatchesSelector",
        s = {
            attributes: !0,
            subtree: !0,
            attributesFilter: ["style"]
        },
        d = {
            "970x90": "10x1",
            "728x90": "8x1",
            "970x250": "4x1",
            "300x250": "1x1"
        };

    function c(e) {
        e.removeAttribute("style"), e.removeAttribute("width"), e.removeAttribute("height"), delete e.dataset.speclessAd, delete e.dataset.specless
    }
    n = new MutationObserver(function(e) {
        e.forEach(function(e) {
            c(e.target)
        })
    }), window.addEventListener("message", function(e) {
        var t, a, r = {};
        "string" == typeof(a = e).data || !a.data.hasOwnProperty("ratio") || (t = function(e) {
            var t, a, r = document.getElementsByTagName("IFRAME"),
                o = e.source,
                n = 0,
                i = r.length;
            if (e.source.frameElement) return window.debug.log("found frame on the event:", e.source.frameElement), e.source.frameElement;
            for (; o = (a = o).parent, o !== window && null !== o;);
            for (; n < i; n++)
                if (window.debug.log("iframes[i].contentWindow", r[n].contentWindow, "event.source", e.source), r[n].contentWindow === a) {
                    t = r[n];
                    break
                } return t || null
        }(e)) && t[i](".mntl-flexible-ad iframe") && (a = e.data.ratio.toString().replace(/[^\dx]/g, ""), r.iabcAspect = d[a] || a, r.iabContainer = "true" === t.dataset.isSafeframe ? "sf-flex" : "flex", o.setDataAttrs(r, t.parentNode), a = t, o.setDataAttrs({
            adHeight: "flex",
            adWidth: "flex"
        }, a.closest("[data-ad-height][data-ad-width]")), [t, t.parentNode, t.parentNode.parentNode].forEach(c), n.observe(t.parentNode.parentNode, s), e.source.postMessage({
            "ratio-set": t.id
        }, e.origin), window.debug.log(["Flexible Ad Success: data attribute ratio set to:", r.iabcAspect, "for frame id:", t.id].join(" ")))
    }, !1)
}(window.Mntl.domUtilities || {});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function(t) {
    var l, u, f, e = (l = t, u = "justified-columns-wrapper", f = void 0 === document.documentElement.style.objectFit, o.prototype.setGrid = function(t) {
        this.grid = "string" == typeof t ? document.querySelector(t) : t.jquery ? t[0] : t
    }, o.prototype.justify = function() {
        var o, e, i, d = this,
            s = Math[this.shrink ? "min" : "max"],
            r = [],
            n = -1,
            h = this.shrink ? Number.POSITIVE_INFINITY : 0;
        [].slice.call(this.grid.children).forEach(function(t) {
            var e = l.getComputedStyle(t),
                i = t.offsetLeft;
            i !== o && (-1 !== n && (h = s(r[n].height, h)), n++, o = i, r.push({
                items: [],
                height: a(e.getPropertyValue("margin-top")),
                totalImagesHeight: 0
            })), t.stretchable = t.querySelector(d.stretchSelector), t.stretchable && (t.stretchableHeight = t.stretchable.offsetHeight), r[n].items.push(t), r[n].height += t.offsetHeight + a(e.getPropertyValue("margin-bottom")), r[n].totalImagesHeight += t.stretchableHeight || 0
        }), h = s(r[n].height, h), r.forEach(function(l, t) {
            var a, c;
            (l.height < h || d.shrink && l.height > h) && (a = h - l.height, c = 0, l.items.forEach(function(t, e) {
                var i, o, s, r, n, h = t.querySelector(d.stretchSelector);
                h && (r = a / l.totalImagesHeight, i = t.stretchableHeight * r, o = t.stretchableHeight + i, s = (d.shrink ? "max" : "min") + "Height", "IMG" !== h.nodeName ? h.style[s] = o + "px" : f ? (h.parentNode.className !== u && ((r = document.createElement("DIV")).className = u, r.style.overflow = "hidden", r.style.fontSize = 0, r.style[s] = o + "px", h.parentNode.replaceChild(r, h), r.appendChild(h)), d.shrink ? (n = .5 * (o - t.stretchableHeight), h.style.marginTop = n + "px", h.style.marginBottom = -1 * n + "px") : (t = (n = h.offsetWidth) * (o / t.stretchableHeight), h.style.minHeight = o + "px", h.style.minWidth = t + "px", h.style.marginLeft = -.5 * (t - n) + "px")) : (h.style[s] = o + "px", h.style.objectFit = "cover", h.style.objectPosition = "center"), c += i)
            }), l.height += c, l.totalImagesHeight += c)
        }), f && (e = h + 2, "border-box" === (i = getComputedStyle(this.grid)).boxSizing && ["paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth"].forEach(function(t) {
            e += a(i[t])
        }), 2 <= Math.abs(this.grid.offsetHeight - e) && (this.grid.style.height = e + "px"))
    }, o.prototype.reset = function() {
        [].slice.call(this.grid.querySelectorAll(this.stretchSelector)).forEach(function(t) {
            t.style.maxHeight = "", t.style.minHeight = "", f ? (t.style.minWidth = "", t.style.marginLeft = "", t.style.marginTop = "") : (t.style.objectFit = "", t.style.objectPosition = "")
        }), f && ([].slice.call(this.grid.getElementsByClassName(u)).forEach(function(t) {
            t.parentNode.replaceChild(t.firstChild, t)
        }), this.grid.style.height = "")
    }, o.prototype.enable = function() {
        this.autoResize && (l.addEventListener("resize", this.boundReset), l.addEventListener("resize", this.boundJustify)), this.justify()
    }, o.prototype.disable = function() {
        this.autoResize && (l.removeEventListener("resize", this.boundReset), l.removeEventListener("resize", this.boundJustify)), this.reset()
    }, o);

    function a(t) {
        return +t.split("px")[0]
    }

    function i(o, s, r) {
        var n, h;
        return s = s || 250,
            function() {
                var t = r || this,
                    e = +new Date,
                    i = arguments;
                n && e < n + s ? (clearTimeout(h), h = setTimeout(function() {
                    n = e, o.apply(t, i)
                }, s)) : (n = e, o.apply(t, i))
            }
    }

    function o(t) {
        this.setGrid(t.grid || t), this.stretchSelector = t.stretch || "img", this.shrink = t.shrink || !1, this.autoResize = !t.hasOwnProperty("autoResize") || t.autoResize, (this.grid.JustifiedColumns = this).boundReset = 0 === t.throttle ? this.reset.bind(this) : i(this.reset.bind(this), t.throttle || 25), this.boundJustify = 0 === t.throttle ? this.justify.bind(this) : i(this.justify.bind(this), t.throttle || 25), this.enable()
    }
    "function" == typeof define && define.amd ? define([], function() {
        return e
    }) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = e : t.JustifiedColumns = e
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this);
var Mntl = window.Mntl || {};
Mntl.MasonryList = function(l, u) {
    var d = document.createElement("IMG").msMatchesSelector ? "msMatchesSelector" : "matches";

    function s(t, n) {
        var i, e, o, a = (i = t.length, e = n, o = 0, function() {
            ++o === i && new l.JustifiedColumns(e)
        });
        t.each(function(t, n) {
            n.complete && void 0 !== n.naturalWidth ? a() : u(n).one("load error", a)
        })
    }

    function i(t, n) {
        var i, e = t.find("img"),
            o = u.extend({
                grid: t,
                stretch: "img",
                shrink: !1
            }, n || {}),
            a = n && o.shrink && e[0][d](o.stretch) ? "maxHeight" : "height",
            r = (i = e.length ? e[0].offsetWidth : 0, function(t) {
                return [i / t, "px"].join("")
            });
        e.each(function(t, n) {
            var i = n.getAttribute("data-dim-ratio") || 1;
            n.style[a] = r(i)
        }), n && l.getComputedStyle(t[0]).columnCount && Mntl.utilities.onFontLoad(function(t, n) {
            0 === t.length || -1 === l.navigator.userAgent.indexOf("Trident") ? new l.JustifiedColumns(n) : s(t, n)
        }.bind(null, e, o))
    }
    return {
        init: function(t, n) {
            t.data("masonry-list-initialized") || i(t, n), t.data("masonry-list-initialized", !0)
        }
    }
}(window, window.jQuery || {});
var Mntl = window.Mntl || {};
Mntl.Ratings = function(i) {
    var t = !1;
    return {
        init: function(n) {
            t || (t = !0, document.addEventListener("mntlRatingUpdate", function(t) {
                t.stopPropagation();
                var e = t.detail;
                window.debug.log("Attempting UGC rating update", e.type, e.rating, e.docId), i.ajaxPromisePost("/ugc-rating", e, 1e3).then(function() {
                    var t = new CustomEvent("mntlRatingUpdateSuccess", {
                        detail: e
                    });
                    window.debug.log("Successful UGC rating update", e.type, e.rating, e.docId), document.dispatchEvent(t), n.trigger("mntlRatingUpdateSuccess", [e.type, e.rating, e.docId])
                }).catch(function(t) {
                    var n = new CustomEvent("mntlRatingUpdateError", {
                        detail: e
                    });
                    window.debug.error("Error while attempting UGC rating update", t), document.dispatchEvent(n)
                })
            }))
        }
    }
}(window.Mntl.utilities || {}), Mntl.utilities.readyAndDeferred(Mntl.Ratings.init);
var Lifestyle = window.Lifestyle || {};
Lifestyle.Header = function(t) {
    var r = t(".header"),
        d = t(".article"),
        e = t(window),
        o = t("html"),
        s = r.find("#search-form-input"),
        n = r.find(".js-search-target"),
        i = t(".js-menu-target").add(n),
        a = window.matchMedia("(min-width: " + window.breakpoints.medium2.width + ")"),
        c = window.matchMedia("(min-width: " + window.breakpoints.medium.width + ")"),
        l = 0 < t(".journey-child").length ? 600 : 10,
        h = 0;

    function u() {
        return n.hasClass("is-active")
    }

    function f() {
        i.toggleClass("is-active"), o.toggleClass("is-noscroll"), n.scrollTop(0), u() && a.matches ? s.focus() : s.blur()
    }

    function m(e, o, s) {
        var n = e.scrollTop < h,
            i = r.hasClass("is-active"),
            a = c.matches ? d.offset().top : r.height() + t(o).height(),
            l = void 0;
        n || (a = c.matches ? d.offset().top : r.height() + t(o).height(), l = e.scrollTop > h && 0 <= h && e.scrollTop > a), l && !i ? r.addClass(s) : n && r.removeClass(s), h = e.scrollTop
    }
    return t(".js-menu-trigger").on("click", f), t(".js-close-nav").on("click", function() {
        i.removeClass("is-active"), o.removeClass("is-noscroll")
    }), e.on("keyup", function(e) {
        27 === e.keyCode && u() && f()
    }), e.scrollTop() > l && r.toggleClass("header--condensed"), e.on("mntl.scroll", function(e) {
        var o = r.hasClass("header--condensed");
        o && 10 < e.scrollTop || !o && e.scrollTop < l || r.toggleClass("header--condensed")
    }), {
        handleAnchorHeaderDisplay: function(e) {
            m(e, ".anchor-nav", "header--hidden")
        },
        handleJourneyHeaderDisplay: function(e) {
            m(e, ".journey-nav", "header--hidden")
        }
    }
}(window.jQuery || {});
! function(e) {
    var t = document.querySelector(".general-search"),
        s = t.querySelectorAll(".js-toggle-search-open"),
        i = t.querySelector(".js-search-button"),
        n = t.querySelector(".general-search__input"),
        a = document.querySelector(".header__inner .logo"),
        c = window.matchMedia("(max-width: " + window.breakpoints.medium.width + ")");
    i.addEventListener("click", function() {
        this.parentElement.classList.contains("is-expanded") && t.submit()
    }), e.fnUtilities.toArray(s).forEach(function(e) {
        e.addEventListener("click", function() {
            this.classList.contains("is-expanded") ? (this.classList.remove("is-expanded"), c.matches && a.classList.remove("is-hidden"), n.blur()) : (this.classList.add("is-expanded"), c.matches && a.classList.add("is-hidden"), n.focus())
        }.bind(e.parentElement))
    })
}(window.Mntl || {});
! function() {
    var i = Array.prototype.slice.call(document.querySelectorAll(".js-global-nav-item")),
        e = window.matchMedia("(min-width: " + window.breakpoints.large.width + ")");

    function t(t) {
        i.forEach(function(i) {
            t.matches ? i.classList.remove("is-disabled") : i.classList.add("is-disabled")
        })
    }
    i.forEach(function(t) {
        t.addEventListener("click", function() {
            e.matches || (i.filter(function(i) {
                return i !== t
            }).forEach(function(i) {
                i.classList.remove("is-active")
            }), this.classList.toggle("is-active"))
        })
    }), e.addListener(t), t({
        matches: e.matches
    })
}();
! function(e, t) {
    var a, n = e(".mntl-leaderboard-header"),
        o = e(window),
        r = n.next(".js-rollaway-spacer"),
        d = n.data("collapse-point") || 1,
        e = (e = n.data("timeout")) ? parseInt(e.replace(/[^0-9]/g, ""), 10) : 5e3,
        i = !1,
        l = !1;

    function s() {
        i = !0, n.addClass("not-sticky").removeClass("is-collapsed")
    }

    function c() {
        l = !0, o.scrollTop() > d && !i ? n.addClass("is-collapsed") : s()
    }

    function u(e) {
        "leaderboard" === e.slot.getSlotElementId() && c()
    }
    n.length && (a = new MutationObserver(function(e) {
        r.attr(e.reduce(function(e, t) {
            return e[t.attributeName] = t.target.getAttribute(t.attributeName), e
        }, {}))
    }), n.one("adRendered", function(e) {
        window.debug.log("$leaderboard adRendered", e), a.observe(e.target.firstElementChild, {
            attributes: !0,
            attributeFilter: ["data-iabc-aspect", "data-iab-container"]
        })
    }), o.on("mntl.scroll", function e(t) {
        l && t.scrollTop < d && (s(), o.off("mntl.scroll", window, e))
    }), t.cmd.push(function() {
        t.pubads().addEventListener("impressionViewable", u)
    }), setTimeout(c, e))
}(window.jQuery || {}, window.googletag || {});
! function(e) {
    e(".newsletter-signup").on("submit-success", function() {
        var s = e(this).closest(".js-nl-container"),
            n = s.find(".js-nl-title"),
            t = s.find(".js-nl-subtitle"),
            i = s.find(".mntl-newsletter-submit__input").val();
        n.text().trim().length && n.text("You're in!"), t.text(["Thank you ", i, " for signing up."].join("")), s.removeClass("is-error").addClass("is-success")
    }).on("submit-error", function() {
        e(this).closest(".js-nl-container").addClass("is-error")
    })
}(window.jQuery || {});
var Mntl = window.Mntl || {};
Mntl.Newsletter = function(n) {
    return {
        init: function(t) {
            (t = t.find(".mntl-newsletter-signup")).length && t.each(function() {
                n(this).on("submit", function(t) {
                    var e = n(this),
                        s = "is-submit-success",
                        i = "is-submit-error";
                    t.preventDefault(), n.ajax({
                        url: e.attr("action"),
                        method: e.attr("method"),
                        data: e.serialize(),
                        success: function() {
                            e.addClass(s).removeClass(i).trigger("submit-success")
                        },
                        error: function() {
                            e.addClass(i).removeClass(s).trigger("submit-error")
                        }
                    })
                })
            })
        }
    }
}(window.jQuery || {}), Mntl.utilities.readyAndDeferred(Mntl.Newsletter.init);