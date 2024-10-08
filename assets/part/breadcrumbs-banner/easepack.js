/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function (t) {
            var e,
                i,
                s,
                r = _gsScope.GreenSockGlobals || _gsScope,
                n = r.com.greensock,
                a = 2 * Math.PI,
                o = Math.PI / 2,
                h = n._class,
                l = function (e, i) {
                    var s = h("easing." + e, function () {}, !0),
                        r = (s.prototype = new t());
                    return (r.constructor = s), (r.getRatio = i), s;
                },
                _ = t.register || function () {},
                u = function (t, e, i, s) {
                    var r = h("easing." + t, { easeOut: new e(), easeIn: new i(), easeInOut: new s() }, !0);
                    return _(r, t), r;
                },
                c = function (t, e, i) {
                    (this.t = t), (this.v = e), i && ((this.next = i), (i.prev = this), (this.c = i.v - e), (this.gap = i.t - t));
                },
                p = function (e, i) {
                    var s = h(
                            "easing." + e,
                            function (t) {
                                (this._p1 = t || 0 === t ? t : 1.70158), (this._p2 = 1.525 * this._p1);
                            },
                            !0
                        ),
                        r = (s.prototype = new t());
                    return (
                        (r.constructor = s),
                        (r.getRatio = i),
                        (r.config = function (t) {
                            return new s(t);
                        }),
                        s
                    );
                },
                f = u(
                    "Back",
                    p("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                    }),
                    p("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1);
                    }),
                    p("BackInOut", function (t) {
                        return 1 > (t *= 2) ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                    })
                ),
                m = h(
                    "easing.SlowMo",
                    function (t, e, i) {
                        (e = e || 0 === e ? e : 0.7), null == t ? (t = 0.7) : t > 1 && (t = 1), (this._p = 1 !== t ? e : 0), (this._p1 = (1 - t) / 2), (this._p2 = t), (this._p3 = this._p1 + this._p2), (this._calcEnd = i === !0);
                    },
                    !0
                ),
                d = (m.prototype = new t());
            return (
                (d.constructor = m),
                (d.getRatio = function (t) {
                    var e = t + (0.5 - t) * this._p;
                    return this._p1 > t
                        ? this._calcEnd
                            ? 1 - (t = 1 - t / this._p1) * t
                            : e - (t = 1 - t / this._p1) * t * t * t * e
                        : t > this._p3
                        ? this._calcEnd
                            ? 1 - (t = (t - this._p3) / this._p1) * t
                            : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                        : this._calcEnd
                        ? 1
                        : e;
                }),
                (m.ease = new m(0.7, 0.7)),
                (d.config = m.config = function (t, e, i) {
                    return new m(t, e, i);
                }),
                (e = h(
                    "easing.SteppedEase",
                    function (t) {
                        (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
                    },
                    !0
                )),
                (d = e.prototype = new t()),
                (d.constructor = e),
                (d.getRatio = function (t) {
                    return 0 > t ? (t = 0) : t >= 1 && (t = 0.999999999), ((this._p2 * t) >> 0) * this._p1;
                }),
                (d.config = e.config = function (t) {
                    return new e(t);
                }),
                (i = h(
                    "easing.RoughEase",
                    function (e) {
                        e = e || {};
                        for (
                            var i,
                                s,
                                r,
                                n,
                                a,
                                o,
                                h = e.taper || "none",
                                l = [],
                                _ = 0,
                                u = 0 | (e.points || 20),
                                p = u,
                                f = e.randomize !== !1,
                                m = e.clamp === !0,
                                d = e.template instanceof t ? e.template : null,
                                g = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                            --p > -1;

                        )
                            (i = f ? Math.random() : (1 / u) * p),
                                (s = d ? d.getRatio(i) : i),
                                "none" === h ? (r = g) : "out" === h ? ((n = 1 - i), (r = n * n * g)) : "in" === h ? (r = i * i * g) : 0.5 > i ? ((n = 2 * i), (r = 0.5 * n * n * g)) : ((n = 2 * (1 - i)), (r = 0.5 * n * n * g)),
                                f ? (s += Math.random() * r - 0.5 * r) : p % 2 ? (s += 0.5 * r) : (s -= 0.5 * r),
                                m && (s > 1 ? (s = 1) : 0 > s && (s = 0)),
                                (l[_++] = { x: i, y: s });
                        for (
                            l.sort(function (t, e) {
                                return t.x - e.x;
                            }),
                                o = new c(1, 1, null),
                                p = u;
                            --p > -1;

                        )
                            (a = l[p]), (o = new c(a.x, a.y, o));
                        this._prev = new c(0, 0, 0 !== o.t ? o : o.next);
                    },
                    !0
                )),
                (d = i.prototype = new t()),
                (d.constructor = i),
                (d.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t; ) e = e.next;
                        e = e.prev;
                    } else for (; e.prev && e.t >= t; ) e = e.prev;
                    return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
                }),
                (d.config = function (t) {
                    return new i(t);
                }),
                (i.ease = new i()),
                u(
                    "Bounce",
                    l("BounceOut", function (t) {
                        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                    }),
                    l("BounceIn", function (t) {
                        return 1 / 2.75 > (t = 1 - t)
                            ? 1 - 7.5625 * t * t
                            : 2 / 2.75 > t
                            ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                            : 2.5 / 2.75 > t
                            ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                            : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                    }),
                    l("BounceInOut", function (t) {
                        var e = 0.5 > t;
                        return (
                            (t = e ? 1 - 2 * t : 2 * t - 1),
                            (t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                            e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                        );
                    })
                ),
                u(
                    "Circ",
                    l("CircOut", function (t) {
                        return Math.sqrt(1 - (t -= 1) * t);
                    }),
                    l("CircIn", function (t) {
                        return -(Math.sqrt(1 - t * t) - 1);
                    }),
                    l("CircInOut", function (t) {
                        return 1 > (t *= 2) ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                    })
                ),
                (s = function (e, i, s) {
                    var r = h(
                            "easing." + e,
                            function (t, e) {
                                (this._p1 = t || 1), (this._p2 = e || s), (this._p3 = (this._p2 / a) * (Math.asin(1 / this._p1) || 0));
                            },
                            !0
                        ),
                        n = (r.prototype = new t());
                    return (
                        (n.constructor = r),
                        (n.getRatio = i),
                        (n.config = function (t, e) {
                            return new r(t, e);
                        }),
                        r
                    );
                }),
                u(
                    "Elastic",
                    s(
                        "ElasticOut",
                        function (t) {
                            return this._p1 * Math.pow(2, -10 * t) * Math.sin(((t - this._p3) * a) / this._p2) + 1;
                        },
                        0.3
                    ),
                    s(
                        "ElasticIn",
                        function (t) {
                            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - this._p3) * a) / this._p2));
                        },
                        0.3
                    ),
                    s(
                        "ElasticInOut",
                        function (t) {
                            return 1 > (t *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - this._p3) * a) / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - this._p3) * a) / this._p2) + 1;
                        },
                        0.45
                    )
                ),
                u(
                    "Expo",
                    l("ExpoOut", function (t) {
                        return 1 - Math.pow(2, -10 * t);
                    }),
                    l("ExpoIn", function (t) {
                        return Math.pow(2, 10 * (t - 1)) - 0.001;
                    }),
                    l("ExpoInOut", function (t) {
                        return 1 > (t *= 2) ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                    })
                ),
                u(
                    "Sine",
                    l("SineOut", function (t) {
                        return Math.sin(t * o);
                    }),
                    l("SineIn", function (t) {
                        return -Math.cos(t * o) + 1;
                    }),
                    l("SineInOut", function (t) {
                        return -0.5 * (Math.cos(Math.PI * t) - 1);
                    })
                ),
                h(
                    "easing.EaseLookup",
                    {
                        find: function (e) {
                            return t.map[e];
                        },
                    },
                    !0
                ),
                _(r.SlowMo, "SlowMo", "ease,"),
                _(i, "RoughEase", "ease,"),
                _(e, "SteppedEase", "ease,"),
                f
            );
        },
        !0
    );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()();

