(() => {
  // ../../workspace/compiler-tools/node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p = {};
  var v = [];
  var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var d = Array.isArray;
  function w(n2, l3) {
    for (var u4 in l3) n2[u4] = l3[u4];
    return n2;
  }
  function g(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l3, u4, t3) {
    var i3, r3, o3, e3 = {};
    for (o3 in u4) "key" == o3 ? i3 = u4[o3] : "ref" == o3 ? r3 = u4[o3] : e3[o3] = u4[o3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
    return m(l3, e3, i3, r3, null);
  }
  function m(n2, t3, i3, r3, o3) {
    var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
    return null == o3 && null != l.vnode && l.vnode(e3), e3;
  }
  function k(n2) {
    return n2.children;
  }
  function x(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function S(n2, l3) {
    if (null == l3) return n2.__ ? S(n2.__, n2.__i + 1) : null;
    for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
    return "function" == typeof n2.type ? S(n2) : null;
  }
  function C(n2) {
    if (n2.__P && n2.__d) {
      var u4 = n2.__v, t3 = u4.__e, i3 = [], r3 = [], o3 = w({}, u4);
      o3.__v = u4.__v + 1, l.vnode && l.vnode(o3), z(n2.__P, o3, u4, n2.__n, n2.__P.namespaceURI, 32 & u4.__u ? [t3] : null, i3, null == t3 ? S(u4) : t3, !!(32 & u4.__u), r3), o3.__v = u4.__v, o3.__.__k[o3.__i] = o3, V(i3, o3, r3), u4.__e = u4.__ = null, o3.__e != t3 && M(o3);
    }
  }
  function M(n2) {
    if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l3) {
      if (null != l3 && null != l3.__e) return n2.__e = n2.__c.base = l3.__e;
    }), M(n2);
  }
  function $(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !I.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(I);
  }
  function I() {
    for (var n2, l3 = 1; i.length; ) i.length > l3 && i.sort(e), n2 = i.shift(), l3 = i.length, C(n2);
    I.__r = 0;
  }
  function P(n2, l3, u4, t3, i3, r3, o3, e3, f4, c3, s3) {
    var a3, h3, y2, d3, w3, g2, _2, m3 = t3 && t3.__k || v, b = l3.length;
    for (f4 = A(u4, l3, m3, f4, b), a3 = 0; a3 < b; a3++) null != (y2 = u4.__k[a3]) && (h3 = -1 != y2.__i && m3[y2.__i] || p, y2.__i = a3, g2 = z(n2, y2, h3, i3, r3, o3, e3, f4, c3, s3), d3 = y2.__e, y2.ref && h3.ref != y2.ref && (h3.ref && D(h3.ref, null, y2), s3.push(y2.ref, y2.__c || d3, y2)), null == w3 && null != d3 && (w3 = d3), (_2 = !!(4 & y2.__u)) || h3.__k === y2.__k ? f4 = H(y2, f4, n2, _2) : "function" == typeof y2.type && void 0 !== g2 ? f4 = g2 : d3 && (f4 = d3.nextSibling), y2.__u &= -7);
    return u4.__e = w3, f4;
  }
  function A(n2, l3, u4, t3, i3) {
    var r3, o3, e3, f4, c3, s3 = u4.length, a3 = s3, h3 = 0;
    for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? ("string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? o3 = n2.__k[r3] = m(null, o3, null, null, null) : d(o3) ? o3 = n2.__k[r3] = m(k, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? o3 = n2.__k[r3] = m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : n2.__k[r3] = o3, f4 = r3 + h3, o3.__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c3 = o3.__i = T(o3, u4, f4, a3)) && (a3--, (e3 = u4[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
    if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = S(e3)), E(e3, e3));
    return t3;
  }
  function H(n2, l3, u4, t3) {
    var i3, r3;
    if ("function" == typeof n2.type) {
      for (i3 = n2.__k, r3 = 0; i3 && r3 < i3.length; r3++) i3[r3] && (i3[r3].__ = n2, l3 = H(i3[r3], l3, u4, t3));
      return l3;
    }
    n2.__e != l3 && (t3 && (l3 && n2.type && !l3.parentNode && (l3 = S(n2)), u4.insertBefore(n2.__e, l3 || null)), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function T(n2, l3, u4, t3) {
    var i3, r3, o3, e3 = n2.key, f4 = n2.type, c3 = l3[u4], s3 = null != c3 && 0 == (2 & c3.__u);
    if (null === c3 && null == e3 || s3 && e3 == c3.key && f4 == c3.type) return u4;
    if (t3 > (s3 ? 1 : 0)) {
      for (i3 = u4 - 1, r3 = u4 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f4 == c3.type) return o3;
    }
    return -1;
  }
  function j(n2, l3, u4) {
    "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || y.test(l3) ? u4 : u4 + "px";
  }
  function F(n2, l3, u4, t3, i3) {
    var r3, o3;
    n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || j(n2.style, l3, "");
      if (u4) for (l3 in u4) t3 && u4[l3] == t3[l3] || j(n2.style, l3, u4[l3]);
    }
    else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u4 ? "" : u4;
        break n;
      } catch (n3) {
      }
      "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
    }
  }
  function O(n2) {
    return function(u4) {
      if (this.l) {
        var t3 = this.l[u4.type + n2];
        if (null == u4.t) u4.t = c++;
        else if (u4.t < t3.u) return;
        return t3(l.event ? l.event(u4) : u4);
      }
    };
  }
  function z(n2, u4, t3, i3, r3, o3, e3, f4, c3, s3) {
    var a3, h3, p3, y2, _2, m3, b, S3, C2, M2, $2, I2, A2, H2, L, T2 = u4.type;
    if (void 0 !== u4.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f4 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
    n: if ("function" == typeof T2) try {
      if (S3 = u4.props, C2 = "prototype" in T2 && T2.prototype.render, M2 = (a3 = T2.contextType) && i3[a3.__c], $2 = a3 ? M2 ? M2.props.value : a3.__ : i3, t3.__c ? b = (h3 = u4.__c = t3.__c).__ = h3.__E : (C2 ? u4.__c = h3 = new T2(S3, $2) : (u4.__c = h3 = new x(S3, $2), h3.constructor = T2, h3.render = G), M2 && M2.sub(h3), h3.state || (h3.state = {}), h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), C2 && null == h3.__s && (h3.__s = h3.state), C2 && null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, T2.getDerivedStateFromProps(S3, h3.__s))), y2 = h3.props, _2 = h3.state, h3.__v = u4, p3) C2 && null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), C2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (C2 && null == T2.getDerivedStateFromProps && S3 !== y2 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(S3, $2), u4.__v == t3.__v || !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(S3, h3.__s, $2)) {
          u4.__v != t3.__v && (h3.props = S3, h3.state = h3.__s, h3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
            n3 && (n3.__ = u4);
          }), v.push.apply(h3.__h, h3._sb), h3._sb = [], h3.__h.length && e3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(S3, h3.__s, $2), C2 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(y2, _2, m3);
        });
      }
      if (h3.context = $2, h3.props = S3, h3.__P = n2, h3.__e = false, I2 = l.__r, A2 = 0, C2) h3.state = h3.__s, h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), v.push.apply(h3.__h, h3._sb), h3._sb = [];
      else do {
        h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++A2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i3 = w(w({}, i3), h3.getChildContext())), C2 && !p3 && null != h3.getSnapshotBeforeUpdate && (m3 = h3.getSnapshotBeforeUpdate(y2, _2)), H2 = null != a3 && a3.type === k && null == a3.key ? q(a3.props.children) : a3, f4 = P(n2, d(H2) ? H2 : [H2], u4, t3, i3, r3, o3, e3, f4, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e3.push(h3), b && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u4.__v = null, c3 || null != o3) if (n3.then) {
        for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
        o3[o3.indexOf(f4)] = null, u4.__e = f4;
      } else {
        for (L = o3.length; L--; ) g(o3[L]);
        N(u4);
      }
      else u4.__e = t3.__e, u4.__k = t3.__k, n3.then || N(u4);
      l.__e(n3, u4, t3);
    }
    else null == o3 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = B(t3.__e, u4, t3, i3, r3, o3, e3, c3, s3);
    return (a3 = l.diffed) && a3(u4), 128 & u4.__u ? void 0 : f4;
  }
  function N(n2) {
    n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(N));
  }
  function V(n2, u4, t3) {
    for (var i3 = 0; i3 < t3.length; i3++) D(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function q(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : d(n2) ? n2.map(q) : w({}, n2);
  }
  function B(u4, t3, i3, r3, o3, e3, f4, c3, s3) {
    var a3, h3, v3, y2, w3, _2, m3, b = i3.props || p, k3 = t3.props, x2 = t3.type;
    if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a3 = 0; a3 < e3.length; a3++) if ((w3 = e3[a3]) && "setAttribute" in w3 == !!x2 && (x2 ? w3.localName == x2 : 3 == w3.nodeType)) {
        u4 = w3, e3[a3] = null;
        break;
      }
    }
    if (null == u4) {
      if (null == x2) return document.createTextNode(k3);
      u4 = document.createElementNS(o3, x2, k3.is && k3), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
    }
    if (null == x2) b === k3 || c3 && u4.data == k3 || (u4.data = k3);
    else {
      if (e3 = e3 && n.call(u4.childNodes), !c3 && null != e3) for (b = {}, a3 = 0; a3 < u4.attributes.length; a3++) b[(w3 = u4.attributes[a3]).name] = w3.value;
      for (a3 in b) w3 = b[a3], "dangerouslySetInnerHTML" == a3 ? v3 = w3 : "children" == a3 || a3 in k3 || "value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3 || F(u4, a3, null, w3, o3);
      for (a3 in k3) w3 = k3[a3], "children" == a3 ? y2 = w3 : "dangerouslySetInnerHTML" == a3 ? h3 = w3 : "value" == a3 ? _2 = w3 : "checked" == a3 ? m3 = w3 : c3 && "function" != typeof w3 || b[a3] === w3 || F(u4, a3, w3, b[a3], o3);
      if (h3) c3 || v3 && (h3.__html == v3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
      else if (v3 && (u4.innerHTML = ""), P("template" == t3.type ? u4.content : u4, d(y2) ? y2 : [y2], t3, i3, r3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e3, f4, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
      c3 || (a3 = "value", "progress" == x2 && null == _2 ? u4.removeAttribute("value") : null != _2 && (_2 !== u4[a3] || "progress" == x2 && !_2 || "option" == x2 && _2 != b[a3]) && F(u4, a3, _2, b[a3], o3), a3 = "checked", null != m3 && m3 != u4[a3] && F(u4, a3, m3, b[a3], o3));
    }
    return u4;
  }
  function D(n2, u4, t3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == u4 || (n2.__u = n2(u4));
      } else n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function E(n2, u4, t3) {
    var i3, r3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || D(i3, null, u4)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount) try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u4);
      }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && E(i3[r3], u4, t3 || "function" != typeof n2.type);
    t3 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function G(n2, l3, u4) {
    return this.constructor(n2, u4);
  }
  function J(u4, t3, i3) {
    var r3, o3, e3, f4;
    t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f4 = [], z(t3, u4 = (!r3 && i3 || t3).__k = _(k, null, [u4]), o3 || p, p, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f4), V(e3, u4, f4);
  }
  n = v.slice, l = { __e: function(n2, l3, u4, t3) {
    for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
      if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
    } catch (l4) {
      n2 = l4;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, x.prototype.setState = function(n2, l3) {
    var u4;
    u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, u4), this.props)), n2 && w(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), $(this));
  }, x.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), $(this));
  }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, I.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;

  // ../../workspace/compiler-tools/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m2 = c2.unmount;
  var s2 = c2.__;
  function p2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
  }
  function d2(n2) {
    return o2 = 1, h2(D2, n2);
  }
  function h2(n2, u4, i3) {
    var o3 = p2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u4) : D2(void 0, u4), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.__f)) {
      var f4 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u5 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u5.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i4 = o3.__c.props !== n3;
        return u5.some(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), c3 && c3.call(this, n3, t3, r3) || i4;
      };
      r2.__f = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u5 = c3;
          c3 = void 0, f4(n3, t3, r3), c3 = u5;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f4;
    }
    return o3.__N || o3.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) {
      var t3 = n2.__H;
      if (n2.__P && t3) try {
        t3.__h.some(z2), t3.__h.some(B2), t3.__h = [];
      } catch (r3) {
        t3.__h = [], c2.__e(r3, n2.__v);
      }
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.some(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
    })) : (i3.__h.some(z2), i3.__h.some(B2), i3.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.some(function(n3) {
      n3.u && (n3.__H = n3.u), n3.u = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.some(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t3);
  }, c2.unmount = function(n2) {
    m2 && m2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.some(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r3, 35);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // ../../workspace/compiler-tools/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  function u3(e3, t3, n2, o3, i3, u4) {
    t3 || (t3 = {});
    var a3, c3, p3 = t3;
    if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
    var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i3, __self: u4 };
    if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
    return l.vnode && l.vnode(l3), l3;
  }

  // src/components/icons.tsx
  var S2 = (p3) => /* @__PURE__ */ u3(
    "svg",
    {
      width: p3.size ?? 24,
      height: p3.size ?? 24,
      viewBox: p3.vb ?? "0 0 24 24",
      fill: "none",
      class: p3.class,
      xmlns: "http://www.w3.org/2000/svg",
      children: p3.children
    }
  );
  function AllenLogo({ size = 28, bg = "#1173d4" }) {
    return /* @__PURE__ */ u3(S2, { size, vb: "0 0 100 100", children: [
      /* @__PURE__ */ u3("rect", { width: "100", height: "100", rx: "10", fill: bg }),
      /* @__PURE__ */ u3("path", { d: "M50 11 L89.5 91 H61.5 L57.5 71.5 H42.5 L38.5 91 H10.5 Z", fill: "#ffffff" }),
      /* @__PURE__ */ u3("circle", { cx: "50", cy: "53", r: "6.8", fill: bg })
    ] });
  }
  var IconBell = ({ size = 22, badge = 0 }) => /* @__PURE__ */ u3("span", { class: "bell-wrap", children: [
    /* @__PURE__ */ u3(S2, { size, children: [
      /* @__PURE__ */ u3(
        "path",
        {
          d: "M12 3a6 6 0 0 0-6 6v3.2l-1.6 3a1 1 0 0 0 .9 1.5h13.4a1 1 0 0 0 .9-1.5l-1.6-3V9a6 6 0 0 0-6-6Z",
          stroke: "#e8e8ec",
          "stroke-width": "1.7",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ u3("path", { d: "M9.8 19.5a2.3 2.3 0 0 0 4.4 0", stroke: "#e8e8ec", "stroke-width": "1.7", "stroke-linecap": "round" })
    ] }),
    badge > 0 && /* @__PURE__ */ u3("span", { class: "bell-badge", children: badge })
  ] });
  var IconUser = ({ size = 26 }) => /* @__PURE__ */ u3(S2, { size, children: [
    /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10.2", stroke: "#e8e8ec", "stroke-width": "1.6" }),
    /* @__PURE__ */ u3("circle", { cx: "12", cy: "9.4", r: "3.2", stroke: "#e8e8ec", "stroke-width": "1.6" }),
    /* @__PURE__ */ u3("path", { d: "M5.8 19a7.4 7.4 0 0 1 12.4 0", stroke: "#e8e8ec", "stroke-width": "1.6", "stroke-linecap": "round" })
  ] });
  var IconWhatsNew = () => /* @__PURE__ */ u3(S2, { size: 16, children: [
    /* @__PURE__ */ u3("rect", { x: "3", y: "4.5", width: "11", height: "9", rx: "1.6", stroke: "#2e7ff2", "stroke-width": "1.6" }),
    /* @__PURE__ */ u3("path", { d: "M3.5 5.5 8.5 9l5-3.5", stroke: "#2e7ff2", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ u3("path", { d: "M16 9h5m0 0-2.2-2.2M21 9l-2.2 2.2", stroke: "#2e7ff2", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" })
  ] });
  var IconPlay = () => /* @__PURE__ */ u3(S2, { size: 14, children: /* @__PURE__ */ u3("path", { d: "M6 4.5v15l13-7.5Z", fill: "#2e7ff2" }) });
  var IconCalendar = ({ size = 16, color = "#cfcfd6" }) => /* @__PURE__ */ u3(S2, { size, children: [
    /* @__PURE__ */ u3("rect", { x: "3.5", y: "5", width: "17", height: "16", rx: "2.5", stroke: color, "stroke-width": "1.6" }),
    /* @__PURE__ */ u3("path", { d: "M3.5 10h17M8 2.8V6.5M16 2.8V6.5", stroke: color, "stroke-width": "1.6", "stroke-linecap": "round" })
  ] });
  var IconClock = ({ size = 16, color = "#cfcfd6" }) => /* @__PURE__ */ u3(S2, { size, children: [
    /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "8.6", stroke: color, "stroke-width": "1.6" }),
    /* @__PURE__ */ u3("path", { d: "M12 7.2V12l3.4 2", stroke: color, "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" })
  ] });
  var IconClipboard = ({ size = 16, color = "#cfcfd6" }) => /* @__PURE__ */ u3(S2, { size, children: [
    /* @__PURE__ */ u3("rect", { x: "5", y: "4", width: "14", height: "17", rx: "2.4", stroke: color, "stroke-width": "1.6" }),
    /* @__PURE__ */ u3("rect", { x: "9", y: "2.4", width: "6", height: "3.4", rx: "1.2", fill: color }),
    /* @__PURE__ */ u3("path", { d: "M8.6 11.5 11 14l4.4-4.4", stroke: color, "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round" })
  ] });
  var IconBack = () => /* @__PURE__ */ u3(S2, { size: 24, children: /* @__PURE__ */ u3("path", { d: "M19 12H5.5M11.5 5.5 5 12l6.5 6.5", stroke: "#fff", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) });
  var IconChevR = ({ size = 18, color = "#8f8f97" }) => /* @__PURE__ */ u3(S2, { size, children: /* @__PURE__ */ u3("path", { d: "M9 5.5 15.5 12 9 18.5", stroke: color, "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round" }) });
  var IconCalendarTile = () => /* @__PURE__ */ u3(S2, { size: 18, children: [
    /* @__PURE__ */ u3("rect", { x: "3.5", y: "5", width: "17", height: "16", rx: "3", stroke: "#e8e8ec", "stroke-width": "1.7" }),
    /* @__PURE__ */ u3("path", { d: "M3.5 10.2h17M8 2.8V6.5M16 2.8V6.5", stroke: "#e8e8ec", "stroke-width": "1.7", "stroke-linecap": "round" }),
    /* @__PURE__ */ u3("path", { d: "M7 14h3M7 17.5h5", stroke: "#e8e8ec", "stroke-width": "1.5", "stroke-linecap": "round" })
  ] });
  var Tile = ({ children, bg = "#26262b", glow = "rgba(0,0,0,.55)" }) => /* @__PURE__ */ u3("span", { class: "qa-tile", style: { background: bg, boxShadow: `0 6px 12px -4px ${glow}, 0 14px 22px -12px ${glow}` }, children });
  var IcRevision = () => /* @__PURE__ */ u3(Tile, { bg: "#2a2440", glow: "rgba(124,92,255,.35)", children: /* @__PURE__ */ u3(S2, { size: 30, vb: "0 0 24 24", children: [
    /* @__PURE__ */ u3("path", { d: "M6 3.5h9l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6.5 3.5Z", fill: "#b9a6ff" }),
    /* @__PURE__ */ u3("path", { d: "M15 3.5V7a1 1 0 0 0 1 1h3.5", fill: "#8f78f2" }),
    /* @__PURE__ */ u3("path", { d: "M9.2 14.7a3 3 0 0 1 5-2.2m.6 2.8a3 3 0 0 1-5 2.2", stroke: "#5b3df0", "stroke-width": "1.5", "stroke-linecap": "round" }),
    /* @__PURE__ */ u3("path", { d: "M14.4 11.4v1.6h-1.6M9.6 18.6V17h1.6", stroke: "#5b3df0", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })
  ] }) });
  var IcCustomPractice = () => /* @__PURE__ */ u3(Tile, { bg: "#2a2440", glow: "rgba(124,92,255,.35)", children: /* @__PURE__ */ u3(S2, { size: 30, vb: "0 0 24 24", children: [
    /* @__PURE__ */ u3("rect", { x: "4.5", y: "3", width: "15", height: "18", rx: "2.4", fill: "#b9a6ff" }),
    /* @__PURE__ */ u3("path", { d: "M8 3v18", stroke: "#8f78f2", "stroke-width": "1.4" }),
    /* @__PURE__ */ u3("circle", { cx: "14.5", cy: "12", r: "4.2", stroke: "#5b3df0", "stroke-width": "1.6" }),
    /* @__PURE__ */ u3("circle", { cx: "14.5", cy: "12", r: "1.4", fill: "#5b3df0" })
  ] }) });
  var IcImprovement = () => /* @__PURE__ */ u3(Tile, { bg: "#173327", glow: "rgba(38,208,124,.3)", children: /* @__PURE__ */ u3(S2, { size: 30, vb: "0 0 24 24", children: [
    /* @__PURE__ */ u3("rect", { x: "5", y: "3", width: "14.5", height: "18", rx: "2.4", fill: "#3ddc84" }),
    /* @__PURE__ */ u3("rect", { x: "8", y: "1.8", width: "12.5", height: "18", rx: "2.4", fill: "#26b56a" }),
    /* @__PURE__ */ u3("path", { d: "M10.5 15.5 14 11l2 2.4 2.6-3.8", stroke: "#0d3d24", "stroke-width": "1.7", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ u3("path", { d: "M18.6 9.2h-1.9v1.9", stroke: "#0d3d24", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })
  ] }) });
  var IcFlashcards = () => /* @__PURE__ */ u3(Tile, { bg: "#3d2c12", glow: "rgba(255,166,43,.3)", children: /* @__PURE__ */ u3(S2, { size: 30, vb: "0 0 24 24", children: [
    /* @__PURE__ */ u3("rect", { x: "6.5", y: "4.5", width: "12", height: "15", rx: "2.2", fill: "#e08b1e" }),
    /* @__PURE__ */ u3("rect", { x: "4.5", y: "3", width: "12", height: "15", rx: "2.2", fill: "#ffb04d" }),
    /* @__PURE__ */ u3("path", { d: "M11.4 6.8 8.6 12h2.4l-1 4 3.8-5.6h-2.5l1.3-3.6Z", fill: "#7a4a08" })
  ] }) });
  var IcDownloads = () => /* @__PURE__ */ u3(Tile, { bg: "#0f2c3d", glow: "rgba(38,182,255,.35)", children: /* @__PURE__ */ u3(S2, { size: 30, vb: "0 0 24 24", children: [
    /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "9.4", fill: "#31bdf0" }),
    /* @__PURE__ */ u3("path", { d: "M12 7.2v8m0 0-3.4-3.3M12 15.2l3.4-3.3", stroke: "#083049", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ u3("path", { d: "M8 18h8", stroke: "#083049", "stroke-width": "2", "stroke-linecap": "round" })
  ] }) });
  var IcPyq = () => /* @__PURE__ */ u3(Tile, { bg: "#1c2540", glow: "rgba(80,120,255,.35)", children: /* @__PURE__ */ u3(S2, { size: 30, vb: "0 0 24 24", children: [
    /* @__PURE__ */ u3("path", { d: "M6 3.5h9l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6.5 3.5Z", fill: "#7d9bff" }),
    /* @__PURE__ */ u3("text", { x: "12", y: "15.6", "text-anchor": "middle", "font-size": "6.4", "font-weight": "800", fill: "#1c2a6b", "font-family": "inherit", children: "PYQ" })
  ] }) });
  var HowCircle = ({ bg, children }) => /* @__PURE__ */ u3("span", { class: "how-circle", style: { background: bg }, children });
  var IcHomework = () => /* @__PURE__ */ u3(HowCircle, { bg: "#c2185b", children: /* @__PURE__ */ u3(S2, { size: 26, vb: "0 0 24 24", children: [
    /* @__PURE__ */ u3("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "2", fill: "#e94f8a" }),
    /* @__PURE__ */ u3("text", { x: "12", y: "15", "text-anchor": "middle", "font-size": "7", "font-weight": "800", fill: "#fff", "font-family": "inherit", children: "HW" })
  ] }) });
  var IcDoubts = () => /* @__PURE__ */ u3(HowCircle, { bg: "#1e7e46", children: /* @__PURE__ */ u3(S2, { size: 26, vb: "0 0 24 24", children: [
    /* @__PURE__ */ u3("path", { d: "M4.5 5.5h15v10.5h-9l-4 3.5v-3.5h-2Z", fill: "#4caf7d", stroke: "#8fe0b5", "stroke-width": "1" }),
    /* @__PURE__ */ u3("text", { x: "12", y: "14", "text-anchor": "middle", "font-size": "9", "font-weight": "800", fill: "#fff", "font-family": "inherit", children: "?" })
  ] }) });
  var NavHome = ({ active }) => /* @__PURE__ */ u3(AllenLogo, { size: 26, bg: active ? "#1173d4" : "#3a3a41" });
  var NavStudy = ({ active }) => /* @__PURE__ */ u3(S2, { size: 24, children: [
    /* @__PURE__ */ u3("path", { d: "M12 6.5C10.4 5 8 4.5 4.5 4.7v13c3.5-.2 5.9.3 7.5 1.8 1.6-1.5 4-2 7.5-1.8v-13C16 4.5 13.6 5 12 6.5Z", stroke: active ? "#e8e8ec" : "#6f6f78", "stroke-width": "1.7", "stroke-linejoin": "round" }),
    /* @__PURE__ */ u3("path", { d: "M12 6.5v12.8", stroke: active ? "#e8e8ec" : "#6f6f78", "stroke-width": "1.7" })
  ] });
  var NavDoubts = ({ active }) => /* @__PURE__ */ u3("span", { class: "nav-doubts-wrap", children: [
    /* @__PURE__ */ u3(S2, { size: 24, vb: "0 0 28 24", children: /* @__PURE__ */ u3("path", { d: "M3 5.5h22v13H12l-5 4.4v-4.4H3Z", stroke: active ? "#e8e8ec" : "#6f6f78", "stroke-width": "1.7", "stroke-linejoin": "round" }) }),
    /* @__PURE__ */ u3("span", { class: "mini-new", children: "NEW" })
  ] });
  var NavTests = ({ active }) => /* @__PURE__ */ u3(S2, { size: 24, children: [
    /* @__PURE__ */ u3("rect", { x: "4.5", y: "4", width: "15", height: "17.5", rx: "2.4", stroke: active ? "#e8e8ec" : "#6f6f78", "stroke-width": "1.7" }),
    /* @__PURE__ */ u3("rect", { x: "9", y: "2.4", width: "6", height: "3.4", rx: "1.2", fill: active ? "#e8e8ec" : "#6f6f78" }),
    /* @__PURE__ */ u3("path", { d: "m8.8 13 2 2 4.6-4.6", stroke: active ? "#e8e8ec" : "#6f6f78", "stroke-width": "1.7", "stroke-linecap": "round", "stroke-linejoin": "round" })
  ] });
  var NavBreak = ({ active }) => /* @__PURE__ */ u3(S2, { size: 24, children: [
    /* @__PURE__ */ u3("path", { d: "M12 3.4l2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.7-5.2 2.7 1-5.9-4.3-4.1 5.9-.9Z", stroke: active ? "#e8e8ec" : "#6f6f78", "stroke-width": "1.7", "stroke-linejoin": "round" }),
    /* @__PURE__ */ u3("circle", { cx: "9.6", cy: "11.4", r: ".9", fill: active ? "#e8e8ec" : "#6f6f78" }),
    /* @__PURE__ */ u3("circle", { cx: "14.4", cy: "11.4", r: ".9", fill: active ? "#e8e8ec" : "#6f6f78" }),
    /* @__PURE__ */ u3("path", { d: "M9.8 14.6c1.3 1.2 3.1 1.2 4.4 0", stroke: active ? "#e8e8ec" : "#6f6f78", "stroke-width": "1.4", "stroke-linecap": "round" })
  ] });
  function ScheduleArt() {
    return /* @__PURE__ */ u3("div", { class: "schedule-art", children: /* @__PURE__ */ u3(AllenLogo, { size: 64 }) });
  }
  function ReferArt() {
    return /* @__PURE__ */ u3("svg", { width: "150", height: "104", viewBox: "0 0 150 104", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ u3("circle", { cx: "118", cy: "30", r: "22", fill: "#ffd977" }),
      /* @__PURE__ */ u3("rect", { x: "18", y: "66", width: "52", height: "30", rx: "3", fill: "#2b6cb0" }),
      /* @__PURE__ */ u3("rect", { x: "22", y: "58", width: "44", height: "9", rx: "2", fill: "#4a90d9" }),
      /* @__PURE__ */ u3("rect", { x: "80", y: "60", width: "56", height: "6", rx: "3", fill: "#c9a86a" }),
      /* @__PURE__ */ u3("rect", { x: "88", y: "40", width: "34", height: "22", rx: "3", fill: "#5b5f6b" }),
      /* @__PURE__ */ u3("rect", { x: "86", y: "44", width: "38", height: "14", rx: "2", fill: "#8fa3c2" }),
      /* @__PURE__ */ u3("circle", { cx: "52", cy: "34", r: "9", fill: "#8a5a3b" }),
      /* @__PURE__ */ u3("path", { d: "M38 66c2-14 10-20 14-20s12 6 14 20Z", fill: "#2f4a8a" }),
      /* @__PURE__ */ u3("circle", { cx: "86", cy: "36", r: "8", fill: "#6b4423" }),
      /* @__PURE__ */ u3("path", { d: "M74 62c1-12 8-17 12-17s11 5 12 17Z", fill: "#7c5cbf" })
    ] });
  }

  // src/components/Home.tsx
  var UPCOMING = [
    { banner: "UPCOMING TEST", bannerTone: "gray", name: "MINOR TEST 6", date: "18 Oct", dur: "180 Min", mode: "Offline", window: "Test Window 1:00 PM-5:00 PM" },
    { banner: "UPCOMING TEST", bannerTone: "gray", name: "INTERIM TEST 4", date: "25 Oct", dur: "180 Min", mode: "Offline", window: "Test Window 1:00 PM-5:00 PM" }
  ];
  var PAST = [
    { banner: "Results are out", bannerTone: "green", name: "INTERNAL TEST 5", date: "27 Sep", dur: "180 Min", mode: "Offline", window: "Test Window 1:00 PM-5:00 PM", resultOut: true },
    { banner: "Results are out", bannerTone: "green", name: "MINOR TEST 5", date: "20 Sep", dur: "180 Min", mode: "Offline", window: "Test Window 1:00 PM-5:00 PM", resultOut: true }
  ];
  function TestCardView({ t: t3, onViewResult }) {
    return /* @__PURE__ */ u3("div", { class: "test-card", children: [
      /* @__PURE__ */ u3("div", { class: `test-card-banner ${t3.bannerTone}`, children: t3.banner }),
      /* @__PURE__ */ u3("div", { class: "test-card-body", children: [
        /* @__PURE__ */ u3("div", { class: "test-card-name", children: t3.name }),
        /* @__PURE__ */ u3("div", { class: "test-meta", children: [
          /* @__PURE__ */ u3("span", { children: [
            /* @__PURE__ */ u3(IconCalendar, {}),
            " ",
            t3.date
          ] }),
          /* @__PURE__ */ u3("i", {}),
          /* @__PURE__ */ u3("span", { children: [
            /* @__PURE__ */ u3(IconClock, {}),
            " ",
            t3.dur
          ] }),
          /* @__PURE__ */ u3("i", {}),
          /* @__PURE__ */ u3("span", { children: [
            /* @__PURE__ */ u3(IconClipboard, {}),
            " ",
            t3.mode
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { class: "test-window", children: t3.window }),
        /* @__PURE__ */ u3("div", { class: "test-card-art" }),
        /* @__PURE__ */ u3("div", { class: "test-card-actions", children: [
          t3.resultOut && /* @__PURE__ */ u3("div", { class: "syllabus-row", children: [
            /* @__PURE__ */ u3(IconCalendar, { size: 15, color: "#7c8aa8" }),
            " View Syllabus"
          ] }),
          t3.resultOut ? /* @__PURE__ */ u3("button", { class: "btn-primary", onClick: onViewResult, children: "View Result" }) : /* @__PURE__ */ u3("button", { class: "btn-outline", children: "View Syllabus" })
        ] })
      ] })
    ] });
  }
  function Home({ onOpenResult }) {
    const [schedTab, setSchedTab] = d2("tomorrow");
    const [testTab, setTestTab] = d2("upcoming");
    const schedule = [
      { title: "Newton's Laws Of Motion A...", starts: "Starts 8:00 AM, 29 Sep" },
      { title: "Atomic Structure", starts: "Starts 9:35 AM, 29 Sep" }
    ];
    return /* @__PURE__ */ u3("div", { class: "screen", children: [
      /* @__PURE__ */ u3("div", { class: "whats-new-wrap", children: /* @__PURE__ */ u3("div", { class: "whats-new", children: [
        /* @__PURE__ */ u3(IconWhatsNew, {}),
        " WHAT'S NEW"
      ] }) }),
      /* @__PURE__ */ u3("div", { class: "header-row", children: [
        /* @__PURE__ */ u3("div", { class: "course-chips", children: [
          /* @__PURE__ */ u3("span", { class: "chip chip-dark", children: "11th" }),
          /* @__PURE__ */ u3("span", { class: "chip chip-dark", children: "JEE Adv." }),
          /* @__PURE__ */ u3("span", { class: "chip chip-dark", children: "Classroom" }),
          /* @__PURE__ */ u3("div", { class: "change-course", children: [
            "Change course ",
            /* @__PURE__ */ u3(IconPlay, {})
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { class: "header-icons", children: [
          /* @__PURE__ */ u3(IconBell, { badge: 16 }),
          /* @__PURE__ */ u3(IconUser, {})
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "section-head", children: [
        /* @__PURE__ */ u3("h2", { children: "Quick Actions" }),
        /* @__PURE__ */ u3("svg", { width: "46", height: "6", viewBox: "0 0 46 6", class: "swoosh", children: /* @__PURE__ */ u3("path", { d: "M1 4.5C10 1.5 30 1 45 3.5", stroke: "#2ecc71", "stroke-width": "2.4", fill: "none", "stroke-linecap": "round" }) })
      ] }),
      /* @__PURE__ */ u3("div", { class: "qa-grid", children: [
        /* @__PURE__ */ u3("div", { class: "qa-item", children: [
          /* @__PURE__ */ u3("span", { class: "qa-new", children: /* @__PURE__ */ u3(IcRevision, {}) }),
          /* @__PURE__ */ u3("span", { class: "qa-label", children: "Revision Notes" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "qa-item", children: [
          /* @__PURE__ */ u3(IcCustomPractice, {}),
          /* @__PURE__ */ u3("span", { class: "qa-label", children: "Custom Practice" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "qa-item", children: [
          /* @__PURE__ */ u3(IcImprovement, {}),
          /* @__PURE__ */ u3("span", { class: "qa-label", children: "Improvement Book" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "qa-item", children: [
          /* @__PURE__ */ u3(IcFlashcards, {}),
          /* @__PURE__ */ u3("span", { class: "qa-label", children: "Flashcards" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "qa-item", children: [
          /* @__PURE__ */ u3(IcDownloads, {}),
          /* @__PURE__ */ u3("span", { class: "qa-label", children: "Downloads" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "qa-item", children: [
          /* @__PURE__ */ u3(IcPyq, {}),
          /* @__PURE__ */ u3("span", { class: "qa-label", children: "PYQ zone" })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "section-head", children: [
        /* @__PURE__ */ u3("h2", { children: "Schedule" }),
        /* @__PURE__ */ u3("button", { class: "cal-btn", children: /* @__PURE__ */ u3(IconCalendarTile, {}) })
      ] }),
      /* @__PURE__ */ u3("div", { class: "pill-tabs", children: [
        /* @__PURE__ */ u3("button", { class: `pill ${schedTab === "tomorrow" ? "active" : ""}`, onClick: () => setSchedTab("tomorrow"), children: "Tomorrow" }),
        /* @__PURE__ */ u3("button", { class: `pill ${schedTab === "dayafter" ? "active" : ""}`, onClick: () => setSchedTab("dayafter"), children: "Day after tomorrow" })
      ] }),
      /* @__PURE__ */ u3("div", { class: "hscroll", children: (schedTab === "tomorrow" ? schedule : [{ title: "Chemical Bonding L4", starts: "Starts 8:00 AM, 30 Sep" }, { title: "Trigonometry Practice", starts: "Starts 11:00 AM, 30 Sep" }]).map((s3) => /* @__PURE__ */ u3("div", { class: "schedule-card", children: [
        /* @__PURE__ */ u3(ScheduleArt, {}),
        /* @__PURE__ */ u3("div", { class: "schedule-body", children: [
          /* @__PURE__ */ u3("div", { class: "schedule-title", children: s3.title }),
          /* @__PURE__ */ u3("div", { class: "schedule-starts", children: s3.starts }),
          /* @__PURE__ */ u3("button", { class: "btn-outline", children: "View Details" })
        ] })
      ] })) }),
      /* @__PURE__ */ u3("div", { class: "section-head", children: [
        /* @__PURE__ */ u3("h2", { children: "Your tests" }),
        /* @__PURE__ */ u3("span", { class: "view-all", children: "View all" })
      ] }),
      /* @__PURE__ */ u3("div", { class: "pill-tabs", children: [
        /* @__PURE__ */ u3("button", { class: `pill ${testTab === "upcoming" ? "active" : ""}`, onClick: () => setTestTab("upcoming"), children: "Upcoming" }),
        /* @__PURE__ */ u3("button", { class: `pill ${testTab === "past" ? "active" : ""}`, onClick: () => setTestTab("past"), children: "Past Tests" }),
        /* @__PURE__ */ u3("button", { class: `pill ${testTab === "missed" ? "active" : ""}`, onClick: () => setTestTab("missed"), children: "Missed Tests" })
      ] }),
      /* @__PURE__ */ u3("div", { class: "hscroll", children: [
        testTab === "upcoming" && UPCOMING.map((t3) => /* @__PURE__ */ u3(TestCardView, { t: t3 })),
        testTab === "past" && PAST.map((t3) => /* @__PURE__ */ u3(TestCardView, { t: t3, onViewResult: onOpenResult })),
        testTab === "missed" && PAST.map((t3) => /* @__PURE__ */ u3(TestCardView, { t: { ...t3, banner: "MISSED TEST", bannerTone: "gray" } }))
      ] }),
      /* @__PURE__ */ u3("div", { class: "section-head", children: /* @__PURE__ */ u3("h2", { children: "How to use ALLEN app" }) }),
      /* @__PURE__ */ u3("div", { class: "how-row", children: [
        /* @__PURE__ */ u3("div", { class: "how-item", children: [
          /* @__PURE__ */ u3(IcHomework, {}),
          /* @__PURE__ */ u3("span", { children: "Homework" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "how-item", children: [
          /* @__PURE__ */ u3(IcCustomPractice, {}),
          /* @__PURE__ */ u3("span", { children: "Custom Practice" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "how-item", children: [
          /* @__PURE__ */ u3(IcImprovement, {}),
          /* @__PURE__ */ u3("span", { children: "Improvement Book" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "how-item", children: [
          /* @__PURE__ */ u3(IcFlashcards, {}),
          /* @__PURE__ */ u3("span", { children: "Flash Cards" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "how-item", children: [
          /* @__PURE__ */ u3(IcDoubts, {}),
          /* @__PURE__ */ u3("span", { children: "Doubts" })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "refer-banner", children: [
        /* @__PURE__ */ u3("div", { class: "refer-text", children: [
          /* @__PURE__ */ u3("div", { class: "refer-head", children: "Got someone to prep with?" }),
          /* @__PURE__ */ u3("div", { class: "refer-tag", children: "Refer them!" }),
          /* @__PURE__ */ u3("div", { class: "refer-win", children: [
            /* @__PURE__ */ u3("span", { children: [
              /* @__PURE__ */ u3("b", { children: "You win" }),
              /* @__PURE__ */ u3("br", {}),
              "\u20B915,000"
            ] }),
            /* @__PURE__ */ u3("span", { children: [
              /* @__PURE__ */ u3("b", { children: "They win" }),
              /* @__PURE__ */ u3("br", {}),
              "50% off"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u3(ReferArt, {})
      ] }),
      /* @__PURE__ */ u3("div", { class: "bottom-pad" })
    ] });
  }
  function BottomNav({ tab, setTab }) {
    const items = [
      { id: "Home", icon: NavHome },
      { id: "Study", icon: NavStudy },
      { id: "Doubts", icon: NavDoubts },
      { id: "Tests", icon: NavTests },
      { id: "Break", icon: NavBreak }
    ];
    return /* @__PURE__ */ u3("nav", { class: "bottom-nav", children: items.map(({ id, icon: Icon }) => /* @__PURE__ */ u3("button", { class: `nav-item ${tab === id ? "active" : ""}`, onClick: () => setTab(id), children: [
      /* @__PURE__ */ u3(Icon, { active: tab === id }),
      /* @__PURE__ */ u3("span", { children: id })
    ] })) });
  }

  // src/components/Result.tsx
  var SCORE = 97;
  var TOTAL = 180;
  var CORRECT = 25;
  var INCORRECT = 3;
  var UNATTEMPTED = 20;
  var PCT = Math.round(CORRECT / (CORRECT + INCORRECT + UNATTEMPTED) * 100);
  var SUBJECTS = [
    { name: "CHEMISTRY", marks: 60, score: 31, ok: 8, no: 1 },
    { name: "MATHS", marks: 60, score: 31, ok: 8, no: 1 },
    { name: "PHYSICS", marks: 60, score: 35, ok: 9, no: 1 }
  ];
  function ScoreCircle() {
    return /* @__PURE__ */ u3("div", { class: "score-circle", children: /* @__PURE__ */ u3("svg", { width: "180", height: "180", viewBox: "0 0 180 180", children: [
      /* @__PURE__ */ u3("circle", { cx: "90", cy: "90", r: "78", stroke: "#fff", "stroke-width": "7", fill: "none", "stroke-linecap": "round", "stroke-dasharray": "430 490", "stroke-dashoffset": "30", transform: "rotate(-70 90 90)" }),
      /* @__PURE__ */ u3("text", { x: "90", y: "82", "text-anchor": "middle", "font-size": "40", "font-weight": "800", fill: "#fff", children: SCORE }),
      /* @__PURE__ */ u3("line", { x1: "52", y1: "94", x2: "128", y2: "94", stroke: "#fff", "stroke-width": "3" }),
      /* @__PURE__ */ u3("text", { x: "90", y: "126", "text-anchor": "middle", "font-size": "26", "font-weight": "600", fill: "#fff", children: TOTAL })
    ] }) });
  }
  function Result({ onBack }) {
    const [tab, setTab] = d2("overview");
    return /* @__PURE__ */ u3("div", { class: "screen result-screen", children: [
      /* @__PURE__ */ u3("div", { class: "result-hero", children: [
        /* @__PURE__ */ u3("div", { class: "result-topbar", children: [
          /* @__PURE__ */ u3("button", { class: "back-btn", onClick: onBack, children: /* @__PURE__ */ u3(IconBack, {}) }),
          /* @__PURE__ */ u3("div", { class: "result-title", children: [
            /* @__PURE__ */ u3("div", { class: "result-name", children: "INTERNAL TEST 5" }),
            /* @__PURE__ */ u3("div", { class: "result-sub", children: "27th Sep,2026 \xA0\u2022\xA0 Offline Mode" })
          ] }),
          /* @__PURE__ */ u3("button", { class: "main-test-pill", children: [
            "Main Test ",
            /* @__PURE__ */ u3("span", { class: "caret", children: "\u25BE" })
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { class: "hero-deco", "aria-hidden": "true", children: /* @__PURE__ */ u3("svg", { width: "120", height: "150", viewBox: "0 0 120 150", children: [
          /* @__PURE__ */ u3("circle", { cx: "20", cy: "12", r: "14", fill: "#ffbe4d" }),
          /* @__PURE__ */ u3("path", { d: "M28 138 L62 138 L45 96 Z", fill: "#3fae4e" }),
          /* @__PURE__ */ u3("path", { d: "M55 120 L82 120 L68 82 Z", fill: "#8bc34a" }),
          /* @__PURE__ */ u3("path", { d: "M96 34 l0 0 M92 28 c6 8 6 18 0 26", stroke: "#7cb342", "stroke-width": "5", fill: "none", "stroke-linecap": "round" }),
          /* @__PURE__ */ u3("path", { d: "M70 90 l14 -10 M72 96 l16 -11 M74 102 l18 -12", stroke: "#e6eef7", "stroke-width": "4", "stroke-linecap": "round" }),
          /* @__PURE__ */ u3("circle", { cx: "104", cy: "34", r: "7", fill: "#fdd835" })
        ] }) }),
        /* @__PURE__ */ u3(ScoreCircle, {}),
        /* @__PURE__ */ u3("div", { class: "provisional", children: [
          /* @__PURE__ */ u3("div", { class: "provisional-title", children: "You're viewing provisional result" }),
          /* @__PURE__ */ u3("div", { class: "provisional-sub", children: "Ranks will be available once the final result is published" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "hero-actions", children: [
          /* @__PURE__ */ u3("button", { class: "btn-hero", children: "View test solution" }),
          /* @__PURE__ */ u3("button", { class: "btn-hero-round", children: "\u2022\u2022\u2022" })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "result-tabs-wrap", children: /* @__PURE__ */ u3("div", { class: "result-tabs", children: ["overview", "subjects", "chapters"].map((t3) => /* @__PURE__ */ u3("button", { class: `result-tab ${tab === t3 ? "active" : ""}`, onClick: () => setTab(t3), children: t3.charAt(0).toUpperCase() + t3.slice(1) })) }) }),
      tab === "overview" && /* @__PURE__ */ u3("div", { class: "result-body", children: [
        /* @__PURE__ */ u3("h3", { class: "ms-title", children: "Marks Summary" }),
        /* @__PURE__ */ u3("div", { class: "ms-sub", children: [
          "You've answered ",
          PCT,
          "% questions correctly"
        ] }),
        /* @__PURE__ */ u3("div", { class: "marks-grid", children: [
          /* @__PURE__ */ u3("div", { class: "mark-card correct", children: [
            /* @__PURE__ */ u3("div", { class: "mark-label", children: "Correct" }),
            /* @__PURE__ */ u3("div", { class: "mark-value", children: CORRECT }),
            /* @__PURE__ */ u3("div", { class: "mark-marks", children: [
              "(+",
              CORRECT * 4,
              " marks)"
            ] })
          ] }),
          /* @__PURE__ */ u3("div", { class: "mark-card incorrect", children: [
            /* @__PURE__ */ u3("div", { class: "mark-label", children: "Incorrect" }),
            /* @__PURE__ */ u3("div", { class: "mark-value", children: INCORRECT }),
            /* @__PURE__ */ u3("div", { class: "mark-marks", children: [
              "(-",
              INCORRECT * 1,
              " marks)"
            ] })
          ] }),
          /* @__PURE__ */ u3("div", { class: "mark-card unattempted", children: [
            /* @__PURE__ */ u3("div", { class: "mark-label", children: "Unattempted" }),
            /* @__PURE__ */ u3("div", { class: "mark-value", children: UNATTEMPTED }),
            /* @__PURE__ */ u3("div", { class: "mark-marks", children: "\xA0" })
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { class: "subject-table", children: [
          /* @__PURE__ */ u3("div", { class: "subject-row head", children: [
            /* @__PURE__ */ u3("span", { children: "SUBJECT" }),
            /* @__PURE__ */ u3("span", { children: "SCORE" }),
            /* @__PURE__ */ u3("span", { class: "ok", children: "\u2713 Qs" }),
            /* @__PURE__ */ u3("span", { class: "no", children: "\u2717 Qs" }),
            /* @__PURE__ */ u3("span", {})
          ] }),
          SUBJECTS.map((s3) => /* @__PURE__ */ u3("div", { class: "subject-row", children: [
            /* @__PURE__ */ u3("span", { class: "s-name", children: [
              s3.name,
              /* @__PURE__ */ u3("br", {}),
              /* @__PURE__ */ u3("em", { children: [
                "(",
                s3.marks,
                " marks)"
              ] })
            ] }),
            /* @__PURE__ */ u3("span", { children: s3.score }),
            /* @__PURE__ */ u3("span", { class: "ok", children: s3.ok }),
            /* @__PURE__ */ u3("span", { class: "no", children: s3.no }),
            /* @__PURE__ */ u3(IconChevR, {})
          ] }))
        ] })
      ] }),
      tab === "subjects" && /* @__PURE__ */ u3("div", { class: "result-body", children: [
        /* @__PURE__ */ u3("div", { class: "empty-mini", children: "Subject-wise breakdown" }),
        /* @__PURE__ */ u3("div", { class: "subject-table", children: [
          /* @__PURE__ */ u3("div", { class: "subject-row head", children: [
            /* @__PURE__ */ u3("span", { children: "SUBJECT" }),
            /* @__PURE__ */ u3("span", { children: "SCORE" }),
            /* @__PURE__ */ u3("span", { class: "ok", children: "\u2713 Qs" }),
            /* @__PURE__ */ u3("span", { class: "no", children: "\u2717 Qs" }),
            /* @__PURE__ */ u3("span", {})
          ] }),
          SUBJECTS.map((s3) => /* @__PURE__ */ u3("div", { class: "subject-row", children: [
            /* @__PURE__ */ u3("span", { class: "s-name", children: [
              s3.name,
              /* @__PURE__ */ u3("br", {}),
              /* @__PURE__ */ u3("em", { children: [
                "(",
                s3.marks,
                " marks)"
              ] })
            ] }),
            /* @__PURE__ */ u3("span", { children: s3.score }),
            /* @__PURE__ */ u3("span", { class: "ok", children: s3.ok }),
            /* @__PURE__ */ u3("span", { class: "no", children: s3.no }),
            /* @__PURE__ */ u3(IconChevR, {})
          ] }))
        ] })
      ] }),
      tab === "chapters" && /* @__PURE__ */ u3("div", { class: "result-body", children: /* @__PURE__ */ u3("div", { class: "empty-mini", children: "Chapter-wise breakdown will show here" }) }),
      /* @__PURE__ */ u3("div", { class: "bottom-pad" })
    ] });
  }

  // src/components/App.tsx
  function App() {
    const [screen, setScreen] = d2("home");
    const [tab, setTab] = d2("Home");
    return /* @__PURE__ */ u3("div", { class: "app-shell", children: [
      /* @__PURE__ */ u3("div", { class: "app-body", children: tab !== "Home" ? /* @__PURE__ */ u3("div", { class: "screen empty-tab", children: [
        /* @__PURE__ */ u3("div", { class: "empty-art", children: "\u{1F6A7}" }),
        /* @__PURE__ */ u3("div", { class: "empty-title", children: tab }),
        /* @__PURE__ */ u3("div", { class: "empty-sub", children: "This section isn't set up yet" }),
        /* @__PURE__ */ u3("button", { class: "btn-outline", onClick: () => setTab("Home"), children: "Back to Home" })
      ] }) : screen === "home" ? /* @__PURE__ */ u3(Home, { onOpenResult: () => setScreen("result") }) : /* @__PURE__ */ u3(Result, { onBack: () => setScreen("home") }) }),
      /* @__PURE__ */ u3(BottomNav, { tab, setTab })
    ] });
  }

  // src/main.tsx
  J(/* @__PURE__ */ u3(App, {}), document.getElementById("app"));
})();
