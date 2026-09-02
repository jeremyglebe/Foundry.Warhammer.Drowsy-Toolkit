//#region src/module/constants.ts
var e = "WFRP4E_DROWSYS_TOOLKIT", t = "wfrp4e-enhanced-fear-terror", n = "Drowsy’s WFRP4e Toolkit", r = "wfrp4e-gm-toolkit", i = "wfrp4e";
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function a(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var o = {}, s = [], c = () => {}, l = () => !1, u = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), d = (e) => e.startsWith("onUpdate:"), f = Object.assign, p = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, m = Object.prototype.hasOwnProperty, h = (e, t) => m.call(e, t), g = Array.isArray, _ = (e) => ne(e) === "[object Map]", v = (e) => ne(e) === "[object Set]", y = (e) => ne(e) === "[object Date]", b = (e) => typeof e == "function", x = (e) => typeof e == "string", S = (e) => typeof e == "symbol", C = (e) => typeof e == "object" && !!e, ee = (e) => (C(e) || b(e)) && b(e.then) && b(e.catch), te = Object.prototype.toString, ne = (e) => te.call(e), re = (e) => ne(e).slice(8, -1), ie = (e) => ne(e) === "[object Object]", ae = (e) => x(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, oe = /* @__PURE__ */ a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), se = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ce = /-\w/g, le = se((e) => e.replace(ce, (e) => e.slice(1).toUpperCase())), ue = /\B([A-Z])/g, w = se((e) => e.replace(ue, "-$1").toLowerCase()), de = se((e) => e.charAt(0).toUpperCase() + e.slice(1)), fe = se((e) => e ? `on${de(e)}` : ""), T = (e, t) => !Object.is(e, t), pe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, me = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, he = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ge, _e = () => ge ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function ve(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = x(r) ? Se(r) : ve(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (x(e) || C(e)) return e;
}
var ye = /;(?![^(]*\))/g, be = /:([^]+)/, xe = /\/\*[^]*?\*\//g;
function Se(e) {
	let t = {};
	return e.replace(xe, "").split(ye).forEach((e) => {
		if (e) {
			let n = e.split(be);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function E(e) {
	let t = "";
	if (x(e)) t = e;
	else if (g(e)) for (let n = 0; n < e.length; n++) {
		let r = E(e[n]);
		r && (t += r + " ");
	}
	else if (C(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Ce = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", we = /* @__PURE__ */ a(Ce);
Ce + "";
function Te(e) {
	return !!e || e === "";
}
function Ee(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = De(e[r], t[r]);
	return n;
}
function De(e, t) {
	if (e === t) return !0;
	let n = y(e), r = y(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = S(e), r = S(t), n || r) return e === t;
	if (n = g(e), r = g(t), n || r) return n && r ? Ee(e, t) : !1;
	if (n = C(e), r = C(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !De(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Oe(e, t) {
	return e.findIndex((e) => De(e, t));
}
var ke = (e) => !!(e && e.__v_isRef === !0), D = (e) => x(e) ? e : e == null ? "" : g(e) || C(e) && (e.toString === te || !b(e.toString)) ? ke(e) ? D(e.value) : JSON.stringify(e, Ae, 2) : String(e), Ae = (e, t) => ke(t) ? Ae(e, t.value) : _(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[je(t, r) + " =>"] = n, e), {}) } : v(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => je(e)) } : S(t) ? je(t) : C(t) && !g(t) && !ie(t) ? String(t) : t, je = (e, t = "") => S(e) ? `Symbol(${e.description ?? t})` : e, O, Me = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && O && (O.active ? (this.parent = O, this.index = (O.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = O;
			try {
				return O = this, e();
			} finally {
				O = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = O, O = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (O === this) O = this.prevScope;
			else {
				let e = O;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Ne(e) {
	return new Me(e);
}
function Pe() {
	return O;
}
function Fe(e, t = !1) {
	O && O.cleanups.push(e);
}
var k, Ie = /* @__PURE__ */ new WeakSet(), Le = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, O && (O.active ? O.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ie.has(this) && (Ie.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ve(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, et(this), We(this);
		let e = k, t = Xe;
		k = this, Xe = !0;
		try {
			return this.fn();
		} finally {
			Ge(this), k = e, Xe = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Je(e);
			this.deps = this.depsTail = void 0, et(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ie.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ke(this) && this.run();
	}
	get dirty() {
		return Ke(this);
	}
}, Re = 0, ze, Be;
function Ve(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Be, Be = e;
		return;
	}
	e.next = ze, ze = e;
}
function He() {
	Re++;
}
function Ue() {
	if (--Re > 0) return;
	if (Be) {
		let e = Be;
		for (Be = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; ze;) {
		let t = ze;
		for (ze = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function We(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ge(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Je(r), Ye(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ke(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (qe(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function qe(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === tt) || (e.globalVersion = tt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ke(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = k, r = Xe;
	k = e, Xe = !0;
	try {
		We(e);
		let n = e.fn(e._value);
		(t.version === 0 || T(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		k = n, Xe = r, Ge(e), e.flags &= -3;
	}
}
function Je(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Je(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ye(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Xe = !0, Ze = [];
function Qe() {
	Ze.push(Xe), Xe = !1;
}
function $e() {
	let e = Ze.pop();
	Xe = e === void 0 ? !0 : e;
}
function et(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = k;
		k = void 0;
		try {
			t();
		} finally {
			k = e;
		}
	}
}
var tt = 0, nt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, rt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!k || !Xe || k === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== k) t = this.activeLink = new nt(k, this), k.deps ? (t.prevDep = k.depsTail, k.depsTail.nextDep = t, k.depsTail = t) : k.deps = k.depsTail = t, it(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = k.depsTail, t.nextDep = void 0, k.depsTail.nextDep = t, k.depsTail = t, k.deps === t && (k.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, tt++, this.notify(e);
	}
	notify(e) {
		He();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ue();
		}
	}
};
function it(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) it(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var at = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ Symbol(""), st = /* @__PURE__ */ Symbol(""), ct = /* @__PURE__ */ Symbol("");
function A(e, t, n) {
	if (Xe && k) {
		let t = at.get(e);
		t || at.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new rt()), r.map = t, r.key = n), r.track();
	}
}
function lt(e, t, n, r, i, a) {
	let o = at.get(e);
	if (!o) {
		tt++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (He(), t === "clear") o.forEach(s);
	else {
		let i = g(e), a = i && ae(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ct || !S(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ct)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ot)), _(e) && s(o.get(st)));
				break;
			case "delete":
				i || (s(o.get(ot)), _(e) && s(o.get(st)));
				break;
			case "set":
				_(e) && s(o.get(ot));
				break;
		}
	}
	Ue();
}
function ut(e, t) {
	let n = at.get(e);
	return n && n.get(t);
}
function dt(e) {
	let t = /* @__PURE__ */ j(e);
	return t === e ? t : (A(t, "iterate", ct), /* @__PURE__ */ Xt(e) ? t : t.map($t));
}
function ft(e) {
	return A(e = /* @__PURE__ */ j(e), "iterate", ct), e;
}
function pt(e, t) {
	return /* @__PURE__ */ Yt(e) ? en(/* @__PURE__ */ Jt(e) ? $t(t) : t) : $t(t);
}
var mt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ht(this, Symbol.iterator, (e) => pt(this, e));
	},
	concat(...e) {
		return dt(this).concat(...e.map((e) => g(e) ? dt(e) : e));
	},
	entries() {
		return ht(this, "entries", (e) => (e[1] = pt(this, e[1]), e));
	},
	every(e, t) {
		return _t(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return _t(this, "filter", e, t, (e) => e.map((e) => pt(this, e)), arguments);
	},
	find(e, t) {
		return _t(this, "find", e, t, (e) => pt(this, e), arguments);
	},
	findIndex(e, t) {
		return _t(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return _t(this, "findLast", e, t, (e) => pt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return _t(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return _t(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return yt(this, "includes", e);
	},
	indexOf(...e) {
		return yt(this, "indexOf", e);
	},
	join(e) {
		return dt(this).join(e);
	},
	lastIndexOf(...e) {
		return yt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return _t(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return bt(this, "pop");
	},
	push(...e) {
		return bt(this, "push", e);
	},
	reduce(e, ...t) {
		return vt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return vt(this, "reduceRight", e, t);
	},
	shift() {
		return bt(this, "shift");
	},
	some(e, t) {
		return _t(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return bt(this, "splice", e);
	},
	toReversed() {
		return dt(this).toReversed();
	},
	toSorted(e) {
		return dt(this).toSorted(e);
	},
	toSpliced(...e) {
		return dt(this).toSpliced(...e);
	},
	unshift(...e) {
		return bt(this, "unshift", e);
	},
	values() {
		return ht(this, "values", (e) => pt(this, e));
	}
};
function ht(e, t, n) {
	let r = ft(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Xt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var gt = Array.prototype;
function _t(e, t, n, r, i, a) {
	let o = ft(e), s = o !== e && !/* @__PURE__ */ Xt(e), c = o[t];
	if (c !== gt[t]) {
		let t = c.apply(e, a);
		return s ? $t(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, pt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function vt(e, t, n, r) {
	let i = ft(e), a = i !== e && !/* @__PURE__ */ Xt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = pt(e, t)), n.call(this, t, pt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? pt(e, c) : c;
}
function yt(e, t, n) {
	let r = /* @__PURE__ */ j(e);
	A(r, "iterate", ct);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Zt(n[0]) ? (n[0] = /* @__PURE__ */ j(n[0]), r[t](...n)) : i;
}
function bt(e, t, n = []) {
	Qe(), He();
	let r = (/* @__PURE__ */ j(e))[t].apply(e, n);
	return Ue(), $e(), r;
}
var xt = /* @__PURE__ */ a("__proto__,__v_isRef,__isVue"), St = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(S));
function Ct(e) {
	S(e) || (e = String(e));
	let t = /* @__PURE__ */ j(this);
	return A(t, "has", e), t.hasOwnProperty(e);
}
var wt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ht : Vt : i ? Bt : zt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = g(e);
		if (!r) {
			let e;
			if (a && (e = mt[t])) return e;
			if (t === "hasOwnProperty") return Ct;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ M(e) ? e : n);
		if ((S(t) ? St.has(t) : xt(t)) || (r || A(e, "get", t), i)) return o;
		if (/* @__PURE__ */ M(o)) {
			let e = a && ae(t) ? o : o.value;
			return r && C(e) ? /* @__PURE__ */ Kt(e) : e;
		}
		return C(o) ? r ? /* @__PURE__ */ Kt(o) : /* @__PURE__ */ Wt(o) : o;
	}
}, Tt = class extends wt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = g(e) && ae(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Yt(i);
			if (!/* @__PURE__ */ Xt(n) && !/* @__PURE__ */ Yt(n) && (i = /* @__PURE__ */ j(i), n = /* @__PURE__ */ j(n)), !a && /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : h(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ M(e) ? e : r);
		return e === /* @__PURE__ */ j(r) && (o ? T(n, i) && lt(e, "set", t, n, i) : lt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = h(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && lt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!S(t) || !St.has(t)) && A(e, "has", t), n;
	}
	ownKeys(e) {
		return A(e, "iterate", g(e) ? "length" : ot), Reflect.ownKeys(e);
	}
}, Et = class extends wt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new Et(), kt = /* @__PURE__ */ new Tt(!0), At = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function Mt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ j(i), o = _(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? At : t ? en : $t;
		return !t && A(a, "iterate", c ? st : ot), f(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [u(e[0]), u(e[1])] : u(e),
				done: t
			};
		} });
	};
}
function Nt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Pt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ j(r), a = /* @__PURE__ */ j(n);
			e || (T(n, a) && A(i, "get", n), A(i, "get", a));
			let { has: o } = jt(i), s = t ? At : e ? en : $t;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && A(/* @__PURE__ */ j(t), "iterate", ot), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ j(n), i = /* @__PURE__ */ j(t);
			return e || (T(t, i) && A(r, "has", t), A(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ j(a), s = t ? At : e ? en : $t;
			return !e && A(o, "iterate", ot), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return f(n, e ? {
		add: Nt("add"),
		set: Nt("set"),
		delete: Nt("delete"),
		clear: Nt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ j(this), r = jt(n), i = /* @__PURE__ */ j(e), a = !t && !/* @__PURE__ */ Xt(e) && !/* @__PURE__ */ Yt(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), lt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Xt(n) && !/* @__PURE__ */ Yt(n) && (n = /* @__PURE__ */ j(n));
			let r = /* @__PURE__ */ j(this), { has: i, get: a } = jt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ j(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && lt(r, "set", e, n, s) : lt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ j(this), { has: n, get: r } = jt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ j(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && lt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ j(this), t = e.size !== 0, n = e.clear();
			return t && lt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Mt(r, e, t);
	}), n;
}
function Ft(e, t) {
	let n = Pt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(h(n, r) && r in t ? n : t, r, i);
}
var It = { get: /* @__PURE__ */ Ft(!1, !1) }, Lt = { get: /* @__PURE__ */ Ft(!1, !0) }, Rt = { get: /* @__PURE__ */ Ft(!0, !1) }, zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap();
function Ut(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return /* @__PURE__ */ Yt(e) ? e : qt(e, !1, Dt, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return qt(e, !1, kt, Lt, Bt);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !0, Ot, Rt, Vt);
}
function qt(e, t, n, r, i) {
	if (!C(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ut(re(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return /* @__PURE__ */ Yt(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ j(t) : e;
}
function Qt(e) {
	return !h(e, "__v_skip") && Object.isExtensible(e) && me(e, "__v_skip", !0), e;
}
var $t = (e) => C(e) ? /* @__PURE__ */ Wt(e) : e, en = (e) => C(e) ? /* @__PURE__ */ Kt(e) : e;
// @__NO_SIDE_EFFECTS__
function M(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	return nn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return nn(e, !0);
}
function nn(e, t) {
	return /* @__PURE__ */ M(e) ? e : new rn(e, t);
}
var rn = class {
	constructor(e, t) {
		this.dep = new rt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ j(e), this._value = t ? e : $t(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Xt(e) || /* @__PURE__ */ Yt(e);
		e = n ? e : /* @__PURE__ */ j(e), T(e, t) && (this._rawValue = e, this._value = n ? e : $t(e), this.dep.trigger());
	}
};
function P(e) {
	return /* @__PURE__ */ M(e) ? e.value : e;
}
var an = {
	get: (e, t, n) => t === "__v_raw" ? e : P(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function on(e) {
	return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, an);
}
var sn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new rt(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function cn(e) {
	return new sn(e);
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
	let t = g(e) ? Array(e.length) : {};
	for (let n in e) t[n] = pn(e, n);
	return t;
}
var un = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = S(t) ? t : String(t), this._raw = /* @__PURE__ */ j(e);
		let r = !0, i = e;
		if (!g(e) || S(this._key) || !ae(this._key)) do
			r = !/* @__PURE__ */ Zt(i) || /* @__PURE__ */ Xt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = P(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ M(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ M(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return ut(this._raw, this._key);
	}
}, dn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function fn(e, t, n) {
	return /* @__PURE__ */ M(e) ? e : b(e) ? new dn(e) : C(e) && arguments.length > 1 ? pn(e, t, n) : /* @__PURE__ */ N(e);
}
function pn(e, t, n) {
	return new un(e, t, n);
}
var mn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new rt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && k !== this) return Ve(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return qe(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function hn(e, t, n = !1) {
	let r, i;
	return b(e) ? r = e : (r = e.get, i = e.set), new mn(r, i, n);
}
var gn = {}, _n = /* @__PURE__ */ new WeakMap(), vn = void 0;
function yn(e, t = !1, n = vn) {
	if (n) {
		let t = _n.get(n);
		t || _n.set(n, t = []), t.push(e);
	}
}
function bn(e, t, n = o) {
	let { immediate: r, deep: i, once: a, scheduler: s, augmentJob: l, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ Xt(e) || i === !1 || i === 0 ? xn(e, 1) : xn(e), f, m, h, _, v = !1, y = !1;
	if (/* @__PURE__ */ M(e) ? (m = () => e.value, v = /* @__PURE__ */ Xt(e)) : /* @__PURE__ */ Jt(e) ? (m = () => d(e), v = !0) : g(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ Jt(e) || /* @__PURE__ */ Xt(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ M(e)) return e.value;
		if (/* @__PURE__ */ Jt(e)) return d(e);
		if (b(e)) return u ? u(e, 2) : e();
	})) : m = b(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (h) {
			Qe();
			try {
				h();
			} finally {
				$e();
			}
		}
		let t = vn;
		vn = f;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			vn = t;
		}
	} : c, t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => xn(e(), t);
	}
	let x = Pe(), S = () => {
		f.stop(), x && x.active && p(x.effects, f);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = y ? Array(e.length).fill(gn) : gn, ee = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let n = f.run();
			if (e || i || v || (y ? n.some((e, t) => T(e, C[t])) : T(n, C))) {
				h && h();
				let e = vn;
				vn = f;
				try {
					let e = [
						n,
						C === gn ? void 0 : y && C[0] === gn ? [] : C,
						_
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					vn = e;
				}
			}
		} else f.run();
	};
	return l && l(ee), f = new Le(m), f.scheduler = s ? () => s(ee, !1) : ee, _ = (e) => yn(e, !1, f), h = f.onStop = () => {
		let e = _n.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			_n.delete(f);
		}
	}, t ? r ? ee(!0) : C = f.run() : s ? s(ee.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function xn(e, t = Infinity, n) {
	if (t <= 0 || !C(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ M(e)) xn(e.value, t, n);
	else if (g(e)) for (let r = 0; r < e.length; r++) xn(e[r], t, n);
	else if (v(e) || _(e)) e.forEach((e) => {
		xn(e, t, n);
	});
	else if (ie(e)) {
		for (let r in e) xn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && xn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Sn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		wn(e, t, n);
	}
}
function Cn(e, t, n, r) {
	if (b(e)) {
		let i = Sn(e, t, n, r);
		return i && ee(i) && i.catch((e) => {
			wn(e, t, n);
		}), i;
	}
	if (g(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Cn(e[a], t, n, r));
		return i;
	}
}
function wn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: s } = t && t.appContext.config || o;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (a) {
			Qe(), Sn(a, null, 10, [
				e,
				i,
				o
			]), $e();
			return;
		}
	}
	Tn(e, n, i, r, s);
}
function Tn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var F = [], En = -1, Dn = [], On = null, kn = 0, An = /* @__PURE__ */ Promise.resolve(), jn = null;
function Mn(e) {
	let t = jn || An;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nn(e) {
	let t = En + 1, n = F.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = F[r], a = zn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Pn(e) {
	if (!(e.flags & 1)) {
		let t = zn(e), n = F[F.length - 1];
		!n || !(e.flags & 2) && t >= zn(n) ? F.push(e) : F.splice(Nn(t), 0, e), e.flags |= 1, Fn();
	}
}
function Fn() {
	jn ||= An.then(Bn);
}
function In(e) {
	g(e) ? Dn.push(...e) : On && e.id === -1 ? On.splice(kn + 1, 0, e) : e.flags & 1 || (Dn.push(e), e.flags |= 1), Fn();
}
function Ln(e, t, n = En + 1) {
	for (; n < F.length; n++) {
		let t = F[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			F.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Rn(e) {
	if (Dn.length) {
		let e = [...new Set(Dn)].sort((e, t) => zn(e) - zn(t));
		if (Dn.length = 0, On) {
			On.push(...e);
			return;
		}
		for (On = e, kn = 0; kn < On.length; kn++) {
			let e = On[kn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		On = null, kn = 0;
	}
}
var zn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Bn(e) {
	try {
		for (En = 0; En < F.length; En++) {
			let e = F[En];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Sn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; En < F.length; En++) {
			let e = F[En];
			e && (e.flags &= -2);
		}
		En = -1, F.length = 0, Rn(e), jn = null, (F.length || Dn.length) && Bn(e);
	}
}
var I = null, Vn = null;
function Hn(e) {
	let t = I;
	return I = e, Vn = e && e.type.__scopeId || null, t;
}
function Un(e, t = I, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ea(-1);
		let i = Hn(t), a;
		try {
			a = e(...n);
		} finally {
			Hn(i), r._d && ea(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function L(e, t) {
	if (I === null) return e;
	let n = Fa(I), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, s, c = o] = t[e];
		i && (b(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && xn(a), r.push({
			dir: i,
			instance: n,
			value: a,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Wn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Qe(), Cn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), $e());
	}
}
function Gn(e, t) {
	if (ya) {
		let n = ya.provides, r = ya.parent && ya.parent.provides;
		r === n && (n = ya.provides = Object.create(r)), n[e] = t;
	}
}
function Kn(e, t, n = !1) {
	let r = ba();
	if (r || ti) {
		let i = ti ? ti._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && b(t) ? t.call(r && r.proxy) : t;
	}
}
function qn() {
	return !!(ba() || ti);
}
var Jn = /* @__PURE__ */ Symbol.for("v-scx"), Yn = () => Kn(Jn);
function Xn(e, t) {
	return Qn(e, null, { flush: "sync" });
}
function Zn(e, t, n) {
	return Qn(e, t, n);
}
function Qn(e, t, n = o) {
	let { immediate: r, deep: i, flush: a, once: s } = n, l = f({}, n), u = t && r || !t && a !== "post", d;
	if (Ea) {
		if (a === "sync") {
			let e = Yn();
			d = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = c, e.resume = c, e.pause = c, e;
		}
	}
	let p = ya;
	l.call = (e, t, n) => Cn(e, p, t, n);
	let m = !1;
	a === "post" ? l.scheduler = (e) => {
		Pi(e, p && p.suspense);
	} : a !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : Pn(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = bn(e, t, l);
	return Ea && (d ? d.push(h) : u && h()), h;
}
function $n(e, t, n) {
	let r = this.proxy, i = x(e) ? e.includes(".") ? er(r, e) : () => r[e] : e.bind(r, r), a;
	b(t) ? a = t : (a = t.handler, n = t);
	let o = Ca(this), s = Qn(i, a.bind(r), n);
	return o(), s;
}
function er(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var tr = /* @__PURE__ */ Symbol("_vte"), nr = (e) => e.__isTeleport, rr = /* @__PURE__ */ Symbol("_leaveCb");
function ir(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, ir(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
	return b(e) ? /* @__PURE__ */ f({ name: e.name }, t, { setup: e }) : e;
}
function ar(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function or(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var sr = /* @__PURE__ */ new WeakMap();
function cr(e, t, n, r, i = !1) {
	if (g(e)) {
		e.forEach((e, a) => cr(e, t && (g(t) ? t[a] : t), n, r, i));
		return;
	}
	if (ur(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && cr(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? Fa(r.component) : r.el, s = i ? null : a, { i: c, r: u } = e, d = t && t.r, f = c.refs === o ? c.refs = {} : c.refs, m = c.setupState, _ = /* @__PURE__ */ j(m), v = m === o ? l : (e) => or(f, e) ? !1 : h(_, e), y = (e, t) => !(t && or(f, t));
	if (d != null && d !== u) {
		if (lr(t), x(d)) f[d] = null, v(d) && (m[d] = null);
		else if (/* @__PURE__ */ M(d)) {
			let e = t;
			y(d, e.k) && (d.value = null), e.k && (f[e.k] = null);
		}
	}
	if (b(u)) Sn(u, c, 12, [s, f]);
	else {
		let t = x(u), r = /* @__PURE__ */ M(u);
		if (t || r) {
			let o = () => {
				if (e.f) {
					let n = t ? v(u) ? m[u] : f[u] : y(u) || !e.k ? u.value : f[e.k];
					if (i) g(n) && p(n, a);
					else if (g(n)) n.includes(a) || n.push(a);
					else if (t) f[u] = [a], v(u) && (m[u] = f[u]);
					else {
						let t = [a];
						y(u, e.k) && (u.value = t), e.k && (f[e.k] = t);
					}
				} else t ? (f[u] = s, v(u) && (m[u] = s)) : r && (y(u, e.k) && (u.value = s), e.k && (f[e.k] = s));
			};
			if (s) {
				let t = () => {
					o(), sr.delete(e);
				};
				t.id = -1, sr.set(e, t), Pi(t, n);
			} else lr(e), o();
		}
	}
}
function lr(e) {
	let t = sr.get(e);
	t && (t.flags |= 8, sr.delete(e));
}
_e().requestIdleCallback, _e().cancelIdleCallback;
var ur = (e) => !!e.type.__asyncLoader, dr = (e) => e.type.__isKeepAlive;
function fr(e, t) {
	mr(e, "a", t);
}
function pr(e, t) {
	mr(e, "da", t);
}
function mr(e, t, n = ya) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (gr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) dr(e.parent.vnode) && hr(r, t, n, e), e = e.parent;
	}
}
function hr(e, t, n, r) {
	let i = gr(t, e, r, !0);
	Cr(() => {
		p(r[t], i);
	}, n);
}
function gr(e, t, n = ya, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Qe();
			let i = Ca(n), a = Cn(t, n, e, r);
			return i(), $e(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var _r = (e) => (t, n = ya) => {
	(!Ea || e === "sp") && gr(e, (...e) => t(...e), n);
}, vr = _r("bm"), yr = _r("m"), br = _r("bu"), xr = _r("u"), Sr = _r("bum"), Cr = _r("um"), wr = _r("sp"), Tr = _r("rtg"), Er = _r("rtc");
function Dr(e, t = ya) {
	gr("ec", e, t);
}
var Or = /* @__PURE__ */ Symbol.for("v-ndc");
function z(e, t, n, r) {
	let i, a = n && n[r], o = g(e);
	if (o || x(e)) {
		let n = o && /* @__PURE__ */ Jt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Xt(e), s = /* @__PURE__ */ Yt(e), e = ft(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? en($t(e[n])) : $t(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (C(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
function kr(e, t, n = {}, r, i) {
	if (I.ce || I.parent && ur(I.parent) && I.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), V(), na(B, null, [W("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), V();
	let o = a && Ar(a(n)), s = n.key || o && o.key, c = na(B, { key: (s && !S(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Ar(e) {
	return e.some((e) => ra(e) ? !(e.type === Ji || e.type === B && !Ar(e.children)) : !0) ? e : null;
}
var jr = (e) => e ? Ta(e) ? Fa(e) : jr(e.parent) : null, Mr = /* @__PURE__ */ f(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => jr(e.parent),
	$root: (e) => jr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Hr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Pn(e.update);
	},
	$nextTick: (e) => e.n ||= Mn.bind(e.proxy),
	$watch: (e) => $n.bind(e)
}), Nr = (e, t) => e !== o && !e.__isScriptSetup && h(e, t), Pr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (Nr(r, t)) return s[t] = 1, r[t];
			else if (i !== o && h(i, t)) return s[t] = 2, i[t];
			else if (h(a, t)) return s[t] = 3, a[t];
			else if (n !== o && h(n, t)) return s[t] = 4, n[t];
			else Lr && (s[t] = 0);
		}
		let u = Mr[t], d, f;
		if (u) return t === "$attrs" && A(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== o && h(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, h(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Nr(i, t) ? (i[t] = n, !0) : r !== o && h(r, t) ? (r[t] = n, !0) : h(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: s } }, c) {
		let l;
		return !!(n[c] || e !== o && c[0] !== "$" && h(e, c) || Nr(t, c) || h(a, c) || h(r, c) || h(Mr, c) || h(i.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? h(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Fr(e) {
	return g(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Ir(e, t) {
	return !e || !t ? e || t : g(e) && g(t) ? e.concat(t) : f({}, Fr(e), Fr(t));
}
var Lr = !0;
function Rr(e) {
	let t = Hr(e), n = e.proxy, r = e.ctx;
	Lr = !1, t.beforeCreate && Br(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: h, activated: _, deactivated: v, beforeDestroy: y, beforeUnmount: x, destroyed: S, unmounted: ee, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: ie, serverPrefetch: ae, expose: oe, inheritAttrs: se, components: ce, directives: le, filters: ue } = t;
	if (u && zr(u, r, null), o) for (let e in o) {
		let t = o[e];
		b(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		C(t) && (e.data = /* @__PURE__ */ Wt(t));
	}
	if (Lr = !0, a) for (let e in a) {
		let t = a[e], i = q({
			get: b(t) ? t.bind(n, n) : b(t.get) ? t.get.bind(n, n) : c,
			set: !b(t) && b(t.set) ? t.set.bind(n) : c
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (s) for (let e in s) Vr(s[e], r, n, e);
	if (l) {
		let e = b(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Gn(t, e[t]);
		});
	}
	d && Br(d, e, "c");
	function w(e, t) {
		g(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (w(vr, f), w(yr, p), w(br, m), w(xr, h), w(fr, _), w(pr, v), w(Dr, ie), w(Er, ne), w(Tr, re), w(Sr, x), w(Cr, ee), w(wr, ae), g(oe)) if (oe.length) {
		let t = e.exposed ||= {};
		oe.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === c && (e.render = te), se != null && (e.inheritAttrs = se), ce && (e.components = ce), le && (e.directives = le), ae && ar(e);
}
function zr(e, t, n = c) {
	g(e) && (e = qr(e));
	for (let n in e) {
		let r = e[n], i;
		i = C(r) ? "default" in r ? Kn(r.from || n, r.default, !0) : Kn(r.from || n) : Kn(r), /* @__PURE__ */ M(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Br(e, t, n) {
	Cn(g(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Vr(e, t, n, r) {
	let i = r.includes(".") ? er(n, r) : () => n[r];
	if (x(e)) {
		let n = t[e];
		b(n) && Zn(i, n);
	} else if (b(e)) Zn(i, e.bind(n));
	else if (C(e)) if (g(e)) e.forEach((e) => Vr(e, t, n, r));
	else {
		let r = b(e.handler) ? e.handler.bind(n) : t[e.handler];
		b(r) && Zn(i, r, e);
	}
}
function Hr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ur(c, e, o, !0)), Ur(c, t, o)), C(t) && a.set(t, c), c;
}
function Ur(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ur(e, a, n, !0), i && i.forEach((t) => Ur(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Wr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Wr = {
	data: Gr,
	props: Xr,
	emits: Xr,
	methods: Yr,
	computed: Yr,
	beforeCreate: Jr,
	created: Jr,
	beforeMount: Jr,
	mounted: Jr,
	beforeUpdate: Jr,
	updated: Jr,
	beforeDestroy: Jr,
	beforeUnmount: Jr,
	destroyed: Jr,
	unmounted: Jr,
	activated: Jr,
	deactivated: Jr,
	errorCaptured: Jr,
	serverPrefetch: Jr,
	components: Yr,
	directives: Yr,
	watch: Zr,
	provide: Gr,
	inject: Kr
};
function Gr(e, t) {
	return t ? e ? function() {
		return f(b(e) ? e.call(this, this) : e, b(t) ? t.call(this, this) : t);
	} : t : e;
}
function Kr(e, t) {
	return Yr(qr(e), qr(t));
}
function qr(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Jr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Yr(e, t) {
	return e ? f(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xr(e, t) {
	return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : f(/* @__PURE__ */ Object.create(null), Fr(e), Fr(t ?? {})) : t;
}
function Zr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = f(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Jr(e[r], t[r]);
	return n;
}
function Qr() {
	return {
		app: null,
		config: {
			isNativeTag: l,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var $r = 0;
function ei(e, t) {
	return function(n, r = null) {
		b(n) || (n = f({}, n)), r != null && !C(r) && (r = null);
		let i = Qr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: $r++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: La,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && b(e.install) ? (a.add(e), e.install(c, ...t)) : b(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || W(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Fa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Cn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = ti;
				ti = c;
				try {
					return e();
				} finally {
					ti = t;
				}
			}
		};
		return c;
	};
}
var ti = null;
function ni(e, t, n = o) {
	let r = ba(), i = le(t), a = w(t), s = ri(e, i), c = cn((s, c) => {
		let l, u = o, d;
		return Xn(() => {
			let t = e[i];
			T(l, t) && (l = t, c());
		}), {
			get() {
				return s(), n.get ? n.get(l) : l;
			},
			set(e) {
				let s = n.set ? n.set(e) : e;
				if (!T(s, l) && !(u !== o && T(e, u))) return;
				let f = r.vnode.props, p = !!(f && (t in f || i in f || a in f) && (`onUpdate:${t}` in f || `onUpdate:${i}` in f || `onUpdate:${a}` in f));
				p || (l = e, c()), r.emit(`update:${t}`, s), T(e, u) && (T(e, s) && !T(s, d) || p && u !== o && !T(s, l)) && c(), u = e, d = s;
			}
		};
	});
	return c[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? s || o : c,
				done: !1
			} : { done: !0 };
		} };
	}, c;
}
var ri = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${le(t)}Modifiers`] || e[`${w(t)}Modifiers`];
function ii(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || o, i = n, a = t.startsWith("update:"), s = a && ri(r, t.slice(7));
	s && (s.trim && (i = n.map((e) => x(e) ? e.trim() : e)), s.number && (i = n.map(he)));
	let c, l = r[c = fe(t)] || r[c = fe(le(t))];
	!l && a && (l = r[c = fe(w(t))]), l && Cn(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Cn(u, e, 6, i);
	}
}
var ai = /* @__PURE__ */ new WeakMap();
function oi(e, t, n = !1) {
	let r = n ? ai : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!b(e)) {
		let r = (e) => {
			let n = oi(e, t, !0);
			n && (s = !0, f(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (C(e) && r.set(e, null), null) : (g(a) ? a.forEach((e) => o[e] = null) : f(o, a), C(e) && r.set(e, o), o);
}
function si(e, t) {
	return !e || !u(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), h(e, t[0].toLowerCase() + t.slice(1)) || h(e, w(t)) || h(e, t));
}
function ci(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Hn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = da(l.call(t, e, u, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = da(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : li(s);
		}
	} catch (t) {
		Xi.length = 0, wn(t, e, 1), v = W(Ji);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(d) && (y = di(y, a)), b = la(b, y, !1, !0));
	}
	return n.dirs && (b = la(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && ir(b, n.transition), v = b, Hn(_), v;
}
var li = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || u(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, di = (e, t) => {
	let n = {};
	for (let r in e) (!d(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function fi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? pi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (mi(o, r, n) && !si(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? pi(r, o, l) : !0 : !!o;
	return !1;
}
function pi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (mi(t, e, a) && !si(n, a)) return !0;
	}
	return !1;
}
function mi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && C(r) && C(i) ? !De(r, i) : r !== i;
}
function hi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var gi = {}, _i = () => Object.create(gi), vi = (e) => Object.getPrototypeOf(e) === gi;
function yi(e, t, n, r = !1) {
	let i = {}, a = _i();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), xi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Gt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function bi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ j(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (si(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (h(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = le(o);
					i[t] = Si(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		xi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !h(t, a) && ((r = w(a)) === a || !h(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Si(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !h(t, e)) && (delete a[e], l = !0);
	}
	l && lt(e.attrs, "set", "");
}
function xi(e, t, n, r) {
	let [i, a] = e.propsOptions, s = !1, c;
	if (t) for (let o in t) {
		if (oe(o)) continue;
		let l = t[o], u;
		i && h(i, u = le(o)) ? !a || !a.includes(u) ? n[u] = l : (c ||= {})[u] = l : si(e.emitsOptions, o) || (!(o in r) || l !== r[o]) && (r[o] = l, s = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ j(n), r = c || o;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Si(i, t, s, r[s], e, !h(r, s));
		}
	}
	return s;
}
function Si(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = h(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && b(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ca(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === w(n)) && (r = !0));
	}
	return r;
}
var Ci = /* @__PURE__ */ new WeakMap();
function wi(e, t, n = !1) {
	let r = n ? Ci : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, c = {}, l = [], u = !1;
	if (!b(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = wi(e, t, !0);
			f(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !u) return C(e) && r.set(e, s), s;
	if (g(a)) for (let e = 0; e < a.length; e++) {
		let t = le(a[e]);
		Ti(t) && (c[t] = o);
	}
	else if (a) for (let e in a) {
		let t = le(e);
		if (Ti(t)) {
			let n = a[e], r = c[t] = g(n) || b(n) ? { type: n } : f({}, n), i = r.type, o = !1, s = !0;
			if (g(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = b(t) && t.name;
				if (n === "Boolean") {
					o = !0;
					break;
				} else n === "String" && (s = !1);
			}
			else o = b(i) && i.name === "Boolean";
			r[0] = o, r[1] = s, (o || h(r, "default")) && l.push(t);
		}
	}
	let d = [c, l];
	return C(e) && r.set(e, d), d;
}
function Ti(e) {
	return e[0] !== "$" && !oe(e);
}
var Ei = (e) => e === "_" || e === "_ctx" || e === "$stable", Di = (e) => g(e) ? e.map(da) : [da(e)], Oi = (e, t, n) => {
	if (t._n) return t;
	let r = Un((...e) => Di(t(...e)), n);
	return r._c = !1, r;
}, ki = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ei(n)) continue;
		let i = e[n];
		if (b(i)) t[n] = Oi(n, i, r);
		else if (i != null) {
			let e = Di(i);
			t[n] = () => e;
		}
	}
}, Ai = (e, t) => {
	let n = Di(t);
	e.slots.default = () => n;
}, ji = (e, t, n) => {
	for (let r in t) (n || !Ei(r)) && (e[r] = t[r]);
}, Mi = (e, t, n) => {
	let r = e.slots = _i();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ji(r, t, n), n && me(r, "_", e, !0)) : ki(t, r);
	} else t && Ai(e, t);
}, Ni = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, s = o;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : ji(i, t, n) : (a = !t.$stable, ki(t, i)), s = t;
	} else t && (Ai(e, t), s = { default: 1 });
	if (a) for (let e in i) !Ei(e) && s[e] == null && delete i[e];
}, Pi = Ki;
function Fi(e) {
	return Ii(e);
}
function Ii(e, t) {
	let n = _e();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = c, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ia(e, t) && (r = E(e), ve(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case qi:
				y(e, t, n, r);
				break;
			case Ji:
				b(e, t, n, r);
				break;
			case Yi:
				e ?? x(t, n, r, o);
				break;
			case B:
				ce(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? le(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Te);
		}
		u != null && i ? cr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && cr(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = u(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = d(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = h(e), r(e, n, i), e = a;
		r(t, n, i);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, ee = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ie(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, i, o, s, c, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, s, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && re(e.children, d, null, i, o, Li(e, s), c, u), _ && Wn(e, null, i, "created"), ne(d, e, e.scopeId, c, i), m) {
			for (let e in m) e !== "value" && !oe(e) && a(d, e, null, m[e], s, i);
			"value" in m && a(d, "value", null, m.value, s), (f = m.onVnodeBeforeMount) && ha(f, i, e);
		}
		_ && Wn(e, null, i, "beforeMount");
		let v = zi(o, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Pi(() => {
			try {
				f && ha(f, i, e), v && g.enter(d), _ && Wn(e, null, i, "mounted");
			} finally {}
		}, o);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Gi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, re = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? fa(e[l]) : da(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, t, n, r, i, s, c) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || o, h = t.props || o, g;
		if (n && Ri(n, !1), (g = h.onVnodeBeforeUpdate) && ha(g, n, t, e), f && Wn(t, e, n, "beforeUpdate"), n && Ri(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, n, r, Li(t, i), s) : c || T(e, t, l, null, n, r, Li(t, i), s, !1), u > 0) {
			if (u & 16) se(l, m, h, n, i);
			else if (u & 2 && m.class !== h.class && a(l, "class", null, h.class, i), u & 4 && a(l, "style", m.style, h.style, i), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = m[r], s = h[r];
					(s !== o || r === "value") && a(l, r, o, s, i, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !c && d == null && se(l, m, h, n, i);
		((g = h.onVnodeUpdated) || f) && Pi(() => {
			g && ha(g, n, t, e), f && Wn(t, e, n, "updated");
		}, r);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === B || !ia(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, se = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== o) for (let o in t) !oe(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (oe(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, ce = (e, t, n, i, a, o, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), re(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Bi(e, t, !0)) : T(e, t, n, f, a, o, s, c, l);
	}, le = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ue(t, n, r, i, a, o, c) : w(e, t, c);
	}, ue = (e, t, n, r, i, a, o) => {
		let s = e.component = va(e, r, i);
		if (dr(e) && (s.ctx.renderer = Te), Da(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o), !e.el) {
				let r = s.subTree = W(Ji);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, w = (e, t, n) => {
		let r = t.component = e.component;
		if (fi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			fe(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, de = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Hi(e);
					if (n) {
						t && (t.el = c.el, fe(e, t, o)), n.asyncDep.then(() => {
							Pi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ri(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && pe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ha(d, s, t, c), Ri(e, !0);
				let f = ci(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), E(p), e, i, a), t.el = f.el, u === null && hi(e, f.el), r && Pi(r, i), (d = t.props && t.props.onVnodeUpdated) && Pi(() => ha(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = ur(t);
				if (Ri(e, !1), l && pe(l), !m && (o = c && c.onVnodeBeforeMount) && ha(o, d, t), Ri(e, !0), s && De) {
					let t = () => {
						e.subTree = ci(e), De(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ci(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Pi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Pi(() => ha(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && ur(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Pi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Le(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Pn(u), Ri(e, !0), l();
	}, fe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, bi(e, t.props, r, n), Ni(e, t.children, n), Qe(), Ln(e), $e();
	}, T = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && Se(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : Se(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && re(d, n, r, i, a, o, s, c));
	}, me = (e, t, n, r, i, a, o, c, l) => {
		e ||= s, t ||= s;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? fa(t[p]) : da(t[p]);
			v(e[p], r, n, null, i, a, o, c, l);
		}
		u > d ? Se(e, i, a, !0, !1, f) : re(t, n, r, i, a, o, c, l, f);
	}, he = (e, t, n, r, i, a, o, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], s = t[u] = l ? fa(t[u]) : da(t[u]);
			if (ia(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], s = t[p] = l ? fa(t[p]) : da(t[p]);
			if (ia(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, s = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? fa(t[u]) : da(t[u]), n, s, i, a, o, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ve(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? fa(t[u]) : da(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					ve(r, i, a, !0);
					continue;
				}
				let s;
				if (r.key != null) s = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ia(r, t[_])) {
					s = _;
					break;
				}
				s === void 0 ? ve(r, i, a, !0) : (C[s - h] = u + 1, s >= S ? S = s : x = !0, v(r, t[s], n, null, i, a, o, c, l), y++);
			}
			let ee = x ? Vi(C) : s;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, s = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Wi(f) : r;
				C[u] === 0 ? v(null, s, n, p, i, a, o, c, l) : x && (_ < 0 || u !== ee[_] ? ge(s, n, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			ge(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Te);
			return;
		}
		if (c === B) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Yi) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[rr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), Pi(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[rr];
				s._isLeaving && s[rr](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, ve = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Qe(), cr(s, null, n, e, !0), $e()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !ur(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ha(_, t, e), u & 6) xe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Wn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Te, r) : l && !l.hasOnce && (a !== B || d > 0 && d & 64) ? Se(l, t, n, !1, !0) : (a === B && d & 384 || !i && u & 16) && Se(c, t, n), r && ye(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Pi(() => {
			_ && ha(_, t, e), h && Wn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ye = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === B) {
			be(n, r);
			return;
		}
		if (t === Yi) {
			C(e);
			return;
		}
		let o = () => {
			i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (e.shapeFlag & 1 && a && !a.persisted) {
			let { leave: t, delayLeave: r } = a, i = () => t(n, o);
			r ? r(e.el, o, i) : i();
		} else o();
	}, be = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, xe = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ui(c), Ui(l), r && pe(r), i.stop(), a && (a.flags |= 8, ve(o, e, t, n)), s && Pi(s, t), Pi(() => {
			e.isUnmounted = !0;
		}, t);
	}, Se = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ve(e[o], t, n, r, i);
	}, E = (e) => {
		if (e.shapeFlag & 6) return E(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[tr];
		return n ? h(n) : t;
	}, Ce = !1, we = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ve(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Ce ||= (Ce = !0, Ln(r), Rn(), !1);
	}, Te = {
		p: v,
		um: ve,
		m: ge,
		r: ye,
		mt: ue,
		mc: re,
		pc: T,
		pbc: ae,
		n: E,
		o: e
	}, Ee, De;
	return t && ([Ee, De] = t(Te)), {
		render: we,
		hydrate: Ee,
		createApp: ei(we, Ee)
	};
}
function Li({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ri({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function zi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Bi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (g(r) && g(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = fa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Bi(t, a)), a.type === qi && (a.patchFlag === -1 && (a = i[e] = fa(a)), a.el = t.el), a.type === Ji && !a.el && (a.el = t.el);
	}
}
function Vi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Hi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Hi(t);
}
function Ui(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Wi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Wi(t.subTree) : null;
}
var Gi = (e) => e.__isSuspense;
function Ki(e, t) {
	t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : In(e);
}
var B = /* @__PURE__ */ Symbol.for("v-fgt"), qi = /* @__PURE__ */ Symbol.for("v-txt"), Ji = /* @__PURE__ */ Symbol.for("v-cmt"), Yi = /* @__PURE__ */ Symbol.for("v-stc"), Xi = [], Zi = null;
function V(e = !1) {
	Xi.push(Zi = e ? null : []);
}
function Qi() {
	Xi.pop(), Zi = Xi[Xi.length - 1] || null;
}
var $i = 1;
function ea(e, t = !1) {
	$i += e, e < 0 && Zi && t && (Zi.hasOnce = !0);
}
function ta(e) {
	return e.dynamicChildren = $i > 0 ? Zi || s : null, Qi(), $i > 0 && Zi && Zi.push(e), e;
}
function H(e, t, n, r, i, a) {
	return ta(U(e, t, n, r, i, a, !0));
}
function na(e, t, n, r, i) {
	return ta(W(e, t, n, r, i, !0));
}
function ra(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
	return e.type === t.type && e.key === t.key;
}
var aa = ({ key: e }) => e ?? null, oa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : x(e) || /* @__PURE__ */ M(e) || b(e) ? {
	i: I,
	r: e,
	k: t,
	f: !!n
} : e);
function U(e, t = null, n = null, r = 0, i = null, a = e === B ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && aa(t),
		ref: t && oa(t),
		scopeId: Vn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: I
	};
	return s ? (pa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= x(n) ? 8 : 16), $i > 0 && !o && Zi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Zi.push(c), c;
}
var W = sa;
function sa(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Or) && (e = Ji), ra(e)) {
		let r = la(e, t, !0);
		return n && pa(r, n), $i > 0 && !a && Zi && (r.shapeFlag & 6 ? Zi[Zi.indexOf(e)] = r : Zi.push(r)), r.patchFlag = -2, r;
	}
	if (Ia(e) && (e = e.__vccOpts), t) {
		t = ca(t);
		let { class: e, style: n } = t;
		e && !x(e) && (t.class = E(e)), C(n) && (/* @__PURE__ */ Zt(n) && !g(n) && (n = f({}, n)), t.style = ve(n));
	}
	let o = x(e) ? 1 : Gi(e) ? 128 : nr(e) ? 64 : C(e) ? 4 : b(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function ca(e) {
	return e ? /* @__PURE__ */ Zt(e) || vi(e) ? f({}, e) : e : null;
}
function la(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ma(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && aa(l),
		ref: t && t.ref ? n && a ? g(a) ? a.concat(oa(t)) : [a, oa(t)] : oa(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== B ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && la(e.ssContent),
		ssFallback: e.ssFallback && la(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && ir(u, c.clone(u)), u;
}
function G(e = " ", t = 0) {
	return W(qi, null, e, t);
}
function ua(e, t) {
	let n = W(Yi, null, e);
	return n.staticCount = t, n;
}
function K(e = "", t = !1) {
	return t ? (V(), na(Ji, null, e)) : W(Ji, null, e);
}
function da(e) {
	return e == null || typeof e == "boolean" ? W(Ji) : g(e) ? W(B, null, e.slice()) : ra(e) ? fa(e) : W(qi, null, String(e));
}
function fa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : la(e);
}
function pa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (g(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), pa(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !vi(t) ? t._ctx = I : r === 3 && I && (I.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else b(t) ? (t = {
		default: t,
		_ctx: I
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [G(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ma(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = E([t.class, r.class]));
		else if (e === "style") t.style = ve([t.style, r.style]);
		else if (u(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(g(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !d(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ha(e, t, n, r = null) {
	Cn(e, t, 7, [n, r]);
}
var ga = Qr(), _a = 0;
function va(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || ga, a = {
		uid: _a++,
		vnode: e,
		type: r,
		parent: t,
		appContext: i,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Me(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(i.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: wi(r, i),
		emitsOptions: oi(r, i),
		emit: null,
		emitted: null,
		propsDefaults: o,
		inheritAttrs: r.inheritAttrs,
		ctx: o,
		data: o,
		props: o,
		attrs: o,
		slots: o,
		refs: o,
		setupState: o,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ii.bind(null, a), e.ce && e.ce(a), a;
}
var ya = null, ba = () => ya || I, xa, Sa;
{
	let e = _e(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	xa = t("__VUE_INSTANCE_SETTERS__", (e) => ya = e), Sa = t("__VUE_SSR_SETTERS__", (e) => Ea = e);
}
var Ca = (e) => {
	let t = ya;
	return xa(e), e.scope.on(), () => {
		e.scope.off(), xa(t);
	};
}, wa = () => {
	ya && ya.scope.off(), xa(null);
};
function Ta(e) {
	return e.vnode.shapeFlag & 4;
}
var Ea = !1;
function Da(e, t = !1, n = !1) {
	t && Sa(t);
	let { props: r, children: i } = e.vnode, a = Ta(e);
	yi(e, r, a, t), Mi(e, i, n || t);
	let o = a ? Oa(e, t) : void 0;
	return t && Sa(!1), o;
}
function Oa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pr);
	let { setup: r } = n;
	if (r) {
		Qe();
		let n = e.setupContext = r.length > 1 ? Pa(e) : null, i = Ca(e), a = Sn(r, e, 0, [e.props, n]), o = ee(a);
		if ($e(), i(), (o || e.sp) && !ur(e) && ar(e), o) {
			if (a.then(wa, wa), t) return a.then((n) => {
				ka(e, n, t);
			}).catch((t) => {
				wn(t, e, 0);
			});
			e.asyncDep = a;
		} else ka(e, a, t);
	} else Ma(e, t);
}
function ka(e, t, n) {
	b(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : C(t) && (e.setupState = on(t)), Ma(e, n);
}
var Aa, ja;
function Ma(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Aa && !r.render) {
			let t = r.template || Hr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Aa(t, f(f({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || c, ja && ja(e);
	}
	{
		let t = Ca(e);
		Qe();
		try {
			Rr(e);
		} finally {
			$e(), t();
		}
	}
}
var Na = { get(e, t) {
	return A(e, "get", ""), e[t];
} };
function Pa(e) {
	return {
		attrs: new Proxy(e.attrs, Na),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Fa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(on(Qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Mr) return Mr[n](e);
		},
		has(e, t) {
			return t in e || t in Mr;
		}
	}) : e.proxy;
}
function Ia(e) {
	return b(e) && "__vccOpts" in e;
}
var q = (e, t) => /* @__PURE__ */ hn(e, t, Ea), La = "3.5.38", Ra = void 0, za = typeof window < "u" && window.trustedTypes;
if (za) try {
	Ra = /* @__PURE__ */ za.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ba = Ra ? (e) => Ra.createHTML(e) : (e) => e, Va = "http://www.w3.org/2000/svg", Ha = "http://www.w3.org/1998/Math/MathML", Ua = typeof document < "u" ? document : null, Wa = Ua && /* @__PURE__ */ Ua.createElement("template"), Ga = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ua.createElementNS(Va, e) : t === "mathml" ? Ua.createElementNS(Ha, e) : n ? Ua.createElement(e, { is: n }) : Ua.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ua.createTextNode(e),
	createComment: (e) => Ua.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ua.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Wa.innerHTML = Ba(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Wa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ka = /* @__PURE__ */ Symbol("_vtc");
function qa(e, t, n) {
	let r = e[Ka];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ja = /* @__PURE__ */ Symbol("_vod"), Ya = /* @__PURE__ */ Symbol("_vsh"), Xa = /* @__PURE__ */ Symbol(""), Za = /(?:^|;)\s*display\s*:/;
function Qa(e, t, n) {
	let r = e.style, i = x(n), a = !1;
	if (n && !i) {
		if (t) if (x(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? eo(r, t, "");
		}
		else for (let e in t) n[e] ?? eo(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? eo(r, i, "") : io(e, i, !x(t) && t ? t[i] : void 0, o) || eo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Xa];
			e && (n += ";" + e), r.cssText = n, a = Za.test(n);
		}
	} else t && e.removeAttribute("style");
	Ja in e && (e[Ja] = a ? r.display : "", e[Ya] && (r.display = "none"));
}
var $a = /\s*!important$/;
function eo(e, t, n) {
	if (g(n)) n.forEach((n) => eo(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = ro(e, t);
		$a.test(n) ? e.setProperty(w(r), n.replace($a, ""), "important") : e[r] = n;
	}
}
var to = [
	"Webkit",
	"Moz",
	"ms"
], no = {};
function ro(e, t) {
	let n = no[t];
	if (n) return n;
	let r = le(t);
	if (r !== "filter" && r in e) return no[t] = r;
	r = de(r);
	for (let n = 0; n < to.length; n++) {
		let i = to[n] + r;
		if (i in e) return no[t] = i;
	}
	return t;
}
function io(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && x(r) && n === r;
}
var ao = "http://www.w3.org/1999/xlink";
function oo(e, t, n, r, i, a = we(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ao, t.slice(6, t.length)) : e.setAttributeNS(ao, t, n) : n == null || a && !Te(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : S(n) ? String(n) : n);
}
function so(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ba(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Te(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function co(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function lo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var uo = /* @__PURE__ */ Symbol("_vei");
function fo(e, t, n, r, i = null) {
	let a = e[uo] || (e[uo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = mo(t);
		r ? co(e, n, a[t] = vo(r, i), s) : o && (lo(e, n, o, s), a[t] = void 0);
	}
}
var po = /(?:Once|Passive|Capture)$/;
function mo(e) {
	let t;
	if (po.test(e)) {
		t = {};
		let n;
		for (; n = e.match(po);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : w(e.slice(2)), t];
}
var ho = 0, go = /* @__PURE__ */ Promise.resolve(), _o = () => ho ||= (go.then(() => ho = 0), Date.now());
function vo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (g(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && Cn(e, t, 5, a);
			}
		} else Cn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = _o(), n;
}
var yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, bo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? qa(e, r, o) : t === "style" ? Qa(e, n, r) : u(t) ? d(t) || fo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xo(e, t, r, o)) ? (so(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && oo(e, t, r, o, a, t !== "value")) : e._isVueCE && (So(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !x(r))) ? so(e, le(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), oo(e, t, r, o));
};
function xo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && yo(t) && b(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return yo(t) && x(n) ? !1 : t in e;
}
function So(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = le(t);
	return Array.isArray(n) ? n.some((e) => le(e) === r) : Object.keys(n).some((e) => le(e) === r);
}
var Co = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return g(t) ? (e) => pe(t, e) : t;
};
function wo(e) {
	e.target.composing = !0;
}
function To(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Eo = /* @__PURE__ */ Symbol("_assign");
function Do(e, t, n) {
	return t && (e = e.trim()), n && (e = he(e)), e;
}
var Oo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Eo] = Co(i);
		let a = r || i.props && i.props.type === "number";
		co(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Eo](Do(e.value, n, a));
		}), (n || a) && co(e, "change", () => {
			e.value = Do(e.value, n, a);
		}), t || (co(e, "compositionstart", wo), co(e, "compositionend", To), co(e, "change", To));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Eo] = Co(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? he(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, ko = {
	deep: !0,
	created(e, t, n) {
		e[Eo] = Co(n), co(e, "change", () => {
			let t = e._modelValue, n = No(e), r = e.checked, i = e[Eo];
			if (g(t)) {
				let e = Oe(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (v(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Po(e, r));
		});
	},
	mounted: Ao,
	beforeUpdate(e, t, n) {
		e[Eo] = Co(n), Ao(e, t, n);
	}
};
function Ao(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (g(t)) i = Oe(t, r.props.value) > -1;
	else if (v(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = De(t, Po(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var jo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = v(t);
		co(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? he(No(e)) : No(e));
			e[Eo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Mn(() => {
				e._assigning = !1;
			});
		}), e[Eo] = Co(r);
	},
	mounted(e, { value: t }) {
		Mo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Eo] = Co(n);
	},
	updated(e, { value: t }) {
		e._assigning || Mo(e, t);
	}
};
function Mo(e, t) {
	let n = e.multiple, r = g(t);
	if (!(n && !r && !v(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = No(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Oe(t, o) > -1;
			} else a.selected = t.has(o);
			else if (De(No(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function No(e) {
	return "_value" in e ? e._value : e.value;
}
function Po(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Fo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Io = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => Fo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Lo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Io[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Ro = /* @__PURE__ */ f({ patchProp: bo }, Ga), zo;
function Bo() {
	return zo ||= Fi(Ro);
}
var Vo = ((...e) => {
	let t = Bo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Uo(e);
		if (!r) return;
		let i = t._component;
		!b(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Ho(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Ho(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Uo(e) {
	return x(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Wo = typeof window < "u", Go, Ko = (e) => Go = e, qo = Symbol();
function Jo(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Yo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Yo ||= {});
var Xo = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Zo(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Qo(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		rs(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function $o(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function es(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var ts = typeof navigator == "object" ? navigator : { userAgent: "" }, ns = /Macintosh/.test(ts.userAgent) && /AppleWebKit/.test(ts.userAgent) && !/Safari/.test(ts.userAgent), rs = Wo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ns ? is : "msSaveOrOpenBlob" in ts ? as : os : () => {};
function is(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? es(r) : $o(r.href) ? Qo(e, t, n) : (r.target = "_blank", es(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		es(r);
	}, 0));
}
function as(e, t = "download", n) {
	if (typeof e == "string") if ($o(e)) Qo(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			es(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Zo(e, n), t);
}
function os(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Qo(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Xo.HTMLElement)) || "safari" in Xo, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || ns) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: ss } = Object;
function cs() {
	let e = Ne(!0), t = e.run(() => /* @__PURE__ */ N({})), n = [], r = [], i = Qt({
		install(e) {
			Ko(i), i._a = e, e.provide(qo, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var ls = () => {};
function us(e, t, n, r = ls) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Pe() && Fe(i), i;
}
function ds(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var fs = (e) => e(), ps = Symbol(), ms = Symbol();
function hs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Jo(i) && Jo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ M(r) && !/* @__PURE__ */ Jt(r) ? e[n] = hs(i, r) : e[n] = r;
	}
	return e;
}
var gs = Symbol();
function _s(e) {
	return !Jo(e) || !Object.prototype.hasOwnProperty.call(e, gs);
}
var { assign: vs } = Object;
function ys(e) {
	return !!(/* @__PURE__ */ M(e) && e.effect);
}
function bs(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), vs(/* @__PURE__ */ ln(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Qt(q(() => {
			Ko(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = xs(e, l, t, n, r, !0), c;
}
function xs(e, t, n = {}, r, i, a) {
	let o, s = vs({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Yo.patchFunction,
			storeId: e,
			events: void 0
		}) : (hs(r.state.value[e], t), n = {
			type: Yo.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		Mn().then(() => {
			m === i && (l = !0);
		}), u = !0, ds(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			vs(e, t);
		});
	} : ls;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (ps in t) return t[ms] = n, t;
		let i = function() {
			Ko(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			ds(f, {
				args: n,
				name: i[ms],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw ds(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (ds(a, e), e)).catch((e) => (ds(o, e), Promise.reject(e))) : (ds(a, l), l);
		};
		return i[ps] = !0, i[ms] = n, i;
	}, y = /* @__PURE__ */ Wt({
		_p: r,
		$id: e,
		$onAction: us.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = us(d, t, n.detached, () => a()), a = o.run(() => Zn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Yo.direct,
					events: void 0
				}, r);
			}, vs({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || fs)(() => r._e.run(() => (o = Ne()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ M(n) && !ys(n) || /* @__PURE__ */ Jt(n) ? a || (p && _s(n) && (/* @__PURE__ */ M(n) ? n.value = p[t] : hs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return vs(y, b), vs(/* @__PURE__ */ j(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				vs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		vs(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Ss(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = qn();
		return n ||= o ? Kn(qo, null) : null, n && Ko(n), n = Go, n._s.has(e) || (i ? xs(e, t, r, n) : bs(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Cs(e) {
	let t = /* @__PURE__ */ j(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = q({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ M(i) || /* @__PURE__ */ Jt(i)) && (n[r] = /* @__PURE__ */ fn(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/fear-terror/payload.ts
function ws(e) {
	let t = e.type === "fear" ? 0 : 1, n = Number(e.rating), r = Number.isFinite(n) ? Math.max(0, Math.trunc(n)) : t, i = e.source?.trim();
	return i ? {
		rating: r,
		source: i,
		type: e.type
	} : {
		rating: r,
		type: e.type
	};
}
function Ts(e) {
	return e === "fear" ? "Fear" : "Terror";
}
function Es(e, t) {
	let n = t.source ? ` - ${t.source}` : "";
	return `${e} ${t.rating}${n}`;
}
function Ds(e, t) {
	return `<h2>${e}</h2>${Os(t)}`;
}
function Os(e) {
	let t = Ts(e.type), n = e.source ? `, ${e.source}` : "";
	return `@${t}[${e.rating}${n}]`;
}
//#endregion
//#region src/state/apps/fear-console/store.ts
var ks = Ss("fear-console", () => {
	let e = /* @__PURE__ */ N("fear"), t = /* @__PURE__ */ N(1), n = /* @__PURE__ */ N(""), r = /* @__PURE__ */ N([]), i = /* @__PURE__ */ N(), a = /* @__PURE__ */ N(), o, s = q(() => i.value !== void 0), c = q(() => Ts(e.value)), l = q(() => {
		let r = {
			rating: t.value,
			type: e.value
		}, i = n.value.trim();
		return i && (r.source = i), r;
	});
	function u(r) {
		o = r.actions, e.value = r.initialPayload?.type ?? "fear", t.value = r.initialPayload?.rating ?? 1, n.value = r.initialPayload?.source ?? "", d();
	}
	function d() {
		r.value = p().getActorChoices();
	}
	async function f(e) {
		if (!s.value) {
			i.value = e, a.value = void 0;
			try {
				let t = p();
				e === "post-card" ? await t.postPrompt(l.value) : e === "copy-link" ? await t.copyLink(l.value) : await t.applyToSelectedActors(l.value), d(), t.onActionComplete();
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Fear Console action failed.", e), a.value = e instanceof Error ? e.message : "The Fear or Terror action could not be completed.";
			} finally {
				i.value = void 0;
			}
		}
	}
	function p() {
		if (!o) throw Error("The Fear Console has not been initialized.");
		return o;
	}
	return {
		activeAction: i,
		actors: r,
		errorMessage: a,
		initialize: u,
		isWorking: s,
		rating: t,
		refreshActors: d,
		runAction: f,
		selectedType: e,
		selectedTypeLabel: c,
		source: n
	};
}), As = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, js = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, Ms = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:border-base-content/25! tw:py-1" }, Ns = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure Fear Console"
}, Ps = /* @__PURE__ */ R({
	__name: "FearConsoleHeader",
	props: {
		rating: {},
		selectedTypeLabel: {}
	},
	emits: ["configure"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (V(), H("header", As, [r[2] ||= U("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [U("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [U("i", { class: "fa-solid fa-skull" })])], -1), U("div", js, [U("span", Ms, D(e.selectedTypeLabel) + " " + D(e.rating), 1), U("span", Ns, [U("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure Fear Console",
			title: "Configure Fear Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[1] ||= [U("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]));
	}
}), Fs = { class: "tw:flex tw:min-h-full tw:flex-col tw:gap-4 tw:bg-base-200! tw:text-base-content tw:text-base-content!" }, Is = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mx-4",
	role: "alert"
}, Ls = {
	class: "tw:grid tw:min-w-0 tw:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] tw:gap-3 tw:px-4",
	"aria-label": "Fear and Terror setup"
}, Rs = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, zs = {
	class: "tw:grid tw:w-full tw:grid-cols-2 tw:gap-2",
	role: "group",
	"aria-label": "Effect type"
}, Bs = ["aria-pressed"], Vs = ["aria-pressed"], Hs = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Us = { class: "dui-fieldset tw:col-span-full tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Ws = {
	class: "dui-card dui-card-border tw:mx-4 tw:min-h-40 tw:flex-1 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-terror-affected-actors"
}, Gs = { class: "dui-card-body tw:gap-3 tw:p-4" }, Ks = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, qs = { class: "tw:flex tw:items-center tw:gap-2" }, Js = { class: "dui-badge dui-badge-sm" }, Ys = ["disabled"], Xs = {
	key: 0,
	class: "dui-list tw:gap-1",
	"aria-live": "polite"
}, Zs = { class: "tw:min-w-0 tw:font-semibold" }, Qs = { class: "dui-badge dui-badge-ghost tw:capitalize" }, $s = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, ec = {
	class: "tw:sticky tw:bottom-0 tw:z-10 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4",
	"aria-label": "Fear Console actions"
}, tc = { class: "dui-join tw:flex tw:w-full" }, nc = ["disabled"], rc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, ic = {
	key: 1,
	class: "fa-solid fa-message",
	"aria-hidden": "true"
}, ac = ["disabled"], oc = {
	id: "fear-console-secondary-actions",
	class: "dui-dropdown dui-dropdown-top dui-dropdown-end dui-menu tw:z-20 tw:mb-2 tw:w-52 tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100! tw:p-2 tw:text-base-content! tw:shadow-lg",
	popover: "",
	style: { "position-anchor": "--fear-console-secondary-actions" }
}, sc = ["disabled"], cc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, lc = {
	key: 1,
	class: "fa-regular fa-copy",
	"aria-hidden": "true"
}, uc = ["disabled"], dc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, fc = {
	key: 1,
	class: "fa-solid fa-bolt",
	"aria-hidden": "true"
}, pc = /* @__PURE__ */ R({
	__name: "FearConsoleApp",
	props: {
		initialPayload: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = ks();
		t.initialPayload ? n.initialize({
			actions: t.actions,
			initialPayload: t.initialPayload
		}) : n.initialize({ actions: t.actions });
		let { activeAction: r, actors: i, errorMessage: a, isWorking: o, rating: s, selectedType: c, selectedTypeLabel: l, source: u } = Cs(n);
		return (e, d) => (V(), H("main", Fs, [
			W(Ps, {
				rating: P(s),
				"selected-type-label": P(l),
				onConfigure: t.actions.openConfigurator
			}, null, 8, [
				"rating",
				"selected-type-label",
				"onConfigure"
			]),
			P(a) ? (V(), H("div", Is, [d[8] ||= U("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), U("span", null, D(P(a)), 1)])) : K("", !0),
			U("section", Ls, [
				U("fieldset", Rs, [
					d[9] ||= U("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Effect", -1),
					U("div", zs, [U("button", {
						class: E(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": P(c) === "fear" }]),
						type: "button",
						"aria-pressed": P(c) === "fear",
						onClick: d[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, Bs), U("button", {
						class: E(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": P(c) === "terror" }]),
						type: "button",
						"aria-pressed": P(c) === "terror",
						onClick: d[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, Vs)]),
					d[10] ||= U("p", { class: "dui-label tw:whitespace-normal" }, " Choose the WFRP4e psychology test to prompt or apply. ", -1)
				]),
				U("fieldset", Hs, [
					d[11] ||= U("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Difficulty", -1),
					d[12] ||= U("label", {
						class: "dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					L(U("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": d[2] ||= (e) => /* @__PURE__ */ M(s) ? s.value = e : null,
						class: "dui-input dui-validator tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						Oo,
						P(s),
						void 0,
						{ number: !0 }
					]]),
					d[13] ||= U("p", { class: "dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				U("fieldset", Us, [
					d[14] ||= ua("<legend class=\"dui-fieldset-legend tw:text-base-content!\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary!\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					L(U("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": d[3] ||= (e) => /* @__PURE__ */ M(u) ? u.value = e : null,
						autocomplete: "off",
						class: "dui-input tw:min-w-0 tw:max-w-full tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[Oo, P(u)]]),
					d[15] ||= U("p", { class: "dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			U("section", Ws, [U("div", Gs, [U("div", Ks, [U("div", qs, [d[16] ||= U("h2", {
				id: "fear-terror-affected-actors",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Affected actors ", -1), U("span", Js, D(P(i).length), 1)]), U("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: P(o),
				type: "button",
				onClick: d[4] ||= (...e) => P(n).refreshActors && P(n).refreshActors(...e)
			}, [...d[17] ||= [U("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), G(" Refresh ", -1)]], 8, Ys)]), P(i).length ? (V(), H("ul", Xs, [(V(!0), H(B, null, z(P(i), (e) => (V(), H("li", {
				key: e.id,
				class: "dui-list-row tw:items-center tw:bg-base-200!"
			}, [
				d[18] ||= U("span", {
					class: "dui-status dui-status-secondary",
					"aria-hidden": "true"
				}, null, -1),
				U("span", Zs, D(e.name), 1),
				U("span", Qs, D(e.source), 1)
			]))), 128))])) : (V(), H("div", $s, [d[19] ||= U("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), U("span", null, " Target one or more tokens to apply " + D(P(l)) + " directly. You can post a chat card without affected actors. ", 1)]))])]),
			U("footer", ec, [U("div", tc, [
				U("button", {
					class: "dui-btn dui-btn-primary dui-join-item tw:min-w-0 tw:flex-1 tw:rounded-l-full tw:shadow-md",
					disabled: P(o),
					type: "button",
					onClick: d[5] ||= (e) => P(n).runAction("post-card")
				}, [P(r) === "post-card" ? (V(), H("span", rc)) : (V(), H("i", ic)), d[20] ||= G(" Post Card ", -1)], 8, nc),
				U("button", {
					class: "dui-btn dui-btn-primary dui-btn-square dui-join-item tw:rounded-r-full tw:border-l-primary-content/25! tw:shadow-md",
					"aria-label": "More Fear Console actions",
					disabled: P(o),
					popovertarget: "fear-console-secondary-actions",
					style: { "anchor-name": "--fear-console-secondary-actions" },
					title: "More actions",
					type: "button"
				}, [...d[21] ||= [U("i", {
					class: "fa-solid fa-chevron-up",
					"aria-hidden": "true"
				}, null, -1)]], 8, ac),
				U("ul", oc, [U("li", { class: E({ "dui-menu-disabled": P(o) }) }, [U("button", {
					disabled: P(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[6] ||= (e) => P(n).runAction("copy-link")
				}, [P(r) === "copy-link" ? (V(), H("span", cc)) : (V(), H("i", lc)), d[22] ||= G(" Copy Link ", -1)], 8, sc)], 2), U("li", { class: E({ "dui-menu-disabled": P(o) }) }, [U("button", {
					disabled: P(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[7] ||= (e) => P(n).runAction("apply")
				}, [P(r) === "apply" ? (V(), H("span", dc)) : (V(), H("i", fc)), G(" Apply " + D(P(l)), 1)], 8, uc)], 2)])
			])])
		]));
	}
}), mc = Ss("fear-console-configurator", () => {
	let e = /* @__PURE__ */ N({ launchers: {
		actorSheet: !0,
		tokenControls: !0
	} }), t = /* @__PURE__ */ N(), n = /* @__PURE__ */ N(), r = /* @__PURE__ */ N(!1), i;
	function a(r, a) {
		i = a, e.value = { launchers: { ...r.launchers } }, t.value = void 0, n.value = void 0;
	}
	async function o() {
		if (!r.value) {
			r.value = !0, t.value = void 0, n.value = void 0;
			try {
				await s().saveConfiguration({ launchers: { ...e.value.launchers } }), n.value = "Launcher preferences saved. Reload Foundry to apply them.";
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Fear configuration save failed.", e), t.value = e instanceof Error ? e.message : "The Fear Console configuration could not be saved.";
			} finally {
				r.value = !1;
			}
		}
	}
	function s() {
		if (!i) throw Error("The Fear Console Configurator has not been initialized.");
		return i;
	}
	return {
		configuration: e,
		errorMessage: t,
		initialize: a,
		isSaving: r,
		saveConfiguration: o,
		statusMessage: n
	};
}), hc = { class: "dui-navbar tw:relative tw:min-h-0 tw:min-w-0 tw:flex-wrap tw:items-start tw:gap-3 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-4 tw:py-3 tw:text-base-content! tw:shadow-md" }, gc = { class: "dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start tw:gap-3" }, _c = {
	class: "tw:inline-grid tw:size-11 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-lg tw:text-primary-content! tw:shadow-md",
	"aria-hidden": "true"
}, vc = { class: "tw:min-w-0" }, yc = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight tw:tracking-wide tw:text-base-content!" }, bc = { class: "tw:mt-1 tw:max-w-2xl tw:text-sm tw:leading-relaxed tw:text-base-content/70!" }, xc = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, Sc = ["data-tip"], Cc = ["aria-label", "title"], wc = /* @__PURE__ */ R({
	__name: "ApplicationHeader",
	props: {
		configureLabel: {},
		description: {},
		icon: {},
		title: {}
	},
	emits: ["configure"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (V(), H("header", hc, [U("div", gc, [U("span", _c, [U("i", { class: E(e.icon) }, null, 2)]), U("div", vc, [
			r[1] ||= U("div", { class: "dui-breadcrumbs tw:mb-0.5 tw:max-w-full tw:text-xs tw:text-secondary!" }, [U("ul", null, [U("li", null, "Drowsy’s WFRP4e Toolkit")])], -1),
			U("h1", yc, D(e.title), 1),
			U("p", bc, D(e.description), 1)
		])]), U("div", xc, [kr(t.$slots, "end"), e.configureLabel ? (V(), H("span", {
			key: 0,
			class: "dui-tooltip dui-tooltip-left",
			"data-tip": e.configureLabel
		}, [U("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			type: "button",
			"aria-label": e.configureLabel,
			title: e.configureLabel,
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [U("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]], 8, Cc)], 8, Sc)) : K("", !0)])]));
	}
}), Tc = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Ec = { class: "tw:min-h-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Dc = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, Oc = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, kc = {
	class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-launcher-settings"
}, Ac = { class: "dui-card-body tw:gap-4 tw:p-4" }, jc = { class: "dui-fieldset tw:gap-2" }, Mc = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Nc = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Pc = { class: "tw:flex tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[32rem]:flex-row tw:min-[32rem]:items-center tw:min-[32rem]:justify-between" }, Fc = ["disabled"], Ic = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Lc = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, Rc = /* @__PURE__ */ R({
	__name: "FearConsoleConfiguratorApp",
	props: {
		actions: {},
		configuration: {}
	},
	setup(e) {
		let t = e, n = mc();
		n.initialize(t.configuration, t.actions);
		let { configuration: r, errorMessage: i, isSaving: a, statusMessage: o } = Cs(n);
		return (e, t) => (V(), H("main", Tc, [
			W(wc, {
				description: "Choose where the Fear Console appears for this browser and account.",
				icon: "fa-solid fa-gears",
				title: "Fear Console Configurator"
			}),
			U("div", Ec, [
				P(i) ? (V(), H("div", Dc, [t[3] ||= U("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), U("span", null, D(P(i)), 1)])) : K("", !0),
				P(o) ? (V(), H("div", Oc, [t[4] ||= U("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), U("span", null, D(P(o)), 1)])) : K("", !0),
				U("section", kc, [U("div", Ac, [
					t[8] ||= U("div", null, [U("h2", {
						id: "fear-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), U("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These client preferences control only where shortcuts appear. Macros and the module API remain available. ")], -1),
					U("fieldset", jc, [
						t[7] ||= U("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1),
						U("label", Mc, [L(U("input", {
							"onUpdate:modelValue": t[0] ||= (e) => P(r).launchers.tokenControls = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[ko, P(r).launchers.tokenControls]]), t[5] ||= U("span", { class: "tw:min-w-0" }, [U("strong", { class: "tw:block" }, "Token Controls"), U("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the skull launcher in Foundry’s Token Controls palette. ")], -1)]),
						U("label", Nc, [L(U("input", {
							"onUpdate:modelValue": t[1] ||= (e) => P(r).launchers.actorSheet = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[ko, P(r).launchers.actorSheet]]), t[6] ||= U("span", { class: "tw:min-w-0" }, [U("strong", { class: "tw:block" }, "Actor-sheet headers"), U("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show a Fear Console action on supported WFRP4e actor sheets. ")], -1)])
					]),
					t[9] ||= U("div", {
						class: "dui-alert tw:text-sm",
						role: "note"
					}, [U("i", {
						class: "fa-solid fa-rotate",
						"aria-hidden": "true"
					}), U("span", null, "Launcher changes take effect after Foundry is reloaded.")], -1)
				])])
			]),
			U("footer", Pc, [t[11] ||= U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, "Scope: this client and user.", -1), U("button", {
				class: "dui-btn dui-btn-primary tw:min-w-40 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: P(a),
				type: "button",
				onClick: t[2] ||= (...e) => P(n).saveConfiguration && P(n).saveConfiguration(...e)
			}, [P(a) ? (V(), H("span", Ic)) : (V(), H("i", Lc)), t[10] ||= G(" Save configuration ", -1)], 8, Fc)])
		]));
	}
}), J = {
	fearConsole: {
		gmOnly: !0,
		name: "Fear Console"
	},
	gmToolkitMigration: {
		gmOnly: !0,
		name: "GM Toolkit importer"
	},
	sessionManagementConsole: {
		gmOnly: !0,
		name: "Session Management Console"
	},
	xpAwardConsole: {
		gmOnly: !0,
		name: "XP Award Console"
	},
	xpCurveConsole: {
		gmOnly: !0,
		name: "XP Curve Console"
	}
};
function zc(e) {
	let t = game.user;
	return t !== null && (!e.gmOnly || t.isGM);
}
function Bc(e) {
	if (!zc(e)) throw Error(`Only a GM can use the ${e.name}.`);
}
//#endregion
//#region src/module/fear-terror/settings/launchers.ts
var Vc = {
	actorSheet: "showActorSheetLauncher",
	tokenControls: "showTokenControlsLauncher"
};
function Hc(e) {
	return game.settings.get(t, e) === !0;
}
//#endregion
//#region src/module/fear-terror/configuration.ts
function Uc() {
	return { launchers: {
		actorSheet: Hc(Vc.actorSheet),
		tokenControls: Hc(Vc.tokenControls)
	} };
}
async function Wc(e) {
	Bc(J.fearConsole);
	let n = [[Vc.actorSheet, e.launchers.actorSheet], [Vc.tokenControls, e.launchers.tokenControls]];
	for (let [e, r] of n) await game.settings.set(t, e, r);
	ui.notifications.info("Fear Console configuration saved. Reload to update its launchers.");
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var Gc = class extends foundry.applications.api.ApplicationV2 {
	static ACCESS_POLICY = {
		gmOnly: !0,
		name: "Drowsy’s WFRP4e Toolkit application"
	};
	#e;
	static canCurrentUserAccess() {
		return zc(this.ACCESS_POLICY);
	}
	async render(e) {
		let t = this.constructor;
		return Bc(t.ACCESS_POLICY), super.render(e);
	}
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-enhanced-fear-terror-root", "tw:[&_*]:box-border", "tw:box-border", "tw:block", "tw:h-full", "tw:max-h-full", "tw:max-w-full", "tw:min-h-0", "tw:overflow-auto", "tw:text-base-content", "tw:w-full"), n.dataset.theme = "wfrp4e-enhanced-fear-terror", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-enhanced-fear-terror-app", "tw:box-border", "tw:min-h-0", "tw:overflow-hidden", "tw:p-0", "tw:relative"), t.replaceChildren(e), this.#e = Vo(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(cs()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Kc = class extends Gc {
	static ACCESS_POLICY = J.fearConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-fear-console-configurator`],
		id: `${t}-fear-console-configurator`,
		position: {
			height: 500,
			width: 560
		},
		window: {
			icon: "fa-solid fa-skull",
			resizable: !0,
			title: `${n} — Fear Console Configurator`
		}
	};
	getVueComponent() {
		return Rc;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: Wc },
			configuration: Uc()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console-configurator/open.ts
async function qc() {
	let e = new Kc();
	return await e.render(!0), e;
}
function Jc() {
	qc().catch((e) => {
		console.error(`${t} | Failed to open the Fear Console Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/fear-terror/suggestion.ts
function Yc({ fearRating: e, source: t, terrorRating: n }) {
	return n === void 0 ? e === void 0 ? {
		rating: 1,
		source: t,
		type: "fear"
	} : {
		rating: e,
		source: t,
		type: "fear"
	} : {
		rating: n,
		source: t,
		type: "terror"
	};
}
//#endregion
//#region src/module/fear-terror/infer.ts
function Xc() {
	if (!(typeof canvas > "u" || !canvas)) {
		for (let e of canvas.tokens?.controlled ?? []) if (e.actor) return Zc(e.actor);
	}
}
function Zc(e) {
	let t = Qc(e, "CHAT.Terror");
	return Yc({
		fearRating: t === void 0 ? Qc(e, "CHAT.Fear") : void 0,
		source: e.name,
		terrorRating: t
	});
}
function Qc(e, t) {
	if (typeof e.has != "function") throw Error(`WFRP4e actor "${e.name}" does not expose the required trait lookup method.`);
	let n = e.has(game.i18n.localize(t))?.specification?.value;
	if (typeof n == "number") return n;
	if (typeof n == "string") {
		let e = Number(n);
		if (Number.isFinite(e)) return e;
	}
}
//#endregion
//#region src/module/fear-terror/selection.ts
function $c() {
	return tl().map(({ choice: e }) => e);
}
function el() {
	return tl().map(({ actor: e }) => e);
}
function tl() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user?.targets ?? []) nl(e, t.actor);
	return Array.from(e.values());
}
function nl(e, t) {
	!t || e.has(t.id) || e.set(t.id, {
		actor: t,
		choice: {
			id: t.id,
			name: t.name,
			source: "targeted"
		}
	});
}
//#endregion
//#region src/module/fear-terror/service.ts
async function rl(e) {
	Bc(J.fearConsole);
	let t = el();
	if (t.length === 0) {
		ui.notifications.warn("Target one or more tokens before applying Fear or Terror.");
		return;
	}
	let n = ws(e);
	await Promise.all(t.map((e) => sl(e, n)));
}
async function il(e) {
	Bc(J.fearConsole);
	let t = ws(e), n = el(), r = cl(t), i = Es(r, t), a = ll(await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: i }), n);
	await ChatMessage.create({
		content: a,
		speaker: { alias: r },
		system: {
			rating: t.rating,
			source: t.source,
			type: t.type
		},
		type: "psych"
	});
}
async function al(e) {
	Bc(J.fearConsole);
	let t = ws(e), n = Os(t);
	await game.clipboard.copyPlainText(n), ui.notifications.info(`${cl(t)} link copied.`);
}
async function ol(e) {
	Bc(J.fearConsole);
	let t = ws(e), n = Ds(cl(t), t), r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
async function sl(e, t) {
	if (t.type === "fear") {
		await e.applyFear(t.rating, t.source);
		return;
	}
	await e.applyTerror(t.rating, t.source);
}
function cl(e) {
	let t = e.type === "fear" ? "CHAT.Fear" : "CHAT.Terror";
	return game.i18n.localize(t);
}
function ll(e, t) {
	if (t.length === 0) return e;
	let n = document.createElement("template");
	n.innerHTML = e.trim();
	let r = document.createElement("div"), i = document.createElement("strong"), a = document.createElement("ul");
	i.textContent = t.length === 1 ? "Affected actor" : "Affected actors";
	for (let e of t) {
		let t = document.createElement("li");
		t.textContent = e.name, a.append(t);
	}
	r.append(i, a);
	let o = n.content.querySelector("[data-action=\"apply\"]");
	return o ? o.before(r) : n.content.append(r), n.innerHTML;
}
//#endregion
//#region src/module/apps/fear-console/FearConsoleApplication.ts
var ul = class extends Gc {
	static ACCESS_POLICY = J.fearConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-fear-console`],
		id: `${t}-fear-console`,
		position: {
			height: 560,
			width: 620
		},
		window: {
			icon: "fa-solid fa-skull",
			resizable: !0,
			title: `${n} — Fear Console`
		}
	};
	#e;
	constructor(e = {}) {
		super(), this.#e = e;
	}
	getVueComponent() {
		return pc;
	}
	getVueProps() {
		return {
			actions: {
				applyToSelectedActors: rl,
				copyLink: al,
				getActorChoices: $c,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the Fear Console.`, e), ui.notifications.error("The Fear Console completed the action but could not close its window.");
					});
				},
				openConfigurator: Jc,
				postPrompt: il
			},
			initialPayload: this.#e.initialPayload ?? Xc()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console/open.ts
async function dl(e = {}) {
	let t = new ul(e);
	return await t.render(!0), t;
}
function fl(e = {}) {
	dl(e).catch((e) => {
		console.error(`${t} | Failed to open the Fear Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/gm-toolkit/content-selection.ts
function pl(e, t) {
	return e.candidates.find((e) => e.tableId === t);
}
function ml(e, t) {
	let n = pl(e, t);
	return Object.fromEntries((n?.prompts ?? []).map((e) => [e.resultId, e.comparison === "new"]));
}
function hl(e) {
	return Object.entries(e).flatMap(([e, t]) => t ? [e] : []);
}
//#endregion
//#region src/functions/gm-toolkit/launcher-selection.ts
function gl(e) {
	return Object.fromEntries((e?.remappableSlots ?? []).map((e) => [e, !0]));
}
function _l(e) {
	return Object.entries(e).filter(([, e]) => e).map(([e]) => Number(e)).filter((e) => Number.isInteger(e)).sort((e, t) => e - t);
}
function vl(e, t) {
	return Array.from(new Set(t)).filter((e) => Number.isInteger(e) && e >= 1 && e <= 50).flatMap((t) => {
		let n = e.candidates.find(({ hotbarSlots: e, match: n, replacement: r }) => e.includes(t) && n === "standard" && r.disposition === "ready");
		return n?.replacement.macroId ? [{
			macroId: n.replacement.macroId,
			slot: t
		}] : [];
	});
}
//#endregion
//#region src/functions/gm-toolkit/selection.ts
var yl = [
	"sessionReference",
	"defaultXpAmount",
	"defaultXpSelection",
	"defaultXpReason"
];
function bl(e) {
	if (e) return {
		...e,
		darkWhispers: {
			...e.darkWhispers,
			candidates: e.darkWhispers.candidates.map((e) => ({
				...e,
				prompts: e.prompts.map((e) => ({ ...e })),
				warnings: [...e.warnings]
			})),
			warnings: [...e.darkWhispers.warnings]
		},
		dispositionCounts: { ...e.dispositionCounts },
		imports: e.imports.map((e) => ({ ...e })),
		launchers: {
			...e.launchers,
			candidates: e.launchers.candidates.map((e) => ({
				...e,
				hotbarSlots: [...e.hotbarSlots],
				replacement: { ...e.replacement }
			})),
			counts: { ...e.launchers.counts },
			remappableSlots: [...e.launchers.remappableSlots],
			warnings: [...e.launchers.warnings]
		},
		...e.source ? { source: {
			...e.source,
			settings: e.source.settings.map((e) => ({
				...e,
				value: Array.isArray(e.value) ? [...e.value] : e.value
			})),
			warnings: [...e.source.warnings]
		} } : {},
		sourceCounts: { ...e.sourceCounts }
	};
}
function xl(e, t) {
	let n = Object.fromEntries(yl.map((e) => [e, !1]));
	if (t) for (let t of e?.imports ?? []) n[t.field] = t.comparison !== "same";
	return n;
}
function Sl(e) {
	return yl.filter((t) => e[t]);
}
function Cl(e, t) {
	let n = bl(e);
	if (!n) return;
	let r = new Set(t);
	for (let e of n.imports) r.has(e.field) && (e.currentValue = e.sourceValue, e.comparison = "same");
	return n;
}
//#endregion
//#region src/state/apps/gm-toolkit-migration/store.ts
var wl = Ss("gm-toolkit-migration", () => {
	let e = /* @__PURE__ */ N({ version: 1 }), t = /* @__PURE__ */ N(), n = /* @__PURE__ */ N(), r = /* @__PURE__ */ N(xl(void 0, !1)), i = /* @__PURE__ */ N(""), a = /* @__PURE__ */ N({}), o = /* @__PURE__ */ N("preserve"), s = /* @__PURE__ */ N({}), c = /* @__PURE__ */ N(), l = /* @__PURE__ */ N(), u = /* @__PURE__ */ N(!1), d;
	function f(i, a) {
		d = a, e.value = { ...i.state }, t.value = bl(i.preview), n.value = i.cutoverReport, r.value = xl(t.value, i.state.migration === void 0), x(), S(), c.value = void 0, l.value = void 0;
	}
	async function p() {
		await te(async () => {
			let n = Sl(r.value), i = await ne().importSettings({ fields: n });
			e.value.migration = i, t.value = Cl(t.value, i.appliedFields ?? []), r.value = xl(t.value, !1), C(), l.value = `${n.length} setting${n.length === 1 ? "" : "s"} imported.`;
		});
	}
	async function m() {
		await te(async () => {
			let e = await ne().importDarkWhispers({
				conflictPolicy: o.value,
				resultIds: hl(a.value),
				tableId: i.value
			});
			t.value = bl(e.preview), x(), S(), C(), l.value = `${e.added} prompt${e.added === 1 ? "" : "s"} added, ${e.replaced} replaced, and ${e.skipped} unchanged.`;
		});
	}
	async function h() {
		await te(async () => {
			let e = await ne().remapLaunchers({ slots: _l(s.value) });
			t.value &&= {
				...t.value,
				launchers: e.preview
			}, S(), C(), l.value = `${e.remappedSlots} hotbar slot${e.remappedSlots === 1 ? "" : "s"} updated.`;
		});
	}
	async function g() {
		await te(async () => {
			let t = await ne().reviewCutover();
			e.value.cutoverReview = t.review, n.value = t.report, l.value = "Review saved.";
		});
	}
	function _(e, t) {
		r.value[e] = t;
	}
	function v(e) {
		i.value = e, a.value = ml(ee(), e);
	}
	function y(e, t) {
		a.value[e] = t;
	}
	function b(e, t) {
		s.value[e] = t;
	}
	function x() {
		let e = ee(), t = e.recommendedTableId ?? e.candidates[0]?.tableId ?? "";
		i.value = t, a.value = ml(e, t), o.value = "preserve";
	}
	function S() {
		s.value = gl(t.value?.launchers);
	}
	function C() {
		n.value = ne().getCutoverReport();
	}
	function ee() {
		return t.value?.darkWhispers ?? {
			candidates: [],
			currentPromptCount: 0,
			warnings: []
		};
	}
	async function te(e) {
		if (!u.value) {
			u.value = !0, c.value = void 0, l.value = void 0;
			try {
				await e();
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | GM Toolkit import action failed.", e), c.value = e instanceof Error ? e.message : "The action could not be completed.";
			} finally {
				u.value = !1;
			}
		}
	}
	function ne() {
		if (!d) throw Error("The GM Toolkit importer has not been initialized.");
		return d;
	}
	return {
		cutoverReport: n,
		darkWhispersConflictPolicy: o,
		darkWhispersSelections: a,
		darkWhispersTableId: i,
		errorMessage: c,
		importDarkWhispers: m,
		importSettings: p,
		initialize: f,
		isWorking: u,
		launcherSelections: s,
		preview: t,
		remapLaunchers: h,
		reviewCutover: g,
		setDarkWhispersSelection: y,
		setDarkWhispersTable: v,
		setLauncherSelection: b,
		setSettingSelection: _,
		settingSelections: r,
		state: e,
		statusMessage: l
	};
}), Tl = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, El = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, Dl = { class: "tw:min-w-0 tw:break-words" }, Ol = {
	key: 1,
	class: "dui-alert dui-alert-success tw:m-4 tw:mb-0",
	role: "status"
}, kl = { class: "tw:min-w-0 tw:break-words" }, Al = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, jl = /* @__PURE__ */ R({
	__name: "ConsoleFrame",
	props: {
		description: {},
		errorMessage: {},
		icon: {},
		statusMessage: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (V(), H("main", Tl, [
			W(wc, {
				description: e.description,
				icon: e.icon,
				title: e.title
			}, {
				end: Un(() => [kr(t.$slots, "header-end")]),
				_: 3
			}, 8, [
				"description",
				"icon",
				"title"
			]),
			e.errorMessage ? (V(), H("div", El, [n[0] ||= U("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), U("span", Dl, D(e.errorMessage), 1)])) : K("", !0),
			e.statusMessage ? (V(), H("div", Ol, [n[1] ||= U("i", {
				class: "fa-solid fa-circle-check",
				"aria-hidden": "true"
			}, null, -1), U("span", kl, D(e.statusMessage), 1)])) : K("", !0),
			U("div", Al, [kr(t.$slots, "default")]),
			kr(t.$slots, "footer")
		]));
	}
}), Ml = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-secondary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-content-title"
}, Nl = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Pl = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Fl = { class: "tw:min-w-0 tw:flex-1" }, Il = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Ll = { class: "dui-badge dui-badge-sm" }, Rl = ["disabled"], zl = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Bl = {
	key: 1,
	class: "fa-solid fa-file-import",
	"aria-hidden": "true"
}, Vl = {
	key: 0,
	class: "tw:grid tw:gap-3 tw:min-[42rem]:grid-cols-2"
}, Hl = { class: "tw:grid tw:min-w-0 tw:gap-1" }, Ul = ["value"], Wl = ["value"], Gl = {
	key: 0,
	class: "tw:grid tw:min-w-0 tw:gap-1"
}, Kl = ["value"], ql = {
	key: 1,
	class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, Jl = { class: "dui-table dui-table-sm tw:min-w-[42rem]" }, Yl = { class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2" }, Xl = ["checked", "onChange"], Zl = { class: "tw:sr-only" }, Ql = { class: "tw:tabular-nums" }, $l = {
	class: "tw:max-w-md tw:whitespace-normal",
	scope: "row"
}, eu = { class: "dui-badge dui-badge-sm" }, tu = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, nu = /* @__PURE__ */ R({
	__name: "GmToolkitContentMigrationPanel",
	props: {
		conflictPolicy: {},
		isWorking: { type: Boolean },
		preview: {},
		selectedTableId: {},
		selections: {}
	},
	emits: [
		"import",
		"selectionChange",
		"tableChange",
		"update:conflictPolicy"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = q(() => pl(n.preview, n.selectedTableId)), a = q(() => Object.values(n.selections).filter((e) => e).length), o = q(() => i.value?.prompts.some((e) => e.comparison === "conflict"));
		function s(e) {
			return e === "same" ? "Already imported" : e === "duplicate" ? "Same text exists" : e === "conflict" ? "Source changed" : "New prompt";
		}
		function c(e, t) {
			let n = t.currentTarget;
			r("selectionChange", e, n instanceof HTMLInputElement && n.checked);
		}
		function l(e) {
			let t = e.currentTarget;
			r("tableChange", t instanceof HTMLSelectElement ? t.value : "");
		}
		function u(e) {
			let t = e.currentTarget;
			r("update:conflictPolicy", t instanceof HTMLSelectElement && t.value === "replace" ? "replace" : "preserve");
		}
		return (t, n) => (V(), H("section", Ml, [U("div", Nl, [
			U("div", Pl, [U("div", Fl, [U("div", Il, [n[1] ||= U("h2", {
				id: "gm-toolkit-content-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Dark Whispers prompts ", -1), U("span", Ll, D(e.preview.currentPromptCount) + " in Drowsy library ", 1)]), n[2] ||= U("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " Copy selected prompt text into Drowsy-owned world data. The original RollTable remains unchanged. ", -1)]), U("button", {
				class: "dui-btn dui-btn-sm tw:border-secondary! tw:text-base-content!",
				disabled: e.isWorking || a.value === 0 || !i.value,
				type: "button",
				onClick: n[0] ||= (e) => r("import")
			}, [e.isWorking ? (V(), H("span", zl)) : (V(), H("i", Bl)), G(" Import " + D(a.value || "selected") + " prompts ", 1)], 8, Rl)]),
			e.preview.candidates.length ? (V(), H("div", Vl, [U("label", Hl, [n[3] ||= U("span", { class: "tw:text-sm tw:font-semibold" }, "Source RollTable", -1), U("select", {
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
				value: e.selectedTableId,
				onChange: l
			}, [(V(!0), H(B, null, z(e.preview.candidates, (e) => (V(), H("option", {
				key: e.tableId,
				value: e.tableId
			}, D(e.tableName) + " — " + D(e.prompts.length) + " prompts ", 9, Wl))), 128))], 40, Ul)]), o.value ? (V(), H("label", Gl, [n[5] ||= U("span", { class: "tw:text-sm tw:font-semibold" }, "Changed imported prompts", -1), U("select", {
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
				value: e.conflictPolicy,
				onChange: u
			}, [...n[4] ||= [U("option", { value: "preserve" }, "Keep Drowsy version", -1), U("option", { value: "replace" }, "Replace with source version", -1)]], 40, Kl)])) : K("", !0)])) : K("", !0),
			i.value ? (V(), H("div", ql, [U("table", Jl, [n[6] ||= U("thead", { class: "tw:bg-base-300/60!" }, [U("tr", null, [
				U("th", { scope: "col" }, "Import"),
				U("th", { scope: "col" }, "Roll"),
				U("th", { scope: "col" }, "Prompt text"),
				U("th", { scope: "col" }, "Comparison")
			])], -1), U("tbody", null, [(V(!0), H(B, null, z(i.value.prompts, (t) => (V(), H("tr", { key: t.resultId }, [
				U("td", null, [U("label", Yl, [U("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: e.selections[t.resultId],
					type: "checkbox",
					onChange: (e) => c(t.resultId, e)
				}, null, 40, Xl), U("span", Zl, "Import Dark Whispers prompt " + D(t.range), 1)])]),
				U("td", Ql, D(t.range), 1),
				U("th", $l, D(t.text), 1),
				U("td", null, [U("span", eu, D(s(t.comparison)), 1)])
			]))), 128))])])])) : (V(), H("div", tu, [...n[7] ||= [U("i", {
				class: "fa-solid fa-table-list",
				"aria-hidden": "true"
			}, null, -1), U("span", null, "No imported GM Toolkit Dark Whispers RollTable is available to copy.", -1)]])),
			(V(!0), H(B, null, z([...e.preview.warnings, ...i.value?.warnings ?? []], (e) => (V(), H("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[8] ||= U("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), U("span", null, D(e), 1)]))), 128))
		])]));
	}
}), ru = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-accent/50! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-cutover-title"
}, iu = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, au = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, ou = { class: "tw:min-w-0 tw:flex-1" }, su = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, cu = { class: "tw:grid tw:min-w-0 tw:gap-2 tw:min-[38rem]:grid-cols-3" }, lu = { class: "dui-stat tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3" }, uu = { class: "dui-stat-value tw:text-2xl" }, du = { class: "dui-stat-desc tw:truncate" }, fu = { class: "dui-stat tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3" }, pu = { class: "dui-stat-value tw:text-2xl" }, mu = { class: "dui-stat-desc" }, hu = { class: "dui-stat tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3" }, gu = { class: "dui-stat-value tw:text-2xl" }, _u = { class: "dui-stat-desc" }, vu = { class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-content/20!" }, yu = { class: "dui-collapse-content tw:min-w-0 tw:px-3 tw:pb-3" }, bu = { class: "tw:mb-2 tw:flex tw:flex-wrap tw:gap-1" }, xu = { class: "dui-badge dui-badge-sm" }, Su = { class: "dui-badge dui-badge-sm" }, Cu = { class: "dui-badge dui-badge-sm" }, wu = { class: "dui-badge dui-badge-sm" }, Tu = { class: "dui-badge dui-badge-sm" }, Eu = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/15!" }, Du = { class: "dui-table dui-table-sm tw:min-w-[38rem]" }, Ou = { scope: "row" }, ku = { class: "tw:max-w-52 tw:break-words" }, Au = { class: "tw:max-w-52 tw:break-words" }, ju = { class: "dui-badge dui-badge-sm" }, Mu = { class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-content/20!" }, Nu = { class: "dui-collapse-content tw:grid tw:gap-2 tw:px-3 tw:pb-3" }, Pu = { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, Fu = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Iu = { class: "dui-badge dui-badge-success dui-badge-sm" }, Lu = { class: "dui-badge dui-badge-sm" }, Ru = { class: "dui-badge dui-badge-warning dui-badge-sm" }, zu = { class: "dui-badge dui-badge-warning dui-badge-sm" }, Bu = {
	key: 0,
	class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-content/20!",
	open: ""
}, Vu = { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:font-semibold" }, Hu = { class: "dui-collapse-content tw:min-w-0 tw:px-3 tw:pb-3" }, Uu = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/15!" }, Wu = { class: "dui-table dui-table-sm tw:min-w-[44rem]" }, Gu = { scope: "row" }, Ku = { class: "tw:max-w-md tw:whitespace-normal" }, qu = {
	key: 2,
	class: "tw:grid tw:gap-3 tw:rounded-box tw:border tw:border-warning/50! tw:bg-warning/10! tw:p-3"
}, Ju = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
	role: "alert"
}, Yu = { class: "tw:flex tw:cursor-pointer tw:items-start tw:gap-3" }, Xu = ["disabled"], Zu = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Qu = {
	key: 1,
	class: "fa-solid fa-clipboard-check",
	"aria-hidden": "true"
}, $u = {
	key: 1,
	class: "dui-alert dui-alert-success",
	role: "status"
}, ed = /* @__PURE__ */ R({
	__name: "GmToolkitCutoverReportPanel",
	props: {
		isWorking: { type: Boolean },
		report: {},
		review: {}
	},
	emits: ["review"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(!1), a = q(() => !!(n.report && n.review?.evidenceId === n.report.evidenceId)), o = q(() => a.value && n.report?.combat.active === !1), s = q(() => a.value ? o.value ? "Reviewed — ready to disable" : "Reviewed — combat active" : "Review required");
		Zn(() => n.report?.evidenceId, () => i.value = !1);
		function c(e) {
			return {
				"already-matched": "Already matched",
				"changed-after-import": "Changed after import",
				imported: "Imported",
				"not-imported": "Not imported"
			}[e];
		}
		function l(e) {
			return e === "standard" ? "Stock macro" : e === "customized" ? "Customized" : "Check manually";
		}
		function u(e) {
			return e.source.evidence === "current" ? e.source.active ? "Active module" : "Current world data" : e.source.evidence === "saved-snapshot" ? "Saved import snapshot" : "World documents";
		}
		return (t, n) => (V(), H("section", ru, [U("div", iu, [U("div", au, [U("div", ou, [U("div", su, [n[2] ||= U("h2", {
			id: "gm-toolkit-cutover-title",
			class: "dui-card-title tw:font-serif tw:text-lg"
		}, " Before you disable GM Toolkit ", -1), U("span", { class: E(["dui-badge dui-badge-sm", o.value ? "dui-badge-success" : "dui-badge-warning"]) }, D(s.value), 3)])])]), e.report ? (V(), H(B, { key: 0 }, [
			U("div", cu, [
				U("div", lu, [
					n[3] ||= U("div", { class: "dui-stat-title tw:text-xs" }, "Settings found", -1),
					U("div", uu, D(e.report.settings.total), 1),
					U("div", du, D(u(e.report)), 1)
				]),
				U("div", fu, [
					n[4] ||= U("div", { class: "dui-stat-title tw:text-xs" }, "Source prompts", -1),
					U("div", pu, D(e.report.content.sourcePromptCount), 1),
					U("div", mu, D(e.report.content.currentPromptCount) + " in Drowsy", 1)
				]),
				U("div", hu, [
					n[5] ||= U("div", { class: "dui-stat-title tw:text-xs" }, "Detected launchers", -1),
					U("div", gu, D(e.report.launchers.detectedMacros), 1),
					U("div", _u, D(e.report.launchers.unresolved.length) + " need review", 1)
				])
			]),
			(V(!0), H(B, null, z(e.report.notices, (e) => (V(), H("div", {
				key: `${e.code}:${e.message}`,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[6] ||= U("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), U("span", null, D(e.message), 1)]))), 128)),
			U("details", vu, [n[8] ||= U("summary", { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:font-semibold" }, "Settings", -1), U("div", yu, [U("div", bu, [
				U("span", xu, D(e.report.settings.dispositionCounts.import) + " can be imported ", 1),
				U("span", Su, D(e.report.settings.dispositionCounts.pending) + " not transferred ", 1),
				U("span", Cu, D(e.report.settings.dispositionCounts.supersede) + " handled another way ", 1),
				U("span", wu, D(e.report.settings.dispositionCounts.retire) + " not needed ", 1),
				U("span", Tu, D(e.report.settings.dispositionCounts.skip) + " ignored ", 1)
			]), U("div", Eu, [U("table", Du, [n[7] ||= U("thead", { class: "tw:bg-base-300/60!" }, [U("tr", null, [
				U("th", { scope: "col" }, "Value"),
				U("th", { scope: "col" }, "Source"),
				U("th", { scope: "col" }, "Drowsy"),
				U("th", { scope: "col" }, "Outcome")
			])], -1), U("tbody", null, [(V(!0), H(B, null, z(e.report.settings.items, (e) => (V(), H("tr", { key: e.field }, [
				U("th", Ou, D(e.label), 1),
				U("td", ku, D(e.sourceValue), 1),
				U("td", Au, D(e.currentValue), 1),
				U("td", null, [U("span", ju, D(c(e.status)), 1)])
			]))), 128))])])])])]),
			U("details", Mu, [n[9] ||= U("summary", { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:font-semibold" }, " Dark Whispers content ", -1), U("div", Nu, [U("p", Pu, D(e.report.content.sourceTableName || "No source table detected"), 1), U("div", Fu, [
				U("span", Iu, D(e.report.content.comparisonCounts.same) + " imported ", 1),
				U("span", Lu, D(e.report.content.comparisonCounts.duplicate) + " duplicates ", 1),
				U("span", Ru, D(e.report.content.comparisonCounts.new) + " new ", 1),
				U("span", zu, D(e.report.content.comparisonCounts.conflict) + " changed ", 1)
			])])]),
			e.report.launchers.unresolved.length ? (V(), H("details", Bu, [U("summary", Vu, " Launchers to check (" + D(e.report.launchers.unresolved.length) + ") ", 1), U("div", Hu, [U("div", Uu, [U("table", Wu, [n[10] ||= U("thead", { class: "tw:bg-base-300/60!" }, [U("tr", null, [
				U("th", { scope: "col" }, "Macro"),
				U("th", { scope: "col" }, "Match"),
				U("th", { scope: "col" }, "Hotbar"),
				U("th", { scope: "col" }, "Drowsy outcome")
			])], -1), U("tbody", null, [(V(!0), H(B, null, z(e.report.launchers.unresolved, (e) => (V(), H("tr", { key: e.macroId }, [
				U("th", Gu, D(e.macroName), 1),
				U("td", null, D(l(e.match)), 1),
				U("td", null, D(e.hotbarSlots.length ? e.hotbarSlots.join(", ") : "None"), 1),
				U("td", Ku, D(e.outcome), 1)
			]))), 128))])])])])])) : K("", !0),
			a.value ? (V(), H("div", {
				key: 1,
				class: E(["dui-alert", o.value ? "dui-alert-success" : "dui-alert-warning"]),
				role: "status"
			}, [U("i", {
				class: E(o.value ? "fa-solid fa-circle-check" : "fa-solid fa-shield-halved"),
				"aria-hidden": "true"
			}, null, 2), U("span", null, [G(" Reviewed by " + D(e.review?.reviewedByUserName) + " on " + D(new Date(e.review.reviewedAt).toLocaleString()) + ". ", 1), o.value ? (V(), H(B, { key: 0 }, [G(" GM Toolkit can now be disabled. Items marked “not transferred” will not be available after it is disabled. ")], 64)) : (V(), H(B, { key: 1 }, [G("Finish the active combat before disabling GM Toolkit.")], 64))])], 2)) : (V(), H("div", qu, [
				e.review ? (V(), H("div", Ju, [...n[11] ||= [U("i", {
					class: "fa-solid fa-rotate",
					"aria-hidden": "true"
				}, null, -1), U("span", null, " Source data or import choices changed after the previous review. Check the current summary again. ", -1)]])) : K("", !0),
				U("label", Yu, [L(U("input", {
					"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
					class: "dui-checkbox dui-checkbox-sm tw:mt-0.5 tw:shrink-0",
					type: "checkbox"
				}, null, 512), [[ko, i.value]]), n[12] ||= U("span", { class: "tw:text-sm" }, " I reviewed every value, prompt, and launcher above. Anything not imported or replaced is intentionally retained or accepted for manual follow-up. ", -1)]),
				U("button", {
					class: "dui-btn dui-btn-accent dui-btn-sm tw:justify-self-end",
					disabled: e.isWorking || !i.value,
					type: "button",
					onClick: n[1] ||= (e) => r("review")
				}, [e.isWorking ? (V(), H("span", Zu)) : (V(), H("i", Qu)), n[13] ||= G(" Save review ", -1)], 8, Xu),
				n[14] ||= U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, " Review this summary before disabling GM Toolkit. If combat is active, finish it first. ", -1)
			]))
		], 64)) : e.review ? (V(), H("div", $u, [n[15] ||= U("i", {
			class: "fa-solid fa-circle-check",
			"aria-hidden": "true"
		}, null, -1), U("span", null, D(e.review.reviewedByUserName) + " reviewed the import on " + D(new Date(e.review.reviewedAt).toLocaleString()) + ". No GM Toolkit source data is currently available. ", 1)])) : K("", !0)])]));
	}
}), td = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-accent/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-launcher-title"
}, nd = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, rd = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, id = { class: "tw:min-w-0 tw:flex-1" }, ad = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, od = { class: "dui-badge dui-badge-sm" }, sd = ["disabled"], cd = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, ld = {
	key: 1,
	class: "fa-solid fa-arrow-right-arrow-left",
	"aria-hidden": "true"
}, ud = { class: "tw:flex tw:flex-wrap tw:gap-2 tw:text-xs" }, dd = { class: "dui-badge dui-badge-sm" }, fd = { class: "dui-badge dui-badge-sm" }, pd = { class: "dui-badge dui-badge-sm" }, md = { class: "dui-badge dui-badge-sm" }, hd = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!" }, gd = { class: "dui-table dui-table-sm tw:min-w-[46rem]" }, _d = {
	key: 0,
	class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2"
}, vd = ["checked", "onChange"], yd = { class: "tw:sr-only" }, bd = {
	key: 1,
	"aria-hidden": "true"
}, xd = {
	class: "tw:max-w-56 tw:whitespace-normal",
	scope: "row"
}, Sd = { class: "dui-badge dui-badge-sm" }, Cd = { class: "tw:whitespace-nowrap" }, wd = { class: "tw:max-w-72 tw:whitespace-normal" }, Td = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Ed = { class: "dui-badge dui-badge-sm" }, Dd = {
	key: 0,
	class: "tw:font-semibold"
}, Od = { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/65!" }, kd = /* @__PURE__ */ R({
	__name: "GmToolkitLauncherMigrationPanel",
	props: {
		isWorking: { type: Boolean },
		preview: {},
		selections: {}
	},
	emits: ["remap", "selectionChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = q(() => Object.values(n.selections).filter((e) => e).length);
		function a(e) {
			return e.match === "standard" && e.replacement.disposition === "ready" && e.hotbarSlots.length > 0;
		}
		function o(e) {
			return a(e) && e.hotbarSlots.every((e) => n.selections[e] === !0);
		}
		function s(e, t) {
			let n = t.currentTarget, i = n instanceof HTMLInputElement && n.checked;
			for (let t of e.hotbarSlots) r("selectionChange", t, i);
		}
		function c(e) {
			return e.match === "standard" ? "Stock macro" : e.match === "customized" ? "Customized" : "Review match";
		}
		function l(e) {
			return e.replacement.disposition === "ready" ? "Can remap" : e.replacement.disposition === "independent" ? "Works without GM Toolkit" : "Keep original";
		}
		function u(e) {
			return e.length ? `Slot${e.length === 1 ? "" : "s"} ${e.join(", ")}` : "Not on hotbar";
		}
		return (t, n) => (V(), H("section", td, [U("div", nd, [
			U("div", rd, [U("div", id, [U("div", ad, [n[1] ||= U("h2", {
				id: "gm-toolkit-launcher-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Hotbar launchers ", -1), U("span", od, D(e.preview.candidates.length) + " found", 1)]), n[2] ||= U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Reviews this user’s hotbar without running or copying GM Toolkit commands. Customized macros stay untouched. ", -1)]), U("button", {
				class: "dui-btn dui-btn-accent dui-btn-sm tw:shrink-0",
				disabled: e.isWorking || i.value === 0,
				type: "button",
				onClick: n[0] ||= (e) => r("remap")
			}, [e.isWorking ? (V(), H("span", cd)) : (V(), H("i", ld)), G(" Remap " + D(i.value) + " slot" + D(i.value === 1 ? "" : "s"), 1)], 8, sd)]),
			U("div", ud, [
				U("span", dd, D(e.preview.counts.standard) + " stock", 1),
				U("span", fd, D(e.preview.counts.customized) + " customized", 1),
				U("span", pd, D(e.preview.counts.ambiguous) + " review", 1),
				U("span", md, D(e.preview.userName ?? "Current user"), 1)
			]),
			U("div", hd, [U("table", gd, [n[3] ||= U("thead", { class: "tw:bg-base-300/60!" }, [U("tr", null, [
				U("th", { scope: "col" }, "Remap"),
				U("th", { scope: "col" }, "GM Toolkit macro"),
				U("th", { scope: "col" }, "Match"),
				U("th", { scope: "col" }, "Hotbar"),
				U("th", { scope: "col" }, "Drowsy outcome")
			])], -1), U("tbody", null, [(V(!0), H(B, null, z(e.preview.candidates, (e) => (V(), H("tr", { key: e.macroId }, [
				U("td", null, [a(e) ? (V(), H("label", _d, [U("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: o(e),
					type: "checkbox",
					onChange: (t) => s(e, t)
				}, null, 40, vd), U("span", yd, " Remap " + D(e.sourceMacroName) + " from " + D(u(e.hotbarSlots)), 1)])) : (V(), H("span", bd, "—"))]),
				U("th", xd, D(e.macroName), 1),
				U("td", null, [U("span", Sd, D(c(e)), 1)]),
				U("td", Cd, D(u(e.hotbarSlots)), 1),
				U("td", wd, [U("div", Td, [U("span", Ed, D(l(e)), 1), e.replacement.macroName ? (V(), H("span", Dd, D(e.replacement.macroName), 1)) : K("", !0)]), U("p", Od, D(e.replacement.label), 1)])
			]))), 128))])])]),
			n[5] ||= U("div", {
				class: "dui-alert tw:py-2 tw:text-xs",
				role: "note"
			}, [U("i", {
				class: "fa-solid fa-shield-halved",
				"aria-hidden": "true"
			}), U("span", null, " Remapping imports the Drowsy launcher if needed and updates only the selected hotbar slots. Source macros are never edited or deleted. ")], -1),
			(V(!0), H(B, null, z(e.preview.warnings, (e) => (V(), H("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[4] ||= U("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), U("span", null, D(e), 1)]))), 128))
		])]));
	}
}), Ad = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-secondary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-import-title"
}, jd = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Md = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Nd = { class: "tw:min-w-0 tw:flex-1" }, Pd = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Fd = { class: "dui-badge dui-badge-outline dui-badge-sm" }, Id = {
	key: 0,
	class: "dui-badge dui-badge-sm"
}, Ld = {
	key: 0,
	class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/60!"
}, Rd = ["disabled"], zd = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Bd = {
	key: 1,
	class: "fa-solid fa-file-import",
	"aria-hidden": "true"
}, Vd = {
	class: "tw:flex tw:flex-wrap tw:gap-2 tw:text-xs",
	"aria-label": "Migration inventory"
}, Hd = { class: "dui-badge dui-badge-sm" }, Ud = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, Wd = { class: "dui-badge dui-badge-sm" }, Gd = { class: "dui-badge dui-badge-sm" }, Kd = { class: "dui-badge dui-badge-sm" }, qd = {
	key: 0,
	class: "dui-alert tw:py-2 tw:text-xs",
	role: "note"
}, Jd = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!" }, Yd = { class: "dui-table dui-table-sm tw:min-w-[38rem]" }, Xd = { class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2" }, Zd = ["checked", "onChange"], Qd = { class: "tw:sr-only" }, $d = { scope: "row" }, ef = ["title"], tf = ["title"], nf = { class: "dui-badge dui-badge-sm" }, rf = /* @__PURE__ */ R({
	__name: "GmToolkitMigrationPanel",
	props: {
		isWorking: { type: Boolean },
		lastImportedAt: {},
		preview: {},
		selections: {}
	},
	emits: ["import", "selectionChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = q(() => Object.values(n.selections).filter((e) => e).length), a = q(() => n.preview.source?.active ? "Active module" : n.preview.source?.installed ? "Installed, disabled" : "Persisted world data");
		function o(e) {
			return e === "" ? "None" : String(e);
		}
		function s(e) {
			return e === "same" ? "Already matches" : e === "target-empty" ? "New value" : "Different";
		}
		function c(e, t) {
			let n = t.currentTarget;
			r("selectionChange", e, n instanceof HTMLInputElement && n.checked);
		}
		return (t, n) => (V(), H("section", Ad, [U("div", jd, [
			U("div", Md, [U("div", Nd, [
				U("div", Pd, [
					n[1] ||= U("h2", {
						id: "gm-toolkit-import-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " Settings ", -1),
					U("span", Fd, D(a.value), 1),
					e.preview.source?.moduleVersion ? (V(), H("span", Id, D(e.preview.source.moduleVersion), 1)) : K("", !0)
				]),
				n[2] ||= U("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " Choose which saved values to copy. Your GM Toolkit settings will not be changed. ", -1),
				e.lastImportedAt ? (V(), H("p", Ld, " Last imported " + D(new Date(e.lastImportedAt).toLocaleString()), 1)) : K("", !0)
			]), U("button", {
				class: "dui-btn dui-btn-sm tw:border-secondary! tw:text-base-content!",
				disabled: e.isWorking || i.value === 0,
				type: "button",
				onClick: n[0] ||= (e) => r("import")
			}, [e.isWorking ? (V(), H("span", zd)) : (V(), H("i", Bd)), G(" Import " + D(i.value || "selected"), 1)], 8, Rd)]),
			U("div", Vd, [
				U("span", Hd, D(e.preview.dispositionCounts.import) + " can be imported ", 1),
				U("span", Ud, D(e.preview.dispositionCounts.pending) + " not transferred ", 1),
				U("span", Wd, D(e.preview.dispositionCounts.supersede) + " handled another way ", 1),
				U("span", Gd, D(e.preview.dispositionCounts.retire) + " not needed ", 1),
				U("span", Kd, D(e.preview.dispositionCounts.skip) + " ignored ", 1)
			]),
			e.preview.source?.active ? K("", !0) : (V(), H("div", qd, [...n[3] ||= [U("i", {
				class: "fa-solid fa-database",
				"aria-hidden": "true"
			}, null, -1), U("span", null, " Saved world data is available even while GM Toolkit is disabled. ", -1)]])),
			U("div", Jd, [U("table", Yd, [n[4] ||= U("thead", { class: "tw:bg-base-300/60!" }, [U("tr", null, [
				U("th", { scope: "col" }, "Import"),
				U("th", { scope: "col" }, "Value"),
				U("th", { scope: "col" }, "GM Toolkit"),
				U("th", { scope: "col" }, "Drowsy"),
				U("th", { scope: "col" }, "Comparison")
			])], -1), U("tbody", null, [(V(!0), H(B, null, z(e.preview.imports, (t) => (V(), H("tr", { key: t.field }, [
				U("td", null, [U("label", Xd, [U("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: e.selections[t.field],
					type: "checkbox",
					onChange: (e) => c(t.field, e)
				}, null, 40, Zd), U("span", Qd, "Import " + D(t.label), 1)])]),
				U("th", $d, D(t.label), 1),
				U("td", {
					class: "tw:max-w-48 tw:truncate",
					title: o(t.sourceValue)
				}, D(o(t.sourceValue)), 9, ef),
				U("td", {
					class: "tw:max-w-48 tw:truncate",
					title: o(t.currentValue)
				}, D(o(t.currentValue)), 9, tf),
				U("td", null, [U("span", nf, D(s(t.comparison)), 1)])
			]))), 128))])])]),
			(V(!0), H(B, null, z(e.preview.source?.warnings ?? [], (e) => (V(), H("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[5] ||= U("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), U("span", null, D(e), 1)]))), 128))
		])]));
	}
}), af = { class: "tw:grid tw:min-w-0 tw:gap-3" }, of = {
	key: 4,
	class: "dui-alert",
	role: "status"
}, sf = /* @__PURE__ */ R({
	__name: "GmToolkitMigrationApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = wl();
		n.initialize(t.initialization, t.actions);
		let { cutoverReport: r, darkWhispersConflictPolicy: i, darkWhispersSelections: a, darkWhispersTableId: o, errorMessage: s, isWorking: c, launcherSelections: l, preview: u, settingSelections: d, state: f, statusMessage: p } = Cs(n);
		return (e, t) => (V(), na(jl, {
			description: "Copy the settings and content you want to keep, update safe hotbar links, and review the result before disabling GM Toolkit.",
			"error-message": P(s),
			icon: "fa-solid fa-box-archive",
			"status-message": P(p),
			title: "Import from GM Toolkit"
		}, {
			default: Un(() => [U("div", af, [
				P(u)?.source ? (V(), na(rf, {
					key: 0,
					"is-working": P(c),
					"last-imported-at": P(f).migration?.importedAt,
					preview: P(u),
					selections: P(d),
					onImport: P(n).importSettings,
					onSelectionChange: P(n).setSettingSelection
				}, null, 8, [
					"is-working",
					"last-imported-at",
					"preview",
					"selections",
					"onImport",
					"onSelectionChange"
				])) : K("", !0),
				P(u) ? (V(), na(nu, {
					key: 1,
					"conflict-policy": P(i),
					"onUpdate:conflictPolicy": t[0] ||= (e) => /* @__PURE__ */ M(i) ? i.value = e : null,
					"is-working": P(c),
					preview: P(u).darkWhispers,
					"selected-table-id": P(o),
					selections: P(a),
					onImport: P(n).importDarkWhispers,
					onSelectionChange: P(n).setDarkWhispersSelection,
					onTableChange: P(n).setDarkWhispersTable
				}, null, 8, [
					"conflict-policy",
					"is-working",
					"preview",
					"selected-table-id",
					"selections",
					"onImport",
					"onSelectionChange",
					"onTableChange"
				])) : K("", !0),
				P(u)?.launchers.candidates.length ? (V(), na(kd, {
					key: 2,
					"is-working": P(c),
					preview: P(u).launchers,
					selections: P(l),
					onRemap: P(n).remapLaunchers,
					onSelectionChange: P(n).setLauncherSelection
				}, null, 8, [
					"is-working",
					"preview",
					"selections",
					"onRemap",
					"onSelectionChange"
				])) : K("", !0),
				P(r) || P(f).cutoverReview ? (V(), na(ed, {
					key: 3,
					"is-working": P(c),
					report: P(r),
					review: P(f).cutoverReview,
					onReview: P(n).reviewCutover
				}, null, 8, [
					"is-working",
					"report",
					"review",
					"onReview"
				])) : K("", !0),
				!P(u) && !P(r) ? (V(), H("div", of, [...t[1] ||= [U("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), U("span", null, "No GM Toolkit settings, content, or launchers were found in this world.", -1)]])) : K("", !0)
			])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
});
//#endregion
//#region src/functions/records/parse.ts
function cf(e) {
	if (typeof e != "string") return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : t.toISOString();
}
function Y(e) {
	return typeof e == "string" ? e : "";
}
function X(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/types/dark-whispers/PromptLibrary.ts
var lf = {
	prompts: [],
	version: 1
};
//#endregion
//#region src/functions/dark-whispers/library.ts
function uf(e) {
	return typeof e == "string" ? e.replace(/\r\n?/g, "\n").replace(/[\t ]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
}
function df(e) {
	if (typeof e != "string") return ff("The Dark Whispers prompt library setting was not serialized text.");
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return ff("The Dark Whispers prompt library contains invalid JSON.");
	}
	if (!X(t) || t.version !== 1 || !Array.isArray(t.prompts)) return ff("The Dark Whispers prompt library has an unsupported schema.");
	let n = [], r = t.prompts.flatMap((e, t) => {
		let r = pf(e);
		return r ? [r] : (n.push(`Dark Whispers prompt ${t + 1} was invalid and was skipped.`), []);
	}), i = hf(t.lastImport);
	return t.lastImport !== void 0 && !i && n.push("The Dark Whispers import record was invalid and was skipped."), {
		library: {
			...i ? { lastImport: i } : {},
			prompts: r,
			version: 1
		},
		warnings: n
	};
}
function ff(e) {
	return {
		library: {
			...lf,
			prompts: []
		},
		warnings: [e]
	};
}
function pf(e) {
	if (!X(e)) return;
	let t = Y(e.id), n = uf(e.text), r = mf(e.source);
	if (!(!t || !n)) return {
		id: t,
		...r ? { source: r } : {},
		text: n
	};
}
function mf(e) {
	if (!X(e) || e.type !== "gm-toolkit") return;
	let t = Y(e.moduleVersion), n = Y(e.resultId), r = Y(e.tableId);
	return n && r ? {
		...t ? { moduleVersion: t } : {},
		resultId: n,
		tableId: r,
		type: "gm-toolkit"
	} : void 0;
}
function hf(e) {
	if (!X(e)) return;
	let t = e.conflictPolicy, n = cf(e.importedAt), r = Array.isArray(e.resultIds) ? e.resultIds.filter((e) => typeof e == "string") : [], i = Y(e.sourceModuleVersion), a = Y(e.sourceTableId), o = Y(e.sourceTableName);
	if (!(t !== "preserve" && t !== "replace" || !n || !a || !o)) return {
		conflictPolicy: t,
		importedAt: n,
		resultIds: r,
		...i ? { sourceModuleVersion: i } : {},
		sourceTableId: a,
		sourceTableName: o
	};
}
//#endregion
//#region src/functions/gm-toolkit/content.ts
var gf = "9rXQv4uJcQoLBitt", _f = "Dark Whispers", vf = "wfrp4e-gm-toolkit", yf = "gm-toolkit-tables";
function bf(e, t) {
	return e.flatMap((e) => Cf(e, t)).sort(Ef);
}
function xf(e, t, n = []) {
	let r = e.map((e) => ({
		...e,
		prompts: e.prompts.map((n) => ({
			...n,
			comparison: Df(e.tableId, n.resultId, n.text, t)
		})),
		warnings: [...e.warnings]
	})), i = r[0]?.confidence, a = r.filter((e) => e.confidence === i)[0]?.tableId, o = [...n];
	return r.length > 1 && o.push(`${r.length} possible Dark Whispers tables were found. Review the selected source before importing.`), r.length === 0 && o.push("No imported GM Toolkit Dark Whispers table was found in this world. The source table is not created or modified."), {
		candidates: r,
		currentPromptCount: t.prompts.length,
		...a ? { recommendedTableId: a } : {},
		warnings: o
	};
}
function Sf(e, t, n, r) {
	let i = e.candidates.find((e) => e.tableId === n.tableId);
	if (!i) throw Error("Select an available GM Toolkit Dark Whispers table.");
	let a = new Set(n.resultIds), o = i.prompts.filter((e) => a.has(e.resultId));
	if (o.length === 0) throw Error("Select at least one Dark Whispers prompt to import.");
	let s = t.prompts.map((e) => ({
		...e,
		...e.source ? { source: { ...e.source } } : {}
	})), c = 0, l = 0, u = 0;
	for (let e of o) {
		let t = s.findIndex((t) => t.source?.type === "gm-toolkit" && t.source.tableId === i.tableId && t.source.resultId === e.resultId), r = s.some((t) => t.text === e.text);
		if (t >= 0) {
			let r = s[t];
			if (r.text === e.text) {
				u += 1;
				continue;
			}
			if (n.conflictPolicy === "preserve") {
				u += 1;
				continue;
			}
			s[t] = {
				...r,
				source: Of(i, e.resultId),
				text: e.text
			}, l += 1;
			continue;
		}
		if (r) {
			u += 1;
			continue;
		}
		s.push({
			id: kf(i.tableId, e.resultId),
			source: Of(i, e.resultId),
			text: e.text
		}), c += 1;
	}
	return {
		added: c,
		library: {
			lastImport: {
				conflictPolicy: n.conflictPolicy,
				importedAt: r,
				resultIds: o.map((e) => e.resultId),
				...i.moduleVersion ? { sourceModuleVersion: i.moduleVersion } : {},
				sourceTableId: i.tableId,
				sourceTableName: i.tableName
			},
			prompts: s,
			version: 1
		},
		replaced: l,
		skipped: u
	};
}
function Cf(e, t) {
	if (!X(e)) return [];
	let n = Y(e._id), r = Y(e.name), i = wf(e, n, r);
	if (!n || !r || !i) return [];
	let a = [], o = (Array.isArray(e.results) ? e.results : []).flatMap((e, t) => {
		if (!X(e)) return a.push(`Table row ${t + 1} was invalid and was skipped.`), [];
		let n = Y(e._id), r = uf(e.description);
		return !n || !r ? (a.push(`Table row ${t + 1} had no stable ID or prompt text and was skipped.`), []) : [{
			range: Tf(e.range, t),
			resultId: n,
			text: r
		}];
	});
	return o.length === 0 && a.push("The table contains no importable prompt rows."), [{
		confidence: i,
		...t ? { moduleVersion: t } : {},
		prompts: o,
		tableId: n,
		tableName: r,
		warnings: a
	}];
}
function wf(e, t, n) {
	let r = X(e._stats) ? e._stats : {}, i = X(e.flags) ? e.flags : {}, a = X(i.wfrp4e) ? i.wfrp4e : {}, o = i[vf], s = Y(r.compendiumSource), c = n === _f;
	return c && s.includes(`${vf}.${yf}`) || Y(a.key).toLowerCase() === "darkwhispers" || c && X(o) ? "metadata" : t === gf ? "id" : c ? "name" : void 0;
}
function Tf(e, t) {
	if (Array.isArray(e) && e.length >= 2 && Number.isFinite(Number(e[0])) && Number.isFinite(Number(e[1]))) {
		let t = Number(e[0]), n = Number(e[1]);
		return t === n ? String(t) : `${t}–${n}`;
	}
	return String(t + 1);
}
function Ef(e, t) {
	let n = {
		id: 2,
		metadata: 3,
		name: 1
	};
	return n[t.confidence] - n[e.confidence] || t.prompts.length - e.prompts.length;
}
function Df(e, t, n, r) {
	let i = r.prompts.find((n) => n.source?.type === "gm-toolkit" && n.source.tableId === e && n.source.resultId === t);
	return i ? i.text === n ? "same" : "conflict" : r.prompts.some((e) => e.text === n) ? "duplicate" : "new";
}
function Of(e, t) {
	return {
		...e.moduleVersion ? { moduleVersion: e.moduleVersion } : {},
		resultId: t,
		tableId: e.tableId,
		type: "gm-toolkit"
	};
}
function kf(e, t) {
	return `gm-toolkit:${e}:${t}`;
}
//#endregion
//#region src/functions/gm-toolkit/cutover.ts
function Af(e) {
	let t = Nf(e.preview, e.migration), n = Pf(e.preview), r = Ff(e.preview), i = If(e.preview, e.sourceEvidence), a = {
		content: n,
		launchers: r,
		settings: {
			dispositionCounts: e.preview.dispositionCounts,
			items: t,
			total: e.preview.source?.settings.length ?? 0
		},
		source: {
			moduleVersion: i.moduleVersion ?? "",
			schemaVersion: i.schemaVersion
		}
	};
	return {
		combat: { ...e.combat },
		content: n,
		evidenceId: Rf(JSON.stringify(a)),
		generatedAt: new Date(e.generatedAt).toISOString(),
		launchers: r,
		notices: Lf(e.preview, t, n, r, e.combat),
		settings: {
			dispositionCounts: { ...e.preview.dispositionCounts },
			items: t,
			total: e.preview.source?.settings.length ?? 0
		},
		source: i,
		version: 1
	};
}
function jf(e, t, n) {
	let r = cf(n);
	if (!r || !t.id || !t.name.trim()) throw Error("A valid GM and review time are required to save the review.");
	return {
		evidenceId: e.evidenceId,
		reviewedAt: r,
		reviewedByUserId: t.id,
		reviewedByUserName: t.name.trim(),
		version: 1
	};
}
function Mf(e) {
	if (!X(e) || e.version !== 1) return;
	let t = Y(e.evidenceId), n = cf(e.reviewedAt), r = Y(e.reviewedByUserId), i = Y(e.reviewedByUserName);
	return t && n && r && i ? {
		evidenceId: t,
		reviewedAt: n,
		reviewedByUserId: r,
		reviewedByUserName: i,
		version: 1
	} : void 0;
}
function Nf(e, t) {
	let n = new Set(t?.appliedFields ?? []);
	return e.imports.map((e) => {
		let t = n.has(e.field) ? e.comparison === "same" ? "imported" : "changed-after-import" : e.comparison === "same" ? "already-matched" : "not-imported";
		return {
			currentValue: e.currentValue,
			field: e.field,
			label: e.label,
			sourceKey: e.sourceKey,
			sourceValue: e.sourceValue,
			status: t
		};
	});
}
function Pf(e) {
	let t = e.darkWhispers.candidates.find(({ tableId: t }) => t === e.darkWhispers.recommendedTableId) ?? e.darkWhispers.candidates[0], n = t?.prompts ?? [];
	return {
		comparisonCounts: {
			conflict: n.filter(({ comparison: e }) => e === "conflict").length,
			duplicate: n.filter(({ comparison: e }) => e === "duplicate").length,
			new: n.filter(({ comparison: e }) => e === "new").length,
			same: n.filter(({ comparison: e }) => e === "same").length
		},
		currentPromptCount: e.darkWhispers.currentPromptCount,
		sourcePromptCount: n.length,
		...t ? {
			sourceTableId: t.tableId,
			sourceTableName: t.tableName
		} : {}
	};
}
function Ff(e) {
	let t = e.launchers.candidates, n = t.filter(({ match: e, replacement: t }) => e !== "standard" || t.disposition === "partial" || t.disposition === "pending").map((e) => ({
		disposition: e.replacement.disposition,
		hotbarSlots: [...e.hotbarSlots],
		macroId: e.macroId,
		macroName: e.macroName,
		match: e.match,
		outcome: e.replacement.label
	}));
	for (let e of t) e.match === "standard" && e.replacement.disposition === "ready" && e.hotbarSlots.length > 0 && n.push({
		disposition: e.replacement.disposition,
		hotbarSlots: [...e.hotbarSlots],
		macroId: e.macroId,
		macroName: e.macroName,
		match: e.match,
		outcome: "A complete replacement exists, but one or more hotbar slots still use the source macro."
	});
	return {
		detectedMacros: t.length,
		hotbarSlots: t.reduce((e, t) => e + t.hotbarSlots.length, 0),
		remappableSlots: e.launchers.remappableSlots.length,
		unresolved: n.sort((e, t) => e.macroName.localeCompare(t.macroName))
	};
}
function If(e, t) {
	let n = e.source, r = t === "current";
	return {
		active: r && n?.active === !0,
		evidence: t,
		installed: r && n?.installed === !0,
		...n?.moduleVersion ? { moduleVersion: n.moduleVersion } : {},
		schemaVersion: "9.2.0"
	};
}
function Lf(e, t, n, r, i) {
	let a = [], o = t.filter(({ status: e }) => e === "changed-after-import" || e === "not-imported").length, s = n.comparisonCounts.conflict + n.comparisonCounts.new;
	i.active && a.push({
		code: "active-combat",
		message: "Finish the active combat before disabling GM Toolkit. Combat-specific data is not copied."
	}), o > 0 && a.push({
		code: "settings-review",
		message: `${o} compatible setting value${o === 1 ? " needs" : "s need"} an explicit keep-or-import decision.`
	}), s > 0 && a.push({
		code: "content-review",
		message: `${s} Dark Whispers prompt${s === 1 ? " needs" : "s need"} an explicit import-or-preserve decision.`
	}), r.unresolved.length > 0 && a.push({
		code: "launcher-review",
		message: `${r.unresolved.length} detected launcher${r.unresolved.length === 1 ? " needs" : "s need"} review before you disable GM Toolkit.`
	});
	let c = [
		...e.source?.warnings ?? [],
		...e.darkWhispers.warnings,
		...e.launchers.warnings
	];
	return a.push(...c.map((e) => ({
		code: "source-warning",
		message: e
	}))), a;
}
function Rf(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t = Math.imul(t ^ e.charCodeAt(n), 16777619) >>> 0;
	return t.toString(16).padStart(8, "0");
}
//#endregion
//#region src/functions/gm-toolkit/migration.ts
var zf = [
	"sessionReference",
	"defaultXpAmount",
	"defaultXpSelection",
	"defaultXpReason"
];
function Bf(e, t, n) {
	let r = Jf(e, t);
	return {
		disposition: e.disposition,
		family: e.family,
		key: e.key,
		source: n,
		valid: r.valid,
		value: r.value
	};
}
function Vf(e, t, n = {
	candidates: [],
	currentPromptCount: 0,
	warnings: []
}, r = {
	candidates: [],
	counts: {
		ambiguous: 0,
		customized: 0,
		standard: 0
	},
	remappableSlots: [],
	version: 1,
	warnings: []
}) {
	let i = [
		Wf(e, t, "sessionReference", "sessionID", "Session reference"),
		Wf(e, t, "defaultXpAmount", "addXPDefaultAmount", "XP amount"),
		Wf(e, t, "defaultXpSelection", "defaultPartySessionTurnover", "Recipients"),
		Wf(e, t, "defaultXpReason", "addXPDefaultReason", "XP reason")
	];
	return {
		darkWhispers: n,
		dispositionCounts: Xf(e.settings, "disposition", [
			"import",
			"pending",
			"retire",
			"skip",
			"supersede"
		]),
		imports: i,
		launchers: r,
		source: e,
		sourceCounts: Xf(e.settings, "source", [
			"baseline",
			"persisted",
			"registered"
		]),
		version: 1
	};
}
function Hf(e) {
	if (!X(e) || e.schemaVersion !== "9.2.0") return;
	let t = Array.isArray(e.settings) ? e.settings.flatMap(Yf) : [];
	if (!t.length) return;
	let n = Y(e.moduleVersion);
	return {
		active: e.active === !0,
		installed: e.installed === !0,
		...n ? { moduleVersion: n } : {},
		schemaVersion: "9.2.0",
		settings: t,
		warnings: Array.isArray(e.warnings) ? e.warnings.filter((e) => typeof e == "string") : []
	};
}
function Uf(e) {
	return typeof e == "string" && zf.includes(e);
}
function Wf(e, t, n, r, i) {
	let a = Gf(n, e.settings.find((e) => e.key === r)?.value), o = Kf(n, t);
	return {
		comparison: qf(o, a),
		currentValue: o,
		field: n,
		label: i,
		sourceKey: r,
		sourceValue: a
	};
}
function Gf(e, t) {
	if (e === "defaultXpAmount") {
		let e = Number(t);
		return Number.isFinite(e) ? Math.round(e) : 0;
	}
	return e === "defaultXpSelection" ? t === "company" ? "company" : "party" : typeof t == "string" && t !== "null" ? t : "";
}
function Kf(e, t) {
	switch (e) {
		case "sessionReference": return t.sessionReference;
		case "defaultXpAmount": return t.xpAwardSettings.defaultAmount;
		case "defaultXpReason": return t.xpAwardSettings.defaultReason;
		case "defaultXpSelection": return t.xpAwardSettings.defaultSelection;
	}
}
function qf(e, t) {
	return e === t ? "same" : e === "" ? "target-empty" : "different";
}
function Jf(e, t) {
	if (e.kind === "array") return Array.isArray(t) ? {
		valid: !0,
		value: t
	} : {
		valid: !1,
		value: e.defaultValue
	};
	if (e.kind === "boolean") return typeof t == "boolean" ? {
		valid: !0,
		value: t
	} : {
		valid: !1,
		value: e.defaultValue
	};
	if (e.kind === "number") {
		let n = Number(t);
		return Number.isFinite(n) ? {
			valid: !0,
			value: n
		} : {
			valid: !1,
			value: e.defaultValue
		};
	}
	return typeof t == "string" ? {
		valid: !0,
		value: t
	} : {
		valid: !1,
		value: e.defaultValue
	};
}
function Yf(e) {
	if (!X(e)) return [];
	let t = e.disposition, n = e.family, r = e.source, i = e.value;
	return !Zf(t) || !Qf(n) || !$f(r) || !ep(i) ? [] : [{
		disposition: t,
		family: n,
		key: Y(e.key),
		source: r,
		valid: e.valid === !0,
		value: i
	}];
}
function Xf(e, t, n) {
	return Object.fromEntries(n.map((n) => [n, e.filter((e) => e[t] === n).length]));
}
function Zf(e) {
	return [
		"import",
		"pending",
		"retire",
		"skip",
		"supersede"
	].includes(String(e));
}
function Qf(e) {
	return [
		"advantage",
		"dark-whispers",
		"group-tests",
		"session",
		"spectators",
		"token-hud",
		"vision"
	].includes(String(e));
}
function $f(e) {
	return [
		"baseline",
		"persisted",
		"registered"
	].includes(String(e));
}
function ep(e) {
	return [
		"boolean",
		"number",
		"string"
	].includes(typeof e) || Array.isArray(e);
}
//#endregion
//#region src/module/dark-whispers/settings/keys.ts
var tp = { promptLibrary: "darkWhispersPromptLibrary" };
//#endregion
//#region src/module/dark-whispers/settings/load.ts
function np() {
	return df(game.settings.get(t, tp.promptLibrary));
}
function rp() {
	let e = np();
	for (let n of e.warnings) console.warn(`${t} | ${n}`);
	return e.library;
}
async function ip(e) {
	await game.settings.set(t, tp.promptLibrary, JSON.stringify(e));
}
//#endregion
//#region src/types/session-management/SessionManagement.ts
var ap = {
	currentSessionReference: "",
	sessions: [],
	version: 1
}, op = { version: 1 };
//#endregion
//#region src/functions/gm-toolkit/state.ts
function sp(e) {
	let t = lp(e);
	if (!t || t.version !== 1) return { ...op };
	let n = cp(t.migration), r = Mf(t.cutoverReview);
	return {
		...r ? { cutoverReview: r } : {},
		...n ? { migration: n } : {},
		version: 1
	};
}
function cp(e) {
	if (!X(e) || !X(e.xpAwardSettings)) return;
	let t = cf(e.importedAt), n = Y(e.sessionReference), r = e.xpAwardSettings, i = r.defaultSelection;
	if (!t || i !== "party" && i !== "company" && i !== "world" || !Number.isFinite(Number(r.defaultAmount))) return;
	let a = Hf(e.source), o = Array.isArray(e.appliedFields) ? e.appliedFields.filter(Uf) : void 0;
	return {
		...o ? { appliedFields: o } : {},
		importedAt: t,
		sessionReference: n,
		...a ? { source: a } : {},
		...e.version === 2 ? { version: 2 } : {},
		xpAwardSettings: {
			defaultAmount: Math.round(Number(r.defaultAmount)),
			defaultReason: Y(r.defaultReason),
			defaultSelection: i,
			includeTimestampInReason: r.includeTimestampInReason === !0
		}
	};
}
function lp(e) {
	if (typeof e == "string") try {
		let t = JSON.parse(e);
		return X(t) ? t : void 0;
	} catch {
		return;
	}
}
//#endregion
//#region src/functions/session-management/session.ts
var up = 500;
function dp(e) {
	let t = e.trim();
	if (!t) return "";
	let n = Number(t);
	return Number.isFinite(n) && Math.trunc(n) === n ? String(n + 1) : t;
}
function fp(e, t, n) {
	let r = t.sessionReference.trim(), i = t.nextSessionReference.trim(), a = gp(t.occurredAt, "session occurrence"), o = gp(n.recordedAt, "session record");
	if (!r) throw Error("Enter the session reference that is being completed.");
	if (!i) throw Error("Enter the next session reference.");
	let s = {
		id: n.id,
		occurredAt: a,
		recordedAt: o,
		reference: r
	};
	return {
		record: s,
		state: {
			...e,
			currentSessionReference: i,
			sessions: [s, ...e.sessions].slice(0, up)
		}
	};
}
function pp(e) {
	let t = hp(e);
	if (!t || t.version !== 1) return {
		...ap,
		sessions: []
	};
	let n = Array.isArray(t.sessions) ? t.sessions.flatMap(mp).slice(0, up) : [], r = cp(t.gmToolkitMigration), i = Mf(t.gmToolkitCutoverReview);
	return {
		currentSessionReference: Y(t.currentSessionReference),
		...i ? { gmToolkitCutoverReview: i } : {},
		...r ? { gmToolkitMigration: r } : {},
		sessions: n,
		version: 1
	};
}
function mp(e) {
	if (!X(e)) return [];
	let t = Y(e.id), n = cf(e.occurredAt), r = cf(e.recordedAt), i = Y(e.reference);
	return t && n && r && i ? [{
		id: t,
		occurredAt: n,
		recordedAt: r,
		reference: i
	}] : [];
}
function hp(e) {
	if (typeof e == "string") try {
		let t = JSON.parse(e);
		return X(t) ? t : void 0;
	} catch {
		return;
	}
}
function gp(e, t) {
	let n = new Date(e);
	if (Number.isNaN(n.getTime())) throw Error(`Enter a valid ${t} date and time.`);
	return n.toISOString();
}
//#endregion
//#region src/module/session-management/settings/keys.ts
var _p = { state: "sessionManagementState" };
//#endregion
//#region src/module/session-management/settings/load.ts
function vp() {
	return pp(game.settings.get(t, _p.state));
}
function yp() {
	return vp().currentSessionReference;
}
async function bp(e) {
	await game.settings.set(t, _p.state, JSON.stringify(e));
}
//#endregion
//#region src/types/xp-award/XpAward.ts
var xp = {
	batches: [],
	version: 1
}, Sp = 500;
function Cp(e, t) {
	return {
		batches: [t, ...e.batches].slice(0, Sp),
		version: 1
	};
}
function wp(e) {
	if (typeof e != "string") return {
		...xp,
		batches: []
	};
	try {
		let t = JSON.parse(e);
		return !X(t) || t.version !== 1 || !Array.isArray(t.batches) ? {
			...xp,
			batches: []
		} : {
			batches: t.batches.flatMap(Tp).slice(0, Sp),
			version: 1
		};
	} catch {
		return {
			...xp,
			batches: []
		};
	}
}
function Tp(e) {
	if (!X(e) || !Array.isArray(e.awards)) return [];
	let t = cf(e.awardedAt), n = Y(e.id), r = Y(e.reason), i = Y(e.sessionReference), a = e.awards.flatMap(Ep);
	return !t || !n || a.length === 0 ? [] : [{
		awardedAt: t,
		awards: a,
		id: n,
		reason: r,
		sessionReference: i,
		totalChange: a.reduce((e, t) => e + t.amount, 0)
	}];
}
function Ep(e) {
	if (!X(e)) return [];
	let t = e.category, n = Number(e.amount), r = Number(e.beforeXp), i = Number(e.afterXp);
	return t !== "standard" && t !== "companion" || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i) ? [] : [{
		actorId: Y(e.actorId),
		actorName: Y(e.actorName),
		afterXp: Math.round(i),
		amount: Math.round(n),
		beforeXp: Math.round(r),
		category: t
	}];
}
//#endregion
//#region src/module/xp-award/settings/keys.ts
var Dp = {
	auditLog: "xpAwardAuditLog",
	defaultAmount: "xpAwardDefaultAmount",
	defaultReason: "xpAwardDefaultReason",
	defaultSelection: "xpAwardDefaultSelection",
	includeTimestampInReason: "xpAwardIncludeTimestampInReason"
};
//#endregion
//#region src/module/xp-award/settings/load.ts
function Op() {
	return {
		defaultAmount: Math.round(Number(game.settings.get(t, Dp.defaultAmount))),
		defaultReason: Mp(Dp.defaultReason),
		defaultSelection: Np(),
		includeTimestampInReason: game.settings.get(t, Dp.includeTimestampInReason) === !0
	};
}
async function kp(e) {
	let n = [
		[Dp.defaultAmount, Math.round(e.defaultAmount)],
		[Dp.defaultReason, e.defaultReason],
		[Dp.defaultSelection, e.defaultSelection],
		[Dp.includeTimestampInReason, e.includeTimestampInReason]
	];
	for (let [e, r] of n) await game.settings.set(t, e, r);
}
function Ap() {
	return wp(game.settings.get(t, Dp.auditLog));
}
async function jp(e) {
	await game.settings.set(t, Dp.auditLog, JSON.stringify(e));
}
function Mp(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function Np() {
	let e = Mp(Dp.defaultSelection);
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/gm-toolkit/content-source.ts
function Pp() {
	let e = game.modules.get(r)?.version;
	return bf(Array.from(game.tables).map((e) => Fp(e.toObject())), e);
}
function Fp(e) {
	if (typeof e != "object" || !e) return e;
	let t = Reflect.get(e, "results");
	return Array.isArray(t) ? {
		...e,
		results: t.map((e) => typeof e != "object" || !e ? e : {
			...e,
			description: Ip(Reflect.get(e, "description"))
		})
	} : e;
}
function Ip(e) {
	if (typeof e != "string") return "";
	if (!/[<&]/.test(e)) return e;
	let t = document.createElement("div");
	return t.innerHTML = e, t.querySelectorAll("script, style, template").forEach((e) => e.remove()), t.textContent ?? "";
}
//#endregion
//#region src/functions/gm-toolkit/launcher-catalog.ts
var Lp = [
	Z("AjUYYy7qAN55BERN", "Add Advantage", 317, "f46c0d0e", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("rzKeTLKp0bOp5SK9", "Add XP", 7054, "3e94af4e", "ready", "Replace with Drowsy’s XP Award Console.", {
		macroId: "aW4rD8xP2cN7sL5q",
		macroName: "Open XP Award Console"
	}),
	Z("GfXvMqsynxpHTYPt", "Canvas Toolbox", 3515, "1b42131d", "pending", "No direct equivalent is available. Open Drowsy tools from their own launchers."),
	Z("PsZADfqRKnbnAT5Q", "Change Scene to Yards", 628, "bc14705a", "ready", "Replace with the generalized grid-scale utility.", {
		macroId: "DrowsyGridScale1",
		macroName: "Change Grid Scale (Preserve Lighting)"
	}),
	Z("vUzIl1uDkykO5DmG", "Check Conditions", 5830, "56693f0a", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("6EKiEQZTbmQN97Vr", "Clear Advantage", 279, "e3cda086", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("xU8TFHu98zX5isb0", "Combat Toolbox", 3509, "cd02aee7", "pending", "No direct equivalent is available. Open Drowsy tools from their own launchers."),
	Z("iopoLXTz9kfDTfiX", "GM Toolbox", 3465, "ebccaef2", "pending", "No direct equivalent is available. Open Drowsy tools from their own launchers."),
	Z("hLEsIrMsOYQROnl5", "GM Toolkit Settings", 3252, "bda29fbb", "partial", "Use Module Settings to open the GM Toolkit Importer or another Drowsy tool."),
	Z("74OvSfTs3slii0RR", "Launch Damage Console", 278, "70bf6804", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("wN47JNwM2POBSUUm", "Make Secret Group Test", 3093, "a0d1c8f8", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("tiKEfs1nB7zAMgYg", "Pull Everyone to Scene", 2525, "b21938a7", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("2sefSFqqAbySw2nz", "Reduce Advantage", 285, "12053b38", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("pZmPtsEZHOpyJfnq", "Reset Fortune", 1854, "b87bc4f5", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("roGO31Lo4pyL5kvg", "Send Dark Whispers", 7400, "f05c3d43", "partial", "Prompt text can be copied, but sending Dark Whispers is not available without the original macro."),
	Z("WcBTP5xRO9jcJMVa", "Session Toolbox", 3501, "17ab0783", "partial", "Use Session Management for session records and XP Award for fixed XP. Other toolbox actions are not available."),
	Z("g9Wohpie7ODdbRKX", "Session Turnover", 3100, "bd85a21d", "partial", "Session Management can record and advance sessions, but it does not perform the original macro’s other actions."),
	Z("DGYdRmtbMZ81NmQ3", "Set Token Vision and Light", 13595, "c6c8d6c8", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("ihMGjHFP3SdvYH2k", "Simply d100", 8, "1df039d8", "independent", "This core chat roll has no continuing GM Toolkit runtime dependency."),
	Z("nvqeTARBoSP89WT5", "Toggle Compendium Pack Visibility", 2752, "f921858d", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action."),
	Z("OiQ0cS3QsmQadxqR", "Toggle Scene Visibility and Light", 845, "1562d17a", "pending", "No Drowsy equivalent is available. Keep the original macro if you still use this action.")
];
function Z(e, t, n, r, i, a, o = {
	macroId: "",
	macroName: ""
}) {
	return {
		commandFingerprint: r,
		commandLength: n,
		id: e,
		name: t,
		replacement: {
			disposition: i,
			label: a,
			...o.macroId ? o : {}
		}
	};
}
//#endregion
//#region src/functions/gm-toolkit/launchers.ts
var Rp = "wfrp4e-gm-toolkit.gm-toolkit-macros", zp = "wfrp4e-enhanced-fear-terror.macros", Bp = {
	DrowsyGridScale1: {
		fingerprint: "9476a7a4",
		length: 756
	},
	aW4rD8xP2cN7sL5q: {
		fingerprint: "795a9a75",
		length: 680
	}
};
function Vp(e, t, n = {}) {
	let r = e.flatMap((e) => Gp(e, t)), i = r.filter(({ match: e, replacement: t }) => e === "standard" && t.disposition === "ready").flatMap(({ hotbarSlots: e }) => e).filter((e, t, n) => n.indexOf(e) === t).sort((e, t) => e - t);
	return {
		candidates: r,
		counts: qp(r),
		remappableSlots: i,
		...n.id ? { userId: n.id } : {},
		...n.name ? { userName: n.name } : {},
		version: 1,
		warnings: n.id ? [] : ["The current user was unavailable, so hotbar assignments could not be reviewed."]
	};
}
function Hp(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t = Math.imul(t ^ e.charCodeAt(n), 16777619) >>> 0;
	return t.toString(16).padStart(8, "0");
}
function Up(e, t) {
	return !!(e && e.includes(zp) && e.endsWith(t));
}
function Wp(e, t) {
	let n = Bp[t];
	return !!(e && n && Up(e.compendiumSource, t) && e.command.length === n.length && Hp(e.command) === n.fingerprint);
}
function Gp(e, t) {
	let n = Lp.find(({ id: t }) => e.compendiumSource?.includes(Rp) === !0 && e.compendiumSource.endsWith(t)), r = Lp.find(({ id: t }) => t === e.id), i = Lp.find(({ name: t }) => t === e.name), a = n ?? r ?? i;
	if (!a) return [];
	let o = n ? "source" : r ? "document-id" : "name", s = Kp(a, e.command) ? "standard" : o === "name" ? "ambiguous" : "customized";
	return [{
		confidence: o,
		hotbarSlots: [...t.get(e.id) ?? []].sort((e, t) => e - t),
		macroId: e.id,
		macroName: e.name,
		match: s,
		replacement: {
			compendiumId: zp,
			...a.replacement
		},
		sourceMacroId: a.id,
		sourceMacroName: a.name
	}];
}
function Kp(e, t) {
	return t.length === e.commandLength && Hp(t) === e.commandFingerprint;
}
function qp(e) {
	return {
		ambiguous: e.filter(({ match: e }) => e === "ambiguous").length,
		customized: e.filter(({ match: e }) => e === "customized").length,
		standard: e.filter(({ match: e }) => e === "standard").length
	};
}
//#endregion
//#region src/module/gm-toolkit/launcher-source.ts
var Jp = `${t}.macros`;
function Yp() {
	let e = Array.from(game.macros).flatMap(Zp), t = game.user, n = /* @__PURE__ */ new Map();
	if (t) for (let e = 1; e <= 5; e += 1) for (let { macro: r, slot: i } of t.getHotbarMacros(e)) r?.id && n.set(r.id, [...n.get(r.id) ?? [], i]);
	return Vp(e, n, {
		id: t?.id,
		name: t?.name
	});
}
async function Xp(e) {
	let t = Array.from(game.macros).find((t) => {
		let n = Zp(t)[0];
		return Wp(n, e);
	});
	if (t) return {
		imported: !1,
		macro: t
	};
	let n = game.packs.get(Jp);
	if (!n) throw Error("The Drowsy launcher compendium is unavailable.");
	return {
		imported: !0,
		macro: await game.macros.importFromCompendium(n, e)
	};
}
function Zp(e) {
	let t = e.toObject();
	if (!X(t)) return [];
	let n = Y(t._id ?? e.id), r = Y(t.name ?? e.name), i = Y(t.command), a = Y(t.type);
	if (!n || !r || !a) return [];
	let o = t._stats, s = X(o) ? Y(o.compendiumSource) : "";
	return [{
		command: i,
		...s ? { compendiumSource: s } : {},
		id: n,
		name: r,
		type: a
	}];
}
//#endregion
//#region src/module/gm-toolkit/settings/keys.ts
var Qp = { state: "gmToolkitMigrationState" };
//#endregion
//#region src/module/gm-toolkit/settings/load.ts
function $p() {
	let e = sp(game.settings.get(t, Qp.state));
	if (e.migration || e.cutoverReview) return e;
	let n = vp();
	return {
		...n.gmToolkitCutoverReview ? { cutoverReview: n.gmToolkitCutoverReview } : {},
		...n.gmToolkitMigration ? { migration: n.gmToolkitMigration } : {},
		version: 1
	};
}
async function em(e) {
	await game.settings.set(t, Qp.state, JSON.stringify(e));
}
//#endregion
//#region src/functions/gm-toolkit/catalog.ts
var Q = (e, t, n, r, i) => ({
	defaultValue: r,
	disposition: i,
	family: t,
	key: e,
	kind: n
}), tm = [
	Q("automateOpposedTestAdvantage", "advantage", "boolean", !0, "pending"),
	Q("automateDamageAdvantage", "advantage", "boolean", !0, "pending"),
	Q("automateConditionAdvantage", "advantage", "boolean", !0, "pending"),
	Q("promptMomentumLoss", "advantage", "boolean", !0, "pending"),
	Q("clearAdvantageCombatJoin", "advantage", "boolean", !0, "pending"),
	Q("clearAdvantageCombatLeave", "advantage", "boolean", !0, "pending"),
	Q("persistAdvantageNotifications", "advantage", "boolean", !1, "pending"),
	Q("sessionID", "session", "string", "0", "import"),
	Q("defaultPartySessionTurnover", "session", "string", "party", "import"),
	Q("addXPPrompt", "session", "boolean", !1, "supersede"),
	Q("addXPDefaultAmount", "session", "number", 20, "import"),
	Q("addXPDefaultReason", "session", "string", "Session %session% (%date%)", "import"),
	Q("holdingScene", "session", "string", "", "pending"),
	Q("exportChat", "session", "boolean", !1, "pending"),
	Q("scenePullActivate", "session", "string", "never", "pending"),
	Q("rangeNormalSight", "vision", "number", 2, "pending"),
	Q("rangeDarkVision", "vision", "number", 120, "pending"),
	Q("overrideNightVision", "vision", "boolean", !1, "pending"),
	Q("overrideDarkVision", "vision", "boolean", !1, "pending"),
	Q("defaultGroupDarkWhispers", "dark-whispers", "string", "party", "pending"),
	Q("messageDarkWhispers", "dark-whispers", "string", "taunt", "pending"),
	Q("enableTokenHudExtensions", "token-hud", "boolean", !1, "retire"),
	Q("tokenHudStatusEffectsBackground", "token-hud", "string", "#cececeff", "retire"),
	Q("suppressSpectatorNotice", "spectators", "boolean", !1, "pending"),
	Q("quicktest1GroupTest", "group-tests", "string", "Perception", "pending"),
	Q("quicktest2GroupTest", "group-tests", "string", "Cool", "pending"),
	Q("quicktest3GroupTest", "group-tests", "string", "Intuition", "pending"),
	Q("quicktest4GroupTest", "group-tests", "string", "Gossip", "pending"),
	Q("defaultSkillGroupTest", "group-tests", "string", "Lore (Reikland)", "pending"),
	Q("bypassTestDialogGroupTest", "group-tests", "boolean", !0, "pending"),
	Q("defaultDifficultyGroupTest", "group-tests", "string", "average", "pending"),
	Q("defaultRollModeGroupTest", "group-tests", "string", "blindroll", "pending"),
	Q("defaultTestModifierGroupTest", "group-tests", "number", 0, "pending"),
	Q("defaultPartyGroupTest", "group-tests", "string", "party", "pending"),
	Q("fallbackAdvancedSkills", "group-tests", "boolean", !1, "pending"),
	Q("fallbackAdjustDifficulty", "group-tests", "number", 0, "pending"),
	Q("summariseResultsThresholdGroupTest", "group-tests", "number", 2, "pending"),
	Q("aggregateResultGroupTest", "group-tests", "array", [], "skip")
];
//#endregion
//#region src/module/gm-toolkit/source.ts
function nm() {
	let e = game.modules.get(r), t = game.settings.storage?.get("world"), n = /* @__PURE__ */ new Map();
	for (let e of tm) {
		let r = t?.getItem(am(e.key));
		r != null && n.set(e.key, r);
	}
	if (!e && n.size === 0) return;
	let i = [], a = tm.map((e) => {
		let t = rm(e, n);
		return t.valid || i.push(`${am(e.key)} could not be normalized; the 9.2.0 baseline is shown instead.`), t;
	});
	return {
		active: e?.active === !0,
		installed: e !== void 0,
		...e?.version ? { moduleVersion: e.version } : {},
		schemaVersion: "9.2.0",
		settings: a,
		warnings: i
	};
}
function rm(e, t) {
	let n = t.get(e.key);
	return n === void 0 ? game.settings.settings.has(am(e.key)) ? Bf(e, game.settings.get(r, e.key), "registered") : Bf(e, e.defaultValue, "baseline") : Bf(e, im(n, e), "persisted");
}
function im(e, t) {
	try {
		return JSON.parse(e);
	} catch {
		return t.kind === "string" ? e : void 0;
	}
}
function am(e) {
	return `${r}.${e}`;
}
//#endregion
//#region src/module/gm-toolkit/migration.ts
function om() {
	let e = nm(), t = np(), n = xf(Pp(), t.library, t.warnings), r = Yp();
	if (!(!e && n.candidates.length === 0 && r.candidates.length === 0)) return e ? Vf(e, {
		sessionReference: vp().currentSessionReference,
		xpAwardSettings: Op()
	}, n, r) : {
		darkWhispers: n,
		dispositionCounts: {
			import: 0,
			pending: 0,
			retire: 0,
			skip: 0,
			supersede: 0
		},
		imports: [],
		launchers: r,
		sourceCounts: {
			baseline: 0,
			persisted: 0,
			registered: 0
		},
		version: 1
	};
}
function sm(e = om(), t = $p()) {
	let n = e?.source, r = t.migration?.source, i = n ?? r;
	if (!e && !i) return;
	let a = vp(), o = i ? Vf(i, {
		sessionReference: a.currentSessionReference,
		xpAwardSettings: Op()
	}, e?.darkWhispers, e?.launchers) : e, s = game.combats.active;
	return Af({
		combat: s ? {
			active: !0,
			id: s.id,
			name: s.name,
			...Number.isFinite(s.round) ? { round: Number(s.round) } : {}
		} : { active: !1 },
		generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		...t.migration ? { migration: t.migration } : {},
		preview: o,
		sourceEvidence: n ? "current" : r ? "saved-snapshot" : "world-documents"
	});
}
//#endregion
//#region src/module/gm-toolkit/initialization.ts
function cm() {
	let e = $p(), t = om(), n = sm(t, e);
	return {
		...n ? { cutoverReport: n } : {},
		...t ? { preview: t } : {},
		state: e
	};
}
//#endregion
//#region src/functions/gm-toolkit/apply.ts
function lm(e, t, n) {
	let r = new Set(n), i = {
		sessionReference: t.sessionReference,
		xpAwardSettings: { ...t.xpAwardSettings }
	};
	for (let t of e.imports) if (r.has(t.field)) switch (t.field) {
		case "sessionReference":
			i.sessionReference = String(t.sourceValue);
			break;
		case "defaultXpAmount":
			i.xpAwardSettings.defaultAmount = Number(t.sourceValue);
			break;
		case "defaultXpReason":
			i.xpAwardSettings.defaultReason = String(t.sourceValue);
			break;
		case "defaultXpSelection":
			i.xpAwardSettings.defaultSelection = t.sourceValue === "company" ? "company" : "party";
			break;
	}
	return i;
}
//#endregion
//#region src/module/gm-toolkit/service.ts
async function um(e) {
	Bc(J.gmToolkitMigration);
	let t = om();
	if (!t?.source) throw Error("No installed module or persisted GM Toolkit world settings were found.");
	let n = Array.from(new Set(e.fields)).filter(Uf);
	if (!n.length) throw Error("Select at least one value to import.");
	let r = vp(), i = lm(t, {
		sessionReference: r.currentSessionReference,
		xpAwardSettings: Op()
	}, n), a = {
		appliedFields: n,
		importedAt: (/* @__PURE__ */ new Date()).toISOString(),
		sessionReference: i.sessionReference,
		source: t.source,
		version: 2,
		xpAwardSettings: i.xpAwardSettings
	};
	return n.some((e) => e !== "sessionReference") && await kp(a.xpAwardSettings), n.includes("sessionReference") && await bp({
		...r,
		currentSessionReference: a.sessionReference
	}), await em({
		...$p(),
		migration: a,
		version: 1
	}), ui.notifications.info(`${n.length} value${n.length === 1 ? "" : "s"} imported into Drowsy’s Toolkit.`), a;
}
var dm = um;
async function fm(e) {
	Bc(J.gmToolkitMigration);
	let t = om();
	if (!t) throw Error("No GM Toolkit Dark Whispers table was found.");
	let n = Sf(t.darkWhispers, rp(), e, (/* @__PURE__ */ new Date()).toISOString());
	await ip(n.library);
	let r = om();
	if (!r) throw Error("The Dark Whispers prompts were saved but could not be reloaded.");
	return ui.notifications.info(`${n.added} Dark Whispers prompt${n.added === 1 ? "" : "s"} added, ${n.replaced} replaced, and ${n.skipped} unchanged.`), {
		...n,
		preview: r
	};
}
async function pm(e) {
	Bc(J.gmToolkitMigration);
	let t = game.user;
	if (!t) throw Error("The current Foundry user is unavailable.");
	let n = vl(Yp(), e.slots);
	if (!n.length) throw Error("Select at least one standard hotbar launcher with an available replacement.");
	let r = /* @__PURE__ */ new Map();
	for (let e of n) {
		let n = r.get(e.macroId);
		n || (n = await Xp(e.macroId), r.set(e.macroId, n)), await t.assignHotbarMacro(n.macro, e.slot);
	}
	let i = Array.from(r.values()).filter(({ imported: e }) => e).length;
	return ui.notifications.info(`${n.length} hotbar slot${n.length === 1 ? "" : "s"} remapped to Drowsy launchers.`), {
		importedLaunchers: i,
		preview: Yp(),
		remappedSlots: n.length
	};
}
async function mm() {
	Bc(J.gmToolkitMigration);
	let e = game.user;
	if (!e) throw Error("The current Foundry user is unavailable.");
	let t = $p(), n = sm(void 0, t);
	if (!n) throw Error("No GM Toolkit data is available to review.");
	let r = jf(n, {
		id: e.id,
		name: e.name
	}, (/* @__PURE__ */ new Date()).toISOString());
	return await em({
		...t,
		cutoverReview: r,
		version: 1
	}), ui.notifications.info("Migration review saved."), {
		report: n,
		review: r
	};
}
//#endregion
//#region src/module/apps/gm-toolkit-migration/GmToolkitMigrationApplication.ts
var hm = class extends Gc {
	static ACCESS_POLICY = J.gmToolkitMigration;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-gm-toolkit-migration`],
		id: `${t}-gm-toolkit-migration`,
		position: {
			height: 760,
			width: 780
		},
		window: {
			icon: "fa-solid fa-box-archive",
			resizable: !0,
			title: `${n} — Import from GM Toolkit`
		}
	};
	getVueComponent() {
		return sf;
	}
	getVueProps() {
		return {
			actions: {
				getCutoverReport: sm,
				importDarkWhispers: fm,
				importSettings: um,
				remapLaunchers: pm,
				reviewCutover: mm
			},
			initialization: cm()
		};
	}
};
//#endregion
//#region src/module/apps/gm-toolkit-migration/open.ts
async function gm() {
	let e = new hm();
	return await e.render(!0), e;
}
//#endregion
//#region src/functions/xp-curve/calculate.ts
var _m = .01, vm = 2 ** 53 - 1;
function ym(e) {
	return {
		companionMultiplier: Tm(e.companionMultiplier, 0, 1),
		curveExponent: Tm(e.curveExponent, .1, 5),
		gapForMaximumAward: Math.max(1, Em(e.gapForMaximumAward)),
		maximumAward: Math.max(0, Em(e.maximumAward)),
		scaleExponent: Tm(e.scaleExponent, 0, 2),
		scalePivot: Math.max(1, Em(e.scalePivot))
	};
}
function bm(e, t) {
	let n = e.filter((e) => e.selected), r = ym(t), i = Math.max(0, ...n.map((e) => e.totalXp)), a = n.map((e) => {
		let t = Em(e.totalXp), n = Math.max(0, i - t), a = e.category === "companion" ? r.companionMultiplier : 1, o = xm(n, r), s = Sm(t, r), c = Math.max(0, Math.round(o * s * a)), l = Math.min(r.maximumAward, c);
		return {
			actorId: e.id,
			actorName: e.name,
			afterXp: t + l,
			award: l,
			beforeXp: t,
			catchUpValue: o,
			category: e.category,
			decayMultiplier: s,
			gap: n,
			modifiedAward: c,
			recipientMultiplier: a
		};
	});
	return {
		awards: a,
		highestXp: i,
		totalAward: a.reduce((e, t) => e + t.award, 0)
	};
}
function xm(e, t) {
	let n = ym(t), r = Math.max(0, Number.isFinite(e) ? e : 0) / n.gapForMaximumAward, i = n.maximumAward * r ** n.curveExponent;
	return Number.isFinite(i) ? Math.min(i, vm) : vm;
}
function Sm(e, t) {
	let n = ym(t), r = Math.max(0, Number.isFinite(e) ? e : 0);
	return Math.min(1, n.scalePivot / Math.max(r, n.scalePivot)) ** n.scaleExponent;
}
function Cm(e, t = e.gapForMaximumAward * 1.4, n = 24) {
	let r = ym(e), i = Math.max(2, Em(n)), a = Math.max(r.gapForMaximumAward * 1.4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			award: xm(n, r),
			gap: n
		};
	});
}
function wm(e, t = e.scalePivot * 4, n = 32) {
	let r = ym(e), i = Math.max(2, Em(n)), a = Math.max(1e3, r.scalePivot * 4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			multiplier: Sm(n, r),
			recipientXp: n
		};
	});
}
function Tm(e, t, n) {
	let r = Number(e);
	return Math.min(n, Math.max(t, Number.isFinite(r) ? r : _m));
}
function Em(e) {
	let t = Number(e);
	return Number.isFinite(t) ? Math.round(t) : 0;
}
//#endregion
//#region src/functions/xp-curve/reason.ts
function Dm(e, t) {
	return e.replaceAll("%session%", t.session).replaceAll("%date%", t.date).replaceAll("%datetime%", t.datetime ?? "").replace(/\s+\(\s*\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function Om(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/types/xp-curve/XpCurve.ts
var km = {
	companionMultiplier: .5,
	curveExponent: 1.75,
	gapForMaximumAward: 5e3,
	maximumAward: 1e3,
	scaleExponent: 1,
	scalePivot: 7500
}, Am = {
	defaultReason: "XP Curve %session% (%date%)",
	defaultSelection: "company",
	parameters: { ...km }
};
//#endregion
//#region src/state/apps/shared/xp-actor-selection.ts
function jm(e) {
	let t = /* @__PURE__ */ N([]), n = q(() => t.value.filter((e) => e.selected)), r = /* @__PURE__ */ new Set();
	function i(e) {
		t.value = e.map((e) => ({ ...e })), r = new Set(e.filter((e) => e.selected).map((e) => e.id));
	}
	function a(n, r) {
		let i = t.value.find((e) => e.id === n);
		if (!i) throw Error(`${e} cannot select unknown actor ${n}.`);
		i.selected = r;
	}
	function o(e) {
		for (let n of t.value) n.selected = e;
	}
	function s() {
		for (let e of t.value) e.selected = r.has(e.id);
	}
	return {
		actors: t,
		initializeActors: i,
		resetSelection: s,
		selectedActors: n,
		setActorSelected: a,
		setAllActorsSelected: o
	};
}
//#endregion
//#region src/state/apps/xp-curve-console/store.ts
var Mm = Ss("xp-curve-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = jm("The XP Curve Console"), o = /* @__PURE__ */ N({ ...km }), s = /* @__PURE__ */ N(""), c = /* @__PURE__ */ N("party"), l = /* @__PURE__ */ N("default"), u = /* @__PURE__ */ N(), d = /* @__PURE__ */ N(!1), f, p, m = q(() => bm(e.value, o.value)), h = q(() => m.value.awards.filter((e) => e.award > 0).length), g = q(() => r.value.length >= 2 && m.value.totalAward > 0 && !d.value), _ = q(() => Dm(s.value, x()));
	function v(e, n) {
		f = n, p = e.reasonContext, t(e.actors), o.value = { ...e.parameters }, s.value = e.defaultReason, c.value = e.defaultSelection, l.value = e.selectionSource, u.value = void 0;
	}
	async function y() {
		if (!(!g.value || d.value)) {
			d.value = !0, u.value = void 0;
			try {
				let e = {
					actorIds: r.value.map((e) => e.id),
					defaultReason: s.value,
					defaultSelection: c.value,
					parameters: o.value
				}, t = await b().applyAwards(e);
				b().onActionComplete(t);
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | XP curve award failed.", e), u.value = e instanceof Error ? e.message : "The XP awards could not be completed.";
			} finally {
				d.value = !1;
			}
		}
	}
	function b() {
		if (!f) throw Error("The XP Curve Console has not been initialized.");
		return f;
	}
	function x() {
		if (!p) throw Error("The XP Curve Console has not been initialized.");
		return p;
	}
	return {
		actors: e,
		applyAwards: y,
		canApply: g,
		defaultReason: s,
		errorMessage: u,
		initialize: v,
		isWorking: d,
		plan: m,
		positiveAwardCount: h,
		resetSelection: n,
		resolvedReason: _,
		selectedActors: r,
		selectionSource: l,
		setActorSelected: i,
		setAllActorsSelected: a
	};
}), Nm = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:justify-end tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-3" }, Pm = ["disabled"], Fm = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Im = /* @__PURE__ */ R({
	__name: "ConsoleActionFooter",
	props: {
		disabled: { type: Boolean },
		icon: {},
		label: {},
		working: { type: Boolean }
	},
	emits: ["action"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (V(), H("footer", Nm, [U("button", {
			class: "dui-btn dui-btn-primary tw:w-full tw:min-w-0 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md tw:min-[32rem]:w-auto tw:min-[32rem]:min-w-52",
			disabled: e.disabled,
			type: "button",
			onClick: r[0] ||= (e) => n("action")
		}, [e.working ? (V(), H("span", Fm)) : (V(), H("i", {
			key: 1,
			class: E(e.icon),
			"aria-hidden": "true"
		}, null, 2)), G(" " + D(e.label), 1)], 8, Pm)]));
	}
}), Lm = { class: "tw:cursor-pointer" }, Rm = ["checked", "disabled"], zm = { class: "tw:sr-only" }, Bm = /* @__PURE__ */ R({
	__name: "ActorSelectionCheckbox",
	props: {
		actorId: {},
		actorName: {},
		checked: { type: Boolean },
		disabled: { type: Boolean },
		purpose: {}
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			e.currentTarget instanceof HTMLInputElement && r("change", n.actorId, e.currentTarget.checked);
		}
		return (t, n) => (V(), H("label", Lm, [U("input", {
			class: "dui-checkbox dui-checkbox-primary dui-checkbox-sm tw:appearance-none! tw:rounded-sm! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none! tw:checked:text-primary-content!",
			type: "checkbox",
			checked: e.checked,
			disabled: e.disabled,
			onChange: i
		}, null, 40, Rm), U("span", zm, "Include " + D(e.actorName) + " in " + D(e.purpose), 1)]));
	}
}), Vm = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipients-title"
}, Hm = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Um = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Wm = { class: "tw:flex tw:items-center tw:gap-2" }, Gm = { class: "dui-badge dui-badge-sm" }, Km = { class: "tw:flex tw:flex-wrap tw:gap-1" }, qm = ["disabled"], Jm = ["disabled"], Ym = ["disabled"], Xm = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100!"
}, Zm = { class: "dui-table dui-table-sm tw:min-w-[52rem]" }, Qm = {
	class: "tw:min-w-44",
	scope: "row"
}, $m = { class: "tw:block tw:font-semibold" }, eh = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, th = { class: "tw:text-right tw:tabular-nums" }, nh = { class: "tw:text-right tw:tabular-nums" }, rh = { class: "tw:text-right tw:tabular-nums" }, ih = { class: "tw:text-right tw:tabular-nums" }, ah = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, oh = { class: "tw:text-right tw:tabular-nums" }, sh = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, ch = /* @__PURE__ */ R({
	__name: "XpRecipientTable",
	props: {
		actors: {},
		disabled: { type: Boolean },
		plan: {}
	},
	emits: [
		"reset",
		"select-all",
		"update:selected"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return n.plan.awards.find((t) => t.actorId === e);
		}
		function a(e, t) {
			r("update:selected", e, t);
		}
		return (t, n) => (V(), H("section", Vm, [U("div", Hm, [U("div", Um, [U("div", null, [U("div", Wm, [n[3] ||= U("h2", {
			id: "recipients-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipients ", -1), U("span", Gm, D(e.plan.awards.length) + " selected", 1)]), n[4] ||= U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The XP leader sets the gap only. Decay is calculated from each recipient’s own total. ", -1)]), U("div", Km, [
			U("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[0] ||= (e) => r("select-all", !0)
			}, " All ", 8, qm),
			U("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[1] ||= (e) => r("select-all", !1)
			}, " None ", 8, Jm),
			U("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[2] ||= (e) => r("reset")
			}, " Reset ", 8, Ym)
		])]), e.actors.length ? (V(), H("div", Xm, [U("table", Zm, [n[5] ||= U("thead", { class: "tw:bg-base-300/60!" }, [U("tr", null, [
			U("th", { scope: "col" }, "Use"),
			U("th", { scope: "col" }, "Actor"),
			U("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Total XP"),
			U("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Leader gap"),
			U("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Initial XP"),
			U("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Decay"),
			U("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Final award"),
			U("th", {
				class: "tw:text-right",
				scope: "col"
			}, "New total")
		])], -1), U("tbody", null, [(V(!0), H(B, null, z(e.actors, (t) => (V(), H("tr", {
			key: t.id,
			class: E({ "tw:bg-base-200!": t.selected })
		}, [
			U("td", null, [W(Bm, {
				"actor-id": t.id,
				"actor-name": t.name,
				checked: t.selected,
				disabled: e.disabled,
				purpose: "the XP curve",
				onChange: a
			}, null, 8, [
				"actor-id",
				"actor-name",
				"checked",
				"disabled"
			])]),
			U("th", Qm, [U("span", $m, D(t.name), 1), t.category === "companion" ? (V(), H("span", eh, " Companion rate ")) : K("", !0)]),
			U("td", th, D(t.totalXp), 1),
			U("td", nh, D(i(t.id)?.gap ?? "—"), 1),
			U("td", rh, D(i(t.id) ? Math.round(i(t.id)?.catchUpValue ?? 0) : "—"), 1),
			U("td", ih, D(i(t.id) ? `${Math.round((i(t.id)?.decayMultiplier ?? 0) * 100)}%` : "—"), 1),
			U("td", ah, D(i(t.id) ? `+${i(t.id)?.award}` : "—"), 1),
			U("td", oh, D(i(t.id)?.afterXp ?? "—"), 1)
		], 2))), 128))])])])) : (V(), H("div", sh, [...n[6] ||= [U("i", {
			class: "fa-solid fa-user-slash",
			"aria-hidden": "true"
		}, null, -1), U("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]));
	}
}), lh = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:mb-3",
	role: "status"
}, uh = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[68rem]:grid-cols-[1.25fr_1fr]" }, dh = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "award-message-title"
}, fh = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, ph = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, mh = { class: "tw:m-0 tw:break-words tw:font-semibold" }, hh = /* @__PURE__ */ R({
	__name: "XpAwardWorkspace",
	props: /*@__PURE__*/ Ir({
		actors: {},
		disabled: { type: Boolean },
		plan: {},
		resolvedReason: {},
		selectionSource: {}
	}, {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {}
	}),
	emits: /*@__PURE__*/ Ir([
		"reset",
		"select-all",
		"update:selected"
	], ["update:defaultReason"]),
	setup(e, { emit: t }) {
		let n = ni(e, "defaultReason"), r = t;
		function i(e, t) {
			r("update:selected", e, t);
		}
		return (t, a) => (V(), H(B, null, [e.selectionSource === "targets" && e.plan.awards.length === 0 ? (V(), H("div", lh, [...a[3] ||= [U("i", {
			class: "fa-solid fa-bullseye",
			"aria-hidden": "true"
		}, null, -1), U("span", { class: "tw:min-w-0 tw:break-words" }, " The targeted tokens do not contain eligible WFRP4e character actors. ", -1)]])) : K("", !0), U("div", uh, [W(ch, {
			actors: e.actors,
			disabled: e.disabled,
			plan: e.plan,
			onReset: a[0] ||= (e) => r("reset"),
			onSelectAll: a[1] ||= (e) => r("select-all", e),
			"onUpdate:selected": i
		}, null, 8, [
			"actors",
			"disabled",
			"plan"
		]), U("section", dh, [U("div", fh, [
			a[5] ||= U("div", null, [U("h2", {
				id: "award-message-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Award message "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This reason is written to each recipient’s WFRP4e experience log. ")], -1),
			a[6] ||= U("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-award-reason"
			}, " Experience log reason ", -1),
			L(U("input", {
				id: "xp-award-reason",
				"onUpdate:modelValue": a[2] ||= (e) => n.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
				type: "text"
			}, null, 512), [[Oo, n.value]]),
			a[7] ||= U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
				G(" Supports Drowsy’s "),
				U("code", null, "%session%"),
				G(" reference and Foundry’s "),
				U("code", null, "%date%"),
				G(" value. ")
			], -1),
			U("div", ph, [a[4] ||= U("span", { class: "tw:text-xs tw:text-base-content/60!" }, "This award will record", -1), U("p", mh, D(e.resolvedReason || "No reason"), 1)]),
			a[8] ||= U("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [U("i", {
				class: "fa-solid fa-circle-info",
				"aria-hidden": "true"
			}), U("span", { class: "tw:min-w-0 tw:break-words" }, " Use the cog in the header to change curves and recipient defaults. Saving there refreshes this award ledger with the new calculation. ")], -1)
		])])])], 64));
	}
}), gh = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, _h = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, vh = ["title"], yh = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure XP Curve Console"
}, bh = { class: "tw:grid tw:grid-cols-2 tw:gap-px tw:border-b tw:border-base-content/20! tw:bg-base-content/20! tw:min-[38rem]:grid-cols-4" }, xh = { class: "tw:contents" }, Sh = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Ch = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, wh = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Th = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Eh = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Dh = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Oh = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, kh = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Ah = /* @__PURE__ */ R({
	__name: "XpConsoleHeader",
	props: {
		highestXp: {},
		positiveAwardCount: {},
		selectedCount: {},
		selectionLabel: {},
		selectionSource: {},
		totalAward: {}
	},
	emits: ["configure"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (V(), H(B, null, [U("header", gh, [r[3] ||= U("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [U("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [U("i", { class: "fa-solid fa-chart-line" })])], -1), U("div", _h, [U("span", {
			class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:max-w-56 tw:whitespace-normal tw:border-base-content/25! tw:py-1 tw:text-center",
			title: e.selectionSource === "targets" ? "Eligible targeted character tokens were selected when the console opened." : "No tokens were targeted, so the configured recipient default was used."
		}, [r[1] ||= U("span", {
			class: "dui-status dui-status-primary dui-status-sm tw:shrink-0",
			"aria-hidden": "true"
		}, null, -1), G(" " + D(e.selectionLabel), 1)], 8, vh), U("span", yh, [U("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure XP Curve Console",
			title: "Configure XP Curve Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [U("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]), U("div", bh, [U("dl", xh, [
			U("div", Sh, [r[4] ||= U("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Selected recipients", -1), U("dd", Ch, D(e.selectedCount), 1)]),
			U("div", wh, [r[5] ||= U("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "XP leader total", -1), U("dd", Th, D(e.highestXp), 1)]),
			U("div", Eh, [r[6] ||= U("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Recipients gaining XP", -1), U("dd", Dh, D(e.positiveAwardCount), 1)]),
			U("div", Oh, [r[7] ||= U("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Total award", -1), U("dd", kh, D(e.totalAward) + " XP ", 1)])
		])])], 64));
	}
}), jh = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Mh = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, Nh = { class: "tw:min-w-0 tw:break-words" }, Ph = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Fh = /* @__PURE__ */ R({
	__name: "XpCurveConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Mm();
		n.initialize(t.initialization, t.actions);
		let { actors: r, canApply: i, defaultReason: a, errorMessage: o, isWorking: s, plan: c, positiveAwardCount: l, resolvedReason: u, selectedActors: d, selectionSource: f } = Cs(n), p = q(() => f.value === "targets" ? "Recipients: targeted tokens" : `Recipients: ${{
			company: "company default",
			party: "party default",
			world: "world default"
		}[t.initialization.defaultSelection]}`);
		return (e, m) => (V(), H("main", jh, [
			W(Ah, {
				"highest-xp": P(c).highestXp,
				"positive-award-count": P(l),
				"selected-count": P(d).length,
				"selection-label": p.value,
				"selection-source": P(f),
				"total-award": P(c).totalAward,
				onConfigure: t.actions.openConfigurator
			}, null, 8, [
				"highest-xp",
				"positive-award-count",
				"selected-count",
				"selection-label",
				"selection-source",
				"total-award",
				"onConfigure"
			]),
			P(o) ? (V(), H("div", Mh, [m[1] ||= U("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), U("span", Nh, D(P(o)), 1)])) : K("", !0),
			U("div", Ph, [W(hh, {
				"default-reason": P(a),
				"onUpdate:defaultReason": m[0] ||= (e) => /* @__PURE__ */ M(a) ? a.value = e : null,
				actors: P(r),
				disabled: P(s),
				plan: P(c),
				"resolved-reason": P(u),
				"selection-source": P(f),
				onReset: P(n).resetSelection,
				onSelectAll: P(n).setAllActorsSelected,
				"onUpdate:selected": P(n).setActorSelected
			}, null, 8, [
				"default-reason",
				"actors",
				"disabled",
				"plan",
				"resolved-reason",
				"selection-source",
				"onReset",
				"onSelectAll",
				"onUpdate:selected"
			])]),
			W(Im, {
				disabled: !P(i),
				icon: "fa-solid fa-award",
				label: `Award ${P(c).totalAward} XP`,
				working: P(s),
				onAction: P(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])
		]));
	}
}), Ih = {
	...Am,
	launchers: { tokenControls: !0 },
	parameters: { ...Am.parameters }
}, Lh = Ss("xp-curve-configurator", () => {
	let e = /* @__PURE__ */ N([]), t = /* @__PURE__ */ N({ ...Ih.parameters }), n = /* @__PURE__ */ N(Ih.defaultReason), r = /* @__PURE__ */ N(Ih.defaultSelection), i = /* @__PURE__ */ N({ ...Ih.launchers }), a = /* @__PURE__ */ N(), o = /* @__PURE__ */ N(), s = /* @__PURE__ */ N(!1), c, l = q(() => bm(e.value, t.value)), u = q(() => Math.max(0, ...l.value.awards.map((e) => e.gap))), d = q(() => Cm(t.value, Math.max(u.value * 1.1, 1))), f = q(() => wm(t.value, Math.max(l.value.highestXp * 1.1, 1)));
	function p(s, l) {
		c = l, e.value = s.actors.map((e) => ({ ...e })), t.value = { ...s.parameters }, n.value = s.defaultReason, r.value = s.defaultSelection, i.value = { ...s.launchers }, a.value = void 0, o.value = void 0;
	}
	function m(e) {
		r.value = e, o.value = void 0;
	}
	function h() {
		t.value = { ...Ih.parameters }, n.value = Ih.defaultReason, r.value = Ih.defaultSelection, i.value = { ...Ih.launchers }, a.value = void 0, o.value = "Defaults restored. Save configuration to apply them.";
	}
	async function g() {
		if (!s.value) {
			s.value = !0, a.value = void 0, o.value = void 0;
			try {
				t.value = ym(t.value);
				let e = {
					defaultReason: n.value,
					defaultSelection: r.value,
					launchers: { ...i.value },
					parameters: { ...t.value }
				};
				await _().saveConfiguration(e), o.value = "Configuration saved. Launcher changes apply after a reload.";
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | XP configuration save failed.", e), a.value = e instanceof Error ? e.message : "The XP Curve Console configuration could not be saved.";
			} finally {
				s.value = !1;
			}
		}
	}
	function _() {
		if (!c) throw Error("The XP Curve Configurator has not been initialized.");
		return c;
	}
	return {
		actors: e,
		curveSamples: d,
		decaySamples: f,
		defaultReason: n,
		defaultSelection: r,
		errorMessage: a,
		initialize: p,
		isSaving: s,
		launchers: i,
		parameters: t,
		plan: l,
		resetToDefaults: h,
		saveConfiguration: g,
		setDefaultSelection: m,
		statusMessage: o
	};
});
function Rh(e, t, n, r) {
	return {
		maximumGap: Math.max(1, e * 1.4, ...n.map((e) => e.gap), ...r.map((e) => e.gap * 1.05)),
		maximumValue: Math.max(1, t * 1.25, ...n.map((e) => e.award * 1.05), ...r.map((e) => e.catchUpValue * 1.05))
	};
}
function zh(e, t, n) {
	return { maximumRecipientXp: Math.max(1e3, e * 4, ...t.map((e) => e.recipientXp), ...n.map((e) => e.beforeXp * 1.05)) };
}
function Bh(e) {
	let t = (t) => qh(t, e.bounds.maximumGap), n = (t) => Jh(t, e.bounds.maximumValue);
	return {
		points: e.samples.map((e) => `${t(e.gap).toFixed(1)},${n(e.award).toFixed(1)}`).join(" "),
		recipientLegend: e.awards.map((e, t) => ({
			actorId: e.actorId,
			index: t + 1,
			text: `${e.actorName} — ${e.gap} XP gap — initial ${Math.round(e.catchUpValue)} XP`
		})),
		recipientPoints: e.awards.map((e, r) => ({
			actorId: e.actorId,
			index: r + 1,
			label: `${e.actorName}: ${Math.round(e.gap)} XP gap, ${Math.round(e.catchUpValue)} initial XP`,
			x: t(e.gap),
			y: n(e.catchUpValue)
		})),
		referencePoint: {
			x: t(e.gapForMaximumAward),
			y: n(e.maximumAward)
		},
		shapePoint: {
			x: t(e.gapForMaximumAward / 2),
			y: n(e.maximumAward * .5 ** e.curveExponent)
		}
	};
}
function Vh(e) {
	let t = (t) => qh(t, e.bounds.maximumRecipientXp), n = Yh;
	return {
		pivotPoint: {
			x: t(e.scalePivot),
			y: n(1)
		},
		points: e.samples.map((e) => `${t(e.recipientXp).toFixed(1)},${n(e.multiplier).toFixed(1)}`).join(" "),
		recipientLegend: e.awards.map((e, t) => ({
			actorId: e.actorId,
			index: t + 1,
			text: `${e.actorName} — ${e.beforeXp} XP — ${Math.round(e.decayMultiplier * 100)}% multiplier`
		})),
		recipientPoints: e.awards.map((e, r) => ({
			actorId: e.actorId,
			index: r + 1,
			label: `${e.actorName}: ${e.beforeXp} total XP, ${Math.round(e.decayMultiplier * 100)}% catch-up strength`,
			x: t(e.beforeXp),
			y: n(e.decayMultiplier)
		})),
		strengthPoint: {
			x: t(e.scalePivot * 2),
			y: n(.5 ** e.scaleExponent)
		}
	};
}
function Hh(e, t, n, r) {
	if (e === "reference") {
		let r = Xh((t.x - 68) / 472, .001, 1), i = 1 - Xh((t.y - 24) / 192, 0, 1);
		return {
			gapForMaximumAward: Math.max(1, Math.round(r * n.maximumGap)),
			kind: e,
			maximumAward: Math.max(0, Math.round(i * n.maximumValue))
		};
	}
	let i = Xh((216 - t.y) / 192 * (n.maximumValue / Math.max(1, r)), .03, .99);
	return {
		curveExponent: Zh(Xh(Math.log(i) / Math.log(.5), .1, 5), .05),
		kind: e
	};
}
function Uh(e, t, n) {
	if (e === "pivot") {
		let r = Xh((t.x - 68) / 472, .001, 1);
		return {
			kind: e,
			scalePivot: Math.max(1, Math.round(r * n.maximumRecipientXp))
		};
	}
	let r = Xh(1 - (t.y - 24) / 192, .25, .99);
	return {
		kind: e,
		scaleExponent: Zh(Xh(Math.log(r) / Math.log(.5), 0, 2), .05)
	};
}
function Wh(e, t, n) {
	let r = Math.max(10, Math.round(t / 20)), i = Math.max(1, Math.round(Math.max(1, n) / 20));
	if (e === "ArrowLeft" || e === "ArrowRight") return { gapForMaximumAward: Math.max(1, t + (e === "ArrowLeft" ? -r : r)) };
	if (e === "ArrowUp" || e === "ArrowDown") return { maximumAward: Math.max(0, n + (e === "ArrowUp" ? i : -i)) };
}
function Gh(e, t, n, r) {
	if ([
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp"
	].includes(e)) return Zh(Xh(t + (e === "ArrowUp" || e === "ArrowRight" ? -1 : 1) * .05, n, r), .05);
}
function Kh(e, t) {
	if (e !== "ArrowLeft" && e !== "ArrowRight") return;
	let n = Math.max(100, Math.round(t / 20));
	return Math.max(1, t + (e === "ArrowLeft" ? -n : n));
}
function qh(e, t) {
	return 68 + Math.max(0, e) / Math.max(1, t) * 472;
}
function Jh(e, t) {
	return 24 + (1 - Math.max(0, e) / Math.max(1, t)) * 192;
}
function Yh(e) {
	return 24 + (1 - Xh(e, 0, 1)) * 192;
}
function Xh(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Zh(e, t) {
	let n = t.toString().split(".")[1]?.length ?? 0;
	return Number((Math.round(e / t) * t).toFixed(n));
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graphMath.ts
function Qh(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: (t.clientX - n.left) / n.width * 560,
		y: (t.clientY - n.top) / n.height * 270
	};
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/GraphCanvas.vue?vue&type=script&setup=true&lang.ts
var $h = ["viewBox", "aria-labelledby"], eg = ["id"], tg = ["id"], ng = [
	"x1",
	"x2",
	"y1",
	"y2"
], rg = [
	"x1",
	"x2",
	"y1",
	"y2"
], ig = [
	"x1",
	"x2",
	"y1",
	"y2"
], ag = ["points"], og = ["cx", "cy"], sg = ["x", "y"], cg = ["x", "y"], lg = ["x", "y"], ug = ["x", "y"], dg = ["x", "y"], fg = ["x", "y"], pg = ["transform", "y"], mg = /* @__PURE__ */ R({
	__name: "GraphCanvas",
	props: {
		description: {},
		descriptionId: {},
		markers: {},
		maximumXLabel: {},
		minimumYLabel: {},
		points: {},
		title: {},
		titleId: {},
		verticalGuideX: {},
		xAxisLabel: {},
		yAxisLabel: {},
		maximumYLabel: {}
	},
	emits: [
		"pointercancel",
		"pointermove",
		"pointerup"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (V(), H("svg", {
			class: "tw:block tw:h-auto tw:w-full tw:max-w-full tw:touch-none tw:[user-select:none]",
			viewBox: `0 0 ${P(560)} ${P(270)}`,
			role: "img",
			"aria-labelledby": `${e.titleId} ${e.descriptionId}`,
			onPointercancel: r[0] ||= (e) => n("pointercancel", e),
			onPointermove: r[1] ||= (e) => n("pointermove", e),
			onPointerup: r[2] ||= (e) => n("pointerup", e)
		}, [
			U("title", { id: e.titleId }, D(e.title), 9, eg),
			U("desc", { id: e.descriptionId }, D(e.description), 9, tg),
			U("line", {
				class: "tw:text-base-content/25!",
				x1: P(68),
				x2: P(68),
				y1: P(24),
				y2: P(24) + P(192),
				stroke: "currentColor"
			}, null, 8, ng),
			U("line", {
				class: "tw:text-base-content/25!",
				x1: P(68),
				x2: P(68) + P(472),
				y1: P(24) + P(192),
				y2: P(24) + P(192),
				stroke: "currentColor"
			}, null, 8, rg),
			U("line", {
				class: "tw:text-base-content/25!",
				x1: e.verticalGuideX,
				x2: e.verticalGuideX,
				y1: P(24),
				y2: P(24) + P(192),
				stroke: "currentColor",
				"stroke-dasharray": "4 5"
			}, null, 8, ig),
			kr(t.$slots, "guides"),
			U("polyline", {
				class: "tw:text-secondary!",
				fill: "none",
				points: e.points,
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "3"
			}, null, 8, ag),
			(V(!0), H(B, null, z(e.markers, (e) => (V(), H("g", {
				key: e.actorId,
				class: "tw:text-base-content!",
				"aria-hidden": "true"
			}, [U("circle", {
				cx: e.x,
				cy: e.y,
				fill: "currentColor",
				r: "9"
			}, [U("title", null, D(e.label), 1)], 8, og), U("text", {
				class: "tw:text-base-100!",
				x: e.x,
				y: e.y + 3,
				fill: "currentColor",
				"font-size": "9",
				"font-weight": "700",
				"text-anchor": "middle"
			}, D(e.index), 9, sg)]))), 128)),
			kr(t.$slots, "handles"),
			U("text", {
				class: "tw:text-base-content/65!",
				x: P(68),
				y: P(24) + P(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "middle"
			}, " 0 ", 8, cg),
			U("text", {
				class: "tw:text-base-content/65!",
				x: P(68) + P(472),
				y: P(24) + P(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, D(e.maximumXLabel), 9, lg),
			U("text", {
				class: "tw:text-base-content/75!",
				x: P(68) + P(472) / 2,
				y: P(270) - 8,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, D(e.xAxisLabel), 9, ug),
			e.maximumYLabel ? (V(), H("text", {
				key: 0,
				class: "tw:text-base-content/65!",
				x: P(68) - 10,
				y: P(24) + 4,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, D(e.maximumYLabel), 9, dg)) : K("", !0),
			U("text", {
				class: "tw:text-base-content/65!",
				x: P(68) - 10,
				y: P(24) + P(192) + 3,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, D(e.minimumYLabel), 9, fg),
			U("text", {
				class: "tw:text-base-content/75!",
				transform: `rotate(-90 16 ${P(24) + P(192) / 2})`,
				x: "16",
				y: P(24) + P(192) / 2,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, D(e.yAxisLabel), 9, pg),
			kr(t.$slots, "labels")
		], 40, $h));
	}
}), hg = [
	"role",
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], gg = ["x", "y"], _g = ["x", "y"], vg = /* @__PURE__ */ R({
	__name: "DiamondHandle",
	props: {
		ariaLabel: {},
		x: {},
		y: {},
		ariaValueMax: {},
		ariaValueMin: {},
		ariaValueNow: {},
		ariaValueText: {},
		role: {}
	},
	emits: ["keydown", "pointerdown"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (V(), H("g", {
			class: "tw:cursor-grab tw:text-secondary!",
			role: e.role ?? "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= Lo((e) => n("pointerdown", e), ["stop"])
		}, [U("rect", {
			x: e.x - 8,
			y: e.y - 8,
			fill: "currentColor",
			height: "16",
			rx: "2",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18",
			width: "16"
		}, null, 8, gg), U("rect", {
			class: "tw:text-base-100!",
			x: e.x - 3,
			y: e.y - 3,
			fill: "currentColor",
			height: "6",
			rx: "1",
			width: "6"
		}, null, 8, _g)], 40, hg));
	}
}), yg = {
	key: 0,
	class: "tw:mt-2"
}, bg = { class: "tw:mt-1 tw:grid tw:[list-style:none] tw:grid-cols-1 tw:gap-x-3 tw:gap-y-1 tw:p-0 tw:text-xs tw:text-base-content/70! tw:min-[32rem]:grid-cols-2" }, xg = { class: "tw:font-bold tw:text-base-content!" }, Sg = { class: "tw:break-words" }, Cg = /* @__PURE__ */ R({
	__name: "RecipientLegend",
	props: { items: {} },
	setup(e) {
		return (t, n) => e.items.length ? (V(), H("figcaption", yg, [n[0] ||= U("span", { class: "tw:text-xs tw:font-semibold" }, "Selected recipients", -1), U("ol", bg, [(V(!0), H(B, null, z(e.items, (e) => (V(), H("li", {
			key: e.actorId,
			class: "tw:min-w-0"
		}, [U("span", xg, D(e.index) + ".", 1), U("span", Sg, D(e.text), 1)]))), 128))])])) : K("", !0);
	}
}), wg = [
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], Tg = ["cx", "cy"], Eg = ["cx", "cy"], Dg = /* @__PURE__ */ R({
	__name: "RoundHandle",
	props: {
		ariaLabel: {},
		ariaValueMax: {},
		ariaValueMin: {},
		ariaValueNow: {},
		ariaValueText: {},
		x: {},
		y: {}
	},
	emits: ["keydown", "pointerdown"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (V(), H("g", {
			class: "tw:cursor-grab tw:text-secondary!",
			role: "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= Lo((e) => n("pointerdown", e), ["stop"])
		}, [U("circle", {
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "8",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18"
		}, null, 8, Tg), U("circle", {
			class: "tw:text-base-100!",
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "3"
		}, null, 8, Eg)], 40, wg));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/drag.ts
function Og(e, t) {
	let n = /* @__PURE__ */ tn();
	function r(r, i) {
		let a = i.currentTarget.ownerSVGElement;
		if (!a) throw Error("XP graph drag handles must be rendered inside an SVG element.");
		let o = {
			kind: r,
			pointerId: i.pointerId,
			snapshot: e(),
			svg: a
		};
		n.value = o, a.setPointerCapture(i.pointerId), t(o, i);
	}
	function i(e) {
		let r = n.value;
		r?.pointerId === e.pointerId && t(r, e);
	}
	function a(e) {
		let t = n.value;
		t?.pointerId === e.pointerId && (t.svg.hasPointerCapture(e.pointerId) && t.svg.releasePointerCapture(e.pointerId), n.value = void 0);
	}
	return {
		activeDrag: n,
		beginDrag: r,
		endDrag: a,
		updateDrag: i
	};
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/useCatchUpGraph.ts
function kg(e, t) {
	let n = q(() => Rh(e.gapForMaximumAward, e.maximumAward, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = Og(() => ({ ...n.value }), _), s = q(() => r.value?.snapshot ?? n.value), c = q(() => Bh({
		awards: e.awards,
		bounds: s.value,
		curveExponent: e.curveExponent,
		gapForMaximumAward: e.gapForMaximumAward,
		maximumAward: e.maximumAward,
		samples: e.samples
	})), l = q(() => s.value.maximumGap), u = q(() => c.value.points), d = q(() => c.value.recipientLegend), f = q(() => c.value.recipientPoints), p = q(() => c.value.referencePoint), m = q(() => c.value.shapePoint);
	function h(e) {
		return qh(e, s.value.maximumGap);
	}
	function g(e) {
		return Jh(e, s.value.maximumValue);
	}
	function _(n, r) {
		let i = Hh(n.kind, Qh(n.svg, r), n.snapshot, e.maximumAward);
		if (i.kind === "reference") {
			t("update:gapForMaximumAward", i.gapForMaximumAward), t("update:maximumAward", i.maximumAward);
			return;
		}
		t("update:curveExponent", i.curveExponent);
	}
	function v(n) {
		let r = Wh(n.key, e.gapForMaximumAward, e.maximumAward);
		r && (n.preventDefault(), r.gapForMaximumAward !== void 0 && t("update:gapForMaximumAward", r.gapForMaximumAward), r.maximumAward !== void 0 && t("update:maximumAward", r.maximumAward));
	}
	function y(n) {
		let r = Gh(n.key, e.curveExponent, .1, 5);
		r !== void 0 && (n.preventDefault(), t("update:curveExponent", r));
	}
	return {
		beginDrag: i,
		endDrag: a,
		maximumGap: l,
		points: u,
		recipientLegend: d,
		recipientPoints: f,
		referencePoint: p,
		shapePoint: m,
		toGraphX: h,
		toGraphY: g,
		updateDrag: o,
		updateReferenceWithKeyboard: v,
		updateShapeWithKeyboard: y
	};
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/XpCurveGraph.vue?vue&type=script&setup=true&lang.ts
var Ag = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-catch-up-graph-heading"
}, jg = [
	"x1",
	"x2",
	"y1",
	"y2"
], Mg = ["x", "y"], Ng = /* @__PURE__ */ R({
	__name: "XpCurveGraph",
	props: {
		awards: {},
		curveExponent: {},
		gapForMaximumAward: {},
		maximumAward: {},
		samples: {}
	},
	emits: [
		"update:curveExponent",
		"update:gapForMaximumAward",
		"update:maximumAward"
	],
	setup(e, { emit: t }) {
		let { beginDrag: n, endDrag: r, maximumGap: i, points: a, recipientLegend: o, recipientPoints: s, referencePoint: c, shapePoint: l, toGraphX: u, toGraphY: d, updateDrag: f, updateReferenceWithKeyboard: p, updateShapeWithKeyboard: m } = kg(e, t);
		return (t, h) => (V(), H("figure", Ag, [
			h[2] ||= U("div", { class: "tw:mb-2" }, [U("h4", {
				id: "xp-catch-up-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Initial catch-up value by XP gap "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to set the reference gap and hard limit. Drag the round point to shape the curve. ")], -1),
			W(mg, {
				description: "The horizontal axis is the recipient's gap below the selected XP leader. The vertical axis is the initial catch-up value before recipient decay, companion rate, and the final hard limit. Numbered markers identify selected recipients.",
				"description-id": "xp-catch-up-graph-description",
				markers: P(s),
				"maximum-x-label": `${Math.round(P(i))} XP`,
				"minimum-y-label": "0",
				points: P(a),
				title: "Editable catch-up XP curve",
				"title-id": "xp-catch-up-graph-title",
				"vertical-guide-x": P(u)(e.gapForMaximumAward),
				"x-axis-label": "Gap below selected XP leader",
				"y-axis-label": "Initial catch-up XP",
				onPointercancel: P(r),
				onPointermove: P(f),
				onPointerup: P(r)
			}, {
				guides: Un(() => [U("line", {
					class: "tw:text-warning",
					x1: P(68),
					x2: P(68) + P(472),
					y1: P(d)(e.maximumAward),
					y2: P(d)(e.maximumAward),
					stroke: "currentColor",
					"stroke-dasharray": "6 5"
				}, null, 8, jg)]),
				handles: Un(() => [W(Dg, {
					"aria-label": "Catch-up curve shape",
					"aria-value-max": 5,
					"aria-value-min": .1,
					"aria-value-now": e.curveExponent,
					"aria-value-text": `Exponent ${e.curveExponent}`,
					x: P(l).x,
					y: P(l).y,
					onKeydown: P(m),
					onPointerdown: h[0] ||= (e) => P(n)("shape", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), W(vg, {
					"aria-label": `Reference point: ${e.gapForMaximumAward} XP gap and ${e.maximumAward} XP hard limit. Use left and right arrows for the gap, up and down arrows for the hard limit.`,
					role: "button",
					x: P(c).x,
					y: P(c).y,
					onKeydown: P(p),
					onPointerdown: h[1] ||= (e) => P(n)("reference", e)
				}, null, 8, [
					"aria-label",
					"x",
					"y",
					"onKeydown"
				])]),
				labels: Un(() => [U("text", {
					class: "tw:text-warning",
					x: P(68) + 7,
					y: Math.max(P(24) + 12, P(d)(e.maximumAward) - 7),
					fill: "currentColor",
					"font-size": "11",
					"font-weight": "600"
				}, " Hard limit " + D(e.maximumAward) + " XP ", 9, Mg)]),
				_: 1
			}, 8, [
				"markers",
				"maximum-x-label",
				"points",
				"vertical-guide-x",
				"onPointercancel",
				"onPointermove",
				"onPointerup"
			]),
			W(Cg, { items: P(o) }, null, 8, ["items"])
		]));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/useDecayGraph.ts
function Pg(e, t) {
	let n = q(() => zh(e.scalePivot, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = Og(() => ({ ...n.value }), g), s = q(() => r.value?.snapshot ?? n.value), c = q(() => Vh({
		awards: e.awards,
		bounds: s.value,
		samples: e.samples,
		scaleExponent: e.scaleExponent,
		scalePivot: e.scalePivot
	})), l = q(() => s.value.maximumRecipientXp), u = q(() => c.value.points), d = q(() => c.value.pivotPoint), f = q(() => c.value.recipientLegend), p = q(() => c.value.recipientPoints), m = q(() => c.value.strengthPoint);
	function h(e) {
		return qh(e, s.value.maximumRecipientXp);
	}
	function g(e, n) {
		let r = Uh(e.kind, Qh(e.svg, n), e.snapshot);
		if (r.kind === "pivot") {
			t("update:scalePivot", r.scalePivot);
			return;
		}
		t("update:scaleExponent", r.scaleExponent);
	}
	function _(n) {
		let r = Kh(n.key, e.scalePivot);
		r !== void 0 && (n.preventDefault(), t("update:scalePivot", r));
	}
	function v(n) {
		let r = Gh(n.key, e.scaleExponent, 0, 2);
		r !== void 0 && (n.preventDefault(), t("update:scaleExponent", r));
	}
	return {
		beginDrag: i,
		endDrag: a,
		maximumRecipientXp: l,
		pivotPoint: d,
		points: u,
		recipientLegend: f,
		recipientPoints: p,
		strengthPoint: m,
		toGraphX: h,
		updateDrag: o,
		updatePivotWithKeyboard: _,
		updateStrengthWithKeyboard: v
	};
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/XpDecayGraph.vue?vue&type=script&setup=true&lang.ts
var Fg = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-decay-graph-heading"
}, Ig = /* @__PURE__ */ R({
	__name: "XpDecayGraph",
	props: {
		awards: {},
		samples: {},
		scaleExponent: {},
		scalePivot: {}
	},
	emits: ["update:scaleExponent", "update:scalePivot"],
	setup(e, { emit: t }) {
		let { beginDrag: n, endDrag: r, maximumRecipientXp: i, pivotPoint: a, points: o, recipientLegend: s, recipientPoints: c, strengthPoint: l, toGraphX: u, updateDrag: d, updatePivotWithKeyboard: f, updateStrengthWithKeyboard: p } = Pg(e, t);
		return (t, m) => (V(), H("figure", Fg, [
			m[2] ||= U("div", { class: "tw:mb-2" }, [U("h4", {
				id: "xp-decay-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Catch-up strength by recipient total XP "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to choose where decay begins. Drag the round point to make decay gentler or stronger. ")], -1),
			W(mg, {
				description: "The horizontal axis is each recipient's own total XP. The vertical axis is the multiplier applied to that recipient's initial catch-up value. Numbered markers identify selected recipients.",
				"description-id": "xp-decay-graph-description",
				markers: P(c),
				"maximum-x-label": `${Math.round(P(i))} XP`,
				"maximum-y-label": "100%",
				"minimum-y-label": "0%",
				points: P(o),
				title: "Editable recipient XP decay curve",
				"title-id": "xp-decay-graph-title",
				"vertical-guide-x": P(u)(e.scalePivot),
				"x-axis-label": "Recipient total XP",
				"y-axis-label": "Decay multiplier",
				onPointercancel: P(r),
				onPointermove: P(d),
				onPointerup: P(r)
			}, {
				handles: Un(() => [W(Dg, {
					"aria-label": "Recipient decay strength",
					"aria-value-max": 2,
					"aria-value-min": 0,
					"aria-value-now": e.scaleExponent,
					"aria-value-text": `Decay exponent ${e.scaleExponent}`,
					x: P(l).x,
					y: P(l).y,
					onKeydown: P(p),
					onPointerdown: m[0] ||= (e) => P(n)("strength", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), W(vg, {
					"aria-label": "Recipient total XP where decay begins",
					"aria-value-max": Math.round(P(i)),
					"aria-value-min": 1,
					"aria-value-now": e.scalePivot,
					"aria-value-text": `${e.scalePivot} total XP`,
					x: P(a).x,
					y: P(a).y,
					onKeydown: P(f),
					onPointerdown: m[1] ||= (e) => P(n)("pivot", e)
				}, null, 8, [
					"aria-value-max",
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				])]),
				_: 1
			}, 8, [
				"markers",
				"maximum-x-label",
				"points",
				"vertical-guide-x",
				"onPointercancel",
				"onPointermove",
				"onPointerup"
			]),
			W(Cg, { items: P(s) }, null, 8, ["items"])
		]));
	}
}), Lg = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "curve-settings-title"
}, Rg = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, zg = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[66rem]:grid-cols-2" }, Bg = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, Vg = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, Hg = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, Ug = { class: "dui-fieldset tw:min-w-0" }, Wg = { class: "dui-fieldset tw:min-w-0" }, Gg = { class: "dui-fieldset tw:min-w-0" }, Kg = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, qg = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, Jg = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, Yg = { class: "dui-fieldset tw:min-w-0" }, Xg = { class: "dui-fieldset tw:min-w-0" }, Zg = { class: "dui-fieldset tw:min-w-0" }, Qg = /* @__PURE__ */ R({
	__name: "XpCurveConfiguration",
	props: /*@__PURE__*/ Ir({
		awards: {},
		decaySamples: {},
		samples: {}
	}, {
		companionMultiplier: { required: !0 },
		companionMultiplierModifiers: {},
		curveExponent: { required: !0 },
		curveExponentModifiers: {},
		gapForMaximumAward: { required: !0 },
		gapForMaximumAwardModifiers: {},
		maximumAward: { required: !0 },
		maximumAwardModifiers: {},
		scaleExponent: { required: !0 },
		scaleExponentModifiers: {},
		scalePivot: { required: !0 },
		scalePivotModifiers: {}
	}),
	emits: [
		"update:companionMultiplier",
		"update:curveExponent",
		"update:gapForMaximumAward",
		"update:maximumAward",
		"update:scaleExponent",
		"update:scalePivot"
	],
	setup(e) {
		let t = ni(e, "companionMultiplier"), n = ni(e, "curveExponent"), r = ni(e, "gapForMaximumAward"), i = ni(e, "maximumAward"), a = ni(e, "scaleExponent"), o = ni(e, "scalePivot");
		return (s, c) => (V(), H("section", Lg, [U("div", Rg, [
			c[31] ||= U("div", null, [U("h2", {
				id: "curve-settings-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " How awards are calculated "), U("p", { class: "tw:m-0 tw:max-w-3xl tw:text-xs tw:text-base-content/65!" }, " The graphs and number fields are two controls for the same settings. Drag either curve and its fields update immediately. ")], -1),
			U("div", zg, [U("article", Bg, [U("div", Vg, [
				c[20] ||= U("div", null, [U("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 1. Catch-up curve "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This curve converts the XP gap below the selected leader into an initial XP value. ")], -1),
				U("div", Hg, [
					U("fieldset", Ug, [
						c[11] ||= U("legend", { class: "dui-fieldset-legend" }, "Hard limit", -1),
						c[12] ||= U("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-maximum-award"
						}, " Maximum final award ", -1),
						L(U("input", {
							id: "xp-maximum-award",
							"onUpdate:modelValue": c[0] ||= (e) => i.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "0",
							step: "1",
							type: "number"
						}, null, 512), [[
							Oo,
							i.value,
							void 0,
							{ number: !0 }
						]]),
						c[13] ||= U("p", { class: "dui-label tw:whitespace-normal" }, " Applied last; no recipient can receive more. ", -1)
					]),
					U("fieldset", Wg, [
						c[14] ||= U("legend", { class: "dui-fieldset-legend" }, "Reference gap", -1),
						c[15] ||= U("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-gap-for-cap"
						}, " Gap equal to the hard limit ", -1),
						L(U("input", {
							id: "xp-gap-for-cap",
							"onUpdate:modelValue": c[1] ||= (e) => r.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "1",
							type: "number"
						}, null, 512), [[
							Oo,
							r.value,
							void 0,
							{ number: !0 }
						]]),
						c[16] ||= U("p", { class: "dui-label tw:whitespace-normal" }, " At this gap, initial catch-up equals the limit before decay. ", -1)
					]),
					U("fieldset", Gg, [
						c[17] ||= U("legend", { class: "dui-fieldset-legend" }, "Curve shape", -1),
						c[18] ||= U("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-curve-exponent"
						}, " Catch-up exponent ", -1),
						L(U("input", {
							id: "xp-curve-exponent",
							"onUpdate:modelValue": c[2] ||= (e) => n.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "5",
							min: "0.1",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							Oo,
							n.value,
							void 0,
							{ number: !0 }
						]]),
						c[19] ||= U("p", { class: "dui-label tw:whitespace-normal" }, " Below 1 helps small gaps sooner; above 1 favors large gaps. ", -1)
					])
				]),
				W(Ng, {
					"curve-exponent": n.value,
					"onUpdate:curveExponent": c[3] ||= (e) => n.value = e,
					"gap-for-maximum-award": r.value,
					"onUpdate:gapForMaximumAward": c[4] ||= (e) => r.value = e,
					"maximum-award": i.value,
					"onUpdate:maximumAward": c[5] ||= (e) => i.value = e,
					awards: e.awards,
					samples: e.samples
				}, null, 8, [
					"curve-exponent",
					"gap-for-maximum-award",
					"maximum-award",
					"awards",
					"samples"
				])
			])]), U("article", Kg, [U("div", qg, [
				c[30] ||= U("div", null, [U("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 2. Recipient decay curve "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " High-XP builds depend less on raw XP differences. This multiplier is evaluated separately for every recipient. ")], -1),
				U("div", Jg, [
					U("fieldset", Yg, [
						c[21] ||= U("legend", { class: "dui-fieldset-legend" }, "Decay start", -1),
						c[22] ||= U("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-pivot"
						}, " Full-strength recipient XP ", -1),
						L(U("input", {
							id: "xp-scale-pivot",
							"onUpdate:modelValue": c[6] ||= (e) => o.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "100",
							type: "number"
						}, null, 512), [[
							Oo,
							o.value,
							void 0,
							{ number: !0 }
						]]),
						c[23] ||= U("p", { class: "dui-label tw:whitespace-normal" }, " Recipients at or below this total keep 100% strength. ", -1)
					]),
					U("fieldset", Xg, [
						c[24] ||= U("legend", { class: "dui-fieldset-legend" }, "Decay strength", -1),
						c[25] ||= U("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-exponent"
						}, " Recipient decay exponent ", -1),
						L(U("input", {
							id: "xp-scale-exponent",
							"onUpdate:modelValue": c[7] ||= (e) => a.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "2",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							Oo,
							a.value,
							void 0,
							{ number: !0 }
						]]),
						c[26] ||= U("p", { class: "dui-label tw:whitespace-normal" }, " Zero disables decay; higher values weaken catch-up faster. ", -1)
					]),
					U("fieldset", Zg, [
						c[27] ||= U("legend", { class: "dui-fieldset-legend" }, "Companion rate", -1),
						c[28] ||= U("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-companion-rate"
						}, " Companion multiplier ", -1),
						L(U("input", {
							id: "xp-companion-rate",
							"onUpdate:modelValue": c[8] ||= (e) => t.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "1",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							Oo,
							t.value,
							void 0,
							{ number: !0 }
						]]),
						c[29] ||= U("p", { class: "dui-label tw:whitespace-normal" }, " 0.5 gives player-owned companions half the calculated XP. ", -1)
					])
				]),
				W(Ig, {
					"scale-exponent": a.value,
					"onUpdate:scaleExponent": c[9] ||= (e) => a.value = e,
					"scale-pivot": o.value,
					"onUpdate:scalePivot": c[10] ||= (e) => o.value = e,
					awards: e.awards,
					samples: e.decaySamples
				}, null, 8, [
					"scale-exponent",
					"scale-pivot",
					"awards",
					"samples"
				])
			])])]),
			c[32] ||= U("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [U("i", {
				class: "fa-solid fa-calculator",
				"aria-hidden": "true"
			}), U("span", { class: "tw:min-w-0 tw:break-words" }, [
				G(" Initial catch-up = hard limit × (leader gap ÷ reference gap)"),
				U("sup", null, "shape"),
				G(". Final XP = min(hard limit, initial catch-up × recipient decay × companion rate). ")
			])], -1)
		])]));
	}
}), $g = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipient-defaults-title"
}, e_ = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, t_ = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-4 tw:min-[42rem]:grid-cols-2" }, n_ = { class: "dui-fieldset tw:min-w-0" }, r_ = { class: "dui-fieldset tw:min-w-0" }, i_ = /* @__PURE__ */ R({
	__name: "XpRecipientDefaults",
	props: {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {},
		defaultSelection: { required: !0 },
		defaultSelectionModifiers: {}
	},
	emits: ["update:defaultReason", "update:defaultSelection"],
	setup(e) {
		let t = ni(e, "defaultReason"), n = ni(e, "defaultSelection");
		return (e, r) => (V(), H("section", $g, [U("div", e_, [r[9] ||= U("div", null, [U("h2", {
			id: "recipient-defaults-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipient and journal defaults "), U("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These values seed a newly opened console when no eligible tokens are targeted. ")], -1), U("div", t_, [U("fieldset", n_, [
			r[3] ||= U("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Default recipients", -1),
			r[4] ||= U("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-default-selection"
			}, " When no tokens are targeted ", -1),
			L(U("select", {
				id: "xp-default-selection",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				class: "dui-select dui-select-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!"
			}, [...r[2] ||= [
				U("option", { value: "party" }, "Party (assigned player characters)", -1),
				U("option", { value: "company" }, "Company (party plus companions)", -1),
				U("option", { value: "world" }, "World (every character actor)", -1)
			]], 512), [[jo, n.value]]),
			r[5] ||= U("p", { class: "dui-label tw:whitespace-normal" }, " Explicit targets replace this Drowsy’s WFRP4e Toolkit default. ", -1)
		]), U("fieldset", r_, [
			r[6] ||= U("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Experience journal", -1),
			r[7] ||= U("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-config-default-reason"
			}, " Default award reason ", -1),
			L(U("input", {
				id: "xp-config-default-reason",
				"onUpdate:modelValue": r[1] ||= (e) => t.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
				type: "text"
			}, null, 512), [[Oo, t.value]]),
			r[8] ||= U("p", { class: "dui-label tw:whitespace-normal" }, [
				G(" Supports the "),
				U("code", null, "%session%"),
				G(" and "),
				U("code", null, "%date%"),
				G(" tokens. The award console can still edit the reason for one batch. ")
			], -1)
		])])])]));
	}
}), a_ = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, o_ = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, s_ = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, c_ = { class: "tw:min-w-0 tw:break-words" }, l_ = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, u_ = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[54rem]:grid-cols-[minmax(15rem,0.72fr)_minmax(0,2fr)]" }, d_ = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "xp-launcher-settings"
}, f_ = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, p_ = { class: "dui-fieldset tw:gap-2" }, m_ = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, h_ = { class: "tw:mt-3 tw:min-w-0" }, g_ = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[34rem]:flex-row tw:min-[34rem]:items-center tw:min-[34rem]:justify-between" }, __ = { class: "tw:flex tw:min-w-0 tw:flex-col tw:gap-2 tw:min-[30rem]:flex-row" }, v_ = ["disabled"], y_ = ["disabled"], b_ = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, x_ = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, S_ = /* @__PURE__ */ R({
	__name: "XpCurveConfiguratorApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Lh();
		n.initialize(t.initialization, t.actions);
		let { curveSamples: r, decaySamples: i, defaultReason: a, defaultSelection: o, errorMessage: s, isSaving: c, launchers: l, parameters: u, plan: d, statusMessage: f } = Cs(n);
		return (e, t) => (V(), H("main", a_, [
			W(wc, {
				description: "Set launchers, recipient defaults, and the catch-up and decay curves used by new award consoles.",
				icon: "fa-solid fa-sliders",
				title: "XP Curve Configurator"
			}),
			U("div", o_, [
				P(s) ? (V(), H("div", s_, [t[10] ||= U("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), U("span", c_, D(P(s)), 1)])) : K("", !0),
				P(f) ? (V(), H("div", l_, [t[11] ||= U("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), U("span", null, D(P(f)), 1)])) : K("", !0),
				U("div", u_, [U("section", d_, [U("div", f_, [
					t[14] ||= U("div", null, [U("h2", {
						id: "xp-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Client preferences for this browser and user. ")], -1),
					U("fieldset", p_, [t[13] ||= U("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1), U("label", m_, [L(U("input", {
						"onUpdate:modelValue": t[0] ||= (e) => P(l).tokenControls = e,
						class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
						type: "checkbox"
					}, null, 512), [[ko, P(l).tokenControls]]), t[12] ||= U("span", { class: "tw:min-w-0" }, [U("strong", { class: "tw:block" }, "Token Controls"), U("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the chart launcher in Token Controls. ")], -1)])]),
					t[15] ||= U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Launcher changes apply after a reload. Macros and the module API stay available. ", -1)
				])]), W(i_, {
					"default-reason": P(a),
					"onUpdate:defaultReason": t[1] ||= (e) => /* @__PURE__ */ M(a) ? a.value = e : null,
					"default-selection": P(o),
					"onUpdate:defaultSelection": P(n).setDefaultSelection
				}, null, 8, [
					"default-reason",
					"default-selection",
					"onUpdate:defaultSelection"
				])]),
				U("div", h_, [W(Qg, {
					"companion-multiplier": P(u).companionMultiplier,
					"onUpdate:companionMultiplier": t[2] ||= (e) => P(u).companionMultiplier = e,
					"curve-exponent": P(u).curveExponent,
					"onUpdate:curveExponent": t[3] ||= (e) => P(u).curveExponent = e,
					"gap-for-maximum-award": P(u).gapForMaximumAward,
					"onUpdate:gapForMaximumAward": t[4] ||= (e) => P(u).gapForMaximumAward = e,
					"maximum-award": P(u).maximumAward,
					"onUpdate:maximumAward": t[5] ||= (e) => P(u).maximumAward = e,
					"scale-exponent": P(u).scaleExponent,
					"onUpdate:scaleExponent": t[6] ||= (e) => P(u).scaleExponent = e,
					"scale-pivot": P(u).scalePivot,
					"onUpdate:scalePivot": t[7] ||= (e) => P(u).scalePivot = e,
					awards: P(d).awards,
					"decay-samples": P(i),
					samples: P(r)
				}, null, 8, [
					"companion-multiplier",
					"curve-exponent",
					"gap-for-maximum-award",
					"maximum-award",
					"scale-exponent",
					"scale-pivot",
					"awards",
					"decay-samples",
					"samples"
				])])
			]),
			U("footer", g_, [t[18] ||= U("p", { class: "tw:m-0 tw:min-w-0 tw:text-xs tw:text-base-content/65!" }, " Saving configuration never awards XP. World defaults apply to the next console opening. ", -1), U("div", __, [U("button", {
				class: "dui-btn dui-btn-ghost tw:min-w-44 tw:rounded-full tw:border tw:border-base-content/20! tw:bg-base-200!",
				disabled: P(c),
				type: "button",
				onClick: t[8] ||= (...e) => P(n).resetToDefaults && P(n).resetToDefaults(...e)
			}, [...t[16] ||= [U("i", {
				class: "fa-solid fa-arrow-rotate-left",
				"aria-hidden": "true"
			}, null, -1), G(" Reset to defaults ", -1)]], 8, v_), U("button", {
				class: "dui-btn dui-btn-primary tw:min-w-48 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: P(c),
				type: "button",
				onClick: t[9] ||= (...e) => P(n).saveConfiguration && P(n).saveConfiguration(...e)
			}, [P(c) ? (V(), H("span", b_)) : (V(), H("i", x_)), t[17] ||= G(" Save configuration ", -1)], 8, y_)])])
		]));
	}
});
//#endregion
//#region src/functions/xp-curve/selection.ts
function C_(e) {
	let { assignedActorIds: t, candidates: n, defaultSelection: r, targetedActorIds: i } = e;
	return n.map((e) => {
		let n = w_(e, t);
		return {
			category: n,
			id: e.id,
			name: e.name,
			selected: i?.has(e.id) ?? T_(e.id, n, r, t),
			totalXp: e.totalXp
		};
	}).sort(E_);
}
function w_(e, t) {
	return e.hasPlayerOwner && !t.has(e.id) ? "companion" : "standard";
}
function T_(e, t, n, r) {
	return n === "world" ? !0 : n === "company" ? r.has(e) || t === "companion" : r.has(e);
}
function E_(e, t) {
	return e.selected === t.selected ? e.name.localeCompare(t.name) : e.selected ? -1 : 1;
}
//#endregion
//#region src/module/xp-curve/actors.ts
function D_(e) {
	let t = M_(), n = N_(), r = n === void 0 ? "default" : "targets";
	return {
		actors: C_({
			assignedActorIds: t,
			candidates: Array.from(game.actors).filter((e) => e.type === "character").map(k_),
			defaultSelection: e,
			targetedActorIds: n
		}),
		selectionSource: r
	};
}
function O_(e) {
	let t = M_();
	return e.map((e) => {
		let n = game.actors.get(e);
		if (!n || n.type !== "character") throw Error(`XP recipient ${e} is no longer an available character actor.`);
		return A_(n, w_(n, t), !0);
	});
}
function k_(e) {
	let t = j_(e);
	return {
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		name: e.name,
		totalXp: t.totalXp
	};
}
function A_(e, t, n) {
	let r = j_(e);
	return {
		awardExperience: r.awardExperience,
		choice: {
			category: t,
			id: e.id,
			name: e.name,
			selected: n,
			totalXp: r.totalXp
		}
	};
}
function j_(e) {
	let t = e.system;
	if (!P_(t)) throw Error(`WFRP4e actor "${e.name}" does not expose readable system data.`);
	let n = t.details, r = t.awardExp;
	if (!P_(n) || typeof r != "function") throw Error(`WFRP4e actor "${e.name}" does not expose XP award operations.`);
	let i = n.experience;
	if (!P_(i) || !Number.isFinite(Number(i.total))) throw Error(`WFRP4e actor "${e.name}" does not expose a numeric total XP value.`);
	return {
		awardExperience: async (e, n) => {
			await r.call(t, e, n, null, !0);
		},
		totalXp: Math.max(0, Math.round(Number(i.total)))
	};
}
function M_() {
	return new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => typeof e == "string"));
}
function N_() {
	let e = game.user?.targets;
	if (!(!e || e.size === 0)) return new Set(Array.from(e).map((e) => e.actor).filter((e) => e?.type === "character").map((e) => e.id));
}
function P_(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/xp-curve/settings/keys.ts
var $ = {
	companionMultiplier: "xpCurveCompanionMultiplier",
	curveExponent: "xpCurveExponent",
	defaultReason: "xpCurveDefaultReason",
	defaultSelection: "xpCurveDefaultSelection",
	gapForMaximumAward: "xpCurveGapForMaximumAward",
	maximumAward: "xpCurveMaximumAward",
	scaleExponent: "xpCurveScaleExponent",
	scalePivot: "xpCurveScalePivot",
	showTokenControlsLauncher: "showXpCurveTokenControlsLauncher"
};
//#endregion
//#region src/module/xp-curve/settings/load.ts
function F_() {
	return {
		defaultReason: B_($.defaultReason),
		defaultSelection: V_($.defaultSelection),
		parameters: {
			companionMultiplier: z_($.companionMultiplier),
			curveExponent: z_($.curveExponent),
			gapForMaximumAward: z_($.gapForMaximumAward),
			maximumAward: z_($.maximumAward),
			scaleExponent: z_($.scaleExponent),
			scalePivot: z_($.scalePivot)
		}
	};
}
async function I_(e) {
	let n = [
		[$.companionMultiplier, e.parameters.companionMultiplier],
		[$.curveExponent, e.parameters.curveExponent],
		[$.defaultReason, e.defaultReason],
		[$.defaultSelection, e.defaultSelection],
		[$.gapForMaximumAward, e.parameters.gapForMaximumAward],
		[$.maximumAward, e.parameters.maximumAward],
		[$.scaleExponent, e.parameters.scaleExponent],
		[$.scalePivot, e.parameters.scalePivot]
	];
	for (let [e, r] of n) await game.settings.set(t, e, r);
}
function L_(e) {
	return R_(e);
}
function R_(e) {
	return game.settings.get(t, e) === !0;
}
function z_(e) {
	return Number(game.settings.get(t, e));
}
function B_(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function V_(e) {
	return H_(B_(e));
}
function H_(e) {
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/xp-curve/configuration.ts
function U_() {
	let e = F_();
	return {
		...e,
		actors: D_(e.defaultSelection).actors,
		launchers: { tokenControls: L_($.showTokenControlsLauncher) }
	};
}
async function W_(e) {
	Bc(J.xpCurveConsole), await I_({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: ym(e.parameters)
	}), await game.settings.set(t, $.showTokenControlsLauncher, e.launchers.tokenControls), ui.notifications.info("XP Curve Console configuration saved.");
}
//#endregion
//#region src/module/apps/xp-curve-configurator/XpCurveConfiguratorApplication.ts
var G_ = class extends Gc {
	static ACCESS_POLICY = J.xpCurveConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-xp-curve-configurator`],
		id: `${t}-xp-curve-configurator`,
		position: {
			height: 760,
			width: 920
		},
		window: {
			icon: "fa-solid fa-chart-line",
			resizable: !0,
			title: `${n} — XP Curve Configurator`
		}
	};
	#e;
	constructor(e = {}) {
		super(), this.#e = e;
	}
	getVueComponent() {
		return S_;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: async (e) => {
				await W_(e), await this.#e.onSaved?.();
			} },
			initialization: U_()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-configurator/open.ts
async function K_(e = {}) {
	let t = new G_(e);
	return await t.render(!0), t;
}
function q_(e = {}) {
	K_(e).catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/module/xp-curve/initialization.ts
function J_() {
	let e = F_(), t = D_(e.defaultSelection);
	return {
		...e,
		...t,
		reasonContext: Y_()
	};
}
function Y_() {
	return {
		date: game.world.nextSession?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		session: yp()
	};
}
//#endregion
//#region src/module/xp-curve/service.ts
async function X_(e) {
	Bc(J.xpCurveConsole);
	let t = O_(Array.from(new Set(e.actorIds))), n = ym(e.parameters), r = bm(t.map((e) => e.choice), n);
	if (r.awards.length < 2) throw Error("Select at least two character actors to calculate catch-up XP.");
	if (r.totalAward < 1) throw Error("This curve produces no XP awards for the selected actors.");
	await I_({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: n
	});
	let i = Dm(e.defaultReason, Y_()), a = [];
	for (let [e, n] of t.entries()) {
		let t = r.awards[e];
		if (t.award !== 0) try {
			await n.awardExperience(t.award, i), a.push(t.actorName);
		} catch (e) {
			let n = a.length > 0 ? ` XP was already applied to ${a.join(", ")}.` : "", r = e instanceof Error ? ` ${e.message}` : "";
			throw Error(`Could not award XP to ${t.actorName}.${n}${r}`, { cause: e });
		}
	}
	let o = {
		...r,
		reason: i
	};
	return await Z_(o), ui.notifications.info(`Awarded ${o.totalAward} total XP across ${a.length} actors.`), o;
}
async function Z_(e) {
	let t = e.awards.filter((e) => e.award > 0).map((e) => `<li><strong>${Om(e.actorName)}</strong>: +${e.award} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Curve Award</h2><p>${Om(e.reason)}</p><ul>${t}</ul><p><strong>${e.totalAward} XP awarded in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
//#endregion
//#region src/module/apps/xp-curve-console/XpCurveConsoleApplication.ts
var Q_ = class extends Gc {
	static ACCESS_POLICY = J.xpCurveConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-xp-curve-console`],
		id: `${t}-xp-curve-console`,
		position: {
			height: 720,
			width: 820
		},
		window: {
			icon: "fa-solid fa-chart-line",
			resizable: !0,
			title: `${n} — XP Curve Console`
		}
	};
	getVueComponent() {
		return Fh;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: X_,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Curve Console.`, e), ui.notifications.error("XP awards completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				},
				openConfigurator: () => {
					q_({ onSaved: () => this.render(!0) });
				}
			},
			initialization: J_()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-console/open.ts
async function $_() {
	let e = new Q_();
	return await e.render(!0), e;
}
function ev() {
	$_().catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Console. See the browser console for details.");
	});
}
//#endregion
//#region src/state/apps/session-management/store.ts
var tv = Ss("session-management", () => {
	let e = /* @__PURE__ */ N({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), t = /* @__PURE__ */ N(""), n = /* @__PURE__ */ N(""), r = /* @__PURE__ */ N(""), i = /* @__PURE__ */ N(), a = /* @__PURE__ */ N(), o = /* @__PURE__ */ N(!1), s;
	function c(o, c) {
		s = c, e.value = {
			...o.state,
			sessions: o.state.sessions.map((e) => ({ ...e }))
		}, t.value = o.state.currentSessionReference, n.value = dp(t.value), r.value = o.occurredAtLocal, i.value = void 0, a.value = void 0;
	}
	function l() {
		n.value = dp(t.value);
	}
	async function u() {
		await p(async () => {
			await m().saveCurrentSessionReference(t.value), e.value.currentSessionReference = t.value.trim(), t.value = e.value.currentSessionReference, n.value = dp(t.value), a.value = "Current session reference saved.";
		});
	}
	async function d() {
		await p(async () => {
			let i = await m().completeSession({
				nextSessionReference: n.value,
				occurredAt: r.value,
				sessionReference: t.value
			});
			e.value.sessions.unshift(i), e.value.currentSessionReference = n.value.trim(), t.value = e.value.currentSessionReference, n.value = dp(t.value), a.value = `Session ${i.reference} recorded.`;
		});
	}
	function f() {
		m().openXpAwardConsole();
	}
	async function p(e) {
		if (!o.value) {
			o.value = !0, i.value = void 0, a.value = void 0;
			try {
				await e();
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Session management action failed.", e), i.value = e instanceof Error ? e.message : "The session action could not be completed.";
			} finally {
				o.value = !1;
			}
		}
	}
	function m() {
		if (!s) throw Error("The Session Management Console has not been initialized.");
		return s;
	}
	return {
		completeSession: d,
		currentSessionReference: t,
		errorMessage: i,
		initialize: c,
		isWorking: o,
		nextSessionReference: n,
		occurredAtLocal: r,
		openXpAwardConsole: f,
		saveCurrentReference: u,
		state: e,
		statusMessage: a,
		updateSuggestedNextSession: l
	};
}), nv = { class: "tw:grid tw:min-w-0 tw:gap-3" }, rv = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[52rem]:grid-cols-2" }, iv = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "current-session-title"
}, av = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, ov = ["disabled"], sv = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-primary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "turnover-title"
}, cv = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, lv = ["disabled"], uv = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, dv = {
	key: 1,
	class: "fa-solid fa-check",
	"aria-hidden": "true"
}, fv = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "session-history-title"
}, pv = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, mv = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, hv = { class: "dui-badge dui-badge-sm" }, gv = {
	key: 0,
	class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, _v = { class: "dui-table dui-table-sm tw:min-w-[28rem]" }, vv = { scope: "row" }, yv = ["title"], bv = ["title"], xv = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Sv = /* @__PURE__ */ R({
	__name: "SessionManagementConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = tv();
		n.initialize(t.initialization, t.actions);
		let { currentSessionReference: r, errorMessage: i, isWorking: a, nextSessionReference: o, occurredAtLocal: s, state: c, statusMessage: l } = Cs(n), u = q(() => !!r.value.trim() && !!o.value.trim() && !!s.value && !a.value);
		function d(e) {
			return new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(new Date(e));
		}
		return (e, t) => (V(), na(jl, {
			description: "Keep a module-owned session reference and record when each turnover takes place.",
			"error-message": P(i),
			icon: "fa-solid fa-calendar-check",
			"status-message": P(l),
			title: "Session Management Console"
		}, {
			"header-end": Un(() => [U("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm tw:border tw:border-base-content/20! tw:bg-base-200!",
				type: "button",
				onClick: t[0] ||= (...e) => P(n).openXpAwardConsole && P(n).openXpAwardConsole(...e)
			}, [...t[7] ||= [U("i", {
				class: "fa-solid fa-award",
				"aria-hidden": "true"
			}, null, -1), G(" Award XP ", -1)]])]),
			default: Un(() => [U("div", nv, [U("div", rv, [U("section", iv, [U("div", av, [
				t[9] ||= U("div", null, [U("h2", {
					id: "current-session-title",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " Current session "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Used by XP reasons and session records. ")], -1),
				t[10] ||= U("label", {
					class: "dui-label tw:whitespace-normal",
					for: "current-session-reference"
				}, " Session reference ", -1),
				L(U("input", {
					id: "current-session-reference",
					"onUpdate:modelValue": t[1] ||= (e) => /* @__PURE__ */ M(r) ? r.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
					type: "text",
					onInput: t[2] ||= (...e) => P(n).updateSuggestedNextSession && P(n).updateSuggestedNextSession(...e)
				}, null, 544), [[Oo, P(r)]]),
				U("button", {
					class: "dui-btn dui-btn-sm tw:self-end",
					disabled: P(a) || !P(r).trim(),
					type: "button",
					onClick: t[3] ||= (...e) => P(n).saveCurrentReference && P(n).saveCurrentReference(...e)
				}, [...t[8] ||= [U("i", {
					class: "fa-solid fa-floppy-disk",
					"aria-hidden": "true"
				}, null, -1), G(" Save reference ", -1)]], 8, ov)
			])]), U("section", sv, [U("div", cv, [
				t[12] ||= U("div", null, [U("h2", {
					id: "turnover-title",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " Complete session "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The selected time becomes the best-known occurrence time for this session. ")], -1),
				t[13] ||= U("label", {
					class: "dui-label tw:whitespace-normal",
					for: "session-occurred-at"
				}, " Session date and time ", -1),
				L(U("input", {
					id: "session-occurred-at",
					"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ M(s) ? s.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
					type: "datetime-local"
				}, null, 512), [[Oo, P(s)]]),
				t[14] ||= U("label", {
					class: "dui-label tw:whitespace-normal",
					for: "next-session-reference"
				}, " Next session reference ", -1),
				L(U("input", {
					id: "next-session-reference",
					"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ M(o) ? o.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
					type: "text"
				}, null, 512), [[Oo, P(o)]]),
				U("button", {
					class: "dui-btn dui-btn-primary tw:self-end tw:rounded-full",
					disabled: !u.value,
					type: "button",
					onClick: t[6] ||= (...e) => P(n).completeSession && P(n).completeSession(...e)
				}, [P(a) ? (V(), H("span", uv)) : (V(), H("i", dv)), t[11] ||= G(" Record turnover ", -1)], 8, lv)
			])])]), U("section", fv, [U("div", pv, [U("div", mv, [t[15] ||= U("div", null, [U("h2", {
				id: "session-history-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Session history "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Stored as module-owned world data in exact ISO timestamps. ")], -1), U("span", hv, D(P(c).sessions.length) + " recorded", 1)]), P(c).sessions.length ? (V(), H("div", gv, [U("table", _v, [t[16] ||= U("thead", { class: "tw:bg-base-300/60!" }, [U("tr", null, [
				U("th", { scope: "col" }, "Session"),
				U("th", { scope: "col" }, "Took place"),
				U("th", { scope: "col" }, "Recorded")
			])], -1), U("tbody", null, [(V(!0), H(B, null, z(P(c).sessions, (e) => (V(), H("tr", { key: e.id }, [
				U("th", vv, D(e.reference), 1),
				U("td", { title: e.occurredAt }, D(d(e.occurredAt)), 9, yv),
				U("td", { title: e.recordedAt }, D(d(e.recordedAt)), 9, bv)
			]))), 128))])])])) : (V(), H("div", xv, [...t[17] ||= [U("i", {
				class: "fa-solid fa-calendar",
				"aria-hidden": "true"
			}, null, -1), U("span", null, "No session turnovers have been recorded yet.", -1)]]))])])])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
});
//#endregion
//#region src/module/session-management/initialization.ts
function Cv() {
	let e = vp();
	return {
		occurredAtLocal: wv(/* @__PURE__ */ new Date()),
		state: e
	};
}
function wv(e) {
	return (/* @__PURE__ */ new Date(e.getTime() - e.getTimezoneOffset() * 6e4)).toISOString().slice(0, 16);
}
//#endregion
//#region src/module/session-management/service.ts
async function Tv(e) {
	Bc(J.sessionManagementConsole);
	let t = e.trim();
	if (!t) throw Error("Enter a current session reference.");
	await bp({
		...vp(),
		currentSessionReference: t
	}), ui.notifications.info(`Current session reference saved as ${t}.`);
}
async function Ev(e) {
	Bc(J.sessionManagementConsole);
	let t = fp(vp(), e, {
		id: crypto.randomUUID(),
		recordedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	return await bp(t.state), ui.notifications.info(`Session ${t.record.reference} recorded. Current session is now ${t.state.currentSessionReference}.`), t.record;
}
//#endregion
//#region src/functions/xp-award/calculate.ts
function Dv(e, t) {
	let n = Number.isFinite(t) ? Math.round(t) : 0, r = e.filter((e) => e.selected).map((e) => {
		let t = e.category === "companion" ? Math.floor(n / 2) : n, r = Math.max(t, -e.totalXp);
		return {
			actorId: e.id,
			actorName: e.name,
			afterXp: e.totalXp + r,
			amount: r,
			beforeXp: e.totalXp,
			category: e.category
		};
	});
	return {
		awards: r,
		totalChange: r.reduce((e, t) => e + t.amount, 0)
	};
}
//#endregion
//#region src/functions/xp-award/reason.ts
function Ov(e, t, n) {
	let r = e;
	return n && !r.includes("%datetime%") && (r = r.trim() ? `${r} — awarded %datetime%` : "Awarded %datetime%"), Dm(r, t);
}
function kv(e) {
	return `${e.slice(0, 10)} ${e.slice(11, 19)} UTC`;
}
//#endregion
//#region src/state/apps/xp-award-console/store.ts
var Av = Ss("xp-award-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = jm("The XP Award Console"), o = /* @__PURE__ */ N(20), s = /* @__PURE__ */ N(""), c = /* @__PURE__ */ N("party"), l = /* @__PURE__ */ N(!0), u = /* @__PURE__ */ N("default"), d = /* @__PURE__ */ N(), f = /* @__PURE__ */ N(!1), p, m, h = q(() => Dv(e.value, o.value)), g = q(() => r.value.length > 0 && Number.isFinite(o.value) && Math.round(o.value) !== 0 && !f.value), _ = q(() => {
		let e = x().reasonContext;
		return Ov(s.value, e, l.value);
	});
	function v(e, n) {
		p = n, m = e, t(e.actors), o.value = e.defaultAmount, s.value = e.defaultReason, c.value = e.defaultSelection, l.value = e.includeTimestampInReason, u.value = e.selectionSource, d.value = void 0;
	}
	async function y() {
		if (!(!g.value || f.value)) {
			f.value = !0, d.value = void 0;
			try {
				let e = {
					actorIds: r.value.map((e) => e.id),
					defaultAmount: Math.round(o.value),
					defaultReason: s.value,
					defaultSelection: c.value,
					includeTimestampInReason: l.value
				}, t = await b().applyAwards(e);
				b().onActionComplete(t);
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Fixed XP award failed.", e), d.value = e instanceof Error ? e.message : "The XP changes could not be completed.";
			} finally {
				f.value = !1;
			}
		}
	}
	function b() {
		if (!p) throw Error("The XP Award Console has not been initialized.");
		return p;
	}
	function x() {
		if (!m) throw Error("The XP Award Console has not been initialized.");
		return m;
	}
	return {
		actors: e,
		amount: o,
		applyAwards: y,
		canApply: g,
		defaultReason: s,
		defaultSelection: c,
		errorMessage: d,
		includeTimestampInReason: l,
		initialize: v,
		isWorking: f,
		plan: h,
		resetSelection: n,
		resolvedReason: _,
		selectedActors: r,
		selectionSource: u,
		setActorSelected: i,
		setAllActorsSelected: a
	};
}), jv = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:whitespace-normal tw:py-1" }, Mv = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[62rem]:grid-cols-[1.2fr_0.8fr]" }, Nv = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-recipients"
}, Pv = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Fv = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Iv = { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, Lv = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Rv = ["disabled"], zv = ["disabled"], Bv = ["disabled"], Vv = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, Hv = { class: "dui-table dui-table-sm tw:min-w-[34rem]" }, Uv = {
	class: "tw:min-w-44",
	scope: "row"
}, Wv = { class: "tw:block tw:font-semibold" }, Gv = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, Kv = { class: "tw:text-right tw:tabular-nums" }, qv = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, Jv = { class: "tw:text-right tw:tabular-nums" }, Yv = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Xv = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-details"
}, Zv = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Qv = { class: "dui-label tw:cursor-pointer tw:items-start tw:justify-start tw:gap-3" }, $v = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, ey = { class: "tw:m-0 tw:break-words tw:font-semibold" }, ty = /* @__PURE__ */ R({
	__name: "XpAwardConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Av();
		n.initialize(t.initialization, t.actions);
		let { actors: r, amount: i, canApply: a, defaultReason: o, defaultSelection: s, errorMessage: c, includeTimestampInReason: l, isWorking: u, plan: d, resolvedReason: f, selectedActors: p, selectionSource: m } = Cs(n), h = q(() => m.value === "targets" ? "Targeted tokens seeded this award." : `The ${s.value} default seeded this award.`);
		function g(e) {
			return d.value.awards.find((t) => t.actorId === e);
		}
		function _(e) {
			return e > 0 ? `+${e}` : String(e);
		}
		return (e, t) => (V(), na(jl, {
			description: "Apply one reviewed XP change to selected characters using your saved recipient and reason defaults.",
			"error-message": P(c),
			icon: "fa-solid fa-award",
			title: "XP Award Console"
		}, {
			"header-end": Un(() => [U("span", jv, D(P(p).length) + " selected ", 1)]),
			footer: Un(() => [W(Im, {
				disabled: !P(a),
				icon: "fa-solid fa-award",
				label: `Apply ${_(P(d).totalChange)} XP`,
				working: P(u),
				onAction: P(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])]),
			default: Un(() => [U("div", Mv, [U("section", Nv, [U("div", Pv, [U("div", Fv, [U("div", null, [t[7] ||= U("h2", {
				id: "fixed-xp-recipients",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Recipients ", -1), U("p", Iv, D(h.value), 1)]), U("div", Lv, [
				U("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: P(u),
					type: "button",
					onClick: t[0] ||= (e) => P(n).setAllActorsSelected(!0)
				}, " All ", 8, Rv),
				U("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: P(u),
					type: "button",
					onClick: t[1] ||= (e) => P(n).setAllActorsSelected(!1)
				}, " None ", 8, zv),
				U("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: P(u),
					type: "button",
					onClick: t[2] ||= (...e) => P(n).resetSelection && P(n).resetSelection(...e)
				}, " Reset ", 8, Bv)
			])]), P(r).length ? (V(), H("div", Vv, [U("table", Hv, [t[8] ||= U("thead", { class: "tw:bg-base-300/60!" }, [U("tr", null, [
				U("th", { scope: "col" }, "Use"),
				U("th", { scope: "col" }, "Actor"),
				U("th", {
					class: "tw:text-right",
					scope: "col"
				}, "Current XP"),
				U("th", {
					class: "tw:text-right",
					scope: "col"
				}, "Change"),
				U("th", {
					class: "tw:text-right",
					scope: "col"
				}, "New total")
			])], -1), U("tbody", null, [(V(!0), H(B, null, z(P(r), (e) => (V(), H("tr", {
				key: e.id,
				class: E({ "tw:bg-base-200!": e.selected })
			}, [
				U("td", null, [W(Bm, {
					"actor-id": e.id,
					"actor-name": e.name,
					checked: e.selected,
					disabled: P(u),
					purpose: "the XP award",
					onChange: P(n).setActorSelected
				}, null, 8, [
					"actor-id",
					"actor-name",
					"checked",
					"disabled",
					"onChange"
				])]),
				U("th", Uv, [U("span", Wv, D(e.name), 1), e.category === "companion" ? (V(), H("span", Gv, " Half award ")) : K("", !0)]),
				U("td", Kv, D(e.totalXp), 1),
				U("td", qv, D(g(e.id) ? _(g(e.id)?.amount ?? 0) : "—"), 1),
				U("td", Jv, D(g(e.id)?.afterXp ?? "—"), 1)
			], 2))), 128))])])])) : (V(), H("div", Yv, [...t[9] ||= [U("i", {
				class: "fa-solid fa-user-slash",
				"aria-hidden": "true"
			}, null, -1), U("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]), U("section", Xv, [U("div", Zv, [
				t[13] ||= U("div", null, [U("h2", {
					id: "fixed-xp-details",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " Award details "), U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " These values become the next console defaults after a successful award. ")], -1),
				t[14] ||= U("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-amount"
				}, "XP change", -1),
				L(U("input", {
					id: "fixed-xp-amount",
					"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ M(i) ? i.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
					inputmode: "numeric",
					step: "1",
					type: "number"
				}, null, 512), [[
					Oo,
					P(i),
					void 0,
					{ number: !0 }
				]]),
				t[15] ||= U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Negative values remove XP. Companion awards are rounded down to half, matching GM Toolkit. ", -1),
				t[16] ||= U("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-default-group"
				}, " Default recipients on next open ", -1),
				L(U("select", {
					id: "fixed-xp-default-group",
					"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ M(s) ? s.value = e : null,
					class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!"
				}, [...t[10] ||= [
					U("option", { value: "party" }, "Party", -1),
					U("option", { value: "company" }, "Company", -1),
					U("option", { value: "world" }, "World", -1)
				]], 512), [[jo, P(s)]]),
				t[17] ||= U("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-reason"
				}, " Experience log reason ", -1),
				L(U("input", {
					id: "fixed-xp-reason",
					"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ M(o) ? o.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:border-base-content/25! tw:bg-base-100!",
					type: "text"
				}, null, 512), [[Oo, P(o)]]),
				t[18] ||= U("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
					G(" Supports "),
					U("code", null, "%session%"),
					G(", "),
					U("code", null, "%date%"),
					G(", and "),
					U("code", null, "%datetime%"),
					G(". ")
				], -1),
				U("label", Qv, [L(U("input", {
					"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ M(l) ? l.value = e : null,
					class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:appearance-none! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none!",
					type: "checkbox"
				}, null, 512), [[ko, P(l)]]), t[11] ||= U("span", null, [U("span", { class: "tw:block tw:font-semibold" }, "Include timestamp in WFRP4e reason"), U("span", { class: "tw:block tw:text-xs tw:text-base-content/65!" }, " WFRP4e’s log schema has no timestamp field, so this appends UTC text to the reason. ")], -1)]),
				U("div", $v, [t[12] ||= U("span", { class: "tw:text-xs tw:text-base-content/60!" }, "WFRP4e will record", -1), U("p", ey, D(P(f) || "No reason"), 1)]),
				t[19] ||= U("div", {
					class: "dui-alert tw:text-xs",
					role: "note"
				}, [U("i", {
					class: "fa-solid fa-clock-rotate-left",
					"aria-hidden": "true"
				}), U("span", null, " The exact UTC time and per-actor changes are always saved in Drowsy’s world audit log, whether or not the reason includes it. ")], -1)
			])])])]),
			_: 1
		}, 8, ["error-message"]));
	}
});
//#endregion
//#region src/module/xp-award/initialization.ts
function ny() {
	let e = Op(), t = D_(e.defaultSelection), n = (/* @__PURE__ */ new Date()).toISOString();
	return {
		...e,
		...t,
		awardedAt: n,
		reasonContext: {
			date: n.slice(0, 10),
			datetime: kv(n),
			session: yp()
		}
	};
}
//#endregion
//#region src/module/xp-award/service.ts
async function ry(e) {
	Bc(J.xpAwardConsole);
	let t = Array.from(new Set(e.actorIds));
	if (t.length === 0) throw Error("Select at least one character actor.");
	if (!Number.isFinite(e.defaultAmount) || Math.round(e.defaultAmount) === 0) throw Error("Enter a non-zero whole-number XP change.");
	let n = O_(t), r = Dv(n.map((e) => e.choice), e.defaultAmount), i = (/* @__PURE__ */ new Date()).toISOString(), a = yp(), o = Ov(e.defaultReason, {
		date: i.slice(0, 10),
		datetime: kv(i),
		session: a
	}, e.includeTimestampInReason);
	await kp({
		defaultAmount: Math.round(e.defaultAmount),
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		includeTimestampInReason: e.includeTimestampInReason
	});
	let s = [];
	for (let [e, t] of n.entries()) {
		let n = r.awards[e];
		try {
			await t.awardExperience(n.amount, o), s.push(n);
		} catch (e) {
			let t = s.length > 0 ? ` XP was already changed for ${s.map((e) => e.actorName).join(", ")}.` : "", r = e instanceof Error ? ` ${e.message}` : "";
			throw Error(`Could not change XP for ${n.actorName}.${t}${r}`, { cause: e });
		}
	}
	let c = {
		...r,
		awardedAt: i,
		reason: o,
		sessionReference: a
	}, l = {
		...c,
		id: crypto.randomUUID()
	};
	return await jp(Cp(Ap(), l)), await iy(c), ui.notifications.info(`Applied ${ay(c.totalChange)} XP across ${c.awards.length} actors.`), c;
}
async function iy(e) {
	let t = e.awards.map((e) => `<li><strong>${Om(e.actorName)}</strong>: ${ay(e.amount)} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Award</h2><p>${Om(e.reason || "No reason")}</p><p><small>${Om(kv(e.awardedAt))}</small></p><ul>${t}</ul><p><strong>${ay(e.totalChange)} XP in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
function ay(e) {
	return e > 0 ? `+${e}` : String(e);
}
//#endregion
//#region src/module/apps/xp-award-console/XpAwardConsoleApplication.ts
var oy = class extends Gc {
	static ACCESS_POLICY = J.xpAwardConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-xp-award-console`],
		id: `${t}-xp-award-console`,
		position: {
			height: 720,
			width: 780
		},
		window: {
			icon: "fa-solid fa-award",
			resizable: !0,
			title: `${n} — XP Award Console`
		}
	};
	getVueComponent() {
		return ty;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: ry,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Award Console.`, e), ui.notifications.error("XP changes completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				}
			},
			initialization: ny()
		};
	}
};
//#endregion
//#region src/module/apps/xp-award-console/open.ts
async function sy() {
	let e = new oy();
	return await e.render(!0), e;
}
function cy() {
	sy().catch((e) => {
		console.error(`${t} | Failed to open the XP Award Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Award Console. See the browser console for details.");
	});
}
//#endregion
//#region src/module/apps/session-management/SessionManagementApplication.ts
var ly = class extends Gc {
	static ACCESS_POLICY = J.sessionManagementConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-session-management`],
		id: `${t}-session-management`,
		position: {
			height: 740,
			width: 760
		},
		window: {
			icon: "fa-solid fa-calendar-check",
			resizable: !0,
			title: `${n} — Session Management Console`
		}
	};
	getVueComponent() {
		return Sv;
	}
	getVueProps() {
		return {
			actions: {
				completeSession: Ev,
				openXpAwardConsole: cy,
				saveCurrentSessionReference: Tv
			},
			initialization: Cv()
		};
	}
};
//#endregion
//#region src/module/apps/session-management/open.ts
async function uy() {
	let e = new ly();
	return await e.render(!0), e;
}
//#endregion
//#region src/functions/grid-scale/calculate.ts
function dy(e) {
	return Number.isFinite(e.size) && e.size > 0 && Number.isFinite(e.distance) && e.distance > 0;
}
function fy(e, t) {
	return e.size / t.size * (t.distance / e.distance);
}
//#endregion
//#region src/module/grid-scale/service.ts
async function py() {
	let e = canvas?.scene, t = game.user;
	if (!e) {
		ui.notifications.warn("No Scene is currently viewed.");
		return;
	}
	if (!t) {
		ui.notifications.error("No current Foundry user is available.");
		return;
	}
	if (!e.canUserModify(t, "update")) {
		ui.notifications.error("You do not have permission to update this Scene.");
		return;
	}
	let n = {
		distance: Number(e.grid.distance),
		size: Number(e.grid.size),
		units: String(e.grid.units ?? "")
	};
	if (!dy(n)) {
		ui.notifications.error("The current Scene has an invalid grid size or distance.");
		return;
	}
	let r = await my(n);
	if (r) {
		if (!dy(r)) {
			ui.notifications.error("Grid size and distance must both be positive numbers.");
			return;
		}
		await hy(e, n, r);
	}
}
async function my(e) {
	let t = foundry.utils.escapeHTML(e.units), n = await foundry.applications.api.DialogV2.input({
		window: { title: "Change Grid Scale" },
		position: { width: 480 },
		content: `
      <div
        class="wfrp4e-enhanced-fear-terror-root tw:flex tw:flex-col tw:gap-3 tw:text-base-content!"
        data-theme="wfrp4e-enhanced-fear-terror"
      >
        <div role="alert" class="dui-alert tw:text-sm">
          <span>
            Ambient Lights and Token-emitted light radii will keep the same rendered size.
          </span>
        </div>
        <fieldset
          class="dui-fieldset tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content!"
        >
          <legend class="dui-fieldset-legend tw:text-base-content!">New grid settings</legend>

          <label class="dui-label" for="drowsy-grid-scale-size">Grid size (pixels)</label>
          <input
            id="drowsy-grid-scale-size"
            name="size"
            type="number"
            class="dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!"
            min="1"
            step="1"
            value="${e.size}"
            required
          />

          <label class="dui-label" for="drowsy-grid-scale-distance">Distance per space</label>
          <input
            id="drowsy-grid-scale-distance"
            name="distance"
            type="number"
            class="dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!"
            min="0.000001"
            step="any"
            value="${e.distance}"
            required
          />

          <label class="dui-label" for="drowsy-grid-scale-units">Units</label>
          <input
            id="drowsy-grid-scale-units"
            name="units"
            type="text"
            class="dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!"
            value="${t}"
          />
        </fieldset>
      </div>
    `,
		ok: {
			label: "Update Grid",
			icon: "fa-solid fa-grid-2"
		},
		modal: !0,
		rejectClose: !1
	});
	return n ? {
		distance: Number(n.distance),
		size: Number(n.size),
		units: String(n.units ?? "").trim()
	} : null;
}
async function hy(e, t, n) {
	let r = fy(t, n), i = e.lights.map((e) => ({
		_id: e.id,
		"config.bright": e.config.bright,
		"config.dim": e.config.dim
	})), a = e.lights.map((e) => ({
		_id: e.id,
		"config.bright": e.config.bright * r,
		"config.dim": e.config.dim * r
	})), o = e.tokens.map((e) => ({
		_id: e.id,
		"light.bright": e.light.bright,
		"light.dim": e.light.dim
	})), s = e.tokens.map((e) => ({
		_id: e.id,
		"light.bright": e.light.bright * r,
		"light.dim": e.light.dim * r
	})), c = !1, l = !1;
	try {
		a.length > 0 && (await e.updateEmbeddedDocuments("AmbientLight", a), c = !0), s.length > 0 && (await e.updateEmbeddedDocuments("Token", s), l = !0), await e.update(_y(n)), ui.notifications.info(`Grid updated from ${vy(t)} to ${vy(n)}.`);
	} catch (n) {
		let r = await gy({
			ambientLightsChanged: c,
			oldAmbientLights: i,
			oldGrid: t,
			oldTokenLights: o,
			scene: e,
			tokenLightsChanged: l
		}), a = r.some((e) => e.status === "rejected") ? "Grid update failed, and at least one rollback also failed. Check the console." : "Grid update failed. Any completed changes were rolled back.";
		throw console.error("Change Grid Scale macro failed.", n, r), Error(a, { cause: n });
	}
}
async function gy(e) {
	let t = [];
	return (e.scene.grid.size !== e.oldGrid.size || e.scene.grid.distance !== e.oldGrid.distance || e.scene.grid.units !== e.oldGrid.units) && t.push(e.scene.update(_y(e.oldGrid))), e.ambientLightsChanged && t.push(e.scene.updateEmbeddedDocuments("AmbientLight", e.oldAmbientLights)), e.tokenLightsChanged && t.push(e.scene.updateEmbeddedDocuments("Token", e.oldTokenLights)), Promise.allSettled(t);
}
function _y(e) {
	return {
		"grid.distance": e.distance,
		"grid.size": e.size,
		"grid.units": e.units
	};
}
function vy(e) {
	return `${e.size}px/${e.distance}${e.units}`;
}
//#endregion
//#region src/module/api/create-module-api.ts
function yy() {
	return {
		applyToSelectedActors: rl,
		awardXp: ry,
		awardXpCurve: X_,
		changeGridScalePreservingLighting: py,
		completeSession: Ev,
		copyLink: al,
		getGmToolkitCutoverReport: sm,
		getGmToolkitMigrationPreview: om,
		importGmToolkitDarkWhispers: fm,
		importGmToolkitSessionData: dm,
		openFearConsole: dl,
		openGmToolkitMigration: gm,
		openSessionManagementConsole: uy,
		openXpAwardConsole: sy,
		openXpCurveConsole: $_,
		openWorkbench: dl,
		postPrompt: il,
		postSummaryPrompt: ol,
		reviewGmToolkitCutover: mm
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function by() {
	let e = game.modules.get(t);
	if (!e) throw Error(`Foundry module registry entry was not found for ${t}.`);
	e.api = yy();
}
//#endregion
//#region src/module/fear-terror/actor-sheet/register.ts
var xy = "openFearConsole", Sy = "wfrp4e-enhanced-fear-terror-actor-header", Cy = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], wy = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function Ty() {
	for (let e of Cy) Hooks.on(e, (e, t) => {
		Ey() && Dy(e, t);
	});
	for (let e of wy) Hooks.on(e, (e) => {
		Ey() && Oy(e);
	});
}
function Ey() {
	return ul.canCurrentUserAccess() && Hc(Vc.actorSheet);
}
function Dy(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === xy) || (t.push({
		action: xy,
		icon: "fa-solid fa-skull",
		label: "Fear Console"
	}), e.options.actions ??= {}, e.options.actions[xy] = function() {
		ky(this.document);
	}));
}
function Oy(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${Sy}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(Sy, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = xy, i.dataset.tooltip = "Fear Console", i.ariaLabel = "Open Drowsy’s WFRP4e Toolkit Fear Console", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), ky(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function ky(e) {
	try {
		fl({ initialPayload: Zc(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not read this actor. See the browser console for details.");
	}
}
//#endregion
//#region src/module/settings/register.ts
function Ay(n, r) {
	game.settings.register(t, n, {
		config: !1,
		default: !0,
		hint: `${e}.Settings.${r}.Hint`,
		name: `${e}.Settings.${r}.Name`,
		requiresReload: !0,
		scope: "client",
		type: Boolean
	});
}
function jy(e, n, r, i, a = {}) {
	game.settings.register(t, e, {
		...a,
		config: !1,
		default: n,
		hint: `${i}.Hint`,
		name: `${i}.Name`,
		scope: "world",
		type: r
	});
}
//#endregion
//#region src/module/dark-whispers/settings/register.ts
function My() {
	jy(tp.promptLibrary, JSON.stringify({
		prompts: [],
		version: 1
	}), String, `${e}.Settings.DarkWhispers.PromptLibrary`);
}
//#endregion
//#region src/module/gm-toolkit/settings/register.ts
function Ny() {
	jy(Qp.state, JSON.stringify({ version: 1 }), String, `${e}.Settings.GmToolkitMigration.State`), game.settings.registerMenu(t, "gmToolkitMigration", {
		hint: `${e}.Menu.GmToolkitMigration.Hint`,
		icon: "fa-solid fa-box-archive",
		label: `${e}.Menu.GmToolkitMigration.Label`,
		name: `${e}.Menu.GmToolkitMigration.Name`,
		restricted: hm.ACCESS_POLICY.gmOnly,
		type: hm
	});
}
//#endregion
//#region src/functions/scene-controls/toolclip.ts
function Py(e, t) {
	return {
		heading: e,
		items: [{ paragraph: t }]
	};
}
//#endregion
//#region src/module/fear-terror/scene-controls/register.ts
var Fy = "openFearConsole";
function Iy() {
	Hooks.on("getSceneControlButtons", (e) => {
		!ul.canCurrentUserAccess() || !Hc(Vc.tokenControls) || Ly(e);
	});
}
function Ly(t) {
	let n = t.tokens;
	n && (n.tools[Fy] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: Fy,
		onChange: () => {
			fl();
		},
		order: 99,
		title: "Fear Console",
		toolclip: Py("Fear Console", `${e}.SceneControls.OpenFearConsole`)
	});
}
//#endregion
//#region src/module/fear-terror/settings/register.ts
function Ry() {
	Ay(Vc.tokenControls, "TokenControlsLauncher"), Ay(Vc.actorSheet, "ActorSheetLauncher"), game.settings.registerMenu(t, "fearConsole", {
		hint: `${e}.Menu.FearConsoleConfigurator.Hint`,
		icon: "fa-solid fa-gears",
		label: `${e}.Menu.FearConsoleConfigurator.Label`,
		name: `${e}.Menu.FearConsoleConfigurator.Name`,
		restricted: Kc.ACCESS_POLICY.gmOnly,
		type: Kc
	});
}
//#endregion
//#region src/module/session-management/settings/register.ts
function zy() {
	jy(_p.state, JSON.stringify({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), String, `${e}.Settings.SessionManagement.State`), game.settings.registerMenu(t, "sessionManagementConsole", {
		hint: `${e}.Menu.SessionManagementConsole.Hint`,
		icon: "fa-solid fa-calendar-check",
		label: `${e}.Menu.SessionManagementConsole.Label`,
		name: `${e}.Menu.SessionManagementConsole.Name`,
		restricted: ly.ACCESS_POLICY.gmOnly,
		type: ly
	});
}
//#endregion
//#region src/module/xp-curve/scene-controls/register.ts
var By = "openXpCurveConsole";
function Vy() {
	Hooks.on("getSceneControlButtons", (t) => {
		if (!Q_.canCurrentUserAccess() || !L_($.showTokenControlsLauncher)) return;
		let n = t.tokens;
		n && (n.tools[By] = {
			button: !0,
			icon: "fa-solid fa-chart-line",
			name: By,
			onChange: ev,
			order: 98,
			title: "XP Curve Console",
			toolclip: Py("XP Curve Console", `${e}.SceneControls.OpenXpCurveConsole`)
		});
	});
}
//#endregion
//#region src/module/xp-curve/settings/register.ts
function Hy() {
	Ay($.showTokenControlsLauncher, "XpCurveTokenControlsLauncher"), Uy($.maximumAward, Am.parameters.maximumAward, Number, "MaximumAward", { range: {
		max: 1e5,
		min: 0,
		step: 1
	} }), Uy($.gapForMaximumAward, Am.parameters.gapForMaximumAward, Number, "GapForMaximumAward", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), Uy($.curveExponent, Am.parameters.curveExponent, Number, "CurveExponent", { range: {
		max: 5,
		min: .1,
		step: .05
	} }), Uy($.scalePivot, Am.parameters.scalePivot, Number, "ScalePivot", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), Uy($.scaleExponent, Am.parameters.scaleExponent, Number, "ScaleExponent", { range: {
		max: 2,
		min: 0,
		step: .05
	} }), Uy($.companionMultiplier, Am.parameters.companionMultiplier, Number, "CompanionMultiplier", { range: {
		max: 1,
		min: 0,
		step: .05
	} }), Uy($.defaultReason, Am.defaultReason, String, "DefaultReason"), Uy($.defaultSelection, Am.defaultSelection, String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpCurve.DefaultSelection.Company`,
		party: `${e}.Settings.XpCurve.DefaultSelection.Party`,
		world: `${e}.Settings.XpCurve.DefaultSelection.World`
	} }), game.settings.registerMenu(t, "xpCurveConsole", {
		hint: `${e}.Menu.XpCurveConfigurator.Hint`,
		icon: "fa-solid fa-sliders",
		label: `${e}.Menu.XpCurveConfigurator.Label`,
		name: `${e}.Menu.XpCurveConfigurator.Name`,
		restricted: G_.ACCESS_POLICY.gmOnly,
		type: G_
	});
}
function Uy(t, n, r, i, a = {}) {
	jy(t, n, r, `${e}.Settings.XpCurve.${i}`, a);
}
//#endregion
//#region src/module/xp-award/settings/register.ts
function Wy() {
	Gy(Dp.auditLog, JSON.stringify({
		batches: [],
		version: 1
	}), String, "AuditLog"), Gy(Dp.defaultAmount, 20, Number, "DefaultAmount", { range: {
		max: 1e5,
		min: -1e5,
		step: 1
	} }), Gy(Dp.defaultReason, "Session %session% (%date%)", String, "DefaultReason"), Gy(Dp.defaultSelection, "party", String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpAward.DefaultSelection.Company`,
		party: `${e}.Settings.XpAward.DefaultSelection.Party`,
		world: `${e}.Settings.XpAward.DefaultSelection.World`
	} }), Gy(Dp.includeTimestampInReason, !0, Boolean, "IncludeTimestampInReason"), game.settings.registerMenu(t, "xpAwardConsole", {
		hint: `${e}.Menu.XpAwardConsole.Hint`,
		icon: "fa-solid fa-award",
		label: `${e}.Menu.XpAwardConsole.Label`,
		name: `${e}.Menu.XpAwardConsole.Name`,
		restricted: oy.ACCESS_POLICY.gmOnly,
		type: oy
	});
}
function Gy(t, n, r, i, a = {}) {
	jy(t, n, r, `${e}.Settings.XpAward.${i}`, a);
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function Ky() {
	Hooks.once("init", () => {
		console.info(`${t} | Initializing`), Ry(), My(), Ny(), zy(), Wy(), Hy(), Ty(), Iy(), Vy();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${t} | Loaded outside ${i}; skipping module API registration.`);
			return;
		}
		by(), console.info(`${t} | Ready`);
	});
}
//#endregion
//#region src/main.ts
Ky();
//#endregion

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map