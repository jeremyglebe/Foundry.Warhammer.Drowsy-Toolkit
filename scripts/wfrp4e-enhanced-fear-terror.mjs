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
function Ce(e) {
	let t = "";
	if (x(e)) t = e;
	else if (g(e)) for (let n = 0; n < e.length; n++) {
		let r = Ce(e[n]);
		r && (t += r + " ");
	}
	else if (C(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var we = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Te = /* @__PURE__ */ a(we);
we + "";
function Ee(e) {
	return !!e || e === "";
}
function De(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Oe(e[r], t[r]);
	return n;
}
function Oe(e, t) {
	if (e === t) return !0;
	let n = y(e), r = y(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = S(e), r = S(t), n || r) return e === t;
	if (n = g(e), r = g(t), n || r) return n && r ? De(e, t) : !1;
	if (n = C(e), r = C(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Oe(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function ke(e, t) {
	return e.findIndex((e) => Oe(e, t));
}
var Ae = (e) => !!(e && e.__v_isRef === !0), E = (e) => x(e) ? e : e == null ? "" : g(e) || C(e) && (e.toString === te || !b(e.toString)) ? Ae(e) ? E(e.value) : JSON.stringify(e, je, 2) : String(e), je = (e, t) => Ae(t) ? je(e, t.value) : _(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Me(t, r) + " =>"] = n, e), {}) } : v(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Me(e)) } : S(t) ? Me(t) : C(t) && !g(t) && !ie(t) ? String(t) : t, Me = (e, t = "") => S(e) ? `Symbol(${e.description ?? t})` : e, D, Ne = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && D && (D.active ? (this.parent = D, this.index = (D.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = D;
			try {
				return D = this, e();
			} finally {
				D = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = D, D = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (D === this) D = this.prevScope;
			else {
				let e = D;
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
function Pe(e) {
	return new Ne(e);
}
function Fe() {
	return D;
}
function Ie(e, t = !1) {
	D && D.cleanups.push(e);
}
var O, Le = /* @__PURE__ */ new WeakSet(), Re = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, D && (D.active ? D.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Le.has(this) && (Le.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || He(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, tt(this), Ge(this);
		let e = O, t = Ze;
		O = this, Ze = !0;
		try {
			return this.fn();
		} finally {
			Ke(this), O = e, Ze = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ye(e);
			this.deps = this.depsTail = void 0, tt(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Le.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		qe(this) && this.run();
	}
	get dirty() {
		return qe(this);
	}
}, ze = 0, Be, Ve;
function He(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ve, Ve = e;
		return;
	}
	e.next = Be, Be = e;
}
function Ue() {
	ze++;
}
function We() {
	if (--ze > 0) return;
	if (Ve) {
		let e = Ve;
		for (Ve = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Be;) {
		let t = Be;
		for (Be = void 0; t;) {
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
function Ge(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ke(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ye(r), Xe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function qe(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Je(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Je(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nt) || (e.globalVersion = nt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qe(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = O, r = Ze;
	O = e, Ze = !0;
	try {
		Ge(e);
		let n = e.fn(e._value);
		(t.version === 0 || T(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		O = n, Ze = r, Ke(e), e.flags &= -3;
	}
}
function Ye(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ye(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ze = !0, Qe = [];
function $e() {
	Qe.push(Ze), Ze = !1;
}
function et() {
	let e = Qe.pop();
	Ze = e === void 0 ? !0 : e;
}
function tt(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = O;
		O = void 0;
		try {
			t();
		} finally {
			O = e;
		}
	}
}
var nt = 0, rt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, it = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!O || !Ze || O === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== O) t = this.activeLink = new rt(O, this), O.deps ? (t.prevDep = O.depsTail, O.depsTail.nextDep = t, O.depsTail = t) : O.deps = O.depsTail = t, at(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = O.depsTail, t.nextDep = void 0, O.depsTail.nextDep = t, O.depsTail = t, O.deps === t && (O.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, nt++, this.notify(e);
	}
	notify(e) {
		Ue();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			We();
		}
	}
};
function at(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) at(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var ot = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ Symbol(""), ct = /* @__PURE__ */ Symbol(""), lt = /* @__PURE__ */ Symbol("");
function k(e, t, n) {
	if (Ze && O) {
		let t = ot.get(e);
		t || ot.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new it()), r.map = t, r.key = n), r.track();
	}
}
function ut(e, t, n, r, i, a) {
	let o = ot.get(e);
	if (!o) {
		nt++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ue(), t === "clear") o.forEach(s);
	else {
		let i = g(e), a = i && ae(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === lt || !S(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(lt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(st)), _(e) && s(o.get(ct)));
				break;
			case "delete":
				i || (s(o.get(st)), _(e) && s(o.get(ct)));
				break;
			case "set":
				_(e) && s(o.get(st));
				break;
		}
	}
	We();
}
function dt(e, t) {
	let n = ot.get(e);
	return n && n.get(t);
}
function ft(e) {
	let t = /* @__PURE__ */ A(e);
	return t === e ? t : (k(t, "iterate", lt), /* @__PURE__ */ Zt(e) ? t : t.map(en));
}
function pt(e) {
	return k(e = /* @__PURE__ */ A(e), "iterate", lt), e;
}
function mt(e, t) {
	return /* @__PURE__ */ Xt(e) ? tn(/* @__PURE__ */ Yt(e) ? en(t) : t) : en(t);
}
var ht = {
	__proto__: null,
	[Symbol.iterator]() {
		return gt(this, Symbol.iterator, (e) => mt(this, e));
	},
	concat(...e) {
		return ft(this).concat(...e.map((e) => g(e) ? ft(e) : e));
	},
	entries() {
		return gt(this, "entries", (e) => (e[1] = mt(this, e[1]), e));
	},
	every(e, t) {
		return vt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return vt(this, "filter", e, t, (e) => e.map((e) => mt(this, e)), arguments);
	},
	find(e, t) {
		return vt(this, "find", e, t, (e) => mt(this, e), arguments);
	},
	findIndex(e, t) {
		return vt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return vt(this, "findLast", e, t, (e) => mt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return vt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return vt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return bt(this, "includes", e);
	},
	indexOf(...e) {
		return bt(this, "indexOf", e);
	},
	join(e) {
		return ft(this).join(e);
	},
	lastIndexOf(...e) {
		return bt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return vt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return xt(this, "pop");
	},
	push(...e) {
		return xt(this, "push", e);
	},
	reduce(e, ...t) {
		return yt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return yt(this, "reduceRight", e, t);
	},
	shift() {
		return xt(this, "shift");
	},
	some(e, t) {
		return vt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return xt(this, "splice", e);
	},
	toReversed() {
		return ft(this).toReversed();
	},
	toSorted(e) {
		return ft(this).toSorted(e);
	},
	toSpliced(...e) {
		return ft(this).toSpliced(...e);
	},
	unshift(...e) {
		return xt(this, "unshift", e);
	},
	values() {
		return gt(this, "values", (e) => mt(this, e));
	}
};
function gt(e, t, n) {
	let r = pt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Zt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var _t = Array.prototype;
function vt(e, t, n, r, i, a) {
	let o = pt(e), s = o !== e && !/* @__PURE__ */ Zt(e), c = o[t];
	if (c !== _t[t]) {
		let t = c.apply(e, a);
		return s ? en(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, mt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function yt(e, t, n, r) {
	let i = pt(e), a = i !== e && !/* @__PURE__ */ Zt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = mt(e, t)), n.call(this, t, mt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? mt(e, c) : c;
}
function bt(e, t, n) {
	let r = /* @__PURE__ */ A(e);
	k(r, "iterate", lt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Qt(n[0]) ? (n[0] = /* @__PURE__ */ A(n[0]), r[t](...n)) : i;
}
function xt(e, t, n = []) {
	$e(), Ue();
	let r = (/* @__PURE__ */ A(e))[t].apply(e, n);
	return We(), et(), r;
}
var St = /* @__PURE__ */ a("__proto__,__v_isRef,__isVue"), Ct = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(S));
function wt(e) {
	S(e) || (e = String(e));
	let t = /* @__PURE__ */ A(this);
	return k(t, "has", e), t.hasOwnProperty(e);
}
var Tt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ut : Ht : i ? Vt : Bt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = g(e);
		if (!r) {
			let e;
			if (a && (e = ht[t])) return e;
			if (t === "hasOwnProperty") return wt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ j(e) ? e : n);
		if ((S(t) ? Ct.has(t) : St(t)) || (r || k(e, "get", t), i)) return o;
		if (/* @__PURE__ */ j(o)) {
			let e = a && ae(t) ? o : o.value;
			return r && C(e) ? /* @__PURE__ */ qt(e) : e;
		}
		return C(o) ? r ? /* @__PURE__ */ qt(o) : /* @__PURE__ */ Gt(o) : o;
	}
}, Et = class extends Tt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = g(e) && ae(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Xt(i);
			if (!/* @__PURE__ */ Zt(n) && !/* @__PURE__ */ Xt(n) && (i = /* @__PURE__ */ A(i), n = /* @__PURE__ */ A(n)), !a && /* @__PURE__ */ j(i) && !/* @__PURE__ */ j(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : h(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ j(e) ? e : r);
		return e === /* @__PURE__ */ A(r) && (o ? T(n, i) && ut(e, "set", t, n, i) : ut(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = h(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ut(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!S(t) || !Ct.has(t)) && k(e, "has", t), n;
	}
	ownKeys(e) {
		return k(e, "iterate", g(e) ? "length" : st), Reflect.ownKeys(e);
	}
}, Dt = class extends Tt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Ot = /* @__PURE__ */ new Et(), kt = /* @__PURE__ */ new Dt(), At = /* @__PURE__ */ new Et(!0), jt = (e) => e, Mt = (e) => Reflect.getPrototypeOf(e);
function Nt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ A(i), o = _(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? jt : t ? tn : en;
		return !t && k(a, "iterate", c ? ct : st), f(Object.create(l), { next() {
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
function Pt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ft(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ A(r), a = /* @__PURE__ */ A(n);
			e || (T(n, a) && k(i, "get", n), k(i, "get", a));
			let { has: o } = Mt(i), s = t ? jt : e ? tn : en;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && k(/* @__PURE__ */ A(t), "iterate", st), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ A(n), i = /* @__PURE__ */ A(t);
			return e || (T(t, i) && k(r, "has", t), k(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ A(a), s = t ? jt : e ? tn : en;
			return !e && k(o, "iterate", st), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return f(n, e ? {
		add: Pt("add"),
		set: Pt("set"),
		delete: Pt("delete"),
		clear: Pt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ A(this), r = Mt(n), i = /* @__PURE__ */ A(e), a = !t && !/* @__PURE__ */ Zt(e) && !/* @__PURE__ */ Xt(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), ut(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Zt(n) && !/* @__PURE__ */ Xt(n) && (n = /* @__PURE__ */ A(n));
			let r = /* @__PURE__ */ A(this), { has: i, get: a } = Mt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ A(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && ut(r, "set", e, n, s) : ut(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ A(this), { has: n, get: r } = Mt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ A(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ut(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ A(this), t = e.size !== 0, n = e.clear();
			return t && ut(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Nt(r, e, t);
	}), n;
}
function It(e, t) {
	let n = Ft(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(h(n, r) && r in t ? n : t, r, i);
}
var Lt = { get: /* @__PURE__ */ It(!1, !1) }, Rt = { get: /* @__PURE__ */ It(!1, !0) }, zt = { get: /* @__PURE__ */ It(!0, !1) }, Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap();
function Wt(e) {
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
function Gt(e) {
	return /* @__PURE__ */ Xt(e) ? e : Jt(e, !1, Ot, Lt, Bt);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return Jt(e, !1, At, Rt, Vt);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return Jt(e, !0, kt, zt, Ht);
}
function Jt(e, t, n, r, i) {
	if (!C(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Wt(re(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return /* @__PURE__ */ Xt(e) ? /* @__PURE__ */ Yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function A(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ A(t) : e;
}
function $t(e) {
	return !h(e, "__v_skip") && Object.isExtensible(e) && me(e, "__v_skip", !0), e;
}
var en = (e) => C(e) ? /* @__PURE__ */ Gt(e) : e, tn = (e) => C(e) ? /* @__PURE__ */ qt(e) : e;
// @__NO_SIDE_EFFECTS__
function j(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	return rn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return rn(e, !0);
}
function rn(e, t) {
	return /* @__PURE__ */ j(e) ? e : new an(e, t);
}
var an = class {
	constructor(e, t) {
		this.dep = new it(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ A(e), this._value = t ? e : en(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Zt(e) || /* @__PURE__ */ Xt(e);
		e = n ? e : /* @__PURE__ */ A(e), T(e, t) && (this._rawValue = e, this._value = n ? e : en(e), this.dep.trigger());
	}
};
function N(e) {
	return /* @__PURE__ */ j(e) ? e.value : e;
}
var on = {
	get: (e, t, n) => t === "__v_raw" ? e : N(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ j(i) && !/* @__PURE__ */ j(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function sn(e) {
	return /* @__PURE__ */ Yt(e) ? e : new Proxy(e, on);
}
var cn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new it(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function ln(e) {
	return new cn(e);
}
// @__NO_SIDE_EFFECTS__
function un(e) {
	let t = g(e) ? Array(e.length) : {};
	for (let n in e) t[n] = mn(e, n);
	return t;
}
var dn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = S(t) ? t : String(t), this._raw = /* @__PURE__ */ A(e);
		let r = !0, i = e;
		if (!g(e) || S(this._key) || !ae(this._key)) do
			r = !/* @__PURE__ */ Qt(i) || /* @__PURE__ */ Zt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = N(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ j(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ j(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return dt(this._raw, this._key);
	}
}, fn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function pn(e, t, n) {
	return /* @__PURE__ */ j(e) ? e : b(e) ? new fn(e) : C(e) && arguments.length > 1 ? mn(e, t, n) : /* @__PURE__ */ M(e);
}
function mn(e, t, n) {
	return new dn(e, t, n);
}
var hn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new it(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && O !== this) return He(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Je(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function gn(e, t, n = !1) {
	let r, i;
	return b(e) ? r = e : (r = e.get, i = e.set), new hn(r, i, n);
}
var _n = {}, vn = /* @__PURE__ */ new WeakMap(), yn = void 0;
function bn(e, t = !1, n = yn) {
	if (n) {
		let t = vn.get(n);
		t || vn.set(n, t = []), t.push(e);
	}
}
function xn(e, t, n = o) {
	let { immediate: r, deep: i, once: a, scheduler: s, augmentJob: l, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ Zt(e) || i === !1 || i === 0 ? Sn(e, 1) : Sn(e), f, m, h, _, v = !1, y = !1;
	if (/* @__PURE__ */ j(e) ? (m = () => e.value, v = /* @__PURE__ */ Zt(e)) : /* @__PURE__ */ Yt(e) ? (m = () => d(e), v = !0) : g(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ Yt(e) || /* @__PURE__ */ Zt(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ j(e)) return e.value;
		if (/* @__PURE__ */ Yt(e)) return d(e);
		if (b(e)) return u ? u(e, 2) : e();
	})) : m = b(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (h) {
			$e();
			try {
				h();
			} finally {
				et();
			}
		}
		let t = yn;
		yn = f;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			yn = t;
		}
	} : c, t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => Sn(e(), t);
	}
	let x = Fe(), S = () => {
		f.stop(), x && x.active && p(x.effects, f);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = y ? Array(e.length).fill(_n) : _n, ee = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let n = f.run();
			if (e || i || v || (y ? n.some((e, t) => T(e, C[t])) : T(n, C))) {
				h && h();
				let e = yn;
				yn = f;
				try {
					let e = [
						n,
						C === _n ? void 0 : y && C[0] === _n ? [] : C,
						_
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					yn = e;
				}
			}
		} else f.run();
	};
	return l && l(ee), f = new Re(m), f.scheduler = s ? () => s(ee, !1) : ee, _ = (e) => bn(e, !1, f), h = f.onStop = () => {
		let e = vn.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			vn.delete(f);
		}
	}, t ? r ? ee(!0) : C = f.run() : s ? s(ee.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function Sn(e, t = Infinity, n) {
	if (t <= 0 || !C(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ j(e)) Sn(e.value, t, n);
	else if (g(e)) for (let r = 0; r < e.length; r++) Sn(e[r], t, n);
	else if (v(e) || _(e)) e.forEach((e) => {
		Sn(e, t, n);
	});
	else if (ie(e)) {
		for (let r in e) Sn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Sn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Cn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Tn(e, t, n);
	}
}
function wn(e, t, n, r) {
	if (b(e)) {
		let i = Cn(e, t, n, r);
		return i && ee(i) && i.catch((e) => {
			Tn(e, t, n);
		}), i;
	}
	if (g(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(wn(e[a], t, n, r));
		return i;
	}
}
function Tn(e, t, n, r = !0) {
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
			$e(), Cn(a, null, 10, [
				e,
				i,
				o
			]), et();
			return;
		}
	}
	En(e, n, i, r, s);
}
function En(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var Dn = [], On = -1, kn = [], An = null, jn = 0, Mn = /* @__PURE__ */ Promise.resolve(), Nn = null;
function Pn(e) {
	let t = Nn || Mn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fn(e) {
	let t = On + 1, n = Dn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Dn[r], a = Vn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function In(e) {
	if (!(e.flags & 1)) {
		let t = Vn(e), n = Dn[Dn.length - 1];
		!n || !(e.flags & 2) && t >= Vn(n) ? Dn.push(e) : Dn.splice(Fn(t), 0, e), e.flags |= 1, Ln();
	}
}
function Ln() {
	Nn ||= Mn.then(Hn);
}
function Rn(e) {
	g(e) ? kn.push(...e) : An && e.id === -1 ? An.splice(jn + 1, 0, e) : e.flags & 1 || (kn.push(e), e.flags |= 1), Ln();
}
function zn(e, t, n = On + 1) {
	for (; n < Dn.length; n++) {
		let t = Dn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			Dn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Bn(e) {
	if (kn.length) {
		let e = [...new Set(kn)].sort((e, t) => Vn(e) - Vn(t));
		if (kn.length = 0, An) {
			An.push(...e);
			return;
		}
		for (An = e, jn = 0; jn < An.length; jn++) {
			let e = An[jn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		An = null, jn = 0;
	}
}
var Vn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Hn(e) {
	try {
		for (On = 0; On < Dn.length; On++) {
			let e = Dn[On];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Cn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; On < Dn.length; On++) {
			let e = Dn[On];
			e && (e.flags &= -2);
		}
		On = -1, Dn.length = 0, Bn(e), Nn = null, (Dn.length || kn.length) && Hn(e);
	}
}
var P = null, Un = null;
function Wn(e) {
	let t = P;
	return P = e, Un = e && e.type.__scopeId || null, t;
}
function Gn(e, t = P, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && na(-1);
		let i = Wn(t), a;
		try {
			a = e(...n);
		} finally {
			Wn(i), r._d && na(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function F(e, t) {
	if (P === null) return e;
	let n = Ia(P), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, s, c = o] = t[e];
		i && (b(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && Sn(a), r.push({
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
function Kn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && ($e(), wn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), et());
	}
}
function qn(e, t) {
	if (G) {
		let n = G.provides, r = G.parent && G.parent.provides;
		r === n && (n = G.provides = Object.create(r)), n[e] = t;
	}
}
function Jn(e, t, n = !1) {
	let r = xa();
	if (r || ri) {
		let i = ri ? ri._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && b(t) ? t.call(r && r.proxy) : t;
	}
}
function Yn() {
	return !!(xa() || ri);
}
var Xn = /* @__PURE__ */ Symbol.for("v-scx"), Zn = () => Jn(Xn);
function Qn(e, t) {
	return er(e, null, { flush: "sync" });
}
function $n(e, t, n) {
	return er(e, t, n);
}
function er(e, t, n = o) {
	let { immediate: r, deep: i, flush: a, once: s } = n, l = f({}, n), u = t && r || !t && a !== "post", d;
	if (Da) {
		if (a === "sync") {
			let e = Zn();
			d = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = c, e.resume = c, e.pause = c, e;
		}
	}
	let p = G;
	l.call = (e, t, n) => wn(e, p, t, n);
	let m = !1;
	a === "post" ? l.scheduler = (e) => {
		Ii(e, p && p.suspense);
	} : a !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : In(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = xn(e, t, l);
	return Da && (d ? d.push(h) : u && h()), h;
}
function tr(e, t, n) {
	let r = this.proxy, i = x(e) ? e.includes(".") ? nr(r, e) : () => r[e] : e.bind(r, r), a;
	b(t) ? a = t : (a = t.handler, n = t);
	let o = wa(this), s = er(i, a.bind(r), n);
	return o(), s;
}
function nr(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var rr = /* @__PURE__ */ Symbol("_vte"), ir = (e) => e.__isTeleport, ar = /* @__PURE__ */ Symbol("_leaveCb");
function or(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, or(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
	return b(e) ? /* @__PURE__ */ f({ name: e.name }, t, { setup: e }) : e;
}
function sr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function cr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var lr = /* @__PURE__ */ new WeakMap();
function ur(e, t, n, r, i = !1) {
	if (g(e)) {
		e.forEach((e, a) => ur(e, t && (g(t) ? t[a] : t), n, r, i));
		return;
	}
	if (fr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ur(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? Ia(r.component) : r.el, s = i ? null : a, { i: c, r: u } = e, d = t && t.r, f = c.refs === o ? c.refs = {} : c.refs, m = c.setupState, _ = /* @__PURE__ */ A(m), v = m === o ? l : (e) => cr(f, e) ? !1 : h(_, e), y = (e, t) => !(t && cr(f, t));
	if (d != null && d !== u) {
		if (dr(t), x(d)) f[d] = null, v(d) && (m[d] = null);
		else if (/* @__PURE__ */ j(d)) {
			let e = t;
			y(d, e.k) && (d.value = null), e.k && (f[e.k] = null);
		}
	}
	if (b(u)) Cn(u, c, 12, [s, f]);
	else {
		let t = x(u), r = /* @__PURE__ */ j(u);
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
					o(), lr.delete(e);
				};
				t.id = -1, lr.set(e, t), Ii(t, n);
			} else dr(e), o();
		}
	}
}
function dr(e) {
	let t = lr.get(e);
	t && (t.flags |= 8, lr.delete(e));
}
_e().requestIdleCallback, _e().cancelIdleCallback;
var fr = (e) => !!e.type.__asyncLoader, pr = (e) => e.type.__isKeepAlive;
function mr(e, t) {
	gr(e, "a", t);
}
function hr(e, t) {
	gr(e, "da", t);
}
function gr(e, t, n = G) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (vr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) pr(e.parent.vnode) && _r(r, t, n, e), e = e.parent;
	}
}
function _r(e, t, n, r) {
	let i = vr(t, e, r, !0);
	Tr(() => {
		p(r[t], i);
	}, n);
}
function vr(e, t, n = G, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			$e();
			let i = wa(n), a = wn(t, n, e, r);
			return i(), et(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var yr = (e) => (t, n = G) => {
	(!Da || e === "sp") && vr(e, (...e) => t(...e), n);
}, br = yr("bm"), xr = yr("m"), Sr = yr("bu"), Cr = yr("u"), wr = yr("bum"), Tr = yr("um"), Er = yr("sp"), Dr = yr("rtg"), Or = yr("rtc");
function kr(e, t = G) {
	vr("ec", e, t);
}
var Ar = /* @__PURE__ */ Symbol.for("v-ndc");
function jr(e, t, n, r) {
	let i, a = n && n[r], o = g(e);
	if (o || x(e)) {
		let n = o && /* @__PURE__ */ Yt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Zt(e), s = /* @__PURE__ */ Xt(e), e = pt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? tn(en(e[n])) : en(e[n]) : e[n], n, void 0, a && a[n]);
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
function Mr(e, t, n = {}, r, i) {
	if (P.ce || P.parent && fr(P.parent) && P.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), z(), ia(R, null, [H("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), z();
	let o = a && Nr(a(n)), s = n.key || o && o.key, c = ia(R, { key: (s && !S(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Nr(e) {
	return e.some((e) => aa(e) ? !(e.type === Xi || e.type === R && !Nr(e.children)) : !0) ? e : null;
}
var Pr = (e) => e ? Ea(e) ? Ia(e) : Pr(e.parent) : null, Fr = /* @__PURE__ */ f(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Pr(e.parent),
	$root: (e) => Pr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Gr(e),
	$forceUpdate: (e) => e.f ||= () => {
		In(e.update);
	},
	$nextTick: (e) => e.n ||= Pn.bind(e.proxy),
	$watch: (e) => tr.bind(e)
}), Ir = (e, t) => e !== o && !e.__isScriptSetup && h(e, t), Lr = {
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
			else if (Ir(r, t)) return s[t] = 1, r[t];
			else if (i !== o && h(i, t)) return s[t] = 2, i[t];
			else if (h(a, t)) return s[t] = 3, a[t];
			else if (n !== o && h(n, t)) return s[t] = 4, n[t];
			else Br && (s[t] = 0);
		}
		let u = Fr[t], d, f;
		if (u) return t === "$attrs" && k(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== o && h(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, h(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Ir(i, t) ? (i[t] = n, !0) : r !== o && h(r, t) ? (r[t] = n, !0) : h(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: s } }, c) {
		let l;
		return !!(n[c] || e !== o && c[0] !== "$" && h(e, c) || Ir(t, c) || h(a, c) || h(r, c) || h(Fr, c) || h(i.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? h(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Rr(e) {
	return g(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function zr(e, t) {
	return !e || !t ? e || t : g(e) && g(t) ? e.concat(t) : f({}, Rr(e), Rr(t));
}
var Br = !0;
function Vr(e) {
	let t = Gr(e), n = e.proxy, r = e.ctx;
	Br = !1, t.beforeCreate && Ur(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: h, activated: _, deactivated: v, beforeDestroy: y, beforeUnmount: x, destroyed: S, unmounted: ee, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: ie, serverPrefetch: ae, expose: oe, inheritAttrs: se, components: ce, directives: le, filters: ue } = t;
	if (u && Hr(u, r, null), o) for (let e in o) {
		let t = o[e];
		b(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		C(t) && (e.data = /* @__PURE__ */ Gt(t));
	}
	if (Br = !0, a) for (let e in a) {
		let t = a[e], i = K({
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
	if (s) for (let e in s) Wr(s[e], r, n, e);
	if (l) {
		let e = b(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			qn(t, e[t]);
		});
	}
	d && Ur(d, e, "c");
	function w(e, t) {
		g(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (w(br, f), w(xr, p), w(Sr, m), w(Cr, h), w(mr, _), w(hr, v), w(kr, ie), w(Or, ne), w(Dr, re), w(wr, x), w(Tr, ee), w(Er, ae), g(oe)) if (oe.length) {
		let t = e.exposed ||= {};
		oe.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === c && (e.render = te), se != null && (e.inheritAttrs = se), ce && (e.components = ce), le && (e.directives = le), ae && sr(e);
}
function Hr(e, t, n = c) {
	g(e) && (e = Xr(e));
	for (let n in e) {
		let r = e[n], i;
		i = C(r) ? "default" in r ? Jn(r.from || n, r.default, !0) : Jn(r.from || n) : Jn(r), /* @__PURE__ */ j(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Ur(e, t, n) {
	wn(g(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Wr(e, t, n, r) {
	let i = r.includes(".") ? nr(n, r) : () => n[r];
	if (x(e)) {
		let n = t[e];
		b(n) && $n(i, n);
	} else if (b(e)) $n(i, e.bind(n));
	else if (C(e)) if (g(e)) e.forEach((e) => Wr(e, t, n, r));
	else {
		let r = b(e.handler) ? e.handler.bind(n) : t[e.handler];
		b(r) && $n(i, r, e);
	}
}
function Gr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Kr(c, e, o, !0)), Kr(c, t, o)), C(t) && a.set(t, c), c;
}
function Kr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Kr(e, a, n, !0), i && i.forEach((t) => Kr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = qr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var qr = {
	data: Jr,
	props: Qr,
	emits: Qr,
	methods: Zr,
	computed: Zr,
	beforeCreate: L,
	created: L,
	beforeMount: L,
	mounted: L,
	beforeUpdate: L,
	updated: L,
	beforeDestroy: L,
	beforeUnmount: L,
	destroyed: L,
	unmounted: L,
	activated: L,
	deactivated: L,
	errorCaptured: L,
	serverPrefetch: L,
	components: Zr,
	directives: Zr,
	watch: $r,
	provide: Jr,
	inject: Yr
};
function Jr(e, t) {
	return t ? e ? function() {
		return f(b(e) ? e.call(this, this) : e, b(t) ? t.call(this, this) : t);
	} : t : e;
}
function Yr(e, t) {
	return Zr(Xr(e), Xr(t));
}
function Xr(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function L(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Zr(e, t) {
	return e ? f(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qr(e, t) {
	return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : f(/* @__PURE__ */ Object.create(null), Rr(e), Rr(t ?? {})) : t;
}
function $r(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = f(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = L(e[r], t[r]);
	return n;
}
function ei() {
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
var ti = 0;
function ni(e, t) {
	return function(n, r = null) {
		b(n) || (n = f({}, n)), r != null && !C(r) && (r = null);
		let i = ei(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: ti++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ra,
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
					let u = c._ceVNode || H(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Ia(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (wn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = ri;
				ri = c;
				try {
					return e();
				} finally {
					ri = t;
				}
			}
		};
		return c;
	};
}
var ri = null;
function ii(e, t, n = o) {
	let r = xa(), i = le(t), a = w(t), s = ai(e, i), c = ln((s, c) => {
		let l, u = o, d;
		return Qn(() => {
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
var ai = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${le(t)}Modifiers`] || e[`${w(t)}Modifiers`];
function oi(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || o, i = n, a = t.startsWith("update:"), s = a && ai(r, t.slice(7));
	s && (s.trim && (i = n.map((e) => x(e) ? e.trim() : e)), s.number && (i = n.map(he)));
	let c, l = r[c = fe(t)] || r[c = fe(le(t))];
	!l && a && (l = r[c = fe(w(t))]), l && wn(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, wn(u, e, 6, i);
	}
}
var si = /* @__PURE__ */ new WeakMap();
function ci(e, t, n = !1) {
	let r = n ? si : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!b(e)) {
		let r = (e) => {
			let n = ci(e, t, !0);
			n && (s = !0, f(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (C(e) && r.set(e, null), null) : (g(a) ? a.forEach((e) => o[e] = null) : f(o, a), C(e) && r.set(e, o), o);
}
function li(e, t) {
	return !e || !u(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), h(e, t[0].toLowerCase() + t.slice(1)) || h(e, w(t)) || h(e, t));
}
function di(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Wn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = pa(l.call(t, e, u, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = pa(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : fi(s);
		}
	} catch (t) {
		Qi.length = 0, Tn(t, e, 1), v = H(Xi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(d) && (y = pi(y, a)), b = da(b, y, !1, !0));
	}
	return n.dirs && (b = da(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && or(b, n.transition), v = b, Wn(_), v;
}
var fi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || u(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, pi = (e, t) => {
	let n = {};
	for (let r in e) (!d(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function mi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? hi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (gi(o, r, n) && !li(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? hi(r, o, l) : !0 : !!o;
	return !1;
}
function hi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (gi(t, e, a) && !li(n, a)) return !0;
	}
	return !1;
}
function gi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && C(r) && C(i) ? !Oe(r, i) : r !== i;
}
function _i({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var vi = {}, yi = () => Object.create(vi), bi = (e) => Object.getPrototypeOf(e) === vi;
function xi(e, t, n, r = !1) {
	let i = {}, a = yi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ci(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Kt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Si(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ A(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (li(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (h(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = le(o);
					i[t] = wi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Ci(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !h(t, a) && ((r = w(a)) === a || !h(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = wi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !h(t, e)) && (delete a[e], l = !0);
	}
	l && ut(e.attrs, "set", "");
}
function Ci(e, t, n, r) {
	let [i, a] = e.propsOptions, s = !1, c;
	if (t) for (let o in t) {
		if (oe(o)) continue;
		let l = t[o], u;
		i && h(i, u = le(o)) ? !a || !a.includes(u) ? n[u] = l : (c ||= {})[u] = l : li(e.emitsOptions, o) || (!(o in r) || l !== r[o]) && (r[o] = l, s = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ A(n), r = c || o;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = wi(i, t, s, r[s], e, !h(r, s));
		}
	}
	return s;
}
function wi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = h(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && b(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = wa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === w(n)) && (r = !0));
	}
	return r;
}
var Ti = /* @__PURE__ */ new WeakMap();
function Ei(e, t, n = !1) {
	let r = n ? Ti : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, c = {}, l = [], u = !1;
	if (!b(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = Ei(e, t, !0);
			f(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !u) return C(e) && r.set(e, s), s;
	if (g(a)) for (let e = 0; e < a.length; e++) {
		let t = le(a[e]);
		Di(t) && (c[t] = o);
	}
	else if (a) for (let e in a) {
		let t = le(e);
		if (Di(t)) {
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
function Di(e) {
	return e[0] !== "$" && !oe(e);
}
var Oi = (e) => e === "_" || e === "_ctx" || e === "$stable", ki = (e) => g(e) ? e.map(pa) : [pa(e)], Ai = (e, t, n) => {
	if (t._n) return t;
	let r = Gn((...e) => ki(t(...e)), n);
	return r._c = !1, r;
}, ji = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Oi(n)) continue;
		let i = e[n];
		if (b(i)) t[n] = Ai(n, i, r);
		else if (i != null) {
			let e = ki(i);
			t[n] = () => e;
		}
	}
}, Mi = (e, t) => {
	let n = ki(t);
	e.slots.default = () => n;
}, Ni = (e, t, n) => {
	for (let r in t) (n || !Oi(r)) && (e[r] = t[r]);
}, Pi = (e, t, n) => {
	let r = e.slots = yi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ni(r, t, n), n && me(r, "_", e, !0)) : ji(t, r);
	} else t && Mi(e, t);
}, Fi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, s = o;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : Ni(i, t, n) : (a = !t.$stable, ji(t, i)), s = t;
	} else t && (Mi(e, t), s = { default: 1 });
	if (a) for (let e in i) !Oi(e) && s[e] == null && delete i[e];
}, Ii = Ji;
function Li(e) {
	return Ri(e);
}
function Ri(e, t) {
	let n = _e();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = c, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !oa(e, t) && (r = Ce(e), ve(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Yi:
				y(e, t, n, r);
				break;
			case Xi:
				b(e, t, n, r);
				break;
			case Zi:
				e ?? x(t, n, r, o);
				break;
			case R:
				ce(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? le(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ee);
		}
		u != null && i ? ur(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && ur(e.ref, null, a, e, !0);
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
		if (d = e.el = l(e.type, s, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && re(e.children, d, null, i, o, zi(e, s), c, u), _ && Kn(e, null, i, "created"), ne(d, e, e.scopeId, c, i), m) {
			for (let e in m) e !== "value" && !oe(e) && a(d, e, null, m[e], s, i);
			"value" in m && a(d, "value", null, m.value, s), (f = m.onVnodeBeforeMount) && _a(f, i, e);
		}
		_ && Kn(e, null, i, "beforeMount");
		let v = Vi(o, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ii(() => {
			try {
				f && _a(f, i, e), v && g.enter(d), _ && Kn(e, null, i, "mounted");
			} finally {}
		}, o);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || qi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, re = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ma(e[l]) : pa(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, t, n, r, i, s, c) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || o, h = t.props || o, g;
		if (n && Bi(n, !1), (g = h.onVnodeBeforeUpdate) && _a(g, n, t, e), f && Kn(t, e, n, "beforeUpdate"), n && Bi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, n, r, zi(t, i), s) : c || T(e, t, l, null, n, r, zi(t, i), s, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Ii(() => {
			g && _a(g, n, t, e), f && Kn(t, e, n, "updated");
		}, r);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === R || !oa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), re(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Hi(e, t, !0)) : T(e, t, n, f, a, o, s, c, l);
	}, le = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ue(t, n, r, i, a, o, c) : w(e, t, c);
	}, ue = (e, t, n, r, i, a, o) => {
		let s = e.component = ba(e, r, i);
		if (pr(e) && (s.ctx.renderer = Ee), Oa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o), !e.el) {
				let r = s.subTree = H(Xi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, w = (e, t, n) => {
		let r = t.component = e.component;
		if (mi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			fe(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, de = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Wi(e);
					if (n) {
						t && (t.el = c.el, fe(e, t, o)), n.asyncDep.then(() => {
							Ii(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Bi(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && pe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && _a(d, s, t, c), Bi(e, !0);
				let f = di(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), Ce(p), e, i, a), t.el = f.el, u === null && _i(e, f.el), r && Ii(r, i), (d = t.props && t.props.onVnodeUpdated) && Ii(() => _a(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = fr(t);
				if (Bi(e, !1), l && pe(l), !m && (o = c && c.onVnodeBeforeMount) && _a(o, d, t), Bi(e, !0), s && Oe) {
					let t = () => {
						e.subTree = di(e), Oe(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = di(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ii(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ii(() => _a(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && fr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ii(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Re(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => In(u), Bi(e, !0), l();
	}, fe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Si(e, t.props, r, n), Fi(e, t.children, n), $e(), zn(e), et();
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
			let r = t[p] = l ? ma(t[p]) : pa(t[p]);
			v(e[p], r, n, null, i, a, o, c, l);
		}
		u > d ? Se(e, i, a, !0, !1, f) : re(t, n, r, i, a, o, c, l, f);
	}, he = (e, t, n, r, i, a, o, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], s = t[u] = l ? ma(t[u]) : pa(t[u]);
			if (oa(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], s = t[p] = l ? ma(t[p]) : pa(t[p]);
			if (oa(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, s = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ma(t[u]) : pa(t[u]), n, s, i, a, o, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ve(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ma(t[u]) : pa(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && oa(r, t[_])) {
					s = _;
					break;
				}
				s === void 0 ? ve(r, i, a, !0) : (C[s - h] = u + 1, s >= S ? S = s : x = !0, v(r, t[s], n, null, i, a, o, c, l), y++);
			}
			let ee = x ? Ui(C) : s;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, s = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ki(f) : r;
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
			c.move(e, t, n, Ee);
			return;
		}
		if (c === R) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Zi) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[ar] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), Ii(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[ar];
				s._isLeaving && s[ar](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, ve = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && ($e(), ur(s, null, n, e, !0), et()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !fr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && _a(_, t, e), u & 6) xe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Kn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ee, r) : l && !l.hasOnce && (a !== R || d > 0 && d & 64) ? Se(l, t, n, !1, !0) : (a === R && d & 384 || !i && u & 16) && Se(c, t, n), r && ye(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ii(() => {
			_ && _a(_, t, e), h && Kn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ye = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === R) {
			be(n, r);
			return;
		}
		if (t === Zi) {
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
		Gi(c), Gi(l), r && pe(r), i.stop(), a && (a.flags |= 8, ve(o, e, t, n)), s && Ii(s, t), Ii(() => {
			e.isUnmounted = !0;
		}, t);
	}, Se = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ve(e[o], t, n, r, i);
	}, Ce = (e) => {
		if (e.shapeFlag & 6) return Ce(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[rr];
		return n ? h(n) : t;
	}, we = !1, Te = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ve(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, we ||= (we = !0, zn(r), Bn(), !1);
	}, Ee = {
		p: v,
		um: ve,
		m: ge,
		r: ye,
		mt: ue,
		mc: re,
		pc: T,
		pbc: ae,
		n: Ce,
		o: e
	}, De, Oe;
	return t && ([De, Oe] = t(Ee)), {
		render: Te,
		hydrate: De,
		createApp: ni(Te, De)
	};
}
function zi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Vi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (g(r) && g(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ma(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Hi(t, a)), a.type === Yi && (a.patchFlag === -1 && (a = i[e] = ma(a)), a.el = t.el), a.type === Xi && !a.el && (a.el = t.el);
	}
}
function Ui(e) {
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
function Wi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Wi(t);
}
function Gi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ki(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ki(t.subTree) : null;
}
var qi = (e) => e.__isSuspense;
function Ji(e, t) {
	t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : Rn(e);
}
var R = /* @__PURE__ */ Symbol.for("v-fgt"), Yi = /* @__PURE__ */ Symbol.for("v-txt"), Xi = /* @__PURE__ */ Symbol.for("v-cmt"), Zi = /* @__PURE__ */ Symbol.for("v-stc"), Qi = [], $i = null;
function z(e = !1) {
	Qi.push($i = e ? null : []);
}
function ea() {
	Qi.pop(), $i = Qi[Qi.length - 1] || null;
}
var ta = 1;
function na(e, t = !1) {
	ta += e, e < 0 && $i && t && ($i.hasOnce = !0);
}
function ra(e) {
	return e.dynamicChildren = ta > 0 ? $i || s : null, ea(), ta > 0 && $i && $i.push(e), e;
}
function B(e, t, n, r, i, a) {
	return ra(V(e, t, n, r, i, a, !0));
}
function ia(e, t, n, r, i) {
	return ra(H(e, t, n, r, i, !0));
}
function aa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function oa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var sa = ({ key: e }) => e ?? null, ca = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : x(e) || /* @__PURE__ */ j(e) || b(e) ? {
	i: P,
	r: e,
	k: t,
	f: !!n
} : e);
function V(e, t = null, n = null, r = 0, i = null, a = e === R ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && sa(t),
		ref: t && ca(t),
		scopeId: Un,
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
		ctx: P
	};
	return s ? (ha(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= x(n) ? 8 : 16), ta > 0 && !o && $i && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && $i.push(c), c;
}
var H = la;
function la(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Ar) && (e = Xi), aa(e)) {
		let r = da(e, t, !0);
		return n && ha(r, n), ta > 0 && !a && $i && (r.shapeFlag & 6 ? $i[$i.indexOf(e)] = r : $i.push(r)), r.patchFlag = -2, r;
	}
	if (La(e) && (e = e.__vccOpts), t) {
		t = ua(t);
		let { class: e, style: n } = t;
		e && !x(e) && (t.class = Ce(e)), C(n) && (/* @__PURE__ */ Qt(n) && !g(n) && (n = f({}, n)), t.style = ve(n));
	}
	let o = x(e) ? 1 : qi(e) ? 128 : ir(e) ? 64 : C(e) ? 4 : b(e) ? 2 : 0;
	return V(e, t, n, r, i, o, a, !0);
}
function ua(e) {
	return e ? /* @__PURE__ */ Qt(e) || bi(e) ? f({}, e) : e : null;
}
function da(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ga(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && sa(l),
		ref: t && t.ref ? n && a ? g(a) ? a.concat(ca(t)) : [a, ca(t)] : ca(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== R ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && da(e.ssContent),
		ssFallback: e.ssFallback && da(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && or(u, c.clone(u)), u;
}
function U(e = " ", t = 0) {
	return H(Yi, null, e, t);
}
function fa(e, t) {
	let n = H(Zi, null, e);
	return n.staticCount = t, n;
}
function W(e = "", t = !1) {
	return t ? (z(), ia(Xi, null, e)) : H(Xi, null, e);
}
function pa(e) {
	return e == null || typeof e == "boolean" ? H(Xi) : g(e) ? H(R, null, e.slice()) : aa(e) ? ma(e) : H(Yi, null, String(e));
}
function ma(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : da(e);
}
function ha(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (g(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), ha(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !bi(t) ? t._ctx = P : r === 3 && P && (P.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else b(t) ? (t = {
		default: t,
		_ctx: P
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [U(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ga(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = Ce([t.class, r.class]));
		else if (e === "style") t.style = ve([t.style, r.style]);
		else if (u(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(g(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !d(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function _a(e, t, n, r = null) {
	wn(e, t, 7, [n, r]);
}
var va = ei(), ya = 0;
function ba(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || va, a = {
		uid: ya++,
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
		scope: new Ne(!0),
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
		propsOptions: Ei(r, i),
		emitsOptions: ci(r, i),
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = oi.bind(null, a), e.ce && e.ce(a), a;
}
var G = null, xa = () => G || P, Sa, Ca;
{
	let e = _e(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Sa = t("__VUE_INSTANCE_SETTERS__", (e) => G = e), Ca = t("__VUE_SSR_SETTERS__", (e) => Da = e);
}
var wa = (e) => {
	let t = G;
	return Sa(e), e.scope.on(), () => {
		e.scope.off(), Sa(t);
	};
}, Ta = () => {
	G && G.scope.off(), Sa(null);
};
function Ea(e) {
	return e.vnode.shapeFlag & 4;
}
var Da = !1;
function Oa(e, t = !1, n = !1) {
	t && Ca(t);
	let { props: r, children: i } = e.vnode, a = Ea(e);
	xi(e, r, a, t), Pi(e, i, n || t);
	let o = a ? ka(e, t) : void 0;
	return t && Ca(!1), o;
}
function ka(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Lr);
	let { setup: r } = n;
	if (r) {
		$e();
		let n = e.setupContext = r.length > 1 ? Fa(e) : null, i = wa(e), a = Cn(r, e, 0, [e.props, n]), o = ee(a);
		if (et(), i(), (o || e.sp) && !fr(e) && sr(e), o) {
			if (a.then(Ta, Ta), t) return a.then((n) => {
				Aa(e, n, t);
			}).catch((t) => {
				Tn(t, e, 0);
			});
			e.asyncDep = a;
		} else Aa(e, a, t);
	} else Na(e, t);
}
function Aa(e, t, n) {
	b(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : C(t) && (e.setupState = sn(t)), Na(e, n);
}
var ja, Ma;
function Na(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && ja && !r.render) {
			let t = r.template || Gr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = ja(t, f(f({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || c, Ma && Ma(e);
	}
	{
		let t = wa(e);
		$e();
		try {
			Vr(e);
		} finally {
			et(), t();
		}
	}
}
var Pa = { get(e, t) {
	return k(e, "get", ""), e[t];
} };
function Fa(e) {
	return {
		attrs: new Proxy(e.attrs, Pa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ia(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(sn($t(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Fr) return Fr[n](e);
		},
		has(e, t) {
			return t in e || t in Fr;
		}
	}) : e.proxy;
}
function La(e) {
	return b(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ gn(e, t, Da), Ra = "3.5.38", za = void 0, Ba = typeof window < "u" && window.trustedTypes;
if (Ba) try {
	za = /* @__PURE__ */ Ba.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Va = za ? (e) => za.createHTML(e) : (e) => e, Ha = "http://www.w3.org/2000/svg", Ua = "http://www.w3.org/1998/Math/MathML", Wa = typeof document < "u" ? document : null, Ga = Wa && /* @__PURE__ */ Wa.createElement("template"), Ka = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Wa.createElementNS(Ha, e) : t === "mathml" ? Wa.createElementNS(Ua, e) : n ? Wa.createElement(e, { is: n }) : Wa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Wa.createTextNode(e),
	createComment: (e) => Wa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Wa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Ga.innerHTML = Va(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ga.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, qa = /* @__PURE__ */ Symbol("_vtc");
function Ja(e, t, n) {
	let r = e[qa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ya = /* @__PURE__ */ Symbol("_vod"), Xa = /* @__PURE__ */ Symbol("_vsh"), Za = /* @__PURE__ */ Symbol(""), Qa = /(?:^|;)\s*display\s*:/;
function $a(e, t, n) {
	let r = e.style, i = x(n), a = !1;
	if (n && !i) {
		if (t) if (x(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? to(r, t, "");
		}
		else for (let e in t) n[e] ?? to(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? to(r, i, "") : ao(e, i, !x(t) && t ? t[i] : void 0, o) || to(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Za];
			e && (n += ";" + e), r.cssText = n, a = Qa.test(n);
		}
	} else t && e.removeAttribute("style");
	Ya in e && (e[Ya] = a ? r.display : "", e[Xa] && (r.display = "none"));
}
var eo = /\s*!important$/;
function to(e, t, n) {
	if (g(n)) n.forEach((n) => to(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = io(e, t);
		eo.test(n) ? e.setProperty(w(r), n.replace(eo, ""), "important") : e[r] = n;
	}
}
var no = [
	"Webkit",
	"Moz",
	"ms"
], ro = {};
function io(e, t) {
	let n = ro[t];
	if (n) return n;
	let r = le(t);
	if (r !== "filter" && r in e) return ro[t] = r;
	r = de(r);
	for (let n = 0; n < no.length; n++) {
		let i = no[n] + r;
		if (i in e) return ro[t] = i;
	}
	return t;
}
function ao(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && x(r) && n === r;
}
var oo = "http://www.w3.org/1999/xlink";
function so(e, t, n, r, i, a = Te(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(oo, t.slice(6, t.length)) : e.setAttributeNS(oo, t, n) : n == null || a && !Ee(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : S(n) ? String(n) : n);
}
function co(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Va(n) : n);
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
		r === "boolean" ? n = Ee(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function lo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function uo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var fo = /* @__PURE__ */ Symbol("_vei");
function po(e, t, n, r, i = null) {
	let a = e[fo] || (e[fo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ho(t);
		r ? lo(e, n, a[t] = yo(r, i), s) : o && (uo(e, n, o, s), a[t] = void 0);
	}
}
var mo = /(?:Once|Passive|Capture)$/;
function ho(e) {
	let t;
	if (mo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(mo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : w(e.slice(2)), t];
}
var go = 0, _o = /* @__PURE__ */ Promise.resolve(), vo = () => go ||= (_o.then(() => go = 0), Date.now());
function yo(e, t) {
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
				e && wn(e, t, 5, a);
			}
		} else wn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = vo(), n;
}
var bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ja(e, r, o) : t === "style" ? $a(e, n, r) : u(t) ? d(t) || po(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : So(e, t, r, o)) ? (co(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && so(e, t, r, o, a, t !== "value")) : e._isVueCE && (Co(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !x(r))) ? co(e, le(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), so(e, t, r, o));
};
function So(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && bo(t) && b(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return bo(t) && x(n) ? !1 : t in e;
}
function Co(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = le(t);
	return Array.isArray(n) ? n.some((e) => le(e) === r) : Object.keys(n).some((e) => le(e) === r);
}
var wo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return g(t) ? (e) => pe(t, e) : t;
};
function To(e) {
	e.target.composing = !0;
}
function Eo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Do = /* @__PURE__ */ Symbol("_assign");
function Oo(e, t, n) {
	return t && (e = e.trim()), n && (e = he(e)), e;
}
var q = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Do] = wo(i);
		let a = r || i.props && i.props.type === "number";
		lo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Do](Oo(e.value, n, a));
		}), (n || a) && lo(e, "change", () => {
			e.value = Oo(e.value, n, a);
		}), t || (lo(e, "compositionstart", To), lo(e, "compositionend", Eo), lo(e, "change", Eo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Do] = wo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? he(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, ko = {
	deep: !0,
	created(e, t, n) {
		e[Do] = wo(n), lo(e, "change", () => {
			let t = e._modelValue, n = No(e), r = e.checked, i = e[Do];
			if (g(t)) {
				let e = ke(t, n), a = e !== -1;
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
		e[Do] = wo(n), Ao(e, t, n);
	}
};
function Ao(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (g(t)) i = ke(t, r.props.value) > -1;
	else if (v(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Oe(t, Po(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var jo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = v(t);
		lo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? he(No(e)) : No(e));
			e[Do](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Pn(() => {
				e._assigning = !1;
			});
		}), e[Do] = wo(r);
	},
	mounted(e, { value: t }) {
		Mo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Do] = wo(n);
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
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = ke(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Oe(No(a), t)) {
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
}, Ro = /* @__PURE__ */ f({ patchProp: xo }, Ka), zo;
function Bo() {
	return zo ||= Li(Ro);
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
	let e = Pe(!0), t = e.run(() => /* @__PURE__ */ M({})), n = [], r = [], i = $t({
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
	return !n && Fe() && Ie(i), i;
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
		Jo(i) && Jo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ j(r) && !/* @__PURE__ */ Yt(r) ? e[n] = hs(i, r) : e[n] = r;
	}
	return e;
}
var gs = Symbol();
function _s(e) {
	return !Jo(e) || !Object.prototype.hasOwnProperty.call(e, gs);
}
var { assign: vs } = Object;
function ys(e) {
	return !!(/* @__PURE__ */ j(e) && e.effect);
}
function bs(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), vs(/* @__PURE__ */ un(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = $t(K(() => {
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
		Pn().then(() => {
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
	}, y = /* @__PURE__ */ Gt({
		_p: r,
		$id: e,
		$onAction: us.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = us(d, t, n.detached, () => a()), a = o.run(() => $n(() => r.state.value[e], (r) => {
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
	let b = (r._a && r._a.runWithContext || fs)(() => r._e.run(() => (o = Pe()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ j(n) && !ys(n) || /* @__PURE__ */ Yt(n) ? a || (p && _s(n) && (/* @__PURE__ */ j(n) ? n.value = p[t] : hs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return vs(y, b), vs(/* @__PURE__ */ A(y), b), Object.defineProperty(y, "$state", {
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
		let o = Yn();
		return n ||= o ? Jn(qo, null) : null, n && Ko(n), n = Go, n._s.has(e) || (i ? xs(e, t, r, n) : bs(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Cs(e) {
	let t = /* @__PURE__ */ A(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = K({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ j(i) || /* @__PURE__ */ Yt(i)) && (n[r] = /* @__PURE__ */ pn(e, r));
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
	let e = /* @__PURE__ */ M("fear"), t = /* @__PURE__ */ M(1), n = /* @__PURE__ */ M(""), r = /* @__PURE__ */ M([]), i = /* @__PURE__ */ M(), a = /* @__PURE__ */ M(), o, s = K(() => i.value !== void 0), c = K(() => Ts(e.value)), l = K(() => {
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
}, Ps = /* @__PURE__ */ I({
	__name: "FearConsoleHeader",
	props: {
		rating: {},
		selectedTypeLabel: {}
	},
	emits: ["configure"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("header", As, [r[2] ||= V("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [V("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [V("i", { class: "fa-solid fa-skull" })])], -1), V("div", js, [V("span", Ms, E(e.selectedTypeLabel) + " " + E(e.rating), 1), V("span", Ns, [V("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure Fear Console",
			title: "Configure Fear Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[1] ||= [V("i", {
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
}, pc = /* @__PURE__ */ I({
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
		return (e, d) => (z(), B("main", Fs, [
			H(Ps, {
				rating: N(s),
				"selected-type-label": N(l),
				onConfigure: t.actions.openConfigurator
			}, null, 8, [
				"rating",
				"selected-type-label",
				"onConfigure"
			]),
			N(a) ? (z(), B("div", Is, [d[8] ||= V("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), V("span", null, E(N(a)), 1)])) : W("", !0),
			V("section", Ls, [
				V("fieldset", Rs, [
					d[9] ||= V("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Effect", -1),
					V("div", zs, [V("button", {
						class: Ce(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": N(c) === "fear" }]),
						type: "button",
						"aria-pressed": N(c) === "fear",
						onClick: d[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, Bs), V("button", {
						class: Ce(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": N(c) === "terror" }]),
						type: "button",
						"aria-pressed": N(c) === "terror",
						onClick: d[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, Vs)]),
					d[10] ||= V("p", { class: "dui-label tw:whitespace-normal" }, " Choose the WFRP4e psychology test to prompt or apply. ", -1)
				]),
				V("fieldset", Hs, [
					d[11] ||= V("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Difficulty", -1),
					d[12] ||= V("label", {
						class: "dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					F(V("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": d[2] ||= (e) => /* @__PURE__ */ j(s) ? s.value = e : null,
						class: "dui-input dui-validator tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						q,
						N(s),
						void 0,
						{ number: !0 }
					]]),
					d[13] ||= V("p", { class: "dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				V("fieldset", Us, [
					d[14] ||= fa("<legend class=\"dui-fieldset-legend tw:text-base-content!\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary!\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					F(V("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": d[3] ||= (e) => /* @__PURE__ */ j(u) ? u.value = e : null,
						autocomplete: "off",
						class: "dui-input tw:min-w-0 tw:max-w-full tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[q, N(u)]]),
					d[15] ||= V("p", { class: "dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			V("section", Ws, [V("div", Gs, [V("div", Ks, [V("div", qs, [d[16] ||= V("h2", {
				id: "fear-terror-affected-actors",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Affected actors ", -1), V("span", Js, E(N(i).length), 1)]), V("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: N(o),
				type: "button",
				onClick: d[4] ||= (...e) => N(n).refreshActors && N(n).refreshActors(...e)
			}, [...d[17] ||= [V("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), U(" Refresh ", -1)]], 8, Ys)]), N(i).length ? (z(), B("ul", Xs, [(z(!0), B(R, null, jr(N(i), (e) => (z(), B("li", {
				key: e.id,
				class: "dui-list-row tw:items-center tw:bg-base-200!"
			}, [
				d[18] ||= V("span", {
					class: "dui-status dui-status-secondary",
					"aria-hidden": "true"
				}, null, -1),
				V("span", Zs, E(e.name), 1),
				V("span", Qs, E(e.source), 1)
			]))), 128))])) : (z(), B("div", $s, [d[19] ||= V("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), V("span", null, " Target one or more tokens to apply " + E(N(l)) + " directly. You can post a chat card without affected actors. ", 1)]))])]),
			V("footer", ec, [V("div", tc, [
				V("button", {
					class: "dui-btn dui-btn-primary dui-join-item tw:min-w-0 tw:flex-1 tw:rounded-l-full tw:shadow-md",
					disabled: N(o),
					type: "button",
					onClick: d[5] ||= (e) => N(n).runAction("post-card")
				}, [N(r) === "post-card" ? (z(), B("span", rc)) : (z(), B("i", ic)), d[20] ||= U(" Post Card ", -1)], 8, nc),
				V("button", {
					class: "dui-btn dui-btn-primary dui-btn-square dui-join-item tw:rounded-r-full tw:border-l-primary-content/25! tw:shadow-md",
					"aria-label": "More Fear Console actions",
					disabled: N(o),
					popovertarget: "fear-console-secondary-actions",
					style: { "anchor-name": "--fear-console-secondary-actions" },
					title: "More actions",
					type: "button"
				}, [...d[21] ||= [V("i", {
					class: "fa-solid fa-chevron-up",
					"aria-hidden": "true"
				}, null, -1)]], 8, ac),
				V("ul", oc, [V("li", { class: Ce({ "dui-menu-disabled": N(o) }) }, [V("button", {
					disabled: N(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[6] ||= (e) => N(n).runAction("copy-link")
				}, [N(r) === "copy-link" ? (z(), B("span", cc)) : (z(), B("i", lc)), d[22] ||= U(" Copy Link ", -1)], 8, sc)], 2), V("li", { class: Ce({ "dui-menu-disabled": N(o) }) }, [V("button", {
					disabled: N(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[7] ||= (e) => N(n).runAction("apply")
				}, [N(r) === "apply" ? (z(), B("span", dc)) : (z(), B("i", fc)), U(" Apply " + E(N(l)), 1)], 8, uc)], 2)])
			])])
		]));
	}
}), mc = Ss("fear-console-configurator", () => {
	let e = /* @__PURE__ */ M({ launchers: {
		actorSheet: !0,
		tokenControls: !0
	} }), t = /* @__PURE__ */ M(), n = /* @__PURE__ */ M(), r = /* @__PURE__ */ M(!1), i;
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
}, vc = { class: "tw:min-w-0" }, yc = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight tw:tracking-wide tw:text-base-content!" }, bc = { class: "tw:mt-1 tw:max-w-2xl tw:text-sm tw:leading-relaxed tw:text-base-content/70!" }, xc = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, Sc = ["data-tip"], Cc = ["aria-label", "title"], wc = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("header", hc, [V("div", gc, [V("span", _c, [V("i", { class: Ce(e.icon) }, null, 2)]), V("div", vc, [
			r[1] ||= V("div", { class: "dui-breadcrumbs tw:mb-0.5 tw:max-w-full tw:text-xs tw:text-secondary!" }, [V("ul", null, [V("li", null, "Drowsy’s WFRP4e Toolkit")])], -1),
			V("h1", yc, E(e.title), 1),
			V("p", bc, E(e.description), 1)
		])]), V("div", xc, [Mr(t.$slots, "end"), e.configureLabel ? (z(), B("span", {
			key: 0,
			class: "dui-tooltip dui-tooltip-left",
			"data-tip": e.configureLabel
		}, [V("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			type: "button",
			"aria-label": e.configureLabel,
			title: e.configureLabel,
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [V("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]], 8, Cc)], 8, Sc)) : W("", !0)])]));
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
}, Rc = /* @__PURE__ */ I({
	__name: "FearConsoleConfiguratorApp",
	props: {
		actions: {},
		configuration: {}
	},
	setup(e) {
		let t = e, n = mc();
		n.initialize(t.configuration, t.actions);
		let { configuration: r, errorMessage: i, isSaving: a, statusMessage: o } = Cs(n);
		return (e, t) => (z(), B("main", Tc, [
			H(wc, {
				description: "Choose where the Fear Console appears for this browser and account.",
				icon: "fa-solid fa-gears",
				title: "Fear Console Configurator"
			}),
			V("div", Ec, [
				N(i) ? (z(), B("div", Dc, [t[3] ||= V("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), V("span", null, E(N(i)), 1)])) : W("", !0),
				N(o) ? (z(), B("div", Oc, [t[4] ||= V("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), V("span", null, E(N(o)), 1)])) : W("", !0),
				V("section", kc, [V("div", Ac, [
					t[8] ||= V("div", null, [V("h2", {
						id: "fear-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), V("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These client preferences control only where shortcuts appear. Macros and the module API remain available. ")], -1),
					V("fieldset", jc, [
						t[7] ||= V("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1),
						V("label", Mc, [F(V("input", {
							"onUpdate:modelValue": t[0] ||= (e) => N(r).launchers.tokenControls = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[ko, N(r).launchers.tokenControls]]), t[5] ||= V("span", { class: "tw:min-w-0" }, [V("strong", { class: "tw:block" }, "Token Controls"), V("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the skull launcher in Foundry’s Token Controls palette. ")], -1)]),
						V("label", Nc, [F(V("input", {
							"onUpdate:modelValue": t[1] ||= (e) => N(r).launchers.actorSheet = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[ko, N(r).launchers.actorSheet]]), t[6] ||= V("span", { class: "tw:min-w-0" }, [V("strong", { class: "tw:block" }, "Actor-sheet headers"), V("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show a Fear Console action on supported WFRP4e actor sheets. ")], -1)])
					]),
					t[9] ||= V("div", {
						class: "dui-alert tw:text-sm",
						role: "note"
					}, [V("i", {
						class: "fa-solid fa-rotate",
						"aria-hidden": "true"
					}), V("span", null, "Launcher changes take effect after Foundry is reloaded.")], -1)
				])])
			]),
			V("footer", Pc, [t[11] ||= V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, "Scope: this client and user.", -1), V("button", {
				class: "dui-btn dui-btn-primary tw:min-w-40 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: N(a),
				type: "button",
				onClick: t[2] ||= (...e) => N(n).saveConfiguration && N(n).saveConfiguration(...e)
			}, [N(a) ? (z(), B("span", Ic)) : (z(), B("i", Lc)), t[10] ||= U(" Save configuration ", -1)], 8, Fc)])
		]));
	}
}), J = {
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
//#region src/functions/xp-curve/calculate.ts
var pl = .01, ml = 2 ** 53 - 1;
function hl(e) {
	return {
		companionMultiplier: xl(e.companionMultiplier, 0, 1),
		curveExponent: xl(e.curveExponent, .1, 5),
		gapForMaximumAward: Math.max(1, Sl(e.gapForMaximumAward)),
		maximumAward: Math.max(0, Sl(e.maximumAward)),
		scaleExponent: xl(e.scaleExponent, 0, 2),
		scalePivot: Math.max(1, Sl(e.scalePivot))
	};
}
function gl(e, t) {
	let n = e.filter((e) => e.selected), r = hl(t), i = Math.max(0, ...n.map((e) => e.totalXp)), a = n.map((e) => {
		let t = Sl(e.totalXp), n = Math.max(0, i - t), a = e.category === "companion" ? r.companionMultiplier : 1, o = _l(n, r), s = vl(t, r), c = Math.max(0, Math.round(o * s * a)), l = Math.min(r.maximumAward, c);
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
function _l(e, t) {
	let n = hl(t), r = Math.max(0, Number.isFinite(e) ? e : 0) / n.gapForMaximumAward, i = n.maximumAward * r ** n.curveExponent;
	return Number.isFinite(i) ? Math.min(i, ml) : ml;
}
function vl(e, t) {
	let n = hl(t), r = Math.max(0, Number.isFinite(e) ? e : 0);
	return Math.min(1, n.scalePivot / Math.max(r, n.scalePivot)) ** n.scaleExponent;
}
function yl(e, t = e.gapForMaximumAward * 1.4, n = 24) {
	let r = hl(e), i = Math.max(2, Sl(n)), a = Math.max(r.gapForMaximumAward * 1.4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			award: _l(n, r),
			gap: n
		};
	});
}
function bl(e, t = e.scalePivot * 4, n = 32) {
	let r = hl(e), i = Math.max(2, Sl(n)), a = Math.max(1e3, r.scalePivot * 4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			multiplier: vl(n, r),
			recipientXp: n
		};
	});
}
function xl(e, t, n) {
	let r = Number(e);
	return Math.min(n, Math.max(t, Number.isFinite(r) ? r : pl));
}
function Sl(e) {
	let t = Number(e);
	return Number.isFinite(t) ? Math.round(t) : 0;
}
//#endregion
//#region src/functions/xp-curve/reason.ts
function Cl(e, t) {
	return e.replaceAll("%session%", t.session).replaceAll("%date%", t.date).replaceAll("%datetime%", t.datetime ?? "").replace(/\s+\(\s*\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function wl(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/types/xp-curve/XpCurve.ts
var Tl = {
	companionMultiplier: .5,
	curveExponent: 1.75,
	gapForMaximumAward: 5e3,
	maximumAward: 1e3,
	scaleExponent: 1,
	scalePivot: 7500
}, El = {
	defaultReason: "XP Curve %session% (%date%)",
	defaultSelection: "company",
	parameters: { ...Tl }
};
//#endregion
//#region src/state/apps/shared/xp-actor-selection.ts
function Dl(e) {
	let t = /* @__PURE__ */ M([]), n = K(() => t.value.filter((e) => e.selected)), r = /* @__PURE__ */ new Set();
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
var Ol = Ss("xp-curve-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = Dl("The XP Curve Console"), o = /* @__PURE__ */ M({ ...Tl }), s = /* @__PURE__ */ M(""), c = /* @__PURE__ */ M("party"), l = /* @__PURE__ */ M("default"), u = /* @__PURE__ */ M(), d = /* @__PURE__ */ M(!1), f, p, m = K(() => gl(e.value, o.value)), h = K(() => m.value.awards.filter((e) => e.award > 0).length), g = K(() => r.value.length >= 2 && m.value.totalAward > 0 && !d.value), _ = K(() => Cl(s.value, x()));
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
}), kl = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:justify-end tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-3" }, Al = ["disabled"], jl = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Ml = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("footer", kl, [V("button", {
			class: "dui-btn dui-btn-primary tw:w-full tw:min-w-0 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md tw:min-[32rem]:w-auto tw:min-[32rem]:min-w-52",
			disabled: e.disabled,
			type: "button",
			onClick: r[0] ||= (e) => n("action")
		}, [e.working ? (z(), B("span", jl)) : (z(), B("i", {
			key: 1,
			class: Ce(e.icon),
			"aria-hidden": "true"
		}, null, 2)), U(" " + E(e.label), 1)], 8, Al)]));
	}
}), Nl = { class: "tw:cursor-pointer" }, Pl = ["checked", "disabled"], Fl = { class: "tw:sr-only" }, Il = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("label", Nl, [V("input", {
			class: "dui-checkbox dui-checkbox-primary dui-checkbox-sm tw:appearance-none! tw:rounded-sm! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none! tw:checked:text-primary-content!",
			type: "checkbox",
			checked: e.checked,
			disabled: e.disabled,
			onChange: i
		}, null, 40, Pl), V("span", Fl, "Include " + E(e.actorName) + " in " + E(e.purpose), 1)]));
	}
}), Ll = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipients-title"
}, Rl = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, zl = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Bl = { class: "tw:flex tw:items-center tw:gap-2" }, Vl = { class: "dui-badge dui-badge-sm" }, Hl = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Ul = ["disabled"], Wl = ["disabled"], Gl = ["disabled"], Kl = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100!"
}, ql = { class: "dui-table dui-table-sm tw:min-w-[52rem]" }, Jl = {
	class: "tw:min-w-44",
	scope: "row"
}, Yl = { class: "tw:block tw:font-semibold" }, Xl = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, Zl = { class: "tw:text-right tw:tabular-nums" }, Ql = { class: "tw:text-right tw:tabular-nums" }, $l = { class: "tw:text-right tw:tabular-nums" }, eu = { class: "tw:text-right tw:tabular-nums" }, tu = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, nu = { class: "tw:text-right tw:tabular-nums" }, ru = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, iu = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("section", Ll, [V("div", Rl, [V("div", zl, [V("div", null, [V("div", Bl, [n[3] ||= V("h2", {
			id: "recipients-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipients ", -1), V("span", Vl, E(e.plan.awards.length) + " selected", 1)]), n[4] ||= V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The XP leader sets the gap only. Decay is calculated from each recipient’s own total. ", -1)]), V("div", Hl, [
			V("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[0] ||= (e) => r("select-all", !0)
			}, " All ", 8, Ul),
			V("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[1] ||= (e) => r("select-all", !1)
			}, " None ", 8, Wl),
			V("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[2] ||= (e) => r("reset")
			}, " Reset ", 8, Gl)
		])]), e.actors.length ? (z(), B("div", Kl, [V("table", ql, [n[5] ||= V("thead", { class: "tw:bg-base-300/60!" }, [V("tr", null, [
			V("th", { scope: "col" }, "Use"),
			V("th", { scope: "col" }, "Actor"),
			V("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Total XP"),
			V("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Leader gap"),
			V("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Initial XP"),
			V("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Decay"),
			V("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Final award"),
			V("th", {
				class: "tw:text-right",
				scope: "col"
			}, "New total")
		])], -1), V("tbody", null, [(z(!0), B(R, null, jr(e.actors, (t) => (z(), B("tr", {
			key: t.id,
			class: Ce({ "tw:bg-base-200!": t.selected })
		}, [
			V("td", null, [H(Il, {
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
			V("th", Jl, [V("span", Yl, E(t.name), 1), t.category === "companion" ? (z(), B("span", Xl, " Companion rate ")) : W("", !0)]),
			V("td", Zl, E(t.totalXp), 1),
			V("td", Ql, E(i(t.id)?.gap ?? "—"), 1),
			V("td", $l, E(i(t.id) ? Math.round(i(t.id)?.catchUpValue ?? 0) : "—"), 1),
			V("td", eu, E(i(t.id) ? `${Math.round((i(t.id)?.decayMultiplier ?? 0) * 100)}%` : "—"), 1),
			V("td", tu, E(i(t.id) ? `+${i(t.id)?.award}` : "—"), 1),
			V("td", nu, E(i(t.id)?.afterXp ?? "—"), 1)
		], 2))), 128))])])])) : (z(), B("div", ru, [...n[6] ||= [V("i", {
			class: "fa-solid fa-user-slash",
			"aria-hidden": "true"
		}, null, -1), V("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]));
	}
}), au = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:mb-3",
	role: "status"
}, ou = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[68rem]:grid-cols-[1.25fr_1fr]" }, su = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "award-message-title"
}, cu = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, lu = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, uu = { class: "tw:m-0 tw:break-words tw:font-semibold" }, du = /* @__PURE__ */ I({
	__name: "XpAwardWorkspace",
	props: /*@__PURE__*/ zr({
		actors: {},
		disabled: { type: Boolean },
		plan: {},
		resolvedReason: {},
		selectionSource: {}
	}, {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {}
	}),
	emits: /*@__PURE__*/ zr([
		"reset",
		"select-all",
		"update:selected"
	], ["update:defaultReason"]),
	setup(e, { emit: t }) {
		let n = ii(e, "defaultReason"), r = t;
		function i(e, t) {
			r("update:selected", e, t);
		}
		return (t, a) => (z(), B(R, null, [e.selectionSource === "targets" && e.plan.awards.length === 0 ? (z(), B("div", au, [...a[3] ||= [V("i", {
			class: "fa-solid fa-bullseye",
			"aria-hidden": "true"
		}, null, -1), V("span", { class: "tw:min-w-0 tw:break-words" }, " The targeted tokens do not contain eligible WFRP4e character actors. ", -1)]])) : W("", !0), V("div", ou, [H(iu, {
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
		]), V("section", su, [V("div", cu, [
			a[5] ||= V("div", null, [V("h2", {
				id: "award-message-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Award message "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This reason is written to each recipient’s WFRP4e experience log. ")], -1),
			a[6] ||= V("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-award-reason"
			}, " Experience log reason ", -1),
			F(V("input", {
				id: "xp-award-reason",
				"onUpdate:modelValue": a[2] ||= (e) => n.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
				type: "text"
			}, null, 512), [[q, n.value]]),
			a[7] ||= V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
				U(" Supports Drowsy’s "),
				V("code", null, "%session%"),
				U(" reference and Foundry’s "),
				V("code", null, "%date%"),
				U(" value. ")
			], -1),
			V("div", lu, [a[4] ||= V("span", { class: "tw:text-xs tw:text-base-content/60!" }, "This award will record", -1), V("p", uu, E(e.resolvedReason || "No reason"), 1)]),
			a[8] ||= V("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [V("i", {
				class: "fa-solid fa-circle-info",
				"aria-hidden": "true"
			}), V("span", { class: "tw:min-w-0 tw:break-words" }, " Use the cog in the header to change curves and recipient defaults. Saving there refreshes this award ledger with the new calculation. ")], -1)
		])])])], 64));
	}
}), fu = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, pu = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, mu = ["title"], hu = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure XP Curve Console"
}, gu = { class: "tw:grid tw:grid-cols-2 tw:gap-px tw:border-b tw:border-base-content/20! tw:bg-base-content/20! tw:min-[38rem]:grid-cols-4" }, _u = { class: "tw:contents" }, vu = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, yu = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, bu = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, xu = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Su = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Cu = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, wu = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Tu = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Eu = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B(R, null, [V("header", fu, [r[3] ||= V("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [V("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [V("i", { class: "fa-solid fa-chart-line" })])], -1), V("div", pu, [V("span", {
			class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:max-w-56 tw:whitespace-normal tw:border-base-content/25! tw:py-1 tw:text-center",
			title: e.selectionSource === "targets" ? "Eligible targeted character tokens were selected when the console opened." : "No tokens were targeted, so the configured recipient default was used."
		}, [r[1] ||= V("span", {
			class: "dui-status dui-status-primary dui-status-sm tw:shrink-0",
			"aria-hidden": "true"
		}, null, -1), U(" " + E(e.selectionLabel), 1)], 8, mu), V("span", hu, [V("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure XP Curve Console",
			title: "Configure XP Curve Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [V("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]), V("div", gu, [V("dl", _u, [
			V("div", vu, [r[4] ||= V("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Selected recipients", -1), V("dd", yu, E(e.selectedCount), 1)]),
			V("div", bu, [r[5] ||= V("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "XP leader total", -1), V("dd", xu, E(e.highestXp), 1)]),
			V("div", Su, [r[6] ||= V("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Recipients gaining XP", -1), V("dd", Cu, E(e.positiveAwardCount), 1)]),
			V("div", wu, [r[7] ||= V("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Total award", -1), V("dd", Tu, E(e.totalAward) + " XP ", 1)])
		])])], 64));
	}
}), Du = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Ou = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, ku = { class: "tw:min-w-0 tw:break-words" }, Au = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, ju = /* @__PURE__ */ I({
	__name: "XpCurveConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Ol();
		n.initialize(t.initialization, t.actions);
		let { actors: r, canApply: i, defaultReason: a, errorMessage: o, isWorking: s, plan: c, positiveAwardCount: l, resolvedReason: u, selectedActors: d, selectionSource: f } = Cs(n), p = K(() => f.value === "targets" ? "Recipients: targeted tokens" : `Recipients: ${{
			company: "company default",
			party: "party default",
			world: "world default"
		}[t.initialization.defaultSelection]}`);
		return (e, m) => (z(), B("main", Du, [
			H(Eu, {
				"highest-xp": N(c).highestXp,
				"positive-award-count": N(l),
				"selected-count": N(d).length,
				"selection-label": p.value,
				"selection-source": N(f),
				"total-award": N(c).totalAward,
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
			N(o) ? (z(), B("div", Ou, [m[1] ||= V("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), V("span", ku, E(N(o)), 1)])) : W("", !0),
			V("div", Au, [H(du, {
				"default-reason": N(a),
				"onUpdate:defaultReason": m[0] ||= (e) => /* @__PURE__ */ j(a) ? a.value = e : null,
				actors: N(r),
				disabled: N(s),
				plan: N(c),
				"resolved-reason": N(u),
				"selection-source": N(f),
				onReset: N(n).resetSelection,
				onSelectAll: N(n).setAllActorsSelected,
				"onUpdate:selected": N(n).setActorSelected
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
			H(Ml, {
				disabled: !N(i),
				icon: "fa-solid fa-award",
				label: `Award ${N(c).totalAward} XP`,
				working: N(s),
				onAction: N(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])
		]));
	}
}), Mu = {
	...El,
	launchers: { tokenControls: !0 },
	parameters: { ...El.parameters }
}, Nu = Ss("xp-curve-configurator", () => {
	let e = /* @__PURE__ */ M([]), t = /* @__PURE__ */ M({ ...Mu.parameters }), n = /* @__PURE__ */ M(Mu.defaultReason), r = /* @__PURE__ */ M(Mu.defaultSelection), i = /* @__PURE__ */ M({ ...Mu.launchers }), a = /* @__PURE__ */ M(), o = /* @__PURE__ */ M(), s = /* @__PURE__ */ M(!1), c, l = K(() => gl(e.value, t.value)), u = K(() => Math.max(0, ...l.value.awards.map((e) => e.gap))), d = K(() => yl(t.value, Math.max(u.value * 1.1, 1))), f = K(() => bl(t.value, Math.max(l.value.highestXp * 1.1, 1)));
	function p(s, l) {
		c = l, e.value = s.actors.map((e) => ({ ...e })), t.value = { ...s.parameters }, n.value = s.defaultReason, r.value = s.defaultSelection, i.value = { ...s.launchers }, a.value = void 0, o.value = void 0;
	}
	function m(e) {
		r.value = e, o.value = void 0;
	}
	function h() {
		t.value = { ...Mu.parameters }, n.value = Mu.defaultReason, r.value = Mu.defaultSelection, i.value = { ...Mu.launchers }, a.value = void 0, o.value = "Defaults restored. Save configuration to apply them.";
	}
	async function g() {
		if (!s.value) {
			s.value = !0, a.value = void 0, o.value = void 0;
			try {
				t.value = hl(t.value);
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
function Pu(e, t, n, r) {
	return {
		maximumGap: Math.max(1, e * 1.4, ...n.map((e) => e.gap), ...r.map((e) => e.gap * 1.05)),
		maximumValue: Math.max(1, t * 1.25, ...n.map((e) => e.award * 1.05), ...r.map((e) => e.catchUpValue * 1.05))
	};
}
function Fu(e, t, n) {
	return { maximumRecipientXp: Math.max(1e3, e * 4, ...t.map((e) => e.recipientXp), ...n.map((e) => e.beforeXp * 1.05)) };
}
function Iu(e) {
	let t = (t) => Uu(t, e.bounds.maximumGap), n = (t) => Wu(t, e.bounds.maximumValue);
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
function Lu(e) {
	let t = (t) => Uu(t, e.bounds.maximumRecipientXp), n = Gu;
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
function Ru(e, t, n, r) {
	if (e === "reference") {
		let r = Ku((t.x - 68) / 472, .001, 1), i = 1 - Ku((t.y - 24) / 192, 0, 1);
		return {
			gapForMaximumAward: Math.max(1, Math.round(r * n.maximumGap)),
			kind: e,
			maximumAward: Math.max(0, Math.round(i * n.maximumValue))
		};
	}
	let i = Ku((216 - t.y) / 192 * (n.maximumValue / Math.max(1, r)), .03, .99);
	return {
		curveExponent: qu(Ku(Math.log(i) / Math.log(.5), .1, 5), .05),
		kind: e
	};
}
function zu(e, t, n) {
	if (e === "pivot") {
		let r = Ku((t.x - 68) / 472, .001, 1);
		return {
			kind: e,
			scalePivot: Math.max(1, Math.round(r * n.maximumRecipientXp))
		};
	}
	let r = Ku(1 - (t.y - 24) / 192, .25, .99);
	return {
		kind: e,
		scaleExponent: qu(Ku(Math.log(r) / Math.log(.5), 0, 2), .05)
	};
}
function Bu(e, t, n) {
	let r = Math.max(10, Math.round(t / 20)), i = Math.max(1, Math.round(Math.max(1, n) / 20));
	if (e === "ArrowLeft" || e === "ArrowRight") return { gapForMaximumAward: Math.max(1, t + (e === "ArrowLeft" ? -r : r)) };
	if (e === "ArrowUp" || e === "ArrowDown") return { maximumAward: Math.max(0, n + (e === "ArrowUp" ? i : -i)) };
}
function Vu(e, t, n, r) {
	if ([
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp"
	].includes(e)) return qu(Ku(t + (e === "ArrowUp" || e === "ArrowRight" ? -1 : 1) * .05, n, r), .05);
}
function Hu(e, t) {
	if (e !== "ArrowLeft" && e !== "ArrowRight") return;
	let n = Math.max(100, Math.round(t / 20));
	return Math.max(1, t + (e === "ArrowLeft" ? -n : n));
}
function Uu(e, t) {
	return 68 + Math.max(0, e) / Math.max(1, t) * 472;
}
function Wu(e, t) {
	return 24 + (1 - Math.max(0, e) / Math.max(1, t)) * 192;
}
function Gu(e) {
	return 24 + (1 - Ku(e, 0, 1)) * 192;
}
function Ku(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function qu(e, t) {
	let n = t.toString().split(".")[1]?.length ?? 0;
	return Number((Math.round(e / t) * t).toFixed(n));
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graphMath.ts
function Ju(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: (t.clientX - n.left) / n.width * 560,
		y: (t.clientY - n.top) / n.height * 270
	};
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/GraphCanvas.vue?vue&type=script&setup=true&lang.ts
var Yu = ["viewBox", "aria-labelledby"], Xu = ["id"], Zu = ["id"], Qu = [
	"x1",
	"x2",
	"y1",
	"y2"
], $u = [
	"x1",
	"x2",
	"y1",
	"y2"
], ed = [
	"x1",
	"x2",
	"y1",
	"y2"
], td = ["points"], nd = ["cx", "cy"], rd = ["x", "y"], id = ["x", "y"], ad = ["x", "y"], od = ["x", "y"], sd = ["x", "y"], cd = ["x", "y"], ld = ["transform", "y"], ud = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("svg", {
			class: "tw:block tw:h-auto tw:w-full tw:max-w-full tw:touch-none tw:[user-select:none]",
			viewBox: `0 0 ${N(560)} ${N(270)}`,
			role: "img",
			"aria-labelledby": `${e.titleId} ${e.descriptionId}`,
			onPointercancel: r[0] ||= (e) => n("pointercancel", e),
			onPointermove: r[1] ||= (e) => n("pointermove", e),
			onPointerup: r[2] ||= (e) => n("pointerup", e)
		}, [
			V("title", { id: e.titleId }, E(e.title), 9, Xu),
			V("desc", { id: e.descriptionId }, E(e.description), 9, Zu),
			V("line", {
				class: "tw:text-base-content/25!",
				x1: N(68),
				x2: N(68),
				y1: N(24),
				y2: N(24) + N(192),
				stroke: "currentColor"
			}, null, 8, Qu),
			V("line", {
				class: "tw:text-base-content/25!",
				x1: N(68),
				x2: N(68) + N(472),
				y1: N(24) + N(192),
				y2: N(24) + N(192),
				stroke: "currentColor"
			}, null, 8, $u),
			V("line", {
				class: "tw:text-base-content/25!",
				x1: e.verticalGuideX,
				x2: e.verticalGuideX,
				y1: N(24),
				y2: N(24) + N(192),
				stroke: "currentColor",
				"stroke-dasharray": "4 5"
			}, null, 8, ed),
			Mr(t.$slots, "guides"),
			V("polyline", {
				class: "tw:text-secondary!",
				fill: "none",
				points: e.points,
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "3"
			}, null, 8, td),
			(z(!0), B(R, null, jr(e.markers, (e) => (z(), B("g", {
				key: e.actorId,
				class: "tw:text-base-content!",
				"aria-hidden": "true"
			}, [V("circle", {
				cx: e.x,
				cy: e.y,
				fill: "currentColor",
				r: "9"
			}, [V("title", null, E(e.label), 1)], 8, nd), V("text", {
				class: "tw:text-base-100!",
				x: e.x,
				y: e.y + 3,
				fill: "currentColor",
				"font-size": "9",
				"font-weight": "700",
				"text-anchor": "middle"
			}, E(e.index), 9, rd)]))), 128)),
			Mr(t.$slots, "handles"),
			V("text", {
				class: "tw:text-base-content/65!",
				x: N(68),
				y: N(24) + N(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "middle"
			}, " 0 ", 8, id),
			V("text", {
				class: "tw:text-base-content/65!",
				x: N(68) + N(472),
				y: N(24) + N(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, E(e.maximumXLabel), 9, ad),
			V("text", {
				class: "tw:text-base-content/75!",
				x: N(68) + N(472) / 2,
				y: N(270) - 8,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, E(e.xAxisLabel), 9, od),
			e.maximumYLabel ? (z(), B("text", {
				key: 0,
				class: "tw:text-base-content/65!",
				x: N(68) - 10,
				y: N(24) + 4,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, E(e.maximumYLabel), 9, sd)) : W("", !0),
			V("text", {
				class: "tw:text-base-content/65!",
				x: N(68) - 10,
				y: N(24) + N(192) + 3,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, E(e.minimumYLabel), 9, cd),
			V("text", {
				class: "tw:text-base-content/75!",
				transform: `rotate(-90 16 ${N(24) + N(192) / 2})`,
				x: "16",
				y: N(24) + N(192) / 2,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, E(e.yAxisLabel), 9, ld),
			Mr(t.$slots, "labels")
		], 40, Yu));
	}
}), dd = [
	"role",
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], fd = ["x", "y"], pd = ["x", "y"], md = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("g", {
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
		}, [V("rect", {
			x: e.x - 8,
			y: e.y - 8,
			fill: "currentColor",
			height: "16",
			rx: "2",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18",
			width: "16"
		}, null, 8, fd), V("rect", {
			class: "tw:text-base-100!",
			x: e.x - 3,
			y: e.y - 3,
			fill: "currentColor",
			height: "6",
			rx: "1",
			width: "6"
		}, null, 8, pd)], 40, dd));
	}
}), hd = {
	key: 0,
	class: "tw:mt-2"
}, gd = { class: "tw:mt-1 tw:grid tw:[list-style:none] tw:grid-cols-1 tw:gap-x-3 tw:gap-y-1 tw:p-0 tw:text-xs tw:text-base-content/70! tw:min-[32rem]:grid-cols-2" }, _d = { class: "tw:font-bold tw:text-base-content!" }, vd = { class: "tw:break-words" }, yd = /* @__PURE__ */ I({
	__name: "RecipientLegend",
	props: { items: {} },
	setup(e) {
		return (t, n) => e.items.length ? (z(), B("figcaption", hd, [n[0] ||= V("span", { class: "tw:text-xs tw:font-semibold" }, "Selected recipients", -1), V("ol", gd, [(z(!0), B(R, null, jr(e.items, (e) => (z(), B("li", {
			key: e.actorId,
			class: "tw:min-w-0"
		}, [V("span", _d, E(e.index) + ".", 1), V("span", vd, E(e.text), 1)]))), 128))])])) : W("", !0);
	}
}), bd = [
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], xd = ["cx", "cy"], Sd = ["cx", "cy"], Cd = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("g", {
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
		}, [V("circle", {
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "8",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18"
		}, null, 8, xd), V("circle", {
			class: "tw:text-base-100!",
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "3"
		}, null, 8, Sd)], 40, bd));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/drag.ts
function wd(e, t) {
	let n = /* @__PURE__ */ nn();
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
function Td(e, t) {
	let n = K(() => Pu(e.gapForMaximumAward, e.maximumAward, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = wd(() => ({ ...n.value }), _), s = K(() => r.value?.snapshot ?? n.value), c = K(() => Iu({
		awards: e.awards,
		bounds: s.value,
		curveExponent: e.curveExponent,
		gapForMaximumAward: e.gapForMaximumAward,
		maximumAward: e.maximumAward,
		samples: e.samples
	})), l = K(() => s.value.maximumGap), u = K(() => c.value.points), d = K(() => c.value.recipientLegend), f = K(() => c.value.recipientPoints), p = K(() => c.value.referencePoint), m = K(() => c.value.shapePoint);
	function h(e) {
		return Uu(e, s.value.maximumGap);
	}
	function g(e) {
		return Wu(e, s.value.maximumValue);
	}
	function _(n, r) {
		let i = Ru(n.kind, Ju(n.svg, r), n.snapshot, e.maximumAward);
		if (i.kind === "reference") {
			t("update:gapForMaximumAward", i.gapForMaximumAward), t("update:maximumAward", i.maximumAward);
			return;
		}
		t("update:curveExponent", i.curveExponent);
	}
	function v(n) {
		let r = Bu(n.key, e.gapForMaximumAward, e.maximumAward);
		r && (n.preventDefault(), r.gapForMaximumAward !== void 0 && t("update:gapForMaximumAward", r.gapForMaximumAward), r.maximumAward !== void 0 && t("update:maximumAward", r.maximumAward));
	}
	function y(n) {
		let r = Vu(n.key, e.curveExponent, .1, 5);
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
var Ed = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-catch-up-graph-heading"
}, Dd = [
	"x1",
	"x2",
	"y1",
	"y2"
], Od = ["x", "y"], kd = /* @__PURE__ */ I({
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
		let { beginDrag: n, endDrag: r, maximumGap: i, points: a, recipientLegend: o, recipientPoints: s, referencePoint: c, shapePoint: l, toGraphX: u, toGraphY: d, updateDrag: f, updateReferenceWithKeyboard: p, updateShapeWithKeyboard: m } = Td(e, t);
		return (t, h) => (z(), B("figure", Ed, [
			h[2] ||= V("div", { class: "tw:mb-2" }, [V("h4", {
				id: "xp-catch-up-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Initial catch-up value by XP gap "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to set the reference gap and hard limit. Drag the round point to shape the curve. ")], -1),
			H(ud, {
				description: "The horizontal axis is the recipient's gap below the selected XP leader. The vertical axis is the initial catch-up value before recipient decay, companion rate, and the final hard limit. Numbered markers identify selected recipients.",
				"description-id": "xp-catch-up-graph-description",
				markers: N(s),
				"maximum-x-label": `${Math.round(N(i))} XP`,
				"minimum-y-label": "0",
				points: N(a),
				title: "Editable catch-up XP curve",
				"title-id": "xp-catch-up-graph-title",
				"vertical-guide-x": N(u)(e.gapForMaximumAward),
				"x-axis-label": "Gap below selected XP leader",
				"y-axis-label": "Initial catch-up XP",
				onPointercancel: N(r),
				onPointermove: N(f),
				onPointerup: N(r)
			}, {
				guides: Gn(() => [V("line", {
					class: "tw:text-warning",
					x1: N(68),
					x2: N(68) + N(472),
					y1: N(d)(e.maximumAward),
					y2: N(d)(e.maximumAward),
					stroke: "currentColor",
					"stroke-dasharray": "6 5"
				}, null, 8, Dd)]),
				handles: Gn(() => [H(Cd, {
					"aria-label": "Catch-up curve shape",
					"aria-value-max": 5,
					"aria-value-min": .1,
					"aria-value-now": e.curveExponent,
					"aria-value-text": `Exponent ${e.curveExponent}`,
					x: N(l).x,
					y: N(l).y,
					onKeydown: N(m),
					onPointerdown: h[0] ||= (e) => N(n)("shape", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), H(md, {
					"aria-label": `Reference point: ${e.gapForMaximumAward} XP gap and ${e.maximumAward} XP hard limit. Use left and right arrows for the gap, up and down arrows for the hard limit.`,
					role: "button",
					x: N(c).x,
					y: N(c).y,
					onKeydown: N(p),
					onPointerdown: h[1] ||= (e) => N(n)("reference", e)
				}, null, 8, [
					"aria-label",
					"x",
					"y",
					"onKeydown"
				])]),
				labels: Gn(() => [V("text", {
					class: "tw:text-warning",
					x: N(68) + 7,
					y: Math.max(N(24) + 12, N(d)(e.maximumAward) - 7),
					fill: "currentColor",
					"font-size": "11",
					"font-weight": "600"
				}, " Hard limit " + E(e.maximumAward) + " XP ", 9, Od)]),
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
			H(yd, { items: N(o) }, null, 8, ["items"])
		]));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/useDecayGraph.ts
function Ad(e, t) {
	let n = K(() => Fu(e.scalePivot, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = wd(() => ({ ...n.value }), g), s = K(() => r.value?.snapshot ?? n.value), c = K(() => Lu({
		awards: e.awards,
		bounds: s.value,
		samples: e.samples,
		scaleExponent: e.scaleExponent,
		scalePivot: e.scalePivot
	})), l = K(() => s.value.maximumRecipientXp), u = K(() => c.value.points), d = K(() => c.value.pivotPoint), f = K(() => c.value.recipientLegend), p = K(() => c.value.recipientPoints), m = K(() => c.value.strengthPoint);
	function h(e) {
		return Uu(e, s.value.maximumRecipientXp);
	}
	function g(e, n) {
		let r = zu(e.kind, Ju(e.svg, n), e.snapshot);
		if (r.kind === "pivot") {
			t("update:scalePivot", r.scalePivot);
			return;
		}
		t("update:scaleExponent", r.scaleExponent);
	}
	function _(n) {
		let r = Hu(n.key, e.scalePivot);
		r !== void 0 && (n.preventDefault(), t("update:scalePivot", r));
	}
	function v(n) {
		let r = Vu(n.key, e.scaleExponent, 0, 2);
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
var jd = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-decay-graph-heading"
}, Md = /* @__PURE__ */ I({
	__name: "XpDecayGraph",
	props: {
		awards: {},
		samples: {},
		scaleExponent: {},
		scalePivot: {}
	},
	emits: ["update:scaleExponent", "update:scalePivot"],
	setup(e, { emit: t }) {
		let { beginDrag: n, endDrag: r, maximumRecipientXp: i, pivotPoint: a, points: o, recipientLegend: s, recipientPoints: c, strengthPoint: l, toGraphX: u, updateDrag: d, updatePivotWithKeyboard: f, updateStrengthWithKeyboard: p } = Ad(e, t);
		return (t, m) => (z(), B("figure", jd, [
			m[2] ||= V("div", { class: "tw:mb-2" }, [V("h4", {
				id: "xp-decay-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Catch-up strength by recipient total XP "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to choose where decay begins. Drag the round point to make decay gentler or stronger. ")], -1),
			H(ud, {
				description: "The horizontal axis is each recipient's own total XP. The vertical axis is the multiplier applied to that recipient's initial catch-up value. Numbered markers identify selected recipients.",
				"description-id": "xp-decay-graph-description",
				markers: N(c),
				"maximum-x-label": `${Math.round(N(i))} XP`,
				"maximum-y-label": "100%",
				"minimum-y-label": "0%",
				points: N(o),
				title: "Editable recipient XP decay curve",
				"title-id": "xp-decay-graph-title",
				"vertical-guide-x": N(u)(e.scalePivot),
				"x-axis-label": "Recipient total XP",
				"y-axis-label": "Decay multiplier",
				onPointercancel: N(r),
				onPointermove: N(d),
				onPointerup: N(r)
			}, {
				handles: Gn(() => [H(Cd, {
					"aria-label": "Recipient decay strength",
					"aria-value-max": 2,
					"aria-value-min": 0,
					"aria-value-now": e.scaleExponent,
					"aria-value-text": `Decay exponent ${e.scaleExponent}`,
					x: N(l).x,
					y: N(l).y,
					onKeydown: N(p),
					onPointerdown: m[0] ||= (e) => N(n)("strength", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), H(md, {
					"aria-label": "Recipient total XP where decay begins",
					"aria-value-max": Math.round(N(i)),
					"aria-value-min": 1,
					"aria-value-now": e.scalePivot,
					"aria-value-text": `${e.scalePivot} total XP`,
					x: N(a).x,
					y: N(a).y,
					onKeydown: N(f),
					onPointerdown: m[1] ||= (e) => N(n)("pivot", e)
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
			H(yd, { items: N(s) }, null, 8, ["items"])
		]));
	}
}), Nd = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "curve-settings-title"
}, Pd = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, Fd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[66rem]:grid-cols-2" }, Id = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, Ld = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, Rd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, zd = { class: "dui-fieldset tw:min-w-0" }, Bd = { class: "dui-fieldset tw:min-w-0" }, Vd = { class: "dui-fieldset tw:min-w-0" }, Hd = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, Ud = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, Wd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, Gd = { class: "dui-fieldset tw:min-w-0" }, Kd = { class: "dui-fieldset tw:min-w-0" }, qd = { class: "dui-fieldset tw:min-w-0" }, Jd = /* @__PURE__ */ I({
	__name: "XpCurveConfiguration",
	props: /*@__PURE__*/ zr({
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
		let t = ii(e, "companionMultiplier"), n = ii(e, "curveExponent"), r = ii(e, "gapForMaximumAward"), i = ii(e, "maximumAward"), a = ii(e, "scaleExponent"), o = ii(e, "scalePivot");
		return (s, c) => (z(), B("section", Nd, [V("div", Pd, [
			c[31] ||= V("div", null, [V("h2", {
				id: "curve-settings-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " How awards are calculated "), V("p", { class: "tw:m-0 tw:max-w-3xl tw:text-xs tw:text-base-content/65!" }, " The graphs and number fields are two controls for the same settings. Drag either curve and its fields update immediately. ")], -1),
			V("div", Fd, [V("article", Id, [V("div", Ld, [
				c[20] ||= V("div", null, [V("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 1. Catch-up curve "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This curve converts the XP gap below the selected leader into an initial XP value. ")], -1),
				V("div", Rd, [
					V("fieldset", zd, [
						c[11] ||= V("legend", { class: "dui-fieldset-legend" }, "Hard limit", -1),
						c[12] ||= V("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-maximum-award"
						}, " Maximum final award ", -1),
						F(V("input", {
							id: "xp-maximum-award",
							"onUpdate:modelValue": c[0] ||= (e) => i.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "0",
							step: "1",
							type: "number"
						}, null, 512), [[
							q,
							i.value,
							void 0,
							{ number: !0 }
						]]),
						c[13] ||= V("p", { class: "dui-label tw:whitespace-normal" }, " Applied last; no recipient can receive more. ", -1)
					]),
					V("fieldset", Bd, [
						c[14] ||= V("legend", { class: "dui-fieldset-legend" }, "Reference gap", -1),
						c[15] ||= V("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-gap-for-cap"
						}, " Gap equal to the hard limit ", -1),
						F(V("input", {
							id: "xp-gap-for-cap",
							"onUpdate:modelValue": c[1] ||= (e) => r.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "1",
							type: "number"
						}, null, 512), [[
							q,
							r.value,
							void 0,
							{ number: !0 }
						]]),
						c[16] ||= V("p", { class: "dui-label tw:whitespace-normal" }, " At this gap, initial catch-up equals the limit before decay. ", -1)
					]),
					V("fieldset", Vd, [
						c[17] ||= V("legend", { class: "dui-fieldset-legend" }, "Curve shape", -1),
						c[18] ||= V("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-curve-exponent"
						}, " Catch-up exponent ", -1),
						F(V("input", {
							id: "xp-curve-exponent",
							"onUpdate:modelValue": c[2] ||= (e) => n.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "5",
							min: "0.1",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							q,
							n.value,
							void 0,
							{ number: !0 }
						]]),
						c[19] ||= V("p", { class: "dui-label tw:whitespace-normal" }, " Below 1 helps small gaps sooner; above 1 favors large gaps. ", -1)
					])
				]),
				H(kd, {
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
			])]), V("article", Hd, [V("div", Ud, [
				c[30] ||= V("div", null, [V("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 2. Recipient decay curve "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " High-XP builds depend less on raw XP differences. This multiplier is evaluated separately for every recipient. ")], -1),
				V("div", Wd, [
					V("fieldset", Gd, [
						c[21] ||= V("legend", { class: "dui-fieldset-legend" }, "Decay start", -1),
						c[22] ||= V("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-pivot"
						}, " Full-strength recipient XP ", -1),
						F(V("input", {
							id: "xp-scale-pivot",
							"onUpdate:modelValue": c[6] ||= (e) => o.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "100",
							type: "number"
						}, null, 512), [[
							q,
							o.value,
							void 0,
							{ number: !0 }
						]]),
						c[23] ||= V("p", { class: "dui-label tw:whitespace-normal" }, " Recipients at or below this total keep 100% strength. ", -1)
					]),
					V("fieldset", Kd, [
						c[24] ||= V("legend", { class: "dui-fieldset-legend" }, "Decay strength", -1),
						c[25] ||= V("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-exponent"
						}, " Recipient decay exponent ", -1),
						F(V("input", {
							id: "xp-scale-exponent",
							"onUpdate:modelValue": c[7] ||= (e) => a.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "2",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							q,
							a.value,
							void 0,
							{ number: !0 }
						]]),
						c[26] ||= V("p", { class: "dui-label tw:whitespace-normal" }, " Zero disables decay; higher values weaken catch-up faster. ", -1)
					]),
					V("fieldset", qd, [
						c[27] ||= V("legend", { class: "dui-fieldset-legend" }, "Companion rate", -1),
						c[28] ||= V("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-companion-rate"
						}, " Companion multiplier ", -1),
						F(V("input", {
							id: "xp-companion-rate",
							"onUpdate:modelValue": c[8] ||= (e) => t.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "1",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							q,
							t.value,
							void 0,
							{ number: !0 }
						]]),
						c[29] ||= V("p", { class: "dui-label tw:whitespace-normal" }, " 0.5 gives player-owned companions half the calculated XP. ", -1)
					])
				]),
				H(Md, {
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
			c[32] ||= V("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [V("i", {
				class: "fa-solid fa-calculator",
				"aria-hidden": "true"
			}), V("span", { class: "tw:min-w-0 tw:break-words" }, [
				U(" Initial catch-up = hard limit × (leader gap ÷ reference gap)"),
				V("sup", null, "shape"),
				U(". Final XP = min(hard limit, initial catch-up × recipient decay × companion rate). ")
			])], -1)
		])]));
	}
}), Yd = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipient-defaults-title"
}, Xd = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, Zd = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-4 tw:min-[42rem]:grid-cols-2" }, Qd = { class: "dui-fieldset tw:min-w-0" }, $d = { class: "dui-fieldset tw:min-w-0" }, ef = /* @__PURE__ */ I({
	__name: "XpRecipientDefaults",
	props: {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {},
		defaultSelection: { required: !0 },
		defaultSelectionModifiers: {}
	},
	emits: ["update:defaultReason", "update:defaultSelection"],
	setup(e) {
		let t = ii(e, "defaultReason"), n = ii(e, "defaultSelection");
		return (e, r) => (z(), B("section", Yd, [V("div", Xd, [r[9] ||= V("div", null, [V("h2", {
			id: "recipient-defaults-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipient and journal defaults "), V("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These values seed a newly opened console when no eligible tokens are targeted. ")], -1), V("div", Zd, [V("fieldset", Qd, [
			r[3] ||= V("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Default recipients", -1),
			r[4] ||= V("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-default-selection"
			}, " When no tokens are targeted ", -1),
			F(V("select", {
				id: "xp-default-selection",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				class: "dui-select dui-select-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!"
			}, [...r[2] ||= [
				V("option", { value: "party" }, "Party (assigned player characters)", -1),
				V("option", { value: "company" }, "Company (party plus companions)", -1),
				V("option", { value: "world" }, "World (every character actor)", -1)
			]], 512), [[jo, n.value]]),
			r[5] ||= V("p", { class: "dui-label tw:whitespace-normal" }, " Explicit targets replace this Drowsy’s WFRP4e Toolkit default. ", -1)
		]), V("fieldset", $d, [
			r[6] ||= V("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Experience journal", -1),
			r[7] ||= V("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-config-default-reason"
			}, " Default award reason ", -1),
			F(V("input", {
				id: "xp-config-default-reason",
				"onUpdate:modelValue": r[1] ||= (e) => t.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
				type: "text"
			}, null, 512), [[q, t.value]]),
			r[8] ||= V("p", { class: "dui-label tw:whitespace-normal" }, [
				U(" Supports the "),
				V("code", null, "%session%"),
				U(" and "),
				V("code", null, "%date%"),
				U(" tokens. The award console can still edit the reason for one batch. ")
			], -1)
		])])])]));
	}
}), tf = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, nf = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, rf = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, af = { class: "tw:min-w-0 tw:break-words" }, of = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, sf = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[54rem]:grid-cols-[minmax(15rem,0.72fr)_minmax(0,2fr)]" }, cf = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "xp-launcher-settings"
}, lf = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, uf = { class: "dui-fieldset tw:gap-2" }, df = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, ff = { class: "tw:mt-3 tw:min-w-0" }, pf = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[34rem]:flex-row tw:min-[34rem]:items-center tw:min-[34rem]:justify-between" }, mf = { class: "tw:flex tw:min-w-0 tw:flex-col tw:gap-2 tw:min-[30rem]:flex-row" }, hf = ["disabled"], gf = ["disabled"], _f = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, vf = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, yf = /* @__PURE__ */ I({
	__name: "XpCurveConfiguratorApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Nu();
		n.initialize(t.initialization, t.actions);
		let { curveSamples: r, decaySamples: i, defaultReason: a, defaultSelection: o, errorMessage: s, isSaving: c, launchers: l, parameters: u, plan: d, statusMessage: f } = Cs(n);
		return (e, t) => (z(), B("main", tf, [
			H(wc, {
				description: "Set launchers, recipient defaults, and the catch-up and decay curves used by new award consoles.",
				icon: "fa-solid fa-sliders",
				title: "XP Curve Configurator"
			}),
			V("div", nf, [
				N(s) ? (z(), B("div", rf, [t[10] ||= V("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), V("span", af, E(N(s)), 1)])) : W("", !0),
				N(f) ? (z(), B("div", of, [t[11] ||= V("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), V("span", null, E(N(f)), 1)])) : W("", !0),
				V("div", sf, [V("section", cf, [V("div", lf, [
					t[14] ||= V("div", null, [V("h2", {
						id: "xp-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Client preferences for this browser and user. ")], -1),
					V("fieldset", uf, [t[13] ||= V("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1), V("label", df, [F(V("input", {
						"onUpdate:modelValue": t[0] ||= (e) => N(l).tokenControls = e,
						class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
						type: "checkbox"
					}, null, 512), [[ko, N(l).tokenControls]]), t[12] ||= V("span", { class: "tw:min-w-0" }, [V("strong", { class: "tw:block" }, "Token Controls"), V("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the chart launcher in Token Controls. ")], -1)])]),
					t[15] ||= V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Launcher changes apply after a reload. Macros and the module API stay available. ", -1)
				])]), H(ef, {
					"default-reason": N(a),
					"onUpdate:defaultReason": t[1] ||= (e) => /* @__PURE__ */ j(a) ? a.value = e : null,
					"default-selection": N(o),
					"onUpdate:defaultSelection": N(n).setDefaultSelection
				}, null, 8, [
					"default-reason",
					"default-selection",
					"onUpdate:defaultSelection"
				])]),
				V("div", ff, [H(Jd, {
					"companion-multiplier": N(u).companionMultiplier,
					"onUpdate:companionMultiplier": t[2] ||= (e) => N(u).companionMultiplier = e,
					"curve-exponent": N(u).curveExponent,
					"onUpdate:curveExponent": t[3] ||= (e) => N(u).curveExponent = e,
					"gap-for-maximum-award": N(u).gapForMaximumAward,
					"onUpdate:gapForMaximumAward": t[4] ||= (e) => N(u).gapForMaximumAward = e,
					"maximum-award": N(u).maximumAward,
					"onUpdate:maximumAward": t[5] ||= (e) => N(u).maximumAward = e,
					"scale-exponent": N(u).scaleExponent,
					"onUpdate:scaleExponent": t[6] ||= (e) => N(u).scaleExponent = e,
					"scale-pivot": N(u).scalePivot,
					"onUpdate:scalePivot": t[7] ||= (e) => N(u).scalePivot = e,
					awards: N(d).awards,
					"decay-samples": N(i),
					samples: N(r)
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
			V("footer", pf, [t[18] ||= V("p", { class: "tw:m-0 tw:min-w-0 tw:text-xs tw:text-base-content/65!" }, " Saving configuration never awards XP. World defaults apply to the next console opening. ", -1), V("div", mf, [V("button", {
				class: "dui-btn dui-btn-ghost tw:min-w-44 tw:rounded-full tw:border tw:border-base-content/20! tw:bg-base-200!",
				disabled: N(c),
				type: "button",
				onClick: t[8] ||= (...e) => N(n).resetToDefaults && N(n).resetToDefaults(...e)
			}, [...t[16] ||= [V("i", {
				class: "fa-solid fa-arrow-rotate-left",
				"aria-hidden": "true"
			}, null, -1), U(" Reset to defaults ", -1)]], 8, hf), V("button", {
				class: "dui-btn dui-btn-primary tw:min-w-48 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: N(c),
				type: "button",
				onClick: t[9] ||= (...e) => N(n).saveConfiguration && N(n).saveConfiguration(...e)
			}, [N(c) ? (z(), B("span", _f)) : (z(), B("i", vf)), t[17] ||= U(" Save configuration ", -1)], 8, gf)])])
		]));
	}
});
//#endregion
//#region src/functions/xp-curve/selection.ts
function bf(e) {
	let { assignedActorIds: t, candidates: n, defaultSelection: r, targetedActorIds: i } = e;
	return n.map((e) => {
		let n = xf(e, t);
		return {
			category: n,
			id: e.id,
			name: e.name,
			selected: i?.has(e.id) ?? Sf(e.id, n, r, t),
			totalXp: e.totalXp
		};
	}).sort(Cf);
}
function xf(e, t) {
	return e.hasPlayerOwner && !t.has(e.id) ? "companion" : "standard";
}
function Sf(e, t, n, r) {
	return n === "world" ? !0 : n === "company" ? r.has(e) || t === "companion" : r.has(e);
}
function Cf(e, t) {
	return e.selected === t.selected ? e.name.localeCompare(t.name) : e.selected ? -1 : 1;
}
//#endregion
//#region src/module/xp-curve/actors.ts
function wf(e) {
	let t = kf(), n = Af(), r = n === void 0 ? "default" : "targets";
	return {
		actors: bf({
			assignedActorIds: t,
			candidates: Array.from(game.actors).filter((e) => e.type === "character").map(Ef),
			defaultSelection: e,
			targetedActorIds: n
		}),
		selectionSource: r
	};
}
function Tf(e) {
	let t = kf();
	return e.map((e) => {
		let n = game.actors.get(e);
		if (!n || n.type !== "character") throw Error(`XP recipient ${e} is no longer an available character actor.`);
		return Df(n, xf(n, t), !0);
	});
}
function Ef(e) {
	let t = Of(e);
	return {
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		name: e.name,
		totalXp: t.totalXp
	};
}
function Df(e, t, n) {
	let r = Of(e);
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
function Of(e) {
	let t = e.system;
	if (!jf(t)) throw Error(`WFRP4e actor "${e.name}" does not expose readable system data.`);
	let n = t.details, r = t.awardExp;
	if (!jf(n) || typeof r != "function") throw Error(`WFRP4e actor "${e.name}" does not expose XP award operations.`);
	let i = n.experience;
	if (!jf(i) || !Number.isFinite(Number(i.total))) throw Error(`WFRP4e actor "${e.name}" does not expose a numeric total XP value.`);
	return {
		awardExperience: async (e, n) => {
			await r.call(t, e, n, null, !0);
		},
		totalXp: Math.max(0, Math.round(Number(i.total)))
	};
}
function kf() {
	return new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => typeof e == "string"));
}
function Af() {
	let e = game.user?.targets;
	if (!(!e || e.size === 0)) return new Set(Array.from(e).map((e) => e.actor).filter((e) => e?.type === "character").map((e) => e.id));
}
function jf(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/xp-curve/settings/keys.ts
var Y = {
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
function Mf() {
	return {
		defaultReason: Lf(Y.defaultReason),
		defaultSelection: Rf(Y.defaultSelection),
		parameters: {
			companionMultiplier: If(Y.companionMultiplier),
			curveExponent: If(Y.curveExponent),
			gapForMaximumAward: If(Y.gapForMaximumAward),
			maximumAward: If(Y.maximumAward),
			scaleExponent: If(Y.scaleExponent),
			scalePivot: If(Y.scalePivot)
		}
	};
}
async function Nf(e) {
	let n = [
		[Y.companionMultiplier, e.parameters.companionMultiplier],
		[Y.curveExponent, e.parameters.curveExponent],
		[Y.defaultReason, e.defaultReason],
		[Y.defaultSelection, e.defaultSelection],
		[Y.gapForMaximumAward, e.parameters.gapForMaximumAward],
		[Y.maximumAward, e.parameters.maximumAward],
		[Y.scaleExponent, e.parameters.scaleExponent],
		[Y.scalePivot, e.parameters.scalePivot]
	];
	for (let [e, r] of n) await game.settings.set(t, e, r);
}
function Pf(e) {
	return Ff(e);
}
function Ff(e) {
	return game.settings.get(t, e) === !0;
}
function If(e) {
	return Number(game.settings.get(t, e));
}
function Lf(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function Rf(e) {
	return zf(Lf(e));
}
function zf(e) {
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/xp-curve/configuration.ts
function Bf() {
	let e = Mf();
	return {
		...e,
		actors: wf(e.defaultSelection).actors,
		launchers: { tokenControls: Pf(Y.showTokenControlsLauncher) }
	};
}
async function Vf(e) {
	Bc(J.xpCurveConsole), await Nf({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: hl(e.parameters)
	}), await game.settings.set(t, Y.showTokenControlsLauncher, e.launchers.tokenControls), ui.notifications.info("XP Curve Console configuration saved.");
}
//#endregion
//#region src/module/apps/xp-curve-configurator/XpCurveConfiguratorApplication.ts
var Hf = class extends Gc {
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
		return yf;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: async (e) => {
				await Vf(e), await this.#e.onSaved?.();
			} },
			initialization: Bf()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-configurator/open.ts
async function Uf(e = {}) {
	let t = new Hf(e);
	return await t.render(!0), t;
}
function Wf(e = {}) {
	Uf(e).catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/types/session-management/SessionManagement.ts
var Gf = {
	currentSessionReference: "",
	sessions: [],
	version: 1
};
//#endregion
//#region src/functions/records/parse.ts
function Kf(e) {
	if (typeof e != "string") return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : t.toISOString();
}
function X(e) {
	return typeof e == "string" ? e : "";
}
function Z(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/functions/gm-toolkit/migration.ts
var qf = [
	"sessionReference",
	"defaultXpAmount",
	"defaultXpSelection",
	"defaultXpReason"
];
function Jf(e, t, n) {
	let r = np(e, t);
	return {
		disposition: e.disposition,
		family: e.family,
		key: e.key,
		source: n,
		valid: r.valid,
		value: r.value
	};
}
function Yf(e, t, n = {
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
		Qf(e, t, "sessionReference", "sessionID", "Session reference"),
		Qf(e, t, "defaultXpAmount", "addXPDefaultAmount", "XP amount"),
		Qf(e, t, "defaultXpSelection", "defaultPartySessionTurnover", "Recipients"),
		Qf(e, t, "defaultXpReason", "addXPDefaultReason", "XP reason")
	];
	return {
		darkWhispers: n,
		dispositionCounts: ip(e.settings, "disposition", [
			"import",
			"pending",
			"retire",
			"skip",
			"supersede"
		]),
		imports: i,
		launchers: r,
		source: e,
		sourceCounts: ip(e.settings, "source", [
			"baseline",
			"persisted",
			"registered"
		]),
		version: 1
	};
}
function Xf(e) {
	if (!Z(e) || e.schemaVersion !== "9.2.0") return;
	let t = Array.isArray(e.settings) ? e.settings.flatMap(rp) : [];
	if (!t.length) return;
	let n = X(e.moduleVersion);
	return {
		active: e.active === !0,
		installed: e.installed === !0,
		...n ? { moduleVersion: n } : {},
		schemaVersion: "9.2.0",
		settings: t,
		warnings: Array.isArray(e.warnings) ? e.warnings.filter((e) => typeof e == "string") : []
	};
}
function Zf(e) {
	return typeof e == "string" && qf.includes(e);
}
function Qf(e, t, n, r, i) {
	let a = $f(n, e.settings.find((e) => e.key === r)?.value), o = ep(n, t);
	return {
		comparison: tp(o, a),
		currentValue: o,
		field: n,
		label: i,
		sourceKey: r,
		sourceValue: a
	};
}
function $f(e, t) {
	if (e === "defaultXpAmount") {
		let e = Number(t);
		return Number.isFinite(e) ? Math.round(e) : 0;
	}
	return e === "defaultXpSelection" ? t === "company" ? "company" : "party" : typeof t == "string" && t !== "null" ? t : "";
}
function ep(e, t) {
	switch (e) {
		case "sessionReference": return t.sessionReference;
		case "defaultXpAmount": return t.xpAwardSettings.defaultAmount;
		case "defaultXpReason": return t.xpAwardSettings.defaultReason;
		case "defaultXpSelection": return t.xpAwardSettings.defaultSelection;
	}
}
function tp(e, t) {
	return e === t ? "same" : e === "" ? "target-empty" : "different";
}
function np(e, t) {
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
function rp(e) {
	if (!Z(e)) return [];
	let t = e.disposition, n = e.family, r = e.source, i = e.value;
	return !ap(t) || !op(n) || !sp(r) || !cp(i) ? [] : [{
		disposition: t,
		family: n,
		key: X(e.key),
		source: r,
		valid: e.valid === !0,
		value: i
	}];
}
function ip(e, t, n) {
	return Object.fromEntries(n.map((n) => [n, e.filter((e) => e[t] === n).length]));
}
function ap(e) {
	return [
		"import",
		"pending",
		"retire",
		"skip",
		"supersede"
	].includes(String(e));
}
function op(e) {
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
function sp(e) {
	return [
		"baseline",
		"persisted",
		"registered"
	].includes(String(e));
}
function cp(e) {
	return [
		"boolean",
		"number",
		"string"
	].includes(typeof e) || Array.isArray(e);
}
//#endregion
//#region src/functions/session-management/session.ts
var lp = 500;
function up(e) {
	let t = e.trim();
	if (!t) return "";
	let n = Number(t);
	return Number.isFinite(n) && Math.trunc(n) === n ? String(n + 1) : t;
}
function dp(e, t, n) {
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
			sessions: [s, ...e.sessions].slice(0, lp)
		}
	};
}
function fp(e) {
	let t = hp(e);
	if (!t || t.version !== 1) return {
		...Gf,
		sessions: []
	};
	let n = Array.isArray(t.sessions) ? t.sessions.flatMap(pp).slice(0, lp) : [], r = mp(t.gmToolkitMigration);
	return {
		currentSessionReference: X(t.currentSessionReference),
		...r ? { gmToolkitMigration: r } : {},
		sessions: n,
		version: 1
	};
}
function pp(e) {
	if (!Z(e)) return [];
	let t = X(e.id), n = Kf(e.occurredAt), r = Kf(e.recordedAt), i = X(e.reference);
	return t && n && r && i ? [{
		id: t,
		occurredAt: n,
		recordedAt: r,
		reference: i
	}] : [];
}
function mp(e) {
	if (!Z(e) || !Z(e.xpAwardSettings)) return;
	let t = Kf(e.importedAt), n = X(e.sessionReference), r = e.xpAwardSettings, i = r.defaultSelection;
	if (!t || i !== "party" && i !== "company" || !Number.isFinite(Number(r.defaultAmount))) return;
	let a = Xf(e.source), o = Array.isArray(e.appliedFields) ? e.appliedFields.filter(Zf) : void 0;
	return {
		...o ? { appliedFields: o } : {},
		importedAt: t,
		sessionReference: n,
		...a ? { source: a } : {},
		...e.version === 2 ? { version: 2 } : {},
		xpAwardSettings: {
			defaultAmount: Math.round(Number(r.defaultAmount)),
			defaultReason: X(r.defaultReason),
			defaultSelection: i,
			includeTimestampInReason: r.includeTimestampInReason === !0
		}
	};
}
function hp(e) {
	if (typeof e == "string") try {
		let t = JSON.parse(e);
		return Z(t) ? t : void 0;
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
	return fp(game.settings.get(t, _p.state));
}
function yp() {
	return vp().currentSessionReference;
}
async function bp(e) {
	await game.settings.set(t, _p.state, JSON.stringify(e));
}
//#endregion
//#region src/module/xp-curve/initialization.ts
function xp() {
	let e = Mf(), t = wf(e.defaultSelection);
	return {
		...e,
		...t,
		reasonContext: Sp()
	};
}
function Sp() {
	return {
		date: game.world.nextSession?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		session: yp()
	};
}
//#endregion
//#region src/module/xp-curve/service.ts
async function Cp(e) {
	Bc(J.xpCurveConsole);
	let t = Tf(Array.from(new Set(e.actorIds))), n = hl(e.parameters), r = gl(t.map((e) => e.choice), n);
	if (r.awards.length < 2) throw Error("Select at least two character actors to calculate catch-up XP.");
	if (r.totalAward < 1) throw Error("This curve produces no XP awards for the selected actors.");
	await Nf({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: n
	});
	let i = Cl(e.defaultReason, Sp()), a = [];
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
	return await wp(o), ui.notifications.info(`Awarded ${o.totalAward} total XP across ${a.length} actors.`), o;
}
async function wp(e) {
	let t = e.awards.filter((e) => e.award > 0).map((e) => `<li><strong>${wl(e.actorName)}</strong>: +${e.award} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Curve Award</h2><p>${wl(e.reason)}</p><ul>${t}</ul><p><strong>${e.totalAward} XP awarded in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
//#endregion
//#region src/module/apps/xp-curve-console/XpCurveConsoleApplication.ts
var Tp = class extends Gc {
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
		return ju;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: Cp,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Curve Console.`, e), ui.notifications.error("XP awards completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				},
				openConfigurator: () => {
					Wf({ onSaved: () => this.render(!0) });
				}
			},
			initialization: xp()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-console/open.ts
async function Ep() {
	let e = new Tp();
	return await e.render(!0), e;
}
function Dp() {
	Ep().catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Console. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/gm-toolkit/selection.ts
var Op = [
	"sessionReference",
	"defaultXpAmount",
	"defaultXpSelection",
	"defaultXpReason"
];
function kp(e) {
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
function Ap(e, t) {
	let n = Object.fromEntries(Op.map((e) => [e, !1]));
	if (t) for (let t of e?.imports ?? []) n[t.field] = t.comparison !== "same";
	return n;
}
function jp(e) {
	return Op.filter((t) => e[t]);
}
function Mp(e, t) {
	let n = kp(e);
	if (!n) return;
	let r = new Set(t);
	for (let e of n.imports) r.has(e.field) && (e.currentValue = e.sourceValue, e.comparison = "same");
	return n;
}
//#endregion
//#region src/functions/gm-toolkit/content-selection.ts
function Np(e, t) {
	return e.candidates.find((e) => e.tableId === t);
}
function Pp(e, t) {
	let n = Np(e, t);
	return Object.fromEntries((n?.prompts ?? []).map((e) => [e.resultId, e.comparison === "new"]));
}
function Fp(e) {
	return Object.entries(e).flatMap(([e, t]) => t ? [e] : []);
}
//#endregion
//#region src/functions/gm-toolkit/launcher-selection.ts
function Ip(e) {
	return Object.fromEntries((e?.remappableSlots ?? []).map((e) => [e, !0]));
}
function Lp(e) {
	return Object.entries(e).filter(([, e]) => e).map(([e]) => Number(e)).filter((e) => Number.isInteger(e)).sort((e, t) => e - t);
}
//#endregion
//#region src/state/apps/session-management/store.ts
var Rp = Ss("session-management", () => {
	let e = /* @__PURE__ */ M({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), t = /* @__PURE__ */ M(""), n = /* @__PURE__ */ M(""), r = /* @__PURE__ */ M(""), i = /* @__PURE__ */ M(), a = /* @__PURE__ */ M(Ap(void 0, !1)), o = /* @__PURE__ */ M(""), s = /* @__PURE__ */ M({}), c = /* @__PURE__ */ M("preserve"), l = /* @__PURE__ */ M({}), u = /* @__PURE__ */ M(), d = /* @__PURE__ */ M(), f = /* @__PURE__ */ M(!1), p;
	function m(o, s) {
		p = s, e.value = {
			...o.state,
			sessions: o.state.sessions.map((e) => ({ ...e }))
		}, t.value = o.state.currentSessionReference, n.value = up(t.value), r.value = o.occurredAtLocal, i.value = kp(o.gmToolkitImport), a.value = Ap(i.value, o.state.gmToolkitMigration === void 0), te(), ne(), u.value = void 0, d.value = void 0;
	}
	function h() {
		n.value = up(t.value);
	}
	async function g() {
		await ae(async () => {
			await oe().saveCurrentSessionReference(t.value), e.value.currentSessionReference = t.value.trim(), t.value = e.value.currentSessionReference, n.value = up(t.value), d.value = "Current session reference saved.";
		});
	}
	async function _() {
		await ae(async () => {
			let i = await oe().completeSession({
				nextSessionReference: n.value,
				occurredAt: r.value,
				sessionReference: t.value
			});
			e.value.sessions.unshift(i), e.value.currentSessionReference = n.value.trim(), t.value = e.value.currentSessionReference, n.value = up(t.value), d.value = `Session ${i.reference} recorded.`;
		});
	}
	async function v() {
		await ae(async () => {
			let r = jp(a.value), o = await oe().importGmToolkitData({ fields: r });
			e.value.gmToolkitMigration = o, e.value.currentSessionReference = o.sessionReference, t.value = o.sessionReference, n.value = up(o.sessionReference), i.value = Mp(i.value, o.appliedFields ?? []), a.value = Ap(i.value, !1), d.value = "GM Toolkit data imported. Future changes belong to Drowsy’s Toolkit.";
		});
	}
	async function y() {
		await ae(async () => {
			let e = await oe().importGmToolkitDarkWhispers({
				conflictPolicy: c.value,
				resultIds: Fp(s.value),
				tableId: o.value
			});
			i.value = kp(e.preview), te(), ne(), d.value = `${e.added} Dark Whispers prompt${e.added === 1 ? "" : "s"} added, ${e.replaced} replaced, and ${e.skipped} unchanged.`;
		});
	}
	async function b() {
		await ae(async () => {
			let e = await oe().remapGmToolkitLaunchers({ slots: Lp(l.value) });
			i.value &&= {
				...i.value,
				launchers: e.preview
			}, ne(), d.value = `${e.remappedSlots} hotbar slot${e.remappedSlots === 1 ? "" : "s"} moved to Drowsy launchers.`;
		});
	}
	function x(e, t) {
		a.value[e] = t;
	}
	function S(e) {
		o.value = e, s.value = Pp(re(), e);
	}
	function C(e, t) {
		s.value[e] = t;
	}
	function ee(e, t) {
		l.value[e] = t;
	}
	function te() {
		let e = re(), t = e.recommendedTableId ?? e.candidates[0]?.tableId ?? "";
		o.value = t, s.value = Pp(e, t), c.value = "preserve";
	}
	function ne() {
		l.value = Ip(i.value?.launchers);
	}
	function re() {
		return i.value?.darkWhispers ?? {
			candidates: [],
			currentPromptCount: 0,
			warnings: []
		};
	}
	function ie() {
		oe().openXpAwardConsole();
	}
	async function ae(e) {
		if (!f.value) {
			f.value = !0, u.value = void 0, d.value = void 0;
			try {
				await e();
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Session management action failed.", e), u.value = e instanceof Error ? e.message : "The session action could not be completed.";
			} finally {
				f.value = !1;
			}
		}
	}
	function oe() {
		if (!p) throw Error("The Session Management Console has not been initialized.");
		return p;
	}
	return {
		completeSession: _,
		currentSessionReference: t,
		errorMessage: u,
		gmToolkitImport: i,
		gmToolkitDarkWhispersConflictPolicy: c,
		gmToolkitDarkWhispersSelections: s,
		gmToolkitDarkWhispersTableId: o,
		gmToolkitSelections: a,
		gmToolkitLauncherSelections: l,
		importGmToolkitDarkWhispers: y,
		importGmToolkitData: v,
		initialize: m,
		isWorking: f,
		nextSessionReference: n,
		occurredAtLocal: r,
		openXpAwardConsole: ie,
		remapGmToolkitLaunchers: b,
		saveCurrentReference: g,
		setGmToolkitSelection: x,
		setGmToolkitLauncherSelection: ee,
		setGmToolkitDarkWhispersSelection: C,
		setGmToolkitDarkWhispersTable: S,
		state: e,
		statusMessage: d,
		updateSuggestedNextSession: h
	};
}), zp = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Bp = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, Vp = { class: "tw:min-w-0 tw:break-words" }, Hp = {
	key: 1,
	class: "dui-alert dui-alert-success tw:m-4 tw:mb-0",
	role: "status"
}, Up = { class: "tw:min-w-0 tw:break-words" }, Wp = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Gp = /* @__PURE__ */ I({
	__name: "ConsoleFrame",
	props: {
		description: {},
		errorMessage: {},
		icon: {},
		statusMessage: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (z(), B("main", zp, [
			H(wc, {
				description: e.description,
				icon: e.icon,
				title: e.title
			}, {
				end: Gn(() => [Mr(t.$slots, "header-end")]),
				_: 3
			}, 8, [
				"description",
				"icon",
				"title"
			]),
			e.errorMessage ? (z(), B("div", Bp, [n[0] ||= V("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), V("span", Vp, E(e.errorMessage), 1)])) : W("", !0),
			e.statusMessage ? (z(), B("div", Hp, [n[1] ||= V("i", {
				class: "fa-solid fa-circle-check",
				"aria-hidden": "true"
			}, null, -1), V("span", Up, E(e.statusMessage), 1)])) : W("", !0),
			V("div", Wp, [Mr(t.$slots, "default")]),
			Mr(t.$slots, "footer")
		]));
	}
}), Kp = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-secondary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-import-title"
}, qp = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Jp = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Yp = { class: "tw:min-w-0 tw:flex-1" }, Xp = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Zp = { class: "dui-badge dui-badge-outline dui-badge-sm" }, Qp = {
	key: 0,
	class: "dui-badge dui-badge-sm"
}, $p = {
	key: 0,
	class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/60!"
}, em = ["disabled"], tm = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, nm = {
	key: 1,
	class: "fa-solid fa-file-import",
	"aria-hidden": "true"
}, rm = {
	class: "tw:flex tw:flex-wrap tw:gap-2 tw:text-xs",
	"aria-label": "Migration inventory"
}, im = { class: "dui-badge dui-badge-sm" }, am = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, om = { class: "dui-badge dui-badge-sm" }, sm = { class: "dui-badge dui-badge-sm" }, cm = { class: "dui-badge dui-badge-sm" }, lm = {
	key: 0,
	class: "dui-alert tw:py-2 tw:text-xs",
	role: "note"
}, um = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!" }, dm = { class: "dui-table dui-table-sm tw:min-w-[38rem]" }, fm = { class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2" }, pm = ["checked", "onChange"], mm = { class: "tw:sr-only" }, hm = { scope: "row" }, gm = ["title"], _m = ["title"], vm = { class: "dui-badge dui-badge-sm" }, ym = { class: "tw:m-0 tw:text-xs tw:text-base-content/60!" }, bm = /* @__PURE__ */ I({
	__name: "GmToolkitMigrationPanel",
	props: {
		isWorking: { type: Boolean },
		lastImportedAt: {},
		preview: {},
		selections: {}
	},
	emits: ["import", "selectionChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => Object.values(n.selections).filter((e) => e).length), a = K(() => n.preview.source?.active ? "Active module" : n.preview.source?.installed ? "Installed, disabled" : "Persisted world data");
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
		return (t, n) => (z(), B("section", Kp, [V("div", qp, [
			V("div", Jp, [V("div", Yp, [
				V("div", Xp, [
					n[1] ||= V("h2", {
						id: "gm-toolkit-import-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " GM Toolkit migration ", -1),
					V("span", Zp, E(a.value), 1),
					e.preview.source?.moduleVersion ? (z(), B("span", Qp, E(e.preview.source.moduleVersion), 1)) : W("", !0)
				]),
				n[2] ||= V("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " Review a one-way snapshot. Source settings remain read-only and are never synchronized. ", -1),
				e.lastImportedAt ? (z(), B("p", $p, " Last imported " + E(new Date(e.lastImportedAt).toLocaleString()), 1)) : W("", !0)
			]), V("button", {
				class: "dui-btn dui-btn-sm tw:border-secondary! tw:text-base-content!",
				disabled: e.isWorking || i.value === 0,
				type: "button",
				onClick: n[0] ||= (e) => r("import")
			}, [e.isWorking ? (z(), B("span", tm)) : (z(), B("i", nm)), U(" Import " + E(i.value || "selected"), 1)], 8, em)]),
			V("div", rm, [
				V("span", im, E(e.preview.dispositionCounts.import) + " supported ", 1),
				V("span", am, E(e.preview.dispositionCounts.pending) + " awaiting features ", 1),
				V("span", om, E(e.preview.dispositionCounts.supersede) + " superseded ", 1),
				V("span", sm, E(e.preview.dispositionCounts.retire) + " retired ", 1),
				V("span", cm, E(e.preview.dispositionCounts.skip) + " transient ", 1)
			]),
			e.preview.source?.active ? W("", !0) : (z(), B("div", lm, [...n[3] ||= [V("i", {
				class: "fa-solid fa-database",
				"aria-hidden": "true"
			}, null, -1), V("span", null, " Import uses persisted world settings plus the known 9.2.0 baseline; GM Toolkit does not need to run. ", -1)]])),
			V("div", um, [V("table", dm, [n[4] ||= V("thead", { class: "tw:bg-base-300/60!" }, [V("tr", null, [
				V("th", { scope: "col" }, "Import"),
				V("th", { scope: "col" }, "Value"),
				V("th", { scope: "col" }, "GM Toolkit"),
				V("th", { scope: "col" }, "Drowsy"),
				V("th", { scope: "col" }, "Comparison")
			])], -1), V("tbody", null, [(z(!0), B(R, null, jr(e.preview.imports, (t) => (z(), B("tr", { key: t.field }, [
				V("td", null, [V("label", fm, [V("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: e.selections[t.field],
					type: "checkbox",
					onChange: (e) => c(t.field, e)
				}, null, 40, pm), V("span", mm, "Import " + E(t.label), 1)])]),
				V("th", hm, E(t.label), 1),
				V("td", {
					class: "tw:max-w-48 tw:truncate",
					title: o(t.sourceValue)
				}, E(o(t.sourceValue)), 9, gm),
				V("td", {
					class: "tw:max-w-48 tw:truncate",
					title: o(t.currentValue)
				}, E(o(t.currentValue)), 9, _m),
				V("td", null, [V("span", vm, E(s(t.comparison)), 1)])
			]))), 128))])])]),
			V("p", ym, E(e.preview.sourceCounts.persisted) + " persisted, " + E(e.preview.sourceCounts.registered) + " registered-default, and " + E(e.preview.sourceCounts.baseline) + " baseline values were catalogued. ", 1),
			(z(!0), B(R, null, jr(e.preview.source?.warnings ?? [], (e) => (z(), B("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[5] ||= V("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), V("span", null, E(e), 1)]))), 128))
		])]));
	}
}), xm = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-secondary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-content-title"
}, Sm = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Cm = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, wm = { class: "tw:min-w-0 tw:flex-1" }, Tm = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Em = { class: "dui-badge dui-badge-sm" }, Dm = ["disabled"], Om = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, km = {
	key: 1,
	class: "fa-solid fa-file-import",
	"aria-hidden": "true"
}, Am = {
	key: 0,
	class: "tw:grid tw:gap-3 tw:min-[42rem]:grid-cols-2"
}, jm = { class: "tw:grid tw:min-w-0 tw:gap-1" }, Mm = ["value"], Nm = ["value"], Pm = {
	key: 0,
	class: "tw:grid tw:min-w-0 tw:gap-1"
}, Fm = ["value"], Im = {
	key: 1,
	class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, Lm = { class: "dui-table dui-table-sm tw:min-w-[42rem]" }, Rm = { class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2" }, zm = ["checked", "onChange"], Bm = { class: "tw:sr-only" }, Vm = { class: "tw:tabular-nums" }, Hm = {
	class: "tw:max-w-md tw:whitespace-normal",
	scope: "row"
}, Um = { class: "dui-badge dui-badge-sm" }, Wm = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, Gm = /* @__PURE__ */ I({
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
		let n = e, r = t, i = K(() => Np(n.preview, n.selectedTableId)), a = K(() => Object.values(n.selections).filter((e) => e).length), o = K(() => i.value?.prompts.some((e) => e.comparison === "conflict"));
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
		return (t, n) => (z(), B("section", xm, [V("div", Sm, [
			V("div", Cm, [V("div", wm, [V("div", Tm, [n[1] ||= V("h2", {
				id: "gm-toolkit-content-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Dark Whispers prompts ", -1), V("span", Em, E(e.preview.currentPromptCount) + " in Drowsy library ", 1)]), n[2] ||= V("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " Copy selected prompt text into Drowsy-owned world data. The original RollTable remains unchanged. ", -1)]), V("button", {
				class: "dui-btn dui-btn-sm tw:border-secondary! tw:text-base-content!",
				disabled: e.isWorking || a.value === 0 || !i.value,
				type: "button",
				onClick: n[0] ||= (e) => r("import")
			}, [e.isWorking ? (z(), B("span", Om)) : (z(), B("i", km)), U(" Import " + E(a.value || "selected") + " prompts ", 1)], 8, Dm)]),
			e.preview.candidates.length ? (z(), B("div", Am, [V("label", jm, [n[3] ||= V("span", { class: "tw:text-sm tw:font-semibold" }, "Source RollTable", -1), V("select", {
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
				value: e.selectedTableId,
				onChange: l
			}, [(z(!0), B(R, null, jr(e.preview.candidates, (e) => (z(), B("option", {
				key: e.tableId,
				value: e.tableId
			}, E(e.tableName) + " — " + E(e.prompts.length) + " prompts ", 9, Nm))), 128))], 40, Mm)]), o.value ? (z(), B("label", Pm, [n[5] ||= V("span", { class: "tw:text-sm tw:font-semibold" }, "Changed imported prompts", -1), V("select", {
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
				value: e.conflictPolicy,
				onChange: u
			}, [...n[4] ||= [V("option", { value: "preserve" }, "Keep Drowsy version", -1), V("option", { value: "replace" }, "Replace with source version", -1)]], 40, Fm)])) : W("", !0)])) : W("", !0),
			i.value ? (z(), B("div", Im, [V("table", Lm, [n[6] ||= V("thead", { class: "tw:bg-base-300/60!" }, [V("tr", null, [
				V("th", { scope: "col" }, "Import"),
				V("th", { scope: "col" }, "Roll"),
				V("th", { scope: "col" }, "Prompt text"),
				V("th", { scope: "col" }, "Comparison")
			])], -1), V("tbody", null, [(z(!0), B(R, null, jr(i.value.prompts, (t) => (z(), B("tr", { key: t.resultId }, [
				V("td", null, [V("label", Rm, [V("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: e.selections[t.resultId],
					type: "checkbox",
					onChange: (e) => c(t.resultId, e)
				}, null, 40, zm), V("span", Bm, "Import Dark Whispers prompt " + E(t.range), 1)])]),
				V("td", Vm, E(t.range), 1),
				V("th", Hm, E(t.text), 1),
				V("td", null, [V("span", Um, E(s(t.comparison)), 1)])
			]))), 128))])])])) : (z(), B("div", Wm, [...n[7] ||= [V("i", {
				class: "fa-solid fa-table-list",
				"aria-hidden": "true"
			}, null, -1), V("span", null, "No imported GM Toolkit Dark Whispers RollTable is available to copy.", -1)]])),
			(z(!0), B(R, null, jr([...e.preview.warnings, ...i.value?.warnings ?? []], (e) => (z(), B("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[8] ||= V("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), V("span", null, E(e), 1)]))), 128))
		])]));
	}
}), Km = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-accent/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-launcher-title"
}, qm = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Jm = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Ym = { class: "tw:min-w-0 tw:flex-1" }, Xm = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Zm = { class: "dui-badge dui-badge-sm" }, Qm = ["disabled"], $m = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, eh = {
	key: 1,
	class: "fa-solid fa-arrow-right-arrow-left",
	"aria-hidden": "true"
}, th = { class: "tw:flex tw:flex-wrap tw:gap-2 tw:text-xs" }, nh = { class: "dui-badge dui-badge-sm" }, rh = { class: "dui-badge dui-badge-sm" }, ih = { class: "dui-badge dui-badge-sm" }, ah = { class: "dui-badge dui-badge-sm" }, oh = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!" }, sh = { class: "dui-table dui-table-sm tw:min-w-[46rem]" }, ch = {
	key: 0,
	class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2"
}, lh = ["checked", "onChange"], uh = { class: "tw:sr-only" }, dh = {
	key: 1,
	"aria-hidden": "true"
}, fh = {
	class: "tw:max-w-56 tw:whitespace-normal",
	scope: "row"
}, ph = { class: "dui-badge dui-badge-sm" }, mh = { class: "tw:whitespace-nowrap" }, hh = { class: "tw:max-w-72 tw:whitespace-normal" }, gh = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, _h = { class: "dui-badge dui-badge-sm" }, vh = {
	key: 0,
	class: "tw:font-semibold"
}, yh = { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/65!" }, bh = /* @__PURE__ */ I({
	__name: "GmToolkitLauncherMigrationPanel",
	props: {
		isWorking: { type: Boolean },
		preview: {},
		selections: {}
	},
	emits: ["remap", "selectionChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => Object.values(n.selections).filter((e) => e).length);
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
			return e.replacement.disposition === "ready" ? "Replacement ready" : e.replacement.disposition === "partial" ? "Partial replacement" : e.replacement.disposition === "independent" ? "No dependency" : "Still pending";
		}
		function u(e) {
			return e.length ? `Slot${e.length === 1 ? "" : "s"} ${e.join(", ")}` : "Not on hotbar";
		}
		return (t, n) => (z(), B("section", Km, [V("div", qm, [
			V("div", Jm, [V("div", Ym, [V("div", Xm, [n[1] ||= V("h2", {
				id: "gm-toolkit-launcher-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Launcher cutover ", -1), V("span", Zm, E(e.preview.candidates.length) + " found", 1)]), n[2] ||= V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Reviews this user’s hotbar without running or copying GM Toolkit commands. Customized macros stay untouched. ", -1)]), V("button", {
				class: "dui-btn dui-btn-accent dui-btn-sm tw:shrink-0",
				disabled: e.isWorking || i.value === 0,
				type: "button",
				onClick: n[0] ||= (e) => r("remap")
			}, [e.isWorking ? (z(), B("span", $m)) : (z(), B("i", eh)), U(" Remap " + E(i.value) + " slot" + E(i.value === 1 ? "" : "s"), 1)], 8, Qm)]),
			V("div", th, [
				V("span", nh, E(e.preview.counts.standard) + " stock", 1),
				V("span", rh, E(e.preview.counts.customized) + " customized", 1),
				V("span", ih, E(e.preview.counts.ambiguous) + " review", 1),
				V("span", ah, E(e.preview.userName ?? "Current user"), 1)
			]),
			V("div", oh, [V("table", sh, [n[3] ||= V("thead", { class: "tw:bg-base-300/60!" }, [V("tr", null, [
				V("th", { scope: "col" }, "Remap"),
				V("th", { scope: "col" }, "GM Toolkit macro"),
				V("th", { scope: "col" }, "Match"),
				V("th", { scope: "col" }, "Hotbar"),
				V("th", { scope: "col" }, "Drowsy outcome")
			])], -1), V("tbody", null, [(z(!0), B(R, null, jr(e.preview.candidates, (e) => (z(), B("tr", { key: e.macroId }, [
				V("td", null, [a(e) ? (z(), B("label", ch, [V("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: o(e),
					type: "checkbox",
					onChange: (t) => s(e, t)
				}, null, 40, lh), V("span", uh, " Remap " + E(e.sourceMacroName) + " from " + E(u(e.hotbarSlots)), 1)])) : (z(), B("span", dh, "—"))]),
				V("th", fh, E(e.macroName), 1),
				V("td", null, [V("span", ph, E(c(e)), 1)]),
				V("td", mh, E(u(e.hotbarSlots)), 1),
				V("td", hh, [V("div", gh, [V("span", _h, E(l(e)), 1), e.replacement.macroName ? (z(), B("span", vh, E(e.replacement.macroName), 1)) : W("", !0)]), V("p", yh, E(e.replacement.label), 1)])
			]))), 128))])])]),
			n[5] ||= V("div", {
				class: "dui-alert tw:py-2 tw:text-xs",
				role: "note"
			}, [V("i", {
				class: "fa-solid fa-shield-halved",
				"aria-hidden": "true"
			}), V("span", null, " Remapping imports the Drowsy launcher if needed and updates only the selected hotbar slots. Source macros are never edited or deleted. ")], -1),
			(z(!0), B(R, null, jr(e.preview.warnings, (e) => (z(), B("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[4] ||= V("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), V("span", null, E(e), 1)]))), 128))
		])]));
	}
}), xh = { class: "tw:grid tw:min-w-0 tw:gap-3" }, Sh = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[52rem]:grid-cols-2" }, Ch = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "current-session-title"
}, wh = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Th = ["disabled"], Eh = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-primary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "turnover-title"
}, Dh = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Oh = ["disabled"], kh = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Ah = {
	key: 1,
	class: "fa-solid fa-check",
	"aria-hidden": "true"
}, jh = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "session-history-title"
}, Mh = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Nh = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, Ph = { class: "dui-badge dui-badge-sm" }, Fh = {
	key: 0,
	class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, Ih = { class: "dui-table dui-table-sm tw:min-w-[28rem]" }, Lh = { scope: "row" }, Rh = ["title"], zh = ["title"], Bh = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Vh = /* @__PURE__ */ I({
	__name: "SessionManagementConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Rp();
		n.initialize(t.initialization, t.actions);
		let { currentSessionReference: r, errorMessage: i, gmToolkitImport: a, gmToolkitDarkWhispersConflictPolicy: o, gmToolkitDarkWhispersSelections: s, gmToolkitDarkWhispersTableId: c, gmToolkitSelections: l, gmToolkitLauncherSelections: u, isWorking: d, nextSessionReference: f, occurredAtLocal: p, state: m, statusMessage: h } = Cs(n), g = K(() => !!r.value.trim() && !!f.value.trim() && !!p.value && !d.value);
		function _(e) {
			return new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(new Date(e));
		}
		return (e, t) => (z(), ia(Gp, {
			description: "Keep a module-owned session reference and record when each turnover takes place.",
			"error-message": N(i),
			icon: "fa-solid fa-calendar-check",
			"status-message": N(h),
			title: "Session Management Console"
		}, {
			"header-end": Gn(() => [V("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm tw:border tw:border-base-content/20! tw:bg-base-200!",
				type: "button",
				onClick: t[0] ||= (...e) => N(n).openXpAwardConsole && N(n).openXpAwardConsole(...e)
			}, [...t[8] ||= [V("i", {
				class: "fa-solid fa-award",
				"aria-hidden": "true"
			}, null, -1), U(" Award XP ", -1)]])]),
			default: Gn(() => [V("div", xh, [
				N(a)?.source ? (z(), ia(bm, {
					key: 0,
					"is-working": N(d),
					"last-imported-at": N(m).gmToolkitMigration?.importedAt,
					preview: N(a),
					selections: N(l),
					onImport: N(n).importGmToolkitData,
					onSelectionChange: N(n).setGmToolkitSelection
				}, null, 8, [
					"is-working",
					"last-imported-at",
					"preview",
					"selections",
					"onImport",
					"onSelectionChange"
				])) : W("", !0),
				N(a) ? (z(), ia(Gm, {
					key: 1,
					"conflict-policy": N(o),
					"onUpdate:conflictPolicy": t[1] ||= (e) => /* @__PURE__ */ j(o) ? o.value = e : null,
					"is-working": N(d),
					preview: N(a).darkWhispers,
					"selected-table-id": N(c),
					selections: N(s),
					onImport: N(n).importGmToolkitDarkWhispers,
					onSelectionChange: N(n).setGmToolkitDarkWhispersSelection,
					onTableChange: N(n).setGmToolkitDarkWhispersTable
				}, null, 8, [
					"conflict-policy",
					"is-working",
					"preview",
					"selected-table-id",
					"selections",
					"onImport",
					"onSelectionChange",
					"onTableChange"
				])) : W("", !0),
				N(a)?.launchers.candidates.length ? (z(), ia(bh, {
					key: 2,
					"is-working": N(d),
					preview: N(a).launchers,
					selections: N(u),
					onRemap: N(n).remapGmToolkitLaunchers,
					onSelectionChange: N(n).setGmToolkitLauncherSelection
				}, null, 8, [
					"is-working",
					"preview",
					"selections",
					"onRemap",
					"onSelectionChange"
				])) : W("", !0),
				V("div", Sh, [V("section", Ch, [V("div", wh, [
					t[10] ||= V("div", null, [V("h2", {
						id: "current-session-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " Current session "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
						U(" This replaces GM Toolkit’s "),
						V("code", null, "sessionID"),
						U(" after migration. ")
					])], -1),
					t[11] ||= V("label", {
						class: "dui-label tw:whitespace-normal",
						for: "current-session-reference"
					}, " Session reference ", -1),
					F(V("input", {
						id: "current-session-reference",
						"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ j(r) ? r.value = e : null,
						class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
						type: "text",
						onInput: t[3] ||= (...e) => N(n).updateSuggestedNextSession && N(n).updateSuggestedNextSession(...e)
					}, null, 544), [[q, N(r)]]),
					V("button", {
						class: "dui-btn dui-btn-sm tw:self-end",
						disabled: N(d) || !N(r).trim(),
						type: "button",
						onClick: t[4] ||= (...e) => N(n).saveCurrentReference && N(n).saveCurrentReference(...e)
					}, [...t[9] ||= [V("i", {
						class: "fa-solid fa-floppy-disk",
						"aria-hidden": "true"
					}, null, -1), U(" Save reference ", -1)]], 8, Th)
				])]), V("section", Eh, [V("div", Dh, [
					t[13] ||= V("div", null, [V("h2", {
						id: "turnover-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " Complete session "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The selected time becomes the best-known occurrence time for this session. ")], -1),
					t[14] ||= V("label", {
						class: "dui-label tw:whitespace-normal",
						for: "session-occurred-at"
					}, " Session date and time ", -1),
					F(V("input", {
						id: "session-occurred-at",
						"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ j(p) ? p.value = e : null,
						class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
						type: "datetime-local"
					}, null, 512), [[q, N(p)]]),
					t[15] ||= V("label", {
						class: "dui-label tw:whitespace-normal",
						for: "next-session-reference"
					}, " Next session reference ", -1),
					F(V("input", {
						id: "next-session-reference",
						"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ j(f) ? f.value = e : null,
						class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
						type: "text"
					}, null, 512), [[q, N(f)]]),
					V("button", {
						class: "dui-btn dui-btn-primary tw:self-end tw:rounded-full",
						disabled: !g.value,
						type: "button",
						onClick: t[7] ||= (...e) => N(n).completeSession && N(n).completeSession(...e)
					}, [N(d) ? (z(), B("span", kh)) : (z(), B("i", Ah)), t[12] ||= U(" Record turnover ", -1)], 8, Oh)
				])])]),
				t[19] ||= V("div", {
					class: "dui-alert tw:text-xs",
					role: "note"
				}, [V("i", {
					class: "fa-solid fa-circle-info",
					"aria-hidden": "true"
				}), V("span", null, " This first turnover slice records and advances sessions. Award XP from the separate console; pause, holding-scene, Fortune, and chat-export steps remain future additions. ")], -1),
				V("section", jh, [V("div", Mh, [V("div", Nh, [t[16] ||= V("div", null, [V("h2", {
					id: "session-history-title",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " Session history "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Stored as module-owned world data in exact ISO timestamps. ")], -1), V("span", Ph, E(N(m).sessions.length) + " recorded", 1)]), N(m).sessions.length ? (z(), B("div", Fh, [V("table", Ih, [t[17] ||= V("thead", { class: "tw:bg-base-300/60!" }, [V("tr", null, [
					V("th", { scope: "col" }, "Session"),
					V("th", { scope: "col" }, "Took place"),
					V("th", { scope: "col" }, "Recorded")
				])], -1), V("tbody", null, [(z(!0), B(R, null, jr(N(m).sessions, (e) => (z(), B("tr", { key: e.id }, [
					V("th", Lh, E(e.reference), 1),
					V("td", { title: e.occurredAt }, E(_(e.occurredAt)), 9, Rh),
					V("td", { title: e.recordedAt }, E(_(e.recordedAt)), 9, zh)
				]))), 128))])])])) : (z(), B("div", Bh, [...t[18] ||= [V("i", {
					class: "fa-solid fa-calendar",
					"aria-hidden": "true"
				}, null, -1), V("span", null, "No session turnovers have been recorded yet.", -1)]]))])])
			])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
}), Hh = {
	prompts: [],
	version: 1
};
//#endregion
//#region src/functions/dark-whispers/library.ts
function Uh(e) {
	return typeof e == "string" ? e.replace(/\r\n?/g, "\n").replace(/[\t ]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
}
function Wh(e) {
	if (typeof e != "string") return Gh("The Dark Whispers prompt library setting was not serialized text.");
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return Gh("The Dark Whispers prompt library contains invalid JSON.");
	}
	if (!Z(t) || t.version !== 1 || !Array.isArray(t.prompts)) return Gh("The Dark Whispers prompt library has an unsupported schema.");
	let n = [], r = t.prompts.flatMap((e, t) => {
		let r = Kh(e);
		return r ? [r] : (n.push(`Dark Whispers prompt ${t + 1} was invalid and was skipped.`), []);
	}), i = Jh(t.lastImport);
	return t.lastImport !== void 0 && !i && n.push("The Dark Whispers import record was invalid and was skipped."), {
		library: {
			...i ? { lastImport: i } : {},
			prompts: r,
			version: 1
		},
		warnings: n
	};
}
function Gh(e) {
	return {
		library: {
			...Hh,
			prompts: []
		},
		warnings: [e]
	};
}
function Kh(e) {
	if (!Z(e)) return;
	let t = X(e.id), n = Uh(e.text), r = qh(e.source);
	if (!(!t || !n)) return {
		id: t,
		...r ? { source: r } : {},
		text: n
	};
}
function qh(e) {
	if (!Z(e) || e.type !== "gm-toolkit") return;
	let t = X(e.moduleVersion), n = X(e.resultId), r = X(e.tableId);
	return n && r ? {
		...t ? { moduleVersion: t } : {},
		resultId: n,
		tableId: r,
		type: "gm-toolkit"
	} : void 0;
}
function Jh(e) {
	if (!Z(e)) return;
	let t = e.conflictPolicy, n = Kf(e.importedAt), r = Array.isArray(e.resultIds) ? e.resultIds.filter((e) => typeof e == "string") : [], i = X(e.sourceModuleVersion), a = X(e.sourceTableId), o = X(e.sourceTableName);
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
var Yh = "9rXQv4uJcQoLBitt", Xh = "Dark Whispers", Zh = "wfrp4e-gm-toolkit", Qh = "gm-toolkit-tables";
function $h(e, t) {
	return e.flatMap((e) => ng(e, t)).sort(ag);
}
function eg(e, t, n = []) {
	let r = e.map((e) => ({
		...e,
		prompts: e.prompts.map((n) => ({
			...n,
			comparison: og(e.tableId, n.resultId, n.text, t)
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
function tg(e, t, n, r) {
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
				source: sg(i, e.resultId),
				text: e.text
			}, l += 1;
			continue;
		}
		if (r) {
			u += 1;
			continue;
		}
		s.push({
			id: cg(i.tableId, e.resultId),
			source: sg(i, e.resultId),
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
function ng(e, t) {
	if (!Z(e)) return [];
	let n = X(e._id), r = X(e.name), i = rg(e, n, r);
	if (!n || !r || !i) return [];
	let a = [], o = (Array.isArray(e.results) ? e.results : []).flatMap((e, t) => {
		if (!Z(e)) return a.push(`Table row ${t + 1} was invalid and was skipped.`), [];
		let n = X(e._id), r = Uh(e.description);
		return !n || !r ? (a.push(`Table row ${t + 1} had no stable ID or prompt text and was skipped.`), []) : [{
			range: ig(e.range, t),
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
function rg(e, t, n) {
	let r = Z(e._stats) ? e._stats : {}, i = Z(e.flags) ? e.flags : {}, a = Z(i.wfrp4e) ? i.wfrp4e : {}, o = i[Zh], s = X(r.compendiumSource), c = n === Xh;
	return c && s.includes(`${Zh}.${Qh}`) || X(a.key).toLowerCase() === "darkwhispers" || c && Z(o) ? "metadata" : t === Yh ? "id" : c ? "name" : void 0;
}
function ig(e, t) {
	if (Array.isArray(e) && e.length >= 2 && Number.isFinite(Number(e[0])) && Number.isFinite(Number(e[1]))) {
		let t = Number(e[0]), n = Number(e[1]);
		return t === n ? String(t) : `${t}–${n}`;
	}
	return String(t + 1);
}
function ag(e, t) {
	let n = {
		id: 2,
		metadata: 3,
		name: 1
	};
	return n[t.confidence] - n[e.confidence] || t.prompts.length - e.prompts.length;
}
function og(e, t, n, r) {
	let i = r.prompts.find((n) => n.source?.type === "gm-toolkit" && n.source.tableId === e && n.source.resultId === t);
	return i ? i.text === n ? "same" : "conflict" : r.prompts.some((e) => e.text === n) ? "duplicate" : "new";
}
function sg(e, t) {
	return {
		...e.moduleVersion ? { moduleVersion: e.moduleVersion } : {},
		resultId: t,
		tableId: e.tableId,
		type: "gm-toolkit"
	};
}
function cg(e, t) {
	return `gm-toolkit:${e}:${t}`;
}
//#endregion
//#region src/module/dark-whispers/settings/keys.ts
var lg = { promptLibrary: "darkWhispersPromptLibrary" };
//#endregion
//#region src/module/dark-whispers/settings/load.ts
function ug() {
	return Wh(game.settings.get(t, lg.promptLibrary));
}
function dg() {
	let e = ug();
	for (let n of e.warnings) console.warn(`${t} | ${n}`);
	return e.library;
}
async function fg(e) {
	await game.settings.set(t, lg.promptLibrary, JSON.stringify(e));
}
//#endregion
//#region src/module/gm-toolkit/content-source.ts
function pg() {
	let e = game.modules.get(r)?.version;
	return $h(Array.from(game.tables).map((e) => mg(e.toObject())), e);
}
function mg(e) {
	if (typeof e != "object" || !e) return e;
	let t = Reflect.get(e, "results");
	return Array.isArray(t) ? {
		...e,
		results: t.map((e) => typeof e != "object" || !e ? e : {
			...e,
			description: hg(Reflect.get(e, "description"))
		})
	} : e;
}
function hg(e) {
	if (typeof e != "string") return "";
	if (!/[<&]/.test(e)) return e;
	let t = document.createElement("div");
	return t.innerHTML = e, t.querySelectorAll("script, style, template").forEach((e) => e.remove()), t.textContent ?? "";
}
//#endregion
//#region src/functions/gm-toolkit/catalog.ts
var Q = (e, t, n, r, i) => ({
	defaultValue: r,
	disposition: i,
	family: t,
	key: e,
	kind: n
}), gg = [
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
function _g() {
	let e = game.modules.get(r), t = game.settings.storage?.get("world"), n = /* @__PURE__ */ new Map();
	for (let e of gg) {
		let r = t?.getItem(bg(e.key));
		r != null && n.set(e.key, r);
	}
	if (!e && n.size === 0) return;
	let i = [], a = gg.map((e) => {
		let t = vg(e, n);
		return t.valid || i.push(`${bg(e.key)} could not be normalized; the 9.2.0 baseline is shown instead.`), t;
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
function vg(e, t) {
	let n = t.get(e.key);
	return n === void 0 ? game.settings.settings.has(bg(e.key)) ? Jf(e, game.settings.get(r, e.key), "registered") : Jf(e, e.defaultValue, "baseline") : Jf(e, yg(n, e), "persisted");
}
function yg(e, t) {
	try {
		return JSON.parse(e);
	} catch {
		return t.kind === "string" ? e : void 0;
	}
}
function bg(e) {
	return `${r}.${e}`;
}
//#endregion
//#region src/functions/gm-toolkit/launcher-catalog.ts
var xg = {
	macroId: "sE5sN8mG2cT7rV4q",
	macroName: "Open Session Management Console"
}, Sg = [
	$("AjUYYy7qAN55BERN", "Add Advantage", 317, "f46c0d0e", "pending", "Advantage controls remain to be built."),
	$("rzKeTLKp0bOp5SK9", "Add XP", 7054, "3e94af4e", "ready", "Replace with Drowsy’s XP Award Console.", {
		macroId: "aW4rD8xP2cN7sL5q",
		macroName: "Open XP Award Console"
	}),
	$("GfXvMqsynxpHTYPt", "Canvas Toolbox", 3515, "1b42131d", "pending", "Toolkit Home navigation remains to be built."),
	$("PsZADfqRKnbnAT5Q", "Change Scene to Yards", 628, "bc14705a", "ready", "Replace with the generalized grid-scale utility.", {
		macroId: "DrowsyGridScale1",
		macroName: "Change Grid Scale (Preserve Lighting)"
	}),
	$("vUzIl1uDkykO5DmG", "Check Conditions", 5830, "56693f0a", "pending", "End-of-round condition handling remains to be built."),
	$("6EKiEQZTbmQN97Vr", "Clear Advantage", 279, "e3cda086", "pending", "Advantage controls remain to be built."),
	$("xU8TFHu98zX5isb0", "Combat Toolbox", 3509, "cd02aee7", "pending", "Toolkit Home navigation remains to be built."),
	$("iopoLXTz9kfDTfiX", "GM Toolbox", 3465, "ebccaef2", "pending", "Toolkit Home navigation remains to be built."),
	$("hLEsIrMsOYQROnl5", "GM Toolkit Settings", 3252, "bda29fbb", "partial", "Drowsy migration and session settings are available here.", xg),
	$("74OvSfTs3slii0RR", "Launch Damage Console", 278, "70bf6804", "pending", "The Damage Console remains to be built."),
	$("wN47JNwM2POBSUUm", "Make Secret Group Test", 3093, "a0d1c8f8", "pending", "Secret Group Tests remain to be built."),
	$("tiKEfs1nB7zAMgYg", "Pull Everyone to Scene", 2525, "b21938a7", "pending", "Player scene movement remains to be built."),
	$("2sefSFqqAbySw2nz", "Reduce Advantage", 285, "12053b38", "pending", "Advantage controls remain to be built."),
	$("pZmPtsEZHOpyJfnq", "Reset Fortune", 1854, "b87bc4f5", "pending", "Fortune reset remains part of the turnover backlog."),
	$("roGO31Lo4pyL5kvg", "Send Dark Whispers", 7400, "f05c3d43", "partial", "Prompt data can be imported; the recipient workflow remains to be built."),
	$("WcBTP5xRO9jcJMVa", "Session Toolbox", 3501, "17ab0783", "partial", "Session recording and XP are available; remaining toolbox actions are pending.", xg),
	$("g9Wohpie7ODdbRKX", "Session Turnover", 3100, "bd85a21d", "partial", "Session recording is available; full turnover orchestration remains pending.", xg),
	$("DGYdRmtbMZ81NmQ3", "Set Token Vision and Light", 13595, "c6c8d6c8", "pending", "Token vision and light presets remain to be built."),
	$("ihMGjHFP3SdvYH2k", "Simply d100", 8, "1df039d8", "independent", "This core chat roll has no continuing GM Toolkit runtime dependency."),
	$("nvqeTARBoSP89WT5", "Toggle Compendium Pack Visibility", 2752, "f921858d", "pending", "Reviewable compendium visibility controls remain to be built."),
	$("OiQ0cS3QsmQadxqR", "Toggle Scene Visibility and Light", 845, "1562d17a", "pending", "Scene visibility and lighting controls remain to be built.")
];
function $(e, t, n, r, i, a, o = {
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
var Cg = "wfrp4e-gm-toolkit.gm-toolkit-macros", wg = "wfrp4e-enhanced-fear-terror.macros", Tg = {
	DrowsyGridScale1: {
		fingerprint: "9476a7a4",
		length: 756
	},
	aW4rD8xP2cN7sL5q: {
		fingerprint: "795a9a75",
		length: 680
	}
};
function Eg(e, t, n = {}) {
	let r = e.flatMap((e) => Ag(e, t)), i = r.filter(({ match: e, replacement: t }) => e === "standard" && t.disposition === "ready").flatMap(({ hotbarSlots: e }) => e).filter((e, t, n) => n.indexOf(e) === t).sort((e, t) => e - t);
	return {
		candidates: r,
		counts: Mg(r),
		remappableSlots: i,
		...n.id ? { userId: n.id } : {},
		...n.name ? { userName: n.name } : {},
		version: 1,
		warnings: n.id ? [] : ["The current user was unavailable, so hotbar assignments could not be reviewed."]
	};
}
function Dg(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t = Math.imul(t ^ e.charCodeAt(n), 16777619) >>> 0;
	return t.toString(16).padStart(8, "0");
}
function Og(e, t) {
	return !!(e && e.includes(wg) && e.endsWith(t));
}
function kg(e, t) {
	let n = Tg[t];
	return !!(e && n && Og(e.compendiumSource, t) && e.command.length === n.length && Dg(e.command) === n.fingerprint);
}
function Ag(e, t) {
	let n = Sg.find(({ id: t }) => e.compendiumSource?.includes(Cg) === !0 && e.compendiumSource.endsWith(t)), r = Sg.find(({ id: t }) => t === e.id), i = Sg.find(({ name: t }) => t === e.name), a = n ?? r ?? i;
	if (!a) return [];
	let o = n ? "source" : r ? "document-id" : "name", s = jg(a, e.command) ? "standard" : o === "name" ? "ambiguous" : "customized";
	return [{
		confidence: o,
		hotbarSlots: [...t.get(e.id) ?? []].sort((e, t) => e - t),
		macroId: e.id,
		macroName: e.name,
		match: s,
		replacement: {
			compendiumId: wg,
			...a.replacement
		},
		sourceMacroId: a.id,
		sourceMacroName: a.name
	}];
}
function jg(e, t) {
	return t.length === e.commandLength && Dg(t) === e.commandFingerprint;
}
function Mg(e) {
	return {
		ambiguous: e.filter(({ match: e }) => e === "ambiguous").length,
		customized: e.filter(({ match: e }) => e === "customized").length,
		standard: e.filter(({ match: e }) => e === "standard").length
	};
}
//#endregion
//#region src/module/gm-toolkit/launcher-source.ts
var Ng = `${t}.macros`;
function Pg() {
	let e = Array.from(game.macros).flatMap(Ig), t = game.user, n = /* @__PURE__ */ new Map();
	if (t) for (let e = 1; e <= 5; e += 1) for (let { macro: r, slot: i } of t.getHotbarMacros(e)) r?.id && n.set(r.id, [...n.get(r.id) ?? [], i]);
	return Eg(e, n, {
		id: t?.id,
		name: t?.name
	});
}
async function Fg(e) {
	let t = Array.from(game.macros).find((t) => {
		let n = Ig(t)[0];
		return kg(n, e);
	});
	if (t) return {
		imported: !1,
		macro: t
	};
	let n = game.packs.get(Ng);
	if (!n) throw Error("The Drowsy launcher compendium is unavailable.");
	return {
		imported: !0,
		macro: await game.macros.importFromCompendium(n, e)
	};
}
function Ig(e) {
	let t = e.toObject();
	if (!Z(t)) return [];
	let n = X(t._id ?? e.id), r = X(t.name ?? e.name), i = X(t.command), a = X(t.type);
	if (!n || !r || !a) return [];
	let o = t._stats, s = Z(o) ? X(o.compendiumSource) : "";
	return [{
		command: i,
		...s ? { compendiumSource: s } : {},
		id: n,
		name: r,
		type: a
	}];
}
//#endregion
//#region src/types/xp-award/XpAward.ts
var Lg = {
	batches: [],
	version: 1
}, Rg = 500;
function zg(e, t) {
	return {
		batches: [t, ...e.batches].slice(0, Rg),
		version: 1
	};
}
function Bg(e) {
	if (typeof e != "string") return {
		...Lg,
		batches: []
	};
	try {
		let t = JSON.parse(e);
		return !Z(t) || t.version !== 1 || !Array.isArray(t.batches) ? {
			...Lg,
			batches: []
		} : {
			batches: t.batches.flatMap(Vg).slice(0, Rg),
			version: 1
		};
	} catch {
		return {
			...Lg,
			batches: []
		};
	}
}
function Vg(e) {
	if (!Z(e) || !Array.isArray(e.awards)) return [];
	let t = Kf(e.awardedAt), n = X(e.id), r = X(e.reason), i = X(e.sessionReference), a = e.awards.flatMap(Hg);
	return !t || !n || a.length === 0 ? [] : [{
		awardedAt: t,
		awards: a,
		id: n,
		reason: r,
		sessionReference: i,
		totalChange: a.reduce((e, t) => e + t.amount, 0)
	}];
}
function Hg(e) {
	if (!Z(e)) return [];
	let t = e.category, n = Number(e.amount), r = Number(e.beforeXp), i = Number(e.afterXp);
	return t !== "standard" && t !== "companion" || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i) ? [] : [{
		actorId: X(e.actorId),
		actorName: X(e.actorName),
		afterXp: Math.round(i),
		amount: Math.round(n),
		beforeXp: Math.round(r),
		category: t
	}];
}
//#endregion
//#region src/module/xp-award/settings/keys.ts
var Ug = {
	auditLog: "xpAwardAuditLog",
	defaultAmount: "xpAwardDefaultAmount",
	defaultReason: "xpAwardDefaultReason",
	defaultSelection: "xpAwardDefaultSelection",
	includeTimestampInReason: "xpAwardIncludeTimestampInReason"
};
//#endregion
//#region src/module/xp-award/settings/load.ts
function Wg() {
	return {
		defaultAmount: Math.round(Number(game.settings.get(t, Ug.defaultAmount))),
		defaultReason: Jg(Ug.defaultReason),
		defaultSelection: Yg(),
		includeTimestampInReason: game.settings.get(t, Ug.includeTimestampInReason) === !0
	};
}
async function Gg(e) {
	let n = [
		[Ug.defaultAmount, Math.round(e.defaultAmount)],
		[Ug.defaultReason, e.defaultReason],
		[Ug.defaultSelection, e.defaultSelection],
		[Ug.includeTimestampInReason, e.includeTimestampInReason]
	];
	for (let [e, r] of n) await game.settings.set(t, e, r);
}
function Kg() {
	return Bg(game.settings.get(t, Ug.auditLog));
}
async function qg(e) {
	await game.settings.set(t, Ug.auditLog, JSON.stringify(e));
}
function Jg(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function Yg() {
	let e = Jg(Ug.defaultSelection);
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/session-management/migration.ts
function Xg() {
	let e = _g(), t = ug(), n = eg(pg(), t.library, t.warnings), r = Pg();
	if (!(!e && n.candidates.length === 0 && r.candidates.length === 0)) return e ? Yf(e, {
		sessionReference: vp().currentSessionReference,
		xpAwardSettings: Wg()
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
//#endregion
//#region src/module/session-management/initialization.ts
function Zg() {
	return {
		gmToolkitImport: Xg(),
		occurredAtLocal: Qg(/* @__PURE__ */ new Date()),
		state: vp()
	};
}
function Qg(e) {
	return (/* @__PURE__ */ new Date(e.getTime() - e.getTimezoneOffset() * 6e4)).toISOString().slice(0, 16);
}
//#endregion
//#region src/functions/gm-toolkit/apply.ts
function $g(e, t, n) {
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
//#region src/module/session-management/service.ts
async function e_(e) {
	Bc(J.sessionManagementConsole);
	let t = e.trim();
	if (!t) throw Error("Enter a current session reference.");
	await bp({
		...vp(),
		currentSessionReference: t
	}), ui.notifications.info(`Current session reference saved as ${t}.`);
}
async function t_(e) {
	Bc(J.sessionManagementConsole);
	let t = dp(vp(), e, {
		id: crypto.randomUUID(),
		recordedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	return await bp(t.state), ui.notifications.info(`Session ${t.record.reference} recorded. Current session is now ${t.state.currentSessionReference}.`), t.record;
}
async function n_(e) {
	Bc(J.sessionManagementConsole);
	let t = Xg();
	if (!t?.source) throw Error("No installed module or persisted GM Toolkit world settings were found.");
	let n = Array.from(new Set(e.fields)).filter(Zf);
	if (!n.length) throw Error("Select at least one GM Toolkit value to import.");
	let r = vp(), i = $g(t, {
		sessionReference: r.currentSessionReference,
		xpAwardSettings: Wg()
	}, n), a = {
		appliedFields: n,
		importedAt: (/* @__PURE__ */ new Date()).toISOString(),
		sessionReference: i.sessionReference,
		source: t.source,
		version: 2,
		xpAwardSettings: i.xpAwardSettings
	};
	return n.some((e) => e !== "sessionReference") && await Gg(a.xpAwardSettings), await bp({
		...r,
		currentSessionReference: a.sessionReference,
		gmToolkitMigration: a
	}), ui.notifications.info(`${n.length} GM Toolkit value${n.length === 1 ? "" : "s"} imported into Drowsy’s Toolkit.`), a;
}
async function r_(e) {
	Bc(J.sessionManagementConsole);
	let t = Xg();
	if (!t) throw Error("No imported GM Toolkit Dark Whispers table was found.");
	let n = tg(t.darkWhispers, dg(), e, (/* @__PURE__ */ new Date()).toISOString());
	await fg(n.library);
	let r = Xg();
	if (!r) throw Error("The imported Dark Whispers prompts were saved but could not be reloaded.");
	return ui.notifications.info(`${n.added} Dark Whispers prompt${n.added === 1 ? "" : "s"} added, ${n.replaced} replaced, and ${n.skipped} unchanged.`), {
		...n,
		preview: r
	};
}
async function i_(e) {
	Bc(J.sessionManagementConsole);
	let t = game.user;
	if (!t) throw Error("The current Foundry user is unavailable.");
	let n = Pg(), r = Array.from(new Set(e.slots)).filter((e) => Number.isInteger(e) && e >= 1 && e <= 50).flatMap((e) => {
		let t = n.candidates.find(({ hotbarSlots: t, match: n, replacement: r }) => t.includes(e) && n === "standard" && r.disposition === "ready");
		return t?.replacement.macroId ? [{
			macroId: t.replacement.macroId,
			slot: e
		}] : [];
	});
	if (!r.length) throw Error("Select at least one standard hotbar launcher with a complete replacement.");
	let i = /* @__PURE__ */ new Map();
	for (let e of r) {
		let n = i.get(e.macroId);
		n || (n = await Fg(e.macroId), i.set(e.macroId, n)), await t.assignHotbarMacro(n.macro, e.slot);
	}
	let a = Array.from(i.values()).filter(({ imported: e }) => e).length;
	return ui.notifications.info(`${r.length} hotbar slot${r.length === 1 ? "" : "s"} remapped to Drowsy launchers.`), {
		importedLaunchers: a,
		preview: Pg(),
		remappedSlots: r.length
	};
}
//#endregion
//#region src/functions/xp-award/calculate.ts
function a_(e, t) {
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
function o_(e, t, n) {
	let r = e;
	return n && !r.includes("%datetime%") && (r = r.trim() ? `${r} — awarded %datetime%` : "Awarded %datetime%"), Cl(r, t);
}
function s_(e) {
	return `${e.slice(0, 10)} ${e.slice(11, 19)} UTC`;
}
//#endregion
//#region src/state/apps/xp-award-console/store.ts
var c_ = Ss("xp-award-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = Dl("The XP Award Console"), o = /* @__PURE__ */ M(20), s = /* @__PURE__ */ M(""), c = /* @__PURE__ */ M("party"), l = /* @__PURE__ */ M(!0), u = /* @__PURE__ */ M("default"), d = /* @__PURE__ */ M(), f = /* @__PURE__ */ M(!1), p, m, h = K(() => a_(e.value, o.value)), g = K(() => r.value.length > 0 && Number.isFinite(o.value) && Math.round(o.value) !== 0 && !f.value), _ = K(() => {
		let e = x().reasonContext;
		return o_(s.value, e, l.value);
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
}), l_ = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:whitespace-normal tw:py-1" }, u_ = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[62rem]:grid-cols-[1.2fr_0.8fr]" }, d_ = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-recipients"
}, f_ = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, p_ = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, m_ = { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, h_ = { class: "tw:flex tw:flex-wrap tw:gap-1" }, g_ = ["disabled"], __ = ["disabled"], v_ = ["disabled"], y_ = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, b_ = { class: "dui-table dui-table-sm tw:min-w-[34rem]" }, x_ = {
	class: "tw:min-w-44",
	scope: "row"
}, S_ = { class: "tw:block tw:font-semibold" }, C_ = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, w_ = { class: "tw:text-right tw:tabular-nums" }, T_ = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, E_ = { class: "tw:text-right tw:tabular-nums" }, D_ = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, O_ = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-details"
}, k_ = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, A_ = { class: "dui-label tw:cursor-pointer tw:items-start tw:justify-start tw:gap-3" }, j_ = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, M_ = { class: "tw:m-0 tw:break-words tw:font-semibold" }, N_ = /* @__PURE__ */ I({
	__name: "XpAwardConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = c_();
		n.initialize(t.initialization, t.actions);
		let { actors: r, amount: i, canApply: a, defaultReason: o, defaultSelection: s, errorMessage: c, includeTimestampInReason: l, isWorking: u, plan: d, resolvedReason: f, selectedActors: p, selectionSource: m } = Cs(n), h = K(() => m.value === "targets" ? "Targeted tokens seeded this award." : `The ${s.value} default seeded this award.`);
		function g(e) {
			return d.value.awards.find((t) => t.actorId === e);
		}
		function _(e) {
			return e > 0 ? `+${e}` : String(e);
		}
		return (e, t) => (z(), ia(Gp, {
			description: "Apply one XP change to selected characters, with GM Toolkit-compatible recipient defaults and reason tokens.",
			"error-message": N(c),
			icon: "fa-solid fa-award",
			title: "XP Award Console"
		}, {
			"header-end": Gn(() => [V("span", l_, E(N(p).length) + " selected ", 1)]),
			footer: Gn(() => [H(Ml, {
				disabled: !N(a),
				icon: "fa-solid fa-award",
				label: `Apply ${_(N(d).totalChange)} XP`,
				working: N(u),
				onAction: N(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])]),
			default: Gn(() => [V("div", u_, [V("section", d_, [V("div", f_, [V("div", p_, [V("div", null, [t[7] ||= V("h2", {
				id: "fixed-xp-recipients",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Recipients ", -1), V("p", m_, E(h.value), 1)]), V("div", h_, [
				V("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: N(u),
					type: "button",
					onClick: t[0] ||= (e) => N(n).setAllActorsSelected(!0)
				}, " All ", 8, g_),
				V("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: N(u),
					type: "button",
					onClick: t[1] ||= (e) => N(n).setAllActorsSelected(!1)
				}, " None ", 8, __),
				V("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: N(u),
					type: "button",
					onClick: t[2] ||= (...e) => N(n).resetSelection && N(n).resetSelection(...e)
				}, " Reset ", 8, v_)
			])]), N(r).length ? (z(), B("div", y_, [V("table", b_, [t[8] ||= V("thead", { class: "tw:bg-base-300/60!" }, [V("tr", null, [
				V("th", { scope: "col" }, "Use"),
				V("th", { scope: "col" }, "Actor"),
				V("th", {
					class: "tw:text-right",
					scope: "col"
				}, "Current XP"),
				V("th", {
					class: "tw:text-right",
					scope: "col"
				}, "Change"),
				V("th", {
					class: "tw:text-right",
					scope: "col"
				}, "New total")
			])], -1), V("tbody", null, [(z(!0), B(R, null, jr(N(r), (e) => (z(), B("tr", {
				key: e.id,
				class: Ce({ "tw:bg-base-200!": e.selected })
			}, [
				V("td", null, [H(Il, {
					"actor-id": e.id,
					"actor-name": e.name,
					checked: e.selected,
					disabled: N(u),
					purpose: "the XP award",
					onChange: N(n).setActorSelected
				}, null, 8, [
					"actor-id",
					"actor-name",
					"checked",
					"disabled",
					"onChange"
				])]),
				V("th", x_, [V("span", S_, E(e.name), 1), e.category === "companion" ? (z(), B("span", C_, " Half award ")) : W("", !0)]),
				V("td", w_, E(e.totalXp), 1),
				V("td", T_, E(g(e.id) ? _(g(e.id)?.amount ?? 0) : "—"), 1),
				V("td", E_, E(g(e.id)?.afterXp ?? "—"), 1)
			], 2))), 128))])])])) : (z(), B("div", D_, [...t[9] ||= [V("i", {
				class: "fa-solid fa-user-slash",
				"aria-hidden": "true"
			}, null, -1), V("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]), V("section", O_, [V("div", k_, [
				t[13] ||= V("div", null, [V("h2", {
					id: "fixed-xp-details",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " Award details "), V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " These values become the next console defaults after a successful award. ")], -1),
				t[14] ||= V("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-amount"
				}, "XP change", -1),
				F(V("input", {
					id: "fixed-xp-amount",
					"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ j(i) ? i.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
					inputmode: "numeric",
					step: "1",
					type: "number"
				}, null, 512), [[
					q,
					N(i),
					void 0,
					{ number: !0 }
				]]),
				t[15] ||= V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Negative values remove XP. Companion awards are rounded down to half, matching GM Toolkit. ", -1),
				t[16] ||= V("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-default-group"
				}, " Default recipients on next open ", -1),
				F(V("select", {
					id: "fixed-xp-default-group",
					"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ j(s) ? s.value = e : null,
					class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!"
				}, [...t[10] ||= [
					V("option", { value: "party" }, "Party", -1),
					V("option", { value: "company" }, "Company", -1),
					V("option", { value: "world" }, "World", -1)
				]], 512), [[jo, N(s)]]),
				t[17] ||= V("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-reason"
				}, " Experience log reason ", -1),
				F(V("input", {
					id: "fixed-xp-reason",
					"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ j(o) ? o.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:border-base-content/25! tw:bg-base-100!",
					type: "text"
				}, null, 512), [[q, N(o)]]),
				t[18] ||= V("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
					U(" Supports "),
					V("code", null, "%session%"),
					U(", "),
					V("code", null, "%date%"),
					U(", and "),
					V("code", null, "%datetime%"),
					U(". ")
				], -1),
				V("label", A_, [F(V("input", {
					"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ j(l) ? l.value = e : null,
					class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:appearance-none! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none!",
					type: "checkbox"
				}, null, 512), [[ko, N(l)]]), t[11] ||= V("span", null, [V("span", { class: "tw:block tw:font-semibold" }, "Include timestamp in WFRP4e reason"), V("span", { class: "tw:block tw:text-xs tw:text-base-content/65!" }, " WFRP4e’s log schema has no timestamp field, so this appends UTC text to the reason. ")], -1)]),
				V("div", j_, [t[12] ||= V("span", { class: "tw:text-xs tw:text-base-content/60!" }, "WFRP4e will record", -1), V("p", M_, E(N(f) || "No reason"), 1)]),
				t[19] ||= V("div", {
					class: "dui-alert tw:text-xs",
					role: "note"
				}, [V("i", {
					class: "fa-solid fa-clock-rotate-left",
					"aria-hidden": "true"
				}), V("span", null, " The exact UTC time and per-actor changes are always saved in Drowsy’s world audit log, whether or not the reason includes it. ")], -1)
			])])])]),
			_: 1
		}, 8, ["error-message"]));
	}
});
//#endregion
//#region src/module/xp-award/initialization.ts
function P_() {
	let e = Wg(), t = wf(e.defaultSelection), n = (/* @__PURE__ */ new Date()).toISOString();
	return {
		...e,
		...t,
		awardedAt: n,
		reasonContext: {
			date: n.slice(0, 10),
			datetime: s_(n),
			session: yp()
		}
	};
}
//#endregion
//#region src/module/xp-award/service.ts
async function F_(e) {
	Bc(J.xpAwardConsole);
	let t = Array.from(new Set(e.actorIds));
	if (t.length === 0) throw Error("Select at least one character actor.");
	if (!Number.isFinite(e.defaultAmount) || Math.round(e.defaultAmount) === 0) throw Error("Enter a non-zero whole-number XP change.");
	let n = Tf(t), r = a_(n.map((e) => e.choice), e.defaultAmount), i = (/* @__PURE__ */ new Date()).toISOString(), a = yp(), o = o_(e.defaultReason, {
		date: i.slice(0, 10),
		datetime: s_(i),
		session: a
	}, e.includeTimestampInReason);
	await Gg({
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
	return await qg(zg(Kg(), l)), await I_(c), ui.notifications.info(`Applied ${L_(c.totalChange)} XP across ${c.awards.length} actors.`), c;
}
async function I_(e) {
	let t = e.awards.map((e) => `<li><strong>${wl(e.actorName)}</strong>: ${L_(e.amount)} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Award</h2><p>${wl(e.reason || "No reason")}</p><p><small>${wl(s_(e.awardedAt))}</small></p><ul>${t}</ul><p><strong>${L_(e.totalChange)} XP in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
function L_(e) {
	return e > 0 ? `+${e}` : String(e);
}
//#endregion
//#region src/module/apps/xp-award-console/XpAwardConsoleApplication.ts
var R_ = class extends Gc {
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
		return N_;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: F_,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Award Console.`, e), ui.notifications.error("XP changes completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				}
			},
			initialization: P_()
		};
	}
};
//#endregion
//#region src/module/apps/xp-award-console/open.ts
async function z_() {
	let e = new R_();
	return await e.render(!0), e;
}
function B_() {
	z_().catch((e) => {
		console.error(`${t} | Failed to open the XP Award Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Award Console. See the browser console for details.");
	});
}
//#endregion
//#region src/module/apps/session-management/SessionManagementApplication.ts
var V_ = class extends Gc {
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
		return Vh;
	}
	getVueProps() {
		return {
			actions: {
				completeSession: t_,
				importGmToolkitDarkWhispers: r_,
				importGmToolkitData: n_,
				openXpAwardConsole: B_,
				remapGmToolkitLaunchers: i_,
				saveCurrentSessionReference: e_
			},
			initialization: Zg()
		};
	}
};
//#endregion
//#region src/module/apps/session-management/open.ts
async function H_() {
	let e = new V_();
	return await e.render(!0), e;
}
//#endregion
//#region src/functions/grid-scale/calculate.ts
function U_(e) {
	return Number.isFinite(e.size) && e.size > 0 && Number.isFinite(e.distance) && e.distance > 0;
}
function W_(e, t) {
	return e.size / t.size * (t.distance / e.distance);
}
//#endregion
//#region src/module/grid-scale/service.ts
async function G_() {
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
	if (!U_(n)) {
		ui.notifications.error("The current Scene has an invalid grid size or distance.");
		return;
	}
	let r = await K_(n);
	if (r) {
		if (!U_(r)) {
			ui.notifications.error("Grid size and distance must both be positive numbers.");
			return;
		}
		await q_(e, n, r);
	}
}
async function K_(e) {
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
async function q_(e, t, n) {
	let r = W_(t, n), i = e.lights.map((e) => ({
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
		a.length > 0 && (await e.updateEmbeddedDocuments("AmbientLight", a), c = !0), s.length > 0 && (await e.updateEmbeddedDocuments("Token", s), l = !0), await e.update(Y_(n)), ui.notifications.info(`Grid updated from ${X_(t)} to ${X_(n)}.`);
	} catch (n) {
		let r = await J_({
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
async function J_(e) {
	let t = [];
	return (e.scene.grid.size !== e.oldGrid.size || e.scene.grid.distance !== e.oldGrid.distance || e.scene.grid.units !== e.oldGrid.units) && t.push(e.scene.update(Y_(e.oldGrid))), e.ambientLightsChanged && t.push(e.scene.updateEmbeddedDocuments("AmbientLight", e.oldAmbientLights)), e.tokenLightsChanged && t.push(e.scene.updateEmbeddedDocuments("Token", e.oldTokenLights)), Promise.allSettled(t);
}
function Y_(e) {
	return {
		"grid.distance": e.distance,
		"grid.size": e.size,
		"grid.units": e.units
	};
}
function X_(e) {
	return `${e.size}px/${e.distance}${e.units}`;
}
//#endregion
//#region src/module/api/create-module-api.ts
function Z_() {
	return {
		applyToSelectedActors: rl,
		awardXp: F_,
		awardXpCurve: Cp,
		changeGridScalePreservingLighting: G_,
		completeSession: t_,
		copyLink: al,
		getGmToolkitMigrationPreview: Xg,
		importGmToolkitDarkWhispers: r_,
		importGmToolkitSessionData: n_,
		openFearConsole: dl,
		openSessionManagementConsole: H_,
		openXpAwardConsole: z_,
		openXpCurveConsole: Ep,
		openWorkbench: dl,
		postPrompt: il,
		postSummaryPrompt: ol
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function Q_() {
	let e = game.modules.get(t);
	if (!e) throw Error(`Foundry module registry entry was not found for ${t}.`);
	e.api = Z_();
}
//#endregion
//#region src/module/fear-terror/actor-sheet/register.ts
var $_ = "openFearConsole", ev = "wfrp4e-enhanced-fear-terror-actor-header", tv = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], nv = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function rv() {
	for (let e of tv) Hooks.on(e, (e, t) => {
		iv() && av(e, t);
	});
	for (let e of nv) Hooks.on(e, (e) => {
		iv() && ov(e);
	});
}
function iv() {
	return ul.canCurrentUserAccess() && Hc(Vc.actorSheet);
}
function av(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === $_) || (t.push({
		action: $_,
		icon: "fa-solid fa-skull",
		label: "Fear Console"
	}), e.options.actions ??= {}, e.options.actions[$_] = function() {
		sv(this.document);
	}));
}
function ov(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${ev}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(ev, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = $_, i.dataset.tooltip = "Fear Console", i.ariaLabel = "Open Drowsy’s WFRP4e Toolkit Fear Console", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), sv(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function sv(e) {
	try {
		fl({ initialPayload: Zc(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not read this actor. See the browser console for details.");
	}
}
//#endregion
//#region src/module/settings/register.ts
function cv(n, r) {
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
function lv(e, n, r, i, a = {}) {
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
function uv() {
	lv(lg.promptLibrary, JSON.stringify({
		prompts: [],
		version: 1
	}), String, `${e}.Settings.DarkWhispers.PromptLibrary`);
}
//#endregion
//#region src/functions/scene-controls/toolclip.ts
function dv(e, t) {
	return {
		heading: e,
		items: [{ paragraph: t }]
	};
}
//#endregion
//#region src/module/fear-terror/scene-controls/register.ts
var fv = "openFearConsole";
function pv() {
	Hooks.on("getSceneControlButtons", (e) => {
		!ul.canCurrentUserAccess() || !Hc(Vc.tokenControls) || mv(e);
	});
}
function mv(t) {
	let n = t.tokens;
	n && (n.tools[fv] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: fv,
		onChange: () => {
			fl();
		},
		order: 99,
		title: "Fear Console",
		toolclip: dv("Fear Console", `${e}.SceneControls.OpenFearConsole`)
	});
}
//#endregion
//#region src/module/fear-terror/settings/register.ts
function hv() {
	cv(Vc.tokenControls, "TokenControlsLauncher"), cv(Vc.actorSheet, "ActorSheetLauncher"), game.settings.registerMenu(t, "fearConsole", {
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
function gv() {
	_v(_p.state, JSON.stringify({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), String, "State"), _v(Ug.auditLog, JSON.stringify({
		batches: [],
		version: 1
	}), String, "AuditLog"), _v(Ug.defaultAmount, 20, Number, "DefaultAmount", { range: {
		max: 1e5,
		min: -1e5,
		step: 1
	} }), _v(Ug.defaultReason, "Session %session% (%date%)", String, "DefaultReason"), _v(Ug.defaultSelection, "party", String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpAward.DefaultSelection.Company`,
		party: `${e}.Settings.XpAward.DefaultSelection.Party`,
		world: `${e}.Settings.XpAward.DefaultSelection.World`
	} }), _v(Ug.includeTimestampInReason, !0, Boolean, "IncludeTimestampInReason"), game.settings.registerMenu(t, "sessionManagementConsole", {
		hint: `${e}.Menu.SessionManagementConsole.Hint`,
		icon: "fa-solid fa-calendar-check",
		label: `${e}.Menu.SessionManagementConsole.Label`,
		name: `${e}.Menu.SessionManagementConsole.Name`,
		restricted: V_.ACCESS_POLICY.gmOnly,
		type: V_
	}), game.settings.registerMenu(t, "xpAwardConsole", {
		hint: `${e}.Menu.XpAwardConsole.Hint`,
		icon: "fa-solid fa-award",
		label: `${e}.Menu.XpAwardConsole.Label`,
		name: `${e}.Menu.XpAwardConsole.Name`,
		restricted: R_.ACCESS_POLICY.gmOnly,
		type: R_
	});
}
function _v(t, n, r, i, a = {}) {
	lv(t, n, r, `${e}.Settings.XpAward.${i}`, a);
}
//#endregion
//#region src/module/xp-curve/scene-controls/register.ts
var vv = "openXpCurveConsole";
function yv() {
	Hooks.on("getSceneControlButtons", (t) => {
		if (!Tp.canCurrentUserAccess() || !Pf(Y.showTokenControlsLauncher)) return;
		let n = t.tokens;
		n && (n.tools[vv] = {
			button: !0,
			icon: "fa-solid fa-chart-line",
			name: vv,
			onChange: Dp,
			order: 98,
			title: "XP Curve Console",
			toolclip: dv("XP Curve Console", `${e}.SceneControls.OpenXpCurveConsole`)
		});
	});
}
//#endregion
//#region src/module/xp-curve/settings/register.ts
function bv() {
	cv(Y.showTokenControlsLauncher, "XpCurveTokenControlsLauncher"), xv(Y.maximumAward, El.parameters.maximumAward, Number, "MaximumAward", { range: {
		max: 1e5,
		min: 0,
		step: 1
	} }), xv(Y.gapForMaximumAward, El.parameters.gapForMaximumAward, Number, "GapForMaximumAward", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), xv(Y.curveExponent, El.parameters.curveExponent, Number, "CurveExponent", { range: {
		max: 5,
		min: .1,
		step: .05
	} }), xv(Y.scalePivot, El.parameters.scalePivot, Number, "ScalePivot", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), xv(Y.scaleExponent, El.parameters.scaleExponent, Number, "ScaleExponent", { range: {
		max: 2,
		min: 0,
		step: .05
	} }), xv(Y.companionMultiplier, El.parameters.companionMultiplier, Number, "CompanionMultiplier", { range: {
		max: 1,
		min: 0,
		step: .05
	} }), xv(Y.defaultReason, El.defaultReason, String, "DefaultReason"), xv(Y.defaultSelection, El.defaultSelection, String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpCurve.DefaultSelection.Company`,
		party: `${e}.Settings.XpCurve.DefaultSelection.Party`,
		world: `${e}.Settings.XpCurve.DefaultSelection.World`
	} }), game.settings.registerMenu(t, "xpCurveConsole", {
		hint: `${e}.Menu.XpCurveConfigurator.Hint`,
		icon: "fa-solid fa-sliders",
		label: `${e}.Menu.XpCurveConfigurator.Label`,
		name: `${e}.Menu.XpCurveConfigurator.Name`,
		restricted: Hf.ACCESS_POLICY.gmOnly,
		type: Hf
	});
}
function xv(t, n, r, i, a = {}) {
	lv(t, n, r, `${e}.Settings.XpCurve.${i}`, a);
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function Sv() {
	Hooks.once("init", () => {
		console.info(`${t} | Initializing`), hv(), uv(), gv(), bv(), rv(), pv(), yv();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${t} | Loaded outside ${i}; skipping module API registration.`);
			return;
		}
		Q_(), console.info(`${t} | Ready`);
	});
}
//#endregion
//#region src/main.ts
Sv();
//#endregion

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map