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
}, ce = /-\w/g, w = se((e) => e.replace(ce, (e) => e.slice(1).toUpperCase())), le = /\B([A-Z])/g, T = se((e) => e.replace(le, "-$1").toLowerCase()), ue = se((e) => e.charAt(0).toUpperCase() + e.slice(1)), de = se((e) => e ? `on${ue(e)}` : ""), E = (e, t) => !Object.is(e, t), fe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, pe = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, me = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, he, ge = () => he ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function _e(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = x(r) ? xe(r) : _e(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (x(e) || C(e)) return e;
}
var ve = /;(?![^(]*\))/g, ye = /:([^]+)/, be = /\/\*[^]*?\*\//g;
function xe(e) {
	let t = {};
	return e.replace(be, "").split(ve).forEach((e) => {
		if (e) {
			let n = e.split(ye);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function D(e) {
	let t = "";
	if (x(e)) t = e;
	else if (g(e)) for (let n = 0; n < e.length; n++) {
		let r = D(e[n]);
		r && (t += r + " ");
	}
	else if (C(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Se = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ce = /* @__PURE__ */ a(Se);
Se + "";
function we(e) {
	return !!e || e === "";
}
function Te(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Ee(e[r], t[r]);
	return n;
}
function Ee(e, t) {
	if (e === t) return !0;
	let n = y(e), r = y(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = S(e), r = S(t), n || r) return e === t;
	if (n = g(e), r = g(t), n || r) return n && r ? Te(e, t) : !1;
	if (n = C(e), r = C(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Ee(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function De(e, t) {
	return e.findIndex((e) => Ee(e, t));
}
var Oe = (e) => !!(e && e.__v_isRef === !0), O = (e) => x(e) ? e : e == null ? "" : g(e) || C(e) && (e.toString === te || !b(e.toString)) ? Oe(e) ? O(e.value) : JSON.stringify(e, ke, 2) : String(e), ke = (e, t) => Oe(t) ? ke(e, t.value) : _(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ae(t, r) + " =>"] = n, e), {}) } : v(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ae(e)) } : S(t) ? Ae(t) : C(t) && !g(t) && !ie(t) ? String(t) : t, Ae = (e, t = "") => S(e) ? `Symbol(${e.description ?? t})` : e, k, je = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && k && (k.active ? (this.parent = k, this.index = (k.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = k;
			try {
				return k = this, e();
			} finally {
				k = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = k, k = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (k === this) k = this.prevScope;
			else {
				let e = k;
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
function Me(e) {
	return new je(e);
}
function Ne() {
	return k;
}
function Pe(e, t = !1) {
	k && k.cleanups.push(e);
}
var A, Fe = /* @__PURE__ */ new WeakSet(), Ie = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, k && (k.active ? k.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Fe.has(this) && (Fe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Be(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, $e(this), Ue(this);
		let e = A, t = Ye;
		A = this, Ye = !0;
		try {
			return this.fn();
		} finally {
			We(this), A = e, Ye = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) qe(e);
			this.deps = this.depsTail = void 0, $e(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Fe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ge(this) && this.run();
	}
	get dirty() {
		return Ge(this);
	}
}, Le = 0, Re, ze;
function Be(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = ze, ze = e;
		return;
	}
	e.next = Re, Re = e;
}
function Ve() {
	Le++;
}
function He() {
	if (--Le > 0) return;
	if (ze) {
		let e = ze;
		for (ze = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Re;) {
		let t = Re;
		for (Re = void 0; t;) {
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
function Ue(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function We(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), qe(r), Je(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ge(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ke(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ke(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === et) || (e.globalVersion = et, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ge(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = A, r = Ye;
	A = e, Ye = !0;
	try {
		Ue(e);
		let n = e.fn(e._value);
		(t.version === 0 || E(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		A = n, Ye = r, We(e), e.flags &= -3;
	}
}
function qe(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) qe(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Je(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ye = !0, Xe = [];
function Ze() {
	Xe.push(Ye), Ye = !1;
}
function Qe() {
	let e = Xe.pop();
	Ye = e === void 0 ? !0 : e;
}
function $e(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = A;
		A = void 0;
		try {
			t();
		} finally {
			A = e;
		}
	}
}
var et = 0, tt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, nt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!A || !Ye || A === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== A) t = this.activeLink = new tt(A, this), A.deps ? (t.prevDep = A.depsTail, A.depsTail.nextDep = t, A.depsTail = t) : A.deps = A.depsTail = t, rt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = A.depsTail, t.nextDep = void 0, A.depsTail.nextDep = t, A.depsTail = t, A.deps === t && (A.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, et++, this.notify(e);
	}
	notify(e) {
		Ve();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			He();
		}
	}
};
function rt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) rt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var it = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ Symbol(""), ot = /* @__PURE__ */ Symbol(""), st = /* @__PURE__ */ Symbol("");
function j(e, t, n) {
	if (Ye && A) {
		let t = it.get(e);
		t || it.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new nt()), r.map = t, r.key = n), r.track();
	}
}
function ct(e, t, n, r, i, a) {
	let o = it.get(e);
	if (!o) {
		et++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ve(), t === "clear") o.forEach(s);
	else {
		let i = g(e), a = i && ae(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === st || !S(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(st)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(at)), _(e) && s(o.get(ot)));
				break;
			case "delete":
				i || (s(o.get(at)), _(e) && s(o.get(ot)));
				break;
			case "set":
				_(e) && s(o.get(at));
				break;
		}
	}
	He();
}
function lt(e, t) {
	let n = it.get(e);
	return n && n.get(t);
}
function ut(e) {
	let t = /* @__PURE__ */ N(e);
	return t === e ? t : (j(t, "iterate", st), /* @__PURE__ */ M(e) ? t : t.map(P));
}
function dt(e) {
	return j(e = /* @__PURE__ */ N(e), "iterate", st), e;
}
function ft(e, t) {
	return /* @__PURE__ */ Jt(e) ? Zt(/* @__PURE__ */ qt(e) ? P(t) : t) : P(t);
}
var pt = {
	__proto__: null,
	[Symbol.iterator]() {
		return mt(this, Symbol.iterator, (e) => ft(this, e));
	},
	concat(...e) {
		return ut(this).concat(...e.map((e) => g(e) ? ut(e) : e));
	},
	entries() {
		return mt(this, "entries", (e) => (e[1] = ft(this, e[1]), e));
	},
	every(e, t) {
		return gt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return gt(this, "filter", e, t, (e) => e.map((e) => ft(this, e)), arguments);
	},
	find(e, t) {
		return gt(this, "find", e, t, (e) => ft(this, e), arguments);
	},
	findIndex(e, t) {
		return gt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return gt(this, "findLast", e, t, (e) => ft(this, e), arguments);
	},
	findLastIndex(e, t) {
		return gt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return gt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return vt(this, "includes", e);
	},
	indexOf(...e) {
		return vt(this, "indexOf", e);
	},
	join(e) {
		return ut(this).join(e);
	},
	lastIndexOf(...e) {
		return vt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return gt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return yt(this, "pop");
	},
	push(...e) {
		return yt(this, "push", e);
	},
	reduce(e, ...t) {
		return _t(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return _t(this, "reduceRight", e, t);
	},
	shift() {
		return yt(this, "shift");
	},
	some(e, t) {
		return gt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return yt(this, "splice", e);
	},
	toReversed() {
		return ut(this).toReversed();
	},
	toSorted(e) {
		return ut(this).toSorted(e);
	},
	toSpliced(...e) {
		return ut(this).toSpliced(...e);
	},
	unshift(...e) {
		return yt(this, "unshift", e);
	},
	values() {
		return mt(this, "values", (e) => ft(this, e));
	}
};
function mt(e, t, n) {
	let r = dt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ M(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ht = Array.prototype;
function gt(e, t, n, r, i, a) {
	let o = dt(e), s = o !== e && !/* @__PURE__ */ M(e), c = o[t];
	if (c !== ht[t]) {
		let t = c.apply(e, a);
		return s ? P(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ft(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function _t(e, t, n, r) {
	let i = dt(e), a = i !== e && !/* @__PURE__ */ M(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ft(e, t)), n.call(this, t, ft(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ft(e, c) : c;
}
function vt(e, t, n) {
	let r = /* @__PURE__ */ N(e);
	j(r, "iterate", st);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Yt(n[0]) ? (n[0] = /* @__PURE__ */ N(n[0]), r[t](...n)) : i;
}
function yt(e, t, n = []) {
	Ze(), Ve();
	let r = (/* @__PURE__ */ N(e))[t].apply(e, n);
	return He(), Qe(), r;
}
var bt = /* @__PURE__ */ a("__proto__,__v_isRef,__isVue"), xt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(S));
function St(e) {
	S(e) || (e = String(e));
	let t = /* @__PURE__ */ N(this);
	return j(t, "has", e), t.hasOwnProperty(e);
}
var Ct = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Vt : Bt : i ? zt : Rt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = g(e);
		if (!r) {
			let e;
			if (a && (e = pt[t])) return e;
			if (t === "hasOwnProperty") return St;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ F(e) ? e : n);
		if ((S(t) ? xt.has(t) : bt(t)) || (r || j(e, "get", t), i)) return o;
		if (/* @__PURE__ */ F(o)) {
			let e = a && ae(t) ? o : o.value;
			return r && C(e) ? /* @__PURE__ */ Gt(e) : e;
		}
		return C(o) ? r ? /* @__PURE__ */ Gt(o) : /* @__PURE__ */ Ut(o) : o;
	}
}, wt = class extends Ct {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = g(e) && ae(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Jt(i);
			if (!/* @__PURE__ */ M(n) && !/* @__PURE__ */ Jt(n) && (i = /* @__PURE__ */ N(i), n = /* @__PURE__ */ N(n)), !a && /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : h(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ F(e) ? e : r);
		return e === /* @__PURE__ */ N(r) && (o ? E(n, i) && ct(e, "set", t, n, i) : ct(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = h(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ct(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!S(t) || !xt.has(t)) && j(e, "has", t), n;
	}
	ownKeys(e) {
		return j(e, "iterate", g(e) ? "length" : at), Reflect.ownKeys(e);
	}
}, Tt = class extends Ct {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Et = /* @__PURE__ */ new wt(), Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new wt(!0), kt = (e) => e, At = (e) => Reflect.getPrototypeOf(e);
function jt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ N(i), o = _(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? kt : t ? Zt : P;
		return !t && j(a, "iterate", c ? ot : at), f(Object.create(l), { next() {
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
function Mt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Nt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ N(r), a = /* @__PURE__ */ N(n);
			e || (E(n, a) && j(i, "get", n), j(i, "get", a));
			let { has: o } = At(i), s = t ? kt : e ? Zt : P;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && j(/* @__PURE__ */ N(t), "iterate", at), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ N(n), i = /* @__PURE__ */ N(t);
			return e || (E(t, i) && j(r, "has", t), j(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ N(a), s = t ? kt : e ? Zt : P;
			return !e && j(o, "iterate", at), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return f(n, e ? {
		add: Mt("add"),
		set: Mt("set"),
		delete: Mt("delete"),
		clear: Mt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ N(this), r = At(n), i = /* @__PURE__ */ N(e), a = !t && !/* @__PURE__ */ M(e) && !/* @__PURE__ */ Jt(e) ? i : e;
			return r.has.call(n, a) || E(e, a) && r.has.call(n, e) || E(i, a) && r.has.call(n, i) || (n.add(a), ct(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ M(n) && !/* @__PURE__ */ Jt(n) && (n = /* @__PURE__ */ N(n));
			let r = /* @__PURE__ */ N(this), { has: i, get: a } = At(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ N(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? E(n, s) && ct(r, "set", e, n, s) : ct(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ N(this), { has: n, get: r } = At(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ N(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ct(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ N(this), t = e.size !== 0, n = e.clear();
			return t && ct(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = jt(r, e, t);
	}), n;
}
function Pt(e, t) {
	let n = Nt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(h(n, r) && r in t ? n : t, r, i);
}
var Ft = { get: /* @__PURE__ */ Pt(!1, !1) }, It = { get: /* @__PURE__ */ Pt(!1, !0) }, Lt = { get: /* @__PURE__ */ Pt(!0, !1) }, Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap();
function Ht(e) {
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
function Ut(e) {
	return /* @__PURE__ */ Jt(e) ? e : Kt(e, !1, Et, Ft, Rt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Kt(e, !1, Ot, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return Kt(e, !0, Dt, Lt, Bt);
}
function Kt(e, t, n, r, i) {
	if (!C(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ht(re(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return /* @__PURE__ */ Jt(e) ? /* @__PURE__ */ qt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ N(t) : e;
}
function Xt(e) {
	return !h(e, "__v_skip") && Object.isExtensible(e) && pe(e, "__v_skip", !0), e;
}
var P = (e) => C(e) ? /* @__PURE__ */ Ut(e) : e, Zt = (e) => C(e) ? /* @__PURE__ */ Gt(e) : e;
// @__NO_SIDE_EFFECTS__
function F(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return $t(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return $t(e, !0);
}
function $t(e, t) {
	return /* @__PURE__ */ F(e) ? e : new en(e, t);
}
var en = class {
	constructor(e, t) {
		this.dep = new nt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ N(e), this._value = t ? e : P(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ M(e) || /* @__PURE__ */ Jt(e);
		e = n ? e : /* @__PURE__ */ N(e), E(e, t) && (this._rawValue = e, this._value = n ? e : P(e), this.dep.trigger());
	}
};
function L(e) {
	return /* @__PURE__ */ F(e) ? e.value : e;
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ qt(e) ? e : new Proxy(e, tn);
}
var rn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new nt(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function an(e) {
	return new rn(e);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	let t = g(e) ? Array(e.length) : {};
	for (let n in e) t[n] = un(e, n);
	return t;
}
var sn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = S(t) ? t : String(t), this._raw = /* @__PURE__ */ N(e);
		let r = !0, i = e;
		if (!g(e) || S(this._key) || !ae(this._key)) do
			r = !/* @__PURE__ */ Yt(i) || /* @__PURE__ */ M(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = L(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ F(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ F(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return lt(this._raw, this._key);
	}
}, cn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function ln(e, t, n) {
	return /* @__PURE__ */ F(e) ? e : b(e) ? new cn(e) : C(e) && arguments.length > 1 ? un(e, t, n) : /* @__PURE__ */ I(e);
}
function un(e, t, n) {
	return new sn(e, t, n);
}
var dn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new nt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && A !== this) return Be(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ke(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function fn(e, t, n = !1) {
	let r, i;
	return b(e) ? r = e : (r = e.get, i = e.set), new dn(r, i, n);
}
var pn = {}, mn = /* @__PURE__ */ new WeakMap(), hn = void 0;
function gn(e, t = !1, n = hn) {
	if (n) {
		let t = mn.get(n);
		t || mn.set(n, t = []), t.push(e);
	}
}
function _n(e, t, n = o) {
	let { immediate: r, deep: i, once: a, scheduler: s, augmentJob: l, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ M(e) || i === !1 || i === 0 ? vn(e, 1) : vn(e), f, m, h, _, v = !1, y = !1;
	if (/* @__PURE__ */ F(e) ? (m = () => e.value, v = /* @__PURE__ */ M(e)) : /* @__PURE__ */ qt(e) ? (m = () => d(e), v = !0) : g(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ qt(e) || /* @__PURE__ */ M(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ F(e)) return e.value;
		if (/* @__PURE__ */ qt(e)) return d(e);
		if (b(e)) return u ? u(e, 2) : e();
	})) : m = b(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (h) {
			Ze();
			try {
				h();
			} finally {
				Qe();
			}
		}
		let t = hn;
		hn = f;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			hn = t;
		}
	} : c, t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => vn(e(), t);
	}
	let x = Ne(), S = () => {
		f.stop(), x && x.active && p(x.effects, f);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = y ? Array(e.length).fill(pn) : pn, ee = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let n = f.run();
			if (e || i || v || (y ? n.some((e, t) => E(e, C[t])) : E(n, C))) {
				h && h();
				let e = hn;
				hn = f;
				try {
					let e = [
						n,
						C === pn ? void 0 : y && C[0] === pn ? [] : C,
						_
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					hn = e;
				}
			}
		} else f.run();
	};
	return l && l(ee), f = new Ie(m), f.scheduler = s ? () => s(ee, !1) : ee, _ = (e) => gn(e, !1, f), h = f.onStop = () => {
		let e = mn.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			mn.delete(f);
		}
	}, t ? r ? ee(!0) : C = f.run() : s ? s(ee.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function vn(e, t = Infinity, n) {
	if (t <= 0 || !C(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ F(e)) vn(e.value, t, n);
	else if (g(e)) for (let r = 0; r < e.length; r++) vn(e[r], t, n);
	else if (v(e) || _(e)) e.forEach((e) => {
		vn(e, t, n);
	});
	else if (ie(e)) {
		for (let r in e) vn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && vn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function yn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		xn(e, t, n);
	}
}
function bn(e, t, n, r) {
	if (b(e)) {
		let i = yn(e, t, n, r);
		return i && ee(i) && i.catch((e) => {
			xn(e, t, n);
		}), i;
	}
	if (g(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(bn(e[a], t, n, r));
		return i;
	}
}
function xn(e, t, n, r = !0) {
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
			Ze(), yn(a, null, 10, [
				e,
				i,
				o
			]), Qe();
			return;
		}
	}
	Sn(e, n, i, r, s);
}
function Sn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var R = [], Cn = -1, wn = [], Tn = null, En = 0, Dn = /* @__PURE__ */ Promise.resolve(), On = null;
function kn(e) {
	let t = On || Dn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function An(e) {
	let t = Cn + 1, n = R.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = R[r], a = In(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function jn(e) {
	if (!(e.flags & 1)) {
		let t = In(e), n = R[R.length - 1];
		!n || !(e.flags & 2) && t >= In(n) ? R.push(e) : R.splice(An(t), 0, e), e.flags |= 1, Mn();
	}
}
function Mn() {
	On ||= Dn.then(Ln);
}
function Nn(e) {
	g(e) ? wn.push(...e) : Tn && e.id === -1 ? Tn.splice(En + 1, 0, e) : e.flags & 1 || (wn.push(e), e.flags |= 1), Mn();
}
function Pn(e, t, n = Cn + 1) {
	for (; n < R.length; n++) {
		let t = R[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			R.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Fn(e) {
	if (wn.length) {
		let e = [...new Set(wn)].sort((e, t) => In(e) - In(t));
		if (wn.length = 0, Tn) {
			Tn.push(...e);
			return;
		}
		for (Tn = e, En = 0; En < Tn.length; En++) {
			let e = Tn[En];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Tn = null, En = 0;
	}
}
var In = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Ln(e) {
	try {
		for (Cn = 0; Cn < R.length; Cn++) {
			let e = R[Cn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), yn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Cn < R.length; Cn++) {
			let e = R[Cn];
			e && (e.flags &= -2);
		}
		Cn = -1, R.length = 0, Fn(e), On = null, (R.length || wn.length) && Ln(e);
	}
}
var z = null, Rn = null;
function zn(e) {
	let t = z;
	return z = e, Rn = e && e.type.__scopeId || null, t;
}
function Bn(e, t = z, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Yi(-1);
		let i = zn(t), a;
		try {
			a = e(...n);
		} finally {
			zn(i), r._d && Yi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function B(e, t) {
	if (z === null) return e;
	let n = Aa(z), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, s, c = o] = t[e];
		i && (b(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && vn(a), r.push({
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
function Vn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ze(), bn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Qe());
	}
}
function Hn(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function Un(e, t, n = !1) {
	let r = ha();
	if (r || Qr) {
		let i = Qr ? Qr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && b(t) ? t.call(r && r.proxy) : t;
	}
}
function Wn() {
	return !!(ha() || Qr);
}
var Gn = /* @__PURE__ */ Symbol.for("v-scx"), Kn = () => Un(Gn);
function qn(e, t) {
	return Yn(e, null, { flush: "sync" });
}
function Jn(e, t, n) {
	return Yn(e, t, n);
}
function Yn(e, t, n = o) {
	let { immediate: r, deep: i, flush: a, once: s } = n, l = f({}, n), u = t && r || !t && a !== "post", d;
	if (xa) {
		if (a === "sync") {
			let e = Kn();
			d = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = c, e.resume = c, e.pause = c, e;
		}
	}
	let p = Z;
	l.call = (e, t, n) => bn(e, p, t, n);
	let m = !1;
	a === "post" ? l.scheduler = (e) => {
		U(e, p && p.suspense);
	} : a !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : jn(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = _n(e, t, l);
	return xa && (d ? d.push(h) : u && h()), h;
}
function Xn(e, t, n) {
	let r = this.proxy, i = x(e) ? e.includes(".") ? Zn(r, e) : () => r[e] : e.bind(r, r), a;
	b(t) ? a = t : (a = t.handler, n = t);
	let o = va(this), s = Yn(i, a.bind(r), n);
	return o(), s;
}
function Zn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Qn = /* @__PURE__ */ Symbol("_vte"), $n = (e) => e.__isTeleport, er = /* @__PURE__ */ Symbol("_leaveCb");
function tr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, tr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
	return b(e) ? /* @__PURE__ */ f({ name: e.name }, t, { setup: e }) : e;
}
function nr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function rr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var ir = /* @__PURE__ */ new WeakMap();
function ar(e, t, n, r, i = !1) {
	if (g(e)) {
		e.forEach((e, a) => ar(e, t && (g(t) ? t[a] : t), n, r, i));
		return;
	}
	if (sr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ar(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? Aa(r.component) : r.el, s = i ? null : a, { i: c, r: u } = e, d = t && t.r, f = c.refs === o ? c.refs = {} : c.refs, m = c.setupState, _ = /* @__PURE__ */ N(m), v = m === o ? l : (e) => rr(f, e) ? !1 : h(_, e), y = (e, t) => !(t && rr(f, t));
	if (d != null && d !== u) {
		if (or(t), x(d)) f[d] = null, v(d) && (m[d] = null);
		else if (/* @__PURE__ */ F(d)) {
			let e = t;
			y(d, e.k) && (d.value = null), e.k && (f[e.k] = null);
		}
	}
	if (b(u)) yn(u, c, 12, [s, f]);
	else {
		let t = x(u), r = /* @__PURE__ */ F(u);
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
					o(), ir.delete(e);
				};
				t.id = -1, ir.set(e, t), U(t, n);
			} else or(e), o();
		}
	}
}
function or(e) {
	let t = ir.get(e);
	t && (t.flags |= 8, ir.delete(e));
}
ge().requestIdleCallback, ge().cancelIdleCallback;
var sr = (e) => !!e.type.__asyncLoader, cr = (e) => e.type.__isKeepAlive;
function lr(e, t) {
	dr(e, "a", t);
}
function ur(e, t) {
	dr(e, "da", t);
}
function dr(e, t, n = Z) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (pr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) cr(e.parent.vnode) && fr(r, t, n, e), e = e.parent;
	}
}
function fr(e, t, n, r) {
	let i = pr(t, e, r, !0);
	br(() => {
		p(r[t], i);
	}, n);
}
function pr(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ze();
			let i = va(n), a = bn(t, n, e, r);
			return i(), Qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var mr = (e) => (t, n = Z) => {
	(!xa || e === "sp") && pr(e, (...e) => t(...e), n);
}, hr = mr("bm"), gr = mr("m"), _r = mr("bu"), vr = mr("u"), yr = mr("bum"), br = mr("um"), xr = mr("sp"), Sr = mr("rtg"), Cr = mr("rtc");
function wr(e, t = Z) {
	pr("ec", e, t);
}
var Tr = /* @__PURE__ */ Symbol.for("v-ndc");
function Er(e, t, n, r) {
	let i, a = n && n[r], o = g(e);
	if (o || x(e)) {
		let n = o && /* @__PURE__ */ qt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ M(e), s = /* @__PURE__ */ Jt(e), e = dt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Zt(P(e[n])) : P(e[n]) : e[n], n, void 0, a && a[n]);
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
function Dr(e, t, n = {}, r, i) {
	if (z.ce || z.parent && sr(z.parent) && z.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), K(), Zi(W, null, [Y("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), K();
	let o = a && Or(a(n)), s = n.key || o && o.key, c = Zi(W, { key: (s && !S(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Or(e) {
	return e.some((e) => Qi(e) ? !(e.type === Wi || e.type === W && !Or(e.children)) : !0) ? e : null;
}
var kr = (e) => e ? ba(e) ? Aa(e) : kr(e.parent) : null, Ar = /* @__PURE__ */ f(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => kr(e.parent),
	$root: (e) => kr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Br(e),
	$forceUpdate: (e) => e.f ||= () => {
		jn(e.update);
	},
	$nextTick: (e) => e.n ||= kn.bind(e.proxy),
	$watch: (e) => Xn.bind(e)
}), jr = (e, t) => e !== o && !e.__isScriptSetup && h(e, t), Mr = {
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
			else if (jr(r, t)) return s[t] = 1, r[t];
			else if (i !== o && h(i, t)) return s[t] = 2, i[t];
			else if (h(a, t)) return s[t] = 3, a[t];
			else if (n !== o && h(n, t)) return s[t] = 4, n[t];
			else Fr && (s[t] = 0);
		}
		let u = Ar[t], d, f;
		if (u) return t === "$attrs" && j(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== o && h(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, h(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return jr(i, t) ? (i[t] = n, !0) : r !== o && h(r, t) ? (r[t] = n, !0) : h(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: s } }, c) {
		let l;
		return !!(n[c] || e !== o && c[0] !== "$" && h(e, c) || jr(t, c) || h(a, c) || h(r, c) || h(Ar, c) || h(i.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? h(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Nr(e) {
	return g(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Pr(e, t) {
	return !e || !t ? e || t : g(e) && g(t) ? e.concat(t) : f({}, Nr(e), Nr(t));
}
var Fr = !0;
function Ir(e) {
	let t = Br(e), n = e.proxy, r = e.ctx;
	Fr = !1, t.beforeCreate && Rr(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: h, activated: _, deactivated: v, beforeDestroy: y, beforeUnmount: x, destroyed: S, unmounted: ee, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: ie, serverPrefetch: ae, expose: oe, inheritAttrs: se, components: ce, directives: w, filters: le } = t;
	if (u && Lr(u, r, null), o) for (let e in o) {
		let t = o[e];
		b(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		C(t) && (e.data = /* @__PURE__ */ Ut(t));
	}
	if (Fr = !0, a) for (let e in a) {
		let t = a[e], i = Q({
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
	if (s) for (let e in s) zr(s[e], r, n, e);
	if (l) {
		let e = b(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Hn(t, e[t]);
		});
	}
	d && Rr(d, e, "c");
	function T(e, t) {
		g(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (T(hr, f), T(gr, p), T(_r, m), T(vr, h), T(lr, _), T(ur, v), T(wr, ie), T(Cr, ne), T(Sr, re), T(yr, x), T(br, ee), T(xr, ae), g(oe)) if (oe.length) {
		let t = e.exposed ||= {};
		oe.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === c && (e.render = te), se != null && (e.inheritAttrs = se), ce && (e.components = ce), w && (e.directives = w), ae && nr(e);
}
function Lr(e, t, n = c) {
	g(e) && (e = Gr(e));
	for (let n in e) {
		let r = e[n], i;
		i = C(r) ? "default" in r ? Un(r.from || n, r.default, !0) : Un(r.from || n) : Un(r), /* @__PURE__ */ F(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Rr(e, t, n) {
	bn(g(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function zr(e, t, n, r) {
	let i = r.includes(".") ? Zn(n, r) : () => n[r];
	if (x(e)) {
		let n = t[e];
		b(n) && Jn(i, n);
	} else if (b(e)) Jn(i, e.bind(n));
	else if (C(e)) if (g(e)) e.forEach((e) => zr(e, t, n, r));
	else {
		let r = b(e.handler) ? e.handler.bind(n) : t[e.handler];
		b(r) && Jn(i, r, e);
	}
}
function Br(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Vr(c, e, o, !0)), Vr(c, t, o)), C(t) && a.set(t, c), c;
}
function Vr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Vr(e, a, n, !0), i && i.forEach((t) => Vr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Hr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Hr = {
	data: Ur,
	props: qr,
	emits: qr,
	methods: Kr,
	computed: Kr,
	beforeCreate: H,
	created: H,
	beforeMount: H,
	mounted: H,
	beforeUpdate: H,
	updated: H,
	beforeDestroy: H,
	beforeUnmount: H,
	destroyed: H,
	unmounted: H,
	activated: H,
	deactivated: H,
	errorCaptured: H,
	serverPrefetch: H,
	components: Kr,
	directives: Kr,
	watch: Jr,
	provide: Ur,
	inject: Wr
};
function Ur(e, t) {
	return t ? e ? function() {
		return f(b(e) ? e.call(this, this) : e, b(t) ? t.call(this, this) : t);
	} : t : e;
}
function Wr(e, t) {
	return Kr(Gr(e), Gr(t));
}
function Gr(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function H(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Kr(e, t) {
	return e ? f(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qr(e, t) {
	return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : f(/* @__PURE__ */ Object.create(null), Nr(e), Nr(t ?? {})) : t;
}
function Jr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = f(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = H(e[r], t[r]);
	return n;
}
function Yr() {
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
var Xr = 0;
function Zr(e, t) {
	return function(n, r = null) {
		b(n) || (n = f({}, n)), r != null && !C(r) && (r = null);
		let i = Yr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Xr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ma,
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
					let u = c._ceVNode || Y(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Aa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (bn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Qr;
				Qr = c;
				try {
					return e();
				} finally {
					Qr = t;
				}
			}
		};
		return c;
	};
}
var Qr = null;
function $r(e, t, n = o) {
	let r = ha(), i = w(t), a = T(t), s = ei(e, i), c = an((s, c) => {
		let l, u = o, d;
		return qn(() => {
			let t = e[i];
			E(l, t) && (l = t, c());
		}), {
			get() {
				return s(), n.get ? n.get(l) : l;
			},
			set(e) {
				let s = n.set ? n.set(e) : e;
				if (!E(s, l) && !(u !== o && E(e, u))) return;
				let f = r.vnode.props, p = !!(f && (t in f || i in f || a in f) && (`onUpdate:${t}` in f || `onUpdate:${i}` in f || `onUpdate:${a}` in f));
				p || (l = e, c()), r.emit(`update:${t}`, s), E(e, u) && (E(e, s) && !E(s, d) || p && u !== o && !E(s, l)) && c(), u = e, d = s;
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
var ei = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${T(t)}Modifiers`];
function ti(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || o, i = n, a = t.startsWith("update:"), s = a && ei(r, t.slice(7));
	s && (s.trim && (i = n.map((e) => x(e) ? e.trim() : e)), s.number && (i = n.map(me)));
	let c, l = r[c = de(t)] || r[c = de(w(t))];
	!l && a && (l = r[c = de(T(t))]), l && bn(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, bn(u, e, 6, i);
	}
}
var ni = /* @__PURE__ */ new WeakMap();
function ri(e, t, n = !1) {
	let r = n ? ni : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!b(e)) {
		let r = (e) => {
			let n = ri(e, t, !0);
			n && (s = !0, f(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (C(e) && r.set(e, null), null) : (g(a) ? a.forEach((e) => o[e] = null) : f(o, a), C(e) && r.set(e, o), o);
}
function ii(e, t) {
	return !e || !u(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), h(e, t[0].toLowerCase() + t.slice(1)) || h(e, T(t)) || h(e, t));
}
function ai(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = zn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = sa(l.call(t, e, u, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = sa(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : oi(s);
		}
	} catch (t) {
		Ki.length = 0, xn(t, e, 1), v = Y(Wi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(d) && (y = si(y, a)), b = ia(b, y, !1, !0));
	}
	return n.dirs && (b = ia(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && tr(b, n.transition), v = b, zn(_), v;
}
var oi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || u(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, si = (e, t) => {
	let n = {};
	for (let r in e) (!d(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function ci(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? li(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (di(o, r, n) && !ii(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? li(r, o, l) : !0 : !!o;
	return !1;
}
function li(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (di(t, e, a) && !ii(n, a)) return !0;
	}
	return !1;
}
function di(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && C(r) && C(i) ? !Ee(r, i) : r !== i;
}
function fi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var pi = {}, mi = () => Object.create(pi), hi = (e) => Object.getPrototypeOf(e) === pi;
function gi(e, t, n, r = !1) {
	let i = {}, a = mi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), vi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Wt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function _i(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ N(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ii(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (h(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = w(o);
					i[t] = yi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		vi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !h(t, a) && ((r = T(a)) === a || !h(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = yi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !h(t, e)) && (delete a[e], l = !0);
	}
	l && ct(e.attrs, "set", "");
}
function vi(e, t, n, r) {
	let [i, a] = e.propsOptions, s = !1, c;
	if (t) for (let o in t) {
		if (oe(o)) continue;
		let l = t[o], u;
		i && h(i, u = w(o)) ? !a || !a.includes(u) ? n[u] = l : (c ||= {})[u] = l : ii(e.emitsOptions, o) || (!(o in r) || l !== r[o]) && (r[o] = l, s = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ N(n), r = c || o;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = yi(i, t, s, r[s], e, !h(r, s));
		}
	}
	return s;
}
function yi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = h(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && b(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = va(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === T(n)) && (r = !0));
	}
	return r;
}
var bi = /* @__PURE__ */ new WeakMap();
function xi(e, t, n = !1) {
	let r = n ? bi : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, c = {}, l = [], u = !1;
	if (!b(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = xi(e, t, !0);
			f(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !u) return C(e) && r.set(e, s), s;
	if (g(a)) for (let e = 0; e < a.length; e++) {
		let t = w(a[e]);
		Si(t) && (c[t] = o);
	}
	else if (a) for (let e in a) {
		let t = w(e);
		if (Si(t)) {
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
function Si(e) {
	return e[0] !== "$" && !oe(e);
}
var Ci = (e) => e === "_" || e === "_ctx" || e === "$stable", wi = (e) => g(e) ? e.map(sa) : [sa(e)], Ti = (e, t, n) => {
	if (t._n) return t;
	let r = Bn((...e) => wi(t(...e)), n);
	return r._c = !1, r;
}, Ei = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ci(n)) continue;
		let i = e[n];
		if (b(i)) t[n] = Ti(n, i, r);
		else if (i != null) {
			let e = wi(i);
			t[n] = () => e;
		}
	}
}, Di = (e, t) => {
	let n = wi(t);
	e.slots.default = () => n;
}, Oi = (e, t, n) => {
	for (let r in t) (n || !Ci(r)) && (e[r] = t[r]);
}, ki = (e, t, n) => {
	let r = e.slots = mi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Oi(r, t, n), n && pe(r, "_", e, !0)) : Ei(t, r);
	} else t && Di(e, t);
}, Ai = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, s = o;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : Oi(i, t, n) : (a = !t.$stable, Ei(t, i)), s = t;
	} else t && (Di(e, t), s = { default: 1 });
	if (a) for (let e in i) !Ci(e) && s[e] == null && delete i[e];
}, U = Hi;
function ji(e) {
	return Mi(e);
}
function Mi(e, t) {
	let n = ge();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = c, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !$i(e, t) && (r = D(e), _e(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ui:
				y(e, t, n, r);
				break;
			case Wi:
				b(e, t, n, r);
				break;
			case Gi:
				e ?? x(t, n, r, o);
				break;
			case W:
				ce(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? w(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, we);
		}
		u != null && i ? ar(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && ar(e.ref, null, a, e, !0);
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
		if (d = e.el = l(e.type, s, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && re(e.children, d, null, i, o, Ni(e, s), c, u), _ && Vn(e, null, i, "created"), ne(d, e, e.scopeId, c, i), m) {
			for (let e in m) e !== "value" && !oe(e) && a(d, e, null, m[e], s, i);
			"value" in m && a(d, "value", null, m.value, s), (f = m.onVnodeBeforeMount) && da(f, i, e);
		}
		_ && Vn(e, null, i, "beforeMount");
		let v = Fi(o, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && U(() => {
			try {
				f && da(f, i, e), v && g.enter(d), _ && Vn(e, null, i, "mounted");
			} finally {}
		}, o);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Vi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, re = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ca(e[l]) : sa(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, t, n, r, i, s, c) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || o, h = t.props || o, g;
		if (n && Pi(n, !1), (g = h.onVnodeBeforeUpdate) && da(g, n, t, e), f && Vn(t, e, n, "beforeUpdate"), n && Pi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, n, r, Ni(t, i), s) : c || E(e, t, l, null, n, r, Ni(t, i), s, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && U(() => {
			g && da(g, n, t, e), f && Vn(t, e, n, "updated");
		}, r);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === W || !$i(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), re(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Ii(e, t, !0)) : E(e, t, n, f, a, o, s, c, l);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : le(t, n, r, i, a, o, c) : T(e, t, c);
	}, le = (e, t, n, r, i, a, o) => {
		let s = e.component = ma(e, r, i);
		if (cr(e) && (s.ctx.renderer = we), Sa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o), !e.el) {
				let r = s.subTree = Y(Wi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, T = (e, t, n) => {
		let r = t.component = e.component;
		if (ci(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			de(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ue = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ri(e);
					if (n) {
						t && (t.el = c.el, de(e, t, o)), n.asyncDep.then(() => {
							U(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Pi(e, !1), t ? (t.el = c.el, de(e, t, o)) : t = c, n && fe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && da(d, s, t, c), Pi(e, !0);
				let f = ai(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), D(p), e, i, a), t.el = f.el, u === null && fi(e, f.el), r && U(r, i), (d = t.props && t.props.onVnodeUpdated) && U(() => da(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = sr(t);
				if (Pi(e, !1), l && fe(l), !m && (o = c && c.onVnodeBeforeMount) && da(o, d, t), Pi(e, !0), s && Ee) {
					let t = () => {
						e.subTree = ai(e), Ee(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ai(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && U(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					U(() => da(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && sr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && U(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ie(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => jn(u), Pi(e, !0), l();
	}, de = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, _i(e, t.props, r, n), Ai(e, t.children, n), Ze(), Pn(e), Qe();
	}, E = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && xe(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : xe(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && re(d, n, r, i, a, o, s, c));
	}, pe = (e, t, n, r, i, a, o, c, l) => {
		e ||= s, t ||= s;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? ca(t[p]) : sa(t[p]);
			v(e[p], r, n, null, i, a, o, c, l);
		}
		u > d ? xe(e, i, a, !0, !1, f) : re(t, n, r, i, a, o, c, l, f);
	}, me = (e, t, n, r, i, a, o, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], s = t[u] = l ? ca(t[u]) : sa(t[u]);
			if ($i(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], s = t[p] = l ? ca(t[p]) : sa(t[p]);
			if ($i(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, s = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ca(t[u]) : sa(t[u]), n, s, i, a, o, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) _e(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ca(t[u]) : sa(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					_e(r, i, a, !0);
					continue;
				}
				let s;
				if (r.key != null) s = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && $i(r, t[_])) {
					s = _;
					break;
				}
				s === void 0 ? _e(r, i, a, !0) : (C[s - h] = u + 1, s >= S ? S = s : x = !0, v(r, t[s], n, null, i, a, o, c, l), y++);
			}
			let ee = x ? Li(C) : s;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, s = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Bi(f) : r;
				C[u] === 0 ? v(null, s, n, p, i, a, o, c, l) : x && (_ < 0 || u !== ee[_] ? he(s, n, p, 2) : _--);
			}
		}
	}, he = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			he(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, we);
			return;
		}
		if (c === W) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Gi) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[er] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), U(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[er];
				s._isLeaving && s[er](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, _e = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ze(), ar(s, null, n, e, !0), Qe()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !sr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && da(_, t, e), u & 6) be(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Vn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, we, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? xe(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && xe(c, t, n), r && ve(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && U(() => {
			_ && da(_, t, e), h && Vn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ve = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === W) {
			ye(n, r);
			return;
		}
		if (t === Gi) {
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
	}, ye = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, be = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		zi(c), zi(l), r && fe(r), i.stop(), a && (a.flags |= 8, _e(o, e, t, n)), s && U(s, t), U(() => {
			e.isUnmounted = !0;
		}, t);
	}, xe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) _e(e[o], t, n, r, i);
	}, D = (e) => {
		if (e.shapeFlag & 6) return D(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Qn];
		return n ? h(n) : t;
	}, Se = !1, Ce = (e, t, n) => {
		let r;
		e == null ? t._vnode && (_e(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Se ||= (Se = !0, Pn(r), Fn(), !1);
	}, we = {
		p: v,
		um: _e,
		m: he,
		r: ve,
		mt: le,
		mc: re,
		pc: E,
		pbc: ae,
		n: D,
		o: e
	}, Te, Ee;
	return t && ([Te, Ee] = t(we)), {
		render: Ce,
		hydrate: Te,
		createApp: Zr(Ce, Te)
	};
}
function Ni({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Pi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ii(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (g(r) && g(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ca(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ii(t, a)), a.type === Ui && (a.patchFlag === -1 && (a = i[e] = ca(a)), a.el = t.el), a.type === Wi && !a.el && (a.el = t.el);
	}
}
function Li(e) {
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
function Ri(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ri(t);
}
function zi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Bi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Bi(t.subTree) : null;
}
var Vi = (e) => e.__isSuspense;
function Hi(e, t) {
	t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : Nn(e);
}
var W = /* @__PURE__ */ Symbol.for("v-fgt"), Ui = /* @__PURE__ */ Symbol.for("v-txt"), Wi = /* @__PURE__ */ Symbol.for("v-cmt"), Gi = /* @__PURE__ */ Symbol.for("v-stc"), Ki = [], G = null;
function K(e = !1) {
	Ki.push(G = e ? null : []);
}
function qi() {
	Ki.pop(), G = Ki[Ki.length - 1] || null;
}
var Ji = 1;
function Yi(e, t = !1) {
	Ji += e, e < 0 && G && t && (G.hasOnce = !0);
}
function Xi(e) {
	return e.dynamicChildren = Ji > 0 ? G || s : null, qi(), Ji > 0 && G && G.push(e), e;
}
function q(e, t, n, r, i, a) {
	return Xi(J(e, t, n, r, i, a, !0));
}
function Zi(e, t, n, r, i) {
	return Xi(Y(e, t, n, r, i, !0));
}
function Qi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function $i(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ea = ({ key: e }) => e ?? null, ta = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : x(e) || /* @__PURE__ */ F(e) || b(e) ? {
	i: z,
	r: e,
	k: t,
	f: !!n
} : e);
function J(e, t = null, n = null, r = 0, i = null, a = e === W ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ea(t),
		ref: t && ta(t),
		scopeId: Rn,
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
		ctx: z
	};
	return s ? (la(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= x(n) ? 8 : 16), Ji > 0 && !o && G && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && G.push(c), c;
}
var Y = na;
function na(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Tr) && (e = Wi), Qi(e)) {
		let r = ia(e, t, !0);
		return n && la(r, n), Ji > 0 && !a && G && (r.shapeFlag & 6 ? G[G.indexOf(e)] = r : G.push(r)), r.patchFlag = -2, r;
	}
	if (ja(e) && (e = e.__vccOpts), t) {
		t = ra(t);
		let { class: e, style: n } = t;
		e && !x(e) && (t.class = D(e)), C(n) && (/* @__PURE__ */ Yt(n) && !g(n) && (n = f({}, n)), t.style = _e(n));
	}
	let o = x(e) ? 1 : Vi(e) ? 128 : $n(e) ? 64 : C(e) ? 4 : b(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function ra(e) {
	return e ? /* @__PURE__ */ Yt(e) || hi(e) ? f({}, e) : e : null;
}
function ia(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ua(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ea(l),
		ref: t && t.ref ? n && a ? g(a) ? a.concat(ta(t)) : [a, ta(t)] : ta(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== W ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ia(e.ssContent),
		ssFallback: e.ssFallback && ia(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && tr(u, c.clone(u)), u;
}
function X(e = " ", t = 0) {
	return Y(Ui, null, e, t);
}
function aa(e, t) {
	let n = Y(Gi, null, e);
	return n.staticCount = t, n;
}
function oa(e = "", t = !1) {
	return t ? (K(), Zi(Wi, null, e)) : Y(Wi, null, e);
}
function sa(e) {
	return e == null || typeof e == "boolean" ? Y(Wi) : g(e) ? Y(W, null, e.slice()) : Qi(e) ? ca(e) : Y(Ui, null, String(e));
}
function ca(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ia(e);
}
function la(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (g(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), la(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !hi(t) ? t._ctx = z : r === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else b(t) ? (t = {
		default: t,
		_ctx: z
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [X(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ua(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = D([t.class, r.class]));
		else if (e === "style") t.style = _e([t.style, r.style]);
		else if (u(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(g(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !d(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function da(e, t, n, r = null) {
	bn(e, t, 7, [n, r]);
}
var fa = Yr(), pa = 0;
function ma(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || fa, a = {
		uid: pa++,
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
		scope: new je(!0),
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
		propsOptions: xi(r, i),
		emitsOptions: ri(r, i),
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ti.bind(null, a), e.ce && e.ce(a), a;
}
var Z = null, ha = () => Z || z, ga, _a;
{
	let e = ge(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ga = t("__VUE_INSTANCE_SETTERS__", (e) => Z = e), _a = t("__VUE_SSR_SETTERS__", (e) => xa = e);
}
var va = (e) => {
	let t = Z;
	return ga(e), e.scope.on(), () => {
		e.scope.off(), ga(t);
	};
}, ya = () => {
	Z && Z.scope.off(), ga(null);
};
function ba(e) {
	return e.vnode.shapeFlag & 4;
}
var xa = !1;
function Sa(e, t = !1, n = !1) {
	t && _a(t);
	let { props: r, children: i } = e.vnode, a = ba(e);
	gi(e, r, a, t), ki(e, i, n || t);
	let o = a ? Ca(e, t) : void 0;
	return t && _a(!1), o;
}
function Ca(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mr);
	let { setup: r } = n;
	if (r) {
		Ze();
		let n = e.setupContext = r.length > 1 ? ka(e) : null, i = va(e), a = yn(r, e, 0, [e.props, n]), o = ee(a);
		if (Qe(), i(), (o || e.sp) && !sr(e) && nr(e), o) {
			if (a.then(ya, ya), t) return a.then((n) => {
				wa(e, n, t);
			}).catch((t) => {
				xn(t, e, 0);
			});
			e.asyncDep = a;
		} else wa(e, a, t);
	} else Da(e, t);
}
function wa(e, t, n) {
	b(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : C(t) && (e.setupState = nn(t)), Da(e, n);
}
var Ta, Ea;
function Da(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ta && !r.render) {
			let t = r.template || Br(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ta(t, f(f({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || c, Ea && Ea(e);
	}
	{
		let t = va(e);
		Ze();
		try {
			Ir(e);
		} finally {
			Qe(), t();
		}
	}
}
var Oa = { get(e, t) {
	return j(e, "get", ""), e[t];
} };
function ka(e) {
	return {
		attrs: new Proxy(e.attrs, Oa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Aa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Ar) return Ar[n](e);
		},
		has(e, t) {
			return t in e || t in Ar;
		}
	}) : e.proxy;
}
function ja(e) {
	return b(e) && "__vccOpts" in e;
}
var Q = (e, t) => /* @__PURE__ */ fn(e, t, xa), Ma = "3.5.38", Na = void 0, Pa = typeof window < "u" && window.trustedTypes;
if (Pa) try {
	Na = /* @__PURE__ */ Pa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Fa = Na ? (e) => Na.createHTML(e) : (e) => e, Ia = "http://www.w3.org/2000/svg", La = "http://www.w3.org/1998/Math/MathML", Ra = typeof document < "u" ? document : null, za = Ra && /* @__PURE__ */ Ra.createElement("template"), Ba = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ra.createElementNS(Ia, e) : t === "mathml" ? Ra.createElementNS(La, e) : n ? Ra.createElement(e, { is: n }) : Ra.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ra.createTextNode(e),
	createComment: (e) => Ra.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ra.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			za.innerHTML = Fa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = za.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Va = /* @__PURE__ */ Symbol("_vtc");
function Ha(e, t, n) {
	let r = e[Va];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ua = /* @__PURE__ */ Symbol("_vod"), Wa = /* @__PURE__ */ Symbol("_vsh"), Ga = /* @__PURE__ */ Symbol(""), Ka = /(?:^|;)\s*display\s*:/;
function qa(e, t, n) {
	let r = e.style, i = x(n), a = !1;
	if (n && !i) {
		if (t) if (x(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Ya(r, t, "");
		}
		else for (let e in t) n[e] ?? Ya(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ya(r, i, "") : $a(e, i, !x(t) && t ? t[i] : void 0, o) || Ya(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ga];
			e && (n += ";" + e), r.cssText = n, a = Ka.test(n);
		}
	} else t && e.removeAttribute("style");
	Ua in e && (e[Ua] = a ? r.display : "", e[Wa] && (r.display = "none"));
}
var Ja = /\s*!important$/;
function Ya(e, t, n) {
	if (g(n)) n.forEach((n) => Ya(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Qa(e, t);
		Ja.test(n) ? e.setProperty(T(r), n.replace(Ja, ""), "important") : e[r] = n;
	}
}
var Xa = [
	"Webkit",
	"Moz",
	"ms"
], Za = {};
function Qa(e, t) {
	let n = Za[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return Za[t] = r;
	r = ue(r);
	for (let n = 0; n < Xa.length; n++) {
		let i = Xa[n] + r;
		if (i in e) return Za[t] = i;
	}
	return t;
}
function $a(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && x(r) && n === r;
}
var eo = "http://www.w3.org/1999/xlink";
function to(e, t, n, r, i, a = Ce(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(eo, t.slice(6, t.length)) : e.setAttributeNS(eo, t, n) : n == null || a && !we(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : S(n) ? String(n) : n);
}
function no(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Fa(n) : n);
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
		r === "boolean" ? n = we(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function ro(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function io(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var ao = /* @__PURE__ */ Symbol("_vei");
function oo(e, t, n, r, i = null) {
	let a = e[ao] || (e[ao] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = co(t);
		r ? ro(e, n, a[t] = po(r, i), s) : o && (io(e, n, o, s), a[t] = void 0);
	}
}
var so = /(?:Once|Passive|Capture)$/;
function co(e) {
	let t;
	if (so.test(e)) {
		t = {};
		let n;
		for (; n = e.match(so);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : T(e.slice(2)), t];
}
var lo = 0, uo = /* @__PURE__ */ Promise.resolve(), fo = () => lo ||= (uo.then(() => lo = 0), Date.now());
function po(e, t) {
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
				e && bn(e, t, 5, a);
			}
		} else bn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = fo(), n;
}
var mo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ho = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ha(e, r, o) : t === "style" ? qa(e, n, r) : u(t) ? d(t) || oo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : go(e, t, r, o)) ? (no(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && to(e, t, r, o, a, t !== "value")) : e._isVueCE && (_o(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !x(r))) ? no(e, w(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), to(e, t, r, o));
};
function go(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && mo(t) && b(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return mo(t) && x(n) ? !1 : t in e;
}
function _o(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var vo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return g(t) ? (e) => fe(t, e) : t;
};
function yo(e) {
	e.target.composing = !0;
}
function bo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var xo = /* @__PURE__ */ Symbol("_assign");
function So(e, t, n) {
	return t && (e = e.trim()), n && (e = me(e)), e;
}
var Co = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[xo] = vo(i);
		let a = r || i.props && i.props.type === "number";
		ro(e, t ? "change" : "input", (t) => {
			t.target.composing || e[xo](So(e.value, n, a));
		}), (n || a) && ro(e, "change", () => {
			e.value = So(e.value, n, a);
		}), t || (ro(e, "compositionstart", yo), ro(e, "compositionend", bo), ro(e, "change", bo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[xo] = vo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? me(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, wo = {
	deep: !0,
	created(e, t, n) {
		e[xo] = vo(n), ro(e, "change", () => {
			let t = e._modelValue, n = Oo(e), r = e.checked, i = e[xo];
			if (g(t)) {
				let e = De(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (v(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(ko(e, r));
		});
	},
	mounted: To,
	beforeUpdate(e, t, n) {
		e[xo] = vo(n), To(e, t, n);
	}
};
function To(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (g(t)) i = De(t, r.props.value) > -1;
	else if (v(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ee(t, ko(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Eo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = v(t);
		ro(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? me(Oo(e)) : Oo(e));
			e[xo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, kn(() => {
				e._assigning = !1;
			});
		}), e[xo] = vo(r);
	},
	mounted(e, { value: t }) {
		Do(e, t);
	},
	beforeUpdate(e, t, n) {
		e[xo] = vo(n);
	},
	updated(e, { value: t }) {
		e._assigning || Do(e, t);
	}
};
function Do(e, t) {
	let n = e.multiple, r = g(t);
	if (!(n && !r && !v(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Oo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = De(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Ee(Oo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Oo(e) {
	return "_value" in e ? e._value : e.value;
}
function ko(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Ao = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], jo = {
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
	exact: (e, t) => Ao.some((n) => e[`${n}Key`] && !t.includes(n))
}, Mo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = jo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, No = /* @__PURE__ */ f({ patchProp: ho }, Ba), Po;
function Fo() {
	return Po ||= ji(No);
}
var Io = ((...e) => {
	let t = Fo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Ro(e);
		if (!r) return;
		let i = t._component;
		!b(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Lo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Lo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Ro(e) {
	return x(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var zo = typeof window < "u", Bo, Vo = (e) => Bo = e, Ho = Symbol();
function Uo(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Wo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Wo ||= {});
var Go = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Ko(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function qo(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Qo(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Jo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Yo(e) {
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
var Xo = typeof navigator == "object" ? navigator : { userAgent: "" }, Zo = /Macintosh/.test(Xo.userAgent) && /AppleWebKit/.test(Xo.userAgent) && !/Safari/.test(Xo.userAgent), Qo = zo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Zo ? $o : "msSaveOrOpenBlob" in Xo ? es : ts : () => {};
function $o(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Yo(r) : Jo(r.href) ? qo(e, t, n) : (r.target = "_blank", Yo(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Yo(r);
	}, 0));
}
function es(e, t = "download", n) {
	if (typeof e == "string") if (Jo(e)) qo(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Yo(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Ko(e, n), t);
}
function ts(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return qo(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Go.HTMLElement)) || "safari" in Go, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Zo) && typeof FileReader < "u") {
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
var { assign: ns } = Object;
function rs() {
	let e = Me(!0), t = e.run(() => /* @__PURE__ */ I({})), n = [], r = [], i = Xt({
		install(e) {
			Vo(i), i._a = e, e.provide(Ho, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var is = () => {};
function as(e, t, n, r = is) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ne() && Pe(i), i;
}
function os(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var ss = (e) => e(), cs = Symbol(), ls = Symbol();
function us(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Uo(i) && Uo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ F(r) && !/* @__PURE__ */ qt(r) ? e[n] = us(i, r) : e[n] = r;
	}
	return e;
}
var ds = Symbol();
function fs(e) {
	return !Uo(e) || !Object.prototype.hasOwnProperty.call(e, ds);
}
var { assign: ps } = Object;
function ms(e) {
	return !!(/* @__PURE__ */ F(e) && e.effect);
}
function hs(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), ps(/* @__PURE__ */ on(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Xt(Q(() => {
			Vo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = gs(e, l, t, n, r, !0), c;
}
function gs(e, t, n = {}, r, i, a) {
	let o, s = ps({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Wo.patchFunction,
			storeId: e,
			events: void 0
		}) : (us(r.state.value[e], t), n = {
			type: Wo.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		kn().then(() => {
			m === i && (l = !0);
		}), u = !0, os(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			ps(e, t);
		});
	} : is;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (cs in t) return t[ls] = n, t;
		let i = function() {
			Vo(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			os(f, {
				args: n,
				name: i[ls],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw os(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (os(a, e), e)).catch((e) => (os(o, e), Promise.reject(e))) : (os(a, l), l);
		};
		return i[cs] = !0, i[ls] = n, i;
	}, y = /* @__PURE__ */ Ut({
		_p: r,
		$id: e,
		$onAction: as.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = as(d, t, n.detached, () => a()), a = o.run(() => Jn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Wo.direct,
					events: void 0
				}, r);
			}, ps({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || ss)(() => r._e.run(() => (o = Me()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ F(n) && !ms(n) || /* @__PURE__ */ qt(n) ? a || (p && fs(n) && (/* @__PURE__ */ F(n) ? n.value = p[t] : us(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return ps(y, b), ps(/* @__PURE__ */ N(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				ps(t, e);
			});
		}
	}), r._p.forEach((e) => {
		ps(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function _s(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Wn();
		return n ||= o ? Un(Ho, null) : null, n && Vo(n), n = Bo, n._s.has(e) || (i ? gs(e, t, r, n) : hs(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function vs(e) {
	let t = /* @__PURE__ */ N(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = Q({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ F(i) || /* @__PURE__ */ qt(i)) && (n[r] = /* @__PURE__ */ ln(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/fear-terror/payload.ts
function ys(e) {
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
function bs(e) {
	return e === "fear" ? "Fear" : "Terror";
}
function xs(e, t) {
	let n = t.source ? ` - ${t.source}` : "";
	return `${e} ${t.rating}${n}`;
}
function Ss(e, t) {
	return `<h2>${e}</h2>${Cs(t)}`;
}
function Cs(e) {
	let t = bs(e.type), n = e.source ? `, ${e.source}` : "";
	return `@${t}[${e.rating}${n}]`;
}
//#endregion
//#region src/state/apps/fear-console/store.ts
var ws = _s("fear-console", () => {
	let e = /* @__PURE__ */ I("fear"), t = /* @__PURE__ */ I(1), n = /* @__PURE__ */ I(""), r = /* @__PURE__ */ I([]), i = /* @__PURE__ */ I(), a = /* @__PURE__ */ I(), o, s = Q(() => i.value !== void 0), c = Q(() => bs(e.value)), l = Q(() => {
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
}), Ts = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, Es = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, Ds = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:border-base-content/25! tw:py-1" }, Os = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure Fear Console"
}, ks = /* @__PURE__ */ V({
	__name: "FearConsoleHeader",
	props: {
		rating: {},
		selectedTypeLabel: {}
	},
	emits: ["configure"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (K(), q("header", Ts, [r[2] ||= J("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [J("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [J("i", { class: "fa-solid fa-skull" })])], -1), J("div", Es, [J("span", Ds, O(e.selectedTypeLabel) + " " + O(e.rating), 1), J("span", Os, [J("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure Fear Console",
			title: "Configure Fear Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[1] ||= [J("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]));
	}
}), As = { class: "tw:flex tw:min-h-full tw:flex-col tw:gap-4 tw:bg-base-200! tw:text-base-content tw:text-base-content!" }, js = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mx-4",
	role: "alert"
}, Ms = {
	class: "tw:grid tw:min-w-0 tw:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] tw:gap-3 tw:px-4",
	"aria-label": "Fear and Terror setup"
}, Ns = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Ps = {
	class: "tw:grid tw:w-full tw:grid-cols-2 tw:gap-2",
	role: "group",
	"aria-label": "Effect type"
}, Fs = ["aria-pressed"], Is = ["aria-pressed"], Ls = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Rs = { class: "dui-fieldset tw:col-span-full tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, zs = {
	class: "dui-card dui-card-border tw:mx-4 tw:min-h-40 tw:flex-1 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-terror-affected-actors"
}, Bs = { class: "dui-card-body tw:gap-3 tw:p-4" }, Vs = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, Hs = { class: "tw:flex tw:items-center tw:gap-2" }, Us = { class: "dui-badge dui-badge-sm" }, Ws = ["disabled"], Gs = {
	key: 0,
	class: "dui-list tw:gap-1",
	"aria-live": "polite"
}, Ks = { class: "tw:min-w-0 tw:font-semibold" }, qs = { class: "dui-badge dui-badge-ghost tw:capitalize" }, Js = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Ys = {
	class: "tw:sticky tw:bottom-0 tw:z-10 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4",
	"aria-label": "Fear Console actions"
}, Xs = { class: "dui-join tw:flex tw:w-full" }, Zs = ["disabled"], Qs = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, $s = {
	key: 1,
	class: "fa-solid fa-message",
	"aria-hidden": "true"
}, ec = ["disabled"], tc = {
	id: "fear-console-secondary-actions",
	class: "dui-dropdown dui-dropdown-top dui-dropdown-end dui-menu tw:z-20 tw:mb-2 tw:w-52 tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100! tw:p-2 tw:text-base-content! tw:shadow-lg",
	popover: "",
	style: { "position-anchor": "--fear-console-secondary-actions" }
}, nc = ["disabled"], rc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, ic = {
	key: 1,
	class: "fa-regular fa-copy",
	"aria-hidden": "true"
}, ac = ["disabled"], oc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, sc = {
	key: 1,
	class: "fa-solid fa-bolt",
	"aria-hidden": "true"
}, cc = /* @__PURE__ */ V({
	__name: "FearConsoleApp",
	props: {
		initialPayload: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = ws();
		t.initialPayload ? n.initialize({
			actions: t.actions,
			initialPayload: t.initialPayload
		}) : n.initialize({ actions: t.actions });
		let { activeAction: r, actors: i, errorMessage: a, isWorking: o, rating: s, selectedType: c, selectedTypeLabel: l, source: u } = vs(n);
		return (e, d) => (K(), q("main", As, [
			Y(ks, {
				rating: L(s),
				"selected-type-label": L(l),
				onConfigure: t.actions.openConfigurator
			}, null, 8, [
				"rating",
				"selected-type-label",
				"onConfigure"
			]),
			L(a) ? (K(), q("div", js, [d[8] ||= J("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), J("span", null, O(L(a)), 1)])) : oa("", !0),
			J("section", Ms, [
				J("fieldset", Ns, [
					d[9] ||= J("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Effect", -1),
					J("div", Ps, [J("button", {
						class: D(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": L(c) === "fear" }]),
						type: "button",
						"aria-pressed": L(c) === "fear",
						onClick: d[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, Fs), J("button", {
						class: D(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": L(c) === "terror" }]),
						type: "button",
						"aria-pressed": L(c) === "terror",
						onClick: d[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, Is)]),
					d[10] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Choose the WFRP4e psychology test to prompt or apply. ", -1)
				]),
				J("fieldset", Ls, [
					d[11] ||= J("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Difficulty", -1),
					d[12] ||= J("label", {
						class: "dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					B(J("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": d[2] ||= (e) => /* @__PURE__ */ F(s) ? s.value = e : null,
						class: "dui-input dui-validator tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						Co,
						L(s),
						void 0,
						{ number: !0 }
					]]),
					d[13] ||= J("p", { class: "dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				J("fieldset", Rs, [
					d[14] ||= aa("<legend class=\"dui-fieldset-legend tw:text-base-content!\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary!\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					B(J("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": d[3] ||= (e) => /* @__PURE__ */ F(u) ? u.value = e : null,
						autocomplete: "off",
						class: "dui-input tw:min-w-0 tw:max-w-full tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[Co, L(u)]]),
					d[15] ||= J("p", { class: "dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			J("section", zs, [J("div", Bs, [J("div", Vs, [J("div", Hs, [d[16] ||= J("h2", {
				id: "fear-terror-affected-actors",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Affected actors ", -1), J("span", Us, O(L(i).length), 1)]), J("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: L(o),
				type: "button",
				onClick: d[4] ||= (...e) => L(n).refreshActors && L(n).refreshActors(...e)
			}, [...d[17] ||= [J("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), X(" Refresh ", -1)]], 8, Ws)]), L(i).length ? (K(), q("ul", Gs, [(K(!0), q(W, null, Er(L(i), (e) => (K(), q("li", {
				key: e.id,
				class: "dui-list-row tw:items-center tw:bg-base-200!"
			}, [
				d[18] ||= J("span", {
					class: "dui-status dui-status-secondary",
					"aria-hidden": "true"
				}, null, -1),
				J("span", Ks, O(e.name), 1),
				J("span", qs, O(e.source), 1)
			]))), 128))])) : (K(), q("div", Js, [d[19] ||= J("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), J("span", null, " Target one or more tokens to apply " + O(L(l)) + " directly. You can post a chat card without affected actors. ", 1)]))])]),
			J("footer", Ys, [J("div", Xs, [
				J("button", {
					class: "dui-btn dui-btn-primary dui-join-item tw:min-w-0 tw:flex-1 tw:rounded-l-full tw:shadow-md",
					disabled: L(o),
					type: "button",
					onClick: d[5] ||= (e) => L(n).runAction("post-card")
				}, [L(r) === "post-card" ? (K(), q("span", Qs)) : (K(), q("i", $s)), d[20] ||= X(" Post Card ", -1)], 8, Zs),
				J("button", {
					class: "dui-btn dui-btn-primary dui-btn-square dui-join-item tw:rounded-r-full tw:border-l-primary-content/25! tw:shadow-md",
					"aria-label": "More Fear Console actions",
					disabled: L(o),
					popovertarget: "fear-console-secondary-actions",
					style: { "anchor-name": "--fear-console-secondary-actions" },
					title: "More actions",
					type: "button"
				}, [...d[21] ||= [J("i", {
					class: "fa-solid fa-chevron-up",
					"aria-hidden": "true"
				}, null, -1)]], 8, ec),
				J("ul", tc, [J("li", { class: D({ "dui-menu-disabled": L(o) }) }, [J("button", {
					disabled: L(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[6] ||= (e) => L(n).runAction("copy-link")
				}, [L(r) === "copy-link" ? (K(), q("span", rc)) : (K(), q("i", ic)), d[22] ||= X(" Copy Link ", -1)], 8, nc)], 2), J("li", { class: D({ "dui-menu-disabled": L(o) }) }, [J("button", {
					disabled: L(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[7] ||= (e) => L(n).runAction("apply")
				}, [L(r) === "apply" ? (K(), q("span", oc)) : (K(), q("i", sc)), X(" Apply " + O(L(l)), 1)], 8, ac)], 2)])
			])])
		]));
	}
}), lc = _s("fear-console-configurator", () => {
	let e = /* @__PURE__ */ I({ launchers: {
		actorSheet: !0,
		tokenControls: !0
	} }), t = /* @__PURE__ */ I(), n = /* @__PURE__ */ I(), r = /* @__PURE__ */ I(!1), i;
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
}), uc = { class: "dui-navbar tw:relative tw:min-h-0 tw:min-w-0 tw:flex-wrap tw:items-start tw:gap-3 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-4 tw:py-3 tw:text-base-content! tw:shadow-md" }, dc = { class: "dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start tw:gap-3" }, fc = {
	class: "tw:inline-grid tw:size-11 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-lg tw:text-primary-content! tw:shadow-md",
	"aria-hidden": "true"
}, pc = { class: "tw:min-w-0" }, mc = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight tw:tracking-wide tw:text-base-content!" }, hc = { class: "tw:mt-1 tw:max-w-2xl tw:text-sm tw:leading-relaxed tw:text-base-content/70!" }, gc = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, _c = ["data-tip"], vc = ["aria-label", "title"], yc = /* @__PURE__ */ V({
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
		return (t, r) => (K(), q("header", uc, [J("div", dc, [J("span", fc, [J("i", { class: D(e.icon) }, null, 2)]), J("div", pc, [
			r[1] ||= J("div", { class: "dui-breadcrumbs tw:mb-0.5 tw:max-w-full tw:text-xs tw:text-secondary!" }, [J("ul", null, [J("li", null, "Drowsy’s WFRP4e Toolkit")])], -1),
			J("h1", mc, O(e.title), 1),
			J("p", hc, O(e.description), 1)
		])]), J("div", gc, [Dr(t.$slots, "end"), e.configureLabel ? (K(), q("span", {
			key: 0,
			class: "dui-tooltip dui-tooltip-left",
			"data-tip": e.configureLabel
		}, [J("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			type: "button",
			"aria-label": e.configureLabel,
			title: e.configureLabel,
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [J("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]], 8, vc)], 8, _c)) : oa("", !0)])]));
	}
}), bc = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, xc = { class: "tw:min-h-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Sc = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, Cc = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, wc = {
	class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-launcher-settings"
}, Tc = { class: "dui-card-body tw:gap-4 tw:p-4" }, Ec = { class: "dui-fieldset tw:gap-2" }, Dc = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Oc = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, kc = { class: "tw:flex tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[32rem]:flex-row tw:min-[32rem]:items-center tw:min-[32rem]:justify-between" }, Ac = ["disabled"], jc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Mc = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, Nc = /* @__PURE__ */ V({
	__name: "FearConsoleConfiguratorApp",
	props: {
		actions: {},
		configuration: {}
	},
	setup(e) {
		let t = e, n = lc();
		n.initialize(t.configuration, t.actions);
		let { configuration: r, errorMessage: i, isSaving: a, statusMessage: o } = vs(n);
		return (e, t) => (K(), q("main", bc, [
			Y(yc, {
				description: "Choose where the Fear Console appears for this browser and account.",
				icon: "fa-solid fa-gears",
				title: "Fear Console Configurator"
			}),
			J("div", xc, [
				L(i) ? (K(), q("div", Sc, [t[3] ||= J("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), J("span", null, O(L(i)), 1)])) : oa("", !0),
				L(o) ? (K(), q("div", Cc, [t[4] ||= J("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), J("span", null, O(L(o)), 1)])) : oa("", !0),
				J("section", wc, [J("div", Tc, [
					t[8] ||= J("div", null, [J("h2", {
						id: "fear-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), J("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These client preferences control only where shortcuts appear. Macros and the module API remain available. ")], -1),
					J("fieldset", Ec, [
						t[7] ||= J("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1),
						J("label", Dc, [B(J("input", {
							"onUpdate:modelValue": t[0] ||= (e) => L(r).launchers.tokenControls = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[wo, L(r).launchers.tokenControls]]), t[5] ||= J("span", { class: "tw:min-w-0" }, [J("strong", { class: "tw:block" }, "Token Controls"), J("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the skull launcher in Foundry’s Token Controls palette. ")], -1)]),
						J("label", Oc, [B(J("input", {
							"onUpdate:modelValue": t[1] ||= (e) => L(r).launchers.actorSheet = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[wo, L(r).launchers.actorSheet]]), t[6] ||= J("span", { class: "tw:min-w-0" }, [J("strong", { class: "tw:block" }, "Actor-sheet headers"), J("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show a Fear Console action on supported WFRP4e actor sheets. ")], -1)])
					]),
					t[9] ||= J("div", {
						class: "dui-alert tw:text-sm",
						role: "note"
					}, [J("i", {
						class: "fa-solid fa-rotate",
						"aria-hidden": "true"
					}), J("span", null, "Launcher changes take effect after Foundry is reloaded.")], -1)
				])])
			]),
			J("footer", kc, [t[11] ||= J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, "Scope: this client and user.", -1), J("button", {
				class: "dui-btn dui-btn-primary tw:min-w-40 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: L(a),
				type: "button",
				onClick: t[2] ||= (...e) => L(n).saveConfiguration && L(n).saveConfiguration(...e)
			}, [L(a) ? (K(), q("span", jc)) : (K(), q("i", Mc)), t[10] ||= X(" Save configuration ", -1)], 8, Ac)])
		]));
	}
}), Pc = {
	actorSheet: "showActorSheetLauncher",
	tokenControls: "showTokenControlsLauncher"
};
function Fc(e) {
	return game.settings.get(t, e) === !0;
}
//#endregion
//#region src/module/fear-terror/configuration.ts
function Ic() {
	return { launchers: {
		actorSheet: Fc(Pc.actorSheet),
		tokenControls: Fc(Pc.tokenControls)
	} };
}
async function Lc(e) {
	let n = [[Pc.actorSheet, e.launchers.actorSheet], [Pc.tokenControls, e.launchers.tokenControls]];
	for (let [e, r] of n) await game.settings.set(t, e, r);
	ui.notifications.info("Fear Console configuration saved. Reload to update its launchers.");
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var Rc = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-enhanced-fear-terror-root", "tw:[&_*]:box-border", "tw:box-border", "tw:block", "tw:h-full", "tw:max-h-full", "tw:max-w-full", "tw:min-h-0", "tw:overflow-auto", "tw:text-base-content", "tw:w-full"), n.dataset.theme = "wfrp4e-enhanced-fear-terror", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-enhanced-fear-terror-app", "tw:box-border", "tw:min-h-0", "tw:overflow-hidden", "tw:p-0", "tw:relative"), t.replaceChildren(e), this.#e = Io(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(rs()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, zc = class extends Rc {
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
		return Nc;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: Lc },
			configuration: Ic()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console-configurator/open.ts
async function Bc() {
	let e = new zc();
	return await e.render(!0), e;
}
function Vc() {
	Bc().catch((e) => {
		console.error(`${t} | Failed to open the Fear Console Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/fear-terror/suggestion.ts
function Hc({ fearRating: e, source: t, terrorRating: n }) {
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
function Uc() {
	if (!(typeof canvas > "u" || !canvas)) {
		for (let e of canvas.tokens?.controlled ?? []) if (e.actor) return Wc(e.actor);
	}
}
function Wc(e) {
	let t = Gc(e, "CHAT.Terror");
	return Hc({
		fearRating: t === void 0 ? Gc(e, "CHAT.Fear") : void 0,
		source: e.name,
		terrorRating: t
	});
}
function Gc(e, t) {
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
function Kc() {
	return Jc().map(({ choice: e }) => e);
}
function qc() {
	return Jc().map(({ actor: e }) => e);
}
function Jc() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user.targets ?? []) Yc(e, t.actor);
	return Array.from(e.values());
}
function Yc(e, t) {
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
async function Xc(e) {
	let t = qc();
	if (t.length === 0) {
		ui.notifications.warn("Target one or more tokens before applying Fear or Terror.");
		return;
	}
	let n = ys(e);
	await Promise.all(t.map((e) => el(e, n)));
}
async function Zc(e) {
	let t = ys(e), n = qc(), r = tl(t), i = xs(r, t), a = nl(await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: i }), n);
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
async function Qc(e) {
	let t = ys(e), n = Cs(t);
	await game.clipboard.copyPlainText(n), ui.notifications.info(`${tl(t)} link copied.`);
}
async function $c(e) {
	let t = ys(e), n = Ss(tl(t), t), r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
async function el(e, t) {
	if (t.type === "fear") {
		await e.applyFear(t.rating, t.source);
		return;
	}
	await e.applyTerror(t.rating, t.source);
}
function tl(e) {
	let t = e.type === "fear" ? "CHAT.Fear" : "CHAT.Terror";
	return game.i18n.localize(t);
}
function nl(e, t) {
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
var rl = class extends Rc {
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
		return cc;
	}
	getVueProps() {
		return {
			actions: {
				applyToSelectedActors: Xc,
				copyLink: Qc,
				getActorChoices: Kc,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the Fear Console.`, e), ui.notifications.error("The Fear Console completed the action but could not close its window.");
					});
				},
				openConfigurator: Vc,
				postPrompt: Zc
			},
			initialPayload: this.#e.initialPayload ?? Uc()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console/open.ts
async function il(e = {}) {
	let t = new rl(e);
	return await t.render(!0), t;
}
function al(e = {}) {
	il(e).catch((e) => {
		console.error(`${t} | Failed to open the Fear Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/xp-curve/calculate.ts
var ol = .01, sl = 2 ** 53 - 1;
function cl(e) {
	return {
		companionMultiplier: ml(e.companionMultiplier, 0, 1),
		curveExponent: ml(e.curveExponent, .1, 5),
		gapForMaximumAward: Math.max(1, hl(e.gapForMaximumAward)),
		maximumAward: Math.max(0, hl(e.maximumAward)),
		scaleExponent: ml(e.scaleExponent, 0, 2),
		scalePivot: Math.max(1, hl(e.scalePivot))
	};
}
function ll(e, t) {
	let n = e.filter((e) => e.selected), r = cl(t), i = Math.max(0, ...n.map((e) => e.totalXp)), a = n.map((e) => {
		let t = hl(e.totalXp), n = Math.max(0, i - t), a = e.category === "companion" ? r.companionMultiplier : 1, o = ul(n, r), s = dl(t, r), c = Math.max(0, Math.round(o * s * a)), l = Math.min(r.maximumAward, c);
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
function ul(e, t) {
	let n = cl(t), r = Math.max(0, Number.isFinite(e) ? e : 0) / n.gapForMaximumAward, i = n.maximumAward * r ** n.curveExponent;
	return Number.isFinite(i) ? Math.min(i, sl) : sl;
}
function dl(e, t) {
	let n = cl(t), r = Math.max(0, Number.isFinite(e) ? e : 0);
	return Math.min(1, n.scalePivot / Math.max(r, n.scalePivot)) ** n.scaleExponent;
}
function fl(e, t = e.gapForMaximumAward * 1.4, n = 24) {
	let r = cl(e), i = Math.max(2, hl(n)), a = Math.max(r.gapForMaximumAward * 1.4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			award: ul(n, r),
			gap: n
		};
	});
}
function pl(e, t = e.scalePivot * 4, n = 32) {
	let r = cl(e), i = Math.max(2, hl(n)), a = Math.max(1e3, r.scalePivot * 4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			multiplier: dl(n, r),
			recipientXp: n
		};
	});
}
function ml(e, t, n) {
	let r = Number(e);
	return Math.min(n, Math.max(t, Number.isFinite(r) ? r : ol));
}
function hl(e) {
	let t = Number(e);
	return Number.isFinite(t) ? Math.round(t) : 0;
}
//#endregion
//#region src/functions/xp-curve/reason.ts
function gl(e, t) {
	return e.replaceAll("%session%", t.session).replaceAll("%date%", t.date).replace(/\s+\(\s*\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function _l(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/types/xp-curve/XpCurve.ts
var vl = {
	companionMultiplier: .5,
	curveExponent: .75,
	gapForMaximumAward: 1e3,
	maximumAward: 500,
	scaleExponent: .5,
	scalePivot: 5e3
}, yl = _s("xp-curve-console", () => {
	let e = /* @__PURE__ */ I([]), t = /* @__PURE__ */ I({ ...vl }), n = /* @__PURE__ */ I(""), r = /* @__PURE__ */ I("party"), i = /* @__PURE__ */ I(!0), a = /* @__PURE__ */ I("default"), o = /* @__PURE__ */ I(), s = /* @__PURE__ */ I(!1), c, l = /* @__PURE__ */ new Set(), u, d = Q(() => e.value.filter((e) => e.selected)), f = Q(() => ll(e.value, t.value)), p = Q(() => f.value.awards.filter((e) => e.award > 0).length), m = Q(() => d.value.length >= 2 && f.value.totalAward > 0 && !s.value), h = Q(() => {
		let e = S();
		return gl(n.value, {
			...e,
			session: i.value ? e.session : ""
		});
	});
	function g(s, d) {
		c = d, u = s.reasonContext, e.value = s.actors.map((e) => ({ ...e })), t.value = { ...s.parameters }, n.value = s.defaultReason, r.value = s.defaultSelection, i.value = s.useGmToolkitDefaults, a.value = s.selectionSource, l = new Set(s.actors.filter((e) => e.selected).map((e) => e.id)), o.value = void 0;
	}
	function _(t, n) {
		let r = e.value.find((e) => e.id === t);
		if (!r) throw Error(`The XP Curve Console cannot select unknown actor ${t}.`);
		r.selected = n;
	}
	function v(t) {
		for (let n of e.value) n.selected = t;
	}
	function y() {
		for (let t of e.value) t.selected = l.has(t.id);
	}
	async function b() {
		if (!(!m.value || s.value)) {
			s.value = !0, o.value = void 0;
			try {
				let e = {
					actorIds: d.value.map((e) => e.id),
					defaultReason: n.value,
					defaultSelection: r.value,
					parameters: t.value,
					useGmToolkitDefaults: i.value
				}, a = await x().applyAwards(e);
				x().onActionComplete(a);
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | XP curve award failed.", e), o.value = e instanceof Error ? e.message : "The XP awards could not be completed.";
			} finally {
				s.value = !1;
			}
		}
	}
	function x() {
		if (!c) throw Error("The XP Curve Console has not been initialized.");
		return c;
	}
	function S() {
		if (!u) throw Error("The XP Curve Console has not been initialized.");
		return u;
	}
	return {
		actors: e,
		applyAwards: b,
		canApply: m,
		defaultReason: n,
		errorMessage: o,
		initialize: g,
		isWorking: s,
		plan: f,
		positiveAwardCount: p,
		resetSelection: y,
		resolvedReason: h,
		selectedActors: d,
		selectionSource: a,
		setActorSelected: _,
		setAllActorsSelected: v
	};
}), bl = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipients-title"
}, xl = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Sl = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Cl = { class: "tw:flex tw:items-center tw:gap-2" }, wl = { class: "dui-badge dui-badge-sm" }, Tl = { class: "tw:flex tw:flex-wrap tw:gap-1" }, El = ["disabled"], Dl = ["disabled"], Ol = ["disabled"], kl = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100!"
}, Al = { class: "dui-table dui-table-sm tw:min-w-[52rem]" }, jl = { class: "tw:cursor-pointer" }, Ml = [
	"checked",
	"disabled",
	"onChange"
], Nl = { class: "tw:sr-only" }, Pl = {
	class: "tw:min-w-44",
	scope: "row"
}, Fl = { class: "tw:block tw:font-semibold" }, Il = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, Ll = { class: "tw:text-right tw:tabular-nums" }, Rl = { class: "tw:text-right tw:tabular-nums" }, zl = { class: "tw:text-right tw:tabular-nums" }, Bl = { class: "tw:text-right tw:tabular-nums" }, Vl = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, Hl = { class: "tw:text-right tw:tabular-nums" }, Ul = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Wl = /* @__PURE__ */ V({
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
			let n = t.currentTarget;
			n instanceof HTMLInputElement && r("update:selected", e, n.checked);
		}
		return (t, n) => (K(), q("section", bl, [J("div", xl, [J("div", Sl, [J("div", null, [J("div", Cl, [n[3] ||= J("h2", {
			id: "recipients-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipients ", -1), J("span", wl, O(e.plan.awards.length) + " selected", 1)]), n[4] ||= J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The XP leader sets the gap only. Decay is calculated from each recipient’s own total. ", -1)]), J("div", Tl, [
			J("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[0] ||= (e) => r("select-all", !0)
			}, " All ", 8, El),
			J("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[1] ||= (e) => r("select-all", !1)
			}, " None ", 8, Dl),
			J("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[2] ||= (e) => r("reset")
			}, " Reset ", 8, Ol)
		])]), e.actors.length ? (K(), q("div", kl, [J("table", Al, [n[5] ||= J("thead", { class: "tw:bg-base-300/60!" }, [J("tr", null, [
			J("th", { scope: "col" }, "Use"),
			J("th", { scope: "col" }, "Actor"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Total XP"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Leader gap"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Initial XP"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Decay"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Final award"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "New total")
		])], -1), J("tbody", null, [(K(!0), q(W, null, Er(e.actors, (t) => (K(), q("tr", {
			key: t.id,
			class: D({ "tw:bg-base-200!": t.selected })
		}, [
			J("td", null, [J("label", jl, [J("input", {
				class: "dui-checkbox dui-checkbox-primary dui-checkbox-sm tw:appearance-none! tw:rounded-sm! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none! tw:checked:text-primary-content!",
				type: "checkbox",
				checked: t.selected,
				disabled: e.disabled,
				onChange: (e) => a(t.id, e)
			}, null, 40, Ml), J("span", Nl, "Include " + O(t.name) + " in the XP curve", 1)])]),
			J("th", Pl, [J("span", Fl, O(t.name), 1), t.category === "companion" ? (K(), q("span", Il, " Companion rate ")) : oa("", !0)]),
			J("td", Ll, O(t.totalXp), 1),
			J("td", Rl, O(i(t.id)?.gap ?? "—"), 1),
			J("td", zl, O(i(t.id) ? Math.round(i(t.id)?.catchUpValue ?? 0) : "—"), 1),
			J("td", Bl, O(i(t.id) ? `${Math.round((i(t.id)?.decayMultiplier ?? 0) * 100)}%` : "—"), 1),
			J("td", Vl, O(i(t.id) ? `+${i(t.id)?.award}` : "—"), 1),
			J("td", Hl, O(i(t.id)?.afterXp ?? "—"), 1)
		], 2))), 128))])])])) : (K(), q("div", Ul, [...n[6] ||= [J("i", {
			class: "fa-solid fa-user-slash",
			"aria-hidden": "true"
		}, null, -1), J("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]));
	}
}), Gl = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:mb-3",
	role: "status"
}, Kl = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[68rem]:grid-cols-[1.25fr_1fr]" }, ql = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "award-message-title"
}, Jl = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Yl = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, Xl = { class: "tw:m-0 tw:break-words tw:font-semibold" }, Zl = /* @__PURE__ */ V({
	__name: "XpAwardWorkspace",
	props: /*@__PURE__*/ Pr({
		actors: {},
		disabled: { type: Boolean },
		plan: {},
		resolvedReason: {},
		selectionSource: {}
	}, {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {}
	}),
	emits: /*@__PURE__*/ Pr([
		"reset",
		"select-all",
		"update:selected"
	], ["update:defaultReason"]),
	setup(e, { emit: t }) {
		let n = $r(e, "defaultReason"), r = t;
		function i(e, t) {
			r("update:selected", e, t);
		}
		return (t, a) => (K(), q(W, null, [e.selectionSource === "targets" && e.plan.awards.length === 0 ? (K(), q("div", Gl, [...a[3] ||= [J("i", {
			class: "fa-solid fa-bullseye",
			"aria-hidden": "true"
		}, null, -1), J("span", { class: "tw:min-w-0 tw:break-words" }, " The targeted tokens do not contain eligible WFRP4e character actors. ", -1)]])) : oa("", !0), J("div", Kl, [Y(Wl, {
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
		]), J("section", ql, [J("div", Jl, [
			a[5] ||= J("div", null, [J("h2", {
				id: "award-message-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Award message "), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This reason is written to each recipient’s WFRP4e experience log. ")], -1),
			a[6] ||= J("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-award-reason"
			}, " Experience log reason ", -1),
			B(J("input", {
				id: "xp-award-reason",
				"onUpdate:modelValue": a[2] ||= (e) => n.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
				type: "text"
			}, null, 512), [[Co, n.value]]),
			a[7] ||= J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
				X(" Supports GM Toolkit’s "),
				J("code", null, "%session%"),
				X(" and "),
				J("code", null, "%date%"),
				X(" tokens. ")
			], -1),
			J("div", Yl, [a[4] ||= J("span", { class: "tw:text-xs tw:text-base-content/60!" }, "This award will record", -1), J("p", Xl, O(e.resolvedReason || "No reason"), 1)]),
			a[8] ||= J("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [J("i", {
				class: "fa-solid fa-circle-info",
				"aria-hidden": "true"
			}), J("span", { class: "tw:min-w-0 tw:break-words" }, " Use the cog in the header to change curves and recipient defaults. Saving there refreshes this award ledger with the new calculation. ")], -1)
		])])])], 64));
	}
}), Ql = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, $l = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, eu = ["title"], tu = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure XP Curve Console"
}, nu = { class: "tw:grid tw:grid-cols-2 tw:gap-px tw:border-b tw:border-base-content/20! tw:bg-base-content/20! tw:min-[38rem]:grid-cols-4" }, ru = { class: "tw:contents" }, iu = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, au = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, ou = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, su = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, cu = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, lu = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, uu = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, du = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, fu = /* @__PURE__ */ V({
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
		return (t, r) => (K(), q(W, null, [J("header", Ql, [r[3] ||= J("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [J("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [J("i", { class: "fa-solid fa-chart-line" })])], -1), J("div", $l, [J("span", {
			class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:max-w-56 tw:whitespace-normal tw:border-base-content/25! tw:py-1 tw:text-center",
			title: e.selectionSource === "targets" ? "Eligible targeted character tokens were selected when the console opened." : "No tokens were targeted, so the configured recipient default was used."
		}, [r[1] ||= J("span", {
			class: "dui-status dui-status-primary dui-status-sm tw:shrink-0",
			"aria-hidden": "true"
		}, null, -1), X(" " + O(e.selectionLabel), 1)], 8, eu), J("span", tu, [J("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure XP Curve Console",
			title: "Configure XP Curve Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [J("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]), J("div", nu, [J("dl", ru, [
			J("div", iu, [r[4] ||= J("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Selected recipients", -1), J("dd", au, O(e.selectedCount), 1)]),
			J("div", ou, [r[5] ||= J("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "XP leader total", -1), J("dd", su, O(e.highestXp), 1)]),
			J("div", cu, [r[6] ||= J("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Recipients gaining XP", -1), J("dd", lu, O(e.positiveAwardCount), 1)]),
			J("div", uu, [r[7] ||= J("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Total award", -1), J("dd", du, O(e.totalAward) + " XP ", 1)])
		])])], 64));
	}
}), pu = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, mu = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, hu = { class: "tw:min-w-0 tw:break-words" }, gu = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, _u = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:justify-end tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-3" }, vu = ["disabled"], yu = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, bu = {
	key: 1,
	class: "fa-solid fa-award",
	"aria-hidden": "true"
}, xu = /* @__PURE__ */ V({
	__name: "XpCurveConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = yl();
		n.initialize(t.initialization, t.actions);
		let { actors: r, canApply: i, defaultReason: a, errorMessage: o, isWorking: s, plan: c, positiveAwardCount: l, resolvedReason: u, selectedActors: d, selectionSource: f } = vs(n), p = Q(() => f.value === "targets" ? "Recipients: targeted tokens" : `Recipients: ${{
			company: "company default",
			party: "party default",
			world: "world default"
		}[t.initialization.defaultSelection]}`);
		return (e, m) => (K(), q("main", pu, [
			Y(fu, {
				"highest-xp": L(c).highestXp,
				"positive-award-count": L(l),
				"selected-count": L(d).length,
				"selection-label": p.value,
				"selection-source": L(f),
				"total-award": L(c).totalAward,
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
			L(o) ? (K(), q("div", mu, [m[2] ||= J("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), J("span", hu, O(L(o)), 1)])) : oa("", !0),
			J("div", gu, [Y(Zl, {
				"default-reason": L(a),
				"onUpdate:defaultReason": m[0] ||= (e) => /* @__PURE__ */ F(a) ? a.value = e : null,
				actors: L(r),
				disabled: L(s),
				plan: L(c),
				"resolved-reason": L(u),
				"selection-source": L(f),
				onReset: L(n).resetSelection,
				onSelectAll: L(n).setAllActorsSelected,
				"onUpdate:selected": L(n).setActorSelected
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
			J("footer", _u, [J("button", {
				class: "dui-btn dui-btn-primary tw:w-full tw:min-w-0 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md tw:min-[32rem]:w-auto tw:min-[32rem]:min-w-52",
				disabled: !L(i),
				type: "button",
				onClick: m[1] ||= (...e) => L(n).applyAwards && L(n).applyAwards(...e)
			}, [L(s) ? (K(), q("span", yu)) : (K(), q("i", bu)), X(" Award " + O(L(c).totalAward) + " XP ", 1)], 8, vu)])
		]));
	}
}), Su = _s("xp-curve-configurator", () => {
	let e = /* @__PURE__ */ I([]), t = /* @__PURE__ */ I({ ...vl }), n = /* @__PURE__ */ I(""), r = /* @__PURE__ */ I("party"), i = /* @__PURE__ */ I(!0), a = /* @__PURE__ */ I({ tokenControls: !0 }), o = /* @__PURE__ */ I(), s = /* @__PURE__ */ I(), c = /* @__PURE__ */ I(!1), l, u = Q(() => ll(e.value, t.value)), d = Q(() => Math.max(0, ...u.value.awards.map((e) => e.gap))), f = Q(() => fl(t.value, Math.max(d.value * 1.1, 1))), p = Q(() => pl(t.value, Math.max(u.value.highestXp * 1.1, 1)));
	function m(c, u) {
		l = u, e.value = c.actors.map((e) => ({ ...e })), t.value = { ...c.parameters }, n.value = c.defaultReason, r.value = c.defaultSelection, i.value = c.useGmToolkitDefaults, a.value = { ...c.launchers }, o.value = void 0, s.value = void 0;
	}
	function h(e) {
		r.value = e, i.value = !1, s.value = void 0;
	}
	async function g() {
		if (!c.value) {
			c.value = !0, o.value = void 0, s.value = void 0;
			try {
				t.value = cl(t.value);
				let e = {
					defaultReason: n.value,
					defaultSelection: r.value,
					launchers: { ...a.value },
					parameters: { ...t.value },
					useGmToolkitDefaults: i.value
				};
				await _().saveConfiguration(e), s.value = "Configuration saved. Launcher changes apply after a reload.";
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | XP configuration save failed.", e), o.value = e instanceof Error ? e.message : "The XP Curve Console configuration could not be saved.";
			} finally {
				c.value = !1;
			}
		}
	}
	function _() {
		if (!l) throw Error("The XP Curve Configurator has not been initialized.");
		return l;
	}
	return {
		actors: e,
		curveSamples: f,
		decaySamples: p,
		defaultReason: n,
		defaultSelection: r,
		errorMessage: o,
		initialize: m,
		isSaving: c,
		launchers: a,
		parameters: t,
		plan: u,
		saveConfiguration: g,
		setDefaultSelection: h,
		statusMessage: s,
		useGmToolkitDefaults: i
	};
});
function Cu(e, t, n, r) {
	return {
		maximumGap: Math.max(1, e * 1.4, ...n.map((e) => e.gap), ...r.map((e) => e.gap * 1.05)),
		maximumValue: Math.max(1, t * 1.25, ...n.map((e) => e.award * 1.05), ...r.map((e) => e.catchUpValue * 1.05))
	};
}
function wu(e, t, n) {
	return { maximumRecipientXp: Math.max(1e3, e * 4, ...t.map((e) => e.recipientXp), ...n.map((e) => e.beforeXp * 1.05)) };
}
function Tu(e) {
	let t = (t) => Mu(t, e.bounds.maximumGap), n = (t) => Nu(t, e.bounds.maximumValue);
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
function Eu(e) {
	let t = (t) => Mu(t, e.bounds.maximumRecipientXp), n = Pu;
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
function Du(e, t, n, r) {
	if (e === "reference") {
		let r = Fu((t.x - 68) / 472, .001, 1), i = 1 - Fu((t.y - 24) / 192, 0, 1);
		return {
			gapForMaximumAward: Math.max(1, Math.round(r * n.maximumGap)),
			kind: e,
			maximumAward: Math.max(0, Math.round(i * n.maximumValue))
		};
	}
	let i = Fu((216 - t.y) / 192 * (n.maximumValue / Math.max(1, r)), .03, .99);
	return {
		curveExponent: Iu(Fu(Math.log(i) / Math.log(.5), .1, 5), .05),
		kind: e
	};
}
function Ou(e, t, n) {
	if (e === "pivot") {
		let r = Fu((t.x - 68) / 472, .001, 1);
		return {
			kind: e,
			scalePivot: Math.max(1, Math.round(r * n.maximumRecipientXp))
		};
	}
	let r = Fu(1 - (t.y - 24) / 192, .25, .99);
	return {
		kind: e,
		scaleExponent: Iu(Fu(Math.log(r) / Math.log(.5), 0, 2), .05)
	};
}
function ku(e, t, n) {
	let r = Math.max(10, Math.round(t / 20)), i = Math.max(1, Math.round(Math.max(1, n) / 20));
	if (e === "ArrowLeft" || e === "ArrowRight") return { gapForMaximumAward: Math.max(1, t + (e === "ArrowLeft" ? -r : r)) };
	if (e === "ArrowUp" || e === "ArrowDown") return { maximumAward: Math.max(0, n + (e === "ArrowUp" ? i : -i)) };
}
function Au(e, t, n, r) {
	if ([
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp"
	].includes(e)) return Iu(Fu(t + (e === "ArrowUp" || e === "ArrowRight" ? -1 : 1) * .05, n, r), .05);
}
function ju(e, t) {
	if (e !== "ArrowLeft" && e !== "ArrowRight") return;
	let n = Math.max(100, Math.round(t / 20));
	return Math.max(1, t + (e === "ArrowLeft" ? -n : n));
}
function Mu(e, t) {
	return 68 + Math.max(0, e) / Math.max(1, t) * 472;
}
function Nu(e, t) {
	return 24 + (1 - Math.max(0, e) / Math.max(1, t)) * 192;
}
function Pu(e) {
	return 24 + (1 - Fu(e, 0, 1)) * 192;
}
function Fu(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Iu(e, t) {
	let n = t.toString().split(".")[1]?.length ?? 0;
	return Number((Math.round(e / t) * t).toFixed(n));
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graphMath.ts
function Lu(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: (t.clientX - n.left) / n.width * 560,
		y: (t.clientY - n.top) / n.height * 270
	};
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/GraphCanvas.vue?vue&type=script&setup=true&lang.ts
var Ru = ["viewBox", "aria-labelledby"], zu = ["id"], Bu = ["id"], Vu = [
	"x1",
	"x2",
	"y1",
	"y2"
], Hu = [
	"x1",
	"x2",
	"y1",
	"y2"
], Uu = [
	"x1",
	"x2",
	"y1",
	"y2"
], Wu = ["points"], Gu = ["cx", "cy"], Ku = ["x", "y"], qu = ["x", "y"], Ju = ["x", "y"], Yu = ["x", "y"], Xu = ["x", "y"], Zu = ["x", "y"], Qu = ["transform", "y"], $u = /* @__PURE__ */ V({
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
		return (t, r) => (K(), q("svg", {
			class: "tw:block tw:h-auto tw:w-full tw:max-w-full tw:touch-none tw:[user-select:none]",
			viewBox: `0 0 ${L(560)} ${L(270)}`,
			role: "img",
			"aria-labelledby": `${e.titleId} ${e.descriptionId}`,
			onPointercancel: r[0] ||= (e) => n("pointercancel", e),
			onPointermove: r[1] ||= (e) => n("pointermove", e),
			onPointerup: r[2] ||= (e) => n("pointerup", e)
		}, [
			J("title", { id: e.titleId }, O(e.title), 9, zu),
			J("desc", { id: e.descriptionId }, O(e.description), 9, Bu),
			J("line", {
				class: "tw:text-base-content/25!",
				x1: L(68),
				x2: L(68),
				y1: L(24),
				y2: L(24) + L(192),
				stroke: "currentColor"
			}, null, 8, Vu),
			J("line", {
				class: "tw:text-base-content/25!",
				x1: L(68),
				x2: L(68) + L(472),
				y1: L(24) + L(192),
				y2: L(24) + L(192),
				stroke: "currentColor"
			}, null, 8, Hu),
			J("line", {
				class: "tw:text-base-content/25!",
				x1: e.verticalGuideX,
				x2: e.verticalGuideX,
				y1: L(24),
				y2: L(24) + L(192),
				stroke: "currentColor",
				"stroke-dasharray": "4 5"
			}, null, 8, Uu),
			Dr(t.$slots, "guides"),
			J("polyline", {
				class: "tw:text-secondary!",
				fill: "none",
				points: e.points,
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "3"
			}, null, 8, Wu),
			(K(!0), q(W, null, Er(e.markers, (e) => (K(), q("g", {
				key: e.actorId,
				class: "tw:text-base-content!",
				"aria-hidden": "true"
			}, [J("circle", {
				cx: e.x,
				cy: e.y,
				fill: "currentColor",
				r: "9"
			}, [J("title", null, O(e.label), 1)], 8, Gu), J("text", {
				class: "tw:text-base-100!",
				x: e.x,
				y: e.y + 3,
				fill: "currentColor",
				"font-size": "9",
				"font-weight": "700",
				"text-anchor": "middle"
			}, O(e.index), 9, Ku)]))), 128)),
			Dr(t.$slots, "handles"),
			J("text", {
				class: "tw:text-base-content/65!",
				x: L(68),
				y: L(24) + L(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "middle"
			}, " 0 ", 8, qu),
			J("text", {
				class: "tw:text-base-content/65!",
				x: L(68) + L(472),
				y: L(24) + L(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, O(e.maximumXLabel), 9, Ju),
			J("text", {
				class: "tw:text-base-content/75!",
				x: L(68) + L(472) / 2,
				y: L(270) - 8,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, O(e.xAxisLabel), 9, Yu),
			e.maximumYLabel ? (K(), q("text", {
				key: 0,
				class: "tw:text-base-content/65!",
				x: L(68) - 10,
				y: L(24) + 4,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, O(e.maximumYLabel), 9, Xu)) : oa("", !0),
			J("text", {
				class: "tw:text-base-content/65!",
				x: L(68) - 10,
				y: L(24) + L(192) + 3,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, O(e.minimumYLabel), 9, Zu),
			J("text", {
				class: "tw:text-base-content/75!",
				transform: `rotate(-90 16 ${L(24) + L(192) / 2})`,
				x: "16",
				y: L(24) + L(192) / 2,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, O(e.yAxisLabel), 9, Qu),
			Dr(t.$slots, "labels")
		], 40, Ru));
	}
}), ed = [
	"role",
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], td = ["x", "y"], nd = ["x", "y"], rd = /* @__PURE__ */ V({
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
		return (t, r) => (K(), q("g", {
			class: "tw:cursor-grab tw:text-secondary!",
			role: e.role ?? "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= Mo((e) => n("pointerdown", e), ["stop"])
		}, [J("rect", {
			x: e.x - 8,
			y: e.y - 8,
			fill: "currentColor",
			height: "16",
			rx: "2",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18",
			width: "16"
		}, null, 8, td), J("rect", {
			class: "tw:text-base-100!",
			x: e.x - 3,
			y: e.y - 3,
			fill: "currentColor",
			height: "6",
			rx: "1",
			width: "6"
		}, null, 8, nd)], 40, ed));
	}
}), id = {
	key: 0,
	class: "tw:mt-2"
}, ad = { class: "tw:mt-1 tw:grid tw:[list-style:none] tw:grid-cols-1 tw:gap-x-3 tw:gap-y-1 tw:p-0 tw:text-xs tw:text-base-content/70! tw:min-[32rem]:grid-cols-2" }, od = { class: "tw:font-bold tw:text-base-content!" }, sd = { class: "tw:break-words" }, cd = /* @__PURE__ */ V({
	__name: "RecipientLegend",
	props: { items: {} },
	setup(e) {
		return (t, n) => e.items.length ? (K(), q("figcaption", id, [n[0] ||= J("span", { class: "tw:text-xs tw:font-semibold" }, "Selected recipients", -1), J("ol", ad, [(K(!0), q(W, null, Er(e.items, (e) => (K(), q("li", {
			key: e.actorId,
			class: "tw:min-w-0"
		}, [J("span", od, O(e.index) + ".", 1), J("span", sd, O(e.text), 1)]))), 128))])])) : oa("", !0);
	}
}), ld = [
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], ud = ["cx", "cy"], dd = ["cx", "cy"], fd = /* @__PURE__ */ V({
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
		return (t, r) => (K(), q("g", {
			class: "tw:cursor-grab tw:text-secondary!",
			role: "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= Mo((e) => n("pointerdown", e), ["stop"])
		}, [J("circle", {
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "8",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18"
		}, null, 8, ud), J("circle", {
			class: "tw:text-base-100!",
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "3"
		}, null, 8, dd)], 40, ld));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/drag.ts
function pd(e, t) {
	let n = /* @__PURE__ */ Qt();
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
function md(e, t) {
	let n = Q(() => Cu(e.gapForMaximumAward, e.maximumAward, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = pd(() => ({ ...n.value }), _), s = Q(() => r.value?.snapshot ?? n.value), c = Q(() => Tu({
		awards: e.awards,
		bounds: s.value,
		curveExponent: e.curveExponent,
		gapForMaximumAward: e.gapForMaximumAward,
		maximumAward: e.maximumAward,
		samples: e.samples
	})), l = Q(() => s.value.maximumGap), u = Q(() => c.value.points), d = Q(() => c.value.recipientLegend), f = Q(() => c.value.recipientPoints), p = Q(() => c.value.referencePoint), m = Q(() => c.value.shapePoint);
	function h(e) {
		return Mu(e, s.value.maximumGap);
	}
	function g(e) {
		return Nu(e, s.value.maximumValue);
	}
	function _(n, r) {
		let i = Du(n.kind, Lu(n.svg, r), n.snapshot, e.maximumAward);
		if (i.kind === "reference") {
			t("update:gapForMaximumAward", i.gapForMaximumAward), t("update:maximumAward", i.maximumAward);
			return;
		}
		t("update:curveExponent", i.curveExponent);
	}
	function v(n) {
		let r = ku(n.key, e.gapForMaximumAward, e.maximumAward);
		r && (n.preventDefault(), r.gapForMaximumAward !== void 0 && t("update:gapForMaximumAward", r.gapForMaximumAward), r.maximumAward !== void 0 && t("update:maximumAward", r.maximumAward));
	}
	function y(n) {
		let r = Au(n.key, e.curveExponent, .1, 5);
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
var hd = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-catch-up-graph-heading"
}, gd = [
	"x1",
	"x2",
	"y1",
	"y2"
], _d = ["x", "y"], vd = /* @__PURE__ */ V({
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
		let { beginDrag: n, endDrag: r, maximumGap: i, points: a, recipientLegend: o, recipientPoints: s, referencePoint: c, shapePoint: l, toGraphX: u, toGraphY: d, updateDrag: f, updateReferenceWithKeyboard: p, updateShapeWithKeyboard: m } = md(e, t);
		return (t, h) => (K(), q("figure", hd, [
			h[2] ||= J("div", { class: "tw:mb-2" }, [J("h4", {
				id: "xp-catch-up-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Initial catch-up value by XP gap "), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to set the reference gap and hard limit. Drag the round point to shape the curve. ")], -1),
			Y($u, {
				description: "The horizontal axis is the recipient's gap below the selected XP leader. The vertical axis is the initial catch-up value before recipient decay, companion rate, and the final hard limit. Numbered markers identify selected recipients.",
				"description-id": "xp-catch-up-graph-description",
				markers: L(s),
				"maximum-x-label": `${Math.round(L(i))} XP`,
				"minimum-y-label": "0",
				points: L(a),
				title: "Editable catch-up XP curve",
				"title-id": "xp-catch-up-graph-title",
				"vertical-guide-x": L(u)(e.gapForMaximumAward),
				"x-axis-label": "Gap below selected XP leader",
				"y-axis-label": "Initial catch-up XP",
				onPointercancel: L(r),
				onPointermove: L(f),
				onPointerup: L(r)
			}, {
				guides: Bn(() => [J("line", {
					class: "tw:text-warning",
					x1: L(68),
					x2: L(68) + L(472),
					y1: L(d)(e.maximumAward),
					y2: L(d)(e.maximumAward),
					stroke: "currentColor",
					"stroke-dasharray": "6 5"
				}, null, 8, gd)]),
				handles: Bn(() => [Y(fd, {
					"aria-label": "Catch-up curve shape",
					"aria-value-max": 5,
					"aria-value-min": .1,
					"aria-value-now": e.curveExponent,
					"aria-value-text": `Exponent ${e.curveExponent}`,
					x: L(l).x,
					y: L(l).y,
					onKeydown: L(m),
					onPointerdown: h[0] ||= (e) => L(n)("shape", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), Y(rd, {
					"aria-label": `Reference point: ${e.gapForMaximumAward} XP gap and ${e.maximumAward} XP hard limit. Use left and right arrows for the gap, up and down arrows for the hard limit.`,
					role: "button",
					x: L(c).x,
					y: L(c).y,
					onKeydown: L(p),
					onPointerdown: h[1] ||= (e) => L(n)("reference", e)
				}, null, 8, [
					"aria-label",
					"x",
					"y",
					"onKeydown"
				])]),
				labels: Bn(() => [J("text", {
					class: "tw:text-warning",
					x: L(68) + 7,
					y: Math.max(L(24) + 12, L(d)(e.maximumAward) - 7),
					fill: "currentColor",
					"font-size": "11",
					"font-weight": "600"
				}, " Hard limit " + O(e.maximumAward) + " XP ", 9, _d)]),
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
			Y(cd, { items: L(o) }, null, 8, ["items"])
		]));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/useDecayGraph.ts
function yd(e, t) {
	let n = Q(() => wu(e.scalePivot, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = pd(() => ({ ...n.value }), g), s = Q(() => r.value?.snapshot ?? n.value), c = Q(() => Eu({
		awards: e.awards,
		bounds: s.value,
		samples: e.samples,
		scaleExponent: e.scaleExponent,
		scalePivot: e.scalePivot
	})), l = Q(() => s.value.maximumRecipientXp), u = Q(() => c.value.points), d = Q(() => c.value.pivotPoint), f = Q(() => c.value.recipientLegend), p = Q(() => c.value.recipientPoints), m = Q(() => c.value.strengthPoint);
	function h(e) {
		return Mu(e, s.value.maximumRecipientXp);
	}
	function g(e, n) {
		let r = Ou(e.kind, Lu(e.svg, n), e.snapshot);
		if (r.kind === "pivot") {
			t("update:scalePivot", r.scalePivot);
			return;
		}
		t("update:scaleExponent", r.scaleExponent);
	}
	function _(n) {
		let r = ju(n.key, e.scalePivot);
		r !== void 0 && (n.preventDefault(), t("update:scalePivot", r));
	}
	function v(n) {
		let r = Au(n.key, e.scaleExponent, 0, 2);
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
var bd = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-decay-graph-heading"
}, xd = /* @__PURE__ */ V({
	__name: "XpDecayGraph",
	props: {
		awards: {},
		samples: {},
		scaleExponent: {},
		scalePivot: {}
	},
	emits: ["update:scaleExponent", "update:scalePivot"],
	setup(e, { emit: t }) {
		let { beginDrag: n, endDrag: r, maximumRecipientXp: i, pivotPoint: a, points: o, recipientLegend: s, recipientPoints: c, strengthPoint: l, toGraphX: u, updateDrag: d, updatePivotWithKeyboard: f, updateStrengthWithKeyboard: p } = yd(e, t);
		return (t, m) => (K(), q("figure", bd, [
			m[2] ||= J("div", { class: "tw:mb-2" }, [J("h4", {
				id: "xp-decay-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Catch-up strength by recipient total XP "), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to choose where decay begins. Drag the round point to make decay gentler or stronger. ")], -1),
			Y($u, {
				description: "The horizontal axis is each recipient's own total XP. The vertical axis is the multiplier applied to that recipient's initial catch-up value. Numbered markers identify selected recipients.",
				"description-id": "xp-decay-graph-description",
				markers: L(c),
				"maximum-x-label": `${Math.round(L(i))} XP`,
				"maximum-y-label": "100%",
				"minimum-y-label": "0%",
				points: L(o),
				title: "Editable recipient XP decay curve",
				"title-id": "xp-decay-graph-title",
				"vertical-guide-x": L(u)(e.scalePivot),
				"x-axis-label": "Recipient total XP",
				"y-axis-label": "Decay multiplier",
				onPointercancel: L(r),
				onPointermove: L(d),
				onPointerup: L(r)
			}, {
				handles: Bn(() => [Y(fd, {
					"aria-label": "Recipient decay strength",
					"aria-value-max": 2,
					"aria-value-min": 0,
					"aria-value-now": e.scaleExponent,
					"aria-value-text": `Decay exponent ${e.scaleExponent}`,
					x: L(l).x,
					y: L(l).y,
					onKeydown: L(p),
					onPointerdown: m[0] ||= (e) => L(n)("strength", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), Y(rd, {
					"aria-label": "Recipient total XP where decay begins",
					"aria-value-max": Math.round(L(i)),
					"aria-value-min": 1,
					"aria-value-now": e.scalePivot,
					"aria-value-text": `${e.scalePivot} total XP`,
					x: L(a).x,
					y: L(a).y,
					onKeydown: L(f),
					onPointerdown: m[1] ||= (e) => L(n)("pivot", e)
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
			Y(cd, { items: L(s) }, null, 8, ["items"])
		]));
	}
}), Sd = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "curve-settings-title"
}, Cd = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, wd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[66rem]:grid-cols-2" }, Td = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, Ed = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, Dd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, Od = { class: "dui-fieldset tw:min-w-0" }, kd = { class: "dui-fieldset tw:min-w-0" }, Ad = { class: "dui-fieldset tw:min-w-0" }, jd = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, Md = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, Nd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, Pd = { class: "dui-fieldset tw:min-w-0" }, Fd = { class: "dui-fieldset tw:min-w-0" }, Id = { class: "dui-fieldset tw:min-w-0" }, Ld = /* @__PURE__ */ V({
	__name: "XpCurveConfiguration",
	props: /*@__PURE__*/ Pr({
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
		let t = $r(e, "companionMultiplier"), n = $r(e, "curveExponent"), r = $r(e, "gapForMaximumAward"), i = $r(e, "maximumAward"), a = $r(e, "scaleExponent"), o = $r(e, "scalePivot");
		return (s, c) => (K(), q("section", Sd, [J("div", Cd, [
			c[31] ||= J("div", null, [J("h2", {
				id: "curve-settings-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " How awards are calculated "), J("p", { class: "tw:m-0 tw:max-w-3xl tw:text-xs tw:text-base-content/65!" }, " The graphs and number fields are two controls for the same settings. Drag either curve and its fields update immediately. ")], -1),
			J("div", wd, [J("article", Td, [J("div", Ed, [
				c[20] ||= J("div", null, [J("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 1. Catch-up curve "), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This curve converts the XP gap below the selected leader into an initial XP value. ")], -1),
				J("div", Dd, [
					J("fieldset", Od, [
						c[11] ||= J("legend", { class: "dui-fieldset-legend" }, "Hard limit", -1),
						c[12] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-maximum-award"
						}, " Maximum final award ", -1),
						B(J("input", {
							id: "xp-maximum-award",
							"onUpdate:modelValue": c[0] ||= (e) => i.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "0",
							step: "1",
							type: "number"
						}, null, 512), [[
							Co,
							i.value,
							void 0,
							{ number: !0 }
						]]),
						c[13] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Applied last; no recipient can receive more. ", -1)
					]),
					J("fieldset", kd, [
						c[14] ||= J("legend", { class: "dui-fieldset-legend" }, "Reference gap", -1),
						c[15] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-gap-for-cap"
						}, " Gap equal to the hard limit ", -1),
						B(J("input", {
							id: "xp-gap-for-cap",
							"onUpdate:modelValue": c[1] ||= (e) => r.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "1",
							type: "number"
						}, null, 512), [[
							Co,
							r.value,
							void 0,
							{ number: !0 }
						]]),
						c[16] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " At this gap, initial catch-up equals the limit before decay. ", -1)
					]),
					J("fieldset", Ad, [
						c[17] ||= J("legend", { class: "dui-fieldset-legend" }, "Curve shape", -1),
						c[18] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-curve-exponent"
						}, " Catch-up exponent ", -1),
						B(J("input", {
							id: "xp-curve-exponent",
							"onUpdate:modelValue": c[2] ||= (e) => n.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "5",
							min: "0.1",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							Co,
							n.value,
							void 0,
							{ number: !0 }
						]]),
						c[19] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Below 1 helps small gaps sooner; above 1 favors large gaps. ", -1)
					])
				]),
				Y(vd, {
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
			])]), J("article", jd, [J("div", Md, [
				c[30] ||= J("div", null, [J("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 2. Recipient decay curve "), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " High-XP builds depend less on raw XP differences. This multiplier is evaluated separately for every recipient. ")], -1),
				J("div", Nd, [
					J("fieldset", Pd, [
						c[21] ||= J("legend", { class: "dui-fieldset-legend" }, "Decay start", -1),
						c[22] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-pivot"
						}, " Full-strength recipient XP ", -1),
						B(J("input", {
							id: "xp-scale-pivot",
							"onUpdate:modelValue": c[6] ||= (e) => o.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "100",
							type: "number"
						}, null, 512), [[
							Co,
							o.value,
							void 0,
							{ number: !0 }
						]]),
						c[23] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Recipients at or below this total keep 100% strength. ", -1)
					]),
					J("fieldset", Fd, [
						c[24] ||= J("legend", { class: "dui-fieldset-legend" }, "Decay strength", -1),
						c[25] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-exponent"
						}, " Recipient decay exponent ", -1),
						B(J("input", {
							id: "xp-scale-exponent",
							"onUpdate:modelValue": c[7] ||= (e) => a.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "2",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							Co,
							a.value,
							void 0,
							{ number: !0 }
						]]),
						c[26] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Zero disables decay; higher values weaken catch-up faster. ", -1)
					]),
					J("fieldset", Id, [
						c[27] ||= J("legend", { class: "dui-fieldset-legend" }, "Companion rate", -1),
						c[28] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-companion-rate"
						}, " Companion multiplier ", -1),
						B(J("input", {
							id: "xp-companion-rate",
							"onUpdate:modelValue": c[8] ||= (e) => t.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "1",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							Co,
							t.value,
							void 0,
							{ number: !0 }
						]]),
						c[29] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " 0.5 gives player-owned companions half the calculated XP. ", -1)
					])
				]),
				Y(xd, {
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
			c[32] ||= J("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [J("i", {
				class: "fa-solid fa-calculator",
				"aria-hidden": "true"
			}), J("span", { class: "tw:min-w-0 tw:break-words" }, [
				X(" Initial catch-up = hard limit × (leader gap ÷ reference gap)"),
				J("sup", null, "shape"),
				X(". Final XP = min(hard limit, initial catch-up × recipient decay × companion rate). ")
			])], -1)
		])]));
	}
}), Rd = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipient-defaults-title"
}, zd = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, Bd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-4 tw:min-[42rem]:grid-cols-2" }, Vd = { class: "dui-fieldset tw:min-w-0" }, Hd = { class: "dui-fieldset tw:min-w-0" }, Ud = { class: "dui-label tw:cursor-pointer tw:items-start tw:justify-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Wd = { class: "dui-fieldset tw:col-span-full tw:min-w-0" }, Gd = /* @__PURE__ */ V({
	__name: "XpRecipientDefaults",
	props: {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {},
		defaultSelection: { required: !0 },
		defaultSelectionModifiers: {},
		useGmToolkitDefaults: {
			type: Boolean,
			required: !0
		},
		useGmToolkitDefaultsModifiers: {}
	},
	emits: [
		"update:defaultReason",
		"update:defaultSelection",
		"update:useGmToolkitDefaults"
	],
	setup(e) {
		let t = $r(e, "defaultReason"), n = $r(e, "defaultSelection"), r = $r(e, "useGmToolkitDefaults");
		return (e, i) => (K(), q("section", Rd, [J("div", zd, [i[13] ||= J("div", null, [J("h2", {
			id: "recipient-defaults-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipient and journal defaults "), J("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These values seed a newly opened console when no eligible tokens are targeted. ")], -1), J("div", Bd, [
			J("fieldset", Vd, [
				i[4] ||= J("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Default recipients", -1),
				i[5] ||= J("label", {
					class: "dui-label tw:whitespace-normal",
					for: "xp-default-selection"
				}, " When no tokens are targeted ", -1),
				B(J("select", {
					id: "xp-default-selection",
					"onUpdate:modelValue": i[0] ||= (e) => n.value = e,
					class: "dui-select dui-select-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!"
				}, [...i[3] ||= [
					J("option", { value: "party" }, "Party (assigned player characters)", -1),
					J("option", { value: "company" }, "Company (party plus companions)", -1),
					J("option", { value: "world" }, "World (every character actor)", -1)
				]], 512), [[Eo, n.value]]),
				i[6] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Explicit targets replace this choice. Selecting a local group disables GM Toolkit recipient defaults. ", -1)
			]),
			J("fieldset", Hd, [
				i[8] ||= J("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, " GM Toolkit compatibility ", -1),
				J("label", Ud, [B(J("input", {
					"onUpdate:modelValue": i[1] ||= (e) => r.value = e,
					class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
					type: "checkbox"
				}, null, 512), [[wo, r.value]]), i[7] ||= J("span", { class: "tw:min-w-0 tw:break-words" }, " Prefer compatible GM Toolkit session, reason, and recipient-group defaults ", -1)]),
				i[9] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Disable this to use the recipient choice and reason stored by Drowsy’s WFRP4e Toolkit. ", -1)
			]),
			J("fieldset", Wd, [
				i[10] ||= J("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Experience journal", -1),
				i[11] ||= J("label", {
					class: "dui-label tw:whitespace-normal",
					for: "xp-config-default-reason"
				}, " Default award reason ", -1),
				B(J("input", {
					id: "xp-config-default-reason",
					"onUpdate:modelValue": i[2] ||= (e) => t.value = e,
					class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
					type: "text"
				}, null, 512), [[Co, t.value]]),
				i[12] ||= J("p", { class: "dui-label tw:whitespace-normal" }, [
					X(" Supports the compatible "),
					J("code", null, "%session%"),
					X(" and "),
					J("code", null, "%date%"),
					X(" tokens. The award console can still edit the reason for one batch. ")
				], -1)
			])
		])])]));
	}
}), Kd = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, qd = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Jd = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, Yd = { class: "tw:min-w-0 tw:break-words" }, Xd = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, Zd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[54rem]:grid-cols-[minmax(15rem,0.72fr)_minmax(0,2fr)]" }, Qd = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "xp-launcher-settings"
}, $d = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, ef = { class: "dui-fieldset tw:gap-2" }, tf = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, nf = { class: "tw:mt-3 tw:min-w-0" }, rf = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[34rem]:flex-row tw:min-[34rem]:items-center tw:min-[34rem]:justify-between" }, af = ["disabled"], of = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, sf = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, cf = /* @__PURE__ */ V({
	__name: "XpCurveConfiguratorApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Su();
		n.initialize(t.initialization, t.actions);
		let { curveSamples: r, decaySamples: i, defaultReason: a, defaultSelection: o, errorMessage: s, isSaving: c, launchers: l, parameters: u, plan: d, statusMessage: f, useGmToolkitDefaults: p } = vs(n);
		return (e, t) => (K(), q("main", Kd, [
			Y(yc, {
				description: "Set launchers, recipient defaults, and the catch-up and decay curves used by new award consoles.",
				icon: "fa-solid fa-sliders",
				title: "XP Curve Configurator"
			}),
			J("div", qd, [
				L(s) ? (K(), q("div", Jd, [t[10] ||= J("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), J("span", Yd, O(L(s)), 1)])) : oa("", !0),
				L(f) ? (K(), q("div", Xd, [t[11] ||= J("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), J("span", null, O(L(f)), 1)])) : oa("", !0),
				J("div", Zd, [J("section", Qd, [J("div", $d, [
					t[14] ||= J("div", null, [J("h2", {
						id: "xp-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Client preferences for this browser and user. ")], -1),
					J("fieldset", ef, [t[13] ||= J("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1), J("label", tf, [B(J("input", {
						"onUpdate:modelValue": t[0] ||= (e) => L(l).tokenControls = e,
						class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
						type: "checkbox"
					}, null, 512), [[wo, L(l).tokenControls]]), t[12] ||= J("span", { class: "tw:min-w-0" }, [J("strong", { class: "tw:block" }, "Token Controls"), J("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the chart launcher in Token Controls. ")], -1)])]),
					t[15] ||= J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Launcher changes apply after a reload. Macros and the module API stay available. ", -1)
				])]), Y(Gd, {
					"default-reason": L(a),
					"onUpdate:defaultReason": t[1] ||= (e) => /* @__PURE__ */ F(a) ? a.value = e : null,
					"use-gm-toolkit-defaults": L(p),
					"onUpdate:useGmToolkitDefaults": t[2] ||= (e) => /* @__PURE__ */ F(p) ? p.value = e : null,
					"default-selection": L(o),
					"onUpdate:defaultSelection": L(n).setDefaultSelection
				}, null, 8, [
					"default-reason",
					"use-gm-toolkit-defaults",
					"default-selection",
					"onUpdate:defaultSelection"
				])]),
				J("div", nf, [Y(Ld, {
					"companion-multiplier": L(u).companionMultiplier,
					"onUpdate:companionMultiplier": t[3] ||= (e) => L(u).companionMultiplier = e,
					"curve-exponent": L(u).curveExponent,
					"onUpdate:curveExponent": t[4] ||= (e) => L(u).curveExponent = e,
					"gap-for-maximum-award": L(u).gapForMaximumAward,
					"onUpdate:gapForMaximumAward": t[5] ||= (e) => L(u).gapForMaximumAward = e,
					"maximum-award": L(u).maximumAward,
					"onUpdate:maximumAward": t[6] ||= (e) => L(u).maximumAward = e,
					"scale-exponent": L(u).scaleExponent,
					"onUpdate:scaleExponent": t[7] ||= (e) => L(u).scaleExponent = e,
					"scale-pivot": L(u).scalePivot,
					"onUpdate:scalePivot": t[8] ||= (e) => L(u).scalePivot = e,
					awards: L(d).awards,
					"decay-samples": L(i),
					samples: L(r)
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
			J("footer", rf, [t[17] ||= J("p", { class: "tw:m-0 tw:min-w-0 tw:text-xs tw:text-base-content/65!" }, " Saving configuration never awards XP. World defaults apply to the next console opening. ", -1), J("button", {
				class: "dui-btn dui-btn-primary tw:min-w-48 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: L(c),
				type: "button",
				onClick: t[9] ||= (...e) => L(n).saveConfiguration && L(n).saveConfiguration(...e)
			}, [L(c) ? (K(), q("span", of)) : (K(), q("i", sf)), t[16] ||= X(" Save configuration ", -1)], 8, af)])
		]));
	}
});
//#endregion
//#region src/functions/xp-curve/selection.ts
function lf(e) {
	let { assignedActorIds: t, candidates: n, defaultSelection: r, targetedActorIds: i } = e;
	return n.map((e) => {
		let n = uf(e, t);
		return {
			category: n,
			id: e.id,
			name: e.name,
			selected: i?.has(e.id) ?? df(e.id, n, r, t),
			totalXp: e.totalXp
		};
	}).sort(ff);
}
function uf(e, t) {
	return e.hasPlayerOwner && !t.has(e.id) ? "companion" : "standard";
}
function df(e, t, n, r) {
	return n === "world" ? !0 : n === "company" ? r.has(e) || t === "companion" : r.has(e);
}
function ff(e, t) {
	return e.selected === t.selected ? e.name.localeCompare(t.name) : e.selected ? -1 : 1;
}
//#endregion
//#region src/module/xp-curve/actors.ts
function pf(e) {
	let t = vf(), n = yf(), r = n === void 0 ? "default" : "targets";
	return {
		actors: lf({
			assignedActorIds: t,
			candidates: Array.from(game.actors).filter((e) => e.type === "character").map(hf),
			defaultSelection: e,
			targetedActorIds: n
		}),
		selectionSource: r
	};
}
function mf(e) {
	let t = vf();
	return e.map((e) => {
		let n = game.actors.get(e);
		if (!n || n.type !== "character") throw Error(`XP recipient ${e} is no longer an available character actor.`);
		return gf(n, uf(n, t), !0);
	});
}
function hf(e) {
	let t = _f(e);
	return {
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		name: e.name,
		totalXp: t.totalXp
	};
}
function gf(e, t, n) {
	let r = _f(e);
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
function _f(e) {
	let t = e.system;
	if (!bf(t)) throw Error(`WFRP4e actor "${e.name}" does not expose readable system data.`);
	let n = t.details, r = t.awardExp;
	if (!bf(n) || typeof r != "function") throw Error(`WFRP4e actor "${e.name}" does not expose XP award operations.`);
	let i = n.experience;
	if (!bf(i) || !Number.isFinite(Number(i.total))) throw Error(`WFRP4e actor "${e.name}" does not expose a numeric total XP value.`);
	return {
		awardExperience: async (e, n) => {
			await r.call(t, e, n, null, !0);
		},
		totalXp: Math.max(0, Math.round(Number(i.total)))
	};
}
function vf() {
	return new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => typeof e == "string"));
}
function yf() {
	if (!(!game.user.targets || game.user.targets.size === 0)) return new Set(Array.from(game.user.targets).map((e) => e.actor).filter((e) => e?.type === "character").map((e) => e.id));
}
function bf(e) {
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
	showTokenControlsLauncher: "showXpCurveTokenControlsLauncher",
	useGmToolkitDefaults: "xpCurveUseGmToolkitDefaults"
}, xf = {
	defaultReason: "addXPDefaultReason",
	defaultSelection: "defaultPartySessionTurnover",
	session: "sessionID"
};
function Sf() {
	let e = kf($.useGmToolkitDefaults), t = {
		defaultReason: jf($.defaultReason),
		defaultSelection: Mf($.defaultSelection),
		parameters: {
			companionMultiplier: Af($.companionMultiplier),
			curveExponent: Af($.curveExponent),
			gapForMaximumAward: Af($.gapForMaximumAward),
			maximumAward: Af($.maximumAward),
			scaleExponent: Af($.scaleExponent),
			scalePivot: Af($.scalePivot)
		},
		useGmToolkitDefaults: e
	};
	return !e || !Df() ? t : {
		...t,
		defaultReason: Nf(xf.defaultReason),
		defaultSelection: Pf()
	};
}
function Cf(e) {
	return !e || !Ef() || !Of(xf.session) ? "" : Nf(xf.session);
}
async function wf(e) {
	let n = [
		[$.companionMultiplier, e.parameters.companionMultiplier],
		[$.curveExponent, e.parameters.curveExponent],
		[$.defaultReason, e.defaultReason],
		[$.defaultSelection, e.defaultSelection],
		[$.gapForMaximumAward, e.parameters.gapForMaximumAward],
		[$.maximumAward, e.parameters.maximumAward],
		[$.scaleExponent, e.parameters.scaleExponent],
		[$.scalePivot, e.parameters.scalePivot],
		[$.useGmToolkitDefaults, e.useGmToolkitDefaults]
	];
	for (let [e, r] of n) await game.settings.set(t, e, r);
}
function Tf(e) {
	return kf(e);
}
function Ef() {
	return game.modules.get(r)?.active === !0;
}
function Df() {
	return Ef() && Of(xf.defaultReason) && Of(xf.defaultSelection);
}
function Of(e) {
	return game.settings.settings.has(`${r}.${e}`);
}
function kf(e) {
	return game.settings.get(t, e) === !0;
}
function Af(e) {
	return Number(game.settings.get(t, e));
}
function jf(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function Mf(e) {
	return Ff(jf(e));
}
function Nf(e) {
	let t = game.settings.get(r, e);
	return typeof t == "string" && t !== "null" ? t : "";
}
function Pf() {
	return Ff(Nf(xf.defaultSelection));
}
function Ff(e) {
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/xp-curve/configuration.ts
function If() {
	let e = Sf();
	return {
		...e,
		actors: pf(e.defaultSelection).actors,
		launchers: { tokenControls: Tf($.showTokenControlsLauncher) }
	};
}
async function Lf(e) {
	if (!game.user.isGM) throw Error("Only a GM can change the XP Curve Console configuration.");
	await wf({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: cl(e.parameters),
		useGmToolkitDefaults: e.useGmToolkitDefaults
	}), await game.settings.set(t, $.showTokenControlsLauncher, e.launchers.tokenControls), ui.notifications.info("XP Curve Console configuration saved.");
}
//#endregion
//#region src/module/apps/xp-curve-configurator/XpCurveConfiguratorApplication.ts
var Rf = class extends Rc {
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
		return cf;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: async (e) => {
				await Lf(e), await this.#e.onSaved?.();
			} },
			initialization: If()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-configurator/open.ts
async function zf(e = {}) {
	let t = new Rf(e);
	return await t.render(!0), t;
}
function Bf(e = {}) {
	zf(e).catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/module/xp-curve/initialization.ts
function Vf() {
	let e = Sf(), t = pf(e.defaultSelection);
	return {
		...e,
		...t,
		reasonContext: Hf(!0)
	};
}
function Hf(e) {
	return {
		date: game.world.nextSession?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		session: Cf(e)
	};
}
//#endregion
//#region src/module/xp-curve/service.ts
async function Uf(e) {
	if (!game.user.isGM) throw Error("Only a GM can award experience.");
	let t = mf(Array.from(new Set(e.actorIds))), n = cl(e.parameters), r = ll(t.map((e) => e.choice), n);
	if (r.awards.length < 2) throw Error("Select at least two character actors to calculate catch-up XP.");
	if (r.totalAward < 1) throw Error("This curve produces no XP awards for the selected actors.");
	await wf({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: n,
		useGmToolkitDefaults: e.useGmToolkitDefaults
	});
	let i = gl(e.defaultReason, Hf(e.useGmToolkitDefaults)), a = [];
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
	return await Wf(o), ui.notifications.info(`Awarded ${o.totalAward} total XP across ${a.length} actors.`), o;
}
async function Wf(e) {
	let t = e.awards.filter((e) => e.award > 0).map((e) => `<li><strong>${_l(e.actorName)}</strong>: +${e.award} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Curve Award</h2><p>${_l(e.reason)}</p><ul>${t}</ul><p><strong>${e.totalAward} XP awarded in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
//#endregion
//#region src/module/apps/xp-curve-console/XpCurveConsoleApplication.ts
var Gf = class extends Rc {
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
		return xu;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: Uf,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Curve Console.`, e), ui.notifications.error("XP awards completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				},
				openConfigurator: () => {
					Bf({ onSaved: () => this.render(!0) });
				}
			},
			initialization: Vf()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-console/open.ts
async function Kf() {
	let e = new Gf();
	return await e.render(!0), e;
}
function qf() {
	Kf().catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Console. See the browser console for details.");
	});
}
//#endregion
//#region src/module/api/create-module-api.ts
function Jf() {
	return {
		applyToSelectedActors: Xc,
		awardXpCurve: Uf,
		copyLink: Qc,
		openFearConsole: il,
		openXpCurveConsole: Kf,
		openWorkbench: il,
		postPrompt: Zc,
		postSummaryPrompt: $c
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function Yf() {
	let e = game.modules.get(t);
	if (!e) throw Error(`Foundry module registry entry was not found for ${t}.`);
	e.api = Jf();
}
//#endregion
//#region src/module/fear-terror/actor-sheet/register.ts
var Xf = "openFearConsole", Zf = "wfrp4e-enhanced-fear-terror-actor-header", Qf = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], $f = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function ep() {
	if (Fc(Pc.actorSheet)) {
		for (let e of Qf) Hooks.on(e, (e, t) => {
			tp(e, t);
		});
		for (let e of $f) Hooks.on(e, (e) => {
			np(e);
		});
	}
}
function tp(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === Xf) || (t.push({
		action: Xf,
		icon: "fa-solid fa-skull",
		label: "Fear Console"
	}), e.options.actions ??= {}, e.options.actions[Xf] = function() {
		rp(this.document);
	}));
}
function np(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${Zf}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(Zf, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = Xf, i.dataset.tooltip = "Fear Console", i.ariaLabel = "Open Drowsy’s WFRP4e Toolkit Fear Console", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), rp(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function rp(e) {
	try {
		al({ initialPayload: Wc(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not read this actor. See the browser console for details.");
	}
}
//#endregion
//#region src/functions/scene-controls/toolclip.ts
function ip(e, t) {
	return {
		heading: e,
		items: [{ paragraph: t }]
	};
}
//#endregion
//#region src/module/fear-terror/scene-controls/register.ts
var ap = "openFearConsole";
function op() {
	Fc(Pc.tokenControls) && Hooks.on("getSceneControlButtons", (e) => {
		sp(e);
	});
}
function sp(t) {
	let n = t.tokens;
	n && (n.tools[ap] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: ap,
		onChange: () => {
			al();
		},
		order: 99,
		title: "Fear Console",
		toolclip: ip("Fear Console", `${e}.SceneControls.OpenFearConsole`)
	});
}
//#endregion
//#region src/module/settings/register.ts
function cp(n, r) {
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
//#endregion
//#region src/module/fear-terror/settings/register.ts
function lp() {
	cp(Pc.tokenControls, "TokenControlsLauncher"), cp(Pc.actorSheet, "ActorSheetLauncher"), game.settings.registerMenu(t, "fearConsole", {
		hint: `${e}.Menu.FearConsoleConfigurator.Hint`,
		icon: "fa-solid fa-gears",
		label: `${e}.Menu.FearConsoleConfigurator.Label`,
		name: `${e}.Menu.FearConsoleConfigurator.Name`,
		restricted: !0,
		type: zc
	});
}
//#endregion
//#region src/module/xp-curve/scene-controls/register.ts
var up = "openXpCurveConsole";
function dp() {
	Tf($.showTokenControlsLauncher) && Hooks.on("getSceneControlButtons", (t) => {
		let n = t.tokens;
		n && (n.tools[up] = {
			button: !0,
			icon: "fa-solid fa-chart-line",
			name: up,
			onChange: qf,
			order: 98,
			title: "XP Curve Console",
			toolclip: ip("XP Curve Console", `${e}.SceneControls.OpenXpCurveConsole`)
		});
	});
}
//#endregion
//#region src/module/xp-curve/settings/register.ts
function fp() {
	cp($.showTokenControlsLauncher, "XpCurveTokenControlsLauncher"), pp($.maximumAward, 500, Number, "MaximumAward", { range: {
		max: 1e5,
		min: 0,
		step: 1
	} }), pp($.gapForMaximumAward, 1e3, Number, "GapForMaximumAward", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), pp($.curveExponent, .75, Number, "CurveExponent", { range: {
		max: 5,
		min: .1,
		step: .05
	} }), pp($.scalePivot, 5e3, Number, "ScalePivot", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), pp($.scaleExponent, .5, Number, "ScaleExponent", { range: {
		max: 2,
		min: 0,
		step: .05
	} }), pp($.companionMultiplier, .5, Number, "CompanionMultiplier", { range: {
		max: 1,
		min: 0,
		step: .05
	} }), pp($.defaultReason, "XP curve catch-up (%date%)", String, "DefaultReason"), pp($.defaultSelection, "party", String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpCurve.DefaultSelection.Company`,
		party: `${e}.Settings.XpCurve.DefaultSelection.Party`,
		world: `${e}.Settings.XpCurve.DefaultSelection.World`
	} }), pp($.useGmToolkitDefaults, !0, Boolean, "UseGmToolkitDefaults"), game.settings.registerMenu(t, "xpCurveConsole", {
		hint: `${e}.Menu.XpCurveConfigurator.Hint`,
		icon: "fa-solid fa-sliders",
		label: `${e}.Menu.XpCurveConfigurator.Label`,
		name: `${e}.Menu.XpCurveConfigurator.Name`,
		restricted: !0,
		type: Rf
	});
}
function pp(n, r, i, a, o = {}) {
	game.settings.register(t, n, {
		...o,
		config: !1,
		default: r,
		hint: `${e}.Settings.XpCurve.${a}.Hint`,
		name: `${e}.Settings.XpCurve.${a}.Name`,
		scope: "world",
		type: i
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function mp() {
	Hooks.once("init", () => {
		console.info(`${t} | Initializing`), lp(), fp(), ep(), op(), dp();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${t} | Loaded outside ${i}; skipping module API registration.`);
			return;
		}
		Yf(), console.info(`${t} | Ready`);
	});
}
//#endregion
//#region src/main.ts
mp();
//#endregion

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map