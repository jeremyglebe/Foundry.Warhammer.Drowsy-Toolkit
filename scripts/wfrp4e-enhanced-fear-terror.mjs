// src/module/constants.ts
var e = "wfrp4e-enhanced-fear-terror", t = "Drowsy’s WFRP4e Toolkit", n = "WFRP4E_DROWSYS_TOOLKIT", r = e, i = t, a = "wfrp4e", o = 86400, s = 99999, c = [
	{
		name: "Hexenstag",
		days: 1,
		intercalary: !0
	},
	{
		name: "Nachexen",
		days: 32,
		intercalary: !1
	},
	{
		name: "Jahrdrung",
		days: 33,
		intercalary: !1
	},
	{
		name: "Mitterfruhl",
		days: 1,
		intercalary: !0
	},
	{
		name: "Pflugzeit",
		days: 33,
		intercalary: !1
	},
	{
		name: "Sigmarzeit",
		days: 33,
		intercalary: !1
	},
	{
		name: "Sommerzeit",
		days: 33,
		intercalary: !1
	},
	{
		name: "Sonnstill",
		days: 1,
		intercalary: !0
	},
	{
		name: "Vorgeheim",
		days: 33,
		intercalary: !1
	},
	{
		name: "Geheimnistag",
		days: 1,
		intercalary: !0
	},
	{
		name: "Nachgeheim",
		days: 32,
		intercalary: !1
	},
	{
		name: "Erntezeit",
		days: 33,
		intercalary: !1
	},
	{
		name: "Mittherbst",
		days: 1,
		intercalary: !0
	},
	{
		name: "Brauzeit",
		days: 33,
		intercalary: !1
	},
	{
		name: "Kaldezeit",
		days: 33,
		intercalary: !1
	},
	{
		name: "Ulriczeit",
		days: 33,
		intercalary: !1
	},
	{
		name: "Mondstille",
		days: 1,
		intercalary: !0
	},
	{
		name: "Vorhexen",
		days: 33,
		intercalary: !1
	}
];
function l(e) {
	let t = c.find((t) => t.name === e);
	if (!t) throw RangeError("Choose an Imperial month or festival.");
	return t;
}
// src/module/functions/imperial-calendar/calculate.ts
function u(e, t) {
	let n = f(t) - f(e), r = Math.abs(n), i = Math.floor(r / o);
	return {
		totalSeconds: n,
		wholeDays: i,
		years: Math.floor(i / 400),
		days: i % 400,
		hours: Math.floor(r % o / 3600),
		minutes: Math.floor(r % 3600 / 60),
		seconds: r % 60
	};
}
function d(e) {
	let t = l(e.period);
	p(e.year, 1, s, "Year (I.C.)"), p(e.day, 1, t.days, `Day in ${t.name}`), p(e.hour ?? 0, 0, 23, "Hour"), p(e.minute ?? 0, 0, 59, "Minute"), p(e.second ?? 0, 0, 59, "Second");
}
function f(e) {
	d(e);
	let t = (e.year - 1) * 400 + e.day - 1;
	for (let n of c) {
		if (n.name === e.period) break;
		t += n.days;
	}
	return t * o + (e.hour ?? 0) * 3600 + (e.minute ?? 0) * 60 + (e.second ?? 0);
}
function p(e, t, n, r) {
	if (!Number.isInteger(e) || e < t || e > n) throw RangeError(`${r} must be a whole number from ${t} to ${n}.`);
}
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function m(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var h = {}, g = [], _ = () => {}, v = () => !1, y = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), b = (e) => e.startsWith("onUpdate:"), x = Object.assign, ee = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, te = Object.prototype.hasOwnProperty, S = (e, t) => te.call(e, t), C = Array.isArray, ne = (e) => ce(e) === "[object Map]", re = (e) => ce(e) === "[object Set]", ie = (e) => ce(e) === "[object Date]", w = (e) => typeof e == "function", T = (e) => typeof e == "string", ae = (e) => typeof e == "symbol", E = (e) => typeof e == "object" && !!e, oe = (e) => (E(e) || w(e)) && w(e.then) && w(e.catch), se = Object.prototype.toString, ce = (e) => se.call(e), le = (e) => ce(e).slice(8, -1), ue = (e) => ce(e) === "[object Object]", de = (e) => T(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fe = /* @__PURE__ */ m(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), pe = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, me = /-\w/g, D = /* @__PURE__ */ pe((e) => e.replace(me, (e) => e.slice(1).toUpperCase())), he = /\B([A-Z])/g, ge = /* @__PURE__ */ pe((e) => e.replace(he, "-$1").toLowerCase()), _e = /* @__PURE__ */ pe((e) => e.charAt(0).toUpperCase() + e.slice(1)), ve = /* @__PURE__ */ pe((e) => e ? `on${_e(e)}` : ""), O = (e, t) => !Object.is(e, t), ye = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, be = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, xe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, Se, Ce = () => Se ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function we(e) {
	if (C(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = T(r) ? Oe(r) : we(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (T(e) || E(e)) return e;
}
var Te = /;(?![^(]*\))/g, Ee = /:([^]+)/, De = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Oe(e) {
	let t = {};
	return e.replace(De, (e) => e.startsWith("/*") ? "" : e).split(Te).forEach((e) => {
		if (e) {
			let n = e.split(Ee);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ke(e) {
	let t = "";
	if (T(e)) t = e;
	else if (C(e)) for (let n = 0; n < e.length; n++) {
		let r = ke(e[n]);
		r && (t += r + " ");
	}
	else if (E(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Ae = /* @__PURE__ */ m("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function je(e) {
	return !!e || e === "";
}
function Me(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Ie(e[i], t[i], n);
	return r;
}
function Ne(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Ie(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Pe(e, t, n) {
	let r = ne(e), i = ne(t);
	if (r || i || (r = re(e), i = re(t), r || i)) return r && i ? Ne(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Ie(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Fe(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Ie(e, t, n) {
	if (e === t) return !0;
	let r = ie(e), i = ie(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = ae(e), i = ae(t), r || i ? e === t : (r = C(e), i = C(t), r || i ? r && i ? Fe(e, t, n, Me) : !1 : (r = E(e), i = E(t), r || i ? !r || !i ? !1 : Fe(e, t, n, Pe) : String(e) === String(t))));
}
function Le(e, t) {
	return e.findIndex((e) => Ie(e, t));
}
var Re = (e) => !!(e && e.__v_isRef === !0), k = (e) => T(e) ? e : e == null ? "" : C(e) || E(e) && (e.toString === se || !w(e.toString)) ? Re(e) ? k(e.value) : JSON.stringify(e, ze, 2) : String(e), ze = (e, t) => Re(t) ? ze(e, t.value) : ne(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Be(t, r) + " =>"] = n, e), {}) } : re(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Be(e)) } : ae(t) ? Be(t) : E(t) && !C(t) && !ue(t) ? String(t) : t, Be = (e, t = "") => ae(e) ? `Symbol(${e.description ?? t})` : e, A, Ve = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && A && (A.active ? (this.parent = A, this.index = (A.scopes || (A.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = A, A = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (A === this) A = this.prevScope;
			else {
				let e = A;
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
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
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
function He(e) {
	return new Ve(e);
}
function Ue() {
	return A;
}
function We(e, t = !1) {
	A && (A.active ? A.cleanups.push(e) : e());
}
var j, Ge = /* @__PURE__ */ new WeakSet(), Ke = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ge.has(this) && (Ge.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, lt(this), $e(this);
		let e = j, t = at;
		j = this, at = !0;
		try {
			return this.fn();
		} finally {
			et(this), j = e, at = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) rt(e);
			this.deps = this.depsTail = void 0, lt(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ge.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		tt(this) && this.run();
	}
	get dirty() {
		return tt(this);
	}
}, qe = 0, Je, Ye;
function Xe(e, t = !1) {
	e.flags |= 8, t ? (e.next = Ye, Ye = e) : (e.next = Je, Je = e);
}
function Ze() {
	qe++;
}
function Qe() {
	if (--qe > 0) return;
	if (Ye) {
		let e = Ye;
		for (Ye = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Je;) {
		let t = Je;
		for (Je = void 0; t;) {
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
function $e(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function et(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), rt(r), it(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function tt(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (nt(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function nt(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ut) || (e.globalVersion = ut, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !tt(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = at;
	j = e, at = !0;
	try {
		$e(e);
		let n = e.fn(e._value);
		(t.version === 0 || O(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, at = r, et(e), e.flags &= -3;
	}
}
function rt(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) rt(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function it(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var at = !0, ot = [];
function st() {
	ot.push(at), at = !1;
}
function ct() {
	let e = ot.pop();
	at = e === void 0 || e;
}
function lt(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
		}
	}
}
var ut = 0, dt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, ft = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !at || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new dt(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, pt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, ut++, this.notify(e);
	}
	notify(e) {
		Ze();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Qe();
		}
	}
};
function pt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) pt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var mt = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ Symbol(""), gt = /* @__PURE__ */ Symbol(""), _t = /* @__PURE__ */ Symbol("");
function vt(e, t, n) {
	if (at && j) {
		let t = mt.get(e);
		t || mt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new ft()), r.map = t, r.key = n), r.track();
	}
}
function yt(e, t, n, r, i, a) {
	let o = mt.get(e);
	if (!o) {
		ut++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ze(), t === "clear") o.forEach(s);
	else {
		let i = C(e), a = i && de(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === _t || !ae(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(_t)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ht)), ne(e) && s(o.get(gt)));
				break;
			case "delete":
				i || (s(o.get(ht)), ne(e) && s(o.get(gt)));
				break;
			case "set": ne(e) && s(o.get(ht));
		}
	}
	Qe();
}
function bt(e, t) {
	let n = mt.get(e);
	return n && n.get(t);
}
function xt(e) {
	let t = /* @__PURE__ */ M(e);
	return t === e || (vt(t, "iterate", _t), /* @__PURE__ */ cn(e)) ? t : /* @__PURE__ */ sn(e) ? /* @__PURE__ */ on(e) ? t.map((e) => fn(dn(e))) : t.map(fn) : t.map(dn);
}
function St(e) {
	return vt(e = /* @__PURE__ */ M(e), "iterate", _t), e;
}
function Ct(e, t) {
	return /* @__PURE__ */ sn(e) ? fn(/* @__PURE__ */ on(e) ? dn(t) : t) : dn(t);
}
var wt = {
	__proto__: null,
	[Symbol.iterator]() {
		return Tt(this, Symbol.iterator, (e) => Ct(this, e));
	},
	concat(...e) {
		return xt(this).concat(...e.map((e) => C(e) ? xt(e) : e));
	},
	entries() {
		return Tt(this, "entries", (e) => (e[1] = Ct(this, e[1]), e));
	},
	every(e, t) {
		return Ot(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return Ot(this, "filter", e, t, (e) => e.map((e) => Ct(this, e)), arguments);
	},
	find(e, t) {
		return Ot(this, "find", e, t, (e) => Ct(this, e), arguments);
	},
	findIndex(e, t) {
		return Ot(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return Ot(this, "findLast", e, t, (e) => Ct(this, e), arguments);
	},
	findLastIndex(e, t) {
		return Ot(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return Ot(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return At(this, "includes", e);
	},
	indexOf(...e) {
		return At(this, "indexOf", e);
	},
	join(e) {
		return xt(this).join(e);
	},
	lastIndexOf(...e) {
		return At(this, "lastIndexOf", e);
	},
	map(e, t) {
		return Ot(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return jt(this, "pop");
	},
	push(...e) {
		return jt(this, "push", e);
	},
	reduce(e, ...t) {
		return kt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return kt(this, "reduceRight", e, t);
	},
	shift() {
		return jt(this, "shift");
	},
	some(e, t) {
		return Ot(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return jt(this, "splice", e);
	},
	toReversed() {
		return xt(this).toReversed();
	},
	toSorted(e) {
		return xt(this).toSorted(e);
	},
	toSpliced(...e) {
		return xt(this).toSpliced(...e);
	},
	unshift(...e) {
		return jt(this, "unshift", e);
	},
	values() {
		return Tt(this, "values", (e) => Ct(this, e));
	}
};
function Tt(e, t, n) {
	let r = St(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ cn(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => Et(a.next(), n), i !== Dt[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => Et(a._next(), n);
	}
	return a;
}
function Et(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var Dt = Array.prototype;
function Ot(e, t, n, r, i, a) {
	let o = St(e), s = o !== e && !/* @__PURE__ */ cn(e), c = o[t];
	if (c !== Dt[t]) {
		let t = c.apply(e, a);
		return s ? dn(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, Ct(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function kt(e, t, n, r) {
	let i = St(e), a = i !== e && !/* @__PURE__ */ cn(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = Ct(e, t)), n.call(this, t, Ct(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? Ct(e, c) : c;
}
function At(e, t, n) {
	let r = /* @__PURE__ */ M(e);
	vt(r, "iterate", _t);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ ln(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), r[t](...n)) : i;
}
function jt(e, t, n = []) {
	st(), Ze();
	let r = (/* @__PURE__ */ M(e))[t].apply(e, n);
	return Qe(), ct(), r;
}
var Mt = /* @__PURE__ */ m("__proto__,__v_isRef,__isVue"), Nt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ae));
function Pt(e) {
	ae(e) || (e = String(e));
	let t = /* @__PURE__ */ M(this);
	return vt(t, "has", e), t.hasOwnProperty(e);
}
var Ft = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? $t : Qt : i ? Zt : Xt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = C(e);
		if (!r) {
			let e;
			if (a && (e = wt[t])) return e;
			if (t === "hasOwnProperty") return Pt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ N(e) ? e : n);
		if ((ae(t) ? Nt.has(t) : Mt(t)) || (r || vt(e, "get", t), i)) return o;
		if (/* @__PURE__ */ N(o)) {
			let e = a && de(t) ? o : o.value;
			return r && E(e) ? /* @__PURE__ */ rn(e) : e;
		}
		return E(o) ? r ? /* @__PURE__ */ rn(o) : /* @__PURE__ */ tn(o) : o;
	}
}, It = class extends Ft {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = C(e) && de(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ sn(i);
			if (!/* @__PURE__ */ cn(n) && !/* @__PURE__ */ sn(n) && (i = /* @__PURE__ */ M(i), n = /* @__PURE__ */ M(n)), !a && /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : S(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ N(e) ? e : r);
		return e === /* @__PURE__ */ M(r) && s && (o ? O(n, i) && yt(e, "set", t, n, i) : yt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = S(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && yt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return ae(t) && Nt.has(t) || vt(e, "has", t), n;
	}
	ownKeys(e) {
		return vt(e, "iterate", C(e) ? "length" : ht), Reflect.ownKeys(e);
	}
}, Lt = class extends Ft {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Rt = /* @__PURE__ */ new It(), zt = /* @__PURE__ */ new Lt(), Bt = /* @__PURE__ */ new It(!0), Vt = (e) => e, Ht = (e) => Reflect.getPrototypeOf(e);
function Ut(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ M(i), o = ne(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Vt : t ? fn : dn;
		return !t && vt(a, "iterate", c ? gt : ht), x(Object.create(l), { next() {
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
function Wt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Gt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ M(r), a = /* @__PURE__ */ M(n);
			e || (O(n, a) && vt(i, "get", n), vt(i, "get", a));
			let { has: o } = Ht(i), s = t ? Vt : e ? fn : dn;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && vt(/* @__PURE__ */ M(t), "iterate", ht), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ M(n), i = /* @__PURE__ */ M(t);
			return e || (O(t, i) && vt(r, "has", t), vt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ M(a), s = t ? Vt : e ? fn : dn;
			return !e && vt(o, "iterate", ht), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return x(n, e ? {
		add: Wt("add"),
		set: Wt("set"),
		delete: Wt("delete"),
		clear: Wt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ M(this), r = Ht(n), i = /* @__PURE__ */ M(e), a = !t && !/* @__PURE__ */ cn(e) && !/* @__PURE__ */ sn(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), yt(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ cn(n) || /* @__PURE__ */ sn(n) || (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = Ht(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && yt(r, "set", e, n, s) : yt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ M(this), { has: n, get: r } = Ht(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ M(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && yt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ M(this), t = e.size !== 0, n = e.clear();
			return t && yt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ut(r, e, t);
	}), n;
}
function Kt(e, t) {
	let n = Gt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(S(n, i) && i in r ? n : r, i, a);
}
var qt = { get: /* @__PURE__ */ Kt(!1, !1) }, Jt = { get: /* @__PURE__ */ Kt(!1, !0) }, Yt = { get: /* @__PURE__ */ Kt(!0, !1) }, Xt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap();
function en(e) {
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
function tn(e) {
	return /* @__PURE__ */ sn(e) ? e : an(e, !1, Rt, qt, Xt);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return an(e, !1, Bt, Jt, Zt);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
	return an(e, !0, zt, Yt, Qt);
}
function an(e, t, n, r, i) {
	if (!E(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = en(le(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	return /* @__PURE__ */ sn(e) ? /* @__PURE__ */ on(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ M(t) : e;
}
function un(e) {
	return !S(e, "__v_skip") && Object.isExtensible(e) && be(e, "__v_skip", !0), e;
}
var dn = (e) => E(e) ? /* @__PURE__ */ tn(e) : e, fn = (e) => E(e) ? /* @__PURE__ */ rn(e) : e;
// @__NO_SIDE_EFFECTS__
function N(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return mn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
	return mn(e, !0);
}
function mn(e, t) {
	return /* @__PURE__ */ N(e) ? e : new hn(e, t);
}
var hn = class {
	constructor(e, t) {
		this.dep = new ft(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ M(e), this._value = t ? e : dn(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ cn(e) || /* @__PURE__ */ sn(e);
		e = n ? e : /* @__PURE__ */ M(e), O(e, t) && (this._rawValue = e, this._value = n ? e : dn(e), this.dep.trigger());
	}
};
function F(e) {
	return /* @__PURE__ */ N(e) ? e.value : e;
}
var gn = {
	get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function _n(e) {
	return /* @__PURE__ */ on(e) ? e : new Proxy(e, gn);
}
var vn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new ft(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function yn(e) {
	return new vn(e);
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
	let t = C(e) ? Array(e.length) : {};
	for (let n in e) t[n] = wn(e, n);
	return t;
}
var xn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = ae(t) ? t : String(t), this._raw = /* @__PURE__ */ M(e);
		let r = !0, i = e;
		if (!C(e) || ae(this._key) || !de(this._key)) do
			r = !/* @__PURE__ */ ln(i) || /* @__PURE__ */ cn(i);
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
		return bt(this._raw, this._key);
	}
}, Sn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function Cn(e, t, n) {
	return /* @__PURE__ */ N(e) ? e : w(e) ? new Sn(e) : E(e) && arguments.length > 1 ? wn(e, t, n) : /* @__PURE__ */ P(e);
}
function wn(e, t, n) {
	return new xn(e, t, n);
}
var Tn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new ft(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ut - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Xe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return nt(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function En(e, t, n = !1) {
	let r, i;
	return w(e) ? r = e : (r = e.get, i = e.set), new Tn(r, i, n);
}
var Dn = {}, On = /* @__PURE__ */ new WeakMap(), kn = void 0;
function An(e, t = !1, n = kn) {
	if (n) {
		let t = On.get(n);
		t || On.set(n, t = []), t.push(e);
	}
}
function jn(e, t, n = h) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => i ? e : /* @__PURE__ */ cn(e) || i === !1 || i === 0 ? Mn(e, 1) : Mn(e), u, d, f, p, m = !1, g = !1;
	if (/* @__PURE__ */ N(e) ? (d = () => e.value, m = /* @__PURE__ */ cn(e)) : /* @__PURE__ */ on(e) ? (d = () => l(e), m = !0) : C(e) ? (g = !0, m = e.some((e) => /* @__PURE__ */ on(e) || /* @__PURE__ */ cn(e)), d = () => e.map((e) => {
		if (/* @__PURE__ */ N(e)) return e.value;
		if (/* @__PURE__ */ on(e)) return l(e);
		if (w(e)) return c ? c(e, 2) : e();
	})) : d = w(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (f) {
			st();
			try {
				f();
			} finally {
				ct();
			}
		}
		let t = kn;
		kn = u;
		try {
			return c ? c(e, 3, [p]) : e(p);
		} finally {
			kn = t;
		}
	} : _, t && i) {
		let e = d, t = i === !0 ? Infinity : i;
		d = () => Mn(e(), t);
	}
	let v = Ue(), y = () => {
		u.stop(), v && v.active && ee(v.effects, u);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			try {
				return e(...t);
			} finally {
				y();
			}
		};
	}
	let b = g ? Array(e.length).fill(Dn) : Dn, x = (e) => {
		if (u.flags & 1 && (u.dirty || e)) {
			if (t) {
				let n = u.run();
				if (e || i || m || (g ? n.some((e, t) => O(e, b[t])) : O(n, b))) {
					let e = kn;
					st();
					try {
						f && f(), kn = u;
						let e = [
							n,
							b === Dn ? void 0 : g && b[0] === Dn ? [] : b,
							p
						];
						b = n, c ? c(t, 3, e) : t(...e);
					} finally {
						kn = e, ct();
					}
				}
			} else u.run();
		}
	};
	return s && s(x), u = new Ke(d), u.scheduler = o ? () => o(x, !1) : x, p = (e) => An(e, !1, u), f = u.onStop = () => {
		let e = On.get(u);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			On.delete(u);
		}
	}, t ? r ? x(!0) : b = u.run() : o ? o(x.bind(null, !0), !0) : u.run(), y.pause = u.pause.bind(u), y.resume = u.resume.bind(u), y.stop = y, y;
}
function Mn(e, t = Infinity, n) {
	if (t <= 0 || !E(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ N(e)) Mn(e.value, t, n);
	else if (C(e)) for (let r = 0; r < e.length; r++) Mn(e[r], t, n);
	else if (re(e) || ne(e)) e.forEach((e) => {
		Mn(e, t, n);
	});
	else if (ue(e)) {
		for (let r in e) Mn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Mn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Nn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Fn(e, t, n);
	}
}
function Pn(e, t, n, r) {
	if (w(e)) {
		let i = Nn(e, t, n, r);
		return i && oe(i) && i.catch((e) => {
			Fn(e, t, n, void 0, !0);
		}), i;
	}
	if (C(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Pn(e[a], t, n, r));
		return i;
	}
}
function Fn(e, t, n, r = !0, i = !1) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || h;
	if (t) {
		let r = t.parent, a = t.proxy, s = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t && !r.isUnmounted && (!i || r.scope.active)) {
				for (let n = 0; n < t.length; n++) if (t[n](e, a, s) === !1) return;
			}
			r = r.parent;
		}
		if (o) {
			st(), Nn(o, null, 10, [
				e,
				a,
				s
			]), ct();
			return;
		}
	}
	In(e, n, a, r, s);
}
function In(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var Ln = [], Rn = -1, zn = [], Bn = null, Vn = 0, Hn = /* @__PURE__ */ Promise.resolve(), Un = null;
function Wn(e) {
	let t = Un || Hn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gn(e) {
	let t = Rn + 1, n = Ln.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Ln[r], a = $n(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Kn(e) {
	if (!(e.flags & 1)) {
		let t = $n(e), n = Ln[Ln.length - 1];
		!n || !(e.flags & 2) && t >= $n(n) ? Ln.push(e) : Ln.splice(Gn(t), 0, e), e.flags |= 1, qn();
	}
}
function qn() {
	Un ||= Hn.then(er);
}
function Jn(e) {
	if (!C(e)) Bn && e.id === -1 ? Bn.splice(Vn + 1, 0, e) : e.flags & 1 || (zn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) zn.push(e[t]);
	qn();
}
function Yn(e, t, n, r = Rn + 1) {
	for (; r < Ln.length; r++) {
		let n = Ln[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			Ln.splice(r, 1), r = e ? r - 1 : Rn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Xn(e, t, n = 0) {
	if (zn.length) {
		let e = zn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < zn.length; i++) {
				let a = zn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? zn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => $n(e) - $n(t));
		if (zn.length = r, Bn) {
			for (let e = 0; e < i.length; e++) Bn.push(i[e]);
			return;
		}
		for (Bn = i, Vn = 0; Vn < Bn.length; Vn++) {
			let e = Bn[Vn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Bn = null, Vn = 0;
	}
}
var Zn = !1;
function Qn(e, t) {
	if (Zn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(zn);
	e(), Zn = !0;
	try {
		Yn(void 0, t), Xn(void 0, n, t);
	} finally {
		Zn = !1;
	}
}
var $n = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function er(e) {
	try {
		for (Rn = 0; Rn < Ln.length; Rn++) {
			let e = Ln[Rn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Nn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Rn < Ln.length; Rn++) {
			let e = Ln[Rn];
			e && (e.flags &= -2);
		}
		Rn = -1, Ln.length = 0, Xn(e), Un = null, (Ln.length || zn.length) && er(e);
	}
}
var tr = null, nr = null;
function rr(e) {
	let t = tr;
	return tr = e, nr = e && e.type.__scopeId || null, t;
}
function ir(e, t = tr, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && xa(-1);
		let i = rr(t), a = _a.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = _a.length; e > a; e--) ya();
			rr(i), r._d && xa(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function I(e, t) {
	if (tr === null) return e;
	let n = no(tr), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = h] = t[e];
		i && (w(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && Mn(a), r.push({
			dir: i,
			instance: n,
			value: a,
			oldValue: void 0,
			arg: o,
			modifiers: s
		}));
	}
	return e;
}
function ar(e, t, n, r) {
	let i = e;
	if (r === "beforeMount") e._mount = e;
	else if (r === "beforeUpdate") {
		let n = t && t._mount;
		n && (n._latest = e, e._mount = n);
	} else if (r === "mounted") {
		let t = e._latest;
		e._mount = e._latest = void 0, t && (i = t, t._mount = void 0);
	}
	let a = i.dirs, o = t && t.dirs;
	for (let s = 0; s < a.length; s++) {
		let c = a[s];
		o ? c.oldValue = o[s].value : r === "mounted" && c.oldValue !== void 0 && (c = x({}, c, { oldValue: void 0 }));
		let l = c.dir[r];
		l && (st(), Pn(l, n, 8, [
			e.el,
			c,
			i,
			t
		]), ct());
	}
}
function or(e, t) {
	if (Va) {
		let n = Va.provides, r = Va.parent && Va.parent.provides;
		r === n && (n = Va.provides = Object.create(r)), n[e] = t;
	}
}
function sr(e, t, n = !1) {
	let r = Ha();
	if (r || xi) {
		let i = xi ? xi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && w(t) ? t.call(r && r.proxy) : t;
	}
}
function cr() {
	return !!(Ha() || xi);
}
var lr = /* @__PURE__ */ Symbol.for("v-scx"), ur = () => sr(lr);
function dr(e, t) {
	return pr(e, null, { flush: "sync" });
}
function fr(e, t, n) {
	return pr(e, t, n);
}
function pr(e, t, n = h) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = x({}, n), c = t && r || !t && a !== "post", l;
	if (Ja) {
		if (a === "sync") {
			let e = ur();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = _, e.resume = _, e.pause = _, e;
		}
	}
	let u = Va;
	s.call = (e, t, n) => Pn(e, u, t, n);
	let d = !1;
	a === "post" ? s.scheduler = (e) => {
		e.i = u, ea(e, u && u.suspense);
	} : a !== "sync" && (d = !0, s.scheduler = (e, t) => {
		t ? e() : Kn(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let f = jn(e, t, s);
	return Ja && (l ? l.push(f) : c && f()), f;
}
function mr(e, t, n) {
	let r = this.proxy, i = T(e) ? e.includes(".") ? hr(r, e) : () => r[e] : e.bind(r, r), a;
	w(t) ? a = t : (a = t.handler, n = t);
	let o = Ga(this), s = pr(i, a.bind(r), n);
	return o(), s;
}
function hr(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var gr = /* @__PURE__ */ Symbol("_vte"), _r = (e) => e.__isTeleport, vr = /* @__PURE__ */ Symbol("_leaveCb");
function yr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== ha) {
			t = n;
			break;
		}
	}
	return t;
}
function br(e) {
	if (!Ar(e)) return _r(e.type) && e.children ? yr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && w(n.default)) return n.default();
	}
}
function xr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		xr(_r(n.type) && br(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && xr(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === z && C(e.children)) {
		let n = ki(e.children, !1);
		n && xr(n, t);
	}
}
function Sr(e) {
	if (e.component) return Sr(e.component.subTree);
	if (e.type === z) {
		let t = C(e.children) && ki(e.children, !1);
		return t ? Sr(t) : void 0;
	}
	if (e.type !== ha) return e;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
	return w(e) ? /* @__PURE__ */ x({ name: e.name }, t, { setup: e }) : e;
}
function Cr() {
	let e = Ha();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function wr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Tr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Er = /* @__PURE__ */ new WeakMap();
function Dr(e, t, n, r, i = !1) {
	if (C(e)) {
		e.forEach((e, a) => Dr(e, t && (C(t) ? t[a] : t), n, r, i));
		return;
	}
	if (kr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Dr(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? no(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === h ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ M(d), p = d === h ? v : (e) => !Tr(u, e) && S(f, e), m = (e, t) => !(t && Tr(u, t));
	if (l != null && l !== c) {
		if (Or(t), T(l)) u[l] = null, p(l) && (d[l] = null);
		else if (/* @__PURE__ */ N(l)) {
			let e = t;
			m(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (w(c)) Nn(c, s, 12, [o, u]);
	else {
		let t = T(c), r = /* @__PURE__ */ N(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? p(c) ? d[c] : u[c] : m(c) || !e.k ? c.value : u[e.k];
					if (i) C(n) && ee(n, a);
					else if (C(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], p(c) && (d[c] = u[c]);
					else {
						let t = [a];
						m(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, p(c) && (d[c] = o)) : r && (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), Er.delete(e);
				};
				t.id = -1, Er.set(e, t), ea(t, n);
			} else Or(e), s();
		}
	}
}
function Or(e) {
	let t = Er.get(e);
	t && (t.flags |= 8, Er.delete(e));
}
Ce().requestIdleCallback, Ce().cancelIdleCallback;
var kr = (e) => !!e.type.__asyncLoader, Ar = (e) => e.type.__isKeepAlive;
function jr(e, t) {
	Nr(e, "a", t);
}
function Mr(e, t) {
	Nr(e, "da", t);
}
function Nr(e, t, n = Va) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Fr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Ar(e.parent.vnode) && Pr(r, t, n, e), e = e.parent;
	}
}
function Pr(e, t, n, r) {
	let i = Fr(t, e, r, !0), a = Fr("um", () => ee(r[t], i), n);
	a.flags = 16;
}
function Fr(e, t, n = Va, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			st();
			let i = Ga(n), a = Pn(t, n, e, r);
			return i(), ct(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Ir = (e) => (t, n = Va) => {
	Ja && e !== "sp" || Fr(e, (...e) => t(...e), n);
}, Lr = Ir("bm"), Rr = Ir("m"), zr = Ir("bu"), Br = Ir("u"), Vr = Ir("bum"), Hr = Ir("um"), Ur = Ir("sp"), Wr = Ir("rtg"), Gr = Ir("rtc");
function Kr(e, t = Va) {
	Fr("ec", e, t);
}
var qr = /* @__PURE__ */ Symbol.for("v-ndc");
function R(e, t, n, r) {
	let i, a = n && n[r], o = C(e);
	if (o || T(e)) {
		let n = o && /* @__PURE__ */ on(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ cn(e), s = /* @__PURE__ */ sn(e), e = St(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? fn(dn(e[n])) : dn(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (!Number.isInteger(e) || e < 0) i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (E(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
function Jr(e, t, n, r, i, a) {
	if (n ??= {}, tr.ce || tr.parent && kr(tr.parent) && tr.parent.ce) {
		let e = a != null && n.key == null ? x({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), B(), Ca(z, null, [U("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	o && o._c && (o._d = !1);
	let s = _a.length;
	B();
	let c;
	try {
		let i = o && Yr(o(n)), s = n.key || a || i && i.key;
		c = Ca(z, { key: (s && !ae(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = _a.length; e > s; e--) ya();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function Yr(e) {
	return e.some((e) => !wa(e) || !(e.type === ha || e.type === z && !Yr(e.children))) ? e : null;
}
var Xr = (e) => e ? qa(e) ? no(e) : Xr(e.parent) : null, Zr = /* @__PURE__ */ x(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Xr(e.parent),
	$root: (e) => Xr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => si(e),
	$forceUpdate: (e) => e.f ||= () => {
		Kn(e.update);
	},
	$nextTick: (e) => e.n ||= Wn.bind(e.proxy),
	$watch: (e) => mr.bind(e)
}), Qr = (e, t) => e !== h && !e.__isScriptSetup && S(e, t), $r = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: o, type: s, appContext: c } = e;
		if (t[0] !== "$") {
			let e = o[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (Qr(r, t)) return o[t] = 1, r[t];
			else if (i !== h && S(i, t)) return o[t] = 2, i[t];
			else if (S(a, t)) return o[t] = 3, a[t];
			else if (n !== h && S(n, t)) return o[t] = 4, n[t];
			else ni && (o[t] = 0);
		}
		let l = Zr[t], u, d;
		if (l) return t === "$attrs" && vt(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== h && S(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, S(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Qr(i, t) ? (i[t] = n, !0) : r !== h && S(r, t) ? (r[t] = n, !0) : S(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || e !== h && s[0] !== "$" && S(e, s) || Qr(t, s) || S(a, s) || S(r, s) || S(Zr, s) || S(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? S(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function ei(e) {
	return C(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function ti(e, t) {
	return !e || !t ? e || t : C(e) && C(t) ? e.concat(t) : x({}, ei(e), ei(t));
}
var ni = !0;
function ri(e) {
	let t = si(e), n = e.proxy, r = e.ctx;
	ni = !1, t.beforeCreate && ai(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: c, inject: l, created: u, beforeMount: d, mounted: f, beforeUpdate: p, updated: m, activated: h, deactivated: g, beforeDestroy: v, beforeUnmount: y, destroyed: b, unmounted: x, render: ee, renderTracked: te, renderTriggered: S, errorCaptured: ne, serverPrefetch: re, expose: ie, inheritAttrs: T, components: ae, directives: oe, filters: se } = t;
	if (l && ii(l, r, null), o) for (let e in o) {
		let t = o[e];
		w(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		E(t) && (e.data = /* @__PURE__ */ tn(t));
	}
	if (ni = !0, a) for (let e in a) {
		let t = a[e], i = K({
			get: w(t) ? t.bind(n, n) : w(t.get) ? t.get.bind(n, n) : _,
			set: !w(t) && w(t.set) ? t.set.bind(n) : _
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (s) for (let e in s) oi(s[e], r, n, e);
	if (c) {
		let e = w(c) ? c.call(n) : c;
		Reflect.ownKeys(e).forEach((t) => {
			or(t, e[t]);
		});
	}
	u && ai(u, e, "c");
	function ce(e, t) {
		C(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (ce(Lr, d), ce(Rr, f), ce(zr, p), ce(Br, m), ce(jr, h), ce(Mr, g), ce(Kr, ne), ce(Gr, te), ce(Wr, S), ce(Vr, y), ce(Hr, x), ce(Ur, re), C(ie)) {
		if (ie.length) {
			let t = e.exposed ||= {};
			ie.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	ee && e.render === _ && (e.render = ee), T != null && (e.inheritAttrs = T), ae && (e.components = ae), oe && (e.directives = oe), re && wr(e);
}
function ii(e, t, n = _) {
	C(e) && (e = pi(e));
	for (let n in e) {
		let r = e[n], i;
		i = E(r) ? "default" in r ? sr(r.from || n, r.default, !0) : sr(r.from || n) : sr(r), /* @__PURE__ */ N(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function ai(e, t, n) {
	Pn(C(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function oi(e, t, n, r) {
	let i = r.includes(".") ? hr(n, r) : () => n[r];
	if (T(e)) {
		let n = t[e];
		w(n) && fr(i, n);
	} else if (w(e)) fr(i, e.bind(n));
	else if (E(e)) {
		if (C(e)) e.forEach((e) => oi(e, t, n, r));
		else {
			let r = w(e.handler) ? e.handler.bind(n) : t[e.handler];
			w(r) && fr(i, r, e);
		}
	}
}
function si(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ci(c, e, o, !0)), ci(c, t, o)), E(t) && a.set(t, c), c;
}
function ci(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ci(e, a, n, !0), i && i.forEach((t) => ci(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = li[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var li = {
	data: di,
	props: gi,
	emits: gi,
	methods: hi,
	computed: hi,
	beforeCreate: mi,
	created: mi,
	beforeMount: mi,
	mounted: mi,
	beforeUpdate: mi,
	updated: mi,
	beforeDestroy: mi,
	beforeUnmount: mi,
	destroyed: mi,
	unmounted: mi,
	activated: mi,
	deactivated: mi,
	errorCaptured: mi,
	serverPrefetch: mi,
	components: hi,
	directives: hi,
	watch: _i,
	provide: di,
	inject: fi
};
function di(e, t) {
	return t ? e ? function() {
		return x(w(e) ? e.call(this, this) : e, w(t) ? t.call(this, this) : t);
	} : t : e;
}
function fi(e, t) {
	return hi(pi(e), pi(t));
}
function pi(e) {
	if (C(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function mi(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function hi(e, t) {
	return e ? x(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gi(e, t) {
	return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : x(/* @__PURE__ */ Object.create(null), ei(e), ei(t ?? {})) : t;
}
function _i(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = x(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = mi(e[r], t[r]);
	return n;
}
function vi() {
	return {
		app: null,
		config: {
			isNativeTag: v,
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
var yi = 0;
function bi(e, t) {
	return function(n, r = null) {
		w(n) || (n = x({}, n)), r != null && !E(r) && (r = null);
		let i = vi(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: yi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: io,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && w(e.install) ? (a.add(e), e.install(c, ...t)) : w(e) && (a.add(e), e(c, ...t))), c;
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
					let u = c._ceVNode || U(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, no(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Pn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = xi;
				xi = c;
				try {
					return e();
				} finally {
					xi = t;
				}
			}
		};
		return c;
	};
}
var xi = null;
function Si(e, t, n = h) {
	let r = Ha(), i = D(t), a = ge(t), o = Ci(e, i), s = yn((o, s) => {
		let c, l = h, u;
		return dr(() => {
			let t = e[i];
			O(c, t) && (c = t, s());
		}), {
			get() {
				return o(), n.get ? n.get(c) : c;
			},
			set(e) {
				let o = n.set ? n.set(e) : e;
				if (!O(o, c) && !(l !== h && O(e, l))) return;
				let d = r.vnode.props, f = !!(d && (t in d || i in d || a in d) && (`onUpdate:${t}` in d || `onUpdate:${i}` in d || `onUpdate:${a}` in d));
				f || (c = e, s()), r.emit(`update:${t}`, o), O(e, l) && (O(e, o) && !O(o, u) || f && l !== h && !O(o, c)) && s(), l = e, u = o;
			}
		};
	});
	return s[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? o || h : s,
				done: !1
			} : { done: !0 };
		} };
	}, s;
}
var Ci = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${D(t)}Modifiers`] || e[`${ge(t)}Modifiers`];
function wi(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || h, i = n, a = t.startsWith("update:"), o = a && Ci(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => T(e) ? e.trim() : e)), o.number && (i = i.map(xe)));
	let s, c = r[s = ve(t)] || r[s = ve(D(t))];
	!c && a && (c = r[s = ve(ge(t))]), c && Pn(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, Pn(l, e, 6, i);
	}
}
var Ti = /* @__PURE__ */ new WeakMap();
function Ei(e, t, n = !1) {
	let r = n ? Ti : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!w(e)) {
		let r = (e) => {
			let n = Ei(e, t, !0);
			n && (s = !0, x(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (E(e) && r.set(e, null), null) : (C(a) ? a.forEach((e) => o[e] = null) : x(o, a), E(e) && r.set(e, o), o);
}
function Di(e, t) {
	return !e || !y(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), S(e, t[0].toLowerCase() + t.slice(1)) || S(e, ge(t)) || S(e, t));
}
function Oi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, g = rr(e), _, v;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			_ = Ma(l.call(t, e, u, d, p, f, m)), v = s;
		} else {
			let e = t;
			_ = Ma(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), v = t.props ? s : Ai(s);
		}
	} catch (t) {
		_a.length = 0, Fn(t, e, 1), _ = U(ha);
	}
	let y = _;
	if (v && h !== !1) {
		let e = Object.keys(v), { shapeFlag: t } = y;
		e.length && t & 7 && (a && e.some(b) && (v = ji(v, a)), y = Aa(y, v, !1, !0));
	}
	return n.dirs && (y = Aa(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && xr(_r(y.type) && br(y) || y, n.transition), _ = y, rr(g), _;
}
function ki(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (wa(r)) {
			if (r.type !== ha || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Ai = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || y(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ji = (e, t) => {
	let n = {};
	for (let r in e) b(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Mi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Ni(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Pi(o, r, n) && !Di(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Ni(r, o, l) : !!o;
	return !1;
}
function Ni(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!S(e, a) || Pi(t, e, a) && !Di(n, a)) return !0;
	}
	return !1;
}
function Pi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && E(r) && E(i) ? !Ie(r, i) : r !== i;
}
function Fi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Ii = {}, Li = () => Object.create(Ii), Ri = (e) => Object.getPrototypeOf(e) === Ii;
function zi(e, t, n, r = !1) {
	let i = {}, a = Li();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Vi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ nn(i) : e.type.props ? i : a, e.attrs = a;
}
function Bi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Di(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (S(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = D(o);
						i[t] = Hi(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Vi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (S(t, a) || (r = ge(a)) !== a && S(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Hi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && S(t, e) || (delete a[e], l = !0);
	}
	l && yt(e.attrs, "set", "");
}
function Vi(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (fe(c)) continue;
		let l = t[c], u;
		i && S(i, u = D(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : Di(e.emitsOptions, c) || c in r && l === r[c] || (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ M(n), r = s || h;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Hi(i, t, s, r[s], e, !S(r, s));
		}
	}
	return o;
}
function Hi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = S(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && w(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ga(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ge(n)) && (r = !0));
	}
	return r;
}
var Ui = /* @__PURE__ */ new WeakMap();
function Wi(e, t, n = !1) {
	let r = n ? Ui : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [], c = !1;
	if (!w(e)) {
		let r = (e) => {
			c = !0;
			let [n, r] = Wi(e, t, !0);
			x(o, n), r && s.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !c) return E(e) && r.set(e, g), g;
	if (C(a)) for (let e = 0; e < a.length; e++) {
		let t = D(a[e]);
		Gi(t) && (o[t] = h);
	}
	else if (a) for (let e in a) {
		let t = D(e);
		if (Gi(t)) {
			let n = a[e], r = o[t] = C(n) || w(n) ? { type: n } : x({}, n), i = r.type, c = !1, l = !0;
			if (C(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = w(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				}
				n === "String" && (l = !1);
			}
			else c = w(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || S(r, "default")) && s.push(t);
		}
	}
	let l = [o, s];
	return E(e) && r.set(e, l), l;
}
function Gi(e) {
	return e[0] !== "$" && !fe(e);
}
var Ki = (e) => e === "_" || e === "_ctx" || e === "$stable", qi = (e) => C(e) ? e.map(Ma) : [Ma(e)], Ji = (e, t, n) => {
	if (t._n) return t;
	let r = ir((...e) => qi(t(...e)), n);
	return r._c = !1, r;
}, Yi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ki(n)) continue;
		let i = e[n];
		if (w(i)) t[n] = Ji(n, i, r);
		else if (i != null) {
			let e = qi(i);
			t[n] = () => e;
		}
	}
}, Xi = (e, t) => {
	let n = qi(t);
	e.slots.default = () => n;
}, Zi = (e, t, n) => {
	for (let r in t) (n || !Ki(r)) && (e[r] = t[r]);
}, Qi = (e, t, n) => {
	let r = e.slots = Li();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Zi(r, t, n), n && be(r, "_", e, !0)) : Yi(t, r);
	} else t && Xi(e, t);
}, $i = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = h;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : Zi(i, t, n) : (a = !t.$stable, Yi(t, i)), o = t;
	} else t && (Xi(e, t), o = { default: 1 });
	if (a) for (let e in i) !Ki(e) && o[e] == null && delete i[e];
}, ea = pa;
function ta(e) {
	return na(e);
}
function na(e, t) {
	let n = Ce();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p = _, insertStaticContent: m } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ta(e, t) && (r = O(e), D(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === g && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ma:
				y(e, t, n, r);
				break;
			case ha:
				b(e, t, n, r);
				break;
			case ga:
				e ?? x(t, n, r, o);
				break;
			case z:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? S(e, t, n, r, i, a, o, s, c) : d & 6 ? E(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, xe);
		}
		u != null && i ? Dr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Dr(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && l(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = m(e.children, t, n, r, e.el, e.anchor);
	}, ee = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = f(e), r(e, n, i), e = a;
		r(t, n, i);
	}, te = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, S = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) C(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ie(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, C = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && re(e.children, f, null, i, s, ra(e, c), l, d), _ && ar(e, null, i, "created"), ne(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !fe(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && Ia(p, i, e);
		}
		_ && ar(e, null, i, "beforeMount");
		let v = aa(s, g);
		v ? g.beforeEnter(f) : g && !g.persisted && (f[fa] = !0), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && ea(() => {
			try {
				p && Ia(p, i, e), v && g.enter(f), _ && ar(e, null, i, "mounted");
			} finally {}
		}, s);
	}, ne = (e, t, n, r, i) => {
		if (n && p(e, n), r) for (let t = 0; t < r.length; t++) p(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || da(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, re = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Na(e[l]) : Ma(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ie = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: d, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || h, m = t.props || h, g;
		if (n && ia(n, !1), (g = m.onVnodeBeforeUpdate) && Ia(g, n, t, e), f && ar(t, e, n, "beforeUpdate"), n && ia(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (l = 0, s = !1, d = null), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && u(c, ""), d ? w(e.dynamicChildren, d, c, n, r, ra(t, i), o) : s || ue(e, t, c, null, n, r, ra(t, i), o, !1), l > 0) {
			if (l & 16) T(c, p, m, n, i);
			else if (l & 2 && p.class !== m.class && a(c, "class", null, m.class, i), l & 4 && a(c, "style", p.style, m.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = p[r], s = m[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && u(c, t.children);
		} else !s && d == null && T(c, p, m, n, i);
		((g = m.onVnodeUpdated) || f) && ea(() => {
			g && Ia(g, n, t, e), f && ar(t, e, n, "updated");
		}, r);
	}, w = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || ua(c), f = u && (c.type === z || !Ta(c, l) || c.shapeFlag & 198) ? d(u) : n;
			v(c, l, f, null, r, i, a, o, !0);
		}
	}, T = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== h) for (let o in t) !fe(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (fe(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, ae = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), re(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (w(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && oa(e, t, !0)) : ue(e, t, n, f, a, o, c, l, u);
	}, E = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : oe(t, n, r, i, a, o, c) : se(e, t, c);
	}, oe = (e, t, n, r, i, a, o) => {
		let s = e.component = Ba(e, r, i);
		if (Ar(e) && (s.ctx.renderer = xe), Ya(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o, a), !e.el) {
				let r = s.subTree = U(ha);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, se = (e, t, n) => {
		let r = t.component = e.component;
		if (Mi(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, le(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = ca(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? ea(t, i) : l());
							};
							t.flags = 48, ea(t, i);
						});
						return;
					}
				}
				let u = t, f;
				ia(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && ye(n), (f = t.props && t.props.onVnodeBeforeUpdate) && Ia(f, s, t, c), ia(e, !0);
				let p = Oi(e), m = e.subTree;
				e.subTree = p, v(m, p, d(m.el || ua(m)), O(m), e, i, a), t.el = p.el, u === null && Fi(e, p.el), r && ea(r, i), (f = t.props && t.props.onVnodeUpdated) && ea(() => Ia(f, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = kr(t);
				if (ia(e, !1), l && ye(l), !m && (o = c && c.onVnodeBeforeMount) && Ia(o, d, t), ia(e, !0), s && we) {
					let t = () => {
						e.subTree = Oi(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Oi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && ea(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					ea(() => Ia(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && kr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && ea(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ke(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Kn(u), ia(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Bi(e, t.props, r, n), $i(e, t.children, n), st(), Yn(e), ct();
	}, ue = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				pe(l, f, n, r, i, a, o, s, c);
				return;
			}
			if (p & 256) {
				de(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && ve(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? pe(l, f, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && re(f, n, r, i, a, o, s, c));
	}, de = (e, t, n, r, i, a, o, s, c) => {
		e ||= g, t ||= g;
		let l = e.length, u = t.length, d = Math.min(l, u), f = 0;
		for (; f < d; f++) {
			let r = t[f] = c ? Na(t[f]) : Ma(t[f]);
			v(e[f], r, n, null, i, a, o, s, c);
		}
		l > u ? ve(e, i, a, !0, !1, d) : re(t, n, r, i, a, o, s, c, d);
	}, pe = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, f = u - 1;
		for (; l <= d && l <= f;) {
			let r = e[l], u = t[l] = c ? Na(t[l]) : Ma(t[l]);
			if (Ta(r, u)) v(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= f;) {
			let r = e[d], l = t[f] = c ? Na(t[f]) : Ma(t[f]);
			if (Ta(r, l)) v(r, l, n, null, i, a, o, s, c);
			else break;
			d--, f--;
		}
		if (l > d) {
			if (l <= f) {
				let e = f + 1, d = e < u ? t[e].el : r;
				for (; l <= f;) v(null, t[l] = c ? Na(t[l]) : Ma(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > f) for (; l <= d;) D(e[l], i, a, !0), l++;
		else {
			let p = l, m = l, h = /* @__PURE__ */ new Map();
			for (l = m; l <= f; l++) {
				let e = t[l] = c ? Na(t[l]) : Ma(t[l]);
				e.key != null && h.set(e.key, l);
			}
			let _, y = 0, b = f - m + 1, x = !1, ee = 0, te = Array(b);
			for (l = 0; l < b; l++) te[l] = 0;
			for (l = p; l <= d; l++) {
				let r = e[l];
				if (y >= b) {
					D(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = h.get(r.key);
				else for (_ = m; _ <= f; _++) if (te[_ - m] === 0 && Ta(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? D(r, i, a, !0) : (te[u - m] = l + 1, u >= ee ? ee = u : x = !0, v(r, t[u], n, null, i, a, o, s, c), y++);
			}
			let S = x ? sa(te) : g;
			for (_ = S.length - 1, l = b - 1; l >= 0; l--) {
				let e = m + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || ua(f) : r;
				te[l] === 0 ? v(null, d, n, p, i, a, o, s, c) : x && (_ < 0 || l !== S[_] ? me(d, n, p, 2) : _--);
			}
		}
	}, me = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) me(e.component.subTree, t, n, a);
		else if (d & 128) e.suspense.move(t, n, a);
		else if (d & 64) c.move(e, t, n, xe);
		else if (c === z) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, a);
			r(e.anchor, t, n);
		} else if (c === ga) ee(e, t, n);
		else if (a !== 2 && d & 1 && l) {
			if (a === 0) l.persisted && !s[vr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), ea(() => l.enter(s), o));
			else {
				let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? i(s) : r(s, t, n);
				}, d = () => {
					let e = s._isLeaving || !!s[vr];
					s._isLeaving && s[vr](!0), l.persisted && !e ? u() : a(s, () => {
						u(), c && c();
					});
				};
				o ? o(s, u, d) : d();
			}
		} else r(s, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (st(), Dr(s, null, n, e, !0), ct()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !kr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ia(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && ar(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== z || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === z && d & 384 || !i && u & 16) && ve(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && ea(() => {
			_ && Ia(_, t, e), h && ar(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e, o = t === z;
		if (o && !a) {
			ge(n, r);
			return;
		}
		if (t === ga) {
			te(e), a && !a.persisted && a.afterLeave && a.afterLeave();
			return;
		}
		let s = o ? Sr(e) : e, c = () => {
			o ? d(n) && ge(n, r) : i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (s && s.shapeFlag & 1 && a && !a.persisted) {
			let { leave: e, delayLeave: t } = a, n = s.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, _e = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		la(c), la(l), r && ye(r), i.stop(), a ? (a.flags |= 8, D(o, e, t, n)) : o && (o.transition = e.vnode.transition, D(o, e, t, n)), s && ea(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, ea(u, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, O = (e) => {
		if (e.shapeFlag & 6) return O(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = f(e.anchor || e.el), n = t && t[gr];
		return n ? f(n) : t;
	}, be = (e, t, n) => {
		Qn(() => {
			e == null ? t._vnode && D(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : za());
	}, xe = {
		p: v,
		um: D,
		m: me,
		r: he,
		mt: oe,
		mc: re,
		pc: ue,
		pbc: w,
		n: O,
		o: e
	}, Se, we;
	return t && ([Se, we] = t(xe)), {
		render: be,
		hydrate: Se,
		createApp: bi(be, Se)
	};
}
function ra({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ia({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function aa(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function oa(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (C(r) && C(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Na(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && oa(t, a)), a.type === ma && (a.patchFlag === -1 && (a = i[e] = Na(a)), a.el = t.el), a.type === ha && !a.el && (a.el = t.el);
	}
}
function sa(e) {
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
function ca(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : ca(t);
}
function la(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ua(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return ua(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? ua(n.activeBranch) : null;
}
var da = (e) => e.__isSuspense, fa = /* @__PURE__ */ Symbol("_deferredEnter");
function pa(e, t) {
	t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : Jn(e);
}
var z = /* @__PURE__ */ Symbol.for("v-fgt"), ma = /* @__PURE__ */ Symbol.for("v-txt"), ha = /* @__PURE__ */ Symbol.for("v-cmt"), ga = /* @__PURE__ */ Symbol.for("v-stc"), _a = [], va = null;
function B(e = !1) {
	_a.push(va = e ? null : []);
}
function ya() {
	_a.pop(), va = _a[_a.length - 1] || null;
}
var ba = 1;
function xa(e, t = !1) {
	ba += e, e < 0 && va && t && (va.hasOnce = !0);
}
function Sa(e) {
	return e.dynamicChildren = ba > 0 ? va || g : null, ya(), ba > 0 && va && va.push(e), e;
}
function V(e, t, n, r, i, a) {
	return Sa(H(e, t, n, r, i, a, !0));
}
function Ca(e, t, n, r, i) {
	return Sa(U(e, t, n, r, i, !0));
}
function wa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ta(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Ea = ({ key: e }) => e ?? null, Da = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : T(e) || /* @__PURE__ */ N(e) || w(e) ? {
	i: tr,
	r: e,
	k: t,
	f: !!n
} : e);
function H(e, t = null, n = null, r = 0, i = null, a = e === z ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Ea(t),
		ref: t && Da(t),
		scopeId: nr,
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
		ctx: tr
	};
	return s ? (Pa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= T(n) ? 8 : 16), ba > 0 && !o && va && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && va.push(c), c;
}
var U = Oa;
function Oa(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== qr || (e = ha), wa(e)) {
		let r = Aa(e, t, !0);
		return n && Pa(r, n), ba > 0 && !a && va && (r.shapeFlag & 6 ? va[va.indexOf(e)] = r : va.push(r)), r.patchFlag = -2, r;
	}
	if (ro(e) && (e = e.__vccOpts), t) {
		t = ka(t);
		let { class: e, style: n } = t;
		e && !T(e) && (t.class = ke(e)), E(n) && (/* @__PURE__ */ ln(n) && !C(n) && (n = x({}, n)), t.style = we(n));
	}
	let o = T(e) ? 1 : da(e) ? 128 : _r(e) ? 64 : E(e) ? 4 : w(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function ka(e) {
	return e ? /* @__PURE__ */ ln(e) ? x({}, e) : Ri(e) ? x({}, e[$a] || e) : e : null;
}
function Aa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Fa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ea(l),
		ref: t && t.ref ? n && a ? C(a) ? a.concat(Da(t)) : [a, Da(t)] : Da(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== z ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Aa(e.ssContent),
		ssFallback: e.ssFallback && Aa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && xr(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return U(ma, null, e, t);
}
function ja(e, t) {
	let n = U(ga, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (B(), Ca(ha, null, e)) : U(ha, null, e);
}
function Ma(e) {
	return e == null || typeof e == "boolean" ? U(ha) : C(e) ? U(z, null, e.slice()) : wa(e) ? Na(e) : U(ma, null, String(e));
}
function Na(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Aa(e);
}
function Pa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (C(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Pa(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Ri(t) ? t._ctx = tr : r === 3 && tr && (tr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (w(t)) {
		if (r & 65) {
			Pa(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: tr
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [W(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Fa(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = ke([t.class, r.class]));
		else if (e === "style") t.style = we([t.style, r.style]);
		else if (y(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(C(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !b(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ia(e, t, n, r = null) {
	Pn(e, t, 7, [n, r]);
}
var La = /* @__PURE__ */ vi(), Ra = 0;
function za() {
	return Ra;
}
function Ba(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || La, a = {
		uid: Ra++,
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
		scope: new Ve(!0),
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
		propsOptions: Wi(r, i),
		emitsOptions: Ei(r, i),
		emit: null,
		emitted: null,
		propsDefaults: h,
		inheritAttrs: r.inheritAttrs,
		ctx: h,
		data: h,
		props: h,
		attrs: h,
		slots: h,
		refs: h,
		setupState: h,
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = wi.bind(null, a), e.ce && e.ce(a), a;
}
var Va = null, Ha = () => Va || tr, Ua, Wa;
{
	let e = Ce(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ua = t("__VUE_INSTANCE_SETTERS__", (e) => Va = e), Wa = t("__VUE_SSR_SETTERS__", (e) => Ja = e);
}
var Ga = (e) => {
	let t = Va;
	return Ua(e), e.scope.on(), () => {
		e.scope.off(), Ua(t);
	};
}, Ka = () => {
	Va && Va.scope.off(), Ua(null);
};
function qa(e) {
	return e.vnode.shapeFlag & 4;
}
var Ja = !1;
function Ya(e, t = !1, n = !1) {
	t && Wa(t);
	let { props: r, children: i } = e.vnode, a = qa(e);
	zi(e, r, a, t), Qi(e, i, n || t);
	let o = a ? Xa(e, t) : void 0;
	return t && Wa(!1), o;
}
function Xa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $r);
	let { setup: r } = n;
	if (r) {
		st();
		let n = e.setupContext = r.length > 1 ? to(e) : null, i = Ga(e), a = Nn(r, e, 0, [e.props, n]), o = oe(a);
		if (ct(), i(), (o || e.sp) && !kr(e) && wr(e), o) {
			if (a.then(Ka, Ka), t) return a.then((n) => {
				Wa(!0);
				try {
					Za(e, n, t);
				} finally {
					Wa(!1);
				}
			}).catch((t) => {
				Fn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Za(e, a, t);
	} else Qa(e, t);
}
function Za(e, t, n) {
	w(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : E(t) && (e.setupState = _n(t)), Qa(e, n);
}
function Qa(e, t, n) {
	let r = e.type;
	e.render ||= r.render || _;
	{
		let t = Ga(e);
		st();
		try {
			ri(e);
		} finally {
			ct(), t();
		}
	}
}
var $a = /* @__PURE__ */ Symbol(), eo = { get(e, t) {
	return vt(e, "get", ""), t === $a ? e : e[t];
} };
function to(e) {
	return {
		attrs: new Proxy(e.attrs, eo),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function no(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(_n(un(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Zr) return Zr[n](e);
		},
		has(e, t) {
			return t in e || t in Zr;
		}
	}) : e.proxy;
}
function ro(e) {
	return w(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ En(e, t, Ja), io = "3.5.45", ao = void 0, oo = typeof window < "u" && window.trustedTypes;
if (oo) try {
	ao = /* @__PURE__ */ oo.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var so = ao ? (e) => ao.createHTML(e) : (e) => e, co = "http://www.w3.org/2000/svg", lo = "http://www.w3.org/1998/Math/MathML", uo = typeof document < "u" ? document : null, fo = uo && /* @__PURE__ */ uo.createElement("template"), po = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? uo.createElementNS(co, e) : t === "mathml" ? uo.createElementNS(lo, e) : n ? uo.createElement(e, { is: n }) : uo.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => uo.createTextNode(e),
	createComment: (e) => uo.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => uo.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			fo.innerHTML = so(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = fo.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, mo = /* @__PURE__ */ Symbol("_vtc");
function ho(e, t, n) {
	let r = e[mo];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var go = /* @__PURE__ */ Symbol("_vod"), _o = /* @__PURE__ */ Symbol("_vsh"), vo = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[go] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : yo(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), yo(e, !0), r.enter(e)) : r.leave(e, () => {
			yo(e, !1);
		}) : yo(e, t));
	},
	beforeUnmount(e, { value: t }) {
		yo(e, t);
	}
};
function yo(e, t) {
	e.style.display = t ? e[go] : "none", e[_o] = !t;
}
var bo = /* @__PURE__ */ Symbol(""), xo = /(?:^|;)\s*display\s*:/;
function So(e, t, n) {
	let r = e.style, i = T(n), a = !1;
	if (n && !i) {
		if (t) {
			if (T(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? wo(r, t, "");
			}
			else for (let e in t) n[e] ?? wo(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? wo(r, i, "") : Oo(e, i, !T(t) && t ? t[i] : void 0, o) || wo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[bo];
			e && (n += ";" + e), r.cssText = n, a = xo.test(n);
		}
	} else t && e.removeAttribute("style");
	go in e && (i && t === n || (e[go] = a ? r.display : ""), e[_o] && (r.display = "none"));
}
var Co = /\s*!important$/;
function wo(e, t, n) {
	if (C(n)) n.forEach((n) => wo(e, t, n));
	else if (n ??= "", t.startsWith("--")) Co.test(n) ? e.setProperty(t, n.replace(Co, ""), "important") : e.setProperty(t, n);
	else {
		let r = Do(e, t);
		Co.test(n) ? e.setProperty(ge(r), n.replace(Co, ""), "important") : e[r] = n;
	}
}
var To = [
	"Webkit",
	"Moz",
	"ms"
], Eo = {};
function Do(e, t) {
	let n = Eo[t];
	if (n) return n;
	let r = D(t);
	if (r !== "filter" && r in e) return Eo[t] = r;
	r = _e(r);
	for (let n = 0; n < To.length; n++) {
		let i = To[n] + r;
		if (i in e) return Eo[t] = i;
	}
	return t;
}
function Oo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && T(r) && n === r;
}
var ko = "http://www.w3.org/1999/xlink";
function Ao(e, t, n, r, i, a = Ae(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ko, t.slice(6, t.length)) : e.setAttributeNS(ko, t, n) : n == null || a && !je(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : ae(n) ? String(n) : n);
}
function jo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? so(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = je(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Mo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function No(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Po = /* @__PURE__ */ Symbol("_vei");
function Fo(e, t, n, r, i = null) {
	let a = e[Po] || (e[Po] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ro(t);
		r ? Mo(e, n, a[t] = Ho(r, i), s) : o && (No(e, n, o, s), a[t] = void 0);
	}
}
var Io = /(Once|Passive|Capture)$/, Lo = /^on:?(?:Once|Passive|Capture)$/;
function Ro(e) {
	let t, n;
	for (; (n = e.match(Io)) && !Lo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : ge(e.slice(2)), t];
}
var zo = 0, Bo = /* @__PURE__ */ Promise.resolve(), Vo = () => zo ||= (Bo.then(() => zo = 0), Date.now());
function Ho(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (C(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && Pn(e, t, 5, a);
			}
		} else Pn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Vo(), n;
}
var Uo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? ho(e, r, o) : t === "style" ? So(e, n, r) : y(t) ? b(t) || Fo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Go(e, t, r, o)) ? (jo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Ao(e, t, r, o, a, t !== "value")) : e._isVueCE && (Ko(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !T(r))) ? jo(e, D(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ao(e, t, r, o));
};
function Go(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Uo(t) && w(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Uo(t) && T(n) ? !1 : t in e;
}
function Ko(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = D(t);
	return Array.isArray(n) ? n.some((e) => D(e) === r) : Object.keys(n).some((e) => D(e) === r);
}
var qo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return C(t) ? (e) => ye(t, e) : t;
};
function Jo(e) {
	e.target.composing = !0;
}
function Yo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Xo = /* @__PURE__ */ Symbol("_assign"), Zo = /* @__PURE__ */ Symbol("_initialValue");
function Qo(e, t, n) {
	return t && (e = e.trim()), n && (e = xe(e)), e;
}
var q = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Zo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Zo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Xo] = qo(i);
		let a = r || i.props && i.props.type === "number";
		Mo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Xo](Qo(e.value, n, a));
		}), (n || a) && Mo(e, "change", () => {
			e.value = Qo(e.value, n, a);
		}), t || (Mo(e, "compositionstart", Jo), Mo(e, "compositionend", Yo), Mo(e, "change", Yo));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Zo];
		delete e[Zo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Xo](Qo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Xo] = qo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? xe(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, J = {
	deep: !0,
	created(e, t, n) {
		e[Xo] = qo(n), Mo(e, "change", () => {
			let t = e._modelValue, n = rs(e), r = e.checked, i = e[Xo];
			if (C(t)) {
				let e = Le(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (re(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(is(e, r));
		});
	},
	mounted: $o,
	beforeUpdate(e, t, n) {
		e[Xo] = qo(n), $o(e, t, n);
	}
};
function $o(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (C(t)) i = Le(t, r.props.value) > -1;
	else if (re(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ie(t, is(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var es = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Mo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? xe(rs(e)) : rs(e)), r = e.multiple, i = r ? re(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? C(i) ? t.slice() : t : i];
			try {
				e[Xo](i);
			} finally {
				Wn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Xo] = qo(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		ns(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Xo] = qo(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && ts(t, r[1], r[0]) || ns(e, t, n);
	}
};
function ts(e, t, n) {
	if (!n || C(e)) return Ie(e, t);
	if (re(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function ns(e, t, n = !1) {
	let r = e.multiple, i = C(t);
	if (!r || i || re(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = rs(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Le(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(xe(s));
			} else if (Ie(rs(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function rs(e) {
	return "_value" in e ? e._value : e.value;
}
function is(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var as = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], os = {
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
	exact: (e, t) => as.some((n) => e[`${n}Key`] && !t.includes(n))
}, ss = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = os[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, cs = /* @__PURE__ */ x({ patchProp: Wo }, po), ls;
function us() {
	return ls ||= ta(cs);
}
var ds = ((...e) => {
	let t = us().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = ps(e);
		if (!r) return;
		let i = t._component;
		w(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, fs(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function fs(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ps(e) {
	return T(e) ? document.querySelector(e) : e;
}
// node_modules/pinia/dist/pinia.mjs
var ms = typeof window < "u", hs, gs = (e) => hs = e, _s = Symbol();
function vs(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ys;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ys ||= {});
var bs = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function xs(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ss(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Ds(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Cs(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function ws(e) {
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
var Ts = typeof navigator == "object" ? navigator : { userAgent: "" }, Es = /Macintosh/.test(Ts.userAgent) && /AppleWebKit/.test(Ts.userAgent) && !/Safari/.test(Ts.userAgent), Ds = ms ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Es ? Os : "msSaveOrOpenBlob" in Ts ? ks : As : () => {};
function Os(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? ws(r) : Cs(r.href) ? Ss(e, t, n) : (r.target = "_blank", ws(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		ws(r);
	}, 0));
}
function ks(e, t = "download", n) {
	if (typeof e == "string") {
		if (Cs(e)) Ss(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				ws(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(xs(e, n), t);
}
function As(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ss(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(bs.HTMLElement)) || "safari" in bs, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Es) && typeof FileReader < "u") {
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
var { assign: js } = Object;
function Ms() {
	let e = He(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = un({
		install(e) {
			gs(i), i._a = e, e.provide(_s, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Ns = () => {};
function Ps(e, t, n, r = Ns) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ue() && We(i), i;
}
function Fs(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Is = (e) => e(), Ls = Symbol(), Rs = Symbol();
function zs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = vs(i) && vs(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ N(r) && !/* @__PURE__ */ on(r) ? zs(i, r) : r;
	}
	return e;
}
var Bs = Symbol();
function Vs(e) {
	return !vs(e) || !Object.prototype.hasOwnProperty.call(e, Bs);
}
var { assign: Hs } = Object;
function Us(e) {
	return !!(/* @__PURE__ */ N(e) && e.effect);
}
function Ws(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Hs(/* @__PURE__ */ bn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = un(K(() => {
			gs(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Gs(e, l, t, n, r, !0), c;
}
function Gs(e, t, n = {}, r, i, a) {
	let o, s = Hs({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: ys.patchFunction,
			storeId: e,
			events: p
		}) : (zs(r.state.value[e], t), n = {
			type: ys.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		Wn().then(() => {
			h === i && (l = !0);
		}), u = !0, Fs(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Hs(e, t);
		});
	} : Ns;
	function v() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (Ls in t) return t[Rs] = n, t;
		let i = function() {
			gs(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Fs(f, {
				args: n,
				name: i[Rs],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw Fs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Fs(a, e), e)).catch((e) => (Fs(o, e), Promise.reject(e))) : (Fs(a, l), l);
		};
		return i[Ls] = !0, i[Rs] = n, i;
	}, b = /* @__PURE__ */ tn({
		_p: r,
		$id: e,
		$onAction: Ps.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			let i = Ps(d, t, n.detached, () => a()), a = o.run(() => fr(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: ys.direct,
					events: p
				}, r);
			}, Hs({}, c, n)));
			return i;
		},
		$dispose: v
	});
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || Is)(() => r._e.run(() => (o = He()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		/* @__PURE__ */ N(n) && !Us(n) || /* @__PURE__ */ on(n) ? a || (m && Vs(n) && (/* @__PURE__ */ N(n) ? n.value = m[t] : zs(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), s.actions[t] = n);
	}
	return Hs(b, x), Hs(/* @__PURE__ */ M(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Hs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Hs(b, o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(b.$state, m), l = !0, u = !0, b;
}
function Ks(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = cr();
		return n ||= o ? sr(_s, null) : null, n && gs(n), n = hs, n._s.has(e) || (i ? Gs(e, t, r, n) : Ws(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function qs(e) {
	let t = /* @__PURE__ */ M(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = K({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ N(i) || /* @__PURE__ */ on(i)) && (n[r] = /* @__PURE__ */ Cn(e, r));
	}
	return n;
}
// src/module/functions/imperial-calendar/fields.ts
function Js(e) {
	let t = e.time.trim() || "00:00:00";
	if (!/^\d{2}:\d{2}(?::\d{2})?$/.test(t)) throw RangeError("Use a 24-hour time: HH:MM or HH:MM:SS.");
	let [n = 0, r = 0, i = 0] = t.split(":").map(Number), a = {
		year: e.year === "" ? NaN : Number(e.year),
		period: e.period,
		day: e.day === "" ? NaN : Number(e.day),
		hour: n,
		minute: r,
		second: i
	};
	return d(a), a;
}
function Ys(e, t = !1) {
	let n = t ? [[e.years, "year"], [e.days, "day"]] : [[e.wholeDays, "day"]];
	return n.push([e.hours, "hour"], [e.minutes, "minute"], [e.seconds, "second"]), n.filter(([e]) => e > 0).map(([e, t]) => `${e.toLocaleString()} ${t}${e === 1 ? "" : "s"}`).join(", ") || "0 seconds";
}
// src/module/apps/imperial-calendar/state/store.ts
var Xs = Ks("imperial-calendar", () => {
	let e = /* @__PURE__ */ P(Zs()), t = /* @__PURE__ */ P(Zs()), n = K(() => {
		let n = "Start";
		try {
			let r = Js(e.value);
			return n = "End", {
				error: void 0,
				result: u(r, Js(t.value))
			};
		} catch (e) {
			if (!(e instanceof RangeError)) throw e;
			return {
				error: `${n}: ${e.message}`,
				result: void 0
			};
		}
	});
	function r(n, r) {
		let i = n === "start" ? e.value : t.value;
		i.period = r, l(r).intercalary && (i.day = 1);
	}
	function i() {
		[e.value, t.value] = [t.value, e.value];
	}
	return {
		start: e,
		end: t,
		calculation: n,
		changePeriod: r,
		swapDates: i
	};
});
function Zs() {
	return {
		year: 2522,
		period: "Hexenstag",
		day: 1,
		time: "00:00:00"
	};
}
// src/module/apps/shared/view/ApplicationHeader.vue?vue&type=script&setup=true&lang.ts
var Qs = { class: "tw:dui-navbar tw:relative tw:min-h-0 tw:min-w-0 tw:flex-wrap tw:items-start tw:gap-3 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-4 tw:py-3 tw:text-base-content! tw:shadow-md" }, $s = { class: "tw:dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start tw:gap-3" }, ec = {
	class: "tw:inline-grid tw:size-11 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-lg tw:text-primary-content! tw:shadow-md",
	"aria-hidden": "true"
}, tc = { class: "tw:min-w-0" }, nc = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight tw:tracking-wide tw:text-base-content!" }, rc = { class: "tw:mt-1 tw:max-w-2xl tw:text-sm tw:leading-relaxed tw:text-base-content/70!" }, ic = { class: "tw:dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, ac = ["data-tip"], oc = ["aria-label", "title"], sc = /* @__PURE__ */ L({
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
		return (t, r) => (B(), V("header", Qs, [H("div", $s, [H("span", ec, [H("i", { class: ke(e.icon) }, null, 2)]), H("div", tc, [
			r[1] ||= H("div", { class: "tw:dui-breadcrumbs tw:mb-0.5 tw:max-w-full tw:text-xs tw:text-secondary!" }, [H("ul", null, [H("li", null, "Drowsy’s WFRP4e Toolkit")])], -1),
			H("h1", nc, k(e.title), 1),
			H("p", rc, k(e.description), 1)
		])]), H("div", ic, [Jr(t.$slots, "end"), e.configureLabel ? (B(), V("span", {
			key: 0,
			class: "tw:dui-tooltip tw:dui-tooltip-left",
			"data-tip": e.configureLabel
		}, [H("button", {
			class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			type: "button",
			"aria-label": e.configureLabel,
			title: e.configureLabel,
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [H("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]], 8, oc)], 8, ac)) : G("", !0)])]));
	}
}), cc = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, lc = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, uc = { class: "tw:min-w-0 tw:break-words" }, dc = {
	key: 1,
	class: "tw:dui-alert tw:dui-alert-success tw:m-4 tw:mb-0",
	role: "status"
}, fc = { class: "tw:min-w-0 tw:break-words" }, pc = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, mc = /* @__PURE__ */ L({
	__name: "ConsoleFrame",
	props: {
		description: {},
		errorMessage: {},
		icon: {},
		statusMessage: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (B(), V("main", cc, [
			U(sc, {
				description: e.description,
				icon: e.icon,
				title: e.title
			}, {
				end: ir(() => [Jr(t.$slots, "header-end")]),
				_: 3
			}, 8, [
				"description",
				"icon",
				"title"
			]),
			e.errorMessage ? (B(), V("div", lc, [n[0] ||= H("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), H("span", uc, k(e.errorMessage), 1)])) : G("", !0),
			e.statusMessage ? (B(), V("div", dc, [n[1] ||= H("i", {
				class: "fa-solid fa-circle-check",
				"aria-hidden": "true"
			}, null, -1), H("span", fc, k(e.statusMessage), 1)])) : G("", !0),
			H("div", pc, [Jr(t.$slots, "default")]),
			Jr(t.$slots, "footer")
		]));
	}
}), hc = { class: "tw:dui-fieldset tw:min-w-0 tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4" }, gc = { class: "tw:dui-fieldset-legend tw:font-serif tw:text-lg" }, _c = { class: "tw:grid tw:gap-1" }, vc = ["value"], yc = ["value"], bc = { class: "tw:grid tw:grid-cols-2 tw:gap-3" }, xc = { class: "tw:grid tw:min-w-0 tw:gap-1" }, Sc = ["max", "disabled"], Cc = { class: "tw:grid tw:min-w-0 tw:gap-1" }, wc = ["max"], Tc = { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, Ec = { class: "tw:grid tw:gap-1" }, Dc = ["aria-describedby"], Oc = ["id"], kc = /* @__PURE__ */ L({
	__name: "ImperialDateInput",
	props: /*@__PURE__*/ ti({ label: {} }, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ ti(["changePeriod"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let n = Si(e, "modelValue"), r = t, i = Cr(), a = K(() => l(n.value.period));
		return (t, o) => (B(), V("fieldset", hc, [
			H("legend", gc, k(e.label), 1),
			H("label", _c, [o[4] ||= H("span", { class: "tw:dui-label" }, "Month or festival", -1), H("select", {
				value: n.value.period,
				class: "tw:dui-select tw:dui-select-sm tw:w-full",
				onChange: o[0] ||= (e) => r("changePeriod", e.target.value)
			}, [(B(!0), V(z, null, R(F(c), (e) => (B(), V("option", {
				key: e.name,
				value: e.name
			}, k(e.name) + k(e.intercalary ? " · festival" : ""), 9, yc))), 128))], 40, vc)]),
			H("div", bc, [H("label", xc, [o[5] ||= H("span", { class: "tw:dui-label" }, "Day", -1), I(H("input", {
				"onUpdate:modelValue": o[1] ||= (e) => n.value.day = e,
				class: "tw:dui-input tw:dui-input-sm tw:w-full",
				type: "number",
				min: "1",
				max: a.value.days,
				step: "1",
				disabled: a.value.intercalary,
				required: ""
			}, null, 8, Sc), [[q, n.value.day]])]), H("label", Cc, [o[6] ||= H("span", { class: "tw:dui-label" }, "Year (I.C.)", -1), I(H("input", {
				"onUpdate:modelValue": o[2] ||= (e) => n.value.year = e,
				class: "tw:dui-input tw:dui-input-sm tw:w-full",
				type: "number",
				min: "1",
				max: F(s),
				step: "1",
				required: ""
			}, null, 8, wc), [[q, n.value.year]])])]),
			H("p", Tc, k(a.value.intercalary ? "A single festival day between months." : `${a.value.days} days in this month.`), 1),
			H("label", Ec, [o[7] ||= H("span", { class: "tw:dui-label" }, "Time (24-hour, optional)", -1), I(H("input", {
				"onUpdate:modelValue": o[3] ||= (e) => n.value.time = e,
				class: "tw:dui-input tw:dui-input-sm tw:w-full tw:font-mono",
				type: "text",
				placeholder: "00:00:00",
				"aria-describedby": `${F(i)}-time-hint`
			}, null, 8, Dc), [[q, n.value.time]])]),
			H("p", {
				id: `${F(i)}-time-hint`,
				class: "tw:m-0 tw:text-xs tw:text-base-content/70!"
			}, " HH:MM or HH:MM:SS. Blank means midnight. ", 8, Oc)
		]));
	}
}), Ac = { class: "tw:grid tw:min-w-0 tw:gap-3" }, jc = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))]" }, Mc = {
	class: "tw:min-w-0 tw:rounded-box tw:border-2 tw:border-primary/30! tw:bg-base-100! tw:p-4",
	"aria-label": "Calculation result",
	"aria-live": "polite",
	"aria-atomic": "true"
}, Nc = {
	key: 0,
	class: "tw:m-0 tw:text-error!"
}, Pc = { class: "tw:m-0 tw:font-serif tw:text-lg" }, Fc = { class: "tw:my-2 tw:text-2xl tw:font-semibold tw:tabular-nums tw:break-words" }, Ic = {
	key: 0,
	class: "tw:my-2 tw:text-sm"
}, Lc = { class: "tw:my-2 tw:text-sm tw:tabular-nums" }, Rc = { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, zc = /* @__PURE__ */ L({
	__name: "ImperialCalendarApp",
	setup(e) {
		let t = Xs(), { start: n, end: r, calculation: i } = qs(t);
		return (e, a) => (B(), Ca(mc, {
			title: "Imperial Calendar Calculator",
			icon: "fa-solid fa-calendar-days",
			description: "Find the time between two Imperial dates, including festival days."
		}, {
			default: ir(() => [H("div", Ac, [
				H("div", jc, [U(kc, {
					modelValue: F(n),
					"onUpdate:modelValue": a[0] ||= (e) => /* @__PURE__ */ N(n) ? n.value = e : null,
					label: "Start date",
					onChangePeriod: a[1] ||= (e) => F(t).changePeriod("start", e)
				}, null, 8, ["modelValue"]), U(kc, {
					modelValue: F(r),
					"onUpdate:modelValue": a[2] ||= (e) => /* @__PURE__ */ N(r) ? r.value = e : null,
					label: "End date",
					onChangePeriod: a[3] ||= (e) => F(t).changePeriod("end", e)
				}, null, 8, ["modelValue"])]),
				H("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:justify-self-end",
					type: "button",
					onClick: a[4] ||= (...e) => F(t).swapDates && F(t).swapDates(...e)
				}, [...a[5] ||= [H("i", {
					class: "fa-solid fa-right-left",
					"aria-hidden": "true"
				}, null, -1), W(" Swap dates ", -1)]]),
				H("section", Mc, [F(i).error ? (B(), V("p", Nc, k(F(i).error), 1)) : F(i).result ? (B(), V(z, { key: 1 }, [
					H("h2", Pc, k(F(i).result.totalSeconds < 0 ? "End is before start" : "Elapsed time"), 1),
					H("p", Fc, k(F(Ys)(F(i).result)), 1),
					F(i).result.years ? (B(), V("p", Ic, k(F(Ys)(F(i).result, !0)) + " (400-day years) ", 1)) : G("", !0),
					H("p", Lc, " End − start: " + k(F(i).result.totalSeconds.toLocaleString()) + " seconds ", 1),
					H("p", Rc, k(F(i).result.totalSeconds < 0 ? "The duration above runs backward. Swap dates to measure forward." : "Same date and time = zero elapsed. Midnight to the next midnight = one day."), 1)
				], 64)) : G("", !0)]),
				a[6] ||= H("p", { class: "tw:m-0 tw:text-xs tw:leading-relaxed tw:text-base-content/70!" }, " Standard Imperial calendar: 400 days per year, including six festival days. No leap years; 24 hours per day. Enter dates manually; calculating does not advance the world clock. ", -1)
			])]),
			_: 1
		}));
	}
}), Bc = class {
	#e;
	createRoot() {
		let e = document.createElement("div");
		return e.classList.add("wfrp4e-enhanced-fear-terror-root"), e.dataset.theme = "wfrp4e-enhanced-fear-terror", e;
	}
	mount(e, t, n, r) {
		this.unmount(), t.classList.add("wfrp4e-enhanced-fear-terror-app"), t.replaceChildren(e), this.#e = ds(n, r), this.#e.use(Ms()), this.#e.mount(e);
	}
	unmount() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Vc = class extends foundry.applications.api.ApplicationV2 {
	#e = new Bc();
	getVueProps() {}
	async _renderHTML(e, t) {
		return this.#e.createRoot();
	}
	_replaceHTML(e, t, n) {
		this.#e.mount(e, t, this.getVueComponent(), this.getVueProps() ?? {});
	}
	async _preClose(e) {
		this.#e.unmount(), await super._preClose(e);
	}
}, Y = {
	configureParty: {
		gmOnly: !0,
		name: "Configure Party"
	},
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
	groupTestConsole: {
		gmOnly: !0,
		name: "Secret Group Test Console"
	},
	imperialCalendar: {
		gmOnly: !0,
		name: "Imperial Calendar Calculator"
	},
	sessionManagementConsole: {
		gmOnly: !0,
		name: "Session Turnover Console"
	},
	sceneManagementConsole: {
		gmOnly: !0,
		name: "Scene Management Console"
	},
	toolkitHome: {
		gmOnly: !0,
		name: "Toolkit Home"
	},
	tokenToolsConsole: {
		gmOnly: !0,
		name: "Token Vision & Light Console"
	},
	xpAwards: {
		gmOnly: !0,
		name: "XP award tools"
	},
	xpCurveConsole: {
		gmOnly: !0,
		name: "Curve XP"
	}
};
function Hc(e) {
	let t = game.user;
	return t !== null && (!e.gmOnly || t.isGM);
}
function X(e) {
	if (!Hc(e)) throw Error(`Only a GM can use the ${e.name}.`);
}
// src/module/foundry/apps/ToolkitVueApplication.ts
var Uc = class extends Vc {
	static ACCESS_POLICY = {
		gmOnly: !0,
		name: "Drowsy’s WFRP4e Toolkit application"
	};
	static canCurrentUserAccess() {
		return Hc(this.ACCESS_POLICY);
	}
	async render(e) {
		return X(this.constructor.ACCESS_POLICY), super.render(e);
	}
}, Wc = class extends Uc {
	static ACCESS_POLICY = Y.imperialCalendar;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [r, `${r}-imperial-calendar`],
		id: `${r}-imperial-calendar`,
		position: {
			height: 660,
			width: 700
		},
		window: {
			icon: "fa-solid fa-calendar-days",
			resizable: !0,
			title: `${i} — Imperial Calendar Calculator`
		}
	};
	getVueComponent() {
		return zc;
	}
};
// src/module/apps/imperial-calendar/view/open.ts
async function Gc() {
	let e = new Wc();
	return await e.render(!0), e;
}
// src/module/foundry/apps/notifications.ts
function Kc(e) {
	ui.notifications.error(e);
}
// src/module/functions/fear-terror/payload.ts
function qc(e) {
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
function Jc(e) {
	return e === "fear" ? "Fear" : "Terror";
}
function Yc(e, t) {
	let n = t.source ? ` - ${t.source}` : "";
	return `${e} ${t.rating}${n}`;
}
function Xc(e, t) {
	return `<h2>${e}</h2>${Zc(t)}`;
}
function Zc(e) {
	let t = Jc(e.type), n = e.source ? `, ${e.source}` : "";
	return `@${t}[${e.rating}${n}]`;
}
// src/module/apps/fear-console/state/store.ts
var Qc = Ks("fear-console", () => {
	let e = /* @__PURE__ */ P("fear"), t = /* @__PURE__ */ P(1), n = /* @__PURE__ */ P(""), r = /* @__PURE__ */ P([]), i = /* @__PURE__ */ P(), a = /* @__PURE__ */ P(), o, s = K(() => i.value !== void 0), c = K(() => Jc(e.value)), l = K(() => {
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
}), $c = { class: "tw:dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, el = { class: "tw:dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, tl = { class: "tw:dui-badge tw:dui-badge-outline tw:dui-badge-sm tw:h-auto tw:border-base-content/25! tw:py-1" }, nl = {
	class: "tw:dui-tooltip tw:dui-tooltip-left",
	"data-tip": "Configure Fear Console"
}, rl = /* @__PURE__ */ L({
	__name: "FearConsoleHeader",
	props: {
		rating: {},
		selectedTypeLabel: {}
	},
	emits: ["configure"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("header", $c, [r[2] ||= H("div", { class: "tw:dui-navbar-start tw:min-w-0 tw:flex-1" }, [H("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [H("i", { class: "fa-solid fa-skull" })])], -1), H("div", el, [H("span", tl, k(e.selectedTypeLabel) + " " + k(e.rating), 1), H("span", nl, [H("button", {
			class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure Fear Console",
			title: "Configure Fear Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[1] ||= [H("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]));
	}
}), il = { class: "tw:flex tw:min-h-full tw:flex-col tw:gap-4 tw:bg-base-200! tw:text-base-content tw:text-base-content!" }, al = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:mx-4",
	role: "alert"
}, ol = {
	class: "tw:grid tw:min-w-0 tw:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] tw:gap-3 tw:px-4",
	"aria-label": "Fear and Terror setup"
}, sl = { class: "tw:dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, cl = {
	class: "tw:grid tw:w-full tw:grid-cols-2 tw:gap-2",
	role: "group",
	"aria-label": "Effect type"
}, ll = ["aria-pressed"], ul = ["aria-pressed"], dl = { class: "tw:dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, fl = { class: "tw:dui-fieldset tw:col-span-full tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, pl = {
	class: "tw:dui-card tw:dui-card-border tw:mx-4 tw:min-h-40 tw:flex-1 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-terror-affected-actors"
}, ml = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, hl = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, gl = { class: "tw:flex tw:items-center tw:gap-2" }, _l = { class: "tw:dui-badge tw:dui-badge-sm" }, vl = ["disabled"], yl = {
	key: 0,
	class: "tw:dui-list tw:gap-1",
	"aria-live": "polite"
}, bl = { class: "tw:min-w-0 tw:font-semibold" }, xl = { class: "tw:dui-badge tw:dui-badge-ghost tw:capitalize" }, Sl = {
	key: 1,
	class: "tw:dui-alert",
	role: "status"
}, Cl = {
	class: "tw:sticky tw:bottom-0 tw:z-10 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4",
	"aria-label": "Fear Console actions"
}, wl = { class: "tw:dui-join tw:flex tw:w-full" }, Tl = ["disabled"], El = {
	key: 0,
	class: "tw:dui-loading tw:dui-loading-spinner tw:dui-loading-sm",
	"aria-hidden": "true"
}, Dl = {
	key: 1,
	class: "fa-solid fa-message",
	"aria-hidden": "true"
}, Ol = ["disabled"], kl = {
	id: "fear-console-secondary-actions",
	class: "tw:dui-dropdown tw:dui-dropdown-top tw:dui-dropdown-end tw:dui-menu tw:z-20 tw:mb-2 tw:w-52 tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100! tw:p-2 tw:text-base-content! tw:shadow-lg",
	popover: "",
	style: { "position-anchor": "--fear-console-secondary-actions" }
}, Al = ["disabled"], jl = {
	key: 0,
	class: "tw:dui-loading tw:dui-loading-spinner tw:dui-loading-sm",
	"aria-hidden": "true"
}, Ml = {
	key: 1,
	class: "fa-regular fa-copy",
	"aria-hidden": "true"
}, Nl = ["disabled"], Pl = {
	key: 0,
	class: "tw:dui-loading tw:dui-loading-spinner tw:dui-loading-sm",
	"aria-hidden": "true"
}, Fl = {
	key: 1,
	class: "fa-solid fa-bolt",
	"aria-hidden": "true"
}, Il = /* @__PURE__ */ L({
	__name: "FearConsoleApp",
	props: {
		initialPayload: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = Qc();
		t.initialPayload ? n.initialize({
			actions: t.actions,
			initialPayload: t.initialPayload
		}) : n.initialize({ actions: t.actions });
		let { activeAction: r, actors: i, errorMessage: a, isWorking: o, rating: s, selectedType: c, selectedTypeLabel: l, source: u } = qs(n);
		return (e, d) => (B(), V("main", il, [
			U(rl, {
				rating: F(s),
				"selected-type-label": F(l),
				onConfigure: t.actions.openConfigurator
			}, null, 8, [
				"rating",
				"selected-type-label",
				"onConfigure"
			]),
			F(a) ? (B(), V("div", al, [d[8] ||= H("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), H("span", null, k(F(a)), 1)])) : G("", !0),
			H("section", ol, [
				H("fieldset", sl, [
					d[9] ||= H("legend", { class: "tw:dui-fieldset-legend tw:text-base-content!" }, "Effect", -1),
					H("div", cl, [H("button", {
						class: ke(["tw:dui-btn tw:min-w-0 tw:rounded-full", { "tw:dui-btn-primary": F(c) === "fear" }]),
						type: "button",
						"aria-pressed": F(c) === "fear",
						onClick: d[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, ll), H("button", {
						class: ke(["tw:dui-btn tw:min-w-0 tw:rounded-full", { "tw:dui-btn-primary": F(c) === "terror" }]),
						type: "button",
						"aria-pressed": F(c) === "terror",
						onClick: d[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, ul)]),
					d[10] ||= H("p", { class: "tw:dui-label tw:whitespace-normal" }, " Choose the WFRP4e psychology test to prompt or apply. ", -1)
				]),
				H("fieldset", dl, [
					d[11] ||= H("legend", { class: "tw:dui-fieldset-legend tw:text-base-content!" }, "Difficulty", -1),
					d[12] ||= H("label", {
						class: "tw:dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					I(H("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": d[2] ||= (e) => /* @__PURE__ */ N(s) ? s.value = e : null,
						class: "tw:dui-input tw:dui-validator tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						q,
						F(s),
						void 0,
						{ number: !0 }
					]]),
					d[13] ||= H("p", { class: "tw:dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				H("fieldset", fl, [
					d[14] ||= ja("<legend class=\"tw:dui-fieldset-legend tw:text-base-content!\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"tw:dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"tw:dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary!\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					I(H("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": d[3] ||= (e) => /* @__PURE__ */ N(u) ? u.value = e : null,
						autocomplete: "off",
						class: "tw:dui-input tw:min-w-0 tw:max-w-full tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[q, F(u)]]),
					d[15] ||= H("p", { class: "tw:dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			H("section", pl, [H("div", ml, [H("div", hl, [H("div", gl, [d[16] ||= H("h2", {
				id: "fear-terror-affected-actors",
				class: "tw:dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Affected actors ", -1), H("span", _l, k(F(i).length), 1)]), H("button", {
				class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm",
				disabled: F(o),
				type: "button",
				onClick: d[4] ||= (...e) => F(n).refreshActors && F(n).refreshActors(...e)
			}, [...d[17] ||= [H("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), W(" Refresh ", -1)]], 8, vl)]), F(i).length ? (B(), V("ul", yl, [(B(!0), V(z, null, R(F(i), (e) => (B(), V("li", {
				key: e.id,
				class: "tw:dui-list-row tw:items-center tw:bg-base-200!"
			}, [
				d[18] ||= H("span", {
					class: "tw:dui-status tw:dui-status-secondary",
					"aria-hidden": "true"
				}, null, -1),
				H("span", bl, k(e.name), 1),
				H("span", xl, k(e.source), 1)
			]))), 128))])) : (B(), V("div", Sl, [d[19] ||= H("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), H("span", null, " Target one or more tokens to apply " + k(F(l)) + " directly. You can post a chat card without affected actors. ", 1)]))])]),
			H("footer", Cl, [H("div", wl, [
				H("button", {
					class: "tw:dui-btn tw:dui-btn-primary tw:dui-join-item tw:min-w-0 tw:flex-1 tw:rounded-l-full tw:shadow-md",
					disabled: F(o),
					type: "button",
					onClick: d[5] ||= (e) => F(n).runAction("post-card")
				}, [F(r) === "post-card" ? (B(), V("span", El)) : (B(), V("i", Dl)), d[20] ||= W(" Post Card ", -1)], 8, Tl),
				H("button", {
					class: "tw:dui-btn tw:dui-btn-primary tw:dui-btn-square tw:dui-join-item tw:rounded-r-full tw:border-l-primary-content/25! tw:shadow-md",
					"aria-label": "More Fear Console actions",
					disabled: F(o),
					popovertarget: "fear-console-secondary-actions",
					style: { "anchor-name": "--fear-console-secondary-actions" },
					title: "More actions",
					type: "button"
				}, [...d[21] ||= [H("i", {
					class: "fa-solid fa-chevron-up",
					"aria-hidden": "true"
				}, null, -1)]], 8, Ol),
				H("ul", kl, [H("li", { class: ke({ "tw:dui-menu-disabled": F(o) }) }, [H("button", {
					disabled: F(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[6] ||= (e) => F(n).runAction("copy-link")
				}, [F(r) === "copy-link" ? (B(), V("span", jl)) : (B(), V("i", Ml)), d[22] ||= W(" Copy Link ", -1)], 8, Al)], 2), H("li", { class: ke({ "tw:dui-menu-disabled": F(o) }) }, [H("button", {
					disabled: F(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[7] ||= (e) => F(n).runAction("apply")
				}, [F(r) === "apply" ? (B(), V("span", Pl)) : (B(), V("i", Fl)), W(" Apply " + k(F(l)), 1)], 8, Nl)], 2)])
			])])
		]));
	}
}), Ll = Ks("fear-console-configurator", () => {
	let e = /* @__PURE__ */ P({ launchers: {
		actorSheet: !1,
		tokenControls: !1,
		xpCurveTokenControls: !1
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
}), Rl = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, zl = { class: "tw:min-h-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Bl = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:mb-3",
	role: "alert"
}, Vl = {
	key: 1,
	class: "tw:dui-alert tw:dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, Hl = {
	class: "tw:dui-card tw:dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-launcher-settings"
}, Ul = { class: "tw:dui-card-body tw:gap-4 tw:p-4" }, Wl = { class: "tw:dui-fieldset tw:gap-2" }, Gl = { class: "tw:dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Kl = { class: "tw:dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, ql = { class: "tw:dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Jl = { class: "tw:flex tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[32rem]:flex-row tw:min-[32rem]:items-center tw:min-[32rem]:justify-between" }, Yl = ["disabled"], Xl = {
	key: 0,
	class: "tw:dui-loading tw:dui-loading-spinner tw:dui-loading-sm",
	"aria-hidden": "true"
}, Zl = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, Ql = /* @__PURE__ */ L({
	__name: "FearConsoleConfiguratorApp",
	props: {
		actions: {},
		configuration: {}
	},
	setup(e) {
		let t = e, n = Ll();
		n.initialize(t.configuration, t.actions);
		let { configuration: r, errorMessage: i, isSaving: a, statusMessage: o } = qs(n);
		return (e, t) => (B(), V("main", Rl, [
			U(sc, {
				description: "Choose the toolkit buttons shown in Foundry for this browser.",
				icon: "fa-solid fa-gears",
				title: "Fear Console Configurator"
			}),
			H("div", zl, [
				F(i) ? (B(), V("div", Bl, [t[4] ||= H("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), H("span", null, k(F(i)), 1)])) : G("", !0),
				F(o) ? (B(), V("div", Vl, [t[5] ||= H("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), H("span", null, k(F(o)), 1)])) : G("", !0),
				H("section", Hl, [H("div", Ul, [
					t[10] ||= H("div", null, [H("h2", {
						id: "fear-launcher-settings",
						class: "tw:dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Toolkit launcher buttons "), H("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " All buttons are off by default. Compendium macros and the module API remain available. ")], -1),
					H("fieldset", Wl, [
						t[9] ||= H("legend", { class: "tw:dui-fieldset-legend tw:text-base-content!" }, " Available locations ", -1),
						H("label", Gl, [I(H("input", {
							"onUpdate:modelValue": t[0] ||= (e) => F(r).launchers.tokenControls = e,
							"aria-label": "Fear Console sidebar button",
							class: "tw:dui-toggle tw:dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[J, F(r).launchers.tokenControls]]), t[6] ||= H("span", { class: "tw:min-w-0" }, [H("strong", { class: "tw:block" }, "Fear Console sidebar button"), H("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the skull launcher in Foundry’s Token Controls palette. ")], -1)]),
						H("label", Kl, [I(H("input", {
							"onUpdate:modelValue": t[1] ||= (e) => F(r).launchers.xpCurveTokenControls = e,
							"aria-label": "XP Curve sidebar button",
							class: "tw:dui-toggle tw:dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[J, F(r).launchers.xpCurveTokenControls]]), t[7] ||= H("span", { class: "tw:min-w-0" }, [H("strong", { class: "tw:block" }, "XP Curve sidebar button"), H("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the chart launcher in Foundry’s Token Controls palette. ")], -1)]),
						H("label", ql, [I(H("input", {
							"onUpdate:modelValue": t[2] ||= (e) => F(r).launchers.actorSheet = e,
							"aria-label": "Fear Console actor-sheet button",
							class: "tw:dui-toggle tw:dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[J, F(r).launchers.actorSheet]]), t[8] ||= H("span", { class: "tw:min-w-0" }, [H("strong", { class: "tw:block" }, "Fear Console actor-sheet button"), H("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show a Fear Console action on supported WFRP4e actor sheets. ")], -1)])
					]),
					t[11] ||= H("div", {
						class: "tw:dui-alert tw:text-sm",
						role: "note"
					}, [H("i", {
						class: "fa-solid fa-rotate",
						"aria-hidden": "true"
					}), H("span", null, "Launcher changes take effect after Foundry is reloaded.")], -1)
				])])
			]),
			H("footer", Jl, [t[13] ||= H("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, "Scope: this browser.", -1), H("button", {
				class: "tw:dui-btn tw:dui-btn-primary tw:min-w-40 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: F(a),
				type: "button",
				onClick: t[3] ||= (...e) => F(n).saveConfiguration && F(n).saveConfiguration(...e)
			}, [F(a) ? (B(), V("span", Xl)) : (B(), V("i", Zl)), t[12] ||= W(" Save configuration ", -1)], 8, Yl)])
		]));
	}
}), Z = {
	curveExponent: "xpCurveExponent",
	defaultReason: "xpCurveDefaultReason",
	catchUpRate: "xpCurveCatchUpRate",
	gapForMaximumAward: "xpCurveGapForMaximumAward",
	maximumAward: "xpCurveMaximumAward",
	scaleExponent: "xpCurveScaleExponent",
	scalePivot: "xpCurveScalePivot",
	showTokenControlsLauncher: "showXpCurveTokenControlsLauncher"
};
// src/module/foundry/xp-curve/settings/load.ts
function $l() {
	let e = ru(Z.curveExponent), t = ru(Z.maximumAward), n = ru(Z.catchUpRate), r = n >= 0 ? n : t * (1e3 / Math.max(1, ru(Z.gapForMaximumAward))) ** e / 10;
	return {
		defaultReason: iu(Z.defaultReason),
		parameters: {
			curveExponent: e,
			catchUpRate: r,
			maximumAward: t,
			scaleExponent: ru(Z.scaleExponent),
			scalePivot: ru(Z.scalePivot)
		}
	};
}
async function eu(e) {
	let t = [
		[Z.curveExponent, e.parameters.curveExponent],
		[Z.defaultReason, e.defaultReason],
		[Z.catchUpRate, e.parameters.catchUpRate],
		[Z.maximumAward, e.parameters.maximumAward],
		[Z.scaleExponent, e.parameters.scaleExponent],
		[Z.scalePivot, e.parameters.scalePivot]
	];
	for (let [e, n] of t) await game.settings.set(r, e, n);
}
function tu(e) {
	return nu(e);
}
function nu(e) {
	return game.settings.get(r, e) === !0;
}
function ru(e) {
	return Number(game.settings.get(r, e));
}
function iu(e) {
	let t = game.settings.get(r, e);
	return typeof t == "string" ? t : "";
}
// src/module/foundry/fear-terror/settings/launchers.ts
var au = {
	actorSheet: "showActorSheetLauncher",
	tokenControls: "showTokenControlsLauncher"
};
function ou(e) {
	return game.settings.get(r, e) === !0;
}
// src/module/foundry/fear-terror/configuration.ts
function su() {
	return { launchers: {
		actorSheet: ou(au.actorSheet),
		tokenControls: ou(au.tokenControls),
		xpCurveTokenControls: tu(Z.showTokenControlsLauncher)
	} };
}
async function cu(e) {
	X(Y.fearConsole);
	let t = [
		[au.actorSheet, e.launchers.actorSheet],
		[au.tokenControls, e.launchers.tokenControls],
		[Z.showTokenControlsLauncher, e.launchers.xpCurveTokenControls]
	];
	for (let [e, n] of t) await game.settings.set(r, e, n);
	ui.notifications.info("Toolkit launcher preferences saved. Reload to update the buttons.");
}
// src/module/apps/fear-console-configurator/view/FearConsoleConfiguratorApplication.ts
var lu = class extends Uc {
	static ACCESS_POLICY = Y.fearConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [r, `${r}-fear-console-configurator`],
		id: `${r}-fear-console-configurator`,
		position: {
			height: 500,
			width: 560
		},
		window: {
			icon: "fa-solid fa-skull",
			resizable: !0,
			title: `${i} — Fear Console Configurator`
		}
	};
	getVueComponent() {
		return Ql;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: cu },
			configuration: su()
		};
	}
};
// src/module/apps/fear-console-configurator/view/open.ts
async function uu() {
	let e = new lu();
	return await e.render(!0), e;
}
function du() {
	uu().catch((e) => {
		console.error(`${r} | Failed to open the Fear Console Configurator.`, e), Kc("Drowsy’s WFRP4e Toolkit could not open the Fear Console Configurator. See the browser console for details.");
	});
}
// src/module/functions/fear-terror/suggestion.ts
function fu({ fearRating: e, source: t, terrorRating: n }) {
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
// src/module/foundry/fear-terror/infer.ts
function pu() {
	if (typeof canvas < "u" && canvas) {
		for (let e of canvas.tokens?.controlled ?? []) if (e.actor) return mu(e.actor);
	}
}
function mu(e) {
	let t = hu(e, "CHAT.Terror");
	return fu({
		fearRating: t === void 0 ? hu(e, "CHAT.Fear") : void 0,
		source: e.name,
		terrorRating: t
	});
}
function hu(e, t) {
	if (typeof e.has != "function") throw Error(`WFRP4e actor "${e.name}" does not expose the required trait lookup method.`);
	let n = e.has(game.i18n.localize(t))?.specification?.value;
	if (typeof n == "number") return n;
	if (typeof n == "string") {
		let e = Number(n);
		if (Number.isFinite(e)) return e;
	}
}
// src/module/foundry/fear-terror/selection.ts
function gu() {
	return vu().map(({ choice: e }) => e);
}
function _u() {
	return vu().map(({ actor: e }) => e);
}
function vu() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user?.targets ?? []) yu(e, t.actor);
	return Array.from(e.values());
}
function yu(e, t) {
	t && !e.has(t.id) && e.set(t.id, {
		actor: t,
		choice: {
			id: t.id,
			name: t.name,
			source: "targeted"
		}
	});
}
// src/module/foundry/fear-terror/service.ts
async function bu(e) {
	X(Y.fearConsole);
	let t = _u();
	if (t.length === 0) {
		ui.notifications.warn("Target one or more tokens before applying Fear or Terror.");
		return;
	}
	let n = qc(e);
	await Promise.all(t.map((e) => wu(e, n)));
}
async function xu(e) {
	X(Y.fearConsole);
	let t = qc(e), n = _u(), r = Tu(t), i = Yc(r, t), a = Eu(await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: i }), n);
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
async function Su(e) {
	X(Y.fearConsole);
	let t = qc(e), n = Zc(t);
	await game.clipboard.copyPlainText(n), ui.notifications.info(`${Tu(t)} link copied.`);
}
async function Cu(e) {
	X(Y.fearConsole);
	let t = qc(e), n = Xc(Tu(t), t), r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
async function wu(e, t) {
	t.type === "fear" ? await e.applyFear(t.rating, t.source) : await e.applyTerror(t.rating, t.source);
}
function Tu(e) {
	let t = e.type === "fear" ? "CHAT.Fear" : "CHAT.Terror";
	return game.i18n.localize(t);
}
function Eu(e, t) {
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
// src/module/apps/fear-console/view/FearConsoleApplication.ts
var Du = class extends Uc {
	static ACCESS_POLICY = Y.fearConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [r, `${r}-fear-console`],
		id: `${r}-fear-console`,
		position: {
			height: 560,
			width: 620
		},
		window: {
			icon: "fa-solid fa-skull",
			resizable: !0,
			title: `${i} — Fear Console`
		}
	};
	#e;
	constructor(e = {}) {
		super(), this.#e = e;
	}
	getVueComponent() {
		return Il;
	}
	getVueProps() {
		return {
			actions: {
				applyToSelectedActors: bu,
				copyLink: Su,
				getActorChoices: gu,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${r} | Failed to close the Fear Console.`, e), ui.notifications.error("The Fear Console completed the action but could not close its window.");
					});
				},
				openConfigurator: du,
				postPrompt: xu
			},
			initialPayload: this.#e.initialPayload ?? pu()
		};
	}
};
// src/module/apps/fear-console/view/open.ts
async function Ou(e = {}) {
	let t = new Du(e);
	return await t.render(!0), t;
}
function ku(e = {}) {
	Ou(e).catch((e) => {
		console.error(`${r} | Failed to open the Fear Console.`, e), Kc("Drowsy’s WFRP4e Toolkit could not open the Fear Console. See the browser console for details.");
	});
}
// src/module/apps/administration-console/state/store.ts
var Au = Ks("administration-console", () => {
	let e = /* @__PURE__ */ P([]), t = /* @__PURE__ */ P(), n = /* @__PURE__ */ P([]), r = /* @__PURE__ */ P(!0), i = /* @__PURE__ */ P("observer"), a = /* @__PURE__ */ P(), o = /* @__PURE__ */ P(), s = /* @__PURE__ */ P(!1), c, l = K(() => e.value.filter(({ selected: e }) => e).map(({ id: e }) => e));
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
}), ju = { class: "tw:grid tw:min-w-0 tw:gap-3" }, Mu = { class: "tw:dui-card tw:dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, Nu = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, Pu = { class: "tw:m-0 tw:text-sm" }, Fu = { class: "tw:flex tw:flex-wrap tw:gap-2" }, Iu = { class: "tw:dui-badge" }, Lu = { class: "tw:dui-badge" }, Ru = { class: "tw:flex tw:flex-wrap tw:justify-end tw:gap-2" }, zu = ["disabled"], Bu = ["disabled"], Vu = {
	key: 1,
	class: "tw:dui-alert",
	role: "status"
}, Hu = { class: "tw:dui-card tw:dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, Uu = { class: "tw:dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Wu = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, Gu = { class: "tw:flex tw:gap-2" }, Ku = { class: "tw:max-h-56 tw:overflow-auto tw:rounded-box tw:border tw:border-base-content/15!" }, qu = ["onUpdate:modelValue"], Ju = { class: "tw:min-w-0 tw:flex-1" }, Yu = { class: "tw:block tw:text-sm tw:font-semibold" }, Xu = { class: "tw:block tw:text-xs tw:text-base-content/60!" }, Zu = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-end tw:gap-2" }, Qu = ["disabled"], $u = { class: "tw:grid tw:gap-3 tw:min-[38rem]:grid-cols-2" }, ed = { class: "tw:dui-card tw:dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, td = { class: "tw:dui-card-body tw:gap-2 tw:p-4" }, nd = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-warning",
	role: "status"
}, rd = {
	key: 1,
	class: "tw:m-0 tw:text-sm"
}, id = { class: "tw:flex tw:items-center tw:gap-2" }, ad = { class: "tw:dui-card tw:dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, od = { class: "tw:dui-card-body tw:gap-2 tw:p-4" }, sd = ["disabled"], cd = /* @__PURE__ */ L({
	__name: "AdministrationConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Au();
		n.initialize(t.initialization, t.actions);
		let { errorMessage: r, isWorking: i, packs: a, scene: o, selectedPackIds: s, showUnassignedPlayerWarning: c, spectators: l, statusMessage: u, visibility: d } = qs(n);
		return (e, t) => (B(), Ca(mc, {
			description: "Manage Scene lighting, compendium visibility, player assignments, and utility rolls.",
			"error-message": F(r),
			icon: "fa-solid fa-screwdriver-wrench",
			"status-message": F(u),
			title: "Administration Console"
		}, {
			default: ir(() => [H("div", ju, [
				H("section", Mu, [H("div", Nu, [t[9] ||= H("h2", { class: "tw:dui-card-title tw:font-serif tw:text-lg" }, "Viewed Scene", -1), F(o) ? (B(), V(z, { key: 0 }, [
					H("p", Pu, k(F(o).name), 1),
					H("div", Fu, [H("span", Iu, "Token Vision: " + k(F(o).tokenVision ? "on" : "off"), 1), H("span", Lu, "Global light: " + k(F(o).globalLight ? "on" : "off"), 1)]),
					H("div", Ru, [H("button", {
						class: "tw:dui-btn tw:dui-btn-sm",
						disabled: F(i),
						type: "button",
						onClick: t[0] ||= (e) => F(n).applySceneMode("token-vision")
					}, " Use Token Vision ", 8, zu), H("button", {
						class: "tw:dui-btn tw:dui-btn-sm",
						disabled: F(i),
						type: "button",
						onClick: t[1] ||= (e) => F(n).applySceneMode("global-light")
					}, " Use global light ", 8, Bu)])
				], 64)) : (B(), V("div", Vu, "View a Scene to manage its lighting."))])]),
				H("section", Hu, [H("div", Uu, [
					H("div", Wu, [t[10] ||= H("h2", { class: "tw:dui-card-title tw:font-serif tw:text-lg" }, "Compendium visibility", -1), H("div", Gu, [H("button", {
						class: "tw:dui-btn tw:dui-btn-xs",
						type: "button",
						onClick: t[2] ||= (e) => F(n).setAllPacks(!0)
					}, " Select all "), H("button", {
						class: "tw:dui-btn tw:dui-btn-xs",
						type: "button",
						onClick: t[3] ||= (e) => F(n).setAllPacks(!1)
					}, " Clear ")])]),
					H("div", Ku, [(B(!0), V(z, null, R(F(a), (e) => (B(), V("label", {
						key: e.id,
						class: "tw:flex tw:items-start tw:gap-2 tw:border-b tw:border-base-content/10! tw:p-2 last:tw:border-0"
					}, [I(H("input", {
						"onUpdate:modelValue": (t) => e.selected = t,
						class: "tw:dui-checkbox tw:dui-checkbox-sm",
						type: "checkbox"
					}, null, 8, qu), [[J, e.selected]]), H("span", Ju, [H("span", Yu, k(e.label), 1), H("span", Xu, k(e.packageName) + " · " + k(e.type) + " · " + k(e.visibility), 1)])]))), 128))]),
					H("div", Zu, [I(H("select", {
						"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ N(d) ? d.value = e : null,
						class: "tw:dui-select tw:dui-select-sm tw:border-base-content/25! tw:bg-base-100!"
					}, [...t[11] ||= [H("option", { value: "observer" }, "Visible to players", -1), H("option", { value: "limited" }, "Hidden from players", -1)]], 512), [[es, F(d)]]), H("button", {
						class: "tw:dui-btn tw:dui-btn-primary tw:dui-btn-sm",
						disabled: F(i) || !F(s).length,
						type: "button",
						onClick: t[5] ||= (...e) => F(n).applyVisibility && F(n).applyVisibility(...e)
					}, " Apply to " + k(F(s).length) + " pack" + k(F(s).length === 1 ? "" : "s"), 9, Qu)])
				])]),
				H("section", $u, [H("div", ed, [H("div", td, [
					t[13] ||= H("h2", { class: "tw:dui-card-title tw:font-serif tw:text-lg" }, "Player assignments", -1),
					F(l).length ? (B(), V("div", nd, [H("span", null, k(F(l).join(", ")) + " " + k(F(l).length === 1 ? "has" : "have") + " no assigned character.", 1)])) : (B(), V("p", rd, "Every player has an assigned character.")),
					H("label", id, [I(H("input", {
						"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ N(c) ? c.value = e : null,
						class: "tw:dui-toggle tw:dui-toggle-sm",
						type: "checkbox"
					}, null, 512), [[J, F(c)]]), t[12] ||= W(" Warn the GM at startup ", -1)]),
					H("button", {
						class: "tw:dui-btn tw:dui-btn-secondary tw:dui-btn-sm tw:w-fit",
						type: "button",
						onClick: t[7] ||= (...e) => F(n).savePlayerWarning && F(n).savePlayerWarning(...e)
					}, " Save preference ")
				])]), H("div", ad, [H("div", od, [t[15] ||= H("h2", { class: "tw:dui-card-title tw:font-serif tw:text-lg" }, "Utility roll", -1), H("button", {
					class: "tw:dui-btn tw:dui-btn-primary",
					disabled: F(i),
					type: "button",
					onClick: t[8] ||= (...e) => F(n).rollD100 && F(n).rollD100(...e)
				}, [...t[14] ||= [H("i", {
					class: "fa-solid fa-dice-d20",
					"aria-hidden": "true"
				}, null, -1), W(" Roll d100 ", -1)]], 8, sd)])])])
			])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
}), ld = { showUnassignedPlayerWarning: "showUnassignedPlayerWarning" };
// src/module/foundry/administration/initialization.ts
function ud() {
	let e = game, t = e.scenes.viewed;
	return {
		packs: Array.from(e.packs).filter(({ metadata: e }) => e.system === "wfrp4e").map((e) => ({
			id: e.collection,
			label: e.metadata.label || e.collection,
			packageName: e.metadata.packageName,
			selected: !1,
			type: e.metadata.type,
			visibility: e.ownership.PLAYER === "OBSERVER" ? "observer" : "limited"
		})).sort((e, t) => e.label.localeCompare(t.label)),
		...t ? { scene: {
			globalLight: t.environment.globalLight.enabled,
			id: t.id,
			name: t.name,
			tokenVision: t.tokenVision
		} } : {},
		spectators: Array.from(e.users).filter((e) => !e.isGM && e.active !== !1 && !e.character).map(({ name: e }) => e).sort(),
		showUnassignedPlayerWarning: game.settings.get(r, ld.showUnassignedPlayerWarning) === !0
	};
}
// src/module/foundry/administration/service.ts
async function dd(e) {
	X(Y.administrationConsole);
	let t = game.scenes.viewed;
	if (!t) throw Error("View a Scene before changing its lighting mode.");
	await t.update({
		"environment.globalLight.enabled": e === "global-light",
		tokenVision: e === "token-vision"
	}), ui.notifications.info(`${t.name} now uses ${e === "global-light" ? "global illumination" : "Token Vision"}.`);
}
async function fd(e, t) {
	X(Y.administrationConsole);
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
async function pd() {
	X(Y.administrationConsole);
	let e = new Roll("1d100");
	await e.evaluate(), await e.toMessage({ flavor: "d100" });
}
async function md(e) {
	X(Y.administrationConsole), await game.settings.set(r, ld.showUnassignedPlayerWarning, e), ui.notifications.info(`Unassigned-player warning ${e ? "enabled" : "disabled"}.`);
}
// src/module/apps/administration-console/view/AdministrationConsoleApplication.ts
var hd = class extends Uc {
	static ACCESS_POLICY = Y.administrationConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [r, `${r}-administration-console`],
		id: `${r}-administration-console`,
		position: {
			height: 760,
			width: 760
		},
		window: {
			icon: "fa-solid fa-screwdriver-wrench",
			resizable: !0,
			title: `${i} — Administration Console`
		}
	};
	getVueComponent() {
		return cd;
	}
	getVueProps() {
		return {
			actions: {
				rollD100: pd,
				setCompendiumVisibility: fd,
				setSceneLighting: dd,
				setUnassignedPlayerWarning: md
			},
			initialization: ud()
		};
	}
};
// src/module/apps/administration-console/view/open.ts
async function gd() {
	let e = new hd();
	return await e.render(!0), e;
}
// src/module/apps/combat-console/state/store.ts
var _d = Ks("combat-console", () => {
	let e = /* @__PURE__ */ P([]), t = /* @__PURE__ */ P(), n = /* @__PURE__ */ P(1), r = /* @__PURE__ */ P(!0), i = /* @__PURE__ */ P(!0), a = /* @__PURE__ */ P(!1), o = /* @__PURE__ */ P(""), s, c = K(() => e.value.filter((e) => e.selected).map((e) => e.uuid));
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
}), vd = { class: "tw:grid tw:gap-4" }, yd = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:m-0"
}, bd = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, xd = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, Sd = { class: "tw:grid tw:max-h-48 tw:grid-cols-2 tw:gap-2 tw:overflow-auto" }, Cd = ["onUpdate:modelValue"], wd = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, Td = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, Ed = { class: "tw:flex tw:items-center tw:gap-3" }, Dd = { class: "tw:flex tw:flex-wrap tw:gap-2" }, Od = ["disabled"], kd = ["disabled"], Ad = ["disabled"], jd = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, Md = { class: "tw:dui-card-body tw:gap-3 tw:p-4" }, Nd = { class: "tw:flex tw:items-center tw:gap-2" }, Pd = { class: "tw:flex tw:items-center tw:gap-2" }, Fd = ["disabled"], Id = {
	key: 1,
	class: "tw:dui-collapse tw:dui-collapse-arrow tw:dui-card tw:dui-card-border tw:bg-base-100!"
}, Ld = { class: "tw:dui-collapse-content tw:grid tw:gap-2" }, Rd = { class: "tw:flex tw:items-center tw:gap-2" }, zd = { class: "tw:flex tw:items-center tw:gap-2" }, Bd = { class: "tw:flex tw:items-center tw:gap-2" }, Vd = { class: "tw:flex tw:items-center tw:gap-2" }, Hd = { class: "tw:flex tw:items-center tw:gap-2" }, Ud = { class: "tw:flex tw:items-center tw:gap-2" }, Wd = { class: "tw:flex tw:items-center tw:gap-2" }, Gd = ["disabled"], Kd = /* @__PURE__ */ L({
	__name: "CombatConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = _d();
		n.initialize(t.initialization, t.actions);
		let { actors: r, amount: i, busy: a, endOfRoundOnly: o, errorMessage: s, settings: c, skipPlayerCharacters: l } = qs(n);
		return (e, t) => (B(), Ca(mc, {
			description: "Manage Advantage and resolve supported end-of-round conditions.",
			icon: "fa-solid fa-swords",
			title: "Combat Console"
		}, {
			default: ir(() => [H("div", vd, [
				F(s) ? (B(), V("p", yd, k(F(s)), 1)) : G("", !0),
				H("section", bd, [H("div", xd, [t[15] ||= H("h2", { class: "tw:dui-card-title tw:text-base" }, "Actors", -1), H("div", Sd, [(B(!0), V(z, null, R(F(r), (e) => (B(), V("label", {
					key: e.uuid,
					class: "tw:flex tw:items-center tw:gap-2"
				}, [I(H("input", {
					"onUpdate:modelValue": (t) => e.selected = t,
					class: "tw:dui-checkbox tw:dui-checkbox-sm",
					type: "checkbox"
				}, null, 8, Cd), [[J, e.selected]]), H("span", null, k(e.label), 1)]))), 128))])])]),
				H("section", wd, [H("div", Td, [
					t[17] ||= H("h2", { class: "tw:dui-card-title tw:text-base" }, "Advantage", -1),
					H("label", Ed, [t[16] ||= H("span", null, "Amount", -1), I(H("input", {
						"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ N(i) ? i.value = e : null,
						class: "tw:dui-input tw:dui-input-sm tw:w-24",
						min: "1",
						type: "number"
					}, null, 512), [[
						q,
						F(i),
						void 0,
						{ number: !0 }
					]])]),
					H("div", Dd, [
						H("button", {
							class: "tw:dui-btn tw:dui-btn-primary tw:dui-btn-sm",
							disabled: F(a),
							type: "button",
							onClick: t[1] ||= (e) => F(n).adjust("add")
						}, " Add ", 8, Od),
						H("button", {
							class: "tw:dui-btn tw:dui-btn-secondary tw:dui-btn-sm",
							disabled: F(a),
							type: "button",
							onClick: t[2] ||= (e) => F(n).adjust("reduce")
						}, " Reduce ", 8, kd),
						H("button", {
							class: "tw:dui-btn tw:dui-btn-outline tw:dui-btn-sm",
							disabled: F(a),
							type: "button",
							onClick: t[3] ||= (e) => F(n).adjust("clear")
						}, " Clear ", 8, Ad)
					])
				])]),
				H("section", jd, [H("div", Md, [
					t[20] ||= H("h2", { class: "tw:dui-card-title tw:text-base" }, "Condition checks", -1),
					t[21] ||= H("p", { class: "tw:m-0 tw:text-sm" }, " Handles Surprised, Ablaze, Poisoned, and Broken using WFRP4e operations. ", -1),
					H("label", Nd, [I(H("input", {
						"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ N(o) ? o.value = e : null,
						class: "tw:dui-checkbox tw:dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[J, F(o)]]), t[18] ||= W(" Require end of round", -1)]),
					H("label", Pd, [I(H("input", {
						"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ N(l) ? l.value = e : null,
						class: "tw:dui-checkbox tw:dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[J, F(l)]]), t[19] ||= W(" Skip assigned player characters", -1)]),
					H("button", {
						class: "tw:dui-btn tw:dui-btn-primary tw:dui-btn-sm tw:w-fit",
						disabled: F(a),
						type: "button",
						onClick: t[6] ||= (...e) => F(n).check && F(n).check(...e)
					}, " Run checks ", 8, Fd)
				])]),
				F(c) ? (B(), V("section", Id, [
					t[29] ||= H("input", { type: "checkbox" }, null, -1),
					t[30] ||= H("div", { class: "tw:dui-collapse-title tw:font-semibold" }, "Advantage automation", -1),
					H("div", Ld, [
						H("label", Rd, [I(H("input", {
							"onUpdate:modelValue": t[7] ||= (e) => F(c).automateOpposed = e,
							class: "tw:dui-toggle tw:dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[J, F(c).automateOpposed]]), t[22] ||= W(" Opposed-test winners and losers", -1)]),
						H("label", zd, [I(H("input", {
							"onUpdate:modelValue": t[8] ||= (e) => F(c).automateDamage = e,
							class: "tw:dui-toggle tw:dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[J, F(c).automateDamage]]), t[23] ||= W(" Outmanoeuvring damage", -1)]),
						H("label", Bd, [I(H("input", {
							"onUpdate:modelValue": t[9] ||= (e) => F(c).automateCondition = e,
							class: "tw:dui-toggle tw:dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[J, F(c).automateCondition]]), t[24] ||= W(" Clear on combat conditions", -1)]),
						H("label", Vd, [I(H("input", {
							"onUpdate:modelValue": t[10] ||= (e) => F(c).clearOnJoin = e,
							class: "tw:dui-toggle tw:dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[J, F(c).clearOnJoin]]), t[25] ||= W(" Clear when joining combat", -1)]),
						H("label", Hd, [I(H("input", {
							"onUpdate:modelValue": t[11] ||= (e) => F(c).clearOnLeave = e,
							class: "tw:dui-toggle tw:dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[J, F(c).clearOnLeave]]), t[26] ||= W(" Clear when leaving combat", -1)]),
						H("label", Ud, [I(H("input", {
							"onUpdate:modelValue": t[12] ||= (e) => F(c).promptMomentumLoss = e,
							class: "tw:dui-toggle tw:dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[J, F(c).promptMomentumLoss]]), t[27] ||= W(" Prompt for momentum loss each round", -1)]),
						H("label", Wd, [I(H("input", {
							"onUpdate:modelValue": t[13] ||= (e) => F(c).persistentNotifications = e,
							class: "tw:dui-toggle tw:dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[J, F(c).persistentNotifications]]), t[28] ||= W(" Keep automation notifications visible", -1)]),
						H("button", {
							class: "tw:dui-btn tw:dui-btn-secondary tw:dui-btn-sm tw:w-fit",
							disabled: F(a),
							type: "button",
							onClick: t[14] ||= (...e) => F(n).save && F(n).save(...e)
						}, " Save automation ", 8, Gd)
					])
				])) : G("", !0)
			])]),
			_: 1
		}));
	}
});
// src/module/functions/actors/selection.ts
function qd(e) {
	let t = new Set(e.targeted.map(({ actor: e }) => e.id)), n = new Set(e.controlled.map(({ actor: e }) => e.id)), r = e.actors.filter((t) => Yd(t, e.includeVehicles)).map((r) => ({
		actorType: r.actorType,
		label: r.label,
		selected: Xd(r.id, r.hasPlayerOwner, e.initial, e.assignedActorIds, n, t),
		source: e.assignedActorIds.has(r.id) ? "assigned" : r.hasPlayerOwner ? "owned" : "world",
		uuid: r.uuid
	}));
	return Jd(r, e.targeted, "targeted", e), Jd(r, e.controlled, "controlled", e), r.sort((e, t) => e.label.localeCompare(t.label));
}
function Jd(e, t, n, r) {
	for (let i of t) {
		if (!Yd(i.actor, r.includeVehicles)) continue;
		let t = e.find((e) => e.uuid === i.actor.uuid || e.uuid === i.tokenUuid);
		t ? n === r.initial && (t.selected = !0) : e.push({
			actorType: i.actor.actorType,
			label: i.actor.label,
			selected: n === r.initial,
			source: n,
			uuid: i.tokenUuid
		});
	}
}
function Yd(e, t) {
	return e.actorType === "character" || e.actorType === "creature" || t && e.actorType === "vehicle";
}
function Xd(e, t, n, r, i, a) {
	return n === "party" ? r.has(e) : n === "company" ? r.has(e) || t : n === "controlled" ? i.has(e) : a.has(e);
}
// src/module/foundry/actors/selection.ts
function Zd(e = {}) {
	let t = e.initial ?? "targeted", n = Array.from(game.actors), r = new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => !!e)), i = $d("targeted"), a = $d("controlled");
	return qd({
		actors: n.map(ef),
		assignedActorIds: r,
		controlled: a.flatMap(tf),
		includeVehicles: e.includeVehicles === !0,
		initial: t,
		targeted: i.flatMap(tf)
	});
}
async function Qd(e) {
	let t = [];
	for (let n of [...new Set(e)]) {
		let e = await fromUuid(n), r = e && "actor" in e ? e.actor : e;
		r && "documentName" in r && r.documentName === "Actor" && t.push(r);
	}
	return t;
}
function $d(e) {
	let t = canvas;
	return e === "controlled" ? t?.tokens?.controlled ?? [] : Array.from(game.user?.targets ?? /* @__PURE__ */ new Set());
}
function ef(e) {
	return {
		actorType: e.type,
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		label: e.name,
		uuid: e.uuid
	};
}
function tf(e) {
	return e.actor ? [{
		actor: ef(e.actor),
		tokenUuid: e.document.uuid
	}] : [];
}
// src/module/foundry/combat/advantage.ts
async function nf(e) {
	if (X(Y.combatConsole), e.uuids.length === 0) throw Error("Select at least one actor.");
	if (!Number.isFinite(e.amount)) throw Error("Enter a valid Advantage amount.");
	let t = Math.max(1, Math.round(Math.abs(e.amount))), n = await Qd(e.uuids), r = n.filter((e) => e.inCombat !== !0);
	if (e.mode !== "clear" && r.length > 0) throw Error(`Advantage can only be added or reduced in combat: ${r.map(({ name: e }) => e).join(", ")}.`);
	for (let r of n) e.mode === "clear" ? await af(r, 0) : e.mode === "add" ? await rf(r, t) : await rf(r, -t);
	ui.notifications.info(`Updated Advantage for ${n.length} actor${n.length === 1 ? "" : "s"}.`);
}
async function rf(e, t) {
	if (typeof e.addAdvantage != "function") throw Error(`${e.name} does not expose WFRP4e Advantage controls.`);
	await e.addAdvantage(t);
}
async function af(e, t) {
	let n = Math.max(0, Math.round(t));
	if (typeof e.setAdvantage != "function") throw Error(`${e.name} does not expose WFRP4e Advantage controls.`);
	await e.setAdvantage(n);
}
function of(e) {
	if (!e || typeof e != "object") return;
	let t = e;
	return t.documentName === "Actor" ? t : void 0;
}
// src/module/foundry/combat/conditions.ts
async function sf(e) {
	if (X(Y.combatConsole), e.endOfRoundOnly && !uf()) throw Error("Condition checks can only run at the end of the active combat round.");
	let t = await Qd(e.uuids), n = new Set(Array.from(game.users).map((e) => e.character?.id)), r = 0;
	for (let i of t) if (!(e.skipPlayerCharacters && n.has(i.id))) for (let e of Array.from(i.statuses ?? [])) await cf(i, e) && (r += 1);
	ui.notifications.info(`Processed ${r} supported condition check${r === 1 ? "" : "s"}.`);
}
async function cf(e, t) {
	let n = Math.max(1, Number(e.hasCondition(t)?.conditionValue ?? 1));
	if (t === "surprised") return await e.removeCondition(t), !0;
	if (t === "ablaze") {
		let t = await new Roll(`1d10 + ${n} - 1`).evaluate();
		return await e.applyBasicDamage(Number(t.total ?? n), {}), !0;
	}
	if (e.type === "vehicle" || !["broken", "poisoned"].includes(t)) return !1;
	let r = await (await lf(e, t === "broken" ? game.i18n.localize("NAME.Cool") : game.i18n.localize("NAME.Endurance"), t === "broken" ? "wp" : "t")).roll();
	if (r.succeeded) {
		let i = Math.min(n, Math.max(1, Number(r.result?.SL ?? 0) + 1));
		await e.removeCondition(t, i);
	}
	return !0;
}
async function lf(e, t, n) {
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
function uf() {
	let e = game.combat;
	return !!(e?.active && Number(e.round) > 0 && Number(e.current?.turn) === (e.turns?.length ?? 0) - 1);
}
// src/module/foundry/combat/settings/keys.ts
var df = {
	automateCondition: "advantageAutomateCondition",
	automateDamage: "advantageAutomateDamage",
	automateOpposed: "advantageAutomateOpposed",
	clearOnJoin: "advantageClearOnJoin",
	clearOnLeave: "advantageClearOnLeave",
	promptMomentumLoss: "advantagePromptMomentumLoss",
	persistentNotifications: "advantagePersistentNotifications"
};
// src/module/foundry/combat/settings/load.ts
function ff() {
	return {
		automateCondition: mf(df.automateCondition),
		automateDamage: mf(df.automateDamage),
		automateOpposed: mf(df.automateOpposed),
		clearOnJoin: mf(df.clearOnJoin),
		clearOnLeave: mf(df.clearOnLeave),
		promptMomentumLoss: mf(df.promptMomentumLoss),
		persistentNotifications: mf(df.persistentNotifications)
	};
}
async function pf(e) {
	for (let [t, n] of Object.entries(e)) await game.settings.set(r, df[t], n);
}
function mf(e) {
	return game.settings.get(r, e) === !0;
}
// src/module/foundry/combat/initialization.ts
function hf() {
	return {
		actors: Zd({
			includeVehicles: !0,
			initial: "controlled"
		}),
		settings: ff()
	};
}
// src/module/apps/combat-console/view/CombatConsoleApplication.ts
var gf = class extends Uc {
	static ACCESS_POLICY = Y.combatConsole;
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
			title: `${i} — Combat Console`
		}
	};
	getVueComponent() {
		return Kd;
	}
	getVueProps() {
		return {
			actions: {
				adjustAdvantage: nf,
				checkConditions: sf,
				saveSettings: pf
			},
			initialization: hf()
		};
	}
};
// src/module/apps/combat-console/view/open.ts
async function _f() {
	let e = new gf();
	return await e.render(!0), e;
}
// src/module/apps/damage-console/state/store.ts
var vf = Ks("damage-console", () => {
	let e = /* @__PURE__ */ P([]), t = /* @__PURE__ */ P([]), n = /* @__PURE__ */ P("1d10"), r = /* @__PURE__ */ P("body"), i = /* @__PURE__ */ P(!0), a = /* @__PURE__ */ P("normal"), o = /* @__PURE__ */ P(!0), s = /* @__PURE__ */ P(!1), c = /* @__PURE__ */ P(!1), l = /* @__PURE__ */ P(""), u, d = K(() => e.value.filter((e) => e.selected).map((e) => e.uuid));
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
}), yf = { class: "tw:grid tw:gap-4" }, bf = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, xf = { class: "tw:dui-card-body tw:p-4" }, Sf = { class: "tw:grid tw:max-h-52 tw:grid-cols-2 tw:gap-2 tw:overflow-auto" }, Cf = ["onUpdate:modelValue"], wf = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, Tf = { class: "tw:dui-card-body tw:grid tw:gap-3 tw:p-4" }, Ef = { class: "tw:grid tw:gap-1" }, Df = { class: "tw:flex tw:items-center tw:gap-2" }, Of = { class: "tw:grid tw:gap-1" }, kf = ["value"], Af = { class: "tw:flex tw:items-center tw:gap-2" }, jf = { class: "tw:grid tw:gap-1" }, Mf = { class: "tw:flex tw:items-center tw:gap-2" }, Nf = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:m-0"
}, Pf = ["disabled"], Ff = /* @__PURE__ */ L({
	__name: "DamageConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = vf();
		n.initialize(t.initialization, t.actions);
		let { actors: r, busy: i, errorMessage: a, formula: o, hitLocation: s, hitLocations: c, minimumOne: l, protection: u, randomizeDamage: d, randomizeHitLocation: f } = qs(n);
		return (e, t) => (B(), Ca(mc, {
			description: "Apply WFRP4e damage to several actors at once.",
			icon: "fa-solid fa-bolt",
			title: "Damage Console"
		}, {
			default: ir(() => [H("div", yf, [H("section", bf, [H("div", xf, [t[7] ||= H("h2", { class: "tw:dui-card-title tw:text-base" }, "Recipients", -1), H("div", Sf, [(B(!0), V(z, null, R(F(r), (e) => (B(), V("label", {
				key: e.uuid,
				class: "tw:flex tw:items-center tw:gap-2"
			}, [I(H("input", {
				"onUpdate:modelValue": (t) => e.selected = t,
				class: "tw:dui-checkbox tw:dui-checkbox-sm",
				type: "checkbox"
			}, null, 8, Cf), [[J, e.selected]]), W(k(e.label), 1)]))), 128))])])]), H("section", wf, [H("div", Tf, [
				H("label", Ef, [t[8] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Damage amount or formula", -1), I(H("input", {
					"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ N(o) ? o.value = e : null,
					class: "tw:dui-input"
				}, null, 512), [[q, F(o)]])]),
				H("label", Df, [I(H("input", {
					"onUpdate:modelValue": t[1] ||= (e) => /* @__PURE__ */ N(d) ? d.value = e : null,
					class: "tw:dui-checkbox tw:dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[J, F(d)]]), t[9] ||= W(" Roll separately for each actor", -1)]),
				H("label", Of, [t[11] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Hit location", -1), I(H("select", {
					"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ N(s) ? s.value = e : null,
					class: "tw:dui-select"
				}, [t[10] ||= H("option", { value: "roll" }, "Roll", -1), (B(!0), V(z, null, R(F(c), (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, kf))), 128))], 512), [[es, F(s)]])]),
				H("label", Af, [I(H("input", {
					"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ N(f) ? f.value = e : null,
					class: "tw:dui-checkbox tw:dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[J, F(f)]]), t[12] ||= W(" Roll separately for each actor", -1)]),
				H("label", jf, [t[14] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Protection", -1), I(H("select", {
					"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ N(u) ? u.value = e : null,
					class: "tw:dui-select"
				}, [...t[13] ||= [
					H("option", { value: "normal" }, "Armour and Toughness", -1),
					H("option", { value: "ignore-armour" }, "Ignore armour", -1),
					H("option", { value: "ignore-toughness" }, "Ignore Toughness", -1),
					H("option", { value: "ignore-all" }, "Ignore both", -1)
				]], 512), [[es, F(u)]])]),
				H("label", Mf, [I(H("input", {
					"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ N(l) ? l.value = e : null,
					class: "tw:dui-checkbox tw:dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[J, F(l)]]), t[15] ||= W(" Inflict at least 1 Wound", -1)]),
				F(a) ? (B(), V("p", Nf, k(F(a)), 1)) : G("", !0),
				H("button", {
					class: "tw:dui-btn tw:dui-btn-primary",
					disabled: F(i),
					type: "button",
					onClick: t[6] ||= (...e) => F(n).apply && F(n).apply(...e)
				}, " Apply damage ", 8, Pf)
			])])])]),
			_: 1
		}));
	}
});
// src/module/foundry/damage/initialization.ts
function If() {
	let e = game.wfrp4e.config.locations ?? {};
	return {
		actors: Zd({
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
// src/module/functions/damage/plan.ts
function Lf(e) {
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
function Rf(e, t) {
	let n = Number(e);
	if (!Number.isFinite(n)) throw Error(`Could not evaluate damage formula “${t}”.`);
	let r = Math.round(n);
	if (r < 0) throw Error("Damage cannot be negative.");
	return r;
}
function zf(e, t) {
	return e === "roll" ? t || "body" : e || "body";
}
function Bf(e) {
	return {
		"ignore-all": "IGNORE_ALL",
		"ignore-armour": "IGNORE_AP",
		"ignore-toughness": "IGNORE_TB",
		normal: "NORMAL"
	}[e];
}
function Vf(e) {
	if (e.message) return e.message;
	let t = Uf(e.actorName);
	return e.error ? `<p><strong>${t}</strong>: failed — ${Uf(e.error)}</p>` : `<p><strong>${t}</strong>: ${e.damage ?? 0} damage applied.</p>`;
}
function Hf(e, t) {
	return `Damage was applied to ${e} actor${e === 1 ? "" : "s"}; ${t} failed. See the private chat summary.`;
}
function Uf(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
// src/module/foundry/damage/service.ts
async function Wf(e) {
	X(Y.damageConsole);
	let t = Lf(e), n = await Qd(t.uuids);
	if (n.length === 0) throw Error("None of the selected actors are available.");
	let r = t.rollDamagePerActor ? void 0 : await Gf(t.formula), i = t.rollLocationPerActor ? void 0 : zf(t.location, await Kf(t.location)), a = [], o = [];
	for (let s of n) try {
		let n = r ?? await Gf(t.formula), o = i ?? await qf(s), c = await s.applyBasicDamage(n, {
			damageType: Yf(e.protection),
			loc: o,
			minimumOne: e.minimumOne,
			suppressMsg: !0
		});
		a.push(typeof c == "string" ? c : Vf({
			actorName: s.name,
			damage: n
		}));
	} catch (e) {
		let t = e instanceof Error ? e.message : "unknown error";
		o.push(Vf({
			actorName: s.name,
			error: t
		}));
	}
	let s = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id);
	if (await ChatMessage.create({
		content: [...a, ...o].join("<hr>"),
		whisper: s
	}), o.length > 0) throw Error(Hf(a.length, o.length));
}
async function Gf(e) {
	return Rf((await new Roll(e).evaluate()).total, e);
}
async function Kf(e) {
	return e === "roll" ? Jf("hitloc") : void 0;
}
async function qf(e) {
	return Jf(e.system.details?.hitLocationTable?.value ?? "hitloc");
}
async function Jf(e) {
	let t = await game.wfrp4e.tables.rollTable(e, { hideDSN: !0 });
	return String(t.result ?? "body");
}
function Yf(e) {
	return game.wfrp4e.config.DAMAGE_TYPE[Bf(e)];
}
// src/module/apps/damage-console/view/DamageConsoleApplication.ts
var Xf = class extends Uc {
	static ACCESS_POLICY = Y.damageConsole;
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
			title: `${i} — Damage Console`
		}
	};
	getVueComponent() {
		return Ff;
	}
	getVueProps() {
		return {
			actions: { applyDamage: Wf },
			initialization: If()
		};
	}
};
// src/module/apps/damage-console/view/open.ts
async function Zf() {
	let e = new Xf();
	return await e.render(!0), e;
}
// src/module/apps/dark-whispers-console/state/store.ts
var Qf = Ks("dark-whispers-console", () => {
	let e = /* @__PURE__ */ P([]), t = /* @__PURE__ */ P([]), n = /* @__PURE__ */ P(), r = /* @__PURE__ */ P(""), i = /* @__PURE__ */ P(!1), a = /* @__PURE__ */ P(!1), o = /* @__PURE__ */ P(""), s, c = K(() => t.value.filter((e) => e.corruption > 0));
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
}), $f = {
	key: 0,
	class: "tw:grid tw:gap-4"
}, ep = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, tp = { class: "tw:dui-card-body tw:p-4" }, np = { class: "tw:grid tw:gap-2" }, rp = ["onUpdate:modelValue"], ip = { class: "tw:flex-1" }, ap = { class: "tw:block" }, op = { class: "tw:flex tw:items-center tw:gap-2" }, sp = { class: "tw:grid tw:gap-1" }, cp = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, lp = { class: "tw:dui-card-body tw:grid tw:gap-3 tw:p-4" }, up = { class: "tw:grid tw:gap-1" }, dp = { class: "tw:grid tw:gap-1" }, fp = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:m-0"
}, pp = ["disabled"], mp = { class: "tw:dui-collapse tw:dui-collapse-arrow tw:dui-card tw:dui-card-border tw:bg-base-100!" }, hp = { class: "tw:dui-collapse-content tw:grid tw:gap-2" }, gp = ["onUpdate:modelValue"], _p = ["onClick"], vp = { class: "tw:flex tw:gap-2" }, yp = ["disabled"], bp = /* @__PURE__ */ L({
	__name: "DarkWhispersConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Qf();
		n.initialize(t.initialization, t.actions);
		let { busy: r, eligibleRecipients: i, errorMessage: a, message: o, prompts: s, sendToOwners: c, settings: l } = qs(n);
		return (e, t) => (B(), Ca(mc, {
			description: "Send a private temptation to characters with Corruption.",
			icon: "fa-solid fa-comment-dots",
			title: "Dark Whispers"
		}, {
			default: ir(() => [F(l) ? (B(), V("div", $f, [
				H("section", ep, [H("div", tp, [
					t[11] ||= H("h2", { class: "tw:dui-card-title tw:text-base" }, "Recipients", -1),
					H("div", np, [(B(!0), V(z, null, R(F(i), (e) => (B(), V("label", {
						key: e.uuid,
						class: "tw:flex tw:items-center tw:gap-2"
					}, [I(H("input", {
						"onUpdate:modelValue": (t) => e.selected = t,
						class: "tw:dui-checkbox tw:dui-checkbox-sm",
						type: "checkbox"
					}, null, 8, rp), [[J, e.selected]]), H("span", ip, [H("strong", null, k(e.label), 1), H("small", ap, k(e.assignedUser || "Not assigned") + " · " + k(e.ownerCount) + " owner" + k(e.ownerCount === 1 ? "" : "s") + " · Corruption " + k(e.corruption) + " / " + k(e.corruptionMax), 1)])]))), 128))]),
					H("label", op, [I(H("input", {
						"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ N(c) ? c.value = e : null,
						class: "tw:dui-toggle tw:dui-toggle-sm",
						type: "checkbox"
					}, null, 512), [[J, F(c)]]), t[8] ||= W(" Send to all owners instead of only the assigned player", -1)]),
					H("label", sp, [t[10] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Initial recipient group", -1), I(H("select", {
						"onUpdate:modelValue": t[1] ||= (e) => F(l).defaultGroup = e,
						class: "tw:dui-select tw:dui-select-sm"
					}, [...t[9] ||= [H("option", { value: "party" }, "Assigned party", -1), H("option", { value: "company" }, "All player-owned characters", -1)]], 512), [[es, F(l).defaultGroup]])])
				])]),
				H("section", cp, [H("div", lp, [
					H("label", up, [t[12] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Whisper", -1), I(H("textarea", {
						"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ N(o) ? o.value = e : null,
						class: "tw:dui-textarea",
						rows: "5"
					}, null, 512), [[q, F(o)]])]),
					H("button", {
						class: "tw:dui-btn tw:dui-btn-outline tw:dui-btn-sm tw:w-fit",
						type: "button",
						onClick: t[3] ||= (...e) => F(n).chooseRandom && F(n).chooseRandom(...e)
					}, " Choose another prompt"),
					H("label", dp, [t[14] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Presentation", -1), I(H("select", {
						"onUpdate:modelValue": t[4] ||= (e) => F(l).messageStyle = e,
						class: "tw:dui-select tw:dui-select-sm"
					}, [...t[13] ||= [
						H("option", { value: "taunt" }, "Taunting whisper", -1),
						H("option", { value: "offer" }, "Tempting offer", -1),
						H("option", { value: "plain" }, "Plain message", -1)
					]], 512), [[es, F(l).messageStyle]])]),
					F(a) ? (B(), V("p", fp, k(F(a)), 1)) : G("", !0),
					H("button", {
						class: "tw:dui-btn tw:dui-btn-primary",
						disabled: F(r),
						type: "button",
						onClick: t[5] ||= (...e) => F(n).send && F(n).send(...e)
					}, " Send Dark Whisper ", 8, pp)
				])]),
				H("section", mp, [
					t[16] ||= H("input", { type: "checkbox" }, null, -1),
					t[17] ||= H("div", { class: "tw:dui-collapse-title tw:font-semibold" }, "Prompt library", -1),
					H("div", hp, [(B(!0), V(z, null, R(F(s), (e) => (B(), V("div", {
						key: e.id,
						class: "tw:flex tw:gap-2"
					}, [I(H("textarea", {
						"onUpdate:modelValue": (t) => e.text = t,
						class: "tw:dui-textarea tw:flex-1",
						rows: "2"
					}, null, 8, gp), [[q, e.text]]), H("button", {
						class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm",
						type: "button",
						onClick: (t) => F(n).removePrompt(e.id)
					}, [...t[15] ||= [H("i", { class: "fa-solid fa-trash" }, null, -1)]], 8, _p)]))), 128)), H("div", vp, [H("button", {
						class: "tw:dui-btn tw:dui-btn-outline tw:dui-btn-sm",
						type: "button",
						onClick: t[6] ||= (...e) => F(n).addPrompt && F(n).addPrompt(...e)
					}, " Add prompt"), H("button", {
						class: "tw:dui-btn tw:dui-btn-secondary tw:dui-btn-sm",
						disabled: F(r),
						type: "button",
						onClick: t[7] ||= (...e) => F(n).save && F(n).save(...e)
					}, " Save library ", 8, yp)])])
				])
			])) : G("", !0)]),
			_: 1
		}));
	}
});
// src/module/functions/dark-whispers/recipients.ts
function xp(e) {
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
// src/module/functions/records/parse.ts
function Sp(e) {
	if (typeof e != "string") return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : t.toISOString();
}
function Q(e) {
	return typeof e == "string" ? e : "";
}
function $(e) {
	return typeof e == "object" && !!e;
}
// src/types/dark-whispers/PromptLibrary.ts
var Cp = {
	prompts: [],
	version: 1
};
// src/module/functions/dark-whispers/library.ts
function wp(e) {
	return typeof e == "string" ? e.replace(/\r\n?/g, "\n").replace(/[\t ]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
}
function Tp(e) {
	if (typeof e != "string") return Ep("The Dark Whispers prompt library setting was not serialized text.");
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return Ep("The Dark Whispers prompt library contains invalid JSON.");
	}
	if (!$(t) || t.version !== 1 || !Array.isArray(t.prompts)) return Ep("The Dark Whispers prompt library has an unsupported schema.");
	let n = [];
	return {
		library: {
			prompts: t.prompts.flatMap((e, t) => {
				let r = Dp(e);
				return r ? [r] : (n.push(`Dark Whispers prompt ${t + 1} was invalid and was skipped.`), []);
			}),
			version: 1
		},
		warnings: n
	};
}
function Ep(e) {
	return {
		library: {
			...Cp,
			prompts: []
		},
		warnings: [e]
	};
}
function Dp(e) {
	if (!$(e)) return;
	let t = Q(e.id), n = wp(e.text);
	if (t && n) return {
		id: t,
		text: n
	};
}
// src/module/foundry/dark-whispers/settings/keys.ts
var Op = {
	defaultGroup: "darkWhispersDefaultGroup",
	messageStyle: "darkWhispersMessageStyle",
	promptLibrary: "darkWhispersPromptLibrary"
};
// src/module/foundry/dark-whispers/settings/load.ts
function kp() {
	return Tp(game.settings.get(r, Op.promptLibrary));
}
function Ap() {
	let e = kp();
	for (let t of e.warnings) console.warn(`${r} | ${t}`);
	return e.library;
}
async function jp(e) {
	await game.settings.set(r, Op.promptLibrary, JSON.stringify(e));
}
function Mp() {
	let e = game.settings.get(r, Op.defaultGroup), t = game.settings.get(r, Op.messageStyle);
	return {
		defaultGroup: e === "company" ? "company" : "party",
		messageStyle: t === "offer" || t === "plain" ? t : "taunt"
	};
}
async function Np(e) {
	await game.settings.set(r, Op.defaultGroup, e.defaultGroup), await game.settings.set(r, Op.messageStyle, e.messageStyle);
}
// src/module/foundry/dark-whispers/initialization.ts
function Pp() {
	let e = Mp(), t = xp({
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
		prompts: structuredClone(Ap().prompts),
		recipients: t,
		settings: e
	};
}
// src/module/foundry/dark-whispers/service.ts
var Fp = {
	save: Ip,
	send: Lp
};
async function Ip(e, t) {
	X(Y.darkWhispersConsole);
	let n = Ap(), r = e.flatMap((e) => {
		let t = e.text.trim();
		return t ? [{
			...e,
			id: e.id || crypto.randomUUID(),
			text: t
		}] : [];
	});
	await jp({
		...n,
		prompts: r
	}), await Np(t), ui.notifications.info("Dark Whispers settings saved.");
}
async function Lp(e) {
	X(Y.darkWhispersConsole);
	let t = e.message.trim();
	if (!t) throw Error("Enter a Dark Whisper message.");
	let n = await Qd(e.recipientUuids), i = /* @__PURE__ */ new Set();
	for (let t of n) {
		let n = Array.from(game.users).filter((e) => !e.isGM);
		if (e.sendToOwners) n.filter((e) => Number(t.ownership?.[e.id] ?? 0) >= 3).forEach((e) => i.add(e.id));
		else {
			let e = n.find((e) => e.character?.id === t.id);
			e && i.add(e.id);
		}
	}
	if (i.size === 0) throw Error("The selected characters have no eligible player recipients.");
	let a = Vp(foundry.utils.escapeHTML(t), Mp().messageStyle) + `<div class="drowsy-dark-whisper-actions" data-prompt="${encodeURIComponent(t)}"><button type="button" data-action="accept">Accept</button><button type="button" data-action="reject">Reject</button></div>`;
	await ChatMessage.create({
		content: a,
		flags: { [r]: { darkWhisper: !0 } },
		flavor: n.map((e) => e.name).join(", "),
		whisper: [...i]
	});
}
function Rp() {
	Hooks.on("renderChatMessageHTML", (e, t) => zp(t));
}
function zp(e) {
	let t = e instanceof HTMLElement ? e : e?.[0];
	if (t instanceof HTMLElement) for (let e of t.querySelectorAll(".drowsy-dark-whisper-actions button")) e.addEventListener("click", (t) => {
		t.preventDefault(), Bp(e);
	});
}
async function Bp(e) {
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
function Vp(e, t) {
	return t === "plain" ? `<blockquote>${e}</blockquote>` : t === "offer" ? `<p>A dark power offers you this bargain:</p><blockquote>${e}</blockquote>` : `<p>A dark whisper claws at the edge of your thoughts:</p><blockquote>${e}</blockquote>`;
}
// src/module/apps/dark-whispers-console/view/DarkWhispersConsoleApplication.ts
var Hp = class extends Uc {
	static ACCESS_POLICY = Y.darkWhispersConsole;
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
			title: `${i} — Dark Whispers`
		}
	};
	getVueComponent() {
		return bp;
	}
	getVueProps() {
		return {
			actions: Fp,
			initialization: Pp()
		};
	}
};
// src/module/apps/dark-whispers-console/view/open.ts
async function Up() {
	let e = new Hp();
	return await e.render(!0), e;
}
// src/module/apps/group-test-console/state/store.ts
var Wp = Ks("group-test-console", () => {
	let e = /* @__PURE__ */ P([]), t = /* @__PURE__ */ P(), n = /* @__PURE__ */ P([]), r = /* @__PURE__ */ P(""), i = /* @__PURE__ */ P(!1), a = /* @__PURE__ */ P(""), o, s = K(() => e.value.filter((e) => e.selected).map((e) => e.uuid));
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
}), Gp = {
	key: 0,
	class: "tw:grid tw:gap-4"
}, Kp = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, qp = { class: "tw:dui-card-body tw:p-4" }, Jp = { class: "tw:grid tw:max-h-52 tw:grid-cols-2 tw:gap-2 tw:overflow-auto" }, Yp = ["onUpdate:modelValue"], Xp = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, Zp = { class: "tw:dui-card-body tw:grid tw:gap-3 tw:p-4" }, Qp = { class: "tw:grid tw:gap-1" }, $p = { id: "drowsy-group-skills" }, em = ["value"], tm = { class: "tw:flex tw:flex-wrap tw:gap-2" }, nm = ["disabled", "onClick"], rm = { class: "tw:grid tw:grid-cols-2 tw:gap-3" }, im = { class: "tw:grid tw:gap-1" }, am = ["value"], om = { class: "tw:grid tw:gap-1" }, sm = { class: "tw:grid tw:gap-1" }, cm = { class: "tw:flex tw:items-center tw:gap-2" }, lm = { class: "tw:flex tw:items-center tw:gap-2" }, um = { class: "tw:grid tw:gap-1" }, dm = { class: "tw:grid tw:grid-cols-2 tw:gap-3" }, fm = { class: "tw:grid tw:gap-1" }, pm = { class: "tw:grid tw:gap-1" }, mm = { class: "tw:grid tw:grid-cols-2 tw:gap-2" }, hm = { class: "tw:text-sm tw:font-medium" }, gm = ["onUpdate:modelValue"], _m = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:m-0"
}, vm = { class: "tw:flex tw:gap-2" }, ym = ["disabled"], bm = ["disabled"], xm = /* @__PURE__ */ L({
	__name: "GroupTestConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Wp();
		n.initialize(t.initialization, t.actions);
		let { actors: r, busy: i, errorMessage: a, settings: o, skill: s, skills: c } = qs(n);
		return (e, t) => (B(), Ca(mc, {
			description: "Run private WFRP4e tests for a group of actors.",
			icon: "fa-solid fa-dice-d100",
			title: "Secret Group Tests"
		}, {
			default: ir(() => [F(o) ? (B(), V("div", Gp, [H("section", Kp, [H("div", qp, [t[11] ||= H("h2", { class: "tw:dui-card-title tw:text-base" }, "Actors", -1), H("div", Jp, [(B(!0), V(z, null, R(F(r), (e) => (B(), V("label", {
				key: e.uuid,
				class: "tw:flex tw:items-center tw:gap-2"
			}, [I(H("input", {
				"onUpdate:modelValue": (t) => e.selected = t,
				class: "tw:dui-checkbox tw:dui-checkbox-sm",
				type: "checkbox"
			}, null, 8, Yp), [[J, e.selected]]), W(k(e.label), 1)]))), 128))])])]), H("section", Xp, [H("div", Zp, [
				H("label", Qp, [t[12] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Skill", -1), I(H("input", {
					"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ N(s) ? s.value = e : null,
					class: "tw:dui-input",
					list: "drowsy-group-skills"
				}, null, 512), [[q, F(s)]])]),
				H("datalist", $p, [(B(!0), V(z, null, R(F(c), (e) => (B(), V("option", {
					key: e,
					value: e
				}, null, 8, em))), 128))]),
				H("div", tm, [(B(!0), V(z, null, R(F(o).quickTests, (e) => (B(), V("button", {
					key: e,
					class: "tw:dui-btn tw:dui-btn-outline tw:dui-btn-sm",
					disabled: F(i),
					type: "button",
					onClick: (t) => F(n).run(e)
				}, k(e), 9, nm))), 128))]),
				H("div", rm, [
					H("label", im, [t[13] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Difficulty", -1), I(H("select", {
						"onUpdate:modelValue": t[1] ||= (e) => F(o).defaultDifficulty = e,
						class: "tw:dui-select tw:dui-select-sm"
					}, [(B(), V(z, null, R([
						"veasy",
						"easy",
						"average",
						"challenging",
						"difficult",
						"hard",
						"vhard",
						"futile",
						"impossible"
					], (e) => H("option", {
						key: e,
						value: e
					}, k(e), 9, am)), 64))], 512), [[es, F(o).defaultDifficulty]])]),
					H("label", om, [t[14] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Modifier", -1), I(H("input", {
						"onUpdate:modelValue": t[2] ||= (e) => F(o).defaultModifier = e,
						class: "tw:dui-input tw:dui-input-sm",
						type: "number"
					}, null, 512), [[
						q,
						F(o).defaultModifier,
						void 0,
						{ number: !0 }
					]])]),
					H("label", sm, [t[16] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Roll mode", -1), I(H("select", {
						"onUpdate:modelValue": t[3] ||= (e) => F(o).defaultRollMode = e,
						class: "tw:dui-select tw:dui-select-sm"
					}, [...t[15] ||= [
						H("option", { value: "blindroll" }, "Blind", -1),
						H("option", { value: "gmroll" }, "Private GM", -1),
						H("option", { value: "selfroll" }, "Self", -1),
						H("option", { value: "publicroll" }, "Public", -1)
					]], 512), [[es, F(o).defaultRollMode]])])
				]),
				H("label", cm, [I(H("input", {
					"onUpdate:modelValue": t[4] ||= (e) => F(o).bypassDialog = e,
					class: "tw:dui-toggle tw:dui-toggle-sm",
					type: "checkbox"
				}, null, 512), [[J, F(o).bypassDialog]]), t[17] ||= W(" Bypass each roll dialog", -1)]),
				H("label", lm, [I(H("input", {
					"onUpdate:modelValue": t[5] ||= (e) => F(o).fallbackAdvanced = e,
					class: "tw:dui-toggle tw:dui-toggle-sm",
					type: "checkbox"
				}, null, 512), [[J, F(o).fallbackAdvanced]]), t[18] ||= W(" Fall back to the characteristic for missing advanced skills", -1)]),
				H("label", um, [t[19] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Fallback difficulty steps", -1), I(H("input", {
					"onUpdate:modelValue": t[6] ||= (e) => F(o).fallbackDifficultySteps = e,
					class: "tw:dui-input tw:dui-input-sm tw:w-24",
					type: "number"
				}, null, 512), [[
					q,
					F(o).fallbackDifficultySteps,
					void 0,
					{ number: !0 }
				]])]),
				t[24] ||= H("div", { class: "tw:dui-divider tw:my-0" }, "Saved defaults", -1),
				H("div", dm, [H("label", fm, [t[21] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Initial actor group", -1), I(H("select", {
					"onUpdate:modelValue": t[7] ||= (e) => F(o).defaultGroup = e,
					class: "tw:dui-select tw:dui-select-sm"
				}, [...t[20] ||= [H("option", { value: "party" }, "Assigned party", -1), H("option", { value: "company" }, "All player-owned characters", -1)]], 512), [[es, F(o).defaultGroup]])]), H("label", pm, [
					t[22] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Summary at", -1),
					I(H("input", {
						"onUpdate:modelValue": t[8] ||= (e) => F(o).summaryThreshold = e,
						class: "tw:dui-input tw:dui-input-sm",
						min: "0",
						type: "number"
					}, null, 512), [[
						q,
						F(o).summaryThreshold,
						void 0,
						{ number: !0 }
					]]),
					t[23] ||= H("span", { class: "tw:text-xs tw:text-base-content/60!" }, "0 disables the summary", -1)
				])]),
				H("div", mm, [(B(!0), V(z, null, R(F(o).quickTests, (e, t) => (B(), V("label", {
					key: t,
					class: "tw:grid tw:gap-1"
				}, [H("span", hm, "Quick test " + k(t + 1), 1), I(H("input", {
					"onUpdate:modelValue": (e) => F(o).quickTests[t] = e,
					class: "tw:dui-input tw:dui-input-sm"
				}, null, 8, gm), [[q, F(o).quickTests[t]]])]))), 128))]),
				F(a) ? (B(), V("p", _m, k(F(a)), 1)) : G("", !0),
				H("div", vm, [H("button", {
					class: "tw:dui-btn tw:dui-btn-primary",
					disabled: F(i),
					type: "button",
					onClick: t[9] ||= (e) => F(n).run()
				}, " Run group test", 8, ym), H("button", {
					class: "tw:dui-btn tw:dui-btn-secondary",
					disabled: F(i),
					type: "button",
					onClick: t[10] ||= (...e) => F(n).save && F(n).save(...e)
				}, " Save defaults ", 8, bm)])
			])])])) : G("", !0)]),
			_: 1
		}));
	}
}), Sm = {
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
// src/module/foundry/group-test/settings/load.ts
function Cm() {
	return {
		bypassDialog: Tm("bypassDialog"),
		defaultDifficulty: Dm("defaultDifficulty"),
		defaultGroup: Dm("defaultGroup") === "company" ? "company" : "party",
		defaultModifier: Em("defaultModifier"),
		defaultRollMode: Dm("defaultRollMode"),
		defaultSkill: Dm("defaultSkill"),
		fallbackAdvanced: Tm("fallbackAdvanced"),
		fallbackDifficultySteps: Em("fallbackDifficultySteps"),
		quickTests: [
			Dm("quickTest1"),
			Dm("quickTest2"),
			Dm("quickTest3"),
			Dm("quickTest4")
		],
		summaryThreshold: Em("summaryThreshold")
	};
}
async function wm(e) {
	let t = {
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
	for (let [e, n] of Object.entries(Sm)) await game.settings.set(r, n, t[e]);
}
function Tm(e) {
	return game.settings.get(r, Sm[e]) === !0;
}
function Em(e) {
	return Number(game.settings.get("wfrp4e-enhanced-fear-terror", Sm[e])) || 0;
}
function Dm(e) {
	return String(game.settings.get("wfrp4e-enhanced-fear-terror", Sm[e]) ?? "");
}
// src/module/foundry/group-test/skill-catalog.ts
var Om = [];
function km() {
	return [...Om];
}
async function Am() {
	let e = /* @__PURE__ */ new Set(), t = game;
	for (let n of t.actors) jm(n.items, e);
	jm(t.items, e);
	for (let n of t.packs) if (n.getIndex && n.metadata?.system === "wfrp4e" && n.metadata?.type === "Item") try {
		jm(await n.getIndex({ fields: ["type"] }), e);
	} catch (e) {
		console.warn(`${r} | Could not index WFRP4e skills from a compendium.`, e);
	}
	Om = [...e].sort((e, t) => e.localeCompare(t));
}
function jm(e, t) {
	for (let n of e ?? []) n.type === "skill" && n.name && t.add(n.name);
}
// src/module/foundry/group-test/initialization.ts
function Mm() {
	let e = Cm();
	return {
		actors: Zd({ initial: e.defaultGroup }),
		settings: e,
		skills: km()
	};
}
// src/module/functions/group-test/fallback.ts
var Nm = [
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
function Pm(e, t) {
	let n = Nm.indexOf(e);
	return n < 0 ? e : Nm[Math.max(0, Math.min(Nm.length - 1, n + Math.round(t)))];
}
function Fm(e, t) {
	let n = Lm(e, "system", "advanced", "value") === "adv";
	if (!n || t.fallbackAdvanced) return {
		characteristic: String(Lm(e, "system", "characteristic", "value") ?? "int"),
		difficulty: n ? Pm(t.difficulty, t.fallbackDifficultySteps) : t.difficulty
	};
}
function Im(e, t, n) {
	return e.has(n) && !t.has(n);
}
function Lm(e, ...t) {
	let n = e;
	for (let e of t) {
		if (!n || typeof n != "object") return;
		n = n[e];
	}
	return n;
}
// src/module/foundry/group-test/service.ts
var Rm = /* @__PURE__ */ new Map();
async function zm(e) {
	if (X(Y.groupTestConsole), !e.skill.trim()) throw Error("Choose or enter a skill.");
	if (e.uuids.length === 0) throw Error("Select at least one actor.");
	let t = await Qd(e.uuids), n = crypto.randomUUID(), r = t.filter((t) => !e.bypassDialog && Bm(t));
	r.length > 0 && $m();
	let i = t.filter((e) => !r.includes(e)), a = {
		expected: t.length,
		expectedUuids: new Set(t.map(({ uuid: e }) => e)),
		received: /* @__PURE__ */ new Set(),
		skill: e.skill,
		summaries: []
	};
	Rm.set(n, a), Ym(), r.forEach((t) => Vm(n, t.uuid, e));
	for (let t of i) qm(n, await Um(t, e));
	await Jm(n), r.length > 0 && ui.notifications.info(`Requested ${r.length} private player roll${r.length === 1 ? "" : "s"}.`);
}
function Bm(e) {
	return Array.from(game.users).some((t) => t.isGM === !1 && t.active !== !1 && t.character?.id === e.id);
}
function Vm(e, t, n) {
	$m().emit(`module.${r}`, {
		actorUuid: t,
		batchId: e,
		request: n,
		requesterUserId: game.user?.id,
		type: "group-test-request"
	});
}
function Hm() {
	Hooks.once("ready", async () => {
		await Am(), $m().on(`module.${r}`, (e) => void Km(e));
	});
}
async function Um(e, t) {
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
		let r = await Wm(t.skill);
		if (!r) throw Error(`Skill “${t.skill}” was not found in WFRP4e content.`);
		let a = Fm(r, t);
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
async function Wm(e) {
	let t = game.wfrp4e.utility;
	return t.findSkill ? t.findSkill(e) : void 0;
}
async function Gm(e, t) {
	let n = t.map((e) => `<li><strong>${foundry.utils.escapeHTML(e.actor)}</strong>: ${e.succeeded ? "Success" : "Failure"}${e.sl === void 0 ? "" : ` (${e.sl} SL)`}${e.roll === void 0 ? "" : ` — ${e.roll} vs ${e.target ?? "?"}`}</li>`).join(""), r = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id);
	await ChatMessage.create({
		content: `<h3>Secret Group Test: ${foundry.utils.escapeHTML(e)}</h3><ul>${n}</ul>`,
		whisper: r
	});
}
async function Km(e) {
	if (!e || typeof e != "object") return;
	let t = e;
	if (t.type === "group-test-result") {
		if (!eh() || !t.batchId || !t.summary || !Xm(t.summary, t.responderUserId)) return;
		qm(t.batchId, t.summary), await Jm(t.batchId);
	} else if (t.type === "group-test-request" && t.actorUuid && t.batchId && t.request && Zm(t.requesterUserId) && game.user?.character?.uuid === t.actorUuid) {
		let [e] = await Qd([t.actorUuid]);
		if (e) {
			let n = await Um(e, t.request);
			Qm({
				batchId: t.batchId,
				responderUserId: game.user?.id,
				summary: n,
				type: "group-test-result"
			});
		}
	}
}
function qm(e, t) {
	let n = Rm.get(e);
	n && Im(n.expectedUuids, n.received, t.actorUuid) && (n.received.add(t.actorUuid), n.summaries.push(t));
}
async function Jm(e) {
	let t = Rm.get(e);
	if (!t || t.received.size < t.expected) return;
	Rm.delete(e);
	let n = Cm().summaryThreshold;
	n > 0 && t.summaries.length >= n && await Gm(t.skill, t.summaries);
}
function Ym() {
	for (; Rm.size > 20;) {
		let e = Rm.keys().next().value;
		if (typeof e == "string") Rm.delete(e);
		else return;
	}
}
function Xm(e, t) {
	if (!t || typeof e.actorUuid != "string") return !1;
	let n = Array.from(game.users).find((e) => e.id === t), r = n?.character?.uuid;
	return n?.isGM === !1 && r === e.actorUuid;
}
function Zm(e) {
	if (!e) return !1;
	let t = Array.from(game.users).find((t) => t.id === e);
	return t?.isGM === !0 && t.active !== !1;
}
function Qm(e) {
	$m().emit(`module.${r}`, e);
}
function $m() {
	let e = game.socket;
	if (!e) throw Error("Foundry socket services are unavailable for delegated group tests.");
	return e;
}
function eh() {
	return game.user?.isGM === !0 && game.user.isUniqueGM !== !1;
}
// src/module/apps/group-test-console/view/GroupTestConsoleApplication.ts
var th = class extends Uc {
	static ACCESS_POLICY = Y.groupTestConsole;
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
			title: `${i} — Secret Group Tests`
		}
	};
	getVueComponent() {
		return xm;
	}
	getVueProps() {
		return {
			actions: {
				runGroupTest: zm,
				saveSettings: wm
			},
			initialization: Mm()
		};
	}
};
// src/module/apps/group-test-console/view/open.ts
async function nh() {
	let e = new th();
	return await e.render(!0), e;
}
// src/module/apps/token-tools-console/state/store.ts
var rh = Ks("token-tools-console", () => {
	let e = /* @__PURE__ */ P(0), t = /* @__PURE__ */ P(), n = /* @__PURE__ */ P("normal"), r = /* @__PURE__ */ P("none"), i = /* @__PURE__ */ P(!1), a = /* @__PURE__ */ P(""), o;
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
}), ih = { class: "tw:grid tw:gap-4" }, ah = { class: "tw:dui-alert tw:dui-alert-info tw:m-0" }, oh = { class: "tw:dui-card tw:dui-card-border tw:bg-base-100!" }, sh = { class: "tw:dui-card-body tw:grid tw:gap-3 tw:p-4" }, ch = { class: "tw:grid tw:gap-1" }, lh = { class: "tw:grid tw:gap-1" }, uh = ["value"], dh = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:m-0"
}, fh = ["disabled"], ph = {
	key: 0,
	class: "tw:dui-collapse tw:dui-collapse-arrow tw:dui-card tw:dui-card-border tw:bg-base-100!"
}, mh = { class: "tw:dui-collapse-content tw:grid tw:grid-cols-2 tw:gap-3" }, hh = { class: "tw:grid tw:gap-1" }, gh = { class: "tw:grid tw:gap-1" }, _h = { class: "tw:flex tw:items-center tw:gap-2" }, vh = { class: "tw:flex tw:items-center tw:gap-2" }, yh = ["disabled"], bh = /* @__PURE__ */ L({
	__name: "TokenToolsConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = rh();
		n.initialize(t.initialization, t.actions);
		let { busy: r, controlledCount: i, errorMessage: a, light: o, settings: s, vision: c } = qs(n), l = [
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
		return (e, t) => (B(), Ca(mc, {
			description: "Set vision and light for the controlled tokens.",
			icon: "fa-solid fa-eye",
			title: "Token Vision & Light"
		}, {
			default: ir(() => [H("div", ih, [
				H("p", ah, k(F(i)) + " controlled token" + k(F(i) === 1 ? "" : "s"), 1),
				H("section", oh, [H("div", sh, [
					H("label", ch, [t[9] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Vision", -1), I(H("select", {
						"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ N(c) ? c.value = e : null,
						class: "tw:dui-select"
					}, [...t[8] ||= [
						H("option", { value: "normal" }, "Normal", -1),
						H("option", { value: "blinded" }, "Blinded", -1),
						H("option", { value: "night" }, "Night Vision", -1),
						H("option", { value: "dark" }, "Dark Vision", -1),
						H("option", { value: "none" }, "No vision", -1)
					]], 512), [[es, F(c)]])]),
					H("label", lh, [t[10] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Light source", -1), I(H("select", {
						"onUpdate:modelValue": t[1] ||= (e) => /* @__PURE__ */ N(o) ? o.value = e : null,
						class: "tw:dui-select"
					}, [(B(), V(z, null, R(l, (e) => H("option", {
						key: e.v,
						value: e.v
					}, k(e.l), 9, uh)), 64))], 512), [[es, F(o)]])]),
					F(a) ? (B(), V("p", dh, k(F(a)), 1)) : G("", !0),
					H("button", {
						class: "tw:dui-btn tw:dui-btn-primary",
						disabled: F(r),
						type: "button",
						onClick: t[2] ||= (...e) => F(n).apply && F(n).apply(...e)
					}, " Apply to controlled tokens ", 8, fh)
				])]),
				F(s) ? (B(), V("section", ph, [
					t[15] ||= H("input", { type: "checkbox" }, null, -1),
					t[16] ||= H("div", { class: "tw:dui-collapse-title tw:font-semibold" }, "Vision defaults", -1),
					H("div", mh, [
						H("label", hh, [t[11] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Normal range", -1), I(H("input", {
							"onUpdate:modelValue": t[3] ||= (e) => F(s).normalRange = e,
							class: "tw:dui-input tw:dui-input-sm",
							min: "0",
							type: "number"
						}, null, 512), [[
							q,
							F(s).normalRange,
							void 0,
							{ number: !0 }
						]])]),
						H("label", gh, [t[12] ||= H("span", { class: "tw:text-sm tw:font-medium" }, "Dark Vision range", -1), I(H("input", {
							"onUpdate:modelValue": t[4] ||= (e) => F(s).darkRange = e,
							class: "tw:dui-input tw:dui-input-sm",
							min: "0",
							type: "number"
						}, null, 512), [[
							q,
							F(s).darkRange,
							void 0,
							{ number: !0 }
						]])]),
						H("label", _h, [I(H("input", {
							"onUpdate:modelValue": t[5] ||= (e) => F(s).overrideNightVision = e,
							class: "tw:dui-toggle tw:dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[J, F(s).overrideNightVision]]), t[13] ||= W("Allow Night Vision override", -1)]),
						H("label", vh, [I(H("input", {
							"onUpdate:modelValue": t[6] ||= (e) => F(s).overrideDarkVision = e,
							class: "tw:dui-toggle tw:dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[J, F(s).overrideDarkVision]]), t[14] ||= W("Allow Dark Vision override", -1)]),
						H("button", {
							class: "tw:dui-btn tw:dui-btn-secondary tw:dui-btn-sm tw:w-fit",
							disabled: F(r),
							type: "button",
							onClick: t[7] ||= (...e) => F(n).save && F(n).save(...e)
						}, " Save defaults ", 8, yh)
					])
				])) : G("", !0)
			])]),
			_: 1
		}));
	}
}), xh = {
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
}, Sh = {
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
function Ch(e, t = 0) {
	return e === "none" ? structuredClone(xh) : wh(e === "pha" ? {
		alpha: .6,
		bright: t,
		color: "#ffddbb",
		dim: t,
		animation: {
			intensity: 2,
			speed: 2,
			type: "sunburst"
		}
	} : Sh[e]);
}
function wh(e) {
	return {
		...structuredClone(xh),
		...e,
		animation: {
			...xh.animation,
			...e.animation
		},
		darkness: {
			...xh.darkness,
			...e.darkness
		}
	};
}
// src/module/functions/token-tools/vision.ts
function Th(e, t, n) {
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
// src/module/foundry/token-tools/settings/keys.ts
var Eh = {
	darkRange: "visionDarkRange",
	normalRange: "visionNormalRange",
	overrideDarkVision: "visionOverrideDark",
	overrideNightVision: "visionOverrideNight"
};
// src/module/foundry/token-tools/settings/load.ts
function Dh() {
	return {
		darkRange: kh("darkRange"),
		normalRange: kh("normalRange"),
		overrideDarkVision: Ah("overrideDarkVision"),
		overrideNightVision: Ah("overrideNightVision")
	};
}
async function Oh(e) {
	let t = {
		...e,
		darkRange: Math.max(0, Math.round(e.darkRange)),
		normalRange: Math.max(0, Math.round(e.normalRange))
	};
	for (let [e, n] of Object.entries(Eh)) await game.settings.set(r, n, t[e]);
}
function kh(e) {
	let t = Number(game.settings.get(r, Eh[e]));
	if (!Number.isFinite(t)) throw Error(`The saved Token Tools setting “${Eh[e]}” is not a number.`);
	return t;
}
function Ah(e) {
	return game.settings.get(r, Eh[e]) === !0;
}
// src/module/foundry/token-tools/service.ts
async function jh(e) {
	X(Y.tokenToolsConsole);
	let t = canvas?.tokens?.controlled ?? [];
	if (t.length === 0) throw Error("Select at least one token.");
	let n = 0, r = [];
	for (let i of t) try {
		let t = Number(i.actor?.system.characteristics?.wp?.bonus ?? 0), r = Ch(e.light, t);
		await i.document.update({
			light: r,
			sight: Th(e.vision, Dh(), {
				hasDarkVision: Mh(i.actor, "NAME.DarkVision", "trait"),
				lightRange: r.dim,
				nightVisionAdvances: Nh(i.actor),
				sceneDarkness: Number(canvas?.scene?.darkness ?? 0),
				sceneHasGlobalLight: canvas?.scene?.globalLight === !0
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
function Mh(e, t, n) {
	return !!e?.has(game.i18n.localize(t), n);
}
function Nh(e) {
	let t = game.i18n.localize("NAME.NightVision"), n = e?.has(t, "trait") || e?.has(t, "talent");
	return n ? Math.max(1, Number(n.system?.advances?.value ?? 1)) : 0;
}
// src/module/apps/token-tools-console/view/TokenToolsConsoleApplication.ts
var Ph = class extends Uc {
	static ACCESS_POLICY = Y.tokenToolsConsole;
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
			title: `${i} — Token Vision & Light`
		}
	};
	getVueComponent() {
		return bh;
	}
	getVueProps() {
		let e = (canvas?.tokens?.controlled ?? []).length;
		return {
			actions: {
				apply: jh,
				saveSettings: Oh
			},
			initialization: {
				controlledCount: e,
				settings: Dh()
			}
		};
	}
};
// src/module/apps/token-tools-console/view/open.ts
async function Fh() {
	let e = new Ph();
	return await e.render(!0), e;
}
// src/module/functions/xp-curve/calculate.ts
var Ih = .01, Lh = 2 ** 53 - 1;
function Rh(e) {
	return {
		curveExponent: Uh(e.curveExponent, .1, 5),
		catchUpRate: Uh(e.catchUpRate, 0, 1e3),
		maximumAward: Math.max(0, Wh(e.maximumAward)),
		scaleExponent: Uh(e.scaleExponent, 0, 2),
		scalePivot: Math.max(1, Wh(e.scalePivot))
	};
}
function zh(e, t) {
	let n = e.filter((e) => e.selected), r = Rh(t), i = n.filter((e) => e.categoryId === "party").reduce((e, t) => !e || t.totalXp > e.totalXp ? t : e, void 0), a = i?.totalXp ?? 0, o = n.map((e) => {
		let t = Wh(e.totalXp), n = Math.max(0, a - t), i = Math.max(0, e.xpPercent ?? 100) / 100, o = Vh(n, r), s = Hh(t, r), c = Math.max(0, Math.round(o * s * i)), l = Math.min(r.maximumAward, c);
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
			recipientMultiplier: i
		};
	});
	return {
		awards: o,
		highestXp: a,
		leader: i,
		totalAward: o.reduce((e, t) => e + t.award, 0)
	};
}
function Bh(e, t, n, r = 1) {
	let i = Rh(n), a = Vh(e, i), o = Hh(t, i), s = Math.max(0, Number.isFinite(r) ? r : 0), c = Math.round(a * o * s);
	return Math.min(i.maximumAward, Math.max(0, c));
}
function Vh(e, t) {
	let n = Rh(t), r = Math.max(0, Number.isFinite(e) ? e : 0) / 1e3, i = n.catchUpRate * 10 * r ** n.curveExponent;
	return Number.isFinite(i) ? Math.min(i, Lh) : Lh;
}
function Hh(e, t) {
	let n = Rh(t), r = Math.max(0, Number.isFinite(e) ? e : 0);
	return Math.min(1, n.scalePivot / Math.max(r, n.scalePivot)) ** n.scaleExponent;
}
function Uh(e, t, n) {
	let r = Number(e);
	return Math.min(n, Math.max(t, Number.isFinite(r) ? r : Ih));
}
function Wh(e) {
	let t = Number(e);
	return Number.isFinite(t) ? Math.round(t) : 0;
}
// src/module/functions/xp-curve/reason.ts
function Gh(e, t) {
	return e.replaceAll("%session%", t.session).replaceAll("%date%", t.date).replaceAll("%datetime%", t.datetime ?? "").replace(/\s+\(\s*\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function Kh(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
// src/types/xp-curve/XpCurve.ts
var qh = {
	curveExponent: 1,
	catchUpRate: 10,
	maximumAward: 500,
	scaleExponent: 1,
	scalePivot: 1e3
}, Jh = {
	defaultReason: "XP Curve %session% (%date%)",
	parameters: { ...qh }
}, Yh = Ks("xp-curve-console", () => {
	let e = /* @__PURE__ */ P([]), t = /* @__PURE__ */ P({ ...qh }), n = /* @__PURE__ */ P(""), r = /* @__PURE__ */ P(), i = /* @__PURE__ */ P(), a = /* @__PURE__ */ P(!1), o = /* @__PURE__ */ P(!1), s, c = {
		date: "",
		session: ""
	}, l = K(() => zh(e.value, t.value)), u = K(() => !r.value && !!l.value.leader && l.value.totalAward > 0 && !a.value && !o.value), d = K(() => Gh(n.value, c));
	function f(i, a) {
		e.value = i.actors.map((e) => ({ ...e })), t.value = { ...i.parameters }, n.value = i.defaultReason, r.value = i.rosterIssue, c = i.reasonContext, s = a;
	}
	async function p() {
		if (u.value) {
			a.value = !0, i.value = void 0;
			try {
				let n = await s.applyAwards({
					actors: e.value.map((e) => ({ ...e })),
					parameters: { ...t.value },
					reason: d.value
				});
				o.value = !0, s.onActionComplete(n);
			} catch (e) {
				i.value = e instanceof Error ? e.message : "The XP awards could not be completed.";
			} finally {
				a.value = !1;
			}
		}
	}
	return {
		actors: e,
		reason: n,
		rosterIssue: r,
		errorMessage: i,
		isWorking: a,
		complete: o,
		plan: l,
		canApply: u,
		resolvedReason: d,
		initialize: f,
		applyAwards: p
	};
}), Xh = {
	class: "tw:min-w-0",
	"aria-label": "Curve XP recipients"
}, Zh = {
	key: 0,
	class: "tw:my-2 tw:text-sm"
}, Qh = {
	key: 1,
	class: "tw:text-sm"
}, $h = {
	class: "tw:m-0 tw:flex tw:[list-style:none] tw:flex-wrap tw:gap-3 tw:p-0!",
	"aria-label": "Final curve bonuses"
}, eg = ["title"], tg = [
	"src",
	"alt",
	"onError"
], ng = ["aria-label"], rg = { class: "tw:text-sm tw:font-semibold" }, ig = { key: 0 }, ag = {
	key: 2,
	class: "tw:mt-3 tw:text-sm"
}, og = /* @__PURE__ */ L({
	__name: "CurveAwardPreview",
	props: {
		actors: {},
		plan: {},
		numbered: { type: Boolean }
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(/* @__PURE__ */ new Set()), r = K(() => t.plan.awards.map((e) => {
			let n = t.actors.find((t) => t.id === e.actorId);
			return {
				...e,
				img: n?.img || "icons/svg/mystery-man.svg",
				description: `${e.actorName} · ${n?.categoryName ?? "Party"} · ${Math.round(e.recipientMultiplier * 100)}% · ${e.beforeXp} → ${e.afterXp} XP`
			};
		}));
		return (t, i) => (B(), V("section", Xh, [
			e.plan.leader ? (B(), V("p", Zh, [
				i[0] ||= H("i", {
					class: "fa-solid fa-crown",
					"aria-hidden": "true"
				}, null, -1),
				H("strong", null, "Party leader: " + k(e.plan.leader.name), 1),
				W(" · " + k(e.plan.highestXp.toLocaleString()) + " XP ", 1)
			])) : G("", !0),
			e.actors.length ? G("", !0) : (B(), V("p", Qh, " No configured characters to preview. " + k(e.numbered ? "Switch to Example to explore the curve." : "Add characters in Configure Party."), 1)),
			H("ul", $h, [(B(!0), V(z, null, R(r.value, (t, r) => (B(), V("li", {
				key: t.actorId,
				class: "tw:flex tw:w-20 tw:flex-col tw:items-center tw:gap-1 tw:text-center",
				title: t.description,
				tabindex: "0"
			}, [n.value.has(t.img) ? (B(), V("span", {
				key: 1,
				class: "tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-base-200 tw:font-semibold",
				role: "img",
				"aria-label": t.actorName
			}, k(t.actorName.slice(0, 2).toUpperCase()), 9, ng)) : (B(), V("img", {
				key: 0,
				src: t.img,
				alt: t.actorName,
				width: "44",
				height: "44",
				class: "tw:size-11 tw:rounded-full tw:object-cover",
				onError: (e) => n.value.add(t.img)
			}, null, 40, tg)), H("span", rg, [e.numbered ? (B(), V("span", ig, k(r + 1) + ". ", 1)) : G("", !0), W("+" + k(t.award) + " XP", 1)])], 8, eg))), 128))]),
			e.plan.leader && e.plan.totalAward === 0 ? (B(), V("p", ag, " Nobody currently receives a curve bonus. ")) : G("", !0)
		]));
	}
}), sg = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, cg = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error",
	role: "alert"
}, lg = {
	key: 1,
	role: "status"
}, ug = {
	key: 2,
	role: "status"
}, dg = ["disabled"], fg = { class: "tw:mb-0 tw:break-words tw:text-sm" }, pg = { class: "tw:flex tw:shrink-0 tw:flex-wrap tw:justify-end tw:gap-2 tw:border-t tw:border-base-content/20 tw:p-3" }, mg = ["disabled"], hg = ["disabled"], gg = /* @__PURE__ */ L({
	__name: "XpCurveConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Yh();
		n.initialize(t.initialization, t.actions);
		let { actors: r, reason: i, rosterIssue: a, errorMessage: o, isWorking: s, complete: c, plan: l, canApply: u, resolvedReason: d } = qs(n);
		return (t, f) => (B(), V("form", {
			class: "tw:flex tw:h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:bg-base-100! tw:text-base-content!",
			onSubmit: f[3] ||= ss((...e) => F(n).applyAwards && F(n).applyAwards(...e), ["prevent"])
		}, [H("div", sg, [
			f[6] ||= H("p", { class: "tw:mt-0 tw:text-sm" }, " Catch-up bonuses for your configured party. Category XP percentages apply. ", -1),
			F(o) ? (B(), V("p", cg, k(F(o)), 1)) : G("", !0),
			F(c) ? (B(), V("p", lg, "Curve XP awarded.")) : G("", !0),
			F(a) ? (B(), V("p", ug, [
				W(k(F(a)) + " ", 1),
				H("button", {
					class: "tw:dui-btn tw:dui-btn-sm",
					type: "button",
					onClick: f[0] ||= (...t) => e.actions.openParty && e.actions.openParty(...t)
				}, " Configure Party "),
				f[4] ||= W(" Save your party, then reopen Curve XP to refresh this preview. ", -1)
			])) : G("", !0),
			U(og, {
				actors: F(r),
				plan: F(l)
			}, null, 8, ["actors", "plan"]),
			f[7] ||= H("label", {
				for: "curve-award-reason",
				class: "tw:mt-5 tw:mb-1 tw:block tw:text-sm tw:font-semibold"
			}, "XP log reason", -1),
			I(H("input", {
				id: "curve-award-reason",
				"onUpdate:modelValue": f[1] ||= (e) => /* @__PURE__ */ N(i) ? i.value = e : null,
				class: "tw:dui-input tw:dui-input-sm tw:w-full tw:min-w-0",
				type: "text",
				disabled: F(s) || F(c)
			}, null, 8, dg), [[q, F(i)]]),
			H("p", fg, [f[5] ||= H("strong", null, "Log preview:", -1), W(" " + k(F(d) || "No reason"), 1)])
		]), H("footer", pg, [H("button", {
			class: "tw:dui-btn tw:dui-btn-sm",
			type: "button",
			disabled: F(s),
			onClick: f[2] ||= (...t) => e.actions.close && e.actions.close(...t)
		}, " Cancel ", 8, mg), H("button", {
			class: "tw:dui-btn tw:dui-btn-sm tw:dui-btn-primary",
			type: "submit",
			disabled: !F(u)
		}, k(F(s) ? "Awarding…" : `Award ${F(l).totalAward} total XP`), 9, hg)])], 32));
	}
});
// src/module/functions/party/configuration.ts
function _g(e) {
	return {
		version: 1,
		categories: [{
			id: "party",
			name: "Party",
			xpPercent: 100,
			actorIds: [...new Set(e)]
		}, {
			id: "companions",
			name: "Companions",
			xpPercent: 50,
			actorIds: []
		}]
	};
}
function vg(e) {
	if (!$(e) || e.version !== 1 || !Array.isArray(e.categories)) throw Error("The saved party configuration is unreadable or from an unsupported version.");
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = e.categories.map((e) => {
		if (!$(e) || typeof e.id != "string" || !e.id.trim() || typeof e.name != "string" || !e.name.trim() || typeof e.xpPercent != "number" || !Number.isFinite(e.xpPercent) || e.xpPercent < 0 || !Array.isArray(e.actorIds)) throw Error("Every party category needs a name and a non-negative XP percentage.");
		let r = e.id;
		if (t.has(r)) throw Error("Party category IDs must be unique.");
		t.add(r);
		let i = e.actorIds.map((e) => {
			if (typeof e != "string" || !e.trim()) throw Error("The party contains an invalid actor reference.");
			if (n.has(e)) throw Error("An actor can belong to only one party category.");
			return n.add(e), e;
		});
		return {
			id: r,
			name: e.name.trim(),
			xpPercent: e.xpPercent,
			actorIds: i
		};
	});
	if (!t.has("party") || !t.has("companions")) throw Error("The Party and Companions categories are required.");
	return {
		version: 1,
		categories: r
	};
}
function yg(e) {
	if (e === "" || e === void 0) return;
	if (typeof e != "string") throw Error("The saved party configuration is unreadable.");
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		throw Error("The saved party configuration is unreadable. It has not been overwritten.");
	}
	return vg(t);
}
function bg(e, t, n) {
	if (!e.categories.some((e) => e.id === n)) throw Error("Choose an available party category.");
	return {
		version: 1,
		categories: e.categories.map((e) => ({
			...e,
			actorIds: [...e.actorIds.filter((e) => e !== t), ...e.id === n ? [t] : []]
		}))
	};
}
// src/module/foundry/party/configuration.ts
var xg = "partyConfiguration";
function Sg() {
	return Array.from(game.actors).filter((e) => e.type === "character").map((e) => ({
		id: e.id,
		name: e.name,
		img: e.img || "icons/svg/mystery-man.svg"
	})).sort((e, t) => e.name.localeCompare(t.name));
}
function Cg() {
	return _g(Array.from(game.users).filter((e) => !e.isGM && e.character && game.actors.get(e.character.id)?.type === "character").flatMap((e) => e.character && game.actors.get(e.character.id) ? [e.character.id] : []));
}
function wg() {
	return yg(game.settings.get("wfrp4e-enhanced-fear-terror", "partyConfiguration")) ?? Cg();
}
async function Tg() {
	X(Y.configureParty);
	let e = yg(game.settings.get(r, xg));
	if (e) return e;
	let t = Cg();
	return await Eg(t), t;
}
async function Eg(e) {
	X(Y.configureParty);
	let t = vg(e);
	await game.settings.set(r, xg, JSON.stringify(t));
}
async function Dg() {
	return {
		configuration: await Tg(),
		actors: Sg()
	};
}
async function Og(e) {
	X(Y.configureParty);
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		throw Error("Drag an actor from the Actors sidebar.");
	}
	if (!$(t) || t.type !== "Actor" || typeof t.uuid != "string") throw Error("Drag an actor from the Actors sidebar.");
	let n = await fromUuid(t.uuid);
	if (!$(n) || n.documentName !== "Actor" || n.type !== "character" || typeof n.id != "string" || !game.actors.get(n.id) || t.uuid !== `Actor.${n.id}`) throw Error("Choose a world character actor from the Actors sidebar. NPC characters are welcome.");
	return {
		id: n.id,
		name: String(n.name),
		img: String(n.img || "icons/svg/mystery-man.svg")
	};
}
async function kg() {
	return X(Y.configureParty), await foundry.applications.api.DialogV2.confirm({
		modal: !0,
		window: { title: "Reset Party?" },
		content: "<p>Replace the saved roster with the characters currently assigned to players?</p><p>Party returns to 100% XP and Companions to 50%. Companion membership and custom categories are cleared. Apply the zones, then Save party to keep the reset.</p>",
		rejectClose: !1
	}) ? Cg() : null;
}
// src/module/foundry/party/portraits.ts
function Ag(e, t) {
	class n extends foundry.applications.ux.ContextMenu {
		activateListeners(e) {
			super.activateListeners(e), e.setAttribute("role", "menu");
			let t = Array.from(e.querySelectorAll(".context-item"));
			for (let e of t) e.tabIndex = 0, e.setAttribute("role", "menuitem");
			e.addEventListener("keydown", (e) => {
				let n = t.indexOf(document.activeElement);
				if ([
					"ArrowDown",
					"ArrowUp",
					"Home",
					"End"
				].includes(e.key)) {
					e.preventDefault(), e.stopPropagation();
					let r = e.key === "Home" ? 0 : e.key === "End" ? t.length - 1 : (n + (e.key === "ArrowDown" ? 1 : -1) + t.length) % t.length;
					t[r]?.focus();
				} else e.key === "Enter" || e.key === " " ? (e.preventDefault(), e.stopPropagation(), t[n]?.click()) : e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), this.close(), this.target.focus());
			});
		}
		async render(e, t) {
			await super.render(e, t), this.element?.querySelector(".context-item")?.focus();
		}
	}
	let r = new n(e, "[data-party-actor]", [], {
		jQuery: !1,
		fixed: !0,
		relative: "target",
		onOpen: (e) => {
			let n = e.dataset.partyActor, i = game.actors.get(n), a = (e) => {
				t.busy() || (X(Y.configureParty), e());
			};
			r.menuItems = t.busy() ? [] : [
				...i ? [jg("Open character sheet", "fa-user", () => a(() => {
					i.sheet?.render(!0);
				}))] : [],
				...t.categories().filter((e) => !e.actorIds.includes(n)).map((e) => jg(`Move to ${e.name}`, "fa-arrow-right", () => a(() => t.move(n, e.id)))),
				jg("Remove from roster", "fa-user-minus", () => a(() => t.remove(n)))
			];
		}
	});
	return () => {
		r.element?.isConnected && r.close({ animate: !1 });
	};
}
function jg(e, t, n) {
	return {
		label: e,
		name: Kh(e),
		icon: `<i class="fa-solid ${t}"></i>`,
		onClick: n,
		callback: n
	};
}
async function Mg(e) {
	X(Y.configureParty);
	let t = Sg().filter((t) => !e.actorIds.includes(t.id));
	if (!t.length) throw Error("Every available character is already in this zone.");
	let n = await foundry.applications.api.DialogV2.input({
		modal: !0,
		window: { title: `Add actor to ${e.name}` },
		content: `<label class="form-group"><span>Character</span><select name="actor">${t.map((e) => `<option value="${Kh(e.id)}">${Kh(e.name)}</option>`).join("")}</select></label>`,
		ok: { label: "Add actor" },
		rejectClose: !1
	});
	return n ? t.find((e) => e.id === n.actor) ?? null : null;
}
async function Ng(e) {
	return !e.actorIds.length || await foundry.applications.api.DialogV2.confirm({
		modal: !0,
		window: { title: "Remove zone?" },
		rejectClose: !1,
		content: `<p>Remove ${Kh(e.name)} and its ${e.actorIds.length} roster members?</p><p>The actors themselves are kept.</p>`
	}) === !0;
}
// src/module/foundry/party/unsaved.ts
async function Pg(e = !1) {
	let t = await foundry.applications.api.DialogV2.wait({
		window: { title: e ? "Unapplied zone changes" : "Unsaved party changes" },
		modal: !0,
		rejectClose: !1,
		content: e ? "<p>Apply your zone changes to the party draft before closing?</p>" : "<p>Save your changes to the party before closing?</p>",
		buttons: [
			{
				action: "save",
				label: e ? "Apply" : "Save",
				icon: "fa-solid fa-floppy-disk"
			},
			{
				action: "discard",
				label: "Discard",
				icon: "fa-solid fa-trash"
			},
			{
				action: "cancel",
				label: "Keep editing",
				icon: "fa-solid fa-pen",
				default: !0
			}
		]
	});
	return t === "save" || t === "discard" ? t : null;
}
// src/module/apps/configure-party/state/zones.ts
var Fg = Ks("party-zones", () => {
	let e = /* @__PURE__ */ P({
		version: 1,
		categories: []
	}), t = /* @__PURE__ */ P(""), n = K(() => JSON.stringify(e.value) !== t.value), r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P(""), a;
	function o(n, r) {
		e.value = structuredClone(n), a = r, t.value = JSON.stringify(e.value);
	}
	function s() {
		e.value.categories.push({
			id: crypto.randomUUID(),
			name: "New zone",
			xpPercent: 100,
			actorIds: []
		});
	}
	async function c(t) {
		t !== "party" && t !== "companions" && await p(async () => {
			let n = e.value.categories.find((e) => e.id === t);
			await a.remove(n) && (e.value.categories = e.value.categories.filter((e) => e.id !== t));
		});
	}
	async function l() {
		await p(async () => {
			let t = await a.reset();
			t && (e.value = t);
		});
	}
	async function u() {
		await p(d) && a.close();
	}
	async function d() {
		a.apply(vg(e.value)), t.value = JSON.stringify(e.value);
	}
	async function f() {
		if (r.value) return !1;
		if (!n.value) return !0;
		let e = !1;
		return await p(async () => {
			let t = await a.confirmClose();
			t === "save" && await d(), e = t === "save" || t === "discard";
		}) && e;
	}
	async function p(e) {
		if (r.value) return !1;
		r.value = !0, i.value = "";
		try {
			return await e(), !0;
		} catch (e) {
			return i.value = e instanceof Error ? e.message : "Could not configure party zones.", !1;
		} finally {
			r.value = !1;
		}
	}
	return {
		configuration: e,
		busy: r,
		isDirty: n,
		canClose: f,
		error: i,
		initialize: o,
		add: s,
		remove: c,
		reset: l,
		apply: u,
		cancel: () => a.close()
	};
}), Ig = { class: "tw:flex tw:h-full tw:min-h-0 tw:flex-col tw:gap-4 tw:p-3" }, Lg = {
	key: 0,
	role: "alert",
	class: "tw:text-error tw:text-sm"
}, Rg = ["disabled"], zg = {
	key: 0,
	class: "tw:min-w-0 tw:flex-1 tw:text-sm"
}, Bg = ["onUpdate:modelValue"], Vg = { class: "tw:flex tw:items-center tw:gap-1 tw:text-sm" }, Hg = ["onUpdate:modelValue", "aria-label"], Ug = ["aria-label", "onClick"], Wg = {
	key: 3,
	class: "tw:w-8"
}, Gg = { class: "tw:flex tw:flex-wrap tw:gap-2 tw:border-t tw:border-base-content/15 tw:pt-3" }, Kg = ["disabled"], qg = ["disabled"], Jg = ["disabled"], Yg = /* @__PURE__ */ L({
	__name: "PartyZonesApp",
	props: {
		initialConfiguration: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = Fg();
		n.initialize(t.initialConfiguration, t.actions), t.actions.bindCloseGuard(n.canClose);
		let { configuration: r, error: i, busy: a } = qs(n);
		return (e, t) => (B(), V("main", Ig, [
			t[8] ||= H("p", { class: "tw:m-0 tw:text-sm tw:opacity-70" }, "Set the zones and their shares of Party XP.", -1),
			F(i) ? (B(), V("p", Lg, k(F(i)), 1)) : G("", !0),
			H("form", {
				id: "party-zones-form",
				class: "tw:min-h-0 tw:flex-1 tw:overflow-auto",
				onSubmit: t[1] ||= ss((...e) => F(n).apply && F(n).apply(...e), ["prevent"])
			}, [H("fieldset", {
				disabled: F(a),
				class: "tw:m-0 tw:grid tw:gap-3 tw:border-0 tw:p-0"
			}, [(B(!0), V(z, null, R(F(r).categories, (e) => (B(), V("div", {
				key: e.id,
				class: "tw:flex tw:items-center tw:gap-2"
			}, [
				["party", "companions"].includes(e.id) ? (B(), V("strong", zg, k(e.name), 1)) : I((B(), V("input", {
					key: 1,
					"onUpdate:modelValue": (t) => e.name = t,
					"aria-label": "Zone name",
					required: "",
					class: "tw:dui-input tw:dui-input-sm tw:min-w-0 tw:flex-1"
				}, null, 8, Bg)), [[q, e.name]]),
				H("label", Vg, [I(H("input", {
					"onUpdate:modelValue": (t) => e.xpPercent = t,
					"aria-label": `${e.name} XP percentage`,
					type: "number",
					min: "0",
					step: "any",
					required: "",
					class: "tw:dui-input tw:dui-input-sm tw:w-20"
				}, null, 8, Hg), [[
					q,
					e.xpPercent,
					void 0,
					{ number: !0 }
				]]), t[4] ||= H("span", null, "% XP", -1)]),
				["party", "companions"].includes(e.id) ? (B(), V("span", Wg)) : (B(), V("button", {
					key: 2,
					type: "button",
					"aria-label": `Remove ${e.name} zone`,
					class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:dui-btn-square",
					onClick: (t) => F(n).remove(e.id)
				}, [...t[5] ||= [H("i", {
					class: "fa-solid fa-trash",
					"aria-hidden": "true"
				}, null, -1)]], 8, Ug))
			]))), 128)), H("button", {
				type: "button",
				class: "tw:dui-btn tw:dui-btn-sm tw:justify-self-start",
				onClick: t[0] ||= (...e) => F(n).add && F(n).add(...e)
			}, [...t[6] ||= [H("i", {
				class: "fa-solid fa-plus",
				"aria-hidden": "true"
			}, null, -1), W(" Add zone ", -1)]])], 8, Rg)], 32),
			H("footer", Gg, [
				H("button", {
					type: "button",
					disabled: F(a),
					class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm",
					onClick: t[2] ||= (...e) => F(n).reset && F(n).reset(...e)
				}, " Reset party… ", 8, Kg),
				t[7] ||= H("span", { class: "tw:flex-1" }, null, -1),
				H("button", {
					type: "button",
					disabled: F(a),
					class: "tw:dui-btn tw:dui-btn-sm",
					onClick: t[3] ||= (...e) => F(n).cancel && F(n).cancel(...e)
				}, " Cancel ", 8, qg),
				H("button", {
					type: "submit",
					form: "party-zones-form",
					disabled: F(a),
					class: "tw:dui-btn tw:dui-btn-primary tw:dui-btn-sm"
				}, " Apply zones ", 8, Jg)
			])
		]));
	}
}), Xg = class extends Uc {
	configuration;
	finish;
	static ACCESS_POLICY = Y.configureParty;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		position: {
			width: 440,
			height: 380
		},
		window: {
			title: "Party Zones",
			icon: "fa-solid fa-gear",
			resizable: !0
		}
	};
	result = null;
	closeGuard;
	closing = !1;
	constructor(e, t) {
		super(), this.configuration = e, this.finish = t;
	}
	getVueComponent() {
		return Yg;
	}
	async close() {
		if (this.closing) return this;
		this.closing = !0;
		try {
			return this.closeGuard && !await this.closeGuard() ? this : await super.close();
		} finally {
			this.closing = !1;
		}
	}
	getVueProps() {
		return {
			initialConfiguration: this.configuration,
			actions: {
				apply: (e) => {
					this.result = e;
				},
				reset: kg,
				remove: Ng,
				bindCloseGuard: (e) => {
					this.closeGuard = e;
				},
				confirmClose: () => Pg(!0),
				close: () => {
					this.close();
				}
			}
		};
	}
	async _preClose(e) {
		await super._preClose(e), this.finish(this.result);
	}
}, Zg = Ks("configure-party", () => {
	let e = /* @__PURE__ */ P({
		version: 1,
		categories: []
	}), t = /* @__PURE__ */ P([]), n = /* @__PURE__ */ P(""), r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P(""), a = K(() => JSON.stringify(e.value) !== i.value), o;
	function s(n, r) {
		e.value = structuredClone(n.configuration), t.value = structuredClone(n.actors), o = r, i.value = JSON.stringify(e.value);
	}
	function c(t, n) {
		e.value = bg(e.value, t, n);
	}
	function l(t) {
		for (let n of e.value.categories) n.actorIds = n.actorIds.filter((e) => e !== t);
	}
	function u(e, n) {
		t.value.some((t) => t.id === e.id) || t.value.push(e), c(e.id, n);
	}
	async function d(e, t) {
		await _(async () => u(await o.resolveDrop(e), t));
	}
	async function f(t) {
		await _(async () => {
			let n = e.value.categories.find((e) => e.id === t), r = await o.pickActor(n);
			r && u(r, t);
		});
	}
	async function p() {
		await _(async () => {
			let t = await o.configure(vg(e.value));
			t && (e.value = vg(t));
		});
	}
	async function m() {
		await _(h) && o.close();
	}
	async function h() {
		await o.save(vg(e.value)), i.value = JSON.stringify(e.value);
	}
	async function g() {
		if (r.value) return !1;
		if (!a.value) return !0;
		let e = !1;
		return await _(async () => {
			let t = await o.confirmClose();
			t === "save" && await h(), e = t === "save" || t === "discard";
		}) && e;
	}
	async function _(e) {
		if (r.value) return !1;
		r.value = !0, n.value = "";
		try {
			return await e(), !0;
		} catch (e) {
			return n.value = e instanceof Error ? e.message : "Could not update the party.", !1;
		} finally {
			r.value = !1;
		}
	}
	return {
		configuration: e,
		actors: t,
		error: n,
		busy: r,
		isDirty: a,
		canClose: g,
		initialize: s,
		moveActor: c,
		removeActor: l,
		drop: d,
		addActor: f,
		configure: p,
		save: m,
		cancel: () => o.close()
	};
}), Qg = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, $g = ["disabled"], e_ = {
	key: 0,
	class: "tw:m-0 tw:text-error tw:text-sm",
	role: "alert"
}, t_ = { class: "party-zones tw:min-h-0 tw:flex-1 tw:overflow-auto" }, n_ = [
	"data-party-category",
	"aria-label",
	"onDragover",
	"onDrop"
], r_ = { class: "tw:mb-3 tw:flex tw:items-center tw:justify-between tw:gap-2" }, i_ = { class: "tw:m-0 tw:font-sans tw:text-sm tw:font-semibold" }, a_ = { class: "tw:text-xs tw:opacity-60" }, o_ = { class: "party-portraits" }, s_ = [
	"disabled",
	"draggable",
	"data-party-actor",
	"data-tooltip",
	"aria-label",
	"onDragstart"
], c_ = ["src"], l_ = {
	key: 0,
	class: "fa-solid fa-triangle-exclamation party-missing-marker",
	"aria-hidden": "true"
}, u_ = [
	"disabled",
	"aria-label",
	"title",
	"onClick"
], d_ = {
	key: 0,
	class: "party-empty tw:text-xs tw:opacity-50"
}, f_ = { class: "tw:flex tw:justify-end tw:gap-2 tw:border-t tw:border-base-content/15 tw:pt-3" }, p_ = ["disabled"], m_ = ["disabled"], h_ = /*#__PURE__*/ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ L({
	__name: "ConfigurePartyApp",
	props: {
		initialization: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = Zg();
		n.initialize(t.initialization, t.actions), t.actions.bindCloseGuard(n.canClose);
		let { configuration: r, actors: i, error: a, busy: o } = qs(n), s = /* @__PURE__ */ P(), c = /* @__PURE__ */ P(""), l = K(() => new Map(i.value.map((e) => [e.id, e]))), u = (e) => l.value.get(e)?.name || `Missing actor (${e})`, d;
		Rr(() => {
			d = t.actions.bindMenu(s.value, {
				categories: () => r.value.categories,
				busy: () => o.value,
				move: n.moveActor,
				remove: n.removeActor
			});
		}), Vr(() => d?.());
		function f(e, t) {
			e.dataTransfer && !o.value && (e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", JSON.stringify({
				type: "Actor",
				uuid: `Actor.${t}`
			})));
		}
		function p(e, t) {
			c.value = "";
			let r = e.dataTransfer?.getData("text/plain");
			r && !o.value && n.drop(r, t);
		}
		function m(e) {
			let t = e.currentTarget;
			if (!(t instanceof HTMLElement)) return;
			let { left: n, bottom: r } = t.getBoundingClientRect();
			t.dispatchEvent(new MouseEvent("contextmenu", {
				bubbles: !0,
				cancelable: !0,
				clientX: n,
				clientY: r
			}));
		}
		function h(e) {
			(e.key === "ContextMenu" || e.shiftKey && e.key === "F10") && (e.preventDefault(), m(e));
		}
		return (e, t) => (B(), V("main", {
			ref_key: "root",
			ref: s,
			class: "party-gallery tw:flex tw:h-full tw:min-h-0 tw:flex-col tw:gap-3 tw:p-3"
		}, [
			H("header", Qg, [t[6] ||= H("p", { class: "tw:m-0 tw:text-xs tw:opacity-60" }, " Drag actors between zones. Right-click for actions. ", -1), H("button", {
				type: "button",
				disabled: F(o),
				"aria-label": "Configure party zones",
				title: "Configure party zones",
				class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm tw:dui-btn-square",
				onClick: t[0] ||= (...e) => F(n).configure && F(n).configure(...e)
			}, [...t[5] ||= [H("i", {
				class: "fa-solid fa-gear",
				"aria-hidden": "true"
			}, null, -1)]], 8, $g)]),
			F(a) ? (B(), V("p", e_, k(F(a)), 1)) : G("", !0),
			H("div", t_, [(B(!0), V(z, null, R(F(r).categories, (e) => (B(), V("section", {
				key: e.id,
				"data-party-category": e.id,
				"aria-label": e.name,
				class: ke(["party-zone", { "party-zone-over": c.value === e.id }]),
				onDragover: ss((t) => c.value = e.id, ["prevent"]),
				onDragleave: t[2] ||= ss((e) => c.value = "", ["self"]),
				onDrop: ss((t) => p(t, e.id), ["prevent"])
			}, [H("header", r_, [H("h2", i_, k(e.name), 1), H("span", a_, k(e.xpPercent) + "% XP", 1)]), H("div", o_, [
				(B(!0), V(z, null, R(e.actorIds, (e) => (B(), V("button", {
					key: e,
					type: "button",
					disabled: F(o),
					draggable: !F(o),
					"data-party-actor": e,
					"data-tooltip": F(Kh)(u(e)),
					"aria-label": u(e),
					"aria-haspopup": "menu",
					class: ke(["party-portrait", { "party-portrait-missing": !l.value.has(e) }]),
					onDragstart: (t) => f(t, e),
					onDragend: t[1] ||= (e) => c.value = "",
					onClick: ss(m, ["stop"]),
					onKeydown: h
				}, [H("img", {
					src: l.value.get(e)?.img || "icons/svg/mystery-man.svg",
					alt: "",
					draggable: "false"
				}, null, 8, c_), l.value.has(e) ? G("", !0) : (B(), V("i", l_))], 42, s_))), 128)),
				H("button", {
					type: "button",
					disabled: F(o),
					class: "party-portrait party-add",
					"aria-label": `Add actor to ${e.name}`,
					title: `Add actor to ${e.name}`,
					onClick: (t) => F(n).addActor(e.id)
				}, [...t[7] ||= [H("i", {
					class: "fa-solid fa-plus",
					"aria-hidden": "true"
				}, null, -1)]], 8, u_),
				e.actorIds.length ? G("", !0) : (B(), V("span", d_, "Drop actors here"))
			])], 42, n_))), 128))]),
			H("footer", f_, [H("button", {
				type: "button",
				disabled: F(o),
				class: "tw:dui-btn tw:dui-btn-sm",
				onClick: t[3] ||= (...e) => F(n).cancel && F(n).cancel(...e)
			}, " Cancel ", 8, p_), H("button", {
				type: "button",
				disabled: F(o),
				class: "tw:dui-btn tw:dui-btn-primary tw:dui-btn-sm",
				onClick: t[4] ||= (...e) => F(n).save && F(n).save(...e)
			}, " Save party ", 8, m_)])
		], 512));
	}
}), [["__scopeId", "data-v-505a04cd"]]), g_ = class e extends Uc {
	static ACCESS_POLICY = Y.configureParty;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${r}-configure-party`,
		position: {
			width: 500,
			height: 620
		},
		window: {
			title: "Configure Party",
			icon: "fa-solid fa-people-group",
			resizable: !0
		}
	};
	initialization;
	zones;
	closeGuard;
	closing = !1;
	async configureZones(e) {
		let t, n = new Promise((e) => {
			t = e;
		});
		this.zones = new Xg(e, t);
		try {
			return await this.zones.render(!0), await n;
		} finally {
			this.zones = void 0;
		}
	}
	async close() {
		if (this.closing) return this;
		this.closing = !0;
		try {
			let e = this.zones;
			return await e?.close(), e?.rendered || this.closeGuard && !await this.closeGuard() ? this : await super.close();
		} finally {
			this.closing = !1;
		}
	}
	async render(t) {
		return e.canCurrentUserAccess() && (this.initialization = await Dg()), super.render(t);
	}
	getVueComponent() {
		return h_;
	}
	getVueProps() {
		return {
			initialization: this.initialization,
			actions: {
				resolveDrop: Og,
				save: Eg,
				configure: (e) => this.configureZones(e),
				bindMenu: Ag,
				pickActor: Mg,
				bindCloseGuard: (e) => {
					this.closeGuard = e;
				},
				confirmClose: () => Pg(),
				close: () => {
					this.close();
				}
			}
		};
	}
};
async function __() {
	let e = new g_();
	return await e.render(!0), e;
}
// src/types/xp-award/XpAward.ts
var v_ = {
	batches: [],
	version: 1
}, y_ = 500;
function b_(e, t) {
	return {
		batches: [t, ...e.batches].slice(0, y_),
		version: 1
	};
}
function x_(e) {
	if (e === void 0) return {
		...v_,
		batches: []
	};
	if (typeof e != "string") throw Error("XP audit history is unreadable. No XP was applied.");
	try {
		let t = JSON.parse(e);
		if (!$(t) || t.version !== 1 || !Array.isArray(t.batches)) throw Error("Unsupported XP audit history.");
		let n = t.batches.flatMap(S_);
		if (n.length !== t.batches.length || t.batches.some((e, t) => !$(e) || !Array.isArray(e.awards) || e.awards.length !== n[t]?.awards.length)) throw Error("XP audit history contains invalid records.");
		return {
			batches: n.slice(0, y_),
			version: 1
		};
	} catch {
		throw Error("XP audit history is unreadable or unsupported. It has not been overwritten; no XP was applied.");
	}
}
function S_(e) {
	if (!$(e) || !Array.isArray(e.awards)) return [];
	let t = Sp(e.awardedAt), n = Q(e.id), r = Q(e.reason), i = Q(e.sessionReference), a = e.awards.flatMap(C_);
	return !t || !n || a.length === 0 ? [] : [{
		awardedAt: t,
		awards: a,
		id: n,
		reason: r,
		sessionReference: i,
		totalChange: a.reduce((e, t) => e + t.amount, 0)
	}];
}
function C_(e) {
	if (!$(e)) return [];
	let t = e.category, n = Number(e.amount), r = Number(e.beforeXp), i = Number(e.afterXp);
	return t !== "standard" && t !== "companion" || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i) ? [] : [{
		actorId: Q(e.actorId),
		actorName: Q(e.actorName),
		afterXp: Math.round(i),
		amount: Math.round(n),
		beforeXp: Math.round(r),
		category: t
	}];
}
// src/module/foundry/xp-award/settings/keys.ts
var w_ = {
	auditLog: "xpAwardAuditLog",
	defaultAmount: "xpAwardDefaultAmount",
	defaultReason: "xpAwardDefaultReason",
	defaultSelection: "xpAwardDefaultSelection",
	includeTimestampInReason: "xpAwardIncludeTimestampInReason"
};
// src/module/foundry/xp-award/settings/load.ts
function T_() {
	return {
		defaultAmount: Math.round(Number(game.settings.get(r, w_.defaultAmount))),
		defaultReason: k_(w_.defaultReason),
		defaultSelection: A_(),
		includeTimestampInReason: game.settings.get(r, w_.includeTimestampInReason) === !0
	};
}
async function E_(e) {
	let t = [
		[w_.defaultAmount, Math.round(e.defaultAmount)],
		[w_.defaultReason, e.defaultReason],
		[w_.defaultSelection, e.defaultSelection],
		[w_.includeTimestampInReason, e.includeTimestampInReason]
	];
	for (let [e, n] of t) await game.settings.set(r, e, n);
}
function D_() {
	return x_(game.settings.get(r, w_.auditLog));
}
async function O_(e) {
	await game.settings.set(r, w_.auditLog, JSON.stringify(e));
}
function k_(e) {
	let t = game.settings.get(r, e);
	return typeof t == "string" ? t : "";
}
function A_() {
	let e = k_(w_.defaultSelection);
	return e === "company" || e === "world" ? e : "party";
}
// src/module/functions/xp-award/reason.ts
function j_(e, t, n) {
	let r = e;
	return n && !r.includes("%datetime%") && (r = r.trim() ? `${r} — awarded %datetime%` : "Awarded %datetime%"), Gh(r, t);
}
function M_(e) {
	return `${e.slice(0, 10)} ${e.slice(11, 19)} UTC`;
}
// src/module/functions/session-management/submission.ts
function N_(e) {
	let t = Number(e);
	if (!e.trim() || !Number.isSafeInteger(t) || t < 0 || !Number.isSafeInteger(t + 1)) throw Error("Enter a whole session number of zero or more.");
	return String(t + 1);
}
function P_(e, t, n) {
	let r = new Date(n);
	if (Number.isNaN(r.getTime())) throw Error("Enter a valid session date and time.");
	let i = r.toISOString();
	return j_(e.defaultReason, {
		date: n.slice(0, 10),
		datetime: M_(i),
		session: t.trim()
	}, e.includeTimestampInReason);
}
function F_(e) {
	if (Number.isNaN(new Date(e.occurredAt).getTime())) throw Error("Enter a valid session date and time.");
	if (e.xp) {
		if (e.nextSessionReference !== N_(e.sessionReference)) throw Error("The next session must be one higher than the submitted session number.");
		if (!Number.isSafeInteger(e.xp.defaultAmount) || e.xp.defaultAmount < 0) throw Error("Enter a whole Session XP amount of zero or more.");
		if (e.xpAward && !e.xp.actorIds.length) throw Error("Select at least one XP recipient, or enter 0 XP.");
	}
}
function I_(e) {
	if (!e || typeof e != "object") return;
	let t = e;
	if (![
		"sessionReference",
		"nextSessionReference",
		"occurredAt"
	].every((e) => typeof t[e] == "string") || ![
		"chatExport",
		"fortuneReset",
		"holdingScene",
		"pause",
		"xpAward"
	].every((e) => typeof t[e] == "boolean")) return;
	let n = t.xp;
	if (n && (!Array.isArray(n.actorIds) || !n.actorIds.every((e) => typeof e == "string") || typeof n.defaultAmount != "number" || typeof n.defaultReason != "string" || typeof n.includeTimestampInReason != "boolean" || ![
		"party",
		"company",
		"world"
	].includes(String(n.defaultSelection)))) return;
	let r = e;
	try {
		return F_(r), r;
	} catch {
		return;
	}
}
function L_(e, t) {
	let n = new Date(t), r = Number.isNaN(n.getTime()) ? "Choose a date and time" : new Intl.DateTimeFormat(void 0, {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(n);
	return `Session ${e || "—"} · ${r}`;
}
// src/types/session-management/SessionManagement.ts
var R_ = {
	currentSessionReference: "",
	sessions: [],
	version: 1
}, z_ = 500;
function B_(e, t, n) {
	let r = t.sessionReference.trim(), i = t.nextSessionReference.trim(), a = Q_(t.occurredAt, "session occurrence"), o = Q_(n.recordedAt, "session record");
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
			sessions: [s, ...e.sessions].slice(0, z_)
		}
	};
}
function V_(e) {
	let t = Z_(e);
	if (!t || t.version !== 1) return {
		...R_,
		sessions: []
	};
	let n = Array.isArray(t.sessions) ? t.sessions.flatMap(G_).slice(0, z_) : [], r = K_(t.turnover);
	return {
		currentSessionReference: Q(t.currentSessionReference),
		sessions: n,
		...r ? { turnover: r } : {},
		version: 1
	};
}
function H_(e, t, n, r) {
	let i = t.trim(), a = Q_(n, "turnover start");
	if (!e || !i) throw Error("A turnover ID and session reference are required.");
	return {
		id: e,
		sessionReference: i,
		startedAt: a,
		steps: W_.map((e) => ({
			id: e,
			status: r.has(e) ? "pending" : "skipped"
		}))
	};
}
function U_(e, t, n, r, i) {
	let a = Q_(r, "turnover step");
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
var W_ = [
	"pause",
	"holding-scene",
	"xp",
	"fortune",
	"chat-export",
	"record"
];
function G_(e) {
	if (!$(e)) return [];
	let t = Q(e.id), n = Sp(e.occurredAt), r = Sp(e.recordedAt), i = Q(e.reference);
	return t && n && r && i ? [{
		id: t,
		occurredAt: n,
		recordedAt: r,
		reference: i
	}] : [];
}
function K_(e) {
	if (!$(e) || !Array.isArray(e.steps)) return;
	let t = Q(e.id), n = Q(e.sessionReference), r = Sp(e.startedAt), i = e.steps.flatMap((e) => {
		if (!$(e)) return [];
		let t = Q(e.id), n = Q(e.status);
		if (!Y_(t) || !X_(n)) return [];
		let r = Sp(e.finishedAt), i = Q(e.detail);
		return [{
			id: t,
			status: n,
			...r ? { finishedAt: r } : {},
			...i ? { detail: i } : {}
		}];
	}), a = I_(e.request), o = J_(e.xpApplied), s = q_(e.xpLogBaseline);
	return t && n && r && i.length === W_.length ? {
		id: t,
		sessionReference: n,
		startedAt: r,
		steps: i,
		...a ? { request: a } : {},
		...o.length ? { xpApplied: o } : {},
		...s ? { xpLogBaseline: s } : {}
	} : void 0;
}
function q_(e) {
	if (e !== void 0) {
		if (!$(e) || Array.isArray(e) || Object.values(e).some((e) => !Number.isSafeInteger(e) || Number(e) < 0)) throw Error("The saved session turnover's XP progress is unreadable. Check the actors' XP before continuing.");
		return e;
	}
}
function J_(e) {
	if (e === void 0) return [];
	let t = Array.isArray(e) ? e.flatMap(C_) : [];
	if (!Array.isArray(e) || t.length !== e.length || t.some((e) => !e.actorId)) throw Error("The saved session turnover's XP progress is unreadable. Check the actors' XP before continuing.");
	return t;
}
function Y_(e) {
	return W_.includes(e);
}
function X_(e) {
	return [
		"completed",
		"failed",
		"pending",
		"skipped"
	].includes(e);
}
function Z_(e) {
	if (typeof e == "string") try {
		let t = JSON.parse(e);
		return $(t) ? t : void 0;
	} catch {
		return;
	}
}
function Q_(e, t) {
	let n = new Date(e);
	if (Number.isNaN(n.getTime())) throw Error(`Enter a valid ${t} date and time.`);
	return n.toISOString();
}
// src/module/foundry/session-management/settings/keys.ts
var $_ = {
	options: "sessionTurnoverOptions",
	exportChat: "sessionExportChat",
	holdingSceneUuid: "sessionHoldingSceneUuid",
	pullPolicy: "sessionPullPolicy",
	state: "sessionManagementState"
};
// src/module/foundry/session-management/settings/load.ts
function ev() {
	return V_(game.settings.get(r, $_.state));
}
function tv() {
	return ev().currentSessionReference;
}
function nv() {
	let e = game.settings.get(r, $_.pullPolicy), t = av(), n = T_(), i = String(game.settings.get("wfrp4e-enhanced-fear-terror", $_.holdingSceneUuid) ?? "").trim();
	return {
		pause: t.pause !== !1,
		fortuneReset: t.fortuneReset !== !1,
		holdingScene: typeof t.holdingScene == "boolean" ? t.holdingScene : !!i,
		xp: {
			defaultAmount: typeof t.defaultAmount == "number" ? t.defaultAmount : Math.max(0, n.defaultAmount),
			defaultReason: typeof t.defaultReason == "string" ? t.defaultReason : n.defaultReason,
			defaultSelection: t.defaultSelection === "party" || t.defaultSelection === "company" || t.defaultSelection === "world" ? t.defaultSelection : n.defaultSelection,
			includeTimestampInReason: typeof t.includeTimestampInReason == "boolean" ? t.includeTimestampInReason : n.includeTimestampInReason
		},
		exportChat: game.settings.get(r, $_.exportChat) === !0,
		holdingSceneUuid: i,
		pullPolicy: e === "activate" || e === "prompt" ? e : "pull"
	};
}
async function rv(e) {
	e.xp && await game.settings.set(r, $_.options, JSON.stringify({
		pause: e.pause,
		fortuneReset: e.fortuneReset,
		holdingScene: e.holdingScene,
		...e.xp
	})), await game.settings.set(r, $_.holdingSceneUuid, e.holdingSceneUuid.trim()), await game.settings.set(r, $_.exportChat, e.exportChat), await game.settings.set(r, $_.pullPolicy, e.pullPolicy);
}
async function iv(e) {
	await game.settings.set(r, $_.state, JSON.stringify(e));
}
function av() {
	let e = game.settings.get(r, $_.options);
	if (typeof e != "string") return {};
	try {
		let t = JSON.parse(e);
		return t && typeof t == "object" && !Array.isArray(t) ? t : {};
	} catch {
		return {};
	}
}
// src/module/foundry/xp-curve/actors.ts
function ov(e) {
	let t = wg(), n = uv(), r = n === void 0 ? "default" : "targets";
	return {
		actors: Array.from(game.actors).filter((e) => e.type === "character").map((r) => {
			let i = t.categories.find((e) => e.actorIds.includes(r.id)), a = n?.has(r.id) ?? (e === "world" || (e === "party" ? i?.id === "party" : !!i));
			return cv(r, i?.id === "companions" ? "companion" : "standard", a, i?.xpPercent ?? 100, i?.name ?? "Other").choice;
		}).sort((e, t) => Number(t.selected) - Number(e.selected) || e.name.localeCompare(t.name)),
		selectionSource: r
	};
}
function sv(e) {
	let t = wg();
	return e.map((e) => {
		let n = game.actors.get(e);
		if (!n || n.type !== "character") throw Error(`XP recipient ${e} is no longer an available character actor.`);
		let r = t.categories.find((e) => e.actorIds.includes(n.id));
		return cv(n, r?.id === "companions" ? "companion" : "standard", !0, r?.xpPercent ?? 100, r?.name ?? "Other");
	});
}
function cv(e, t, n, r = 100, i = "Target") {
	let a = lv(e);
	return {
		awardExperience: a.awardExperience,
		choice: {
			category: t,
			xpPercent: r,
			categoryName: i,
			img: e.img || "icons/svg/mystery-man.svg",
			id: e.id,
			name: e.name,
			selected: n,
			totalXp: a.totalXp
		},
		xpLog: a.log
	};
}
function lv(e) {
	let t = e.system;
	if (!dv(t)) throw Error(`WFRP4e actor "${e.name}" does not expose readable system data.`);
	let n = t.details;
	if (!dv(n)) throw Error(`WFRP4e actor "${e.name}" does not expose XP data.`);
	let r = n.experience, i = dv(r) ? r.log : void 0;
	if (!dv(r) || !Number.isFinite(Number(r.total)) || !Number.isFinite(Number(r.spent)) || !Array.isArray(i)) throw Error(`WFRP4e actor "${e.name}" does not expose readable XP totals and log.`);
	return {
		awardExperience: async (t, n) => {
			let a = Number(r.total) + t, o = [...i, {
				reason: n,
				amount: t,
				spent: r.spent,
				total: a,
				type: "total"
			}];
			if (!await e.update({
				"system.details.experience.total": a,
				"system.details.experience.log": o
			})) throw Error(`The XP update for ${e.name} was cancelled.`);
		},
		log: i.map((e) => dv(e) ? {
			amount: e.amount,
			reason: e.reason,
			total: e.total
		} : {
			amount: void 0,
			reason: void 0,
			total: void 0
		}),
		totalXp: Math.max(0, Math.round(Number(r.total)))
	};
}
function uv() {
	let e = game.user?.targets;
	if (e && e.size !== 0) return new Set(Array.from(e).map((e) => e.actor).filter((e) => e?.type === "character").map((e) => e.id));
}
function dv(e) {
	return typeof e == "object" && !!e;
}
// src/module/foundry/xp-curve/roster.ts
function fv() {
	let e = [], t;
	for (let n of wg().categories) for (let r of n.actorIds) {
		let i = game.actors.get(r);
		if (!i || i.type !== "character") {
			t = `A member of ${n.name} is missing. Repair the roster in Configure Party.`;
			continue;
		}
		let a = cv(i, n.id === "companions" ? "companion" : "standard", !0, n.xpPercent, n.name);
		a.choice.categoryId = n.id, e.push(a);
	}
	return e.some(({ choice: e }) => e.categoryId === "party") || (t = "Add a character to the Party zone in Configure Party to establish the XP leader."), {
		actors: e.map(({ choice: e }) => e),
		runtimes: e,
		rosterIssue: t
	};
}
// src/module/foundry/xp-curve/initialization.ts
function pv() {
	let e = $l(), { actors: t, rosterIssue: n } = fv();
	return {
		...e,
		actors: t,
		rosterIssue: n,
		reasonContext: mv()
	};
}
function mv() {
	return {
		date: game.world.nextSession?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		session: tv()
	};
}
// src/module/foundry/xp-curve/service.ts
var hv = !1;
async function gv(e) {
	if (X(Y.xpCurveConsole), hv) throw Error("A Curve XP award is already in progress.");
	hv = !0;
	try {
		return await _v(e);
	} finally {
		hv = !1;
	}
}
async function _v(e) {
	let { actors: t, runtimes: n, rosterIssue: r } = fv();
	if (r) throw Error(r);
	let i = Rh($l().parameters), a = new Map(e.actors.map((e) => [e.id, e]));
	if (a.size !== e.actors.length || a.size !== t.length || t.some((e) => {
		let t = a.get(e.id);
		return !t || t.totalXp !== e.totalXp || t.xpPercent !== e.xpPercent || t.categoryId !== e.categoryId;
	}) || JSON.stringify(i) !== JSON.stringify(Rh(e.parameters))) throw Error("XP, the party roster, or curve settings changed after this preview. No XP was applied. Check any earlier partial award, then reopen Curve XP to review fresh amounts.");
	let o = zh(t, i);
	if (!o.leader || o.totalAward < 1) throw Error("This curve produces no XP awards for the configured party.");
	let s = e.reason.trim(), c = [];
	for (let [e, t] of n.entries()) {
		let n = o.awards[e];
		if (n.award !== 0) try {
			await t.awardExperience(n.award, s), c.push(n.actorName);
		} catch (e) {
			let t = e instanceof Error ? e.message : String(e);
			throw Error(`Could not award XP to ${n.actorName}. ${t}${c.length ? ` XP was already applied to ${c.join(", ")}.` : ""} Check the actors’ XP logs before trying again.`, { cause: e });
		}
	}
	let l = {
		...o,
		reason: s
	};
	try {
		await vv(l);
	} catch (e) {
		console.error("Drowsy's Toolkit | Curve XP applied, but chat summary failed.", e), ui.notifications.error("Curve XP was applied, but the chat summary failed. Do not award it again.");
	}
	return ui.notifications.info(`Awarded ${l.totalAward} total curve XP across ${c.length} characters.`), l;
}
async function vv(e) {
	let t = e.awards.filter((e) => e.award > 0).map((e) => `<li><strong>${Kh(e.actorName)}</strong>: +${e.award} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>Curve XP</h2><p>${Kh(e.reason)}</p><p>Party leader: ${Kh(e.leader?.name ?? "")} (${e.highestXp} XP)</p><ul>${t}</ul>`;
	await ChatMessage.create(game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" }));
}
// src/module/apps/xp-curve-console/view/XpCurveConsoleApplication.ts
var yv = class extends Uc {
	static ACCESS_POLICY = Y.xpCurveConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [r, `${r}-xp-curve-console`],
		id: `${r}-xp-curve-console`,
		position: {
			height: 420,
			width: 500
		},
		window: {
			icon: "fa-solid fa-chart-line",
			resizable: !0,
			title: "Curve XP"
		}
	};
	getVueComponent() {
		return gg;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: gv,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${r} | Failed to close the Curve XP.`, e), ui.notifications.error("XP awards completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				},
				openParty: () => {
					__();
				},
				close: () => {
					this.close();
				}
			},
			initialization: pv()
		};
	}
};
// src/module/apps/xp-curve-console/view/open.ts
async function bv() {
	let e = new yv();
	return await e.render(!0), e;
}
function xv() {
	bv().catch((e) => {
		console.error(`${r} | Failed to open the Curve XP.`, e), Kc("Drowsy’s WFRP4e Toolkit could not open the Curve XP. See the browser console for details.");
	});
}
// src/module/functions/xp-curve/setup.ts
var Sv = [
	{
		key: "catchUpRate",
		title: "Choose the catch-up pace",
		label: "Catch-up rate",
		min: 0,
		max: 1e3,
		increment: .5,
		unit: "%",
		guidance: "Drag the handle up for more help or down for less. At the default linear shape, 10% gives 100 XP for a 1,000 XP gap, before weakening and category rates. This is extra XP each session."
	},
	{
		key: "curveExponent",
		title: "Shape the help across gaps",
		label: "Gap weighting",
		min: .1,
		max: 5,
		increment: .05,
		unit: "",
		guidance: "Drag the handle to bend the curve. Keep 1 for a straight line. Above 1 favors gaps larger than 1,000 XP; below 1 gives relatively more help to smaller gaps. The award at a 1,000 XP gap stays fixed."
	},
	{
		key: "scalePivot",
		title: "Choose when help starts easing",
		label: "Start weakening above",
		min: 1,
		max: 1e6,
		increment: 100,
		unit: "total XP",
		guidance: "As WFRP characters advance, further improvements generally cost more XP. A gap between 5,000 and 10,000 XP can matter much less than 0 versus 2,000. Weakening focuses help on the early growth where being behind hurts most. Drag left or right to choose when that easing begins, using each character’s own total XP."
	},
	{
		key: "scaleExponent",
		title: "Choose how gently help eases",
		label: "Weakening strength",
		min: 0,
		max: 2,
		increment: .05,
		unit: "",
		guidance: "This decides how strongly you account for XP gaps becoming less significant as characters advance. Drag up for gentler weakening or down for stronger weakening. At 1, twice the previous step’s XP threshold means half the help. This is a campaign preference: set 0 to turn weakening off."
	},
	{
		key: "maximumAward",
		title: "Set the per-session ceiling",
		label: "Maximum curve XP per character",
		min: 0,
		max: 1e5,
		increment: 10,
		unit: "XP",
		guidance: "Drag the ceiling up or down. This limits each character’s final bonus after weakening and category rates. It does not change the catch-up pace. Zero disables curve awards."
	},
	{
		key: "review",
		title: "See how the campaign progresses",
		label: "",
		min: 0,
		max: 0,
		increment: 1,
		unit: "",
		guidance: "Compare the next curve award and a session-by-session forecast. Saving sets the curve for your world; it never grants XP. Use Curve XP to make an actual award."
	}
];
function Cv(e) {
	return {
		parameters: { ...e },
		previewMode: "party",
		sessions: 10,
		sessionXp: 100
	};
}
function wv() {
	return [
		{
			id: "example-leader",
			name: "Party leader",
			categoryId: "party",
			categoryName: "Party",
			totalXp: 2500,
			xpPercent: 100
		},
		{
			id: "example-new",
			name: "New character",
			categoryId: "party",
			categoryName: "Party",
			totalXp: 0,
			xpPercent: 100
		},
		{
			id: "example-established",
			name: "Established character",
			categoryId: "party",
			categoryName: "Party",
			totalXp: 1500,
			xpPercent: 100
		},
		{
			id: "example-companion",
			name: "Companion",
			categoryId: "companions",
			categoryName: "Companions",
			totalXp: 1e3,
			xpPercent: 50
		}
	].map((e) => ({
		...e,
		selected: !0,
		category: e.categoryId === "companions" ? "companion" : "standard",
		img: "icons/svg/mystery-man.svg"
	}));
}
function Tv(e, t) {
	let n = Sv[t];
	if (!Number.isFinite(e) || e < n.min || e > n.max) return `Enter a value between ${n.min} and ${n.max}.`;
	if (["scalePivot", "maximumAward"].includes(n.key) && !Number.isInteger(e)) return "Enter a whole XP amount.";
}
// src/module/foundry/xp-curve/configuration.ts
function Ev() {
	let e = $l(), { actors: t, rosterIssue: n } = fv();
	return {
		...e,
		actors: t,
		rosterIssue: n
	};
}
async function Dv(e) {
	X(Y.xpCurveConsole), await eu({
		defaultReason: e.defaultReason,
		parameters: Rh(e.parameters)
	}), ui.notifications.info("Curve XP configuration saved.");
}
async function Ov() {
	return await foundry.applications.api.DialogV2.confirm({
		window: { title: "Reset Curve XP to defaults?" },
		modal: !0,
		rejectClose: !1,
		content: "<p>Restore 10% catch-up, linear gap weighting, weakening above 1,000 XP at strength 1, and a 500 XP ceiling?</p><p>This changes your setup draft. Finish the steps and save to apply it.</p>"
	}) === !0;
}
async function kv() {
	return await foundry.applications.api.DialogV2.confirm({
		window: { title: "Discard Curve XP setup?" },
		modal: !0,
		rejectClose: !1,
		content: "<p>Your curve changes have not been saved. Discard them and close setup?</p>"
	}) === !0;
}
// src/module/functions/xp-award/calculate.ts
function Av(e, t) {
	let n = Number.isFinite(t) ? Math.round(t) : 0, r = e.filter((e) => e.selected).map((e) => {
		let t = e.xpPercent ?? 100, r = Math.floor(n * t / 100);
		if (!Number.isSafeInteger(r)) throw Error("The XP amount and percentage produce an invalid award.");
		let i = Math.max(r, -e.totalXp);
		return {
			actorId: e.id,
			actorName: e.name,
			afterXp: e.totalXp + i,
			amount: i,
			beforeXp: e.totalXp,
			category: e.category
		};
	});
	return {
		awards: r,
		totalChange: r.reduce((e, t) => e + t.amount, 0)
	};
}
// src/module/functions/xp-curve/simulation.ts
function jv(e, t, n, r) {
	if (!Number.isInteger(n) || n < 1 || n > 100) throw Error("Choose between 1 and 100 sessions.");
	if (!Number.isSafeInteger(r) || r < 0 || r > 1e5) throw Error("Choose ordinary session XP between 0 and 100,000.");
	let i = e.map((e) => ({ ...e })), a = [];
	for (let e = 1; e <= n; e++) {
		let n = Av(i, r), o = new Map(n.awards.map((e) => [e.actorId, e]));
		i = i.map((e) => ({
			...e,
			totalXp: o.get(e.id)?.afterXp ?? e.totalXp
		}));
		let s = zh(i, t), c = new Map(s.awards.map((e) => [e.actorId, e]));
		i = i.map((e) => ({
			...e,
			totalXp: c.get(e.id)?.afterXp ?? e.totalXp
		}));
		let l = Math.max(0, ...i.filter((e) => e.categoryId === "party").map((e) => e.totalXp));
		for (let t of i) a.push({
			session: e,
			actorId: t.id,
			actorName: t.name,
			ordinaryXp: o.get(t.id)?.amount ?? 0,
			curveXp: c.get(t.id)?.award ?? 0,
			totalXp: t.totalXp,
			gap: Math.max(0, l - t.totalXp)
		});
	}
	return a;
}
// src/types/xp-curve/Configuration.ts
var Mv = {
	...Jh,
	parameters: { ...Jh.parameters }
}, Nv = Ks("xp-curve-configurator", () => {
	let e = /* @__PURE__ */ P(Cv(Mv.parameters)), t = /* @__PURE__ */ P(0), n = /* @__PURE__ */ P({
		...Mv,
		actors: []
	}), r = /* @__PURE__ */ P(), i = /* @__PURE__ */ P(), a = /* @__PURE__ */ P(!1), o = /* @__PURE__ */ P(!1), s, c = K(() => Sv[t.value]), l = K(() => e.value.previewMode === "example" ? wv() : n.value.actors), u = K(() => zh(l.value, e.value.parameters)), d = K(() => !o.value && JSON.stringify(e.value.parameters) !== JSON.stringify(n.value.parameters)), f = K(() => c.value.key === "review" ? void 0 : Tv(e.value.parameters[c.value.key], t.value)), p = K(() => {
		try {
			return {
				rows: jv(l.value, e.value.parameters, e.value.sessions, e.value.sessionXp),
				error: void 0
			};
		} catch (e) {
			return {
				rows: [],
				error: e instanceof Error ? e.message : "Enter valid forecast assumptions."
			};
		}
	});
	function m(r, i, o, c = 0) {
		n.value = r, s = i, e.value = o ? {
			...o,
			parameters: { ...o.parameters }
		} : Cv(r.parameters), t.value = c, s.bindCloseGuard(async () => !a.value && (!d.value || await s.confirmClose()));
	}
	async function h() {
		if (!a.value) {
			a.value = !0;
			try {
				if (!await s.confirmReset()) return;
				e.value.parameters = { ...Mv.parameters }, i.value = "Defaults restored in this draft. Finish setup to save them.", r.value = void 0;
			} finally {
				a.value = !1;
			}
		}
	}
	async function g(t) {
		if (!(a.value || t > 0 && f.value)) {
			a.value = !0;
			try {
				await s.changeStep({
					...e.value,
					parameters: { ...e.value.parameters }
				}, t);
			} catch (e) {
				r.value = e instanceof Error ? e.message : "Could not open the next step.";
			} finally {
				a.value = !1;
			}
		}
	}
	async function _() {
		if (a.value || c.value.key !== "review") return;
		let t = Sv.slice(0, -1).findIndex((t, n) => t.key !== "review" && Tv(e.value.parameters[t.key], n));
		if (t >= 0) r.value = `Review step ${t + 1}: ${Sv[t].title}.`;
		else {
			a.value = !0, r.value = void 0;
			try {
				await s.saveConfiguration({
					defaultReason: n.value.defaultReason,
					parameters: { ...e.value.parameters }
				}), o.value = !0, a.value = !1, s.close();
			} catch (e) {
				r.value = e instanceof Error ? e.message : "The configuration could not be saved.";
			} finally {
				a.value = !1;
			}
		}
	}
	return {
		draft: e,
		stepIndex: t,
		step: c,
		initialization: n,
		previewActors: l,
		plan: u,
		forecast: p,
		hasChanges: d,
		inputError: f,
		errorMessage: r,
		statusMessage: i,
		isWorking: a,
		initialize: m,
		resetToDefaults: h,
		changeStep: g,
		saveConfiguration: _
	};
}), Pv = 5e3, Fv = 1e3;
function Iv(e, t, n = t) {
	let r = Math.max(t, n);
	for (; e >= r && Number.isFinite(r * 2);) r *= 2;
	for (; r > t && e <= r * .4;) r /= 2;
	return r;
}
function Lv(e, t, n, r) {
	let i = e === "catchUpRate" || e === "curveExponent", a = 0;
	e === "scalePivot" && (a = n.scalePivot), e === "scaleExponent" && (a = n.scalePivot * 2);
	for (let e of t) a = Math.max(a, i ? e.gap : e.beforeXp);
	let o = Iv(a, Pv, r?.maximumX), s = 1;
	return (i || e === "maximumAward" || e === "review") && (s = Iv(i ? Vh(o, n) : n.maximumAward, Fv, r?.maximumY)), {
		maximumX: o,
		maximumY: s,
		handleGap: o * .75
	};
}
function Rv(e, t, n, r = {}) {
	n = Rh(n);
	let i = zh(t, n), a = e === "scalePivot" || e === "scaleExponent", o = e === "maximumAward" || e === "review", s = r.frozen ?? Lv(e, i.awards, n, r.previous), c = (e, t) => ({
		x: Bv(e, s.maximumX),
		y: Vv(t, s.maximumY)
	}), l = o ? [...new Set(t.map((e) => e.xpPercent ?? 100))].filter((e) => e > 0) : [100], u = (l.length ? l : [100]).map((e) => ({
		label: o ? `${e}% category rate` : a ? "Catch-up strength" : "Initial curve XP",
		points: Array.from({ length: 61 }, (t, r) => {
			let l = r / 60 * s.maximumX, u = a ? Hh(l, n) : o ? Bh(Math.max(0, i.highestXp - l), l, n, e / 100) : Vh(l, n), d = c(l, u);
			return `${d.x.toFixed(1)},${d.y.toFixed(1)}`;
		}).join(" ")
	})), d = i.awards.map((e, t) => ({
		...c(a || o ? e.beforeXp : e.gap, a ? e.decayMultiplier : o ? e.award : e.catchUpValue),
		actorId: e.actorId,
		index: t + 1,
		label: `${e.actorName}: ${e.beforeXp} total XP, ${e.gap} XP behind; +${e.award} final curve XP`
	}));
	return {
		bounds: s,
		handle: e === "scalePivot" ? c(n.scalePivot, 1) : e === "scaleExponent" ? c(n.scalePivot * 2, Hh(n.scalePivot * 2, n)) : e === "maximumAward" ? c(s.maximumX * .5, n.maximumAward) : c(s.handleGap, Vh(s.handleGap, n)),
		series: u,
		markers: d,
		weakening: a,
		title: a ? "How much catch-up help remains" : o ? "Final curve XP at the current Party leader’s XP" : "Initial help before weakening and category rates",
		xLabel: a || o ? "Character total XP" : "XP gap below the Party leader",
		yLabel: a ? "Help remaining" : o ? "Final bonus XP" : "Initial bonus XP"
	};
}
function zv(e, t, n, r) {
	let i = Math.max(0, Math.min(1, (t.x - 68) / 472)) * n.maximumX, a = Math.max(0, Math.min(1, 1 - (t.y - 24) / 192)) * n.maximumY;
	return e === "scalePivot" ? Math.max(1, Math.min(1e6, Math.round(i))) : e === "maximumAward" ? Math.min(1e5, Math.round(a)) : e === "scaleExponent" ? Hv(Math.max(0, Math.min(2, Math.log(Math.max(.25, a)) / Math.log(.5)))) : e === "catchUpRate" ? Hv(Math.min(1e3, a / (10 * (n.handleGap / 1e3) ** r.curveExponent))) : r.catchUpRate === 0 ? r.curveExponent : Hv(Math.max(.1, Math.min(5, Math.log(Math.max(.001, a) / (r.catchUpRate * 10)) / Math.log(n.handleGap / 1e3))));
}
function Bv(e, t) {
	return 68 + e / Math.max(1, t) * 472;
}
function Vv(e, t) {
	return 24 + (1 - e / Math.max(.001, t)) * 192;
}
function Hv(e) {
	return Math.round(e * 100) / 100;
}
// src/module/apps/xp-curve-configurator/view/curve/graph/drag.ts
function Uv(e, t) {
	let n = /* @__PURE__ */ pn();
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
// src/module/apps/xp-curve-configurator/view/curve/graphMath.ts
function Wv(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: (t.clientX - n.left) / n.width * 560,
		y: (t.clientY - n.top) / n.height * 270
	};
}
// src/module/apps/xp-curve-configurator/view/curve/useStepGraph.ts
function Gv(e, t) {
	let { activeDrag: n, beginDrag: r, endDrag: i, updateDrag: a } = Uv(() => o.value.bounds, (n, r) => t(n.kind, zv(n.kind, Wv(n.svg, r), n.snapshot, e.parameters))), o = K((t) => Rv(e.step, e.actors, e.parameters, {
		previous: t?.bounds,
		frozen: n.value?.snapshot
	})), s = K(() => Sv.find((t) => t.key === e.step));
	function c(t) {
		e.step !== "review" && r(e.step, t);
	}
	function l(n) {
		if (e.step === "review" || ![
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight"
		].includes(n.key)) return;
		n.preventDefault();
		let r = n.key === "ArrowUp" || n.key === "ArrowRight" ? 1 : -1, i = e.step === "scaleExponent" ? -r : r, a = e.parameters[e.step] + i * s.value.increment;
		t(e.step, Math.round(Math.max(s.value.min, Math.min(s.value.max, a)) * 100) / 100);
	}
	return {
		graph: o,
		definition: s,
		start: c,
		endDrag: i,
		updateDrag: a,
		keydown: l
	};
}
// src/module/apps/xp-curve-configurator/view/curve/graph/GraphCanvas.vue?vue&type=script&setup=true&lang.ts
var Kv = ["viewBox", "aria-labelledby"], qv = ["id"], Jv = ["id"], Yv = [
	"x1",
	"x2",
	"y1",
	"y2"
], Xv = [
	"x1",
	"x2",
	"y1",
	"y2"
], Zv = [
	"x1",
	"x2",
	"y1",
	"y2"
], Qv = ["points", "stroke-dasharray"], $v = ["aria-label"], ey = ["cx", "cy"], ty = ["x", "y"], ny = ["x", "y"], ry = ["x", "y"], iy = ["x", "y"], ay = ["x", "y"], oy = ["x", "y"], sy = ["transform", "y"], cy = /* @__PURE__ */ L({
	__name: "GraphCanvas",
	props: {
		description: {},
		descriptionId: {},
		markers: {},
		maximumXLabel: {},
		minimumYLabel: {},
		series: {},
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
		return (t, r) => (B(), V("svg", {
			class: "tw:block tw:h-auto tw:w-full tw:max-w-[35rem] tw:touch-none tw:[user-select:none]",
			viewBox: `0 0 ${F(560)} ${F(270)}`,
			role: "group",
			"aria-labelledby": `${e.titleId} ${e.descriptionId}`,
			onPointercancel: r[0] ||= (e) => n("pointercancel", e),
			onPointermove: r[1] ||= (e) => n("pointermove", e),
			onPointerup: r[2] ||= (e) => n("pointerup", e)
		}, [
			H("title", { id: e.titleId }, k(e.title), 9, qv),
			H("desc", { id: e.descriptionId }, k(e.description), 9, Jv),
			H("line", {
				class: "tw:text-base-content/25!",
				x1: F(68),
				x2: F(68),
				y1: F(24),
				y2: F(24) + F(192),
				stroke: "currentColor"
			}, null, 8, Yv),
			H("line", {
				class: "tw:text-base-content/25!",
				x1: F(68),
				x2: F(68) + F(472),
				y1: F(24) + F(192),
				y2: F(24) + F(192),
				stroke: "currentColor"
			}, null, 8, Xv),
			H("line", {
				class: "tw:text-base-content/25!",
				x1: e.verticalGuideX,
				x2: e.verticalGuideX,
				y1: F(24),
				y2: F(24) + F(192),
				stroke: "currentColor",
				"stroke-dasharray": "4 5"
			}, null, 8, Zv),
			Jr(t.$slots, "guides"),
			(B(!0), V(z, null, R(e.series, (e, t) => (B(), V("polyline", {
				key: e.label,
				class: "tw:text-secondary!",
				fill: "none",
				points: e.points,
				"stroke-dasharray": t === 0 ? void 0 : `${3 + t * 2} 4`,
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "3"
			}, [H("title", null, k(e.label), 1)], 8, Qv))), 128)),
			(B(!0), V(z, null, R(e.markers, (e) => (B(), V("g", {
				key: e.actorId,
				class: "tw:text-base-content!",
				"aria-label": e.label,
				role: "img",
				tabindex: "0"
			}, [H("circle", {
				class: "tw:[r:14px] tw:@min-[28rem]:[r:9px]",
				cx: e.x,
				cy: e.y,
				fill: "currentColor",
				r: "9"
			}, [H("title", null, k(e.label), 1)], 8, ey), H("text", {
				class: "tw:text-[17px] tw:text-base-100! tw:@min-[28rem]:text-[9px]",
				x: e.x,
				y: e.y + 3,
				fill: "currentColor",
				"font-size": "9",
				"font-weight": "700",
				"text-anchor": "middle"
			}, k(e.index), 9, ty)], 8, $v))), 128)),
			Jr(t.$slots, "handles"),
			H("text", {
				class: "tw:text-[18px] tw:text-base-content/65! tw:@min-[28rem]:text-[11px]",
				x: F(68),
				y: F(24) + F(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "middle"
			}, " 0 ", 8, ny),
			H("text", {
				class: "tw:text-[18px] tw:text-base-content/65! tw:@min-[28rem]:text-[11px]",
				x: F(68) + F(472),
				y: F(24) + F(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, k(e.maximumXLabel), 9, ry),
			H("text", {
				class: "tw:text-[20px] tw:text-base-content/75! tw:@min-[28rem]:text-[12px]",
				x: F(68) + F(472) / 2,
				y: F(270) - 8,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, k(e.xAxisLabel), 9, iy),
			e.maximumYLabel ? (B(), V("text", {
				key: 0,
				class: "tw:text-[18px] tw:text-base-content/65! tw:@min-[28rem]:text-[11px]",
				x: F(68) - 10,
				y: F(24) + 4,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, k(e.maximumYLabel), 9, ay)) : G("", !0),
			H("text", {
				class: "tw:text-[18px] tw:text-base-content/65! tw:@min-[28rem]:text-[11px]",
				x: F(68) - 10,
				y: F(24) + F(192) + 3,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, k(e.minimumYLabel), 9, oy),
			H("text", {
				class: "tw:text-[20px] tw:text-base-content/75! tw:@min-[28rem]:text-[12px]",
				transform: `rotate(-90 16 ${F(24) + F(192) / 2})`,
				x: "16",
				y: F(24) + F(192) / 2,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, k(e.yAxisLabel), 9, sy),
			Jr(t.$slots, "labels")
		], 40, Kv));
	}
}), ly = [
	"role",
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], uy = ["cx", "cy"], dy = ["x", "y"], fy = ["x", "y"], py = /* @__PURE__ */ L({
	__name: "DiamondHandle",
	props: {
		label: {},
		x: {},
		y: {},
		valueMax: {},
		valueMin: {},
		valueNow: {},
		valueText: {},
		role: {}
	},
	emits: ["keydown", "pointerdown"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("g", {
			class: "tw:cursor-grab tw:text-secondary!",
			role: e.role ?? "slider",
			tabindex: "0",
			"aria-label": e.label,
			"aria-valuemax": e.valueMax,
			"aria-valuemin": e.valueMin,
			"aria-valuenow": e.valueNow,
			"aria-valuetext": e.valueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= ss((e) => n("pointerdown", e), ["stop"])
		}, [
			H("circle", {
				cx: e.x,
				cy: e.y,
				r: "40",
				fill: "transparent"
			}, null, 8, uy),
			H("rect", {
				x: e.x - 8,
				y: e.y - 8,
				fill: "currentColor",
				height: "16",
				rx: "2",
				stroke: "currentColor",
				"stroke-width": "8",
				"stroke-opacity": "0.18",
				width: "16"
			}, null, 8, dy),
			H("rect", {
				class: "tw:text-base-100!",
				x: e.x - 3,
				y: e.y - 3,
				fill: "currentColor",
				height: "6",
				rx: "1",
				width: "6"
			}, null, 8, fy)
		], 40, ly));
	}
}), my = { class: "tw:@container tw:m-0 tw:min-w-0" }, hy = { class: "tw:mt-0! tw:mb-1 tw:text-left! tw:text-sm tw:font-semibold tw:text-base-content! tw:not-italic!" }, gy = [
	"x1",
	"x2",
	"y1",
	"y2"
], _y = {
	key: 0,
	class: "tw:my-1 tw:text-xs"
}, vy = {
	key: 1,
	class: "tw:text-sm"
}, yy = {
	key: 2,
	class: "tw:my-1 tw:text-xs"
}, by = /* @__PURE__ */ L({
	__name: "CurveStepGraph",
	props: {
		actors: {},
		parameters: {},
		step: {}
	},
	emits: ["update"],
	setup(e, { emit: t }) {
		let n = e, r = t, { graph: i, definition: a, start: o, endDrag: s, updateDrag: c, keydown: l } = Gv(n, (e, t) => r("update", e, t));
		return (t, n) => (B(), V("figure", my, [
			H("figcaption", hy, k(F(i).title), 1),
			U(cy, {
				description: `${F(i).xLabel} on the horizontal axis; ${F(i).yLabel} on the vertical axis. Numbered markers match the portraits below.`,
				"description-id": "curve-description",
				"title-id": "curve-title",
				title: F(i).title,
				markers: F(i).markers,
				"maximum-x-label": `${Math.round(F(i).bounds.maximumX)} XP`,
				"minimum-y-label": F(i).weakening ? "0%" : "0",
				"maximum-y-label": F(i).weakening ? "100%" : `${Math.round(F(i).bounds.maximumY)}`,
				series: F(i).series,
				"vertical-guide-x": F(i).handle.x,
				"x-axis-label": F(i).xLabel,
				"y-axis-label": F(i).yLabel,
				onPointercancel: F(s),
				onPointermove: F(c),
				onPointerup: F(s)
			}, {
				guides: ir(() => [e.step === "maximumAward" ? (B(), V("line", {
					key: 0,
					x1: F(68),
					x2: F(68) + F(472),
					y1: F(i).handle.y,
					y2: F(i).handle.y,
					stroke: "currentColor",
					"stroke-dasharray": "5 5"
				}, null, 8, gy)) : G("", !0)]),
				handles: ir(() => [e.step === "review" ? G("", !0) : (B(), Ca(py, {
					key: 0,
					label: F(a).label,
					"value-min": F(a).min,
					"value-max": F(a).max,
					"value-now": e.parameters[e.step],
					"value-text": `${e.parameters[e.step]} ${F(a).unit}`,
					x: F(i).handle.x,
					y: F(i).handle.y,
					onPointerdown: F(o),
					onKeydown: F(l)
				}, null, 8, [
					"label",
					"value-min",
					"value-max",
					"value-now",
					"value-text",
					"x",
					"y",
					"onPointerdown",
					"onKeydown"
				]))]),
				_: 1
			}, 8, [
				"description",
				"title",
				"markers",
				"maximum-x-label",
				"minimum-y-label",
				"maximum-y-label",
				"series",
				"vertical-guide-x",
				"x-axis-label",
				"y-axis-label",
				"onPointercancel",
				"onPointermove",
				"onPointerup"
			]),
			e.step === "review" ? G("", !0) : (B(), V("p", _y, " Drag the square handle, focus it and use arrow keys, or enter a value below. ")),
			e.step === "curveExponent" && e.parameters.catchUpRate === 0 ? (B(), V("p", vy, " The pace is zero, so this curve has no height to shape. Go Back to increase the pace first. ")) : G("", !0),
			F(i).series.length > 1 ? (B(), V("p", yy, " Lines show the configured category rates. Portrait markers include their category’s percentage. ")) : G("", !0)
		]));
	}
}), xy = {
	class: "tw:mt-5 tw:min-w-0 tw:border-t tw:border-base-content/20 tw:pt-3",
	"aria-label": "Session projection"
}, Sy = { class: "tw:my-2 tw:text-base" }, Cy = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2 tw:text-sm" }, wy = {
	key: 0,
	class: "tw:text-sm tw:text-error",
	role: "alert"
}, Ty = {
	key: 1,
	class: "tw:text-sm"
}, Ey = {
	key: 2,
	class: "tw:max-h-72 tw:min-w-0 tw:max-w-full tw:overflow-x-auto tw:overflow-y-auto",
	tabindex: "0",
	"aria-label": "Session results"
}, Dy = { class: "tw:dui-table tw:dui-table-sm tw:bg-base-100! tw:text-base-content!" }, Oy = { scope: "row" }, ky = /* @__PURE__ */ L({
	__name: "CurveForecast",
	props: /*@__PURE__*/ ti({
		rows: {},
		error: {},
		hasLeader: { type: Boolean },
		example: { type: Boolean }
	}, {
		sessions: { required: !0 },
		sessionsModifiers: {},
		sessionXp: { required: !0 },
		sessionXpModifiers: {}
	}),
	emits: ["update:sessions", "update:sessionXp"],
	setup(e) {
		let t = Si(e, "sessions"), n = Si(e, "sessionXp");
		return (r, i) => (B(), V("section", xy, [
			H("h3", Sy, k(e.example ? "Example" : "Party") + " session projection", 1),
			H("div", Cy, [
				i[2] ||= H("label", { for: "curve-sessions" }, "After", -1),
				I(H("input", {
					id: "curve-sessions",
					"onUpdate:modelValue": i[0] ||= (e) => t.value = e,
					class: "tw:dui-input tw:dui-input-sm tw:w-20",
					type: "number",
					min: "1",
					max: "100",
					step: "1",
					"aria-label": "Number of simulated sessions"
				}, null, 512), [[
					q,
					t.value,
					void 0,
					{ number: !0 }
				]]),
				i[3] ||= H("label", { for: "curve-session-xp" }, "sessions, at", -1),
				I(H("input", {
					id: "curve-session-xp",
					"onUpdate:modelValue": i[1] ||= (e) => n.value = e,
					class: "tw:dui-input tw:dui-input-sm tw:w-24",
					type: "number",
					min: "0",
					max: "100000",
					step: "1",
					"aria-label": "Ordinary XP per session"
				}, null, 512), [[
					q,
					n.value,
					void 0,
					{ number: !0 }
				]]),
				i[4] ||= H("span", null, "ordinary XP per session:", -1)
			]),
			i[7] ||= H("p", { class: "tw:my-2 tw:text-xs" }, " Ordinary XP is awarded first using category percentages, then Curve XP once. The Party leader is recalculated each session. These inputs only change this forecast. ", -1),
			e.error ? (B(), V("p", wy, k(e.error), 1)) : e.hasLeader ? (B(), V("div", Ey, [H("table", Dy, [
				i[5] ||= H("caption", { class: "tw:sr-only" }, " XP gained and resulting totals for every simulated session ", -1),
				i[6] ||= H("thead", { class: "tw:bg-base-200! tw:text-base-content!" }, [H("tr", null, [
					H("th", { scope: "col" }, "Session"),
					H("th", { scope: "col" }, "Character"),
					H("th", { scope: "col" }, "Ordinary"),
					H("th", { scope: "col" }, "Curve"),
					H("th", { scope: "col" }, "Total XP"),
					H("th", { scope: "col" }, "Gap")
				])], -1),
				H("tbody", null, [(B(!0), V(z, null, R(e.rows, (e) => (B(), V("tr", {
					key: `${e.session}-${e.actorId}`,
					class: "tw:even:bg-base-200!"
				}, [
					H("td", null, k(e.session), 1),
					H("th", Oy, k(e.actorName), 1),
					H("td", null, "+" + k(e.ordinaryXp), 1),
					H("td", null, "+" + k(e.curveXp), 1),
					H("td", null, k(e.totalXp), 1),
					H("td", null, k(e.gap), 1)
				]))), 128))])
			])])) : (B(), V("p", Ty, " A Party-zone leader is needed to project catch-up. ")),
			i[8] ||= H("p", { class: "tw:mb-0 tw:text-xs" }, " The gap is a guide to progress. Similar XP totals do not guarantee equal character effectiveness. ", -1)
		]));
	}
}), Ay = { class: "tw:shrink-0 tw:border-b tw:border-base-content/20 tw:p-4" }, jy = { class: "tw:m-0 tw:text-xs" }, My = { class: "tw:my-1 tw:border-0! tw:text-xl" }, Ny = { class: "tw:m-0 tw:text-sm" }, Py = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Fy = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:mb-3",
	role: "alert"
}, Iy = {
	key: 1,
	class: "tw:mb-3 tw:text-sm",
	role: "status"
}, Ly = {
	class: "tw:mb-3 tw:flex tw:flex-wrap tw:items-center tw:gap-2",
	role: "group",
	"aria-label": "Preview actors"
}, Ry = ["aria-pressed"], zy = ["aria-pressed"], By = {
	key: 2,
	class: "tw:mb-3 tw:text-sm",
	role: "status"
}, Vy = ["disabled"], Hy = ["disabled"], Uy = {
	key: 0,
	class: "tw:my-3 tw:flex tw:flex-wrap tw:items-center tw:gap-2"
}, Wy = {
	for: "curve-step-value",
	class: "tw:text-sm tw:font-semibold"
}, Gy = ["min", "max"], Ky = { class: "tw:text-sm" }, qy = {
	key: 0,
	class: "tw:text-sm tw:text-error",
	role: "alert"
}, Jy = { class: "tw:flex tw:shrink-0 tw:flex-wrap tw:items-center tw:justify-between tw:gap-2 tw:border-t tw:border-base-content/20 tw:p-3" }, Yy = ["disabled"], Xy = { class: "tw:flex tw:flex-wrap tw:gap-2" }, Zy = ["disabled"], Qy = ["disabled"], $y = ["disabled"], eb = {
	key: 0,
	class: "fa-solid fa-arrow-right",
	"aria-hidden": "true"
}, tb = /* @__PURE__ */ L({
	__name: "XpCurveConfiguratorApp",
	props: {
		actions: {},
		initialization: {},
		initialDraft: {},
		initialStep: {}
	},
	setup(e) {
		let t = e, n = Nv();
		n.initialize(t.initialization, t.actions, t.initialDraft, t.initialStep);
		let { draft: r, stepIndex: i, step: a, previewActors: o, plan: s, forecast: c, inputError: l, errorMessage: u, statusMessage: d, isWorking: f } = qs(n);
		return (t, p) => (B(), V("form", {
			class: "tw:flex tw:h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-100! tw:text-base-content!",
			onSubmit: p[11] ||= ss((e) => F(a).key === "review" ? F(n).saveConfiguration() : F(n).changeStep(1), ["prevent"])
		}, [
			H("header", Ay, [
				H("p", jy, "Step " + k(F(i) + 1) + " of " + k(F(Sv).length), 1),
				H("h2", My, k(F(a).title), 1),
				H("p", Ny, k(F(a).guidance), 1)
			]),
			H("div", Py, [
				F(u) ? (B(), V("p", Fy, k(F(u)), 1)) : G("", !0),
				F(d) ? (B(), V("p", Iy, k(F(d)), 1)) : G("", !0),
				H("div", Ly, [
					p[12] ||= H("span", { class: "tw:text-sm" }, "Show on the curve:", -1),
					H("button", {
						class: ke(["tw:dui-btn tw:dui-btn-sm", { "tw:dui-btn-primary": F(r).previewMode === "party" }]),
						type: "button",
						"aria-pressed": F(r).previewMode === "party",
						onClick: p[0] ||= (e) => F(r).previewMode = "party"
					}, " My party ", 10, Ry),
					H("button", {
						class: ke(["tw:dui-btn tw:dui-btn-sm", { "tw:dui-btn-primary": F(r).previewMode === "example" }]),
						type: "button",
						"aria-pressed": F(r).previewMode === "example",
						onClick: p[1] ||= (e) => F(r).previewMode = "example"
					}, " Example ", 10, zy)
				]),
				F(r).previewMode === "party" && e.initialization.rosterIssue ? (B(), V("p", By, [
					W(k(e.initialization.rosterIssue) + " ", 1),
					H("button", {
						class: "tw:dui-btn tw:dui-btn-sm",
						type: "button",
						onClick: p[2] ||= (...t) => e.actions.openParty && e.actions.openParty(...t)
					}, " Configure Party "),
					H("button", {
						class: "tw:dui-btn tw:dui-btn-sm",
						type: "button",
						disabled: F(f),
						onClick: p[3] ||= (e) => F(n).changeStep(0)
					}, " Refresh party ", 8, Vy)
				])) : G("", !0),
				H("fieldset", {
					disabled: F(f),
					class: "tw:m-0 tw:min-w-0 tw:border-0 tw:p-0"
				}, [
					U(by, {
						actors: F(o),
						parameters: F(r).parameters,
						step: F(a).key,
						onUpdate: p[4] ||= (e, t) => F(r).parameters[e] = t
					}, null, 8, [
						"actors",
						"parameters",
						"step"
					]),
					F(a).key === "review" ? G("", !0) : (B(), V("div", Uy, [
						H("label", Wy, k(F(a).label), 1),
						I(H("input", {
							id: "curve-step-value",
							"onUpdate:modelValue": p[5] ||= (e) => F(r).parameters[F(a).key] = e,
							class: "tw:dui-input tw:dui-input-sm tw:w-28",
							type: "number",
							min: F(a).min,
							max: F(a).max,
							step: "any",
							required: ""
						}, null, 8, Gy), [[
							q,
							F(r).parameters[F(a).key],
							void 0,
							{ number: !0 }
						]]),
						H("span", Ky, k(F(a).unit), 1),
						F(l) ? (B(), V("span", qy, k(F(l)), 1)) : G("", !0)
					])),
					U(og, {
						actors: F(o),
						plan: F(s),
						numbered: !0
					}, null, 8, ["actors", "plan"]),
					F(a).key === "review" ? (B(), Ca(ky, {
						key: 1,
						sessions: F(r).sessions,
						"onUpdate:sessions": p[6] ||= (e) => F(r).sessions = e,
						"session-xp": F(r).sessionXp,
						"onUpdate:sessionXp": p[7] ||= (e) => F(r).sessionXp = e,
						rows: F(c).rows,
						error: F(c).error,
						"has-leader": !!F(s).leader,
						example: F(r).previewMode === "example"
					}, null, 8, [
						"sessions",
						"session-xp",
						"rows",
						"error",
						"has-leader",
						"example"
					])) : G("", !0)
				], 8, Hy)
			]),
			H("footer", Jy, [H("button", {
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-btn-ghost",
				type: "button",
				disabled: F(f),
				onClick: p[8] ||= (...e) => F(n).resetToDefaults && F(n).resetToDefaults(...e)
			}, [...p[13] ||= [H("i", {
				class: "fa-solid fa-arrow-rotate-left",
				"aria-hidden": "true"
			}, null, -1), W(" Reset to defaults ", -1)]], 8, Yy), H("div", Xy, [
				H("button", {
					class: "tw:dui-btn tw:dui-btn-sm",
					type: "button",
					disabled: F(f),
					onClick: p[9] ||= (...t) => e.actions.close && e.actions.close(...t)
				}, " Cancel ", 8, Zy),
				F(i) > 0 ? (B(), V("button", {
					key: 0,
					class: "tw:dui-btn tw:dui-btn-sm",
					type: "button",
					disabled: F(f),
					onClick: p[10] ||= (e) => F(n).changeStep(-1)
				}, " Back ", 8, Qy)) : G("", !0),
				H("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-btn-primary",
					type: "submit",
					disabled: F(f) || !!F(l)
				}, [W(k(F(f) ? "Please wait…" : F(a).key === "review" ? "Save configuration" : "Continue") + " ", 1), F(a).key === "review" ? G("", !0) : (B(), V("i", eb))], 8, $y)
			])])
		], 32));
	}
}), nb = class extends Uc {
	static ACCESS_POLICY = Y.xpCurveConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${r}-xp-curve-configurator`,
		position: {
			height: 740,
			width: 680
		},
		window: {
			icon: "fa-solid fa-chart-line",
			resizable: !0,
			title: "Configure Curve XP"
		}
	};
	initialization;
	draft;
	stepIndex = 0;
	closeGuard;
	closing = !1;
	async close() {
		if (this.closing) return this;
		this.closing = !0;
		try {
			return this.closeGuard && !await this.closeGuard() ? this : await super.close();
		} finally {
			this.closing = !1;
		}
	}
	getVueComponent() {
		return tb;
	}
	getVueProps() {
		return this.initialization ??= Ev(), {
			actions: {
				saveConfiguration: Dv,
				changeStep: async (e, t) => {
					this.draft = e, this.stepIndex = Math.max(0, Math.min(Sv.length - 1, this.stepIndex + t));
					let n = Ev();
					this.initialization = {
						...this.initialization,
						actors: n.actors,
						rosterIssue: n.rosterIssue
					}, await this.render(!0);
				},
				confirmReset: Ov,
				confirmClose: kv,
				bindCloseGuard: (e) => {
					this.closeGuard = e;
				},
				close: () => {
					this.close();
				},
				openParty: () => {
					__();
				}
			},
			initialization: this.initialization,
			initialDraft: this.draft,
			initialStep: this.stepIndex
		};
	}
};
// src/module/apps/xp-curve-configurator/view/open.ts
async function rb() {
	let e = new nb();
	return await e.render(!0), e;
}
// src/module/functions/session-management/form.ts
function ib(e) {
	let t = structuredClone(e), n = e.state.turnover?.steps.some((e) => e.status === "failed" || e.status === "pending") ? e.state.turnover.request : void 0;
	return n?.xp && (t.settings.xp = { ...n.xp }), {
		initialization: t,
		form: {
			currentSessionReference: n?.sessionReference ?? (e.state.currentSessionReference || "1"),
			occurredAtLocal: n?.occurredAt ?? e.occurredAtLocal,
			amount: n?.xp?.defaultAmount ?? e.settings.xp.defaultAmount,
			actors: e.actors.map((e) => ({
				...e,
				selected: n?.xp ? n.xp.actorIds.includes(e.id) : e.selected
			}))
		}
	};
}
function ab(e, t) {
	return {
		chatExport: t.exportChat,
		fortuneReset: t.fortuneReset,
		holdingScene: t.holdingScene,
		pause: t.pause,
		xpAward: e.amount > 0,
		sessionReference: e.currentSessionReference,
		nextSessionReference: N_(e.currentSessionReference),
		occurredAt: e.occurredAtLocal,
		xp: {
			...t.xp,
			defaultAmount: e.amount,
			actorIds: e.actors.filter((e) => e.selected).map((e) => e.id)
		}
	};
}
function ob(e, t, n) {
	return {
		...e,
		turnover: t.operation,
		...t.record ? {
			sessions: [t.record, ...e.sessions].slice(0, 500),
			currentSessionReference: t.operation.request?.nextSessionReference ?? n
		} : {}
	};
}
function sb(e, t, n, r) {
	return {
		form: {
			...e,
			amount: e.amount === n.xp.defaultAmount ? r.settings.xp.defaultAmount : e.amount,
			currentSessionReference: r.currentSessionReference === t ? e.currentSessionReference : r.currentSessionReference
		},
		reloadActors: r.settings.xp.defaultSelection !== n.xp.defaultSelection
	};
}
// src/module/apps/session-management/state/store.ts
var cb = Ks("session-management", () => {
	let e = /* @__PURE__ */ P(), t = /* @__PURE__ */ P(""), n = /* @__PURE__ */ P(""), r = /* @__PURE__ */ P(0), i = /* @__PURE__ */ P([]), a = /* @__PURE__ */ P("end"), o = /* @__PURE__ */ P(), s = /* @__PURE__ */ P(), c = /* @__PURE__ */ P(!1), l = /* @__PURE__ */ P(!1), u, d = K(() => e.value.state), f = K(() => e.value.settings), p = K(() => d.value.turnover?.steps.some((e) => e.status === "failed" || e.status === "pending") ?? !1), m = K(() => {
		try {
			return N_(t.value);
		} catch {
			return "";
		}
	}), h = K(() => !!n.value && !Number.isNaN(new Date(n.value).getTime())), g = K(() => Av(i.value, r.value)), _ = K(() => h.value ? P_(f.value.xp, t.value, n.value) : ""), v = K(() => !c.value && !l.value && !!m.value && h.value && Number.isSafeInteger(r.value) && r.value >= 0 && (r.value === 0 || g.value.awards.length > 0));
	function y(t, n) {
		u = n;
		let r = ib(t);
		e.value = r.initialization, x(r.form);
	}
	function b() {
		return {
			actors: i.value,
			amount: r.value,
			currentSessionReference: t.value,
			occurredAtLocal: n.value
		};
	}
	function x(e) {
		i.value = e.actors, r.value = e.amount, t.value = e.currentSessionReference, n.value = e.occurredAtLocal;
	}
	async function ee() {
		if (v.value) {
			c.value = !0, o.value = void 0, s.value = void 0;
			try {
				let n = ab(b(), f.value), r = await u.runSessionTurnover(n);
				e.value.state = ob(d.value, r, n.nextSessionReference), r.record && (t.value = d.value.currentSessionReference, s.value = `Session ${r.record.reference} completed. Ready for session ${t.value}.`);
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Session turnover failed.", e), o.value = e instanceof Error ? e.message : "The session could not be completed.", y(u.reload(), u);
			} finally {
				c.value = !1;
			}
		}
	}
	async function te() {
		if (!(c.value || p.value || l.value)) {
			l.value = !0;
			try {
				await u.openSettings((t) => {
					let n = sb(b(), d.value.currentSessionReference, f.value, t);
					x(n.form), e.value.settings = t.settings, d.value.currentSessionReference = t.currentSessionReference, n.reloadActors && (i.value = u.reload().actors);
				});
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Session settings failed.", e), o.value = e instanceof Error ? e.message : "Could not open session settings.";
			} finally {
				l.value = !1;
			}
		}
	}
	return {
		activeTab: a,
		actors: i,
		amount: r,
		canConfirm: v,
		confirm: ee,
		currentSessionReference: t,
		errorMessage: o,
		initialize: y,
		isSettingsOpen: l,
		isWorking: c,
		nextSessionReference: m,
		occurredAtLocal: n,
		openSettings: te,
		pending: p,
		plan: g,
		reason: _,
		settings: f,
		state: d,
		statusMessage: s
	};
}), lb = { class: "tw:grid tw:min-h-0 tw:flex-1 tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:gap-4 tw:@max-[32rem]:grid-cols-1 tw:@max-[32rem]:grid-rows-[minmax(0,1.3fr)_minmax(0,1fr)]" }, ub = { class: "tw:flex tw:min-h-0 tw:min-w-0 tw:flex-col tw:gap-3" }, db = ["disabled"], fb = {
	class: "tw:grid tw:gap-1 tw:text-sm tw:@max-[32rem]:col-span-2",
	for: "session-occurred-at"
}, pb = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-xp"
}, mb = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-number"
}, hb = ["value"], gb = {
	"aria-labelledby": "session-preview-title",
	class: "tw:flex tw:min-h-0 tw:flex-1 tw:flex-col tw:gap-2"
}, _b = {
	class: "tw:min-h-0 tw:overflow-y-auto tw:rounded-box tw:border tw:border-base-content/20 tw:bg-base-100! tw:p-3 tw:text-sm tw:break-words",
	"aria-live": "polite"
}, vb = { class: "tw:mt-1 tw:mb-3" }, yb = { class: "tw:mt-1 tw:mb-0" }, bb = {
	key: 0,
	class: "tw:mt-2 tw:mb-0 tw:text-xs tw:text-base-content/70!"
}, xb = {
	class: "tw:flex tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:rounded-box tw:border tw:border-base-content/20 tw:bg-base-100!",
	"aria-labelledby": "session-recipients-title"
}, Sb = { class: "tw:shrink-0 tw:border-b tw:border-base-content/15 tw:p-3" }, Cb = {
	id: "session-recipients-title",
	class: "tw:m-0 tw:font-serif tw:text-lg"
}, wb = { class: "tw:text-sm tw:font-normal" }, Tb = { class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:overscroll-contain tw:p-2" }, Eb = { class: "tw:min-w-0 tw:flex-1 tw:break-words tw:text-sm" }, Db = { class: "tw:block tw:font-semibold" }, Ob = { class: "tw:block tw:text-xs tw:text-base-content/65!" }, kb = [
	"onUpdate:modelValue",
	"aria-label",
	"disabled"
], Ab = {
	key: 0,
	class: "tw:p-3 tw:text-sm"
}, jb = { class: "tw:flex tw:shrink-0 tw:items-center tw:justify-between tw:gap-3 tw:border-t tw:border-base-content/15 tw:pt-3" }, Mb = { class: "tw:min-w-0 tw:text-sm" }, Nb = { class: "tw:m-0" }, Pb = { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/65!" }, Fb = ["disabled"], Ib = {
	key: 0,
	class: "tw:dui-loading tw:dui-loading-spinner tw:dui-loading-sm",
	"aria-hidden": "true"
}, Lb = /* @__PURE__ */ L({
	__name: "SessionEndPanel",
	setup(e) {
		let t = cb(), { actors: n, amount: r, canConfirm: i, currentSessionReference: a, isSettingsOpen: o, isWorking: s, nextSessionReference: c, occurredAtLocal: l, pending: u, plan: d, reason: f, settings: p } = qs(t);
		return (e, m) => (B(), V("form", {
			id: "session-end",
			role: "tabpanel",
			"aria-labelledby": "session-tab-end",
			class: "tw:flex tw:min-h-0 tw:flex-1 tw:flex-col tw:gap-3 tw:p-4",
			onSubmit: m[3] ||= ss((...e) => F(t).confirm && F(t).confirm(...e), ["prevent"])
		}, [H("div", lb, [H("div", ub, [H("fieldset", {
			class: "tw:m-0 tw:grid tw:gap-3 tw:border-0 tw:p-0 tw:@max-[32rem]:grid-cols-2",
			disabled: F(s) || F(u) || F(o)
		}, [
			H("label", fb, [m[4] ||= H("span", null, "Date & time", -1), I(H("input", {
				id: "session-occurred-at",
				"onUpdate:modelValue": m[0] ||= (e) => /* @__PURE__ */ N(l) ? l.value = e : null,
				class: "tw:dui-input tw:dui-input-sm tw:min-w-0 tw:w-full tw:bg-base-100!",
				type: "datetime-local",
				required: ""
			}, null, 512), [[q, F(l)]])]),
			H("label", pb, [m[5] ||= H("span", null, "Session XP", -1), I(H("input", {
				id: "session-xp",
				"onUpdate:modelValue": m[1] ||= (e) => /* @__PURE__ */ N(r) ? r.value = e : null,
				class: "tw:dui-input tw:dui-input-sm tw:w-full tw:bg-base-100!",
				type: "number",
				min: "0",
				step: "1",
				required: ""
			}, null, 512), [[
				q,
				F(r),
				void 0,
				{ number: !0 }
			]])]),
			H("label", mb, [m[6] ||= H("span", null, "Session number", -1), H("input", {
				id: "session-number",
				value: F(a),
				class: "tw:dui-input tw:dui-input-sm tw:w-full tw:bg-base-100!",
				type: "number",
				min: "0",
				step: "1",
				required: "",
				onInput: m[2] ||= (e) => a.value = e.target.value
			}, null, 40, hb)])
		], 8, db), H("section", gb, [m[9] ||= H("h2", {
			id: "session-preview-title",
			class: "tw:m-0 tw:font-serif tw:text-lg"
		}, "Preview", -1), H("div", _b, [
			m[7] ||= H("p", { class: "tw:m-0 tw:font-semibold" }, "Session log", -1),
			H("p", vb, k(F(L_)(F(a), F(l))), 1),
			m[8] ||= H("p", { class: "tw:m-0 tw:font-semibold" }, "XP entries", -1),
			H("p", yb, k(F(r) > 0 ? F(f) || "Choose a date and time" : "No XP will be awarded."), 1),
			F(r) > 0 ? (B(), V("p", bb, " Amounts appear beside each selected recipient. XP rates come from Configure Party. ")) : G("", !0)
		])])]), H("section", xb, [H("div", Sb, [H("h2", Cb, [m[10] ||= W(" Recipients ", -1), H("span", wb, "(" + k(F(d).awards.length) + ")", 1)])]), H("div", Tb, [(B(!0), V(z, null, R(F(n), (e) => (B(), V("label", {
			key: e.id,
			class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-3 tw:rounded-box tw:p-3 tw:hover:bg-base-200"
		}, [
			m[11] ||= H("i", {
				class: "fa-solid fa-user tw:shrink-0 tw:text-xl tw:text-base-content/60!",
				"aria-hidden": "true"
			}, null, -1),
			H("span", Eb, [H("span", Db, k(e.name), 1), H("span", Ob, [W(k(e.categoryName || "Character"), 1), e.selected ? (B(), V(z, { key: 0 }, [W(" · +" + k(F(d).awards.find((t) => t.actorId === e.id)?.amount ?? 0) + " XP", 1)], 64)) : G("", !0)])]),
			I(H("input", {
				"onUpdate:modelValue": (t) => e.selected = t,
				class: "tw:dui-checkbox tw:dui-checkbox-sm tw:dui-checkbox-primary tw:shrink-0",
				"aria-label": `Include ${e.name}`,
				disabled: F(s) || F(u) || F(o),
				type: "checkbox"
			}, null, 8, kb), [[J, e.selected]])
		]))), 128)), F(n).length ? G("", !0) : (B(), V("p", Ab, "No character actors are available."))])])]), H("footer", jb, [H("div", Mb, [H("p", Nb, [m[12] ||= W(" Next session: ", -1), H("strong", null, k(F(c) || "—"), 1)]), H("p", Pb, k([
			F(p).pause && "Pause play",
			F(p).fortuneReset && "Restore Fortune",
			F(p).holdingScene && "Holding scene",
			F(p).exportChat && "Export chat"
		].filter(Boolean).join(" · ")), 1)]), H("button", {
			class: "tw:dui-btn tw:dui-btn-primary tw:shrink-0",
			disabled: !F(i),
			type: "submit"
		}, [F(s) ? (B(), V("span", Ib)) : G("", !0), W(k(F(u) ? "Retry" : "Confirm"), 1)], 8, Fb)])], 32));
	}
}), Rb = {
	id: "session-log",
	role: "tabpanel",
	"aria-labelledby": "session-tab-log",
	class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:p-4"
}, zb = {
	key: 0,
	class: "tw:text-sm"
}, Bb = {
	key: 1,
	class: "tw:m-0 tw:grid tw:[list-style:none] tw:gap-2 tw:p-0"
}, Vb = { class: "tw:m-0 tw:text-sm" }, Hb = { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/65!" }, Ub = /* @__PURE__ */ L({
	__name: "SessionLogPanel",
	setup(e) {
		let { state: t } = qs(cb());
		function n(e) {
			return new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(new Date(e));
		}
		return (e, r) => (B(), V("section", Rb, [F(t).sessions.length ? (B(), V("ol", Bb, [(B(!0), V(z, null, R(F(t).sessions, (e) => (B(), V("li", {
			key: e.id,
			class: "tw:rounded-box tw:border tw:border-base-content/15 tw:bg-base-100! tw:p-3"
		}, [H("p", Vb, k(F(L_)(e.reference, e.occurredAt)), 1), H("p", Hb, " Recorded " + k(n(e.recordedAt)), 1)]))), 128))])) : (B(), V("p", zb, "No sessions recorded yet."))]));
	}
}), Wb = { class: "tw:@container tw:flex tw:h-full tw:min-h-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Gb = { class: "tw:flex tw:shrink-0 tw:items-center tw:gap-2 tw:border-b tw:border-base-content/20 tw:px-4 tw:pt-2" }, Kb = ["aria-selected", "tabindex"], qb = ["aria-selected", "tabindex"], Jb = ["disabled"], Yb = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error tw:mx-4 tw:mt-3 tw:shrink-0 tw:text-sm",
	role: "alert"
}, Xb = {
	key: 1,
	class: "tw:dui-alert tw:dui-alert-success tw:mx-4 tw:mt-3 tw:shrink-0 tw:text-sm",
	role: "status"
}, Zb = /* @__PURE__ */ L({
	__name: "SessionManagementConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = cb();
		n.initialize(t.initialization, t.actions);
		let { activeTab: r, errorMessage: i, isWorking: a, isSettingsOpen: o, pending: s, statusMessage: c } = qs(n);
		function l(e) {
			[
				"ArrowLeft",
				"ArrowRight",
				"Home",
				"End"
			].includes(e.key) && (e.preventDefault(), r.value = e.key === "Home" ? "end" : e.key === "End" || r.value === "end" ? "log" : "end", e.currentTarget.querySelector(`#session-tab-${r.value}`)?.focus());
		}
		return (e, t) => (B(), V("main", Wb, [
			H("header", Gb, [H("div", {
				class: "tw:dui-tabs tw:dui-tabs-border tw:flex-1",
				role: "tablist",
				"aria-label": "Session management",
				onKeydown: l
			}, [H("button", {
				id: "session-tab-end",
				class: ke(["tw:dui-tab tw:flex-1 tw:font-serif tw:text-lg", { "tw:dui-tab-active": F(r) === "end" }]),
				type: "button",
				role: "tab",
				"aria-selected": F(r) === "end",
				"aria-controls": "session-end",
				tabindex: F(r) === "end" ? 0 : -1,
				onClick: t[0] ||= (e) => r.value = "end"
			}, " End of Session ", 10, Kb), H("button", {
				id: "session-tab-log",
				class: ke(["tw:dui-tab tw:flex-1 tw:font-serif tw:text-lg", { "tw:dui-tab-active": F(r) === "log" }]),
				type: "button",
				role: "tab",
				"aria-selected": F(r) === "log",
				"aria-controls": "session-log",
				tabindex: F(r) === "log" ? 0 : -1,
				onClick: t[1] ||= (e) => r.value = "log"
			}, " Log ", 10, qb)], 32), H("button", {
				class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-square tw:dui-btn-sm tw:mb-2",
				type: "button",
				"aria-label": "Session Management Settings",
				title: "Session Management Settings",
				disabled: F(a) || F(s) || F(o),
				onClick: t[2] ||= (...e) => F(n).openSettings && F(n).openSettings(...e)
			}, [...t[3] ||= [H("i", {
				class: "fa-solid fa-gear",
				"aria-hidden": "true"
			}, null, -1)]], 8, Jb)]),
			F(i) ? (B(), V("div", Yb, k(F(i)), 1)) : G("", !0),
			F(c) ? (B(), V("div", Xb, k(F(c)), 1)) : G("", !0),
			I(U(Lb, null, null, 512), [[vo, F(r) === "end"]]),
			I(U(Ub, null, null, 512), [[vo, F(r) === "log"]])
		]));
	}
});
// src/module/foundry/session-management/initialization.ts
function Qb() {
	let e = ev(), t = nv();
	return {
		actors: ov(t.xp.defaultSelection).actors,
		occurredAtLocal: $b(/* @__PURE__ */ new Date()),
		scenes: Array.from(game.scenes).map(({ name: e, uuid: t }) => ({
			label: e,
			uuid: t
		})).sort((e, t) => e.label.localeCompare(t.label)),
		settings: t,
		state: e
	};
}
function $b(e) {
	return (/* @__PURE__ */ new Date(e.getTime() - e.getTimezoneOffset() * 6e4)).toISOString().slice(0, 16);
}
// src/module/foundry/session-management/fortune.ts
async function ex(e) {
	X(Y.sessionManagementConsole);
	let t = T_(), n = e ?? ov(t.defaultSelection).actors.filter(({ selected: e }) => e).map(({ id: e }) => e), r = 0;
	for (let e of n) {
		let t = game.actors.get(e);
		if (!t) continue;
		let n = tx(t);
		nx(t.system, [
			"status",
			"fortune",
			"value"
		]) !== n && (await t.update({ "system.status.fortune.value": n }), r += 1);
	}
	return `Fortune restored for ${r} of ${n.length} characters.`;
}
function tx(e) {
	let t = nx(e.system, [
		"status",
		"fate",
		"value"
	]), n = game.i18n.localize("NAME.Luck"), r = Array.from(e.items ?? []).filter((e) => e.type === "talent" && e.name === n).reduce((e, t) => e + nx(t.system, ["advances", "value"]), 0);
	return Math.max(0, t + r);
}
function nx(e, t) {
	let n = e;
	for (let e of t) {
		if (!n || typeof n != "object") return 0;
		n = n[e];
	}
	let r = Number(n);
	return Number.isFinite(r) ? Math.round(r) : 0;
}
// src/module/functions/xp-award/recovery.ts
function rx(e, t, n, r) {
	let i = t.slice(n).filter((e) => e.reason === r && Number.isFinite(Number(e.amount)));
	if (i.length > 1) throw Error(`${e.name} already has ${i.length} XP log entries for "${r}". Check their XP log before continuing.`);
	let [a] = i;
	if (!a) return;
	let o = Math.round(Number(a.amount)), s = Number.isFinite(Number(a.total)) ? Math.round(Number(a.total)) : e.totalXp;
	return {
		actorId: e.id,
		actorName: e.name,
		afterXp: s,
		amount: o,
		beforeXp: s - o,
		category: e.category
	};
}
// src/module/foundry/xp-award/recipients.ts
async function ix(e) {
	X(Y.xpAwards);
	let t = [];
	if (e === "targets") {
		let e = Array.from(game.user.targets ?? []);
		if (!e.length) throw Error("Target at least one character before opening Target XP.");
		for (let n of e) {
			if (!n.actor || n.actor.type !== "character") throw Error("Every target must be a character actor that can receive XP.");
			let e = cv(n.actor, "standard", !0, 100, "Target");
			e.choice.id = n.actor.uuid, t.push(e);
		}
	} else {
		let e = await Tg();
		for (let n of e.categories) if (n.xpPercent !== 0) for (let e of n.actorIds) {
			let r = game.actors.get(e);
			if (!r || r.type !== "character") throw Error(`A member of ${n.name} is missing. Open Configure Party to repair the roster.`);
			let i = cv(r, n.id === "companions" ? "companion" : "standard", !0, n.xpPercent, n.name);
			i.choice.id = r.uuid, t.push(i);
		}
		if (!t.length) throw Error("Add XP recipients in Configure Party before opening Party XP.");
	}
	return [...new Map(t.map((e) => [e.choice.id, e.choice])).values()];
}
async function ax(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e.actors) {
		if (t.has(r.id)) throw Error("The XP preview contains a duplicate recipient.");
		t.add(r.id);
		let e = await fromUuid(r.id);
		if (!$(e) || e.documentName !== "Actor" || e.type !== "character") throw Error(`${r.name} is no longer available. No XP was applied.`);
		let i = r.xpPercent;
		if (typeof i != "number" || !Number.isFinite(i) || i < 0) throw Error("The XP preview contains an invalid percentage.");
		let a = cv(e, r.category, !0, i, r.categoryName);
		if (a.choice.id = r.id, a.choice.totalXp !== r.totalXp) throw Error(`${r.name}'s XP has changed since this preview. Review any earlier partial award before opening a new one; this submission changed no XP.`);
		n.push(a);
	}
	if (!n.length) throw Error("No XP recipients are available.");
	return n;
}
// src/module/foundry/xp-award/service.ts
async function ox(e, t, n) {
	X(Y.xpAwards);
	let r = Array.from(new Set(e.actorIds));
	if (r.length === 0) throw Error("Select at least one character actor.");
	if (!Number.isSafeInteger(e.defaultAmount) || e.defaultAmount === 0) throw Error("Enter a non-zero whole-number XP change.");
	D_();
	let i = n?.applied ?? [], a = new Set(i.map((e) => e.actorId)), o = (e.prepared ? await ax(e.prepared) : sv(r.filter((e) => !a.has(e)))).filter((e) => !a.has(e.choice.id)), s = e.prepared?.awardedAt ?? (/* @__PURE__ */ new Date()).toISOString(), c = t?.reference ?? e.prepared?.sessionReference ?? tv(), l = t?.reason ?? e.prepared?.reason ?? j_(e.defaultReason, {
		date: s.slice(0, 10),
		datetime: M_(s),
		session: c
	}, e.includeTimestampInReason), u = [...i], d = [], f = n?.logBaseline;
	if (!f) await n?.onBaseline(Object.fromEntries(o.map(({ choice: e, xpLog: t }) => [e.id, t.length]))), d.push(...o);
	else for (let e of o) {
		let t = f[e.choice.id];
		if (t === void 0) throw Error(`The saved XP progress has no starting record for ${e.choice.name}. Check their XP log before continuing.`);
		let r = rx(e.choice, e.xpLog, t, l);
		r ? (u.push(r), await n.onApplied(r)) : d.push(e);
	}
	let p = Av(d.map((e) => e.choice), e.defaultAmount);
	if (u.length === 0 && !p.awards.some((e) => e.amount !== 0)) throw Error("This amount produces no XP changes for these recipients.");
	for (let [e, t] of d.entries()) {
		let r = p.awards[e];
		if (r.amount !== 0) {
			try {
				await t.awardExperience(r.amount, l), u.push(r);
			} catch (e) {
				let t = u.length > 0 ? ` XP was already changed for ${u.map((e) => e.actorName).join(", ")}.` : "", n = e instanceof Error ? ` ${e.message}` : "";
				throw Error(`Could not change XP for ${r.actorName}.${t}${n}`, { cause: e });
			}
			await n?.onApplied(r);
		}
	}
	let m = {
		awards: u,
		totalChange: u.reduce((e, t) => e + t.amount, 0),
		awardedAt: s,
		reason: l,
		sessionReference: c
	}, h = {
		...m,
		id: crypto.randomUUID()
	};
	try {
		await O_(b_(D_(), h));
	} catch (e) {
		console.error("Drowsy's Toolkit | XP applied, but audit history could not be saved.", e), ui.notifications.error("XP was applied, but its toolkit audit entry could not be saved. Do not award it again; check the actors' XP logs.");
	}
	try {
		await sx(m);
	} catch (e) {
		console.error("Drowsy's Toolkit | XP applied, but chat summary failed.", e), ui.notifications.error("XP was applied, but the chat summary failed. Do not award it again.");
	}
	return ui.notifications.info(`Applied ${cx(m.totalChange)} XP to ${m.awards.length} ${m.awards.length === 1 ? "actor" : "actors"}.`), m;
}
async function sx(e) {
	let t = e.awards.map((e) => `<li><strong>${Kh(e.actorName)}</strong>: ${cx(e.amount)} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Award</h2><p>${Kh(e.reason || "No reason")}</p><p><small>${Kh(M_(e.awardedAt))}</small></p><ul>${t}</ul><p><strong>${cx(e.totalChange)} XP in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
function cx(e) {
	return e > 0 ? `+${e}` : String(e);
}
// src/module/foundry/session-management/service.ts
async function lx(e) {
	X(Y.sessionManagementConsole);
	let t = e.trim();
	if (!t) throw Error("Enter a current session reference.");
	await iv({
		...ev(),
		currentSessionReference: t
	}), ui.notifications.info(`Current session reference saved as ${t}.`);
}
async function ux(e) {
	X(Y.sessionManagementConsole);
	let t = B_(ev(), e, {
		id: crypto.randomUUID(),
		recordedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	return await iv(t.state), ui.notifications.info(`Session ${t.record.reference} recorded. Current session is now ${t.state.currentSessionReference}.`), t.record;
}
async function dx(e) {
	X(Y.sessionManagementConsole), await rv(e), ui.notifications.info("Session turnover options saved.");
}
async function fx() {
	X(Y.sessionManagementConsole);
	let e = vx(), t = e.scenes.viewed;
	if (!t) throw Error("View a Scene before pulling players.");
	let n = nv().pullPolicy;
	if (n === "prompt" && (n = await foundry.applications.api.DialogV2.confirm({
		content: `<p>Activate <strong>${foundry.utils.escapeHTML(t.name)}</strong> for everyone? Choose Cancel to pull connected players without activating it.</p>`,
		modal: !0,
		rejectClose: !1,
		window: { title: "Pull Everyone to Scene" }
	}) ? "activate" : "pull"), n === "activate") await t.activate(), ui.notifications.info(`${t.name} is now the active Scene.`);
	else {
		for (let n of e.users) !n.isGM && n.active && e.socket.emit("pullToScene", t.id, n.id);
		ui.notifications.info(`Connected players were pulled to ${t.name}.`);
	}
}
async function px(e) {
	X(Y.sessionManagementConsole), F_(e);
	let t = ev();
	t.turnover?.request && t.turnover.steps.some((e) => e.status === "failed" || e.status === "pending") && (e = t.turnover.request);
	let n = hx(t.turnover, e);
	t = {
		...t,
		turnover: n
	}, await iv(t);
	for (let r of n.steps) if (r.status !== "completed" && r.status !== "skipped") try {
		if (r.id === "record") {
			n = U_(n, r.id, "completed", _x());
			let i = B_({
				...t,
				turnover: n
			}, e, {
				id: crypto.randomUUID(),
				recordedAt: _x()
			});
			return await iv(i.state), ui.notifications.info(`Session ${i.record.reference} turnover completed.`), {
				operation: n,
				record: i.record
			};
		}
		let i = await mx(r.id, e, {
			applied: n.xpApplied ?? [],
			logBaseline: n.xpLogBaseline,
			onBaseline: async (e) => {
				n = {
					...n,
					xpLogBaseline: e
				}, t = {
					...t,
					turnover: n
				}, await iv(t);
			},
			onApplied: async (e) => {
				n = {
					...n,
					xpApplied: [...n.xpApplied ?? [], e]
				}, t = {
					...t,
					turnover: n
				}, await iv(t);
			}
		});
		n = U_(n, r.id, "completed", _x(), i), t = {
			...t,
			turnover: n
		}, await iv(t);
	} catch (e) {
		let i = e instanceof Error ? e.message : "The step failed.";
		throw n = U_(n, r.id, "failed", _x(), i), await iv({
			...t,
			turnover: n
		}), Error(`${gx(r.id)} failed: ${i}`, { cause: e });
	}
	return { operation: n };
}
async function mx(e, t, n) {
	let r = vx();
	if (e === "pause") return await r.togglePause(!0, { broadcast: !0 }), "Game paused for all users.";
	if (e === "holding-scene") {
		let e = nv().holdingSceneUuid;
		if (!e) throw Error("Choose a holding Scene first.");
		let t = await fromUuid(e);
		if (!t || t.documentName !== "Scene") throw Error("The configured holding Scene no longer exists.");
		return await t.activate(), `${t.name} activated.`;
	}
	if (e === "xp") {
		let e = t.xp ?? T_(), r = t.xp?.actorIds ?? ov(e.defaultSelection).actors.filter(({ selected: e }) => e).map(({ id: e }) => e);
		return await ox({
			...e,
			actorIds: r
		}, {
			reference: t.sessionReference.trim(),
			reason: P_(e, t.sessionReference, t.occurredAt)
		}, n), `XP applied to ${r.length} character${r.length === 1 ? "" : "s"}.`;
	}
	if (e === "fortune") return ex(t.xp?.actorIds);
	if (!r.messages.export) throw Error("Chat export is unavailable in this Foundry version.");
	return await r.messages.export(), "Chat log exported.";
}
function hx(e, t) {
	if (e?.sessionReference === t.sessionReference.trim() && e.steps.some(({ status: e }) => e === "failed" || e === "pending")) return e;
	let n = /* @__PURE__ */ new Set(["record"]);
	return t.pause && n.add("pause"), t.holdingScene && n.add("holding-scene"), t.xpAward && n.add("xp"), t.fortuneReset && n.add("fortune"), t.chatExport && n.add("chat-export"), {
		...H_(crypto.randomUUID(), t.sessionReference, _x(), n),
		request: structuredClone(t)
	};
}
function gx(e) {
	return {
		"chat-export": "Chat export",
		fortune: "Fortune reset",
		"holding-scene": "Holding Scene",
		pause: "Pause",
		record: "Session recording",
		xp: "XP award"
	}[e];
}
function _x() {
	return (/* @__PURE__ */ new Date()).toISOString();
}
function vx() {
	return game;
}
// src/module/apps/session-management/state/configuration.ts
var yx = Ks("session-configuration", () => {
	let e = /* @__PURE__ */ P(), t = /* @__PURE__ */ P(""), n = /* @__PURE__ */ P(!1), r = /* @__PURE__ */ P(), i;
	function a(n, r) {
		e.value = structuredClone(n.settings), t.value = n.currentSessionReference || "1", i = r;
	}
	async function o() {
		if (!n.value && e.value) {
			n.value = !0, r.value = void 0;
			try {
				if (N_(t.value), !Number.isSafeInteger(e.value.xp.defaultAmount) || e.value.xp.defaultAmount < 0) throw Error("Enter a whole XP amount of zero or more.");
				if (e.value.holdingScene && !e.value.holdingSceneUuid) throw Error("Choose a holding scene, or turn off scene movement.");
				await i.save(JSON.parse(JSON.stringify(e.value)), t.value.trim());
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Could not save session settings.", e), r.value = e instanceof Error ? e.message : "Could not save session settings.";
			} finally {
				n.value = !1;
			}
		}
	}
	return {
		errorMessage: r,
		initialize: a,
		isWorking: n,
		reference: t,
		save: o,
		settings: e
	};
}), bx = ["disabled"], xx = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-current-setting"
}, Sx = ["value"], Cx = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-xp-default"
}, wx = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-recipient-default"
}, Tx = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-reason"
}, Ex = { class: "tw:dui-label tw:justify-start tw:gap-2 tw:whitespace-normal" }, Dx = { class: "tw:grid tw:gap-3 tw:border-t tw:border-base-content/20 tw:pt-3" }, Ox = { class: "tw:dui-label tw:justify-start tw:gap-2" }, kx = { class: "tw:dui-label tw:justify-start tw:gap-2" }, Ax = { class: "tw:dui-label tw:justify-start tw:gap-2" }, jx = { class: "tw:dui-label tw:justify-start tw:gap-2" }, Mx = {
	key: 0,
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-holding-scene"
}, Nx = ["value"], Px = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-pull-policy"
}, Fx = { class: "tw:flex tw:shrink-0 tw:justify-end tw:border-t tw:border-base-content/20 tw:p-3" }, Ix = ["disabled"], Lx = /* @__PURE__ */ L({
	__name: "SessionSettingsApp",
	props: {
		initialization: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = yx();
		n.initialize(t.initialization, t.actions);
		let { errorMessage: r, isWorking: i, reference: a, settings: o } = qs(n);
		return (t, s) => (B(), Ca(mc, {
			title: "Session Management Settings",
			description: "Defaults and occasional corrections.",
			icon: "fa-solid fa-gear",
			"error-message": F(r)
		}, {
			footer: ir(() => [H("footer", Fx, [H("button", {
				class: "tw:dui-btn tw:dui-btn-primary",
				type: "submit",
				form: "session-settings-form",
				disabled: F(i)
			}, " Save settings ", 8, Ix)])]),
			default: ir(() => [F(o) ? (B(), V("form", {
				key: 0,
				id: "session-settings-form",
				class: "tw:grid tw:gap-4",
				onSubmit: s[11] ||= ss((...e) => F(n).save && F(n).save(...e), ["prevent"])
			}, [H("fieldset", {
				class: "tw:m-0 tw:grid tw:gap-3 tw:border-0 tw:p-0",
				disabled: F(i)
			}, [
				H("label", xx, [
					s[12] ||= H("span", null, "Current session number", -1),
					H("input", {
						id: "session-current-setting",
						value: F(a),
						class: "tw:dui-input tw:dui-input-sm tw:w-full",
						type: "number",
						min: "0",
						step: "1",
						required: "",
						onInput: s[0] ||= (e) => a.value = e.target.value
					}, null, 40, Sx),
					s[13] ||= H("span", { class: "tw:text-xs tw:text-base-content/65!" }, "Correct the current number without recording a session or awarding XP.", -1)
				]),
				H("label", Cx, [s[14] ||= H("span", null, "Default session XP", -1), I(H("input", {
					id: "session-xp-default",
					"onUpdate:modelValue": s[1] ||= (e) => F(o).xp.defaultAmount = e,
					class: "tw:dui-input tw:dui-input-sm tw:w-full",
					type: "number",
					min: "0",
					step: "1",
					required: ""
				}, null, 512), [[
					q,
					F(o).xp.defaultAmount,
					void 0,
					{ number: !0 }
				]])]),
				H("label", wx, [s[16] ||= H("span", null, "Default recipients", -1), I(H("select", {
					id: "session-recipient-default",
					"onUpdate:modelValue": s[2] ||= (e) => F(o).xp.defaultSelection = e,
					class: "tw:dui-select tw:dui-select-sm tw:w-full"
				}, [...s[15] ||= [
					H("option", { value: "party" }, "Party", -1),
					H("option", { value: "company" }, "Company (party and companions)", -1),
					H("option", { value: "world" }, "All characters", -1)
				]], 512), [[es, F(o).xp.defaultSelection]])]),
				H("label", Tx, [
					s[17] ||= H("span", null, "XP entry text", -1),
					I(H("input", {
						id: "session-reason",
						"onUpdate:modelValue": s[3] ||= (e) => F(o).xp.defaultReason = e,
						class: "tw:dui-input tw:dui-input-sm tw:w-full",
						type: "text"
					}, null, 512), [[q, F(o).xp.defaultReason]]),
					s[18] ||= H("span", { class: "tw:text-xs tw:text-base-content/65!" }, "Use %session%, %date%, and %datetime% for the submitted session.", -1)
				]),
				H("label", Ex, [I(H("input", {
					"onUpdate:modelValue": s[4] ||= (e) => F(o).xp.includeTimestampInReason = e,
					"aria-label": "Include date and time in XP entries",
					class: "tw:dui-checkbox tw:dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[J, F(o).xp.includeTimestampInReason]]), s[19] ||= W("Include date and time in XP entries", -1)]),
				H("div", Dx, [
					H("label", Ox, [I(H("input", {
						"onUpdate:modelValue": s[5] ||= (e) => F(o).pause = e,
						"aria-label": "Pause play",
						class: "tw:dui-checkbox tw:dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[J, F(o).pause]]), s[20] ||= W("Pause play", -1)]),
					H("label", kx, [I(H("input", {
						"onUpdate:modelValue": s[6] ||= (e) => F(o).fortuneReset = e,
						"aria-label": "Restore recipients' Fortune",
						class: "tw:dui-checkbox tw:dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[J, F(o).fortuneReset]]), s[21] ||= W("Restore recipients’ Fortune", -1)]),
					H("label", Ax, [I(H("input", {
						"onUpdate:modelValue": s[7] ||= (e) => F(o).exportChat = e,
						"aria-label": "Export chat log",
						class: "tw:dui-checkbox tw:dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[J, F(o).exportChat]]), s[22] ||= W("Export chat log", -1)]),
					H("label", jx, [I(H("input", {
						"onUpdate:modelValue": s[8] ||= (e) => F(o).holdingScene = e,
						"aria-label": "Move to a holding scene",
						class: "tw:dui-checkbox tw:dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[J, F(o).holdingScene]]), s[23] ||= W("Move to a holding scene", -1)]),
					F(o).holdingScene ? (B(), V("label", Mx, [s[25] ||= H("span", null, "Holding scene", -1), I(H("select", {
						id: "session-holding-scene",
						"onUpdate:modelValue": s[9] ||= (e) => F(o).holdingSceneUuid = e,
						class: "tw:dui-select tw:dui-select-sm tw:w-full",
						required: ""
					}, [s[24] ||= H("option", { value: "" }, "Choose a scene", -1), (B(!0), V(z, null, R(e.initialization.scenes, (e) => (B(), V("option", {
						key: e.uuid,
						value: e.uuid
					}, k(e.label), 9, Nx))), 128))], 512), [[es, F(o).holdingSceneUuid]])])) : G("", !0),
					H("label", Px, [s[27] ||= H("span", null, "Standalone Pull Everyone action", -1), I(H("select", {
						id: "session-pull-policy",
						"onUpdate:modelValue": s[10] ||= (e) => F(o).pullPolicy = e,
						class: "tw:dui-select tw:dui-select-sm tw:w-full"
					}, [...s[26] ||= [
						H("option", { value: "pull" }, "Pull connected players", -1),
						H("option", { value: "activate" }, "Activate scene for everyone", -1),
						H("option", { value: "prompt" }, "Ask each time", -1)
					]], 512), [[es, F(o).pullPolicy]])])
				])
			], 8, bx)], 32)) : G("", !0)]),
			_: 1
		}, 8, ["error-message"]));
	}
}), Rx = class extends Uc {
	static ACCESS_POLICY = Y.sessionManagementConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${r}-session-settings`,
		position: {
			width: 480,
			height: 720
		},
		window: {
			title: `${i} — Session Management Settings`,
			icon: "fa-solid fa-gear",
			resizable: !0
		}
	};
	onSaved;
	onClosed;
	getVueComponent() {
		return Lx;
	}
	getVueProps() {
		let e = Qb();
		return {
			actions: { save: async (t, n) => {
				await dx(t), n !== e.state.currentSessionReference && await lx(n), this.onSaved?.({
					currentSessionReference: n,
					scenes: e.scenes,
					settings: t
				}), await this.close();
			} },
			initialization: {
				...e,
				currentSessionReference: e.state.currentSessionReference
			}
		};
	}
	async _preClose(e) {
		await super._preClose(e), this.onClosed?.();
	}
};
async function zx(e) {
	let t = new Rx();
	t.onSaved = e;
	let n = new Promise((e) => {
		t.onClosed = e;
	});
	await t.render(!0), await n;
}
// src/module/apps/session-management/view/SessionManagementApplication.ts
var Bx = class extends Uc {
	static ACCESS_POLICY = Y.sessionManagementConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [r, `${r}-session-management`],
		id: `${r}-session-management`,
		position: {
			height: 590,
			width: 700
		},
		window: {
			icon: "fa-solid fa-calendar-check",
			resizable: !0,
			title: `${i} — Session Turnover Console`
		}
	};
	getVueComponent() {
		return Zb;
	}
	getVueProps() {
		return {
			actions: {
				openSettings: zx,
				reload: Qb,
				runSessionTurnover: px
			},
			initialization: Qb()
		};
	}
};
// src/module/apps/session-management/view/open.ts
async function Vx() {
	let e = new Bx();
	return await e.render(!0), e;
}
// src/module/functions/xp-award/dialog.ts
function Hx(e, t) {
	return Av(e, t).awards.filter((e) => e.amount !== 0).map((t) => {
		let n = e.find((e) => e.id === t.actorId), r = `${n.name} — ${t.amount > 0 ? "+" : ""}${t.amount} XP`;
		return `<span class="xp-recipient" tabindex="0" data-recipient-id="${Kh(n.id)}" title="${Kh(r)}" aria-label="${Kh(r)}" data-tooltip="${Kh(Kh(r))}"><img src="${Kh(n.img || "icons/svg/mystery-man.svg")}" alt="" width="36" height="36"></span>`;
	}).join("");
}
function Ux(e, t) {
	return `<fieldset class="xp-inputs"><label class="form-group"><span>XP amount</span><input type="number" name="amount" value="${e}" step="1" required autofocus></label><label class="form-group stacked"><span>Reason</span><input type="text" name="reason" value="${Kh(t)}" autocomplete="off"></label></fieldset><div class="xp-log-preview"><small>Log entry</small><p data-xp-reason></p></div><div class="xp-recipients" aria-label="XP recipients"></div><p class="xp-error" role="alert" hidden></p>`;
}
// src/module/foundry/xp-award/dialog.ts
var Wx = () => Kx("party"), Gx = () => Kx("targets");
async function Kx(e) {
	let t = await ix(e), n = T_(), i = (/* @__PURE__ */ new Date()).toISOString(), a = tv(), o = {
		date: i.slice(0, 10),
		datetime: M_(i),
		session: a
	}, s = !1, c = new foundry.applications.api.DialogV2({
		classes: ["drowsy-xp-award"],
		window: { title: e === "party" ? "Party XP" : "Target XP" },
		position: { width: 420 },
		form: { closeOnSubmit: !1 },
		content: Ux(n.defaultAmount, n.defaultReason),
		buttons: [{
			action: "cancel",
			label: "Cancel",
			type: "button",
			callback: () => c.close()
		}, {
			action: "award",
			label: "Submit",
			default: !0,
			callback: async () => {
				if (s) return;
				let o = u();
				if (!o || !Number.isSafeInteger(o.amount) || o.amount === 0) return;
				s = !0;
				let d = c.element.querySelector("fieldset");
				d.disabled = !0;
				let f = c.element.querySelector(".xp-error");
				f.hidden = !0;
				try {
					await ox({
						...n,
						defaultAmount: o.amount,
						defaultReason: o.reason,
						actorIds: t.map((e) => e.id),
						prepared: {
							mode: e,
							actors: t,
							awardedAt: i,
							sessionReference: a,
							reason: l(o.reason)
						}
					}), await c.close();
				} catch (e) {
					console.error(`${r} | XP award failed.`, e), f.textContent = e instanceof Error ? e.message : "The XP award could not be completed.", f.hidden = !1;
				} finally {
					s = !1, d.disabled = !1;
				}
			}
		}]
	});
	function l(e) {
		return j_(e, o, n.includeTimestampInReason);
	}
	function u() {
		let e = c.element.querySelector("form");
		if (!e) return;
		let t = new FormData(e), n = String(t.get("amount") ?? "");
		return {
			amount: n.trim() ? Number(n) : NaN,
			reason: String(t.get("reason") ?? "")
		};
	}
	function d() {
		let e = u();
		if (!e) return;
		let n = Number.isSafeInteger(e.amount) && e.amount !== 0, r = c.element.querySelector("[data-xp-reason]");
		r.textContent = l(e.reason) || "No reason";
		let i = c.element.querySelector(".xp-recipients"), a = c.element.querySelector("[data-action=\"award\"]");
		try {
			let r = n ? e.amount : 0;
			i.innerHTML = Hx(t, r);
			let o = Av(t, r).awards.some((e) => e.amount !== 0);
			a.disabled = !n || !o || s;
		} catch {
			i.replaceChildren(), a.disabled = !0;
		}
	}
	return c.addEventListener("render", () => {
		c.element.querySelector("form")?.addEventListener("input", d), d();
	}), await c.render(!0), c;
}
// src/module/apps/shared/view/LauncherConsole.vue?vue&type=script&setup=true&lang.ts
var qx = { class: "tw:grid tw:min-w-0 tw:gap-4" }, Jx = { class: "tw:m-0 tw:font-serif tw:text-lg tw:text-base-content!" }, Yx = { class: "tw:grid tw:min-w-0 tw:gap-2 tw:min-[38rem]:grid-cols-2" }, Xx = ["disabled", "onClick"], Zx = { class: "tw:dui-card-body tw:w-full tw:min-w-0 tw:flex-row tw:items-start tw:gap-3 tw:p-4" }, Qx = { class: "tw:min-w-0 tw:flex-1" }, $x = { class: "tw:block tw:font-semibold tw:text-base-content!" }, eS = { class: "tw:block tw:text-xs tw:text-base-content/75!" }, tS = {
	key: 0,
	class: "tw:dui-loading tw:dui-loading-sm tw:dui-loading-spinner tw:shrink-0",
	"aria-label": "Working"
}, nS = /* @__PURE__ */ L({
	__name: "LauncherConsole",
	props: {
		description: {},
		icon: {},
		sections: {},
		title: {}
	},
	setup(e) {
		let t = /* @__PURE__ */ P(), n = /* @__PURE__ */ P();
		async function r(e) {
			t.value = void 0, n.value = e.id;
			try {
				await e.open();
			} catch (n) {
				console.error(`Launcher action "${e.label}" failed.`, n), t.value = n instanceof Error ? n.message : `${e.label} could not be completed.`;
			} finally {
				n.value = void 0;
			}
		}
		return (i, a) => (B(), Ca(mc, {
			description: e.description,
			"error-message": t.value,
			icon: e.icon,
			title: e.title
		}, {
			default: ir(() => [H("div", qx, [(B(!0), V(z, null, R(e.sections, (e) => (B(), V("section", {
				key: e.id,
				class: "tw:grid tw:gap-2"
			}, [H("h2", Jx, k(e.label), 1), H("div", Yx, [(B(!0), V(z, null, R(e.actions, (e) => (B(), V("button", {
				key: e.id,
				class: "tw:dui-card tw:dui-card-border tw:m-0! tw:h-auto! tw:min-h-0! tw:w-full! tw:min-w-0 tw:cursor-pointer tw:items-stretch! tw:justify-start! tw:gap-0! tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-0! tw:text-left tw:text-base-content! tw:shadow-sm tw:transition tw:leading-normal! hover:tw:border-primary/60!",
				disabled: n.value !== void 0,
				type: "button",
				onClick: (t) => r(e)
			}, [H("span", Zx, [
				H("i", {
					class: ke([e.icon, "tw:mt-1 tw:w-6 tw:shrink-0 tw:text-center tw:text-lg tw:text-primary!"]),
					"aria-hidden": "true"
				}, null, 2),
				H("span", Qx, [H("span", $x, k(e.label), 1), H("span", eS, k(e.description), 1)]),
				n.value === e.id ? (B(), V("span", tS)) : G("", !0)
			])], 8, Xx))), 128))])]))), 128))])]),
			_: 1
		}, 8, [
			"description",
			"error-message",
			"icon",
			"title"
		]));
	}
}), rS = /* @__PURE__ */ L({
	__name: "ToolkitHomeApp",
	props: { sections: {} },
	setup(e) {
		return (t, n) => (B(), Ca(nS, {
			description: "Open the tools you need without relying on world macro names.",
			icon: "fa-solid fa-toolbox",
			sections: e.sections,
			title: "Drowsy’s WFRP4e Toolkit"
		}, null, 8, ["sections"]));
	}
}), iS = class extends Uc {
	sections;
	static ACCESS_POLICY = Y.toolkitHome;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [r, `${r}-toolkit-home`],
		id: `${r}-toolkit-home`,
		position: {
			height: 720,
			width: 760
		},
		window: {
			icon: "fa-solid fa-toolbox",
			resizable: !0,
			title: i
		}
	};
	constructor(e) {
		super(), this.sections = e;
	}
	getVueComponent() {
		return rS;
	}
	getVueProps() {
		return { sections: this.sections };
	}
};
// src/module/functions/grid-scale/calculate.ts
function aS(e) {
	return Number.isFinite(e.size) && e.size > 0 && Number.isFinite(e.distance) && e.distance > 0;
}
function oS(e, t) {
	return e.size / t.size * (t.distance / e.distance);
}
// src/module/foundry/grid-scale/service.ts
async function sS() {
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
	if (!aS(n)) {
		ui.notifications.error("The current Scene has an invalid grid size or distance.");
		return;
	}
	let r = await cS(n);
	r && (aS(r) ? await lS(e, n, r) : ui.notifications.error("Grid size and distance must both be positive numbers."));
}
async function cS(e) {
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
async function lS(e, t, n) {
	let r = oS(t, n), i = e.lights.map((e) => ({
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
		a.length > 0 && (await e.updateEmbeddedDocuments("AmbientLight", a), c = !0), s.length > 0 && (await e.updateEmbeddedDocuments("Token", s), l = !0), await e.update(dS(n)), ui.notifications.info(`Grid updated from ${fS(t)} to ${fS(n)}.`);
	} catch (n) {
		let r = await uS({
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
async function uS(e) {
	let t = [];
	return (e.scene.grid.size !== e.oldGrid.size || e.scene.grid.distance !== e.oldGrid.distance || e.scene.grid.units !== e.oldGrid.units) && t.push(e.scene.update(dS(e.oldGrid))), e.ambientLightsChanged && t.push(e.scene.updateEmbeddedDocuments("AmbientLight", e.oldAmbientLights)), e.tokenLightsChanged && t.push(e.scene.updateEmbeddedDocuments("Token", e.oldTokenLights)), Promise.allSettled(t);
}
function dS(e) {
	return {
		"grid.distance": e.distance,
		"grid.size": e.size,
		"grid.units": e.units
	};
}
function fS(e) {
	return `${e.size}px/${e.distance}${e.units}`;
}
// src/module/apps/scene-management-console/view/SceneManagementConsoleApp.vue
var pS = /* @__PURE__ */ L({
	__name: "SceneManagementConsoleApp",
	props: { sections: {} },
	setup(e) {
		return (t, n) => (B(), Ca(nS, {
			description: "Run common Scene and token-viewing actions from one place.",
			icon: "fa-solid fa-map",
			sections: e.sections,
			title: "Scene Management Console"
		}, null, 8, ["sections"]));
	}
}), mS = class extends Uc {
	sections;
	static ACCESS_POLICY = Y.sceneManagementConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [r, `${r}-scene-management`],
		id: `${r}-scene-management`,
		position: {
			height: 580,
			width: 680
		},
		window: {
			icon: "fa-solid fa-map",
			resizable: !0,
			title: `${i} — Scene Management`
		}
	};
	constructor(e) {
		super(), this.sections = e;
	}
	getVueComponent() {
		return pS;
	}
	getVueProps() {
		return { sections: this.sections };
	}
};
// src/module/apps/scene-management-console/view/open.ts
async function hS() {
	let e = new mS([{
		id: "scene",
		label: "Viewed Scene",
		actions: [
			gS("grid-scale", "Change Grid Scale (Preserve Lighting)", "Change grid measurements while preserving rendered light sizes.", "fa-solid fa-grid-2", sS),
			gS("pull-everyone", "Pull Everyone to Scene", "Activate this Scene or pull connected players using your saved policy.", "fa-solid fa-people-pulling", fx),
			gS("token-vision", "Use Token Vision", "Enable Token Vision and disable global illumination for this Scene.", "fa-solid fa-eye", () => dd("token-vision")),
			gS("global-light", "Use Global Light", "Enable global illumination and disable Token Vision for this Scene.", "fa-solid fa-sun", () => dd("global-light"))
		]
	}, {
		id: "tokens",
		label: "Controlled Tokens",
		actions: [gS("token-tools", "Open Token Vision & Light", "Apply vision modes and light presets to controlled tokens.", "fa-solid fa-lightbulb", async () => {
			await Fh();
		})]
	}]);
	return await e.render(!0), e;
}
function gS(e, t, n, r, i) {
	return {
		description: n,
		icon: r,
		id: e,
		label: t,
		open: i
	};
}
// src/module/apps/toolkit-home/view/open.ts
async function _S() {
	let e = new iS([{
		id: "gameplay",
		label: "Gameplay",
		actions: [
			vS("combat", "Combat Console", "Manage Advantage and condition checks.", "fa-solid fa-swords", _f),
			vS("damage", "Damage Console", "Apply damage to several actors.", "fa-solid fa-bolt", Zf),
			vS("group-test", "Secret Group Tests", "Run private WFRP4e tests for a group.", "fa-solid fa-dice-d100", nh),
			vS("dark-whispers", "Dark Whispers", "Send temptations to characters with Corruption.", "fa-solid fa-comment-dots", Up),
			vS("fear", "Fear Console", "Apply Fear and Terror through WFRP4e.", "fa-solid fa-ghost", Ou),
			vS("xp-curve", "Curve XP", "Review and award campaign catch-up XP.", "fa-solid fa-chart-line", bv),
			vS("party-xp", "Party XP", "Award XP to the configured party roster.", "fa-solid fa-award", Wx),
			vS("target-xp", "Target XP", "Award XP to targeted characters.", "fa-solid fa-bullseye", Gx),
			vS("configure-party", "Configure Party", "Set party membership and XP rates.", "fa-solid fa-people-group", __),
			vS("token-tools", "Token Vision & Light", "Apply vision modes and light presets.", "fa-solid fa-eye", Fh)
		]
	}, {
		id: "campaign",
		label: "Campaign",
		actions: [
			vS("configure-curve-xp", "Configure Curve XP", "Tune catch-up with guided curves and session forecasts.", "fa-solid fa-sliders", rb),
			vS("imperial-calendar", "Imperial Calendar Calculator", "Measure elapsed time between Imperial dates and times.", "fa-solid fa-calendar-days", Gc),
			vS("scene-management", "Scene Management", "Open common Scene and token-viewing actions.", "fa-solid fa-map", hS),
			vS("session", "Session Management", "Record session turnover and history.", "fa-solid fa-calendar-check", Vx),
			vS("administration", "Administration Console", "Manage Scenes, compendium visibility, players, and utility rolls.", "fa-solid fa-screwdriver-wrench", gd)
		]
	}]);
	return await e.render(!0), e;
}
function vS(e, t, n, r, i) {
	return {
		description: n,
		icon: r,
		id: e,
		label: t,
		open: async () => {
			await i();
		}
	};
}
// src/module/foundry/api/create-module-api.ts
function yS() {
	return {
		openConfigureParty: __,
		openPartyXp: Wx,
		openTargetXp: Gx,
		calculateImperialElapsedTime: u,
		openImperialCalendarCalculator: Gc,
		adjustAdvantage: nf,
		applyDamage: Wf,
		applyTokenTools: jh,
		openAdministrationConsole: gd,
		openCombatConsole: _f,
		openDamageConsole: Zf,
		openDarkWhispersConsole: Up,
		applyToSelectedActors: bu,
		awardXp: ox,
		awardXpCurve: gv,
		changeGridScalePreservingLighting: sS,
		checkConditions: sf,
		completeSession: ux,
		copyLink: Su,
		openFearConsole: Ou,
		openGroupTestConsole: nh,
		openSessionManagementConsole: Vx,
		openSceneManagementConsole: hS,
		openToolkitHome: _S,
		openTokenToolsConsole: Fh,
		openXpCurveConsole: bv,
		openXpCurveConfigurator: rb,
		openWorkbench: Ou,
		postPrompt: xu,
		postSummaryPrompt: Cu,
		resetFortune: ex,
		rollD100: pd,
		runGroupTest: zm,
		runSessionTurnover: px,
		sendDarkWhispers: Lp,
		setCompendiumVisibility: fd,
		setSceneLighting: dd,
		pullEveryoneToViewedScene: fx
	};
}
function bS(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
`${e}`, `${t}`;
// src/module/foundry/importer/content.ts
var xS = /* @__PURE__ */ new WeakMap();
async function SS(e, t) {
	let n = (xS.get(e) ?? Promise.resolve()).catch(() => void 0).then(async () => {
		let e = globalThis.navigator?.locks;
		return e ? await e.request("foundry:folder-tidy", t) : t();
	});
	xS.set(e, n);
	try {
		return await n;
	} finally {
		xS.get(e) === n && xS.delete(e);
	}
}
// src/module/foundry/importer/index.ts
var CS = {};
// src/module/functions/settings-presets/values.ts
function wS(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function TS(e, t) {
	if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((e, n) => TS(e, t[n]));
	if (wS(e) && wS(t)) {
		let n = Object.keys(e);
		return n.length === Object.keys(t).length && n.every((n) => Object.hasOwn(t, n) && TS(e[n], t[n]));
	}
	return e === t;
}
function ES(e, t = /* @__PURE__ */ new Set()) {
	if (e === null || typeof e == "boolean" || typeof e == "string" || typeof e == "number" && Number.isFinite(e)) return e;
	if (typeof e != "object" || !e) throw Error("Value cannot be represented completely in JSON");
	if (t.has(e)) throw Error("Value contains a circular reference");
	let n = new Set(t).add(e);
	if (Array.isArray(e)) return Array.from(e, (e) => ES(e, n));
	let r = Object.getPrototypeOf(e);
	if (r !== Object.prototype && r !== null) throw Error("Value is not a plain JSON object");
	if (Object.getOwnPropertySymbols(e).length) throw Error("Value contains properties JSON cannot preserve");
	return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ES(t, n)]));
}
// src/module/functions/settings-presets/sources.ts
function DS(e) {
	return Object.fromEntries(Object.entries(e).map(([e, t]) => {
		let n = e.slice(e.lastIndexOf("/") + 1);
		if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*\.json$/.test(n)) throw Error(`Invalid settings preset namespace filename: ${e}`);
		if (!t || typeof t != "object" || Array.isArray(t)) throw Error(`Settings preset ${e} must be an object of setting values.`);
		let r = Object.fromEntries(Object.entries(t).map(([t, n]) => {
			if (!t.trim()) throw Error(`Settings preset ${e} contains an empty setting key.`);
			return [t, ES(n)];
		}));
		return [n.slice(0, -5), r];
	}));
}
// src/module/functions/settings-presets/metadata.ts
function OS(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Settings preset metadata must be an object.");
	return Object.fromEntries(Object.entries(e).map(([e, n]) => {
		if (!t.includes(e)) throw Error(`Metadata has no settings source: ${e}`);
		if (!n || typeof n != "object" || Array.isArray(n)) throw Error(`Invalid metadata for ${e}`);
		let r = n;
		for (let [t, n] of Object.entries(r)) if (t === "promptOnStartup" ? typeof n != "boolean" : !["title", "description"].includes(t) || typeof n != "string") throw Error(`Invalid preset metadata: ${e}.${t}`);
		return [e, r];
	}));
}
// src/module/foundry/settings/sources.ts
var kS = DS(/* #__PURE__ */ Object.assign({})), AS = OS(Object.values([CS])[0] ?? {}, Object.keys(kS));
// src/module/functions/settings-presets/wfrp.ts
function jS(e, t) {
	return t === "wfrp4e" ? [...e].sort((e, t) => Number(MS(e)) - Number(MS(t))) : [...e];
}
function MS({ namespace: e, key: t }) {
	return e === "wfrp4e" && t === "useGroupAdvantage";
}
function NS({ namespace: e, key: t }) {
	return e === "wfrp4e" && ["homebrew", "customCursor"].includes(t) || e === "wfrp4e-rnhd" && ["showClock", "syncClock"].includes(t);
}
function PS({ namespace: e, key: t, value: n }) {
	return e !== "wfrp4e" || t !== "tableSettings" || !n || typeof n != "object" ? [] : [...new Set(Object.values(n).flatMap((e) => String(e).split(",").filter(Boolean)))];
}
// src/module/foundry/settings/preset-runtime/values.ts
function FS(e, t) {
	return t instanceof foundry.abstract.DataModel ? t = t.toObject() : e.type instanceof foundry.data.fields.DataField && (t = e.type.toObject(t)), ES(t);
}
function IS(e, t) {
	let n = e.type, r = ES(t);
	if (n instanceof foundry.data.fields.DataField) r = ES(n.clean(r)), n.validate(r, {
		fallback: !1,
		strict: !0
	});
	else if (typeof n == "function" && n.prototype instanceof foundry.abstract.DataModel) r = ES(n.fromSource(r, { strict: !0 }).toObject());
	else if (n === String && typeof r != "string" || n === Number && typeof r != "number" || n === Boolean && typeof r != "boolean" || n === Array && !Array.isArray(r) || n === Object && (typeof r != "object" || !r || Array.isArray(r))) throw Error("Preset value does not match this world's setting type.");
	if (!TS(t, r)) throw Error("Preset value does not match this world's setting schema.");
}
// src/module/foundry/settings/preset-runtime/coordination.ts
function LS() {
	let e = [...game?.modules.values() ?? []].filter((e) => e.active).map((e) => e.api?.settingsPresetCoordinator).filter((e) => e?.version === 1);
	if (e.length > 1) throw Error("Multiple settings coordinators are active; disable the duplicate before applying presets.");
	return e[0];
}
function RS(e, t) {
	return LS()?.plan(e, t) ?? {
		entries: t,
		excluded: [],
		conflicts: []
	};
}
async function zS(e, t) {
	if (!game?.ready || !game.user?.isGM) throw Error("A ready GM session is required.");
	return await LS()?.resolve(e, t) ?? !0;
}
// src/module/foundry/settings/preset-runtime/engine.ts
function BS(e) {
	return e === "core" || e === game?.system.id || game?.modules.get(e)?.active === !0;
}
function VS(e, t) {
	if (!game?.ready || !game.user?.isGM) throw Error("A ready GM session is required to inspect settings presets.");
	let n = RS(e, t), r = {
		changes: [],
		unchanged: [],
		skipped: [],
		failed: [],
		conflicts: n.conflicts,
		excluded: n.excluded,
		missingTables: [],
		requiresReload: !1,
		automaticReload: !1
	};
	for (let e of n.entries) {
		let t = `${e.namespace}.${e.key}`, n = game.settings.settings?.get(t), i = BS(e.namespace) ? n ? n.scope === "world" ? void 0 : "Setting is no longer a world setting" : `${e.namespace} no longer registers this setting` : `${e.namespace} is not active in this world`;
		if (i || !n) r.skipped.push({
			id: t,
			reason: i ?? "Setting is unavailable"
		});
		else {
			try {
				IS(n, e.value);
			} catch (e) {
				r.skipped.push({
					id: t,
					reason: `Preset value no longer fits this setting: ${e instanceof Error ? e.message : String(e)}`
				});
				continue;
			}
			try {
				game.system.id === "wfrp4e" && r.missingTables.push(...PS(e).filter((e) => !(game?.collections?.get("RollTable"))?.get(e)));
				let i = FS(n, game.settings.get(e.namespace, e.key));
				if (TS(i, e.value)) {
					r.unchanged.push(t);
					continue;
				}
				r.changes.push({
					...e,
					current: i,
					label: n.name ? game.i18n.localize(n.name) : t
				}), r.requiresReload ||= !!n.requiresReload || game.system.id === "wfrp4e" && (NS(e) || MS(e)), r.automaticReload ||= game.system.id === "wfrp4e" && MS(e);
			} catch (e) {
				r.skipped.push({
					id: t,
					reason: `Could not read the current value: ${e instanceof Error ? e.message : String(e)}`
				});
			}
		}
	}
	return r.missingTables = [...new Set(r.missingTables)], r;
}
function HS(e) {
	return !!(e.failed.length || e.conflicts.length || e.missingTables.length);
}
var US = !1;
async function WS(e, t) {
	if (!game?.ready || !game.user?.isGM) throw Error("A ready GM session is required to apply settings presets.");
	if (US) throw Error("A settings preset is already being applied.");
	US = !0;
	try {
		let n = VS(e, t), r = {
			...n,
			updated: [],
			blocked: HS(n),
			requiresReload: !1,
			automaticReload: !1
		};
		if (r.blocked) return r;
		for (let i of jS(n.changes, game.system.id)) {
			let n = `${i.namespace}.${i.key}`;
			try {
				if (!game.user?.isGM || !BS(i.namespace)) throw Error("Preset permissions or availability changed.");
				let a = RS(e, t), o = a.entries.find((e) => e.namespace === i.namespace && e.key === i.key);
				if (a.conflicts.length || !o || !TS(o.value, i.value)) throw Error("Preset choices changed; review the remaining settings again.");
				let s = game.settings.settings?.get(n);
				if (!s || s.scope !== "world") throw Error("World setting is unavailable.");
				if (IS(s, i.value), await game.settings.set(i.namespace, i.key, structuredClone(i.value)), r.requiresReload ||= !!s.requiresReload || game.system.id === "wfrp4e" && (NS(i) || MS(i)), r.automaticReload ||= game.system.id === "wfrp4e" && MS(i), !TS(FS(s, game.settings.get(i.namespace, i.key)), i.value)) throw Error("Foundry did not retain the complete preset value.");
				r.updated.push(n);
			} catch (e) {
				r.failed.push({
					id: n,
					reason: e instanceof Error ? e.message : String(e)
				});
				break;
			}
		}
		return r;
	} finally {
		US = !1;
	}
}
// src/module/foundry/settings/preset-runtime/export.ts
function GS(e, t, n = !1) {
	if (!game?.user?.isGM) throw Error("Only a GM can export settings.");
	if (!BS(e)) throw Error("The selected system or module is not active.");
	if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(e)) throw Error("Invalid settings namespace.");
	if (!t.length) throw Error("Select at least one setting to export.");
	let r = Object.fromEntries([...new Set(t)].map((t) => {
		let r = game?.settings.settings?.get(`${e}.${t}`);
		if (!r || r.scope !== "world" || !r.config && !n) throw Error(`${e}.${t} is not an available selected world setting.`);
		try {
			return [t, FS(r, game?.settings.get(e, t))];
		} catch (n) {
			throw Error(`${e}.${t}: ${n instanceof Error ? n.message : String(n)}`, { cause: n });
		}
	}));
	return {
		namespace: e,
		filename: `${e}.json`,
		values: r
	};
}
// src/module/foundry/settings/provider.ts
function KS() {
	return Object.entries(kS).map(([e, t]) => ({
		namespace: e,
		title: AS[e]?.title ?? e,
		...AS[e],
		entries: Object.entries(t).map(([t, n]) => ({
			namespace: e,
			key: t,
			value: n
		}))
	}));
}
function qS(e) {
	if (e !== void 0 && !Object.hasOwn(kS, e)) throw Error(`No campaign settings source exists for ${e}.`);
	return KS().filter((t) => e === void 0 || e === t.namespace).flatMap((e) => e.entries);
}
var JS = {
	version: 1,
	getPresets: () => KS().filter((e) => BS(e.namespace)),
	inspect: (t) => VS(e, qS(t)),
	apply: async (t) => WS(e, qS(t)),
	resolve: async (t) => zS(e, qS(t)),
	capture: GS
};
JS.apply, JS.inspect;
// src/module/foundry/api/create-package-api.ts
function YS() {
	return {
		...yS(),
		openPreviewNotice() {
			console.log("Drowsy’s WFRP4e Toolkit API is available.");
		}
	};
}
// src/module/foundry/api/register-package-api.ts
function XS() {
	if (!game) throw Error("Foundry game global is unavailable during module API registration.");
	let t = game.modules.get(e);
	if (!t) throw Error(`Foundry module registry entry was not found for ${e}.`);
	t.api = YS();
}
// src/module/foundry/administration/hooks.ts
function ZS() {
	Hooks.on("getChatMessageContextOptions", (e, t) => {
		t.push({
			callback: $S,
			condition: () => game.user?.isGM === !0,
			icon: "<i class=\"fa-solid fa-pen-fancy\"></i>",
			name: "Edit message flavor"
		});
	});
}
function QS() {
	if (game.settings.get("wfrp4e-enhanced-fear-terror", ld.showUnassignedPlayerWarning) !== !0) return;
	let e = Array.from(game.users).filter((e) => !e.isGM && e.active !== !1 && !e.character).map(({ name: e }) => e);
	e.length > 0 && ui.notifications.warn(`${e.join(", ")} ${e.length === 1 ? "has" : "have"} no assigned character.`);
}
async function $S(e) {
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
// src/module/foundry/settings/register.ts
function eC(e, t) {
	game.settings.register(r, e, {
		config: !1,
		default: !1,
		hint: `${n}.Settings.${t}.Hint`,
		name: `${n}.Settings.${t}.Name`,
		requiresReload: !0,
		scope: "client",
		type: Boolean
	});
}
function tC(e, t, n, i, a = {}) {
	game.settings.register(r, e, {
		...a,
		config: !1,
		default: t,
		hint: `${i}.Hint`,
		name: `${i}.Name`,
		scope: "world",
		type: n
	});
}
// src/module/foundry/administration/settings/register.ts
function nC() {
	tC(ld.showUnassignedPlayerWarning, !0, Boolean, `${n}.Settings.Administration.ShowUnassignedPlayerWarning`), game.settings.registerMenu(r, "administrationConsole", {
		hint: `${n}.Menu.AdministrationConsole.Hint`,
		icon: "fa-solid fa-screwdriver-wrench",
		label: `${n}.Menu.AdministrationConsole.Label`,
		name: `${n}.Menu.AdministrationConsole.Name`,
		restricted: hd.ACCESS_POLICY.gmOnly,
		type: hd
	});
}
// src/module/functions/combat/advantage.ts
function rC(e, t) {
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
function iC(e) {
	return e.filter(({ currentAdvantage: e, roundStartAdvantage: t }) => e > 0 && e <= t).map(({ actorId: e }) => e);
}
// src/module/foundry/combat/hooks.ts
var aC = /* @__PURE__ */ new Set();
function oC() {
	Hooks.on("wfrp4e:opposedTestResult", sC), Hooks.on("wfrp4e:applyDamage", cC), Hooks.on("createActiveEffect", lC), Hooks.on("createCombatant", (e) => void uC(e, "join")), Hooks.on("deleteCombatant", (e) => void uC(e, "leave")), Hooks.on("preUpdateCombat", (e, t) => void dC(e, t)), Hooks.on("updateCombat", (e, t) => void pC(e, t));
}
async function sC(...e) {
	if (!yC() || !ff().automateOpposed) return;
	let [t, n, r] = e;
	if (!t || !n || !r || r.context?.unopposed === !0) return;
	let i = n.data?.result;
	if (i?.options?.preventAdvantage === !0 || i?.canDualWield === !0) return;
	let a = t.result, o = of(n.actor), s = of(r.actor);
	if (!o || !s || !a) return;
	let c = gC(n);
	if (c && aC.has(c)) return;
	c && _C(c);
	let l = a.winner === "attacker" ? o : s, u = l === o ? s : o, d = {
		attacker: o,
		defender: s
	}, f = rC(l === o ? "attacker" : "defender", vC());
	for (let e of f) {
		let t = d[e.participant];
		e.mode === "set" ? await af(t, e.amount) : await rf(t, e.amount);
	}
	bC(`${l.name} gained Advantage; ${u.name} lost Advantage.`);
}
async function cC(e) {
	if (!yC() || !ff().automateDamage || !xC(e)) return;
	let t = e.opposedTest;
	if (t?.defenderTest?.context?.unopposed !== !0) return;
	let n = of(e.attacker), r = of(e.actor);
	if (!n || !r) return;
	let i = t?.attackerTest, a = i ? gC(i) : "";
	a && aC.has(a) || (a && _C(a), vC() || await af(r, 0), await rf(n, 1), bC(`${n.name} gained Advantage for outmanoeuvring ${r.name}.`));
}
async function lC(e) {
	if (!yC() || !ff().automateCondition || !xC(e) || e.isCondition !== !0 || vC()) return;
	let t = String(e.conditionId ?? "");
	if ([
		"dead",
		"engaged",
		"fear",
		"grappling"
	].includes(t)) return;
	let n = of(e.parent);
	n && n.inCombat === !0 && (await af(n, 0), bC(`${n.name} lost Advantage after receiving a condition.`));
}
async function uC(e, t) {
	if (!yC() || !xC(e)) return;
	let n = ff();
	if (t === "join" && !n.clearOnJoin || t === "leave" && !n.clearOnLeave || t === "join" && vC()) return;
	let r = of(e.actor);
	r && await af(r, 0);
}
async function dC(e, t) {
	if (!yC() || vC() || !ff().promptMomentumLoss || !xC(e) || !xC(t)) return;
	let n = Number(t.round), r = Number(e.round);
	if (!Number.isFinite(n) || n <= r || r <= 0) return;
	let i = mC(e), a = new Set(iC(i.flatMap((e) => {
		let t = of(e.actor);
		return t ? [{
			actorId: t.id,
			currentAdvantage: Number(t.system.status?.advantage?.value ?? 0),
			roundStartAdvantage: Number(hC(e, "roundStartAdvantage") ?? 0)
		}] : [];
	}))), o = i.filter((e) => {
		let t = of(e.actor);
		return t ? a.has(t.id) : !1;
	});
	if (o.length === 0) return;
	let s = o.map((e) => of(e.actor)?.name).join(", ");
	if (await foundry.applications.api.DialogV2.confirm({
		content: `<p>Reduce Advantage by 1 for combatants who gained no momentum this round?</p><p><strong>${foundry.utils.escapeHTML(s)}</strong></p>`,
		modal: !0,
		rejectClose: !1,
		window: { title: "Lose Momentum" }
	})) {
		for (let e of o) {
			let t = of(e.actor);
			t && await rf(t, -1);
		}
		await fC(o.flatMap((e) => {
			let t = of(e.actor)?.name;
			return t ? [t] : [];
		})), bC(`Reduced Advantage for ${o.length} combatant${o.length === 1 ? "" : "s"}.`);
	}
}
async function fC(e) {
	let t = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id), n = e.map((e) => `<li>${foundry.utils.escapeHTML(e)}</li>`).join("");
	await ChatMessage.create({
		content: `<h3>Momentum Loss</h3><p>Advantage reduced by 1:</p><ul>${n}</ul>`,
		whisper: t
	});
}
async function pC(e, t) {
	if (yC() && xC(e) && xC(t) && "round" in t) for (let t of mC(e)) {
		let e = of(t.actor), n = t.setFlag;
		e && typeof n == "function" && await n.call(t, r, "roundStartAdvantage", Number(e.system.status?.advantage?.value ?? 0));
	}
}
function mC(e) {
	let t = e.combatants;
	return t && typeof t == "object" ? Array.from(t) : [];
}
function hC(e, t) {
	let n = e.getFlag;
	return typeof n == "function" ? n.call(e, r, t) : void 0;
}
function gC(e) {
	let t = e.message;
	return String(t?.id ?? "");
}
function _C(e) {
	aC.add(e), aC.size > 100 && aC.delete(aC.values().next().value ?? "");
}
function vC() {
	return game.settings.get("wfrp4e", "useGroupAdvantage") === !0;
}
function yC() {
	return game.user?.isGM === !0 && game.user.isUniqueGM !== !1;
}
function bC(e) {
	ui.notifications.info(e, { permanent: ff().persistentNotifications });
}
function xC(e) {
	return typeof e == "object" && !!e;
}
// src/module/foundry/combat/settings/register.ts
function SC() {
	for (let [e, t] of Object.entries(df)) game.settings.register(r, t, {
		config: !1,
		default: e !== "persistentNotifications",
		hint: `${n}.Settings.Advantage.${e}.Hint`,
		name: `${n}.Settings.Advantage.${e}.Name`,
		scope: "world",
		type: Boolean
	});
}
// src/module/foundry/fear-terror/actor-sheet/register.ts
var CC = "openFearConsole", wC = "wfrp4e-enhanced-fear-terror-actor-header", TC = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], EC = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function DC() {
	for (let e of TC) Hooks.on(e, (e, t) => {
		OC() && kC(e, t);
	});
	for (let e of EC) Hooks.on(e, (e) => {
		OC() && AC(e);
	});
}
function OC() {
	return Du.canCurrentUserAccess() && ou(au.actorSheet);
}
function kC(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === CC) || (t.push({
		action: CC,
		icon: "fa-solid fa-skull",
		label: "Fear Console"
	}), e.options.actions ??= {}, e.options.actions[CC] = function() {
		jC(this.document);
	}));
}
function AC(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${wC}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(wC, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = CC, i.dataset.tooltip = "Fear Console", i.ariaLabel = "Open Drowsy’s WFRP4e Toolkit Fear Console", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), jC(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function jC(e) {
	try {
		ku({ initialPayload: mu(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not read this actor. See the browser console for details.");
	}
}
// src/module/foundry/dark-whispers/settings/register.ts
function MC() {
	tC(Op.promptLibrary, JSON.stringify({
		prompts: [],
		version: 1
	}), String, `${n}.Settings.DarkWhispers.PromptLibrary`), tC(Op.defaultGroup, "party", String, `${n}.Settings.DarkWhispers.DefaultGroup`), tC(Op.messageStyle, "taunt", String, `${n}.Settings.DarkWhispers.MessageStyle`);
}
// src/module/foundry/group-test/settings/register.ts
var NC = {
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
function PC() {
	for (let [e, t] of Object.entries(Sm)) {
		let i = NC[e];
		game.settings.register(r, t, {
			config: !1,
			default: i,
			hint: `${n}.Settings.GroupTest.${e}.Hint`,
			name: `${n}.Settings.GroupTest.${e}.Name`,
			scope: "world",
			type: typeof i == "boolean" ? Boolean : typeof i == "number" ? Number : String
		});
	}
}
// src/module/functions/scene-controls/toolclip.ts
function FC(e, t) {
	return {
		heading: e,
		items: [{ paragraph: t }]
	};
}
// src/module/foundry/fear-terror/scene-controls/register.ts
var IC = "openFearConsole";
function LC() {
	Hooks.on("getSceneControlButtons", (e) => {
		Du.canCurrentUserAccess() && ou(au.tokenControls) && RC(e);
	});
}
function RC(e) {
	let t = e.tokens;
	t && (t.tools[IC] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: IC,
		onChange: () => {
			ku();
		},
		order: 99,
		title: "Fear Console",
		toolclip: FC("Fear Console", `${n}.SceneControls.OpenFearConsole`)
	});
}
// src/module/foundry/fear-terror/settings/register.ts
function zC() {
	eC(au.tokenControls, "TokenControlsLauncher"), eC(au.actorSheet, "ActorSheetLauncher"), game.settings.registerMenu(r, "fearConsole", {
		hint: `${n}.Menu.FearConsoleConfigurator.Hint`,
		icon: "fa-solid fa-gears",
		label: `${n}.Menu.FearConsoleConfigurator.Label`,
		name: `${n}.Menu.FearConsoleConfigurator.Name`,
		restricted: lu.ACCESS_POLICY.gmOnly,
		type: lu
	});
}
// src/module/foundry/session-management/settings/register.ts
function BC() {
	tC($_.options, "{}", String, `${n}.Settings.SessionManagement.State`), tC($_.state, JSON.stringify({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), String, `${n}.Settings.SessionManagement.State`), tC($_.holdingSceneUuid, "", String, `${n}.Settings.SessionManagement.HoldingSceneUuid`), tC($_.exportChat, !1, Boolean, `${n}.Settings.SessionManagement.ExportChat`), tC($_.pullPolicy, "pull", String, `${n}.Settings.SessionManagement.PullPolicy`, { choices: {
		activate: `${n}.Settings.SessionManagement.PullPolicy.Activate`,
		pull: `${n}.Settings.SessionManagement.PullPolicy.Pull`
	} }), game.settings.registerMenu(r, "sessionManagementConsole", {
		hint: `${n}.Menu.SessionManagementConsole.Hint`,
		icon: "fa-solid fa-calendar-check",
		label: `${n}.Menu.SessionManagementConsole.Label`,
		name: `${n}.Menu.SessionManagementConsole.Name`,
		restricted: Bx.ACCESS_POLICY.gmOnly,
		type: Bx
	});
}
// src/module/foundry/session-management/hooks.ts
function VC() {
	Hooks.on("preUpdateToken", HC);
}
function HC(e, t) {
	if (game.user?.isGM || !UC(e) || !UC(t)) return;
	let n = nv().holdingSceneUuid, r = canvas?.scene?.uuid;
	n && r === n && (t.x !== void 0 && (t.x = e.x), t.y !== void 0 && (t.y = e.y));
}
function UC(e) {
	return typeof e == "object" && !!e;
}
// src/module/foundry/toolkit-home/settings/register.ts
function WC() {
	class e extends iS {
		constructor() {
			super([]);
		}
		async render(e) {
			return await _S(), this;
		}
	}
	game.settings.registerMenu(r, "toolkitHome", {
		hint: `${n}.Menu.ToolkitHome.Hint`,
		icon: "fa-solid fa-toolbox",
		label: `${n}.Menu.ToolkitHome.Label`,
		name: `${n}.Menu.ToolkitHome.Name`,
		restricted: iS.ACCESS_POLICY.gmOnly,
		type: e
	});
}
// src/module/foundry/token-tools/settings/register.ts
function GC() {
	let e = {
		darkRange: 120,
		normalRange: 2,
		overrideDarkVision: !1,
		overrideNightVision: !1
	};
	for (let [t, i] of Object.entries(Eh)) {
		let a = e[t];
		game.settings.register(r, i, {
			config: !1,
			default: a,
			hint: `${n}.Settings.Vision.${t}.Hint`,
			name: `${n}.Settings.Vision.${t}.Name`,
			scope: "world",
			type: typeof a == "boolean" ? Boolean : Number
		});
	}
}
// src/module/foundry/xp-curve/scene-controls/register.ts
var KC = "openXpCurveConsole";
function qC() {
	Hooks.on("getSceneControlButtons", (e) => {
		if (!yv.canCurrentUserAccess() || !tu(Z.showTokenControlsLauncher)) return;
		let t = e.tokens;
		t && (t.tools[KC] = {
			button: !0,
			icon: "fa-solid fa-chart-line",
			name: KC,
			onChange: xv,
			order: 98,
			title: "Curve XP",
			toolclip: FC("Curve XP", `${n}.SceneControls.OpenXpCurveConsole`)
		});
	});
}
// src/module/foundry/xp-curve/settings/register.ts
function JC() {
	eC(Z.showTokenControlsLauncher, "XpCurveTokenControlsLauncher"), YC(Z.maximumAward, Jh.parameters.maximumAward, Number, "MaximumAward", { range: {
		max: 1e5,
		min: 0,
		step: 1
	} }), YC(Z.gapForMaximumAward, 5e3, Number, "GapForMaximumAward", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), YC(Z.catchUpRate, -1, Number, "CatchUpRate"), YC(Z.curveExponent, Jh.parameters.curveExponent, Number, "CurveExponent", { range: {
		max: 5,
		min: .1,
		step: .05
	} }), YC(Z.scalePivot, Jh.parameters.scalePivot, Number, "ScalePivot", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), YC(Z.scaleExponent, Jh.parameters.scaleExponent, Number, "ScaleExponent", { range: {
		max: 2,
		min: 0,
		step: .05
	} }), YC(Z.defaultReason, Jh.defaultReason, String, "DefaultReason"), game.settings.registerMenu(r, "xpCurveConsole", {
		hint: `${n}.Menu.XpCurveConfigurator.Hint`,
		icon: "fa-solid fa-sliders",
		label: `${n}.Menu.XpCurveConfigurator.Label`,
		name: `${n}.Menu.XpCurveConfigurator.Name`,
		restricted: nb.ACCESS_POLICY.gmOnly,
		type: nb
	});
}
function YC(e, t, r, i, a = {}) {
	tC(e, t, r, `${n}.Settings.XpCurve.${i}`, a);
}
// src/module/apps/xp-award-settings/state/settings.ts
var XC = Ks("xp-award-settings", () => {
	let e = /* @__PURE__ */ P(), t = /* @__PURE__ */ P(!1), n = /* @__PURE__ */ P(), r;
	function i(t, n) {
		e.value = { ...t }, r = n;
	}
	async function a() {
		if (!t.value && e.value) {
			t.value = !0, n.value = void 0;
			try {
				if (!Number.isSafeInteger(e.value.defaultAmount) || e.value.defaultAmount === 0) throw Error("Enter a non-zero whole-number XP amount.");
				await r.save({ ...e.value });
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Could not save XP settings.", e), n.value = e instanceof Error ? e.message : "Could not save XP settings.";
			} finally {
				t.value = !1;
			}
		}
	}
	return {
		errorMessage: n,
		initialize: i,
		isWorking: t,
		save: a,
		settings: e
	};
}), ZC = ["disabled"], QC = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "xp-default-amount"
}, $C = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "xp-default-reason"
}, ew = { class: "tw:flex tw:items-center tw:gap-3 tw:text-sm" }, tw = { class: "tw:flex tw:shrink-0 tw:justify-end tw:border-t tw:border-base-content/15 tw:p-4" }, nw = ["disabled"], rw = /* @__PURE__ */ L({
	__name: "XpAwardSettingsApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = XC();
		n.initialize(t.initialization, t.actions);
		let { settings: r, isWorking: i, errorMessage: a } = qs(n);
		return (e, t) => (B(), Ca(mc, {
			title: "XP Award Settings",
			description: "Defaults for new awards.",
			icon: "fa-solid fa-gear",
			"error-message": F(a)
		}, {
			footer: ir(() => [H("div", tw, [H("button", {
				form: "xp-award-settings-form",
				class: "tw:dui-btn tw:dui-btn-primary",
				disabled: F(i),
				type: "submit"
			}, " Save settings ", 8, nw)])]),
			default: ir(() => [F(r) ? (B(), V("form", {
				key: 0,
				id: "xp-award-settings-form",
				onSubmit: t[3] ||= ss((...e) => F(n).save && F(n).save(...e), ["prevent"])
			}, [H("fieldset", {
				class: "tw:m-0 tw:grid tw:gap-4 tw:border-0 tw:p-0",
				disabled: F(i)
			}, [
				H("label", QC, [
					t[4] ||= H("span", null, "Default XP", -1),
					I(H("input", {
						id: "xp-default-amount",
						"onUpdate:modelValue": t[0] ||= (e) => F(r).defaultAmount = e,
						class: "tw:dui-input tw:dui-input-sm tw:w-full",
						type: "number",
						step: "1",
						required: ""
					}, null, 512), [[
						q,
						F(r).defaultAmount,
						void 0,
						{ number: !0 }
					]]),
					t[5] ||= H("span", { class: "tw:text-xs tw:text-base-content/65!" }, "Negative amounts remove XP. Totals cannot fall below zero.", -1)
				]),
				H("label", $C, [
					t[6] ||= H("span", null, "Default reason", -1),
					I(H("input", {
						id: "xp-default-reason",
						"onUpdate:modelValue": t[1] ||= (e) => F(r).defaultReason = e,
						class: "tw:dui-input tw:dui-input-sm tw:w-full",
						type: "text"
					}, null, 512), [[q, F(r).defaultReason]]),
					t[7] ||= H("span", { class: "tw:text-xs tw:text-base-content/65!" }, "Supports %session%, %date%, and %datetime%.", -1)
				]),
				H("label", ew, [I(H("input", {
					"onUpdate:modelValue": t[2] ||= (e) => F(r).includeTimestampInReason = e,
					class: "tw:dui-checkbox tw:dui-checkbox-sm",
					type: "checkbox",
					"aria-label": "Include award date and time in the reason"
				}, null, 512), [[J, F(r).includeTimestampInReason]]), t[8] ||= W("Include award date and time in the reason", -1)])
			], 8, ZC)], 32)) : G("", !0)]),
			_: 1
		}, 8, ["error-message"]));
	}
}), iw = class extends Uc {
	static ACCESS_POLICY = Y.xpAwards;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${r}-xp-award-settings`,
		position: {
			width: 420,
			height: 390
		},
		window: {
			title: "XP Award Defaults",
			icon: "fa-solid fa-gear",
			resizable: !0
		}
	};
	getVueComponent() {
		return rw;
	}
	getVueProps() {
		return {
			actions: { save: async (e) => {
				if (X(Y.xpAwards), !Number.isSafeInteger(e.defaultAmount) || e.defaultAmount === 0) throw Error("Enter a non-zero whole-number XP amount.");
				await E_(e), await this.close();
			} },
			initialization: T_()
		};
	}
};
// src/module/foundry/xp-award/settings/register.ts
function aw() {
	ow(w_.auditLog, JSON.stringify({
		batches: [],
		version: 1
	}), String, "AuditLog"), ow(w_.defaultAmount, 20, Number, "DefaultAmount", { range: {
		max: 1e5,
		min: -1e5,
		step: 1
	} }), ow(w_.defaultReason, "Session %session% (%date%)", String, "DefaultReason"), ow(w_.defaultSelection, "party", String, "DefaultSelection", { choices: {
		company: `${n}.Settings.XpAward.DefaultSelection.Company`,
		party: `${n}.Settings.XpAward.DefaultSelection.Party`,
		world: `${n}.Settings.XpAward.DefaultSelection.World`
	} }), ow(w_.includeTimestampInReason, !0, Boolean, "IncludeTimestampInReason"), game.settings.registerMenu(r, "xpAwardSettings", {
		hint: `${n}.Menu.XpAwardSettings.Hint`,
		icon: "fa-solid fa-award",
		label: `${n}.Menu.XpAwardSettings.Label`,
		name: `${n}.Menu.XpAwardSettings.Name`,
		restricted: iw.ACCESS_POLICY.gmOnly,
		type: iw
	});
}
function ow(e, t, r, i, a = {}) {
	tC(e, t, r, `${n}.Settings.XpAward.${i}`, a);
}
// src/module/functions/macros/sync.ts
function sw(e, t) {
	let n = {
		create: [],
		update: []
	};
	for (let r of e) {
		let e = t.filter((e) => e.sourceId === r.id);
		e.length || n.create.push(r);
		for (let t of e) (t.name !== r.name || t.command !== r.command || t.img !== r.img || t.scope !== r.scope || t.type !== r.type || t.importedFolderId !== r.folderId) && n.update.push({
			source: r,
			worldId: t.id
		});
	}
	return n;
}
// src/module/foundry/macros/source.ts
var cw = `${r}.macros`;
function lw(e) {
	if (!$(e)) return null;
	let t = Q(e._id);
	if (!t) return null;
	let n = $(e._stats) ? e._stats : {}, i = $(e.flags) ? e.flags : {}, a = $(i.core) ? i.core : {}, o = $(i["wfrp4e-enhanced-fear-terror"]) ? i[r] : {}, s = Q(n.compendiumSource) || Q(a.sourceId), c = `Compendium.${cw}.`, l = s.startsWith(c) ? s.slice(c.length) : "";
	return {
		id: t,
		name: Q(e.name),
		command: Q(e.command),
		img: Q(e.img),
		scope: Q(e.scope),
		type: Q(e.type),
		folderId: Q(e.folder),
		...l && !l.includes(".") ? { sourceId: l } : l.startsWith("Macro.") && !l.slice(6).includes(".") ? { sourceId: l.slice(6) } : {},
		...typeof o.macroFolder == "string" ? { importedFolderId: o.macroFolder } : {}
	};
}
// src/module/foundry/macros/sync.ts
var uw = "ignoreMacroImportPrompts";
function dw() {
	game.settings.register(r, uw, {
		name: "Ignore toolkit macro import prompts",
		hint: "Do not ask to import or update toolkit macros at startup. Uncheck to resume checks in this world.",
		config: game.user.isGM,
		default: !1,
		scope: "world",
		type: Boolean
	});
}
async function fw() {
	let e = game.packs.get(cw);
	if (!e) throw Error("The toolkit macro compendium is unavailable.");
	return sw((await e.getDocuments()).map((e) => {
		let t = lw(e.toObject());
		if (!t) throw Error(`Invalid bundled macro: ${e.name}.`);
		return t;
	}), Array.from(game.macros).flatMap((e) => {
		let t = lw(e.toObject());
		return t ? [t] : [];
	}));
}
function pw() {
	return game.ready && game.system.id === "wfrp4e" && game.user.isGM && game.user.isActiveGM && game.settings.get("wfrp4e-enhanced-fear-terror", "ignoreMacroImportPrompts") !== !0;
}
async function mw() {
	if (!pw()) return;
	let e = await fw();
	if (!e.create.length && !e.update.length) return;
	let t = await foundry.applications.api.DialogV2.wait({
		window: { title: "Drowsy’s Toolkit Macros" },
		position: { width: 460 },
		content: `<p>Your toolkit macros need attention: <strong>${e.create.length} missing</strong>, <strong>${e.update.length} to update</strong>.</p><p>Import the latest macros into folders grouped by task. Updating replaces imported macro code, names, and icons while keeping their IDs, hotbar links, and permissions.</p><p>“Don’t Ask Again” disables reminders for this world. Re-enable them in Module Settings.</p>`,
		buttons: [
			{
				action: "import",
				label: e.update.length ? "Import / Update" : "Import Macros"
			},
			{
				action: "later",
				label: "Ask Next Time",
				default: !0
			},
			{
				action: "ignore",
				label: "Don’t Ask Again"
			}
		],
		rejectClose: !1
	});
	if (pw()) {
		if (t === "ignore") await game.settings.set(r, uw, !0);
		else if (t === "import") {
			let e = await fw();
			await hw(e), ui.notifications.info(`Toolkit macros: ${e.create.length} imported, ${e.update.length} updated.`);
		}
	}
}
async function hw(e) {
	if (!e.create.length && !e.update.length) return;
	let t = game.packs.get(cw);
	if (!t) throw Error("The toolkit macro compendium is unavailable.");
	let n = [...game.folders].filter((e) => e.type === "Macro"), a = n.find((e) => {
		let t = e.flags?.[r];
		return !e.folder && $(t) && t.importedContentRoot === !0;
	});
	a ??= n.find((e) => !e.folder && e.name === "Drowsy’s WFRP4e Toolkit"), a ??= await gw({
		name: i,
		flags: { [r]: { importedContentRoot: !0 } }
	});
	let o = /* @__PURE__ */ new Map([["", a]]);
	async function s(e) {
		let r = o.get(e);
		if (r) return r;
		let i = t.folders.contents.find((t) => t.id === e);
		if (!i) throw Error(`Bundled macro folder ${e} is unavailable.`);
		let a = await s(i.folder?.id ?? ""), c = n.find((e) => e.folder?.id === a.id && e.name === i.name) ?? await gw({
			name: i.name,
			folder: a.id
		});
		return n.push(c), o.set(e, c), c;
	}
	for (let n of e.create) await game.macros.importFromCompendium(t, n.id, {
		folder: (await s(n.folderId)).id,
		[`flags.${r}.macroFolder`]: n.folderId
	}, { keepId: !1 });
	for (let { source: t, worldId: n } of e.update) {
		let e = Array.from(game.macros).find((e) => e.id === n);
		if (!e) throw Error(`Imported macro ${n} disappeared; try again.`);
		await e.update({
			name: t.name,
			command: t.command,
			img: t.img,
			scope: t.scope,
			type: t.type,
			folder: (await s(t.folderId)).id,
			[`flags.${r}.macroFolder`]: t.folderId
		});
	}
}
async function gw(e) {
	let t = await CONFIG.Folder.documentClass.create({
		type: "Macro",
		sorting: "a",
		...e
	});
	if (!t) throw Error(`Could not create macro folder ${String(e.name)}.`);
	return t;
}
// src/module/foundry/party/settings.ts
function _w() {
	game.settings.register(r, xg, {
		name: "Party configuration",
		hint: "The shared party roster and category XP percentages.",
		config: !1,
		scope: "world",
		type: String,
		default: ""
	}), game.settings.registerMenu(r, "configureParty", {
		name: "Configure Party",
		label: "Configure Party",
		icon: "fa-solid fa-people-group",
		hint: "Organize Party, Companions, and other XP recipients.",
		restricted: !0,
		type: g_
	});
}
// src/module/init/register-toolkit.ts
function vw() {
	ZS(), oC(), Rp(), Hm(), VC(), Hooks.once("setup", dw), Hooks.once("init", () => {
		console.info(`${r} | Initializing`), nC(), SC(), zC(), MC(), PC(), BC(), WC(), GC(), aw(), _w(), JC(), DC(), LC(), qC();
	}), Hooks.once("ready", () => {
		game.system.id === "wfrp4e" ? (QS(), mw().catch((e) => {
			console.error(`${r} | Toolkit macro import failed.`, e), ui.notifications.error("Toolkit macro import failed. See the browser console for details.");
		}), console.info(`${r} | Ready`)) : console.warn(`${r} | Loaded outside ${a}; skipping module API registration.`);
	});
}
// src/module/foundry/compendiums/settings.ts
var yw = "keepCompendiumsTidy";
function bw() {
	if (!game?.user) throw Error("Foundry user is unavailable during Compendium tidy setting registration.");
	game.settings.register(e, yw, {
		config: game.user.isGM === !0,
		default: !1,
		hint: "Restore this module's Compendium sidebar folders and pack locations when the active GM opens the world.",
		name: `Keep ${t} Compendiums Tidy?`,
		scope: "world",
		type: Boolean
	});
}
// src/module/foundry/compendiums/merge.ts
async function xw(e, t, n, r) {
	for (let [, n] of r.entries()) if (n.folder?.id === e.id && (await n.setFolder(t), n.folder?.id !== t.id)) throw Error(`Could not move a pack out of ${e.name}.`);
	for (let r of n.filter((t) => t.folder?.id === e.id)) if (await r.update({ folder: t.id }), r.folder?.id !== t.id) throw Error(`Could not move folder ${r.name}.`);
	if (!await e.delete({
		deleteSubfolders: !1,
		deleteContents: !1
	})) throw Error(`Could not delete empty duplicate folder ${e.name}.`);
	n.splice(n.indexOf(e), 1);
}
async function Sw(e, t, n, r) {
	for (let [e, i] of t.entries()) if (i.folder && n.has(i.folder.id) && !r.has(e) && (await i.setFolder(null), i.folder)) throw Error(`Could not move unrelated pack ${e} to the sidebar root.`);
	for (let t of e) if (t.folder && n.has(t.folder.id) && !n.has(t.id) && (await t.update({ folder: null }), t.folder)) throw Error(`Could not move unrelated folder ${t.name} to the sidebar root.`);
}
// src/module/functions/compendiums/folders.ts
function Cw(e, t) {
	return t.filter((t) => t.folder?.id === e.id);
}
function ww(e, t) {
	let n = /* @__PURE__ */ new Set([e.id]);
	for (let r of Cw(e, t)) for (let e of ww(r, t)) n.add(e);
	return n;
}
function Tw(e, t) {
	let n = new Set(e.packs.map((e) => `${t}.${e}`));
	for (let r of e.folders) for (let e of Tw(r, t)) n.add(e);
	return n;
}
function Ew(e, t, n, r) {
	let i = ww(e, t), a = !1;
	for (let [e, t] of n.entries()) t.folder && i.has(t.folder.id) && r.has(e) && (a = !0);
	return a;
}
function Dw(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	function r(e, i) {
		let a = `${i}/${e.name}`;
		if (t.has(a)) throw Error(`Duplicate Compendium folder declaration: ${a}`);
		t.add(a);
		for (let t of e.packs) {
			if (n.has(t)) throw Error(`Duplicate Compendium pack declaration: ${t}`);
			n.add(t);
		}
		for (let t of e.folders) r(t, a);
	}
	for (let t of e) r(t, "");
}
// src/module/foundry/compendiums/tidy.ts
async function Ow(e, t) {
	await SS(e, () => kw(e, t));
}
async function kw(t, n) {
	if (t.user.isGM !== !0 || t.user.isActiveGM !== !0) return;
	let r = t.modules.get(e);
	if (!r) throw Error(`Foundry module registry entry was not found for ${e}.`);
	let i = Array.from(r.packFolders ?? []);
	if (Dw(i), i.length === 0) return;
	for (let n of i) for (let r of Tw(n, e)) if (!t.packs.has(r)) throw Error(`Declared Compendium ${r} was not found.`);
	let a = Array.from(t.folders).filter((e) => e.type === "Compendium"), o = /* @__PURE__ */ new Set();
	async function s(r, i) {
		let c = Tw(r, e), l = a.filter((e) => e.name === r.name && !o.has(e.id) && (!i || !ww(e, a).has(i.id))).sort((e, n) => Number(Ew(n, a, t.packs, c)) - Number(Ew(e, a, t.packs, c)) || e.id.localeCompare(n.id)), u = l.find((e) => (e.folder?.id ?? null) === (i?.id ?? null));
		if (!u) {
			if (u = l.find((e) => Ew(e, a, t.packs, c) && (!i || !ww(e, a).has(i.id))), u) {
				if (i && ww(u, a).has(i.id)) throw Error(`Moving ${r.name} under ${i.name} would make a folder cycle.`);
				let e = i?.id ?? null;
				if (await u.update({ folder: e }) === void 0 && (u.folder?.id ?? null) !== e) throw Error(`Could not move Compendium folder ${r.name}; the update was not applied.`);
			} else {
				if (u = await n({
					name: r.name,
					type: "Compendium",
					folder: i?.id ?? null,
					sorting: r.sorting,
					...r.color ? { color: r.color } : {}
				}), !u) throw Error(`Could not create Compendium folder ${r.name}.`);
				a.push(u);
			}
		}
		o.add(u.id);
		for (let e of l) if (e.id !== u.id && ((e.folder?.id ?? null) === (i?.id ?? null) || Ew(e, a, t.packs, c))) {
			if (ww(e, a).has(u.id)) throw Error(`Cannot merge ancestor folder ${e.name} into its descendant.`);
			await xw(e, u, a, t.packs);
		}
		let d = {};
		if (u.sorting !== r.sorting && (d.sorting = r.sorting), r.color !== void 0 && u.color !== r.color && (d.color = r.color), Object.keys(d).length > 0 && await u.update(d) === void 0 && (u.sorting !== r.sorting || r.color !== void 0 && u.color !== r.color)) throw Error(`Could not configure Compendium folder ${r.name}; the update was not applied.`);
		for (let n of r.packs) {
			let r = `${e}.${n}`, i = t.packs.get(r);
			if (!i) throw Error(`Declared Compendium ${r} was not found.`);
			i.folder?.id !== u.id && await i.setFolder(u);
		}
		for (let e of r.folders) await s(e, u);
	}
	for (let e of i) await s(e, null);
	let c = new Set(i.flatMap((t) => [...Tw(t, e)]));
	await Sw(a, t.packs, o, c);
}
async function Aw() {
	game?.user.isGM && game.user.isActiveGM && game.settings.get("wfrp4e-enhanced-fear-terror", "keepCompendiumsTidy") === !0 && await Ow(game, (e) => CONFIG.Folder.documentClass.create(e));
}
// src/module/functions/imported-content/folders.ts
function jw(e, t, n, r) {
	let i = new Map(e.map((e) => [e.id, e])), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
	function s(e) {
		if (e === null) return [];
		let t = a.get(e);
		if (t) return t;
		let n = i.get(e);
		if (!n) return [];
		if (o.has(e)) throw Error(`Cycle in world folder ancestry at ${e}.`);
		o.add(e);
		let r = [...s(n.folder?.id ?? null), n];
		return o.delete(e), a.set(e, r), r;
	}
	let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
	for (let e of t) for (let t of s(e.folderId)) (e.imported ? c : l).add(t.id);
	let u = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = s(t.id);
		for (let r of e) u.set(r.id, Math.max(u.get(r.id) ?? 0, e.length)), c.has(t.id) && t.id !== n || l.add(r.id);
	}
	let d = /* @__PURE__ */ new Map(), f = [];
	for (let e of t) {
		if (!e.imported) continue;
		let t = s(e.folderId);
		if (t.some(({ id: e }) => e === n)) continue;
		let i = t.findIndex(({ id: e }) => !l.has(e) && (u.get(e) ?? 0) < r);
		i === -1 ? f.push({
			id: e.id,
			path: t
		}) : d.set(t[i], t.slice(0, i));
	}
	return {
		branches: d,
		documents: f
	};
}
// src/module/functions/imported-content/source.ts
function Mw(e, t) {
	return typeof e == "string" && e.startsWith(`Compendium.${t}.`);
}
function Nw(e, t) {
	let n = e._stats?.compendiumSource;
	if (n?.startsWith("Compendium.")) return Mw(n, t);
	let r = e.flags?.core;
	return Mw(r?.sourceId, t);
}
// src/module/foundry/imported-content/settings.ts
var Pw = "keepImportedContentTidy";
function Fw(n) {
	game?.settings.register(e, Pw, {
		config: game.user.isGM === !0,
		default: !1,
		hint: "Group this module's imported documents under a module folder in each world directory.",
		name: `Keep ${t} Imported Content Tidy?`,
		onChange: n,
		scope: "world",
		type: Boolean
	});
}
// src/module/foundry/imported-content/tidy.ts
var Iw = "importedContentRoot";
function Lw(e) {
	return e?.ready === !0 && e.user.isGM === !0 && e.user.isActiveGM === !0 && e.settings.get("wfrp4e-enhanced-fear-terror", "keepImportedContentTidy") === !0;
}
function Rw(t) {
	return t.flags?.[e]?.[Iw] === !0;
}
async function zw(e, t) {
	let n = t?.id ?? null;
	if ((e.folder?.id ?? null) !== n && (await e.update({ folder: n }), (e.folder?.id ?? null) !== n)) throw Error(`Could not move ${e.name}.`);
}
async function Bw(t, n) {
	let r = (t.collections.get(n)?.contents ?? []).filter((e) => !e.pack && !e.parent), i = new Map(r.map((e) => [e.id, e])), a = r.map((t) => ({
		id: t.id,
		folderId: t.folder?.id ?? null,
		imported: Nw(t, e)
	}));
	if (!a.some((e) => e.imported)) return;
	let o = [...t.folders].filter((e) => e.type === n), s = o.filter(Rw), c = s.find((e) => !e.folder) ?? s[0];
	c?.folder && await zw(c, null);
	let l = CONST.FOLDER_MAX_DEPTH, u = jw(o, a, c?.id, l);
	if (!u.branches.size && !u.documents.length) return;
	async function d(e) {
		let t = await CONFIG.Folder.documentClass.create({
			type: n,
			...e
		});
		if (!t) throw Error(`Could not create ${n} folder ${String(e.name)}.`);
		return o.push(t), t;
	}
	let f = c ?? await d({
		name: "Drowsy’s WFRP4e Toolkit",
		sorting: "a",
		flags: { "wfrp4e-enhanced-fear-terror": { [Iw]: !0 } }
	});
	async function p(e) {
		let t = f, n = Math.min(e.length, l - 1);
		for (let r = 0; r < n; r++) {
			let n = e[r], i = r === l - 2 ? e.slice(r).map((e) => e.name).join("/") : n.name;
			t = o.find((e) => e.folder?.id === t.id && e.name === i) ?? await d({
				name: i,
				folder: t.id,
				sorting: n.sorting,
				color: n.color?.toString() ?? null
			});
		}
		return t;
	}
	for (let [e, t] of u.branches) await zw(e, await p(t));
	for (let { id: e, path: t } of u.documents) await zw(i.get(e), await p(t));
}
async function Vw() {
	let e = game;
	e && Lw(e) && await SS(e, async () => {
		if (Lw(e)) for (let t of CONST.FOLDER_DOCUMENT_TYPES) t !== "Compendium" && await Bw(e, t);
	});
}
// src/module/hooks/imported-content.ts
var Hw, Uw = !1, Ww = !1;
function Gw() {
	Lw(game) && (Uw ? Ww = !0 : (clearTimeout(Hw), Hw = setTimeout(() => void Kw(), 1e3)));
}
async function Kw() {
	Uw = !0, Ww = !1;
	try {
		await Vw();
	} catch (e) {
		console.error(`${t}: Imported content cleanup failed.`, e), ui.notifications.error(`${t}: Imported content cleanup failed. See the console for details.`, {
			permanent: !0,
			console: !1
		});
	} finally {
		Uw = !1, Ww && Gw();
	}
}
function qw(e) {
	!e.pack && !e.parent && Nw(e, "wfrp4e-enhanced-fear-terror") && Gw();
}
function Jw() {
	Hooks.once("setup", () => Fw(Gw)), Hooks.once("ready", Gw), Hooks.on("userConnected", Gw), Hooks.on("updateUser", Gw);
	for (let e of CONST.FOLDER_DOCUMENT_TYPES) e !== "Compendium" && (Hooks.on(`create${e}`, qw), Hooks.on(`update${e}`, (e, t) => {
		Object.hasOwn(t, "folder") && qw(e);
	}));
	Hooks.on("updateFolder", (e, t) => {
		e.type !== "Compendium" && !e.pack && Object.hasOwn(t, "folder") && Gw();
	}), Hooks.on("deleteFolder", (e) => {
		e.type !== "Compendium" && !e.pack && Gw();
	}), Hooks.on("preImportAdventure", (e, t, n, r) => {
		if (Mw(e.uuid, "wfrp4e-enhanced-fear-terror")) for (let t of CONST.FOLDER_DOCUMENT_TYPES) for (let i of [...n[t] ?? [], ...r[t] ?? []]) {
			let t = i._stats;
			i._stats = {
				...bS(t) ? t : {},
				compendiumSource: e.uuid
			};
		}
	}), Hooks.on("importAdventure", Gw);
}
foundry.applications.api.ApplicationV2, Promise.resolve();
// src/module/init/register-hooks.ts
function Yw() {
	vw(), Hooks.once("init", XS), Hooks.once("setup", bw), Jw(), Hooks.once("ready", async () => {
		try {
			await Aw();
		} catch (e) {
			console.error("Compendium sidebar tidy-up failed.", e), ui.notifications.error(`${t}: Compendium cleanup failed and may be incomplete. See the console for details.`, {
				permanent: !0,
				console: !1
			});
		}
	});
}
// src/module/init/index.ts
Yw();

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map