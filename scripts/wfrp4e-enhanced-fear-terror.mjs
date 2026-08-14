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
	let t = /* @__PURE__ */ M(e);
	return t === e ? t : (j(t, "iterate", st), /* @__PURE__ */ Yt(e) ? t : t.map(Qt));
}
function dt(e) {
	return j(e = /* @__PURE__ */ M(e), "iterate", st), e;
}
function ft(e, t) {
	return /* @__PURE__ */ Jt(e) ? $t(/* @__PURE__ */ qt(e) ? Qt(t) : t) : Qt(t);
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
	return r !== e && !/* @__PURE__ */ Yt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ht = Array.prototype;
function gt(e, t, n, r, i, a) {
	let o = dt(e), s = o !== e && !/* @__PURE__ */ Yt(e), c = o[t];
	if (c !== ht[t]) {
		let t = c.apply(e, a);
		return s ? Qt(t) : t;
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
	let i = dt(e), a = i !== e && !/* @__PURE__ */ Yt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ft(e, t)), n.call(this, t, ft(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ft(e, c) : c;
}
function vt(e, t, n) {
	let r = /* @__PURE__ */ M(e);
	j(r, "iterate", st);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Xt(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), r[t](...n)) : i;
}
function yt(e, t, n = []) {
	Ze(), Ve();
	let r = (/* @__PURE__ */ M(e))[t].apply(e, n);
	return He(), Qe(), r;
}
var bt = /* @__PURE__ */ a("__proto__,__v_isRef,__isVue"), xt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(S));
function St(e) {
	S(e) || (e = String(e));
	let t = /* @__PURE__ */ M(this);
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
		let o = Reflect.get(e, t, /* @__PURE__ */ N(e) ? e : n);
		if ((S(t) ? xt.has(t) : bt(t)) || (r || j(e, "get", t), i)) return o;
		if (/* @__PURE__ */ N(o)) {
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
			if (!/* @__PURE__ */ Yt(n) && !/* @__PURE__ */ Jt(n) && (i = /* @__PURE__ */ M(i), n = /* @__PURE__ */ M(n)), !a && /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : h(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ N(e) ? e : r);
		return e === /* @__PURE__ */ M(r) && (o ? E(n, i) && ct(e, "set", t, n, i) : ct(e, "add", t, n)), s;
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
		let i = this.__v_raw, a = /* @__PURE__ */ M(i), o = _(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? kt : t ? $t : Qt;
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
			let r = this.__v_raw, i = /* @__PURE__ */ M(r), a = /* @__PURE__ */ M(n);
			e || (E(n, a) && j(i, "get", n), j(i, "get", a));
			let { has: o } = At(i), s = t ? kt : e ? $t : Qt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && j(/* @__PURE__ */ M(t), "iterate", at), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ M(n), i = /* @__PURE__ */ M(t);
			return e || (E(t, i) && j(r, "has", t), j(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ M(a), s = t ? kt : e ? $t : Qt;
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
			let n = /* @__PURE__ */ M(this), r = At(n), i = /* @__PURE__ */ M(e), a = !t && !/* @__PURE__ */ Yt(e) && !/* @__PURE__ */ Jt(e) ? i : e;
			return r.has.call(n, a) || E(e, a) && r.has.call(n, e) || E(i, a) && r.has.call(n, i) || (n.add(a), ct(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Yt(n) && !/* @__PURE__ */ Jt(n) && (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = At(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? E(n, s) && ct(r, "set", e, n, s) : ct(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ M(this), { has: n, get: r } = At(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ M(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ct(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ M(this), t = e.size !== 0, n = e.clear();
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
function Yt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ M(t) : e;
}
function Zt(e) {
	return !h(e, "__v_skip") && Object.isExtensible(e) && pe(e, "__v_skip", !0), e;
}
var Qt = (e) => C(e) ? /* @__PURE__ */ Ut(e) : e, $t = (e) => C(e) ? /* @__PURE__ */ Gt(e) : e;
// @__NO_SIDE_EFFECTS__
function N(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return tn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return tn(e, !0);
}
function tn(e, t) {
	return /* @__PURE__ */ N(e) ? e : new nn(e, t);
}
var nn = class {
	constructor(e, t) {
		this.dep = new nt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ M(e), this._value = t ? e : Qt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Yt(e) || /* @__PURE__ */ Jt(e);
		e = n ? e : /* @__PURE__ */ M(e), E(e, t) && (this._rawValue = e, this._value = n ? e : Qt(e), this.dep.trigger());
	}
};
function F(e) {
	return /* @__PURE__ */ N(e) ? e.value : e;
}
var rn = {
	get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function an(e) {
	return /* @__PURE__ */ qt(e) ? e : new Proxy(e, rn);
}
var on = class {
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
function sn(e) {
	return new on(e);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
	let t = g(e) ? Array(e.length) : {};
	for (let n in e) t[n] = fn(e, n);
	return t;
}
var ln = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = S(t) ? t : String(t), this._raw = /* @__PURE__ */ M(e);
		let r = !0, i = e;
		if (!g(e) || S(this._key) || !ae(this._key)) do
			r = !/* @__PURE__ */ Xt(i) || /* @__PURE__ */ Yt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = F(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ N(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ N(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return lt(this._raw, this._key);
	}
}, un = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function dn(e, t, n) {
	return /* @__PURE__ */ N(e) ? e : b(e) ? new un(e) : C(e) && arguments.length > 1 ? fn(e, t, n) : /* @__PURE__ */ P(e);
}
function fn(e, t, n) {
	return new ln(e, t, n);
}
var pn = class {
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
function mn(e, t, n = !1) {
	let r, i;
	return b(e) ? r = e : (r = e.get, i = e.set), new pn(r, i, n);
}
var hn = {}, gn = /* @__PURE__ */ new WeakMap(), _n = void 0;
function vn(e, t = !1, n = _n) {
	if (n) {
		let t = gn.get(n);
		t || gn.set(n, t = []), t.push(e);
	}
}
function yn(e, t, n = o) {
	let { immediate: r, deep: i, once: a, scheduler: s, augmentJob: l, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ Yt(e) || i === !1 || i === 0 ? bn(e, 1) : bn(e), f, m, h, _, v = !1, y = !1;
	if (/* @__PURE__ */ N(e) ? (m = () => e.value, v = /* @__PURE__ */ Yt(e)) : /* @__PURE__ */ qt(e) ? (m = () => d(e), v = !0) : g(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ qt(e) || /* @__PURE__ */ Yt(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ N(e)) return e.value;
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
		let t = _n;
		_n = f;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			_n = t;
		}
	} : c, t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => bn(e(), t);
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
	let C = y ? Array(e.length).fill(hn) : hn, ee = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let n = f.run();
			if (e || i || v || (y ? n.some((e, t) => E(e, C[t])) : E(n, C))) {
				h && h();
				let e = _n;
				_n = f;
				try {
					let e = [
						n,
						C === hn ? void 0 : y && C[0] === hn ? [] : C,
						_
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					_n = e;
				}
			}
		} else f.run();
	};
	return l && l(ee), f = new Ie(m), f.scheduler = s ? () => s(ee, !1) : ee, _ = (e) => vn(e, !1, f), h = f.onStop = () => {
		let e = gn.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			gn.delete(f);
		}
	}, t ? r ? ee(!0) : C = f.run() : s ? s(ee.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function bn(e, t = Infinity, n) {
	if (t <= 0 || !C(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ N(e)) bn(e.value, t, n);
	else if (g(e)) for (let r = 0; r < e.length; r++) bn(e[r], t, n);
	else if (v(e) || _(e)) e.forEach((e) => {
		bn(e, t, n);
	});
	else if (ie(e)) {
		for (let r in e) bn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && bn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function xn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Cn(e, t, n);
	}
}
function Sn(e, t, n, r) {
	if (b(e)) {
		let i = xn(e, t, n, r);
		return i && ee(i) && i.catch((e) => {
			Cn(e, t, n);
		}), i;
	}
	if (g(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Sn(e[a], t, n, r));
		return i;
	}
}
function Cn(e, t, n, r = !0) {
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
			Ze(), xn(a, null, 10, [
				e,
				i,
				o
			]), Qe();
			return;
		}
	}
	wn(e, n, i, r, s);
}
function wn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var I = [], Tn = -1, En = [], Dn = null, On = 0, kn = /* @__PURE__ */ Promise.resolve(), An = null;
function jn(e) {
	let t = An || kn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mn(e) {
	let t = Tn + 1, n = I.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = I[r], a = Rn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Nn(e) {
	if (!(e.flags & 1)) {
		let t = Rn(e), n = I[I.length - 1];
		!n || !(e.flags & 2) && t >= Rn(n) ? I.push(e) : I.splice(Mn(t), 0, e), e.flags |= 1, Pn();
	}
}
function Pn() {
	An ||= kn.then(zn);
}
function Fn(e) {
	g(e) ? En.push(...e) : Dn && e.id === -1 ? Dn.splice(On + 1, 0, e) : e.flags & 1 || (En.push(e), e.flags |= 1), Pn();
}
function In(e, t, n = Tn + 1) {
	for (; n < I.length; n++) {
		let t = I[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			I.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Ln(e) {
	if (En.length) {
		let e = [...new Set(En)].sort((e, t) => Rn(e) - Rn(t));
		if (En.length = 0, Dn) {
			Dn.push(...e);
			return;
		}
		for (Dn = e, On = 0; On < Dn.length; On++) {
			let e = Dn[On];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Dn = null, On = 0;
	}
}
var Rn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function zn(e) {
	try {
		for (Tn = 0; Tn < I.length; Tn++) {
			let e = I[Tn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), xn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Tn < I.length; Tn++) {
			let e = I[Tn];
			e && (e.flags &= -2);
		}
		Tn = -1, I.length = 0, Ln(e), An = null, (I.length || En.length) && zn(e);
	}
}
var L = null, Bn = null;
function Vn(e) {
	let t = L;
	return L = e, Bn = e && e.type.__scopeId || null, t;
}
function Hn(e, t = L, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && $i(-1);
		let i = Vn(t), a;
		try {
			a = e(...n);
		} finally {
			Vn(i), r._d && $i(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function R(e, t) {
	if (L === null) return e;
	let n = Na(L), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, s, c = o] = t[e];
		i && (b(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && bn(a), r.push({
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
function Un(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ze(), Sn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Qe());
	}
}
function Wn(e, t) {
	if (J) {
		let n = J.provides, r = J.parent && J.parent.provides;
		r === n && (n = J.provides = Object.create(r)), n[e] = t;
	}
}
function Gn(e, t, n = !1) {
	let r = va();
	if (r || ei) {
		let i = ei ? ei._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && b(t) ? t.call(r && r.proxy) : t;
	}
}
function Kn() {
	return !!(va() || ei);
}
var qn = /* @__PURE__ */ Symbol.for("v-scx"), Jn = () => Gn(qn);
function Yn(e, t) {
	return Zn(e, null, { flush: "sync" });
}
function Xn(e, t, n) {
	return Zn(e, t, n);
}
function Zn(e, t, n = o) {
	let { immediate: r, deep: i, flush: a, once: s } = n, l = f({}, n), u = t && r || !t && a !== "post", d;
	if (wa) {
		if (a === "sync") {
			let e = Jn();
			d = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = c, e.resume = c, e.pause = c, e;
		}
	}
	let p = J;
	l.call = (e, t, n) => Sn(e, p, t, n);
	let m = !1;
	a === "post" ? l.scheduler = (e) => {
		Ni(e, p && p.suspense);
	} : a !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : Nn(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = yn(e, t, l);
	return wa && (d ? d.push(h) : u && h()), h;
}
function Qn(e, t, n) {
	let r = this.proxy, i = x(e) ? e.includes(".") ? $n(r, e) : () => r[e] : e.bind(r, r), a;
	b(t) ? a = t : (a = t.handler, n = t);
	let o = xa(this), s = Zn(i, a.bind(r), n);
	return o(), s;
}
function $n(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var er = /* @__PURE__ */ Symbol("_vte"), tr = (e) => e.__isTeleport, nr = /* @__PURE__ */ Symbol("_leaveCb");
function rr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, rr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
	return b(e) ? /* @__PURE__ */ f({ name: e.name }, t, { setup: e }) : e;
}
function ir(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function ar(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var or = /* @__PURE__ */ new WeakMap();
function sr(e, t, n, r, i = !1) {
	if (g(e)) {
		e.forEach((e, a) => sr(e, t && (g(t) ? t[a] : t), n, r, i));
		return;
	}
	if (lr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && sr(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? Na(r.component) : r.el, s = i ? null : a, { i: c, r: u } = e, d = t && t.r, f = c.refs === o ? c.refs = {} : c.refs, m = c.setupState, _ = /* @__PURE__ */ M(m), v = m === o ? l : (e) => ar(f, e) ? !1 : h(_, e), y = (e, t) => !(t && ar(f, t));
	if (d != null && d !== u) {
		if (cr(t), x(d)) f[d] = null, v(d) && (m[d] = null);
		else if (/* @__PURE__ */ N(d)) {
			let e = t;
			y(d, e.k) && (d.value = null), e.k && (f[e.k] = null);
		}
	}
	if (b(u)) xn(u, c, 12, [s, f]);
	else {
		let t = x(u), r = /* @__PURE__ */ N(u);
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
					o(), or.delete(e);
				};
				t.id = -1, or.set(e, t), Ni(t, n);
			} else cr(e), o();
		}
	}
}
function cr(e) {
	let t = or.get(e);
	t && (t.flags |= 8, or.delete(e));
}
ge().requestIdleCallback, ge().cancelIdleCallback;
var lr = (e) => !!e.type.__asyncLoader, ur = (e) => e.type.__isKeepAlive;
function dr(e, t) {
	pr(e, "a", t);
}
function fr(e, t) {
	pr(e, "da", t);
}
function pr(e, t, n = J) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (hr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) ur(e.parent.vnode) && mr(r, t, n, e), e = e.parent;
	}
}
function mr(e, t, n, r) {
	let i = hr(t, e, r, !0);
	Sr(() => {
		p(r[t], i);
	}, n);
}
function hr(e, t, n = J, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ze();
			let i = xa(n), a = Sn(t, n, e, r);
			return i(), Qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var gr = (e) => (t, n = J) => {
	(!wa || e === "sp") && hr(e, (...e) => t(...e), n);
}, _r = gr("bm"), vr = gr("m"), yr = gr("bu"), br = gr("u"), xr = gr("bum"), Sr = gr("um"), Cr = gr("sp"), wr = gr("rtg"), Tr = gr("rtc");
function Er(e, t = J) {
	hr("ec", e, t);
}
var Dr = /* @__PURE__ */ Symbol.for("v-ndc");
function Or(e, t, n, r) {
	let i, a = n && n[r], o = g(e);
	if (o || x(e)) {
		let n = o && /* @__PURE__ */ qt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Yt(e), s = /* @__PURE__ */ Jt(e), e = dt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? $t(Qt(e[n])) : Qt(e[n]) : e[n], n, void 0, a && a[n]);
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
	if (L.ce || L.parent && lr(L.parent) && L.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), H(), ta(V, null, [G("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), H();
	let o = a && Ar(a(n)), s = n.key || o && o.key, c = ta(V, { key: (s && !S(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Ar(e) {
	return e.some((e) => na(e) ? !(e.type === qi || e.type === V && !Ar(e.children)) : !0) ? e : null;
}
var jr = (e) => e ? Ca(e) ? Na(e) : jr(e.parent) : null, Mr = /* @__PURE__ */ f(/* @__PURE__ */ Object.create(null), {
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
		Nn(e.update);
	},
	$nextTick: (e) => e.n ||= jn.bind(e.proxy),
	$watch: (e) => Qn.bind(e)
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
		if (u) return t === "$attrs" && j(e.attrs, "get", ""), u(e);
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
	let { data: i, computed: a, methods: o, watch: s, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: h, activated: _, deactivated: v, beforeDestroy: y, beforeUnmount: x, destroyed: S, unmounted: ee, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: ie, serverPrefetch: ae, expose: oe, inheritAttrs: se, components: ce, directives: w, filters: le } = t;
	if (u && zr(u, r, null), o) for (let e in o) {
		let t = o[e];
		b(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		C(t) && (e.data = /* @__PURE__ */ Ut(t));
	}
	if (Lr = !0, a) for (let e in a) {
		let t = a[e], i = Y({
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
			Wn(t, e[t]);
		});
	}
	d && Br(d, e, "c");
	function T(e, t) {
		g(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (T(_r, f), T(vr, p), T(yr, m), T(br, h), T(dr, _), T(fr, v), T(Er, ie), T(Tr, ne), T(wr, re), T(xr, x), T(Sr, ee), T(Cr, ae), g(oe)) if (oe.length) {
		let t = e.exposed ||= {};
		oe.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === c && (e.render = te), se != null && (e.inheritAttrs = se), ce && (e.components = ce), w && (e.directives = w), ae && ir(e);
}
function zr(e, t, n = c) {
	g(e) && (e = qr(e));
	for (let n in e) {
		let r = e[n], i;
		i = C(r) ? "default" in r ? Gn(r.from || n, r.default, !0) : Gn(r.from || n) : Gn(r), /* @__PURE__ */ N(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Br(e, t, n) {
	Sn(g(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Vr(e, t, n, r) {
	let i = r.includes(".") ? $n(n, r) : () => n[r];
	if (x(e)) {
		let n = t[e];
		b(n) && Xn(i, n);
	} else if (b(e)) Xn(i, e.bind(n));
	else if (C(e)) if (g(e)) e.forEach((e) => Vr(e, t, n, r));
	else {
		let r = b(e.handler) ? e.handler.bind(n) : t[e.handler];
		b(r) && Xn(i, r, e);
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
	props: Yr,
	emits: Yr,
	methods: Jr,
	computed: Jr,
	beforeCreate: B,
	created: B,
	beforeMount: B,
	mounted: B,
	beforeUpdate: B,
	updated: B,
	beforeDestroy: B,
	beforeUnmount: B,
	destroyed: B,
	unmounted: B,
	activated: B,
	deactivated: B,
	errorCaptured: B,
	serverPrefetch: B,
	components: Jr,
	directives: Jr,
	watch: Xr,
	provide: Gr,
	inject: Kr
};
function Gr(e, t) {
	return t ? e ? function() {
		return f(b(e) ? e.call(this, this) : e, b(t) ? t.call(this, this) : t);
	} : t : e;
}
function Kr(e, t) {
	return Jr(qr(e), qr(t));
}
function qr(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function B(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Jr(e, t) {
	return e ? f(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yr(e, t) {
	return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : f(/* @__PURE__ */ Object.create(null), Fr(e), Fr(t ?? {})) : t;
}
function Xr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = f(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = B(e[r], t[r]);
	return n;
}
function Zr() {
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
var Qr = 0;
function $r(e, t) {
	return function(n, r = null) {
		b(n) || (n = f({}, n)), r != null && !C(r) && (r = null);
		let i = Zr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Qr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Fa,
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
					let u = c._ceVNode || G(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Na(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Sn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = ei;
				ei = c;
				try {
					return e();
				} finally {
					ei = t;
				}
			}
		};
		return c;
	};
}
var ei = null;
function ti(e, t, n = o) {
	let r = va(), i = w(t), a = T(t), s = ni(e, i), c = sn((s, c) => {
		let l, u = o, d;
		return Yn(() => {
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
var ni = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${T(t)}Modifiers`];
function ri(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || o, i = n, a = t.startsWith("update:"), s = a && ni(r, t.slice(7));
	s && (s.trim && (i = n.map((e) => x(e) ? e.trim() : e)), s.number && (i = n.map(me)));
	let c, l = r[c = de(t)] || r[c = de(w(t))];
	!l && a && (l = r[c = de(T(t))]), l && Sn(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Sn(u, e, 6, i);
	}
}
var ii = /* @__PURE__ */ new WeakMap();
function ai(e, t, n = !1) {
	let r = n ? ii : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!b(e)) {
		let r = (e) => {
			let n = ai(e, t, !0);
			n && (s = !0, f(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (C(e) && r.set(e, null), null) : (g(a) ? a.forEach((e) => o[e] = null) : f(o, a), C(e) && r.set(e, o), o);
}
function oi(e, t) {
	return !e || !u(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), h(e, t[0].toLowerCase() + t.slice(1)) || h(e, T(t)) || h(e, t));
}
function si(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Vn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ua(l.call(t, e, u, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = ua(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : ci(s);
		}
	} catch (t) {
		Yi.length = 0, Cn(t, e, 1), v = G(qi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(d) && (y = li(y, a)), b = ca(b, y, !1, !0));
	}
	return n.dirs && (b = ca(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && rr(b, n.transition), v = b, Vn(_), v;
}
var ci = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || u(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, li = (e, t) => {
	let n = {};
	for (let r in e) (!d(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function di(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? fi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (pi(o, r, n) && !oi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? fi(r, o, l) : !0 : !!o;
	return !1;
}
function fi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (pi(t, e, a) && !oi(n, a)) return !0;
	}
	return !1;
}
function pi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && C(r) && C(i) ? !Ee(r, i) : r !== i;
}
function mi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var hi = {}, gi = () => Object.create(hi), _i = (e) => Object.getPrototypeOf(e) === hi;
function vi(e, t, n, r = !1) {
	let i = {}, a = gi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), bi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Wt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function yi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (oi(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (h(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = w(o);
					i[t] = xi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		bi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !h(t, a) && ((r = T(a)) === a || !h(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = xi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !h(t, e)) && (delete a[e], l = !0);
	}
	l && ct(e.attrs, "set", "");
}
function bi(e, t, n, r) {
	let [i, a] = e.propsOptions, s = !1, c;
	if (t) for (let o in t) {
		if (oe(o)) continue;
		let l = t[o], u;
		i && h(i, u = w(o)) ? !a || !a.includes(u) ? n[u] = l : (c ||= {})[u] = l : oi(e.emitsOptions, o) || (!(o in r) || l !== r[o]) && (r[o] = l, s = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ M(n), r = c || o;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = xi(i, t, s, r[s], e, !h(r, s));
		}
	}
	return s;
}
function xi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = h(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && b(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = xa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === T(n)) && (r = !0));
	}
	return r;
}
var Si = /* @__PURE__ */ new WeakMap();
function Ci(e, t, n = !1) {
	let r = n ? Si : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, c = {}, l = [], u = !1;
	if (!b(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = Ci(e, t, !0);
			f(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !u) return C(e) && r.set(e, s), s;
	if (g(a)) for (let e = 0; e < a.length; e++) {
		let t = w(a[e]);
		wi(t) && (c[t] = o);
	}
	else if (a) for (let e in a) {
		let t = w(e);
		if (wi(t)) {
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
function wi(e) {
	return e[0] !== "$" && !oe(e);
}
var Ti = (e) => e === "_" || e === "_ctx" || e === "$stable", Ei = (e) => g(e) ? e.map(ua) : [ua(e)], Di = (e, t, n) => {
	if (t._n) return t;
	let r = Hn((...e) => Ei(t(...e)), n);
	return r._c = !1, r;
}, Oi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ti(n)) continue;
		let i = e[n];
		if (b(i)) t[n] = Di(n, i, r);
		else if (i != null) {
			let e = Ei(i);
			t[n] = () => e;
		}
	}
}, ki = (e, t) => {
	let n = Ei(t);
	e.slots.default = () => n;
}, Ai = (e, t, n) => {
	for (let r in t) (n || !Ti(r)) && (e[r] = t[r]);
}, ji = (e, t, n) => {
	let r = e.slots = gi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ai(r, t, n), n && pe(r, "_", e, !0)) : Oi(t, r);
	} else t && ki(e, t);
}, Mi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, s = o;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : Ai(i, t, n) : (a = !t.$stable, Oi(t, i)), s = t;
	} else t && (ki(e, t), s = { default: 1 });
	if (a) for (let e in i) !Ti(e) && s[e] == null && delete i[e];
}, Ni = Gi;
function Pi(e) {
	return Fi(e);
}
function Fi(e, t) {
	let n = ge();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = c, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ra(e, t) && (r = D(e), _e(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ki:
				y(e, t, n, r);
				break;
			case qi:
				b(e, t, n, r);
				break;
			case Ji:
				e ?? x(t, n, r, o);
				break;
			case V:
				ce(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? w(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, we);
		}
		u != null && i ? sr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && sr(e.ref, null, a, e, !0);
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
		if (d = e.el = l(e.type, s, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && re(e.children, d, null, i, o, Ii(e, s), c, u), _ && Un(e, null, i, "created"), ne(d, e, e.scopeId, c, i), m) {
			for (let e in m) e !== "value" && !oe(e) && a(d, e, null, m[e], s, i);
			"value" in m && a(d, "value", null, m.value, s), (f = m.onVnodeBeforeMount) && ma(f, i, e);
		}
		_ && Un(e, null, i, "beforeMount");
		let v = Ri(o, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ni(() => {
			try {
				f && ma(f, i, e), v && g.enter(d), _ && Un(e, null, i, "mounted");
			} finally {}
		}, o);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Wi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, re = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? da(e[l]) : ua(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, t, n, r, i, s, c) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || o, h = t.props || o, g;
		if (n && Li(n, !1), (g = h.onVnodeBeforeUpdate) && ma(g, n, t, e), f && Un(t, e, n, "beforeUpdate"), n && Li(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, n, r, Ii(t, i), s) : c || E(e, t, l, null, n, r, Ii(t, i), s, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Ni(() => {
			g && ma(g, n, t, e), f && Un(t, e, n, "updated");
		}, r);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === V || !ra(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), re(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && zi(e, t, !0)) : E(e, t, n, f, a, o, s, c, l);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : le(t, n, r, i, a, o, c) : T(e, t, c);
	}, le = (e, t, n, r, i, a, o) => {
		let s = e.component = _a(e, r, i);
		if (ur(e) && (s.ctx.renderer = we), Ta(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o), !e.el) {
				let r = s.subTree = G(qi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, T = (e, t, n) => {
		let r = t.component = e.component;
		if (di(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			de(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ue = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Vi(e);
					if (n) {
						t && (t.el = c.el, de(e, t, o)), n.asyncDep.then(() => {
							Ni(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Li(e, !1), t ? (t.el = c.el, de(e, t, o)) : t = c, n && fe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ma(d, s, t, c), Li(e, !0);
				let f = si(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), D(p), e, i, a), t.el = f.el, u === null && mi(e, f.el), r && Ni(r, i), (d = t.props && t.props.onVnodeUpdated) && Ni(() => ma(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = lr(t);
				if (Li(e, !1), l && fe(l), !m && (o = c && c.onVnodeBeforeMount) && ma(o, d, t), Li(e, !0), s && Ee) {
					let t = () => {
						e.subTree = si(e), Ee(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = si(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ni(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ni(() => ma(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && lr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ni(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ie(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Nn(u), Li(e, !0), l();
	}, de = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, yi(e, t.props, r, n), Mi(e, t.children, n), Ze(), In(e), Qe();
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
			let r = t[p] = l ? da(t[p]) : ua(t[p]);
			v(e[p], r, n, null, i, a, o, c, l);
		}
		u > d ? xe(e, i, a, !0, !1, f) : re(t, n, r, i, a, o, c, l, f);
	}, me = (e, t, n, r, i, a, o, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], s = t[u] = l ? da(t[u]) : ua(t[u]);
			if (ra(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], s = t[p] = l ? da(t[p]) : ua(t[p]);
			if (ra(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, s = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? da(t[u]) : ua(t[u]), n, s, i, a, o, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) _e(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? da(t[u]) : ua(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ra(r, t[_])) {
					s = _;
					break;
				}
				s === void 0 ? _e(r, i, a, !0) : (C[s - h] = u + 1, s >= S ? S = s : x = !0, v(r, t[s], n, null, i, a, o, c, l), y++);
			}
			let ee = x ? Bi(C) : s;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, s = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ui(f) : r;
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
		if (c === V) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Ji) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[nr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), Ni(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[nr];
				s._isLeaving && s[nr](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, _e = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ze(), sr(s, null, n, e, !0), Qe()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !lr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ma(_, t, e), u & 6) be(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Un(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, we, r) : l && !l.hasOnce && (a !== V || d > 0 && d & 64) ? xe(l, t, n, !1, !0) : (a === V && d & 384 || !i && u & 16) && xe(c, t, n), r && ve(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ni(() => {
			_ && ma(_, t, e), h && Un(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ve = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === V) {
			ye(n, r);
			return;
		}
		if (t === Ji) {
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
		Hi(c), Hi(l), r && fe(r), i.stop(), a && (a.flags |= 8, _e(o, e, t, n)), s && Ni(s, t), Ni(() => {
			e.isUnmounted = !0;
		}, t);
	}, xe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) _e(e[o], t, n, r, i);
	}, D = (e) => {
		if (e.shapeFlag & 6) return D(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[er];
		return n ? h(n) : t;
	}, Se = !1, Ce = (e, t, n) => {
		let r;
		e == null ? t._vnode && (_e(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Se ||= (Se = !0, In(r), Ln(), !1);
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
		createApp: $r(Ce, Te)
	};
}
function Ii({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Li({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ri(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function zi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (g(r) && g(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = da(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && zi(t, a)), a.type === Ki && (a.patchFlag === -1 && (a = i[e] = da(a)), a.el = t.el), a.type === qi && !a.el && (a.el = t.el);
	}
}
function Bi(e) {
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
function Vi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Vi(t);
}
function Hi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ui(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ui(t.subTree) : null;
}
var Wi = (e) => e.__isSuspense;
function Gi(e, t) {
	t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : Fn(e);
}
var V = /* @__PURE__ */ Symbol.for("v-fgt"), Ki = /* @__PURE__ */ Symbol.for("v-txt"), qi = /* @__PURE__ */ Symbol.for("v-cmt"), Ji = /* @__PURE__ */ Symbol.for("v-stc"), Yi = [], Xi = null;
function H(e = !1) {
	Yi.push(Xi = e ? null : []);
}
function Zi() {
	Yi.pop(), Xi = Yi[Yi.length - 1] || null;
}
var Qi = 1;
function $i(e, t = !1) {
	Qi += e, e < 0 && Xi && t && (Xi.hasOnce = !0);
}
function ea(e) {
	return e.dynamicChildren = Qi > 0 ? Xi || s : null, Zi(), Qi > 0 && Xi && Xi.push(e), e;
}
function U(e, t, n, r, i, a) {
	return ea(W(e, t, n, r, i, a, !0));
}
function ta(e, t, n, r, i) {
	return ea(G(e, t, n, r, i, !0));
}
function na(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ra(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ia = ({ key: e }) => e ?? null, aa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : x(e) || /* @__PURE__ */ N(e) || b(e) ? {
	i: L,
	r: e,
	k: t,
	f: !!n
} : e);
function W(e, t = null, n = null, r = 0, i = null, a = e === V ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ia(t),
		ref: t && aa(t),
		scopeId: Bn,
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
		ctx: L
	};
	return s ? (fa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= x(n) ? 8 : 16), Qi > 0 && !o && Xi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Xi.push(c), c;
}
var G = oa;
function oa(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Dr) && (e = qi), na(e)) {
		let r = ca(e, t, !0);
		return n && fa(r, n), Qi > 0 && !a && Xi && (r.shapeFlag & 6 ? Xi[Xi.indexOf(e)] = r : Xi.push(r)), r.patchFlag = -2, r;
	}
	if (Pa(e) && (e = e.__vccOpts), t) {
		t = sa(t);
		let { class: e, style: n } = t;
		e && !x(e) && (t.class = D(e)), C(n) && (/* @__PURE__ */ Xt(n) && !g(n) && (n = f({}, n)), t.style = _e(n));
	}
	let o = x(e) ? 1 : Wi(e) ? 128 : tr(e) ? 64 : C(e) ? 4 : b(e) ? 2 : 0;
	return W(e, t, n, r, i, o, a, !0);
}
function sa(e) {
	return e ? /* @__PURE__ */ Xt(e) || _i(e) ? f({}, e) : e : null;
}
function ca(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? pa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ia(l),
		ref: t && t.ref ? n && a ? g(a) ? a.concat(aa(t)) : [a, aa(t)] : aa(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== V ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ca(e.ssContent),
		ssFallback: e.ssFallback && ca(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && rr(u, c.clone(u)), u;
}
function K(e = " ", t = 0) {
	return G(Ki, null, e, t);
}
function la(e, t) {
	let n = G(Ji, null, e);
	return n.staticCount = t, n;
}
function q(e = "", t = !1) {
	return t ? (H(), ta(qi, null, e)) : G(qi, null, e);
}
function ua(e) {
	return e == null || typeof e == "boolean" ? G(qi) : g(e) ? G(V, null, e.slice()) : na(e) ? da(e) : G(Ki, null, String(e));
}
function da(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ca(e);
}
function fa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (g(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), fa(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !_i(t) ? t._ctx = L : r === 3 && L && (L.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else b(t) ? (t = {
		default: t,
		_ctx: L
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [K(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function pa(...e) {
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
function ma(e, t, n, r = null) {
	Sn(e, t, 7, [n, r]);
}
var ha = Zr(), ga = 0;
function _a(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || ha, a = {
		uid: ga++,
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
		propsOptions: Ci(r, i),
		emitsOptions: ai(r, i),
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ri.bind(null, a), e.ce && e.ce(a), a;
}
var J = null, va = () => J || L, ya, ba;
{
	let e = ge(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ya = t("__VUE_INSTANCE_SETTERS__", (e) => J = e), ba = t("__VUE_SSR_SETTERS__", (e) => wa = e);
}
var xa = (e) => {
	let t = J;
	return ya(e), e.scope.on(), () => {
		e.scope.off(), ya(t);
	};
}, Sa = () => {
	J && J.scope.off(), ya(null);
};
function Ca(e) {
	return e.vnode.shapeFlag & 4;
}
var wa = !1;
function Ta(e, t = !1, n = !1) {
	t && ba(t);
	let { props: r, children: i } = e.vnode, a = Ca(e);
	vi(e, r, a, t), ji(e, i, n || t);
	let o = a ? Ea(e, t) : void 0;
	return t && ba(!1), o;
}
function Ea(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pr);
	let { setup: r } = n;
	if (r) {
		Ze();
		let n = e.setupContext = r.length > 1 ? Ma(e) : null, i = xa(e), a = xn(r, e, 0, [e.props, n]), o = ee(a);
		if (Qe(), i(), (o || e.sp) && !lr(e) && ir(e), o) {
			if (a.then(Sa, Sa), t) return a.then((n) => {
				Da(e, n, t);
			}).catch((t) => {
				Cn(t, e, 0);
			});
			e.asyncDep = a;
		} else Da(e, a, t);
	} else Aa(e, t);
}
function Da(e, t, n) {
	b(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : C(t) && (e.setupState = an(t)), Aa(e, n);
}
var Oa, ka;
function Aa(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Oa && !r.render) {
			let t = r.template || Hr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Oa(t, f(f({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || c, ka && ka(e);
	}
	{
		let t = xa(e);
		Ze();
		try {
			Rr(e);
		} finally {
			Qe(), t();
		}
	}
}
var ja = { get(e, t) {
	return j(e, "get", ""), e[t];
} };
function Ma(e) {
	return {
		attrs: new Proxy(e.attrs, ja),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Na(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(an(Zt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Mr) return Mr[n](e);
		},
		has(e, t) {
			return t in e || t in Mr;
		}
	}) : e.proxy;
}
function Pa(e) {
	return b(e) && "__vccOpts" in e;
}
var Y = (e, t) => /* @__PURE__ */ mn(e, t, wa), Fa = "3.5.38", Ia = void 0, La = typeof window < "u" && window.trustedTypes;
if (La) try {
	Ia = /* @__PURE__ */ La.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ra = Ia ? (e) => Ia.createHTML(e) : (e) => e, za = "http://www.w3.org/2000/svg", Ba = "http://www.w3.org/1998/Math/MathML", Va = typeof document < "u" ? document : null, Ha = Va && /* @__PURE__ */ Va.createElement("template"), Ua = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Va.createElementNS(za, e) : t === "mathml" ? Va.createElementNS(Ba, e) : n ? Va.createElement(e, { is: n }) : Va.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Va.createTextNode(e),
	createComment: (e) => Va.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Va.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Ha.innerHTML = Ra(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ha.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Wa = /* @__PURE__ */ Symbol("_vtc");
function Ga(e, t, n) {
	let r = e[Wa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ka = /* @__PURE__ */ Symbol("_vod"), qa = /* @__PURE__ */ Symbol("_vsh"), Ja = /* @__PURE__ */ Symbol(""), Ya = /(?:^|;)\s*display\s*:/;
function Xa(e, t, n) {
	let r = e.style, i = x(n), a = !1;
	if (n && !i) {
		if (t) if (x(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Qa(r, t, "");
		}
		else for (let e in t) n[e] ?? Qa(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Qa(r, i, "") : no(e, i, !x(t) && t ? t[i] : void 0, o) || Qa(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ja];
			e && (n += ";" + e), r.cssText = n, a = Ya.test(n);
		}
	} else t && e.removeAttribute("style");
	Ka in e && (e[Ka] = a ? r.display : "", e[qa] && (r.display = "none"));
}
var Za = /\s*!important$/;
function Qa(e, t, n) {
	if (g(n)) n.forEach((n) => Qa(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = to(e, t);
		Za.test(n) ? e.setProperty(T(r), n.replace(Za, ""), "important") : e[r] = n;
	}
}
var $a = [
	"Webkit",
	"Moz",
	"ms"
], eo = {};
function to(e, t) {
	let n = eo[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return eo[t] = r;
	r = ue(r);
	for (let n = 0; n < $a.length; n++) {
		let i = $a[n] + r;
		if (i in e) return eo[t] = i;
	}
	return t;
}
function no(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && x(r) && n === r;
}
var ro = "http://www.w3.org/1999/xlink";
function io(e, t, n, r, i, a = Ce(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ro, t.slice(6, t.length)) : e.setAttributeNS(ro, t, n) : n == null || a && !we(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : S(n) ? String(n) : n);
}
function ao(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ra(n) : n);
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
function oo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function so(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var co = /* @__PURE__ */ Symbol("_vei");
function lo(e, t, n, r, i = null) {
	let a = e[co] || (e[co] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = fo(t);
		r ? oo(e, n, a[t] = go(r, i), s) : o && (so(e, n, o, s), a[t] = void 0);
	}
}
var uo = /(?:Once|Passive|Capture)$/;
function fo(e) {
	let t;
	if (uo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(uo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : T(e.slice(2)), t];
}
var po = 0, mo = /* @__PURE__ */ Promise.resolve(), ho = () => po ||= (mo.then(() => po = 0), Date.now());
function go(e, t) {
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
				e && Sn(e, t, 5, a);
			}
		} else Sn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = ho(), n;
}
var _o = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ga(e, r, o) : t === "style" ? Xa(e, n, r) : u(t) ? d(t) || lo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yo(e, t, r, o)) ? (ao(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && io(e, t, r, o, a, t !== "value")) : e._isVueCE && (bo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !x(r))) ? ao(e, w(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), io(e, t, r, o));
};
function yo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && _o(t) && b(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return _o(t) && x(n) ? !1 : t in e;
}
function bo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var xo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return g(t) ? (e) => fe(t, e) : t;
};
function So(e) {
	e.target.composing = !0;
}
function Co(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var wo = /* @__PURE__ */ Symbol("_assign");
function To(e, t, n) {
	return t && (e = e.trim()), n && (e = me(e)), e;
}
var X = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[wo] = xo(i);
		let a = r || i.props && i.props.type === "number";
		oo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[wo](To(e.value, n, a));
		}), (n || a) && oo(e, "change", () => {
			e.value = To(e.value, n, a);
		}), t || (oo(e, "compositionstart", So), oo(e, "compositionend", Co), oo(e, "change", Co));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[wo] = xo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? me(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Eo = {
	deep: !0,
	created(e, t, n) {
		e[wo] = xo(n), oo(e, "change", () => {
			let t = e._modelValue, n = Ao(e), r = e.checked, i = e[wo];
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
			} else i(jo(e, r));
		});
	},
	mounted: Do,
	beforeUpdate(e, t, n) {
		e[wo] = xo(n), Do(e, t, n);
	}
};
function Do(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (g(t)) i = De(t, r.props.value) > -1;
	else if (v(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ee(t, jo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Oo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = v(t);
		oo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? me(Ao(e)) : Ao(e));
			e[wo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, jn(() => {
				e._assigning = !1;
			});
		}), e[wo] = xo(r);
	},
	mounted(e, { value: t }) {
		ko(e, t);
	},
	beforeUpdate(e, t, n) {
		e[wo] = xo(n);
	},
	updated(e, { value: t }) {
		e._assigning || ko(e, t);
	}
};
function ko(e, t) {
	let n = e.multiple, r = g(t);
	if (!(n && !r && !v(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Ao(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = De(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Ee(Ao(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Ao(e) {
	return "_value" in e ? e._value : e.value;
}
function jo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Mo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], No = {
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
	exact: (e, t) => Mo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Po = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = No[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Fo = /* @__PURE__ */ f({ patchProp: vo }, Ua), Io;
function Lo() {
	return Io ||= Pi(Fo);
}
var Ro = ((...e) => {
	let t = Lo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Bo(e);
		if (!r) return;
		let i = t._component;
		!b(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, zo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function zo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Bo(e) {
	return x(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Vo = typeof window < "u", Ho, Uo = (e) => Ho = e, Wo = Symbol();
function Go(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Ko;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ko ||= {});
var qo = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Jo(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Yo(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		es(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Xo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Zo(e) {
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
var Qo = typeof navigator == "object" ? navigator : { userAgent: "" }, $o = /Macintosh/.test(Qo.userAgent) && /AppleWebKit/.test(Qo.userAgent) && !/Safari/.test(Qo.userAgent), es = Vo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !$o ? ts : "msSaveOrOpenBlob" in Qo ? ns : rs : () => {};
function ts(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Zo(r) : Xo(r.href) ? Yo(e, t, n) : (r.target = "_blank", Zo(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Zo(r);
	}, 0));
}
function ns(e, t = "download", n) {
	if (typeof e == "string") if (Xo(e)) Yo(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Zo(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Jo(e, n), t);
}
function rs(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Yo(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(qo.HTMLElement)) || "safari" in qo, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || $o) && typeof FileReader < "u") {
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
var { assign: is } = Object;
function as() {
	let e = Me(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = Zt({
		install(e) {
			Uo(i), i._a = e, e.provide(Wo, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var os = () => {};
function ss(e, t, n, r = os) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ne() && Pe(i), i;
}
function cs(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var ls = (e) => e(), us = Symbol(), ds = Symbol();
function fs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Go(i) && Go(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ N(r) && !/* @__PURE__ */ qt(r) ? e[n] = fs(i, r) : e[n] = r;
	}
	return e;
}
var ps = Symbol();
function ms(e) {
	return !Go(e) || !Object.prototype.hasOwnProperty.call(e, ps);
}
var { assign: hs } = Object;
function gs(e) {
	return !!(/* @__PURE__ */ N(e) && e.effect);
}
function _s(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), hs(/* @__PURE__ */ cn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Zt(Y(() => {
			Uo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = vs(e, l, t, n, r, !0), c;
}
function vs(e, t, n = {}, r, i, a) {
	let o, s = hs({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Ko.patchFunction,
			storeId: e,
			events: void 0
		}) : (fs(r.state.value[e], t), n = {
			type: Ko.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		jn().then(() => {
			m === i && (l = !0);
		}), u = !0, cs(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			hs(e, t);
		});
	} : os;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (us in t) return t[ds] = n, t;
		let i = function() {
			Uo(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			cs(f, {
				args: n,
				name: i[ds],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw cs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (cs(a, e), e)).catch((e) => (cs(o, e), Promise.reject(e))) : (cs(a, l), l);
		};
		return i[us] = !0, i[ds] = n, i;
	}, y = /* @__PURE__ */ Ut({
		_p: r,
		$id: e,
		$onAction: ss.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = ss(d, t, n.detached, () => a()), a = o.run(() => Xn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Ko.direct,
					events: void 0
				}, r);
			}, hs({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || ls)(() => r._e.run(() => (o = Me()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ N(n) && !gs(n) || /* @__PURE__ */ qt(n) ? a || (p && ms(n) && (/* @__PURE__ */ N(n) ? n.value = p[t] : fs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return hs(y, b), hs(/* @__PURE__ */ M(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				hs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		hs(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function ys(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Kn();
		return n ||= o ? Gn(Wo, null) : null, n && Uo(n), n = Ho, n._s.has(e) || (i ? vs(e, t, r, n) : _s(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function bs(e) {
	let t = /* @__PURE__ */ M(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = Y({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ N(i) || /* @__PURE__ */ qt(i)) && (n[r] = /* @__PURE__ */ dn(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/fear-terror/payload.ts
function xs(e) {
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
function Ss(e) {
	return e === "fear" ? "Fear" : "Terror";
}
function Cs(e, t) {
	let n = t.source ? ` - ${t.source}` : "";
	return `${e} ${t.rating}${n}`;
}
function ws(e, t) {
	return `<h2>${e}</h2>${Ts(t)}`;
}
function Ts(e) {
	let t = Ss(e.type), n = e.source ? `, ${e.source}` : "";
	return `@${t}[${e.rating}${n}]`;
}
//#endregion
//#region src/state/apps/fear-console/store.ts
var Es = ys("fear-console", () => {
	let e = /* @__PURE__ */ P("fear"), t = /* @__PURE__ */ P(1), n = /* @__PURE__ */ P(""), r = /* @__PURE__ */ P([]), i = /* @__PURE__ */ P(), a = /* @__PURE__ */ P(), o, s = Y(() => i.value !== void 0), c = Y(() => Ss(e.value)), l = Y(() => {
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
}), Ds = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, Os = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, ks = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:border-base-content/25! tw:py-1" }, As = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure Fear Console"
}, js = /* @__PURE__ */ z({
	__name: "FearConsoleHeader",
	props: {
		rating: {},
		selectedTypeLabel: {}
	},
	emits: ["configure"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (H(), U("header", Ds, [r[2] ||= W("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [W("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [W("i", { class: "fa-solid fa-skull" })])], -1), W("div", Os, [W("span", ks, O(e.selectedTypeLabel) + " " + O(e.rating), 1), W("span", As, [W("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure Fear Console",
			title: "Configure Fear Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[1] ||= [W("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]));
	}
}), Ms = { class: "tw:flex tw:min-h-full tw:flex-col tw:gap-4 tw:bg-base-200! tw:text-base-content tw:text-base-content!" }, Ns = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mx-4",
	role: "alert"
}, Ps = {
	class: "tw:grid tw:min-w-0 tw:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] tw:gap-3 tw:px-4",
	"aria-label": "Fear and Terror setup"
}, Fs = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Is = {
	class: "tw:grid tw:w-full tw:grid-cols-2 tw:gap-2",
	role: "group",
	"aria-label": "Effect type"
}, Ls = ["aria-pressed"], Rs = ["aria-pressed"], zs = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Bs = { class: "dui-fieldset tw:col-span-full tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Vs = {
	class: "dui-card dui-card-border tw:mx-4 tw:min-h-40 tw:flex-1 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-terror-affected-actors"
}, Hs = { class: "dui-card-body tw:gap-3 tw:p-4" }, Us = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, Ws = { class: "tw:flex tw:items-center tw:gap-2" }, Gs = { class: "dui-badge dui-badge-sm" }, Ks = ["disabled"], qs = {
	key: 0,
	class: "dui-list tw:gap-1",
	"aria-live": "polite"
}, Js = { class: "tw:min-w-0 tw:font-semibold" }, Ys = { class: "dui-badge dui-badge-ghost tw:capitalize" }, Xs = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Zs = {
	class: "tw:sticky tw:bottom-0 tw:z-10 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4",
	"aria-label": "Fear Console actions"
}, Qs = { class: "dui-join tw:flex tw:w-full" }, $s = ["disabled"], ec = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, tc = {
	key: 1,
	class: "fa-solid fa-message",
	"aria-hidden": "true"
}, nc = ["disabled"], rc = {
	id: "fear-console-secondary-actions",
	class: "dui-dropdown dui-dropdown-top dui-dropdown-end dui-menu tw:z-20 tw:mb-2 tw:w-52 tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100! tw:p-2 tw:text-base-content! tw:shadow-lg",
	popover: "",
	style: { "position-anchor": "--fear-console-secondary-actions" }
}, ic = ["disabled"], ac = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, oc = {
	key: 1,
	class: "fa-regular fa-copy",
	"aria-hidden": "true"
}, sc = ["disabled"], cc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, lc = {
	key: 1,
	class: "fa-solid fa-bolt",
	"aria-hidden": "true"
}, uc = /* @__PURE__ */ z({
	__name: "FearConsoleApp",
	props: {
		initialPayload: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = Es();
		t.initialPayload ? n.initialize({
			actions: t.actions,
			initialPayload: t.initialPayload
		}) : n.initialize({ actions: t.actions });
		let { activeAction: r, actors: i, errorMessage: a, isWorking: o, rating: s, selectedType: c, selectedTypeLabel: l, source: u } = bs(n);
		return (e, d) => (H(), U("main", Ms, [
			G(js, {
				rating: F(s),
				"selected-type-label": F(l),
				onConfigure: t.actions.openConfigurator
			}, null, 8, [
				"rating",
				"selected-type-label",
				"onConfigure"
			]),
			F(a) ? (H(), U("div", Ns, [d[8] ||= W("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), W("span", null, O(F(a)), 1)])) : q("", !0),
			W("section", Ps, [
				W("fieldset", Fs, [
					d[9] ||= W("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Effect", -1),
					W("div", Is, [W("button", {
						class: D(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": F(c) === "fear" }]),
						type: "button",
						"aria-pressed": F(c) === "fear",
						onClick: d[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, Ls), W("button", {
						class: D(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": F(c) === "terror" }]),
						type: "button",
						"aria-pressed": F(c) === "terror",
						onClick: d[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, Rs)]),
					d[10] ||= W("p", { class: "dui-label tw:whitespace-normal" }, " Choose the WFRP4e psychology test to prompt or apply. ", -1)
				]),
				W("fieldset", zs, [
					d[11] ||= W("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Difficulty", -1),
					d[12] ||= W("label", {
						class: "dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					R(W("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": d[2] ||= (e) => /* @__PURE__ */ N(s) ? s.value = e : null,
						class: "dui-input dui-validator tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						X,
						F(s),
						void 0,
						{ number: !0 }
					]]),
					d[13] ||= W("p", { class: "dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				W("fieldset", Bs, [
					d[14] ||= la("<legend class=\"dui-fieldset-legend tw:text-base-content!\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary!\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					R(W("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": d[3] ||= (e) => /* @__PURE__ */ N(u) ? u.value = e : null,
						autocomplete: "off",
						class: "dui-input tw:min-w-0 tw:max-w-full tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[X, F(u)]]),
					d[15] ||= W("p", { class: "dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			W("section", Vs, [W("div", Hs, [W("div", Us, [W("div", Ws, [d[16] ||= W("h2", {
				id: "fear-terror-affected-actors",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Affected actors ", -1), W("span", Gs, O(F(i).length), 1)]), W("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: F(o),
				type: "button",
				onClick: d[4] ||= (...e) => F(n).refreshActors && F(n).refreshActors(...e)
			}, [...d[17] ||= [W("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), K(" Refresh ", -1)]], 8, Ks)]), F(i).length ? (H(), U("ul", qs, [(H(!0), U(V, null, Or(F(i), (e) => (H(), U("li", {
				key: e.id,
				class: "dui-list-row tw:items-center tw:bg-base-200!"
			}, [
				d[18] ||= W("span", {
					class: "dui-status dui-status-secondary",
					"aria-hidden": "true"
				}, null, -1),
				W("span", Js, O(e.name), 1),
				W("span", Ys, O(e.source), 1)
			]))), 128))])) : (H(), U("div", Xs, [d[19] ||= W("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), W("span", null, " Target one or more tokens to apply " + O(F(l)) + " directly. You can post a chat card without affected actors. ", 1)]))])]),
			W("footer", Zs, [W("div", Qs, [
				W("button", {
					class: "dui-btn dui-btn-primary dui-join-item tw:min-w-0 tw:flex-1 tw:rounded-l-full tw:shadow-md",
					disabled: F(o),
					type: "button",
					onClick: d[5] ||= (e) => F(n).runAction("post-card")
				}, [F(r) === "post-card" ? (H(), U("span", ec)) : (H(), U("i", tc)), d[20] ||= K(" Post Card ", -1)], 8, $s),
				W("button", {
					class: "dui-btn dui-btn-primary dui-btn-square dui-join-item tw:rounded-r-full tw:border-l-primary-content/25! tw:shadow-md",
					"aria-label": "More Fear Console actions",
					disabled: F(o),
					popovertarget: "fear-console-secondary-actions",
					style: { "anchor-name": "--fear-console-secondary-actions" },
					title: "More actions",
					type: "button"
				}, [...d[21] ||= [W("i", {
					class: "fa-solid fa-chevron-up",
					"aria-hidden": "true"
				}, null, -1)]], 8, nc),
				W("ul", rc, [W("li", { class: D({ "dui-menu-disabled": F(o) }) }, [W("button", {
					disabled: F(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[6] ||= (e) => F(n).runAction("copy-link")
				}, [F(r) === "copy-link" ? (H(), U("span", ac)) : (H(), U("i", oc)), d[22] ||= K(" Copy Link ", -1)], 8, ic)], 2), W("li", { class: D({ "dui-menu-disabled": F(o) }) }, [W("button", {
					disabled: F(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[7] ||= (e) => F(n).runAction("apply")
				}, [F(r) === "apply" ? (H(), U("span", cc)) : (H(), U("i", lc)), K(" Apply " + O(F(l)), 1)], 8, sc)], 2)])
			])])
		]));
	}
}), dc = ys("fear-console-configurator", () => {
	let e = /* @__PURE__ */ P({ launchers: {
		actorSheet: !0,
		tokenControls: !0
	} }), t = /* @__PURE__ */ P(), n = /* @__PURE__ */ P(), r = /* @__PURE__ */ P(!1), i;
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
}), fc = { class: "dui-navbar tw:relative tw:min-h-0 tw:min-w-0 tw:flex-wrap tw:items-start tw:gap-3 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-4 tw:py-3 tw:text-base-content! tw:shadow-md" }, pc = { class: "dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start tw:gap-3" }, mc = {
	class: "tw:inline-grid tw:size-11 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-lg tw:text-primary-content! tw:shadow-md",
	"aria-hidden": "true"
}, hc = { class: "tw:min-w-0" }, gc = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight tw:tracking-wide tw:text-base-content!" }, _c = { class: "tw:mt-1 tw:max-w-2xl tw:text-sm tw:leading-relaxed tw:text-base-content/70!" }, vc = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, yc = ["data-tip"], bc = ["aria-label", "title"], xc = /* @__PURE__ */ z({
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
		return (t, r) => (H(), U("header", fc, [W("div", pc, [W("span", mc, [W("i", { class: D(e.icon) }, null, 2)]), W("div", hc, [
			r[1] ||= W("div", { class: "dui-breadcrumbs tw:mb-0.5 tw:max-w-full tw:text-xs tw:text-secondary!" }, [W("ul", null, [W("li", null, "Drowsy’s WFRP4e Toolkit")])], -1),
			W("h1", gc, O(e.title), 1),
			W("p", _c, O(e.description), 1)
		])]), W("div", vc, [kr(t.$slots, "end"), e.configureLabel ? (H(), U("span", {
			key: 0,
			class: "dui-tooltip dui-tooltip-left",
			"data-tip": e.configureLabel
		}, [W("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			type: "button",
			"aria-label": e.configureLabel,
			title: e.configureLabel,
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [W("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]], 8, bc)], 8, yc)) : q("", !0)])]));
	}
}), Sc = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Cc = { class: "tw:min-h-0 tw:flex-1 tw:overflow-auto tw:p-4" }, wc = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, Tc = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, Ec = {
	class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-launcher-settings"
}, Dc = { class: "dui-card-body tw:gap-4 tw:p-4" }, Oc = { class: "dui-fieldset tw:gap-2" }, kc = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Ac = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, jc = { class: "tw:flex tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[32rem]:flex-row tw:min-[32rem]:items-center tw:min-[32rem]:justify-between" }, Mc = ["disabled"], Nc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Pc = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, Fc = /* @__PURE__ */ z({
	__name: "FearConsoleConfiguratorApp",
	props: {
		actions: {},
		configuration: {}
	},
	setup(e) {
		let t = e, n = dc();
		n.initialize(t.configuration, t.actions);
		let { configuration: r, errorMessage: i, isSaving: a, statusMessage: o } = bs(n);
		return (e, t) => (H(), U("main", Sc, [
			G(xc, {
				description: "Choose where the Fear Console appears for this browser and account.",
				icon: "fa-solid fa-gears",
				title: "Fear Console Configurator"
			}),
			W("div", Cc, [
				F(i) ? (H(), U("div", wc, [t[3] ||= W("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), W("span", null, O(F(i)), 1)])) : q("", !0),
				F(o) ? (H(), U("div", Tc, [t[4] ||= W("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), W("span", null, O(F(o)), 1)])) : q("", !0),
				W("section", Ec, [W("div", Dc, [
					t[8] ||= W("div", null, [W("h2", {
						id: "fear-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), W("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These client preferences control only where shortcuts appear. Macros and the module API remain available. ")], -1),
					W("fieldset", Oc, [
						t[7] ||= W("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1),
						W("label", kc, [R(W("input", {
							"onUpdate:modelValue": t[0] ||= (e) => F(r).launchers.tokenControls = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[Eo, F(r).launchers.tokenControls]]), t[5] ||= W("span", { class: "tw:min-w-0" }, [W("strong", { class: "tw:block" }, "Token Controls"), W("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the skull launcher in Foundry’s Token Controls palette. ")], -1)]),
						W("label", Ac, [R(W("input", {
							"onUpdate:modelValue": t[1] ||= (e) => F(r).launchers.actorSheet = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[Eo, F(r).launchers.actorSheet]]), t[6] ||= W("span", { class: "tw:min-w-0" }, [W("strong", { class: "tw:block" }, "Actor-sheet headers"), W("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show a Fear Console action on supported WFRP4e actor sheets. ")], -1)])
					]),
					t[9] ||= W("div", {
						class: "dui-alert tw:text-sm",
						role: "note"
					}, [W("i", {
						class: "fa-solid fa-rotate",
						"aria-hidden": "true"
					}), W("span", null, "Launcher changes take effect after Foundry is reloaded.")], -1)
				])])
			]),
			W("footer", jc, [t[11] ||= W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, "Scope: this client and user.", -1), W("button", {
				class: "dui-btn dui-btn-primary tw:min-w-40 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: F(a),
				type: "button",
				onClick: t[2] ||= (...e) => F(n).saveConfiguration && F(n).saveConfiguration(...e)
			}, [F(a) ? (H(), U("span", Nc)) : (H(), U("i", Pc)), t[10] ||= K(" Save configuration ", -1)], 8, Mc)])
		]));
	}
}), Z = {
	fearConsole: {
		gmOnly: !0,
		name: "Fear Console"
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
function Ic(e) {
	return !e.gmOnly || game.user.isGM;
}
function Lc(e) {
	if (!Ic(e)) throw Error(`Only a GM can use the ${e.name}.`);
}
//#endregion
//#region src/module/fear-terror/settings/launchers.ts
var Rc = {
	actorSheet: "showActorSheetLauncher",
	tokenControls: "showTokenControlsLauncher"
};
function zc(e) {
	return game.settings.get(t, e) === !0;
}
//#endregion
//#region src/module/fear-terror/configuration.ts
function Bc() {
	return { launchers: {
		actorSheet: zc(Rc.actorSheet),
		tokenControls: zc(Rc.tokenControls)
	} };
}
async function Vc(e) {
	Lc(Z.fearConsole);
	let n = [[Rc.actorSheet, e.launchers.actorSheet], [Rc.tokenControls, e.launchers.tokenControls]];
	for (let [e, r] of n) await game.settings.set(t, e, r);
	ui.notifications.info("Fear Console configuration saved. Reload to update its launchers.");
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var Hc = class extends foundry.applications.api.ApplicationV2 {
	static ACCESS_POLICY = {
		gmOnly: !0,
		name: "Drowsy’s WFRP4e Toolkit application"
	};
	#e;
	static canCurrentUserAccess() {
		return Ic(this.ACCESS_POLICY);
	}
	async render(e) {
		let t = this.constructor;
		return Lc(t.ACCESS_POLICY), super.render(e);
	}
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-enhanced-fear-terror-root", "tw:[&_*]:box-border", "tw:box-border", "tw:block", "tw:h-full", "tw:max-h-full", "tw:max-w-full", "tw:min-h-0", "tw:overflow-auto", "tw:text-base-content", "tw:w-full"), n.dataset.theme = "wfrp4e-enhanced-fear-terror", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-enhanced-fear-terror-app", "tw:box-border", "tw:min-h-0", "tw:overflow-hidden", "tw:p-0", "tw:relative"), t.replaceChildren(e), this.#e = Ro(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(as()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Uc = class extends Hc {
	static ACCESS_POLICY = Z.fearConsole;
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
		return Fc;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: Vc },
			configuration: Bc()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console-configurator/open.ts
async function Wc() {
	let e = new Uc();
	return await e.render(!0), e;
}
function Gc() {
	Wc().catch((e) => {
		console.error(`${t} | Failed to open the Fear Console Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/fear-terror/suggestion.ts
function Kc({ fearRating: e, source: t, terrorRating: n }) {
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
function qc() {
	if (!(typeof canvas > "u" || !canvas)) {
		for (let e of canvas.tokens?.controlled ?? []) if (e.actor) return Jc(e.actor);
	}
}
function Jc(e) {
	let t = Yc(e, "CHAT.Terror");
	return Kc({
		fearRating: t === void 0 ? Yc(e, "CHAT.Fear") : void 0,
		source: e.name,
		terrorRating: t
	});
}
function Yc(e, t) {
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
function Xc() {
	return Qc().map(({ choice: e }) => e);
}
function Zc() {
	return Qc().map(({ actor: e }) => e);
}
function Qc() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user.targets ?? []) $c(e, t.actor);
	return Array.from(e.values());
}
function $c(e, t) {
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
async function el(e) {
	Lc(Z.fearConsole);
	let t = Zc();
	if (t.length === 0) {
		ui.notifications.warn("Target one or more tokens before applying Fear or Terror.");
		return;
	}
	let n = xs(e);
	await Promise.all(t.map((e) => il(e, n)));
}
async function tl(e) {
	Lc(Z.fearConsole);
	let t = xs(e), n = Zc(), r = al(t), i = Cs(r, t), a = ol(await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: i }), n);
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
async function nl(e) {
	Lc(Z.fearConsole);
	let t = xs(e), n = Ts(t);
	await game.clipboard.copyPlainText(n), ui.notifications.info(`${al(t)} link copied.`);
}
async function rl(e) {
	Lc(Z.fearConsole);
	let t = xs(e), n = ws(al(t), t), r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
async function il(e, t) {
	if (t.type === "fear") {
		await e.applyFear(t.rating, t.source);
		return;
	}
	await e.applyTerror(t.rating, t.source);
}
function al(e) {
	let t = e.type === "fear" ? "CHAT.Fear" : "CHAT.Terror";
	return game.i18n.localize(t);
}
function ol(e, t) {
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
var sl = class extends Hc {
	static ACCESS_POLICY = Z.fearConsole;
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
		return uc;
	}
	getVueProps() {
		return {
			actions: {
				applyToSelectedActors: el,
				copyLink: nl,
				getActorChoices: Xc,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the Fear Console.`, e), ui.notifications.error("The Fear Console completed the action but could not close its window.");
					});
				},
				openConfigurator: Gc,
				postPrompt: tl
			},
			initialPayload: this.#e.initialPayload ?? qc()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console/open.ts
async function cl(e = {}) {
	let t = new sl(e);
	return await t.render(!0), t;
}
function ll(e = {}) {
	cl(e).catch((e) => {
		console.error(`${t} | Failed to open the Fear Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/xp-curve/calculate.ts
var ul = .01, dl = 2 ** 53 - 1;
function fl(e) {
	return {
		companionMultiplier: vl(e.companionMultiplier, 0, 1),
		curveExponent: vl(e.curveExponent, .1, 5),
		gapForMaximumAward: Math.max(1, yl(e.gapForMaximumAward)),
		maximumAward: Math.max(0, yl(e.maximumAward)),
		scaleExponent: vl(e.scaleExponent, 0, 2),
		scalePivot: Math.max(1, yl(e.scalePivot))
	};
}
function pl(e, t) {
	let n = e.filter((e) => e.selected), r = fl(t), i = Math.max(0, ...n.map((e) => e.totalXp)), a = n.map((e) => {
		let t = yl(e.totalXp), n = Math.max(0, i - t), a = e.category === "companion" ? r.companionMultiplier : 1, o = ml(n, r), s = hl(t, r), c = Math.max(0, Math.round(o * s * a)), l = Math.min(r.maximumAward, c);
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
function ml(e, t) {
	let n = fl(t), r = Math.max(0, Number.isFinite(e) ? e : 0) / n.gapForMaximumAward, i = n.maximumAward * r ** n.curveExponent;
	return Number.isFinite(i) ? Math.min(i, dl) : dl;
}
function hl(e, t) {
	let n = fl(t), r = Math.max(0, Number.isFinite(e) ? e : 0);
	return Math.min(1, n.scalePivot / Math.max(r, n.scalePivot)) ** n.scaleExponent;
}
function gl(e, t = e.gapForMaximumAward * 1.4, n = 24) {
	let r = fl(e), i = Math.max(2, yl(n)), a = Math.max(r.gapForMaximumAward * 1.4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			award: ml(n, r),
			gap: n
		};
	});
}
function _l(e, t = e.scalePivot * 4, n = 32) {
	let r = fl(e), i = Math.max(2, yl(n)), a = Math.max(1e3, r.scalePivot * 4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			multiplier: hl(n, r),
			recipientXp: n
		};
	});
}
function vl(e, t, n) {
	let r = Number(e);
	return Math.min(n, Math.max(t, Number.isFinite(r) ? r : ul));
}
function yl(e) {
	let t = Number(e);
	return Number.isFinite(t) ? Math.round(t) : 0;
}
//#endregion
//#region src/functions/xp-curve/reason.ts
function bl(e, t) {
	return e.replaceAll("%session%", t.session).replaceAll("%date%", t.date).replaceAll("%datetime%", t.datetime ?? "").replace(/\s+\(\s*\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function xl(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/types/xp-curve/XpCurve.ts
var Sl = {
	companionMultiplier: .5,
	curveExponent: 1.75,
	gapForMaximumAward: 5e3,
	maximumAward: 1e3,
	scaleExponent: 1,
	scalePivot: 7500
}, Cl = {
	defaultReason: "XP Curve %session% (%date%)",
	defaultSelection: "company",
	parameters: { ...Sl }
};
//#endregion
//#region src/state/apps/shared/xp-actor-selection.ts
function wl(e) {
	let t = /* @__PURE__ */ P([]), n = Y(() => t.value.filter((e) => e.selected)), r = /* @__PURE__ */ new Set();
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
var Tl = ys("xp-curve-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = wl("The XP Curve Console"), o = /* @__PURE__ */ P({ ...Sl }), s = /* @__PURE__ */ P(""), c = /* @__PURE__ */ P("party"), l = /* @__PURE__ */ P("default"), u = /* @__PURE__ */ P(), d = /* @__PURE__ */ P(!1), f, p, m = Y(() => pl(e.value, o.value)), h = Y(() => m.value.awards.filter((e) => e.award > 0).length), g = Y(() => r.value.length >= 2 && m.value.totalAward > 0 && !d.value), _ = Y(() => bl(s.value, x()));
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
}), El = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:justify-end tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-3" }, Dl = ["disabled"], Ol = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, kl = /* @__PURE__ */ z({
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
		return (t, r) => (H(), U("footer", El, [W("button", {
			class: "dui-btn dui-btn-primary tw:w-full tw:min-w-0 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md tw:min-[32rem]:w-auto tw:min-[32rem]:min-w-52",
			disabled: e.disabled,
			type: "button",
			onClick: r[0] ||= (e) => n("action")
		}, [e.working ? (H(), U("span", Ol)) : (H(), U("i", {
			key: 1,
			class: D(e.icon),
			"aria-hidden": "true"
		}, null, 2)), K(" " + O(e.label), 1)], 8, Dl)]));
	}
}), Al = { class: "tw:cursor-pointer" }, jl = ["checked", "disabled"], Ml = { class: "tw:sr-only" }, Nl = /* @__PURE__ */ z({
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
		return (t, n) => (H(), U("label", Al, [W("input", {
			class: "dui-checkbox dui-checkbox-primary dui-checkbox-sm tw:appearance-none! tw:rounded-sm! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none! tw:checked:text-primary-content!",
			type: "checkbox",
			checked: e.checked,
			disabled: e.disabled,
			onChange: i
		}, null, 40, jl), W("span", Ml, "Include " + O(e.actorName) + " in " + O(e.purpose), 1)]));
	}
}), Pl = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipients-title"
}, Fl = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Il = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Ll = { class: "tw:flex tw:items-center tw:gap-2" }, Rl = { class: "dui-badge dui-badge-sm" }, zl = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Bl = ["disabled"], Vl = ["disabled"], Hl = ["disabled"], Ul = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100!"
}, Wl = { class: "dui-table dui-table-sm tw:min-w-[52rem]" }, Gl = {
	class: "tw:min-w-44",
	scope: "row"
}, Kl = { class: "tw:block tw:font-semibold" }, ql = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, Jl = { class: "tw:text-right tw:tabular-nums" }, Yl = { class: "tw:text-right tw:tabular-nums" }, Xl = { class: "tw:text-right tw:tabular-nums" }, Zl = { class: "tw:text-right tw:tabular-nums" }, Ql = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, $l = { class: "tw:text-right tw:tabular-nums" }, eu = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, tu = /* @__PURE__ */ z({
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
		return (t, n) => (H(), U("section", Pl, [W("div", Fl, [W("div", Il, [W("div", null, [W("div", Ll, [n[3] ||= W("h2", {
			id: "recipients-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipients ", -1), W("span", Rl, O(e.plan.awards.length) + " selected", 1)]), n[4] ||= W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The XP leader sets the gap only. Decay is calculated from each recipient’s own total. ", -1)]), W("div", zl, [
			W("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[0] ||= (e) => r("select-all", !0)
			}, " All ", 8, Bl),
			W("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[1] ||= (e) => r("select-all", !1)
			}, " None ", 8, Vl),
			W("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[2] ||= (e) => r("reset")
			}, " Reset ", 8, Hl)
		])]), e.actors.length ? (H(), U("div", Ul, [W("table", Wl, [n[5] ||= W("thead", { class: "tw:bg-base-300/60!" }, [W("tr", null, [
			W("th", { scope: "col" }, "Use"),
			W("th", { scope: "col" }, "Actor"),
			W("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Total XP"),
			W("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Leader gap"),
			W("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Initial XP"),
			W("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Decay"),
			W("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Final award"),
			W("th", {
				class: "tw:text-right",
				scope: "col"
			}, "New total")
		])], -1), W("tbody", null, [(H(!0), U(V, null, Or(e.actors, (t) => (H(), U("tr", {
			key: t.id,
			class: D({ "tw:bg-base-200!": t.selected })
		}, [
			W("td", null, [G(Nl, {
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
			W("th", Gl, [W("span", Kl, O(t.name), 1), t.category === "companion" ? (H(), U("span", ql, " Companion rate ")) : q("", !0)]),
			W("td", Jl, O(t.totalXp), 1),
			W("td", Yl, O(i(t.id)?.gap ?? "—"), 1),
			W("td", Xl, O(i(t.id) ? Math.round(i(t.id)?.catchUpValue ?? 0) : "—"), 1),
			W("td", Zl, O(i(t.id) ? `${Math.round((i(t.id)?.decayMultiplier ?? 0) * 100)}%` : "—"), 1),
			W("td", Ql, O(i(t.id) ? `+${i(t.id)?.award}` : "—"), 1),
			W("td", $l, O(i(t.id)?.afterXp ?? "—"), 1)
		], 2))), 128))])])])) : (H(), U("div", eu, [...n[6] ||= [W("i", {
			class: "fa-solid fa-user-slash",
			"aria-hidden": "true"
		}, null, -1), W("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]));
	}
}), nu = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:mb-3",
	role: "status"
}, ru = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[68rem]:grid-cols-[1.25fr_1fr]" }, iu = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "award-message-title"
}, au = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, ou = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, su = { class: "tw:m-0 tw:break-words tw:font-semibold" }, cu = /* @__PURE__ */ z({
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
		let n = ti(e, "defaultReason"), r = t;
		function i(e, t) {
			r("update:selected", e, t);
		}
		return (t, a) => (H(), U(V, null, [e.selectionSource === "targets" && e.plan.awards.length === 0 ? (H(), U("div", nu, [...a[3] ||= [W("i", {
			class: "fa-solid fa-bullseye",
			"aria-hidden": "true"
		}, null, -1), W("span", { class: "tw:min-w-0 tw:break-words" }, " The targeted tokens do not contain eligible WFRP4e character actors. ", -1)]])) : q("", !0), W("div", ru, [G(tu, {
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
		]), W("section", iu, [W("div", au, [
			a[5] ||= W("div", null, [W("h2", {
				id: "award-message-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Award message "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This reason is written to each recipient’s WFRP4e experience log. ")], -1),
			a[6] ||= W("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-award-reason"
			}, " Experience log reason ", -1),
			R(W("input", {
				id: "xp-award-reason",
				"onUpdate:modelValue": a[2] ||= (e) => n.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
				type: "text"
			}, null, 512), [[X, n.value]]),
			a[7] ||= W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
				K(" Supports Drowsy’s "),
				W("code", null, "%session%"),
				K(" reference and Foundry’s "),
				W("code", null, "%date%"),
				K(" value. ")
			], -1),
			W("div", ou, [a[4] ||= W("span", { class: "tw:text-xs tw:text-base-content/60!" }, "This award will record", -1), W("p", su, O(e.resolvedReason || "No reason"), 1)]),
			a[8] ||= W("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [W("i", {
				class: "fa-solid fa-circle-info",
				"aria-hidden": "true"
			}), W("span", { class: "tw:min-w-0 tw:break-words" }, " Use the cog in the header to change curves and recipient defaults. Saving there refreshes this award ledger with the new calculation. ")], -1)
		])])])], 64));
	}
}), lu = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, uu = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, du = ["title"], fu = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure XP Curve Console"
}, pu = { class: "tw:grid tw:grid-cols-2 tw:gap-px tw:border-b tw:border-base-content/20! tw:bg-base-content/20! tw:min-[38rem]:grid-cols-4" }, mu = { class: "tw:contents" }, hu = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, gu = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, _u = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, vu = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, yu = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, bu = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, xu = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Su = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Cu = /* @__PURE__ */ z({
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
		return (t, r) => (H(), U(V, null, [W("header", lu, [r[3] ||= W("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [W("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [W("i", { class: "fa-solid fa-chart-line" })])], -1), W("div", uu, [W("span", {
			class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:max-w-56 tw:whitespace-normal tw:border-base-content/25! tw:py-1 tw:text-center",
			title: e.selectionSource === "targets" ? "Eligible targeted character tokens were selected when the console opened." : "No tokens were targeted, so the configured recipient default was used."
		}, [r[1] ||= W("span", {
			class: "dui-status dui-status-primary dui-status-sm tw:shrink-0",
			"aria-hidden": "true"
		}, null, -1), K(" " + O(e.selectionLabel), 1)], 8, du), W("span", fu, [W("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure XP Curve Console",
			title: "Configure XP Curve Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [W("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]), W("div", pu, [W("dl", mu, [
			W("div", hu, [r[4] ||= W("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Selected recipients", -1), W("dd", gu, O(e.selectedCount), 1)]),
			W("div", _u, [r[5] ||= W("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "XP leader total", -1), W("dd", vu, O(e.highestXp), 1)]),
			W("div", yu, [r[6] ||= W("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Recipients gaining XP", -1), W("dd", bu, O(e.positiveAwardCount), 1)]),
			W("div", xu, [r[7] ||= W("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Total award", -1), W("dd", Su, O(e.totalAward) + " XP ", 1)])
		])])], 64));
	}
}), wu = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Tu = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, Eu = { class: "tw:min-w-0 tw:break-words" }, Du = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Ou = /* @__PURE__ */ z({
	__name: "XpCurveConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Tl();
		n.initialize(t.initialization, t.actions);
		let { actors: r, canApply: i, defaultReason: a, errorMessage: o, isWorking: s, plan: c, positiveAwardCount: l, resolvedReason: u, selectedActors: d, selectionSource: f } = bs(n), p = Y(() => f.value === "targets" ? "Recipients: targeted tokens" : `Recipients: ${{
			company: "company default",
			party: "party default",
			world: "world default"
		}[t.initialization.defaultSelection]}`);
		return (e, m) => (H(), U("main", wu, [
			G(Cu, {
				"highest-xp": F(c).highestXp,
				"positive-award-count": F(l),
				"selected-count": F(d).length,
				"selection-label": p.value,
				"selection-source": F(f),
				"total-award": F(c).totalAward,
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
			F(o) ? (H(), U("div", Tu, [m[1] ||= W("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), W("span", Eu, O(F(o)), 1)])) : q("", !0),
			W("div", Du, [G(cu, {
				"default-reason": F(a),
				"onUpdate:defaultReason": m[0] ||= (e) => /* @__PURE__ */ N(a) ? a.value = e : null,
				actors: F(r),
				disabled: F(s),
				plan: F(c),
				"resolved-reason": F(u),
				"selection-source": F(f),
				onReset: F(n).resetSelection,
				onSelectAll: F(n).setAllActorsSelected,
				"onUpdate:selected": F(n).setActorSelected
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
			G(kl, {
				disabled: !F(i),
				icon: "fa-solid fa-award",
				label: `Award ${F(c).totalAward} XP`,
				working: F(s),
				onAction: F(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])
		]));
	}
}), ku = {
	...Cl,
	launchers: { tokenControls: !0 },
	parameters: { ...Cl.parameters }
}, Au = ys("xp-curve-configurator", () => {
	let e = /* @__PURE__ */ P([]), t = /* @__PURE__ */ P({ ...ku.parameters }), n = /* @__PURE__ */ P(ku.defaultReason), r = /* @__PURE__ */ P(ku.defaultSelection), i = /* @__PURE__ */ P({ ...ku.launchers }), a = /* @__PURE__ */ P(), o = /* @__PURE__ */ P(), s = /* @__PURE__ */ P(!1), c, l = Y(() => pl(e.value, t.value)), u = Y(() => Math.max(0, ...l.value.awards.map((e) => e.gap))), d = Y(() => gl(t.value, Math.max(u.value * 1.1, 1))), f = Y(() => _l(t.value, Math.max(l.value.highestXp * 1.1, 1)));
	function p(s, l) {
		c = l, e.value = s.actors.map((e) => ({ ...e })), t.value = { ...s.parameters }, n.value = s.defaultReason, r.value = s.defaultSelection, i.value = { ...s.launchers }, a.value = void 0, o.value = void 0;
	}
	function m(e) {
		r.value = e, o.value = void 0;
	}
	function h() {
		t.value = { ...ku.parameters }, n.value = ku.defaultReason, r.value = ku.defaultSelection, i.value = { ...ku.launchers }, a.value = void 0, o.value = "Defaults restored. Save configuration to apply them.";
	}
	async function g() {
		if (!s.value) {
			s.value = !0, a.value = void 0, o.value = void 0;
			try {
				t.value = fl(t.value);
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
function ju(e, t, n, r) {
	return {
		maximumGap: Math.max(1, e * 1.4, ...n.map((e) => e.gap), ...r.map((e) => e.gap * 1.05)),
		maximumValue: Math.max(1, t * 1.25, ...n.map((e) => e.award * 1.05), ...r.map((e) => e.catchUpValue * 1.05))
	};
}
function Mu(e, t, n) {
	return { maximumRecipientXp: Math.max(1e3, e * 4, ...t.map((e) => e.recipientXp), ...n.map((e) => e.beforeXp * 1.05)) };
}
function Nu(e) {
	let t = (t) => Bu(t, e.bounds.maximumGap), n = (t) => Vu(t, e.bounds.maximumValue);
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
function Pu(e) {
	let t = (t) => Bu(t, e.bounds.maximumRecipientXp), n = Hu;
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
function Fu(e, t, n, r) {
	if (e === "reference") {
		let r = Uu((t.x - 68) / 472, .001, 1), i = 1 - Uu((t.y - 24) / 192, 0, 1);
		return {
			gapForMaximumAward: Math.max(1, Math.round(r * n.maximumGap)),
			kind: e,
			maximumAward: Math.max(0, Math.round(i * n.maximumValue))
		};
	}
	let i = Uu((216 - t.y) / 192 * (n.maximumValue / Math.max(1, r)), .03, .99);
	return {
		curveExponent: Wu(Uu(Math.log(i) / Math.log(.5), .1, 5), .05),
		kind: e
	};
}
function Iu(e, t, n) {
	if (e === "pivot") {
		let r = Uu((t.x - 68) / 472, .001, 1);
		return {
			kind: e,
			scalePivot: Math.max(1, Math.round(r * n.maximumRecipientXp))
		};
	}
	let r = Uu(1 - (t.y - 24) / 192, .25, .99);
	return {
		kind: e,
		scaleExponent: Wu(Uu(Math.log(r) / Math.log(.5), 0, 2), .05)
	};
}
function Lu(e, t, n) {
	let r = Math.max(10, Math.round(t / 20)), i = Math.max(1, Math.round(Math.max(1, n) / 20));
	if (e === "ArrowLeft" || e === "ArrowRight") return { gapForMaximumAward: Math.max(1, t + (e === "ArrowLeft" ? -r : r)) };
	if (e === "ArrowUp" || e === "ArrowDown") return { maximumAward: Math.max(0, n + (e === "ArrowUp" ? i : -i)) };
}
function Ru(e, t, n, r) {
	if ([
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp"
	].includes(e)) return Wu(Uu(t + (e === "ArrowUp" || e === "ArrowRight" ? -1 : 1) * .05, n, r), .05);
}
function zu(e, t) {
	if (e !== "ArrowLeft" && e !== "ArrowRight") return;
	let n = Math.max(100, Math.round(t / 20));
	return Math.max(1, t + (e === "ArrowLeft" ? -n : n));
}
function Bu(e, t) {
	return 68 + Math.max(0, e) / Math.max(1, t) * 472;
}
function Vu(e, t) {
	return 24 + (1 - Math.max(0, e) / Math.max(1, t)) * 192;
}
function Hu(e) {
	return 24 + (1 - Uu(e, 0, 1)) * 192;
}
function Uu(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Wu(e, t) {
	let n = t.toString().split(".")[1]?.length ?? 0;
	return Number((Math.round(e / t) * t).toFixed(n));
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graphMath.ts
function Gu(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: (t.clientX - n.left) / n.width * 560,
		y: (t.clientY - n.top) / n.height * 270
	};
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/GraphCanvas.vue?vue&type=script&setup=true&lang.ts
var Ku = ["viewBox", "aria-labelledby"], qu = ["id"], Ju = ["id"], Yu = [
	"x1",
	"x2",
	"y1",
	"y2"
], Xu = [
	"x1",
	"x2",
	"y1",
	"y2"
], Zu = [
	"x1",
	"x2",
	"y1",
	"y2"
], Qu = ["points"], $u = ["cx", "cy"], ed = ["x", "y"], td = ["x", "y"], nd = ["x", "y"], rd = ["x", "y"], id = ["x", "y"], ad = ["x", "y"], od = ["transform", "y"], sd = /* @__PURE__ */ z({
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
		return (t, r) => (H(), U("svg", {
			class: "tw:block tw:h-auto tw:w-full tw:max-w-full tw:touch-none tw:[user-select:none]",
			viewBox: `0 0 ${F(560)} ${F(270)}`,
			role: "img",
			"aria-labelledby": `${e.titleId} ${e.descriptionId}`,
			onPointercancel: r[0] ||= (e) => n("pointercancel", e),
			onPointermove: r[1] ||= (e) => n("pointermove", e),
			onPointerup: r[2] ||= (e) => n("pointerup", e)
		}, [
			W("title", { id: e.titleId }, O(e.title), 9, qu),
			W("desc", { id: e.descriptionId }, O(e.description), 9, Ju),
			W("line", {
				class: "tw:text-base-content/25!",
				x1: F(68),
				x2: F(68),
				y1: F(24),
				y2: F(24) + F(192),
				stroke: "currentColor"
			}, null, 8, Yu),
			W("line", {
				class: "tw:text-base-content/25!",
				x1: F(68),
				x2: F(68) + F(472),
				y1: F(24) + F(192),
				y2: F(24) + F(192),
				stroke: "currentColor"
			}, null, 8, Xu),
			W("line", {
				class: "tw:text-base-content/25!",
				x1: e.verticalGuideX,
				x2: e.verticalGuideX,
				y1: F(24),
				y2: F(24) + F(192),
				stroke: "currentColor",
				"stroke-dasharray": "4 5"
			}, null, 8, Zu),
			kr(t.$slots, "guides"),
			W("polyline", {
				class: "tw:text-secondary!",
				fill: "none",
				points: e.points,
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "3"
			}, null, 8, Qu),
			(H(!0), U(V, null, Or(e.markers, (e) => (H(), U("g", {
				key: e.actorId,
				class: "tw:text-base-content!",
				"aria-hidden": "true"
			}, [W("circle", {
				cx: e.x,
				cy: e.y,
				fill: "currentColor",
				r: "9"
			}, [W("title", null, O(e.label), 1)], 8, $u), W("text", {
				class: "tw:text-base-100!",
				x: e.x,
				y: e.y + 3,
				fill: "currentColor",
				"font-size": "9",
				"font-weight": "700",
				"text-anchor": "middle"
			}, O(e.index), 9, ed)]))), 128)),
			kr(t.$slots, "handles"),
			W("text", {
				class: "tw:text-base-content/65!",
				x: F(68),
				y: F(24) + F(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "middle"
			}, " 0 ", 8, td),
			W("text", {
				class: "tw:text-base-content/65!",
				x: F(68) + F(472),
				y: F(24) + F(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, O(e.maximumXLabel), 9, nd),
			W("text", {
				class: "tw:text-base-content/75!",
				x: F(68) + F(472) / 2,
				y: F(270) - 8,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, O(e.xAxisLabel), 9, rd),
			e.maximumYLabel ? (H(), U("text", {
				key: 0,
				class: "tw:text-base-content/65!",
				x: F(68) - 10,
				y: F(24) + 4,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, O(e.maximumYLabel), 9, id)) : q("", !0),
			W("text", {
				class: "tw:text-base-content/65!",
				x: F(68) - 10,
				y: F(24) + F(192) + 3,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, O(e.minimumYLabel), 9, ad),
			W("text", {
				class: "tw:text-base-content/75!",
				transform: `rotate(-90 16 ${F(24) + F(192) / 2})`,
				x: "16",
				y: F(24) + F(192) / 2,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, O(e.yAxisLabel), 9, od),
			kr(t.$slots, "labels")
		], 40, Ku));
	}
}), cd = [
	"role",
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], ld = ["x", "y"], ud = ["x", "y"], dd = /* @__PURE__ */ z({
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
		return (t, r) => (H(), U("g", {
			class: "tw:cursor-grab tw:text-secondary!",
			role: e.role ?? "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= Po((e) => n("pointerdown", e), ["stop"])
		}, [W("rect", {
			x: e.x - 8,
			y: e.y - 8,
			fill: "currentColor",
			height: "16",
			rx: "2",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18",
			width: "16"
		}, null, 8, ld), W("rect", {
			class: "tw:text-base-100!",
			x: e.x - 3,
			y: e.y - 3,
			fill: "currentColor",
			height: "6",
			rx: "1",
			width: "6"
		}, null, 8, ud)], 40, cd));
	}
}), fd = {
	key: 0,
	class: "tw:mt-2"
}, pd = { class: "tw:mt-1 tw:grid tw:[list-style:none] tw:grid-cols-1 tw:gap-x-3 tw:gap-y-1 tw:p-0 tw:text-xs tw:text-base-content/70! tw:min-[32rem]:grid-cols-2" }, md = { class: "tw:font-bold tw:text-base-content!" }, hd = { class: "tw:break-words" }, gd = /* @__PURE__ */ z({
	__name: "RecipientLegend",
	props: { items: {} },
	setup(e) {
		return (t, n) => e.items.length ? (H(), U("figcaption", fd, [n[0] ||= W("span", { class: "tw:text-xs tw:font-semibold" }, "Selected recipients", -1), W("ol", pd, [(H(!0), U(V, null, Or(e.items, (e) => (H(), U("li", {
			key: e.actorId,
			class: "tw:min-w-0"
		}, [W("span", md, O(e.index) + ".", 1), W("span", hd, O(e.text), 1)]))), 128))])])) : q("", !0);
	}
}), _d = [
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], vd = ["cx", "cy"], yd = ["cx", "cy"], bd = /* @__PURE__ */ z({
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
		return (t, r) => (H(), U("g", {
			class: "tw:cursor-grab tw:text-secondary!",
			role: "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= Po((e) => n("pointerdown", e), ["stop"])
		}, [W("circle", {
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "8",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18"
		}, null, 8, vd), W("circle", {
			class: "tw:text-base-100!",
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "3"
		}, null, 8, yd)], 40, _d));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/drag.ts
function xd(e, t) {
	let n = /* @__PURE__ */ en();
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
function Sd(e, t) {
	let n = Y(() => ju(e.gapForMaximumAward, e.maximumAward, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = xd(() => ({ ...n.value }), _), s = Y(() => r.value?.snapshot ?? n.value), c = Y(() => Nu({
		awards: e.awards,
		bounds: s.value,
		curveExponent: e.curveExponent,
		gapForMaximumAward: e.gapForMaximumAward,
		maximumAward: e.maximumAward,
		samples: e.samples
	})), l = Y(() => s.value.maximumGap), u = Y(() => c.value.points), d = Y(() => c.value.recipientLegend), f = Y(() => c.value.recipientPoints), p = Y(() => c.value.referencePoint), m = Y(() => c.value.shapePoint);
	function h(e) {
		return Bu(e, s.value.maximumGap);
	}
	function g(e) {
		return Vu(e, s.value.maximumValue);
	}
	function _(n, r) {
		let i = Fu(n.kind, Gu(n.svg, r), n.snapshot, e.maximumAward);
		if (i.kind === "reference") {
			t("update:gapForMaximumAward", i.gapForMaximumAward), t("update:maximumAward", i.maximumAward);
			return;
		}
		t("update:curveExponent", i.curveExponent);
	}
	function v(n) {
		let r = Lu(n.key, e.gapForMaximumAward, e.maximumAward);
		r && (n.preventDefault(), r.gapForMaximumAward !== void 0 && t("update:gapForMaximumAward", r.gapForMaximumAward), r.maximumAward !== void 0 && t("update:maximumAward", r.maximumAward));
	}
	function y(n) {
		let r = Ru(n.key, e.curveExponent, .1, 5);
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
var Cd = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-catch-up-graph-heading"
}, wd = [
	"x1",
	"x2",
	"y1",
	"y2"
], Td = ["x", "y"], Ed = /* @__PURE__ */ z({
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
		let { beginDrag: n, endDrag: r, maximumGap: i, points: a, recipientLegend: o, recipientPoints: s, referencePoint: c, shapePoint: l, toGraphX: u, toGraphY: d, updateDrag: f, updateReferenceWithKeyboard: p, updateShapeWithKeyboard: m } = Sd(e, t);
		return (t, h) => (H(), U("figure", Cd, [
			h[2] ||= W("div", { class: "tw:mb-2" }, [W("h4", {
				id: "xp-catch-up-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Initial catch-up value by XP gap "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to set the reference gap and hard limit. Drag the round point to shape the curve. ")], -1),
			G(sd, {
				description: "The horizontal axis is the recipient's gap below the selected XP leader. The vertical axis is the initial catch-up value before recipient decay, companion rate, and the final hard limit. Numbered markers identify selected recipients.",
				"description-id": "xp-catch-up-graph-description",
				markers: F(s),
				"maximum-x-label": `${Math.round(F(i))} XP`,
				"minimum-y-label": "0",
				points: F(a),
				title: "Editable catch-up XP curve",
				"title-id": "xp-catch-up-graph-title",
				"vertical-guide-x": F(u)(e.gapForMaximumAward),
				"x-axis-label": "Gap below selected XP leader",
				"y-axis-label": "Initial catch-up XP",
				onPointercancel: F(r),
				onPointermove: F(f),
				onPointerup: F(r)
			}, {
				guides: Hn(() => [W("line", {
					class: "tw:text-warning",
					x1: F(68),
					x2: F(68) + F(472),
					y1: F(d)(e.maximumAward),
					y2: F(d)(e.maximumAward),
					stroke: "currentColor",
					"stroke-dasharray": "6 5"
				}, null, 8, wd)]),
				handles: Hn(() => [G(bd, {
					"aria-label": "Catch-up curve shape",
					"aria-value-max": 5,
					"aria-value-min": .1,
					"aria-value-now": e.curveExponent,
					"aria-value-text": `Exponent ${e.curveExponent}`,
					x: F(l).x,
					y: F(l).y,
					onKeydown: F(m),
					onPointerdown: h[0] ||= (e) => F(n)("shape", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), G(dd, {
					"aria-label": `Reference point: ${e.gapForMaximumAward} XP gap and ${e.maximumAward} XP hard limit. Use left and right arrows for the gap, up and down arrows for the hard limit.`,
					role: "button",
					x: F(c).x,
					y: F(c).y,
					onKeydown: F(p),
					onPointerdown: h[1] ||= (e) => F(n)("reference", e)
				}, null, 8, [
					"aria-label",
					"x",
					"y",
					"onKeydown"
				])]),
				labels: Hn(() => [W("text", {
					class: "tw:text-warning",
					x: F(68) + 7,
					y: Math.max(F(24) + 12, F(d)(e.maximumAward) - 7),
					fill: "currentColor",
					"font-size": "11",
					"font-weight": "600"
				}, " Hard limit " + O(e.maximumAward) + " XP ", 9, Td)]),
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
			G(gd, { items: F(o) }, null, 8, ["items"])
		]));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/useDecayGraph.ts
function Dd(e, t) {
	let n = Y(() => Mu(e.scalePivot, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = xd(() => ({ ...n.value }), g), s = Y(() => r.value?.snapshot ?? n.value), c = Y(() => Pu({
		awards: e.awards,
		bounds: s.value,
		samples: e.samples,
		scaleExponent: e.scaleExponent,
		scalePivot: e.scalePivot
	})), l = Y(() => s.value.maximumRecipientXp), u = Y(() => c.value.points), d = Y(() => c.value.pivotPoint), f = Y(() => c.value.recipientLegend), p = Y(() => c.value.recipientPoints), m = Y(() => c.value.strengthPoint);
	function h(e) {
		return Bu(e, s.value.maximumRecipientXp);
	}
	function g(e, n) {
		let r = Iu(e.kind, Gu(e.svg, n), e.snapshot);
		if (r.kind === "pivot") {
			t("update:scalePivot", r.scalePivot);
			return;
		}
		t("update:scaleExponent", r.scaleExponent);
	}
	function _(n) {
		let r = zu(n.key, e.scalePivot);
		r !== void 0 && (n.preventDefault(), t("update:scalePivot", r));
	}
	function v(n) {
		let r = Ru(n.key, e.scaleExponent, 0, 2);
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
var Od = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-decay-graph-heading"
}, kd = /* @__PURE__ */ z({
	__name: "XpDecayGraph",
	props: {
		awards: {},
		samples: {},
		scaleExponent: {},
		scalePivot: {}
	},
	emits: ["update:scaleExponent", "update:scalePivot"],
	setup(e, { emit: t }) {
		let { beginDrag: n, endDrag: r, maximumRecipientXp: i, pivotPoint: a, points: o, recipientLegend: s, recipientPoints: c, strengthPoint: l, toGraphX: u, updateDrag: d, updatePivotWithKeyboard: f, updateStrengthWithKeyboard: p } = Dd(e, t);
		return (t, m) => (H(), U("figure", Od, [
			m[2] ||= W("div", { class: "tw:mb-2" }, [W("h4", {
				id: "xp-decay-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Catch-up strength by recipient total XP "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to choose where decay begins. Drag the round point to make decay gentler or stronger. ")], -1),
			G(sd, {
				description: "The horizontal axis is each recipient's own total XP. The vertical axis is the multiplier applied to that recipient's initial catch-up value. Numbered markers identify selected recipients.",
				"description-id": "xp-decay-graph-description",
				markers: F(c),
				"maximum-x-label": `${Math.round(F(i))} XP`,
				"maximum-y-label": "100%",
				"minimum-y-label": "0%",
				points: F(o),
				title: "Editable recipient XP decay curve",
				"title-id": "xp-decay-graph-title",
				"vertical-guide-x": F(u)(e.scalePivot),
				"x-axis-label": "Recipient total XP",
				"y-axis-label": "Decay multiplier",
				onPointercancel: F(r),
				onPointermove: F(d),
				onPointerup: F(r)
			}, {
				handles: Hn(() => [G(bd, {
					"aria-label": "Recipient decay strength",
					"aria-value-max": 2,
					"aria-value-min": 0,
					"aria-value-now": e.scaleExponent,
					"aria-value-text": `Decay exponent ${e.scaleExponent}`,
					x: F(l).x,
					y: F(l).y,
					onKeydown: F(p),
					onPointerdown: m[0] ||= (e) => F(n)("strength", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), G(dd, {
					"aria-label": "Recipient total XP where decay begins",
					"aria-value-max": Math.round(F(i)),
					"aria-value-min": 1,
					"aria-value-now": e.scalePivot,
					"aria-value-text": `${e.scalePivot} total XP`,
					x: F(a).x,
					y: F(a).y,
					onKeydown: F(f),
					onPointerdown: m[1] ||= (e) => F(n)("pivot", e)
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
			G(gd, { items: F(s) }, null, 8, ["items"])
		]));
	}
}), Ad = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "curve-settings-title"
}, jd = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, Md = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[66rem]:grid-cols-2" }, Nd = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, Pd = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, Fd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, Id = { class: "dui-fieldset tw:min-w-0" }, Ld = { class: "dui-fieldset tw:min-w-0" }, Rd = { class: "dui-fieldset tw:min-w-0" }, zd = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, Bd = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, Vd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, Hd = { class: "dui-fieldset tw:min-w-0" }, Ud = { class: "dui-fieldset tw:min-w-0" }, Wd = { class: "dui-fieldset tw:min-w-0" }, Gd = /* @__PURE__ */ z({
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
		let t = ti(e, "companionMultiplier"), n = ti(e, "curveExponent"), r = ti(e, "gapForMaximumAward"), i = ti(e, "maximumAward"), a = ti(e, "scaleExponent"), o = ti(e, "scalePivot");
		return (s, c) => (H(), U("section", Ad, [W("div", jd, [
			c[31] ||= W("div", null, [W("h2", {
				id: "curve-settings-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " How awards are calculated "), W("p", { class: "tw:m-0 tw:max-w-3xl tw:text-xs tw:text-base-content/65!" }, " The graphs and number fields are two controls for the same settings. Drag either curve and its fields update immediately. ")], -1),
			W("div", Md, [W("article", Nd, [W("div", Pd, [
				c[20] ||= W("div", null, [W("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 1. Catch-up curve "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This curve converts the XP gap below the selected leader into an initial XP value. ")], -1),
				W("div", Fd, [
					W("fieldset", Id, [
						c[11] ||= W("legend", { class: "dui-fieldset-legend" }, "Hard limit", -1),
						c[12] ||= W("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-maximum-award"
						}, " Maximum final award ", -1),
						R(W("input", {
							id: "xp-maximum-award",
							"onUpdate:modelValue": c[0] ||= (e) => i.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "0",
							step: "1",
							type: "number"
						}, null, 512), [[
							X,
							i.value,
							void 0,
							{ number: !0 }
						]]),
						c[13] ||= W("p", { class: "dui-label tw:whitespace-normal" }, " Applied last; no recipient can receive more. ", -1)
					]),
					W("fieldset", Ld, [
						c[14] ||= W("legend", { class: "dui-fieldset-legend" }, "Reference gap", -1),
						c[15] ||= W("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-gap-for-cap"
						}, " Gap equal to the hard limit ", -1),
						R(W("input", {
							id: "xp-gap-for-cap",
							"onUpdate:modelValue": c[1] ||= (e) => r.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "1",
							type: "number"
						}, null, 512), [[
							X,
							r.value,
							void 0,
							{ number: !0 }
						]]),
						c[16] ||= W("p", { class: "dui-label tw:whitespace-normal" }, " At this gap, initial catch-up equals the limit before decay. ", -1)
					]),
					W("fieldset", Rd, [
						c[17] ||= W("legend", { class: "dui-fieldset-legend" }, "Curve shape", -1),
						c[18] ||= W("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-curve-exponent"
						}, " Catch-up exponent ", -1),
						R(W("input", {
							id: "xp-curve-exponent",
							"onUpdate:modelValue": c[2] ||= (e) => n.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "5",
							min: "0.1",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							X,
							n.value,
							void 0,
							{ number: !0 }
						]]),
						c[19] ||= W("p", { class: "dui-label tw:whitespace-normal" }, " Below 1 helps small gaps sooner; above 1 favors large gaps. ", -1)
					])
				]),
				G(Ed, {
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
			])]), W("article", zd, [W("div", Bd, [
				c[30] ||= W("div", null, [W("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 2. Recipient decay curve "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " High-XP builds depend less on raw XP differences. This multiplier is evaluated separately for every recipient. ")], -1),
				W("div", Vd, [
					W("fieldset", Hd, [
						c[21] ||= W("legend", { class: "dui-fieldset-legend" }, "Decay start", -1),
						c[22] ||= W("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-pivot"
						}, " Full-strength recipient XP ", -1),
						R(W("input", {
							id: "xp-scale-pivot",
							"onUpdate:modelValue": c[6] ||= (e) => o.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "100",
							type: "number"
						}, null, 512), [[
							X,
							o.value,
							void 0,
							{ number: !0 }
						]]),
						c[23] ||= W("p", { class: "dui-label tw:whitespace-normal" }, " Recipients at or below this total keep 100% strength. ", -1)
					]),
					W("fieldset", Ud, [
						c[24] ||= W("legend", { class: "dui-fieldset-legend" }, "Decay strength", -1),
						c[25] ||= W("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-exponent"
						}, " Recipient decay exponent ", -1),
						R(W("input", {
							id: "xp-scale-exponent",
							"onUpdate:modelValue": c[7] ||= (e) => a.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "2",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							X,
							a.value,
							void 0,
							{ number: !0 }
						]]),
						c[26] ||= W("p", { class: "dui-label tw:whitespace-normal" }, " Zero disables decay; higher values weaken catch-up faster. ", -1)
					]),
					W("fieldset", Wd, [
						c[27] ||= W("legend", { class: "dui-fieldset-legend" }, "Companion rate", -1),
						c[28] ||= W("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-companion-rate"
						}, " Companion multiplier ", -1),
						R(W("input", {
							id: "xp-companion-rate",
							"onUpdate:modelValue": c[8] ||= (e) => t.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "1",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							X,
							t.value,
							void 0,
							{ number: !0 }
						]]),
						c[29] ||= W("p", { class: "dui-label tw:whitespace-normal" }, " 0.5 gives player-owned companions half the calculated XP. ", -1)
					])
				]),
				G(kd, {
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
			c[32] ||= W("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [W("i", {
				class: "fa-solid fa-calculator",
				"aria-hidden": "true"
			}), W("span", { class: "tw:min-w-0 tw:break-words" }, [
				K(" Initial catch-up = hard limit × (leader gap ÷ reference gap)"),
				W("sup", null, "shape"),
				K(". Final XP = min(hard limit, initial catch-up × recipient decay × companion rate). ")
			])], -1)
		])]));
	}
}), Kd = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipient-defaults-title"
}, qd = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, Jd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-4 tw:min-[42rem]:grid-cols-2" }, Yd = { class: "dui-fieldset tw:min-w-0" }, Xd = { class: "dui-fieldset tw:min-w-0" }, Zd = /* @__PURE__ */ z({
	__name: "XpRecipientDefaults",
	props: {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {},
		defaultSelection: { required: !0 },
		defaultSelectionModifiers: {}
	},
	emits: ["update:defaultReason", "update:defaultSelection"],
	setup(e) {
		let t = ti(e, "defaultReason"), n = ti(e, "defaultSelection");
		return (e, r) => (H(), U("section", Kd, [W("div", qd, [r[9] ||= W("div", null, [W("h2", {
			id: "recipient-defaults-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipient and journal defaults "), W("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These values seed a newly opened console when no eligible tokens are targeted. ")], -1), W("div", Jd, [W("fieldset", Yd, [
			r[3] ||= W("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Default recipients", -1),
			r[4] ||= W("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-default-selection"
			}, " When no tokens are targeted ", -1),
			R(W("select", {
				id: "xp-default-selection",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				class: "dui-select dui-select-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!"
			}, [...r[2] ||= [
				W("option", { value: "party" }, "Party (assigned player characters)", -1),
				W("option", { value: "company" }, "Company (party plus companions)", -1),
				W("option", { value: "world" }, "World (every character actor)", -1)
			]], 512), [[Oo, n.value]]),
			r[5] ||= W("p", { class: "dui-label tw:whitespace-normal" }, " Explicit targets replace this Drowsy’s WFRP4e Toolkit default. ", -1)
		]), W("fieldset", Xd, [
			r[6] ||= W("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Experience journal", -1),
			r[7] ||= W("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-config-default-reason"
			}, " Default award reason ", -1),
			R(W("input", {
				id: "xp-config-default-reason",
				"onUpdate:modelValue": r[1] ||= (e) => t.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
				type: "text"
			}, null, 512), [[X, t.value]]),
			r[8] ||= W("p", { class: "dui-label tw:whitespace-normal" }, [
				K(" Supports the "),
				W("code", null, "%session%"),
				K(" and "),
				W("code", null, "%date%"),
				K(" tokens. The award console can still edit the reason for one batch. ")
			], -1)
		])])])]));
	}
}), Qd = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, $d = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, ef = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, tf = { class: "tw:min-w-0 tw:break-words" }, nf = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, rf = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[54rem]:grid-cols-[minmax(15rem,0.72fr)_minmax(0,2fr)]" }, af = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "xp-launcher-settings"
}, of = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, sf = { class: "dui-fieldset tw:gap-2" }, cf = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, lf = { class: "tw:mt-3 tw:min-w-0" }, uf = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[34rem]:flex-row tw:min-[34rem]:items-center tw:min-[34rem]:justify-between" }, df = { class: "tw:flex tw:min-w-0 tw:flex-col tw:gap-2 tw:min-[30rem]:flex-row" }, ff = ["disabled"], pf = ["disabled"], mf = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, hf = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, gf = /* @__PURE__ */ z({
	__name: "XpCurveConfiguratorApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Au();
		n.initialize(t.initialization, t.actions);
		let { curveSamples: r, decaySamples: i, defaultReason: a, defaultSelection: o, errorMessage: s, isSaving: c, launchers: l, parameters: u, plan: d, statusMessage: f } = bs(n);
		return (e, t) => (H(), U("main", Qd, [
			G(xc, {
				description: "Set launchers, recipient defaults, and the catch-up and decay curves used by new award consoles.",
				icon: "fa-solid fa-sliders",
				title: "XP Curve Configurator"
			}),
			W("div", $d, [
				F(s) ? (H(), U("div", ef, [t[10] ||= W("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), W("span", tf, O(F(s)), 1)])) : q("", !0),
				F(f) ? (H(), U("div", nf, [t[11] ||= W("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), W("span", null, O(F(f)), 1)])) : q("", !0),
				W("div", rf, [W("section", af, [W("div", of, [
					t[14] ||= W("div", null, [W("h2", {
						id: "xp-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Client preferences for this browser and user. ")], -1),
					W("fieldset", sf, [t[13] ||= W("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1), W("label", cf, [R(W("input", {
						"onUpdate:modelValue": t[0] ||= (e) => F(l).tokenControls = e,
						class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
						type: "checkbox"
					}, null, 512), [[Eo, F(l).tokenControls]]), t[12] ||= W("span", { class: "tw:min-w-0" }, [W("strong", { class: "tw:block" }, "Token Controls"), W("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the chart launcher in Token Controls. ")], -1)])]),
					t[15] ||= W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Launcher changes apply after a reload. Macros and the module API stay available. ", -1)
				])]), G(Zd, {
					"default-reason": F(a),
					"onUpdate:defaultReason": t[1] ||= (e) => /* @__PURE__ */ N(a) ? a.value = e : null,
					"default-selection": F(o),
					"onUpdate:defaultSelection": F(n).setDefaultSelection
				}, null, 8, [
					"default-reason",
					"default-selection",
					"onUpdate:defaultSelection"
				])]),
				W("div", lf, [G(Gd, {
					"companion-multiplier": F(u).companionMultiplier,
					"onUpdate:companionMultiplier": t[2] ||= (e) => F(u).companionMultiplier = e,
					"curve-exponent": F(u).curveExponent,
					"onUpdate:curveExponent": t[3] ||= (e) => F(u).curveExponent = e,
					"gap-for-maximum-award": F(u).gapForMaximumAward,
					"onUpdate:gapForMaximumAward": t[4] ||= (e) => F(u).gapForMaximumAward = e,
					"maximum-award": F(u).maximumAward,
					"onUpdate:maximumAward": t[5] ||= (e) => F(u).maximumAward = e,
					"scale-exponent": F(u).scaleExponent,
					"onUpdate:scaleExponent": t[6] ||= (e) => F(u).scaleExponent = e,
					"scale-pivot": F(u).scalePivot,
					"onUpdate:scalePivot": t[7] ||= (e) => F(u).scalePivot = e,
					awards: F(d).awards,
					"decay-samples": F(i),
					samples: F(r)
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
			W("footer", uf, [t[18] ||= W("p", { class: "tw:m-0 tw:min-w-0 tw:text-xs tw:text-base-content/65!" }, " Saving configuration never awards XP. World defaults apply to the next console opening. ", -1), W("div", df, [W("button", {
				class: "dui-btn dui-btn-ghost tw:min-w-44 tw:rounded-full tw:border tw:border-base-content/20! tw:bg-base-200!",
				disabled: F(c),
				type: "button",
				onClick: t[8] ||= (...e) => F(n).resetToDefaults && F(n).resetToDefaults(...e)
			}, [...t[16] ||= [W("i", {
				class: "fa-solid fa-arrow-rotate-left",
				"aria-hidden": "true"
			}, null, -1), K(" Reset to defaults ", -1)]], 8, ff), W("button", {
				class: "dui-btn dui-btn-primary tw:min-w-48 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: F(c),
				type: "button",
				onClick: t[9] ||= (...e) => F(n).saveConfiguration && F(n).saveConfiguration(...e)
			}, [F(c) ? (H(), U("span", mf)) : (H(), U("i", hf)), t[17] ||= K(" Save configuration ", -1)], 8, pf)])])
		]));
	}
});
//#endregion
//#region src/functions/xp-curve/selection.ts
function _f(e) {
	let { assignedActorIds: t, candidates: n, defaultSelection: r, targetedActorIds: i } = e;
	return n.map((e) => {
		let n = vf(e, t);
		return {
			category: n,
			id: e.id,
			name: e.name,
			selected: i?.has(e.id) ?? yf(e.id, n, r, t),
			totalXp: e.totalXp
		};
	}).sort(bf);
}
function vf(e, t) {
	return e.hasPlayerOwner && !t.has(e.id) ? "companion" : "standard";
}
function yf(e, t, n, r) {
	return n === "world" ? !0 : n === "company" ? r.has(e) || t === "companion" : r.has(e);
}
function bf(e, t) {
	return e.selected === t.selected ? e.name.localeCompare(t.name) : e.selected ? -1 : 1;
}
//#endregion
//#region src/module/xp-curve/actors.ts
function xf(e) {
	let t = Ef(), n = Df(), r = n === void 0 ? "default" : "targets";
	return {
		actors: _f({
			assignedActorIds: t,
			candidates: Array.from(game.actors).filter((e) => e.type === "character").map(Cf),
			defaultSelection: e,
			targetedActorIds: n
		}),
		selectionSource: r
	};
}
function Sf(e) {
	let t = Ef();
	return e.map((e) => {
		let n = game.actors.get(e);
		if (!n || n.type !== "character") throw Error(`XP recipient ${e} is no longer an available character actor.`);
		return wf(n, vf(n, t), !0);
	});
}
function Cf(e) {
	let t = Tf(e);
	return {
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		name: e.name,
		totalXp: t.totalXp
	};
}
function wf(e, t, n) {
	let r = Tf(e);
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
function Tf(e) {
	let t = e.system;
	if (!Of(t)) throw Error(`WFRP4e actor "${e.name}" does not expose readable system data.`);
	let n = t.details, r = t.awardExp;
	if (!Of(n) || typeof r != "function") throw Error(`WFRP4e actor "${e.name}" does not expose XP award operations.`);
	let i = n.experience;
	if (!Of(i) || !Number.isFinite(Number(i.total))) throw Error(`WFRP4e actor "${e.name}" does not expose a numeric total XP value.`);
	return {
		awardExperience: async (e, n) => {
			await r.call(t, e, n, null, !0);
		},
		totalXp: Math.max(0, Math.round(Number(i.total)))
	};
}
function Ef() {
	return new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => typeof e == "string"));
}
function Df() {
	if (!(!game.user.targets || game.user.targets.size === 0)) return new Set(Array.from(game.user.targets).map((e) => e.actor).filter((e) => e?.type === "character").map((e) => e.id));
}
function Of(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/xp-curve/settings/keys.ts
var Q = {
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
function kf() {
	return {
		defaultReason: Pf(Q.defaultReason),
		defaultSelection: Ff(Q.defaultSelection),
		parameters: {
			companionMultiplier: Nf(Q.companionMultiplier),
			curveExponent: Nf(Q.curveExponent),
			gapForMaximumAward: Nf(Q.gapForMaximumAward),
			maximumAward: Nf(Q.maximumAward),
			scaleExponent: Nf(Q.scaleExponent),
			scalePivot: Nf(Q.scalePivot)
		}
	};
}
async function Af(e) {
	let n = [
		[Q.companionMultiplier, e.parameters.companionMultiplier],
		[Q.curveExponent, e.parameters.curveExponent],
		[Q.defaultReason, e.defaultReason],
		[Q.defaultSelection, e.defaultSelection],
		[Q.gapForMaximumAward, e.parameters.gapForMaximumAward],
		[Q.maximumAward, e.parameters.maximumAward],
		[Q.scaleExponent, e.parameters.scaleExponent],
		[Q.scalePivot, e.parameters.scalePivot]
	];
	for (let [e, r] of n) await game.settings.set(t, e, r);
}
function jf(e) {
	return Mf(e);
}
function Mf(e) {
	return game.settings.get(t, e) === !0;
}
function Nf(e) {
	return Number(game.settings.get(t, e));
}
function Pf(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function Ff(e) {
	return If(Pf(e));
}
function If(e) {
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/xp-curve/configuration.ts
function Lf() {
	let e = kf();
	return {
		...e,
		actors: xf(e.defaultSelection).actors,
		launchers: { tokenControls: jf(Q.showTokenControlsLauncher) }
	};
}
async function Rf(e) {
	Lc(Z.xpCurveConsole), await Af({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: fl(e.parameters)
	}), await game.settings.set(t, Q.showTokenControlsLauncher, e.launchers.tokenControls), ui.notifications.info("XP Curve Console configuration saved.");
}
//#endregion
//#region src/module/apps/xp-curve-configurator/XpCurveConfiguratorApplication.ts
var zf = class extends Hc {
	static ACCESS_POLICY = Z.xpCurveConsole;
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
		return gf;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: async (e) => {
				await Rf(e), await this.#e.onSaved?.();
			} },
			initialization: Lf()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-configurator/open.ts
async function Bf(e = {}) {
	let t = new zf(e);
	return await t.render(!0), t;
}
function Vf(e = {}) {
	Bf(e).catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/types/session-management/SessionManagement.ts
var Hf = {
	currentSessionReference: "",
	sessions: [],
	version: 1
};
//#endregion
//#region src/functions/records/parse.ts
function Uf(e) {
	if (typeof e != "string") return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : t.toISOString();
}
function Wf(e) {
	return typeof e == "string" ? e : "";
}
function Gf(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/functions/session-management/session.ts
var Kf = 500;
function qf(e) {
	let t = e.trim();
	if (!t) return "";
	let n = Number(t);
	return Number.isFinite(n) && Math.trunc(n) === n ? String(n + 1) : t;
}
function Jf(e, t, n) {
	let r = t.sessionReference.trim(), i = t.nextSessionReference.trim(), a = $f(t.occurredAt, "session occurrence"), o = $f(n.recordedAt, "session record");
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
			sessions: [s, ...e.sessions].slice(0, Kf)
		}
	};
}
function Yf(e) {
	let t = Qf(e);
	if (!t || t.version !== 1) return {
		...Hf,
		sessions: []
	};
	let n = Array.isArray(t.sessions) ? t.sessions.flatMap(Xf).slice(0, Kf) : [], r = Zf(t.gmToolkitMigration);
	return {
		currentSessionReference: Wf(t.currentSessionReference),
		...r ? { gmToolkitMigration: r } : {},
		sessions: n,
		version: 1
	};
}
function Xf(e) {
	if (!Gf(e)) return [];
	let t = Wf(e.id), n = Uf(e.occurredAt), r = Uf(e.recordedAt), i = Wf(e.reference);
	return t && n && r && i ? [{
		id: t,
		occurredAt: n,
		recordedAt: r,
		reference: i
	}] : [];
}
function Zf(e) {
	if (!Gf(e) || !Gf(e.xpAwardSettings)) return;
	let t = Uf(e.importedAt), n = Wf(e.sessionReference), r = e.xpAwardSettings, i = r.defaultSelection;
	if (!(!t || i !== "party" && i !== "company" || !Number.isFinite(Number(r.defaultAmount)))) return {
		importedAt: t,
		sessionReference: n,
		xpAwardSettings: {
			defaultAmount: Math.round(Number(r.defaultAmount)),
			defaultReason: Wf(r.defaultReason),
			defaultSelection: i,
			includeTimestampInReason: r.includeTimestampInReason === !0
		}
	};
}
function Qf(e) {
	if (typeof e == "string") try {
		let t = JSON.parse(e);
		return Gf(t) ? t : void 0;
	} catch {
		return;
	}
}
function $f(e, t) {
	let n = new Date(e);
	if (Number.isNaN(n.getTime())) throw Error(`Enter a valid ${t} date and time.`);
	return n.toISOString();
}
//#endregion
//#region src/module/session-management/settings/keys.ts
var ep = { state: "sessionManagementState" };
//#endregion
//#region src/module/session-management/settings/load.ts
function tp() {
	return Yf(game.settings.get(t, ep.state));
}
function np() {
	return tp().currentSessionReference;
}
async function rp(e) {
	await game.settings.set(t, ep.state, JSON.stringify(e));
}
//#endregion
//#region src/module/xp-curve/initialization.ts
function ip() {
	let e = kf(), t = xf(e.defaultSelection);
	return {
		...e,
		...t,
		reasonContext: ap()
	};
}
function ap() {
	return {
		date: game.world.nextSession?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		session: np()
	};
}
//#endregion
//#region src/module/xp-curve/service.ts
async function op(e) {
	Lc(Z.xpCurveConsole);
	let t = Sf(Array.from(new Set(e.actorIds))), n = fl(e.parameters), r = pl(t.map((e) => e.choice), n);
	if (r.awards.length < 2) throw Error("Select at least two character actors to calculate catch-up XP.");
	if (r.totalAward < 1) throw Error("This curve produces no XP awards for the selected actors.");
	await Af({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: n
	});
	let i = bl(e.defaultReason, ap()), a = [];
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
	return await sp(o), ui.notifications.info(`Awarded ${o.totalAward} total XP across ${a.length} actors.`), o;
}
async function sp(e) {
	let t = e.awards.filter((e) => e.award > 0).map((e) => `<li><strong>${xl(e.actorName)}</strong>: +${e.award} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Curve Award</h2><p>${xl(e.reason)}</p><ul>${t}</ul><p><strong>${e.totalAward} XP awarded in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
//#endregion
//#region src/module/apps/xp-curve-console/XpCurveConsoleApplication.ts
var cp = class extends Hc {
	static ACCESS_POLICY = Z.xpCurveConsole;
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
		return Ou;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: op,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Curve Console.`, e), ui.notifications.error("XP awards completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				},
				openConfigurator: () => {
					Vf({ onSaved: () => this.render(!0) });
				}
			},
			initialization: ip()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-console/open.ts
async function lp() {
	let e = new cp();
	return await e.render(!0), e;
}
function up() {
	lp().catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Console. See the browser console for details.");
	});
}
//#endregion
//#region src/state/apps/session-management/store.ts
var dp = ys("session-management", () => {
	let e = /* @__PURE__ */ P({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), t = /* @__PURE__ */ P(""), n = /* @__PURE__ */ P(""), r = /* @__PURE__ */ P(""), i = /* @__PURE__ */ P(), a = /* @__PURE__ */ P(), o = /* @__PURE__ */ P(), s = /* @__PURE__ */ P(!1), c;
	function l(s, l) {
		c = l, e.value = {
			...s.state,
			sessions: s.state.sessions.map((e) => ({ ...e }))
		}, t.value = s.state.currentSessionReference, n.value = qf(t.value), r.value = s.occurredAtLocal, i.value = s.gmToolkitImport, a.value = void 0, o.value = void 0;
	}
	function u() {
		n.value = qf(t.value);
	}
	async function d() {
		await h(async () => {
			await g().saveCurrentSessionReference(t.value), e.value.currentSessionReference = t.value.trim(), t.value = e.value.currentSessionReference, n.value = qf(t.value), o.value = "Current session reference saved.";
		});
	}
	async function f() {
		await h(async () => {
			let i = await g().completeSession({
				nextSessionReference: n.value,
				occurredAt: r.value,
				sessionReference: t.value
			});
			e.value.sessions.unshift(i), e.value.currentSessionReference = n.value.trim(), t.value = e.value.currentSessionReference, n.value = qf(t.value), o.value = `Session ${i.reference} recorded.`;
		});
	}
	async function p() {
		await h(async () => {
			let r = await g().importGmToolkitData();
			e.value.gmToolkitMigration = r, e.value.currentSessionReference = r.sessionReference, t.value = r.sessionReference, n.value = qf(r.sessionReference), o.value = "GM Toolkit data imported. Future changes belong to Drowsy’s Toolkit.";
		});
	}
	function m() {
		g().openXpAwardConsole();
	}
	async function h(e) {
		if (!s.value) {
			s.value = !0, a.value = void 0, o.value = void 0;
			try {
				await e();
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Session management action failed.", e), a.value = e instanceof Error ? e.message : "The session action could not be completed.";
			} finally {
				s.value = !1;
			}
		}
	}
	function g() {
		if (!c) throw Error("The Session Management Console has not been initialized.");
		return c;
	}
	return {
		completeSession: f,
		currentSessionReference: t,
		errorMessage: a,
		gmToolkitImport: i,
		importGmToolkitData: p,
		initialize: l,
		isWorking: s,
		nextSessionReference: n,
		occurredAtLocal: r,
		openXpAwardConsole: m,
		saveCurrentReference: d,
		state: e,
		statusMessage: o,
		updateSuggestedNextSession: u
	};
}), fp = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, pp = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, mp = { class: "tw:min-w-0 tw:break-words" }, hp = {
	key: 1,
	class: "dui-alert dui-alert-success tw:m-4 tw:mb-0",
	role: "status"
}, gp = { class: "tw:min-w-0 tw:break-words" }, _p = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, vp = /* @__PURE__ */ z({
	__name: "ConsoleFrame",
	props: {
		description: {},
		errorMessage: {},
		icon: {},
		statusMessage: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (H(), U("main", fp, [
			G(xc, {
				description: e.description,
				icon: e.icon,
				title: e.title
			}, {
				end: Hn(() => [kr(t.$slots, "header-end")]),
				_: 3
			}, 8, [
				"description",
				"icon",
				"title"
			]),
			e.errorMessage ? (H(), U("div", pp, [n[0] ||= W("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), W("span", mp, O(e.errorMessage), 1)])) : q("", !0),
			e.statusMessage ? (H(), U("div", hp, [n[1] ||= W("i", {
				class: "fa-solid fa-circle-check",
				"aria-hidden": "true"
			}, null, -1), W("span", gp, O(e.statusMessage), 1)])) : q("", !0),
			W("div", _p, [kr(t.$slots, "default")]),
			kr(t.$slots, "footer")
		]));
	}
}), yp = { class: "tw:grid tw:min-w-0 tw:gap-3" }, bp = {
	key: 0,
	class: "dui-card dui-card-border tw:border-2 tw:border-secondary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-import-title"
}, xp = { class: "dui-card-body tw:gap-3 tw:p-4" }, Sp = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Cp = ["disabled"], wp = { class: "tw:grid tw:grid-cols-2 tw:gap-2 tw:text-sm tw:min-[36rem]:grid-cols-4" }, Tp = { class: "tw:rounded-box tw:bg-base-200! tw:p-2" }, Ep = { class: "tw:m-0 tw:font-semibold" }, Dp = { class: "tw:rounded-box tw:bg-base-200! tw:p-2" }, Op = { class: "tw:m-0 tw:font-semibold" }, kp = { class: "tw:rounded-box tw:bg-base-200! tw:p-2" }, Ap = { class: "tw:m-0 tw:font-semibold tw:capitalize" }, jp = { class: "tw:rounded-box tw:bg-base-200! tw:p-2" }, Mp = ["title"], Np = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[52rem]:grid-cols-2" }, Pp = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "current-session-title"
}, Fp = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Ip = ["disabled"], Lp = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-primary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "turnover-title"
}, Rp = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, zp = ["disabled"], Bp = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Vp = {
	key: 1,
	class: "fa-solid fa-check",
	"aria-hidden": "true"
}, Hp = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "session-history-title"
}, Up = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Wp = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, Gp = { class: "dui-badge dui-badge-sm" }, Kp = {
	key: 0,
	class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, qp = { class: "dui-table dui-table-sm tw:min-w-[28rem]" }, Jp = { scope: "row" }, Yp = ["title"], Xp = ["title"], Zp = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Qp = /* @__PURE__ */ z({
	__name: "SessionManagementConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = dp();
		n.initialize(t.initialization, t.actions);
		let { currentSessionReference: r, errorMessage: i, gmToolkitImport: a, isWorking: o, nextSessionReference: s, occurredAtLocal: c, state: l, statusMessage: u } = bs(n), d = Y(() => !!r.value.trim() && !!s.value.trim() && !!c.value && !o.value);
		function f(e) {
			return new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(new Date(e));
		}
		return (e, t) => (H(), ta(vp, {
			description: "Keep a module-owned session reference and record when each turnover takes place.",
			"error-message": F(i),
			icon: "fa-solid fa-calendar-check",
			"status-message": F(u),
			title: "Session Management Console"
		}, {
			"header-end": Hn(() => [W("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm tw:border tw:border-base-content/20! tw:bg-base-200!",
				type: "button",
				onClick: t[0] ||= (...e) => F(n).openXpAwardConsole && F(n).openXpAwardConsole(...e)
			}, [...t[8] ||= [W("i", {
				class: "fa-solid fa-award",
				"aria-hidden": "true"
			}, null, -1), K(" Award XP ", -1)]])]),
			default: Hn(() => [W("div", yp, [
				F(a) ? (H(), U("section", bp, [W("div", xp, [W("div", Sp, [t[10] ||= W("div", { class: "tw:min-w-0 tw:flex-1" }, [W("h2", {
					id: "gm-toolkit-import-title",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " GM Toolkit migration "), W("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " Copy its session reference and generic XP defaults once. GM Toolkit settings stay read-only and are never updated. ")], -1), W("button", {
					class: "dui-btn dui-btn-sm tw:border-secondary! tw:text-base-content!",
					disabled: F(o),
					type: "button",
					onClick: t[1] ||= (...e) => F(n).importGmToolkitData && F(n).importGmToolkitData(...e)
				}, [t[9] ||= W("i", {
					class: "fa-solid fa-file-import",
					"aria-hidden": "true"
				}, null, -1), K(" " + O(F(l).gmToolkitMigration ? "Import again" : "Import data"), 1)], 8, Cp)]), W("dl", wp, [
					W("div", Tp, [t[11] ||= W("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Session", -1), W("dd", Ep, O(F(a).sessionReference || "None"), 1)]),
					W("div", Dp, [t[12] ||= W("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "XP amount", -1), W("dd", Op, O(F(a).defaultXpAmount), 1)]),
					W("div", kp, [t[13] ||= W("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Recipients", -1), W("dd", Ap, O(F(a).defaultXpSelection), 1)]),
					W("div", jp, [t[14] ||= W("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Reason", -1), W("dd", {
						class: "tw:m-0 tw:truncate tw:font-semibold",
						title: F(a).defaultXpReason
					}, O(F(a).defaultXpReason || "None"), 9, Mp)])
				])])])) : q("", !0),
				W("div", Np, [W("section", Pp, [W("div", Fp, [
					t[16] ||= W("div", null, [W("h2", {
						id: "current-session-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " Current session "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
						K(" This replaces GM Toolkit’s "),
						W("code", null, "sessionID"),
						K(" after migration. ")
					])], -1),
					t[17] ||= W("label", {
						class: "dui-label tw:whitespace-normal",
						for: "current-session-reference"
					}, " Session reference ", -1),
					R(W("input", {
						id: "current-session-reference",
						"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ N(r) ? r.value = e : null,
						class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
						type: "text",
						onInput: t[3] ||= (...e) => F(n).updateSuggestedNextSession && F(n).updateSuggestedNextSession(...e)
					}, null, 544), [[X, F(r)]]),
					W("button", {
						class: "dui-btn dui-btn-sm tw:self-end",
						disabled: F(o) || !F(r).trim(),
						type: "button",
						onClick: t[4] ||= (...e) => F(n).saveCurrentReference && F(n).saveCurrentReference(...e)
					}, [...t[15] ||= [W("i", {
						class: "fa-solid fa-floppy-disk",
						"aria-hidden": "true"
					}, null, -1), K(" Save reference ", -1)]], 8, Ip)
				])]), W("section", Lp, [W("div", Rp, [
					t[19] ||= W("div", null, [W("h2", {
						id: "turnover-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " Complete session "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The selected time becomes the best-known occurrence time for this session. ")], -1),
					t[20] ||= W("label", {
						class: "dui-label tw:whitespace-normal",
						for: "session-occurred-at"
					}, " Session date and time ", -1),
					R(W("input", {
						id: "session-occurred-at",
						"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ N(c) ? c.value = e : null,
						class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
						type: "datetime-local"
					}, null, 512), [[X, F(c)]]),
					t[21] ||= W("label", {
						class: "dui-label tw:whitespace-normal",
						for: "next-session-reference"
					}, " Next session reference ", -1),
					R(W("input", {
						id: "next-session-reference",
						"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ N(s) ? s.value = e : null,
						class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
						type: "text"
					}, null, 512), [[X, F(s)]]),
					W("button", {
						class: "dui-btn dui-btn-primary tw:self-end tw:rounded-full",
						disabled: !d.value,
						type: "button",
						onClick: t[7] ||= (...e) => F(n).completeSession && F(n).completeSession(...e)
					}, [F(o) ? (H(), U("span", Bp)) : (H(), U("i", Vp)), t[18] ||= K(" Record turnover ", -1)], 8, zp)
				])])]),
				t[25] ||= W("div", {
					class: "dui-alert tw:text-xs",
					role: "note"
				}, [W("i", {
					class: "fa-solid fa-circle-info",
					"aria-hidden": "true"
				}), W("span", null, " This first turnover slice records and advances sessions. Award XP from the separate console; pause, holding-scene, Fortune, and chat-export steps remain future additions. ")], -1),
				W("section", Hp, [W("div", Up, [W("div", Wp, [t[22] ||= W("div", null, [W("h2", {
					id: "session-history-title",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " Session history "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Stored as module-owned world data in exact ISO timestamps. ")], -1), W("span", Gp, O(F(l).sessions.length) + " recorded", 1)]), F(l).sessions.length ? (H(), U("div", Kp, [W("table", qp, [t[23] ||= W("thead", { class: "tw:bg-base-300/60!" }, [W("tr", null, [
					W("th", { scope: "col" }, "Session"),
					W("th", { scope: "col" }, "Took place"),
					W("th", { scope: "col" }, "Recorded")
				])], -1), W("tbody", null, [(H(!0), U(V, null, Or(F(l).sessions, (e) => (H(), U("tr", { key: e.id }, [
					W("th", Jp, O(e.reference), 1),
					W("td", { title: e.occurredAt }, O(f(e.occurredAt)), 9, Yp),
					W("td", { title: e.recordedAt }, O(f(e.recordedAt)), 9, Xp)
				]))), 128))])])])) : (H(), U("div", Zp, [...t[24] ||= [W("i", {
					class: "fa-solid fa-calendar",
					"aria-hidden": "true"
				}, null, -1), W("span", null, "No session turnovers have been recorded yet.", -1)]]))])])
			])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
}), $p = {
	defaultAmount: "addXPDefaultAmount",
	defaultReason: "addXPDefaultReason",
	defaultSelection: "defaultPartySessionTurnover",
	sessionReference: "sessionID"
};
function em() {
	if (game.modules.get("wfrp4e-gm-toolkit")?.active === !0 && Object.values($p).every(tm)) return {
		defaultXpAmount: Math.round(nm($p.defaultAmount)),
		defaultXpReason: rm($p.defaultReason),
		defaultXpSelection: rm($p.defaultSelection) === "company" ? "company" : "party",
		sessionReference: rm($p.sessionReference)
	};
}
function tm(e) {
	return game.settings.settings.has(`${r}.${e}`);
}
function nm(e) {
	let t = Number(game.settings.get(r, e));
	return Number.isFinite(t) ? t : 0;
}
function rm(e) {
	let t = game.settings.get(r, e);
	return typeof t == "string" && t !== "null" ? t : "";
}
//#endregion
//#region src/module/session-management/initialization.ts
function im() {
	return {
		gmToolkitImport: em(),
		occurredAtLocal: am(/* @__PURE__ */ new Date()),
		state: tp()
	};
}
function am(e) {
	return (/* @__PURE__ */ new Date(e.getTime() - e.getTimezoneOffset() * 6e4)).toISOString().slice(0, 16);
}
//#endregion
//#region src/types/xp-award/XpAward.ts
var om = {
	batches: [],
	version: 1
}, sm = 500;
function cm(e, t) {
	return {
		batches: [t, ...e.batches].slice(0, sm),
		version: 1
	};
}
function lm(e) {
	if (typeof e != "string") return {
		...om,
		batches: []
	};
	try {
		let t = JSON.parse(e);
		return !Gf(t) || t.version !== 1 || !Array.isArray(t.batches) ? {
			...om,
			batches: []
		} : {
			batches: t.batches.flatMap(um).slice(0, sm),
			version: 1
		};
	} catch {
		return {
			...om,
			batches: []
		};
	}
}
function um(e) {
	if (!Gf(e) || !Array.isArray(e.awards)) return [];
	let t = Uf(e.awardedAt), n = Wf(e.id), r = Wf(e.reason), i = Wf(e.sessionReference), a = e.awards.flatMap(dm);
	return !t || !n || a.length === 0 ? [] : [{
		awardedAt: t,
		awards: a,
		id: n,
		reason: r,
		sessionReference: i,
		totalChange: a.reduce((e, t) => e + t.amount, 0)
	}];
}
function dm(e) {
	if (!Gf(e)) return [];
	let t = e.category, n = Number(e.amount), r = Number(e.beforeXp), i = Number(e.afterXp);
	return t !== "standard" && t !== "companion" || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i) ? [] : [{
		actorId: Wf(e.actorId),
		actorName: Wf(e.actorName),
		afterXp: Math.round(i),
		amount: Math.round(n),
		beforeXp: Math.round(r),
		category: t
	}];
}
//#endregion
//#region src/module/xp-award/settings/keys.ts
var $ = {
	auditLog: "xpAwardAuditLog",
	defaultAmount: "xpAwardDefaultAmount",
	defaultReason: "xpAwardDefaultReason",
	defaultSelection: "xpAwardDefaultSelection",
	includeTimestampInReason: "xpAwardIncludeTimestampInReason"
};
//#endregion
//#region src/module/xp-award/settings/load.ts
function fm() {
	return {
		defaultAmount: Math.round(Number(game.settings.get(t, $.defaultAmount))),
		defaultReason: gm($.defaultReason),
		defaultSelection: _m(),
		includeTimestampInReason: game.settings.get(t, $.includeTimestampInReason) === !0
	};
}
async function pm(e) {
	let n = [
		[$.defaultAmount, Math.round(e.defaultAmount)],
		[$.defaultReason, e.defaultReason],
		[$.defaultSelection, e.defaultSelection],
		[$.includeTimestampInReason, e.includeTimestampInReason]
	];
	for (let [e, r] of n) await game.settings.set(t, e, r);
}
function mm() {
	return lm(game.settings.get(t, $.auditLog));
}
async function hm(e) {
	await game.settings.set(t, $.auditLog, JSON.stringify(e));
}
function gm(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function _m() {
	let e = gm($.defaultSelection);
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/session-management/service.ts
async function vm(e) {
	Lc(Z.sessionManagementConsole);
	let t = e.trim();
	if (!t) throw Error("Enter a current session reference.");
	await rp({
		...tp(),
		currentSessionReference: t
	}), ui.notifications.info(`Current session reference saved as ${t}.`);
}
async function ym(e) {
	Lc(Z.sessionManagementConsole);
	let t = Jf(tp(), e, {
		id: crypto.randomUUID(),
		recordedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	return await rp(t.state), ui.notifications.info(`Session ${t.record.reference} recorded. Current session is now ${t.state.currentSessionReference}.`), t.record;
}
async function bm() {
	Lc(Z.sessionManagementConsole);
	let e = em();
	if (!e) throw Error("WFRP4e GM Toolkit is not active or its session settings are not registered yet.");
	let t = {
		importedAt: (/* @__PURE__ */ new Date()).toISOString(),
		sessionReference: e.sessionReference,
		xpAwardSettings: {
			defaultAmount: e.defaultXpAmount,
			defaultReason: e.defaultXpReason,
			defaultSelection: e.defaultXpSelection,
			includeTimestampInReason: !1
		}
	}, n = tp();
	return await pm(t.xpAwardSettings), await rp({
		...n,
		currentSessionReference: t.sessionReference,
		gmToolkitMigration: t
	}), ui.notifications.info("GM Toolkit session and XP defaults imported into Drowsy’s Toolkit."), t;
}
//#endregion
//#region src/functions/xp-award/calculate.ts
function xm(e, t) {
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
function Sm(e, t, n) {
	let r = e;
	return n && !r.includes("%datetime%") && (r = r.trim() ? `${r} — awarded %datetime%` : "Awarded %datetime%"), bl(r, t);
}
function Cm(e) {
	return `${e.slice(0, 10)} ${e.slice(11, 19)} UTC`;
}
//#endregion
//#region src/state/apps/xp-award-console/store.ts
var wm = ys("xp-award-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = wl("The XP Award Console"), o = /* @__PURE__ */ P(20), s = /* @__PURE__ */ P(""), c = /* @__PURE__ */ P("party"), l = /* @__PURE__ */ P(!0), u = /* @__PURE__ */ P("default"), d = /* @__PURE__ */ P(), f = /* @__PURE__ */ P(!1), p, m, h = Y(() => xm(e.value, o.value)), g = Y(() => r.value.length > 0 && Number.isFinite(o.value) && Math.round(o.value) !== 0 && !f.value), _ = Y(() => {
		let e = x().reasonContext;
		return Sm(s.value, e, l.value);
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
}), Tm = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:whitespace-normal tw:py-1" }, Em = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[62rem]:grid-cols-[1.2fr_0.8fr]" }, Dm = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-recipients"
}, Om = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, km = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Am = { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, jm = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Mm = ["disabled"], Nm = ["disabled"], Pm = ["disabled"], Fm = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, Im = { class: "dui-table dui-table-sm tw:min-w-[34rem]" }, Lm = {
	class: "tw:min-w-44",
	scope: "row"
}, Rm = { class: "tw:block tw:font-semibold" }, zm = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, Bm = { class: "tw:text-right tw:tabular-nums" }, Vm = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, Hm = { class: "tw:text-right tw:tabular-nums" }, Um = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Wm = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-details"
}, Gm = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Km = { class: "dui-label tw:cursor-pointer tw:items-start tw:justify-start tw:gap-3" }, qm = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, Jm = { class: "tw:m-0 tw:break-words tw:font-semibold" }, Ym = /* @__PURE__ */ z({
	__name: "XpAwardConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = wm();
		n.initialize(t.initialization, t.actions);
		let { actors: r, amount: i, canApply: a, defaultReason: o, defaultSelection: s, errorMessage: c, includeTimestampInReason: l, isWorking: u, plan: d, resolvedReason: f, selectedActors: p, selectionSource: m } = bs(n), h = Y(() => m.value === "targets" ? "Targeted tokens seeded this award." : `The ${s.value} default seeded this award.`);
		function g(e) {
			return d.value.awards.find((t) => t.actorId === e);
		}
		function _(e) {
			return e > 0 ? `+${e}` : String(e);
		}
		return (e, t) => (H(), ta(vp, {
			description: "Apply one XP change to selected characters, with GM Toolkit-compatible recipient defaults and reason tokens.",
			"error-message": F(c),
			icon: "fa-solid fa-award",
			title: "XP Award Console"
		}, {
			"header-end": Hn(() => [W("span", Tm, O(F(p).length) + " selected ", 1)]),
			footer: Hn(() => [G(kl, {
				disabled: !F(a),
				icon: "fa-solid fa-award",
				label: `Apply ${_(F(d).totalChange)} XP`,
				working: F(u),
				onAction: F(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])]),
			default: Hn(() => [W("div", Em, [W("section", Dm, [W("div", Om, [W("div", km, [W("div", null, [t[7] ||= W("h2", {
				id: "fixed-xp-recipients",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Recipients ", -1), W("p", Am, O(h.value), 1)]), W("div", jm, [
				W("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: F(u),
					type: "button",
					onClick: t[0] ||= (e) => F(n).setAllActorsSelected(!0)
				}, " All ", 8, Mm),
				W("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: F(u),
					type: "button",
					onClick: t[1] ||= (e) => F(n).setAllActorsSelected(!1)
				}, " None ", 8, Nm),
				W("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: F(u),
					type: "button",
					onClick: t[2] ||= (...e) => F(n).resetSelection && F(n).resetSelection(...e)
				}, " Reset ", 8, Pm)
			])]), F(r).length ? (H(), U("div", Fm, [W("table", Im, [t[8] ||= W("thead", { class: "tw:bg-base-300/60!" }, [W("tr", null, [
				W("th", { scope: "col" }, "Use"),
				W("th", { scope: "col" }, "Actor"),
				W("th", {
					class: "tw:text-right",
					scope: "col"
				}, "Current XP"),
				W("th", {
					class: "tw:text-right",
					scope: "col"
				}, "Change"),
				W("th", {
					class: "tw:text-right",
					scope: "col"
				}, "New total")
			])], -1), W("tbody", null, [(H(!0), U(V, null, Or(F(r), (e) => (H(), U("tr", {
				key: e.id,
				class: D({ "tw:bg-base-200!": e.selected })
			}, [
				W("td", null, [G(Nl, {
					"actor-id": e.id,
					"actor-name": e.name,
					checked: e.selected,
					disabled: F(u),
					purpose: "the XP award",
					onChange: F(n).setActorSelected
				}, null, 8, [
					"actor-id",
					"actor-name",
					"checked",
					"disabled",
					"onChange"
				])]),
				W("th", Lm, [W("span", Rm, O(e.name), 1), e.category === "companion" ? (H(), U("span", zm, " Half award ")) : q("", !0)]),
				W("td", Bm, O(e.totalXp), 1),
				W("td", Vm, O(g(e.id) ? _(g(e.id)?.amount ?? 0) : "—"), 1),
				W("td", Hm, O(g(e.id)?.afterXp ?? "—"), 1)
			], 2))), 128))])])])) : (H(), U("div", Um, [...t[9] ||= [W("i", {
				class: "fa-solid fa-user-slash",
				"aria-hidden": "true"
			}, null, -1), W("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]), W("section", Wm, [W("div", Gm, [
				t[13] ||= W("div", null, [W("h2", {
					id: "fixed-xp-details",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " Award details "), W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " These values become the next console defaults after a successful award. ")], -1),
				t[14] ||= W("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-amount"
				}, "XP change", -1),
				R(W("input", {
					id: "fixed-xp-amount",
					"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ N(i) ? i.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
					inputmode: "numeric",
					step: "1",
					type: "number"
				}, null, 512), [[
					X,
					F(i),
					void 0,
					{ number: !0 }
				]]),
				t[15] ||= W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Negative values remove XP. Companion awards are rounded down to half, matching GM Toolkit. ", -1),
				t[16] ||= W("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-default-group"
				}, " Default recipients on next open ", -1),
				R(W("select", {
					id: "fixed-xp-default-group",
					"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ N(s) ? s.value = e : null,
					class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!"
				}, [...t[10] ||= [
					W("option", { value: "party" }, "Party", -1),
					W("option", { value: "company" }, "Company", -1),
					W("option", { value: "world" }, "World", -1)
				]], 512), [[Oo, F(s)]]),
				t[17] ||= W("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-reason"
				}, " Experience log reason ", -1),
				R(W("input", {
					id: "fixed-xp-reason",
					"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ N(o) ? o.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:border-base-content/25! tw:bg-base-100!",
					type: "text"
				}, null, 512), [[X, F(o)]]),
				t[18] ||= W("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
					K(" Supports "),
					W("code", null, "%session%"),
					K(", "),
					W("code", null, "%date%"),
					K(", and "),
					W("code", null, "%datetime%"),
					K(". ")
				], -1),
				W("label", Km, [R(W("input", {
					"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ N(l) ? l.value = e : null,
					class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:appearance-none! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none!",
					type: "checkbox"
				}, null, 512), [[Eo, F(l)]]), t[11] ||= W("span", null, [W("span", { class: "tw:block tw:font-semibold" }, "Include timestamp in WFRP4e reason"), W("span", { class: "tw:block tw:text-xs tw:text-base-content/65!" }, " WFRP4e’s log schema has no timestamp field, so this appends UTC text to the reason. ")], -1)]),
				W("div", qm, [t[12] ||= W("span", { class: "tw:text-xs tw:text-base-content/60!" }, "WFRP4e will record", -1), W("p", Jm, O(F(f) || "No reason"), 1)]),
				t[19] ||= W("div", {
					class: "dui-alert tw:text-xs",
					role: "note"
				}, [W("i", {
					class: "fa-solid fa-clock-rotate-left",
					"aria-hidden": "true"
				}), W("span", null, " The exact UTC time and per-actor changes are always saved in Drowsy’s world audit log, whether or not the reason includes it. ")], -1)
			])])])]),
			_: 1
		}, 8, ["error-message"]));
	}
});
//#endregion
//#region src/module/xp-award/initialization.ts
function Xm() {
	let e = fm(), t = xf(e.defaultSelection), n = (/* @__PURE__ */ new Date()).toISOString();
	return {
		...e,
		...t,
		awardedAt: n,
		reasonContext: {
			date: n.slice(0, 10),
			datetime: Cm(n),
			session: np()
		}
	};
}
//#endregion
//#region src/module/xp-award/service.ts
async function Zm(e) {
	Lc(Z.xpAwardConsole);
	let t = Array.from(new Set(e.actorIds));
	if (t.length === 0) throw Error("Select at least one character actor.");
	if (!Number.isFinite(e.defaultAmount) || Math.round(e.defaultAmount) === 0) throw Error("Enter a non-zero whole-number XP change.");
	let n = Sf(t), r = xm(n.map((e) => e.choice), e.defaultAmount), i = (/* @__PURE__ */ new Date()).toISOString(), a = np(), o = Sm(e.defaultReason, {
		date: i.slice(0, 10),
		datetime: Cm(i),
		session: a
	}, e.includeTimestampInReason);
	await pm({
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
	return await hm(cm(mm(), l)), await Qm(c), ui.notifications.info(`Applied ${$m(c.totalChange)} XP across ${c.awards.length} actors.`), c;
}
async function Qm(e) {
	let t = e.awards.map((e) => `<li><strong>${xl(e.actorName)}</strong>: ${$m(e.amount)} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Award</h2><p>${xl(e.reason || "No reason")}</p><p><small>${xl(Cm(e.awardedAt))}</small></p><ul>${t}</ul><p><strong>${$m(e.totalChange)} XP in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
function $m(e) {
	return e > 0 ? `+${e}` : String(e);
}
//#endregion
//#region src/module/apps/xp-award-console/XpAwardConsoleApplication.ts
var eh = class extends Hc {
	static ACCESS_POLICY = Z.xpAwardConsole;
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
		return Ym;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: Zm,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Award Console.`, e), ui.notifications.error("XP changes completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				}
			},
			initialization: Xm()
		};
	}
};
//#endregion
//#region src/module/apps/xp-award-console/open.ts
async function th() {
	let e = new eh();
	return await e.render(!0), e;
}
function nh() {
	th().catch((e) => {
		console.error(`${t} | Failed to open the XP Award Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Award Console. See the browser console for details.");
	});
}
//#endregion
//#region src/module/apps/session-management/SessionManagementApplication.ts
var rh = class extends Hc {
	static ACCESS_POLICY = Z.sessionManagementConsole;
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
		return Qp;
	}
	getVueProps() {
		return {
			actions: {
				completeSession: ym,
				importGmToolkitData: bm,
				openXpAwardConsole: nh,
				saveCurrentSessionReference: vm
			},
			initialization: im()
		};
	}
};
//#endregion
//#region src/module/apps/session-management/open.ts
async function ih() {
	let e = new rh();
	return await e.render(!0), e;
}
//#endregion
//#region src/module/api/create-module-api.ts
function ah() {
	return {
		applyToSelectedActors: el,
		awardXp: Zm,
		awardXpCurve: op,
		completeSession: ym,
		copyLink: nl,
		importGmToolkitSessionData: bm,
		openFearConsole: cl,
		openSessionManagementConsole: ih,
		openXpAwardConsole: th,
		openXpCurveConsole: lp,
		openWorkbench: cl,
		postPrompt: tl,
		postSummaryPrompt: rl
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function oh() {
	let e = game.modules.get(t);
	if (!e) throw Error(`Foundry module registry entry was not found for ${t}.`);
	e.api = ah();
}
//#endregion
//#region src/module/fear-terror/actor-sheet/register.ts
var sh = "openFearConsole", ch = "wfrp4e-enhanced-fear-terror-actor-header", lh = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], uh = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function dh() {
	if (!(!sl.canCurrentUserAccess() || !zc(Rc.actorSheet))) {
		for (let e of lh) Hooks.on(e, (e, t) => {
			fh(e, t);
		});
		for (let e of uh) Hooks.on(e, (e) => {
			ph(e);
		});
	}
}
function fh(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === sh) || (t.push({
		action: sh,
		icon: "fa-solid fa-skull",
		label: "Fear Console"
	}), e.options.actions ??= {}, e.options.actions[sh] = function() {
		mh(this.document);
	}));
}
function ph(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${ch}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(ch, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = sh, i.dataset.tooltip = "Fear Console", i.ariaLabel = "Open Drowsy’s WFRP4e Toolkit Fear Console", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), mh(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function mh(e) {
	try {
		ll({ initialPayload: Jc(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not read this actor. See the browser console for details.");
	}
}
//#endregion
//#region src/functions/scene-controls/toolclip.ts
function hh(e, t) {
	return {
		heading: e,
		items: [{ paragraph: t }]
	};
}
//#endregion
//#region src/module/fear-terror/scene-controls/register.ts
var gh = "openFearConsole";
function _h() {
	!sl.canCurrentUserAccess() || !zc(Rc.tokenControls) || Hooks.on("getSceneControlButtons", (e) => {
		vh(e);
	});
}
function vh(t) {
	let n = t.tokens;
	n && (n.tools[gh] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: gh,
		onChange: () => {
			ll();
		},
		order: 99,
		title: "Fear Console",
		toolclip: hh("Fear Console", `${e}.SceneControls.OpenFearConsole`)
	});
}
//#endregion
//#region src/module/settings/register.ts
function yh(n, r) {
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
function bh(e, n, r, i, a = {}) {
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
//#region src/module/fear-terror/settings/register.ts
function xh() {
	yh(Rc.tokenControls, "TokenControlsLauncher"), yh(Rc.actorSheet, "ActorSheetLauncher"), game.settings.registerMenu(t, "fearConsole", {
		hint: `${e}.Menu.FearConsoleConfigurator.Hint`,
		icon: "fa-solid fa-gears",
		label: `${e}.Menu.FearConsoleConfigurator.Label`,
		name: `${e}.Menu.FearConsoleConfigurator.Name`,
		restricted: Uc.ACCESS_POLICY.gmOnly,
		type: Uc
	});
}
//#endregion
//#region src/module/session-management/settings/register.ts
function Sh() {
	Ch(ep.state, JSON.stringify({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), String, "State"), Ch($.auditLog, JSON.stringify({
		batches: [],
		version: 1
	}), String, "AuditLog"), Ch($.defaultAmount, 20, Number, "DefaultAmount", { range: {
		max: 1e5,
		min: -1e5,
		step: 1
	} }), Ch($.defaultReason, "Session %session% (%date%)", String, "DefaultReason"), Ch($.defaultSelection, "party", String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpAward.DefaultSelection.Company`,
		party: `${e}.Settings.XpAward.DefaultSelection.Party`,
		world: `${e}.Settings.XpAward.DefaultSelection.World`
	} }), Ch($.includeTimestampInReason, !0, Boolean, "IncludeTimestampInReason"), game.settings.registerMenu(t, "sessionManagementConsole", {
		hint: `${e}.Menu.SessionManagementConsole.Hint`,
		icon: "fa-solid fa-calendar-check",
		label: `${e}.Menu.SessionManagementConsole.Label`,
		name: `${e}.Menu.SessionManagementConsole.Name`,
		restricted: rh.ACCESS_POLICY.gmOnly,
		type: rh
	}), game.settings.registerMenu(t, "xpAwardConsole", {
		hint: `${e}.Menu.XpAwardConsole.Hint`,
		icon: "fa-solid fa-award",
		label: `${e}.Menu.XpAwardConsole.Label`,
		name: `${e}.Menu.XpAwardConsole.Name`,
		restricted: eh.ACCESS_POLICY.gmOnly,
		type: eh
	});
}
function Ch(t, n, r, i, a = {}) {
	bh(t, n, r, `${e}.Settings.XpAward.${i}`, a);
}
//#endregion
//#region src/module/xp-curve/scene-controls/register.ts
var wh = "openXpCurveConsole";
function Th() {
	!cp.canCurrentUserAccess() || !jf(Q.showTokenControlsLauncher) || Hooks.on("getSceneControlButtons", (t) => {
		let n = t.tokens;
		n && (n.tools[wh] = {
			button: !0,
			icon: "fa-solid fa-chart-line",
			name: wh,
			onChange: up,
			order: 98,
			title: "XP Curve Console",
			toolclip: hh("XP Curve Console", `${e}.SceneControls.OpenXpCurveConsole`)
		});
	});
}
//#endregion
//#region src/module/xp-curve/settings/register.ts
function Eh() {
	yh(Q.showTokenControlsLauncher, "XpCurveTokenControlsLauncher"), Dh(Q.maximumAward, Cl.parameters.maximumAward, Number, "MaximumAward", { range: {
		max: 1e5,
		min: 0,
		step: 1
	} }), Dh(Q.gapForMaximumAward, Cl.parameters.gapForMaximumAward, Number, "GapForMaximumAward", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), Dh(Q.curveExponent, Cl.parameters.curveExponent, Number, "CurveExponent", { range: {
		max: 5,
		min: .1,
		step: .05
	} }), Dh(Q.scalePivot, Cl.parameters.scalePivot, Number, "ScalePivot", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), Dh(Q.scaleExponent, Cl.parameters.scaleExponent, Number, "ScaleExponent", { range: {
		max: 2,
		min: 0,
		step: .05
	} }), Dh(Q.companionMultiplier, Cl.parameters.companionMultiplier, Number, "CompanionMultiplier", { range: {
		max: 1,
		min: 0,
		step: .05
	} }), Dh(Q.defaultReason, Cl.defaultReason, String, "DefaultReason"), Dh(Q.defaultSelection, Cl.defaultSelection, String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpCurve.DefaultSelection.Company`,
		party: `${e}.Settings.XpCurve.DefaultSelection.Party`,
		world: `${e}.Settings.XpCurve.DefaultSelection.World`
	} }), game.settings.registerMenu(t, "xpCurveConsole", {
		hint: `${e}.Menu.XpCurveConfigurator.Hint`,
		icon: "fa-solid fa-sliders",
		label: `${e}.Menu.XpCurveConfigurator.Label`,
		name: `${e}.Menu.XpCurveConfigurator.Name`,
		restricted: zf.ACCESS_POLICY.gmOnly,
		type: zf
	});
}
function Dh(t, n, r, i, a = {}) {
	bh(t, n, r, `${e}.Settings.XpCurve.${i}`, a);
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function Oh() {
	Hooks.once("init", () => {
		console.info(`${t} | Initializing`), xh(), Sh(), Eh(), dh(), _h(), Th();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${t} | Loaded outside ${i}; skipping module API registration.`);
			return;
		}
		oh(), console.info(`${t} | Ready`);
	});
}
//#endregion
//#region src/main.ts
Oh();
//#endregion

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map