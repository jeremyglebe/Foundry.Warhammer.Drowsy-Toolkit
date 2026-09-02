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
var Ae = (e) => !!(e && e.__v_isRef === !0), E = (e) => x(e) ? e : e == null ? "" : g(e) || C(e) && (e.toString === te || !b(e.toString)) ? Ae(e) ? E(e.value) : JSON.stringify(e, je, 2) : String(e), je = (e, t) => Ae(t) ? je(e, t.value) : _(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Me(t, r) + " =>"] = n, e), {}) } : v(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Me(e)) } : S(t) ? Me(t) : C(t) && !g(t) && !ie(t) ? String(t) : t, Me = (e, t = "") => S(e) ? `Symbol(${e.description ?? t})` : e, Ne, Pe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Ne && (Ne.active ? (this.parent = Ne, this.index = (Ne.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = Ne;
			try {
				return Ne = this, e();
			} finally {
				Ne = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Ne, Ne = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Ne === this) Ne = this.prevScope;
			else {
				let e = Ne;
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
function Fe(e) {
	return new Pe(e);
}
function Ie() {
	return Ne;
}
function Le(e, t = !1) {
	Ne && Ne.cleanups.push(e);
}
var D, Re = /* @__PURE__ */ new WeakSet(), ze = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && (Ne.active ? Ne.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Re.has(this) && (Re.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ue(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, nt(this), Ke(this);
		let e = D, t = Qe;
		D = this, Qe = !0;
		try {
			return this.fn();
		} finally {
			qe(this), D = e, Qe = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Xe(e);
			this.deps = this.depsTail = void 0, nt(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Re.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Je(this) && this.run();
	}
	get dirty() {
		return Je(this);
	}
}, Be = 0, Ve, He;
function Ue(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = He, He = e;
		return;
	}
	e.next = Ve, Ve = e;
}
function We() {
	Be++;
}
function Ge() {
	if (--Be > 0) return;
	if (He) {
		let e = He;
		for (He = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ve;) {
		let t = Ve;
		for (Ve = void 0; t;) {
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
function Ke(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qe(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Xe(r), Ze(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Je(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ye(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ye(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rt) || (e.globalVersion = rt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Je(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = D, r = Qe;
	D = e, Qe = !0;
	try {
		Ke(e);
		let n = e.fn(e._value);
		(t.version === 0 || T(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		D = n, Qe = r, qe(e), e.flags &= -3;
	}
}
function Xe(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Xe(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ze(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Qe = !0, $e = [];
function et() {
	$e.push(Qe), Qe = !1;
}
function tt() {
	let e = $e.pop();
	Qe = e === void 0 ? !0 : e;
}
function nt(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = D;
		D = void 0;
		try {
			t();
		} finally {
			D = e;
		}
	}
}
var rt = 0, it = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, at = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!D || !Qe || D === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== D) t = this.activeLink = new it(D, this), D.deps ? (t.prevDep = D.depsTail, D.depsTail.nextDep = t, D.depsTail = t) : D.deps = D.depsTail = t, ot(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = D.depsTail, t.nextDep = void 0, D.depsTail.nextDep = t, D.depsTail = t, D.deps === t && (D.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, rt++, this.notify(e);
	}
	notify(e) {
		We();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ge();
		}
	}
};
function ot(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) ot(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var st = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ Symbol(""), lt = /* @__PURE__ */ Symbol(""), ut = /* @__PURE__ */ Symbol("");
function dt(e, t, n) {
	if (Qe && D) {
		let t = st.get(e);
		t || st.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new at()), r.map = t, r.key = n), r.track();
	}
}
function ft(e, t, n, r, i, a) {
	let o = st.get(e);
	if (!o) {
		rt++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (We(), t === "clear") o.forEach(s);
	else {
		let i = g(e), a = i && ae(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ut || !S(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ut)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ct)), _(e) && s(o.get(lt)));
				break;
			case "delete":
				i || (s(o.get(ct)), _(e) && s(o.get(lt)));
				break;
			case "set":
				_(e) && s(o.get(ct));
				break;
		}
	}
	Ge();
}
function pt(e, t) {
	let n = st.get(e);
	return n && n.get(t);
}
function mt(e) {
	let t = /* @__PURE__ */ O(e);
	return t === e ? t : (dt(t, "iterate", ut), /* @__PURE__ */ $t(e) ? t : t.map(nn));
}
function ht(e) {
	return dt(e = /* @__PURE__ */ O(e), "iterate", ut), e;
}
function gt(e, t) {
	return /* @__PURE__ */ Qt(e) ? rn(/* @__PURE__ */ Zt(e) ? nn(t) : t) : nn(t);
}
var _t = {
	__proto__: null,
	[Symbol.iterator]() {
		return vt(this, Symbol.iterator, (e) => gt(this, e));
	},
	concat(...e) {
		return mt(this).concat(...e.map((e) => g(e) ? mt(e) : e));
	},
	entries() {
		return vt(this, "entries", (e) => (e[1] = gt(this, e[1]), e));
	},
	every(e, t) {
		return bt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return bt(this, "filter", e, t, (e) => e.map((e) => gt(this, e)), arguments);
	},
	find(e, t) {
		return bt(this, "find", e, t, (e) => gt(this, e), arguments);
	},
	findIndex(e, t) {
		return bt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return bt(this, "findLast", e, t, (e) => gt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return bt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return bt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return St(this, "includes", e);
	},
	indexOf(...e) {
		return St(this, "indexOf", e);
	},
	join(e) {
		return mt(this).join(e);
	},
	lastIndexOf(...e) {
		return St(this, "lastIndexOf", e);
	},
	map(e, t) {
		return bt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Ct(this, "pop");
	},
	push(...e) {
		return Ct(this, "push", e);
	},
	reduce(e, ...t) {
		return xt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return xt(this, "reduceRight", e, t);
	},
	shift() {
		return Ct(this, "shift");
	},
	some(e, t) {
		return bt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Ct(this, "splice", e);
	},
	toReversed() {
		return mt(this).toReversed();
	},
	toSorted(e) {
		return mt(this).toSorted(e);
	},
	toSpliced(...e) {
		return mt(this).toSpliced(...e);
	},
	unshift(...e) {
		return Ct(this, "unshift", e);
	},
	values() {
		return vt(this, "values", (e) => gt(this, e));
	}
};
function vt(e, t, n) {
	let r = ht(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ $t(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var yt = Array.prototype;
function bt(e, t, n, r, i, a) {
	let o = ht(e), s = o !== e && !/* @__PURE__ */ $t(e), c = o[t];
	if (c !== yt[t]) {
		let t = c.apply(e, a);
		return s ? nn(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, gt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function xt(e, t, n, r) {
	let i = ht(e), a = i !== e && !/* @__PURE__ */ $t(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = gt(e, t)), n.call(this, t, gt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? gt(e, c) : c;
}
function St(e, t, n) {
	let r = /* @__PURE__ */ O(e);
	dt(r, "iterate", ut);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ en(n[0]) ? (n[0] = /* @__PURE__ */ O(n[0]), r[t](...n)) : i;
}
function Ct(e, t, n = []) {
	et(), We();
	let r = (/* @__PURE__ */ O(e))[t].apply(e, n);
	return Ge(), tt(), r;
}
var wt = /* @__PURE__ */ a("__proto__,__v_isRef,__isVue"), Tt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(S));
function Et(e) {
	S(e) || (e = String(e));
	let t = /* @__PURE__ */ O(this);
	return dt(t, "has", e), t.hasOwnProperty(e);
}
var Dt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Gt : Wt : i ? Ut : Ht).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = g(e);
		if (!r) {
			let e;
			if (a && (e = _t[t])) return e;
			if (t === "hasOwnProperty") return Et;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ k(e) ? e : n);
		if ((S(t) ? Tt.has(t) : wt(t)) || (r || dt(e, "get", t), i)) return o;
		if (/* @__PURE__ */ k(o)) {
			let e = a && ae(t) ? o : o.value;
			return r && C(e) ? /* @__PURE__ */ Yt(e) : e;
		}
		return C(o) ? r ? /* @__PURE__ */ Yt(o) : /* @__PURE__ */ qt(o) : o;
	}
}, Ot = class extends Dt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = g(e) && ae(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Qt(i);
			if (!/* @__PURE__ */ $t(n) && !/* @__PURE__ */ Qt(n) && (i = /* @__PURE__ */ O(i), n = /* @__PURE__ */ O(n)), !a && /* @__PURE__ */ k(i) && !/* @__PURE__ */ k(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : h(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ k(e) ? e : r);
		return e === /* @__PURE__ */ O(r) && (o ? T(n, i) && ft(e, "set", t, n, i) : ft(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = h(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ft(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!S(t) || !Tt.has(t)) && dt(e, "has", t), n;
	}
	ownKeys(e) {
		return dt(e, "iterate", g(e) ? "length" : ct), Reflect.ownKeys(e);
	}
}, kt = class extends Dt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, At = /* @__PURE__ */ new Ot(), jt = /* @__PURE__ */ new kt(), Mt = /* @__PURE__ */ new Ot(!0), Nt = (e) => e, Pt = (e) => Reflect.getPrototypeOf(e);
function Ft(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ O(i), o = _(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Nt : t ? rn : nn;
		return !t && dt(a, "iterate", c ? lt : ct), f(Object.create(l), { next() {
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
function It(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Lt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ O(r), a = /* @__PURE__ */ O(n);
			e || (T(n, a) && dt(i, "get", n), dt(i, "get", a));
			let { has: o } = Pt(i), s = t ? Nt : e ? rn : nn;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && dt(/* @__PURE__ */ O(t), "iterate", ct), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ O(n), i = /* @__PURE__ */ O(t);
			return e || (T(t, i) && dt(r, "has", t), dt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ O(a), s = t ? Nt : e ? rn : nn;
			return !e && dt(o, "iterate", ct), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return f(n, e ? {
		add: It("add"),
		set: It("set"),
		delete: It("delete"),
		clear: It("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ O(this), r = Pt(n), i = /* @__PURE__ */ O(e), a = !t && !/* @__PURE__ */ $t(e) && !/* @__PURE__ */ Qt(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), ft(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ $t(n) && !/* @__PURE__ */ Qt(n) && (n = /* @__PURE__ */ O(n));
			let r = /* @__PURE__ */ O(this), { has: i, get: a } = Pt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ O(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && ft(r, "set", e, n, s) : ft(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ O(this), { has: n, get: r } = Pt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ O(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ft(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ O(this), t = e.size !== 0, n = e.clear();
			return t && ft(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ft(r, e, t);
	}), n;
}
function Rt(e, t) {
	let n = Lt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(h(n, r) && r in t ? n : t, r, i);
}
var zt = { get: /* @__PURE__ */ Rt(!1, !1) }, Bt = { get: /* @__PURE__ */ Rt(!1, !0) }, Vt = { get: /* @__PURE__ */ Rt(!0, !1) }, Ht = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap();
function Kt(e) {
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
function qt(e) {
	return /* @__PURE__ */ Qt(e) ? e : Xt(e, !1, At, zt, Ht);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return Xt(e, !1, Mt, Bt, Ut);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return Xt(e, !0, jt, Vt, Wt);
}
function Xt(e, t, n, r, i) {
	if (!C(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Kt(re(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return /* @__PURE__ */ Qt(e) ? /* @__PURE__ */ Zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function O(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ O(t) : e;
}
function tn(e) {
	return !h(e, "__v_skip") && Object.isExtensible(e) && me(e, "__v_skip", !0), e;
}
var nn = (e) => C(e) ? /* @__PURE__ */ qt(e) : e, rn = (e) => C(e) ? /* @__PURE__ */ Yt(e) : e;
// @__NO_SIDE_EFFECTS__
function k(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function A(e) {
	return on(e, !1);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return on(e, !0);
}
function on(e, t) {
	return /* @__PURE__ */ k(e) ? e : new sn(e, t);
}
var sn = class {
	constructor(e, t) {
		this.dep = new at(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ O(e), this._value = t ? e : nn(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ $t(e) || /* @__PURE__ */ Qt(e);
		e = n ? e : /* @__PURE__ */ O(e), T(e, t) && (this._rawValue = e, this._value = n ? e : nn(e), this.dep.trigger());
	}
};
function j(e) {
	return /* @__PURE__ */ k(e) ? e.value : e;
}
var cn = {
	get: (e, t, n) => t === "__v_raw" ? e : j(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ k(i) && !/* @__PURE__ */ k(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function ln(e) {
	return /* @__PURE__ */ Zt(e) ? e : new Proxy(e, cn);
}
var un = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new at(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function dn(e) {
	return new un(e);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
	let t = g(e) ? Array(e.length) : {};
	for (let n in e) t[n] = gn(e, n);
	return t;
}
var pn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = S(t) ? t : String(t), this._raw = /* @__PURE__ */ O(e);
		let r = !0, i = e;
		if (!g(e) || S(this._key) || !ae(this._key)) do
			r = !/* @__PURE__ */ en(i) || /* @__PURE__ */ $t(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = j(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ k(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ k(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return pt(this._raw, this._key);
	}
}, mn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function hn(e, t, n) {
	return /* @__PURE__ */ k(e) ? e : b(e) ? new mn(e) : C(e) && arguments.length > 1 ? gn(e, t, n) : /* @__PURE__ */ A(e);
}
function gn(e, t, n) {
	return new pn(e, t, n);
}
var _n = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new at(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && D !== this) return Ue(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ye(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function vn(e, t, n = !1) {
	let r, i;
	return b(e) ? r = e : (r = e.get, i = e.set), new _n(r, i, n);
}
var yn = {}, bn = /* @__PURE__ */ new WeakMap(), xn = void 0;
function Sn(e, t = !1, n = xn) {
	if (n) {
		let t = bn.get(n);
		t || bn.set(n, t = []), t.push(e);
	}
}
function Cn(e, t, n = o) {
	let { immediate: r, deep: i, once: a, scheduler: s, augmentJob: l, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ $t(e) || i === !1 || i === 0 ? wn(e, 1) : wn(e), f, m, h, _, v = !1, y = !1;
	if (/* @__PURE__ */ k(e) ? (m = () => e.value, v = /* @__PURE__ */ $t(e)) : /* @__PURE__ */ Zt(e) ? (m = () => d(e), v = !0) : g(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ Zt(e) || /* @__PURE__ */ $t(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ k(e)) return e.value;
		if (/* @__PURE__ */ Zt(e)) return d(e);
		if (b(e)) return u ? u(e, 2) : e();
	})) : m = b(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (h) {
			et();
			try {
				h();
			} finally {
				tt();
			}
		}
		let t = xn;
		xn = f;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			xn = t;
		}
	} : c, t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => wn(e(), t);
	}
	let x = Ie(), S = () => {
		f.stop(), x && x.active && p(x.effects, f);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = y ? Array(e.length).fill(yn) : yn, ee = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let n = f.run();
			if (e || i || v || (y ? n.some((e, t) => T(e, C[t])) : T(n, C))) {
				h && h();
				let e = xn;
				xn = f;
				try {
					let e = [
						n,
						C === yn ? void 0 : y && C[0] === yn ? [] : C,
						_
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					xn = e;
				}
			}
		} else f.run();
	};
	return l && l(ee), f = new ze(m), f.scheduler = s ? () => s(ee, !1) : ee, _ = (e) => Sn(e, !1, f), h = f.onStop = () => {
		let e = bn.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			bn.delete(f);
		}
	}, t ? r ? ee(!0) : C = f.run() : s ? s(ee.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function wn(e, t = Infinity, n) {
	if (t <= 0 || !C(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ k(e)) wn(e.value, t, n);
	else if (g(e)) for (let r = 0; r < e.length; r++) wn(e[r], t, n);
	else if (v(e) || _(e)) e.forEach((e) => {
		wn(e, t, n);
	});
	else if (ie(e)) {
		for (let r in e) wn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && wn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Tn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Dn(e, t, n);
	}
}
function En(e, t, n, r) {
	if (b(e)) {
		let i = Tn(e, t, n, r);
		return i && ee(i) && i.catch((e) => {
			Dn(e, t, n);
		}), i;
	}
	if (g(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(En(e[a], t, n, r));
		return i;
	}
}
function Dn(e, t, n, r = !0) {
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
			et(), Tn(a, null, 10, [
				e,
				i,
				o
			]), tt();
			return;
		}
	}
	On(e, n, i, r, s);
}
function On(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var kn = [], An = -1, jn = [], Mn = null, Nn = 0, Pn = /* @__PURE__ */ Promise.resolve(), Fn = null;
function In(e) {
	let t = Fn || Pn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ln(e) {
	let t = An + 1, n = kn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = kn[r], a = Un(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Rn(e) {
	if (!(e.flags & 1)) {
		let t = Un(e), n = kn[kn.length - 1];
		!n || !(e.flags & 2) && t >= Un(n) ? kn.push(e) : kn.splice(Ln(t), 0, e), e.flags |= 1, zn();
	}
}
function zn() {
	Fn ||= Pn.then(Wn);
}
function Bn(e) {
	g(e) ? jn.push(...e) : Mn && e.id === -1 ? Mn.splice(Nn + 1, 0, e) : e.flags & 1 || (jn.push(e), e.flags |= 1), zn();
}
function Vn(e, t, n = An + 1) {
	for (; n < kn.length; n++) {
		let t = kn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			kn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Hn(e) {
	if (jn.length) {
		let e = [...new Set(jn)].sort((e, t) => Un(e) - Un(t));
		if (jn.length = 0, Mn) {
			Mn.push(...e);
			return;
		}
		for (Mn = e, Nn = 0; Nn < Mn.length; Nn++) {
			let e = Mn[Nn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Mn = null, Nn = 0;
	}
}
var Un = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Wn(e) {
	try {
		for (An = 0; An < kn.length; An++) {
			let e = kn[An];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Tn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; An < kn.length; An++) {
			let e = kn[An];
			e && (e.flags &= -2);
		}
		An = -1, kn.length = 0, Hn(e), Fn = null, (kn.length || jn.length) && Wn(e);
	}
}
var Gn = null, Kn = null;
function qn(e) {
	let t = Gn;
	return Gn = e, Kn = e && e.type.__scopeId || null, t;
}
function M(e, t = Gn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ia(-1);
		let i = qn(t), a;
		try {
			a = e(...n);
		} finally {
			qn(i), r._d && ia(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function N(e, t) {
	if (Gn === null) return e;
	let n = za(Gn), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, s, c = o] = t[e];
		i && (b(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && wn(a), r.push({
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
function Jn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (et(), En(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), tt());
	}
}
function Yn(e, t) {
	if (Ca) {
		let n = Ca.provides, r = Ca.parent && Ca.parent.provides;
		r === n && (n = Ca.provides = Object.create(r)), n[e] = t;
	}
}
function Xn(e, t, n = !1) {
	let r = wa();
	if (r || ai) {
		let i = ai ? ai._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && b(t) ? t.call(r && r.proxy) : t;
	}
}
function Zn() {
	return !!(wa() || ai);
}
var Qn = /* @__PURE__ */ Symbol.for("v-scx"), $n = () => Xn(Qn);
function er(e, t) {
	return nr(e, null, { flush: "sync" });
}
function tr(e, t, n) {
	return nr(e, t, n);
}
function nr(e, t, n = o) {
	let { immediate: r, deep: i, flush: a, once: s } = n, l = f({}, n), u = t && r || !t && a !== "post", d;
	if (Aa) {
		if (a === "sync") {
			let e = $n();
			d = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = c, e.resume = c, e.pause = c, e;
		}
	}
	let p = Ca;
	l.call = (e, t, n) => En(e, p, t, n);
	let m = !1;
	a === "post" ? l.scheduler = (e) => {
		Ri(e, p && p.suspense);
	} : a !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : Rn(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = Cn(e, t, l);
	return Aa && (d ? d.push(h) : u && h()), h;
}
function rr(e, t, n) {
	let r = this.proxy, i = x(e) ? e.includes(".") ? ir(r, e) : () => r[e] : e.bind(r, r), a;
	b(t) ? a = t : (a = t.handler, n = t);
	let o = Da(this), s = nr(i, a.bind(r), n);
	return o(), s;
}
function ir(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var ar = /* @__PURE__ */ Symbol("_vte"), or = (e) => e.__isTeleport, sr = /* @__PURE__ */ Symbol("_leaveCb");
function cr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, cr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
	return b(e) ? /* @__PURE__ */ f({ name: e.name }, t, { setup: e }) : e;
}
function lr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function ur(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var dr = /* @__PURE__ */ new WeakMap();
function fr(e, t, n, r, i = !1) {
	if (g(e)) {
		e.forEach((e, a) => fr(e, t && (g(t) ? t[a] : t), n, r, i));
		return;
	}
	if (mr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && fr(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? za(r.component) : r.el, s = i ? null : a, { i: c, r: u } = e, d = t && t.r, f = c.refs === o ? c.refs = {} : c.refs, m = c.setupState, _ = /* @__PURE__ */ O(m), v = m === o ? l : (e) => ur(f, e) ? !1 : h(_, e), y = (e, t) => !(t && ur(f, t));
	if (d != null && d !== u) {
		if (pr(t), x(d)) f[d] = null, v(d) && (m[d] = null);
		else if (/* @__PURE__ */ k(d)) {
			let e = t;
			y(d, e.k) && (d.value = null), e.k && (f[e.k] = null);
		}
	}
	if (b(u)) Tn(u, c, 12, [s, f]);
	else {
		let t = x(u), r = /* @__PURE__ */ k(u);
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
					o(), dr.delete(e);
				};
				t.id = -1, dr.set(e, t), Ri(t, n);
			} else pr(e), o();
		}
	}
}
function pr(e) {
	let t = dr.get(e);
	t && (t.flags |= 8, dr.delete(e));
}
_e().requestIdleCallback, _e().cancelIdleCallback;
var mr = (e) => !!e.type.__asyncLoader, hr = (e) => e.type.__isKeepAlive;
function gr(e, t) {
	vr(e, "a", t);
}
function _r(e, t) {
	vr(e, "da", t);
}
function vr(e, t, n = Ca) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (br(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) hr(e.parent.vnode) && yr(r, t, n, e), e = e.parent;
	}
}
function yr(e, t, n, r) {
	let i = br(t, e, r, !0);
	Dr(() => {
		p(r[t], i);
	}, n);
}
function br(e, t, n = Ca, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			et();
			let i = Da(n), a = En(t, n, e, r);
			return i(), tt(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var xr = (e) => (t, n = Ca) => {
	(!Aa || e === "sp") && br(e, (...e) => t(...e), n);
}, Sr = xr("bm"), Cr = xr("m"), wr = xr("bu"), Tr = xr("u"), Er = xr("bum"), Dr = xr("um"), Or = xr("sp"), kr = xr("rtg"), Ar = xr("rtc");
function jr(e, t = Ca) {
	br("ec", e, t);
}
var Mr = /* @__PURE__ */ Symbol.for("v-ndc");
function F(e, t, n, r) {
	let i, a = n && n[r], o = g(e);
	if (o || x(e)) {
		let n = o && /* @__PURE__ */ Zt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ $t(e), s = /* @__PURE__ */ Qt(e), e = ht(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? rn(nn(e[n])) : nn(e[n]) : e[n], n, void 0, a && a[n]);
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
function Nr(e, t, n = {}, r, i) {
	if (Gn.ce || Gn.parent && mr(Gn.parent) && Gn.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), L(), oa(I, null, [B("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), L();
	let o = a && Pr(a(n)), s = n.key || o && o.key, c = oa(I, { key: (s && !S(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Pr(e) {
	return e.some((e) => sa(e) ? !(e.type === Qi || e.type === I && !Pr(e.children)) : !0) ? e : null;
}
var Fr = (e) => e ? ka(e) ? za(e) : Fr(e.parent) : null, Ir = /* @__PURE__ */ f(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Fr(e.parent),
	$root: (e) => Fr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Kr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Rn(e.update);
	},
	$nextTick: (e) => e.n ||= In.bind(e.proxy),
	$watch: (e) => rr.bind(e)
}), Lr = (e, t) => e !== o && !e.__isScriptSetup && h(e, t), Rr = {
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
			else if (Lr(r, t)) return s[t] = 1, r[t];
			else if (i !== o && h(i, t)) return s[t] = 2, i[t];
			else if (h(a, t)) return s[t] = 3, a[t];
			else if (n !== o && h(n, t)) return s[t] = 4, n[t];
			else Vr && (s[t] = 0);
		}
		let u = Ir[t], d, f;
		if (u) return t === "$attrs" && dt(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== o && h(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, h(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Lr(i, t) ? (i[t] = n, !0) : r !== o && h(r, t) ? (r[t] = n, !0) : h(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: s } }, c) {
		let l;
		return !!(n[c] || e !== o && c[0] !== "$" && h(e, c) || Lr(t, c) || h(a, c) || h(r, c) || h(Ir, c) || h(i.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? h(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function zr(e) {
	return g(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Br(e, t) {
	return !e || !t ? e || t : g(e) && g(t) ? e.concat(t) : f({}, zr(e), zr(t));
}
var Vr = !0;
function Hr(e) {
	let t = Kr(e), n = e.proxy, r = e.ctx;
	Vr = !1, t.beforeCreate && Wr(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: h, activated: _, deactivated: v, beforeDestroy: y, beforeUnmount: x, destroyed: S, unmounted: ee, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: ie, serverPrefetch: ae, expose: oe, inheritAttrs: se, components: ce, directives: le, filters: ue } = t;
	if (u && Ur(u, r, null), o) for (let e in o) {
		let t = o[e];
		b(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		C(t) && (e.data = /* @__PURE__ */ qt(t));
	}
	if (Vr = !0, a) for (let e in a) {
		let t = a[e], i = U({
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
	if (s) for (let e in s) Gr(s[e], r, n, e);
	if (l) {
		let e = b(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Yn(t, e[t]);
		});
	}
	d && Wr(d, e, "c");
	function w(e, t) {
		g(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (w(Sr, f), w(Cr, p), w(wr, m), w(Tr, h), w(gr, _), w(_r, v), w(jr, ie), w(Ar, ne), w(kr, re), w(Er, x), w(Dr, ee), w(Or, ae), g(oe)) if (oe.length) {
		let t = e.exposed ||= {};
		oe.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === c && (e.render = te), se != null && (e.inheritAttrs = se), ce && (e.components = ce), le && (e.directives = le), ae && lr(e);
}
function Ur(e, t, n = c) {
	g(e) && (e = Zr(e));
	for (let n in e) {
		let r = e[n], i;
		i = C(r) ? "default" in r ? Xn(r.from || n, r.default, !0) : Xn(r.from || n) : Xn(r), /* @__PURE__ */ k(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Wr(e, t, n) {
	En(g(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Gr(e, t, n, r) {
	let i = r.includes(".") ? ir(n, r) : () => n[r];
	if (x(e)) {
		let n = t[e];
		b(n) && tr(i, n);
	} else if (b(e)) tr(i, e.bind(n));
	else if (C(e)) if (g(e)) e.forEach((e) => Gr(e, t, n, r));
	else {
		let r = b(e.handler) ? e.handler.bind(n) : t[e.handler];
		b(r) && tr(i, r, e);
	}
}
function Kr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => qr(c, e, o, !0)), qr(c, t, o)), C(t) && a.set(t, c), c;
}
function qr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && qr(e, a, n, !0), i && i.forEach((t) => qr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Jr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Jr = {
	data: Yr,
	props: ei,
	emits: ei,
	methods: $r,
	computed: $r,
	beforeCreate: Qr,
	created: Qr,
	beforeMount: Qr,
	mounted: Qr,
	beforeUpdate: Qr,
	updated: Qr,
	beforeDestroy: Qr,
	beforeUnmount: Qr,
	destroyed: Qr,
	unmounted: Qr,
	activated: Qr,
	deactivated: Qr,
	errorCaptured: Qr,
	serverPrefetch: Qr,
	components: $r,
	directives: $r,
	watch: ti,
	provide: Yr,
	inject: Xr
};
function Yr(e, t) {
	return t ? e ? function() {
		return f(b(e) ? e.call(this, this) : e, b(t) ? t.call(this, this) : t);
	} : t : e;
}
function Xr(e, t) {
	return $r(Zr(e), Zr(t));
}
function Zr(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Qr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function $r(e, t) {
	return e ? f(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ei(e, t) {
	return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : f(/* @__PURE__ */ Object.create(null), zr(e), zr(t ?? {})) : t;
}
function ti(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = f(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Qr(e[r], t[r]);
	return n;
}
function ni() {
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
var ri = 0;
function ii(e, t) {
	return function(n, r = null) {
		b(n) || (n = f({}, n)), r != null && !C(r) && (r = null);
		let i = ni(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: ri++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Va,
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
					let u = c._ceVNode || B(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, za(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (En(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = ai;
				ai = c;
				try {
					return e();
				} finally {
					ai = t;
				}
			}
		};
		return c;
	};
}
var ai = null;
function oi(e, t, n = o) {
	let r = wa(), i = le(t), a = w(t), s = si(e, i), c = dn((s, c) => {
		let l, u = o, d;
		return er(() => {
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
var si = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${le(t)}Modifiers`] || e[`${w(t)}Modifiers`];
function ci(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || o, i = n, a = t.startsWith("update:"), s = a && si(r, t.slice(7));
	s && (s.trim && (i = n.map((e) => x(e) ? e.trim() : e)), s.number && (i = n.map(he)));
	let c, l = r[c = fe(t)] || r[c = fe(le(t))];
	!l && a && (l = r[c = fe(w(t))]), l && En(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, En(u, e, 6, i);
	}
}
var li = /* @__PURE__ */ new WeakMap();
function di(e, t, n = !1) {
	let r = n ? li : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!b(e)) {
		let r = (e) => {
			let n = di(e, t, !0);
			n && (s = !0, f(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (C(e) && r.set(e, null), null) : (g(a) ? a.forEach((e) => o[e] = null) : f(o, a), C(e) && r.set(e, o), o);
}
function fi(e, t) {
	return !e || !u(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), h(e, t[0].toLowerCase() + t.slice(1)) || h(e, w(t)) || h(e, t));
}
function pi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = qn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ha(l.call(t, e, u, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = ha(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : mi(s);
		}
	} catch (t) {
		ea.length = 0, Dn(t, e, 1), v = B(Qi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(d) && (y = hi(y, a)), b = pa(b, y, !1, !0));
	}
	return n.dirs && (b = pa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && cr(b, n.transition), v = b, qn(_), v;
}
var mi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || u(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, hi = (e, t) => {
	let n = {};
	for (let r in e) (!d(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function gi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? _i(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (vi(o, r, n) && !fi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? _i(r, o, l) : !0 : !!o;
	return !1;
}
function _i(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (vi(t, e, a) && !fi(n, a)) return !0;
	}
	return !1;
}
function vi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && C(r) && C(i) ? !Oe(r, i) : r !== i;
}
function yi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var bi = {}, xi = () => Object.create(bi), Si = (e) => Object.getPrototypeOf(e) === bi;
function Ci(e, t, n, r = !1) {
	let i = {}, a = xi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ti(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Jt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function wi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ O(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (fi(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (h(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = le(o);
					i[t] = Ei(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Ti(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !h(t, a) && ((r = w(a)) === a || !h(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ei(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !h(t, e)) && (delete a[e], l = !0);
	}
	l && ft(e.attrs, "set", "");
}
function Ti(e, t, n, r) {
	let [i, a] = e.propsOptions, s = !1, c;
	if (t) for (let o in t) {
		if (oe(o)) continue;
		let l = t[o], u;
		i && h(i, u = le(o)) ? !a || !a.includes(u) ? n[u] = l : (c ||= {})[u] = l : fi(e.emitsOptions, o) || (!(o in r) || l !== r[o]) && (r[o] = l, s = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ O(n), r = c || o;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Ei(i, t, s, r[s], e, !h(r, s));
		}
	}
	return s;
}
function Ei(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = h(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && b(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Da(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === w(n)) && (r = !0));
	}
	return r;
}
var Di = /* @__PURE__ */ new WeakMap();
function Oi(e, t, n = !1) {
	let r = n ? Di : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, c = {}, l = [], u = !1;
	if (!b(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = Oi(e, t, !0);
			f(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !u) return C(e) && r.set(e, s), s;
	if (g(a)) for (let e = 0; e < a.length; e++) {
		let t = le(a[e]);
		ki(t) && (c[t] = o);
	}
	else if (a) for (let e in a) {
		let t = le(e);
		if (ki(t)) {
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
function ki(e) {
	return e[0] !== "$" && !oe(e);
}
var Ai = (e) => e === "_" || e === "_ctx" || e === "$stable", ji = (e) => g(e) ? e.map(ha) : [ha(e)], Mi = (e, t, n) => {
	if (t._n) return t;
	let r = M((...e) => ji(t(...e)), n);
	return r._c = !1, r;
}, Ni = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ai(n)) continue;
		let i = e[n];
		if (b(i)) t[n] = Mi(n, i, r);
		else if (i != null) {
			let e = ji(i);
			t[n] = () => e;
		}
	}
}, Pi = (e, t) => {
	let n = ji(t);
	e.slots.default = () => n;
}, Fi = (e, t, n) => {
	for (let r in t) (n || !Ai(r)) && (e[r] = t[r]);
}, Ii = (e, t, n) => {
	let r = e.slots = xi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Fi(r, t, n), n && me(r, "_", e, !0)) : Ni(t, r);
	} else t && Pi(e, t);
}, Li = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, s = o;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : Fi(i, t, n) : (a = !t.$stable, Ni(t, i)), s = t;
	} else t && (Pi(e, t), s = { default: 1 });
	if (a) for (let e in i) !Ai(e) && s[e] == null && delete i[e];
}, Ri = Xi;
function zi(e) {
	return Bi(e);
}
function Bi(e, t) {
	let n = _e();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = c, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ca(e, t) && (r = Ce(e), ve(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Zi:
				y(e, t, n, r);
				break;
			case Qi:
				b(e, t, n, r);
				break;
			case $i:
				e ?? x(t, n, r, o);
				break;
			case I:
				ce(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? le(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ee);
		}
		u != null && i ? fr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && fr(e.ref, null, a, e, !0);
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
		if (d = e.el = l(e.type, s, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && re(e.children, d, null, i, o, Vi(e, s), c, u), _ && Jn(e, null, i, "created"), ne(d, e, e.scopeId, c, i), m) {
			for (let e in m) e !== "value" && !oe(e) && a(d, e, null, m[e], s, i);
			"value" in m && a(d, "value", null, m.value, s), (f = m.onVnodeBeforeMount) && ya(f, i, e);
		}
		_ && Jn(e, null, i, "beforeMount");
		let v = Ui(o, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ri(() => {
			try {
				f && ya(f, i, e), v && g.enter(d), _ && Jn(e, null, i, "mounted");
			} finally {}
		}, o);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Yi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, re = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ga(e[l]) : ha(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, t, n, r, i, s, c) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || o, h = t.props || o, g;
		if (n && Hi(n, !1), (g = h.onVnodeBeforeUpdate) && ya(g, n, t, e), f && Jn(t, e, n, "beforeUpdate"), n && Hi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, n, r, Vi(t, i), s) : c || T(e, t, l, null, n, r, Vi(t, i), s, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Ri(() => {
			g && ya(g, n, t, e), f && Jn(t, e, n, "updated");
		}, r);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === I || !ca(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), re(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Wi(e, t, !0)) : T(e, t, n, f, a, o, s, c, l);
	}, le = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ue(t, n, r, i, a, o, c) : w(e, t, c);
	}, ue = (e, t, n, r, i, a, o) => {
		let s = e.component = Sa(e, r, i);
		if (hr(e) && (s.ctx.renderer = Ee), ja(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o), !e.el) {
				let r = s.subTree = B(Qi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, w = (e, t, n) => {
		let r = t.component = e.component;
		if (gi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			fe(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, de = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ki(e);
					if (n) {
						t && (t.el = c.el, fe(e, t, o)), n.asyncDep.then(() => {
							Ri(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Hi(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && pe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ya(d, s, t, c), Hi(e, !0);
				let f = pi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), Ce(p), e, i, a), t.el = f.el, u === null && yi(e, f.el), r && Ri(r, i), (d = t.props && t.props.onVnodeUpdated) && Ri(() => ya(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = mr(t);
				if (Hi(e, !1), l && pe(l), !m && (o = c && c.onVnodeBeforeMount) && ya(o, d, t), Hi(e, !0), s && Oe) {
					let t = () => {
						e.subTree = pi(e), Oe(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = pi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ri(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ri(() => ya(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && mr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ri(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new ze(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Rn(u), Hi(e, !0), l();
	}, fe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, wi(e, t.props, r, n), Li(e, t.children, n), et(), Vn(e), tt();
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
			let r = t[p] = l ? ga(t[p]) : ha(t[p]);
			v(e[p], r, n, null, i, a, o, c, l);
		}
		u > d ? Se(e, i, a, !0, !1, f) : re(t, n, r, i, a, o, c, l, f);
	}, he = (e, t, n, r, i, a, o, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], s = t[u] = l ? ga(t[u]) : ha(t[u]);
			if (ca(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], s = t[p] = l ? ga(t[p]) : ha(t[p]);
			if (ca(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, s = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ga(t[u]) : ha(t[u]), n, s, i, a, o, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ve(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ga(t[u]) : ha(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ca(r, t[_])) {
					s = _;
					break;
				}
				s === void 0 ? ve(r, i, a, !0) : (C[s - h] = u + 1, s >= S ? S = s : x = !0, v(r, t[s], n, null, i, a, o, c, l), y++);
			}
			let ee = x ? Gi(C) : s;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, s = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ji(f) : r;
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
		if (c === I) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === $i) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[sr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), Ri(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[sr];
				s._isLeaving && s[sr](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, ve = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (et(), fr(s, null, n, e, !0), tt()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !mr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ya(_, t, e), u & 6) xe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Jn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ee, r) : l && !l.hasOnce && (a !== I || d > 0 && d & 64) ? Se(l, t, n, !1, !0) : (a === I && d & 384 || !i && u & 16) && Se(c, t, n), r && ye(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ri(() => {
			_ && ya(_, t, e), h && Jn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ye = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === I) {
			be(n, r);
			return;
		}
		if (t === $i) {
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
		qi(c), qi(l), r && pe(r), i.stop(), a && (a.flags |= 8, ve(o, e, t, n)), s && Ri(s, t), Ri(() => {
			e.isUnmounted = !0;
		}, t);
	}, Se = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ve(e[o], t, n, r, i);
	}, Ce = (e) => {
		if (e.shapeFlag & 6) return Ce(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[ar];
		return n ? h(n) : t;
	}, we = !1, Te = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ve(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, we ||= (we = !0, Vn(r), Hn(), !1);
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
		createApp: ii(Te, De)
	};
}
function Vi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Hi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ui(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (g(r) && g(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ga(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Wi(t, a)), a.type === Zi && (a.patchFlag === -1 && (a = i[e] = ga(a)), a.el = t.el), a.type === Qi && !a.el && (a.el = t.el);
	}
}
function Gi(e) {
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
function Ki(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ki(t);
}
function qi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ji(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ji(t.subTree) : null;
}
var Yi = (e) => e.__isSuspense;
function Xi(e, t) {
	t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : Bn(e);
}
var I = /* @__PURE__ */ Symbol.for("v-fgt"), Zi = /* @__PURE__ */ Symbol.for("v-txt"), Qi = /* @__PURE__ */ Symbol.for("v-cmt"), $i = /* @__PURE__ */ Symbol.for("v-stc"), ea = [], ta = null;
function L(e = !1) {
	ea.push(ta = e ? null : []);
}
function na() {
	ea.pop(), ta = ea[ea.length - 1] || null;
}
var ra = 1;
function ia(e, t = !1) {
	ra += e, e < 0 && ta && t && (ta.hasOnce = !0);
}
function aa(e) {
	return e.dynamicChildren = ra > 0 ? ta || s : null, na(), ra > 0 && ta && ta.push(e), e;
}
function R(e, t, n, r, i, a) {
	return aa(z(e, t, n, r, i, a, !0));
}
function oa(e, t, n, r, i) {
	return aa(B(e, t, n, r, i, !0));
}
function sa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ca(e, t) {
	return e.type === t.type && e.key === t.key;
}
var la = ({ key: e }) => e ?? null, ua = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : x(e) || /* @__PURE__ */ k(e) || b(e) ? {
	i: Gn,
	r: e,
	k: t,
	f: !!n
} : e);
function z(e, t = null, n = null, r = 0, i = null, a = e === I ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && la(t),
		ref: t && ua(t),
		scopeId: Kn,
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
		ctx: Gn
	};
	return s ? (_a(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= x(n) ? 8 : 16), ra > 0 && !o && ta && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ta.push(c), c;
}
var B = da;
function da(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Mr) && (e = Qi), sa(e)) {
		let r = pa(e, t, !0);
		return n && _a(r, n), ra > 0 && !a && ta && (r.shapeFlag & 6 ? ta[ta.indexOf(e)] = r : ta.push(r)), r.patchFlag = -2, r;
	}
	if (Ba(e) && (e = e.__vccOpts), t) {
		t = fa(t);
		let { class: e, style: n } = t;
		e && !x(e) && (t.class = Ce(e)), C(n) && (/* @__PURE__ */ en(n) && !g(n) && (n = f({}, n)), t.style = ve(n));
	}
	let o = x(e) ? 1 : Yi(e) ? 128 : or(e) ? 64 : C(e) ? 4 : b(e) ? 2 : 0;
	return z(e, t, n, r, i, o, a, !0);
}
function fa(e) {
	return e ? /* @__PURE__ */ en(e) || Si(e) ? f({}, e) : e : null;
}
function pa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? va(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && la(l),
		ref: t && t.ref ? n && a ? g(a) ? a.concat(ua(t)) : [a, ua(t)] : ua(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== I ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && pa(e.ssContent),
		ssFallback: e.ssFallback && pa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && cr(u, c.clone(u)), u;
}
function V(e = " ", t = 0) {
	return B(Zi, null, e, t);
}
function ma(e, t) {
	let n = B($i, null, e);
	return n.staticCount = t, n;
}
function H(e = "", t = !1) {
	return t ? (L(), oa(Qi, null, e)) : B(Qi, null, e);
}
function ha(e) {
	return e == null || typeof e == "boolean" ? B(Qi) : g(e) ? B(I, null, e.slice()) : sa(e) ? ga(e) : B(Zi, null, String(e));
}
function ga(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : pa(e);
}
function _a(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (g(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), _a(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Si(t) ? t._ctx = Gn : r === 3 && Gn && (Gn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else b(t) ? (t = {
		default: t,
		_ctx: Gn
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [V(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function va(...e) {
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
function ya(e, t, n, r = null) {
	En(e, t, 7, [n, r]);
}
var ba = ni(), xa = 0;
function Sa(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || ba, a = {
		uid: xa++,
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
		scope: new Pe(!0),
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
		propsOptions: Oi(r, i),
		emitsOptions: di(r, i),
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ci.bind(null, a), e.ce && e.ce(a), a;
}
var Ca = null, wa = () => Ca || Gn, Ta, Ea;
{
	let e = _e(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ta = t("__VUE_INSTANCE_SETTERS__", (e) => Ca = e), Ea = t("__VUE_SSR_SETTERS__", (e) => Aa = e);
}
var Da = (e) => {
	let t = Ca;
	return Ta(e), e.scope.on(), () => {
		e.scope.off(), Ta(t);
	};
}, Oa = () => {
	Ca && Ca.scope.off(), Ta(null);
};
function ka(e) {
	return e.vnode.shapeFlag & 4;
}
var Aa = !1;
function ja(e, t = !1, n = !1) {
	t && Ea(t);
	let { props: r, children: i } = e.vnode, a = ka(e);
	Ci(e, r, a, t), Ii(e, i, n || t);
	let o = a ? Ma(e, t) : void 0;
	return t && Ea(!1), o;
}
function Ma(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Rr);
	let { setup: r } = n;
	if (r) {
		et();
		let n = e.setupContext = r.length > 1 ? Ra(e) : null, i = Da(e), a = Tn(r, e, 0, [e.props, n]), o = ee(a);
		if (tt(), i(), (o || e.sp) && !mr(e) && lr(e), o) {
			if (a.then(Oa, Oa), t) return a.then((n) => {
				Na(e, n, t);
			}).catch((t) => {
				Dn(t, e, 0);
			});
			e.asyncDep = a;
		} else Na(e, a, t);
	} else Ia(e, t);
}
function Na(e, t, n) {
	b(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : C(t) && (e.setupState = ln(t)), Ia(e, n);
}
var Pa, Fa;
function Ia(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Pa && !r.render) {
			let t = r.template || Kr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Pa(t, f(f({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || c, Fa && Fa(e);
	}
	{
		let t = Da(e);
		et();
		try {
			Hr(e);
		} finally {
			tt(), t();
		}
	}
}
var La = { get(e, t) {
	return dt(e, "get", ""), e[t];
} };
function Ra(e) {
	return {
		attrs: new Proxy(e.attrs, La),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function za(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(ln(tn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Ir) return Ir[n](e);
		},
		has(e, t) {
			return t in e || t in Ir;
		}
	}) : e.proxy;
}
function Ba(e) {
	return b(e) && "__vccOpts" in e;
}
var U = (e, t) => /* @__PURE__ */ vn(e, t, Aa), Va = "3.5.38", Ha = void 0, Ua = typeof window < "u" && window.trustedTypes;
if (Ua) try {
	Ha = /* @__PURE__ */ Ua.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Wa = Ha ? (e) => Ha.createHTML(e) : (e) => e, Ga = "http://www.w3.org/2000/svg", Ka = "http://www.w3.org/1998/Math/MathML", qa = typeof document < "u" ? document : null, Ja = qa && /* @__PURE__ */ qa.createElement("template"), Ya = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? qa.createElementNS(Ga, e) : t === "mathml" ? qa.createElementNS(Ka, e) : n ? qa.createElement(e, { is: n }) : qa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => qa.createTextNode(e),
	createComment: (e) => qa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => qa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Ja.innerHTML = Wa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ja.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Xa = /* @__PURE__ */ Symbol("_vtc");
function Za(e, t, n) {
	let r = e[Xa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Qa = /* @__PURE__ */ Symbol("_vod"), $a = /* @__PURE__ */ Symbol("_vsh"), eo = /* @__PURE__ */ Symbol(""), to = /(?:^|;)\s*display\s*:/;
function no(e, t, n) {
	let r = e.style, i = x(n), a = !1;
	if (n && !i) {
		if (t) if (x(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? io(r, t, "");
		}
		else for (let e in t) n[e] ?? io(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? io(r, i, "") : co(e, i, !x(t) && t ? t[i] : void 0, o) || io(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[eo];
			e && (n += ";" + e), r.cssText = n, a = to.test(n);
		}
	} else t && e.removeAttribute("style");
	Qa in e && (e[Qa] = a ? r.display : "", e[$a] && (r.display = "none"));
}
var ro = /\s*!important$/;
function io(e, t, n) {
	if (g(n)) n.forEach((n) => io(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = so(e, t);
		ro.test(n) ? e.setProperty(w(r), n.replace(ro, ""), "important") : e[r] = n;
	}
}
var ao = [
	"Webkit",
	"Moz",
	"ms"
], oo = {};
function so(e, t) {
	let n = oo[t];
	if (n) return n;
	let r = le(t);
	if (r !== "filter" && r in e) return oo[t] = r;
	r = de(r);
	for (let n = 0; n < ao.length; n++) {
		let i = ao[n] + r;
		if (i in e) return oo[t] = i;
	}
	return t;
}
function co(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && x(r) && n === r;
}
var lo = "http://www.w3.org/1999/xlink";
function uo(e, t, n, r, i, a = Te(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(lo, t.slice(6, t.length)) : e.setAttributeNS(lo, t, n) : n == null || a && !Ee(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : S(n) ? String(n) : n);
}
function fo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Wa(n) : n);
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
function po(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function mo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var ho = /* @__PURE__ */ Symbol("_vei");
function go(e, t, n, r, i = null) {
	let a = e[ho] || (e[ho] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = vo(t);
		r ? po(e, n, a[t] = So(r, i), s) : o && (mo(e, n, o, s), a[t] = void 0);
	}
}
var _o = /(?:Once|Passive|Capture)$/;
function vo(e) {
	let t;
	if (_o.test(e)) {
		t = {};
		let n;
		for (; n = e.match(_o);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : w(e.slice(2)), t];
}
var yo = 0, bo = /* @__PURE__ */ Promise.resolve(), xo = () => yo ||= (bo.then(() => yo = 0), Date.now());
function So(e, t) {
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
				e && En(e, t, 5, a);
			}
		} else En(r, t, 5, [e]);
	};
	return n.value = e, n.attached = xo(), n;
}
var Co = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Za(e, r, o) : t === "style" ? no(e, n, r) : u(t) ? d(t) || go(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : To(e, t, r, o)) ? (fo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && uo(e, t, r, o, a, t !== "value")) : e._isVueCE && (Eo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !x(r))) ? fo(e, le(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), uo(e, t, r, o));
};
function To(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Co(t) && b(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Co(t) && x(n) ? !1 : t in e;
}
function Eo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = le(t);
	return Array.isArray(n) ? n.some((e) => le(e) === r) : Object.keys(n).some((e) => le(e) === r);
}
var Do = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return g(t) ? (e) => pe(t, e) : t;
};
function Oo(e) {
	e.target.composing = !0;
}
function ko(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Ao = /* @__PURE__ */ Symbol("_assign");
function jo(e, t, n) {
	return t && (e = e.trim()), n && (e = he(e)), e;
}
var W = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Ao] = Do(i);
		let a = r || i.props && i.props.type === "number";
		po(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Ao](jo(e.value, n, a));
		}), (n || a) && po(e, "change", () => {
			e.value = jo(e.value, n, a);
		}), t || (po(e, "compositionstart", Oo), po(e, "compositionend", ko), po(e, "change", ko));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Ao] = Do(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? he(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, G = {
	deep: !0,
	created(e, t, n) {
		e[Ao] = Do(n), po(e, "change", () => {
			let t = e._modelValue, n = Fo(e), r = e.checked, i = e[Ao];
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
			} else i(Io(e, r));
		});
	},
	mounted: Mo,
	beforeUpdate(e, t, n) {
		e[Ao] = Do(n), Mo(e, t, n);
	}
};
function Mo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (g(t)) i = ke(t, r.props.value) > -1;
	else if (v(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Oe(t, Io(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var No = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = v(t);
		po(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? he(Fo(e)) : Fo(e));
			e[Ao](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, In(() => {
				e._assigning = !1;
			});
		}), e[Ao] = Do(r);
	},
	mounted(e, { value: t }) {
		Po(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Ao] = Do(n);
	},
	updated(e, { value: t }) {
		e._assigning || Po(e, t);
	}
};
function Po(e, t) {
	let n = e.multiple, r = g(t);
	if (!(n && !r && !v(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Fo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = ke(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Oe(Fo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Fo(e) {
	return "_value" in e ? e._value : e.value;
}
function Io(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Lo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Ro = {
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
	exact: (e, t) => Lo.some((n) => e[`${n}Key`] && !t.includes(n))
}, zo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Ro[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Bo = /* @__PURE__ */ f({ patchProp: wo }, Ya), Vo;
function Ho() {
	return Vo ||= zi(Bo);
}
var Uo = ((...e) => {
	let t = Ho().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Go(e);
		if (!r) return;
		let i = t._component;
		!b(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Wo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Wo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Go(e) {
	return x(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Ko = typeof window < "u", qo, Jo = (e) => qo = e, Yo = Symbol();
function Xo(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Zo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Zo ||= {});
var Qo = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function $o(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function es(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		as(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function ts(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function ns(e) {
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
var rs = typeof navigator == "object" ? navigator : { userAgent: "" }, is = /Macintosh/.test(rs.userAgent) && /AppleWebKit/.test(rs.userAgent) && !/Safari/.test(rs.userAgent), as = Ko ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !is ? os : "msSaveOrOpenBlob" in rs ? ss : cs : () => {};
function os(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? ns(r) : ts(r.href) ? es(e, t, n) : (r.target = "_blank", ns(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		ns(r);
	}, 0));
}
function ss(e, t = "download", n) {
	if (typeof e == "string") if (ts(e)) es(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			ns(t);
		});
	}
	else navigator.msSaveOrOpenBlob($o(e, n), t);
}
function cs(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return es(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Qo.HTMLElement)) || "safari" in Qo, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || is) && typeof FileReader < "u") {
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
var { assign: ls } = Object;
function us() {
	let e = Fe(!0), t = e.run(() => /* @__PURE__ */ A({})), n = [], r = [], i = tn({
		install(e) {
			Jo(i), i._a = e, e.provide(Yo, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var ds = () => {};
function fs(e, t, n, r = ds) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ie() && Le(i), i;
}
function ps(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var ms = (e) => e(), hs = Symbol(), gs = Symbol();
function _s(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Xo(i) && Xo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ k(r) && !/* @__PURE__ */ Zt(r) ? e[n] = _s(i, r) : e[n] = r;
	}
	return e;
}
var vs = Symbol();
function ys(e) {
	return !Xo(e) || !Object.prototype.hasOwnProperty.call(e, vs);
}
var { assign: bs } = Object;
function xs(e) {
	return !!(/* @__PURE__ */ k(e) && e.effect);
}
function Ss(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), bs(/* @__PURE__ */ fn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = tn(U(() => {
			Jo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Cs(e, l, t, n, r, !0), c;
}
function Cs(e, t, n = {}, r, i, a) {
	let o, s = bs({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Zo.patchFunction,
			storeId: e,
			events: void 0
		}) : (_s(r.state.value[e], t), n = {
			type: Zo.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		In().then(() => {
			m === i && (l = !0);
		}), u = !0, ps(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			bs(e, t);
		});
	} : ds;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (hs in t) return t[gs] = n, t;
		let i = function() {
			Jo(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			ps(f, {
				args: n,
				name: i[gs],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw ps(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (ps(a, e), e)).catch((e) => (ps(o, e), Promise.reject(e))) : (ps(a, l), l);
		};
		return i[hs] = !0, i[gs] = n, i;
	}, y = /* @__PURE__ */ qt({
		_p: r,
		$id: e,
		$onAction: fs.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = fs(d, t, n.detached, () => a()), a = o.run(() => tr(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Zo.direct,
					events: void 0
				}, r);
			}, bs({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || ms)(() => r._e.run(() => (o = Fe()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ k(n) && !xs(n) || /* @__PURE__ */ Zt(n) ? a || (p && ys(n) && (/* @__PURE__ */ k(n) ? n.value = p[t] : _s(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return bs(y, b), bs(/* @__PURE__ */ O(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				bs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		bs(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function ws(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Zn();
		return n ||= o ? Xn(Yo, null) : null, n && Jo(n), n = qo, n._s.has(e) || (i ? Cs(e, t, r, n) : Ss(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Ts(e) {
	let t = /* @__PURE__ */ O(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = U({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ k(i) || /* @__PURE__ */ Zt(i)) && (n[r] = /* @__PURE__ */ hn(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/fear-terror/payload.ts
function Es(e) {
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
function Ds(e) {
	return e === "fear" ? "Fear" : "Terror";
}
function Os(e, t) {
	let n = t.source ? ` - ${t.source}` : "";
	return `${e} ${t.rating}${n}`;
}
function ks(e, t) {
	return `<h2>${e}</h2>${As(t)}`;
}
function As(e) {
	let t = Ds(e.type), n = e.source ? `, ${e.source}` : "";
	return `@${t}[${e.rating}${n}]`;
}
//#endregion
//#region src/state/apps/fear-console/store.ts
var js = ws("fear-console", () => {
	let e = /* @__PURE__ */ A("fear"), t = /* @__PURE__ */ A(1), n = /* @__PURE__ */ A(""), r = /* @__PURE__ */ A([]), i = /* @__PURE__ */ A(), a = /* @__PURE__ */ A(), o, s = U(() => i.value !== void 0), c = U(() => Ds(e.value)), l = U(() => {
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
}), Ms = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, Ns = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, Ps = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:border-base-content/25! tw:py-1" }, Fs = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure Fear Console"
}, Is = /* @__PURE__ */ P({
	__name: "FearConsoleHeader",
	props: {
		rating: {},
		selectedTypeLabel: {}
	},
	emits: ["configure"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (L(), R("header", Ms, [r[2] ||= z("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [z("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [z("i", { class: "fa-solid fa-skull" })])], -1), z("div", Ns, [z("span", Ps, E(e.selectedTypeLabel) + " " + E(e.rating), 1), z("span", Fs, [z("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure Fear Console",
			title: "Configure Fear Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[1] ||= [z("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]));
	}
}), Ls = { class: "tw:flex tw:min-h-full tw:flex-col tw:gap-4 tw:bg-base-200! tw:text-base-content tw:text-base-content!" }, Rs = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mx-4",
	role: "alert"
}, zs = {
	class: "tw:grid tw:min-w-0 tw:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] tw:gap-3 tw:px-4",
	"aria-label": "Fear and Terror setup"
}, Bs = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Vs = {
	class: "tw:grid tw:w-full tw:grid-cols-2 tw:gap-2",
	role: "group",
	"aria-label": "Effect type"
}, Hs = ["aria-pressed"], Us = ["aria-pressed"], Ws = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Gs = { class: "dui-fieldset tw:col-span-full tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Ks = {
	class: "dui-card dui-card-border tw:mx-4 tw:min-h-40 tw:flex-1 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-terror-affected-actors"
}, qs = { class: "dui-card-body tw:gap-3 tw:p-4" }, Js = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, Ys = { class: "tw:flex tw:items-center tw:gap-2" }, Xs = { class: "dui-badge dui-badge-sm" }, Zs = ["disabled"], Qs = {
	key: 0,
	class: "dui-list tw:gap-1",
	"aria-live": "polite"
}, $s = { class: "tw:min-w-0 tw:font-semibold" }, ec = { class: "dui-badge dui-badge-ghost tw:capitalize" }, tc = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, nc = {
	class: "tw:sticky tw:bottom-0 tw:z-10 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4",
	"aria-label": "Fear Console actions"
}, rc = { class: "dui-join tw:flex tw:w-full" }, ic = ["disabled"], ac = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, oc = {
	key: 1,
	class: "fa-solid fa-message",
	"aria-hidden": "true"
}, sc = ["disabled"], cc = {
	id: "fear-console-secondary-actions",
	class: "dui-dropdown dui-dropdown-top dui-dropdown-end dui-menu tw:z-20 tw:mb-2 tw:w-52 tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100! tw:p-2 tw:text-base-content! tw:shadow-lg",
	popover: "",
	style: { "position-anchor": "--fear-console-secondary-actions" }
}, lc = ["disabled"], uc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, dc = {
	key: 1,
	class: "fa-regular fa-copy",
	"aria-hidden": "true"
}, fc = ["disabled"], pc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, mc = {
	key: 1,
	class: "fa-solid fa-bolt",
	"aria-hidden": "true"
}, hc = /* @__PURE__ */ P({
	__name: "FearConsoleApp",
	props: {
		initialPayload: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = js();
		t.initialPayload ? n.initialize({
			actions: t.actions,
			initialPayload: t.initialPayload
		}) : n.initialize({ actions: t.actions });
		let { activeAction: r, actors: i, errorMessage: a, isWorking: o, rating: s, selectedType: c, selectedTypeLabel: l, source: u } = Ts(n);
		return (e, d) => (L(), R("main", Ls, [
			B(Is, {
				rating: j(s),
				"selected-type-label": j(l),
				onConfigure: t.actions.openConfigurator
			}, null, 8, [
				"rating",
				"selected-type-label",
				"onConfigure"
			]),
			j(a) ? (L(), R("div", Rs, [d[8] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", null, E(j(a)), 1)])) : H("", !0),
			z("section", zs, [
				z("fieldset", Bs, [
					d[9] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Effect", -1),
					z("div", Vs, [z("button", {
						class: Ce(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": j(c) === "fear" }]),
						type: "button",
						"aria-pressed": j(c) === "fear",
						onClick: d[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, Hs), z("button", {
						class: Ce(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": j(c) === "terror" }]),
						type: "button",
						"aria-pressed": j(c) === "terror",
						onClick: d[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, Us)]),
					d[10] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " Choose the WFRP4e psychology test to prompt or apply. ", -1)
				]),
				z("fieldset", Ws, [
					d[11] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Difficulty", -1),
					d[12] ||= z("label", {
						class: "dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					N(z("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": d[2] ||= (e) => /* @__PURE__ */ k(s) ? s.value = e : null,
						class: "dui-input dui-validator tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						W,
						j(s),
						void 0,
						{ number: !0 }
					]]),
					d[13] ||= z("p", { class: "dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				z("fieldset", Gs, [
					d[14] ||= ma("<legend class=\"dui-fieldset-legend tw:text-base-content!\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary!\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					N(z("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": d[3] ||= (e) => /* @__PURE__ */ k(u) ? u.value = e : null,
						autocomplete: "off",
						class: "dui-input tw:min-w-0 tw:max-w-full tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[W, j(u)]]),
					d[15] ||= z("p", { class: "dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			z("section", Ks, [z("div", qs, [z("div", Js, [z("div", Ys, [d[16] ||= z("h2", {
				id: "fear-terror-affected-actors",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Affected actors ", -1), z("span", Xs, E(j(i).length), 1)]), z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: j(o),
				type: "button",
				onClick: d[4] ||= (...e) => j(n).refreshActors && j(n).refreshActors(...e)
			}, [...d[17] ||= [z("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), V(" Refresh ", -1)]], 8, Zs)]), j(i).length ? (L(), R("ul", Qs, [(L(!0), R(I, null, F(j(i), (e) => (L(), R("li", {
				key: e.id,
				class: "dui-list-row tw:items-center tw:bg-base-200!"
			}, [
				d[18] ||= z("span", {
					class: "dui-status dui-status-secondary",
					"aria-hidden": "true"
				}, null, -1),
				z("span", $s, E(e.name), 1),
				z("span", ec, E(e.source), 1)
			]))), 128))])) : (L(), R("div", tc, [d[19] ||= z("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), z("span", null, " Target one or more tokens to apply " + E(j(l)) + " directly. You can post a chat card without affected actors. ", 1)]))])]),
			z("footer", nc, [z("div", rc, [
				z("button", {
					class: "dui-btn dui-btn-primary dui-join-item tw:min-w-0 tw:flex-1 tw:rounded-l-full tw:shadow-md",
					disabled: j(o),
					type: "button",
					onClick: d[5] ||= (e) => j(n).runAction("post-card")
				}, [j(r) === "post-card" ? (L(), R("span", ac)) : (L(), R("i", oc)), d[20] ||= V(" Post Card ", -1)], 8, ic),
				z("button", {
					class: "dui-btn dui-btn-primary dui-btn-square dui-join-item tw:rounded-r-full tw:border-l-primary-content/25! tw:shadow-md",
					"aria-label": "More Fear Console actions",
					disabled: j(o),
					popovertarget: "fear-console-secondary-actions",
					style: { "anchor-name": "--fear-console-secondary-actions" },
					title: "More actions",
					type: "button"
				}, [...d[21] ||= [z("i", {
					class: "fa-solid fa-chevron-up",
					"aria-hidden": "true"
				}, null, -1)]], 8, sc),
				z("ul", cc, [z("li", { class: Ce({ "dui-menu-disabled": j(o) }) }, [z("button", {
					disabled: j(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[6] ||= (e) => j(n).runAction("copy-link")
				}, [j(r) === "copy-link" ? (L(), R("span", uc)) : (L(), R("i", dc)), d[22] ||= V(" Copy Link ", -1)], 8, lc)], 2), z("li", { class: Ce({ "dui-menu-disabled": j(o) }) }, [z("button", {
					disabled: j(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[7] ||= (e) => j(n).runAction("apply")
				}, [j(r) === "apply" ? (L(), R("span", pc)) : (L(), R("i", mc)), V(" Apply " + E(j(l)), 1)], 8, fc)], 2)])
			])])
		]));
	}
}), gc = ws("fear-console-configurator", () => {
	let e = /* @__PURE__ */ A({ launchers: {
		actorSheet: !0,
		tokenControls: !0
	} }), t = /* @__PURE__ */ A(), n = /* @__PURE__ */ A(), r = /* @__PURE__ */ A(!1), i;
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
}), _c = { class: "dui-navbar tw:relative tw:min-h-0 tw:min-w-0 tw:flex-wrap tw:items-start tw:gap-3 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-4 tw:py-3 tw:text-base-content! tw:shadow-md" }, vc = { class: "dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start tw:gap-3" }, yc = {
	class: "tw:inline-grid tw:size-11 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-lg tw:text-primary-content! tw:shadow-md",
	"aria-hidden": "true"
}, bc = { class: "tw:min-w-0" }, xc = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight tw:tracking-wide tw:text-base-content!" }, Sc = { class: "tw:mt-1 tw:max-w-2xl tw:text-sm tw:leading-relaxed tw:text-base-content/70!" }, Cc = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, wc = ["data-tip"], Tc = ["aria-label", "title"], Ec = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("header", _c, [z("div", vc, [z("span", yc, [z("i", { class: Ce(e.icon) }, null, 2)]), z("div", bc, [
			r[1] ||= z("div", { class: "dui-breadcrumbs tw:mb-0.5 tw:max-w-full tw:text-xs tw:text-secondary!" }, [z("ul", null, [z("li", null, "Drowsy’s WFRP4e Toolkit")])], -1),
			z("h1", xc, E(e.title), 1),
			z("p", Sc, E(e.description), 1)
		])]), z("div", Cc, [Nr(t.$slots, "end"), e.configureLabel ? (L(), R("span", {
			key: 0,
			class: "dui-tooltip dui-tooltip-left",
			"data-tip": e.configureLabel
		}, [z("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			type: "button",
			"aria-label": e.configureLabel,
			title: e.configureLabel,
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [z("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]], 8, Tc)], 8, wc)) : H("", !0)])]));
	}
}), Dc = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Oc = { class: "tw:min-h-0 tw:flex-1 tw:overflow-auto tw:p-4" }, kc = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, Ac = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, jc = {
	class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-launcher-settings"
}, Mc = { class: "dui-card-body tw:gap-4 tw:p-4" }, Nc = { class: "dui-fieldset tw:gap-2" }, Pc = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Fc = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Ic = { class: "tw:flex tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[32rem]:flex-row tw:min-[32rem]:items-center tw:min-[32rem]:justify-between" }, Lc = ["disabled"], Rc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, zc = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, Bc = /* @__PURE__ */ P({
	__name: "FearConsoleConfiguratorApp",
	props: {
		actions: {},
		configuration: {}
	},
	setup(e) {
		let t = e, n = gc();
		n.initialize(t.configuration, t.actions);
		let { configuration: r, errorMessage: i, isSaving: a, statusMessage: o } = Ts(n);
		return (e, t) => (L(), R("main", Dc, [
			B(Ec, {
				description: "Choose where the Fear Console appears for this browser and account.",
				icon: "fa-solid fa-gears",
				title: "Fear Console Configurator"
			}),
			z("div", Oc, [
				j(i) ? (L(), R("div", kc, [t[3] ||= z("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), z("span", null, E(j(i)), 1)])) : H("", !0),
				j(o) ? (L(), R("div", Ac, [t[4] ||= z("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), z("span", null, E(j(o)), 1)])) : H("", !0),
				z("section", jc, [z("div", Mc, [
					t[8] ||= z("div", null, [z("h2", {
						id: "fear-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), z("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These client preferences control only where shortcuts appear. Macros and the module API remain available. ")], -1),
					z("fieldset", Nc, [
						t[7] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1),
						z("label", Pc, [N(z("input", {
							"onUpdate:modelValue": t[0] ||= (e) => j(r).launchers.tokenControls = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[G, j(r).launchers.tokenControls]]), t[5] ||= z("span", { class: "tw:min-w-0" }, [z("strong", { class: "tw:block" }, "Token Controls"), z("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the skull launcher in Foundry’s Token Controls palette. ")], -1)]),
						z("label", Fc, [N(z("input", {
							"onUpdate:modelValue": t[1] ||= (e) => j(r).launchers.actorSheet = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[G, j(r).launchers.actorSheet]]), t[6] ||= z("span", { class: "tw:min-w-0" }, [z("strong", { class: "tw:block" }, "Actor-sheet headers"), z("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show a Fear Console action on supported WFRP4e actor sheets. ")], -1)])
					]),
					t[9] ||= z("div", {
						class: "dui-alert tw:text-sm",
						role: "note"
					}, [z("i", {
						class: "fa-solid fa-rotate",
						"aria-hidden": "true"
					}), z("span", null, "Launcher changes take effect after Foundry is reloaded.")], -1)
				])])
			]),
			z("footer", Ic, [t[11] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, "Scope: this client and user.", -1), z("button", {
				class: "dui-btn dui-btn-primary tw:min-w-40 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: j(a),
				type: "button",
				onClick: t[2] ||= (...e) => j(n).saveConfiguration && j(n).saveConfiguration(...e)
			}, [j(a) ? (L(), R("span", Rc)) : (L(), R("i", zc)), t[10] ||= V(" Save configuration ", -1)], 8, Lc)])
		]));
	}
}), K = {
	administrationConsole: {
		gmOnly: !0,
		name: "Administration Console"
	},
	combatConsole: {
		gmOnly: !0,
		name: "Combat Console"
	},
	damageConsole: {
		gmOnly: !0,
		name: "Damage Console"
	},
	darkWhispersConsole: {
		gmOnly: !0,
		name: "Dark Whispers Console"
	},
	fearConsole: {
		gmOnly: !0,
		name: "Fear Console"
	},
	gmToolkitMigration: {
		gmOnly: !0,
		name: "GM Toolkit importer"
	},
	groupTestConsole: {
		gmOnly: !0,
		name: "Secret Group Test Console"
	},
	sessionManagementConsole: {
		gmOnly: !0,
		name: "Session Management Console"
	},
	toolkitHome: {
		gmOnly: !0,
		name: "Toolkit Home"
	},
	tokenToolsConsole: {
		gmOnly: !0,
		name: "Token Vision & Light Console"
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
function Vc(e) {
	let t = game.user;
	return t !== null && (!e.gmOnly || t.isGM);
}
function q(e) {
	if (!Vc(e)) throw Error(`Only a GM can use the ${e.name}.`);
}
//#endregion
//#region src/module/fear-terror/settings/launchers.ts
var Hc = {
	actorSheet: "showActorSheetLauncher",
	tokenControls: "showTokenControlsLauncher"
};
function Uc(e) {
	return game.settings.get(t, e) === !0;
}
//#endregion
//#region src/module/fear-terror/configuration.ts
function Wc() {
	return { launchers: {
		actorSheet: Uc(Hc.actorSheet),
		tokenControls: Uc(Hc.tokenControls)
	} };
}
async function Gc(e) {
	q(K.fearConsole);
	let n = [[Hc.actorSheet, e.launchers.actorSheet], [Hc.tokenControls, e.launchers.tokenControls]];
	for (let [e, r] of n) await game.settings.set(t, e, r);
	ui.notifications.info("Fear Console configuration saved. Reload to update its launchers.");
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var Kc = class extends foundry.applications.api.ApplicationV2 {
	static ACCESS_POLICY = {
		gmOnly: !0,
		name: "Drowsy’s WFRP4e Toolkit application"
	};
	#e;
	static canCurrentUserAccess() {
		return Vc(this.ACCESS_POLICY);
	}
	async render(e) {
		let t = this.constructor;
		return q(t.ACCESS_POLICY), super.render(e);
	}
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-enhanced-fear-terror-root", "tw:[&_*]:box-border", "tw:box-border", "tw:block", "tw:h-full", "tw:max-h-full", "tw:max-w-full", "tw:min-h-0", "tw:overflow-auto", "tw:text-base-content", "tw:w-full"), n.dataset.theme = "wfrp4e-enhanced-fear-terror", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-enhanced-fear-terror-app", "tw:box-border", "tw:min-h-0", "tw:overflow-hidden", "tw:p-0", "tw:relative"), t.replaceChildren(e), this.#e = Uo(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(us()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, qc = class extends Kc {
	static ACCESS_POLICY = K.fearConsole;
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
		return Bc;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: Gc },
			configuration: Wc()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console-configurator/open.ts
async function Jc() {
	let e = new qc();
	return await e.render(!0), e;
}
function Yc() {
	Jc().catch((e) => {
		console.error(`${t} | Failed to open the Fear Console Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/fear-terror/suggestion.ts
function Xc({ fearRating: e, source: t, terrorRating: n }) {
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
function Zc() {
	if (!(typeof canvas > "u" || !canvas)) {
		for (let e of canvas.tokens?.controlled ?? []) if (e.actor) return Qc(e.actor);
	}
}
function Qc(e) {
	let t = $c(e, "CHAT.Terror");
	return Xc({
		fearRating: t === void 0 ? $c(e, "CHAT.Fear") : void 0,
		source: e.name,
		terrorRating: t
	});
}
function $c(e, t) {
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
function el() {
	return nl().map(({ choice: e }) => e);
}
function tl() {
	return nl().map(({ actor: e }) => e);
}
function nl() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user?.targets ?? []) rl(e, t.actor);
	return Array.from(e.values());
}
function rl(e, t) {
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
async function il(e) {
	q(K.fearConsole);
	let t = tl();
	if (t.length === 0) {
		ui.notifications.warn("Target one or more tokens before applying Fear or Terror.");
		return;
	}
	let n = Es(e);
	await Promise.all(t.map((e) => cl(e, n)));
}
async function al(e) {
	q(K.fearConsole);
	let t = Es(e), n = tl(), r = ll(t), i = Os(r, t), a = ul(await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: i }), n);
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
async function ol(e) {
	q(K.fearConsole);
	let t = Es(e), n = As(t);
	await game.clipboard.copyPlainText(n), ui.notifications.info(`${ll(t)} link copied.`);
}
async function sl(e) {
	q(K.fearConsole);
	let t = Es(e), n = ks(ll(t), t), r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
async function cl(e, t) {
	if (t.type === "fear") {
		await e.applyFear(t.rating, t.source);
		return;
	}
	await e.applyTerror(t.rating, t.source);
}
function ll(e) {
	let t = e.type === "fear" ? "CHAT.Fear" : "CHAT.Terror";
	return game.i18n.localize(t);
}
function ul(e, t) {
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
var dl = class extends Kc {
	static ACCESS_POLICY = K.fearConsole;
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
		return hc;
	}
	getVueProps() {
		return {
			actions: {
				applyToSelectedActors: il,
				copyLink: ol,
				getActorChoices: el,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the Fear Console.`, e), ui.notifications.error("The Fear Console completed the action but could not close its window.");
					});
				},
				openConfigurator: Yc,
				postPrompt: al
			},
			initialPayload: this.#e.initialPayload ?? Zc()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console/open.ts
async function fl(e = {}) {
	let t = new dl(e);
	return await t.render(!0), t;
}
function pl(e = {}) {
	fl(e).catch((e) => {
		console.error(`${t} | Failed to open the Fear Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console. See the browser console for details.");
	});
}
//#endregion
//#region src/state/apps/administration-console/store.ts
var ml = ws("administration-console", () => {
	let e = /* @__PURE__ */ A([]), t = /* @__PURE__ */ A(), n = /* @__PURE__ */ A([]), r = /* @__PURE__ */ A(!0), i = /* @__PURE__ */ A("observer"), a = /* @__PURE__ */ A(), o = /* @__PURE__ */ A(), s = /* @__PURE__ */ A(!1), c, l = U(() => e.value.filter(({ selected: e }) => e).map(({ id: e }) => e));
	function u(i, a) {
		c = a, e.value = i.packs.map((e) => ({ ...e })), t.value = i.scene ? { ...i.scene } : void 0, n.value = [...i.spectators], r.value = i.showUnassignedPlayerWarning;
	}
	function d(t) {
		e.value.forEach((e) => e.selected = t);
	}
	async function f() {
		await g(async () => {
			await _().setCompendiumVisibility(l.value, i.value), e.value.forEach((e) => {
				e.selected && (e.visibility = i.value);
			}), o.value = "Compendium visibility updated.";
		});
	}
	async function p(e) {
		await g(async () => {
			await _().setSceneLighting(e), t.value && (t.value.globalLight = e === "global-light", t.value.tokenVision = e === "token-vision"), o.value = "Scene lighting mode updated.";
		});
	}
	async function m() {
		await g(async () => {
			await _().rollD100(), o.value = "d100 rolled to chat.";
		});
	}
	async function h() {
		await g(async () => {
			await _().setUnassignedPlayerWarning(r.value), o.value = "Player warning preference saved.";
		});
	}
	async function g(e) {
		if (!s.value) {
			s.value = !0, a.value = void 0, o.value = void 0;
			try {
				await e();
			} catch (e) {
				a.value = e instanceof Error ? e.message : "The administration action failed.";
			} finally {
				s.value = !1;
			}
		}
	}
	function _() {
		if (!c) throw Error("The Administration Console has not been initialized.");
		return c;
	}
	return {
		applySceneMode: p,
		applyVisibility: f,
		errorMessage: a,
		initialize: u,
		isWorking: s,
		packs: e,
		rollD100: m,
		savePlayerWarning: h,
		scene: t,
		selectedPackIds: l,
		setAllPacks: d,
		showUnassignedPlayerWarning: r,
		spectators: n,
		statusMessage: o,
		visibility: i
	};
}), hl = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, gl = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, _l = { class: "tw:min-w-0 tw:break-words" }, vl = {
	key: 1,
	class: "dui-alert dui-alert-success tw:m-4 tw:mb-0",
	role: "status"
}, yl = { class: "tw:min-w-0 tw:break-words" }, bl = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, xl = /* @__PURE__ */ P({
	__name: "ConsoleFrame",
	props: {
		description: {},
		errorMessage: {},
		icon: {},
		statusMessage: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (L(), R("main", hl, [
			B(Ec, {
				description: e.description,
				icon: e.icon,
				title: e.title
			}, {
				end: M(() => [Nr(t.$slots, "header-end")]),
				_: 3
			}, 8, [
				"description",
				"icon",
				"title"
			]),
			e.errorMessage ? (L(), R("div", gl, [n[0] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", _l, E(e.errorMessage), 1)])) : H("", !0),
			e.statusMessage ? (L(), R("div", vl, [n[1] ||= z("i", {
				class: "fa-solid fa-circle-check",
				"aria-hidden": "true"
			}, null, -1), z("span", yl, E(e.statusMessage), 1)])) : H("", !0),
			z("div", bl, [Nr(t.$slots, "default")]),
			Nr(t.$slots, "footer")
		]));
	}
}), Sl = { class: "tw:grid tw:min-w-0 tw:gap-3" }, Cl = { class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, wl = { class: "dui-card-body tw:gap-3 tw:p-4" }, Tl = { class: "tw:m-0 tw:text-sm" }, El = { class: "tw:flex tw:flex-wrap tw:gap-2" }, Dl = { class: "dui-badge" }, Ol = { class: "dui-badge" }, kl = { class: "tw:flex tw:flex-wrap tw:justify-end tw:gap-2" }, Al = ["disabled"], jl = ["disabled"], Ml = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Nl = { class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, Pl = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Fl = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, Il = { class: "tw:flex tw:gap-2" }, Ll = { class: "tw:max-h-56 tw:overflow-auto tw:rounded-box tw:border tw:border-base-content/15!" }, Rl = ["onUpdate:modelValue"], zl = { class: "tw:min-w-0 tw:flex-1" }, Bl = { class: "tw:block tw:text-sm tw:font-semibold" }, Vl = { class: "tw:block tw:text-xs tw:text-base-content/60!" }, Hl = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-end tw:gap-2" }, Ul = ["disabled"], Wl = { class: "tw:grid tw:gap-3 tw:min-[38rem]:grid-cols-2" }, Gl = { class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, Kl = { class: "dui-card-body tw:gap-2 tw:p-4" }, ql = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Jl = {
	key: 1,
	class: "tw:m-0 tw:text-sm"
}, Yl = { class: "tw:flex tw:items-center tw:gap-2" }, Xl = { class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, Zl = { class: "dui-card-body tw:gap-2 tw:p-4" }, Ql = ["disabled"], $l = /* @__PURE__ */ P({
	__name: "AdministrationConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = ml();
		n.initialize(t.initialization, t.actions);
		let { errorMessage: r, isWorking: i, packs: a, scene: o, selectedPackIds: s, showUnassignedPlayerWarning: c, spectators: l, statusMessage: u, visibility: d } = Ts(n);
		return (e, t) => (L(), oa(xl, {
			description: "Manage Scene lighting, compendium visibility, player assignments, and utility rolls.",
			"error-message": j(r),
			icon: "fa-solid fa-screwdriver-wrench",
			"status-message": j(u),
			title: "Administration Console"
		}, {
			default: M(() => [z("div", Sl, [
				z("section", Cl, [z("div", wl, [t[9] ||= z("h2", { class: "dui-card-title tw:font-serif tw:text-lg" }, "Viewed Scene", -1), j(o) ? (L(), R(I, { key: 0 }, [
					z("p", Tl, E(j(o).name), 1),
					z("div", El, [z("span", Dl, "Token Vision: " + E(j(o).tokenVision ? "on" : "off"), 1), z("span", Ol, "Global light: " + E(j(o).globalLight ? "on" : "off"), 1)]),
					z("div", kl, [z("button", {
						class: "dui-btn dui-btn-sm",
						disabled: j(i),
						type: "button",
						onClick: t[0] ||= (e) => j(n).applySceneMode("token-vision")
					}, " Use Token Vision ", 8, Al), z("button", {
						class: "dui-btn dui-btn-sm",
						disabled: j(i),
						type: "button",
						onClick: t[1] ||= (e) => j(n).applySceneMode("global-light")
					}, " Use global light ", 8, jl)])
				], 64)) : (L(), R("div", Ml, "View a Scene to manage its lighting."))])]),
				z("section", Nl, [z("div", Pl, [
					z("div", Fl, [t[10] ||= z("h2", { class: "dui-card-title tw:font-serif tw:text-lg" }, "Compendium visibility", -1), z("div", Il, [z("button", {
						class: "dui-btn dui-btn-xs",
						type: "button",
						onClick: t[2] ||= (e) => j(n).setAllPacks(!0)
					}, " Select all "), z("button", {
						class: "dui-btn dui-btn-xs",
						type: "button",
						onClick: t[3] ||= (e) => j(n).setAllPacks(!1)
					}, " Clear ")])]),
					z("div", Ll, [(L(!0), R(I, null, F(j(a), (e) => (L(), R("label", {
						key: e.id,
						class: "tw:flex tw:items-start tw:gap-2 tw:border-b tw:border-base-content/10! tw:p-2 last:tw:border-0"
					}, [N(z("input", {
						"onUpdate:modelValue": (t) => e.selected = t,
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 8, Rl), [[G, e.selected]]), z("span", zl, [z("span", Bl, E(e.label), 1), z("span", Vl, E(e.packageName) + " · " + E(e.type) + " · " + E(e.visibility), 1)])]))), 128))]),
					z("div", Hl, [N(z("select", {
						"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ k(d) ? d.value = e : null,
						class: "dui-select dui-select-sm tw:border-base-content/25! tw:bg-base-100!"
					}, [...t[11] ||= [z("option", { value: "observer" }, "Visible to players", -1), z("option", { value: "limited" }, "Hidden from players", -1)]], 512), [[No, j(d)]]), z("button", {
						class: "dui-btn dui-btn-primary dui-btn-sm",
						disabled: j(i) || !j(s).length,
						type: "button",
						onClick: t[5] ||= (...e) => j(n).applyVisibility && j(n).applyVisibility(...e)
					}, " Apply to " + E(j(s).length) + " pack" + E(j(s).length === 1 ? "" : "s"), 9, Ul)])
				])]),
				z("section", Wl, [z("div", Gl, [z("div", Kl, [
					t[13] ||= z("h2", { class: "dui-card-title tw:font-serif tw:text-lg" }, "Player assignments", -1),
					j(l).length ? (L(), R("div", ql, [z("span", null, E(j(l).join(", ")) + " " + E(j(l).length === 1 ? "has" : "have") + " no assigned character.", 1)])) : (L(), R("p", Jl, "Every player has an assigned character.")),
					z("label", Yl, [N(z("input", {
						"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ k(c) ? c.value = e : null,
						class: "dui-toggle dui-toggle-sm",
						type: "checkbox"
					}, null, 512), [[G, j(c)]]), t[12] ||= V(" Warn the GM at startup ", -1)]),
					z("button", {
						class: "dui-btn dui-btn-secondary dui-btn-sm tw:w-fit",
						type: "button",
						onClick: t[7] ||= (...e) => j(n).savePlayerWarning && j(n).savePlayerWarning(...e)
					}, " Save preference ")
				])]), z("div", Xl, [z("div", Zl, [t[15] ||= z("h2", { class: "dui-card-title tw:font-serif tw:text-lg" }, "Utility roll", -1), z("button", {
					class: "dui-btn dui-btn-primary",
					disabled: j(i),
					type: "button",
					onClick: t[8] ||= (...e) => j(n).rollD100 && j(n).rollD100(...e)
				}, [...t[14] ||= [z("i", {
					class: "fa-solid fa-dice-d20",
					"aria-hidden": "true"
				}, null, -1), V(" Roll d100 ", -1)]], 8, Ql)])])])
			])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
}), eu = { showUnassignedPlayerWarning: "showUnassignedPlayerWarning" };
//#endregion
//#region src/module/administration/initialization.ts
function tu() {
	let e = game, n = e.scenes.viewed;
	return {
		packs: Array.from(e.packs).filter(({ metadata: e }) => e.system === "wfrp4e").map((e) => ({
			id: e.collection,
			label: e.metadata.label || e.collection,
			packageName: e.metadata.packageName,
			selected: !1,
			type: e.metadata.type,
			visibility: e.ownership.PLAYER === "OBSERVER" ? "observer" : "limited"
		})).sort((e, t) => e.label.localeCompare(t.label)),
		...n ? { scene: {
			globalLight: n.environment.globalLight.enabled,
			id: n.id,
			name: n.name,
			tokenVision: n.tokenVision
		} } : {},
		spectators: Array.from(e.users).filter((e) => !e.isGM && e.active !== !1 && !e.character).map(({ name: e }) => e).sort(),
		showUnassignedPlayerWarning: game.settings.get(t, eu.showUnassignedPlayerWarning) === !0
	};
}
//#endregion
//#region src/module/administration/service.ts
async function nu(e) {
	q(K.administrationConsole);
	let t = game.scenes.viewed;
	if (!t) throw Error("View a Scene before changing its lighting mode.");
	await t.update({
		"environment.globalLight.enabled": e === "global-light",
		tokenVision: e === "token-vision"
	}), ui.notifications.info(`${t.name} now uses ${e === "global-light" ? "global illumination" : "Token Vision"}.`);
}
async function ru(e, t) {
	q(K.administrationConsole);
	let n = game, r = new Set(e);
	if (r.size === 0) throw Error("Select at least one compendium pack.");
	let i = {
		ASSISTANT: "OWNER",
		GAMEMASTER: "OWNER",
		PLAYER: t === "observer" ? "OBSERVER" : "LIMITED",
		TRUSTED: t === "observer" ? "OBSERVER" : "LIMITED"
	}, a = 0;
	for (let e of n.packs) r.has(e.collection) && (await e.configure({ ownership: i }), a += 1);
	if (a !== r.size) throw Error("One or more selected compendium packs are unavailable.");
	ui.notifications.info(`${a} compendium pack${a === 1 ? "" : "s"} updated.`);
}
async function iu() {
	q(K.administrationConsole);
	let e = new Roll("1d100");
	await e.evaluate(), await e.toMessage({ flavor: "d100" });
}
async function au(e) {
	q(K.administrationConsole), await game.settings.set(t, eu.showUnassignedPlayerWarning, e), ui.notifications.info(`Unassigned-player warning ${e ? "enabled" : "disabled"}.`);
}
//#endregion
//#region src/module/apps/administration-console/AdministrationConsoleApplication.ts
var ou = class extends Kc {
	static ACCESS_POLICY = K.administrationConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-administration-console`],
		id: `${t}-administration-console`,
		position: {
			height: 760,
			width: 760
		},
		window: {
			icon: "fa-solid fa-screwdriver-wrench",
			resizable: !0,
			title: `${n} — Administration Console`
		}
	};
	getVueComponent() {
		return $l;
	}
	getVueProps() {
		return {
			actions: {
				rollD100: iu,
				setCompendiumVisibility: ru,
				setSceneLighting: nu,
				setUnassignedPlayerWarning: au
			},
			initialization: tu()
		};
	}
};
//#endregion
//#region src/module/apps/administration-console/open.ts
async function su() {
	let e = new ou();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/combat-console/store.ts
var cu = ws("combat-console", () => {
	let e = /* @__PURE__ */ A([]), t = /* @__PURE__ */ A(), n = /* @__PURE__ */ A(1), r = /* @__PURE__ */ A(!0), i = /* @__PURE__ */ A(!0), a = /* @__PURE__ */ A(!1), o = /* @__PURE__ */ A(""), s, c = U(() => e.value.filter((e) => e.selected).map((e) => e.uuid));
	function l(n, r) {
		e.value = structuredClone(n.actors), t.value = structuredClone(n.settings), s = r;
	}
	async function u(e) {
		await p(() => m().adjustAdvantage({
			amount: n.value,
			mode: e,
			uuids: c.value
		}));
	}
	async function d() {
		await p(() => m().checkConditions({
			endOfRoundOnly: r.value,
			skipPlayerCharacters: i.value,
			uuids: c.value
		}));
	}
	async function f() {
		await p(() => m().saveSettings(h()));
	}
	async function p(e) {
		a.value = !0, o.value = "";
		try {
			await e();
		} catch (e) {
			o.value = e instanceof Error ? e.message : "The action could not be completed.";
		} finally {
			a.value = !1;
		}
	}
	function m() {
		if (!s) throw Error("The Combat Console has not been initialized.");
		return s;
	}
	function h() {
		if (!t.value) throw Error("The Combat Console has not been initialized.");
		return t.value;
	}
	return {
		actors: e,
		amount: n,
		busy: a,
		check: d,
		adjust: u,
		endOfRoundOnly: r,
		errorMessage: o,
		initialize: l,
		save: f,
		settings: t,
		skipPlayerCharacters: i
	};
}), lu = { class: "tw:grid tw:gap-4" }, uu = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, du = { class: "dui-card dui-card-border tw:bg-base-100!" }, fu = { class: "dui-card-body tw:gap-3 tw:p-4" }, pu = { class: "tw:grid tw:max-h-48 tw:grid-cols-2 tw:gap-2 tw:overflow-auto" }, mu = ["onUpdate:modelValue"], hu = { class: "dui-card dui-card-border tw:bg-base-100!" }, gu = { class: "dui-card-body tw:gap-3 tw:p-4" }, _u = { class: "tw:flex tw:items-center tw:gap-3" }, vu = { class: "tw:flex tw:flex-wrap tw:gap-2" }, yu = ["disabled"], bu = ["disabled"], xu = ["disabled"], Su = { class: "dui-card dui-card-border tw:bg-base-100!" }, Cu = { class: "dui-card-body tw:gap-3 tw:p-4" }, wu = { class: "tw:flex tw:items-center tw:gap-2" }, Tu = { class: "tw:flex tw:items-center tw:gap-2" }, Eu = ["disabled"], Du = {
	key: 1,
	class: "dui-collapse dui-collapse-arrow dui-card dui-card-border tw:bg-base-100!"
}, Ou = { class: "dui-collapse-content tw:grid tw:gap-2" }, ku = { class: "tw:flex tw:items-center tw:gap-2" }, Au = { class: "tw:flex tw:items-center tw:gap-2" }, ju = { class: "tw:flex tw:items-center tw:gap-2" }, Mu = { class: "tw:flex tw:items-center tw:gap-2" }, Nu = { class: "tw:flex tw:items-center tw:gap-2" }, Pu = { class: "tw:flex tw:items-center tw:gap-2" }, Fu = { class: "tw:flex tw:items-center tw:gap-2" }, Iu = ["disabled"], Lu = /* @__PURE__ */ P({
	__name: "CombatConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = cu();
		n.initialize(t.initialization, t.actions);
		let { actors: r, amount: i, busy: a, endOfRoundOnly: o, errorMessage: s, settings: c, skipPlayerCharacters: l } = Ts(n);
		return (e, t) => (L(), oa(xl, {
			description: "Manage Advantage and resolve supported end-of-round conditions.",
			icon: "fa-solid fa-swords",
			title: "Combat Console"
		}, {
			default: M(() => [z("div", lu, [
				j(s) ? (L(), R("p", uu, E(j(s)), 1)) : H("", !0),
				z("section", du, [z("div", fu, [t[15] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Actors", -1), z("div", pu, [(L(!0), R(I, null, F(j(r), (e) => (L(), R("label", {
					key: e.uuid,
					class: "tw:flex tw:items-center tw:gap-2"
				}, [N(z("input", {
					"onUpdate:modelValue": (t) => e.selected = t,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 8, mu), [[G, e.selected]]), z("span", null, E(e.label), 1)]))), 128))])])]),
				z("section", hu, [z("div", gu, [
					t[17] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Advantage", -1),
					z("label", _u, [t[16] ||= z("span", null, "Amount", -1), N(z("input", {
						"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ k(i) ? i.value = e : null,
						class: "dui-input dui-input-sm tw:w-24",
						min: "1",
						type: "number"
					}, null, 512), [[
						W,
						j(i),
						void 0,
						{ number: !0 }
					]])]),
					z("div", vu, [
						z("button", {
							class: "dui-btn dui-btn-primary dui-btn-sm",
							disabled: j(a),
							type: "button",
							onClick: t[1] ||= (e) => j(n).adjust("add")
						}, " Add ", 8, yu),
						z("button", {
							class: "dui-btn dui-btn-secondary dui-btn-sm",
							disabled: j(a),
							type: "button",
							onClick: t[2] ||= (e) => j(n).adjust("reduce")
						}, " Reduce ", 8, bu),
						z("button", {
							class: "dui-btn dui-btn-outline dui-btn-sm",
							disabled: j(a),
							type: "button",
							onClick: t[3] ||= (e) => j(n).adjust("clear")
						}, " Clear ", 8, xu)
					])
				])]),
				z("section", Su, [z("div", Cu, [
					t[20] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Condition checks", -1),
					t[21] ||= z("p", { class: "tw:m-0 tw:text-sm" }, " Handles Surprised, Ablaze, Poisoned, and Broken using WFRP4e operations. ", -1),
					z("label", wu, [N(z("input", {
						"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ k(o) ? o.value = e : null,
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[G, j(o)]]), t[18] ||= V(" Require end of round", -1)]),
					z("label", Tu, [N(z("input", {
						"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ k(l) ? l.value = e : null,
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[G, j(l)]]), t[19] ||= V(" Skip assigned player characters", -1)]),
					z("button", {
						class: "dui-btn dui-btn-primary dui-btn-sm tw:w-fit",
						disabled: j(a),
						type: "button",
						onClick: t[6] ||= (...e) => j(n).check && j(n).check(...e)
					}, " Run checks ", 8, Eu)
				])]),
				j(c) ? (L(), R("section", Du, [
					t[29] ||= z("input", { type: "checkbox" }, null, -1),
					t[30] ||= z("div", { class: "dui-collapse-title tw:font-semibold" }, "Advantage automation", -1),
					z("div", Ou, [
						z("label", ku, [N(z("input", {
							"onUpdate:modelValue": t[7] ||= (e) => j(c).automateOpposed = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, j(c).automateOpposed]]), t[22] ||= V(" Opposed-test winners and losers", -1)]),
						z("label", Au, [N(z("input", {
							"onUpdate:modelValue": t[8] ||= (e) => j(c).automateDamage = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, j(c).automateDamage]]), t[23] ||= V(" Outmanoeuvring damage", -1)]),
						z("label", ju, [N(z("input", {
							"onUpdate:modelValue": t[9] ||= (e) => j(c).automateCondition = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, j(c).automateCondition]]), t[24] ||= V(" Clear on combat conditions", -1)]),
						z("label", Mu, [N(z("input", {
							"onUpdate:modelValue": t[10] ||= (e) => j(c).clearOnJoin = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, j(c).clearOnJoin]]), t[25] ||= V(" Clear when joining combat", -1)]),
						z("label", Nu, [N(z("input", {
							"onUpdate:modelValue": t[11] ||= (e) => j(c).clearOnLeave = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, j(c).clearOnLeave]]), t[26] ||= V(" Clear when leaving combat", -1)]),
						z("label", Pu, [N(z("input", {
							"onUpdate:modelValue": t[12] ||= (e) => j(c).promptMomentumLoss = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, j(c).promptMomentumLoss]]), t[27] ||= V(" Prompt for momentum loss each round", -1)]),
						z("label", Fu, [N(z("input", {
							"onUpdate:modelValue": t[13] ||= (e) => j(c).persistentNotifications = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, j(c).persistentNotifications]]), t[28] ||= V(" Keep automation notifications visible", -1)]),
						z("button", {
							class: "dui-btn dui-btn-secondary dui-btn-sm tw:w-fit",
							disabled: j(a),
							type: "button",
							onClick: t[14] ||= (...e) => j(n).save && j(n).save(...e)
						}, " Save automation ", 8, Iu)
					])
				])) : H("", !0)
			])]),
			_: 1
		}));
	}
});
//#endregion
//#region src/functions/actors/selection.ts
function Ru(e) {
	let t = new Set(e.targeted.map(({ actor: e }) => e.id)), n = new Set(e.controlled.map(({ actor: e }) => e.id)), r = e.actors.filter((t) => Bu(t, e.includeVehicles)).map((r) => ({
		actorType: r.actorType,
		label: r.label,
		selected: Vu(r.id, r.hasPlayerOwner, e.initial, e.assignedActorIds, n, t),
		source: e.assignedActorIds.has(r.id) ? "assigned" : r.hasPlayerOwner ? "owned" : "world",
		uuid: r.uuid
	}));
	return zu(r, e.targeted, "targeted", e), zu(r, e.controlled, "controlled", e), r.sort((e, t) => e.label.localeCompare(t.label));
}
function zu(e, t, n, r) {
	for (let i of t) {
		if (!Bu(i.actor, r.includeVehicles)) continue;
		let t = e.find((e) => e.uuid === i.actor.uuid || e.uuid === i.tokenUuid);
		if (t) {
			n === r.initial && (t.selected = !0);
			continue;
		}
		e.push({
			actorType: i.actor.actorType,
			label: i.actor.label,
			selected: n === r.initial,
			source: n,
			uuid: i.tokenUuid
		});
	}
}
function Bu(e, t) {
	return e.actorType === "character" || e.actorType === "creature" || t && e.actorType === "vehicle";
}
function Vu(e, t, n, r, i, a) {
	return n === "party" ? r.has(e) : n === "company" ? r.has(e) || t : n === "controlled" ? i.has(e) : a.has(e);
}
//#endregion
//#region src/module/actors/selection.ts
function Hu(e = {}) {
	let t = e.initial ?? "targeted", n = Array.from(game.actors), r = new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => !!e)), i = Wu("targeted"), a = Wu("controlled");
	return Ru({
		actors: n.map(Gu),
		assignedActorIds: r,
		controlled: a.flatMap(Ku),
		includeVehicles: e.includeVehicles === !0,
		initial: t,
		targeted: i.flatMap(Ku)
	});
}
async function Uu(e) {
	let t = [];
	for (let n of [...new Set(e)]) {
		let e = await fromUuid(n), r = e && "actor" in e ? e.actor : e;
		r && "documentName" in r && r.documentName === "Actor" && t.push(r);
	}
	return t;
}
function Wu(e) {
	let t = canvas;
	return e === "controlled" ? t?.tokens?.controlled ?? [] : Array.from(game.user?.targets ?? /* @__PURE__ */ new Set());
}
function Gu(e) {
	return {
		actorType: e.type,
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		label: e.name,
		uuid: e.uuid
	};
}
function Ku(e) {
	return e.actor ? [{
		actor: Gu(e.actor),
		tokenUuid: e.document.uuid
	}] : [];
}
//#endregion
//#region src/module/combat/advantage.ts
async function qu(e) {
	if (q(K.combatConsole), e.uuids.length === 0) throw Error("Select at least one actor.");
	if (!Number.isFinite(e.amount)) throw Error("Enter a valid Advantage amount.");
	let t = Math.max(1, Math.round(Math.abs(e.amount))), n = await Uu(e.uuids), r = n.filter((e) => e.inCombat !== !0);
	if (e.mode !== "clear" && r.length > 0) throw Error(`Advantage can only be added or reduced in combat: ${r.map(({ name: e }) => e).join(", ")}.`);
	for (let r of n) e.mode === "clear" ? await Yu(r, 0) : e.mode === "add" ? await Ju(r, t) : await Ju(r, -t);
	ui.notifications.info(`Updated Advantage for ${n.length} actor${n.length === 1 ? "" : "s"}.`);
}
async function Ju(e, t) {
	if (typeof e.addAdvantage != "function") throw Error(`${e.name} does not expose WFRP4e Advantage controls.`);
	await e.addAdvantage(t);
}
async function Yu(e, t) {
	let n = Math.max(0, Math.round(t));
	if (typeof e.setAdvantage != "function") throw Error(`${e.name} does not expose WFRP4e Advantage controls.`);
	await e.setAdvantage(n);
}
function Xu(e) {
	if (!e || typeof e != "object") return;
	let t = e;
	return t.documentName === "Actor" ? t : void 0;
}
//#endregion
//#region src/module/combat/conditions.ts
async function Zu(e) {
	if (q(K.combatConsole), e.endOfRoundOnly && !ed()) throw Error("Condition checks can only run at the end of the active combat round.");
	let t = await Uu(e.uuids), n = new Set(Array.from(game.users).map((e) => e.character?.id)), r = 0;
	for (let i of t) if (!(e.skipPlayerCharacters && n.has(i.id))) for (let e of Array.from(i.statuses ?? [])) await Qu(i, e) && (r += 1);
	ui.notifications.info(`Processed ${r} supported condition check${r === 1 ? "" : "s"}.`);
}
async function Qu(e, t) {
	let n = Math.max(1, Number(e.hasCondition(t)?.conditionValue ?? 1));
	if (t === "surprised") return await e.removeCondition(t), !0;
	if (t === "ablaze") {
		let t = await new Roll(`1d10 + ${n} - 1`).evaluate();
		return await e.applyBasicDamage(Number(t.total ?? n), {}), !0;
	}
	if (e.type === "vehicle" || !["broken", "poisoned"].includes(t)) return !1;
	let r = await (await $u(e, t === "broken" ? game.i18n.localize("NAME.Cool") : game.i18n.localize("NAME.Endurance"), t === "broken" ? "wp" : "t")).roll();
	if (r.succeeded) {
		let i = Math.min(n, Math.max(1, Number(r.result?.SL ?? 0) + 1));
		await e.removeCondition(t, i);
	}
	return !0;
}
async function $u(e, t, n) {
	let r = {
		appendTitle: ` — ${e.name}`,
		fields: {
			difficulty: "challenging",
			rollMode: "gmroll"
		},
		skipDialog: !0,
		skipTargets: !0
	}, i = e.has(t, "skill");
	return i ? e.setupSkill(i, r) : e.setupCharacteristic(n, r);
}
function ed() {
	let e = game.combat;
	return !!(e?.active && Number(e.round) > 0 && Number(e.current?.turn) === (e.turns?.length ?? 0) - 1);
}
//#endregion
//#region src/module/combat/settings/keys.ts
var td = {
	automateCondition: "advantageAutomateCondition",
	automateDamage: "advantageAutomateDamage",
	automateOpposed: "advantageAutomateOpposed",
	clearOnJoin: "advantageClearOnJoin",
	clearOnLeave: "advantageClearOnLeave",
	promptMomentumLoss: "advantagePromptMomentumLoss",
	persistentNotifications: "advantagePersistentNotifications"
};
//#endregion
//#region src/module/combat/settings/load.ts
function nd() {
	return {
		automateCondition: id(td.automateCondition),
		automateDamage: id(td.automateDamage),
		automateOpposed: id(td.automateOpposed),
		clearOnJoin: id(td.clearOnJoin),
		clearOnLeave: id(td.clearOnLeave),
		promptMomentumLoss: id(td.promptMomentumLoss),
		persistentNotifications: id(td.persistentNotifications)
	};
}
async function rd(e) {
	for (let [n, r] of Object.entries(e)) await game.settings.set(t, td[n], r);
}
function id(e) {
	return game.settings.get(t, e) === !0;
}
//#endregion
//#region src/module/combat/initialization.ts
function ad() {
	return {
		actors: Hu({
			includeVehicles: !0,
			initial: "controlled"
		}),
		settings: nd()
	};
}
//#endregion
//#region src/module/apps/combat-console/CombatConsoleApplication.ts
var od = class extends Kc {
	static ACCESS_POLICY = K.combatConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: "wfrp4e-drowsys-toolkit-combat-console",
		position: {
			height: 720,
			width: 620
		},
		window: {
			icon: "fa-solid fa-swords",
			resizable: !0,
			title: `${n} — Combat Console`
		}
	};
	getVueComponent() {
		return Lu;
	}
	getVueProps() {
		return {
			actions: {
				adjustAdvantage: qu,
				checkConditions: Zu,
				saveSettings: rd
			},
			initialization: ad()
		};
	}
};
//#endregion
//#region src/module/apps/combat-console/open.ts
async function sd() {
	let e = new od();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/damage-console/store.ts
var cd = ws("damage-console", () => {
	let e = /* @__PURE__ */ A([]), t = /* @__PURE__ */ A([]), n = /* @__PURE__ */ A("1d10"), r = /* @__PURE__ */ A("body"), i = /* @__PURE__ */ A(!0), a = /* @__PURE__ */ A("normal"), o = /* @__PURE__ */ A(!0), s = /* @__PURE__ */ A(!1), c = /* @__PURE__ */ A(!1), l = /* @__PURE__ */ A(""), u, d = U(() => e.value.filter((e) => e.selected).map((e) => e.uuid));
	function f(n, r) {
		e.value = structuredClone(n.actors), t.value = n.hitLocations, u = r;
	}
	async function p() {
		c.value = !0, l.value = "";
		try {
			await m().applyDamage({
				formula: n.value,
				hitLocation: r.value,
				minimumOne: i.value,
				protection: a.value,
				randomizeDamage: o.value,
				randomizeHitLocation: s.value,
				uuids: d.value
			});
		} catch (e) {
			l.value = e instanceof Error ? e.message : "Damage could not be applied.";
		} finally {
			c.value = !1;
		}
	}
	function m() {
		if (!u) throw Error("The Damage Console has not been initialized.");
		return u;
	}
	return {
		actors: e,
		apply: p,
		busy: c,
		errorMessage: l,
		formula: n,
		hitLocation: r,
		hitLocations: t,
		initialize: f,
		minimumOne: i,
		protection: a,
		randomizeDamage: o,
		randomizeHitLocation: s
	};
}), ld = { class: "tw:grid tw:gap-4" }, ud = { class: "dui-card dui-card-border tw:bg-base-100!" }, dd = { class: "dui-card-body tw:p-4" }, fd = { class: "tw:grid tw:max-h-52 tw:grid-cols-2 tw:gap-2 tw:overflow-auto" }, pd = ["onUpdate:modelValue"], md = { class: "dui-card dui-card-border tw:bg-base-100!" }, hd = { class: "dui-card-body tw:grid tw:gap-3 tw:p-4" }, gd = { class: "tw:grid tw:gap-1" }, _d = { class: "tw:flex tw:items-center tw:gap-2" }, vd = { class: "tw:grid tw:gap-1" }, yd = ["value"], bd = { class: "tw:flex tw:items-center tw:gap-2" }, xd = { class: "tw:grid tw:gap-1" }, Sd = { class: "tw:flex tw:items-center tw:gap-2" }, Cd = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, wd = ["disabled"], Td = /* @__PURE__ */ P({
	__name: "DamageConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = cd();
		n.initialize(t.initialization, t.actions);
		let { actors: r, busy: i, errorMessage: a, formula: o, hitLocation: s, hitLocations: c, minimumOne: l, protection: u, randomizeDamage: d, randomizeHitLocation: f } = Ts(n);
		return (e, t) => (L(), oa(xl, {
			description: "Apply WFRP4e damage to several actors at once.",
			icon: "fa-solid fa-bolt",
			title: "Damage Console"
		}, {
			default: M(() => [z("div", ld, [z("section", ud, [z("div", dd, [t[7] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Recipients", -1), z("div", fd, [(L(!0), R(I, null, F(j(r), (e) => (L(), R("label", {
				key: e.uuid,
				class: "tw:flex tw:items-center tw:gap-2"
			}, [N(z("input", {
				"onUpdate:modelValue": (t) => e.selected = t,
				class: "dui-checkbox dui-checkbox-sm",
				type: "checkbox"
			}, null, 8, pd), [[G, e.selected]]), V(E(e.label), 1)]))), 128))])])]), z("section", md, [z("div", hd, [
				z("label", gd, [t[8] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Damage amount or formula", -1), N(z("input", {
					"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ k(o) ? o.value = e : null,
					class: "dui-input"
				}, null, 512), [[W, j(o)]])]),
				z("label", _d, [N(z("input", {
					"onUpdate:modelValue": t[1] ||= (e) => /* @__PURE__ */ k(d) ? d.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, j(d)]]), t[9] ||= V(" Roll separately for each actor", -1)]),
				z("label", vd, [t[11] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Hit location", -1), N(z("select", {
					"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ k(s) ? s.value = e : null,
					class: "dui-select"
				}, [t[10] ||= z("option", { value: "roll" }, "Roll", -1), (L(!0), R(I, null, F(j(c), (e) => (L(), R("option", {
					key: e.value,
					value: e.value
				}, E(e.label), 9, yd))), 128))], 512), [[No, j(s)]])]),
				z("label", bd, [N(z("input", {
					"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ k(f) ? f.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, j(f)]]), t[12] ||= V(" Roll separately for each actor", -1)]),
				z("label", xd, [t[14] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Protection", -1), N(z("select", {
					"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ k(u) ? u.value = e : null,
					class: "dui-select"
				}, [...t[13] ||= [
					z("option", { value: "normal" }, "Armour and Toughness", -1),
					z("option", { value: "ignore-armour" }, "Ignore armour", -1),
					z("option", { value: "ignore-toughness" }, "Ignore Toughness", -1),
					z("option", { value: "ignore-all" }, "Ignore both", -1)
				]], 512), [[No, j(u)]])]),
				z("label", Sd, [N(z("input", {
					"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ k(l) ? l.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, j(l)]]), t[15] ||= V(" Inflict at least 1 Wound", -1)]),
				j(a) ? (L(), R("p", Cd, E(j(a)), 1)) : H("", !0),
				z("button", {
					class: "dui-btn dui-btn-primary",
					disabled: j(i),
					type: "button",
					onClick: t[6] ||= (...e) => j(n).apply && j(n).apply(...e)
				}, " Apply damage ", 8, wd)
			])])])]),
			_: 1
		}));
	}
});
//#endregion
//#region src/module/damage/initialization.ts
function Ed() {
	let e = game.wfrp4e.config.locations ?? {};
	return {
		actors: Hu({
			includeVehicles: !0,
			initial: "targeted"
		}),
		hitLocations: [{
			label: "Body / default",
			value: "body"
		}, ...Object.entries(e).map(([e, t]) => ({
			label: game.i18n.localize(t),
			value: e
		}))].filter((e, t, n) => n.findIndex((t) => t.value === e.value) === t)
	};
}
//#endregion
//#region src/functions/damage/plan.ts
function Dd(e) {
	let t = e.formula.trim();
	if (e.uuids.length === 0) throw Error("Select at least one actor.");
	if (!t) throw Error("Enter a damage amount or roll formula.");
	return {
		formula: t,
		location: e.hitLocation || "body",
		rollDamagePerActor: e.randomizeDamage,
		rollLocationPerActor: e.hitLocation === "roll" && e.randomizeHitLocation,
		uuids: [...new Set(e.uuids)]
	};
}
function Od(e, t) {
	let n = Number(e);
	if (!Number.isFinite(n)) throw Error(`Could not evaluate damage formula “${t}”.`);
	let r = Math.round(n);
	if (r < 0) throw Error("Damage cannot be negative.");
	return r;
}
function kd(e, t) {
	return e === "roll" ? t || "body" : e || "body";
}
function Ad(e) {
	return {
		"ignore-all": "IGNORE_ALL",
		"ignore-armour": "IGNORE_AP",
		"ignore-toughness": "IGNORE_TB",
		normal: "NORMAL"
	}[e];
}
function jd(e) {
	if (e.message) return e.message;
	let t = Nd(e.actorName);
	return e.error ? `<p><strong>${t}</strong>: failed — ${Nd(e.error)}</p>` : `<p><strong>${t}</strong>: ${e.damage ?? 0} damage applied.</p>`;
}
function Md(e, t) {
	return `Damage was applied to ${e} actor${e === 1 ? "" : "s"}; ${t} failed. See the private chat summary.`;
}
function Nd(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/module/damage/service.ts
async function Pd(e) {
	q(K.damageConsole);
	let t = Dd(e), n = await Uu(t.uuids);
	if (n.length === 0) throw Error("None of the selected actors are available.");
	let r = t.rollDamagePerActor ? void 0 : await Fd(t.formula), i = t.rollLocationPerActor ? void 0 : kd(t.location, await Id(t.location)), a = [], o = [];
	for (let s of n) try {
		let n = r ?? await Fd(t.formula), o = i ?? await Ld(s), c = await s.applyBasicDamage(n, {
			damageType: zd(e.protection),
			loc: o,
			minimumOne: e.minimumOne,
			suppressMsg: !0
		});
		a.push(typeof c == "string" ? c : jd({
			actorName: s.name,
			damage: n
		}));
	} catch (e) {
		let t = e instanceof Error ? e.message : "unknown error";
		o.push(jd({
			actorName: s.name,
			error: t
		}));
	}
	let s = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id);
	if (await ChatMessage.create({
		content: [...a, ...o].join("<hr>"),
		whisper: s
	}), o.length > 0) throw Error(Md(a.length, o.length));
}
async function Fd(e) {
	return Od((await new Roll(e).evaluate()).total, e);
}
async function Id(e) {
	return e === "roll" ? Rd("hitloc") : void 0;
}
async function Ld(e) {
	return Rd(e.system.details?.hitLocationTable?.value ?? "hitloc");
}
async function Rd(e) {
	let t = await game.wfrp4e.tables.rollTable(e, { hideDSN: !0 });
	return String(t.result ?? "body");
}
function zd(e) {
	return game.wfrp4e.config.DAMAGE_TYPE[Ad(e)];
}
//#endregion
//#region src/module/apps/damage-console/DamageConsoleApplication.ts
var Bd = class extends Kc {
	static ACCESS_POLICY = K.damageConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: "wfrp4e-drowsys-toolkit-damage-console",
		position: {
			height: 720,
			width: 620
		},
		window: {
			icon: "fa-solid fa-bolt",
			resizable: !0,
			title: `${n} — Damage Console`
		}
	};
	getVueComponent() {
		return Td;
	}
	getVueProps() {
		return {
			actions: { applyDamage: Pd },
			initialization: Ed()
		};
	}
};
//#endregion
//#region src/module/apps/damage-console/open.ts
async function Vd() {
	let e = new Bd();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/dark-whispers-console/store.ts
var Hd = ws("dark-whispers-console", () => {
	let e = /* @__PURE__ */ A([]), t = /* @__PURE__ */ A([]), n = /* @__PURE__ */ A(), r = /* @__PURE__ */ A(""), i = /* @__PURE__ */ A(!1), a = /* @__PURE__ */ A(!1), o = /* @__PURE__ */ A(""), s, c = U(() => t.value.filter((e) => e.corruption > 0));
	function l(r, i) {
		e.value = structuredClone(r.prompts), t.value = structuredClone(r.recipients), n.value = structuredClone(r.settings), s = i, u();
	}
	function u() {
		e.value.length && (r.value = e.value[Math.floor(Math.random() * e.value.length)]?.text ?? "");
	}
	function d() {
		e.value.push({
			id: crypto.randomUUID(),
			text: ""
		});
	}
	function f(t) {
		e.value = e.value.filter((e) => e.id !== t);
	}
	async function p() {
		await h(() => g().send({
			message: r.value,
			recipientUuids: t.value.filter((e) => e.selected).map((e) => e.uuid),
			sendToOwners: i.value
		}));
	}
	async function m() {
		await h(() => g().save(e.value, _()));
	}
	async function h(e) {
		a.value = !0, o.value = "";
		try {
			await e();
		} catch (e) {
			o.value = e instanceof Error ? e.message : "The action could not be completed.";
		} finally {
			a.value = !1;
		}
	}
	function g() {
		if (!s) throw Error("The Dark Whispers Console has not been initialized.");
		return s;
	}
	function _() {
		if (!n.value) throw Error("The Dark Whispers Console has not been initialized.");
		return n.value;
	}
	return {
		addPrompt: d,
		busy: a,
		chooseRandom: u,
		eligibleRecipients: c,
		errorMessage: o,
		initialize: l,
		message: r,
		prompts: e,
		recipients: t,
		removePrompt: f,
		save: m,
		send: p,
		sendToOwners: i,
		settings: n
	};
}), Ud = {
	key: 0,
	class: "tw:grid tw:gap-4"
}, Wd = { class: "dui-card dui-card-border tw:bg-base-100!" }, Gd = { class: "dui-card-body tw:p-4" }, Kd = { class: "tw:grid tw:gap-2" }, qd = ["onUpdate:modelValue"], Jd = { class: "tw:flex-1" }, Yd = { class: "tw:block" }, Xd = { class: "tw:flex tw:items-center tw:gap-2" }, Zd = { class: "tw:grid tw:gap-1" }, Qd = { class: "dui-card dui-card-border tw:bg-base-100!" }, $d = { class: "dui-card-body tw:grid tw:gap-3 tw:p-4" }, ef = { class: "tw:grid tw:gap-1" }, tf = { class: "tw:grid tw:gap-1" }, nf = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, rf = ["disabled"], af = { class: "dui-collapse dui-collapse-arrow dui-card dui-card-border tw:bg-base-100!" }, of = { class: "dui-collapse-content tw:grid tw:gap-2" }, sf = ["onUpdate:modelValue"], cf = ["onClick"], lf = { class: "tw:flex tw:gap-2" }, uf = ["disabled"], df = /* @__PURE__ */ P({
	__name: "DarkWhispersConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Hd();
		n.initialize(t.initialization, t.actions);
		let { busy: r, eligibleRecipients: i, errorMessage: a, message: o, prompts: s, sendToOwners: c, settings: l } = Ts(n);
		return (e, t) => (L(), oa(xl, {
			description: "Send a private temptation to characters with Corruption.",
			icon: "fa-solid fa-comment-dots",
			title: "Dark Whispers"
		}, {
			default: M(() => [j(l) ? (L(), R("div", Ud, [
				z("section", Wd, [z("div", Gd, [
					t[11] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Recipients", -1),
					z("div", Kd, [(L(!0), R(I, null, F(j(i), (e) => (L(), R("label", {
						key: e.uuid,
						class: "tw:flex tw:items-center tw:gap-2"
					}, [N(z("input", {
						"onUpdate:modelValue": (t) => e.selected = t,
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 8, qd), [[G, e.selected]]), z("span", Jd, [z("strong", null, E(e.label), 1), z("small", Yd, E(e.assignedUser || "Not assigned") + " · " + E(e.ownerCount) + " owner" + E(e.ownerCount === 1 ? "" : "s") + " · Corruption " + E(e.corruption) + " / " + E(e.corruptionMax), 1)])]))), 128))]),
					z("label", Xd, [N(z("input", {
						"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ k(c) ? c.value = e : null,
						class: "dui-toggle dui-toggle-sm",
						type: "checkbox"
					}, null, 512), [[G, j(c)]]), t[8] ||= V(" Send to all owners instead of only the assigned player", -1)]),
					z("label", Zd, [t[10] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Initial recipient group", -1), N(z("select", {
						"onUpdate:modelValue": t[1] ||= (e) => j(l).defaultGroup = e,
						class: "dui-select dui-select-sm"
					}, [...t[9] ||= [z("option", { value: "party" }, "Assigned party", -1), z("option", { value: "company" }, "All player-owned characters", -1)]], 512), [[No, j(l).defaultGroup]])])
				])]),
				z("section", Qd, [z("div", $d, [
					z("label", ef, [t[12] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Whisper", -1), N(z("textarea", {
						"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ k(o) ? o.value = e : null,
						class: "dui-textarea",
						rows: "5"
					}, null, 512), [[W, j(o)]])]),
					z("button", {
						class: "dui-btn dui-btn-outline dui-btn-sm tw:w-fit",
						type: "button",
						onClick: t[3] ||= (...e) => j(n).chooseRandom && j(n).chooseRandom(...e)
					}, " Choose another prompt"),
					z("label", tf, [t[14] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Presentation", -1), N(z("select", {
						"onUpdate:modelValue": t[4] ||= (e) => j(l).messageStyle = e,
						class: "dui-select dui-select-sm"
					}, [...t[13] ||= [
						z("option", { value: "taunt" }, "Taunting whisper", -1),
						z("option", { value: "offer" }, "Tempting offer", -1),
						z("option", { value: "plain" }, "Plain message", -1)
					]], 512), [[No, j(l).messageStyle]])]),
					j(a) ? (L(), R("p", nf, E(j(a)), 1)) : H("", !0),
					z("button", {
						class: "dui-btn dui-btn-primary",
						disabled: j(r),
						type: "button",
						onClick: t[5] ||= (...e) => j(n).send && j(n).send(...e)
					}, " Send Dark Whisper ", 8, rf)
				])]),
				z("section", af, [
					t[16] ||= z("input", { type: "checkbox" }, null, -1),
					t[17] ||= z("div", { class: "dui-collapse-title tw:font-semibold" }, "Prompt library", -1),
					z("div", of, [(L(!0), R(I, null, F(j(s), (e) => (L(), R("div", {
						key: e.id,
						class: "tw:flex tw:gap-2"
					}, [N(z("textarea", {
						"onUpdate:modelValue": (t) => e.text = t,
						class: "dui-textarea tw:flex-1",
						rows: "2"
					}, null, 8, sf), [[W, e.text]]), z("button", {
						class: "dui-btn dui-btn-ghost dui-btn-sm",
						type: "button",
						onClick: (t) => j(n).removePrompt(e.id)
					}, [...t[15] ||= [z("i", { class: "fa-solid fa-trash" }, null, -1)]], 8, cf)]))), 128)), z("div", lf, [z("button", {
						class: "dui-btn dui-btn-outline dui-btn-sm",
						type: "button",
						onClick: t[6] ||= (...e) => j(n).addPrompt && j(n).addPrompt(...e)
					}, " Add prompt"), z("button", {
						class: "dui-btn dui-btn-secondary dui-btn-sm",
						disabled: j(r),
						type: "button",
						onClick: t[7] ||= (...e) => j(n).save && j(n).save(...e)
					}, " Save library ", 8, uf)])])
				])
			])) : H("", !0)]),
			_: 1
		}));
	}
});
//#endregion
//#region src/functions/dark-whispers/recipients.ts
function ff(e) {
	let t = new Set(e.users.map((e) => e.characterId));
	return e.actors.filter((n) => n.type === "character" && (e.defaultGroup === "company" ? n.hasPlayerOwner : t.has(n.id))).map((t) => {
		let n = e.users.find((e) => !e.isGm && e.characterId === t.id), r = e.users.filter((e) => !e.isGm && Number(t.ownership[e.id] ?? 0) >= 3).length;
		return {
			assignedUser: n?.name,
			corruption: t.corruption,
			corruptionMax: t.corruptionMax,
			label: t.label,
			ownerCount: r,
			selected: t.corruption > 0 && e.targetedActorIds.has(t.id),
			uuid: t.uuid
		};
	});
}
//#endregion
//#region src/functions/records/parse.ts
function pf(e) {
	if (typeof e != "string") return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : t.toISOString();
}
function J(e) {
	return typeof e == "string" ? e : "";
}
function Y(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/types/dark-whispers/PromptLibrary.ts
var mf = {
	prompts: [],
	version: 1
};
//#endregion
//#region src/functions/dark-whispers/library.ts
function hf(e) {
	return typeof e == "string" ? e.replace(/\r\n?/g, "\n").replace(/[\t ]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
}
function gf(e) {
	if (typeof e != "string") return _f("The Dark Whispers prompt library setting was not serialized text.");
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return _f("The Dark Whispers prompt library contains invalid JSON.");
	}
	if (!Y(t) || t.version !== 1 || !Array.isArray(t.prompts)) return _f("The Dark Whispers prompt library has an unsupported schema.");
	let n = [], r = t.prompts.flatMap((e, t) => {
		let r = vf(e);
		return r ? [r] : (n.push(`Dark Whispers prompt ${t + 1} was invalid and was skipped.`), []);
	}), i = bf(t.lastImport);
	return t.lastImport !== void 0 && !i && n.push("The Dark Whispers import record was invalid and was skipped."), {
		library: {
			...i ? { lastImport: i } : {},
			prompts: r,
			version: 1
		},
		warnings: n
	};
}
function _f(e) {
	return {
		library: {
			...mf,
			prompts: []
		},
		warnings: [e]
	};
}
function vf(e) {
	if (!Y(e)) return;
	let t = J(e.id), n = hf(e.text), r = yf(e.source);
	if (!(!t || !n)) return {
		id: t,
		...r ? { source: r } : {},
		text: n
	};
}
function yf(e) {
	if (!Y(e) || e.type !== "gm-toolkit") return;
	let t = J(e.moduleVersion), n = J(e.resultId), r = J(e.tableId);
	return n && r ? {
		...t ? { moduleVersion: t } : {},
		resultId: n,
		tableId: r,
		type: "gm-toolkit"
	} : void 0;
}
function bf(e) {
	if (!Y(e)) return;
	let t = e.conflictPolicy, n = pf(e.importedAt), r = Array.isArray(e.resultIds) ? e.resultIds.filter((e) => typeof e == "string") : [], i = J(e.sourceModuleVersion), a = J(e.sourceTableId), o = J(e.sourceTableName);
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
//#region src/module/dark-whispers/settings/keys.ts
var xf = {
	defaultGroup: "darkWhispersDefaultGroup",
	messageStyle: "darkWhispersMessageStyle",
	promptLibrary: "darkWhispersPromptLibrary"
};
//#endregion
//#region src/module/dark-whispers/settings/load.ts
function Sf() {
	return gf(game.settings.get(t, xf.promptLibrary));
}
function Cf() {
	let e = Sf();
	for (let n of e.warnings) console.warn(`${t} | ${n}`);
	return e.library;
}
async function wf(e) {
	await game.settings.set(t, xf.promptLibrary, JSON.stringify(e));
}
function Tf() {
	let e = game.settings.get(t, xf.defaultGroup), n = game.settings.get(t, xf.messageStyle);
	return {
		defaultGroup: e === "company" ? "company" : "party",
		messageStyle: n === "offer" || n === "plain" ? n : "taunt"
	};
}
async function Ef(e) {
	await game.settings.set(t, xf.defaultGroup, e.defaultGroup), await game.settings.set(t, xf.messageStyle, e.messageStyle);
}
//#endregion
//#region src/module/dark-whispers/initialization.ts
function Df() {
	let e = Tf(), t = ff({
		actors: Array.from(game.actors).map((e) => ({
			corruption: Number(e.system.status?.corruption?.value ?? 0),
			corruptionMax: Number(e.system.status?.corruption?.max ?? 0),
			hasPlayerOwner: e.hasPlayerOwner,
			id: e.id,
			label: e.name,
			ownership: e.ownership ?? {},
			type: e.type,
			uuid: e.uuid
		})),
		defaultGroup: e.defaultGroup,
		targetedActorIds: new Set(Array.from(game.user?.targets ?? []).flatMap((e) => e.actor ? [e.actor.id] : [])),
		users: Array.from(game.users).map((e) => ({
			...e.character ? { characterId: e.character.id } : {},
			id: e.id,
			isGm: e.isGM,
			name: e.name
		}))
	});
	return {
		prompts: structuredClone(Cf().prompts),
		recipients: t,
		settings: e
	};
}
//#endregion
//#region src/module/dark-whispers/service.ts
var Of = {
	save: kf,
	send: Af
};
async function kf(e, t) {
	q(K.darkWhispersConsole);
	let n = Cf(), r = e.flatMap((e) => {
		let t = e.text.trim();
		return t ? [{
			...e,
			id: e.id || crypto.randomUUID(),
			text: t
		}] : [];
	});
	await wf({
		...n,
		prompts: r
	}), await Ef(t), ui.notifications.info("Dark Whispers settings saved.");
}
async function Af(e) {
	q(K.darkWhispersConsole);
	let n = e.message.trim();
	if (!n) throw Error("Enter a Dark Whisper message.");
	let r = await Uu(e.recipientUuids), i = /* @__PURE__ */ new Set();
	for (let t of r) {
		let n = Array.from(game.users).filter((e) => !e.isGM);
		if (e.sendToOwners) n.filter((e) => Number(t.ownership?.[e.id] ?? 0) >= 3).forEach((e) => i.add(e.id));
		else {
			let e = n.find((e) => e.character?.id === t.id);
			e && i.add(e.id);
		}
	}
	if (i.size === 0) throw Error("The selected characters have no eligible player recipients.");
	let a = Pf(foundry.utils.escapeHTML(n), Tf().messageStyle) + `<div class="drowsy-dark-whisper-actions" data-prompt="${encodeURIComponent(n)}"><button type="button" data-action="accept">Accept</button><button type="button" data-action="reject">Reject</button></div>`;
	await ChatMessage.create({
		content: a,
		flags: { [t]: { darkWhisper: !0 } },
		flavor: r.map((e) => e.name).join(", "),
		whisper: [...i]
	});
}
function jf() {
	Hooks.on("renderChatMessageHTML", (e, t) => Mf(t));
}
function Mf(e) {
	let t = e instanceof HTMLElement ? e : e?.[0];
	if (t instanceof HTMLElement) for (let e of t.querySelectorAll(".drowsy-dark-whisper-actions button")) e.addEventListener("click", (t) => {
		t.preventDefault(), Nf(e);
	});
}
async function Nf(e) {
	if (game.user?.isGM) return ui.notifications.warn("A player must respond to a Dark Whisper.");
	let t = game.user?.character;
	if (!t) return ui.notifications.warn("Assign a character before responding.");
	let n = e.closest(".drowsy-dark-whisper-actions");
	if (n?.dataset.responded === "true") return;
	let r = decodeURIComponent(n?.dataset.prompt ?? ""), i = e.dataset.action === "accept" ? "accepted" : "rejected", a = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id);
	await ChatMessage.create({
		content: `<p><strong>${foundry.utils.escapeHTML(t.name)}</strong> ${i} the Dark Whisper.</p><blockquote>${foundry.utils.escapeHTML(r)}</blockquote>`,
		whisper: a
	}), n && (n.dataset.responded = "true"), n?.querySelectorAll("button").forEach((e) => {
		e.disabled = !0;
	});
}
function Pf(e, t) {
	return t === "plain" ? `<blockquote>${e}</blockquote>` : t === "offer" ? `<p>A dark power offers you this bargain:</p><blockquote>${e}</blockquote>` : `<p>A dark whisper claws at the edge of your thoughts:</p><blockquote>${e}</blockquote>`;
}
//#endregion
//#region src/module/apps/dark-whispers-console/DarkWhispersConsoleApplication.ts
var Ff = class extends Kc {
	static ACCESS_POLICY = K.darkWhispersConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: "wfrp4e-drowsys-toolkit-dark-whispers-console",
		position: {
			height: 760,
			width: 650
		},
		window: {
			icon: "fa-solid fa-comment-dots",
			resizable: !0,
			title: `${n} — Dark Whispers`
		}
	};
	getVueComponent() {
		return df;
	}
	getVueProps() {
		return {
			actions: Of,
			initialization: Df()
		};
	}
};
//#endregion
//#region src/module/apps/dark-whispers-console/open.ts
async function If() {
	let e = new Ff();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/group-test-console/store.ts
var Lf = ws("group-test-console", () => {
	let e = /* @__PURE__ */ A([]), t = /* @__PURE__ */ A(), n = /* @__PURE__ */ A([]), r = /* @__PURE__ */ A(""), i = /* @__PURE__ */ A(!1), a = /* @__PURE__ */ A(""), o, s = U(() => e.value.filter((e) => e.selected).map((e) => e.uuid));
	function c(i, a) {
		e.value = structuredClone(i.actors), t.value = structuredClone(i.settings), n.value = [...i.skills], r.value = i.settings.defaultSkill, o = a;
	}
	async function l(e) {
		await d(async () => {
			let t = p();
			await f().runGroupTest({
				bypassDialog: t.bypassDialog,
				difficulty: t.defaultDifficulty,
				fallbackAdvanced: t.fallbackAdvanced,
				fallbackDifficultySteps: t.fallbackDifficultySteps,
				modifier: t.defaultModifier,
				rollMode: t.defaultRollMode,
				skill: e ?? r.value,
				uuids: s.value
			});
		});
	}
	async function u() {
		await d(async () => {
			let e = p();
			e.defaultSkill = r.value.trim(), await f().saveSettings(e);
		});
	}
	async function d(e) {
		i.value = !0, a.value = "";
		try {
			await e();
		} catch (e) {
			a.value = e instanceof Error ? e.message : "The group test could not run.";
		} finally {
			i.value = !1;
		}
	}
	function f() {
		if (!o) throw Error("The Group Test Console has not been initialized.");
		return o;
	}
	function p() {
		if (!t.value) throw Error("The Group Test Console has not been initialized.");
		return t.value;
	}
	return {
		actors: e,
		busy: i,
		errorMessage: a,
		initialize: c,
		run: l,
		save: u,
		settings: t,
		skill: r,
		skills: n
	};
}), Rf = {
	key: 0,
	class: "tw:grid tw:gap-4"
}, zf = { class: "dui-card dui-card-border tw:bg-base-100!" }, Bf = { class: "dui-card-body tw:p-4" }, Vf = { class: "tw:grid tw:max-h-52 tw:grid-cols-2 tw:gap-2 tw:overflow-auto" }, Hf = ["onUpdate:modelValue"], Uf = { class: "dui-card dui-card-border tw:bg-base-100!" }, Wf = { class: "dui-card-body tw:grid tw:gap-3 tw:p-4" }, Gf = { class: "tw:grid tw:gap-1" }, Kf = { id: "drowsy-group-skills" }, qf = ["value"], Jf = { class: "tw:flex tw:flex-wrap tw:gap-2" }, Yf = ["disabled", "onClick"], Xf = { class: "tw:grid tw:grid-cols-2 tw:gap-3" }, Zf = { class: "tw:grid tw:gap-1" }, Qf = ["value"], $f = { class: "tw:grid tw:gap-1" }, ep = { class: "tw:grid tw:gap-1" }, tp = { class: "tw:flex tw:items-center tw:gap-2" }, np = { class: "tw:flex tw:items-center tw:gap-2" }, rp = { class: "tw:grid tw:gap-1" }, ip = { class: "tw:grid tw:grid-cols-2 tw:gap-3" }, ap = { class: "tw:grid tw:gap-1" }, op = { class: "tw:grid tw:gap-1" }, sp = { class: "tw:grid tw:grid-cols-2 tw:gap-2" }, cp = { class: "tw:text-sm tw:font-medium" }, lp = ["onUpdate:modelValue"], up = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, dp = { class: "tw:flex tw:gap-2" }, fp = ["disabled"], pp = ["disabled"], mp = /* @__PURE__ */ P({
	__name: "GroupTestConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Lf();
		n.initialize(t.initialization, t.actions);
		let { actors: r, busy: i, errorMessage: a, settings: o, skill: s, skills: c } = Ts(n);
		return (e, t) => (L(), oa(xl, {
			description: "Run private WFRP4e tests for a group of actors.",
			icon: "fa-solid fa-dice-d100",
			title: "Secret Group Tests"
		}, {
			default: M(() => [j(o) ? (L(), R("div", Rf, [z("section", zf, [z("div", Bf, [t[11] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Actors", -1), z("div", Vf, [(L(!0), R(I, null, F(j(r), (e) => (L(), R("label", {
				key: e.uuid,
				class: "tw:flex tw:items-center tw:gap-2"
			}, [N(z("input", {
				"onUpdate:modelValue": (t) => e.selected = t,
				class: "dui-checkbox dui-checkbox-sm",
				type: "checkbox"
			}, null, 8, Hf), [[G, e.selected]]), V(E(e.label), 1)]))), 128))])])]), z("section", Uf, [z("div", Wf, [
				z("label", Gf, [t[12] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Skill", -1), N(z("input", {
					"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ k(s) ? s.value = e : null,
					class: "dui-input",
					list: "drowsy-group-skills"
				}, null, 512), [[W, j(s)]])]),
				z("datalist", Kf, [(L(!0), R(I, null, F(j(c), (e) => (L(), R("option", {
					key: e,
					value: e
				}, null, 8, qf))), 128))]),
				z("div", Jf, [(L(!0), R(I, null, F(j(o).quickTests, (e) => (L(), R("button", {
					key: e,
					class: "dui-btn dui-btn-outline dui-btn-sm",
					disabled: j(i),
					type: "button",
					onClick: (t) => j(n).run(e)
				}, E(e), 9, Yf))), 128))]),
				z("div", Xf, [
					z("label", Zf, [t[13] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Difficulty", -1), N(z("select", {
						"onUpdate:modelValue": t[1] ||= (e) => j(o).defaultDifficulty = e,
						class: "dui-select dui-select-sm"
					}, [(L(), R(I, null, F([
						"veasy",
						"easy",
						"average",
						"challenging",
						"difficult",
						"hard",
						"vhard",
						"futile",
						"impossible"
					], (e) => z("option", {
						key: e,
						value: e
					}, E(e), 9, Qf)), 64))], 512), [[No, j(o).defaultDifficulty]])]),
					z("label", $f, [t[14] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Modifier", -1), N(z("input", {
						"onUpdate:modelValue": t[2] ||= (e) => j(o).defaultModifier = e,
						class: "dui-input dui-input-sm",
						type: "number"
					}, null, 512), [[
						W,
						j(o).defaultModifier,
						void 0,
						{ number: !0 }
					]])]),
					z("label", ep, [t[16] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Roll mode", -1), N(z("select", {
						"onUpdate:modelValue": t[3] ||= (e) => j(o).defaultRollMode = e,
						class: "dui-select dui-select-sm"
					}, [...t[15] ||= [
						z("option", { value: "blindroll" }, "Blind", -1),
						z("option", { value: "gmroll" }, "Private GM", -1),
						z("option", { value: "selfroll" }, "Self", -1),
						z("option", { value: "publicroll" }, "Public", -1)
					]], 512), [[No, j(o).defaultRollMode]])])
				]),
				z("label", tp, [N(z("input", {
					"onUpdate:modelValue": t[4] ||= (e) => j(o).bypassDialog = e,
					class: "dui-toggle dui-toggle-sm",
					type: "checkbox"
				}, null, 512), [[G, j(o).bypassDialog]]), t[17] ||= V(" Bypass each roll dialog", -1)]),
				z("label", np, [N(z("input", {
					"onUpdate:modelValue": t[5] ||= (e) => j(o).fallbackAdvanced = e,
					class: "dui-toggle dui-toggle-sm",
					type: "checkbox"
				}, null, 512), [[G, j(o).fallbackAdvanced]]), t[18] ||= V(" Fall back to the characteristic for missing advanced skills", -1)]),
				z("label", rp, [t[19] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Fallback difficulty steps", -1), N(z("input", {
					"onUpdate:modelValue": t[6] ||= (e) => j(o).fallbackDifficultySteps = e,
					class: "dui-input dui-input-sm tw:w-24",
					type: "number"
				}, null, 512), [[
					W,
					j(o).fallbackDifficultySteps,
					void 0,
					{ number: !0 }
				]])]),
				t[24] ||= z("div", { class: "dui-divider tw:my-0" }, "Saved defaults", -1),
				z("div", ip, [z("label", ap, [t[21] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Initial actor group", -1), N(z("select", {
					"onUpdate:modelValue": t[7] ||= (e) => j(o).defaultGroup = e,
					class: "dui-select dui-select-sm"
				}, [...t[20] ||= [z("option", { value: "party" }, "Assigned party", -1), z("option", { value: "company" }, "All player-owned characters", -1)]], 512), [[No, j(o).defaultGroup]])]), z("label", op, [
					t[22] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Summary at", -1),
					N(z("input", {
						"onUpdate:modelValue": t[8] ||= (e) => j(o).summaryThreshold = e,
						class: "dui-input dui-input-sm",
						min: "0",
						type: "number"
					}, null, 512), [[
						W,
						j(o).summaryThreshold,
						void 0,
						{ number: !0 }
					]]),
					t[23] ||= z("span", { class: "tw:text-xs tw:text-base-content/60!" }, "0 disables the summary", -1)
				])]),
				z("div", sp, [(L(!0), R(I, null, F(j(o).quickTests, (e, t) => (L(), R("label", {
					key: t,
					class: "tw:grid tw:gap-1"
				}, [z("span", cp, "Quick test " + E(t + 1), 1), N(z("input", {
					"onUpdate:modelValue": (e) => j(o).quickTests[t] = e,
					class: "dui-input dui-input-sm"
				}, null, 8, lp), [[W, j(o).quickTests[t]]])]))), 128))]),
				j(a) ? (L(), R("p", up, E(j(a)), 1)) : H("", !0),
				z("div", dp, [z("button", {
					class: "dui-btn dui-btn-primary",
					disabled: j(i),
					type: "button",
					onClick: t[9] ||= (e) => j(n).run()
				}, " Run group test", 8, fp), z("button", {
					class: "dui-btn dui-btn-secondary",
					disabled: j(i),
					type: "button",
					onClick: t[10] ||= (...e) => j(n).save && j(n).save(...e)
				}, " Save defaults ", 8, pp)])
			])])])) : H("", !0)]),
			_: 1
		}));
	}
}), hp = {
	bypassDialog: "groupTestBypassDialog",
	defaultDifficulty: "groupTestDefaultDifficulty",
	defaultGroup: "groupTestDefaultGroup",
	defaultModifier: "groupTestDefaultModifier",
	defaultRollMode: "groupTestDefaultRollMode",
	defaultSkill: "groupTestDefaultSkill",
	fallbackAdvanced: "groupTestFallbackAdvanced",
	fallbackDifficultySteps: "groupTestFallbackDifficultySteps",
	quickTest1: "groupTestQuickTest1",
	quickTest2: "groupTestQuickTest2",
	quickTest3: "groupTestQuickTest3",
	quickTest4: "groupTestQuickTest4",
	summaryThreshold: "groupTestSummaryThreshold"
};
//#endregion
//#region src/module/group-test/settings/load.ts
function gp() {
	return {
		bypassDialog: vp("bypassDialog"),
		defaultDifficulty: bp("defaultDifficulty"),
		defaultGroup: bp("defaultGroup") === "company" ? "company" : "party",
		defaultModifier: yp("defaultModifier"),
		defaultRollMode: bp("defaultRollMode"),
		defaultSkill: bp("defaultSkill"),
		fallbackAdvanced: vp("fallbackAdvanced"),
		fallbackDifficultySteps: yp("fallbackDifficultySteps"),
		quickTests: [
			bp("quickTest1"),
			bp("quickTest2"),
			bp("quickTest3"),
			bp("quickTest4")
		],
		summaryThreshold: yp("summaryThreshold")
	};
}
async function _p(e) {
	let n = {
		bypassDialog: e.bypassDialog,
		defaultDifficulty: e.defaultDifficulty,
		defaultGroup: e.defaultGroup,
		defaultModifier: e.defaultModifier,
		defaultRollMode: e.defaultRollMode,
		defaultSkill: e.defaultSkill,
		fallbackAdvanced: e.fallbackAdvanced,
		fallbackDifficultySteps: e.fallbackDifficultySteps,
		quickTest1: e.quickTests[0],
		quickTest2: e.quickTests[1],
		quickTest3: e.quickTests[2],
		quickTest4: e.quickTests[3],
		summaryThreshold: e.summaryThreshold
	};
	for (let [e, r] of Object.entries(hp)) await game.settings.set(t, r, n[e]);
}
function vp(e) {
	return game.settings.get(t, hp[e]) === !0;
}
function yp(e) {
	return Number(game.settings.get("wfrp4e-enhanced-fear-terror", hp[e])) || 0;
}
function bp(e) {
	return String(game.settings.get("wfrp4e-enhanced-fear-terror", hp[e]) ?? "");
}
//#endregion
//#region src/module/group-test/skill-catalog.ts
var xp = [];
function Sp() {
	return [...xp];
}
async function Cp() {
	let e = /* @__PURE__ */ new Set(), n = game;
	for (let t of n.actors) wp(t.items, e);
	wp(n.items, e);
	for (let r of n.packs) if (!(!r.getIndex || r.metadata?.system !== "wfrp4e" || r.metadata?.type !== "Item")) try {
		wp(await r.getIndex({ fields: ["type"] }), e);
	} catch (e) {
		console.warn(`${t} | Could not index WFRP4e skills from a compendium.`, e);
	}
	xp = [...e].sort((e, t) => e.localeCompare(t));
}
function wp(e, t) {
	for (let n of e ?? []) n.type === "skill" && n.name && t.add(n.name);
}
//#endregion
//#region src/module/group-test/initialization.ts
function Tp() {
	let e = gp();
	return {
		actors: Hu({ initial: e.defaultGroup }),
		settings: e,
		skills: Sp()
	};
}
//#endregion
//#region src/functions/group-test/fallback.ts
var Ep = [
	"impossible",
	"futile",
	"vhard",
	"hard",
	"difficult",
	"challenging",
	"average",
	"easy",
	"veasy"
];
function Dp(e, t) {
	let n = Ep.indexOf(e);
	return n < 0 ? e : Ep[Math.max(0, Math.min(Ep.length - 1, n + Math.round(t)))];
}
function Op(e, t) {
	let n = Ap(e, "system", "advanced", "value") === "adv";
	if (!(n && !t.fallbackAdvanced)) return {
		characteristic: String(Ap(e, "system", "characteristic", "value") ?? "int"),
		difficulty: n ? Dp(t.difficulty, t.fallbackDifficultySteps) : t.difficulty
	};
}
function kp(e, t, n) {
	return e.has(n) && !t.has(n);
}
function Ap(e, ...t) {
	let n = e;
	for (let e of t) {
		if (!n || typeof n != "object") return;
		n = n[e];
	}
	return n;
}
//#endregion
//#region src/module/group-test/service.ts
var jp = /* @__PURE__ */ new Map();
async function Mp(e) {
	if (q(K.groupTestConsole), !e.skill.trim()) throw Error("Choose or enter a skill.");
	if (e.uuids.length === 0) throw Error("Select at least one actor.");
	let t = await Uu(e.uuids), n = crypto.randomUUID(), r = t.filter((t) => !e.bypassDialog && Np(t));
	r.length > 0 && Kp();
	let i = t.filter((e) => !r.includes(e)), a = {
		expected: t.length,
		expectedUuids: new Set(t.map(({ uuid: e }) => e)),
		received: /* @__PURE__ */ new Set(),
		skill: e.skill,
		summaries: []
	};
	jp.set(n, a), Hp(), r.forEach((t) => Pp(n, t.uuid, e));
	for (let t of i) Bp(n, await Ip(t, e));
	await Vp(n), r.length > 0 && ui.notifications.info(`Requested ${r.length} private player roll${r.length === 1 ? "" : "s"}.`);
}
function Np(e) {
	return Array.from(game.users).some((t) => t.isGM === !1 && t.active !== !1 && t.character?.id === e.id);
}
function Pp(e, n, r) {
	Kp().emit(`module.${t}`, {
		actorUuid: n,
		batchId: e,
		request: r,
		requesterUserId: game.user?.id,
		type: "group-test-request"
	});
}
function Fp() {
	Hooks.once("ready", async () => {
		await Cp(), Kp().on(`module.${t}`, (e) => void zp(e));
	});
}
async function Ip(e, t) {
	let n = {
		fields: {
			difficulty: t.difficulty,
			modifier: t.modifier,
			rollMode: t.rollMode
		},
		groupTest: !0,
		skipDialog: t.bypassDialog,
		skipTargets: !0,
		title: `Secret ${t.skill} Test — ${e.name}`
	}, r = e.has(t.skill, "skill"), i;
	if (r) i = await e.setupSkill(r, n);
	else {
		let r = await Lp(t.skill);
		if (!r) throw Error(`Skill “${t.skill}” was not found in WFRP4e content.`);
		let a = Op(r, t);
		if (!a) return {
			actor: e.name,
			actorUuid: e.uuid,
			succeeded: !1
		};
		i = await e.setupCharacteristic(a.characteristic, {
			...n,
			fields: {
				...n.fields,
				difficulty: a.difficulty
			}
		});
	}
	let a = await i.roll();
	return {
		actor: e.name,
		actorUuid: e.uuid,
		roll: a.result?.roll,
		sl: a.result?.SL,
		succeeded: a.succeeded === !0,
		target: a.target
	};
}
async function Lp(e) {
	let t = game.wfrp4e.utility;
	return t.findSkill ? t.findSkill(e) : void 0;
}
async function Rp(e, t) {
	let n = t.map((e) => `<li><strong>${foundry.utils.escapeHTML(e.actor)}</strong>: ${e.succeeded ? "Success" : "Failure"}${e.sl === void 0 ? "" : ` (${e.sl} SL)`}${e.roll === void 0 ? "" : ` — ${e.roll} vs ${e.target ?? "?"}`}</li>`).join(""), r = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id);
	await ChatMessage.create({
		content: `<h3>Secret Group Test: ${foundry.utils.escapeHTML(e)}</h3><ul>${n}</ul>`,
		whisper: r
	});
}
async function zp(e) {
	if (!e || typeof e != "object") return;
	let t = e;
	if (t.type === "group-test-result") {
		if (!qp() || !t.batchId || !t.summary || !Up(t.summary, t.responderUserId)) return;
		Bp(t.batchId, t.summary), await Vp(t.batchId);
		return;
	}
	if (!(t.type !== "group-test-request" || !t.actorUuid || !t.batchId || !t.request || !Wp(t.requesterUserId)) && game.user?.character?.uuid === t.actorUuid) {
		let [e] = await Uu([t.actorUuid]);
		if (e) {
			let n = await Ip(e, t.request);
			Gp({
				batchId: t.batchId,
				responderUserId: game.user?.id,
				summary: n,
				type: "group-test-result"
			});
		}
	}
}
function Bp(e, t) {
	let n = jp.get(e);
	!n || !kp(n.expectedUuids, n.received, t.actorUuid) || (n.received.add(t.actorUuid), n.summaries.push(t));
}
async function Vp(e) {
	let t = jp.get(e);
	if (!t || t.received.size < t.expected) return;
	jp.delete(e);
	let n = gp().summaryThreshold;
	n > 0 && t.summaries.length >= n && await Rp(t.skill, t.summaries);
}
function Hp() {
	for (; jp.size > 20;) {
		let e = jp.keys().next().value;
		if (typeof e == "string") jp.delete(e);
		else return;
	}
}
function Up(e, t) {
	if (!t || typeof e.actorUuid != "string") return !1;
	let n = Array.from(game.users).find((e) => e.id === t), r = n?.character?.uuid;
	return n?.isGM === !1 && r === e.actorUuid;
}
function Wp(e) {
	if (!e) return !1;
	let t = Array.from(game.users).find((t) => t.id === e);
	return t?.isGM === !0 && t.active !== !1;
}
function Gp(e) {
	Kp().emit(`module.${t}`, e);
}
function Kp() {
	let e = game.socket;
	if (!e) throw Error("Foundry socket services are unavailable for delegated group tests.");
	return e;
}
function qp() {
	return game.user?.isGM === !0 && game.user.isUniqueGM !== !1;
}
//#endregion
//#region src/module/apps/group-test-console/GroupTestConsoleApplication.ts
var Jp = class extends Kc {
	static ACCESS_POLICY = K.groupTestConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: "wfrp4e-drowsys-toolkit-group-test-console",
		position: {
			height: 760,
			width: 680
		},
		window: {
			icon: "fa-solid fa-dice-d100",
			resizable: !0,
			title: `${n} — Secret Group Tests`
		}
	};
	getVueComponent() {
		return mp;
	}
	getVueProps() {
		return {
			actions: {
				runGroupTest: Mp,
				saveSettings: _p
			},
			initialization: Tp()
		};
	}
};
//#endregion
//#region src/module/apps/group-test-console/open.ts
async function Yp() {
	let e = new Jp();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/token-tools-console/store.ts
var Xp = ws("token-tools-console", () => {
	let e = /* @__PURE__ */ A(0), t = /* @__PURE__ */ A(), n = /* @__PURE__ */ A("normal"), r = /* @__PURE__ */ A("none"), i = /* @__PURE__ */ A(!1), a = /* @__PURE__ */ A(""), o;
	function s(n, r) {
		e.value = n.controlledCount, t.value = structuredClone(n.settings), o = r;
	}
	async function c() {
		await u(() => d().apply({
			light: r.value,
			vision: n.value
		}));
	}
	async function l() {
		await u(() => d().saveSettings(f()));
	}
	async function u(e) {
		i.value = !0, a.value = "";
		try {
			await e();
		} catch (e) {
			a.value = e instanceof Error ? e.message : "The token update failed.";
		} finally {
			i.value = !1;
		}
	}
	function d() {
		if (!o) throw Error("Token Tools has not been initialized.");
		return o;
	}
	function f() {
		if (!t.value) throw Error("Token Tools has not been initialized.");
		return t.value;
	}
	return {
		apply: c,
		busy: i,
		controlledCount: e,
		errorMessage: a,
		initialize: s,
		light: r,
		save: l,
		settings: t,
		vision: n
	};
}), Zp = { class: "tw:grid tw:gap-4" }, Qp = { class: "dui-alert dui-alert-info tw:m-0" }, $p = { class: "dui-card dui-card-border tw:bg-base-100!" }, em = { class: "dui-card-body tw:grid tw:gap-3 tw:p-4" }, tm = { class: "tw:grid tw:gap-1" }, nm = { class: "tw:grid tw:gap-1" }, rm = ["value"], im = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, am = ["disabled"], om = {
	key: 0,
	class: "dui-collapse dui-collapse-arrow dui-card dui-card-border tw:bg-base-100!"
}, sm = { class: "dui-collapse-content tw:grid tw:grid-cols-2 tw:gap-3" }, cm = { class: "tw:grid tw:gap-1" }, lm = { class: "tw:grid tw:gap-1" }, um = { class: "tw:flex tw:items-center tw:gap-2" }, dm = { class: "tw:flex tw:items-center tw:gap-2" }, fm = ["disabled"], pm = /* @__PURE__ */ P({
	__name: "TokenToolsConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Xp();
		n.initialize(t.initialization, t.actions);
		let { busy: r, controlledCount: i, errorMessage: a, light: o, settings: s, vision: c } = Ts(n), l = [
			{
				v: "none",
				l: "No light"
			},
			{
				v: "matches",
				l: "Matches"
			},
			{
				v: "candle",
				l: "Candle"
			},
			{
				v: "davrich-lamp",
				l: "Davrich lamp"
			},
			{
				v: "torch",
				l: "Torch"
			},
			{
				v: "lantern",
				l: "Lantern"
			},
			{
				v: "storm-broad",
				l: "Storm lantern — broad"
			},
			{
				v: "storm-narrow",
				l: "Storm lantern — narrow"
			},
			{
				v: "ablaze",
				l: "Ablaze"
			},
			{
				v: "light",
				l: "Light spell"
			},
			{
				v: "witchlight",
				l: "Witchlight"
			},
			{
				v: "glowing-skin",
				l: "Glowing skin"
			},
			{
				v: "soulfire",
				l: "Soulfire"
			},
			{
				v: "pha",
				l: "Pha’s Protection"
			}
		];
		return (e, t) => (L(), oa(xl, {
			description: "Set vision and light for the controlled tokens.",
			icon: "fa-solid fa-eye",
			title: "Token Vision & Light"
		}, {
			default: M(() => [z("div", Zp, [
				z("p", Qp, E(j(i)) + " controlled token" + E(j(i) === 1 ? "" : "s"), 1),
				z("section", $p, [z("div", em, [
					z("label", tm, [t[9] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Vision", -1), N(z("select", {
						"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ k(c) ? c.value = e : null,
						class: "dui-select"
					}, [...t[8] ||= [
						z("option", { value: "normal" }, "Normal", -1),
						z("option", { value: "blinded" }, "Blinded", -1),
						z("option", { value: "night" }, "Night Vision", -1),
						z("option", { value: "dark" }, "Dark Vision", -1),
						z("option", { value: "none" }, "No vision", -1)
					]], 512), [[No, j(c)]])]),
					z("label", nm, [t[10] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Light source", -1), N(z("select", {
						"onUpdate:modelValue": t[1] ||= (e) => /* @__PURE__ */ k(o) ? o.value = e : null,
						class: "dui-select"
					}, [(L(), R(I, null, F(l, (e) => z("option", {
						key: e.v,
						value: e.v
					}, E(e.l), 9, rm)), 64))], 512), [[No, j(o)]])]),
					j(a) ? (L(), R("p", im, E(j(a)), 1)) : H("", !0),
					z("button", {
						class: "dui-btn dui-btn-primary",
						disabled: j(r),
						type: "button",
						onClick: t[2] ||= (...e) => j(n).apply && j(n).apply(...e)
					}, " Apply to controlled tokens ", 8, am)
				])]),
				j(s) ? (L(), R("section", om, [
					t[15] ||= z("input", { type: "checkbox" }, null, -1),
					t[16] ||= z("div", { class: "dui-collapse-title tw:font-semibold" }, "Vision defaults", -1),
					z("div", sm, [
						z("label", cm, [t[11] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Normal range", -1), N(z("input", {
							"onUpdate:modelValue": t[3] ||= (e) => j(s).normalRange = e,
							class: "dui-input dui-input-sm",
							min: "0",
							type: "number"
						}, null, 512), [[
							W,
							j(s).normalRange,
							void 0,
							{ number: !0 }
						]])]),
						z("label", lm, [t[12] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Dark Vision range", -1), N(z("input", {
							"onUpdate:modelValue": t[4] ||= (e) => j(s).darkRange = e,
							class: "dui-input dui-input-sm",
							min: "0",
							type: "number"
						}, null, 512), [[
							W,
							j(s).darkRange,
							void 0,
							{ number: !0 }
						]])]),
						z("label", um, [N(z("input", {
							"onUpdate:modelValue": t[5] ||= (e) => j(s).overrideNightVision = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, j(s).overrideNightVision]]), t[13] ||= V("Allow Night Vision override", -1)]),
						z("label", dm, [N(z("input", {
							"onUpdate:modelValue": t[6] ||= (e) => j(s).overrideDarkVision = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, j(s).overrideDarkVision]]), t[14] ||= V("Allow Dark Vision override", -1)]),
						z("button", {
							class: "dui-btn dui-btn-secondary dui-btn-sm tw:w-fit",
							disabled: j(r),
							type: "button",
							onClick: t[7] ||= (...e) => j(n).save && j(n).save(...e)
						}, " Save defaults ", 8, fm)
					])
				])) : H("", !0)
			])]),
			_: 1
		}));
	}
}), mm = {
	alpha: .5,
	angle: 360,
	animation: {
		intensity: 1,
		reverse: !1,
		speed: 1,
		type: null
	},
	attenuation: .5,
	bright: 0,
	color: null,
	coloration: 1,
	contrast: 0,
	darkness: {
		max: 1,
		min: 0
	},
	dim: 0,
	luminosity: 0,
	saturation: 0,
	shadows: 0
}, hm = {
	ablaze: {
		alpha: .5,
		bright: 7.5,
		color: "#ff7733",
		dim: 15,
		animation: {
			intensity: 5,
			speed: 4,
			type: "flame"
		}
	},
	candle: {
		alpha: .2,
		bright: 5,
		color: "#ffaa00",
		dim: 10,
		animation: {
			intensity: 3,
			speed: 3,
			type: "flame"
		}
	},
	"davrich-lamp": {
		alpha: .5,
		bright: 5,
		color: "#ffaa00",
		dim: 10,
		animation: {
			intensity: 2,
			speed: 2,
			type: "torch"
		}
	},
	"glowing-skin": {
		alpha: .3,
		bright: 3,
		color: "#ffbd80",
		dim: 10,
		animation: {
			intensity: 2,
			speed: 2,
			type: "pulse"
		}
	},
	lantern: {
		alpha: .4,
		bright: 10,
		color: "#ffcc66",
		dim: 20,
		animation: {
			intensity: 3,
			speed: 3,
			type: "torch"
		}
	},
	light: {
		alpha: .4,
		bright: 7.5,
		color: "#99ffff",
		coloration: 10,
		dim: 15,
		animation: {
			intensity: 3,
			speed: 3,
			type: "pulse"
		}
	},
	matches: {
		alpha: .1,
		bright: 2,
		color: "#ffaa00",
		dim: 5,
		animation: {
			intensity: 4,
			speed: 4,
			type: "flame"
		}
	},
	soulfire: {
		alpha: .5,
		bright: 7.5,
		color: "#ff7733",
		dim: 15,
		animation: {
			intensity: 4,
			speed: 4,
			type: "flame"
		}
	},
	"storm-broad": {
		alpha: .4,
		bright: 10,
		color: "#ffcc66",
		dim: 20,
		animation: {
			intensity: 3,
			speed: 3,
			type: "torch"
		}
	},
	"storm-narrow": {
		alpha: .6,
		angle: 90,
		bright: 20,
		color: "#ffcc66",
		dim: 30,
		animation: {
			intensity: 3,
			speed: 3,
			type: "torch"
		}
	},
	torch: {
		alpha: .3,
		bright: 7.5,
		color: "#ffaa00",
		dim: 15,
		animation: {
			intensity: 3,
			speed: 3,
			type: "flame"
		}
	},
	witchlight: {
		alpha: .4,
		bright: 10,
		color: "#99ffff",
		dim: 20,
		animation: {
			intensity: 4,
			speed: 2,
			type: "chroma"
		}
	}
};
function gm(e, t = 0) {
	return e === "none" ? structuredClone(mm) : _m(e === "pha" ? {
		alpha: .6,
		bright: t,
		color: "#ffddbb",
		dim: t,
		animation: {
			intensity: 2,
			speed: 2,
			type: "sunburst"
		}
	} : hm[e]);
}
function _m(e) {
	return {
		...structuredClone(mm),
		...e,
		animation: {
			...mm.animation,
			...e.animation
		},
		darkness: {
			...mm.darkness,
			...e.darkness
		}
	};
}
//#endregion
//#region src/functions/token-tools/vision.ts
function vm(e, t, n) {
	let r = Math.max(0, t.normalRange), i = Math.max(0, t.darkRange), a = {
		angle: 360,
		attenuation: .1,
		brightness: 0,
		color: null,
		contrast: 0,
		enabled: !0,
		range: r,
		saturation: 0,
		visionMode: "basic"
	};
	if (e === "none") return {
		...a,
		brightness: -1,
		enabled: !1,
		range: 0
	};
	if (e === "blinded") return {
		...a,
		brightness: 1,
		range: 1,
		saturation: 1
	};
	if (e === "normal") return a;
	if (e === "dark") {
		let e = n.hasDarkVision || t.overrideDarkVision ? i : r;
		return {
			...a,
			brightness: e / 2,
			range: e
		};
	}
	let o = Math.max(n.nightVisionAdvances, +!!t.overrideNightVision), s = n.sceneDarkness < 1 || n.lightRange > 0 || n.sceneHasGlobalLight;
	return {
		...a,
		range: s ? Math.max(r, o * 20 + Math.max(0, n.lightRange)) : 0,
		saturation: o > 0 && s ? -1 : 0
	};
}
//#endregion
//#region src/module/token-tools/settings/keys.ts
var ym = {
	darkRange: "visionDarkRange",
	normalRange: "visionNormalRange",
	overrideDarkVision: "visionOverrideDark",
	overrideNightVision: "visionOverrideNight"
};
//#endregion
//#region src/module/token-tools/settings/load.ts
function bm() {
	return {
		darkRange: Sm("darkRange"),
		normalRange: Sm("normalRange"),
		overrideDarkVision: Cm("overrideDarkVision"),
		overrideNightVision: Cm("overrideNightVision")
	};
}
async function xm(e) {
	let n = {
		...e,
		darkRange: Math.max(0, Math.round(e.darkRange)),
		normalRange: Math.max(0, Math.round(e.normalRange))
	};
	for (let [e, r] of Object.entries(ym)) await game.settings.set(t, r, n[e]);
}
function Sm(e) {
	let n = Number(game.settings.get(t, ym[e]));
	if (!Number.isFinite(n)) throw Error(`The saved Token Tools setting “${ym[e]}” is not a number.`);
	return n;
}
function Cm(e) {
	return game.settings.get(t, ym[e]) === !0;
}
//#endregion
//#region src/module/token-tools/service.ts
async function wm(e) {
	q(K.tokenToolsConsole);
	let t = canvas?.tokens?.controlled ?? [];
	if (t.length === 0) throw Error("Select at least one token.");
	let n = 0, r = [];
	for (let i of t) try {
		let t = Number(i.actor?.system.characteristics?.wp?.bonus ?? 0), r = gm(e.light, t);
		await i.document.update({
			light: r,
			sight: vm(e.vision, bm(), {
				hasDarkVision: Tm(i.actor, "NAME.DarkVision", "trait"),
				lightRange: r.dim,
				nightVisionAdvances: Em(i.actor),
				sceneDarkness: Number(canvas.scene?.darkness ?? 0),
				sceneHasGlobalLight: canvas.scene?.globalLight === !0
			})
		}), n += 1;
	} catch (e) {
		r.push({
			error: e,
			name: i.actor?.name ?? "Unknown token"
		});
	}
	if (r.length > 0) {
		console.error("Drowsy’s WFRP4e Toolkit | Token updates failed.", r);
		let e = r.map(({ error: e, name: t }) => `${t}: ${e instanceof Error ? e.message : String(e)}`).join("; ");
		throw Error(`Updated ${n} token${n === 1 ? "" : "s"}; failed: ${e}.`, { cause: r.map(({ error: e }) => e) });
	}
	ui.notifications.info(`Updated ${n} token${n === 1 ? "" : "s"}.`);
}
function Tm(e, t, n) {
	return !!e?.has(game.i18n.localize(t), n);
}
function Em(e) {
	let t = game.i18n.localize("NAME.NightVision"), n = e?.has(t, "trait") || e?.has(t, "talent");
	return n ? Math.max(1, Number(n.system?.advances?.value ?? 1)) : 0;
}
//#endregion
//#region src/module/apps/token-tools-console/TokenToolsConsoleApplication.ts
var Dm = class extends Kc {
	static ACCESS_POLICY = K.tokenToolsConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: "wfrp4e-drowsys-toolkit-token-tools",
		position: {
			height: 680,
			width: 560
		},
		window: {
			icon: "fa-solid fa-eye",
			resizable: !0,
			title: `${n} — Token Vision & Light`
		}
	};
	getVueComponent() {
		return pm;
	}
	getVueProps() {
		let e = (canvas?.tokens?.controlled ?? []).length;
		return {
			actions: {
				apply: wm,
				saveSettings: xm
			},
			initialization: {
				controlledCount: e,
				settings: bm()
			}
		};
	}
};
//#endregion
//#region src/module/apps/token-tools-console/open.ts
async function Om() {
	let e = new Dm();
	return await e.render(!0), e;
}
//#endregion
//#region src/functions/gm-toolkit/content-selection.ts
function km(e, t) {
	return e.candidates.find((e) => e.tableId === t);
}
function Am(e, t) {
	let n = km(e, t);
	return Object.fromEntries((n?.prompts ?? []).map((e) => [e.resultId, e.comparison === "new"]));
}
function jm(e) {
	return Object.entries(e).flatMap(([e, t]) => t ? [e] : []);
}
//#endregion
//#region src/functions/gm-toolkit/launcher-catalog.ts
var Mm = {
	AjUYYy7qAN55BERN: X("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	rzKeTLKp0bOp5SK9: X("Use Drowsy’s XP Award Console.", "aW4rD8xP2cN7sL5q", "Open XP Award Console"),
	GfXvMqsynxpHTYPt: X("Use Drowsy’s toolkit home.", "tK8hM3pQ6vR2nW5x", "Open Drowsy’s WFRP4e Toolkit"),
	PsZADfqRKnbnAT5Q: X("Use Drowsy’s grid-scale utility.", "DrowsyGridScale1", "Change Grid Scale (Preserve Lighting)"),
	vUzIl1uDkykO5DmG: X("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	"6EKiEQZTbmQN97Vr": X("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	xU8TFHu98zX5isb0: X("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	iopoLXTz9kfDTfiX: X("Use Drowsy’s toolkit home.", "tK8hM3pQ6vR2nW5x", "Open Drowsy’s WFRP4e Toolkit"),
	hLEsIrMsOYQROnl5: X("Use Drowsy’s toolkit home and feature consoles.", "tK8hM3pQ6vR2nW5x", "Open Drowsy’s WFRP4e Toolkit"),
	"74OvSfTs3slii0RR": X("Use Drowsy’s Damage Console.", "DrowsyDamage001X", "Open Damage Console"),
	wN47JNwM2POBSUUm: X("Use Drowsy’s Secret Group Tests.", "DrowsyGroupT001X", "Open Secret Group Tests"),
	tiKEfs1nB7zAMgYg: X("Use Drowsy’s Pull Everyone action.", "DrowsyPull00001X", "Pull Everyone to Scene"),
	"2sefSFqqAbySw2nz": X("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	pZmPtsEZHOpyJfnq: X("Use Drowsy’s Reset Fortune action.", "DrowsyFortune01X", "Reset Fortune"),
	roGO31Lo4pyL5kvg: X("Use Drowsy’s Dark Whispers Console.", "DrowsyWhisper01X", "Open Dark Whispers"),
	WcBTP5xRO9jcJMVa: X("Use Drowsy’s Session Management Console.", "sE5sN8mG2cT7rV4q", "Open Session Management Console"),
	g9Wohpie7ODdbRKX: X("Use Drowsy’s resumable Session Turnover workflow.", "sE5sN8mG2cT7rV4q", "Open Session Management Console"),
	DGYdRmtbMZ81NmQ3: X("Use Drowsy’s Token Vision & Light Console.", "DrowsyVision001X", "Open Token Vision & Light"),
	nvqeTARBoSP89WT5: X("Use Drowsy’s Administration Console.", "DrowsyAdmin0001X", "Open Administration Console"),
	OiQ0cS3QsmQadxqR: X("Use Drowsy’s Administration Console.", "DrowsyAdmin0001X", "Open Administration Console")
}, Nm = [
	Z("AjUYYy7qAN55BERN", "Add Advantage", 317, "f46c0d0e"),
	Z("rzKeTLKp0bOp5SK9", "Add XP", 7054, "3e94af4e"),
	Z("GfXvMqsynxpHTYPt", "Canvas Toolbox", 3515, "1b42131d"),
	Z("PsZADfqRKnbnAT5Q", "Change Scene to Yards", 628, "bc14705a"),
	Z("vUzIl1uDkykO5DmG", "Check Conditions", 5830, "56693f0a"),
	Z("6EKiEQZTbmQN97Vr", "Clear Advantage", 279, "e3cda086"),
	Z("xU8TFHu98zX5isb0", "Combat Toolbox", 3509, "cd02aee7"),
	Z("iopoLXTz9kfDTfiX", "GM Toolbox", 3465, "ebccaef2"),
	Z("hLEsIrMsOYQROnl5", "GM Toolkit Settings", 3252, "bda29fbb"),
	Z("74OvSfTs3slii0RR", "Launch Damage Console", 278, "70bf6804"),
	Z("wN47JNwM2POBSUUm", "Make Secret Group Test", 3093, "a0d1c8f8"),
	Z("tiKEfs1nB7zAMgYg", "Pull Everyone to Scene", 2525, "b21938a7"),
	Z("2sefSFqqAbySw2nz", "Reduce Advantage", 285, "12053b38"),
	Z("pZmPtsEZHOpyJfnq", "Reset Fortune", 1854, "b87bc4f5"),
	Z("roGO31Lo4pyL5kvg", "Send Dark Whispers", 7400, "f05c3d43"),
	Z("WcBTP5xRO9jcJMVa", "Session Toolbox", 3501, "17ab0783"),
	Z("g9Wohpie7ODdbRKX", "Session Turnover", 3100, "bd85a21d"),
	Z("DGYdRmtbMZ81NmQ3", "Set Token Vision and Light", 13595, "c6c8d6c8"),
	{
		commandFingerprint: "1df039d8",
		commandLength: 8,
		id: "ihMGjHFP3SdvYH2k",
		name: "Simply d100",
		replacement: {
			disposition: "independent",
			label: "Use /r 1d100 or Drowsy’s Administration Console."
		}
	},
	Z("nvqeTARBoSP89WT5", "Toggle Compendium Pack Visibility", 2752, "f921858d"),
	Z("OiQ0cS3QsmQadxqR", "Toggle Scene Visibility and Light", 845, "1562d17a")
];
function X(e, t, n) {
	return {
		label: e,
		macroId: t,
		macroName: n
	};
}
function Z(e, t, n, r) {
	return {
		commandFingerprint: r,
		commandLength: n,
		id: e,
		name: t,
		replacement: {
			disposition: "ready",
			...Mm[e]
		}
	};
}
//#endregion
//#region src/functions/gm-toolkit/launchers.ts
var Pm = "wfrp4e-gm-toolkit.gm-toolkit-macros", Fm = "wfrp4e-enhanced-fear-terror.macros", Im = {
	DrowsyGridScale1: {
		fingerprint: "9476a7a4",
		length: 756
	},
	aW4rD8xP2cN7sL5q: {
		fingerprint: "795a9a75",
		length: 680
	}
};
function Lm(e, t, n = {}) {
	let r = e.flatMap((e) => Hm(e, t)), i = r.filter(Rm).flatMap(({ hotbarSlots: e }) => e).filter((e, t, n) => n.indexOf(e) === t).sort((e, t) => e - t);
	return {
		candidates: r,
		counts: Wm(r),
		remappableSlots: i,
		...n.id ? { userId: n.id } : {},
		...n.name ? { userName: n.name } : {},
		version: 1,
		warnings: n.id ? [] : ["The current user was unavailable, so hotbar assignments could not be reviewed."]
	};
}
function Rm(e) {
	return e.match === "standard" && e.replacement.disposition === "ready" && e.hotbarSlots.length > 0;
}
function zm(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t = Math.imul(t ^ e.charCodeAt(n), 16777619) >>> 0;
	return t.toString(16).padStart(8, "0");
}
function Bm(e, t) {
	return !!(e && e.includes(Fm) && e.endsWith(t));
}
function Vm(e, t) {
	let n = Im[t];
	return !!(e && n && Bm(e.compendiumSource, t) && e.command.length === n.length && zm(e.command) === n.fingerprint);
}
function Hm(e, t) {
	let n = Nm.find(({ id: t }) => e.compendiumSource?.includes(Pm) === !0 && e.compendiumSource.endsWith(t)), r = Nm.find(({ id: t }) => t === e.id), i = Nm.find(({ name: t }) => t === e.name), a = n ?? r ?? i;
	if (!a) return [];
	let o = n ? "source" : r ? "document-id" : "name", s = Um(a, e.command) ? "standard" : o === "name" ? "ambiguous" : "customized";
	return [{
		confidence: o,
		hotbarSlots: [...t.get(e.id) ?? []].sort((e, t) => e - t),
		macroId: e.id,
		macroName: e.name,
		match: s,
		replacement: {
			compendiumId: Fm,
			...a.replacement
		},
		sourceMacroId: a.id,
		sourceMacroName: a.name
	}];
}
function Um(e, t) {
	return t.length === e.commandLength && zm(t) === e.commandFingerprint;
}
function Wm(e) {
	return {
		ambiguous: e.filter(({ match: e }) => e === "ambiguous").length,
		customized: e.filter(({ match: e }) => e === "customized").length,
		standard: e.filter(({ match: e }) => e === "standard").length
	};
}
//#endregion
//#region src/functions/gm-toolkit/launcher-selection.ts
function Gm(e) {
	return Object.fromEntries((e?.remappableSlots ?? []).map((e) => [e, !0]));
}
function Km(e) {
	return Object.entries(e).filter(([, e]) => e).map(([e]) => Number(e)).filter((e) => Number.isInteger(e)).sort((e, t) => e - t);
}
function qm(e, t) {
	return Array.from(new Set(t)).filter((e) => Number.isInteger(e) && e >= 1 && e <= 50).flatMap((t) => {
		let n = e.candidates.find((e) => e.hotbarSlots.includes(t) && Rm(e));
		return n?.replacement.macroId ? [{
			macroId: n.replacement.macroId,
			slot: t
		}] : [];
	});
}
//#endregion
//#region src/functions/gm-toolkit/selection.ts
function Jm(e) {
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
function Ym(e, t) {
	let n = Object.fromEntries((e?.imports ?? []).map(({ field: e }) => [e, !1]));
	if (t) for (let t of e?.imports ?? []) n[t.field] = t.comparison !== "same";
	return n;
}
function Xm(e) {
	return Object.entries(e).filter(([, e]) => e).map(([e]) => e);
}
function Zm(e, t) {
	let n = Jm(e);
	if (!n) return;
	let r = new Set(t);
	for (let e of n.imports) r.has(e.field) && (e.currentValue = e.sourceValue, e.comparison = "same");
	return n;
}
//#endregion
//#region src/state/apps/gm-toolkit-migration/store.ts
var Qm = ws("gm-toolkit-migration", () => {
	let e = /* @__PURE__ */ A({ version: 1 }), t = /* @__PURE__ */ A(), n = /* @__PURE__ */ A(), r = /* @__PURE__ */ A(Ym(void 0, !1)), i = /* @__PURE__ */ A(""), a = /* @__PURE__ */ A({}), o = /* @__PURE__ */ A("preserve"), s = /* @__PURE__ */ A({}), c = /* @__PURE__ */ A(), l = /* @__PURE__ */ A(), u = /* @__PURE__ */ A(!1), d;
	function f(i, a) {
		d = a, e.value = { ...i.state }, t.value = Jm(i.preview), n.value = i.cutoverReport, r.value = Ym(t.value, i.state.migration === void 0), x(), S(), c.value = void 0, l.value = void 0;
	}
	async function p() {
		await te(async () => {
			let n = Xm(r.value), i = await ne().importSettings({ fields: n });
			e.value.migration = i, t.value = Zm(t.value, i.appliedFields ?? []), r.value = Ym(t.value, !1), C(), l.value = `${n.length} setting${n.length === 1 ? "" : "s"} imported.`;
		});
	}
	async function m() {
		await te(async () => {
			let e = await ne().importDarkWhispers({
				conflictPolicy: o.value,
				resultIds: jm(a.value),
				tableId: i.value
			});
			t.value = Jm(e.preview), x(), S(), C(), l.value = `${e.added} prompt${e.added === 1 ? "" : "s"} added, ${e.replaced} replaced, and ${e.skipped} unchanged.`;
		});
	}
	async function h() {
		await te(async () => {
			let e = await ne().remapLaunchers({ slots: Km(s.value) });
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
		i.value = e, a.value = Am(ee(), e);
	}
	function y(e, t) {
		a.value[e] = t;
	}
	function b(e, t) {
		s.value[e] = t;
	}
	function x() {
		let e = ee(), t = e.recommendedTableId ?? e.candidates[0]?.tableId ?? "";
		i.value = t, a.value = Am(e, t), o.value = "preserve";
	}
	function S() {
		s.value = Gm(t.value?.launchers);
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
}), $m = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-secondary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-content-title"
}, eh = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, th = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, nh = { class: "tw:min-w-0 tw:flex-1" }, rh = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, ih = { class: "dui-badge dui-badge-sm" }, ah = ["disabled"], oh = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, sh = {
	key: 1,
	class: "fa-solid fa-file-import",
	"aria-hidden": "true"
}, ch = {
	key: 0,
	class: "tw:grid tw:gap-3 tw:min-[42rem]:grid-cols-2"
}, lh = { class: "tw:grid tw:min-w-0 tw:gap-1" }, uh = ["value"], dh = ["value"], fh = {
	key: 0,
	class: "tw:grid tw:min-w-0 tw:gap-1"
}, ph = ["value"], mh = {
	key: 1,
	class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, hh = { class: "dui-table dui-table-sm tw:min-w-[42rem]" }, gh = { class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2" }, _h = ["checked", "onChange"], vh = { class: "tw:sr-only" }, yh = { class: "tw:tabular-nums" }, bh = {
	class: "tw:max-w-md tw:whitespace-normal",
	scope: "row"
}, xh = { class: "dui-badge dui-badge-sm" }, Sh = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, Ch = /* @__PURE__ */ P({
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
		let n = e, r = t, i = U(() => km(n.preview, n.selectedTableId)), a = U(() => Object.values(n.selections).filter((e) => e).length), o = U(() => i.value?.prompts.some((e) => e.comparison === "conflict"));
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
		return (t, n) => (L(), R("section", $m, [z("div", eh, [
			z("div", th, [z("div", nh, [z("div", rh, [n[1] ||= z("h2", {
				id: "gm-toolkit-content-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Dark Whispers prompts ", -1), z("span", ih, E(e.preview.currentPromptCount) + " in Drowsy library ", 1)]), n[2] ||= z("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " Copy selected prompt text into Drowsy-owned world data. The original RollTable remains unchanged. ", -1)]), z("button", {
				class: "dui-btn dui-btn-sm tw:border-secondary! tw:text-base-content!",
				disabled: e.isWorking || a.value === 0 || !i.value,
				type: "button",
				onClick: n[0] ||= (e) => r("import")
			}, [e.isWorking ? (L(), R("span", oh)) : (L(), R("i", sh)), V(" Import " + E(a.value || "selected") + " prompts ", 1)], 8, ah)]),
			e.preview.candidates.length ? (L(), R("div", ch, [z("label", lh, [n[3] ||= z("span", { class: "tw:text-sm tw:font-semibold" }, "Source RollTable", -1), z("select", {
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
				value: e.selectedTableId,
				onChange: l
			}, [(L(!0), R(I, null, F(e.preview.candidates, (e) => (L(), R("option", {
				key: e.tableId,
				value: e.tableId
			}, E(e.tableName) + " — " + E(e.prompts.length) + " prompts ", 9, dh))), 128))], 40, uh)]), o.value ? (L(), R("label", fh, [n[5] ||= z("span", { class: "tw:text-sm tw:font-semibold" }, "Changed imported prompts", -1), z("select", {
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
				value: e.conflictPolicy,
				onChange: u
			}, [...n[4] ||= [z("option", { value: "preserve" }, "Keep Drowsy version", -1), z("option", { value: "replace" }, "Replace with source version", -1)]], 40, ph)])) : H("", !0)])) : H("", !0),
			i.value ? (L(), R("div", mh, [z("table", hh, [n[6] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Import"),
				z("th", { scope: "col" }, "Roll"),
				z("th", { scope: "col" }, "Prompt text"),
				z("th", { scope: "col" }, "Comparison")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(i.value.prompts, (t) => (L(), R("tr", { key: t.resultId }, [
				z("td", null, [z("label", gh, [z("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: e.selections[t.resultId],
					type: "checkbox",
					onChange: (e) => c(t.resultId, e)
				}, null, 40, _h), z("span", vh, "Import Dark Whispers prompt " + E(t.range), 1)])]),
				z("td", yh, E(t.range), 1),
				z("th", bh, E(t.text), 1),
				z("td", null, [z("span", xh, E(s(t.comparison)), 1)])
			]))), 128))])])])) : (L(), R("div", Sh, [...n[7] ||= [z("i", {
				class: "fa-solid fa-table-list",
				"aria-hidden": "true"
			}, null, -1), z("span", null, "No imported GM Toolkit Dark Whispers RollTable is available to copy.", -1)]])),
			(L(!0), R(I, null, F([...e.preview.warnings, ...i.value?.warnings ?? []], (e) => (L(), R("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[8] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", null, E(e), 1)]))), 128))
		])]));
	}
});
//#endregion
//#region src/functions/gm-toolkit/cutover-display.ts
function wh(e) {
	return {
		"already-matched": "Already matched",
		"changed-after-import": "Changed after import",
		imported: "Imported",
		"not-imported": "Not imported"
	}[e];
}
function Th(e) {
	return e === "standard" ? "Stock macro" : e === "customized" ? "Customized" : "Check manually";
}
function Eh(e) {
	return e.source.evidence === "current" ? e.source.active ? "Active module" : "Current world data" : e.source.evidence === "saved-snapshot" ? "Saved import snapshot" : "World documents";
}
//#endregion
//#region src/view/apps/gm-toolkit-migration/GmToolkitCutoverReportPanel.vue?vue&type=script&setup=true&lang.ts
var Dh = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-accent/50! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-cutover-title"
}, Oh = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, kh = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Ah = { class: "tw:min-w-0 tw:flex-1" }, jh = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Mh = { class: "tw:grid tw:min-w-0 tw:gap-2 tw:min-[38rem]:grid-cols-3" }, Nh = { class: "dui-stat tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3" }, Ph = { class: "dui-stat-value tw:text-2xl" }, Fh = { class: "dui-stat-desc tw:truncate" }, Ih = { class: "dui-stat tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3" }, Lh = { class: "dui-stat-value tw:text-2xl" }, Rh = { class: "dui-stat-desc" }, zh = { class: "dui-stat tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3" }, Bh = { class: "dui-stat-value tw:text-2xl" }, Vh = { class: "dui-stat-desc" }, Hh = { class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-content/20!" }, Uh = { class: "dui-collapse-content tw:min-w-0 tw:px-3 tw:pb-3" }, Wh = { class: "tw:mb-2 tw:flex tw:flex-wrap tw:gap-1" }, Gh = { class: "dui-badge dui-badge-sm" }, Kh = {
	key: 0,
	class: "dui-badge dui-badge-sm"
}, qh = { class: "dui-badge dui-badge-sm" }, Jh = { class: "dui-badge dui-badge-sm" }, Yh = { class: "dui-badge dui-badge-sm" }, Xh = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/15!" }, Zh = { class: "dui-table dui-table-sm tw:min-w-[38rem]" }, Qh = { scope: "row" }, $h = { class: "tw:max-w-52 tw:break-words" }, eg = { class: "tw:max-w-52 tw:break-words" }, tg = { class: "dui-badge dui-badge-sm" }, ng = { class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-content/20!" }, rg = { class: "dui-collapse-content tw:grid tw:gap-2 tw:px-3 tw:pb-3" }, ig = { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, ag = { class: "tw:flex tw:flex-wrap tw:gap-1" }, og = { class: "dui-badge dui-badge-success dui-badge-sm" }, sg = { class: "dui-badge dui-badge-sm" }, cg = { class: "dui-badge dui-badge-warning dui-badge-sm" }, lg = { class: "dui-badge dui-badge-warning dui-badge-sm" }, ug = {
	key: 0,
	class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-content/20!",
	open: ""
}, dg = { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:font-semibold" }, fg = { class: "dui-collapse-content tw:min-w-0 tw:px-3 tw:pb-3" }, pg = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/15!" }, mg = { class: "dui-table dui-table-sm tw:min-w-[44rem]" }, hg = { scope: "row" }, gg = { class: "tw:max-w-md tw:whitespace-normal" }, _g = {
	key: 2,
	class: "tw:grid tw:gap-3 tw:rounded-box tw:border tw:border-warning/50! tw:bg-warning/10! tw:p-3"
}, vg = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
	role: "alert"
}, yg = { class: "tw:flex tw:cursor-pointer tw:items-start tw:gap-3" }, bg = ["disabled"], xg = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Sg = {
	key: 1,
	class: "fa-solid fa-clipboard-check",
	"aria-hidden": "true"
}, Cg = {
	key: 1,
	class: "dui-alert dui-alert-success",
	role: "status"
}, wg = /* @__PURE__ */ P({
	__name: "GmToolkitCutoverReportPanel",
	props: {
		isWorking: { type: Boolean },
		report: {},
		review: {}
	},
	emits: ["review"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ A(!1), a = U(() => !!(n.report && n.review?.evidenceId === n.report.evidenceId)), o = U(() => a.value && n.report?.replacement.ready === !0 && n.report.combat.active === !1), s = U(() => a.value ? o.value ? "Reviewed — ready to disable" : n.report?.replacement.ready === !1 ? "Keep GM Toolkit enabled" : "Reviewed — combat active" : "Review required");
		return tr(() => n.report?.evidenceId, () => i.value = !1), (t, n) => (L(), R("section", Dh, [z("div", Oh, [z("div", kh, [z("div", Ah, [z("div", jh, [n[2] ||= z("h2", {
			id: "gm-toolkit-cutover-title",
			class: "dui-card-title tw:font-serif tw:text-lg"
		}, " Before you disable GM Toolkit ", -1), z("span", { class: Ce(["dui-badge dui-badge-sm", o.value ? "dui-badge-success" : "dui-badge-warning"]) }, E(s.value), 3)])])]), e.report ? (L(), R(I, { key: 0 }, [
			z("div", Mh, [
				z("div", Nh, [
					n[3] ||= z("div", { class: "dui-stat-title tw:text-xs" }, "Settings found", -1),
					z("div", Ph, E(e.report.settings.total), 1),
					z("div", Fh, E(j(Eh)(e.report)), 1)
				]),
				z("div", Ih, [
					n[4] ||= z("div", { class: "dui-stat-title tw:text-xs" }, "Source prompts", -1),
					z("div", Lh, E(e.report.content.sourcePromptCount), 1),
					z("div", Rh, E(e.report.content.currentPromptCount) + " in Drowsy", 1)
				]),
				z("div", zh, [
					n[5] ||= z("div", { class: "dui-stat-title tw:text-xs" }, "Detected launchers", -1),
					z("div", Bh, E(e.report.launchers.detectedMacros), 1),
					z("div", Vh, E(e.report.launchers.unresolved.length) + " need review", 1)
				])
			]),
			(L(!0), R(I, null, F(e.report.notices, (e) => (L(), R("div", {
				key: `${e.code}:${e.message}`,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[6] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", null, E(e.message), 1)]))), 128)),
			z("details", Hh, [n[8] ||= z("summary", { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:font-semibold" }, "Settings", -1), z("div", Uh, [z("div", Wh, [
				z("span", Gh, E(e.report.settings.dispositionCounts.import) + " can be imported ", 1),
				e.report.settings.dispositionCounts.pending ? (L(), R("span", Kh, E(e.report.settings.dispositionCounts.pending) + " not transferred ", 1)) : H("", !0),
				z("span", qh, E(e.report.settings.dispositionCounts.supersede) + " handled another way ", 1),
				z("span", Jh, E(e.report.settings.dispositionCounts.retire) + " not needed ", 1),
				z("span", Yh, E(e.report.settings.dispositionCounts.skip) + " ignored ", 1)
			]), z("div", Xh, [z("table", Zh, [n[7] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Value"),
				z("th", { scope: "col" }, "Source"),
				z("th", { scope: "col" }, "Drowsy"),
				z("th", { scope: "col" }, "Outcome")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(e.report.settings.items, (e) => (L(), R("tr", { key: e.field }, [
				z("th", Qh, E(e.label), 1),
				z("td", $h, E(e.sourceValue), 1),
				z("td", eg, E(e.currentValue), 1),
				z("td", null, [z("span", tg, E(j(wh)(e.status)), 1)])
			]))), 128))])])])])]),
			z("details", ng, [n[9] ||= z("summary", { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:font-semibold" }, " Dark Whispers content ", -1), z("div", rg, [z("p", ig, E(e.report.content.sourceTableName || "No source table detected"), 1), z("div", ag, [
				z("span", og, E(e.report.content.comparisonCounts.same) + " imported ", 1),
				z("span", sg, E(e.report.content.comparisonCounts.duplicate) + " duplicates ", 1),
				z("span", cg, E(e.report.content.comparisonCounts.new) + " new ", 1),
				z("span", lg, E(e.report.content.comparisonCounts.conflict) + " changed ", 1)
			])])]),
			e.report.launchers.unresolved.length ? (L(), R("details", ug, [z("summary", dg, " Launchers to check (" + E(e.report.launchers.unresolved.length) + ") ", 1), z("div", fg, [z("div", pg, [z("table", mg, [n[10] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Macro"),
				z("th", { scope: "col" }, "Match"),
				z("th", { scope: "col" }, "Hotbar"),
				z("th", { scope: "col" }, "Drowsy outcome")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(e.report.launchers.unresolved, (e) => (L(), R("tr", { key: e.macroId }, [
				z("th", hg, E(e.macroName), 1),
				z("td", null, E(j(Th)(e.match)), 1),
				z("td", null, E(e.hotbarSlots.length ? e.hotbarSlots.join(", ") : "None"), 1),
				z("td", gg, E(e.outcome), 1)
			]))), 128))])])])])])) : H("", !0),
			a.value ? (L(), R("div", {
				key: 1,
				class: Ce(["dui-alert", o.value ? "dui-alert-success" : "dui-alert-warning"]),
				role: "status"
			}, [z("i", {
				class: Ce(o.value ? "fa-solid fa-circle-check" : "fa-solid fa-shield-halved"),
				"aria-hidden": "true"
			}, null, 2), z("span", null, [V(" Reviewed by " + E(e.review?.reviewedByUserName) + " on " + E(new Date(e.review.reviewedAt).toLocaleString()) + ". ", 1), o.value ? (L(), R(I, { key: 0 }, [V(" GM Toolkit can now be disabled. Items marked “not transferred” will not be available after it is disabled. ")], 64)) : (L(), R(I, { key: 1 }, [V("Finish the active combat before disabling GM Toolkit.")], 64))])], 2)) : (L(), R("div", _g, [
				e.review ? (L(), R("div", vg, [...n[11] ||= [z("i", {
					class: "fa-solid fa-rotate",
					"aria-hidden": "true"
				}, null, -1), z("span", null, " Source data or import choices changed after the previous review. Check the current summary again. ", -1)]])) : H("", !0),
				z("label", yg, [N(z("input", {
					"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
					class: "dui-checkbox dui-checkbox-sm tw:mt-0.5 tw:shrink-0",
					type: "checkbox"
				}, null, 512), [[G, i.value]]), n[12] ||= z("span", { class: "tw:text-sm" }, " I reviewed every value, prompt, and launcher above. Anything not imported or replaced is intentionally retained or accepted for manual follow-up. ", -1)]),
				z("button", {
					class: "dui-btn dui-btn-accent dui-btn-sm tw:justify-self-end",
					disabled: e.isWorking || !i.value,
					type: "button",
					onClick: n[1] ||= (e) => r("review")
				}, [e.isWorking ? (L(), R("span", xg)) : (L(), R("i", Sg)), n[13] ||= V(" Save review ", -1)], 8, bg),
				n[14] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, " Review this summary before disabling GM Toolkit. Keep it enabled while any action lacks an equivalent; if combat is active, finish it first. ", -1)
			]))
		], 64)) : e.review ? (L(), R("div", Cg, [n[15] ||= z("i", {
			class: "fa-solid fa-circle-check",
			"aria-hidden": "true"
		}, null, -1), z("span", null, E(e.review.reviewedByUserName) + " reviewed the import on " + E(new Date(e.review.reviewedAt).toLocaleString()) + ". No GM Toolkit source data is currently available. ", 1)])) : H("", !0)])]));
	}
}), Tg = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-accent/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-launcher-title"
}, Eg = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Dg = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Og = { class: "tw:min-w-0 tw:flex-1" }, kg = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Ag = { class: "dui-badge dui-badge-sm" }, jg = ["disabled"], Mg = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Ng = {
	key: 1,
	class: "fa-solid fa-arrow-right-arrow-left",
	"aria-hidden": "true"
}, Pg = { class: "tw:flex tw:flex-wrap tw:gap-2 tw:text-xs" }, Fg = { class: "dui-badge dui-badge-sm" }, Ig = { class: "dui-badge dui-badge-sm" }, Lg = { class: "dui-badge dui-badge-sm" }, Rg = { class: "dui-badge dui-badge-sm" }, zg = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!" }, Bg = { class: "dui-table dui-table-sm tw:min-w-[46rem]" }, Vg = {
	key: 0,
	class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2"
}, Hg = ["checked", "onChange"], Ug = { class: "tw:sr-only" }, Wg = {
	key: 1,
	"aria-hidden": "true"
}, Gg = {
	class: "tw:max-w-56 tw:whitespace-normal",
	scope: "row"
}, Kg = { class: "dui-badge dui-badge-sm" }, qg = { class: "tw:whitespace-nowrap" }, Jg = { class: "tw:max-w-72 tw:whitespace-normal" }, Yg = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Xg = { class: "dui-badge dui-badge-sm" }, Zg = {
	key: 0,
	class: "tw:font-semibold"
}, Qg = { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/65!" }, $g = /* @__PURE__ */ P({
	__name: "GmToolkitLauncherMigrationPanel",
	props: {
		isWorking: { type: Boolean },
		preview: {},
		selections: {}
	},
	emits: ["remap", "selectionChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = U(() => Object.values(n.selections).filter((e) => e).length);
		function a(e) {
			return Rm(e);
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
		return (t, n) => (L(), R("section", Tg, [z("div", Eg, [
			z("div", Dg, [z("div", Og, [z("div", kg, [n[1] ||= z("h2", {
				id: "gm-toolkit-launcher-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Hotbar launchers ", -1), z("span", Ag, E(e.preview.candidates.length) + " found", 1)]), n[2] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Reviews this user’s hotbar without running or copying GM Toolkit commands. Customized macros stay untouched. ", -1)]), z("button", {
				class: "dui-btn dui-btn-accent dui-btn-sm tw:shrink-0",
				disabled: e.isWorking || i.value === 0,
				type: "button",
				onClick: n[0] ||= (e) => r("remap")
			}, [e.isWorking ? (L(), R("span", Mg)) : (L(), R("i", Ng)), V(" Remap " + E(i.value) + " slot" + E(i.value === 1 ? "" : "s"), 1)], 8, jg)]),
			z("div", Pg, [
				z("span", Fg, E(e.preview.counts.standard) + " stock", 1),
				z("span", Ig, E(e.preview.counts.customized) + " customized", 1),
				z("span", Lg, E(e.preview.counts.ambiguous) + " review", 1),
				z("span", Rg, E(e.preview.userName ?? "Current user"), 1)
			]),
			z("div", zg, [z("table", Bg, [n[3] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Remap"),
				z("th", { scope: "col" }, "GM Toolkit macro"),
				z("th", { scope: "col" }, "Match"),
				z("th", { scope: "col" }, "Hotbar"),
				z("th", { scope: "col" }, "Drowsy outcome")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(e.preview.candidates, (e) => (L(), R("tr", { key: e.macroId }, [
				z("td", null, [a(e) ? (L(), R("label", Vg, [z("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: o(e),
					type: "checkbox",
					onChange: (t) => s(e, t)
				}, null, 40, Hg), z("span", Ug, " Remap " + E(e.sourceMacroName) + " from " + E(u(e.hotbarSlots)), 1)])) : (L(), R("span", Wg, "—"))]),
				z("th", Gg, E(e.macroName), 1),
				z("td", null, [z("span", Kg, E(c(e)), 1)]),
				z("td", qg, E(u(e.hotbarSlots)), 1),
				z("td", Jg, [z("div", Yg, [z("span", Xg, E(l(e)), 1), e.replacement.macroName ? (L(), R("span", Zg, E(e.replacement.macroName), 1)) : H("", !0)]), z("p", Qg, E(e.replacement.label), 1)])
			]))), 128))])])]),
			n[5] ||= z("div", {
				class: "dui-alert tw:py-2 tw:text-xs",
				role: "note"
			}, [z("i", {
				class: "fa-solid fa-shield-halved",
				"aria-hidden": "true"
			}), z("span", null, " Remapping imports the Drowsy launcher if needed and updates only the selected hotbar slots. Source macros are never edited or deleted. ")], -1),
			(L(!0), R(I, null, F(e.preview.warnings, (e) => (L(), R("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[4] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", null, E(e), 1)]))), 128))
		])]));
	}
}), e_ = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-secondary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-import-title"
}, t_ = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, n_ = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, r_ = { class: "tw:min-w-0 tw:flex-1" }, i_ = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, a_ = { class: "dui-badge dui-badge-outline dui-badge-sm" }, o_ = {
	key: 0,
	class: "dui-badge dui-badge-sm"
}, s_ = {
	key: 0,
	class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/60!"
}, c_ = ["disabled"], l_ = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, u_ = {
	key: 1,
	class: "fa-solid fa-file-import",
	"aria-hidden": "true"
}, d_ = {
	class: "tw:flex tw:flex-wrap tw:gap-2 tw:text-xs",
	"aria-label": "Migration inventory"
}, f_ = { class: "dui-badge dui-badge-sm" }, p_ = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, m_ = { class: "dui-badge dui-badge-sm" }, h_ = { class: "dui-badge dui-badge-sm" }, g_ = { class: "dui-badge dui-badge-sm" }, __ = {
	key: 0,
	class: "dui-alert tw:py-2 tw:text-xs",
	role: "note"
}, v_ = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!" }, y_ = { class: "dui-table dui-table-sm tw:min-w-[38rem]" }, b_ = { class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2" }, x_ = ["checked", "onChange"], S_ = { class: "tw:sr-only" }, C_ = { scope: "row" }, w_ = ["title"], T_ = ["title"], E_ = { class: "dui-badge dui-badge-sm" }, D_ = /* @__PURE__ */ P({
	__name: "GmToolkitMigrationPanel",
	props: {
		isWorking: { type: Boolean },
		lastImportedAt: {},
		preview: {},
		selections: {}
	},
	emits: ["import", "selectionChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = U(() => Object.values(n.selections).filter((e) => e).length), a = U(() => n.preview.source?.active ? "Active module" : n.preview.source?.installed ? "Installed, disabled" : "Persisted world data");
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
		return (t, n) => (L(), R("section", e_, [z("div", t_, [
			z("div", n_, [z("div", r_, [
				z("div", i_, [
					n[1] ||= z("h2", {
						id: "gm-toolkit-import-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " Settings ", -1),
					z("span", a_, E(a.value), 1),
					e.preview.source?.moduleVersion ? (L(), R("span", o_, E(e.preview.source.moduleVersion), 1)) : H("", !0)
				]),
				n[2] ||= z("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " Choose which saved values to copy. Your GM Toolkit settings will not be changed. ", -1),
				e.lastImportedAt ? (L(), R("p", s_, " Last imported " + E(new Date(e.lastImportedAt).toLocaleString()), 1)) : H("", !0)
			]), z("button", {
				class: "dui-btn dui-btn-sm tw:border-secondary! tw:text-base-content!",
				disabled: e.isWorking || i.value === 0,
				type: "button",
				onClick: n[0] ||= (e) => r("import")
			}, [e.isWorking ? (L(), R("span", l_)) : (L(), R("i", u_)), V(" Import " + E(i.value || "selected"), 1)], 8, c_)]),
			z("div", d_, [
				z("span", f_, E(e.preview.dispositionCounts.import) + " can be imported ", 1),
				e.preview.dispositionCounts.pending ? (L(), R("span", p_, E(e.preview.dispositionCounts.pending) + " not transferred ", 1)) : H("", !0),
				z("span", m_, E(e.preview.dispositionCounts.supersede) + " handled another way ", 1),
				z("span", h_, E(e.preview.dispositionCounts.retire) + " not needed ", 1),
				z("span", g_, E(e.preview.dispositionCounts.skip) + " ignored ", 1)
			]),
			e.preview.source?.active ? H("", !0) : (L(), R("div", __, [...n[3] ||= [z("i", {
				class: "fa-solid fa-database",
				"aria-hidden": "true"
			}, null, -1), z("span", null, " Saved world data is available even while GM Toolkit is disabled. ", -1)]])),
			z("div", v_, [z("table", y_, [n[4] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Import"),
				z("th", { scope: "col" }, "Value"),
				z("th", { scope: "col" }, "GM Toolkit"),
				z("th", { scope: "col" }, "Drowsy"),
				z("th", { scope: "col" }, "Comparison")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(e.preview.imports, (t) => (L(), R("tr", { key: t.field }, [
				z("td", null, [z("label", b_, [z("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: e.selections[t.field],
					type: "checkbox",
					onChange: (e) => c(t.field, e)
				}, null, 40, x_), z("span", S_, "Import " + E(t.label), 1)])]),
				z("th", C_, E(t.label), 1),
				z("td", {
					class: "tw:max-w-48 tw:truncate",
					title: o(t.sourceValue)
				}, E(o(t.sourceValue)), 9, w_),
				z("td", {
					class: "tw:max-w-48 tw:truncate",
					title: o(t.currentValue)
				}, E(o(t.currentValue)), 9, T_),
				z("td", null, [z("span", E_, E(s(t.comparison)), 1)])
			]))), 128))])])]),
			(L(!0), R(I, null, F(e.preview.source?.warnings ?? [], (e) => (L(), R("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[5] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", null, E(e), 1)]))), 128))
		])]));
	}
}), O_ = { class: "tw:grid tw:min-w-0 tw:gap-3" }, k_ = {
	key: 4,
	class: "dui-alert",
	role: "status"
}, A_ = /* @__PURE__ */ P({
	__name: "GmToolkitMigrationApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Qm();
		n.initialize(t.initialization, t.actions);
		let { cutoverReport: r, darkWhispersConflictPolicy: i, darkWhispersSelections: a, darkWhispersTableId: o, errorMessage: s, isWorking: c, launcherSelections: l, preview: u, settingSelections: d, state: f, statusMessage: p } = Ts(n);
		return (e, t) => (L(), oa(xl, {
			description: "Copy the settings and content you want to keep, update safe hotbar links, and review the result before disabling GM Toolkit.",
			"error-message": j(s),
			icon: "fa-solid fa-box-archive",
			"status-message": j(p),
			title: "Import from GM Toolkit"
		}, {
			default: M(() => [z("div", O_, [
				j(u)?.source ? (L(), oa(D_, {
					key: 0,
					"is-working": j(c),
					"last-imported-at": j(f).migration?.importedAt,
					preview: j(u),
					selections: j(d),
					onImport: j(n).importSettings,
					onSelectionChange: j(n).setSettingSelection
				}, null, 8, [
					"is-working",
					"last-imported-at",
					"preview",
					"selections",
					"onImport",
					"onSelectionChange"
				])) : H("", !0),
				j(u) ? (L(), oa(Ch, {
					key: 1,
					"conflict-policy": j(i),
					"onUpdate:conflictPolicy": t[0] ||= (e) => /* @__PURE__ */ k(i) ? i.value = e : null,
					"is-working": j(c),
					preview: j(u).darkWhispers,
					"selected-table-id": j(o),
					selections: j(a),
					onImport: j(n).importDarkWhispers,
					onSelectionChange: j(n).setDarkWhispersSelection,
					onTableChange: j(n).setDarkWhispersTable
				}, null, 8, [
					"conflict-policy",
					"is-working",
					"preview",
					"selected-table-id",
					"selections",
					"onImport",
					"onSelectionChange",
					"onTableChange"
				])) : H("", !0),
				j(u)?.launchers.candidates.length ? (L(), oa($g, {
					key: 2,
					"is-working": j(c),
					preview: j(u).launchers,
					selections: j(l),
					onRemap: j(n).remapLaunchers,
					onSelectionChange: j(n).setLauncherSelection
				}, null, 8, [
					"is-working",
					"preview",
					"selections",
					"onRemap",
					"onSelectionChange"
				])) : H("", !0),
				j(r) || j(f).cutoverReview ? (L(), oa(wg, {
					key: 3,
					"is-working": j(c),
					report: j(r),
					review: j(f).cutoverReview,
					onReview: j(n).reviewCutover
				}, null, 8, [
					"is-working",
					"report",
					"review",
					"onReview"
				])) : H("", !0),
				!j(u) && !j(r) ? (L(), R("div", k_, [...t[1] ||= [z("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), z("span", null, "No GM Toolkit settings, content, or launchers were found in this world.", -1)]])) : H("", !0)
			])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
}), j_ = "9rXQv4uJcQoLBitt", M_ = "Dark Whispers", N_ = "wfrp4e-gm-toolkit", P_ = "gm-toolkit-tables";
function F_(e, t) {
	return e.flatMap((e) => R_(e, t)).sort(V_);
}
function I_(e, t, n = []) {
	let r = e.map((e) => ({
		...e,
		prompts: e.prompts.map((n) => ({
			...n,
			comparison: H_(e.tableId, n.resultId, n.text, t)
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
function L_(e, t, n, r) {
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
				source: U_(i, e.resultId),
				text: e.text
			}, l += 1;
			continue;
		}
		if (r) {
			u += 1;
			continue;
		}
		s.push({
			id: W_(i.tableId, e.resultId),
			source: U_(i, e.resultId),
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
function R_(e, t) {
	if (!Y(e)) return [];
	let n = J(e._id), r = J(e.name), i = z_(e, n, r);
	if (!n || !r || !i) return [];
	let a = [], o = (Array.isArray(e.results) ? e.results : []).flatMap((e, t) => {
		if (!Y(e)) return a.push(`Table row ${t + 1} was invalid and was skipped.`), [];
		let n = J(e._id), r = hf(e.description);
		return !n || !r ? (a.push(`Table row ${t + 1} had no stable ID or prompt text and was skipped.`), []) : [{
			range: B_(e.range, t),
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
function z_(e, t, n) {
	let r = Y(e._stats) ? e._stats : {}, i = Y(e.flags) ? e.flags : {}, a = Y(i.wfrp4e) ? i.wfrp4e : {}, o = i[N_], s = J(r.compendiumSource), c = n === M_;
	return c && s.includes(`${N_}.${P_}`) || J(a.key).toLowerCase() === "darkwhispers" || c && Y(o) ? "metadata" : t === j_ ? "id" : c ? "name" : void 0;
}
function B_(e, t) {
	if (Array.isArray(e) && e.length >= 2 && Number.isFinite(Number(e[0])) && Number.isFinite(Number(e[1]))) {
		let t = Number(e[0]), n = Number(e[1]);
		return t === n ? String(t) : `${t}–${n}`;
	}
	return String(t + 1);
}
function V_(e, t) {
	let n = {
		id: 2,
		metadata: 3,
		name: 1
	};
	return n[t.confidence] - n[e.confidence] || t.prompts.length - e.prompts.length;
}
function H_(e, t, n, r) {
	let i = r.prompts.find((n) => n.source?.type === "gm-toolkit" && n.source.tableId === e && n.source.resultId === t);
	return i ? i.text === n ? "same" : "conflict" : r.prompts.some((e) => e.text === n) ? "duplicate" : "new";
}
function U_(e, t) {
	return {
		...e.moduleVersion ? { moduleVersion: e.moduleVersion } : {},
		resultId: t,
		tableId: e.tableId,
		type: "gm-toolkit"
	};
}
function W_(e, t) {
	return `gm-toolkit:${e}:${t}`;
}
//#endregion
//#region src/functions/gm-toolkit/cutover.ts
function G_(e) {
	let t = Y_(e.preview, e.migration), n = X_(e.preview), r = Z_(e.preview), i = K_(), a = Q_(e.preview, e.sourceEvidence), o = {
		content: n,
		launchers: r,
		replacement: i,
		settings: {
			dispositionCounts: e.preview.dispositionCounts,
			items: t,
			total: e.preview.source?.settings.length ?? 0
		},
		source: {
			moduleVersion: a.moduleVersion ?? "",
			schemaVersion: a.schemaVersion
		}
	};
	return {
		combat: { ...e.combat },
		content: n,
		evidenceId: ev(JSON.stringify(o)),
		generatedAt: new Date(e.generatedAt).toISOString(),
		launchers: r,
		notices: $_(e.preview, t, n, r, e.combat),
		replacement: i,
		settings: {
			dispositionCounts: { ...e.preview.dispositionCounts },
			items: t,
			total: e.preview.source?.settings.length ?? 0
		},
		source: a,
		version: 1
	};
}
function K_() {
	let e = Nm.filter(({ replacement: e }) => ["partial", "pending"].includes(e.disposition)).map(({ name: e }) => e);
	return {
		ready: e.length === 0,
		unavailableCapabilities: e
	};
}
function q_(e, t, n) {
	let r = pf(n);
	if (!r || !t.id || !t.name.trim()) throw Error("A valid GM and review time are required to save the review.");
	return {
		evidenceId: e.evidenceId,
		reviewedAt: r,
		reviewedByUserId: t.id,
		reviewedByUserName: t.name.trim(),
		version: 1
	};
}
function J_(e) {
	if (!Y(e) || e.version !== 1) return;
	let t = J(e.evidenceId), n = pf(e.reviewedAt), r = J(e.reviewedByUserId), i = J(e.reviewedByUserName);
	return t && n && r && i ? {
		evidenceId: t,
		reviewedAt: n,
		reviewedByUserId: r,
		reviewedByUserName: i,
		version: 1
	} : void 0;
}
function Y_(e, t) {
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
function X_(e) {
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
function Z_(e) {
	let t = e.launchers.candidates, n = t.filter(({ match: e, replacement: t }) => e !== "standard" || t.disposition === "partial" || t.disposition === "pending").map((e) => ({
		disposition: e.replacement.disposition,
		hotbarSlots: [...e.hotbarSlots],
		macroId: e.macroId,
		macroName: e.macroName,
		match: e.match,
		outcome: e.replacement.label
	}));
	for (let e of t) Rm(e) && n.push({
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
function Q_(e, t) {
	let n = e.source, r = t === "current";
	return {
		active: r && n?.active === !0,
		evidence: t,
		installed: r && n?.installed === !0,
		...n?.moduleVersion ? { moduleVersion: n.moduleVersion } : {},
		schemaVersion: "9.2.0"
	};
}
function $_(e, t, n, r, i) {
	let a = [], o = K_(), s = t.filter(({ status: e }) => e === "changed-after-import" || e === "not-imported").length, c = n.comparisonCounts.conflict + n.comparisonCounts.new;
	i.active && a.push({
		code: "active-combat",
		message: "Finish the active combat before disabling GM Toolkit. Combat-specific data is not copied."
	}), o.ready || a.push({
		code: "replacement-incomplete",
		message: `${o.unavailableCapabilities.length} GM Toolkit action${o.unavailableCapabilities.length === 1 ? " does" : "s do"} not yet have a complete Drowsy equivalent. Keep GM Toolkit enabled if you use them.`
	}), s > 0 && a.push({
		code: "settings-review",
		message: `${s} compatible setting value${s === 1 ? " needs" : "s need"} an explicit keep-or-import decision.`
	}), c > 0 && a.push({
		code: "content-review",
		message: `${c} Dark Whispers prompt${c === 1 ? " needs" : "s need"} an explicit import-or-preserve decision.`
	}), r.unresolved.length > 0 && a.push({
		code: "launcher-review",
		message: `${r.unresolved.length} detected launcher${r.unresolved.length === 1 ? " needs" : "s need"} review before you disable GM Toolkit.`
	});
	let l = [
		...e.source?.warnings ?? [],
		...e.darkWhispers.warnings,
		...e.launchers.warnings
	];
	return a.push(...l.map((e) => ({
		code: "source-warning",
		message: e
	}))), a;
}
function ev(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t = Math.imul(t ^ e.charCodeAt(n), 16777619) >>> 0;
	return t.toString(16).padStart(8, "0");
}
//#endregion
//#region src/functions/gm-toolkit/import-fields.ts
var tv = /* @__PURE__ */ "sessionReference.defaultXpAmount.defaultXpSelection.defaultXpReason.automateOpposedTestAdvantage.automateDamageAdvantage.automateConditionAdvantage.promptMomentumLoss.clearAdvantageCombatJoin.clearAdvantageCombatLeave.persistAdvantageNotifications.holdingScene.exportChat.scenePullActivate.rangeNormalSight.rangeDarkVision.overrideNightVision.overrideDarkVision.defaultGroupDarkWhispers.messageDarkWhispers.suppressSpectatorNotice.quicktest1GroupTest.quicktest2GroupTest.quicktest3GroupTest.quicktest4GroupTest.defaultSkillGroupTest.bypassTestDialogGroupTest.defaultDifficultyGroupTest.defaultRollModeGroupTest.defaultTestModifierGroupTest.defaultPartyGroupTest.fallbackAdvancedSkills.fallbackAdjustDifficulty.summariseResultsThresholdGroupTest".split("."), nv = {
	automateConditionAdvantage: "Clear Advantage on conditions",
	automateDamageAdvantage: "Outmanoeuvring Advantage",
	automateOpposedTestAdvantage: "Opposed-test Advantage",
	bypassTestDialogGroupTest: "Bypass group-test dialogs",
	clearAdvantageCombatJoin: "Clear Advantage when joining combat",
	clearAdvantageCombatLeave: "Clear Advantage when leaving combat",
	defaultDifficultyGroupTest: "Group-test difficulty",
	defaultGroupDarkWhispers: "Dark Whispers group",
	defaultPartyGroupTest: "Group-test actor group",
	defaultRollModeGroupTest: "Group-test roll mode",
	defaultSkillGroupTest: "Group-test skill",
	defaultTestModifierGroupTest: "Group-test modifier",
	exportChat: "Export chat during turnover",
	fallbackAdjustDifficulty: "Advanced-skill fallback steps",
	fallbackAdvancedSkills: "Advanced-skill fallback",
	holdingScene: "Holding Scene",
	messageDarkWhispers: "Dark Whispers presentation",
	overrideDarkVision: "Override Dark Vision",
	overrideNightVision: "Override Night Vision",
	persistAdvantageNotifications: "Persistent Advantage notices",
	promptMomentumLoss: "Prompt for momentum loss",
	quicktest1GroupTest: "Group quick test 1",
	quicktest2GroupTest: "Group quick test 2",
	quicktest3GroupTest: "Group quick test 3",
	quicktest4GroupTest: "Group quick test 4",
	rangeDarkVision: "Dark Vision range",
	rangeNormalSight: "Normal vision range",
	scenePullActivate: "Pull Everyone behavior",
	summariseResultsThresholdGroupTest: "Group-test summary threshold",
	suppressSpectatorNotice: "Suppress unassigned-player warning"
};
//#endregion
//#region src/functions/gm-toolkit/migration.ts
function rv(e, t, n) {
	let r = pv(e, t);
	return {
		disposition: e.disposition,
		family: e.family,
		key: e.key,
		source: n,
		valid: r.valid,
		value: r.value
	};
}
function iv(e, t, n = {
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
		cv(e, t, "sessionReference", "sessionID", "Session reference"),
		cv(e, t, "defaultXpAmount", "addXPDefaultAmount", "XP amount"),
		cv(e, t, "defaultXpSelection", "defaultPartySessionTurnover", "Recipients"),
		cv(e, t, "defaultXpReason", "addXPDefaultReason", "XP reason"),
		...tv.slice(4).map((n) => av(e, t.featureSettings ?? {}, n))
	];
	return {
		darkWhispers: n,
		dispositionCounts: hv(e.settings, "disposition", [
			"import",
			"pending",
			"retire",
			"skip",
			"supersede"
		]),
		imports: i,
		launchers: r,
		source: e,
		sourceCounts: hv(e.settings, "source", [
			"baseline",
			"persisted",
			"registered"
		]),
		version: 1
	};
}
function av(e, t, n) {
	let r = fv(e.settings.find((e) => e.key === n)?.value), i = t[n] ?? "";
	return {
		comparison: dv(i, r),
		currentValue: i,
		field: n,
		label: nv[n] ?? n,
		sourceKey: n,
		sourceValue: r
	};
}
function ov(e) {
	if (!Y(e) || e.schemaVersion !== "9.2.0") return;
	let t = Array.isArray(e.settings) ? e.settings.flatMap(mv) : [];
	if (!t.length) return;
	let n = J(e.moduleVersion);
	return {
		active: e.active === !0,
		installed: e.installed === !0,
		...n ? { moduleVersion: n } : {},
		schemaVersion: "9.2.0",
		settings: t,
		warnings: Array.isArray(e.warnings) ? e.warnings.filter((e) => typeof e == "string") : []
	};
}
function sv(e) {
	return typeof e == "string" && tv.includes(e);
}
function cv(e, t, n, r, i) {
	let a = lv(n, e.settings.find((e) => e.key === r)?.value), o = uv(n, t);
	return {
		comparison: dv(o, a),
		currentValue: o,
		field: n,
		label: i,
		sourceKey: r,
		sourceValue: a
	};
}
function lv(e, t) {
	if (e === "defaultXpAmount") {
		let e = Number(t);
		return Number.isFinite(e) ? Math.round(e) : 0;
	}
	return e === "defaultXpSelection" ? t === "company" ? "company" : "party" : typeof t == "string" && t !== "null" ? t : "";
}
function uv(e, t) {
	switch (e) {
		case "sessionReference": return t.sessionReference;
		case "defaultXpAmount": return t.xpAwardSettings.defaultAmount;
		case "defaultXpReason": return t.xpAwardSettings.defaultReason;
		case "defaultXpSelection": return t.xpAwardSettings.defaultSelection;
	}
}
function dv(e, t) {
	return e === t ? "same" : e === "" ? "target-empty" : "different";
}
function fv(e) {
	return typeof e == "boolean" || typeof e == "number" || typeof e == "string" ? e : "";
}
function pv(e, t) {
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
function mv(e) {
	if (!Y(e)) return [];
	let t = e.disposition, n = e.family, r = e.source, i = e.value;
	return !gv(t) || !_v(n) || !vv(r) || !yv(i) ? [] : [{
		disposition: t,
		family: n,
		key: J(e.key),
		source: r,
		valid: e.valid === !0,
		value: i
	}];
}
function hv(e, t, n) {
	return Object.fromEntries(n.map((n) => [n, e.filter((e) => e[t] === n).length]));
}
function gv(e) {
	return [
		"import",
		"pending",
		"retire",
		"skip",
		"supersede"
	].includes(String(e));
}
function _v(e) {
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
function vv(e) {
	return [
		"baseline",
		"persisted",
		"registered"
	].includes(String(e));
}
function yv(e) {
	return [
		"boolean",
		"number",
		"string"
	].includes(typeof e) || Array.isArray(e);
}
//#endregion
//#region src/types/session-management/SessionManagement.ts
var bv = {
	currentSessionReference: "",
	sessions: [],
	version: 1
}, xv = { version: 1 };
//#endregion
//#region src/functions/gm-toolkit/state.ts
function Sv(e) {
	let t = wv(e);
	if (!t || t.version !== 1) return { ...xv };
	let n = Cv(t.migration), r = J_(t.cutoverReview);
	return {
		...r ? { cutoverReview: r } : {},
		...n ? { migration: n } : {},
		version: 1
	};
}
function Cv(e) {
	if (!Y(e) || !Y(e.xpAwardSettings)) return;
	let t = pf(e.importedAt), n = J(e.sessionReference), r = e.xpAwardSettings, i = r.defaultSelection;
	if (!t || i !== "party" && i !== "company" && i !== "world" || !Number.isFinite(Number(r.defaultAmount))) return;
	let a = ov(e.source), o = Array.isArray(e.appliedFields) ? e.appliedFields.filter(sv) : void 0;
	return {
		...o ? { appliedFields: o } : {},
		importedAt: t,
		sessionReference: n,
		...a ? { source: a } : {},
		...e.version === 2 ? { version: 2 } : {},
		xpAwardSettings: {
			defaultAmount: Math.round(Number(r.defaultAmount)),
			defaultReason: J(r.defaultReason),
			defaultSelection: i,
			includeTimestampInReason: r.includeTimestampInReason === !0
		}
	};
}
function wv(e) {
	if (typeof e == "string") try {
		let t = JSON.parse(e);
		return Y(t) ? t : void 0;
	} catch {
		return;
	}
}
//#endregion
//#region src/functions/session-management/session.ts
var Tv = 500;
function Ev(e) {
	let t = e.trim();
	if (!t) return "";
	let n = Number(t);
	return Number.isFinite(n) && Math.trunc(n) === n ? String(n + 1) : t;
}
function Dv(e, t, n) {
	let r = t.sessionReference.trim(), i = t.nextSessionReference.trim(), a = Lv(t.occurredAt, "session occurrence"), o = Lv(n.recordedAt, "session record");
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
			sessions: [s, ...e.sessions].slice(0, Tv)
		}
	};
}
function Ov(e) {
	let t = Iv(e);
	if (!t || t.version !== 1) return {
		...bv,
		sessions: []
	};
	let n = Array.isArray(t.sessions) ? t.sessions.flatMap(Mv).slice(0, Tv) : [], r = Cv(t.gmToolkitMigration), i = J_(t.gmToolkitCutoverReview), a = Nv(t.turnover);
	return {
		currentSessionReference: J(t.currentSessionReference),
		...i ? { gmToolkitCutoverReview: i } : {},
		...r ? { gmToolkitMigration: r } : {},
		sessions: n,
		...a ? { turnover: a } : {},
		version: 1
	};
}
function kv(e, t, n, r) {
	let i = t.trim(), a = Lv(n, "turnover start");
	if (!e || !i) throw Error("A turnover ID and session reference are required.");
	return {
		id: e,
		sessionReference: i,
		startedAt: a,
		steps: jv.map((e) => ({
			id: e,
			status: r.has(e) ? "pending" : "skipped"
		}))
	};
}
function Av(e, t, n, r, i) {
	let a = Lv(r, "turnover step");
	return {
		...e,
		steps: e.steps.map((e) => e.id === t ? {
			id: e.id,
			status: n,
			finishedAt: a,
			...i ? { detail: i } : {}
		} : { ...e })
	};
}
var jv = [
	"pause",
	"holding-scene",
	"xp",
	"fortune",
	"chat-export",
	"record"
];
function Mv(e) {
	if (!Y(e)) return [];
	let t = J(e.id), n = pf(e.occurredAt), r = pf(e.recordedAt), i = J(e.reference);
	return t && n && r && i ? [{
		id: t,
		occurredAt: n,
		recordedAt: r,
		reference: i
	}] : [];
}
function Nv(e) {
	if (!Y(e) || !Array.isArray(e.steps)) return;
	let t = J(e.id), n = J(e.sessionReference), r = pf(e.startedAt), i = e.steps.flatMap((e) => {
		if (!Y(e)) return [];
		let t = J(e.id), n = J(e.status);
		if (!Pv(t) || !Fv(n)) return [];
		let r = pf(e.finishedAt), i = J(e.detail);
		return [{
			id: t,
			status: n,
			...r ? { finishedAt: r } : {},
			...i ? { detail: i } : {}
		}];
	});
	return t && n && r && i.length === jv.length ? {
		id: t,
		sessionReference: n,
		startedAt: r,
		steps: i
	} : void 0;
}
function Pv(e) {
	return jv.includes(e);
}
function Fv(e) {
	return [
		"completed",
		"failed",
		"pending",
		"skipped"
	].includes(e);
}
function Iv(e) {
	if (typeof e == "string") try {
		let t = JSON.parse(e);
		return Y(t) ? t : void 0;
	} catch {
		return;
	}
}
function Lv(e, t) {
	let n = new Date(e);
	if (Number.isNaN(n.getTime())) throw Error(`Enter a valid ${t} date and time.`);
	return n.toISOString();
}
//#endregion
//#region src/module/session-management/settings/keys.ts
var Rv = {
	exportChat: "sessionExportChat",
	holdingSceneUuid: "sessionHoldingSceneUuid",
	pullPolicy: "sessionPullPolicy",
	state: "sessionManagementState"
};
//#endregion
//#region src/module/session-management/settings/load.ts
function zv() {
	return Ov(game.settings.get(t, Rv.state));
}
function Bv() {
	return zv().currentSessionReference;
}
function Vv() {
	let e = game.settings.get(t, Rv.pullPolicy);
	return {
		exportChat: game.settings.get(t, Rv.exportChat) === !0,
		holdingSceneUuid: String(game.settings.get("wfrp4e-enhanced-fear-terror", Rv.holdingSceneUuid) ?? "").trim(),
		pullPolicy: e === "activate" || e === "prompt" ? e : "pull"
	};
}
async function Hv(e) {
	await game.settings.set(t, Rv.holdingSceneUuid, e.holdingSceneUuid.trim()), await game.settings.set(t, Rv.exportChat, e.exportChat), await game.settings.set(t, Rv.pullPolicy, e.pullPolicy);
}
async function Uv(e) {
	await game.settings.set(t, Rv.state, JSON.stringify(e));
}
//#endregion
//#region src/types/xp-award/XpAward.ts
var Wv = {
	batches: [],
	version: 1
}, Gv = 500;
function Kv(e, t) {
	return {
		batches: [t, ...e.batches].slice(0, Gv),
		version: 1
	};
}
function qv(e) {
	if (typeof e != "string") return {
		...Wv,
		batches: []
	};
	try {
		let t = JSON.parse(e);
		return !Y(t) || t.version !== 1 || !Array.isArray(t.batches) ? {
			...Wv,
			batches: []
		} : {
			batches: t.batches.flatMap(Jv).slice(0, Gv),
			version: 1
		};
	} catch {
		return {
			...Wv,
			batches: []
		};
	}
}
function Jv(e) {
	if (!Y(e) || !Array.isArray(e.awards)) return [];
	let t = pf(e.awardedAt), n = J(e.id), r = J(e.reason), i = J(e.sessionReference), a = e.awards.flatMap(Yv);
	return !t || !n || a.length === 0 ? [] : [{
		awardedAt: t,
		awards: a,
		id: n,
		reason: r,
		sessionReference: i,
		totalChange: a.reduce((e, t) => e + t.amount, 0)
	}];
}
function Yv(e) {
	if (!Y(e)) return [];
	let t = e.category, n = Number(e.amount), r = Number(e.beforeXp), i = Number(e.afterXp);
	return t !== "standard" && t !== "companion" || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i) ? [] : [{
		actorId: J(e.actorId),
		actorName: J(e.actorName),
		afterXp: Math.round(i),
		amount: Math.round(n),
		beforeXp: Math.round(r),
		category: t
	}];
}
//#endregion
//#region src/module/xp-award/settings/keys.ts
var Xv = {
	auditLog: "xpAwardAuditLog",
	defaultAmount: "xpAwardDefaultAmount",
	defaultReason: "xpAwardDefaultReason",
	defaultSelection: "xpAwardDefaultSelection",
	includeTimestampInReason: "xpAwardIncludeTimestampInReason"
};
//#endregion
//#region src/module/xp-award/settings/load.ts
function Zv() {
	return {
		defaultAmount: Math.round(Number(game.settings.get(t, Xv.defaultAmount))),
		defaultReason: ty(Xv.defaultReason),
		defaultSelection: ny(),
		includeTimestampInReason: game.settings.get(t, Xv.includeTimestampInReason) === !0
	};
}
async function Qv(e) {
	let n = [
		[Xv.defaultAmount, Math.round(e.defaultAmount)],
		[Xv.defaultReason, e.defaultReason],
		[Xv.defaultSelection, e.defaultSelection],
		[Xv.includeTimestampInReason, e.includeTimestampInReason]
	];
	for (let [e, r] of n) await game.settings.set(t, e, r);
}
function $v() {
	return qv(game.settings.get(t, Xv.auditLog));
}
async function ey(e) {
	await game.settings.set(t, Xv.auditLog, JSON.stringify(e));
}
function ty(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function ny() {
	let e = ty(Xv.defaultSelection);
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/gm-toolkit/content-source.ts
function ry() {
	let e = game.modules.get(r)?.version;
	return F_(Array.from(game.tables).map((e) => iy(e.toObject())), e);
}
function iy(e) {
	if (typeof e != "object" || !e) return e;
	let t = Reflect.get(e, "results");
	return Array.isArray(t) ? {
		...e,
		results: t.map((e) => typeof e != "object" || !e ? e : {
			...e,
			description: ay(Reflect.get(e, "description"))
		})
	} : e;
}
function ay(e) {
	if (typeof e != "string") return "";
	if (!/[<&]/.test(e)) return e;
	let t = document.createElement("div");
	return t.innerHTML = e, t.querySelectorAll("script, style, template").forEach((e) => e.remove()), t.textContent ?? "";
}
//#endregion
//#region src/module/gm-toolkit/launcher-source.ts
var oy = `${t}.macros`;
function sy() {
	let e = Array.from(game.macros).flatMap(ly), t = game.user, n = /* @__PURE__ */ new Map();
	if (t) for (let e = 1; e <= 5; e += 1) for (let { macro: r, slot: i } of t.getHotbarMacros(e)) r?.id && n.set(r.id, [...n.get(r.id) ?? [], i]);
	return Lm(e, n, {
		id: t?.id,
		name: t?.name
	});
}
async function cy(e) {
	let t = Array.from(game.macros).find((t) => {
		let n = ly(t)[0];
		return Vm(n, e);
	});
	if (t) return {
		imported: !1,
		macro: t
	};
	let n = game.packs.get(oy);
	if (!n) throw Error("The Drowsy launcher compendium is unavailable.");
	return {
		imported: !0,
		macro: await game.macros.importFromCompendium(n, e)
	};
}
function ly(e) {
	let t = e.toObject();
	if (!Y(t)) return [];
	let n = J(t._id ?? e.id), r = J(t.name ?? e.name), i = J(t.command), a = J(t.type);
	if (!n || !r || !a) return [];
	let o = t._stats, s = Y(o) ? J(o.compendiumSource) : "";
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
var uy = { state: "gmToolkitMigrationState" };
//#endregion
//#region src/module/gm-toolkit/settings/load.ts
function dy() {
	let e = Sv(game.settings.get(t, uy.state));
	if (e.migration || e.cutoverReview) return e;
	let n = zv();
	return {
		...n.gmToolkitCutoverReview ? { cutoverReview: n.gmToolkitCutoverReview } : {},
		...n.gmToolkitMigration ? { migration: n.gmToolkitMigration } : {},
		version: 1
	};
}
async function fy(e) {
	await game.settings.set(t, uy.state, JSON.stringify(e));
}
//#endregion
//#region src/functions/gm-toolkit/catalog.ts
var Q = (e, t, n, r, i) => ({
	defaultValue: r,
	disposition: i,
	family: t,
	key: e,
	kind: n
}), py = [
	Q("automateOpposedTestAdvantage", "advantage", "boolean", !0, "import"),
	Q("automateDamageAdvantage", "advantage", "boolean", !0, "import"),
	Q("automateConditionAdvantage", "advantage", "boolean", !0, "import"),
	Q("promptMomentumLoss", "advantage", "boolean", !0, "import"),
	Q("clearAdvantageCombatJoin", "advantage", "boolean", !0, "import"),
	Q("clearAdvantageCombatLeave", "advantage", "boolean", !0, "import"),
	Q("persistAdvantageNotifications", "advantage", "boolean", !1, "import"),
	Q("sessionID", "session", "string", "0", "import"),
	Q("defaultPartySessionTurnover", "session", "string", "party", "import"),
	Q("addXPPrompt", "session", "boolean", !1, "supersede"),
	Q("addXPDefaultAmount", "session", "number", 20, "import"),
	Q("addXPDefaultReason", "session", "string", "Session %session% (%date%)", "import"),
	Q("holdingScene", "session", "string", "", "import"),
	Q("exportChat", "session", "boolean", !1, "import"),
	Q("scenePullActivate", "session", "string", "never", "import"),
	Q("rangeNormalSight", "vision", "number", 2, "import"),
	Q("rangeDarkVision", "vision", "number", 120, "import"),
	Q("overrideNightVision", "vision", "boolean", !1, "import"),
	Q("overrideDarkVision", "vision", "boolean", !1, "import"),
	Q("defaultGroupDarkWhispers", "dark-whispers", "string", "party", "import"),
	Q("messageDarkWhispers", "dark-whispers", "string", "taunt", "import"),
	Q("enableTokenHudExtensions", "token-hud", "boolean", !1, "retire"),
	Q("tokenHudStatusEffectsBackground", "token-hud", "string", "#cececeff", "retire"),
	Q("suppressSpectatorNotice", "spectators", "boolean", !1, "import"),
	Q("quicktest1GroupTest", "group-tests", "string", "Perception", "import"),
	Q("quicktest2GroupTest", "group-tests", "string", "Cool", "import"),
	Q("quicktest3GroupTest", "group-tests", "string", "Intuition", "import"),
	Q("quicktest4GroupTest", "group-tests", "string", "Gossip", "import"),
	Q("defaultSkillGroupTest", "group-tests", "string", "Lore (Reikland)", "import"),
	Q("bypassTestDialogGroupTest", "group-tests", "boolean", !0, "import"),
	Q("defaultDifficultyGroupTest", "group-tests", "string", "average", "import"),
	Q("defaultRollModeGroupTest", "group-tests", "string", "blindroll", "import"),
	Q("defaultTestModifierGroupTest", "group-tests", "number", 0, "import"),
	Q("defaultPartyGroupTest", "group-tests", "string", "party", "import"),
	Q("fallbackAdvancedSkills", "group-tests", "boolean", !1, "import"),
	Q("fallbackAdjustDifficulty", "group-tests", "number", 0, "import"),
	Q("summariseResultsThresholdGroupTest", "group-tests", "number", 2, "import"),
	Q("aggregateResultGroupTest", "group-tests", "array", [], "skip")
];
//#endregion
//#region src/module/gm-toolkit/source.ts
function my() {
	let e = game.modules.get(r), t = game.settings.storage?.get("world"), n = /* @__PURE__ */ new Map();
	for (let e of py) {
		let r = t?.getItem(_y(e.key));
		r != null && n.set(e.key, r);
	}
	if (!e && n.size === 0) return;
	let i = [], a = py.map((e) => {
		let t = hy(e, n);
		return t.valid || i.push(`${_y(e.key)} could not be normalized; the 9.2.0 baseline is shown instead.`), t;
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
function hy(e, t) {
	let n = t.get(e.key);
	return n === void 0 ? game.settings.settings.has(_y(e.key)) ? rv(e, game.settings.get(r, e.key), "registered") : rv(e, e.defaultValue, "baseline") : rv(e, gy(n, e), "persisted");
}
function gy(e, t) {
	try {
		return JSON.parse(e);
	} catch {
		return t.kind === "string" ? e : void 0;
	}
}
function _y(e) {
	return `${r}.${e}`;
}
//#endregion
//#region src/module/gm-toolkit/setting-targets.ts
var vy = {
	automateConditionAdvantage: td.automateCondition,
	automateDamageAdvantage: td.automateDamage,
	automateOpposedTestAdvantage: td.automateOpposed,
	bypassTestDialogGroupTest: hp.bypassDialog,
	clearAdvantageCombatJoin: td.clearOnJoin,
	clearAdvantageCombatLeave: td.clearOnLeave,
	defaultDifficultyGroupTest: hp.defaultDifficulty,
	defaultGroupDarkWhispers: xf.defaultGroup,
	defaultPartyGroupTest: hp.defaultGroup,
	defaultRollModeGroupTest: hp.defaultRollMode,
	defaultSkillGroupTest: hp.defaultSkill,
	defaultTestModifierGroupTest: hp.defaultModifier,
	exportChat: Rv.exportChat,
	fallbackAdjustDifficulty: hp.fallbackDifficultySteps,
	fallbackAdvancedSkills: hp.fallbackAdvanced,
	holdingScene: Rv.holdingSceneUuid,
	messageDarkWhispers: xf.messageStyle,
	overrideDarkVision: ym.overrideDarkVision,
	overrideNightVision: ym.overrideNightVision,
	persistAdvantageNotifications: td.persistentNotifications,
	promptMomentumLoss: td.promptMomentumLoss,
	quicktest1GroupTest: hp.quickTest1,
	quicktest2GroupTest: hp.quickTest2,
	quicktest3GroupTest: hp.quickTest3,
	quicktest4GroupTest: hp.quickTest4,
	rangeDarkVision: ym.darkRange,
	rangeNormalSight: ym.normalRange,
	scenePullActivate: Rv.pullPolicy,
	summariseResultsThresholdGroupTest: hp.summaryThreshold,
	suppressSpectatorNotice: eu.showUnassignedPlayerWarning
};
function yy() {
	return Object.fromEntries(Object.entries(vy).map(([e, n]) => [e, wy(e, game.settings.get(t, n))]));
}
async function by(e, n) {
	let r = vy[e];
	if (!r) throw Error(`No Drowsy setting target exists for ${e}.`);
	await game.settings.set(t, r, await Sy(e, n));
}
async function xy(e, t) {
	if (!vy[e]) throw Error(`No Drowsy setting target exists for ${e}.`);
	await Sy(e, t);
}
async function Sy(e, t) {
	return e === "holdingScene" ? Cy(String(t)) : e === "scenePullActivate" ? t === "always" ? "activate" : t === "prompt" ? "prompt" : "pull" : e === "suppressSpectatorNotice" ? t !== !0 : e === "messageDarkWhispers" ? t === "tempt" || t === "offer" ? "offer" : t === "plain" ? "plain" : "taunt" : Ty(t);
}
function Cy(e) {
	let t = e.trim();
	if (!t) return "";
	let n = Array.from(game.scenes).filter((e) => e.name.localeCompare(t, void 0, { sensitivity: "accent" }) === 0);
	if (n.length === 0) throw Error(`Holding Scene “${t}” was not found. Choose it manually in Session Management.`);
	if (n.length > 1) throw Error(`More than one Scene is named “${t}”. Choose it manually in Session Management.`);
	return n[0].uuid;
}
function wy(e, t) {
	if (e === "holdingScene") {
		let e = String(t ?? "");
		return Array.from(game.scenes ?? []).find((t) => t.uuid === e)?.name ?? "";
	}
	return e === "scenePullActivate" ? t === "activate" ? "always" : t === "prompt" ? "prompt" : "never" : e === "suppressSpectatorNotice" ? t !== !0 : e === "messageDarkWhispers" && t === "offer" ? "tempt" : Ty(t);
}
function Ty(e) {
	return typeof e == "boolean" || typeof e == "number" || typeof e == "string" ? e : "";
}
//#endregion
//#region src/module/gm-toolkit/migration.ts
function Ey() {
	let e = my(), t = Sf(), n = I_(ry(), t.library, t.warnings), r = sy();
	if (!(!e && n.candidates.length === 0 && r.candidates.length === 0)) return e ? iv(e, {
		featureSettings: yy(),
		sessionReference: zv().currentSessionReference,
		xpAwardSettings: Zv()
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
function Dy(e = Ey(), t = dy()) {
	let n = e?.source, r = t.migration?.source, i = n ?? r;
	if (!e && !i) return;
	let a = zv(), o = i ? iv(i, {
		featureSettings: yy(),
		sessionReference: a.currentSessionReference,
		xpAwardSettings: Zv()
	}, e?.darkWhispers, e?.launchers) : e, s = game.combats.active;
	return G_({
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
function Oy() {
	let e = dy(), t = Ey(), n = Dy(t, e);
	return {
		...n ? { cutoverReport: n } : {},
		...t ? { preview: t } : {},
		state: e
	};
}
//#endregion
//#region src/functions/gm-toolkit/apply.ts
function ky(e, t, n) {
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
async function Ay(e) {
	q(K.gmToolkitMigration);
	let t = Ey();
	if (!t?.source) throw Error("No installed module or persisted GM Toolkit world settings were found.");
	let n = Array.from(new Set(e.fields)).filter(sv);
	if (!n.length) throw Error("Select at least one value to import.");
	let r = n.filter((e) => ![
		"defaultXpAmount",
		"defaultXpReason",
		"defaultXpSelection",
		"sessionReference"
	].includes(e));
	r.sort((e, t) => e === "holdingScene" ? -1 : +(t === "holdingScene"));
	for (let e of r) {
		let n = t.source.settings.find((t) => t.key === e);
		n && await xy(e, n.value);
	}
	let i = zv(), a = ky(t, {
		sessionReference: i.currentSessionReference,
		xpAwardSettings: Zv()
	}, n), o = {
		appliedFields: n,
		importedAt: (/* @__PURE__ */ new Date()).toISOString(),
		sessionReference: a.sessionReference,
		source: t.source,
		version: 2,
		xpAwardSettings: a.xpAwardSettings
	};
	n.some((e) => [
		"defaultXpAmount",
		"defaultXpReason",
		"defaultXpSelection"
	].includes(e)) && await Qv(o.xpAwardSettings), n.includes("sessionReference") && await Uv({
		...i,
		currentSessionReference: o.sessionReference
	});
	for (let e of r) {
		let n = t.source.settings.find((t) => t.key === e);
		n && await by(e, n.value);
	}
	return await fy({
		...dy(),
		migration: o,
		version: 1
	}), ui.notifications.info(`${n.length} value${n.length === 1 ? "" : "s"} imported into Drowsy’s Toolkit.`), o;
}
var jy = Ay;
async function My(e) {
	q(K.gmToolkitMigration);
	let t = Ey();
	if (!t) throw Error("No GM Toolkit Dark Whispers table was found.");
	let n = L_(t.darkWhispers, Cf(), e, (/* @__PURE__ */ new Date()).toISOString());
	await wf(n.library);
	let r = Ey();
	if (!r) throw Error("The Dark Whispers prompts were saved but could not be reloaded.");
	return ui.notifications.info(`${n.added} Dark Whispers prompt${n.added === 1 ? "" : "s"} added, ${n.replaced} replaced, and ${n.skipped} unchanged.`), {
		...n,
		preview: r
	};
}
async function Ny(e) {
	q(K.gmToolkitMigration);
	let t = game.user;
	if (!t) throw Error("The current Foundry user is unavailable.");
	let n = qm(sy(), e.slots);
	if (!n.length) throw Error("Select at least one standard hotbar launcher with an available replacement.");
	let r = /* @__PURE__ */ new Map();
	for (let e of n) {
		let n = r.get(e.macroId);
		n || (n = await cy(e.macroId), r.set(e.macroId, n)), await t.assignHotbarMacro(n.macro, e.slot);
	}
	let i = Array.from(r.values()).filter(({ imported: e }) => e).length;
	return ui.notifications.info(`${n.length} hotbar slot${n.length === 1 ? "" : "s"} remapped to Drowsy launchers.`), {
		importedLaunchers: i,
		preview: sy(),
		remappedSlots: n.length
	};
}
async function Py() {
	q(K.gmToolkitMigration);
	let e = game.user;
	if (!e) throw Error("The current Foundry user is unavailable.");
	let t = dy(), n = Dy(void 0, t);
	if (!n) throw Error("No GM Toolkit data is available to review.");
	let r = q_(n, {
		id: e.id,
		name: e.name
	}, (/* @__PURE__ */ new Date()).toISOString());
	return await fy({
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
var Fy = class extends Kc {
	static ACCESS_POLICY = K.gmToolkitMigration;
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
		return A_;
	}
	getVueProps() {
		return {
			actions: {
				getCutoverReport: Dy,
				importDarkWhispers: My,
				importSettings: Ay,
				remapLaunchers: Ny,
				reviewCutover: Py
			},
			initialization: Oy()
		};
	}
};
//#endregion
//#region src/module/apps/gm-toolkit-migration/open.ts
async function Iy() {
	let e = new Fy();
	return await e.render(!0), e;
}
//#endregion
//#region src/functions/xp-curve/calculate.ts
var Ly = .01, Ry = 2 ** 53 - 1;
function zy(e) {
	return {
		companionMultiplier: Gy(e.companionMultiplier, 0, 1),
		curveExponent: Gy(e.curveExponent, .1, 5),
		gapForMaximumAward: Math.max(1, Ky(e.gapForMaximumAward)),
		maximumAward: Math.max(0, Ky(e.maximumAward)),
		scaleExponent: Gy(e.scaleExponent, 0, 2),
		scalePivot: Math.max(1, Ky(e.scalePivot))
	};
}
function By(e, t) {
	let n = e.filter((e) => e.selected), r = zy(t), i = Math.max(0, ...n.map((e) => e.totalXp)), a = n.map((e) => {
		let t = Ky(e.totalXp), n = Math.max(0, i - t), a = e.category === "companion" ? r.companionMultiplier : 1, o = Vy(n, r), s = Hy(t, r), c = Math.max(0, Math.round(o * s * a)), l = Math.min(r.maximumAward, c);
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
function Vy(e, t) {
	let n = zy(t), r = Math.max(0, Number.isFinite(e) ? e : 0) / n.gapForMaximumAward, i = n.maximumAward * r ** n.curveExponent;
	return Number.isFinite(i) ? Math.min(i, Ry) : Ry;
}
function Hy(e, t) {
	let n = zy(t), r = Math.max(0, Number.isFinite(e) ? e : 0);
	return Math.min(1, n.scalePivot / Math.max(r, n.scalePivot)) ** n.scaleExponent;
}
function Uy(e, t = e.gapForMaximumAward * 1.4, n = 24) {
	let r = zy(e), i = Math.max(2, Ky(n)), a = Math.max(r.gapForMaximumAward * 1.4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			award: Vy(n, r),
			gap: n
		};
	});
}
function Wy(e, t = e.scalePivot * 4, n = 32) {
	let r = zy(e), i = Math.max(2, Ky(n)), a = Math.max(1e3, r.scalePivot * 4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			multiplier: Hy(n, r),
			recipientXp: n
		};
	});
}
function Gy(e, t, n) {
	let r = Number(e);
	return Math.min(n, Math.max(t, Number.isFinite(r) ? r : Ly));
}
function Ky(e) {
	let t = Number(e);
	return Number.isFinite(t) ? Math.round(t) : 0;
}
//#endregion
//#region src/functions/xp-curve/reason.ts
function qy(e, t) {
	return e.replaceAll("%session%", t.session).replaceAll("%date%", t.date).replaceAll("%datetime%", t.datetime ?? "").replace(/\s+\(\s*\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function Jy(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/types/xp-curve/XpCurve.ts
var Yy = {
	companionMultiplier: .5,
	curveExponent: 1.75,
	gapForMaximumAward: 5e3,
	maximumAward: 1e3,
	scaleExponent: 1,
	scalePivot: 7500
}, Xy = {
	defaultReason: "XP Curve %session% (%date%)",
	defaultSelection: "company",
	parameters: { ...Yy }
};
//#endregion
//#region src/state/apps/shared/xp-actor-selection.ts
function Zy(e) {
	let t = /* @__PURE__ */ A([]), n = U(() => t.value.filter((e) => e.selected)), r = /* @__PURE__ */ new Set();
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
var Qy = ws("xp-curve-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = Zy("The XP Curve Console"), o = /* @__PURE__ */ A({ ...Yy }), s = /* @__PURE__ */ A(""), c = /* @__PURE__ */ A("party"), l = /* @__PURE__ */ A("default"), u = /* @__PURE__ */ A(), d = /* @__PURE__ */ A(!1), f, p, m = U(() => By(e.value, o.value)), h = U(() => m.value.awards.filter((e) => e.award > 0).length), g = U(() => r.value.length >= 2 && m.value.totalAward > 0 && !d.value), _ = U(() => qy(s.value, x()));
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
}), $y = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:justify-end tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-3" }, eb = ["disabled"], tb = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, nb = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("footer", $y, [z("button", {
			class: "dui-btn dui-btn-primary tw:w-full tw:min-w-0 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md tw:min-[32rem]:w-auto tw:min-[32rem]:min-w-52",
			disabled: e.disabled,
			type: "button",
			onClick: r[0] ||= (e) => n("action")
		}, [e.working ? (L(), R("span", tb)) : (L(), R("i", {
			key: 1,
			class: Ce(e.icon),
			"aria-hidden": "true"
		}, null, 2)), V(" " + E(e.label), 1)], 8, eb)]));
	}
}), rb = { class: "tw:cursor-pointer" }, ib = ["checked", "disabled"], ab = { class: "tw:sr-only" }, ob = /* @__PURE__ */ P({
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
		return (t, n) => (L(), R("label", rb, [z("input", {
			class: "dui-checkbox dui-checkbox-primary dui-checkbox-sm tw:appearance-none! tw:rounded-sm! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none! tw:checked:text-primary-content!",
			type: "checkbox",
			checked: e.checked,
			disabled: e.disabled,
			onChange: i
		}, null, 40, ib), z("span", ab, "Include " + E(e.actorName) + " in " + E(e.purpose), 1)]));
	}
}), sb = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipients-title"
}, cb = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, lb = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, ub = { class: "tw:flex tw:items-center tw:gap-2" }, db = { class: "dui-badge dui-badge-sm" }, fb = { class: "tw:flex tw:flex-wrap tw:gap-1" }, pb = ["disabled"], mb = ["disabled"], hb = ["disabled"], gb = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100!"
}, _b = { class: "dui-table dui-table-sm tw:min-w-[52rem]" }, vb = {
	class: "tw:min-w-44",
	scope: "row"
}, yb = { class: "tw:block tw:font-semibold" }, bb = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, xb = { class: "tw:text-right tw:tabular-nums" }, Sb = { class: "tw:text-right tw:tabular-nums" }, Cb = { class: "tw:text-right tw:tabular-nums" }, wb = { class: "tw:text-right tw:tabular-nums" }, Tb = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, Eb = { class: "tw:text-right tw:tabular-nums" }, Db = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Ob = /* @__PURE__ */ P({
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
		return (t, n) => (L(), R("section", sb, [z("div", cb, [z("div", lb, [z("div", null, [z("div", ub, [n[3] ||= z("h2", {
			id: "recipients-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipients ", -1), z("span", db, E(e.plan.awards.length) + " selected", 1)]), n[4] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The XP leader sets the gap only. Decay is calculated from each recipient’s own total. ", -1)]), z("div", fb, [
			z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[0] ||= (e) => r("select-all", !0)
			}, " All ", 8, pb),
			z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[1] ||= (e) => r("select-all", !1)
			}, " None ", 8, mb),
			z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[2] ||= (e) => r("reset")
			}, " Reset ", 8, hb)
		])]), e.actors.length ? (L(), R("div", gb, [z("table", _b, [n[5] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
			z("th", { scope: "col" }, "Use"),
			z("th", { scope: "col" }, "Actor"),
			z("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Total XP"),
			z("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Leader gap"),
			z("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Initial XP"),
			z("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Decay"),
			z("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Final award"),
			z("th", {
				class: "tw:text-right",
				scope: "col"
			}, "New total")
		])], -1), z("tbody", null, [(L(!0), R(I, null, F(e.actors, (t) => (L(), R("tr", {
			key: t.id,
			class: Ce({ "tw:bg-base-200!": t.selected })
		}, [
			z("td", null, [B(ob, {
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
			z("th", vb, [z("span", yb, E(t.name), 1), t.category === "companion" ? (L(), R("span", bb, " Companion rate ")) : H("", !0)]),
			z("td", xb, E(t.totalXp), 1),
			z("td", Sb, E(i(t.id)?.gap ?? "—"), 1),
			z("td", Cb, E(i(t.id) ? Math.round(i(t.id)?.catchUpValue ?? 0) : "—"), 1),
			z("td", wb, E(i(t.id) ? `${Math.round((i(t.id)?.decayMultiplier ?? 0) * 100)}%` : "—"), 1),
			z("td", Tb, E(i(t.id) ? `+${i(t.id)?.award}` : "—"), 1),
			z("td", Eb, E(i(t.id)?.afterXp ?? "—"), 1)
		], 2))), 128))])])])) : (L(), R("div", Db, [...n[6] ||= [z("i", {
			class: "fa-solid fa-user-slash",
			"aria-hidden": "true"
		}, null, -1), z("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]));
	}
}), kb = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:mb-3",
	role: "status"
}, Ab = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[68rem]:grid-cols-[1.25fr_1fr]" }, jb = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "award-message-title"
}, Mb = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Nb = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, Pb = { class: "tw:m-0 tw:break-words tw:font-semibold" }, Fb = /* @__PURE__ */ P({
	__name: "XpAwardWorkspace",
	props: /*@__PURE__*/ Br({
		actors: {},
		disabled: { type: Boolean },
		plan: {},
		resolvedReason: {},
		selectionSource: {}
	}, {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {}
	}),
	emits: /*@__PURE__*/ Br([
		"reset",
		"select-all",
		"update:selected"
	], ["update:defaultReason"]),
	setup(e, { emit: t }) {
		let n = oi(e, "defaultReason"), r = t;
		function i(e, t) {
			r("update:selected", e, t);
		}
		return (t, a) => (L(), R(I, null, [e.selectionSource === "targets" && e.plan.awards.length === 0 ? (L(), R("div", kb, [...a[3] ||= [z("i", {
			class: "fa-solid fa-bullseye",
			"aria-hidden": "true"
		}, null, -1), z("span", { class: "tw:min-w-0 tw:break-words" }, " The targeted tokens do not contain eligible WFRP4e character actors. ", -1)]])) : H("", !0), z("div", Ab, [B(Ob, {
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
		]), z("section", jb, [z("div", Mb, [
			a[5] ||= z("div", null, [z("h2", {
				id: "award-message-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Award message "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This reason is written to each recipient’s WFRP4e experience log. ")], -1),
			a[6] ||= z("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-award-reason"
			}, " Experience log reason ", -1),
			N(z("input", {
				id: "xp-award-reason",
				"onUpdate:modelValue": a[2] ||= (e) => n.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
				type: "text"
			}, null, 512), [[W, n.value]]),
			a[7] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
				V(" Supports Drowsy’s "),
				z("code", null, "%session%"),
				V(" reference and Foundry’s "),
				z("code", null, "%date%"),
				V(" value. ")
			], -1),
			z("div", Nb, [a[4] ||= z("span", { class: "tw:text-xs tw:text-base-content/60!" }, "This award will record", -1), z("p", Pb, E(e.resolvedReason || "No reason"), 1)]),
			a[8] ||= z("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [z("i", {
				class: "fa-solid fa-circle-info",
				"aria-hidden": "true"
			}), z("span", { class: "tw:min-w-0 tw:break-words" }, " Use the cog in the header to change curves and recipient defaults. Saving there refreshes this award ledger with the new calculation. ")], -1)
		])])])], 64));
	}
}), Ib = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, Lb = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, Rb = ["title"], zb = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure XP Curve Console"
}, Bb = { class: "tw:grid tw:grid-cols-2 tw:gap-px tw:border-b tw:border-base-content/20! tw:bg-base-content/20! tw:min-[38rem]:grid-cols-4" }, Vb = { class: "tw:contents" }, Hb = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Ub = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Wb = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Gb = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Kb = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, qb = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Jb = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Yb = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Xb = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R(I, null, [z("header", Ib, [r[3] ||= z("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [z("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [z("i", { class: "fa-solid fa-chart-line" })])], -1), z("div", Lb, [z("span", {
			class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:max-w-56 tw:whitespace-normal tw:border-base-content/25! tw:py-1 tw:text-center",
			title: e.selectionSource === "targets" ? "Eligible targeted character tokens were selected when the console opened." : "No tokens were targeted, so the configured recipient default was used."
		}, [r[1] ||= z("span", {
			class: "dui-status dui-status-primary dui-status-sm tw:shrink-0",
			"aria-hidden": "true"
		}, null, -1), V(" " + E(e.selectionLabel), 1)], 8, Rb), z("span", zb, [z("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure XP Curve Console",
			title: "Configure XP Curve Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [z("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]), z("div", Bb, [z("dl", Vb, [
			z("div", Hb, [r[4] ||= z("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Selected recipients", -1), z("dd", Ub, E(e.selectedCount), 1)]),
			z("div", Wb, [r[5] ||= z("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "XP leader total", -1), z("dd", Gb, E(e.highestXp), 1)]),
			z("div", Kb, [r[6] ||= z("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Recipients gaining XP", -1), z("dd", qb, E(e.positiveAwardCount), 1)]),
			z("div", Jb, [r[7] ||= z("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Total award", -1), z("dd", Yb, E(e.totalAward) + " XP ", 1)])
		])])], 64));
	}
}), Zb = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Qb = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, $b = { class: "tw:min-w-0 tw:break-words" }, ex = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, tx = /* @__PURE__ */ P({
	__name: "XpCurveConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Qy();
		n.initialize(t.initialization, t.actions);
		let { actors: r, canApply: i, defaultReason: a, errorMessage: o, isWorking: s, plan: c, positiveAwardCount: l, resolvedReason: u, selectedActors: d, selectionSource: f } = Ts(n), p = U(() => f.value === "targets" ? "Recipients: targeted tokens" : `Recipients: ${{
			company: "company default",
			party: "party default",
			world: "world default"
		}[t.initialization.defaultSelection]}`);
		return (e, m) => (L(), R("main", Zb, [
			B(Xb, {
				"highest-xp": j(c).highestXp,
				"positive-award-count": j(l),
				"selected-count": j(d).length,
				"selection-label": p.value,
				"selection-source": j(f),
				"total-award": j(c).totalAward,
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
			j(o) ? (L(), R("div", Qb, [m[1] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", $b, E(j(o)), 1)])) : H("", !0),
			z("div", ex, [B(Fb, {
				"default-reason": j(a),
				"onUpdate:defaultReason": m[0] ||= (e) => /* @__PURE__ */ k(a) ? a.value = e : null,
				actors: j(r),
				disabled: j(s),
				plan: j(c),
				"resolved-reason": j(u),
				"selection-source": j(f),
				onReset: j(n).resetSelection,
				onSelectAll: j(n).setAllActorsSelected,
				"onUpdate:selected": j(n).setActorSelected
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
			B(nb, {
				disabled: !j(i),
				icon: "fa-solid fa-award",
				label: `Award ${j(c).totalAward} XP`,
				working: j(s),
				onAction: j(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])
		]));
	}
}), nx = {
	...Xy,
	launchers: { tokenControls: !0 },
	parameters: { ...Xy.parameters }
}, rx = ws("xp-curve-configurator", () => {
	let e = /* @__PURE__ */ A([]), t = /* @__PURE__ */ A({ ...nx.parameters }), n = /* @__PURE__ */ A(nx.defaultReason), r = /* @__PURE__ */ A(nx.defaultSelection), i = /* @__PURE__ */ A({ ...nx.launchers }), a = /* @__PURE__ */ A(), o = /* @__PURE__ */ A(), s = /* @__PURE__ */ A(!1), c, l = U(() => By(e.value, t.value)), u = U(() => Math.max(0, ...l.value.awards.map((e) => e.gap))), d = U(() => Uy(t.value, Math.max(u.value * 1.1, 1))), f = U(() => Wy(t.value, Math.max(l.value.highestXp * 1.1, 1)));
	function p(s, l) {
		c = l, e.value = s.actors.map((e) => ({ ...e })), t.value = { ...s.parameters }, n.value = s.defaultReason, r.value = s.defaultSelection, i.value = { ...s.launchers }, a.value = void 0, o.value = void 0;
	}
	function m(e) {
		r.value = e, o.value = void 0;
	}
	function h() {
		t.value = { ...nx.parameters }, n.value = nx.defaultReason, r.value = nx.defaultSelection, i.value = { ...nx.launchers }, a.value = void 0, o.value = "Defaults restored. Save configuration to apply them.";
	}
	async function g() {
		if (!s.value) {
			s.value = !0, a.value = void 0, o.value = void 0;
			try {
				t.value = zy(t.value);
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
function ix(e, t, n, r) {
	return {
		maximumGap: Math.max(1, e * 1.4, ...n.map((e) => e.gap), ...r.map((e) => e.gap * 1.05)),
		maximumValue: Math.max(1, t * 1.25, ...n.map((e) => e.award * 1.05), ...r.map((e) => e.catchUpValue * 1.05))
	};
}
function ax(e, t, n) {
	return { maximumRecipientXp: Math.max(1e3, e * 4, ...t.map((e) => e.recipientXp), ...n.map((e) => e.beforeXp * 1.05)) };
}
function ox(e) {
	let t = (t) => px(t, e.bounds.maximumGap), n = (t) => mx(t, e.bounds.maximumValue);
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
function sx(e) {
	let t = (t) => px(t, e.bounds.maximumRecipientXp), n = hx;
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
function cx(e, t, n, r) {
	if (e === "reference") {
		let r = gx((t.x - 68) / 472, .001, 1), i = 1 - gx((t.y - 24) / 192, 0, 1);
		return {
			gapForMaximumAward: Math.max(1, Math.round(r * n.maximumGap)),
			kind: e,
			maximumAward: Math.max(0, Math.round(i * n.maximumValue))
		};
	}
	let i = gx((216 - t.y) / 192 * (n.maximumValue / Math.max(1, r)), .03, .99);
	return {
		curveExponent: _x(gx(Math.log(i) / Math.log(.5), .1, 5), .05),
		kind: e
	};
}
function lx(e, t, n) {
	if (e === "pivot") {
		let r = gx((t.x - 68) / 472, .001, 1);
		return {
			kind: e,
			scalePivot: Math.max(1, Math.round(r * n.maximumRecipientXp))
		};
	}
	let r = gx(1 - (t.y - 24) / 192, .25, .99);
	return {
		kind: e,
		scaleExponent: _x(gx(Math.log(r) / Math.log(.5), 0, 2), .05)
	};
}
function ux(e, t, n) {
	let r = Math.max(10, Math.round(t / 20)), i = Math.max(1, Math.round(Math.max(1, n) / 20));
	if (e === "ArrowLeft" || e === "ArrowRight") return { gapForMaximumAward: Math.max(1, t + (e === "ArrowLeft" ? -r : r)) };
	if (e === "ArrowUp" || e === "ArrowDown") return { maximumAward: Math.max(0, n + (e === "ArrowUp" ? i : -i)) };
}
function dx(e, t, n, r) {
	if ([
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp"
	].includes(e)) return _x(gx(t + (e === "ArrowUp" || e === "ArrowRight" ? -1 : 1) * .05, n, r), .05);
}
function fx(e, t) {
	if (e !== "ArrowLeft" && e !== "ArrowRight") return;
	let n = Math.max(100, Math.round(t / 20));
	return Math.max(1, t + (e === "ArrowLeft" ? -n : n));
}
function px(e, t) {
	return 68 + Math.max(0, e) / Math.max(1, t) * 472;
}
function mx(e, t) {
	return 24 + (1 - Math.max(0, e) / Math.max(1, t)) * 192;
}
function hx(e) {
	return 24 + (1 - gx(e, 0, 1)) * 192;
}
function gx(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function _x(e, t) {
	let n = t.toString().split(".")[1]?.length ?? 0;
	return Number((Math.round(e / t) * t).toFixed(n));
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graphMath.ts
function vx(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: (t.clientX - n.left) / n.width * 560,
		y: (t.clientY - n.top) / n.height * 270
	};
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/GraphCanvas.vue?vue&type=script&setup=true&lang.ts
var yx = ["viewBox", "aria-labelledby"], bx = ["id"], xx = ["id"], Sx = [
	"x1",
	"x2",
	"y1",
	"y2"
], Cx = [
	"x1",
	"x2",
	"y1",
	"y2"
], wx = [
	"x1",
	"x2",
	"y1",
	"y2"
], Tx = ["points"], Ex = ["cx", "cy"], Dx = ["x", "y"], Ox = ["x", "y"], kx = ["x", "y"], Ax = ["x", "y"], jx = ["x", "y"], Mx = ["x", "y"], Nx = ["transform", "y"], Px = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("svg", {
			class: "tw:block tw:h-auto tw:w-full tw:max-w-full tw:touch-none tw:[user-select:none]",
			viewBox: `0 0 ${j(560)} ${j(270)}`,
			role: "img",
			"aria-labelledby": `${e.titleId} ${e.descriptionId}`,
			onPointercancel: r[0] ||= (e) => n("pointercancel", e),
			onPointermove: r[1] ||= (e) => n("pointermove", e),
			onPointerup: r[2] ||= (e) => n("pointerup", e)
		}, [
			z("title", { id: e.titleId }, E(e.title), 9, bx),
			z("desc", { id: e.descriptionId }, E(e.description), 9, xx),
			z("line", {
				class: "tw:text-base-content/25!",
				x1: j(68),
				x2: j(68),
				y1: j(24),
				y2: j(24) + j(192),
				stroke: "currentColor"
			}, null, 8, Sx),
			z("line", {
				class: "tw:text-base-content/25!",
				x1: j(68),
				x2: j(68) + j(472),
				y1: j(24) + j(192),
				y2: j(24) + j(192),
				stroke: "currentColor"
			}, null, 8, Cx),
			z("line", {
				class: "tw:text-base-content/25!",
				x1: e.verticalGuideX,
				x2: e.verticalGuideX,
				y1: j(24),
				y2: j(24) + j(192),
				stroke: "currentColor",
				"stroke-dasharray": "4 5"
			}, null, 8, wx),
			Nr(t.$slots, "guides"),
			z("polyline", {
				class: "tw:text-secondary!",
				fill: "none",
				points: e.points,
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "3"
			}, null, 8, Tx),
			(L(!0), R(I, null, F(e.markers, (e) => (L(), R("g", {
				key: e.actorId,
				class: "tw:text-base-content!",
				"aria-hidden": "true"
			}, [z("circle", {
				cx: e.x,
				cy: e.y,
				fill: "currentColor",
				r: "9"
			}, [z("title", null, E(e.label), 1)], 8, Ex), z("text", {
				class: "tw:text-base-100!",
				x: e.x,
				y: e.y + 3,
				fill: "currentColor",
				"font-size": "9",
				"font-weight": "700",
				"text-anchor": "middle"
			}, E(e.index), 9, Dx)]))), 128)),
			Nr(t.$slots, "handles"),
			z("text", {
				class: "tw:text-base-content/65!",
				x: j(68),
				y: j(24) + j(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "middle"
			}, " 0 ", 8, Ox),
			z("text", {
				class: "tw:text-base-content/65!",
				x: j(68) + j(472),
				y: j(24) + j(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, E(e.maximumXLabel), 9, kx),
			z("text", {
				class: "tw:text-base-content/75!",
				x: j(68) + j(472) / 2,
				y: j(270) - 8,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, E(e.xAxisLabel), 9, Ax),
			e.maximumYLabel ? (L(), R("text", {
				key: 0,
				class: "tw:text-base-content/65!",
				x: j(68) - 10,
				y: j(24) + 4,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, E(e.maximumYLabel), 9, jx)) : H("", !0),
			z("text", {
				class: "tw:text-base-content/65!",
				x: j(68) - 10,
				y: j(24) + j(192) + 3,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, E(e.minimumYLabel), 9, Mx),
			z("text", {
				class: "tw:text-base-content/75!",
				transform: `rotate(-90 16 ${j(24) + j(192) / 2})`,
				x: "16",
				y: j(24) + j(192) / 2,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, E(e.yAxisLabel), 9, Nx),
			Nr(t.$slots, "labels")
		], 40, yx));
	}
}), Fx = [
	"role",
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], Ix = ["x", "y"], Lx = ["x", "y"], Rx = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("g", {
			class: "tw:cursor-grab tw:text-secondary!",
			role: e.role ?? "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= zo((e) => n("pointerdown", e), ["stop"])
		}, [z("rect", {
			x: e.x - 8,
			y: e.y - 8,
			fill: "currentColor",
			height: "16",
			rx: "2",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18",
			width: "16"
		}, null, 8, Ix), z("rect", {
			class: "tw:text-base-100!",
			x: e.x - 3,
			y: e.y - 3,
			fill: "currentColor",
			height: "6",
			rx: "1",
			width: "6"
		}, null, 8, Lx)], 40, Fx));
	}
}), zx = {
	key: 0,
	class: "tw:mt-2"
}, Bx = { class: "tw:mt-1 tw:grid tw:[list-style:none] tw:grid-cols-1 tw:gap-x-3 tw:gap-y-1 tw:p-0 tw:text-xs tw:text-base-content/70! tw:min-[32rem]:grid-cols-2" }, Vx = { class: "tw:font-bold tw:text-base-content!" }, Hx = { class: "tw:break-words" }, Ux = /* @__PURE__ */ P({
	__name: "RecipientLegend",
	props: { items: {} },
	setup(e) {
		return (t, n) => e.items.length ? (L(), R("figcaption", zx, [n[0] ||= z("span", { class: "tw:text-xs tw:font-semibold" }, "Selected recipients", -1), z("ol", Bx, [(L(!0), R(I, null, F(e.items, (e) => (L(), R("li", {
			key: e.actorId,
			class: "tw:min-w-0"
		}, [z("span", Vx, E(e.index) + ".", 1), z("span", Hx, E(e.text), 1)]))), 128))])])) : H("", !0);
	}
}), Wx = [
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], Gx = ["cx", "cy"], Kx = ["cx", "cy"], qx = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("g", {
			class: "tw:cursor-grab tw:text-secondary!",
			role: "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= zo((e) => n("pointerdown", e), ["stop"])
		}, [z("circle", {
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "8",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18"
		}, null, 8, Gx), z("circle", {
			class: "tw:text-base-100!",
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "3"
		}, null, 8, Kx)], 40, Wx));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/drag.ts
function Jx(e, t) {
	let n = /* @__PURE__ */ an();
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
function Yx(e, t) {
	let n = U(() => ix(e.gapForMaximumAward, e.maximumAward, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = Jx(() => ({ ...n.value }), _), s = U(() => r.value?.snapshot ?? n.value), c = U(() => ox({
		awards: e.awards,
		bounds: s.value,
		curveExponent: e.curveExponent,
		gapForMaximumAward: e.gapForMaximumAward,
		maximumAward: e.maximumAward,
		samples: e.samples
	})), l = U(() => s.value.maximumGap), u = U(() => c.value.points), d = U(() => c.value.recipientLegend), f = U(() => c.value.recipientPoints), p = U(() => c.value.referencePoint), m = U(() => c.value.shapePoint);
	function h(e) {
		return px(e, s.value.maximumGap);
	}
	function g(e) {
		return mx(e, s.value.maximumValue);
	}
	function _(n, r) {
		let i = cx(n.kind, vx(n.svg, r), n.snapshot, e.maximumAward);
		if (i.kind === "reference") {
			t("update:gapForMaximumAward", i.gapForMaximumAward), t("update:maximumAward", i.maximumAward);
			return;
		}
		t("update:curveExponent", i.curveExponent);
	}
	function v(n) {
		let r = ux(n.key, e.gapForMaximumAward, e.maximumAward);
		r && (n.preventDefault(), r.gapForMaximumAward !== void 0 && t("update:gapForMaximumAward", r.gapForMaximumAward), r.maximumAward !== void 0 && t("update:maximumAward", r.maximumAward));
	}
	function y(n) {
		let r = dx(n.key, e.curveExponent, .1, 5);
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
var Xx = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-catch-up-graph-heading"
}, Zx = [
	"x1",
	"x2",
	"y1",
	"y2"
], Qx = ["x", "y"], $x = /* @__PURE__ */ P({
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
		let { beginDrag: n, endDrag: r, maximumGap: i, points: a, recipientLegend: o, recipientPoints: s, referencePoint: c, shapePoint: l, toGraphX: u, toGraphY: d, updateDrag: f, updateReferenceWithKeyboard: p, updateShapeWithKeyboard: m } = Yx(e, t);
		return (t, h) => (L(), R("figure", Xx, [
			h[2] ||= z("div", { class: "tw:mb-2" }, [z("h4", {
				id: "xp-catch-up-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Initial catch-up value by XP gap "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to set the reference gap and hard limit. Drag the round point to shape the curve. ")], -1),
			B(Px, {
				description: "The horizontal axis is the recipient's gap below the selected XP leader. The vertical axis is the initial catch-up value before recipient decay, companion rate, and the final hard limit. Numbered markers identify selected recipients.",
				"description-id": "xp-catch-up-graph-description",
				markers: j(s),
				"maximum-x-label": `${Math.round(j(i))} XP`,
				"minimum-y-label": "0",
				points: j(a),
				title: "Editable catch-up XP curve",
				"title-id": "xp-catch-up-graph-title",
				"vertical-guide-x": j(u)(e.gapForMaximumAward),
				"x-axis-label": "Gap below selected XP leader",
				"y-axis-label": "Initial catch-up XP",
				onPointercancel: j(r),
				onPointermove: j(f),
				onPointerup: j(r)
			}, {
				guides: M(() => [z("line", {
					class: "tw:text-warning",
					x1: j(68),
					x2: j(68) + j(472),
					y1: j(d)(e.maximumAward),
					y2: j(d)(e.maximumAward),
					stroke: "currentColor",
					"stroke-dasharray": "6 5"
				}, null, 8, Zx)]),
				handles: M(() => [B(qx, {
					"aria-label": "Catch-up curve shape",
					"aria-value-max": 5,
					"aria-value-min": .1,
					"aria-value-now": e.curveExponent,
					"aria-value-text": `Exponent ${e.curveExponent}`,
					x: j(l).x,
					y: j(l).y,
					onKeydown: j(m),
					onPointerdown: h[0] ||= (e) => j(n)("shape", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), B(Rx, {
					"aria-label": `Reference point: ${e.gapForMaximumAward} XP gap and ${e.maximumAward} XP hard limit. Use left and right arrows for the gap, up and down arrows for the hard limit.`,
					role: "button",
					x: j(c).x,
					y: j(c).y,
					onKeydown: j(p),
					onPointerdown: h[1] ||= (e) => j(n)("reference", e)
				}, null, 8, [
					"aria-label",
					"x",
					"y",
					"onKeydown"
				])]),
				labels: M(() => [z("text", {
					class: "tw:text-warning",
					x: j(68) + 7,
					y: Math.max(j(24) + 12, j(d)(e.maximumAward) - 7),
					fill: "currentColor",
					"font-size": "11",
					"font-weight": "600"
				}, " Hard limit " + E(e.maximumAward) + " XP ", 9, Qx)]),
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
			B(Ux, { items: j(o) }, null, 8, ["items"])
		]));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/useDecayGraph.ts
function eS(e, t) {
	let n = U(() => ax(e.scalePivot, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = Jx(() => ({ ...n.value }), g), s = U(() => r.value?.snapshot ?? n.value), c = U(() => sx({
		awards: e.awards,
		bounds: s.value,
		samples: e.samples,
		scaleExponent: e.scaleExponent,
		scalePivot: e.scalePivot
	})), l = U(() => s.value.maximumRecipientXp), u = U(() => c.value.points), d = U(() => c.value.pivotPoint), f = U(() => c.value.recipientLegend), p = U(() => c.value.recipientPoints), m = U(() => c.value.strengthPoint);
	function h(e) {
		return px(e, s.value.maximumRecipientXp);
	}
	function g(e, n) {
		let r = lx(e.kind, vx(e.svg, n), e.snapshot);
		if (r.kind === "pivot") {
			t("update:scalePivot", r.scalePivot);
			return;
		}
		t("update:scaleExponent", r.scaleExponent);
	}
	function _(n) {
		let r = fx(n.key, e.scalePivot);
		r !== void 0 && (n.preventDefault(), t("update:scalePivot", r));
	}
	function v(n) {
		let r = dx(n.key, e.scaleExponent, 0, 2);
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
var tS = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-decay-graph-heading"
}, nS = /* @__PURE__ */ P({
	__name: "XpDecayGraph",
	props: {
		awards: {},
		samples: {},
		scaleExponent: {},
		scalePivot: {}
	},
	emits: ["update:scaleExponent", "update:scalePivot"],
	setup(e, { emit: t }) {
		let { beginDrag: n, endDrag: r, maximumRecipientXp: i, pivotPoint: a, points: o, recipientLegend: s, recipientPoints: c, strengthPoint: l, toGraphX: u, updateDrag: d, updatePivotWithKeyboard: f, updateStrengthWithKeyboard: p } = eS(e, t);
		return (t, m) => (L(), R("figure", tS, [
			m[2] ||= z("div", { class: "tw:mb-2" }, [z("h4", {
				id: "xp-decay-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Catch-up strength by recipient total XP "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to choose where decay begins. Drag the round point to make decay gentler or stronger. ")], -1),
			B(Px, {
				description: "The horizontal axis is each recipient's own total XP. The vertical axis is the multiplier applied to that recipient's initial catch-up value. Numbered markers identify selected recipients.",
				"description-id": "xp-decay-graph-description",
				markers: j(c),
				"maximum-x-label": `${Math.round(j(i))} XP`,
				"maximum-y-label": "100%",
				"minimum-y-label": "0%",
				points: j(o),
				title: "Editable recipient XP decay curve",
				"title-id": "xp-decay-graph-title",
				"vertical-guide-x": j(u)(e.scalePivot),
				"x-axis-label": "Recipient total XP",
				"y-axis-label": "Decay multiplier",
				onPointercancel: j(r),
				onPointermove: j(d),
				onPointerup: j(r)
			}, {
				handles: M(() => [B(qx, {
					"aria-label": "Recipient decay strength",
					"aria-value-max": 2,
					"aria-value-min": 0,
					"aria-value-now": e.scaleExponent,
					"aria-value-text": `Decay exponent ${e.scaleExponent}`,
					x: j(l).x,
					y: j(l).y,
					onKeydown: j(p),
					onPointerdown: m[0] ||= (e) => j(n)("strength", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), B(Rx, {
					"aria-label": "Recipient total XP where decay begins",
					"aria-value-max": Math.round(j(i)),
					"aria-value-min": 1,
					"aria-value-now": e.scalePivot,
					"aria-value-text": `${e.scalePivot} total XP`,
					x: j(a).x,
					y: j(a).y,
					onKeydown: j(f),
					onPointerdown: m[1] ||= (e) => j(n)("pivot", e)
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
			B(Ux, { items: j(s) }, null, 8, ["items"])
		]));
	}
}), rS = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "curve-settings-title"
}, iS = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, aS = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[66rem]:grid-cols-2" }, oS = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, sS = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, cS = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, lS = { class: "dui-fieldset tw:min-w-0" }, uS = { class: "dui-fieldset tw:min-w-0" }, dS = { class: "dui-fieldset tw:min-w-0" }, fS = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, pS = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, mS = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, hS = { class: "dui-fieldset tw:min-w-0" }, gS = { class: "dui-fieldset tw:min-w-0" }, _S = { class: "dui-fieldset tw:min-w-0" }, vS = /* @__PURE__ */ P({
	__name: "XpCurveConfiguration",
	props: /*@__PURE__*/ Br({
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
		let t = oi(e, "companionMultiplier"), n = oi(e, "curveExponent"), r = oi(e, "gapForMaximumAward"), i = oi(e, "maximumAward"), a = oi(e, "scaleExponent"), o = oi(e, "scalePivot");
		return (s, c) => (L(), R("section", rS, [z("div", iS, [
			c[31] ||= z("div", null, [z("h2", {
				id: "curve-settings-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " How awards are calculated "), z("p", { class: "tw:m-0 tw:max-w-3xl tw:text-xs tw:text-base-content/65!" }, " The graphs and number fields are two controls for the same settings. Drag either curve and its fields update immediately. ")], -1),
			z("div", aS, [z("article", oS, [z("div", sS, [
				c[20] ||= z("div", null, [z("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 1. Catch-up curve "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This curve converts the XP gap below the selected leader into an initial XP value. ")], -1),
				z("div", cS, [
					z("fieldset", lS, [
						c[11] ||= z("legend", { class: "dui-fieldset-legend" }, "Hard limit", -1),
						c[12] ||= z("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-maximum-award"
						}, " Maximum final award ", -1),
						N(z("input", {
							id: "xp-maximum-award",
							"onUpdate:modelValue": c[0] ||= (e) => i.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "0",
							step: "1",
							type: "number"
						}, null, 512), [[
							W,
							i.value,
							void 0,
							{ number: !0 }
						]]),
						c[13] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " Applied last; no recipient can receive more. ", -1)
					]),
					z("fieldset", uS, [
						c[14] ||= z("legend", { class: "dui-fieldset-legend" }, "Reference gap", -1),
						c[15] ||= z("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-gap-for-cap"
						}, " Gap equal to the hard limit ", -1),
						N(z("input", {
							id: "xp-gap-for-cap",
							"onUpdate:modelValue": c[1] ||= (e) => r.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "1",
							type: "number"
						}, null, 512), [[
							W,
							r.value,
							void 0,
							{ number: !0 }
						]]),
						c[16] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " At this gap, initial catch-up equals the limit before decay. ", -1)
					]),
					z("fieldset", dS, [
						c[17] ||= z("legend", { class: "dui-fieldset-legend" }, "Curve shape", -1),
						c[18] ||= z("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-curve-exponent"
						}, " Catch-up exponent ", -1),
						N(z("input", {
							id: "xp-curve-exponent",
							"onUpdate:modelValue": c[2] ||= (e) => n.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "5",
							min: "0.1",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							W,
							n.value,
							void 0,
							{ number: !0 }
						]]),
						c[19] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " Below 1 helps small gaps sooner; above 1 favors large gaps. ", -1)
					])
				]),
				B($x, {
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
			])]), z("article", fS, [z("div", pS, [
				c[30] ||= z("div", null, [z("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 2. Recipient decay curve "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " High-XP builds depend less on raw XP differences. This multiplier is evaluated separately for every recipient. ")], -1),
				z("div", mS, [
					z("fieldset", hS, [
						c[21] ||= z("legend", { class: "dui-fieldset-legend" }, "Decay start", -1),
						c[22] ||= z("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-pivot"
						}, " Full-strength recipient XP ", -1),
						N(z("input", {
							id: "xp-scale-pivot",
							"onUpdate:modelValue": c[6] ||= (e) => o.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							min: "1",
							step: "100",
							type: "number"
						}, null, 512), [[
							W,
							o.value,
							void 0,
							{ number: !0 }
						]]),
						c[23] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " Recipients at or below this total keep 100% strength. ", -1)
					]),
					z("fieldset", gS, [
						c[24] ||= z("legend", { class: "dui-fieldset-legend" }, "Decay strength", -1),
						c[25] ||= z("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-exponent"
						}, " Recipient decay exponent ", -1),
						N(z("input", {
							id: "xp-scale-exponent",
							"onUpdate:modelValue": c[7] ||= (e) => a.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "2",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							W,
							a.value,
							void 0,
							{ number: !0 }
						]]),
						c[26] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " Zero disables decay; higher values weaken catch-up faster. ", -1)
					]),
					z("fieldset", _S, [
						c[27] ||= z("legend", { class: "dui-fieldset-legend" }, "Companion rate", -1),
						c[28] ||= z("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-companion-rate"
						}, " Companion multiplier ", -1),
						N(z("input", {
							id: "xp-companion-rate",
							"onUpdate:modelValue": c[8] ||= (e) => t.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
							max: "1",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							W,
							t.value,
							void 0,
							{ number: !0 }
						]]),
						c[29] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " 0.5 gives player-owned companions half the calculated XP. ", -1)
					])
				]),
				B(nS, {
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
			c[32] ||= z("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [z("i", {
				class: "fa-solid fa-calculator",
				"aria-hidden": "true"
			}), z("span", { class: "tw:min-w-0 tw:break-words" }, [
				V(" Initial catch-up = hard limit × (leader gap ÷ reference gap)"),
				z("sup", null, "shape"),
				V(". Final XP = min(hard limit, initial catch-up × recipient decay × companion rate). ")
			])], -1)
		])]));
	}
}), yS = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipient-defaults-title"
}, bS = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, xS = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-4 tw:min-[42rem]:grid-cols-2" }, SS = { class: "dui-fieldset tw:min-w-0" }, CS = { class: "dui-fieldset tw:min-w-0" }, wS = /* @__PURE__ */ P({
	__name: "XpRecipientDefaults",
	props: {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {},
		defaultSelection: { required: !0 },
		defaultSelectionModifiers: {}
	},
	emits: ["update:defaultReason", "update:defaultSelection"],
	setup(e) {
		let t = oi(e, "defaultReason"), n = oi(e, "defaultSelection");
		return (e, r) => (L(), R("section", yS, [z("div", bS, [r[9] ||= z("div", null, [z("h2", {
			id: "recipient-defaults-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipient and journal defaults "), z("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These values seed a newly opened console when no eligible tokens are targeted. ")], -1), z("div", xS, [z("fieldset", SS, [
			r[3] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Default recipients", -1),
			r[4] ||= z("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-default-selection"
			}, " When no tokens are targeted ", -1),
			N(z("select", {
				id: "xp-default-selection",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				class: "dui-select dui-select-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!"
			}, [...r[2] ||= [
				z("option", { value: "party" }, "Party (assigned player characters)", -1),
				z("option", { value: "company" }, "Company (party plus companions)", -1),
				z("option", { value: "world" }, "World (every character actor)", -1)
			]], 512), [[No, n.value]]),
			r[5] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " Explicit targets replace this Drowsy’s WFRP4e Toolkit default. ", -1)
		]), z("fieldset", CS, [
			r[6] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Experience journal", -1),
			r[7] ||= z("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-config-default-reason"
			}, " Default award reason ", -1),
			N(z("input", {
				id: "xp-config-default-reason",
				"onUpdate:modelValue": r[1] ||= (e) => t.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
				type: "text"
			}, null, 512), [[W, t.value]]),
			r[8] ||= z("p", { class: "dui-label tw:whitespace-normal" }, [
				V(" Supports the "),
				z("code", null, "%session%"),
				V(" and "),
				z("code", null, "%date%"),
				V(" tokens. The award console can still edit the reason for one batch. ")
			], -1)
		])])])]));
	}
}), TS = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, ES = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, DS = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, OS = { class: "tw:min-w-0 tw:break-words" }, kS = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, AS = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[54rem]:grid-cols-[minmax(15rem,0.72fr)_minmax(0,2fr)]" }, jS = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "xp-launcher-settings"
}, MS = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, NS = { class: "dui-fieldset tw:gap-2" }, PS = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, FS = { class: "tw:mt-3 tw:min-w-0" }, IS = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[34rem]:flex-row tw:min-[34rem]:items-center tw:min-[34rem]:justify-between" }, LS = { class: "tw:flex tw:min-w-0 tw:flex-col tw:gap-2 tw:min-[30rem]:flex-row" }, RS = ["disabled"], zS = ["disabled"], BS = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, VS = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, HS = /* @__PURE__ */ P({
	__name: "XpCurveConfiguratorApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = rx();
		n.initialize(t.initialization, t.actions);
		let { curveSamples: r, decaySamples: i, defaultReason: a, defaultSelection: o, errorMessage: s, isSaving: c, launchers: l, parameters: u, plan: d, statusMessage: f } = Ts(n);
		return (e, t) => (L(), R("main", TS, [
			B(Ec, {
				description: "Set launchers, recipient defaults, and the catch-up and decay curves used by new award consoles.",
				icon: "fa-solid fa-sliders",
				title: "XP Curve Configurator"
			}),
			z("div", ES, [
				j(s) ? (L(), R("div", DS, [t[10] ||= z("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), z("span", OS, E(j(s)), 1)])) : H("", !0),
				j(f) ? (L(), R("div", kS, [t[11] ||= z("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), z("span", null, E(j(f)), 1)])) : H("", !0),
				z("div", AS, [z("section", jS, [z("div", MS, [
					t[14] ||= z("div", null, [z("h2", {
						id: "xp-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Client preferences for this browser and user. ")], -1),
					z("fieldset", NS, [t[13] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1), z("label", PS, [N(z("input", {
						"onUpdate:modelValue": t[0] ||= (e) => j(l).tokenControls = e,
						class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
						type: "checkbox"
					}, null, 512), [[G, j(l).tokenControls]]), t[12] ||= z("span", { class: "tw:min-w-0" }, [z("strong", { class: "tw:block" }, "Token Controls"), z("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the chart launcher in Token Controls. ")], -1)])]),
					t[15] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Launcher changes apply after a reload. Macros and the module API stay available. ", -1)
				])]), B(wS, {
					"default-reason": j(a),
					"onUpdate:defaultReason": t[1] ||= (e) => /* @__PURE__ */ k(a) ? a.value = e : null,
					"default-selection": j(o),
					"onUpdate:defaultSelection": j(n).setDefaultSelection
				}, null, 8, [
					"default-reason",
					"default-selection",
					"onUpdate:defaultSelection"
				])]),
				z("div", FS, [B(vS, {
					"companion-multiplier": j(u).companionMultiplier,
					"onUpdate:companionMultiplier": t[2] ||= (e) => j(u).companionMultiplier = e,
					"curve-exponent": j(u).curveExponent,
					"onUpdate:curveExponent": t[3] ||= (e) => j(u).curveExponent = e,
					"gap-for-maximum-award": j(u).gapForMaximumAward,
					"onUpdate:gapForMaximumAward": t[4] ||= (e) => j(u).gapForMaximumAward = e,
					"maximum-award": j(u).maximumAward,
					"onUpdate:maximumAward": t[5] ||= (e) => j(u).maximumAward = e,
					"scale-exponent": j(u).scaleExponent,
					"onUpdate:scaleExponent": t[6] ||= (e) => j(u).scaleExponent = e,
					"scale-pivot": j(u).scalePivot,
					"onUpdate:scalePivot": t[7] ||= (e) => j(u).scalePivot = e,
					awards: j(d).awards,
					"decay-samples": j(i),
					samples: j(r)
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
			z("footer", IS, [t[18] ||= z("p", { class: "tw:m-0 tw:min-w-0 tw:text-xs tw:text-base-content/65!" }, " Saving configuration never awards XP. World defaults apply to the next console opening. ", -1), z("div", LS, [z("button", {
				class: "dui-btn dui-btn-ghost tw:min-w-44 tw:rounded-full tw:border tw:border-base-content/20! tw:bg-base-200!",
				disabled: j(c),
				type: "button",
				onClick: t[8] ||= (...e) => j(n).resetToDefaults && j(n).resetToDefaults(...e)
			}, [...t[16] ||= [z("i", {
				class: "fa-solid fa-arrow-rotate-left",
				"aria-hidden": "true"
			}, null, -1), V(" Reset to defaults ", -1)]], 8, RS), z("button", {
				class: "dui-btn dui-btn-primary tw:min-w-48 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: j(c),
				type: "button",
				onClick: t[9] ||= (...e) => j(n).saveConfiguration && j(n).saveConfiguration(...e)
			}, [j(c) ? (L(), R("span", BS)) : (L(), R("i", VS)), t[17] ||= V(" Save configuration ", -1)], 8, zS)])])
		]));
	}
});
//#endregion
//#region src/functions/xp-curve/selection.ts
function US(e) {
	let { assignedActorIds: t, candidates: n, defaultSelection: r, targetedActorIds: i } = e;
	return n.map((e) => {
		let n = WS(e, t);
		return {
			category: n,
			id: e.id,
			name: e.name,
			selected: i?.has(e.id) ?? GS(e.id, n, r, t),
			totalXp: e.totalXp
		};
	}).sort(KS);
}
function WS(e, t) {
	return e.hasPlayerOwner && !t.has(e.id) ? "companion" : "standard";
}
function GS(e, t, n, r) {
	return n === "world" ? !0 : n === "company" ? r.has(e) || t === "companion" : r.has(e);
}
function KS(e, t) {
	return e.selected === t.selected ? e.name.localeCompare(t.name) : e.selected ? -1 : 1;
}
//#endregion
//#region src/module/xp-curve/actors.ts
function qS(e) {
	let t = QS(), n = $S(), r = n === void 0 ? "default" : "targets";
	return {
		actors: US({
			assignedActorIds: t,
			candidates: Array.from(game.actors).filter((e) => e.type === "character").map(YS),
			defaultSelection: e,
			targetedActorIds: n
		}),
		selectionSource: r
	};
}
function JS(e) {
	let t = QS();
	return e.map((e) => {
		let n = game.actors.get(e);
		if (!n || n.type !== "character") throw Error(`XP recipient ${e} is no longer an available character actor.`);
		return XS(n, WS(n, t), !0);
	});
}
function YS(e) {
	let t = ZS(e);
	return {
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		name: e.name,
		totalXp: t.totalXp
	};
}
function XS(e, t, n) {
	let r = ZS(e);
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
function ZS(e) {
	let t = e.system;
	if (!eC(t)) throw Error(`WFRP4e actor "${e.name}" does not expose readable system data.`);
	let n = t.details, r = t.awardExp;
	if (!eC(n) || typeof r != "function") throw Error(`WFRP4e actor "${e.name}" does not expose XP award operations.`);
	let i = n.experience;
	if (!eC(i) || !Number.isFinite(Number(i.total))) throw Error(`WFRP4e actor "${e.name}" does not expose a numeric total XP value.`);
	return {
		awardExperience: async (e, n) => {
			await r.call(t, e, n, null, !0);
		},
		totalXp: Math.max(0, Math.round(Number(i.total)))
	};
}
function QS() {
	return new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => typeof e == "string"));
}
function $S() {
	let e = game.user?.targets;
	if (!(!e || e.size === 0)) return new Set(Array.from(e).map((e) => e.actor).filter((e) => e?.type === "character").map((e) => e.id));
}
function eC(e) {
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
function tC() {
	return {
		defaultReason: oC($.defaultReason),
		defaultSelection: sC($.defaultSelection),
		parameters: {
			companionMultiplier: aC($.companionMultiplier),
			curveExponent: aC($.curveExponent),
			gapForMaximumAward: aC($.gapForMaximumAward),
			maximumAward: aC($.maximumAward),
			scaleExponent: aC($.scaleExponent),
			scalePivot: aC($.scalePivot)
		}
	};
}
async function nC(e) {
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
function rC(e) {
	return iC(e);
}
function iC(e) {
	return game.settings.get(t, e) === !0;
}
function aC(e) {
	return Number(game.settings.get(t, e));
}
function oC(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function sC(e) {
	return cC(oC(e));
}
function cC(e) {
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/xp-curve/configuration.ts
function lC() {
	let e = tC();
	return {
		...e,
		actors: qS(e.defaultSelection).actors,
		launchers: { tokenControls: rC($.showTokenControlsLauncher) }
	};
}
async function uC(e) {
	q(K.xpCurveConsole), await nC({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: zy(e.parameters)
	}), await game.settings.set(t, $.showTokenControlsLauncher, e.launchers.tokenControls), ui.notifications.info("XP Curve Console configuration saved.");
}
//#endregion
//#region src/module/apps/xp-curve-configurator/XpCurveConfiguratorApplication.ts
var dC = class extends Kc {
	static ACCESS_POLICY = K.xpCurveConsole;
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
		return HS;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: async (e) => {
				await uC(e), await this.#e.onSaved?.();
			} },
			initialization: lC()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-configurator/open.ts
async function fC(e = {}) {
	let t = new dC(e);
	return await t.render(!0), t;
}
function pC(e = {}) {
	fC(e).catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/module/xp-curve/initialization.ts
function mC() {
	let e = tC(), t = qS(e.defaultSelection);
	return {
		...e,
		...t,
		reasonContext: hC()
	};
}
function hC() {
	return {
		date: game.world.nextSession?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		session: Bv()
	};
}
//#endregion
//#region src/module/xp-curve/service.ts
async function gC(e) {
	q(K.xpCurveConsole);
	let t = JS(Array.from(new Set(e.actorIds))), n = zy(e.parameters), r = By(t.map((e) => e.choice), n);
	if (r.awards.length < 2) throw Error("Select at least two character actors to calculate catch-up XP.");
	if (r.totalAward < 1) throw Error("This curve produces no XP awards for the selected actors.");
	await nC({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: n
	});
	let i = qy(e.defaultReason, hC()), a = [];
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
	return await _C(o), ui.notifications.info(`Awarded ${o.totalAward} total XP across ${a.length} actors.`), o;
}
async function _C(e) {
	let t = e.awards.filter((e) => e.award > 0).map((e) => `<li><strong>${Jy(e.actorName)}</strong>: +${e.award} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Curve Award</h2><p>${Jy(e.reason)}</p><ul>${t}</ul><p><strong>${e.totalAward} XP awarded in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
//#endregion
//#region src/module/apps/xp-curve-console/XpCurveConsoleApplication.ts
var vC = class extends Kc {
	static ACCESS_POLICY = K.xpCurveConsole;
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
		return tx;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: gC,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Curve Console.`, e), ui.notifications.error("XP awards completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				},
				openConfigurator: () => {
					pC({ onSaved: () => this.render(!0) });
				}
			},
			initialization: mC()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-console/open.ts
async function yC() {
	let e = new vC();
	return await e.render(!0), e;
}
function bC() {
	yC().catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Console. See the browser console for details.");
	});
}
//#endregion
//#region src/state/apps/session-management/store.ts
var xC = ws("session-management", () => {
	let e = /* @__PURE__ */ A({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), t = /* @__PURE__ */ A(""), n = /* @__PURE__ */ A(""), r = /* @__PURE__ */ A(""), i = /* @__PURE__ */ A(!1), a = /* @__PURE__ */ A(!0), o = /* @__PURE__ */ A(!1), s = /* @__PURE__ */ A(""), c = /* @__PURE__ */ A(!0), l = /* @__PURE__ */ A("pull"), u = /* @__PURE__ */ A(!0), d = /* @__PURE__ */ A([]), f = /* @__PURE__ */ A(), p = /* @__PURE__ */ A(), m = /* @__PURE__ */ A(!1), h;
	function g(a, c) {
		h = c, e.value = {
			...a.state,
			sessions: a.state.sessions.map((e) => ({ ...e }))
		}, t.value = a.state.currentSessionReference, n.value = Ev(t.value), r.value = a.occurredAtLocal, d.value = a.scenes.map((e) => ({ ...e })), s.value = a.settings.holdingSceneUuid, o.value = !!s.value, i.value = a.settings.exportChat, l.value = a.settings.pullPolicy, f.value = void 0, p.value = void 0;
	}
	function _() {
		n.value = Ev(t.value);
	}
	async function v() {
		await ee(async () => {
			await te().saveCurrentSessionReference(t.value), e.value.currentSessionReference = t.value.trim(), t.value = e.value.currentSessionReference, n.value = Ev(t.value), p.value = "Current session reference saved.";
		});
	}
	async function y() {
		await ee(async () => {
			let i = await te().completeSession({
				nextSessionReference: n.value,
				occurredAt: r.value,
				sessionReference: t.value
			});
			e.value.sessions.unshift(i), e.value.currentSessionReference = n.value.trim(), t.value = e.value.currentSessionReference, n.value = Ev(t.value), p.value = `Session ${i.reference} recorded.`;
		});
	}
	async function b() {
		await ee(async () => {
			let s = await te().runSessionTurnover({
				chatExport: i.value,
				fortuneReset: a.value,
				holdingScene: o.value,
				nextSessionReference: n.value,
				occurredAt: r.value,
				pause: c.value,
				sessionReference: t.value,
				xpAward: u.value
			});
			e.value.turnover = s.operation, s.record && (e.value.sessions.unshift(s.record), e.value.currentSessionReference = n.value.trim(), t.value = e.value.currentSessionReference, n.value = Ev(t.value)), p.value = `Session ${s.operation.sessionReference} turnover completed.`;
		});
	}
	async function x() {
		await ee(async () => {
			await te().saveSessionConfiguration({
				exportChat: i.value,
				holdingSceneUuid: s.value,
				pullPolicy: l.value
			}), p.value = "Session turnover options saved.";
		});
	}
	async function S() {
		await ee(async () => {
			await te().pullEveryoneToViewedScene(), p.value = "Player Scene updated.";
		});
	}
	function C() {
		te().openXpAwardConsole();
	}
	async function ee(e) {
		if (!m.value) {
			m.value = !0, f.value = void 0, p.value = void 0;
			try {
				await e();
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Session management action failed.", e), f.value = e instanceof Error ? e.message : "The session action could not be completed.";
			} finally {
				m.value = !1;
			}
		}
	}
	function te() {
		if (!h) throw Error("The Session Management Console has not been initialized.");
		return h;
	}
	return {
		completeSession: y,
		chatExport: i,
		currentSessionReference: t,
		errorMessage: f,
		initialize: g,
		isWorking: m,
		nextSessionReference: n,
		occurredAtLocal: r,
		fortuneReset: a,
		holdingScene: o,
		holdingSceneUuid: s,
		pause: c,
		pullEveryone: S,
		pullPolicy: l,
		runTurnover: b,
		saveConfiguration: x,
		scenes: d,
		openXpAwardConsole: C,
		saveCurrentReference: v,
		state: e,
		statusMessage: p,
		updateSuggestedNextSession: _,
		xpAward: u
	};
}), SC = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-accent/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "turnover-options-title"
}, CC = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, wC = { class: "tw:grid tw:gap-2 tw:min-[42rem]:grid-cols-2" }, TC = { class: "dui-label tw:justify-start tw:gap-2" }, EC = { class: "dui-label tw:justify-start tw:gap-2" }, DC = { class: "dui-label tw:justify-start tw:gap-2" }, OC = { class: "dui-label tw:justify-start tw:gap-2" }, kC = { class: "dui-label tw:justify-start tw:gap-2" }, AC = ["value"], jC = { class: "tw:flex tw:flex-wrap tw:justify-end tw:gap-2" }, MC = ["disabled"], NC = ["disabled"], PC = ["disabled"], FC = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, IC = {
	key: 1,
	class: "fa-solid fa-forward-step",
	"aria-hidden": "true"
}, LC = {
	key: 0,
	class: "tw:grid tw:gap-1 tw:text-xs"
}, RC = { class: "dui-badge dui-badge-sm" }, zC = {
	key: 0,
	class: "tw:w-full tw:text-base-content/65!"
}, BC = /* @__PURE__ */ P({
	__name: "SessionTurnoverPanel",
	setup(e) {
		let t = xC(), { chatExport: n, currentSessionReference: r, fortuneReset: i, holdingScene: a, holdingSceneUuid: o, isWorking: s, nextSessionReference: c, occurredAtLocal: l, pause: u, pullPolicy: d, scenes: f, state: p, xpAward: m } = Ts(t), h = U(() => !!r.value.trim() && !!c.value.trim() && !!l.value && !s.value), g = {
			"chat-export": "Export chat",
			fortune: "Reset Fortune",
			"holding-scene": "Activate holding Scene",
			pause: "Pause play",
			record: "Record session",
			xp: "Award XP"
		};
		return (e, r) => (L(), R("section", SC, [z("div", CC, [
			r[19] ||= z("div", null, [z("h2", {
				id: "turnover-options-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Session turnover "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Completed steps are saved immediately. Retrying after a failure skips work that already succeeded. ")], -1),
			z("div", wC, [
				z("label", TC, [N(z("input", {
					"onUpdate:modelValue": r[0] ||= (e) => /* @__PURE__ */ k(u) ? u.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, j(u)]]), r[10] ||= V("Pause play", -1)]),
				z("label", EC, [N(z("input", {
					"onUpdate:modelValue": r[1] ||= (e) => /* @__PURE__ */ k(m) ? m.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, j(m)]]), r[11] ||= V("Apply saved fixed-XP award", -1)]),
				z("label", DC, [N(z("input", {
					"onUpdate:modelValue": r[2] ||= (e) => /* @__PURE__ */ k(i) ? i.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, j(i)]]), r[12] ||= V("Restore Fortune", -1)]),
				z("label", OC, [N(z("input", {
					"onUpdate:modelValue": r[3] ||= (e) => /* @__PURE__ */ k(n) ? n.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, j(n)]]), r[13] ||= V("Export chat log", -1)]),
				z("label", kC, [N(z("input", {
					"onUpdate:modelValue": r[4] ||= (e) => /* @__PURE__ */ k(a) ? a.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, j(a)]]), r[14] ||= V("Activate holding Scene", -1)])
			]),
			r[20] ||= z("label", {
				class: "dui-label",
				for: "holding-scene"
			}, "Holding Scene", -1),
			N(z("select", {
				id: "holding-scene",
				"onUpdate:modelValue": r[5] ||= (e) => /* @__PURE__ */ k(o) ? o.value = e : null,
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!"
			}, [r[15] ||= z("option", { value: "" }, "No holding Scene", -1), (L(!0), R(I, null, F(j(f), (e) => (L(), R("option", {
				key: e.uuid,
				value: e.uuid
			}, E(e.label), 9, AC))), 128))], 512), [[No, j(o)]]),
			r[21] ||= z("label", {
				class: "dui-label",
				for: "pull-policy"
			}, "Pull Everyone behavior", -1),
			N(z("select", {
				id: "pull-policy",
				"onUpdate:modelValue": r[6] ||= (e) => /* @__PURE__ */ k(d) ? d.value = e : null,
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!"
			}, [...r[16] ||= [
				z("option", { value: "pull" }, "Pull connected players to the viewed Scene", -1),
				z("option", { value: "activate" }, "Activate the viewed Scene for everyone", -1),
				z("option", { value: "prompt" }, "Ask whether to activate or only pull", -1)
			]], 512), [[No, j(d)]]),
			z("div", jC, [
				z("button", {
					class: "dui-btn dui-btn-sm",
					disabled: j(s),
					type: "button",
					onClick: r[7] ||= (...e) => j(t).saveConfiguration && j(t).saveConfiguration(...e)
				}, " Save options ", 8, MC),
				z("button", {
					class: "dui-btn dui-btn-sm",
					disabled: j(s),
					type: "button",
					onClick: r[8] ||= (...e) => j(t).pullEveryone && j(t).pullEveryone(...e)
				}, [...r[17] ||= [z("i", {
					class: "fa-solid fa-people-arrows",
					"aria-hidden": "true"
				}, null, -1), V("Pull everyone ", -1)]], 8, NC),
				z("button", {
					class: "dui-btn dui-btn-primary tw:rounded-full",
					disabled: !h.value,
					type: "button",
					onClick: r[9] ||= (...e) => j(t).runTurnover && j(t).runTurnover(...e)
				}, [j(s) ? (L(), R("span", FC)) : (L(), R("i", IC)), r[18] ||= V("Run turnover ", -1)], 8, PC)
			]),
			j(p).turnover ? (L(), R("div", LC, [(L(!0), R(I, null, F(j(p).turnover.steps, (e) => (L(), R("div", {
				key: e.id,
				class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2"
			}, [
				z("span", null, E(g[e.id]), 1),
				z("span", RC, E(e.status), 1),
				e.detail ? (L(), R("span", zC, E(e.detail), 1)) : H("", !0)
			]))), 128))])) : H("", !0)
		])]));
	}
}), VC = { class: "tw:grid tw:min-w-0 tw:gap-3" }, HC = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[52rem]:grid-cols-2" }, UC = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "current-session-title"
}, WC = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, GC = ["disabled"], KC = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-primary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "turnover-title"
}, qC = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, JC = ["disabled"], YC = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, XC = {
	key: 1,
	class: "fa-solid fa-check",
	"aria-hidden": "true"
}, ZC = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "session-history-title"
}, QC = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, $C = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, ew = { class: "dui-badge dui-badge-sm" }, tw = {
	key: 0,
	class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, nw = { class: "dui-table dui-table-sm tw:min-w-[28rem]" }, rw = { scope: "row" }, iw = ["title"], aw = ["title"], ow = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, sw = /* @__PURE__ */ P({
	__name: "SessionManagementConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = xC();
		n.initialize(t.initialization, t.actions);
		let { currentSessionReference: r, errorMessage: i, isWorking: a, nextSessionReference: o, occurredAtLocal: s, state: c, statusMessage: l } = Ts(n), u = U(() => !!r.value.trim() && !!o.value.trim() && !!s.value && !a.value);
		function d(e) {
			return new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(new Date(e));
		}
		return (e, t) => (L(), oa(xl, {
			description: "Keep a module-owned session reference and record when each turnover takes place.",
			"error-message": j(i),
			icon: "fa-solid fa-calendar-check",
			"status-message": j(l),
			title: "Session Management Console"
		}, {
			"header-end": M(() => [z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm tw:border tw:border-base-content/20! tw:bg-base-200!",
				type: "button",
				onClick: t[0] ||= (...e) => j(n).openXpAwardConsole && j(n).openXpAwardConsole(...e)
			}, [...t[7] ||= [z("i", {
				class: "fa-solid fa-award",
				"aria-hidden": "true"
			}, null, -1), V(" Award XP ", -1)]])]),
			default: M(() => [z("div", VC, [
				z("div", HC, [z("section", UC, [z("div", WC, [
					t[9] ||= z("div", null, [z("h2", {
						id: "current-session-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " Current session "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Used by XP reasons and session records. ")], -1),
					t[10] ||= z("label", {
						class: "dui-label tw:whitespace-normal",
						for: "current-session-reference"
					}, " Session reference ", -1),
					N(z("input", {
						id: "current-session-reference",
						"onUpdate:modelValue": t[1] ||= (e) => /* @__PURE__ */ k(r) ? r.value = e : null,
						class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
						type: "text",
						onInput: t[2] ||= (...e) => j(n).updateSuggestedNextSession && j(n).updateSuggestedNextSession(...e)
					}, null, 544), [[W, j(r)]]),
					z("button", {
						class: "dui-btn dui-btn-sm tw:self-end",
						disabled: j(a) || !j(r).trim(),
						type: "button",
						onClick: t[3] ||= (...e) => j(n).saveCurrentReference && j(n).saveCurrentReference(...e)
					}, [...t[8] ||= [z("i", {
						class: "fa-solid fa-floppy-disk",
						"aria-hidden": "true"
					}, null, -1), V(" Save reference ", -1)]], 8, GC)
				])]), z("section", KC, [z("div", qC, [
					t[12] ||= z("div", null, [z("h2", {
						id: "turnover-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " Complete session "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The selected time becomes the best-known occurrence time for this session. ")], -1),
					t[13] ||= z("label", {
						class: "dui-label tw:whitespace-normal",
						for: "session-occurred-at"
					}, " Session date and time ", -1),
					N(z("input", {
						id: "session-occurred-at",
						"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ k(s) ? s.value = e : null,
						class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
						type: "datetime-local"
					}, null, 512), [[W, j(s)]]),
					t[14] ||= z("label", {
						class: "dui-label tw:whitespace-normal",
						for: "next-session-reference"
					}, " Next session reference ", -1),
					N(z("input", {
						id: "next-session-reference",
						"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ k(o) ? o.value = e : null,
						class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
						type: "text"
					}, null, 512), [[W, j(o)]]),
					z("button", {
						class: "dui-btn dui-btn-primary tw:self-end tw:rounded-full",
						disabled: !u.value,
						type: "button",
						onClick: t[6] ||= (...e) => j(n).completeSession && j(n).completeSession(...e)
					}, [j(a) ? (L(), R("span", YC)) : (L(), R("i", XC)), t[11] ||= V(" Record turnover ", -1)], 8, JC)
				])])]),
				B(BC),
				z("section", ZC, [z("div", QC, [z("div", $C, [t[15] ||= z("div", null, [z("h2", {
					id: "session-history-title",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " Session history "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Stored as module-owned world data in exact ISO timestamps. ")], -1), z("span", ew, E(j(c).sessions.length) + " recorded", 1)]), j(c).sessions.length ? (L(), R("div", tw, [z("table", nw, [t[16] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
					z("th", { scope: "col" }, "Session"),
					z("th", { scope: "col" }, "Took place"),
					z("th", { scope: "col" }, "Recorded")
				])], -1), z("tbody", null, [(L(!0), R(I, null, F(j(c).sessions, (e) => (L(), R("tr", { key: e.id }, [
					z("th", rw, E(e.reference), 1),
					z("td", { title: e.occurredAt }, E(d(e.occurredAt)), 9, iw),
					z("td", { title: e.recordedAt }, E(d(e.recordedAt)), 9, aw)
				]))), 128))])])])) : (L(), R("div", ow, [...t[17] ||= [z("i", {
					class: "fa-solid fa-calendar",
					"aria-hidden": "true"
				}, null, -1), z("span", null, "No session turnovers have been recorded yet.", -1)]]))])])
			])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
});
//#endregion
//#region src/module/session-management/initialization.ts
function cw() {
	let e = zv();
	return {
		occurredAtLocal: lw(/* @__PURE__ */ new Date()),
		scenes: Array.from(game.scenes).map(({ name: e, uuid: t }) => ({
			label: e,
			uuid: t
		})).sort((e, t) => e.label.localeCompare(t.label)),
		settings: Vv(),
		state: e
	};
}
function lw(e) {
	return (/* @__PURE__ */ new Date(e.getTime() - e.getTimezoneOffset() * 6e4)).toISOString().slice(0, 16);
}
//#endregion
//#region src/functions/xp-award/calculate.ts
function uw(e, t) {
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
function dw(e, t, n) {
	let r = e;
	return n && !r.includes("%datetime%") && (r = r.trim() ? `${r} — awarded %datetime%` : "Awarded %datetime%"), qy(r, t);
}
function fw(e) {
	return `${e.slice(0, 10)} ${e.slice(11, 19)} UTC`;
}
//#endregion
//#region src/module/xp-award/service.ts
async function pw(e) {
	q(K.xpAwardConsole);
	let t = Array.from(new Set(e.actorIds));
	if (t.length === 0) throw Error("Select at least one character actor.");
	if (!Number.isFinite(e.defaultAmount) || Math.round(e.defaultAmount) === 0) throw Error("Enter a non-zero whole-number XP change.");
	let n = JS(t), r = uw(n.map((e) => e.choice), e.defaultAmount), i = (/* @__PURE__ */ new Date()).toISOString(), a = Bv(), o = dw(e.defaultReason, {
		date: i.slice(0, 10),
		datetime: fw(i),
		session: a
	}, e.includeTimestampInReason);
	await Qv({
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
	return await ey(Kv($v(), l)), await mw(c), ui.notifications.info(`Applied ${hw(c.totalChange)} XP across ${c.awards.length} actors.`), c;
}
async function mw(e) {
	let t = e.awards.map((e) => `<li><strong>${Jy(e.actorName)}</strong>: ${hw(e.amount)} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Award</h2><p>${Jy(e.reason || "No reason")}</p><p><small>${Jy(fw(e.awardedAt))}</small></p><ul>${t}</ul><p><strong>${hw(e.totalChange)} XP in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
function hw(e) {
	return e > 0 ? `+${e}` : String(e);
}
//#endregion
//#region src/module/session-management/service.ts
async function gw(e) {
	q(K.sessionManagementConsole);
	let t = e.trim();
	if (!t) throw Error("Enter a current session reference.");
	await Uv({
		...zv(),
		currentSessionReference: t
	}), ui.notifications.info(`Current session reference saved as ${t}.`);
}
async function _w(e) {
	q(K.sessionManagementConsole);
	let t = Dv(zv(), e, {
		id: crypto.randomUUID(),
		recordedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	return await Uv(t.state), ui.notifications.info(`Session ${t.record.reference} recorded. Current session is now ${t.state.currentSessionReference}.`), t.record;
}
async function vw(e) {
	q(K.sessionManagementConsole), await Hv(e), ui.notifications.info("Session turnover options saved.");
}
async function yw() {
	q(K.sessionManagementConsole);
	let e = Ow(), t = e.scenes.viewed;
	if (!t) throw Error("View a Scene before pulling players.");
	let n = Vv().pullPolicy;
	if (n === "prompt" && (n = await foundry.applications.api.DialogV2.confirm({
		content: `<p>Activate <strong>${foundry.utils.escapeHTML(t.name)}</strong> for everyone? Choose Cancel to pull connected players without activating it.</p>`,
		modal: !0,
		rejectClose: !1,
		window: { title: "Pull Everyone to Scene" }
	}) ? "activate" : "pull"), n === "activate") {
		await t.activate(), ui.notifications.info(`${t.name} is now the active Scene.`);
		return;
	}
	for (let n of e.users) !n.isGM && n.active && e.socket.emit("pullToScene", t.id, n.id);
	ui.notifications.info(`Connected players were pulled to ${t.name}.`);
}
async function bw(e) {
	q(K.sessionManagementConsole);
	let t = zv(), n = ww(t.turnover, e);
	t = {
		...t,
		turnover: n
	}, await Uv(t);
	for (let r of n.steps) if (!(r.status === "completed" || r.status === "skipped")) try {
		if (r.id === "record") {
			n = Av(n, r.id, "completed", Dw());
			let i = Dv({
				...t,
				turnover: n
			}, e, {
				id: crypto.randomUUID(),
				recordedAt: Dw()
			});
			return await Uv(i.state), ui.notifications.info(`Session ${i.record.reference} turnover completed.`), {
				operation: n,
				record: i.record
			};
		}
		let i = await xw(r.id);
		n = Av(n, r.id, "completed", Dw(), i), t = {
			...t,
			turnover: n
		}, await Uv(t);
	} catch (e) {
		let i = e instanceof Error ? e.message : "The step failed.";
		throw n = Av(n, r.id, "failed", Dw(), i), await Uv({
			...t,
			turnover: n
		}), Error(`${Tw(r.id)} failed: ${i}`, { cause: e });
	}
	return { operation: n };
}
async function xw(e) {
	let t = Ow();
	if (e === "pause") return await t.togglePause(!0, { broadcast: !0 }), "Game paused for all users.";
	if (e === "holding-scene") {
		let e = Vv().holdingSceneUuid;
		if (!e) throw Error("Choose a holding Scene first.");
		let n = await t.fromUuid(e);
		if (!n || n.documentName !== "Scene") throw Error("The configured holding Scene no longer exists.");
		return await n.activate(), `${n.name} activated.`;
	}
	if (e === "xp") {
		let e = Zv(), t = qS(e.defaultSelection).actors.filter(({ selected: e }) => e).map(({ id: e }) => e);
		return await pw({
			actorIds: t,
			...e
		}), `XP applied to ${t.length} character${t.length === 1 ? "" : "s"}.`;
	}
	if (e === "fortune") return Sw();
	if (!t.messages.export) throw Error("Chat export is unavailable in this Foundry version.");
	return await t.messages.export(), "Chat log exported.";
}
async function Sw() {
	q(K.sessionManagementConsole);
	let e = qS(Zv().defaultSelection).actors.filter(({ selected: e }) => e).map(({ id: e }) => e), t = 0;
	for (let n of e) {
		let e = game.actors.get(n);
		if (!e) continue;
		let r = Cw(e);
		Ew(e.system, [
			"status",
			"fortune",
			"value"
		]) !== r && (await e.update({ "system.status.fortune.value": r }), t += 1);
	}
	return `Fortune restored for ${t} of ${e.length} characters.`;
}
function Cw(e) {
	let t = Ew(e.system, [
		"status",
		"fate",
		"value"
	]), n = game.i18n.localize("NAME.Luck"), r = Array.from(e.items ?? []).filter((e) => e.type === "talent" && e.name === n).reduce((e, t) => e + Ew(t.system, ["advances", "value"]), 0);
	return Math.max(0, t + r);
}
function ww(e, t) {
	if (e?.sessionReference === t.sessionReference.trim() && e.steps.some(({ status: e }) => e === "failed" || e === "pending")) return e;
	let n = new Set(["record"]);
	return t.pause && n.add("pause"), t.holdingScene && n.add("holding-scene"), t.xpAward && n.add("xp"), t.fortuneReset && n.add("fortune"), t.chatExport && n.add("chat-export"), kv(crypto.randomUUID(), t.sessionReference, Dw(), n);
}
function Tw(e) {
	return {
		"chat-export": "Chat export",
		fortune: "Fortune reset",
		"holding-scene": "Holding Scene",
		pause: "Pause",
		record: "Session recording",
		xp: "XP award"
	}[e];
}
function Ew(e, t) {
	let n = e;
	for (let e of t) {
		if (!n || typeof n != "object") return 0;
		n = n[e];
	}
	let r = Number(n);
	return Number.isFinite(r) ? Math.round(r) : 0;
}
function Dw() {
	return (/* @__PURE__ */ new Date()).toISOString();
}
function Ow() {
	let e = globalThis;
	return {
		...game,
		fromUuid: e.fromUuid
	};
}
//#endregion
//#region src/state/apps/xp-award-console/store.ts
var kw = ws("xp-award-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = Zy("The XP Award Console"), o = /* @__PURE__ */ A(20), s = /* @__PURE__ */ A(""), c = /* @__PURE__ */ A("party"), l = /* @__PURE__ */ A(!0), u = /* @__PURE__ */ A("default"), d = /* @__PURE__ */ A(), f = /* @__PURE__ */ A(!1), p, m, h = U(() => uw(e.value, o.value)), g = U(() => r.value.length > 0 && Number.isFinite(o.value) && Math.round(o.value) !== 0 && !f.value), _ = U(() => {
		let e = x().reasonContext;
		return dw(s.value, e, l.value);
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
}), Aw = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:whitespace-normal tw:py-1" }, jw = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[62rem]:grid-cols-[1.2fr_0.8fr]" }, Mw = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-recipients"
}, Nw = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Pw = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Fw = { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, Iw = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Lw = ["disabled"], Rw = ["disabled"], zw = ["disabled"], Bw = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, Vw = { class: "dui-table dui-table-sm tw:min-w-[34rem]" }, Hw = {
	class: "tw:min-w-44",
	scope: "row"
}, Uw = { class: "tw:block tw:font-semibold" }, Ww = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, Gw = { class: "tw:text-right tw:tabular-nums" }, Kw = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, qw = { class: "tw:text-right tw:tabular-nums" }, Jw = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Yw = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-details"
}, Xw = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Zw = { class: "dui-label tw:cursor-pointer tw:items-start tw:justify-start tw:gap-3" }, Qw = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, $w = { class: "tw:m-0 tw:break-words tw:font-semibold" }, eT = /* @__PURE__ */ P({
	__name: "XpAwardConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = kw();
		n.initialize(t.initialization, t.actions);
		let { actors: r, amount: i, canApply: a, defaultReason: o, defaultSelection: s, errorMessage: c, includeTimestampInReason: l, isWorking: u, plan: d, resolvedReason: f, selectedActors: p, selectionSource: m } = Ts(n), h = U(() => m.value === "targets" ? "Targeted tokens seeded this award." : `The ${s.value} default seeded this award.`);
		function g(e) {
			return d.value.awards.find((t) => t.actorId === e);
		}
		function _(e) {
			return e > 0 ? `+${e}` : String(e);
		}
		return (e, t) => (L(), oa(xl, {
			description: "Apply one reviewed XP change to selected characters using your saved recipient and reason defaults.",
			"error-message": j(c),
			icon: "fa-solid fa-award",
			title: "XP Award Console"
		}, {
			"header-end": M(() => [z("span", Aw, E(j(p).length) + " selected ", 1)]),
			footer: M(() => [B(nb, {
				disabled: !j(a),
				icon: "fa-solid fa-award",
				label: `Apply ${_(j(d).totalChange)} XP`,
				working: j(u),
				onAction: j(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])]),
			default: M(() => [z("div", jw, [z("section", Mw, [z("div", Nw, [z("div", Pw, [z("div", null, [t[7] ||= z("h2", {
				id: "fixed-xp-recipients",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Recipients ", -1), z("p", Fw, E(h.value), 1)]), z("div", Iw, [
				z("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: j(u),
					type: "button",
					onClick: t[0] ||= (e) => j(n).setAllActorsSelected(!0)
				}, " All ", 8, Lw),
				z("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: j(u),
					type: "button",
					onClick: t[1] ||= (e) => j(n).setAllActorsSelected(!1)
				}, " None ", 8, Rw),
				z("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: j(u),
					type: "button",
					onClick: t[2] ||= (...e) => j(n).resetSelection && j(n).resetSelection(...e)
				}, " Reset ", 8, zw)
			])]), j(r).length ? (L(), R("div", Bw, [z("table", Vw, [t[8] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Use"),
				z("th", { scope: "col" }, "Actor"),
				z("th", {
					class: "tw:text-right",
					scope: "col"
				}, "Current XP"),
				z("th", {
					class: "tw:text-right",
					scope: "col"
				}, "Change"),
				z("th", {
					class: "tw:text-right",
					scope: "col"
				}, "New total")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(j(r), (e) => (L(), R("tr", {
				key: e.id,
				class: Ce({ "tw:bg-base-200!": e.selected })
			}, [
				z("td", null, [B(ob, {
					"actor-id": e.id,
					"actor-name": e.name,
					checked: e.selected,
					disabled: j(u),
					purpose: "the XP award",
					onChange: j(n).setActorSelected
				}, null, 8, [
					"actor-id",
					"actor-name",
					"checked",
					"disabled",
					"onChange"
				])]),
				z("th", Hw, [z("span", Uw, E(e.name), 1), e.category === "companion" ? (L(), R("span", Ww, " Half award ")) : H("", !0)]),
				z("td", Gw, E(e.totalXp), 1),
				z("td", Kw, E(g(e.id) ? _(g(e.id)?.amount ?? 0) : "—"), 1),
				z("td", qw, E(g(e.id)?.afterXp ?? "—"), 1)
			], 2))), 128))])])])) : (L(), R("div", Jw, [...t[9] ||= [z("i", {
				class: "fa-solid fa-user-slash",
				"aria-hidden": "true"
			}, null, -1), z("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]), z("section", Yw, [z("div", Xw, [
				t[13] ||= z("div", null, [z("h2", {
					id: "fixed-xp-details",
					class: "dui-card-title tw:font-serif tw:text-lg"
				}, " Award details "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " These values become the next console defaults after a successful award. ")], -1),
				t[14] ||= z("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-amount"
				}, "XP change", -1),
				N(z("input", {
					id: "fixed-xp-amount",
					"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ k(i) ? i.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
					inputmode: "numeric",
					step: "1",
					type: "number"
				}, null, 512), [[
					W,
					j(i),
					void 0,
					{ number: !0 }
				]]),
				t[15] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Negative values remove XP. Companion awards are rounded down to half, matching GM Toolkit. ", -1),
				t[16] ||= z("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-default-group"
				}, " Default recipients on next open ", -1),
				N(z("select", {
					id: "fixed-xp-default-group",
					"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ k(s) ? s.value = e : null,
					class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!"
				}, [...t[10] ||= [
					z("option", { value: "party" }, "Party", -1),
					z("option", { value: "company" }, "Company", -1),
					z("option", { value: "world" }, "World", -1)
				]], 512), [[No, j(s)]]),
				t[17] ||= z("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-reason"
				}, " Experience log reason ", -1),
				N(z("input", {
					id: "fixed-xp-reason",
					"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ k(o) ? o.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:border-base-content/25! tw:bg-base-100!",
					type: "text"
				}, null, 512), [[W, j(o)]]),
				t[18] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
					V(" Supports "),
					z("code", null, "%session%"),
					V(", "),
					z("code", null, "%date%"),
					V(", and "),
					z("code", null, "%datetime%"),
					V(". ")
				], -1),
				z("label", Zw, [N(z("input", {
					"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ k(l) ? l.value = e : null,
					class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:appearance-none! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none!",
					type: "checkbox"
				}, null, 512), [[G, j(l)]]), t[11] ||= z("span", null, [z("span", { class: "tw:block tw:font-semibold" }, "Include timestamp in WFRP4e reason"), z("span", { class: "tw:block tw:text-xs tw:text-base-content/65!" }, " WFRP4e’s log schema has no timestamp field, so this appends UTC text to the reason. ")], -1)]),
				z("div", Qw, [t[12] ||= z("span", { class: "tw:text-xs tw:text-base-content/60!" }, "WFRP4e will record", -1), z("p", $w, E(j(f) || "No reason"), 1)]),
				t[19] ||= z("div", {
					class: "dui-alert tw:text-xs",
					role: "note"
				}, [z("i", {
					class: "fa-solid fa-clock-rotate-left",
					"aria-hidden": "true"
				}), z("span", null, " The exact UTC time and per-actor changes are always saved in Drowsy’s world audit log, whether or not the reason includes it. ")], -1)
			])])])]),
			_: 1
		}, 8, ["error-message"]));
	}
});
//#endregion
//#region src/module/xp-award/initialization.ts
function tT() {
	let e = Zv(), t = qS(e.defaultSelection), n = (/* @__PURE__ */ new Date()).toISOString();
	return {
		...e,
		...t,
		awardedAt: n,
		reasonContext: {
			date: n.slice(0, 10),
			datetime: fw(n),
			session: Bv()
		}
	};
}
//#endregion
//#region src/module/apps/xp-award-console/XpAwardConsoleApplication.ts
var nT = class extends Kc {
	static ACCESS_POLICY = K.xpAwardConsole;
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
		return eT;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: pw,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Award Console.`, e), ui.notifications.error("XP changes completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				}
			},
			initialization: tT()
		};
	}
};
//#endregion
//#region src/module/apps/xp-award-console/open.ts
async function rT() {
	let e = new nT();
	return await e.render(!0), e;
}
function iT() {
	rT().catch((e) => {
		console.error(`${t} | Failed to open the XP Award Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Award Console. See the browser console for details.");
	});
}
//#endregion
//#region src/module/apps/session-management/SessionManagementApplication.ts
var aT = class extends Kc {
	static ACCESS_POLICY = K.sessionManagementConsole;
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
		return sw;
	}
	getVueProps() {
		return {
			actions: {
				completeSession: _w,
				openXpAwardConsole: iT,
				pullEveryoneToViewedScene: yw,
				runSessionTurnover: bw,
				saveSessionConfiguration: vw,
				saveCurrentSessionReference: gw
			},
			initialization: cw()
		};
	}
};
//#endregion
//#region src/module/apps/session-management/open.ts
async function oT() {
	let e = new aT();
	return await e.render(!0), e;
}
//#endregion
//#region src/view/apps/toolkit-home/ToolkitHomeApp.vue?vue&type=script&setup=true&lang.ts
var sT = { class: "tw:grid tw:min-w-0 tw:gap-4" }, cT = { class: "tw:m-0 tw:font-serif tw:text-lg" }, lT = { class: "tw:grid tw:min-w-0 tw:gap-2 tw:min-[38rem]:grid-cols-2" }, uT = ["onClick"], dT = { class: "dui-card-body tw:flex-row tw:items-start tw:gap-3 tw:p-4" }, fT = { class: "tw:min-w-0" }, pT = { class: "tw:block tw:font-semibold" }, mT = { class: "tw:block tw:text-xs tw:text-base-content/65!" }, hT = /* @__PURE__ */ P({
	__name: "ToolkitHomeApp",
	props: { sections: {} },
	setup(e) {
		return (t, n) => (L(), oa(xl, {
			description: "Open the tools you need without relying on world macro names.",
			icon: "fa-solid fa-toolbox",
			title: "Drowsy’s WFRP4e Toolkit"
		}, {
			default: M(() => [z("div", sT, [(L(!0), R(I, null, F(e.sections, (e) => (L(), R("section", {
				key: e.id,
				class: "tw:grid tw:gap-2"
			}, [z("h2", cT, E(e.label), 1), z("div", lT, [(L(!0), R(I, null, F(e.actions, (e) => (L(), R("button", {
				key: e.id,
				class: "dui-card dui-card-border tw:min-w-0 tw:cursor-pointer tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-left tw:shadow-sm tw:transition hover:tw:border-primary/60!",
				type: "button",
				onClick: e.open
			}, [z("span", dT, [z("i", {
				class: Ce([e.icon, "tw:mt-1 tw:text-lg tw:text-primary!"]),
				"aria-hidden": "true"
			}, null, 2), z("span", fT, [z("span", pT, E(e.label), 1), z("span", mT, E(e.description), 1)])])], 8, uT))), 128))])]))), 128))])]),
			_: 1
		}));
	}
}), gT = class extends Kc {
	sections;
	static ACCESS_POLICY = K.toolkitHome;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-toolkit-home`],
		id: `${t}-toolkit-home`,
		position: {
			height: 720,
			width: 760
		},
		window: {
			icon: "fa-solid fa-toolbox",
			resizable: !0,
			title: n
		}
	};
	constructor(e) {
		super(), this.sections = e;
	}
	getVueComponent() {
		return hT;
	}
	getVueProps() {
		return { sections: this.sections };
	}
};
//#endregion
//#region src/module/apps/toolkit-home/open.ts
async function _T() {
	let e = new gT([{
		id: "gameplay",
		label: "Gameplay",
		actions: [
			vT("combat", "Combat Console", "Manage Advantage and condition checks.", "fa-solid fa-swords", sd),
			vT("damage", "Damage Console", "Apply damage to several actors.", "fa-solid fa-bolt", Vd),
			vT("group-test", "Secret Group Tests", "Run private WFRP4e tests for a group.", "fa-solid fa-dice-d100", Yp),
			vT("dark-whispers", "Dark Whispers", "Send temptations to characters with Corruption.", "fa-solid fa-comment-dots", If),
			vT("fear", "Fear Console", "Apply Fear and Terror through WFRP4e.", "fa-solid fa-ghost", fl),
			vT("xp-curve", "XP Curve Console", "Review and award campaign catch-up XP.", "fa-solid fa-chart-line", yC),
			vT("xp-award", "XP Award Console", "Apply a fixed XP change to selected characters.", "fa-solid fa-award", rT),
			vT("token-tools", "Token Vision & Light", "Apply vision modes and light presets.", "fa-solid fa-eye", Om)
		]
	}, {
		id: "campaign",
		label: "Campaign",
		actions: [
			vT("session", "Session Management", "Record session turnover and history.", "fa-solid fa-calendar-check", oT),
			vT("administration", "Administration Console", "Manage Scenes, compendium visibility, players, and utility rolls.", "fa-solid fa-screwdriver-wrench", su),
			vT("import", "Import from GM Toolkit", "Copy supported settings, prompts, and launchers.", "fa-solid fa-file-import", Iy)
		]
	}]);
	return await e.render(!0), e;
}
function vT(e, t, n, r, i) {
	return {
		description: n,
		icon: r,
		id: e,
		label: t,
		open: () => void i()
	};
}
//#endregion
//#region src/functions/grid-scale/calculate.ts
function yT(e) {
	return Number.isFinite(e.size) && e.size > 0 && Number.isFinite(e.distance) && e.distance > 0;
}
function bT(e, t) {
	return e.size / t.size * (t.distance / e.distance);
}
//#endregion
//#region src/module/grid-scale/service.ts
async function xT() {
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
	if (!yT(n)) {
		ui.notifications.error("The current Scene has an invalid grid size or distance.");
		return;
	}
	let r = await ST(n);
	if (r) {
		if (!yT(r)) {
			ui.notifications.error("Grid size and distance must both be positive numbers.");
			return;
		}
		await CT(e, n, r);
	}
}
async function ST(e) {
	let t = foundry.utils.escapeHTML(e.units), n = await foundry.applications.api.DialogV2.input({
		window: { title: "Change Grid Scale" },
		position: { width: 480 },
		content: `
      <form class="standard-form">
        <p class="notes">
          Ambient Lights and Token-emitted light radii will keep the same rendered size.
        </p>
        <div class="form-group">
          <label for="drowsy-grid-scale-size">Grid size (pixels)</label>
          <div class="form-fields">
            <input
              id="drowsy-grid-scale-size"
              name="size"
              type="number"
              min="1"
              step="1"
              value="${e.size}"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="drowsy-grid-scale-distance">Distance per space</label>
          <div class="form-fields">
            <input
              id="drowsy-grid-scale-distance"
              name="distance"
              type="number"
              min="0.000001"
              step="any"
              value="${e.distance}"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="drowsy-grid-scale-units">Units</label>
          <div class="form-fields">
            <input
              id="drowsy-grid-scale-units"
              name="units"
              type="text"
              value="${t}"
            />
          </div>
        </div>
      </form>
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
async function CT(e, t, n) {
	let r = bT(t, n), i = e.lights.map((e) => ({
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
		a.length > 0 && (await e.updateEmbeddedDocuments("AmbientLight", a), c = !0), s.length > 0 && (await e.updateEmbeddedDocuments("Token", s), l = !0), await e.update(TT(n)), ui.notifications.info(`Grid updated from ${ET(t)} to ${ET(n)}.`);
	} catch (n) {
		let r = await wT({
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
async function wT(e) {
	let t = [];
	return (e.scene.grid.size !== e.oldGrid.size || e.scene.grid.distance !== e.oldGrid.distance || e.scene.grid.units !== e.oldGrid.units) && t.push(e.scene.update(TT(e.oldGrid))), e.ambientLightsChanged && t.push(e.scene.updateEmbeddedDocuments("AmbientLight", e.oldAmbientLights)), e.tokenLightsChanged && t.push(e.scene.updateEmbeddedDocuments("Token", e.oldTokenLights)), Promise.allSettled(t);
}
function TT(e) {
	return {
		"grid.distance": e.distance,
		"grid.size": e.size,
		"grid.units": e.units
	};
}
function ET(e) {
	return `${e.size}px/${e.distance}${e.units}`;
}
//#endregion
//#region src/module/api/create-module-api.ts
function DT() {
	return {
		adjustAdvantage: qu,
		applyDamage: Pd,
		applyTokenTools: wm,
		openAdministrationConsole: su,
		openCombatConsole: sd,
		openDamageConsole: Vd,
		openDarkWhispersConsole: If,
		applyToSelectedActors: il,
		awardXp: pw,
		awardXpCurve: gC,
		changeGridScalePreservingLighting: xT,
		checkConditions: Zu,
		completeSession: _w,
		copyLink: ol,
		getGmToolkitCutoverReport: Dy,
		getGmToolkitMigrationPreview: Ey,
		importGmToolkitDarkWhispers: My,
		importGmToolkitSettings: Ay,
		importGmToolkitSessionData: jy,
		openFearConsole: fl,
		openGmToolkitMigration: Iy,
		openGroupTestConsole: Yp,
		openSessionManagementConsole: oT,
		openToolkitHome: _T,
		openTokenToolsConsole: Om,
		openXpAwardConsole: rT,
		openXpCurveConsole: yC,
		openWorkbench: fl,
		postPrompt: al,
		postSummaryPrompt: sl,
		reviewGmToolkitCutover: Py,
		resetFortune: Sw,
		rollD100: iu,
		runGroupTest: Mp,
		runSessionTurnover: bw,
		sendDarkWhispers: Af,
		setCompendiumVisibility: ru,
		setSceneLighting: nu,
		pullEveryoneToViewedScene: yw
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function OT() {
	let e = game.modules.get(t);
	if (!e) throw Error(`Foundry module registry entry was not found for ${t}.`);
	e.api = DT();
}
//#endregion
//#region src/module/administration/hooks.ts
function kT() {
	Hooks.on("getChatMessageContextOptions", (e, t) => {
		t.push({
			callback: jT,
			condition: () => game.user?.isGM === !0,
			icon: "<i class=\"fa-solid fa-pen-fancy\"></i>",
			name: "Edit message flavor"
		});
	});
}
function AT() {
	if (game.settings.get("wfrp4e-enhanced-fear-terror", eu.showUnassignedPlayerWarning) !== !0) return;
	let e = Array.from(game.users).filter((e) => !e.isGM && e.active !== !1 && !e.character).map(({ name: e }) => e);
	e.length > 0 && ui.notifications.warn(`${e.join(", ")} ${e.length === 1 ? "has" : "have"} no assigned character.`);
}
async function jT(e) {
	try {
		let t = e instanceof HTMLElement ? e : e?.[0];
		if (!(t instanceof HTMLElement)) throw Error("The selected chat message element is unavailable.");
		let n = t.dataset.messageId ?? t.closest("[data-message-id]")?.dataset.messageId, r = game.messages, i = n ? r.get(n) : void 0;
		if (!i) throw Error("The selected chat message is no longer available.");
		let a = await foundry.applications.api.DialogV2.input({
			content: `<label class="form-group"><span>Flavor</span><input name="flavor" type="text" value="${foundry.utils.escapeHTML(i.flavor ?? "")}"></label>`,
			modal: !0,
			ok: {
				icon: "fa-solid fa-check",
				label: "Apply"
			},
			position: { width: 420 },
			rejectClose: !1,
			window: { title: "Edit message flavor" }
		});
		if (!a) return;
		let o = typeof a.flavor == "string" ? a.flavor : "";
		await i.update({ flavor: o });
	} catch (e) {
		ui.notifications.error(e instanceof Error ? e.message : "Chat flavor could not be updated.");
	}
}
//#endregion
//#region src/module/settings/register.ts
function MT(n, r) {
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
function NT(e, n, r, i, a = {}) {
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
//#region src/module/administration/settings/register.ts
function PT() {
	NT(eu.showUnassignedPlayerWarning, !0, Boolean, `${e}.Settings.Administration.ShowUnassignedPlayerWarning`), game.settings.registerMenu(t, "administrationConsole", {
		hint: `${e}.Menu.AdministrationConsole.Hint`,
		icon: "fa-solid fa-screwdriver-wrench",
		label: `${e}.Menu.AdministrationConsole.Label`,
		name: `${e}.Menu.AdministrationConsole.Name`,
		restricted: ou.ACCESS_POLICY.gmOnly,
		type: ou
	});
}
//#endregion
//#region src/functions/combat/advantage.ts
function FT(e, t) {
	return t ? e === "attacker" ? [{
		amount: 1,
		mode: "add",
		participant: "attacker"
	}] : [] : [{
		amount: 0,
		mode: "set",
		participant: e === "attacker" ? "defender" : "attacker"
	}, {
		amount: 1,
		mode: "add",
		participant: e
	}];
}
function IT(e) {
	return e.filter(({ currentAdvantage: e, roundStartAdvantage: t }) => e > 0 && e <= t).map(({ actorId: e }) => e);
}
//#endregion
//#region src/module/combat/hooks.ts
var LT = /* @__PURE__ */ new Set();
function RT() {
	Hooks.on("wfrp4e:opposedTestResult", zT), Hooks.on("wfrp4e:applyDamage", BT), Hooks.on("createActiveEffect", VT), Hooks.on("createCombatant", (e) => void HT(e, "join")), Hooks.on("deleteCombatant", (e) => void HT(e, "leave")), Hooks.on("preUpdateCombat", (e, t) => void UT(e, t)), Hooks.on("updateCombat", (e, t) => void GT(e, t));
}
async function zT(...e) {
	if (!ZT() || !nd().automateOpposed) return;
	let [t, n, r] = e;
	if (!t || !n || !r || r.context?.unopposed === !0) return;
	let i = n.data?.result;
	if (i?.options?.preventAdvantage === !0 || i?.canDualWield === !0) return;
	let a = t.result, o = Xu(n.actor), s = Xu(r.actor);
	if (!o || !s || !a) return;
	let c = JT(n);
	if (c && LT.has(c)) return;
	c && YT(c);
	let l = a.winner === "attacker" ? o : s, u = l === o ? s : o, d = {
		attacker: o,
		defender: s
	}, f = FT(l === o ? "attacker" : "defender", XT());
	for (let e of f) {
		let t = d[e.participant];
		e.mode === "set" ? await Yu(t, e.amount) : await Ju(t, e.amount);
	}
	QT(`${l.name} gained Advantage; ${u.name} lost Advantage.`);
}
async function BT(e) {
	if (!ZT() || !nd().automateDamage || !$T(e)) return;
	let t = e.opposedTest;
	if (t?.defenderTest?.context?.unopposed !== !0) return;
	let n = Xu(e.attacker), r = Xu(e.actor);
	if (!n || !r) return;
	let i = t?.attackerTest, a = i ? JT(i) : "";
	a && LT.has(a) || (a && YT(a), XT() || await Yu(r, 0), await Ju(n, 1), QT(`${n.name} gained Advantage for outmanoeuvring ${r.name}.`));
}
async function VT(e) {
	if (!ZT() || !nd().automateCondition || !$T(e) || e.isCondition !== !0 || XT()) return;
	let t = String(e.conditionId ?? "");
	if ([
		"dead",
		"engaged",
		"fear",
		"grappling"
	].includes(t)) return;
	let n = Xu(e.parent);
	n && n.inCombat === !0 && (await Yu(n, 0), QT(`${n.name} lost Advantage after receiving a condition.`));
}
async function HT(e, t) {
	if (!ZT() || !$T(e)) return;
	let n = nd();
	if (t === "join" && !n.clearOnJoin || t === "leave" && !n.clearOnLeave || t === "join" && XT()) return;
	let r = Xu(e.actor);
	r && await Yu(r, 0);
}
async function UT(e, t) {
	if (!ZT() || XT() || !nd().promptMomentumLoss || !$T(e) || !$T(t)) return;
	let n = Number(t.round), r = Number(e.round);
	if (!Number.isFinite(n) || n <= r || r <= 0) return;
	let i = KT(e), a = new Set(IT(i.flatMap((e) => {
		let t = Xu(e.actor);
		return t ? [{
			actorId: t.id,
			currentAdvantage: Number(t.system.status?.advantage?.value ?? 0),
			roundStartAdvantage: Number(qT(e, "roundStartAdvantage") ?? 0)
		}] : [];
	}))), o = i.filter((e) => {
		let t = Xu(e.actor);
		return t ? a.has(t.id) : !1;
	});
	if (o.length === 0) return;
	let s = o.map((e) => Xu(e.actor)?.name).join(", ");
	if (await foundry.applications.api.DialogV2.confirm({
		content: `<p>Reduce Advantage by 1 for combatants who gained no momentum this round?</p><p><strong>${foundry.utils.escapeHTML(s)}</strong></p>`,
		modal: !0,
		rejectClose: !1,
		window: { title: "Lose Momentum" }
	})) {
		for (let e of o) {
			let t = Xu(e.actor);
			t && await Ju(t, -1);
		}
		await WT(o.flatMap((e) => {
			let t = Xu(e.actor)?.name;
			return t ? [t] : [];
		})), QT(`Reduced Advantage for ${o.length} combatant${o.length === 1 ? "" : "s"}.`);
	}
}
async function WT(e) {
	let t = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id), n = e.map((e) => `<li>${foundry.utils.escapeHTML(e)}</li>`).join("");
	await ChatMessage.create({
		content: `<h3>Momentum Loss</h3><p>Advantage reduced by 1:</p><ul>${n}</ul>`,
		whisper: t
	});
}
async function GT(e, n) {
	if (!(!ZT() || !$T(e) || !$T(n) || !("round" in n))) for (let n of KT(e)) {
		let e = Xu(n.actor), r = n.setFlag;
		e && typeof r == "function" && await r.call(n, t, "roundStartAdvantage", Number(e.system.status?.advantage?.value ?? 0));
	}
}
function KT(e) {
	let t = e.combatants;
	return t && typeof t == "object" ? Array.from(t) : [];
}
function qT(e, n) {
	let r = e.getFlag;
	return typeof r == "function" ? r.call(e, t, n) : void 0;
}
function JT(e) {
	let t = e.message;
	return String(t?.id ?? "");
}
function YT(e) {
	LT.add(e), LT.size > 100 && LT.delete(LT.values().next().value ?? "");
}
function XT() {
	return game.settings.get("wfrp4e", "useGroupAdvantage") === !0;
}
function ZT() {
	return game.user?.isGM === !0 && game.user.isUniqueGM !== !1;
}
function QT(e) {
	ui.notifications.info(e, { permanent: nd().persistentNotifications });
}
function $T(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/combat/settings/register.ts
function eE() {
	for (let [n, r] of Object.entries(td)) game.settings.register(t, r, {
		config: !1,
		default: n !== "persistentNotifications",
		hint: `${e}.Settings.Advantage.${n}.Hint`,
		name: `${e}.Settings.Advantage.${n}.Name`,
		scope: "world",
		type: Boolean
	});
}
//#endregion
//#region src/module/fear-terror/actor-sheet/register.ts
var tE = "openFearConsole", nE = "wfrp4e-enhanced-fear-terror-actor-header", rE = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], iE = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function aE() {
	for (let e of rE) Hooks.on(e, (e, t) => {
		oE() && sE(e, t);
	});
	for (let e of iE) Hooks.on(e, (e) => {
		oE() && cE(e);
	});
}
function oE() {
	return dl.canCurrentUserAccess() && Uc(Hc.actorSheet);
}
function sE(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === tE) || (t.push({
		action: tE,
		icon: "fa-solid fa-skull",
		label: "Fear Console"
	}), e.options.actions ??= {}, e.options.actions[tE] = function() {
		lE(this.document);
	}));
}
function cE(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${nE}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(nE, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = tE, i.dataset.tooltip = "Fear Console", i.ariaLabel = "Open Drowsy’s WFRP4e Toolkit Fear Console", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), lE(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function lE(e) {
	try {
		pl({ initialPayload: Qc(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not read this actor. See the browser console for details.");
	}
}
//#endregion
//#region src/module/dark-whispers/settings/register.ts
function uE() {
	NT(xf.promptLibrary, JSON.stringify({
		prompts: [],
		version: 1
	}), String, `${e}.Settings.DarkWhispers.PromptLibrary`), NT(xf.defaultGroup, "party", String, `${e}.Settings.DarkWhispers.DefaultGroup`), NT(xf.messageStyle, "taunt", String, `${e}.Settings.DarkWhispers.MessageStyle`);
}
//#endregion
//#region src/module/gm-toolkit/settings/register.ts
function dE() {
	NT(uy.state, JSON.stringify({ version: 1 }), String, `${e}.Settings.GmToolkitMigration.State`), game.settings.registerMenu(t, "gmToolkitMigration", {
		hint: `${e}.Menu.GmToolkitMigration.Hint`,
		icon: "fa-solid fa-box-archive",
		label: `${e}.Menu.GmToolkitMigration.Label`,
		name: `${e}.Menu.GmToolkitMigration.Name`,
		restricted: Fy.ACCESS_POLICY.gmOnly,
		type: Fy
	});
}
//#endregion
//#region src/module/group-test/settings/register.ts
var fE = {
	bypassDialog: !0,
	defaultDifficulty: "average",
	defaultGroup: "party",
	defaultModifier: 0,
	defaultRollMode: "blindroll",
	defaultSkill: "Lore (Reikland)",
	fallbackAdvanced: !1,
	fallbackDifficultySteps: 0,
	quickTest1: "Perception",
	quickTest2: "Cool",
	quickTest3: "Intuition",
	quickTest4: "Gossip",
	summaryThreshold: 2
};
function pE() {
	for (let [n, r] of Object.entries(hp)) {
		let i = fE[n];
		game.settings.register(t, r, {
			config: !1,
			default: i,
			hint: `${e}.Settings.GroupTest.${n}.Hint`,
			name: `${e}.Settings.GroupTest.${n}.Name`,
			scope: "world",
			type: typeof i == "boolean" ? Boolean : typeof i == "number" ? Number : String
		});
	}
}
//#endregion
//#region src/functions/scene-controls/toolclip.ts
function mE(e, t) {
	return {
		heading: e,
		items: [{ paragraph: t }]
	};
}
//#endregion
//#region src/module/fear-terror/scene-controls/register.ts
var hE = "openFearConsole";
function gE() {
	Hooks.on("getSceneControlButtons", (e) => {
		!dl.canCurrentUserAccess() || !Uc(Hc.tokenControls) || _E(e);
	});
}
function _E(t) {
	let n = t.tokens;
	n && (n.tools[hE] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: hE,
		onChange: () => {
			pl();
		},
		order: 99,
		title: "Fear Console",
		toolclip: mE("Fear Console", `${e}.SceneControls.OpenFearConsole`)
	});
}
//#endregion
//#region src/module/fear-terror/settings/register.ts
function vE() {
	MT(Hc.tokenControls, "TokenControlsLauncher"), MT(Hc.actorSheet, "ActorSheetLauncher"), game.settings.registerMenu(t, "fearConsole", {
		hint: `${e}.Menu.FearConsoleConfigurator.Hint`,
		icon: "fa-solid fa-gears",
		label: `${e}.Menu.FearConsoleConfigurator.Label`,
		name: `${e}.Menu.FearConsoleConfigurator.Name`,
		restricted: qc.ACCESS_POLICY.gmOnly,
		type: qc
	});
}
//#endregion
//#region src/module/session-management/settings/register.ts
function yE() {
	NT(Rv.state, JSON.stringify({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), String, `${e}.Settings.SessionManagement.State`), NT(Rv.holdingSceneUuid, "", String, `${e}.Settings.SessionManagement.HoldingSceneUuid`), NT(Rv.exportChat, !1, Boolean, `${e}.Settings.SessionManagement.ExportChat`), NT(Rv.pullPolicy, "pull", String, `${e}.Settings.SessionManagement.PullPolicy`, { choices: {
		activate: `${e}.Settings.SessionManagement.PullPolicy.Activate`,
		pull: `${e}.Settings.SessionManagement.PullPolicy.Pull`
	} }), game.settings.registerMenu(t, "sessionManagementConsole", {
		hint: `${e}.Menu.SessionManagementConsole.Hint`,
		icon: "fa-solid fa-calendar-check",
		label: `${e}.Menu.SessionManagementConsole.Label`,
		name: `${e}.Menu.SessionManagementConsole.Name`,
		restricted: aT.ACCESS_POLICY.gmOnly,
		type: aT
	});
}
//#endregion
//#region src/module/session-management/hooks.ts
function bE() {
	Hooks.on("preUpdateToken", xE);
}
function xE(e, t) {
	if (game.user?.isGM || !SE(e) || !SE(t)) return;
	let n = Vv().holdingSceneUuid, r = canvas?.scene?.uuid;
	!n || r !== n || (t.x !== void 0 && (t.x = e.x), t.y !== void 0 && (t.y = e.y));
}
function SE(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/toolkit-home/settings/register.ts
function CE() {
	class n extends gT {
		constructor() {
			super([]);
		}
		async render(e) {
			return await _T(), this;
		}
	}
	game.settings.registerMenu(t, "toolkitHome", {
		hint: `${e}.Menu.ToolkitHome.Hint`,
		icon: "fa-solid fa-toolbox",
		label: `${e}.Menu.ToolkitHome.Label`,
		name: `${e}.Menu.ToolkitHome.Name`,
		restricted: gT.ACCESS_POLICY.gmOnly,
		type: n
	});
}
//#endregion
//#region src/module/token-tools/settings/register.ts
function wE() {
	let n = {
		darkRange: 120,
		normalRange: 2,
		overrideDarkVision: !1,
		overrideNightVision: !1
	};
	for (let [r, i] of Object.entries(ym)) {
		let a = n[r];
		game.settings.register(t, i, {
			config: !1,
			default: a,
			hint: `${e}.Settings.Vision.${r}.Hint`,
			name: `${e}.Settings.Vision.${r}.Name`,
			scope: "world",
			type: typeof a == "boolean" ? Boolean : Number
		});
	}
}
//#endregion
//#region src/module/xp-curve/scene-controls/register.ts
var TE = "openXpCurveConsole";
function EE() {
	Hooks.on("getSceneControlButtons", (t) => {
		if (!vC.canCurrentUserAccess() || !rC($.showTokenControlsLauncher)) return;
		let n = t.tokens;
		n && (n.tools[TE] = {
			button: !0,
			icon: "fa-solid fa-chart-line",
			name: TE,
			onChange: bC,
			order: 98,
			title: "XP Curve Console",
			toolclip: mE("XP Curve Console", `${e}.SceneControls.OpenXpCurveConsole`)
		});
	});
}
//#endregion
//#region src/module/xp-curve/settings/register.ts
function DE() {
	MT($.showTokenControlsLauncher, "XpCurveTokenControlsLauncher"), OE($.maximumAward, Xy.parameters.maximumAward, Number, "MaximumAward", { range: {
		max: 1e5,
		min: 0,
		step: 1
	} }), OE($.gapForMaximumAward, Xy.parameters.gapForMaximumAward, Number, "GapForMaximumAward", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), OE($.curveExponent, Xy.parameters.curveExponent, Number, "CurveExponent", { range: {
		max: 5,
		min: .1,
		step: .05
	} }), OE($.scalePivot, Xy.parameters.scalePivot, Number, "ScalePivot", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), OE($.scaleExponent, Xy.parameters.scaleExponent, Number, "ScaleExponent", { range: {
		max: 2,
		min: 0,
		step: .05
	} }), OE($.companionMultiplier, Xy.parameters.companionMultiplier, Number, "CompanionMultiplier", { range: {
		max: 1,
		min: 0,
		step: .05
	} }), OE($.defaultReason, Xy.defaultReason, String, "DefaultReason"), OE($.defaultSelection, Xy.defaultSelection, String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpCurve.DefaultSelection.Company`,
		party: `${e}.Settings.XpCurve.DefaultSelection.Party`,
		world: `${e}.Settings.XpCurve.DefaultSelection.World`
	} }), game.settings.registerMenu(t, "xpCurveConsole", {
		hint: `${e}.Menu.XpCurveConfigurator.Hint`,
		icon: "fa-solid fa-sliders",
		label: `${e}.Menu.XpCurveConfigurator.Label`,
		name: `${e}.Menu.XpCurveConfigurator.Name`,
		restricted: dC.ACCESS_POLICY.gmOnly,
		type: dC
	});
}
function OE(t, n, r, i, a = {}) {
	NT(t, n, r, `${e}.Settings.XpCurve.${i}`, a);
}
//#endregion
//#region src/module/xp-award/settings/register.ts
function kE() {
	AE(Xv.auditLog, JSON.stringify({
		batches: [],
		version: 1
	}), String, "AuditLog"), AE(Xv.defaultAmount, 20, Number, "DefaultAmount", { range: {
		max: 1e5,
		min: -1e5,
		step: 1
	} }), AE(Xv.defaultReason, "Session %session% (%date%)", String, "DefaultReason"), AE(Xv.defaultSelection, "party", String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpAward.DefaultSelection.Company`,
		party: `${e}.Settings.XpAward.DefaultSelection.Party`,
		world: `${e}.Settings.XpAward.DefaultSelection.World`
	} }), AE(Xv.includeTimestampInReason, !0, Boolean, "IncludeTimestampInReason"), game.settings.registerMenu(t, "xpAwardConsole", {
		hint: `${e}.Menu.XpAwardConsole.Hint`,
		icon: "fa-solid fa-award",
		label: `${e}.Menu.XpAwardConsole.Label`,
		name: `${e}.Menu.XpAwardConsole.Name`,
		restricted: nT.ACCESS_POLICY.gmOnly,
		type: nT
	});
}
function AE(t, n, r, i, a = {}) {
	NT(t, n, r, `${e}.Settings.XpAward.${i}`, a);
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function jE() {
	kT(), RT(), jf(), Fp(), bE(), Hooks.once("init", () => {
		console.info(`${t} | Initializing`), PT(), eE(), vE(), uE(), dE(), pE(), yE(), CE(), wE(), kE(), DE(), aE(), gE(), EE();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${t} | Loaded outside ${i}; skipping module API registration.`);
			return;
		}
		OT(), AT(), console.info(`${t} | Ready`);
	});
}
//#endregion
//#region src/main.ts
jE();
//#endregion

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map