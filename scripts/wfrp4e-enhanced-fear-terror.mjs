//#region src/functions/imperial-calendar/calendar.ts
var e = 86400, t = 99999, n = [
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
function r(e) {
	let t = n.find((t) => t.name === e);
	if (!t) throw RangeError("Choose an Imperial month or festival.");
	return t;
}
//#endregion
//#region src/functions/imperial-calendar/calculate.ts
function i(t, n) {
	let r = o(n) - o(t), i = Math.abs(r), a = Math.floor(i / e);
	return {
		totalSeconds: r,
		wholeDays: a,
		years: Math.floor(a / 400),
		days: a % 400,
		hours: Math.floor(i % e / 3600),
		minutes: Math.floor(i % 3600 / 60),
		seconds: i % 60
	};
}
function a(e) {
	let n = r(e.period);
	s(e.year, 1, t, "Year (I.C.)"), s(e.day, 1, n.days, `Day in ${n.name}`), s(e.hour ?? 0, 0, 23, "Hour"), s(e.minute ?? 0, 0, 59, "Minute"), s(e.second ?? 0, 0, 59, "Second");
}
function o(t) {
	a(t);
	let r = (t.year - 1) * 400 + t.day - 1;
	for (let e of n) {
		if (e.name === t.period) break;
		r += e.days;
	}
	return r * e + (t.hour ?? 0) * 3600 + (t.minute ?? 0) * 60 + (t.second ?? 0);
}
function s(e, t, n, r) {
	if (!Number.isInteger(e) || e < t || e > n) throw RangeError(`${r} must be a whole number from ${t} to ${n}.`);
}
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function c(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var l = {}, u = [], d = () => {}, f = () => !1, p = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), m = (e) => e.startsWith("onUpdate:"), h = Object.assign, g = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, _ = Object.prototype.hasOwnProperty, v = (e, t) => _.call(e, t), y = Array.isArray, b = (e) => ie(e) === "[object Map]", x = (e) => ie(e) === "[object Set]", ee = (e) => ie(e) === "[object Date]", S = (e) => typeof e == "function", C = (e) => typeof e == "string", te = (e) => typeof e == "symbol", w = (e) => typeof e == "object" && !!e, ne = (e) => (w(e) || S(e)) && S(e.then) && S(e.catch), re = Object.prototype.toString, ie = (e) => re.call(e), ae = (e) => ie(e).slice(8, -1), oe = (e) => ie(e) === "[object Object]", se = (e) => C(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ce = /* @__PURE__ */ c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), le = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ue = /-\w/g, de = le((e) => e.replace(ue, (e) => e.slice(1).toUpperCase())), fe = /\B([A-Z])/g, pe = le((e) => e.replace(fe, "-$1").toLowerCase()), me = le((e) => e.charAt(0).toUpperCase() + e.slice(1)), he = le((e) => e ? `on${me(e)}` : ""), T = (e, t) => !Object.is(e, t), ge = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, _e = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ve = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ye, be = () => ye ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function xe(e) {
	if (y(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = C(r) ? Te(r) : xe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (C(e) || w(e)) return e;
}
var Se = /;(?![^(]*\))/g, Ce = /:([^]+)/, we = /\/\*[^]*?\*\//g;
function Te(e) {
	let t = {};
	return e.replace(we, "").split(Se).forEach((e) => {
		if (e) {
			let n = e.split(Ce);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function E(e) {
	let t = "";
	if (C(e)) t = e;
	else if (y(e)) for (let n = 0; n < e.length; n++) {
		let r = E(e[n]);
		r && (t += r + " ");
	}
	else if (w(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Ee = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", De = /* @__PURE__ */ c(Ee);
Ee + "";
function Oe(e) {
	return !!e || e === "";
}
function ke(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Ae(e[r], t[r]);
	return n;
}
function Ae(e, t) {
	if (e === t) return !0;
	let n = ee(e), r = ee(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = te(e), r = te(t), n || r) return e === t;
	if (n = y(e), r = y(t), n || r) return n && r ? ke(e, t) : !1;
	if (n = w(e), r = w(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Ae(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function je(e, t) {
	return e.findIndex((e) => Ae(e, t));
}
var Me = (e) => !!(e && e.__v_isRef === !0), D = (e) => C(e) ? e : e == null ? "" : y(e) || w(e) && (e.toString === re || !S(e.toString)) ? Me(e) ? D(e.value) : JSON.stringify(e, Ne, 2) : String(e), Ne = (e, t) => Me(t) ? Ne(e, t.value) : b(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Pe(t, r) + " =>"] = n, e), {}) } : x(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Pe(e)) } : te(t) ? Pe(t) : w(t) && !y(t) && !oe(t) ? String(t) : t, Pe = (e, t = "") => te(e) ? `Symbol(${e.description ?? t})` : e, Fe, Ie = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Fe && (Fe.active ? (this.parent = Fe, this.index = (Fe.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = Fe;
			try {
				return Fe = this, e();
			} finally {
				Fe = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Fe, Fe = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Fe === this) Fe = this.prevScope;
			else {
				let e = Fe;
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
function Le(e) {
	return new Ie(e);
}
function Re() {
	return Fe;
}
function ze(e, t = !1) {
	Fe && Fe.cleanups.push(e);
}
var O, Be = /* @__PURE__ */ new WeakSet(), Ve = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fe && (Fe.active ? Fe.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Be.has(this) && (Be.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ge(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, it(this), Je(this);
		let e = O, t = et;
		O = this, et = !0;
		try {
			return this.fn();
		} finally {
			Ye(this), O = e, et = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Qe(e);
			this.deps = this.depsTail = void 0, it(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Be.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Xe(this) && this.run();
	}
	get dirty() {
		return Xe(this);
	}
}, He = 0, Ue, We;
function Ge(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = We, We = e;
		return;
	}
	e.next = Ue, Ue = e;
}
function Ke() {
	He++;
}
function qe() {
	if (--He > 0) return;
	if (We) {
		let e = We;
		for (We = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ue;) {
		let t = Ue;
		for (Ue = void 0; t;) {
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
function Je(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ye(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Qe(r), $e(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Xe(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ze(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ze(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === at) || (e.globalVersion = at, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xe(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = O, r = et;
	O = e, et = !0;
	try {
		Je(e);
		let n = e.fn(e._value);
		(t.version === 0 || T(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		O = n, et = r, Ye(e), e.flags &= -3;
	}
}
function Qe(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Qe(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function $e(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var et = !0, tt = [];
function nt() {
	tt.push(et), et = !1;
}
function rt() {
	let e = tt.pop();
	et = e === void 0 ? !0 : e;
}
function it(e) {
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
var at = 0, ot = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, st = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!O || !et || O === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== O) t = this.activeLink = new ot(O, this), O.deps ? (t.prevDep = O.depsTail, O.depsTail.nextDep = t, O.depsTail = t) : O.deps = O.depsTail = t, ct(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = O.depsTail, t.nextDep = void 0, O.depsTail.nextDep = t, O.depsTail = t, O.deps === t && (O.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, at++, this.notify(e);
	}
	notify(e) {
		Ke();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			qe();
		}
	}
};
function ct(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) ct(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var lt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ Symbol(""), dt = /* @__PURE__ */ Symbol(""), ft = /* @__PURE__ */ Symbol("");
function pt(e, t, n) {
	if (et && O) {
		let t = lt.get(e);
		t || lt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new st()), r.map = t, r.key = n), r.track();
	}
}
function mt(e, t, n, r, i, a) {
	let o = lt.get(e);
	if (!o) {
		at++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ke(), t === "clear") o.forEach(s);
	else {
		let i = y(e), a = i && se(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ft || !te(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ft)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ut)), b(e) && s(o.get(dt)));
				break;
			case "delete":
				i || (s(o.get(ut)), b(e) && s(o.get(dt)));
				break;
			case "set":
				b(e) && s(o.get(ut));
				break;
		}
	}
	qe();
}
function ht(e, t) {
	let n = lt.get(e);
	return n && n.get(t);
}
function gt(e) {
	let t = /* @__PURE__ */ k(e);
	return t === e ? t : (pt(t, "iterate", ft), /* @__PURE__ */ tn(e) ? t : t.map(an));
}
function _t(e) {
	return pt(e = /* @__PURE__ */ k(e), "iterate", ft), e;
}
function vt(e, t) {
	return /* @__PURE__ */ en(e) ? on(/* @__PURE__ */ $t(e) ? an(t) : t) : an(t);
}
var yt = {
	__proto__: null,
	[Symbol.iterator]() {
		return bt(this, Symbol.iterator, (e) => vt(this, e));
	},
	concat(...e) {
		return gt(this).concat(...e.map((e) => y(e) ? gt(e) : e));
	},
	entries() {
		return bt(this, "entries", (e) => (e[1] = vt(this, e[1]), e));
	},
	every(e, t) {
		return St(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return St(this, "filter", e, t, (e) => e.map((e) => vt(this, e)), arguments);
	},
	find(e, t) {
		return St(this, "find", e, t, (e) => vt(this, e), arguments);
	},
	findIndex(e, t) {
		return St(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return St(this, "findLast", e, t, (e) => vt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return St(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return St(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return wt(this, "includes", e);
	},
	indexOf(...e) {
		return wt(this, "indexOf", e);
	},
	join(e) {
		return gt(this).join(e);
	},
	lastIndexOf(...e) {
		return wt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return St(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Tt(this, "pop");
	},
	push(...e) {
		return Tt(this, "push", e);
	},
	reduce(e, ...t) {
		return Ct(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return Ct(this, "reduceRight", e, t);
	},
	shift() {
		return Tt(this, "shift");
	},
	some(e, t) {
		return St(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Tt(this, "splice", e);
	},
	toReversed() {
		return gt(this).toReversed();
	},
	toSorted(e) {
		return gt(this).toSorted(e);
	},
	toSpliced(...e) {
		return gt(this).toSpliced(...e);
	},
	unshift(...e) {
		return Tt(this, "unshift", e);
	},
	values() {
		return bt(this, "values", (e) => vt(this, e));
	}
};
function bt(e, t, n) {
	let r = _t(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ tn(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var xt = Array.prototype;
function St(e, t, n, r, i, a) {
	let o = _t(e), s = o !== e && !/* @__PURE__ */ tn(e), c = o[t];
	if (c !== xt[t]) {
		let t = c.apply(e, a);
		return s ? an(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, vt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function Ct(e, t, n, r) {
	let i = _t(e), a = i !== e && !/* @__PURE__ */ tn(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = vt(e, t)), n.call(this, t, vt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? vt(e, c) : c;
}
function wt(e, t, n) {
	let r = /* @__PURE__ */ k(e);
	pt(r, "iterate", ft);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ nn(n[0]) ? (n[0] = /* @__PURE__ */ k(n[0]), r[t](...n)) : i;
}
function Tt(e, t, n = []) {
	nt(), Ke();
	let r = (/* @__PURE__ */ k(e))[t].apply(e, n);
	return qe(), rt(), r;
}
var Et = /* @__PURE__ */ c("__proto__,__v_isRef,__isVue"), Dt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(te));
function Ot(e) {
	te(e) || (e = String(e));
	let t = /* @__PURE__ */ k(this);
	return pt(t, "has", e), t.hasOwnProperty(e);
}
var kt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? qt : Kt : i ? Gt : Wt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = y(e);
		if (!r) {
			let e;
			if (a && (e = yt[t])) return e;
			if (t === "hasOwnProperty") return Ot;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ A(e) ? e : n);
		if ((te(t) ? Dt.has(t) : Et(t)) || (r || pt(e, "get", t), i)) return o;
		if (/* @__PURE__ */ A(o)) {
			let e = a && se(t) ? o : o.value;
			return r && w(e) ? /* @__PURE__ */ Zt(e) : e;
		}
		return w(o) ? r ? /* @__PURE__ */ Zt(o) : /* @__PURE__ */ Yt(o) : o;
	}
}, At = class extends kt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = y(e) && se(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ en(i);
			if (!/* @__PURE__ */ tn(n) && !/* @__PURE__ */ en(n) && (i = /* @__PURE__ */ k(i), n = /* @__PURE__ */ k(n)), !a && /* @__PURE__ */ A(i) && !/* @__PURE__ */ A(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : v(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ A(e) ? e : r);
		return e === /* @__PURE__ */ k(r) && (o ? T(n, i) && mt(e, "set", t, n, i) : mt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = v(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && mt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!te(t) || !Dt.has(t)) && pt(e, "has", t), n;
	}
	ownKeys(e) {
		return pt(e, "iterate", y(e) ? "length" : ut), Reflect.ownKeys(e);
	}
}, jt = class extends kt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Mt = /* @__PURE__ */ new At(), Nt = /* @__PURE__ */ new jt(), Pt = /* @__PURE__ */ new At(!0), Ft = (e) => e, It = (e) => Reflect.getPrototypeOf(e);
function Lt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ k(i), o = b(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Ft : t ? on : an;
		return !t && pt(a, "iterate", c ? dt : ut), h(Object.create(l), { next() {
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
function Rt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function zt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ k(r), a = /* @__PURE__ */ k(n);
			e || (T(n, a) && pt(i, "get", n), pt(i, "get", a));
			let { has: o } = It(i), s = t ? Ft : e ? on : an;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && pt(/* @__PURE__ */ k(t), "iterate", ut), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ k(n), i = /* @__PURE__ */ k(t);
			return e || (T(t, i) && pt(r, "has", t), pt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ k(a), s = t ? Ft : e ? on : an;
			return !e && pt(o, "iterate", ut), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return h(n, e ? {
		add: Rt("add"),
		set: Rt("set"),
		delete: Rt("delete"),
		clear: Rt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ k(this), r = It(n), i = /* @__PURE__ */ k(e), a = !t && !/* @__PURE__ */ tn(e) && !/* @__PURE__ */ en(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), mt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ tn(n) && !/* @__PURE__ */ en(n) && (n = /* @__PURE__ */ k(n));
			let r = /* @__PURE__ */ k(this), { has: i, get: a } = It(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ k(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && mt(r, "set", e, n, s) : mt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ k(this), { has: n, get: r } = It(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ k(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && mt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ k(this), t = e.size !== 0, n = e.clear();
			return t && mt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Lt(r, e, t);
	}), n;
}
function Bt(e, t) {
	let n = zt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(v(n, r) && r in t ? n : t, r, i);
}
var Vt = { get: /* @__PURE__ */ Bt(!1, !1) }, Ht = { get: /* @__PURE__ */ Bt(!1, !0) }, Ut = { get: /* @__PURE__ */ Bt(!0, !1) }, Wt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap();
function Jt(e) {
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
function Yt(e) {
	return /* @__PURE__ */ en(e) ? e : Qt(e, !1, Mt, Vt, Wt);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return Qt(e, !1, Pt, Ht, Gt);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return Qt(e, !0, Nt, Ut, Kt);
}
function Qt(e, t, n, r, i) {
	if (!w(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Jt(ae(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return /* @__PURE__ */ en(e) ? /* @__PURE__ */ $t(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function k(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ k(t) : e;
}
function rn(e) {
	return !v(e, "__v_skip") && Object.isExtensible(e) && _e(e, "__v_skip", !0), e;
}
var an = (e) => w(e) ? /* @__PURE__ */ Yt(e) : e, on = (e) => w(e) ? /* @__PURE__ */ Zt(e) : e;
// @__NO_SIDE_EFFECTS__
function A(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	return cn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
	return cn(e, !0);
}
function cn(e, t) {
	return /* @__PURE__ */ A(e) ? e : new ln(e, t);
}
var ln = class {
	constructor(e, t) {
		this.dep = new st(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ k(e), this._value = t ? e : an(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ tn(e) || /* @__PURE__ */ en(e);
		e = n ? e : /* @__PURE__ */ k(e), T(e, t) && (this._rawValue = e, this._value = n ? e : an(e), this.dep.trigger());
	}
};
function M(e) {
	return /* @__PURE__ */ A(e) ? e.value : e;
}
var un = {
	get: (e, t, n) => t === "__v_raw" ? e : M(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ A(i) && !/* @__PURE__ */ A(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function dn(e) {
	return /* @__PURE__ */ $t(e) ? e : new Proxy(e, un);
}
var fn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new st(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function pn(e) {
	return new fn(e);
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
	let t = y(e) ? Array(e.length) : {};
	for (let n in e) t[n] = vn(e, n);
	return t;
}
var hn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = te(t) ? t : String(t), this._raw = /* @__PURE__ */ k(e);
		let r = !0, i = e;
		if (!y(e) || te(this._key) || !se(this._key)) do
			r = !/* @__PURE__ */ nn(i) || /* @__PURE__ */ tn(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = M(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ A(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ A(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return ht(this._raw, this._key);
	}
}, gn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function _n(e, t, n) {
	return /* @__PURE__ */ A(e) ? e : S(e) ? new gn(e) : w(e) && arguments.length > 1 ? vn(e, t, n) : /* @__PURE__ */ j(e);
}
function vn(e, t, n) {
	return new hn(e, t, n);
}
var yn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new st(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = at - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && O !== this) return Ge(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ze(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function bn(e, t, n = !1) {
	let r, i;
	return S(e) ? r = e : (r = e.get, i = e.set), new yn(r, i, n);
}
var xn = {}, Sn = /* @__PURE__ */ new WeakMap(), Cn = void 0;
function wn(e, t = !1, n = Cn) {
	if (n) {
		let t = Sn.get(n);
		t || Sn.set(n, t = []), t.push(e);
	}
}
function Tn(e, t, n = l) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, u = (e) => i ? e : /* @__PURE__ */ tn(e) || i === !1 || i === 0 ? En(e, 1) : En(e), f, p, m, h, _ = !1, v = !1;
	if (/* @__PURE__ */ A(e) ? (p = () => e.value, _ = /* @__PURE__ */ tn(e)) : /* @__PURE__ */ $t(e) ? (p = () => u(e), _ = !0) : y(e) ? (v = !0, _ = e.some((e) => /* @__PURE__ */ $t(e) || /* @__PURE__ */ tn(e)), p = () => e.map((e) => {
		if (/* @__PURE__ */ A(e)) return e.value;
		if (/* @__PURE__ */ $t(e)) return u(e);
		if (S(e)) return c ? c(e, 2) : e();
	})) : p = S(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (m) {
			nt();
			try {
				m();
			} finally {
				rt();
			}
		}
		let t = Cn;
		Cn = f;
		try {
			return c ? c(e, 3, [h]) : e(h);
		} finally {
			Cn = t;
		}
	} : d, t && i) {
		let e = p, t = i === !0 ? Infinity : i;
		p = () => En(e(), t);
	}
	let b = Re(), x = () => {
		f.stop(), b && b.active && g(b.effects, f);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return x(), n;
		};
	}
	let ee = v ? Array(e.length).fill(xn) : xn, C = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let n = f.run();
			if (e || i || _ || (v ? n.some((e, t) => T(e, ee[t])) : T(n, ee))) {
				m && m();
				let e = Cn;
				Cn = f;
				try {
					let e = [
						n,
						ee === xn ? void 0 : v && ee[0] === xn ? [] : ee,
						h
					];
					ee = n, c ? c(t, 3, e) : t(...e);
				} finally {
					Cn = e;
				}
			}
		} else f.run();
	};
	return s && s(C), f = new Ve(p), f.scheduler = o ? () => o(C, !1) : C, h = (e) => wn(e, !1, f), m = f.onStop = () => {
		let e = Sn.get(f);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			Sn.delete(f);
		}
	}, t ? r ? C(!0) : ee = f.run() : o ? o(C.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function En(e, t = Infinity, n) {
	if (t <= 0 || !w(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ A(e)) En(e.value, t, n);
	else if (y(e)) for (let r = 0; r < e.length; r++) En(e[r], t, n);
	else if (x(e) || b(e)) e.forEach((e) => {
		En(e, t, n);
	});
	else if (oe(e)) {
		for (let r in e) En(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && En(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Dn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		kn(e, t, n);
	}
}
function On(e, t, n, r) {
	if (S(e)) {
		let i = Dn(e, t, n, r);
		return i && ne(i) && i.catch((e) => {
			kn(e, t, n);
		}), i;
	}
	if (y(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(On(e[a], t, n, r));
		return i;
	}
}
function kn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || l;
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
			nt(), Dn(a, null, 10, [
				e,
				i,
				o
			]), rt();
			return;
		}
	}
	An(e, n, i, r, o);
}
function An(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var jn = [], Mn = -1, Nn = [], Pn = null, Fn = 0, In = /* @__PURE__ */ Promise.resolve(), Ln = null;
function Rn(e) {
	let t = Ln || In;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function zn(e) {
	let t = Mn + 1, n = jn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = jn[r], a = Gn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Bn(e) {
	if (!(e.flags & 1)) {
		let t = Gn(e), n = jn[jn.length - 1];
		!n || !(e.flags & 2) && t >= Gn(n) ? jn.push(e) : jn.splice(zn(t), 0, e), e.flags |= 1, Vn();
	}
}
function Vn() {
	Ln ||= In.then(Kn);
}
function Hn(e) {
	y(e) ? Nn.push(...e) : Pn && e.id === -1 ? Pn.splice(Fn + 1, 0, e) : e.flags & 1 || (Nn.push(e), e.flags |= 1), Vn();
}
function Un(e, t, n = Mn + 1) {
	for (; n < jn.length; n++) {
		let t = jn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			jn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Wn(e) {
	if (Nn.length) {
		let e = [...new Set(Nn)].sort((e, t) => Gn(e) - Gn(t));
		if (Nn.length = 0, Pn) {
			Pn.push(...e);
			return;
		}
		for (Pn = e, Fn = 0; Fn < Pn.length; Fn++) {
			let e = Pn[Fn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Pn = null, Fn = 0;
	}
}
var Gn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Kn(e) {
	try {
		for (Mn = 0; Mn < jn.length; Mn++) {
			let e = jn[Mn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Dn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Mn < jn.length; Mn++) {
			let e = jn[Mn];
			e && (e.flags &= -2);
		}
		Mn = -1, jn.length = 0, Wn(e), Ln = null, (jn.length || Nn.length) && Kn(e);
	}
}
var qn = null, Jn = null;
function Yn(e) {
	let t = qn;
	return qn = e, Jn = e && e.type.__scopeId || null, t;
}
function Xn(e, t = qn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ca(-1);
		let i = Yn(t), a;
		try {
			a = e(...n);
		} finally {
			Yn(i), r._d && ca(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function N(e, t) {
	if (qn === null) return e;
	let n = Ua(qn), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = l] = t[e];
		i && (S(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && En(a), r.push({
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
function Zn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (nt(), On(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), rt());
	}
}
function Qn(e, t) {
	if (Da) {
		let n = Da.provides, r = Da.parent && Da.parent.provides;
		r === n && (n = Da.provides = Object.create(r)), n[e] = t;
	}
}
function $n(e, t, n = !1) {
	let r = Oa();
	if (r || li) {
		let i = li ? li._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && S(t) ? t.call(r && r.proxy) : t;
	}
}
function er() {
	return !!(Oa() || li);
}
var tr = /* @__PURE__ */ Symbol.for("v-scx"), nr = () => $n(tr);
function rr(e, t) {
	return ar(e, null, { flush: "sync" });
}
function ir(e, t, n) {
	return ar(e, t, n);
}
function ar(e, t, n = l) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = h({}, n), c = t && r || !t && a !== "post", u;
	if (Pa) {
		if (a === "sync") {
			let e = nr();
			u = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = d, e.resume = d, e.pause = d, e;
		}
	}
	let f = Da;
	s.call = (e, t, n) => On(e, f, t, n);
	let p = !1;
	a === "post" ? s.scheduler = (e) => {
		Hi(e, f && f.suspense);
	} : a !== "sync" && (p = !0, s.scheduler = (e, t) => {
		t ? e() : Bn(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), p && (e.flags |= 2, f && (e.id = f.uid, e.i = f));
	};
	let m = Tn(e, t, s);
	return Pa && (u ? u.push(m) : c && m()), m;
}
function or(e, t, n) {
	let r = this.proxy, i = C(e) ? e.includes(".") ? sr(r, e) : () => r[e] : e.bind(r, r), a;
	S(t) ? a = t : (a = t.handler, n = t);
	let o = ja(this), s = ar(i, a.bind(r), n);
	return o(), s;
}
function sr(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var cr = /* @__PURE__ */ Symbol("_vte"), lr = (e) => e.__isTeleport, ur = /* @__PURE__ */ Symbol("_leaveCb");
function dr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, dr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
	return S(e) ? /* @__PURE__ */ h({ name: e.name }, t, { setup: e }) : e;
}
function fr() {
	let e = Oa();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function pr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function mr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var hr = /* @__PURE__ */ new WeakMap();
function gr(e, t, n, r, i = !1) {
	if (y(e)) {
		e.forEach((e, a) => gr(e, t && (y(t) ? t[a] : t), n, r, i));
		return;
	}
	if (vr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && gr(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? Ua(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, u = t && t.r, d = s.refs === l ? s.refs = {} : s.refs, p = s.setupState, m = /* @__PURE__ */ k(p), h = p === l ? f : (e) => mr(d, e) ? !1 : v(m, e), _ = (e, t) => !(t && mr(d, t));
	if (u != null && u !== c) {
		if (_r(t), C(u)) d[u] = null, h(u) && (p[u] = null);
		else if (/* @__PURE__ */ A(u)) {
			let e = t;
			_(u, e.k) && (u.value = null), e.k && (d[e.k] = null);
		}
	}
	if (S(c)) Dn(c, s, 12, [o, d]);
	else {
		let t = C(c), r = /* @__PURE__ */ A(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? h(c) ? p[c] : d[c] : _(c) || !e.k ? c.value : d[e.k];
					if (i) y(n) && g(n, a);
					else if (y(n)) n.includes(a) || n.push(a);
					else if (t) d[c] = [a], h(c) && (p[c] = d[c]);
					else {
						let t = [a];
						_(c, e.k) && (c.value = t), e.k && (d[e.k] = t);
					}
				} else t ? (d[c] = o, h(c) && (p[c] = o)) : r && (_(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), hr.delete(e);
				};
				t.id = -1, hr.set(e, t), Hi(t, n);
			} else _r(e), s();
		}
	}
}
function _r(e) {
	let t = hr.get(e);
	t && (t.flags |= 8, hr.delete(e));
}
be().requestIdleCallback, be().cancelIdleCallback;
var vr = (e) => !!e.type.__asyncLoader, yr = (e) => e.type.__isKeepAlive;
function br(e, t) {
	Sr(e, "a", t);
}
function xr(e, t) {
	Sr(e, "da", t);
}
function Sr(e, t, n = Da) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (wr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) yr(e.parent.vnode) && Cr(r, t, n, e), e = e.parent;
	}
}
function Cr(e, t, n, r) {
	let i = wr(t, e, r, !0);
	jr(() => {
		g(r[t], i);
	}, n);
}
function wr(e, t, n = Da, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			nt();
			let i = ja(n), a = On(t, n, e, r);
			return i(), rt(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Tr = (e) => (t, n = Da) => {
	(!Pa || e === "sp") && wr(e, (...e) => t(...e), n);
}, Er = Tr("bm"), Dr = Tr("m"), Or = Tr("bu"), kr = Tr("u"), Ar = Tr("bum"), jr = Tr("um"), Mr = Tr("sp"), Nr = Tr("rtg"), Pr = Tr("rtc");
function Fr(e, t = Da) {
	wr("ec", e, t);
}
var Ir = /* @__PURE__ */ Symbol.for("v-ndc");
function F(e, t, n, r) {
	let i, a = n && n[r], o = y(e);
	if (o || C(e)) {
		let n = o && /* @__PURE__ */ $t(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ tn(e), s = /* @__PURE__ */ en(e), e = _t(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? on(an(e[n])) : an(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (w(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
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
function Lr(e, t, n = {}, r, i) {
	if (qn.ce || qn.parent && vr(qn.parent) && qn.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), L(), ua(I, null, [B("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), L();
	let o = a && Rr(a(n)), s = n.key || o && o.key, c = ua(I, { key: (s && !te(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Rr(e) {
	return e.some((e) => da(e) ? !(e.type === na || e.type === I && !Rr(e.children)) : !0) ? e : null;
}
var zr = (e) => e ? Na(e) ? Ua(e) : zr(e.parent) : null, Br = /* @__PURE__ */ h(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => zr(e.parent),
	$root: (e) => zr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Xr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Bn(e.update);
	},
	$nextTick: (e) => e.n ||= Rn.bind(e.proxy),
	$watch: (e) => or.bind(e)
}), Vr = (e, t) => e !== l && !e.__isScriptSetup && v(e, t), Hr = {
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
			else if (Vr(r, t)) return o[t] = 1, r[t];
			else if (i !== l && v(i, t)) return o[t] = 2, i[t];
			else if (v(a, t)) return o[t] = 3, a[t];
			else if (n !== l && v(n, t)) return o[t] = 4, n[t];
			else Gr && (o[t] = 0);
		}
		let u = Br[t], d, f;
		if (u) return t === "$attrs" && pt(e.attrs, "get", ""), u(e);
		if ((d = s.__cssModules) && (d = d[t])) return d;
		if (n !== l && v(n, t)) return o[t] = 4, n[t];
		if (f = c.config.globalProperties, v(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Vr(i, t) ? (i[t] = n, !0) : r !== l && v(r, t) ? (r[t] = n, !0) : v(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || e !== l && s[0] !== "$" && v(e, s) || Vr(t, s) || v(a, s) || v(r, s) || v(Br, s) || v(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? v(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Ur(e) {
	return y(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Wr(e, t) {
	return !e || !t ? e || t : y(e) && y(t) ? e.concat(t) : h({}, Ur(e), Ur(t));
}
var Gr = !0;
function Kr(e) {
	let t = Xr(e), n = e.proxy, r = e.ctx;
	Gr = !1, t.beforeCreate && Jr(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: c, inject: l, created: u, beforeMount: f, mounted: p, beforeUpdate: m, updated: h, activated: g, deactivated: _, beforeDestroy: v, beforeUnmount: b, destroyed: x, unmounted: ee, render: C, renderTracked: te, renderTriggered: ne, errorCaptured: re, serverPrefetch: ie, expose: ae, inheritAttrs: oe, components: se, directives: ce, filters: le } = t;
	if (l && qr(l, r, null), o) for (let e in o) {
		let t = o[e];
		S(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		w(t) && (e.data = /* @__PURE__ */ Yt(t));
	}
	if (Gr = !0, a) for (let e in a) {
		let t = a[e], i = U({
			get: S(t) ? t.bind(n, n) : S(t.get) ? t.get.bind(n, n) : d,
			set: !S(t) && S(t.set) ? t.set.bind(n) : d
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (s) for (let e in s) Yr(s[e], r, n, e);
	if (c) {
		let e = S(c) ? c.call(n) : c;
		Reflect.ownKeys(e).forEach((t) => {
			Qn(t, e[t]);
		});
	}
	u && Jr(u, e, "c");
	function ue(e, t) {
		y(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (ue(Er, f), ue(Dr, p), ue(Or, m), ue(kr, h), ue(br, g), ue(xr, _), ue(Fr, re), ue(Pr, te), ue(Nr, ne), ue(Ar, b), ue(jr, ee), ue(Mr, ie), y(ae)) if (ae.length) {
		let t = e.exposed ||= {};
		ae.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	C && e.render === d && (e.render = C), oe != null && (e.inheritAttrs = oe), se && (e.components = se), ce && (e.directives = ce), ie && pr(e);
}
function qr(e, t, n = d) {
	y(e) && (e = ti(e));
	for (let n in e) {
		let r = e[n], i;
		i = w(r) ? "default" in r ? $n(r.from || n, r.default, !0) : $n(r.from || n) : $n(r), /* @__PURE__ */ A(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Jr(e, t, n) {
	On(y(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Yr(e, t, n, r) {
	let i = r.includes(".") ? sr(n, r) : () => n[r];
	if (C(e)) {
		let n = t[e];
		S(n) && ir(i, n);
	} else if (S(e)) ir(i, e.bind(n));
	else if (w(e)) if (y(e)) e.forEach((e) => Yr(e, t, n, r));
	else {
		let r = S(e.handler) ? e.handler.bind(n) : t[e.handler];
		S(r) && ir(i, r, e);
	}
}
function Xr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Zr(c, e, o, !0)), Zr(c, t, o)), w(t) && a.set(t, c), c;
}
function Zr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Zr(e, a, n, !0), i && i.forEach((t) => Zr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Qr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Qr = {
	data: $r,
	props: ii,
	emits: ii,
	methods: ri,
	computed: ri,
	beforeCreate: ni,
	created: ni,
	beforeMount: ni,
	mounted: ni,
	beforeUpdate: ni,
	updated: ni,
	beforeDestroy: ni,
	beforeUnmount: ni,
	destroyed: ni,
	unmounted: ni,
	activated: ni,
	deactivated: ni,
	errorCaptured: ni,
	serverPrefetch: ni,
	components: ri,
	directives: ri,
	watch: ai,
	provide: $r,
	inject: ei
};
function $r(e, t) {
	return t ? e ? function() {
		return h(S(e) ? e.call(this, this) : e, S(t) ? t.call(this, this) : t);
	} : t : e;
}
function ei(e, t) {
	return ri(ti(e), ti(t));
}
function ti(e) {
	if (y(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function ni(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function ri(e, t) {
	return e ? h(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ii(e, t) {
	return e ? y(e) && y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : h(/* @__PURE__ */ Object.create(null), Ur(e), Ur(t ?? {})) : t;
}
function ai(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = h(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = ni(e[r], t[r]);
	return n;
}
function oi() {
	return {
		app: null,
		config: {
			isNativeTag: f,
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
var si = 0;
function ci(e, t) {
	return function(n, r = null) {
		S(n) || (n = h({}, n)), r != null && !w(r) && (r = null);
		let i = oi(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: si++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ga,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && S(e.install) ? (a.add(e), e.install(c, ...t)) : S(e) && (a.add(e), e(c, ...t))), c;
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
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Ua(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (On(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = li;
				li = c;
				try {
					return e();
				} finally {
					li = t;
				}
			}
		};
		return c;
	};
}
var li = null;
function di(e, t, n = l) {
	let r = Oa(), i = de(t), a = pe(t), o = fi(e, i), s = pn((o, s) => {
		let c, u = l, d;
		return rr(() => {
			let t = e[i];
			T(c, t) && (c = t, s());
		}), {
			get() {
				return o(), n.get ? n.get(c) : c;
			},
			set(e) {
				let o = n.set ? n.set(e) : e;
				if (!T(o, c) && !(u !== l && T(e, u))) return;
				let f = r.vnode.props, p = !!(f && (t in f || i in f || a in f) && (`onUpdate:${t}` in f || `onUpdate:${i}` in f || `onUpdate:${a}` in f));
				p || (c = e, s()), r.emit(`update:${t}`, o), T(e, u) && (T(e, o) && !T(o, d) || p && u !== l && !T(o, c)) && s(), u = e, d = o;
			}
		};
	});
	return s[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? o || l : s,
				done: !1
			} : { done: !0 };
		} };
	}, s;
}
var fi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${de(t)}Modifiers`] || e[`${pe(t)}Modifiers`];
function pi(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || l, i = n, a = t.startsWith("update:"), o = a && fi(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => C(e) ? e.trim() : e)), o.number && (i = n.map(ve)));
	let s, c = r[s = he(t)] || r[s = he(de(t))];
	!c && a && (c = r[s = he(pe(t))]), c && On(c, e, 6, i);
	let u = r[s + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, On(u, e, 6, i);
	}
}
var mi = /* @__PURE__ */ new WeakMap();
function hi(e, t, n = !1) {
	let r = n ? mi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!S(e)) {
		let r = (e) => {
			let n = hi(e, t, !0);
			n && (s = !0, h(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (w(e) && r.set(e, null), null) : (y(a) ? a.forEach((e) => o[e] = null) : h(o, a), w(e) && r.set(e, o), o);
}
function gi(e, t) {
	return !e || !p(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), v(e, t[0].toLowerCase() + t.slice(1)) || v(e, pe(t)) || v(e, t));
}
function _i(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: h, inheritAttrs: g } = e, _ = Yn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ya(l.call(t, e, u, d, p, f, h)), y = s;
		} else {
			let e = t;
			v = ya(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), y = t.props ? s : vi(s);
		}
	} catch (t) {
		ia.length = 0, kn(t, e, 1), v = B(na);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(m) && (y = yi(y, a)), b = _a(b, y, !1, !0));
	}
	return n.dirs && (b = _a(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && dr(b, n.transition), v = b, Yn(_), v;
}
var vi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || p(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, yi = (e, t) => {
	let n = {};
	for (let r in e) (!m(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function bi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? xi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Si(o, r, n) && !gi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? xi(r, o, l) : !0 : !!o;
	return !1;
}
function xi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Si(t, e, a) && !gi(n, a)) return !0;
	}
	return !1;
}
function Si(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && w(r) && w(i) ? !Ae(r, i) : r !== i;
}
function Ci({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var wi = {}, Ti = () => Object.create(wi), Ei = (e) => Object.getPrototypeOf(e) === wi;
function Di(e, t, n, r = !1) {
	let i = {}, a = Ti();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ki(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Xt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Oi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ k(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (gi(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (v(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = de(o);
					i[t] = Ai(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ki(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !v(t, a) && ((r = pe(a)) === a || !v(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ai(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !v(t, e)) && (delete a[e], l = !0);
	}
	l && mt(e.attrs, "set", "");
}
function ki(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (ce(c)) continue;
		let l = t[c], u;
		i && v(i, u = de(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : gi(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ k(n), r = s || l;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Ai(i, t, s, r[s], e, !v(r, s));
		}
	}
	return o;
}
function Ai(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = v(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && S(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ja(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === pe(n)) && (r = !0));
	}
	return r;
}
var ji = /* @__PURE__ */ new WeakMap();
function Mi(e, t, n = !1) {
	let r = n ? ji : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [], c = !1;
	if (!S(e)) {
		let r = (e) => {
			c = !0;
			let [n, r] = Mi(e, t, !0);
			h(o, n), r && s.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !c) return w(e) && r.set(e, u), u;
	if (y(a)) for (let e = 0; e < a.length; e++) {
		let t = de(a[e]);
		Ni(t) && (o[t] = l);
	}
	else if (a) for (let e in a) {
		let t = de(e);
		if (Ni(t)) {
			let n = a[e], r = o[t] = y(n) || S(n) ? { type: n } : h({}, n), i = r.type, c = !1, l = !0;
			if (y(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = S(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				} else n === "String" && (l = !1);
			}
			else c = S(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || v(r, "default")) && s.push(t);
		}
	}
	let d = [o, s];
	return w(e) && r.set(e, d), d;
}
function Ni(e) {
	return e[0] !== "$" && !ce(e);
}
var Pi = (e) => e === "_" || e === "_ctx" || e === "$stable", Fi = (e) => y(e) ? e.map(ya) : [ya(e)], Ii = (e, t, n) => {
	if (t._n) return t;
	let r = Xn((...e) => Fi(t(...e)), n);
	return r._c = !1, r;
}, Li = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Pi(n)) continue;
		let i = e[n];
		if (S(i)) t[n] = Ii(n, i, r);
		else if (i != null) {
			let e = Fi(i);
			t[n] = () => e;
		}
	}
}, Ri = (e, t) => {
	let n = Fi(t);
	e.slots.default = () => n;
}, zi = (e, t, n) => {
	for (let r in t) (n || !Pi(r)) && (e[r] = t[r]);
}, Bi = (e, t, n) => {
	let r = e.slots = Ti();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (zi(r, t, n), n && _e(r, "_", e, !0)) : Li(t, r);
	} else t && Ri(e, t);
}, Vi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = l;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : zi(i, t, n) : (a = !t.$stable, Li(t, i)), o = t;
	} else t && (Ri(e, t), o = { default: 1 });
	if (a) for (let e in i) !Pi(e) && o[e] == null && delete i[e];
}, Hi = ea;
function Ui(e) {
	return Wi(e);
}
function Wi(e, t) {
	let n = be();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = d, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !fa(e, t) && (r = Ce(e), _e(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ta:
				y(e, t, n, r);
				break;
			case na:
				b(e, t, n, r);
				break;
			case ra:
				e ?? x(t, n, r, o);
				break;
			case I:
				oe(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? C(e, t, n, r, i, a, o, s, c) : d & 6 ? se(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, E);
		}
		u != null && i ? gr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && gr(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, ee = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = h(e), r(e, n, i), e = a;
		r(t, n, i);
	}, S = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, C = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, i, s, c, l, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = o(e.type, c, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, i, s, Gi(e, c), l, u), _ && Zn(e, null, i, "created"), w(d, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !ce(e) && a(d, e, null, m[e], c, i);
			"value" in m && a(d, "value", null, m.value, c), (f = m.onVnodeBeforeMount) && Ca(f, i, e);
		}
		_ && Zn(e, null, i, "beforeMount");
		let v = qi(s, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Hi(() => {
			try {
				f && Ca(f, i, e), v && g.enter(d), _ && Zn(e, null, i, "mounted");
			} finally {}
		}, s);
	}, w = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || $i(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				w(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ba(e[l]) : ya(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || l, h = t.props || l, g;
		if (n && Ki(n, !1), (g = h.onVnodeBeforeUpdate) && Ca(g, n, t, e), f && Zn(t, e, n, "beforeUpdate"), n && Ki(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(c, ""), d ? ie(e.dynamicChildren, d, c, n, r, Gi(t, i), o) : s || pe(e, t, c, null, n, r, Gi(t, i), o, !1), u > 0) {
			if (u & 16) ae(c, m, h, n, i);
			else if (u & 2 && m.class !== h.class && a(c, "class", null, h.class, i), u & 4 && a(c, "style", m.style, h.style, i), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = m[r], s = h[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			u & 1 && e.children !== t.children && p(c, t.children);
		} else !s && d == null && ae(c, m, h, n, i);
		((g = h.onVnodeUpdated) || f) && Hi(() => {
			g && Ca(g, n, t, e), f && Zn(t, e, n, "updated");
		}, r);
	}, ie = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === I || !fa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ae = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== l) for (let o in t) !ce(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (ce(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, oe = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), ne(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ie(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && Ji(e, t, !0)) : pe(e, t, n, f, a, o, c, l, u);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : le(t, n, r, i, a, o, c) : ue(e, t, c);
	}, le = (e, t, n, r, i, a, o) => {
		let s = e.component = Ea(e, r, i);
		if (yr(e) && (s.ctx.renderer = E), Fa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o), !e.el) {
				let r = s.subTree = B(na);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, ue = (e, t, n) => {
		let r = t.component = e.component;
		if (bi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			fe(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, de = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Xi(e);
					if (n) {
						t && (t.el = c.el, fe(e, t, o)), n.asyncDep.then(() => {
							Hi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ki(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && ge(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ca(d, s, t, c), Ki(e, !0);
				let f = _i(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), Ce(p), e, i, a), t.el = f.el, u === null && Ci(e, f.el), r && Hi(r, i), (d = t.props && t.props.onVnodeUpdated) && Hi(() => Ca(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = vr(t);
				if (Ki(e, !1), l && ge(l), !m && (o = c && c.onVnodeBeforeMount) && Ca(o, d, t), Ki(e, !0), s && De) {
					let t = () => {
						e.subTree = _i(e), De(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = _i(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Hi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Hi(() => Ca(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && vr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Hi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ve(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Bn(u), Ki(e, !0), l();
	}, fe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Oi(e, t.props, r, n), Vi(e, t.children, n), nt(), Un(e), rt();
	}, pe = (e, t, n, r, i, a, o, s, c = !1) => {
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
		m & 8 ? (u & 16 && Se(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : Se(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ne(d, n, r, i, a, o, s, c));
	}, me = (e, t, n, r, i, a, o, s, c) => {
		e ||= u, t ||= u;
		let l = e.length, d = t.length, f = Math.min(l, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = c ? ba(t[p]) : ya(t[p]);
			v(e[p], r, n, null, i, a, o, s, c);
		}
		l > d ? Se(e, i, a, !0, !1, f) : ne(t, n, r, i, a, o, s, c, f);
	}, he = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; l <= f && l <= p;) {
			let r = e[l], u = t[l] = c ? ba(t[l]) : ya(t[l]);
			if (fa(r, u)) v(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= f && l <= p;) {
			let r = e[f], l = t[p] = c ? ba(t[p]) : ya(t[p]);
			if (fa(r, l)) v(r, l, n, null, i, a, o, s, c);
			else break;
			f--, p--;
		}
		if (l > f) {
			if (l <= p) {
				let e = p + 1, u = e < d ? t[e].el : r;
				for (; l <= p;) v(null, t[l] = c ? ba(t[l]) : ya(t[l]), n, u, i, a, o, s, c), l++;
			}
		} else if (l > p) for (; l <= f;) _e(e[l], i, a, !0), l++;
		else {
			let m = l, h = l, g = /* @__PURE__ */ new Map();
			for (l = h; l <= p; l++) {
				let e = t[l] = c ? ba(t[l]) : ya(t[l]);
				e.key != null && g.set(e.key, l);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, S = Array(b);
			for (l = 0; l < b; l++) S[l] = 0;
			for (l = m; l <= f; l++) {
				let r = e[l];
				if (y >= b) {
					_e(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && fa(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? _e(r, i, a, !0) : (S[u - h] = l + 1, u >= ee ? ee = u : x = !0, v(r, t[u], n, null, i, a, o, s, c), y++);
			}
			let C = x ? Yi(S) : u;
			for (_ = C.length - 1, l = b - 1; l >= 0; l--) {
				let e = h + l, u = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Qi(f) : r;
				S[l] === 0 ? v(null, u, n, p, i, a, o, s, c) : x && (_ < 0 || l !== C[_] ? T(u, n, p, 2) : _--);
			}
		}
	}, T = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			T(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, E);
			return;
		}
		if (c === I) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) T(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === ra) {
			ee(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[ur] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), Hi(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[ur];
				s._isLeaving && s[ur](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, _e = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (nt(), gr(s, null, n, e, !0), rt()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !vr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ca(_, t, e), u & 6) xe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Zn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, E, r) : l && !l.hasOnce && (a !== I || d > 0 && d & 64) ? Se(l, t, n, !1, !0) : (a === I && d & 384 || !i && u & 16) && Se(c, t, n), r && ve(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Hi(() => {
			_ && Ca(_, t, e), h && Zn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ve = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === I) {
			ye(n, r);
			return;
		}
		if (t === ra) {
			S(e);
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
	}, xe = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Zi(c), Zi(l), r && ge(r), i.stop(), a && (a.flags |= 8, _e(o, e, t, n)), s && Hi(s, t), Hi(() => {
			e.isUnmounted = !0;
		}, t);
	}, Se = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) _e(e[o], t, n, r, i);
	}, Ce = (e) => {
		if (e.shapeFlag & 6) return Ce(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[cr];
		return n ? h(n) : t;
	}, we = !1, Te = (e, t, n) => {
		let r;
		e == null ? t._vnode && (_e(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, we ||= (we = !0, Un(r), Wn(), !1);
	}, E = {
		p: v,
		um: _e,
		m: T,
		r: ve,
		mt: le,
		mc: ne,
		pc: pe,
		pbc: ie,
		n: Ce,
		o: e
	}, Ee, De;
	return t && ([Ee, De] = t(E)), {
		render: Te,
		hydrate: Ee,
		createApp: ci(Te, Ee)
	};
}
function Gi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ki({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function qi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ji(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (y(r) && y(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ba(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ji(t, a)), a.type === ta && (a.patchFlag === -1 && (a = i[e] = ba(a)), a.el = t.el), a.type === na && !a.el && (a.el = t.el);
	}
}
function Yi(e) {
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
function Xi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Xi(t);
}
function Zi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Qi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Qi(t.subTree) : null;
}
var $i = (e) => e.__isSuspense;
function ea(e, t) {
	t && t.pendingBranch ? y(e) ? t.effects.push(...e) : t.effects.push(e) : Hn(e);
}
var I = /* @__PURE__ */ Symbol.for("v-fgt"), ta = /* @__PURE__ */ Symbol.for("v-txt"), na = /* @__PURE__ */ Symbol.for("v-cmt"), ra = /* @__PURE__ */ Symbol.for("v-stc"), ia = [], aa = null;
function L(e = !1) {
	ia.push(aa = e ? null : []);
}
function oa() {
	ia.pop(), aa = ia[ia.length - 1] || null;
}
var sa = 1;
function ca(e, t = !1) {
	sa += e, e < 0 && aa && t && (aa.hasOnce = !0);
}
function la(e) {
	return e.dynamicChildren = sa > 0 ? aa || u : null, oa(), sa > 0 && aa && aa.push(e), e;
}
function R(e, t, n, r, i, a) {
	return la(z(e, t, n, r, i, a, !0));
}
function ua(e, t, n, r, i) {
	return la(B(e, t, n, r, i, !0));
}
function da(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function fa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var pa = ({ key: e }) => e ?? null, ma = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : C(e) || /* @__PURE__ */ A(e) || S(e) ? {
	i: qn,
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
		key: t && pa(t),
		ref: t && ma(t),
		scopeId: Jn,
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
		ctx: qn
	};
	return s ? (xa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= C(n) ? 8 : 16), sa > 0 && !o && aa && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && aa.push(c), c;
}
var B = ha;
function ha(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Ir) && (e = na), da(e)) {
		let r = _a(e, t, !0);
		return n && xa(r, n), sa > 0 && !a && aa && (r.shapeFlag & 6 ? aa[aa.indexOf(e)] = r : aa.push(r)), r.patchFlag = -2, r;
	}
	if (Wa(e) && (e = e.__vccOpts), t) {
		t = ga(t);
		let { class: e, style: n } = t;
		e && !C(e) && (t.class = E(e)), w(n) && (/* @__PURE__ */ nn(n) && !y(n) && (n = h({}, n)), t.style = xe(n));
	}
	let o = C(e) ? 1 : $i(e) ? 128 : lr(e) ? 64 : w(e) ? 4 : S(e) ? 2 : 0;
	return z(e, t, n, r, i, o, a, !0);
}
function ga(e) {
	return e ? /* @__PURE__ */ nn(e) || Ei(e) ? h({}, e) : e : null;
}
function _a(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Sa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && pa(l),
		ref: t && t.ref ? n && a ? y(a) ? a.concat(ma(t)) : [a, ma(t)] : ma(t) : a,
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
		ssContent: e.ssContent && _a(e.ssContent),
		ssFallback: e.ssFallback && _a(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && dr(u, c.clone(u)), u;
}
function V(e = " ", t = 0) {
	return B(ta, null, e, t);
}
function va(e, t) {
	let n = B(ra, null, e);
	return n.staticCount = t, n;
}
function H(e = "", t = !1) {
	return t ? (L(), ua(na, null, e)) : B(na, null, e);
}
function ya(e) {
	return e == null || typeof e == "boolean" ? B(na) : y(e) ? B(I, null, e.slice()) : da(e) ? ba(e) : B(ta, null, String(e));
}
function ba(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : _a(e);
}
function xa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (y(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), xa(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Ei(t) ? t._ctx = qn : r === 3 && qn && (qn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else S(t) ? (t = {
		default: t,
		_ctx: qn
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [V(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Sa(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = E([t.class, r.class]));
		else if (e === "style") t.style = xe([t.style, r.style]);
		else if (p(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(y(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !m(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ca(e, t, n, r = null) {
	On(e, t, 7, [n, r]);
}
var wa = oi(), Ta = 0;
function Ea(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || wa, a = {
		uid: Ta++,
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
		scope: new Ie(!0),
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
		propsOptions: Mi(r, i),
		emitsOptions: hi(r, i),
		emit: null,
		emitted: null,
		propsDefaults: l,
		inheritAttrs: r.inheritAttrs,
		ctx: l,
		data: l,
		props: l,
		attrs: l,
		slots: l,
		refs: l,
		setupState: l,
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = pi.bind(null, a), e.ce && e.ce(a), a;
}
var Da = null, Oa = () => Da || qn, ka, Aa;
{
	let e = be(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ka = t("__VUE_INSTANCE_SETTERS__", (e) => Da = e), Aa = t("__VUE_SSR_SETTERS__", (e) => Pa = e);
}
var ja = (e) => {
	let t = Da;
	return ka(e), e.scope.on(), () => {
		e.scope.off(), ka(t);
	};
}, Ma = () => {
	Da && Da.scope.off(), ka(null);
};
function Na(e) {
	return e.vnode.shapeFlag & 4;
}
var Pa = !1;
function Fa(e, t = !1, n = !1) {
	t && Aa(t);
	let { props: r, children: i } = e.vnode, a = Na(e);
	Di(e, r, a, t), Bi(e, i, n || t);
	let o = a ? Ia(e, t) : void 0;
	return t && Aa(!1), o;
}
function Ia(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Hr);
	let { setup: r } = n;
	if (r) {
		nt();
		let n = e.setupContext = r.length > 1 ? Ha(e) : null, i = ja(e), a = Dn(r, e, 0, [e.props, n]), o = ne(a);
		if (rt(), i(), (o || e.sp) && !vr(e) && pr(e), o) {
			if (a.then(Ma, Ma), t) return a.then((n) => {
				La(e, n, t);
			}).catch((t) => {
				kn(t, e, 0);
			});
			e.asyncDep = a;
		} else La(e, a, t);
	} else Ba(e, t);
}
function La(e, t, n) {
	S(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : w(t) && (e.setupState = dn(t)), Ba(e, n);
}
var Ra, za;
function Ba(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ra && !r.render) {
			let t = r.template || Xr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ra(t, h(h({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || d, za && za(e);
	}
	{
		let t = ja(e);
		nt();
		try {
			Kr(e);
		} finally {
			rt(), t();
		}
	}
}
var Va = { get(e, t) {
	return pt(e, "get", ""), e[t];
} };
function Ha(e) {
	return {
		attrs: new Proxy(e.attrs, Va),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ua(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(dn(rn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Br) return Br[n](e);
		},
		has(e, t) {
			return t in e || t in Br;
		}
	}) : e.proxy;
}
function Wa(e) {
	return S(e) && "__vccOpts" in e;
}
var U = (e, t) => /* @__PURE__ */ bn(e, t, Pa), Ga = "3.5.38", Ka = void 0, qa = typeof window < "u" && window.trustedTypes;
if (qa) try {
	Ka = /* @__PURE__ */ qa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ja = Ka ? (e) => Ka.createHTML(e) : (e) => e, Ya = "http://www.w3.org/2000/svg", Xa = "http://www.w3.org/1998/Math/MathML", Za = typeof document < "u" ? document : null, Qa = Za && /* @__PURE__ */ Za.createElement("template"), $a = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Za.createElementNS(Ya, e) : t === "mathml" ? Za.createElementNS(Xa, e) : n ? Za.createElement(e, { is: n }) : Za.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Za.createTextNode(e),
	createComment: (e) => Za.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Za.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Qa.innerHTML = Ja(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Qa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, eo = /* @__PURE__ */ Symbol("_vtc");
function to(e, t, n) {
	let r = e[eo];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var no = /* @__PURE__ */ Symbol("_vod"), ro = /* @__PURE__ */ Symbol("_vsh"), io = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[no] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ao(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), ao(e, !0), r.enter(e)) : r.leave(e, () => {
			ao(e, !1);
		}) : ao(e, t));
	},
	beforeUnmount(e, { value: t }) {
		ao(e, t);
	}
};
function ao(e, t) {
	e.style.display = t ? e[no] : "none", e[ro] = !t;
}
var oo = /* @__PURE__ */ Symbol(""), so = /(?:^|;)\s*display\s*:/;
function co(e, t, n) {
	let r = e.style, i = C(n), a = !1;
	if (n && !i) {
		if (t) if (C(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? uo(r, t, "");
		}
		else for (let e in t) n[e] ?? uo(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? uo(r, i, "") : ho(e, i, !C(t) && t ? t[i] : void 0, o) || uo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[oo];
			e && (n += ";" + e), r.cssText = n, a = so.test(n);
		}
	} else t && e.removeAttribute("style");
	no in e && (e[no] = a ? r.display : "", e[ro] && (r.display = "none"));
}
var lo = /\s*!important$/;
function uo(e, t, n) {
	if (y(n)) n.forEach((n) => uo(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = mo(e, t);
		lo.test(n) ? e.setProperty(pe(r), n.replace(lo, ""), "important") : e[r] = n;
	}
}
var fo = [
	"Webkit",
	"Moz",
	"ms"
], po = {};
function mo(e, t) {
	let n = po[t];
	if (n) return n;
	let r = de(t);
	if (r !== "filter" && r in e) return po[t] = r;
	r = me(r);
	for (let n = 0; n < fo.length; n++) {
		let i = fo[n] + r;
		if (i in e) return po[t] = i;
	}
	return t;
}
function ho(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && C(r) && n === r;
}
var go = "http://www.w3.org/1999/xlink";
function _o(e, t, n, r, i, a = De(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(go, t.slice(6, t.length)) : e.setAttributeNS(go, t, n) : n == null || a && !Oe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : te(n) ? String(n) : n);
}
function vo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ja(n) : n);
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
		r === "boolean" ? n = Oe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function yo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function bo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var xo = /* @__PURE__ */ Symbol("_vei");
function So(e, t, n, r, i = null) {
	let a = e[xo] || (e[xo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = wo(t);
		r ? yo(e, n, a[t] = Oo(r, i), s) : o && (bo(e, n, o, s), a[t] = void 0);
	}
}
var Co = /(?:Once|Passive|Capture)$/;
function wo(e) {
	let t;
	if (Co.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Co);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : pe(e.slice(2)), t];
}
var To = 0, Eo = /* @__PURE__ */ Promise.resolve(), Do = () => To ||= (Eo.then(() => To = 0), Date.now());
function Oo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (y(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && On(e, t, 5, a);
			}
		} else On(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Do(), n;
}
var ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ao = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? to(e, r, o) : t === "style" ? co(e, n, r) : p(t) ? m(t) || So(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jo(e, t, r, o)) ? (vo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _o(e, t, r, o, a, t !== "value")) : e._isVueCE && (Mo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !C(r))) ? vo(e, de(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), _o(e, t, r, o));
};
function jo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ko(t) && S(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return ko(t) && C(n) ? !1 : t in e;
}
function Mo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = de(t);
	return Array.isArray(n) ? n.some((e) => de(e) === r) : Object.keys(n).some((e) => de(e) === r);
}
var No = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return y(t) ? (e) => ge(t, e) : t;
};
function Po(e) {
	e.target.composing = !0;
}
function Fo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Io = /* @__PURE__ */ Symbol("_assign");
function Lo(e, t, n) {
	return t && (e = e.trim()), n && (e = ve(e)), e;
}
var W = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Io] = No(i);
		let a = r || i.props && i.props.type === "number";
		yo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Io](Lo(e.value, n, a));
		}), (n || a) && yo(e, "change", () => {
			e.value = Lo(e.value, n, a);
		}), t || (yo(e, "compositionstart", Po), yo(e, "compositionend", Fo), yo(e, "change", Fo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Io] = No(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ve(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, G = {
	deep: !0,
	created(e, t, n) {
		e[Io] = No(n), yo(e, "change", () => {
			let t = e._modelValue, n = Vo(e), r = e.checked, i = e[Io];
			if (y(t)) {
				let e = je(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (x(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Ho(e, r));
		});
	},
	mounted: Ro,
	beforeUpdate(e, t, n) {
		e[Io] = No(n), Ro(e, t, n);
	}
};
function Ro(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (y(t)) i = je(t, r.props.value) > -1;
	else if (x(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ae(t, Ho(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var zo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = x(t);
		yo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ve(Vo(e)) : Vo(e));
			e[Io](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Rn(() => {
				e._assigning = !1;
			});
		}), e[Io] = No(r);
	},
	mounted(e, { value: t }) {
		Bo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Io] = No(n);
	},
	updated(e, { value: t }) {
		e._assigning || Bo(e, t);
	}
};
function Bo(e, t) {
	let n = e.multiple, r = y(t);
	if (!(n && !r && !x(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Vo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = je(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Ae(Vo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Vo(e) {
	return "_value" in e ? e._value : e.value;
}
function Ho(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Uo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Wo = {
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
	exact: (e, t) => Uo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Go = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Wo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Ko = /* @__PURE__ */ h({ patchProp: Ao }, $a), qo;
function Jo() {
	return qo ||= Ui(Ko);
}
var Yo = ((...e) => {
	let t = Jo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Zo(e);
		if (!r) return;
		let i = t._component;
		!S(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Xo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Xo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Zo(e) {
	return C(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Qo = typeof window < "u", $o, es = (e) => $o = e, ts = Symbol();
function ns(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var rs;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(rs ||= {});
var is = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function as(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function os(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		ds(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function ss(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function cs(e) {
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
var ls = typeof navigator == "object" ? navigator : { userAgent: "" }, us = /Macintosh/.test(ls.userAgent) && /AppleWebKit/.test(ls.userAgent) && !/Safari/.test(ls.userAgent), ds = Qo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !us ? fs : "msSaveOrOpenBlob" in ls ? ps : ms : () => {};
function fs(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? cs(r) : ss(r.href) ? os(e, t, n) : (r.target = "_blank", cs(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		cs(r);
	}, 0));
}
function ps(e, t = "download", n) {
	if (typeof e == "string") if (ss(e)) os(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			cs(t);
		});
	}
	else navigator.msSaveOrOpenBlob(as(e, n), t);
}
function ms(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return os(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(is.HTMLElement)) || "safari" in is, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || us) && typeof FileReader < "u") {
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
var { assign: hs } = Object;
function gs() {
	let e = Le(!0), t = e.run(() => /* @__PURE__ */ j({})), n = [], r = [], i = rn({
		install(e) {
			es(i), i._a = e, e.provide(ts, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var _s = () => {};
function vs(e, t, n, r = _s) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Re() && ze(i), i;
}
function ys(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var bs = (e) => e(), xs = Symbol(), Ss = Symbol();
function Cs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		ns(i) && ns(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ A(r) && !/* @__PURE__ */ $t(r) ? e[n] = Cs(i, r) : e[n] = r;
	}
	return e;
}
var ws = Symbol();
function Ts(e) {
	return !ns(e) || !Object.prototype.hasOwnProperty.call(e, ws);
}
var { assign: Es } = Object;
function Ds(e) {
	return !!(/* @__PURE__ */ A(e) && e.effect);
}
function Os(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Es(/* @__PURE__ */ mn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = rn(U(() => {
			es(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = ks(e, l, t, n, r, !0), c;
}
function ks(e, t, n = {}, r, i, a) {
	let o, s = Es({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: rs.patchFunction,
			storeId: e,
			events: void 0
		}) : (Cs(r.state.value[e], t), n = {
			type: rs.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		Rn().then(() => {
			m === i && (l = !0);
		}), u = !0, ys(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Es(e, t);
		});
	} : _s;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (xs in t) return t[Ss] = n, t;
		let i = function() {
			es(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			ys(f, {
				args: n,
				name: i[Ss],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw ys(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (ys(a, e), e)).catch((e) => (ys(o, e), Promise.reject(e))) : (ys(a, l), l);
		};
		return i[xs] = !0, i[Ss] = n, i;
	}, y = /* @__PURE__ */ Yt({
		_p: r,
		$id: e,
		$onAction: vs.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = vs(d, t, n.detached, () => a()), a = o.run(() => ir(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: rs.direct,
					events: void 0
				}, r);
			}, Es({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || bs)(() => r._e.run(() => (o = Le()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ A(n) && !Ds(n) || /* @__PURE__ */ $t(n) ? a || (p && Ts(n) && (/* @__PURE__ */ A(n) ? n.value = p[t] : Cs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Es(y, b), Es(/* @__PURE__ */ k(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Es(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Es(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function As(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = er();
		return n ||= o ? $n(ts, null) : null, n && es(n), n = $o, n._s.has(e) || (i ? ks(e, t, r, n) : Os(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function js(e) {
	let t = /* @__PURE__ */ k(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = U({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ A(i) || /* @__PURE__ */ $t(i)) && (n[r] = /* @__PURE__ */ _n(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/imperial-calendar/fields.ts
function Ms(e) {
	let t = e.time.trim() || "00:00:00";
	if (!/^\d{2}:\d{2}(?::\d{2})?$/.test(t)) throw RangeError("Use a 24-hour time: HH:MM or HH:MM:SS.");
	let [n = 0, r = 0, i = 0] = t.split(":").map(Number), o = {
		year: e.year === "" ? NaN : Number(e.year),
		period: e.period,
		day: e.day === "" ? NaN : Number(e.day),
		hour: n,
		minute: r,
		second: i
	};
	return a(o), o;
}
function Ns(e, t = !1) {
	let n = t ? [[e.years, "year"], [e.days, "day"]] : [[e.wholeDays, "day"]];
	return n.push([e.hours, "hour"], [e.minutes, "minute"], [e.seconds, "second"]), n.filter(([e]) => e > 0).map(([e, t]) => `${e.toLocaleString()} ${t}${e === 1 ? "" : "s"}`).join(", ") || "0 seconds";
}
//#endregion
//#region src/state/apps/imperial-calendar/store.ts
var Ps = As("imperial-calendar", () => {
	let e = /* @__PURE__ */ j(Fs()), t = /* @__PURE__ */ j(Fs()), n = U(() => {
		let n = "Start";
		try {
			let r = Ms(e.value);
			return n = "End", {
				error: void 0,
				result: i(r, Ms(t.value))
			};
		} catch (e) {
			if (!(e instanceof RangeError)) throw e;
			return {
				error: `${n}: ${e.message}`,
				result: void 0
			};
		}
	});
	function a(n, i) {
		let a = n === "start" ? e.value : t.value;
		a.period = i, r(i).intercalary && (a.day = 1);
	}
	function o() {
		[e.value, t.value] = [t.value, e.value];
	}
	return {
		start: e,
		end: t,
		calculation: n,
		changePeriod: a,
		swapDates: o
	};
});
function Fs() {
	return {
		year: 2522,
		period: "Hexenstag",
		day: 1,
		time: "00:00:00"
	};
}
//#endregion
//#region src/view/apps/shared/ApplicationHeader.vue?vue&type=script&setup=true&lang.ts
var Is = { class: "dui-navbar tw:relative tw:min-h-0 tw:min-w-0 tw:flex-wrap tw:items-start tw:gap-3 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-4 tw:py-3 tw:text-base-content! tw:shadow-md" }, Ls = { class: "dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start tw:gap-3" }, Rs = {
	class: "tw:inline-grid tw:size-11 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-lg tw:text-primary-content! tw:shadow-md",
	"aria-hidden": "true"
}, zs = { class: "tw:min-w-0" }, Bs = { class: "tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight tw:tracking-wide tw:text-base-content!" }, Vs = { class: "tw:mt-1 tw:max-w-2xl tw:text-sm tw:leading-relaxed tw:text-base-content/70!" }, Hs = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, Us = ["data-tip"], Ws = ["aria-label", "title"], Gs = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("header", Is, [z("div", Ls, [z("span", Rs, [z("i", { class: E(e.icon) }, null, 2)]), z("div", zs, [
			r[1] ||= z("div", { class: "dui-breadcrumbs tw:mb-0.5 tw:max-w-full tw:text-xs tw:text-secondary!" }, [z("ul", null, [z("li", null, "Drowsy’s WFRP4e Toolkit")])], -1),
			z("h1", Bs, D(e.title), 1),
			z("p", Vs, D(e.description), 1)
		])]), z("div", Hs, [Lr(t.$slots, "end"), e.configureLabel ? (L(), R("span", {
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
		}, null, -1)]], 8, Ws)], 8, Us)) : H("", !0)])]));
	}
}), Ks = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, qs = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, Js = { class: "tw:min-w-0 tw:break-words" }, Ys = {
	key: 1,
	class: "dui-alert dui-alert-success tw:m-4 tw:mb-0",
	role: "status"
}, Xs = { class: "tw:min-w-0 tw:break-words" }, Zs = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Qs = /* @__PURE__ */ P({
	__name: "ConsoleFrame",
	props: {
		description: {},
		errorMessage: {},
		icon: {},
		statusMessage: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (L(), R("main", Ks, [
			B(Gs, {
				description: e.description,
				icon: e.icon,
				title: e.title
			}, {
				end: Xn(() => [Lr(t.$slots, "header-end")]),
				_: 3
			}, 8, [
				"description",
				"icon",
				"title"
			]),
			e.errorMessage ? (L(), R("div", qs, [n[0] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", Js, D(e.errorMessage), 1)])) : H("", !0),
			e.statusMessage ? (L(), R("div", Ys, [n[1] ||= z("i", {
				class: "fa-solid fa-circle-check",
				"aria-hidden": "true"
			}, null, -1), z("span", Xs, D(e.statusMessage), 1)])) : H("", !0),
			z("div", Zs, [Lr(t.$slots, "default")]),
			Lr(t.$slots, "footer")
		]));
	}
}), $s = { class: "dui-fieldset tw:min-w-0 tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4" }, ec = { class: "dui-fieldset-legend tw:font-serif tw:text-lg" }, tc = { class: "tw:grid tw:gap-1" }, nc = ["value"], rc = ["value"], ic = { class: "tw:grid tw:grid-cols-2 tw:gap-3" }, ac = { class: "tw:grid tw:min-w-0 tw:gap-1" }, oc = ["max", "disabled"], sc = { class: "tw:grid tw:min-w-0 tw:gap-1" }, cc = ["max"], lc = { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, uc = { class: "tw:grid tw:gap-1" }, dc = ["aria-describedby"], fc = ["id"], pc = /* @__PURE__ */ P({
	__name: "ImperialDateInput",
	props: /*@__PURE__*/ Wr({ label: {} }, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ Wr(["changePeriod"], ["update:modelValue"]),
	setup(e, { emit: i }) {
		let a = di(e, "modelValue"), o = i, s = fr(), c = U(() => r(a.value.period));
		return (r, i) => (L(), R("fieldset", $s, [
			z("legend", ec, D(e.label), 1),
			z("label", tc, [i[4] ||= z("span", { class: "dui-label" }, "Month or festival", -1), z("select", {
				value: a.value.period,
				class: "dui-select dui-select-sm tw:w-full",
				onChange: i[0] ||= (e) => o("changePeriod", e.target.value)
			}, [(L(!0), R(I, null, F(M(n), (e) => (L(), R("option", {
				key: e.name,
				value: e.name
			}, D(e.name) + D(e.intercalary ? " · festival" : ""), 9, rc))), 128))], 40, nc)]),
			z("div", ic, [z("label", ac, [i[5] ||= z("span", { class: "dui-label" }, "Day", -1), N(z("input", {
				"onUpdate:modelValue": i[1] ||= (e) => a.value.day = e,
				class: "dui-input dui-input-sm tw:w-full",
				type: "number",
				min: "1",
				max: c.value.days,
				step: "1",
				disabled: c.value.intercalary,
				required: ""
			}, null, 8, oc), [[W, a.value.day]])]), z("label", sc, [i[6] ||= z("span", { class: "dui-label" }, "Year (I.C.)", -1), N(z("input", {
				"onUpdate:modelValue": i[2] ||= (e) => a.value.year = e,
				class: "dui-input dui-input-sm tw:w-full",
				type: "number",
				min: "1",
				max: M(t),
				step: "1",
				required: ""
			}, null, 8, cc), [[W, a.value.year]])])]),
			z("p", lc, D(c.value.intercalary ? "A single festival day between months." : `${c.value.days} days in this month.`), 1),
			z("label", uc, [i[7] ||= z("span", { class: "dui-label" }, "Time (24-hour, optional)", -1), N(z("input", {
				"onUpdate:modelValue": i[3] ||= (e) => a.value.time = e,
				class: "dui-input dui-input-sm tw:w-full tw:font-mono",
				type: "text",
				placeholder: "00:00:00",
				"aria-describedby": `${M(s)}-time-hint`
			}, null, 8, dc), [[W, a.value.time]])]),
			z("p", {
				id: `${M(s)}-time-hint`,
				class: "tw:m-0 tw:text-xs tw:text-base-content/70!"
			}, " HH:MM or HH:MM:SS. Blank means midnight. ", 8, fc)
		]));
	}
}), mc = { class: "tw:grid tw:min-w-0 tw:gap-3" }, hc = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))]" }, gc = {
	class: "tw:min-w-0 tw:rounded-box tw:border-2 tw:border-primary/30! tw:bg-base-100! tw:p-4",
	"aria-label": "Calculation result",
	"aria-live": "polite",
	"aria-atomic": "true"
}, _c = {
	key: 0,
	class: "tw:m-0 tw:text-error!"
}, vc = { class: "tw:m-0 tw:font-serif tw:text-lg" }, yc = { class: "tw:my-2 tw:text-2xl tw:font-semibold tw:tabular-nums tw:break-words" }, bc = {
	key: 0,
	class: "tw:my-2 tw:text-sm"
}, xc = { class: "tw:my-2 tw:text-sm tw:tabular-nums" }, Sc = { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, Cc = /* @__PURE__ */ P({
	__name: "ImperialCalendarApp",
	setup(e) {
		let t = Ps(), { start: n, end: r, calculation: i } = js(t);
		return (e, a) => (L(), ua(Qs, {
			title: "Imperial Calendar Calculator",
			icon: "fa-solid fa-calendar-days",
			description: "Find the time between two Imperial dates, including festival days."
		}, {
			default: Xn(() => [z("div", mc, [
				z("div", hc, [B(pc, {
					modelValue: M(n),
					"onUpdate:modelValue": a[0] ||= (e) => /* @__PURE__ */ A(n) ? n.value = e : null,
					label: "Start date",
					onChangePeriod: a[1] ||= (e) => M(t).changePeriod("start", e)
				}, null, 8, ["modelValue"]), B(pc, {
					modelValue: M(r),
					"onUpdate:modelValue": a[2] ||= (e) => /* @__PURE__ */ A(r) ? r.value = e : null,
					label: "End date",
					onChangePeriod: a[3] ||= (e) => M(t).changePeriod("end", e)
				}, null, 8, ["modelValue"])]),
				z("button", {
					class: "dui-btn dui-btn-sm tw:justify-self-end",
					type: "button",
					onClick: a[4] ||= (...e) => M(t).swapDates && M(t).swapDates(...e)
				}, [...a[5] ||= [z("i", {
					class: "fa-solid fa-right-left",
					"aria-hidden": "true"
				}, null, -1), V(" Swap dates ", -1)]]),
				z("section", gc, [M(i).error ? (L(), R("p", _c, D(M(i).error), 1)) : M(i).result ? (L(), R(I, { key: 1 }, [
					z("h2", vc, D(M(i).result.totalSeconds < 0 ? "End is before start" : "Elapsed time"), 1),
					z("p", yc, D(M(Ns)(M(i).result)), 1),
					M(i).result.years ? (L(), R("p", bc, D(M(Ns)(M(i).result, !0)) + " (400-day years) ", 1)) : H("", !0),
					z("p", xc, " End − start: " + D(M(i).result.totalSeconds.toLocaleString()) + " seconds ", 1),
					z("p", Sc, D(M(i).result.totalSeconds < 0 ? "The duration above runs backward. Swap dates to measure forward." : "Same date and time = zero elapsed. Midnight to the next midnight = one day."), 1)
				], 64)) : H("", !0)]),
				a[6] ||= z("p", { class: "tw:m-0 tw:text-xs tw:leading-relaxed tw:text-base-content/70!" }, " Standard Imperial calendar: 400 days per year, including six festival days. No leap years; 24 hours per day. Enter dates manually; calculating does not advance the world clock. ", -1)
			])]),
			_: 1
		}));
	}
}), K = "WFRP4E_DROWSYS_TOOLKIT", q = "wfrp4e-enhanced-fear-terror", wc = "Drowsy’s WFRP4e Toolkit", Tc = "wfrp4e-gm-toolkit", Ec = "wfrp4e", J = {
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
	imperialCalendar: {
		gmOnly: !0,
		name: "Imperial Calendar Calculator"
	},
	sessionManagementConsole: {
		gmOnly: !0,
		name: "Session Management Console"
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
	xpAwardConsole: {
		gmOnly: !0,
		name: "XP Award Console"
	},
	xpCurveConsole: {
		gmOnly: !0,
		name: "XP Curve Console"
	}
};
function Dc(e) {
	let t = game.user;
	return t !== null && (!e.gmOnly || t.isGM);
}
function Y(e) {
	if (!Dc(e)) throw Error(`Only a GM can use the ${e.name}.`);
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var Oc = class extends foundry.applications.api.ApplicationV2 {
	static ACCESS_POLICY = {
		gmOnly: !0,
		name: "Drowsy’s WFRP4e Toolkit application"
	};
	#e;
	static canCurrentUserAccess() {
		return Dc(this.ACCESS_POLICY);
	}
	async render(e) {
		let t = this.constructor;
		return Y(t.ACCESS_POLICY), super.render(e);
	}
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-enhanced-fear-terror-root", "tw:[&_*]:box-border", "tw:box-border", "tw:block", "tw:h-full", "tw:max-h-full", "tw:max-w-full", "tw:min-h-0", "tw:overflow-auto", "tw:text-base-content", "tw:w-full"), n.dataset.theme = "wfrp4e-enhanced-fear-terror", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-enhanced-fear-terror-app", "tw:box-border", "tw:min-h-0", "tw:overflow-hidden", "tw:p-0", "tw:relative"), t.replaceChildren(e), this.#e = Yo(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(gs()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, kc = class extends Oc {
	static ACCESS_POLICY = J.imperialCalendar;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-imperial-calendar`],
		id: `${q}-imperial-calendar`,
		position: {
			height: 660,
			width: 700
		},
		window: {
			icon: "fa-solid fa-calendar-days",
			resizable: !0,
			title: `${wc} — Imperial Calendar Calculator`
		}
	};
	getVueComponent() {
		return Cc;
	}
};
//#endregion
//#region src/module/apps/imperial-calendar/open.ts
async function Ac() {
	let e = new kc();
	return await e.render(!0), e;
}
//#endregion
//#region src/functions/fear-terror/payload.ts
function jc(e) {
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
function Mc(e) {
	return e === "fear" ? "Fear" : "Terror";
}
function Nc(e, t) {
	let n = t.source ? ` - ${t.source}` : "";
	return `${e} ${t.rating}${n}`;
}
function Pc(e, t) {
	return `<h2>${e}</h2>${Fc(t)}`;
}
function Fc(e) {
	let t = Mc(e.type), n = e.source ? `, ${e.source}` : "";
	return `@${t}[${e.rating}${n}]`;
}
//#endregion
//#region src/state/apps/fear-console/store.ts
var Ic = As("fear-console", () => {
	let e = /* @__PURE__ */ j("fear"), t = /* @__PURE__ */ j(1), n = /* @__PURE__ */ j(""), r = /* @__PURE__ */ j([]), i = /* @__PURE__ */ j(), a = /* @__PURE__ */ j(), o, s = U(() => i.value !== void 0), c = U(() => Mc(e.value)), l = U(() => {
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
}), Lc = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, Rc = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, zc = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:border-base-content/25! tw:py-1" }, Bc = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure Fear Console"
}, Vc = /* @__PURE__ */ P({
	__name: "FearConsoleHeader",
	props: {
		rating: {},
		selectedTypeLabel: {}
	},
	emits: ["configure"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (L(), R("header", Lc, [r[2] ||= z("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [z("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [z("i", { class: "fa-solid fa-skull" })])], -1), z("div", Rc, [z("span", zc, D(e.selectedTypeLabel) + " " + D(e.rating), 1), z("span", Bc, [z("button", {
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
}), Hc = { class: "tw:flex tw:min-h-full tw:flex-col tw:gap-4 tw:bg-base-200! tw:text-base-content tw:text-base-content!" }, Uc = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mx-4",
	role: "alert"
}, Wc = {
	class: "tw:grid tw:min-w-0 tw:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] tw:gap-3 tw:px-4",
	"aria-label": "Fear and Terror setup"
}, Gc = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Kc = {
	class: "tw:grid tw:w-full tw:grid-cols-2 tw:gap-2",
	role: "group",
	"aria-label": "Effect type"
}, qc = ["aria-pressed"], Jc = ["aria-pressed"], Yc = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Xc = { class: "dui-fieldset tw:col-span-full tw:min-w-0 tw:w-full tw:rounded-box tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-4 tw:text-base-content! tw:shadow-sm" }, Zc = {
	class: "dui-card dui-card-border tw:mx-4 tw:min-h-40 tw:flex-1 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-terror-affected-actors"
}, Qc = { class: "dui-card-body tw:gap-3 tw:p-4" }, $c = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, el = { class: "tw:flex tw:items-center tw:gap-2" }, tl = { class: "dui-badge dui-badge-sm" }, nl = ["disabled"], rl = {
	key: 0,
	class: "dui-list tw:gap-1",
	"aria-live": "polite"
}, il = { class: "tw:min-w-0 tw:font-semibold" }, al = { class: "dui-badge dui-badge-ghost tw:capitalize" }, ol = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, sl = {
	class: "tw:sticky tw:bottom-0 tw:z-10 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4",
	"aria-label": "Fear Console actions"
}, cl = { class: "dui-join tw:flex tw:w-full" }, ll = ["disabled"], ul = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, dl = {
	key: 1,
	class: "fa-solid fa-message",
	"aria-hidden": "true"
}, fl = ["disabled"], pl = {
	id: "fear-console-secondary-actions",
	class: "dui-dropdown dui-dropdown-top dui-dropdown-end dui-menu tw:z-20 tw:mb-2 tw:w-52 tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100! tw:p-2 tw:text-base-content! tw:shadow-lg",
	popover: "",
	style: { "position-anchor": "--fear-console-secondary-actions" }
}, ml = ["disabled"], hl = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, gl = {
	key: 1,
	class: "fa-regular fa-copy",
	"aria-hidden": "true"
}, _l = ["disabled"], vl = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, yl = {
	key: 1,
	class: "fa-solid fa-bolt",
	"aria-hidden": "true"
}, bl = /* @__PURE__ */ P({
	__name: "FearConsoleApp",
	props: {
		initialPayload: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = Ic();
		t.initialPayload ? n.initialize({
			actions: t.actions,
			initialPayload: t.initialPayload
		}) : n.initialize({ actions: t.actions });
		let { activeAction: r, actors: i, errorMessage: a, isWorking: o, rating: s, selectedType: c, selectedTypeLabel: l, source: u } = js(n);
		return (e, d) => (L(), R("main", Hc, [
			B(Vc, {
				rating: M(s),
				"selected-type-label": M(l),
				onConfigure: t.actions.openConfigurator
			}, null, 8, [
				"rating",
				"selected-type-label",
				"onConfigure"
			]),
			M(a) ? (L(), R("div", Uc, [d[8] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", null, D(M(a)), 1)])) : H("", !0),
			z("section", Wc, [
				z("fieldset", Gc, [
					d[9] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Effect", -1),
					z("div", Kc, [z("button", {
						class: E(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": M(c) === "fear" }]),
						type: "button",
						"aria-pressed": M(c) === "fear",
						onClick: d[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, qc), z("button", {
						class: E(["dui-btn tw:min-w-0 tw:rounded-full", { "dui-btn-primary": M(c) === "terror" }]),
						type: "button",
						"aria-pressed": M(c) === "terror",
						onClick: d[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, Jc)]),
					d[10] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " Choose the WFRP4e psychology test to prompt or apply. ", -1)
				]),
				z("fieldset", Yc, [
					d[11] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Difficulty", -1),
					d[12] ||= z("label", {
						class: "dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					N(z("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": d[2] ||= (e) => /* @__PURE__ */ A(s) ? s.value = e : null,
						class: "dui-input dui-validator tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content! tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						W,
						M(s),
						void 0,
						{ number: !0 }
					]]),
					d[13] ||= z("p", { class: "dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				z("fieldset", Xc, [
					d[14] ||= va("<legend class=\"dui-fieldset-legend tw:text-base-content!\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary!\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					N(z("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": d[3] ||= (e) => /* @__PURE__ */ A(u) ? u.value = e : null,
						autocomplete: "off",
						class: "dui-input tw:min-w-0 tw:max-w-full tw:w-full tw:border-base-content/25! tw:bg-base-100! tw:text-base-content!",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[W, M(u)]]),
					d[15] ||= z("p", { class: "dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			z("section", Zc, [z("div", Qc, [z("div", $c, [z("div", el, [d[16] ||= z("h2", {
				id: "fear-terror-affected-actors",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " Affected actors ", -1), z("span", tl, D(M(i).length), 1)]), z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: M(o),
				type: "button",
				onClick: d[4] ||= (...e) => M(n).refreshActors && M(n).refreshActors(...e)
			}, [...d[17] ||= [z("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), V(" Refresh ", -1)]], 8, nl)]), M(i).length ? (L(), R("ul", rl, [(L(!0), R(I, null, F(M(i), (e) => (L(), R("li", {
				key: e.id,
				class: "dui-list-row tw:items-center tw:bg-base-200!"
			}, [
				d[18] ||= z("span", {
					class: "dui-status dui-status-secondary",
					"aria-hidden": "true"
				}, null, -1),
				z("span", il, D(e.name), 1),
				z("span", al, D(e.source), 1)
			]))), 128))])) : (L(), R("div", ol, [d[19] ||= z("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), z("span", null, " Target one or more tokens to apply " + D(M(l)) + " directly. You can post a chat card without affected actors. ", 1)]))])]),
			z("footer", sl, [z("div", cl, [
				z("button", {
					class: "dui-btn dui-btn-primary dui-join-item tw:min-w-0 tw:flex-1 tw:rounded-l-full tw:shadow-md",
					disabled: M(o),
					type: "button",
					onClick: d[5] ||= (e) => M(n).runAction("post-card")
				}, [M(r) === "post-card" ? (L(), R("span", ul)) : (L(), R("i", dl)), d[20] ||= V(" Post Card ", -1)], 8, ll),
				z("button", {
					class: "dui-btn dui-btn-primary dui-btn-square dui-join-item tw:rounded-r-full tw:border-l-primary-content/25! tw:shadow-md",
					"aria-label": "More Fear Console actions",
					disabled: M(o),
					popovertarget: "fear-console-secondary-actions",
					style: { "anchor-name": "--fear-console-secondary-actions" },
					title: "More actions",
					type: "button"
				}, [...d[21] ||= [z("i", {
					class: "fa-solid fa-chevron-up",
					"aria-hidden": "true"
				}, null, -1)]], 8, fl),
				z("ul", pl, [z("li", { class: E({ "dui-menu-disabled": M(o) }) }, [z("button", {
					disabled: M(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[6] ||= (e) => M(n).runAction("copy-link")
				}, [M(r) === "copy-link" ? (L(), R("span", hl)) : (L(), R("i", gl)), d[22] ||= V(" Copy Link ", -1)], 8, ml)], 2), z("li", { class: E({ "dui-menu-disabled": M(o) }) }, [z("button", {
					disabled: M(o),
					popovertarget: "fear-console-secondary-actions",
					popovertargetaction: "hide",
					type: "button",
					onClick: d[7] ||= (e) => M(n).runAction("apply")
				}, [M(r) === "apply" ? (L(), R("span", vl)) : (L(), R("i", yl)), V(" Apply " + D(M(l)), 1)], 8, _l)], 2)])
			])])
		]));
	}
}), xl = As("fear-console-configurator", () => {
	let e = /* @__PURE__ */ j({ launchers: {
		actorSheet: !0,
		tokenControls: !0
	} }), t = /* @__PURE__ */ j(), n = /* @__PURE__ */ j(), r = /* @__PURE__ */ j(!1), i;
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
}), Sl = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, Cl = { class: "tw:min-h-0 tw:flex-1 tw:overflow-auto tw:p-4" }, wl = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, Tl = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, El = {
	class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "fear-launcher-settings"
}, Dl = { class: "dui-card-body tw:gap-4 tw:p-4" }, Ol = { class: "dui-fieldset tw:gap-2" }, kl = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, Al = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, jl = { class: "tw:flex tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[32rem]:flex-row tw:min-[32rem]:items-center tw:min-[32rem]:justify-between" }, Ml = ["disabled"], Nl = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Pl = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, Fl = /* @__PURE__ */ P({
	__name: "FearConsoleConfiguratorApp",
	props: {
		actions: {},
		configuration: {}
	},
	setup(e) {
		let t = e, n = xl();
		n.initialize(t.configuration, t.actions);
		let { configuration: r, errorMessage: i, isSaving: a, statusMessage: o } = js(n);
		return (e, t) => (L(), R("main", Sl, [
			B(Gs, {
				description: "Choose where the Fear Console appears for this browser and account.",
				icon: "fa-solid fa-gears",
				title: "Fear Console Configurator"
			}),
			z("div", Cl, [
				M(i) ? (L(), R("div", wl, [t[3] ||= z("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), z("span", null, D(M(i)), 1)])) : H("", !0),
				M(o) ? (L(), R("div", Tl, [t[4] ||= z("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), z("span", null, D(M(o)), 1)])) : H("", !0),
				z("section", El, [z("div", Dl, [
					t[8] ||= z("div", null, [z("h2", {
						id: "fear-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), z("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These client preferences control only where shortcuts appear. Macros and the module API remain available. ")], -1),
					z("fieldset", Ol, [
						t[7] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1),
						z("label", kl, [N(z("input", {
							"onUpdate:modelValue": t[0] ||= (e) => M(r).launchers.tokenControls = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[G, M(r).launchers.tokenControls]]), t[5] ||= z("span", { class: "tw:min-w-0" }, [z("strong", { class: "tw:block" }, "Token Controls"), z("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the skull launcher in Foundry’s Token Controls palette. ")], -1)]),
						z("label", Al, [N(z("input", {
							"onUpdate:modelValue": t[1] ||= (e) => M(r).launchers.actorSheet = e,
							class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
							type: "checkbox"
						}, null, 512), [[G, M(r).launchers.actorSheet]]), t[6] ||= z("span", { class: "tw:min-w-0" }, [z("strong", { class: "tw:block" }, "Actor-sheet headers"), z("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show a Fear Console action on supported WFRP4e actor sheets. ")], -1)])
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
			z("footer", jl, [t[11] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, "Scope: this client and user.", -1), z("button", {
				class: "dui-btn dui-btn-primary tw:min-w-40 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: M(a),
				type: "button",
				onClick: t[2] ||= (...e) => M(n).saveConfiguration && M(n).saveConfiguration(...e)
			}, [M(a) ? (L(), R("span", Nl)) : (L(), R("i", Pl)), t[10] ||= V(" Save configuration ", -1)], 8, Ml)])
		]));
	}
}), Il = {
	actorSheet: "showActorSheetLauncher",
	tokenControls: "showTokenControlsLauncher"
};
function Ll(e) {
	return game.settings.get(q, e) === !0;
}
//#endregion
//#region src/module/fear-terror/configuration.ts
function Rl() {
	return { launchers: {
		actorSheet: Ll(Il.actorSheet),
		tokenControls: Ll(Il.tokenControls)
	} };
}
async function zl(e) {
	Y(J.fearConsole);
	let t = [[Il.actorSheet, e.launchers.actorSheet], [Il.tokenControls, e.launchers.tokenControls]];
	for (let [e, n] of t) await game.settings.set(q, e, n);
	ui.notifications.info("Fear Console configuration saved. Reload to update its launchers.");
}
//#endregion
//#region src/module/apps/fear-console-configurator/FearConsoleConfiguratorApplication.ts
var Bl = class extends Oc {
	static ACCESS_POLICY = J.fearConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-fear-console-configurator`],
		id: `${q}-fear-console-configurator`,
		position: {
			height: 500,
			width: 560
		},
		window: {
			icon: "fa-solid fa-skull",
			resizable: !0,
			title: `${wc} — Fear Console Configurator`
		}
	};
	getVueComponent() {
		return Fl;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: zl },
			configuration: Rl()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console-configurator/open.ts
async function Vl() {
	let e = new Bl();
	return await e.render(!0), e;
}
function Hl() {
	Vl().catch((e) => {
		console.error(`${q} | Failed to open the Fear Console Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/fear-terror/suggestion.ts
function Ul({ fearRating: e, source: t, terrorRating: n }) {
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
function Wl() {
	if (!(typeof canvas > "u" || !canvas)) {
		for (let e of canvas.tokens?.controlled ?? []) if (e.actor) return Gl(e.actor);
	}
}
function Gl(e) {
	let t = Kl(e, "CHAT.Terror");
	return Ul({
		fearRating: t === void 0 ? Kl(e, "CHAT.Fear") : void 0,
		source: e.name,
		terrorRating: t
	});
}
function Kl(e, t) {
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
function ql() {
	return Yl().map(({ choice: e }) => e);
}
function Jl() {
	return Yl().map(({ actor: e }) => e);
}
function Yl() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user?.targets ?? []) Xl(e, t.actor);
	return Array.from(e.values());
}
function Xl(e, t) {
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
async function Zl(e) {
	Y(J.fearConsole);
	let t = Jl();
	if (t.length === 0) {
		ui.notifications.warn("Target one or more tokens before applying Fear or Terror.");
		return;
	}
	let n = jc(e);
	await Promise.all(t.map((e) => tu(e, n)));
}
async function Ql(e) {
	Y(J.fearConsole);
	let t = jc(e), n = Jl(), r = nu(t), i = Nc(r, t), a = ru(await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: i }), n);
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
async function $l(e) {
	Y(J.fearConsole);
	let t = jc(e), n = Fc(t);
	await game.clipboard.copyPlainText(n), ui.notifications.info(`${nu(t)} link copied.`);
}
async function eu(e) {
	Y(J.fearConsole);
	let t = jc(e), n = Pc(nu(t), t), r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
async function tu(e, t) {
	if (t.type === "fear") {
		await e.applyFear(t.rating, t.source);
		return;
	}
	await e.applyTerror(t.rating, t.source);
}
function nu(e) {
	let t = e.type === "fear" ? "CHAT.Fear" : "CHAT.Terror";
	return game.i18n.localize(t);
}
function ru(e, t) {
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
var iu = class extends Oc {
	static ACCESS_POLICY = J.fearConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-fear-console`],
		id: `${q}-fear-console`,
		position: {
			height: 560,
			width: 620
		},
		window: {
			icon: "fa-solid fa-skull",
			resizable: !0,
			title: `${wc} — Fear Console`
		}
	};
	#e;
	constructor(e = {}) {
		super(), this.#e = e;
	}
	getVueComponent() {
		return bl;
	}
	getVueProps() {
		return {
			actions: {
				applyToSelectedActors: Zl,
				copyLink: $l,
				getActorChoices: ql,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${q} | Failed to close the Fear Console.`, e), ui.notifications.error("The Fear Console completed the action but could not close its window.");
					});
				},
				openConfigurator: Hl,
				postPrompt: Ql
			},
			initialPayload: this.#e.initialPayload ?? Wl()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console/open.ts
async function au(e = {}) {
	let t = new iu(e);
	return await t.render(!0), t;
}
function ou(e = {}) {
	au(e).catch((e) => {
		console.error(`${q} | Failed to open the Fear Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the Fear Console. See the browser console for details.");
	});
}
//#endregion
//#region src/state/apps/administration-console/store.ts
var su = As("administration-console", () => {
	let e = /* @__PURE__ */ j([]), t = /* @__PURE__ */ j(), n = /* @__PURE__ */ j([]), r = /* @__PURE__ */ j(!0), i = /* @__PURE__ */ j("observer"), a = /* @__PURE__ */ j(), o = /* @__PURE__ */ j(), s = /* @__PURE__ */ j(!1), c, l = U(() => e.value.filter(({ selected: e }) => e).map(({ id: e }) => e));
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
}), cu = { class: "tw:grid tw:min-w-0 tw:gap-3" }, lu = { class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, uu = { class: "dui-card-body tw:gap-3 tw:p-4" }, du = { class: "tw:m-0 tw:text-sm" }, fu = { class: "tw:flex tw:flex-wrap tw:gap-2" }, pu = { class: "dui-badge" }, mu = { class: "dui-badge" }, hu = { class: "tw:flex tw:flex-wrap tw:justify-end tw:gap-2" }, gu = ["disabled"], _u = ["disabled"], vu = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, yu = { class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, bu = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, xu = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, Su = { class: "tw:flex tw:gap-2" }, Cu = { class: "tw:max-h-56 tw:overflow-auto tw:rounded-box tw:border tw:border-base-content/15!" }, wu = ["onUpdate:modelValue"], Tu = { class: "tw:min-w-0 tw:flex-1" }, Eu = { class: "tw:block tw:text-sm tw:font-semibold" }, Du = { class: "tw:block tw:text-xs tw:text-base-content/60!" }, Ou = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-end tw:gap-2" }, ku = ["disabled"], Au = { class: "tw:grid tw:gap-3 tw:min-[38rem]:grid-cols-2" }, ju = { class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, Mu = { class: "dui-card-body tw:gap-2 tw:p-4" }, Nu = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Pu = {
	key: 1,
	class: "tw:m-0 tw:text-sm"
}, Fu = { class: "tw:flex tw:items-center tw:gap-2" }, Iu = { class: "dui-card dui-card-border tw:border-2 tw:border-base-content/20! tw:bg-base-100!" }, Lu = { class: "dui-card-body tw:gap-2 tw:p-4" }, Ru = ["disabled"], zu = /* @__PURE__ */ P({
	__name: "AdministrationConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = su();
		n.initialize(t.initialization, t.actions);
		let { errorMessage: r, isWorking: i, packs: a, scene: o, selectedPackIds: s, showUnassignedPlayerWarning: c, spectators: l, statusMessage: u, visibility: d } = js(n);
		return (e, t) => (L(), ua(Qs, {
			description: "Manage Scene lighting, compendium visibility, player assignments, and utility rolls.",
			"error-message": M(r),
			icon: "fa-solid fa-screwdriver-wrench",
			"status-message": M(u),
			title: "Administration Console"
		}, {
			default: Xn(() => [z("div", cu, [
				z("section", lu, [z("div", uu, [t[9] ||= z("h2", { class: "dui-card-title tw:font-serif tw:text-lg" }, "Viewed Scene", -1), M(o) ? (L(), R(I, { key: 0 }, [
					z("p", du, D(M(o).name), 1),
					z("div", fu, [z("span", pu, "Token Vision: " + D(M(o).tokenVision ? "on" : "off"), 1), z("span", mu, "Global light: " + D(M(o).globalLight ? "on" : "off"), 1)]),
					z("div", hu, [z("button", {
						class: "dui-btn dui-btn-sm",
						disabled: M(i),
						type: "button",
						onClick: t[0] ||= (e) => M(n).applySceneMode("token-vision")
					}, " Use Token Vision ", 8, gu), z("button", {
						class: "dui-btn dui-btn-sm",
						disabled: M(i),
						type: "button",
						onClick: t[1] ||= (e) => M(n).applySceneMode("global-light")
					}, " Use global light ", 8, _u)])
				], 64)) : (L(), R("div", vu, "View a Scene to manage its lighting."))])]),
				z("section", yu, [z("div", bu, [
					z("div", xu, [t[10] ||= z("h2", { class: "dui-card-title tw:font-serif tw:text-lg" }, "Compendium visibility", -1), z("div", Su, [z("button", {
						class: "dui-btn dui-btn-xs",
						type: "button",
						onClick: t[2] ||= (e) => M(n).setAllPacks(!0)
					}, " Select all "), z("button", {
						class: "dui-btn dui-btn-xs",
						type: "button",
						onClick: t[3] ||= (e) => M(n).setAllPacks(!1)
					}, " Clear ")])]),
					z("div", Cu, [(L(!0), R(I, null, F(M(a), (e) => (L(), R("label", {
						key: e.id,
						class: "tw:flex tw:items-start tw:gap-2 tw:border-b tw:border-base-content/10! tw:p-2 last:tw:border-0"
					}, [N(z("input", {
						"onUpdate:modelValue": (t) => e.selected = t,
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 8, wu), [[G, e.selected]]), z("span", Tu, [z("span", Eu, D(e.label), 1), z("span", Du, D(e.packageName) + " · " + D(e.type) + " · " + D(e.visibility), 1)])]))), 128))]),
					z("div", Ou, [N(z("select", {
						"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ A(d) ? d.value = e : null,
						class: "dui-select dui-select-sm tw:border-base-content/25! tw:bg-base-100!"
					}, [...t[11] ||= [z("option", { value: "observer" }, "Visible to players", -1), z("option", { value: "limited" }, "Hidden from players", -1)]], 512), [[zo, M(d)]]), z("button", {
						class: "dui-btn dui-btn-primary dui-btn-sm",
						disabled: M(i) || !M(s).length,
						type: "button",
						onClick: t[5] ||= (...e) => M(n).applyVisibility && M(n).applyVisibility(...e)
					}, " Apply to " + D(M(s).length) + " pack" + D(M(s).length === 1 ? "" : "s"), 9, ku)])
				])]),
				z("section", Au, [z("div", ju, [z("div", Mu, [
					t[13] ||= z("h2", { class: "dui-card-title tw:font-serif tw:text-lg" }, "Player assignments", -1),
					M(l).length ? (L(), R("div", Nu, [z("span", null, D(M(l).join(", ")) + " " + D(M(l).length === 1 ? "has" : "have") + " no assigned character.", 1)])) : (L(), R("p", Pu, "Every player has an assigned character.")),
					z("label", Fu, [N(z("input", {
						"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ A(c) ? c.value = e : null,
						class: "dui-toggle dui-toggle-sm",
						type: "checkbox"
					}, null, 512), [[G, M(c)]]), t[12] ||= V(" Warn the GM at startup ", -1)]),
					z("button", {
						class: "dui-btn dui-btn-secondary dui-btn-sm tw:w-fit",
						type: "button",
						onClick: t[7] ||= (...e) => M(n).savePlayerWarning && M(n).savePlayerWarning(...e)
					}, " Save preference ")
				])]), z("div", Iu, [z("div", Lu, [t[15] ||= z("h2", { class: "dui-card-title tw:font-serif tw:text-lg" }, "Utility roll", -1), z("button", {
					class: "dui-btn dui-btn-primary",
					disabled: M(i),
					type: "button",
					onClick: t[8] ||= (...e) => M(n).rollD100 && M(n).rollD100(...e)
				}, [...t[14] ||= [z("i", {
					class: "fa-solid fa-dice-d20",
					"aria-hidden": "true"
				}, null, -1), V(" Roll d100 ", -1)]], 8, Ru)])])])
			])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
}), Bu = { showUnassignedPlayerWarning: "showUnassignedPlayerWarning" };
//#endregion
//#region src/module/administration/initialization.ts
function Vu() {
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
		showUnassignedPlayerWarning: game.settings.get(q, Bu.showUnassignedPlayerWarning) === !0
	};
}
//#endregion
//#region src/module/administration/service.ts
async function Hu(e) {
	Y(J.administrationConsole);
	let t = game.scenes.viewed;
	if (!t) throw Error("View a Scene before changing its lighting mode.");
	await t.update({
		"environment.globalLight.enabled": e === "global-light",
		tokenVision: e === "token-vision"
	}), ui.notifications.info(`${t.name} now uses ${e === "global-light" ? "global illumination" : "Token Vision"}.`);
}
async function Uu(e, t) {
	Y(J.administrationConsole);
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
async function Wu() {
	Y(J.administrationConsole);
	let e = new Roll("1d100");
	await e.evaluate(), await e.toMessage({ flavor: "d100" });
}
async function Gu(e) {
	Y(J.administrationConsole), await game.settings.set(q, Bu.showUnassignedPlayerWarning, e), ui.notifications.info(`Unassigned-player warning ${e ? "enabled" : "disabled"}.`);
}
//#endregion
//#region src/module/apps/administration-console/AdministrationConsoleApplication.ts
var Ku = class extends Oc {
	static ACCESS_POLICY = J.administrationConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-administration-console`],
		id: `${q}-administration-console`,
		position: {
			height: 760,
			width: 760
		},
		window: {
			icon: "fa-solid fa-screwdriver-wrench",
			resizable: !0,
			title: `${wc} — Administration Console`
		}
	};
	getVueComponent() {
		return zu;
	}
	getVueProps() {
		return {
			actions: {
				rollD100: Wu,
				setCompendiumVisibility: Uu,
				setSceneLighting: Hu,
				setUnassignedPlayerWarning: Gu
			},
			initialization: Vu()
		};
	}
};
//#endregion
//#region src/module/apps/administration-console/open.ts
async function qu() {
	let e = new Ku();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/combat-console/store.ts
var Ju = As("combat-console", () => {
	let e = /* @__PURE__ */ j([]), t = /* @__PURE__ */ j(), n = /* @__PURE__ */ j(1), r = /* @__PURE__ */ j(!0), i = /* @__PURE__ */ j(!0), a = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(""), s, c = U(() => e.value.filter((e) => e.selected).map((e) => e.uuid));
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
}), Yu = { class: "tw:grid tw:gap-4" }, Xu = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, Zu = { class: "dui-card dui-card-border tw:bg-base-100!" }, Qu = { class: "dui-card-body tw:gap-3 tw:p-4" }, $u = { class: "tw:grid tw:max-h-48 tw:grid-cols-2 tw:gap-2 tw:overflow-auto" }, ed = ["onUpdate:modelValue"], td = { class: "dui-card dui-card-border tw:bg-base-100!" }, nd = { class: "dui-card-body tw:gap-3 tw:p-4" }, rd = { class: "tw:flex tw:items-center tw:gap-3" }, id = { class: "tw:flex tw:flex-wrap tw:gap-2" }, ad = ["disabled"], od = ["disabled"], sd = ["disabled"], cd = { class: "dui-card dui-card-border tw:bg-base-100!" }, ld = { class: "dui-card-body tw:gap-3 tw:p-4" }, ud = { class: "tw:flex tw:items-center tw:gap-2" }, dd = { class: "tw:flex tw:items-center tw:gap-2" }, fd = ["disabled"], pd = {
	key: 1,
	class: "dui-collapse dui-collapse-arrow dui-card dui-card-border tw:bg-base-100!"
}, md = { class: "dui-collapse-content tw:grid tw:gap-2" }, hd = { class: "tw:flex tw:items-center tw:gap-2" }, gd = { class: "tw:flex tw:items-center tw:gap-2" }, _d = { class: "tw:flex tw:items-center tw:gap-2" }, vd = { class: "tw:flex tw:items-center tw:gap-2" }, yd = { class: "tw:flex tw:items-center tw:gap-2" }, bd = { class: "tw:flex tw:items-center tw:gap-2" }, xd = { class: "tw:flex tw:items-center tw:gap-2" }, Sd = ["disabled"], Cd = /* @__PURE__ */ P({
	__name: "CombatConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Ju();
		n.initialize(t.initialization, t.actions);
		let { actors: r, amount: i, busy: a, endOfRoundOnly: o, errorMessage: s, settings: c, skipPlayerCharacters: l } = js(n);
		return (e, t) => (L(), ua(Qs, {
			description: "Manage Advantage and resolve supported end-of-round conditions.",
			icon: "fa-solid fa-swords",
			title: "Combat Console"
		}, {
			default: Xn(() => [z("div", Yu, [
				M(s) ? (L(), R("p", Xu, D(M(s)), 1)) : H("", !0),
				z("section", Zu, [z("div", Qu, [t[15] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Actors", -1), z("div", $u, [(L(!0), R(I, null, F(M(r), (e) => (L(), R("label", {
					key: e.uuid,
					class: "tw:flex tw:items-center tw:gap-2"
				}, [N(z("input", {
					"onUpdate:modelValue": (t) => e.selected = t,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 8, ed), [[G, e.selected]]), z("span", null, D(e.label), 1)]))), 128))])])]),
				z("section", td, [z("div", nd, [
					t[17] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Advantage", -1),
					z("label", rd, [t[16] ||= z("span", null, "Amount", -1), N(z("input", {
						"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ A(i) ? i.value = e : null,
						class: "dui-input dui-input-sm tw:w-24",
						min: "1",
						type: "number"
					}, null, 512), [[
						W,
						M(i),
						void 0,
						{ number: !0 }
					]])]),
					z("div", id, [
						z("button", {
							class: "dui-btn dui-btn-primary dui-btn-sm",
							disabled: M(a),
							type: "button",
							onClick: t[1] ||= (e) => M(n).adjust("add")
						}, " Add ", 8, ad),
						z("button", {
							class: "dui-btn dui-btn-secondary dui-btn-sm",
							disabled: M(a),
							type: "button",
							onClick: t[2] ||= (e) => M(n).adjust("reduce")
						}, " Reduce ", 8, od),
						z("button", {
							class: "dui-btn dui-btn-outline dui-btn-sm",
							disabled: M(a),
							type: "button",
							onClick: t[3] ||= (e) => M(n).adjust("clear")
						}, " Clear ", 8, sd)
					])
				])]),
				z("section", cd, [z("div", ld, [
					t[20] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Condition checks", -1),
					t[21] ||= z("p", { class: "tw:m-0 tw:text-sm" }, " Handles Surprised, Ablaze, Poisoned, and Broken using WFRP4e operations. ", -1),
					z("label", ud, [N(z("input", {
						"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ A(o) ? o.value = e : null,
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[G, M(o)]]), t[18] ||= V(" Require end of round", -1)]),
					z("label", dd, [N(z("input", {
						"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ A(l) ? l.value = e : null,
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[G, M(l)]]), t[19] ||= V(" Skip assigned player characters", -1)]),
					z("button", {
						class: "dui-btn dui-btn-primary dui-btn-sm tw:w-fit",
						disabled: M(a),
						type: "button",
						onClick: t[6] ||= (...e) => M(n).check && M(n).check(...e)
					}, " Run checks ", 8, fd)
				])]),
				M(c) ? (L(), R("section", pd, [
					t[29] ||= z("input", { type: "checkbox" }, null, -1),
					t[30] ||= z("div", { class: "dui-collapse-title tw:font-semibold" }, "Advantage automation", -1),
					z("div", md, [
						z("label", hd, [N(z("input", {
							"onUpdate:modelValue": t[7] ||= (e) => M(c).automateOpposed = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, M(c).automateOpposed]]), t[22] ||= V(" Opposed-test winners and losers", -1)]),
						z("label", gd, [N(z("input", {
							"onUpdate:modelValue": t[8] ||= (e) => M(c).automateDamage = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, M(c).automateDamage]]), t[23] ||= V(" Outmanoeuvring damage", -1)]),
						z("label", _d, [N(z("input", {
							"onUpdate:modelValue": t[9] ||= (e) => M(c).automateCondition = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, M(c).automateCondition]]), t[24] ||= V(" Clear on combat conditions", -1)]),
						z("label", vd, [N(z("input", {
							"onUpdate:modelValue": t[10] ||= (e) => M(c).clearOnJoin = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, M(c).clearOnJoin]]), t[25] ||= V(" Clear when joining combat", -1)]),
						z("label", yd, [N(z("input", {
							"onUpdate:modelValue": t[11] ||= (e) => M(c).clearOnLeave = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, M(c).clearOnLeave]]), t[26] ||= V(" Clear when leaving combat", -1)]),
						z("label", bd, [N(z("input", {
							"onUpdate:modelValue": t[12] ||= (e) => M(c).promptMomentumLoss = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, M(c).promptMomentumLoss]]), t[27] ||= V(" Prompt for momentum loss each round", -1)]),
						z("label", xd, [N(z("input", {
							"onUpdate:modelValue": t[13] ||= (e) => M(c).persistentNotifications = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, M(c).persistentNotifications]]), t[28] ||= V(" Keep automation notifications visible", -1)]),
						z("button", {
							class: "dui-btn dui-btn-secondary dui-btn-sm tw:w-fit",
							disabled: M(a),
							type: "button",
							onClick: t[14] ||= (...e) => M(n).save && M(n).save(...e)
						}, " Save automation ", 8, Sd)
					])
				])) : H("", !0)
			])]),
			_: 1
		}));
	}
});
//#endregion
//#region src/functions/actors/selection.ts
function wd(e) {
	let t = new Set(e.targeted.map(({ actor: e }) => e.id)), n = new Set(e.controlled.map(({ actor: e }) => e.id)), r = e.actors.filter((t) => Ed(t, e.includeVehicles)).map((r) => ({
		actorType: r.actorType,
		label: r.label,
		selected: Dd(r.id, r.hasPlayerOwner, e.initial, e.assignedActorIds, n, t),
		source: e.assignedActorIds.has(r.id) ? "assigned" : r.hasPlayerOwner ? "owned" : "world",
		uuid: r.uuid
	}));
	return Td(r, e.targeted, "targeted", e), Td(r, e.controlled, "controlled", e), r.sort((e, t) => e.label.localeCompare(t.label));
}
function Td(e, t, n, r) {
	for (let i of t) {
		if (!Ed(i.actor, r.includeVehicles)) continue;
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
function Ed(e, t) {
	return e.actorType === "character" || e.actorType === "creature" || t && e.actorType === "vehicle";
}
function Dd(e, t, n, r, i, a) {
	return n === "party" ? r.has(e) : n === "company" ? r.has(e) || t : n === "controlled" ? i.has(e) : a.has(e);
}
//#endregion
//#region src/module/actors/selection.ts
function Od(e = {}) {
	let t = e.initial ?? "targeted", n = Array.from(game.actors), r = new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => !!e)), i = Ad("targeted"), a = Ad("controlled");
	return wd({
		actors: n.map(jd),
		assignedActorIds: r,
		controlled: a.flatMap(Md),
		includeVehicles: e.includeVehicles === !0,
		initial: t,
		targeted: i.flatMap(Md)
	});
}
async function kd(e) {
	let t = [];
	for (let n of [...new Set(e)]) {
		let e = await fromUuid(n), r = e && "actor" in e ? e.actor : e;
		r && "documentName" in r && r.documentName === "Actor" && t.push(r);
	}
	return t;
}
function Ad(e) {
	let t = canvas;
	return e === "controlled" ? t?.tokens?.controlled ?? [] : Array.from(game.user?.targets ?? /* @__PURE__ */ new Set());
}
function jd(e) {
	return {
		actorType: e.type,
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		label: e.name,
		uuid: e.uuid
	};
}
function Md(e) {
	return e.actor ? [{
		actor: jd(e.actor),
		tokenUuid: e.document.uuid
	}] : [];
}
//#endregion
//#region src/module/combat/advantage.ts
async function Nd(e) {
	if (Y(J.combatConsole), e.uuids.length === 0) throw Error("Select at least one actor.");
	if (!Number.isFinite(e.amount)) throw Error("Enter a valid Advantage amount.");
	let t = Math.max(1, Math.round(Math.abs(e.amount))), n = await kd(e.uuids), r = n.filter((e) => e.inCombat !== !0);
	if (e.mode !== "clear" && r.length > 0) throw Error(`Advantage can only be added or reduced in combat: ${r.map(({ name: e }) => e).join(", ")}.`);
	for (let r of n) e.mode === "clear" ? await Fd(r, 0) : e.mode === "add" ? await Pd(r, t) : await Pd(r, -t);
	ui.notifications.info(`Updated Advantage for ${n.length} actor${n.length === 1 ? "" : "s"}.`);
}
async function Pd(e, t) {
	if (typeof e.addAdvantage != "function") throw Error(`${e.name} does not expose WFRP4e Advantage controls.`);
	await e.addAdvantage(t);
}
async function Fd(e, t) {
	let n = Math.max(0, Math.round(t));
	if (typeof e.setAdvantage != "function") throw Error(`${e.name} does not expose WFRP4e Advantage controls.`);
	await e.setAdvantage(n);
}
function Id(e) {
	if (!e || typeof e != "object") return;
	let t = e;
	return t.documentName === "Actor" ? t : void 0;
}
//#endregion
//#region src/module/combat/conditions.ts
async function Ld(e) {
	if (Y(J.combatConsole), e.endOfRoundOnly && !Bd()) throw Error("Condition checks can only run at the end of the active combat round.");
	let t = await kd(e.uuids), n = new Set(Array.from(game.users).map((e) => e.character?.id)), r = 0;
	for (let i of t) if (!(e.skipPlayerCharacters && n.has(i.id))) for (let e of Array.from(i.statuses ?? [])) await Rd(i, e) && (r += 1);
	ui.notifications.info(`Processed ${r} supported condition check${r === 1 ? "" : "s"}.`);
}
async function Rd(e, t) {
	let n = Math.max(1, Number(e.hasCondition(t)?.conditionValue ?? 1));
	if (t === "surprised") return await e.removeCondition(t), !0;
	if (t === "ablaze") {
		let t = await new Roll(`1d10 + ${n} - 1`).evaluate();
		return await e.applyBasicDamage(Number(t.total ?? n), {}), !0;
	}
	if (e.type === "vehicle" || !["broken", "poisoned"].includes(t)) return !1;
	let r = await (await zd(e, t === "broken" ? game.i18n.localize("NAME.Cool") : game.i18n.localize("NAME.Endurance"), t === "broken" ? "wp" : "t")).roll();
	if (r.succeeded) {
		let i = Math.min(n, Math.max(1, Number(r.result?.SL ?? 0) + 1));
		await e.removeCondition(t, i);
	}
	return !0;
}
async function zd(e, t, n) {
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
function Bd() {
	let e = game.combat;
	return !!(e?.active && Number(e.round) > 0 && Number(e.current?.turn) === (e.turns?.length ?? 0) - 1);
}
//#endregion
//#region src/module/combat/settings/keys.ts
var Vd = {
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
function Hd() {
	return {
		automateCondition: Wd(Vd.automateCondition),
		automateDamage: Wd(Vd.automateDamage),
		automateOpposed: Wd(Vd.automateOpposed),
		clearOnJoin: Wd(Vd.clearOnJoin),
		clearOnLeave: Wd(Vd.clearOnLeave),
		promptMomentumLoss: Wd(Vd.promptMomentumLoss),
		persistentNotifications: Wd(Vd.persistentNotifications)
	};
}
async function Ud(e) {
	for (let [t, n] of Object.entries(e)) await game.settings.set(q, Vd[t], n);
}
function Wd(e) {
	return game.settings.get(q, e) === !0;
}
//#endregion
//#region src/module/combat/initialization.ts
function Gd() {
	return {
		actors: Od({
			includeVehicles: !0,
			initial: "controlled"
		}),
		settings: Hd()
	};
}
//#endregion
//#region src/module/apps/combat-console/CombatConsoleApplication.ts
var Kd = class extends Oc {
	static ACCESS_POLICY = J.combatConsole;
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
			title: `${wc} — Combat Console`
		}
	};
	getVueComponent() {
		return Cd;
	}
	getVueProps() {
		return {
			actions: {
				adjustAdvantage: Nd,
				checkConditions: Ld,
				saveSettings: Ud
			},
			initialization: Gd()
		};
	}
};
//#endregion
//#region src/module/apps/combat-console/open.ts
async function qd() {
	let e = new Kd();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/damage-console/store.ts
var Jd = As("damage-console", () => {
	let e = /* @__PURE__ */ j([]), t = /* @__PURE__ */ j([]), n = /* @__PURE__ */ j("1d10"), r = /* @__PURE__ */ j("body"), i = /* @__PURE__ */ j(!0), a = /* @__PURE__ */ j("normal"), o = /* @__PURE__ */ j(!0), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(""), u, d = U(() => e.value.filter((e) => e.selected).map((e) => e.uuid));
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
}), Yd = { class: "tw:grid tw:gap-4" }, Xd = { class: "dui-card dui-card-border tw:bg-base-100!" }, Zd = { class: "dui-card-body tw:p-4" }, Qd = { class: "tw:grid tw:max-h-52 tw:grid-cols-2 tw:gap-2 tw:overflow-auto" }, $d = ["onUpdate:modelValue"], ef = { class: "dui-card dui-card-border tw:bg-base-100!" }, tf = { class: "dui-card-body tw:grid tw:gap-3 tw:p-4" }, nf = { class: "tw:grid tw:gap-1" }, rf = { class: "tw:flex tw:items-center tw:gap-2" }, af = { class: "tw:grid tw:gap-1" }, of = ["value"], sf = { class: "tw:flex tw:items-center tw:gap-2" }, cf = { class: "tw:grid tw:gap-1" }, lf = { class: "tw:flex tw:items-center tw:gap-2" }, uf = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, df = ["disabled"], ff = /* @__PURE__ */ P({
	__name: "DamageConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Jd();
		n.initialize(t.initialization, t.actions);
		let { actors: r, busy: i, errorMessage: a, formula: o, hitLocation: s, hitLocations: c, minimumOne: l, protection: u, randomizeDamage: d, randomizeHitLocation: f } = js(n);
		return (e, t) => (L(), ua(Qs, {
			description: "Apply WFRP4e damage to several actors at once.",
			icon: "fa-solid fa-bolt",
			title: "Damage Console"
		}, {
			default: Xn(() => [z("div", Yd, [z("section", Xd, [z("div", Zd, [t[7] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Recipients", -1), z("div", Qd, [(L(!0), R(I, null, F(M(r), (e) => (L(), R("label", {
				key: e.uuid,
				class: "tw:flex tw:items-center tw:gap-2"
			}, [N(z("input", {
				"onUpdate:modelValue": (t) => e.selected = t,
				class: "dui-checkbox dui-checkbox-sm",
				type: "checkbox"
			}, null, 8, $d), [[G, e.selected]]), V(D(e.label), 1)]))), 128))])])]), z("section", ef, [z("div", tf, [
				z("label", nf, [t[8] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Damage amount or formula", -1), N(z("input", {
					"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ A(o) ? o.value = e : null,
					class: "dui-input"
				}, null, 512), [[W, M(o)]])]),
				z("label", rf, [N(z("input", {
					"onUpdate:modelValue": t[1] ||= (e) => /* @__PURE__ */ A(d) ? d.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, M(d)]]), t[9] ||= V(" Roll separately for each actor", -1)]),
				z("label", af, [t[11] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Hit location", -1), N(z("select", {
					"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ A(s) ? s.value = e : null,
					class: "dui-select"
				}, [t[10] ||= z("option", { value: "roll" }, "Roll", -1), (L(!0), R(I, null, F(M(c), (e) => (L(), R("option", {
					key: e.value,
					value: e.value
				}, D(e.label), 9, of))), 128))], 512), [[zo, M(s)]])]),
				z("label", sf, [N(z("input", {
					"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ A(f) ? f.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, M(f)]]), t[12] ||= V(" Roll separately for each actor", -1)]),
				z("label", cf, [t[14] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Protection", -1), N(z("select", {
					"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ A(u) ? u.value = e : null,
					class: "dui-select"
				}, [...t[13] ||= [
					z("option", { value: "normal" }, "Armour and Toughness", -1),
					z("option", { value: "ignore-armour" }, "Ignore armour", -1),
					z("option", { value: "ignore-toughness" }, "Ignore Toughness", -1),
					z("option", { value: "ignore-all" }, "Ignore both", -1)
				]], 512), [[zo, M(u)]])]),
				z("label", lf, [N(z("input", {
					"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ A(l) ? l.value = e : null,
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, M(l)]]), t[15] ||= V(" Inflict at least 1 Wound", -1)]),
				M(a) ? (L(), R("p", uf, D(M(a)), 1)) : H("", !0),
				z("button", {
					class: "dui-btn dui-btn-primary",
					disabled: M(i),
					type: "button",
					onClick: t[6] ||= (...e) => M(n).apply && M(n).apply(...e)
				}, " Apply damage ", 8, df)
			])])])]),
			_: 1
		}));
	}
});
//#endregion
//#region src/module/damage/initialization.ts
function pf() {
	let e = game.wfrp4e.config.locations ?? {};
	return {
		actors: Od({
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
function mf(e) {
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
function hf(e, t) {
	let n = Number(e);
	if (!Number.isFinite(n)) throw Error(`Could not evaluate damage formula “${t}”.`);
	let r = Math.round(n);
	if (r < 0) throw Error("Damage cannot be negative.");
	return r;
}
function gf(e, t) {
	return e === "roll" ? t || "body" : e || "body";
}
function _f(e) {
	return {
		"ignore-all": "IGNORE_ALL",
		"ignore-armour": "IGNORE_AP",
		"ignore-toughness": "IGNORE_TB",
		normal: "NORMAL"
	}[e];
}
function vf(e) {
	if (e.message) return e.message;
	let t = bf(e.actorName);
	return e.error ? `<p><strong>${t}</strong>: failed — ${bf(e.error)}</p>` : `<p><strong>${t}</strong>: ${e.damage ?? 0} damage applied.</p>`;
}
function yf(e, t) {
	return `Damage was applied to ${e} actor${e === 1 ? "" : "s"}; ${t} failed. See the private chat summary.`;
}
function bf(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/module/damage/service.ts
async function xf(e) {
	Y(J.damageConsole);
	let t = mf(e), n = await kd(t.uuids);
	if (n.length === 0) throw Error("None of the selected actors are available.");
	let r = t.rollDamagePerActor ? void 0 : await Sf(t.formula), i = t.rollLocationPerActor ? void 0 : gf(t.location, await Cf(t.location)), a = [], o = [];
	for (let s of n) try {
		let n = r ?? await Sf(t.formula), o = i ?? await wf(s), c = await s.applyBasicDamage(n, {
			damageType: Ef(e.protection),
			loc: o,
			minimumOne: e.minimumOne,
			suppressMsg: !0
		});
		a.push(typeof c == "string" ? c : vf({
			actorName: s.name,
			damage: n
		}));
	} catch (e) {
		let t = e instanceof Error ? e.message : "unknown error";
		o.push(vf({
			actorName: s.name,
			error: t
		}));
	}
	let s = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id);
	if (await ChatMessage.create({
		content: [...a, ...o].join("<hr>"),
		whisper: s
	}), o.length > 0) throw Error(yf(a.length, o.length));
}
async function Sf(e) {
	return hf((await new Roll(e).evaluate()).total, e);
}
async function Cf(e) {
	return e === "roll" ? Tf("hitloc") : void 0;
}
async function wf(e) {
	return Tf(e.system.details?.hitLocationTable?.value ?? "hitloc");
}
async function Tf(e) {
	let t = await game.wfrp4e.tables.rollTable(e, { hideDSN: !0 });
	return String(t.result ?? "body");
}
function Ef(e) {
	return game.wfrp4e.config.DAMAGE_TYPE[_f(e)];
}
//#endregion
//#region src/module/apps/damage-console/DamageConsoleApplication.ts
var Df = class extends Oc {
	static ACCESS_POLICY = J.damageConsole;
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
			title: `${wc} — Damage Console`
		}
	};
	getVueComponent() {
		return ff;
	}
	getVueProps() {
		return {
			actions: { applyDamage: xf },
			initialization: pf()
		};
	}
};
//#endregion
//#region src/module/apps/damage-console/open.ts
async function Of() {
	let e = new Df();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/dark-whispers-console/store.ts
var kf = As("dark-whispers-console", () => {
	let e = /* @__PURE__ */ j([]), t = /* @__PURE__ */ j([]), n = /* @__PURE__ */ j(), r = /* @__PURE__ */ j(""), i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(""), s, c = U(() => t.value.filter((e) => e.corruption > 0));
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
}), Af = {
	key: 0,
	class: "tw:grid tw:gap-4"
}, jf = { class: "dui-card dui-card-border tw:bg-base-100!" }, Mf = { class: "dui-card-body tw:p-4" }, Nf = { class: "tw:grid tw:gap-2" }, Pf = ["onUpdate:modelValue"], Ff = { class: "tw:flex-1" }, If = { class: "tw:block" }, Lf = { class: "tw:flex tw:items-center tw:gap-2" }, Rf = { class: "tw:grid tw:gap-1" }, zf = { class: "dui-card dui-card-border tw:bg-base-100!" }, Bf = { class: "dui-card-body tw:grid tw:gap-3 tw:p-4" }, Vf = { class: "tw:grid tw:gap-1" }, Hf = { class: "tw:grid tw:gap-1" }, Uf = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, Wf = ["disabled"], Gf = { class: "dui-collapse dui-collapse-arrow dui-card dui-card-border tw:bg-base-100!" }, Kf = { class: "dui-collapse-content tw:grid tw:gap-2" }, qf = ["onUpdate:modelValue"], Jf = ["onClick"], Yf = { class: "tw:flex tw:gap-2" }, Xf = ["disabled"], Zf = /* @__PURE__ */ P({
	__name: "DarkWhispersConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = kf();
		n.initialize(t.initialization, t.actions);
		let { busy: r, eligibleRecipients: i, errorMessage: a, message: o, prompts: s, sendToOwners: c, settings: l } = js(n);
		return (e, t) => (L(), ua(Qs, {
			description: "Send a private temptation to characters with Corruption.",
			icon: "fa-solid fa-comment-dots",
			title: "Dark Whispers"
		}, {
			default: Xn(() => [M(l) ? (L(), R("div", Af, [
				z("section", jf, [z("div", Mf, [
					t[11] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Recipients", -1),
					z("div", Nf, [(L(!0), R(I, null, F(M(i), (e) => (L(), R("label", {
						key: e.uuid,
						class: "tw:flex tw:items-center tw:gap-2"
					}, [N(z("input", {
						"onUpdate:modelValue": (t) => e.selected = t,
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 8, Pf), [[G, e.selected]]), z("span", Ff, [z("strong", null, D(e.label), 1), z("small", If, D(e.assignedUser || "Not assigned") + " · " + D(e.ownerCount) + " owner" + D(e.ownerCount === 1 ? "" : "s") + " · Corruption " + D(e.corruption) + " / " + D(e.corruptionMax), 1)])]))), 128))]),
					z("label", Lf, [N(z("input", {
						"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ A(c) ? c.value = e : null,
						class: "dui-toggle dui-toggle-sm",
						type: "checkbox"
					}, null, 512), [[G, M(c)]]), t[8] ||= V(" Send to all owners instead of only the assigned player", -1)]),
					z("label", Rf, [t[10] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Initial recipient group", -1), N(z("select", {
						"onUpdate:modelValue": t[1] ||= (e) => M(l).defaultGroup = e,
						class: "dui-select dui-select-sm"
					}, [...t[9] ||= [z("option", { value: "party" }, "Assigned party", -1), z("option", { value: "company" }, "All player-owned characters", -1)]], 512), [[zo, M(l).defaultGroup]])])
				])]),
				z("section", zf, [z("div", Bf, [
					z("label", Vf, [t[12] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Whisper", -1), N(z("textarea", {
						"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ A(o) ? o.value = e : null,
						class: "dui-textarea",
						rows: "5"
					}, null, 512), [[W, M(o)]])]),
					z("button", {
						class: "dui-btn dui-btn-outline dui-btn-sm tw:w-fit",
						type: "button",
						onClick: t[3] ||= (...e) => M(n).chooseRandom && M(n).chooseRandom(...e)
					}, " Choose another prompt"),
					z("label", Hf, [t[14] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Presentation", -1), N(z("select", {
						"onUpdate:modelValue": t[4] ||= (e) => M(l).messageStyle = e,
						class: "dui-select dui-select-sm"
					}, [...t[13] ||= [
						z("option", { value: "taunt" }, "Taunting whisper", -1),
						z("option", { value: "offer" }, "Tempting offer", -1),
						z("option", { value: "plain" }, "Plain message", -1)
					]], 512), [[zo, M(l).messageStyle]])]),
					M(a) ? (L(), R("p", Uf, D(M(a)), 1)) : H("", !0),
					z("button", {
						class: "dui-btn dui-btn-primary",
						disabled: M(r),
						type: "button",
						onClick: t[5] ||= (...e) => M(n).send && M(n).send(...e)
					}, " Send Dark Whisper ", 8, Wf)
				])]),
				z("section", Gf, [
					t[16] ||= z("input", { type: "checkbox" }, null, -1),
					t[17] ||= z("div", { class: "dui-collapse-title tw:font-semibold" }, "Prompt library", -1),
					z("div", Kf, [(L(!0), R(I, null, F(M(s), (e) => (L(), R("div", {
						key: e.id,
						class: "tw:flex tw:gap-2"
					}, [N(z("textarea", {
						"onUpdate:modelValue": (t) => e.text = t,
						class: "dui-textarea tw:flex-1",
						rows: "2"
					}, null, 8, qf), [[W, e.text]]), z("button", {
						class: "dui-btn dui-btn-ghost dui-btn-sm",
						type: "button",
						onClick: (t) => M(n).removePrompt(e.id)
					}, [...t[15] ||= [z("i", { class: "fa-solid fa-trash" }, null, -1)]], 8, Jf)]))), 128)), z("div", Yf, [z("button", {
						class: "dui-btn dui-btn-outline dui-btn-sm",
						type: "button",
						onClick: t[6] ||= (...e) => M(n).addPrompt && M(n).addPrompt(...e)
					}, " Add prompt"), z("button", {
						class: "dui-btn dui-btn-secondary dui-btn-sm",
						disabled: M(r),
						type: "button",
						onClick: t[7] ||= (...e) => M(n).save && M(n).save(...e)
					}, " Save library ", 8, Xf)])])
				])
			])) : H("", !0)]),
			_: 1
		}));
	}
});
//#endregion
//#region src/functions/dark-whispers/recipients.ts
function Qf(e) {
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
function $f(e) {
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
//#region src/types/dark-whispers/PromptLibrary.ts
var ep = {
	prompts: [],
	version: 1
};
//#endregion
//#region src/functions/dark-whispers/library.ts
function tp(e) {
	return typeof e == "string" ? e.replace(/\r\n?/g, "\n").replace(/[\t ]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
}
function np(e) {
	if (typeof e != "string") return rp("The Dark Whispers prompt library setting was not serialized text.");
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return rp("The Dark Whispers prompt library contains invalid JSON.");
	}
	if (!Z(t) || t.version !== 1 || !Array.isArray(t.prompts)) return rp("The Dark Whispers prompt library has an unsupported schema.");
	let n = [], r = t.prompts.flatMap((e, t) => {
		let r = ip(e);
		return r ? [r] : (n.push(`Dark Whispers prompt ${t + 1} was invalid and was skipped.`), []);
	}), i = op(t.lastImport);
	return t.lastImport !== void 0 && !i && n.push("The Dark Whispers import record was invalid and was skipped."), {
		library: {
			...i ? { lastImport: i } : {},
			prompts: r,
			version: 1
		},
		warnings: n
	};
}
function rp(e) {
	return {
		library: {
			...ep,
			prompts: []
		},
		warnings: [e]
	};
}
function ip(e) {
	if (!Z(e)) return;
	let t = X(e.id), n = tp(e.text), r = ap(e.source);
	if (!(!t || !n)) return {
		id: t,
		...r ? { source: r } : {},
		text: n
	};
}
function ap(e) {
	if (!Z(e) || e.type !== "gm-toolkit") return;
	let t = X(e.moduleVersion), n = X(e.resultId), r = X(e.tableId);
	return n && r ? {
		...t ? { moduleVersion: t } : {},
		resultId: n,
		tableId: r,
		type: "gm-toolkit"
	} : void 0;
}
function op(e) {
	if (!Z(e)) return;
	let t = e.conflictPolicy, n = $f(e.importedAt), r = Array.isArray(e.resultIds) ? e.resultIds.filter((e) => typeof e == "string") : [], i = X(e.sourceModuleVersion), a = X(e.sourceTableId), o = X(e.sourceTableName);
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
var sp = {
	defaultGroup: "darkWhispersDefaultGroup",
	messageStyle: "darkWhispersMessageStyle",
	promptLibrary: "darkWhispersPromptLibrary"
};
//#endregion
//#region src/module/dark-whispers/settings/load.ts
function cp() {
	return np(game.settings.get(q, sp.promptLibrary));
}
function lp() {
	let e = cp();
	for (let t of e.warnings) console.warn(`${q} | ${t}`);
	return e.library;
}
async function up(e) {
	await game.settings.set(q, sp.promptLibrary, JSON.stringify(e));
}
function dp() {
	let e = game.settings.get(q, sp.defaultGroup), t = game.settings.get(q, sp.messageStyle);
	return {
		defaultGroup: e === "company" ? "company" : "party",
		messageStyle: t === "offer" || t === "plain" ? t : "taunt"
	};
}
async function fp(e) {
	await game.settings.set(q, sp.defaultGroup, e.defaultGroup), await game.settings.set(q, sp.messageStyle, e.messageStyle);
}
//#endregion
//#region src/module/dark-whispers/initialization.ts
function pp() {
	let e = dp(), t = Qf({
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
		prompts: structuredClone(lp().prompts),
		recipients: t,
		settings: e
	};
}
//#endregion
//#region src/module/dark-whispers/service.ts
var mp = {
	save: hp,
	send: gp
};
async function hp(e, t) {
	Y(J.darkWhispersConsole);
	let n = lp(), r = e.flatMap((e) => {
		let t = e.text.trim();
		return t ? [{
			...e,
			id: e.id || crypto.randomUUID(),
			text: t
		}] : [];
	});
	await up({
		...n,
		prompts: r
	}), await fp(t), ui.notifications.info("Dark Whispers settings saved.");
}
async function gp(e) {
	Y(J.darkWhispersConsole);
	let t = e.message.trim();
	if (!t) throw Error("Enter a Dark Whisper message.");
	let n = await kd(e.recipientUuids), r = /* @__PURE__ */ new Set();
	for (let t of n) {
		let n = Array.from(game.users).filter((e) => !e.isGM);
		if (e.sendToOwners) n.filter((e) => Number(t.ownership?.[e.id] ?? 0) >= 3).forEach((e) => r.add(e.id));
		else {
			let e = n.find((e) => e.character?.id === t.id);
			e && r.add(e.id);
		}
	}
	if (r.size === 0) throw Error("The selected characters have no eligible player recipients.");
	let i = bp(foundry.utils.escapeHTML(t), dp().messageStyle) + `<div class="drowsy-dark-whisper-actions" data-prompt="${encodeURIComponent(t)}"><button type="button" data-action="accept">Accept</button><button type="button" data-action="reject">Reject</button></div>`;
	await ChatMessage.create({
		content: i,
		flags: { [q]: { darkWhisper: !0 } },
		flavor: n.map((e) => e.name).join(", "),
		whisper: [...r]
	});
}
function _p() {
	Hooks.on("renderChatMessageHTML", (e, t) => vp(t));
}
function vp(e) {
	let t = e instanceof HTMLElement ? e : e?.[0];
	if (t instanceof HTMLElement) for (let e of t.querySelectorAll(".drowsy-dark-whisper-actions button")) e.addEventListener("click", (t) => {
		t.preventDefault(), yp(e);
	});
}
async function yp(e) {
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
function bp(e, t) {
	return t === "plain" ? `<blockquote>${e}</blockquote>` : t === "offer" ? `<p>A dark power offers you this bargain:</p><blockquote>${e}</blockquote>` : `<p>A dark whisper claws at the edge of your thoughts:</p><blockquote>${e}</blockquote>`;
}
//#endregion
//#region src/module/apps/dark-whispers-console/DarkWhispersConsoleApplication.ts
var xp = class extends Oc {
	static ACCESS_POLICY = J.darkWhispersConsole;
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
			title: `${wc} — Dark Whispers`
		}
	};
	getVueComponent() {
		return Zf;
	}
	getVueProps() {
		return {
			actions: mp,
			initialization: pp()
		};
	}
};
//#endregion
//#region src/module/apps/dark-whispers-console/open.ts
async function Sp() {
	let e = new xp();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/group-test-console/store.ts
var Cp = As("group-test-console", () => {
	let e = /* @__PURE__ */ j([]), t = /* @__PURE__ */ j(), n = /* @__PURE__ */ j([]), r = /* @__PURE__ */ j(""), i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(""), o, s = U(() => e.value.filter((e) => e.selected).map((e) => e.uuid));
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
}), wp = {
	key: 0,
	class: "tw:grid tw:gap-4"
}, Tp = { class: "dui-card dui-card-border tw:bg-base-100!" }, Ep = { class: "dui-card-body tw:p-4" }, Dp = { class: "tw:grid tw:max-h-52 tw:grid-cols-2 tw:gap-2 tw:overflow-auto" }, Op = ["onUpdate:modelValue"], kp = { class: "dui-card dui-card-border tw:bg-base-100!" }, Ap = { class: "dui-card-body tw:grid tw:gap-3 tw:p-4" }, jp = { class: "tw:grid tw:gap-1" }, Mp = { id: "drowsy-group-skills" }, Np = ["value"], Pp = { class: "tw:flex tw:flex-wrap tw:gap-2" }, Fp = ["disabled", "onClick"], Ip = { class: "tw:grid tw:grid-cols-2 tw:gap-3" }, Lp = { class: "tw:grid tw:gap-1" }, Rp = ["value"], zp = { class: "tw:grid tw:gap-1" }, Bp = { class: "tw:grid tw:gap-1" }, Vp = { class: "tw:flex tw:items-center tw:gap-2" }, Hp = { class: "tw:flex tw:items-center tw:gap-2" }, Up = { class: "tw:grid tw:gap-1" }, Wp = { class: "tw:grid tw:grid-cols-2 tw:gap-3" }, Gp = { class: "tw:grid tw:gap-1" }, Kp = { class: "tw:grid tw:gap-1" }, qp = { class: "tw:grid tw:grid-cols-2 tw:gap-2" }, Jp = { class: "tw:text-sm tw:font-medium" }, Yp = ["onUpdate:modelValue"], Xp = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, Zp = { class: "tw:flex tw:gap-2" }, Qp = ["disabled"], $p = ["disabled"], em = /* @__PURE__ */ P({
	__name: "GroupTestConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Cp();
		n.initialize(t.initialization, t.actions);
		let { actors: r, busy: i, errorMessage: a, settings: o, skill: s, skills: c } = js(n);
		return (e, t) => (L(), ua(Qs, {
			description: "Run private WFRP4e tests for a group of actors.",
			icon: "fa-solid fa-dice-d100",
			title: "Secret Group Tests"
		}, {
			default: Xn(() => [M(o) ? (L(), R("div", wp, [z("section", Tp, [z("div", Ep, [t[11] ||= z("h2", { class: "dui-card-title tw:text-base" }, "Actors", -1), z("div", Dp, [(L(!0), R(I, null, F(M(r), (e) => (L(), R("label", {
				key: e.uuid,
				class: "tw:flex tw:items-center tw:gap-2"
			}, [N(z("input", {
				"onUpdate:modelValue": (t) => e.selected = t,
				class: "dui-checkbox dui-checkbox-sm",
				type: "checkbox"
			}, null, 8, Op), [[G, e.selected]]), V(D(e.label), 1)]))), 128))])])]), z("section", kp, [z("div", Ap, [
				z("label", jp, [t[12] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Skill", -1), N(z("input", {
					"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ A(s) ? s.value = e : null,
					class: "dui-input",
					list: "drowsy-group-skills"
				}, null, 512), [[W, M(s)]])]),
				z("datalist", Mp, [(L(!0), R(I, null, F(M(c), (e) => (L(), R("option", {
					key: e,
					value: e
				}, null, 8, Np))), 128))]),
				z("div", Pp, [(L(!0), R(I, null, F(M(o).quickTests, (e) => (L(), R("button", {
					key: e,
					class: "dui-btn dui-btn-outline dui-btn-sm",
					disabled: M(i),
					type: "button",
					onClick: (t) => M(n).run(e)
				}, D(e), 9, Fp))), 128))]),
				z("div", Ip, [
					z("label", Lp, [t[13] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Difficulty", -1), N(z("select", {
						"onUpdate:modelValue": t[1] ||= (e) => M(o).defaultDifficulty = e,
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
					}, D(e), 9, Rp)), 64))], 512), [[zo, M(o).defaultDifficulty]])]),
					z("label", zp, [t[14] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Modifier", -1), N(z("input", {
						"onUpdate:modelValue": t[2] ||= (e) => M(o).defaultModifier = e,
						class: "dui-input dui-input-sm",
						type: "number"
					}, null, 512), [[
						W,
						M(o).defaultModifier,
						void 0,
						{ number: !0 }
					]])]),
					z("label", Bp, [t[16] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Roll mode", -1), N(z("select", {
						"onUpdate:modelValue": t[3] ||= (e) => M(o).defaultRollMode = e,
						class: "dui-select dui-select-sm"
					}, [...t[15] ||= [
						z("option", { value: "blindroll" }, "Blind", -1),
						z("option", { value: "gmroll" }, "Private GM", -1),
						z("option", { value: "selfroll" }, "Self", -1),
						z("option", { value: "publicroll" }, "Public", -1)
					]], 512), [[zo, M(o).defaultRollMode]])])
				]),
				z("label", Vp, [N(z("input", {
					"onUpdate:modelValue": t[4] ||= (e) => M(o).bypassDialog = e,
					class: "dui-toggle dui-toggle-sm",
					type: "checkbox"
				}, null, 512), [[G, M(o).bypassDialog]]), t[17] ||= V(" Bypass each roll dialog", -1)]),
				z("label", Hp, [N(z("input", {
					"onUpdate:modelValue": t[5] ||= (e) => M(o).fallbackAdvanced = e,
					class: "dui-toggle dui-toggle-sm",
					type: "checkbox"
				}, null, 512), [[G, M(o).fallbackAdvanced]]), t[18] ||= V(" Fall back to the characteristic for missing advanced skills", -1)]),
				z("label", Up, [t[19] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Fallback difficulty steps", -1), N(z("input", {
					"onUpdate:modelValue": t[6] ||= (e) => M(o).fallbackDifficultySteps = e,
					class: "dui-input dui-input-sm tw:w-24",
					type: "number"
				}, null, 512), [[
					W,
					M(o).fallbackDifficultySteps,
					void 0,
					{ number: !0 }
				]])]),
				t[24] ||= z("div", { class: "dui-divider tw:my-0" }, "Saved defaults", -1),
				z("div", Wp, [z("label", Gp, [t[21] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Initial actor group", -1), N(z("select", {
					"onUpdate:modelValue": t[7] ||= (e) => M(o).defaultGroup = e,
					class: "dui-select dui-select-sm"
				}, [...t[20] ||= [z("option", { value: "party" }, "Assigned party", -1), z("option", { value: "company" }, "All player-owned characters", -1)]], 512), [[zo, M(o).defaultGroup]])]), z("label", Kp, [
					t[22] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Summary at", -1),
					N(z("input", {
						"onUpdate:modelValue": t[8] ||= (e) => M(o).summaryThreshold = e,
						class: "dui-input dui-input-sm",
						min: "0",
						type: "number"
					}, null, 512), [[
						W,
						M(o).summaryThreshold,
						void 0,
						{ number: !0 }
					]]),
					t[23] ||= z("span", { class: "tw:text-xs tw:text-base-content/60!" }, "0 disables the summary", -1)
				])]),
				z("div", qp, [(L(!0), R(I, null, F(M(o).quickTests, (e, t) => (L(), R("label", {
					key: t,
					class: "tw:grid tw:gap-1"
				}, [z("span", Jp, "Quick test " + D(t + 1), 1), N(z("input", {
					"onUpdate:modelValue": (e) => M(o).quickTests[t] = e,
					class: "dui-input dui-input-sm"
				}, null, 8, Yp), [[W, M(o).quickTests[t]]])]))), 128))]),
				M(a) ? (L(), R("p", Xp, D(M(a)), 1)) : H("", !0),
				z("div", Zp, [z("button", {
					class: "dui-btn dui-btn-primary",
					disabled: M(i),
					type: "button",
					onClick: t[9] ||= (e) => M(n).run()
				}, " Run group test", 8, Qp), z("button", {
					class: "dui-btn dui-btn-secondary",
					disabled: M(i),
					type: "button",
					onClick: t[10] ||= (...e) => M(n).save && M(n).save(...e)
				}, " Save defaults ", 8, $p)])
			])])])) : H("", !0)]),
			_: 1
		}));
	}
}), tm = {
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
function nm() {
	return {
		bypassDialog: im("bypassDialog"),
		defaultDifficulty: om("defaultDifficulty"),
		defaultGroup: om("defaultGroup") === "company" ? "company" : "party",
		defaultModifier: am("defaultModifier"),
		defaultRollMode: om("defaultRollMode"),
		defaultSkill: om("defaultSkill"),
		fallbackAdvanced: im("fallbackAdvanced"),
		fallbackDifficultySteps: am("fallbackDifficultySteps"),
		quickTests: [
			om("quickTest1"),
			om("quickTest2"),
			om("quickTest3"),
			om("quickTest4")
		],
		summaryThreshold: am("summaryThreshold")
	};
}
async function rm(e) {
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
	for (let [e, n] of Object.entries(tm)) await game.settings.set(q, n, t[e]);
}
function im(e) {
	return game.settings.get(q, tm[e]) === !0;
}
function am(e) {
	return Number(game.settings.get("wfrp4e-enhanced-fear-terror", tm[e])) || 0;
}
function om(e) {
	return String(game.settings.get("wfrp4e-enhanced-fear-terror", tm[e]) ?? "");
}
//#endregion
//#region src/module/group-test/skill-catalog.ts
var sm = [];
function cm() {
	return [...sm];
}
async function lm() {
	let e = /* @__PURE__ */ new Set(), t = game;
	for (let n of t.actors) um(n.items, e);
	um(t.items, e);
	for (let n of t.packs) if (!(!n.getIndex || n.metadata?.system !== "wfrp4e" || n.metadata?.type !== "Item")) try {
		um(await n.getIndex({ fields: ["type"] }), e);
	} catch (e) {
		console.warn(`${q} | Could not index WFRP4e skills from a compendium.`, e);
	}
	sm = [...e].sort((e, t) => e.localeCompare(t));
}
function um(e, t) {
	for (let n of e ?? []) n.type === "skill" && n.name && t.add(n.name);
}
//#endregion
//#region src/module/group-test/initialization.ts
function dm() {
	let e = nm();
	return {
		actors: Od({ initial: e.defaultGroup }),
		settings: e,
		skills: cm()
	};
}
//#endregion
//#region src/functions/group-test/fallback.ts
var fm = [
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
function pm(e, t) {
	let n = fm.indexOf(e);
	return n < 0 ? e : fm[Math.max(0, Math.min(fm.length - 1, n + Math.round(t)))];
}
function mm(e, t) {
	let n = gm(e, "system", "advanced", "value") === "adv";
	if (!(n && !t.fallbackAdvanced)) return {
		characteristic: String(gm(e, "system", "characteristic", "value") ?? "int"),
		difficulty: n ? pm(t.difficulty, t.fallbackDifficultySteps) : t.difficulty
	};
}
function hm(e, t, n) {
	return e.has(n) && !t.has(n);
}
function gm(e, ...t) {
	let n = e;
	for (let e of t) {
		if (!n || typeof n != "object") return;
		n = n[e];
	}
	return n;
}
//#endregion
//#region src/module/group-test/service.ts
var _m = /* @__PURE__ */ new Map();
async function vm(e) {
	if (Y(J.groupTestConsole), !e.skill.trim()) throw Error("Choose or enter a skill.");
	if (e.uuids.length === 0) throw Error("Select at least one actor.");
	let t = await kd(e.uuids), n = crypto.randomUUID(), r = t.filter((t) => !e.bypassDialog && ym(t));
	r.length > 0 && Mm();
	let i = t.filter((e) => !r.includes(e)), a = {
		expected: t.length,
		expectedUuids: new Set(t.map(({ uuid: e }) => e)),
		received: /* @__PURE__ */ new Set(),
		skill: e.skill,
		summaries: []
	};
	_m.set(n, a), Om(), r.forEach((t) => bm(n, t.uuid, e));
	for (let t of i) Em(n, await Sm(t, e));
	await Dm(n), r.length > 0 && ui.notifications.info(`Requested ${r.length} private player roll${r.length === 1 ? "" : "s"}.`);
}
function ym(e) {
	return Array.from(game.users).some((t) => t.isGM === !1 && t.active !== !1 && t.character?.id === e.id);
}
function bm(e, t, n) {
	Mm().emit(`module.${q}`, {
		actorUuid: t,
		batchId: e,
		request: n,
		requesterUserId: game.user?.id,
		type: "group-test-request"
	});
}
function xm() {
	Hooks.once("ready", async () => {
		await lm(), Mm().on(`module.${q}`, (e) => void Tm(e));
	});
}
async function Sm(e, t) {
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
		let r = await Cm(t.skill);
		if (!r) throw Error(`Skill “${t.skill}” was not found in WFRP4e content.`);
		let a = mm(r, t);
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
async function Cm(e) {
	let t = game.wfrp4e.utility;
	return t.findSkill ? t.findSkill(e) : void 0;
}
async function wm(e, t) {
	let n = t.map((e) => `<li><strong>${foundry.utils.escapeHTML(e.actor)}</strong>: ${e.succeeded ? "Success" : "Failure"}${e.sl === void 0 ? "" : ` (${e.sl} SL)`}${e.roll === void 0 ? "" : ` — ${e.roll} vs ${e.target ?? "?"}`}</li>`).join(""), r = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id);
	await ChatMessage.create({
		content: `<h3>Secret Group Test: ${foundry.utils.escapeHTML(e)}</h3><ul>${n}</ul>`,
		whisper: r
	});
}
async function Tm(e) {
	if (!e || typeof e != "object") return;
	let t = e;
	if (t.type === "group-test-result") {
		if (!Nm() || !t.batchId || !t.summary || !km(t.summary, t.responderUserId)) return;
		Em(t.batchId, t.summary), await Dm(t.batchId);
		return;
	}
	if (!(t.type !== "group-test-request" || !t.actorUuid || !t.batchId || !t.request || !Am(t.requesterUserId)) && game.user?.character?.uuid === t.actorUuid) {
		let [e] = await kd([t.actorUuid]);
		if (e) {
			let n = await Sm(e, t.request);
			jm({
				batchId: t.batchId,
				responderUserId: game.user?.id,
				summary: n,
				type: "group-test-result"
			});
		}
	}
}
function Em(e, t) {
	let n = _m.get(e);
	!n || !hm(n.expectedUuids, n.received, t.actorUuid) || (n.received.add(t.actorUuid), n.summaries.push(t));
}
async function Dm(e) {
	let t = _m.get(e);
	if (!t || t.received.size < t.expected) return;
	_m.delete(e);
	let n = nm().summaryThreshold;
	n > 0 && t.summaries.length >= n && await wm(t.skill, t.summaries);
}
function Om() {
	for (; _m.size > 20;) {
		let e = _m.keys().next().value;
		if (typeof e == "string") _m.delete(e);
		else return;
	}
}
function km(e, t) {
	if (!t || typeof e.actorUuid != "string") return !1;
	let n = Array.from(game.users).find((e) => e.id === t), r = n?.character?.uuid;
	return n?.isGM === !1 && r === e.actorUuid;
}
function Am(e) {
	if (!e) return !1;
	let t = Array.from(game.users).find((t) => t.id === e);
	return t?.isGM === !0 && t.active !== !1;
}
function jm(e) {
	Mm().emit(`module.${q}`, e);
}
function Mm() {
	let e = game.socket;
	if (!e) throw Error("Foundry socket services are unavailable for delegated group tests.");
	return e;
}
function Nm() {
	return game.user?.isGM === !0 && game.user.isUniqueGM !== !1;
}
//#endregion
//#region src/module/apps/group-test-console/GroupTestConsoleApplication.ts
var Pm = class extends Oc {
	static ACCESS_POLICY = J.groupTestConsole;
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
			title: `${wc} — Secret Group Tests`
		}
	};
	getVueComponent() {
		return em;
	}
	getVueProps() {
		return {
			actions: {
				runGroupTest: vm,
				saveSettings: rm
			},
			initialization: dm()
		};
	}
};
//#endregion
//#region src/module/apps/group-test-console/open.ts
async function Fm() {
	let e = new Pm();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/token-tools-console/store.ts
var Im = As("token-tools-console", () => {
	let e = /* @__PURE__ */ j(0), t = /* @__PURE__ */ j(), n = /* @__PURE__ */ j("normal"), r = /* @__PURE__ */ j("none"), i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(""), o;
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
}), Lm = { class: "tw:grid tw:gap-4" }, Rm = { class: "dui-alert dui-alert-info tw:m-0" }, zm = { class: "dui-card dui-card-border tw:bg-base-100!" }, Bm = { class: "dui-card-body tw:grid tw:gap-3 tw:p-4" }, Vm = { class: "tw:grid tw:gap-1" }, Hm = { class: "tw:grid tw:gap-1" }, Um = ["value"], Wm = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-0"
}, Gm = ["disabled"], Km = {
	key: 0,
	class: "dui-collapse dui-collapse-arrow dui-card dui-card-border tw:bg-base-100!"
}, qm = { class: "dui-collapse-content tw:grid tw:grid-cols-2 tw:gap-3" }, Jm = { class: "tw:grid tw:gap-1" }, Ym = { class: "tw:grid tw:gap-1" }, Xm = { class: "tw:flex tw:items-center tw:gap-2" }, Zm = { class: "tw:flex tw:items-center tw:gap-2" }, Qm = ["disabled"], $m = /* @__PURE__ */ P({
	__name: "TokenToolsConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Im();
		n.initialize(t.initialization, t.actions);
		let { busy: r, controlledCount: i, errorMessage: a, light: o, settings: s, vision: c } = js(n), l = [
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
		return (e, t) => (L(), ua(Qs, {
			description: "Set vision and light for the controlled tokens.",
			icon: "fa-solid fa-eye",
			title: "Token Vision & Light"
		}, {
			default: Xn(() => [z("div", Lm, [
				z("p", Rm, D(M(i)) + " controlled token" + D(M(i) === 1 ? "" : "s"), 1),
				z("section", zm, [z("div", Bm, [
					z("label", Vm, [t[9] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Vision", -1), N(z("select", {
						"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ A(c) ? c.value = e : null,
						class: "dui-select"
					}, [...t[8] ||= [
						z("option", { value: "normal" }, "Normal", -1),
						z("option", { value: "blinded" }, "Blinded", -1),
						z("option", { value: "night" }, "Night Vision", -1),
						z("option", { value: "dark" }, "Dark Vision", -1),
						z("option", { value: "none" }, "No vision", -1)
					]], 512), [[zo, M(c)]])]),
					z("label", Hm, [t[10] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Light source", -1), N(z("select", {
						"onUpdate:modelValue": t[1] ||= (e) => /* @__PURE__ */ A(o) ? o.value = e : null,
						class: "dui-select"
					}, [(L(), R(I, null, F(l, (e) => z("option", {
						key: e.v,
						value: e.v
					}, D(e.l), 9, Um)), 64))], 512), [[zo, M(o)]])]),
					M(a) ? (L(), R("p", Wm, D(M(a)), 1)) : H("", !0),
					z("button", {
						class: "dui-btn dui-btn-primary",
						disabled: M(r),
						type: "button",
						onClick: t[2] ||= (...e) => M(n).apply && M(n).apply(...e)
					}, " Apply to controlled tokens ", 8, Gm)
				])]),
				M(s) ? (L(), R("section", Km, [
					t[15] ||= z("input", { type: "checkbox" }, null, -1),
					t[16] ||= z("div", { class: "dui-collapse-title tw:font-semibold" }, "Vision defaults", -1),
					z("div", qm, [
						z("label", Jm, [t[11] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Normal range", -1), N(z("input", {
							"onUpdate:modelValue": t[3] ||= (e) => M(s).normalRange = e,
							class: "dui-input dui-input-sm",
							min: "0",
							type: "number"
						}, null, 512), [[
							W,
							M(s).normalRange,
							void 0,
							{ number: !0 }
						]])]),
						z("label", Ym, [t[12] ||= z("span", { class: "tw:text-sm tw:font-medium" }, "Dark Vision range", -1), N(z("input", {
							"onUpdate:modelValue": t[4] ||= (e) => M(s).darkRange = e,
							class: "dui-input dui-input-sm",
							min: "0",
							type: "number"
						}, null, 512), [[
							W,
							M(s).darkRange,
							void 0,
							{ number: !0 }
						]])]),
						z("label", Xm, [N(z("input", {
							"onUpdate:modelValue": t[5] ||= (e) => M(s).overrideNightVision = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, M(s).overrideNightVision]]), t[13] ||= V("Allow Night Vision override", -1)]),
						z("label", Zm, [N(z("input", {
							"onUpdate:modelValue": t[6] ||= (e) => M(s).overrideDarkVision = e,
							class: "dui-toggle dui-toggle-sm",
							type: "checkbox"
						}, null, 512), [[G, M(s).overrideDarkVision]]), t[14] ||= V("Allow Dark Vision override", -1)]),
						z("button", {
							class: "dui-btn dui-btn-secondary dui-btn-sm tw:w-fit",
							disabled: M(r),
							type: "button",
							onClick: t[7] ||= (...e) => M(n).save && M(n).save(...e)
						}, " Save defaults ", 8, Qm)
					])
				])) : H("", !0)
			])]),
			_: 1
		}));
	}
}), eh = {
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
}, th = {
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
function nh(e, t = 0) {
	return e === "none" ? structuredClone(eh) : rh(e === "pha" ? {
		alpha: .6,
		bright: t,
		color: "#ffddbb",
		dim: t,
		animation: {
			intensity: 2,
			speed: 2,
			type: "sunburst"
		}
	} : th[e]);
}
function rh(e) {
	return {
		...structuredClone(eh),
		...e,
		animation: {
			...eh.animation,
			...e.animation
		},
		darkness: {
			...eh.darkness,
			...e.darkness
		}
	};
}
//#endregion
//#region src/functions/token-tools/vision.ts
function ih(e, t, n) {
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
var ah = {
	darkRange: "visionDarkRange",
	normalRange: "visionNormalRange",
	overrideDarkVision: "visionOverrideDark",
	overrideNightVision: "visionOverrideNight"
};
//#endregion
//#region src/module/token-tools/settings/load.ts
function oh() {
	return {
		darkRange: ch("darkRange"),
		normalRange: ch("normalRange"),
		overrideDarkVision: lh("overrideDarkVision"),
		overrideNightVision: lh("overrideNightVision")
	};
}
async function sh(e) {
	let t = {
		...e,
		darkRange: Math.max(0, Math.round(e.darkRange)),
		normalRange: Math.max(0, Math.round(e.normalRange))
	};
	for (let [e, n] of Object.entries(ah)) await game.settings.set(q, n, t[e]);
}
function ch(e) {
	let t = Number(game.settings.get(q, ah[e]));
	if (!Number.isFinite(t)) throw Error(`The saved Token Tools setting “${ah[e]}” is not a number.`);
	return t;
}
function lh(e) {
	return game.settings.get(q, ah[e]) === !0;
}
//#endregion
//#region src/module/token-tools/service.ts
async function uh(e) {
	Y(J.tokenToolsConsole);
	let t = canvas?.tokens?.controlled ?? [];
	if (t.length === 0) throw Error("Select at least one token.");
	let n = 0, r = [];
	for (let i of t) try {
		let t = Number(i.actor?.system.characteristics?.wp?.bonus ?? 0), r = nh(e.light, t);
		await i.document.update({
			light: r,
			sight: ih(e.vision, oh(), {
				hasDarkVision: dh(i.actor, "NAME.DarkVision", "trait"),
				lightRange: r.dim,
				nightVisionAdvances: fh(i.actor),
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
function dh(e, t, n) {
	return !!e?.has(game.i18n.localize(t), n);
}
function fh(e) {
	let t = game.i18n.localize("NAME.NightVision"), n = e?.has(t, "trait") || e?.has(t, "talent");
	return n ? Math.max(1, Number(n.system?.advances?.value ?? 1)) : 0;
}
//#endregion
//#region src/module/apps/token-tools-console/TokenToolsConsoleApplication.ts
var ph = class extends Oc {
	static ACCESS_POLICY = J.tokenToolsConsole;
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
			title: `${wc} — Token Vision & Light`
		}
	};
	getVueComponent() {
		return $m;
	}
	getVueProps() {
		let e = (canvas?.tokens?.controlled ?? []).length;
		return {
			actions: {
				apply: uh,
				saveSettings: sh
			},
			initialization: {
				controlledCount: e,
				settings: oh()
			}
		};
	}
};
//#endregion
//#region src/module/apps/token-tools-console/open.ts
async function mh() {
	let e = new ph();
	return await e.render(!0), e;
}
//#endregion
//#region src/functions/gm-toolkit/content-selection.ts
function hh(e, t) {
	return e.candidates.find((e) => e.tableId === t);
}
function gh(e, t) {
	let n = hh(e, t);
	return Object.fromEntries((n?.prompts ?? []).map((e) => [e.resultId, e.comparison === "new"]));
}
function _h(e) {
	return Object.entries(e).flatMap(([e, t]) => t ? [e] : []);
}
//#endregion
//#region src/functions/gm-toolkit/launcher-catalog.ts
var vh = {
	AjUYYy7qAN55BERN: bh("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	rzKeTLKp0bOp5SK9: bh("Use Drowsy’s XP Award Console.", "aW4rD8xP2cN7sL5q", "Open XP Award Console"),
	GfXvMqsynxpHTYPt: bh("Use Drowsy’s toolkit home.", "tK8hM3pQ6vR2nW5x", "Open Drowsy’s WFRP4e Toolkit"),
	PsZADfqRKnbnAT5Q: bh("Use Drowsy’s grid-scale utility.", "DrowsyGridScale1", "Change Grid Scale (Preserve Lighting)"),
	vUzIl1uDkykO5DmG: bh("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	"6EKiEQZTbmQN97Vr": bh("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	xU8TFHu98zX5isb0: bh("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	iopoLXTz9kfDTfiX: bh("Use Drowsy’s toolkit home.", "tK8hM3pQ6vR2nW5x", "Open Drowsy’s WFRP4e Toolkit"),
	hLEsIrMsOYQROnl5: bh("Use Drowsy’s toolkit home and feature consoles.", "tK8hM3pQ6vR2nW5x", "Open Drowsy’s WFRP4e Toolkit"),
	"74OvSfTs3slii0RR": bh("Use Drowsy’s Damage Console.", "DrowsyDamage001X", "Open Damage Console"),
	wN47JNwM2POBSUUm: bh("Use Drowsy’s Secret Group Tests.", "DrowsyGroupT001X", "Open Secret Group Tests"),
	tiKEfs1nB7zAMgYg: bh("Use Drowsy’s Pull Everyone action.", "DrowsyPull00001X", "Pull Everyone to Scene"),
	"2sefSFqqAbySw2nz": bh("Use Drowsy’s Combat Console.", "DrowsyCombat001X", "Open Combat Console"),
	pZmPtsEZHOpyJfnq: bh("Use Drowsy’s Reset Fortune action.", "DrowsyFortune01X", "Reset Fortune"),
	roGO31Lo4pyL5kvg: bh("Use Drowsy’s Dark Whispers Console.", "DrowsyWhisper01X", "Open Dark Whispers"),
	WcBTP5xRO9jcJMVa: bh("Use Drowsy’s Session Management Console.", "sE5sN8mG2cT7rV4q", "Open Session Management Console"),
	g9Wohpie7ODdbRKX: bh("Use Drowsy’s resumable Session Turnover workflow.", "sE5sN8mG2cT7rV4q", "Open Session Management Console"),
	DGYdRmtbMZ81NmQ3: bh("Use Drowsy’s Token Vision & Light Console.", "DrowsyVision001X", "Open Token Vision & Light"),
	nvqeTARBoSP89WT5: bh("Use Drowsy’s Administration Console.", "DrowsyAdmin0001X", "Open Administration Console"),
	OiQ0cS3QsmQadxqR: bh("Use Drowsy’s Administration Console.", "DrowsyAdmin0001X", "Open Administration Console")
}, yh = [
	xh("AjUYYy7qAN55BERN", "Add Advantage", 317, "f46c0d0e"),
	xh("rzKeTLKp0bOp5SK9", "Add XP", 7054, "3e94af4e"),
	xh("GfXvMqsynxpHTYPt", "Canvas Toolbox", 3515, "1b42131d"),
	xh("PsZADfqRKnbnAT5Q", "Change Scene to Yards", 628, "bc14705a"),
	xh("vUzIl1uDkykO5DmG", "Check Conditions", 5830, "56693f0a"),
	xh("6EKiEQZTbmQN97Vr", "Clear Advantage", 279, "e3cda086"),
	xh("xU8TFHu98zX5isb0", "Combat Toolbox", 3509, "cd02aee7"),
	xh("iopoLXTz9kfDTfiX", "GM Toolbox", 3465, "ebccaef2"),
	xh("hLEsIrMsOYQROnl5", "GM Toolkit Settings", 3252, "bda29fbb"),
	xh("74OvSfTs3slii0RR", "Launch Damage Console", 278, "70bf6804"),
	xh("wN47JNwM2POBSUUm", "Make Secret Group Test", 3093, "a0d1c8f8"),
	xh("tiKEfs1nB7zAMgYg", "Pull Everyone to Scene", 2525, "b21938a7"),
	xh("2sefSFqqAbySw2nz", "Reduce Advantage", 285, "12053b38"),
	xh("pZmPtsEZHOpyJfnq", "Reset Fortune", 1854, "b87bc4f5"),
	xh("roGO31Lo4pyL5kvg", "Send Dark Whispers", 7400, "f05c3d43"),
	xh("WcBTP5xRO9jcJMVa", "Session Toolbox", 3501, "17ab0783"),
	xh("g9Wohpie7ODdbRKX", "Session Turnover", 3100, "bd85a21d"),
	xh("DGYdRmtbMZ81NmQ3", "Set Token Vision and Light", 13595, "c6c8d6c8"),
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
	xh("nvqeTARBoSP89WT5", "Toggle Compendium Pack Visibility", 2752, "f921858d"),
	xh("OiQ0cS3QsmQadxqR", "Toggle Scene Visibility and Light", 845, "1562d17a")
];
function bh(e, t, n) {
	return {
		label: e,
		macroId: t,
		macroName: n
	};
}
function xh(e, t, n, r) {
	return {
		commandFingerprint: r,
		commandLength: n,
		id: e,
		name: t,
		replacement: {
			disposition: "ready",
			...vh[e]
		}
	};
}
//#endregion
//#region src/functions/gm-toolkit/launchers.ts
var Sh = "wfrp4e-gm-toolkit.gm-toolkit-macros", Ch = "wfrp4e-enhanced-fear-terror.macros", wh = {
	DrowsyGridScale1: {
		fingerprint: "9476a7a4",
		length: 756
	},
	aW4rD8xP2cN7sL5q: {
		fingerprint: "795a9a75",
		length: 680
	}
};
function Th(e, t, n = {}) {
	let r = e.flatMap((e) => Ah(e, t)), i = r.filter(Eh).flatMap(({ hotbarSlots: e }) => e).filter((e, t, n) => n.indexOf(e) === t).sort((e, t) => e - t);
	return {
		candidates: r,
		counts: Mh(r),
		remappableSlots: i,
		...n.id ? { userId: n.id } : {},
		...n.name ? { userName: n.name } : {},
		version: 1,
		warnings: n.id ? [] : ["The current user was unavailable, so hotbar assignments could not be reviewed."]
	};
}
function Eh(e) {
	return e.match === "standard" && e.replacement.disposition === "ready" && e.hotbarSlots.length > 0;
}
function Dh(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t = Math.imul(t ^ e.charCodeAt(n), 16777619) >>> 0;
	return t.toString(16).padStart(8, "0");
}
function Oh(e, t) {
	return !!(e && e.includes(Ch) && e.endsWith(t));
}
function kh(e, t) {
	let n = wh[t];
	return !!(e && n && Oh(e.compendiumSource, t) && e.command.length === n.length && Dh(e.command) === n.fingerprint);
}
function Ah(e, t) {
	let n = yh.find(({ id: t }) => e.compendiumSource?.includes(Sh) === !0 && e.compendiumSource.endsWith(t)), r = yh.find(({ id: t }) => t === e.id), i = yh.find(({ name: t }) => t === e.name), a = n ?? r ?? i;
	if (!a) return [];
	let o = n ? "source" : r ? "document-id" : "name", s = jh(a, e.command) ? "standard" : o === "name" ? "ambiguous" : "customized";
	return [{
		confidence: o,
		hotbarSlots: [...t.get(e.id) ?? []].sort((e, t) => e - t),
		macroId: e.id,
		macroName: e.name,
		match: s,
		replacement: {
			compendiumId: Ch,
			...a.replacement
		},
		sourceMacroId: a.id,
		sourceMacroName: a.name
	}];
}
function jh(e, t) {
	return t.length === e.commandLength && Dh(t) === e.commandFingerprint;
}
function Mh(e) {
	return {
		ambiguous: e.filter(({ match: e }) => e === "ambiguous").length,
		customized: e.filter(({ match: e }) => e === "customized").length,
		standard: e.filter(({ match: e }) => e === "standard").length
	};
}
//#endregion
//#region src/functions/gm-toolkit/launcher-selection.ts
function Nh(e) {
	return Object.fromEntries((e?.remappableSlots ?? []).map((e) => [e, !0]));
}
function Ph(e) {
	return Object.entries(e).filter(([, e]) => e).map(([e]) => Number(e)).filter((e) => Number.isInteger(e)).sort((e, t) => e - t);
}
function Fh(e, t) {
	return Array.from(new Set(t)).filter((e) => Number.isInteger(e) && e >= 1 && e <= 50).flatMap((t) => {
		let n = e.candidates.find((e) => e.hotbarSlots.includes(t) && Eh(e));
		return n?.replacement.macroId ? [{
			macroId: n.replacement.macroId,
			slot: t
		}] : [];
	});
}
//#endregion
//#region src/functions/gm-toolkit/selection.ts
function Ih(e) {
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
function Lh(e, t) {
	let n = Object.fromEntries((e?.imports ?? []).map(({ field: e }) => [e, !1]));
	if (t) for (let t of e?.imports ?? []) n[t.field] = t.comparison !== "same";
	return n;
}
function Rh(e) {
	return Object.entries(e).filter(([, e]) => e).map(([e]) => e);
}
function zh(e, t) {
	let n = Ih(e);
	if (!n) return;
	let r = new Set(t);
	for (let e of n.imports) r.has(e.field) && (e.currentValue = e.sourceValue, e.comparison = "same");
	return n;
}
//#endregion
//#region src/state/apps/gm-toolkit-migration/store.ts
var Bh = As("gm-toolkit-migration", () => {
	let e = /* @__PURE__ */ j({ version: 1 }), t = /* @__PURE__ */ j(), n = /* @__PURE__ */ j(), r = /* @__PURE__ */ j(Lh(void 0, !1)), i = /* @__PURE__ */ j(""), a = /* @__PURE__ */ j({}), o = /* @__PURE__ */ j("preserve"), s = /* @__PURE__ */ j({}), c = /* @__PURE__ */ j(), l = /* @__PURE__ */ j(), u = /* @__PURE__ */ j(!1), d;
	function f(i, a) {
		d = a, e.value = { ...i.state }, t.value = Ih(i.preview), n.value = i.cutoverReport, r.value = Lh(t.value, i.state.migration === void 0), x(), ee(), c.value = void 0, l.value = void 0;
	}
	async function p() {
		await te(async () => {
			let n = Rh(r.value), i = await w().importSettings({ fields: n });
			e.value.migration = i, t.value = zh(t.value, i.appliedFields ?? []), r.value = Lh(t.value, !1), S(), l.value = `${n.length} setting${n.length === 1 ? "" : "s"} imported.`;
		});
	}
	async function m() {
		await te(async () => {
			let e = await w().importDarkWhispers({
				conflictPolicy: o.value,
				resultIds: _h(a.value),
				tableId: i.value
			});
			t.value = Ih(e.preview), x(), ee(), S(), l.value = `${e.added} prompt${e.added === 1 ? "" : "s"} added, ${e.replaced} replaced, and ${e.skipped} unchanged.`;
		});
	}
	async function h() {
		await te(async () => {
			let e = await w().remapLaunchers({ slots: Ph(s.value) });
			t.value &&= {
				...t.value,
				launchers: e.preview
			}, ee(), S(), l.value = `${e.remappedSlots} hotbar slot${e.remappedSlots === 1 ? "" : "s"} updated.`;
		});
	}
	async function g() {
		await te(async () => {
			let t = await w().reviewCutover();
			e.value.cutoverReview = t.review, n.value = t.report, l.value = "Review saved.";
		});
	}
	function _(e, t) {
		r.value[e] = t;
	}
	function v(e) {
		i.value = e, a.value = gh(C(), e);
	}
	function y(e, t) {
		a.value[e] = t;
	}
	function b(e, t) {
		s.value[e] = t;
	}
	function x() {
		let e = C(), t = e.recommendedTableId ?? e.candidates[0]?.tableId ?? "";
		i.value = t, a.value = gh(e, t), o.value = "preserve";
	}
	function ee() {
		s.value = Nh(t.value?.launchers);
	}
	function S() {
		n.value = w().getCutoverReport();
	}
	function C() {
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
	function w() {
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
}), Vh = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-secondary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-content-title"
}, Hh = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Uh = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Wh = { class: "tw:min-w-0 tw:flex-1" }, Gh = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, Kh = { class: "dui-badge dui-badge-sm" }, qh = ["disabled"], Jh = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Yh = {
	key: 1,
	class: "fa-solid fa-file-import",
	"aria-hidden": "true"
}, Xh = {
	key: 0,
	class: "tw:grid tw:gap-3 tw:min-[42rem]:grid-cols-2"
}, Zh = { class: "tw:grid tw:min-w-0 tw:gap-1" }, Qh = ["value"], $h = ["value"], eg = {
	key: 0,
	class: "tw:grid tw:min-w-0 tw:gap-1"
}, tg = ["value"], ng = {
	key: 1,
	class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, rg = { class: "dui-table dui-table-sm tw:min-w-[42rem]" }, ig = { class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2" }, ag = ["checked", "onChange"], og = { class: "tw:sr-only" }, sg = { class: "tw:tabular-nums" }, cg = {
	class: "tw:max-w-md tw:whitespace-normal",
	scope: "row"
}, lg = { class: "dui-badge dui-badge-sm" }, ug = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, dg = /* @__PURE__ */ P({
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
		let n = e, r = t, i = U(() => hh(n.preview, n.selectedTableId)), a = U(() => Object.values(n.selections).filter((e) => e).length), o = U(() => i.value?.prompts.some((e) => e.comparison === "conflict"));
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
		return (t, n) => (L(), R("section", Vh, [z("div", Hh, [
			z("div", Uh, [z("div", Wh, [z("div", Gh, [n[1] ||= z("h2", {
				id: "gm-toolkit-content-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Dark Whispers prompts ", -1), z("span", Kh, D(e.preview.currentPromptCount) + " in Drowsy library ", 1)]), n[2] ||= z("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " Copy selected prompt text into Drowsy-owned world data. The original RollTable remains unchanged. ", -1)]), z("button", {
				class: "dui-btn dui-btn-sm tw:border-secondary! tw:text-base-content!",
				disabled: e.isWorking || a.value === 0 || !i.value,
				type: "button",
				onClick: n[0] ||= (e) => r("import")
			}, [e.isWorking ? (L(), R("span", Jh)) : (L(), R("i", Yh)), V(" Import " + D(a.value || "selected") + " prompts ", 1)], 8, qh)]),
			e.preview.candidates.length ? (L(), R("div", Xh, [z("label", Zh, [n[3] ||= z("span", { class: "tw:text-sm tw:font-semibold" }, "Source RollTable", -1), z("select", {
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
				value: e.selectedTableId,
				onChange: l
			}, [(L(!0), R(I, null, F(e.preview.candidates, (e) => (L(), R("option", {
				key: e.tableId,
				value: e.tableId
			}, D(e.tableName) + " — " + D(e.prompts.length) + " prompts ", 9, $h))), 128))], 40, Qh)]), o.value ? (L(), R("label", eg, [n[5] ||= z("span", { class: "tw:text-sm tw:font-semibold" }, "Changed imported prompts", -1), z("select", {
				class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
				value: e.conflictPolicy,
				onChange: u
			}, [...n[4] ||= [z("option", { value: "preserve" }, "Keep Drowsy version", -1), z("option", { value: "replace" }, "Replace with source version", -1)]], 40, tg)])) : H("", !0)])) : H("", !0),
			i.value ? (L(), R("div", ng, [z("table", rg, [n[6] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Import"),
				z("th", { scope: "col" }, "Roll"),
				z("th", { scope: "col" }, "Prompt text"),
				z("th", { scope: "col" }, "Comparison")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(i.value.prompts, (t) => (L(), R("tr", { key: t.resultId }, [
				z("td", null, [z("label", ig, [z("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: e.selections[t.resultId],
					type: "checkbox",
					onChange: (e) => c(t.resultId, e)
				}, null, 40, ag), z("span", og, "Import Dark Whispers prompt " + D(t.range), 1)])]),
				z("td", sg, D(t.range), 1),
				z("th", cg, D(t.text), 1),
				z("td", null, [z("span", lg, D(s(t.comparison)), 1)])
			]))), 128))])])])) : (L(), R("div", ug, [...n[7] ||= [z("i", {
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
			}, null, -1), z("span", null, D(e), 1)]))), 128))
		])]));
	}
});
//#endregion
//#region src/functions/gm-toolkit/cutover-display.ts
function fg(e) {
	return {
		"already-matched": "Already matched",
		"changed-after-import": "Changed after import",
		imported: "Imported",
		"not-imported": "Not imported"
	}[e];
}
function pg(e) {
	return e === "standard" ? "Stock macro" : e === "customized" ? "Customized" : "Check manually";
}
function mg(e) {
	return e.source.evidence === "current" ? e.source.active ? "Active module" : "Current world data" : e.source.evidence === "saved-snapshot" ? "Saved import snapshot" : "World documents";
}
//#endregion
//#region src/view/apps/gm-toolkit-migration/GmToolkitCutoverReportPanel.vue?vue&type=script&setup=true&lang.ts
var hg = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-accent/50! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-cutover-title"
}, gg = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, _g = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, vg = { class: "tw:min-w-0 tw:flex-1" }, yg = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, bg = { class: "tw:grid tw:min-w-0 tw:gap-2 tw:min-[38rem]:grid-cols-3" }, xg = { class: "dui-stat tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3" }, Sg = { class: "dui-stat-value tw:text-2xl" }, Cg = { class: "dui-stat-desc tw:truncate" }, wg = { class: "dui-stat tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3" }, Tg = { class: "dui-stat-value tw:text-2xl" }, Eg = { class: "dui-stat-desc" }, Dg = { class: "dui-stat tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3" }, Og = { class: "dui-stat-value tw:text-2xl" }, kg = { class: "dui-stat-desc" }, Ag = { class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-content/20!" }, jg = { class: "dui-collapse-content tw:min-w-0 tw:px-3 tw:pb-3" }, Mg = { class: "tw:mb-2 tw:flex tw:flex-wrap tw:gap-1" }, Ng = { class: "dui-badge dui-badge-sm" }, Pg = {
	key: 0,
	class: "dui-badge dui-badge-sm"
}, Fg = { class: "dui-badge dui-badge-sm" }, Ig = { class: "dui-badge dui-badge-sm" }, Lg = { class: "dui-badge dui-badge-sm" }, Rg = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/15!" }, zg = { class: "dui-table dui-table-sm tw:min-w-[38rem]" }, Bg = { scope: "row" }, Vg = { class: "tw:max-w-52 tw:break-words" }, Hg = { class: "tw:max-w-52 tw:break-words" }, Ug = { class: "dui-badge dui-badge-sm" }, Wg = { class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-content/20!" }, Gg = { class: "dui-collapse-content tw:grid tw:gap-2 tw:px-3 tw:pb-3" }, Kg = { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, qg = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Jg = { class: "dui-badge dui-badge-success dui-badge-sm" }, Yg = { class: "dui-badge dui-badge-sm" }, Xg = { class: "dui-badge dui-badge-warning dui-badge-sm" }, Zg = { class: "dui-badge dui-badge-warning dui-badge-sm" }, Qg = {
	key: 0,
	class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-content/20!",
	open: ""
}, $g = { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:font-semibold" }, e_ = { class: "dui-collapse-content tw:min-w-0 tw:px-3 tw:pb-3" }, t_ = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/15!" }, n_ = { class: "dui-table dui-table-sm tw:min-w-[44rem]" }, r_ = { scope: "row" }, i_ = { class: "tw:max-w-md tw:whitespace-normal" }, a_ = {
	key: 2,
	class: "tw:grid tw:gap-3 tw:rounded-box tw:border tw:border-warning/50! tw:bg-warning/10! tw:p-3"
}, o_ = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
	role: "alert"
}, s_ = { class: "tw:flex tw:cursor-pointer tw:items-start tw:gap-3" }, c_ = ["disabled"], l_ = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, u_ = {
	key: 1,
	class: "fa-solid fa-clipboard-check",
	"aria-hidden": "true"
}, d_ = {
	key: 1,
	class: "dui-alert dui-alert-success",
	role: "status"
}, f_ = /* @__PURE__ */ P({
	__name: "GmToolkitCutoverReportPanel",
	props: {
		isWorking: { type: Boolean },
		report: {},
		review: {}
	},
	emits: ["review"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(!1), a = U(() => !!(n.report && n.review?.evidenceId === n.report.evidenceId)), o = U(() => a.value && n.report?.replacement.ready === !0 && n.report.combat.active === !1), s = U(() => a.value ? o.value ? "Reviewed — ready to disable" : n.report?.replacement.ready === !1 ? "Keep GM Toolkit enabled" : "Reviewed — combat active" : "Review required");
		return ir(() => n.report?.evidenceId, () => i.value = !1), (t, n) => (L(), R("section", hg, [z("div", gg, [z("div", _g, [z("div", vg, [z("div", yg, [n[2] ||= z("h2", {
			id: "gm-toolkit-cutover-title",
			class: "dui-card-title tw:font-serif tw:text-lg"
		}, " Before you disable GM Toolkit ", -1), z("span", { class: E(["dui-badge dui-badge-sm", o.value ? "dui-badge-success" : "dui-badge-warning"]) }, D(s.value), 3)])])]), e.report ? (L(), R(I, { key: 0 }, [
			z("div", bg, [
				z("div", xg, [
					n[3] ||= z("div", { class: "dui-stat-title tw:text-xs" }, "Settings found", -1),
					z("div", Sg, D(e.report.settings.total), 1),
					z("div", Cg, D(M(mg)(e.report)), 1)
				]),
				z("div", wg, [
					n[4] ||= z("div", { class: "dui-stat-title tw:text-xs" }, "Source prompts", -1),
					z("div", Tg, D(e.report.content.sourcePromptCount), 1),
					z("div", Eg, D(e.report.content.currentPromptCount) + " in Drowsy", 1)
				]),
				z("div", Dg, [
					n[5] ||= z("div", { class: "dui-stat-title tw:text-xs" }, "Detected launchers", -1),
					z("div", Og, D(e.report.launchers.detectedMacros), 1),
					z("div", kg, D(e.report.launchers.unresolved.length) + " need review", 1)
				])
			]),
			(L(!0), R(I, null, F(e.report.notices, (e) => (L(), R("div", {
				key: `${e.code}:${e.message}`,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[6] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", null, D(e.message), 1)]))), 128)),
			z("details", Ag, [n[8] ||= z("summary", { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:font-semibold" }, "Settings", -1), z("div", jg, [z("div", Mg, [
				z("span", Ng, D(e.report.settings.dispositionCounts.import) + " can be imported ", 1),
				e.report.settings.dispositionCounts.pending ? (L(), R("span", Pg, D(e.report.settings.dispositionCounts.pending) + " not transferred ", 1)) : H("", !0),
				z("span", Fg, D(e.report.settings.dispositionCounts.supersede) + " handled another way ", 1),
				z("span", Ig, D(e.report.settings.dispositionCounts.retire) + " not needed ", 1),
				z("span", Lg, D(e.report.settings.dispositionCounts.skip) + " ignored ", 1)
			]), z("div", Rg, [z("table", zg, [n[7] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Value"),
				z("th", { scope: "col" }, "Source"),
				z("th", { scope: "col" }, "Drowsy"),
				z("th", { scope: "col" }, "Outcome")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(e.report.settings.items, (e) => (L(), R("tr", { key: e.field }, [
				z("th", Bg, D(e.label), 1),
				z("td", Vg, D(e.sourceValue), 1),
				z("td", Hg, D(e.currentValue), 1),
				z("td", null, [z("span", Ug, D(M(fg)(e.status)), 1)])
			]))), 128))])])])])]),
			z("details", Wg, [n[9] ||= z("summary", { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:font-semibold" }, " Dark Whispers content ", -1), z("div", Gg, [z("p", Kg, D(e.report.content.sourceTableName || "No source table detected"), 1), z("div", qg, [
				z("span", Jg, D(e.report.content.comparisonCounts.same) + " imported ", 1),
				z("span", Yg, D(e.report.content.comparisonCounts.duplicate) + " duplicates ", 1),
				z("span", Xg, D(e.report.content.comparisonCounts.new) + " new ", 1),
				z("span", Zg, D(e.report.content.comparisonCounts.conflict) + " changed ", 1)
			])])]),
			e.report.launchers.unresolved.length ? (L(), R("details", Qg, [z("summary", $g, " Launchers to check (" + D(e.report.launchers.unresolved.length) + ") ", 1), z("div", e_, [z("div", t_, [z("table", n_, [n[10] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Macro"),
				z("th", { scope: "col" }, "Match"),
				z("th", { scope: "col" }, "Hotbar"),
				z("th", { scope: "col" }, "Drowsy outcome")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(e.report.launchers.unresolved, (e) => (L(), R("tr", { key: e.macroId }, [
				z("th", r_, D(e.macroName), 1),
				z("td", null, D(M(pg)(e.match)), 1),
				z("td", null, D(e.hotbarSlots.length ? e.hotbarSlots.join(", ") : "None"), 1),
				z("td", i_, D(e.outcome), 1)
			]))), 128))])])])])])) : H("", !0),
			a.value ? (L(), R("div", {
				key: 1,
				class: E(["dui-alert", o.value ? "dui-alert-success" : "dui-alert-warning"]),
				role: "status"
			}, [z("i", {
				class: E(o.value ? "fa-solid fa-circle-check" : "fa-solid fa-shield-halved"),
				"aria-hidden": "true"
			}, null, 2), z("span", null, [V(" Reviewed by " + D(e.review?.reviewedByUserName) + " on " + D(new Date(e.review.reviewedAt).toLocaleString()) + ". ", 1), o.value ? (L(), R(I, { key: 0 }, [V(" GM Toolkit can now be disabled. Items marked “not transferred” will not be available after it is disabled. ")], 64)) : (L(), R(I, { key: 1 }, [V("Finish the active combat before disabling GM Toolkit.")], 64))])], 2)) : (L(), R("div", a_, [
				e.review ? (L(), R("div", o_, [...n[11] ||= [z("i", {
					class: "fa-solid fa-rotate",
					"aria-hidden": "true"
				}, null, -1), z("span", null, " Source data or import choices changed after the previous review. Check the current summary again. ", -1)]])) : H("", !0),
				z("label", s_, [N(z("input", {
					"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
					class: "dui-checkbox dui-checkbox-sm tw:mt-0.5 tw:shrink-0",
					type: "checkbox"
				}, null, 512), [[G, i.value]]), n[12] ||= z("span", { class: "tw:text-sm" }, " I reviewed every value, prompt, and launcher above. Anything not imported or replaced is intentionally retained or accepted for manual follow-up. ", -1)]),
				z("button", {
					class: "dui-btn dui-btn-accent dui-btn-sm tw:justify-self-end",
					disabled: e.isWorking || !i.value,
					type: "button",
					onClick: n[1] ||= (e) => r("review")
				}, [e.isWorking ? (L(), R("span", l_)) : (L(), R("i", u_)), n[13] ||= V(" Save review ", -1)], 8, c_),
				n[14] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/70!" }, " Review this summary before disabling GM Toolkit. Keep it enabled while any action lacks an equivalent; if combat is active, finish it first. ", -1)
			]))
		], 64)) : e.review ? (L(), R("div", d_, [n[15] ||= z("i", {
			class: "fa-solid fa-circle-check",
			"aria-hidden": "true"
		}, null, -1), z("span", null, D(e.review.reviewedByUserName) + " reviewed the import on " + D(new Date(e.review.reviewedAt).toLocaleString()) + ". No GM Toolkit source data is currently available. ", 1)])) : H("", !0)])]));
	}
}), p_ = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-accent/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-launcher-title"
}, m_ = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, h_ = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, g_ = { class: "tw:min-w-0 tw:flex-1" }, __ = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, v_ = { class: "dui-badge dui-badge-sm" }, y_ = ["disabled"], b_ = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, x_ = {
	key: 1,
	class: "fa-solid fa-arrow-right-arrow-left",
	"aria-hidden": "true"
}, S_ = { class: "tw:flex tw:flex-wrap tw:gap-2 tw:text-xs" }, C_ = { class: "dui-badge dui-badge-sm" }, w_ = { class: "dui-badge dui-badge-sm" }, T_ = { class: "dui-badge dui-badge-sm" }, E_ = { class: "dui-badge dui-badge-sm" }, D_ = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!" }, O_ = { class: "dui-table dui-table-sm tw:min-w-[46rem]" }, k_ = {
	key: 0,
	class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2"
}, A_ = ["checked", "onChange"], j_ = { class: "tw:sr-only" }, M_ = {
	key: 1,
	"aria-hidden": "true"
}, N_ = {
	class: "tw:max-w-56 tw:whitespace-normal",
	scope: "row"
}, P_ = { class: "dui-badge dui-badge-sm" }, F_ = { class: "tw:whitespace-nowrap" }, I_ = { class: "tw:max-w-72 tw:whitespace-normal" }, L_ = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, R_ = { class: "dui-badge dui-badge-sm" }, z_ = {
	key: 0,
	class: "tw:font-semibold"
}, B_ = { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/65!" }, V_ = /* @__PURE__ */ P({
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
			return Eh(e);
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
		return (t, n) => (L(), R("section", p_, [z("div", m_, [
			z("div", h_, [z("div", g_, [z("div", __, [n[1] ||= z("h2", {
				id: "gm-toolkit-launcher-title",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Hotbar launchers ", -1), z("span", v_, D(e.preview.candidates.length) + " found", 1)]), n[2] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Reviews this user’s hotbar without running or copying GM Toolkit commands. Customized macros stay untouched. ", -1)]), z("button", {
				class: "dui-btn dui-btn-accent dui-btn-sm tw:shrink-0",
				disabled: e.isWorking || i.value === 0,
				type: "button",
				onClick: n[0] ||= (e) => r("remap")
			}, [e.isWorking ? (L(), R("span", b_)) : (L(), R("i", x_)), V(" Remap " + D(i.value) + " slot" + D(i.value === 1 ? "" : "s"), 1)], 8, y_)]),
			z("div", S_, [
				z("span", C_, D(e.preview.counts.standard) + " stock", 1),
				z("span", w_, D(e.preview.counts.customized) + " customized", 1),
				z("span", T_, D(e.preview.counts.ambiguous) + " review", 1),
				z("span", E_, D(e.preview.userName ?? "Current user"), 1)
			]),
			z("div", D_, [z("table", O_, [n[3] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Remap"),
				z("th", { scope: "col" }, "GM Toolkit macro"),
				z("th", { scope: "col" }, "Match"),
				z("th", { scope: "col" }, "Hotbar"),
				z("th", { scope: "col" }, "Drowsy outcome")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(e.preview.candidates, (e) => (L(), R("tr", { key: e.macroId }, [
				z("td", null, [a(e) ? (L(), R("label", k_, [z("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: o(e),
					type: "checkbox",
					onChange: (t) => s(e, t)
				}, null, 40, A_), z("span", j_, " Remap " + D(e.sourceMacroName) + " from " + D(u(e.hotbarSlots)), 1)])) : (L(), R("span", M_, "—"))]),
				z("th", N_, D(e.macroName), 1),
				z("td", null, [z("span", P_, D(c(e)), 1)]),
				z("td", F_, D(u(e.hotbarSlots)), 1),
				z("td", I_, [z("div", L_, [z("span", R_, D(l(e)), 1), e.replacement.macroName ? (L(), R("span", z_, D(e.replacement.macroName), 1)) : H("", !0)]), z("p", B_, D(e.replacement.label), 1)])
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
			}, null, -1), z("span", null, D(e), 1)]))), 128))
		])]));
	}
}), H_ = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-secondary/40! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "gm-toolkit-import-title"
}, U_ = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, W_ = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, G_ = { class: "tw:min-w-0 tw:flex-1" }, K_ = { class: "tw:flex tw:flex-wrap tw:items-center tw:gap-2" }, q_ = { class: "dui-badge dui-badge-outline dui-badge-sm" }, J_ = {
	key: 0,
	class: "dui-badge dui-badge-sm"
}, Y_ = {
	key: 0,
	class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/60!"
}, X_ = ["disabled"], Z_ = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Q_ = {
	key: 1,
	class: "fa-solid fa-file-import",
	"aria-hidden": "true"
}, $_ = {
	class: "tw:flex tw:flex-wrap tw:gap-2 tw:text-xs",
	"aria-label": "Migration inventory"
}, ev = { class: "dui-badge dui-badge-sm" }, tv = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, nv = { class: "dui-badge dui-badge-sm" }, rv = { class: "dui-badge dui-badge-sm" }, iv = { class: "dui-badge dui-badge-sm" }, av = {
	key: 0,
	class: "dui-alert tw:py-2 tw:text-xs",
	role: "note"
}, ov = { class: "tw:max-w-full tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!" }, sv = { class: "dui-table dui-table-sm tw:min-w-[38rem]" }, cv = { class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-2" }, lv = ["checked", "onChange"], uv = { class: "tw:sr-only" }, dv = { scope: "row" }, fv = ["title"], pv = ["title"], mv = { class: "dui-badge dui-badge-sm" }, hv = /* @__PURE__ */ P({
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
		return (t, n) => (L(), R("section", H_, [z("div", U_, [
			z("div", W_, [z("div", G_, [
				z("div", K_, [
					n[1] ||= z("h2", {
						id: "gm-toolkit-import-title",
						class: "dui-card-title tw:font-serif tw:text-lg"
					}, " Settings ", -1),
					z("span", q_, D(a.value), 1),
					e.preview.source?.moduleVersion ? (L(), R("span", J_, D(e.preview.source.moduleVersion), 1)) : H("", !0)
				]),
				n[2] ||= z("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " Choose which saved values to copy. Your GM Toolkit settings will not be changed. ", -1),
				e.lastImportedAt ? (L(), R("p", Y_, " Last imported " + D(new Date(e.lastImportedAt).toLocaleString()), 1)) : H("", !0)
			]), z("button", {
				class: "dui-btn dui-btn-sm tw:border-secondary! tw:text-base-content!",
				disabled: e.isWorking || i.value === 0,
				type: "button",
				onClick: n[0] ||= (e) => r("import")
			}, [e.isWorking ? (L(), R("span", Z_)) : (L(), R("i", Q_)), V(" Import " + D(i.value || "selected"), 1)], 8, X_)]),
			z("div", $_, [
				z("span", ev, D(e.preview.dispositionCounts.import) + " can be imported ", 1),
				e.preview.dispositionCounts.pending ? (L(), R("span", tv, D(e.preview.dispositionCounts.pending) + " not transferred ", 1)) : H("", !0),
				z("span", nv, D(e.preview.dispositionCounts.supersede) + " handled another way ", 1),
				z("span", rv, D(e.preview.dispositionCounts.retire) + " not needed ", 1),
				z("span", iv, D(e.preview.dispositionCounts.skip) + " ignored ", 1)
			]),
			e.preview.source?.active ? H("", !0) : (L(), R("div", av, [...n[3] ||= [z("i", {
				class: "fa-solid fa-database",
				"aria-hidden": "true"
			}, null, -1), z("span", null, " Saved world data is available even while GM Toolkit is disabled. ", -1)]])),
			z("div", ov, [z("table", sv, [n[4] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
				z("th", { scope: "col" }, "Import"),
				z("th", { scope: "col" }, "Value"),
				z("th", { scope: "col" }, "GM Toolkit"),
				z("th", { scope: "col" }, "Drowsy"),
				z("th", { scope: "col" }, "Comparison")
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(e.preview.imports, (t) => (L(), R("tr", { key: t.field }, [
				z("td", null, [z("label", cv, [z("input", {
					class: "dui-checkbox dui-checkbox-sm",
					checked: e.selections[t.field],
					type: "checkbox",
					onChange: (e) => c(t.field, e)
				}, null, 40, lv), z("span", uv, "Import " + D(t.label), 1)])]),
				z("th", dv, D(t.label), 1),
				z("td", {
					class: "tw:max-w-48 tw:truncate",
					title: o(t.sourceValue)
				}, D(o(t.sourceValue)), 9, fv),
				z("td", {
					class: "tw:max-w-48 tw:truncate",
					title: o(t.currentValue)
				}, D(o(t.currentValue)), 9, pv),
				z("td", null, [z("span", mv, D(s(t.comparison)), 1)])
			]))), 128))])])]),
			(L(!0), R(I, null, F(e.preview.source?.warnings ?? [], (e) => (L(), R("div", {
				key: e,
				class: "dui-alert dui-alert-warning tw:py-2 tw:text-xs",
				role: "alert"
			}, [n[5] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", null, D(e), 1)]))), 128))
		])]));
	}
}), gv = { class: "tw:grid tw:min-w-0 tw:gap-3" }, _v = {
	key: 4,
	class: "dui-alert",
	role: "status"
}, vv = /* @__PURE__ */ P({
	__name: "GmToolkitMigrationApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Bh();
		n.initialize(t.initialization, t.actions);
		let { cutoverReport: r, darkWhispersConflictPolicy: i, darkWhispersSelections: a, darkWhispersTableId: o, errorMessage: s, isWorking: c, launcherSelections: l, preview: u, settingSelections: d, state: f, statusMessage: p } = js(n);
		return (e, t) => (L(), ua(Qs, {
			description: "Copy the settings and content you want to keep, update safe hotbar links, and review the result before disabling GM Toolkit.",
			"error-message": M(s),
			icon: "fa-solid fa-box-archive",
			"status-message": M(p),
			title: "Import from GM Toolkit"
		}, {
			default: Xn(() => [z("div", gv, [
				M(u)?.source ? (L(), ua(hv, {
					key: 0,
					"is-working": M(c),
					"last-imported-at": M(f).migration?.importedAt,
					preview: M(u),
					selections: M(d),
					onImport: M(n).importSettings,
					onSelectionChange: M(n).setSettingSelection
				}, null, 8, [
					"is-working",
					"last-imported-at",
					"preview",
					"selections",
					"onImport",
					"onSelectionChange"
				])) : H("", !0),
				M(u) ? (L(), ua(dg, {
					key: 1,
					"conflict-policy": M(i),
					"onUpdate:conflictPolicy": t[0] ||= (e) => /* @__PURE__ */ A(i) ? i.value = e : null,
					"is-working": M(c),
					preview: M(u).darkWhispers,
					"selected-table-id": M(o),
					selections: M(a),
					onImport: M(n).importDarkWhispers,
					onSelectionChange: M(n).setDarkWhispersSelection,
					onTableChange: M(n).setDarkWhispersTable
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
				M(u)?.launchers.candidates.length ? (L(), ua(V_, {
					key: 2,
					"is-working": M(c),
					preview: M(u).launchers,
					selections: M(l),
					onRemap: M(n).remapLaunchers,
					onSelectionChange: M(n).setLauncherSelection
				}, null, 8, [
					"is-working",
					"preview",
					"selections",
					"onRemap",
					"onSelectionChange"
				])) : H("", !0),
				M(r) || M(f).cutoverReview ? (L(), ua(f_, {
					key: 3,
					"is-working": M(c),
					report: M(r),
					review: M(f).cutoverReview,
					onReview: M(n).reviewCutover
				}, null, 8, [
					"is-working",
					"report",
					"review",
					"onReview"
				])) : H("", !0),
				!M(u) && !M(r) ? (L(), R("div", _v, [...t[1] ||= [z("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), z("span", null, "No GM Toolkit settings, content, or launchers were found in this world.", -1)]])) : H("", !0)
			])]),
			_: 1
		}, 8, ["error-message", "status-message"]));
	}
}), yv = "9rXQv4uJcQoLBitt", bv = "Dark Whispers", xv = "wfrp4e-gm-toolkit", Sv = "gm-toolkit-tables";
function Cv(e, t) {
	return e.flatMap((e) => Ev(e, t)).sort(kv);
}
function wv(e, t, n = []) {
	let r = e.map((e) => ({
		...e,
		prompts: e.prompts.map((n) => ({
			...n,
			comparison: Av(e.tableId, n.resultId, n.text, t)
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
function Tv(e, t, n, r) {
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
				source: jv(i, e.resultId),
				text: e.text
			}, l += 1;
			continue;
		}
		if (r) {
			u += 1;
			continue;
		}
		s.push({
			id: Mv(i.tableId, e.resultId),
			source: jv(i, e.resultId),
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
function Ev(e, t) {
	if (!Z(e)) return [];
	let n = X(e._id), r = X(e.name), i = Dv(e, n, r);
	if (!n || !r || !i) return [];
	let a = [], o = (Array.isArray(e.results) ? e.results : []).flatMap((e, t) => {
		if (!Z(e)) return a.push(`Table row ${t + 1} was invalid and was skipped.`), [];
		let n = X(e._id), r = tp(e.description);
		return !n || !r ? (a.push(`Table row ${t + 1} had no stable ID or prompt text and was skipped.`), []) : [{
			range: Ov(e.range, t),
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
function Dv(e, t, n) {
	let r = Z(e._stats) ? e._stats : {}, i = Z(e.flags) ? e.flags : {}, a = Z(i.wfrp4e) ? i.wfrp4e : {}, o = i[xv], s = X(r.compendiumSource), c = n === bv;
	return c && s.includes(`${xv}.${Sv}`) || X(a.key).toLowerCase() === "darkwhispers" || c && Z(o) ? "metadata" : t === yv ? "id" : c ? "name" : void 0;
}
function Ov(e, t) {
	if (Array.isArray(e) && e.length >= 2 && Number.isFinite(Number(e[0])) && Number.isFinite(Number(e[1]))) {
		let t = Number(e[0]), n = Number(e[1]);
		return t === n ? String(t) : `${t}–${n}`;
	}
	return String(t + 1);
}
function kv(e, t) {
	let n = {
		id: 2,
		metadata: 3,
		name: 1
	};
	return n[t.confidence] - n[e.confidence] || t.prompts.length - e.prompts.length;
}
function Av(e, t, n, r) {
	let i = r.prompts.find((n) => n.source?.type === "gm-toolkit" && n.source.tableId === e && n.source.resultId === t);
	return i ? i.text === n ? "same" : "conflict" : r.prompts.some((e) => e.text === n) ? "duplicate" : "new";
}
function jv(e, t) {
	return {
		...e.moduleVersion ? { moduleVersion: e.moduleVersion } : {},
		resultId: t,
		tableId: e.tableId,
		type: "gm-toolkit"
	};
}
function Mv(e, t) {
	return `gm-toolkit:${e}:${t}`;
}
//#endregion
//#region src/functions/gm-toolkit/cutover.ts
function Nv(e) {
	let t = Lv(e.preview, e.migration), n = Rv(e.preview), r = zv(e.preview), i = Pv(), a = Bv(e.preview, e.sourceEvidence), o = {
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
		evidenceId: Hv(JSON.stringify(o)),
		generatedAt: new Date(e.generatedAt).toISOString(),
		launchers: r,
		notices: Vv(e.preview, t, n, r, e.combat),
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
function Pv() {
	let e = yh.filter(({ replacement: e }) => ["partial", "pending"].includes(e.disposition)).map(({ name: e }) => e);
	return {
		ready: e.length === 0,
		unavailableCapabilities: e
	};
}
function Fv(e, t, n) {
	let r = $f(n);
	if (!r || !t.id || !t.name.trim()) throw Error("A valid GM and review time are required to save the review.");
	return {
		evidenceId: e.evidenceId,
		reviewedAt: r,
		reviewedByUserId: t.id,
		reviewedByUserName: t.name.trim(),
		version: 1
	};
}
function Iv(e) {
	if (!Z(e) || e.version !== 1) return;
	let t = X(e.evidenceId), n = $f(e.reviewedAt), r = X(e.reviewedByUserId), i = X(e.reviewedByUserName);
	return t && n && r && i ? {
		evidenceId: t,
		reviewedAt: n,
		reviewedByUserId: r,
		reviewedByUserName: i,
		version: 1
	} : void 0;
}
function Lv(e, t) {
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
function Rv(e) {
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
function zv(e) {
	let t = e.launchers.candidates, n = t.filter(({ match: e, replacement: t }) => e !== "standard" || t.disposition === "partial" || t.disposition === "pending").map((e) => ({
		disposition: e.replacement.disposition,
		hotbarSlots: [...e.hotbarSlots],
		macroId: e.macroId,
		macroName: e.macroName,
		match: e.match,
		outcome: e.replacement.label
	}));
	for (let e of t) Eh(e) && n.push({
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
function Bv(e, t) {
	let n = e.source, r = t === "current";
	return {
		active: r && n?.active === !0,
		evidence: t,
		installed: r && n?.installed === !0,
		...n?.moduleVersion ? { moduleVersion: n.moduleVersion } : {},
		schemaVersion: "9.2.0"
	};
}
function Vv(e, t, n, r, i) {
	let a = [], o = Pv(), s = t.filter(({ status: e }) => e === "changed-after-import" || e === "not-imported").length, c = n.comparisonCounts.conflict + n.comparisonCounts.new;
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
function Hv(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t = Math.imul(t ^ e.charCodeAt(n), 16777619) >>> 0;
	return t.toString(16).padStart(8, "0");
}
//#endregion
//#region src/functions/gm-toolkit/import-fields.ts
var Uv = /* @__PURE__ */ "sessionReference.defaultXpAmount.defaultXpSelection.defaultXpReason.automateOpposedTestAdvantage.automateDamageAdvantage.automateConditionAdvantage.promptMomentumLoss.clearAdvantageCombatJoin.clearAdvantageCombatLeave.persistAdvantageNotifications.holdingScene.exportChat.scenePullActivate.rangeNormalSight.rangeDarkVision.overrideNightVision.overrideDarkVision.defaultGroupDarkWhispers.messageDarkWhispers.suppressSpectatorNotice.quicktest1GroupTest.quicktest2GroupTest.quicktest3GroupTest.quicktest4GroupTest.defaultSkillGroupTest.bypassTestDialogGroupTest.defaultDifficultyGroupTest.defaultRollModeGroupTest.defaultTestModifierGroupTest.defaultPartyGroupTest.fallbackAdvancedSkills.fallbackAdjustDifficulty.summariseResultsThresholdGroupTest".split("."), Wv = {
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
function Gv(e, t, n) {
	let r = ty(e, t);
	return {
		disposition: e.disposition,
		family: e.family,
		key: e.key,
		source: n,
		valid: r.valid,
		value: r.value
	};
}
function Kv(e, t, n = {
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
		Xv(e, t, "sessionReference", "sessionID", "Session reference"),
		Xv(e, t, "defaultXpAmount", "addXPDefaultAmount", "XP amount"),
		Xv(e, t, "defaultXpSelection", "defaultPartySessionTurnover", "Recipients"),
		Xv(e, t, "defaultXpReason", "addXPDefaultReason", "XP reason"),
		...Uv.slice(4).map((n) => qv(e, t.featureSettings ?? {}, n))
	];
	return {
		darkWhispers: n,
		dispositionCounts: ry(e.settings, "disposition", [
			"import",
			"pending",
			"retire",
			"skip",
			"supersede"
		]),
		imports: i,
		launchers: r,
		source: e,
		sourceCounts: ry(e.settings, "source", [
			"baseline",
			"persisted",
			"registered"
		]),
		version: 1
	};
}
function qv(e, t, n) {
	let r = ey(e.settings.find((e) => e.key === n)?.value), i = t[n] ?? "";
	return {
		comparison: $v(i, r),
		currentValue: i,
		field: n,
		label: Wv[n] ?? n,
		sourceKey: n,
		sourceValue: r
	};
}
function Jv(e) {
	if (!Z(e) || e.schemaVersion !== "9.2.0") return;
	let t = Array.isArray(e.settings) ? e.settings.flatMap(ny) : [];
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
function Yv(e) {
	return typeof e == "string" && Uv.includes(e);
}
function Xv(e, t, n, r, i) {
	let a = Zv(n, e.settings.find((e) => e.key === r)?.value), o = Qv(n, t);
	return {
		comparison: $v(o, a),
		currentValue: o,
		field: n,
		label: i,
		sourceKey: r,
		sourceValue: a
	};
}
function Zv(e, t) {
	if (e === "defaultXpAmount") {
		let e = Number(t);
		return Number.isFinite(e) ? Math.round(e) : 0;
	}
	return e === "defaultXpSelection" ? t === "company" ? "company" : "party" : typeof t == "string" && t !== "null" ? t : "";
}
function Qv(e, t) {
	switch (e) {
		case "sessionReference": return t.sessionReference;
		case "defaultXpAmount": return t.xpAwardSettings.defaultAmount;
		case "defaultXpReason": return t.xpAwardSettings.defaultReason;
		case "defaultXpSelection": return t.xpAwardSettings.defaultSelection;
	}
}
function $v(e, t) {
	return e === t ? "same" : e === "" ? "target-empty" : "different";
}
function ey(e) {
	return typeof e == "boolean" || typeof e == "number" || typeof e == "string" ? e : "";
}
function ty(e, t) {
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
function ny(e) {
	if (!Z(e)) return [];
	let t = e.disposition, n = e.family, r = e.source, i = e.value;
	return !iy(t) || !ay(n) || !oy(r) || !sy(i) ? [] : [{
		disposition: t,
		family: n,
		key: X(e.key),
		source: r,
		valid: e.valid === !0,
		value: i
	}];
}
function ry(e, t, n) {
	return Object.fromEntries(n.map((n) => [n, e.filter((e) => e[t] === n).length]));
}
function iy(e) {
	return [
		"import",
		"pending",
		"retire",
		"skip",
		"supersede"
	].includes(String(e));
}
function ay(e) {
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
function oy(e) {
	return [
		"baseline",
		"persisted",
		"registered"
	].includes(String(e));
}
function sy(e) {
	return [
		"boolean",
		"number",
		"string"
	].includes(typeof e) || Array.isArray(e);
}
//#endregion
//#region src/types/xp-award/XpAward.ts
var cy = {
	batches: [],
	version: 1
}, ly = 500;
function uy(e, t) {
	return {
		batches: [t, ...e.batches].slice(0, ly),
		version: 1
	};
}
function dy(e) {
	if (typeof e != "string") return {
		...cy,
		batches: []
	};
	try {
		let t = JSON.parse(e);
		return !Z(t) || t.version !== 1 || !Array.isArray(t.batches) ? {
			...cy,
			batches: []
		} : {
			batches: t.batches.flatMap(fy).slice(0, ly),
			version: 1
		};
	} catch {
		return {
			...cy,
			batches: []
		};
	}
}
function fy(e) {
	if (!Z(e) || !Array.isArray(e.awards)) return [];
	let t = $f(e.awardedAt), n = X(e.id), r = X(e.reason), i = X(e.sessionReference), a = e.awards.flatMap(py);
	return !t || !n || a.length === 0 ? [] : [{
		awardedAt: t,
		awards: a,
		id: n,
		reason: r,
		sessionReference: i,
		totalChange: a.reduce((e, t) => e + t.amount, 0)
	}];
}
function py(e) {
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
var my = {
	auditLog: "xpAwardAuditLog",
	defaultAmount: "xpAwardDefaultAmount",
	defaultReason: "xpAwardDefaultReason",
	defaultSelection: "xpAwardDefaultSelection",
	includeTimestampInReason: "xpAwardIncludeTimestampInReason"
};
//#endregion
//#region src/module/xp-award/settings/load.ts
function hy() {
	return {
		defaultAmount: Math.round(Number(game.settings.get(q, my.defaultAmount))),
		defaultReason: yy(my.defaultReason),
		defaultSelection: by(),
		includeTimestampInReason: game.settings.get(q, my.includeTimestampInReason) === !0
	};
}
async function gy(e) {
	let t = [
		[my.defaultAmount, Math.round(e.defaultAmount)],
		[my.defaultReason, e.defaultReason],
		[my.defaultSelection, e.defaultSelection],
		[my.includeTimestampInReason, e.includeTimestampInReason]
	];
	for (let [e, n] of t) await game.settings.set(q, e, n);
}
function _y() {
	return dy(game.settings.get(q, my.auditLog));
}
async function vy(e) {
	await game.settings.set(q, my.auditLog, JSON.stringify(e));
}
function yy(e) {
	let t = game.settings.get(q, e);
	return typeof t == "string" ? t : "";
}
function by() {
	let e = yy(my.defaultSelection);
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/functions/xp-curve/reason.ts
function xy(e, t) {
	return e.replaceAll("%session%", t.session).replaceAll("%date%", t.date).replaceAll("%datetime%", t.datetime ?? "").replace(/\s+\(\s*\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function Sy(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/functions/xp-award/reason.ts
function Cy(e, t, n) {
	let r = e;
	return n && !r.includes("%datetime%") && (r = r.trim() ? `${r} — awarded %datetime%` : "Awarded %datetime%"), xy(r, t);
}
function wy(e) {
	return `${e.slice(0, 10)} ${e.slice(11, 19)} UTC`;
}
//#endregion
//#region src/functions/session-management/submission.ts
function Ty(e) {
	let t = Number(e);
	if (!e.trim() || !Number.isSafeInteger(t) || t < 0 || !Number.isSafeInteger(t + 1)) throw Error("Enter a whole session number of zero or more.");
	return String(t + 1);
}
function Ey(e, t, n) {
	let r = new Date(n);
	if (Number.isNaN(r.getTime())) throw Error("Enter a valid session date and time.");
	let i = r.toISOString();
	return Cy(e.defaultReason, {
		date: n.slice(0, 10),
		datetime: wy(i),
		session: t.trim()
	}, e.includeTimestampInReason);
}
function Dy(e) {
	if (Number.isNaN(new Date(e.occurredAt).getTime())) throw Error("Enter a valid session date and time.");
	if (e.xp) {
		if (e.nextSessionReference !== Ty(e.sessionReference)) throw Error("The next session must be one higher than the submitted session number.");
		if (!Number.isSafeInteger(e.xp.defaultAmount) || e.xp.defaultAmount < 0) throw Error("Enter a whole Session XP amount of zero or more.");
		if (e.xpAward && !e.xp.actorIds.length) throw Error("Select at least one XP recipient, or enter 0 XP.");
	}
}
function Oy(e) {
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
		return Dy(r), r;
	} catch {
		return;
	}
}
function ky(e, t) {
	let n = new Date(t), r = Number.isNaN(n.getTime()) ? "Choose a date and time" : new Intl.DateTimeFormat(void 0, {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(n);
	return `Session ${e || "—"} · ${r}`;
}
//#endregion
//#region src/types/session-management/SessionManagement.ts
var Ay = {
	currentSessionReference: "",
	sessions: [],
	version: 1
}, jy = { version: 1 };
//#endregion
//#region src/functions/gm-toolkit/state.ts
function My(e) {
	let t = Py(e);
	if (!t || t.version !== 1) return { ...jy };
	let n = Ny(t.migration), r = Iv(t.cutoverReview);
	return {
		...r ? { cutoverReview: r } : {},
		...n ? { migration: n } : {},
		version: 1
	};
}
function Ny(e) {
	if (!Z(e) || !Z(e.xpAwardSettings)) return;
	let t = $f(e.importedAt), n = X(e.sessionReference), r = e.xpAwardSettings, i = r.defaultSelection;
	if (!t || i !== "party" && i !== "company" && i !== "world" || !Number.isFinite(Number(r.defaultAmount))) return;
	let a = Jv(e.source), o = Array.isArray(e.appliedFields) ? e.appliedFields.filter(Yv) : void 0;
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
function Py(e) {
	if (typeof e == "string") try {
		let t = JSON.parse(e);
		return Z(t) ? t : void 0;
	} catch {
		return;
	}
}
//#endregion
//#region src/functions/session-management/session.ts
var Fy = 500;
function Iy(e, t, n) {
	let r = t.sessionReference.trim(), i = t.nextSessionReference.trim(), a = Ky(t.occurredAt, "session occurrence"), o = Ky(n.recordedAt, "session record");
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
			sessions: [s, ...e.sessions].slice(0, Fy)
		}
	};
}
function Ly(e) {
	let t = Gy(e);
	if (!t || t.version !== 1) return {
		...Ay,
		sessions: []
	};
	let n = Array.isArray(t.sessions) ? t.sessions.flatMap(Vy).slice(0, Fy) : [], r = Ny(t.gmToolkitMigration), i = Iv(t.gmToolkitCutoverReview), a = Hy(t.turnover);
	return {
		currentSessionReference: X(t.currentSessionReference),
		...i ? { gmToolkitCutoverReview: i } : {},
		...r ? { gmToolkitMigration: r } : {},
		sessions: n,
		...a ? { turnover: a } : {},
		version: 1
	};
}
function Ry(e, t, n, r) {
	let i = t.trim(), a = Ky(n, "turnover start");
	if (!e || !i) throw Error("A turnover ID and session reference are required.");
	return {
		id: e,
		sessionReference: i,
		startedAt: a,
		steps: By.map((e) => ({
			id: e,
			status: r.has(e) ? "pending" : "skipped"
		}))
	};
}
function zy(e, t, n, r, i) {
	let a = Ky(r, "turnover step");
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
var By = [
	"pause",
	"holding-scene",
	"xp",
	"fortune",
	"chat-export",
	"record"
];
function Vy(e) {
	if (!Z(e)) return [];
	let t = X(e.id), n = $f(e.occurredAt), r = $f(e.recordedAt), i = X(e.reference);
	return t && n && r && i ? [{
		id: t,
		occurredAt: n,
		recordedAt: r,
		reference: i
	}] : [];
}
function Hy(e) {
	if (!Z(e) || !Array.isArray(e.steps)) return;
	let t = X(e.id), n = X(e.sessionReference), r = $f(e.startedAt), i = e.steps.flatMap((e) => {
		if (!Z(e)) return [];
		let t = X(e.id), n = X(e.status);
		if (!Uy(t) || !Wy(n)) return [];
		let r = $f(e.finishedAt), i = X(e.detail);
		return [{
			id: t,
			status: n,
			...r ? { finishedAt: r } : {},
			...i ? { detail: i } : {}
		}];
	}), a = Oy(e.request);
	return t && n && r && i.length === By.length ? {
		id: t,
		sessionReference: n,
		startedAt: r,
		steps: i,
		...a ? { request: a } : {}
	} : void 0;
}
function Uy(e) {
	return By.includes(e);
}
function Wy(e) {
	return [
		"completed",
		"failed",
		"pending",
		"skipped"
	].includes(e);
}
function Gy(e) {
	if (typeof e == "string") try {
		let t = JSON.parse(e);
		return Z(t) ? t : void 0;
	} catch {
		return;
	}
}
function Ky(e, t) {
	let n = new Date(e);
	if (Number.isNaN(n.getTime())) throw Error(`Enter a valid ${t} date and time.`);
	return n.toISOString();
}
//#endregion
//#region src/module/session-management/settings/keys.ts
var qy = {
	options: "sessionTurnoverOptions",
	exportChat: "sessionExportChat",
	holdingSceneUuid: "sessionHoldingSceneUuid",
	pullPolicy: "sessionPullPolicy",
	state: "sessionManagementState"
};
//#endregion
//#region src/module/session-management/settings/load.ts
function Jy() {
	return Ly(game.settings.get(q, qy.state));
}
function Yy() {
	return Jy().currentSessionReference;
}
function Xy() {
	let e = game.settings.get(q, qy.pullPolicy), t = $y(), n = hy(), r = String(game.settings.get("wfrp4e-enhanced-fear-terror", qy.holdingSceneUuid) ?? "").trim();
	return {
		pause: t.pause !== !1,
		fortuneReset: t.fortuneReset !== !1,
		holdingScene: typeof t.holdingScene == "boolean" ? t.holdingScene : !!r,
		xp: {
			defaultAmount: typeof t.defaultAmount == "number" ? t.defaultAmount : Math.max(0, n.defaultAmount),
			defaultReason: typeof t.defaultReason == "string" ? t.defaultReason : n.defaultReason,
			defaultSelection: t.defaultSelection === "party" || t.defaultSelection === "company" || t.defaultSelection === "world" ? t.defaultSelection : n.defaultSelection,
			includeTimestampInReason: typeof t.includeTimestampInReason == "boolean" ? t.includeTimestampInReason : n.includeTimestampInReason
		},
		exportChat: game.settings.get(q, qy.exportChat) === !0,
		holdingSceneUuid: r,
		pullPolicy: e === "activate" || e === "prompt" ? e : "pull"
	};
}
async function Zy(e) {
	e.xp && await game.settings.set(q, qy.options, JSON.stringify({
		pause: e.pause,
		fortuneReset: e.fortuneReset,
		holdingScene: e.holdingScene,
		...e.xp
	})), await game.settings.set(q, qy.holdingSceneUuid, e.holdingSceneUuid.trim()), await game.settings.set(q, qy.exportChat, e.exportChat), await game.settings.set(q, qy.pullPolicy, e.pullPolicy);
}
async function Qy(e) {
	await game.settings.set(q, qy.state, JSON.stringify(e));
}
function $y() {
	let e = game.settings.get(q, qy.options);
	if (typeof e != "string") return {};
	try {
		let t = JSON.parse(e);
		return t && typeof t == "object" && !Array.isArray(t) ? t : {};
	} catch {
		return {};
	}
}
//#endregion
//#region src/module/gm-toolkit/content-source.ts
function eb() {
	let e = game.modules.get(Tc)?.version;
	return Cv(Array.from(game.tables).map((e) => tb(e.toObject())), e);
}
function tb(e) {
	if (typeof e != "object" || !e) return e;
	let t = Reflect.get(e, "results");
	return Array.isArray(t) ? {
		...e,
		results: t.map((e) => typeof e != "object" || !e ? e : {
			...e,
			description: nb(Reflect.get(e, "description"))
		})
	} : e;
}
function nb(e) {
	if (typeof e != "string") return "";
	if (!/[<&]/.test(e)) return e;
	let t = document.createElement("div");
	return t.innerHTML = e, t.querySelectorAll("script, style, template").forEach((e) => e.remove()), t.textContent ?? "";
}
//#endregion
//#region src/module/gm-toolkit/launcher-source.ts
var rb = `${q}.macros`;
function ib() {
	let e = Array.from(game.macros).flatMap(ob), t = game.user, n = /* @__PURE__ */ new Map();
	if (t) for (let e = 1; e <= 5; e += 1) for (let { macro: r, slot: i } of t.getHotbarMacros(e)) r?.id && n.set(r.id, [...n.get(r.id) ?? [], i]);
	return Th(e, n, {
		id: t?.id,
		name: t?.name
	});
}
async function ab(e) {
	let t = Array.from(game.macros).find((t) => {
		let n = ob(t)[0];
		return kh(n, e);
	});
	if (t) return {
		imported: !1,
		macro: t
	};
	let n = game.packs.get(rb);
	if (!n) throw Error("The Drowsy launcher compendium is unavailable.");
	return {
		imported: !0,
		macro: await game.macros.importFromCompendium(n, e)
	};
}
function ob(e) {
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
//#region src/module/gm-toolkit/settings/keys.ts
var sb = { state: "gmToolkitMigrationState" };
//#endregion
//#region src/module/gm-toolkit/settings/load.ts
function cb() {
	let e = My(game.settings.get(q, sb.state));
	if (e.migration || e.cutoverReview) return e;
	let t = Jy();
	return {
		...t.gmToolkitCutoverReview ? { cutoverReview: t.gmToolkitCutoverReview } : {},
		...t.gmToolkitMigration ? { migration: t.gmToolkitMigration } : {},
		version: 1
	};
}
async function lb(e) {
	await game.settings.set(q, sb.state, JSON.stringify(e));
}
//#endregion
//#region src/functions/gm-toolkit/catalog.ts
var Q = (e, t, n, r, i) => ({
	defaultValue: r,
	disposition: i,
	family: t,
	key: e,
	kind: n
}), ub = [
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
function db() {
	let e = game.modules.get(Tc), t = game.settings.storage?.get("world"), n = /* @__PURE__ */ new Map();
	for (let e of ub) {
		let r = t?.getItem(mb(e.key));
		r != null && n.set(e.key, r);
	}
	if (!e && n.size === 0) return;
	let r = [], i = ub.map((e) => {
		let t = fb(e, n);
		return t.valid || r.push(`${mb(e.key)} could not be normalized; the 9.2.0 baseline is shown instead.`), t;
	});
	return {
		active: e?.active === !0,
		installed: e !== void 0,
		...e?.version ? { moduleVersion: e.version } : {},
		schemaVersion: "9.2.0",
		settings: i,
		warnings: r
	};
}
function fb(e, t) {
	let n = t.get(e.key);
	return n === void 0 ? game.settings.settings.has(mb(e.key)) ? Gv(e, game.settings.get(Tc, e.key), "registered") : Gv(e, e.defaultValue, "baseline") : Gv(e, pb(n, e), "persisted");
}
function pb(e, t) {
	try {
		return JSON.parse(e);
	} catch {
		return t.kind === "string" ? e : void 0;
	}
}
function mb(e) {
	return `${Tc}.${e}`;
}
//#endregion
//#region src/module/gm-toolkit/setting-targets.ts
var hb = {
	automateConditionAdvantage: Vd.automateCondition,
	automateDamageAdvantage: Vd.automateDamage,
	automateOpposedTestAdvantage: Vd.automateOpposed,
	bypassTestDialogGroupTest: tm.bypassDialog,
	clearAdvantageCombatJoin: Vd.clearOnJoin,
	clearAdvantageCombatLeave: Vd.clearOnLeave,
	defaultDifficultyGroupTest: tm.defaultDifficulty,
	defaultGroupDarkWhispers: sp.defaultGroup,
	defaultPartyGroupTest: tm.defaultGroup,
	defaultRollModeGroupTest: tm.defaultRollMode,
	defaultSkillGroupTest: tm.defaultSkill,
	defaultTestModifierGroupTest: tm.defaultModifier,
	exportChat: qy.exportChat,
	fallbackAdjustDifficulty: tm.fallbackDifficultySteps,
	fallbackAdvancedSkills: tm.fallbackAdvanced,
	holdingScene: qy.holdingSceneUuid,
	messageDarkWhispers: sp.messageStyle,
	overrideDarkVision: ah.overrideDarkVision,
	overrideNightVision: ah.overrideNightVision,
	persistAdvantageNotifications: Vd.persistentNotifications,
	promptMomentumLoss: Vd.promptMomentumLoss,
	quicktest1GroupTest: tm.quickTest1,
	quicktest2GroupTest: tm.quickTest2,
	quicktest3GroupTest: tm.quickTest3,
	quicktest4GroupTest: tm.quickTest4,
	rangeDarkVision: ah.darkRange,
	rangeNormalSight: ah.normalRange,
	scenePullActivate: qy.pullPolicy,
	summariseResultsThresholdGroupTest: tm.summaryThreshold,
	suppressSpectatorNotice: Bu.showUnassignedPlayerWarning
};
function gb() {
	return Object.fromEntries(Object.entries(hb).map(([e, t]) => [e, xb(e, game.settings.get(q, t))]));
}
async function _b(e, t) {
	let n = hb[e];
	if (!n) throw Error(`No Drowsy setting target exists for ${e}.`);
	await game.settings.set(q, n, await yb(e, t));
}
async function vb(e, t) {
	if (!hb[e]) throw Error(`No Drowsy setting target exists for ${e}.`);
	await yb(e, t);
}
async function yb(e, t) {
	return e === "holdingScene" ? bb(String(t)) : e === "scenePullActivate" ? t === "always" ? "activate" : t === "prompt" ? "prompt" : "pull" : e === "suppressSpectatorNotice" ? t !== !0 : e === "messageDarkWhispers" ? t === "tempt" || t === "offer" ? "offer" : t === "plain" ? "plain" : "taunt" : Sb(t);
}
function bb(e) {
	let t = e.trim();
	if (!t) return "";
	let n = Array.from(game.scenes).filter((e) => e.name.localeCompare(t, void 0, { sensitivity: "accent" }) === 0);
	if (n.length === 0) throw Error(`Holding Scene “${t}” was not found. Choose it manually in Session Management.`);
	if (n.length > 1) throw Error(`More than one Scene is named “${t}”. Choose it manually in Session Management.`);
	return n[0].uuid;
}
function xb(e, t) {
	if (e === "holdingScene") {
		let e = String(t ?? "");
		return Array.from(game.scenes ?? []).find((t) => t.uuid === e)?.name ?? "";
	}
	return e === "scenePullActivate" ? t === "activate" ? "always" : t === "prompt" ? "prompt" : "never" : e === "suppressSpectatorNotice" ? t !== !0 : e === "messageDarkWhispers" && t === "offer" ? "tempt" : Sb(t);
}
function Sb(e) {
	return typeof e == "boolean" || typeof e == "number" || typeof e == "string" ? e : "";
}
//#endregion
//#region src/module/gm-toolkit/migration.ts
function Cb() {
	let e = db(), t = cp(), n = wv(eb(), t.library, t.warnings), r = ib();
	if (!(!e && n.candidates.length === 0 && r.candidates.length === 0)) return e ? Kv(e, {
		featureSettings: gb(),
		sessionReference: Jy().currentSessionReference,
		xpAwardSettings: hy()
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
function wb(e = Cb(), t = cb()) {
	let n = e?.source, r = t.migration?.source, i = n ?? r;
	if (!e && !i) return;
	let a = Jy(), o = i ? Kv(i, {
		featureSettings: gb(),
		sessionReference: a.currentSessionReference,
		xpAwardSettings: hy()
	}, e?.darkWhispers, e?.launchers) : e, s = game.combats.active;
	return Nv({
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
function Tb() {
	let e = cb(), t = Cb(), n = wb(t, e);
	return {
		...n ? { cutoverReport: n } : {},
		...t ? { preview: t } : {},
		state: e
	};
}
//#endregion
//#region src/functions/gm-toolkit/apply.ts
function Eb(e, t, n) {
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
async function Db(e) {
	Y(J.gmToolkitMigration);
	let t = Cb();
	if (!t?.source) throw Error("No installed module or persisted GM Toolkit world settings were found.");
	let n = Array.from(new Set(e.fields)).filter(Yv);
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
		n && await vb(e, n.value);
	}
	let i = Jy(), a = Eb(t, {
		sessionReference: i.currentSessionReference,
		xpAwardSettings: hy()
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
	].includes(e)) && await gy(o.xpAwardSettings), n.includes("sessionReference") && await Qy({
		...i,
		currentSessionReference: o.sessionReference
	});
	for (let e of r) {
		let n = t.source.settings.find((t) => t.key === e);
		n && await _b(e, n.value);
	}
	return await lb({
		...cb(),
		migration: o,
		version: 1
	}), ui.notifications.info(`${n.length} value${n.length === 1 ? "" : "s"} imported into Drowsy’s Toolkit.`), o;
}
var Ob = Db;
async function kb(e) {
	Y(J.gmToolkitMigration);
	let t = Cb();
	if (!t) throw Error("No GM Toolkit Dark Whispers table was found.");
	let n = Tv(t.darkWhispers, lp(), e, (/* @__PURE__ */ new Date()).toISOString());
	await up(n.library);
	let r = Cb();
	if (!r) throw Error("The Dark Whispers prompts were saved but could not be reloaded.");
	return ui.notifications.info(`${n.added} Dark Whispers prompt${n.added === 1 ? "" : "s"} added, ${n.replaced} replaced, and ${n.skipped} unchanged.`), {
		...n,
		preview: r
	};
}
async function Ab(e) {
	Y(J.gmToolkitMigration);
	let t = game.user;
	if (!t) throw Error("The current Foundry user is unavailable.");
	let n = Fh(ib(), e.slots);
	if (!n.length) throw Error("Select at least one standard hotbar launcher with an available replacement.");
	let r = /* @__PURE__ */ new Map();
	for (let e of n) {
		let n = r.get(e.macroId);
		n || (n = await ab(e.macroId), r.set(e.macroId, n)), await t.assignHotbarMacro(n.macro, e.slot);
	}
	let i = Array.from(r.values()).filter(({ imported: e }) => e).length;
	return ui.notifications.info(`${n.length} hotbar slot${n.length === 1 ? "" : "s"} remapped to Drowsy launchers.`), {
		importedLaunchers: i,
		preview: ib(),
		remappedSlots: n.length
	};
}
async function jb() {
	Y(J.gmToolkitMigration);
	let e = game.user;
	if (!e) throw Error("The current Foundry user is unavailable.");
	let t = cb(), n = wb(void 0, t);
	if (!n) throw Error("No GM Toolkit data is available to review.");
	let r = Fv(n, {
		id: e.id,
		name: e.name
	}, (/* @__PURE__ */ new Date()).toISOString());
	return await lb({
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
var Mb = class extends Oc {
	static ACCESS_POLICY = J.gmToolkitMigration;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-gm-toolkit-migration`],
		id: `${q}-gm-toolkit-migration`,
		position: {
			height: 760,
			width: 780
		},
		window: {
			icon: "fa-solid fa-box-archive",
			resizable: !0,
			title: `${wc} — Import from GM Toolkit`
		}
	};
	getVueComponent() {
		return vv;
	}
	getVueProps() {
		return {
			actions: {
				getCutoverReport: wb,
				importDarkWhispers: kb,
				importSettings: Db,
				remapLaunchers: Ab,
				reviewCutover: jb
			},
			initialization: Tb()
		};
	}
};
//#endregion
//#region src/module/apps/gm-toolkit-migration/open.ts
async function Nb() {
	let e = new Mb();
	return await e.render(!0), e;
}
//#endregion
//#region src/functions/xp-curve/calculate.ts
var Pb = .01, Fb = 2 ** 53 - 1;
function Ib(e) {
	return {
		companionMultiplier: Hb(e.companionMultiplier, 0, 1),
		curveExponent: Hb(e.curveExponent, .1, 5),
		gapForMaximumAward: Math.max(1, Ub(e.gapForMaximumAward)),
		maximumAward: Math.max(0, Ub(e.maximumAward)),
		scaleExponent: Hb(e.scaleExponent, 0, 2),
		scalePivot: Math.max(1, Ub(e.scalePivot))
	};
}
function Lb(e, t) {
	let n = e.filter((e) => e.selected), r = Ib(t), i = Math.max(0, ...n.map((e) => e.totalXp)), a = n.map((e) => {
		let t = Ub(e.totalXp), n = Math.max(0, i - t), a = e.category === "companion" ? r.companionMultiplier : 1, o = Rb(n, r), s = zb(t, r), c = Math.max(0, Math.round(o * s * a)), l = Math.min(r.maximumAward, c);
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
function Rb(e, t) {
	let n = Ib(t), r = Math.max(0, Number.isFinite(e) ? e : 0) / n.gapForMaximumAward, i = n.maximumAward * r ** n.curveExponent;
	return Number.isFinite(i) ? Math.min(i, Fb) : Fb;
}
function zb(e, t) {
	let n = Ib(t), r = Math.max(0, Number.isFinite(e) ? e : 0);
	return Math.min(1, n.scalePivot / Math.max(r, n.scalePivot)) ** n.scaleExponent;
}
function Bb(e, t = e.gapForMaximumAward * 1.4, n = 24) {
	let r = Ib(e), i = Math.max(2, Ub(n)), a = Math.max(r.gapForMaximumAward * 1.4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			award: Rb(n, r),
			gap: n
		};
	});
}
function Vb(e, t = e.scalePivot * 4, n = 32) {
	let r = Ib(e), i = Math.max(2, Ub(n)), a = Math.max(1e3, r.scalePivot * 4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			multiplier: zb(n, r),
			recipientXp: n
		};
	});
}
function Hb(e, t, n) {
	let r = Number(e);
	return Math.min(n, Math.max(t, Number.isFinite(r) ? r : Pb));
}
function Ub(e) {
	let t = Number(e);
	return Number.isFinite(t) ? Math.round(t) : 0;
}
//#endregion
//#region src/types/xp-curve/XpCurve.ts
var Wb = {
	companionMultiplier: .5,
	curveExponent: 1.75,
	gapForMaximumAward: 5e3,
	maximumAward: 1e3,
	scaleExponent: 1,
	scalePivot: 7500
}, Gb = {
	defaultReason: "XP Curve %session% (%date%)",
	defaultSelection: "company",
	parameters: { ...Wb }
};
//#endregion
//#region src/state/apps/shared/xp-actor-selection.ts
function Kb(e) {
	let t = /* @__PURE__ */ j([]), n = U(() => t.value.filter((e) => e.selected)), r = /* @__PURE__ */ new Set();
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
var qb = As("xp-curve-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = Kb("The XP Curve Console"), o = /* @__PURE__ */ j({ ...Wb }), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j("party"), l = /* @__PURE__ */ j("default"), u = /* @__PURE__ */ j(), d = /* @__PURE__ */ j(!1), f, p, m = U(() => Lb(e.value, o.value)), h = U(() => m.value.awards.filter((e) => e.award > 0).length), g = U(() => r.value.length >= 2 && m.value.totalAward > 0 && !d.value), _ = U(() => xy(s.value, x()));
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
}), Jb = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:justify-end tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-3" }, Yb = ["disabled"], Xb = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Zb = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("footer", Jb, [z("button", {
			class: "dui-btn dui-btn-primary tw:w-full tw:min-w-0 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md tw:min-[32rem]:w-auto tw:min-[32rem]:min-w-52",
			disabled: e.disabled,
			type: "button",
			onClick: r[0] ||= (e) => n("action")
		}, [e.working ? (L(), R("span", Xb)) : (L(), R("i", {
			key: 1,
			class: E(e.icon),
			"aria-hidden": "true"
		}, null, 2)), V(" " + D(e.label), 1)], 8, Yb)]));
	}
}), Qb = { class: "tw:cursor-pointer" }, $b = ["checked", "disabled"], ex = { class: "tw:sr-only" }, tx = /* @__PURE__ */ P({
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
		return (t, n) => (L(), R("label", Qb, [z("input", {
			class: "dui-checkbox dui-checkbox-primary dui-checkbox-sm tw:appearance-none! tw:rounded-sm! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none! tw:checked:text-primary-content!",
			type: "checkbox",
			checked: e.checked,
			disabled: e.disabled,
			onChange: i
		}, null, 40, $b), z("span", ex, "Include " + D(e.actorName) + " in " + D(e.purpose), 1)]));
	}
}), nx = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipients-title"
}, rx = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, ix = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, ax = { class: "tw:flex tw:items-center tw:gap-2" }, ox = { class: "dui-badge dui-badge-sm" }, sx = { class: "tw:flex tw:flex-wrap tw:gap-1" }, cx = ["disabled"], lx = ["disabled"], ux = ["disabled"], dx = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20! tw:bg-base-100!"
}, fx = { class: "dui-table dui-table-sm tw:min-w-[52rem]" }, px = {
	class: "tw:min-w-44",
	scope: "row"
}, mx = { class: "tw:block tw:font-semibold" }, hx = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, gx = { class: "tw:text-right tw:tabular-nums" }, _x = { class: "tw:text-right tw:tabular-nums" }, vx = { class: "tw:text-right tw:tabular-nums" }, yx = { class: "tw:text-right tw:tabular-nums" }, bx = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, xx = { class: "tw:text-right tw:tabular-nums" }, Sx = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Cx = /* @__PURE__ */ P({
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
		return (t, n) => (L(), R("section", nx, [z("div", rx, [z("div", ix, [z("div", null, [z("div", ax, [n[3] ||= z("h2", {
			id: "recipients-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipients ", -1), z("span", ox, D(e.plan.awards.length) + " selected", 1)]), n[4] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " The XP leader sets the gap only. Decay is calculated from each recipient’s own total. ", -1)]), z("div", sx, [
			z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[0] ||= (e) => r("select-all", !0)
			}, " All ", 8, cx),
			z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[1] ||= (e) => r("select-all", !1)
			}, " None ", 8, lx),
			z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[2] ||= (e) => r("reset")
			}, " Reset ", 8, ux)
		])]), e.actors.length ? (L(), R("div", dx, [z("table", fx, [n[5] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
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
			class: E({ "tw:bg-base-200!": t.selected })
		}, [
			z("td", null, [B(tx, {
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
			z("th", px, [z("span", mx, D(t.name), 1), t.category === "companion" ? (L(), R("span", hx, " Companion rate ")) : H("", !0)]),
			z("td", gx, D(t.totalXp), 1),
			z("td", _x, D(i(t.id)?.gap ?? "—"), 1),
			z("td", vx, D(i(t.id) ? Math.round(i(t.id)?.catchUpValue ?? 0) : "—"), 1),
			z("td", yx, D(i(t.id) ? `${Math.round((i(t.id)?.decayMultiplier ?? 0) * 100)}%` : "—"), 1),
			z("td", bx, D(i(t.id) ? `+${i(t.id)?.award}` : "—"), 1),
			z("td", xx, D(i(t.id)?.afterXp ?? "—"), 1)
		], 2))), 128))])])])) : (L(), R("div", Sx, [...n[6] ||= [z("i", {
			class: "fa-solid fa-user-slash",
			"aria-hidden": "true"
		}, null, -1), z("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]));
	}
}), wx = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:mb-3",
	role: "status"
}, Tx = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[68rem]:grid-cols-[1.25fr_1fr]" }, Ex = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "award-message-title"
}, Dx = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Ox = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, kx = { class: "tw:m-0 tw:break-words tw:font-semibold" }, Ax = /* @__PURE__ */ P({
	__name: "XpAwardWorkspace",
	props: /*@__PURE__*/ Wr({
		actors: {},
		disabled: { type: Boolean },
		plan: {},
		resolvedReason: {},
		selectionSource: {}
	}, {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {}
	}),
	emits: /*@__PURE__*/ Wr([
		"reset",
		"select-all",
		"update:selected"
	], ["update:defaultReason"]),
	setup(e, { emit: t }) {
		let n = di(e, "defaultReason"), r = t;
		function i(e, t) {
			r("update:selected", e, t);
		}
		return (t, a) => (L(), R(I, null, [e.selectionSource === "targets" && e.plan.awards.length === 0 ? (L(), R("div", wx, [...a[3] ||= [z("i", {
			class: "fa-solid fa-bullseye",
			"aria-hidden": "true"
		}, null, -1), z("span", { class: "tw:min-w-0 tw:break-words" }, " The targeted tokens do not contain eligible WFRP4e character actors. ", -1)]])) : H("", !0), z("div", Tx, [B(Cx, {
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
		]), z("section", Ex, [z("div", Dx, [
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
			z("div", Ox, [a[4] ||= z("span", { class: "tw:text-xs tw:text-base-content/60!" }, "This award will record", -1), z("p", kx, D(e.resolvedReason || "No reason"), 1)]),
			a[8] ||= z("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [z("i", {
				class: "fa-solid fa-circle-info",
				"aria-hidden": "true"
			}), z("span", { class: "tw:min-w-0 tw:break-words" }, " Use the cog in the header to change curves and recipient defaults. Saving there refreshes this award ledger with the new calculation. ")], -1)
		])])])], 64));
	}
}), jx = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:gap-2 tw:border-b-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:px-3 tw:py-2 tw:text-base-content! tw:shadow-sm" }, Mx = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-center tw:gap-2" }, Nx = ["title"], Px = {
	class: "dui-tooltip dui-tooltip-left",
	"data-tip": "Configure XP Curve Console"
}, Fx = { class: "tw:grid tw:grid-cols-2 tw:gap-px tw:border-b tw:border-base-content/20! tw:bg-base-content/20! tw:min-[38rem]:grid-cols-4" }, Ix = { class: "tw:contents" }, Lx = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Rx = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, zx = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Bx = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Vx = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Hx = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Ux = { class: "tw:min-w-0 tw:bg-base-100! tw:px-4 tw:py-2" }, Wx = { class: "tw:m-0 tw:font-serif tw:text-lg tw:font-bold tw:text-base-content! tw:tabular-nums" }, Gx = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R(I, null, [z("header", jx, [r[3] ||= z("div", { class: "dui-navbar-start tw:min-w-0 tw:flex-1" }, [z("span", {
			class: "tw:inline-grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-2 tw:border-base-100/50! tw:bg-primary! tw:text-sm tw:text-primary-content! tw:shadow-sm",
			"aria-hidden": "true"
		}, [z("i", { class: "fa-solid fa-chart-line" })])], -1), z("div", Mx, [z("span", {
			class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:max-w-56 tw:whitespace-normal tw:border-base-content/25! tw:py-1 tw:text-center",
			title: e.selectionSource === "targets" ? "Eligible targeted character tokens were selected when the console opened." : "No tokens were targeted, so the configured recipient default was used."
		}, [r[1] ||= z("span", {
			class: "dui-status dui-status-primary dui-status-sm tw:shrink-0",
			"aria-hidden": "true"
		}, null, -1), V(" " + D(e.selectionLabel), 1)], 8, Nx), z("span", Px, [z("button", {
			class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content!",
			"aria-label": "Configure XP Curve Console",
			title: "Configure XP Curve Console",
			type: "button",
			onClick: r[0] ||= (e) => n("configure")
		}, [...r[2] ||= [z("i", {
			class: "fa-solid fa-gear",
			"aria-hidden": "true"
		}, null, -1)]])])])]), z("div", Fx, [z("dl", Ix, [
			z("div", Lx, [r[4] ||= z("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Selected recipients", -1), z("dd", Rx, D(e.selectedCount), 1)]),
			z("div", zx, [r[5] ||= z("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "XP leader total", -1), z("dd", Bx, D(e.highestXp), 1)]),
			z("div", Vx, [r[6] ||= z("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Recipients gaining XP", -1), z("dd", Hx, D(e.positiveAwardCount), 1)]),
			z("div", Ux, [r[7] ||= z("dt", { class: "tw:text-xs tw:text-base-content/60!" }, "Total award", -1), z("dd", Wx, D(e.totalAward) + " XP ", 1)])
		])])], 64));
	}
}), Kx = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, qx = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, Jx = { class: "tw:min-w-0 tw:break-words" }, Yx = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Xx = /* @__PURE__ */ P({
	__name: "XpCurveConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = qb();
		n.initialize(t.initialization, t.actions);
		let { actors: r, canApply: i, defaultReason: a, errorMessage: o, isWorking: s, plan: c, positiveAwardCount: l, resolvedReason: u, selectedActors: d, selectionSource: f } = js(n), p = U(() => f.value === "targets" ? "Recipients: targeted tokens" : `Recipients: ${{
			company: "company default",
			party: "party default",
			world: "world default"
		}[t.initialization.defaultSelection]}`);
		return (e, m) => (L(), R("main", Kx, [
			B(Gx, {
				"highest-xp": M(c).highestXp,
				"positive-award-count": M(l),
				"selected-count": M(d).length,
				"selection-label": p.value,
				"selection-source": M(f),
				"total-award": M(c).totalAward,
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
			M(o) ? (L(), R("div", qx, [m[1] ||= z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), z("span", Jx, D(M(o)), 1)])) : H("", !0),
			z("div", Yx, [B(Ax, {
				"default-reason": M(a),
				"onUpdate:defaultReason": m[0] ||= (e) => /* @__PURE__ */ A(a) ? a.value = e : null,
				actors: M(r),
				disabled: M(s),
				plan: M(c),
				"resolved-reason": M(u),
				"selection-source": M(f),
				onReset: M(n).resetSelection,
				onSelectAll: M(n).setAllActorsSelected,
				"onUpdate:selected": M(n).setActorSelected
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
			B(Zb, {
				disabled: !M(i),
				icon: "fa-solid fa-award",
				label: `Award ${M(c).totalAward} XP`,
				working: M(s),
				onAction: M(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])
		]));
	}
}), Zx = {
	...Gb,
	launchers: { tokenControls: !0 },
	parameters: { ...Gb.parameters }
}, Qx = As("xp-curve-configurator", () => {
	let e = /* @__PURE__ */ j([]), t = /* @__PURE__ */ j({ ...Zx.parameters }), n = /* @__PURE__ */ j(Zx.defaultReason), r = /* @__PURE__ */ j(Zx.defaultSelection), i = /* @__PURE__ */ j({ ...Zx.launchers }), a = /* @__PURE__ */ j(), o = /* @__PURE__ */ j(), s = /* @__PURE__ */ j(!1), c, l = U(() => Lb(e.value, t.value)), u = U(() => Math.max(0, ...l.value.awards.map((e) => e.gap))), d = U(() => Bb(t.value, Math.max(u.value * 1.1, 1))), f = U(() => Vb(t.value, Math.max(l.value.highestXp * 1.1, 1)));
	function p(s, l) {
		c = l, e.value = s.actors.map((e) => ({ ...e })), t.value = { ...s.parameters }, n.value = s.defaultReason, r.value = s.defaultSelection, i.value = { ...s.launchers }, a.value = void 0, o.value = void 0;
	}
	function m(e) {
		r.value = e, o.value = void 0;
	}
	function h() {
		t.value = { ...Zx.parameters }, n.value = Zx.defaultReason, r.value = Zx.defaultSelection, i.value = { ...Zx.launchers }, a.value = void 0, o.value = "Defaults restored. Save configuration to apply them.";
	}
	async function g() {
		if (!s.value) {
			s.value = !0, a.value = void 0, o.value = void 0;
			try {
				t.value = Ib(t.value);
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
function $x(e, t, n, r) {
	return {
		maximumGap: Math.max(1, e * 1.4, ...n.map((e) => e.gap), ...r.map((e) => e.gap * 1.05)),
		maximumValue: Math.max(1, t * 1.25, ...n.map((e) => e.award * 1.05), ...r.map((e) => e.catchUpValue * 1.05))
	};
}
function eS(e, t, n) {
	return { maximumRecipientXp: Math.max(1e3, e * 4, ...t.map((e) => e.recipientXp), ...n.map((e) => e.beforeXp * 1.05)) };
}
function tS(e) {
	let t = (t) => cS(t, e.bounds.maximumGap), n = (t) => lS(t, e.bounds.maximumValue);
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
function nS(e) {
	let t = (t) => cS(t, e.bounds.maximumRecipientXp), n = uS;
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
function rS(e, t, n, r) {
	if (e === "reference") {
		let r = dS((t.x - 68) / 472, .001, 1), i = 1 - dS((t.y - 24) / 192, 0, 1);
		return {
			gapForMaximumAward: Math.max(1, Math.round(r * n.maximumGap)),
			kind: e,
			maximumAward: Math.max(0, Math.round(i * n.maximumValue))
		};
	}
	let i = dS((216 - t.y) / 192 * (n.maximumValue / Math.max(1, r)), .03, .99);
	return {
		curveExponent: fS(dS(Math.log(i) / Math.log(.5), .1, 5), .05),
		kind: e
	};
}
function iS(e, t, n) {
	if (e === "pivot") {
		let r = dS((t.x - 68) / 472, .001, 1);
		return {
			kind: e,
			scalePivot: Math.max(1, Math.round(r * n.maximumRecipientXp))
		};
	}
	let r = dS(1 - (t.y - 24) / 192, .25, .99);
	return {
		kind: e,
		scaleExponent: fS(dS(Math.log(r) / Math.log(.5), 0, 2), .05)
	};
}
function aS(e, t, n) {
	let r = Math.max(10, Math.round(t / 20)), i = Math.max(1, Math.round(Math.max(1, n) / 20));
	if (e === "ArrowLeft" || e === "ArrowRight") return { gapForMaximumAward: Math.max(1, t + (e === "ArrowLeft" ? -r : r)) };
	if (e === "ArrowUp" || e === "ArrowDown") return { maximumAward: Math.max(0, n + (e === "ArrowUp" ? i : -i)) };
}
function oS(e, t, n, r) {
	if ([
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp"
	].includes(e)) return fS(dS(t + (e === "ArrowUp" || e === "ArrowRight" ? -1 : 1) * .05, n, r), .05);
}
function sS(e, t) {
	if (e !== "ArrowLeft" && e !== "ArrowRight") return;
	let n = Math.max(100, Math.round(t / 20));
	return Math.max(1, t + (e === "ArrowLeft" ? -n : n));
}
function cS(e, t) {
	return 68 + Math.max(0, e) / Math.max(1, t) * 472;
}
function lS(e, t) {
	return 24 + (1 - Math.max(0, e) / Math.max(1, t)) * 192;
}
function uS(e) {
	return 24 + (1 - dS(e, 0, 1)) * 192;
}
function dS(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function fS(e, t) {
	let n = t.toString().split(".")[1]?.length ?? 0;
	return Number((Math.round(e / t) * t).toFixed(n));
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graphMath.ts
function pS(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: (t.clientX - n.left) / n.width * 560,
		y: (t.clientY - n.top) / n.height * 270
	};
}
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/GraphCanvas.vue?vue&type=script&setup=true&lang.ts
var mS = ["viewBox", "aria-labelledby"], hS = ["id"], gS = ["id"], _S = [
	"x1",
	"x2",
	"y1",
	"y2"
], vS = [
	"x1",
	"x2",
	"y1",
	"y2"
], yS = [
	"x1",
	"x2",
	"y1",
	"y2"
], bS = ["points"], xS = ["cx", "cy"], SS = ["x", "y"], CS = ["x", "y"], wS = ["x", "y"], TS = ["x", "y"], ES = ["x", "y"], DS = ["x", "y"], OS = ["transform", "y"], kS = /* @__PURE__ */ P({
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
			viewBox: `0 0 ${M(560)} ${M(270)}`,
			role: "img",
			"aria-labelledby": `${e.titleId} ${e.descriptionId}`,
			onPointercancel: r[0] ||= (e) => n("pointercancel", e),
			onPointermove: r[1] ||= (e) => n("pointermove", e),
			onPointerup: r[2] ||= (e) => n("pointerup", e)
		}, [
			z("title", { id: e.titleId }, D(e.title), 9, hS),
			z("desc", { id: e.descriptionId }, D(e.description), 9, gS),
			z("line", {
				class: "tw:text-base-content/25!",
				x1: M(68),
				x2: M(68),
				y1: M(24),
				y2: M(24) + M(192),
				stroke: "currentColor"
			}, null, 8, _S),
			z("line", {
				class: "tw:text-base-content/25!",
				x1: M(68),
				x2: M(68) + M(472),
				y1: M(24) + M(192),
				y2: M(24) + M(192),
				stroke: "currentColor"
			}, null, 8, vS),
			z("line", {
				class: "tw:text-base-content/25!",
				x1: e.verticalGuideX,
				x2: e.verticalGuideX,
				y1: M(24),
				y2: M(24) + M(192),
				stroke: "currentColor",
				"stroke-dasharray": "4 5"
			}, null, 8, yS),
			Lr(t.$slots, "guides"),
			z("polyline", {
				class: "tw:text-secondary!",
				fill: "none",
				points: e.points,
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "3"
			}, null, 8, bS),
			(L(!0), R(I, null, F(e.markers, (e) => (L(), R("g", {
				key: e.actorId,
				class: "tw:text-base-content!",
				"aria-hidden": "true"
			}, [z("circle", {
				cx: e.x,
				cy: e.y,
				fill: "currentColor",
				r: "9"
			}, [z("title", null, D(e.label), 1)], 8, xS), z("text", {
				class: "tw:text-base-100!",
				x: e.x,
				y: e.y + 3,
				fill: "currentColor",
				"font-size": "9",
				"font-weight": "700",
				"text-anchor": "middle"
			}, D(e.index), 9, SS)]))), 128)),
			Lr(t.$slots, "handles"),
			z("text", {
				class: "tw:text-base-content/65!",
				x: M(68),
				y: M(24) + M(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "middle"
			}, " 0 ", 8, CS),
			z("text", {
				class: "tw:text-base-content/65!",
				x: M(68) + M(472),
				y: M(24) + M(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, D(e.maximumXLabel), 9, wS),
			z("text", {
				class: "tw:text-base-content/75!",
				x: M(68) + M(472) / 2,
				y: M(270) - 8,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, D(e.xAxisLabel), 9, TS),
			e.maximumYLabel ? (L(), R("text", {
				key: 0,
				class: "tw:text-base-content/65!",
				x: M(68) - 10,
				y: M(24) + 4,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, D(e.maximumYLabel), 9, ES)) : H("", !0),
			z("text", {
				class: "tw:text-base-content/65!",
				x: M(68) - 10,
				y: M(24) + M(192) + 3,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, D(e.minimumYLabel), 9, DS),
			z("text", {
				class: "tw:text-base-content/75!",
				transform: `rotate(-90 16 ${M(24) + M(192) / 2})`,
				x: "16",
				y: M(24) + M(192) / 2,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, D(e.yAxisLabel), 9, OS),
			Lr(t.$slots, "labels")
		], 40, mS));
	}
}), AS = [
	"role",
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], jS = ["x", "y"], MS = ["x", "y"], NS = /* @__PURE__ */ P({
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
			onPointerdown: r[1] ||= Go((e) => n("pointerdown", e), ["stop"])
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
		}, null, 8, jS), z("rect", {
			class: "tw:text-base-100!",
			x: e.x - 3,
			y: e.y - 3,
			fill: "currentColor",
			height: "6",
			rx: "1",
			width: "6"
		}, null, 8, MS)], 40, AS));
	}
}), PS = {
	key: 0,
	class: "tw:mt-2"
}, FS = { class: "tw:mt-1 tw:grid tw:[list-style:none] tw:grid-cols-1 tw:gap-x-3 tw:gap-y-1 tw:p-0 tw:text-xs tw:text-base-content/70! tw:min-[32rem]:grid-cols-2" }, IS = { class: "tw:font-bold tw:text-base-content!" }, LS = { class: "tw:break-words" }, RS = /* @__PURE__ */ P({
	__name: "RecipientLegend",
	props: { items: {} },
	setup(e) {
		return (t, n) => e.items.length ? (L(), R("figcaption", PS, [n[0] ||= z("span", { class: "tw:text-xs tw:font-semibold" }, "Selected recipients", -1), z("ol", FS, [(L(!0), R(I, null, F(e.items, (e) => (L(), R("li", {
			key: e.actorId,
			class: "tw:min-w-0"
		}, [z("span", IS, D(e.index) + ".", 1), z("span", LS, D(e.text), 1)]))), 128))])])) : H("", !0);
	}
}), zS = [
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], BS = ["cx", "cy"], VS = ["cx", "cy"], HS = /* @__PURE__ */ P({
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
			onPointerdown: r[1] ||= Go((e) => n("pointerdown", e), ["stop"])
		}, [z("circle", {
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "8",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18"
		}, null, 8, BS), z("circle", {
			class: "tw:text-base-100!",
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "3"
		}, null, 8, VS)], 40, zS));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/graph/drag.ts
function US(e, t) {
	let n = /* @__PURE__ */ sn();
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
function WS(e, t) {
	let n = U(() => $x(e.gapForMaximumAward, e.maximumAward, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = US(() => ({ ...n.value }), _), s = U(() => r.value?.snapshot ?? n.value), c = U(() => tS({
		awards: e.awards,
		bounds: s.value,
		curveExponent: e.curveExponent,
		gapForMaximumAward: e.gapForMaximumAward,
		maximumAward: e.maximumAward,
		samples: e.samples
	})), l = U(() => s.value.maximumGap), u = U(() => c.value.points), d = U(() => c.value.recipientLegend), f = U(() => c.value.recipientPoints), p = U(() => c.value.referencePoint), m = U(() => c.value.shapePoint);
	function h(e) {
		return cS(e, s.value.maximumGap);
	}
	function g(e) {
		return lS(e, s.value.maximumValue);
	}
	function _(n, r) {
		let i = rS(n.kind, pS(n.svg, r), n.snapshot, e.maximumAward);
		if (i.kind === "reference") {
			t("update:gapForMaximumAward", i.gapForMaximumAward), t("update:maximumAward", i.maximumAward);
			return;
		}
		t("update:curveExponent", i.curveExponent);
	}
	function v(n) {
		let r = aS(n.key, e.gapForMaximumAward, e.maximumAward);
		r && (n.preventDefault(), r.gapForMaximumAward !== void 0 && t("update:gapForMaximumAward", r.gapForMaximumAward), r.maximumAward !== void 0 && t("update:maximumAward", r.maximumAward));
	}
	function y(n) {
		let r = oS(n.key, e.curveExponent, .1, 5);
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
var GS = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-catch-up-graph-heading"
}, KS = [
	"x1",
	"x2",
	"y1",
	"y2"
], qS = ["x", "y"], JS = /* @__PURE__ */ P({
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
		let { beginDrag: n, endDrag: r, maximumGap: i, points: a, recipientLegend: o, recipientPoints: s, referencePoint: c, shapePoint: l, toGraphX: u, toGraphY: d, updateDrag: f, updateReferenceWithKeyboard: p, updateShapeWithKeyboard: m } = WS(e, t);
		return (t, h) => (L(), R("figure", GS, [
			h[2] ||= z("div", { class: "tw:mb-2" }, [z("h4", {
				id: "xp-catch-up-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Initial catch-up value by XP gap "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to set the reference gap and hard limit. Drag the round point to shape the curve. ")], -1),
			B(kS, {
				description: "The horizontal axis is the recipient's gap below the selected XP leader. The vertical axis is the initial catch-up value before recipient decay, companion rate, and the final hard limit. Numbered markers identify selected recipients.",
				"description-id": "xp-catch-up-graph-description",
				markers: M(s),
				"maximum-x-label": `${Math.round(M(i))} XP`,
				"minimum-y-label": "0",
				points: M(a),
				title: "Editable catch-up XP curve",
				"title-id": "xp-catch-up-graph-title",
				"vertical-guide-x": M(u)(e.gapForMaximumAward),
				"x-axis-label": "Gap below selected XP leader",
				"y-axis-label": "Initial catch-up XP",
				onPointercancel: M(r),
				onPointermove: M(f),
				onPointerup: M(r)
			}, {
				guides: Xn(() => [z("line", {
					class: "tw:text-warning",
					x1: M(68),
					x2: M(68) + M(472),
					y1: M(d)(e.maximumAward),
					y2: M(d)(e.maximumAward),
					stroke: "currentColor",
					"stroke-dasharray": "6 5"
				}, null, 8, KS)]),
				handles: Xn(() => [B(HS, {
					"aria-label": "Catch-up curve shape",
					"aria-value-max": 5,
					"aria-value-min": .1,
					"aria-value-now": e.curveExponent,
					"aria-value-text": `Exponent ${e.curveExponent}`,
					x: M(l).x,
					y: M(l).y,
					onKeydown: M(m),
					onPointerdown: h[0] ||= (e) => M(n)("shape", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), B(NS, {
					"aria-label": `Reference point: ${e.gapForMaximumAward} XP gap and ${e.maximumAward} XP hard limit. Use left and right arrows for the gap, up and down arrows for the hard limit.`,
					role: "button",
					x: M(c).x,
					y: M(c).y,
					onKeydown: M(p),
					onPointerdown: h[1] ||= (e) => M(n)("reference", e)
				}, null, 8, [
					"aria-label",
					"x",
					"y",
					"onKeydown"
				])]),
				labels: Xn(() => [z("text", {
					class: "tw:text-warning",
					x: M(68) + 7,
					y: Math.max(M(24) + 12, M(d)(e.maximumAward) - 7),
					fill: "currentColor",
					"font-size": "11",
					"font-weight": "600"
				}, " Hard limit " + D(e.maximumAward) + " XP ", 9, qS)]),
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
			B(RS, { items: M(o) }, null, 8, ["items"])
		]));
	}
});
//#endregion
//#region src/view/apps/xp-curve-configurator/curve/useDecayGraph.ts
function YS(e, t) {
	let n = U(() => eS(e.scalePivot, e.samples, e.awards)), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = US(() => ({ ...n.value }), g), s = U(() => r.value?.snapshot ?? n.value), c = U(() => nS({
		awards: e.awards,
		bounds: s.value,
		samples: e.samples,
		scaleExponent: e.scaleExponent,
		scalePivot: e.scalePivot
	})), l = U(() => s.value.maximumRecipientXp), u = U(() => c.value.points), d = U(() => c.value.pivotPoint), f = U(() => c.value.recipientLegend), p = U(() => c.value.recipientPoints), m = U(() => c.value.strengthPoint);
	function h(e) {
		return cS(e, s.value.maximumRecipientXp);
	}
	function g(e, n) {
		let r = iS(e.kind, pS(e.svg, n), e.snapshot);
		if (r.kind === "pivot") {
			t("update:scalePivot", r.scalePivot);
			return;
		}
		t("update:scaleExponent", r.scaleExponent);
	}
	function _(n) {
		let r = sS(n.key, e.scalePivot);
		r !== void 0 && (n.preventDefault(), t("update:scalePivot", r));
	}
	function v(n) {
		let r = oS(n.key, e.scaleExponent, 0, 2);
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
var XS = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-decay-graph-heading"
}, ZS = /* @__PURE__ */ P({
	__name: "XpDecayGraph",
	props: {
		awards: {},
		samples: {},
		scaleExponent: {},
		scalePivot: {}
	},
	emits: ["update:scaleExponent", "update:scalePivot"],
	setup(e, { emit: t }) {
		let { beginDrag: n, endDrag: r, maximumRecipientXp: i, pivotPoint: a, points: o, recipientLegend: s, recipientPoints: c, strengthPoint: l, toGraphX: u, updateDrag: d, updatePivotWithKeyboard: f, updateStrengthWithKeyboard: p } = YS(e, t);
		return (t, m) => (L(), R("figure", XS, [
			m[2] ||= z("div", { class: "tw:mb-2" }, [z("h4", {
				id: "xp-decay-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Catch-up strength by recipient total XP "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Drag the diamond to choose where decay begins. Drag the round point to make decay gentler or stronger. ")], -1),
			B(kS, {
				description: "The horizontal axis is each recipient's own total XP. The vertical axis is the multiplier applied to that recipient's initial catch-up value. Numbered markers identify selected recipients.",
				"description-id": "xp-decay-graph-description",
				markers: M(c),
				"maximum-x-label": `${Math.round(M(i))} XP`,
				"maximum-y-label": "100%",
				"minimum-y-label": "0%",
				points: M(o),
				title: "Editable recipient XP decay curve",
				"title-id": "xp-decay-graph-title",
				"vertical-guide-x": M(u)(e.scalePivot),
				"x-axis-label": "Recipient total XP",
				"y-axis-label": "Decay multiplier",
				onPointercancel: M(r),
				onPointermove: M(d),
				onPointerup: M(r)
			}, {
				handles: Xn(() => [B(HS, {
					"aria-label": "Recipient decay strength",
					"aria-value-max": 2,
					"aria-value-min": 0,
					"aria-value-now": e.scaleExponent,
					"aria-value-text": `Decay exponent ${e.scaleExponent}`,
					x: M(l).x,
					y: M(l).y,
					onKeydown: M(p),
					onPointerdown: m[0] ||= (e) => M(n)("strength", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), B(NS, {
					"aria-label": "Recipient total XP where decay begins",
					"aria-value-max": Math.round(M(i)),
					"aria-value-min": 1,
					"aria-value-now": e.scalePivot,
					"aria-value-text": `${e.scalePivot} total XP`,
					x: M(a).x,
					y: M(a).y,
					onKeydown: M(f),
					onPointerdown: m[1] ||= (e) => M(n)("pivot", e)
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
			B(RS, { items: M(s) }, null, 8, ["items"])
		]));
	}
}), QS = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "curve-settings-title"
}, $S = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, eC = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[66rem]:grid-cols-2" }, tC = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, nC = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, rC = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, iC = { class: "dui-fieldset tw:min-w-0" }, aC = { class: "dui-fieldset tw:min-w-0" }, oC = { class: "dui-fieldset tw:min-w-0" }, sC = { class: "dui-card dui-card-border tw:min-w-0 tw:border tw:border-base-content/20! tw:bg-base-200! tw:text-base-content! tw:shadow-sm" }, cC = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, lC = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, uC = { class: "dui-fieldset tw:min-w-0" }, dC = { class: "dui-fieldset tw:min-w-0" }, fC = { class: "dui-fieldset tw:min-w-0" }, pC = /* @__PURE__ */ P({
	__name: "XpCurveConfiguration",
	props: /*@__PURE__*/ Wr({
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
		let t = di(e, "companionMultiplier"), n = di(e, "curveExponent"), r = di(e, "gapForMaximumAward"), i = di(e, "maximumAward"), a = di(e, "scaleExponent"), o = di(e, "scalePivot");
		return (s, c) => (L(), R("section", QS, [z("div", $S, [
			c[31] ||= z("div", null, [z("h2", {
				id: "curve-settings-title",
				class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
			}, " How awards are calculated "), z("p", { class: "tw:m-0 tw:max-w-3xl tw:text-xs tw:text-base-content/65!" }, " The graphs and number fields are two controls for the same settings. Drag either curve and its fields update immediately. ")], -1),
			z("div", eC, [z("article", tC, [z("div", nC, [
				c[20] ||= z("div", null, [z("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 1. Catch-up curve "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " This curve converts the XP gap below the selected leader into an initial XP value. ")], -1),
				z("div", rC, [
					z("fieldset", iC, [
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
					z("fieldset", aC, [
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
					z("fieldset", oC, [
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
				B(JS, {
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
			])]), z("article", sC, [z("div", cC, [
				c[30] ||= z("div", null, [z("h3", { class: "dui-card-title tw:font-serif tw:text-base tw:text-base-content!" }, " 2. Recipient decay curve "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " High-XP builds depend less on raw XP differences. This multiplier is evaluated separately for every recipient. ")], -1),
				z("div", lC, [
					z("fieldset", uC, [
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
					z("fieldset", dC, [
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
					z("fieldset", fC, [
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
				B(ZS, {
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
}), mC = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "recipient-defaults-title"
}, hC = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, gC = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-4 tw:min-[42rem]:grid-cols-2" }, _C = { class: "dui-fieldset tw:min-w-0" }, vC = { class: "dui-fieldset tw:min-w-0" }, yC = /* @__PURE__ */ P({
	__name: "XpRecipientDefaults",
	props: {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {},
		defaultSelection: { required: !0 },
		defaultSelectionModifiers: {}
	},
	emits: ["update:defaultReason", "update:defaultSelection"],
	setup(e) {
		let t = di(e, "defaultReason"), n = di(e, "defaultSelection");
		return (e, r) => (L(), R("section", mC, [z("div", hC, [r[9] ||= z("div", null, [z("h2", {
			id: "recipient-defaults-title",
			class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
		}, " Recipient and journal defaults "), z("p", { class: "tw:m-0 tw:text-sm tw:text-base-content/70!" }, " These values seed a newly opened console when no eligible tokens are targeted. ")], -1), z("div", gC, [z("fieldset", _C, [
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
			]], 512), [[zo, n.value]]),
			r[5] ||= z("p", { class: "dui-label tw:whitespace-normal" }, " Explicit targets replace this Drowsy’s WFRP4e Toolkit default. ", -1)
		]), z("fieldset", vC, [
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
}), bC = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, xC = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, SC = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mb-3",
	role: "alert"
}, CC = { class: "tw:min-w-0 tw:break-words" }, wC = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mb-3",
	role: "status",
	"aria-live": "polite"
}, TC = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[54rem]:grid-cols-[minmax(15rem,0.72fr)_minmax(0,2fr)]" }, EC = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:text-base-content! tw:shadow-md",
	"aria-labelledby": "xp-launcher-settings"
}, DC = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, OC = { class: "dui-fieldset tw:gap-2" }, kC = { class: "dui-label tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-box tw:border tw:border-base-content/15! tw:bg-base-200! tw:p-3 tw:text-base-content! tw:whitespace-normal" }, AC = { class: "tw:mt-3 tw:min-w-0" }, jC = { class: "tw:flex tw:min-w-0 tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-2 tw:border-t-4 tw:border-double tw:border-base-content/25! tw:bg-base-100! tw:p-4 tw:min-[34rem]:flex-row tw:min-[34rem]:items-center tw:min-[34rem]:justify-between" }, MC = { class: "tw:flex tw:min-w-0 tw:flex-col tw:gap-2 tw:min-[30rem]:flex-row" }, NC = ["disabled"], PC = ["disabled"], FC = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, IC = {
	key: 1,
	class: "fa-solid fa-stamp",
	"aria-hidden": "true"
}, LC = /* @__PURE__ */ P({
	__name: "XpCurveConfiguratorApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Qx();
		n.initialize(t.initialization, t.actions);
		let { curveSamples: r, decaySamples: i, defaultReason: a, defaultSelection: o, errorMessage: s, isSaving: c, launchers: l, parameters: u, plan: d, statusMessage: f } = js(n);
		return (e, t) => (L(), R("main", bC, [
			B(Gs, {
				description: "Set launchers, recipient defaults, and the catch-up and decay curves used by new award consoles.",
				icon: "fa-solid fa-sliders",
				title: "XP Curve Configurator"
			}),
			z("div", xC, [
				M(s) ? (L(), R("div", SC, [t[10] ||= z("i", {
					class: "fa-solid fa-triangle-exclamation",
					"aria-hidden": "true"
				}, null, -1), z("span", CC, D(M(s)), 1)])) : H("", !0),
				M(f) ? (L(), R("div", wC, [t[11] ||= z("i", {
					class: "fa-solid fa-circle-check",
					"aria-hidden": "true"
				}, null, -1), z("span", null, D(M(f)), 1)])) : H("", !0),
				z("div", TC, [z("section", EC, [z("div", DC, [
					t[14] ||= z("div", null, [z("h2", {
						id: "xp-launcher-settings",
						class: "dui-card-title tw:font-serif tw:text-lg tw:text-base-content!"
					}, " Console launchers "), z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Client preferences for this browser and user. ")], -1),
					z("fieldset", OC, [t[13] ||= z("legend", { class: "dui-fieldset-legend tw:text-base-content!" }, "Available locations", -1), z("label", kC, [N(z("input", {
						"onUpdate:modelValue": t[0] ||= (e) => M(l).tokenControls = e,
						class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:checked:border-primary! tw:checked:bg-primary! tw:checked:text-primary-content!",
						type: "checkbox"
					}, null, 512), [[G, M(l).tokenControls]]), t[12] ||= z("span", { class: "tw:min-w-0" }, [z("strong", { class: "tw:block" }, "Token Controls"), z("span", { class: "tw:text-xs tw:text-base-content/65!" }, " Show the chart launcher in Token Controls. ")], -1)])]),
					t[15] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, " Launcher changes apply after a reload. Macros and the module API stay available. ", -1)
				])]), B(yC, {
					"default-reason": M(a),
					"onUpdate:defaultReason": t[1] ||= (e) => /* @__PURE__ */ A(a) ? a.value = e : null,
					"default-selection": M(o),
					"onUpdate:defaultSelection": M(n).setDefaultSelection
				}, null, 8, [
					"default-reason",
					"default-selection",
					"onUpdate:defaultSelection"
				])]),
				z("div", AC, [B(pC, {
					"companion-multiplier": M(u).companionMultiplier,
					"onUpdate:companionMultiplier": t[2] ||= (e) => M(u).companionMultiplier = e,
					"curve-exponent": M(u).curveExponent,
					"onUpdate:curveExponent": t[3] ||= (e) => M(u).curveExponent = e,
					"gap-for-maximum-award": M(u).gapForMaximumAward,
					"onUpdate:gapForMaximumAward": t[4] ||= (e) => M(u).gapForMaximumAward = e,
					"maximum-award": M(u).maximumAward,
					"onUpdate:maximumAward": t[5] ||= (e) => M(u).maximumAward = e,
					"scale-exponent": M(u).scaleExponent,
					"onUpdate:scaleExponent": t[6] ||= (e) => M(u).scaleExponent = e,
					"scale-pivot": M(u).scalePivot,
					"onUpdate:scalePivot": t[7] ||= (e) => M(u).scalePivot = e,
					awards: M(d).awards,
					"decay-samples": M(i),
					samples: M(r)
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
			z("footer", jC, [t[18] ||= z("p", { class: "tw:m-0 tw:min-w-0 tw:text-xs tw:text-base-content/65!" }, " Saving configuration never awards XP. World defaults apply to the next console opening. ", -1), z("div", MC, [z("button", {
				class: "dui-btn dui-btn-ghost tw:min-w-44 tw:rounded-full tw:border tw:border-base-content/20! tw:bg-base-200!",
				disabled: M(c),
				type: "button",
				onClick: t[8] ||= (...e) => M(n).resetToDefaults && M(n).resetToDefaults(...e)
			}, [...t[16] ||= [z("i", {
				class: "fa-solid fa-arrow-rotate-left",
				"aria-hidden": "true"
			}, null, -1), V(" Reset to defaults ", -1)]], 8, NC), z("button", {
				class: "dui-btn dui-btn-primary tw:min-w-48 tw:rounded-full tw:border-2 tw:border-base-100/40! tw:shadow-md",
				disabled: M(c),
				type: "button",
				onClick: t[9] ||= (...e) => M(n).saveConfiguration && M(n).saveConfiguration(...e)
			}, [M(c) ? (L(), R("span", FC)) : (L(), R("i", IC)), t[17] ||= V(" Save configuration ", -1)], 8, PC)])])
		]));
	}
});
//#endregion
//#region src/functions/xp-curve/selection.ts
function RC(e) {
	let { assignedActorIds: t, candidates: n, defaultSelection: r, targetedActorIds: i } = e;
	return n.map((e) => {
		let n = zC(e, t);
		return {
			category: n,
			id: e.id,
			name: e.name,
			selected: i?.has(e.id) ?? BC(e.id, n, r, t),
			totalXp: e.totalXp
		};
	}).sort(VC);
}
function zC(e, t) {
	return e.hasPlayerOwner && !t.has(e.id) ? "companion" : "standard";
}
function BC(e, t, n, r) {
	return n === "world" ? !0 : n === "company" ? r.has(e) || t === "companion" : r.has(e);
}
function VC(e, t) {
	return e.selected === t.selected ? e.name.localeCompare(t.name) : e.selected ? -1 : 1;
}
//#endregion
//#region src/module/xp-curve/actors.ts
function HC(e) {
	let t = qC(), n = JC(), r = n === void 0 ? "default" : "targets";
	return {
		actors: RC({
			assignedActorIds: t,
			candidates: Array.from(game.actors).filter((e) => e.type === "character").map(WC),
			defaultSelection: e,
			targetedActorIds: n
		}),
		selectionSource: r
	};
}
function UC(e) {
	let t = qC();
	return e.map((e) => {
		let n = game.actors.get(e);
		if (!n || n.type !== "character") throw Error(`XP recipient ${e} is no longer an available character actor.`);
		return GC(n, zC(n, t), !0);
	});
}
function WC(e) {
	let t = KC(e);
	return {
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		name: e.name,
		totalXp: t.totalXp
	};
}
function GC(e, t, n) {
	let r = KC(e);
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
function KC(e) {
	let t = e.system;
	if (!YC(t)) throw Error(`WFRP4e actor "${e.name}" does not expose readable system data.`);
	let n = t.details, r = t.awardExp;
	if (!YC(n) || typeof r != "function") throw Error(`WFRP4e actor "${e.name}" does not expose XP award operations.`);
	let i = n.experience;
	if (!YC(i) || !Number.isFinite(Number(i.total))) throw Error(`WFRP4e actor "${e.name}" does not expose a numeric total XP value.`);
	return {
		awardExperience: async (e, n) => {
			await r.call(t, e, n, null, !0);
		},
		totalXp: Math.max(0, Math.round(Number(i.total)))
	};
}
function qC() {
	return new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => typeof e == "string"));
}
function JC() {
	let e = game.user?.targets;
	if (!(!e || e.size === 0)) return new Set(Array.from(e).map((e) => e.actor).filter((e) => e?.type === "character").map((e) => e.id));
}
function YC(e) {
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
function XC() {
	return {
		defaultReason: tw($.defaultReason),
		defaultSelection: nw($.defaultSelection),
		parameters: {
			companionMultiplier: ew($.companionMultiplier),
			curveExponent: ew($.curveExponent),
			gapForMaximumAward: ew($.gapForMaximumAward),
			maximumAward: ew($.maximumAward),
			scaleExponent: ew($.scaleExponent),
			scalePivot: ew($.scalePivot)
		}
	};
}
async function ZC(e) {
	let t = [
		[$.companionMultiplier, e.parameters.companionMultiplier],
		[$.curveExponent, e.parameters.curveExponent],
		[$.defaultReason, e.defaultReason],
		[$.defaultSelection, e.defaultSelection],
		[$.gapForMaximumAward, e.parameters.gapForMaximumAward],
		[$.maximumAward, e.parameters.maximumAward],
		[$.scaleExponent, e.parameters.scaleExponent],
		[$.scalePivot, e.parameters.scalePivot]
	];
	for (let [e, n] of t) await game.settings.set(q, e, n);
}
function QC(e) {
	return $C(e);
}
function $C(e) {
	return game.settings.get(q, e) === !0;
}
function ew(e) {
	return Number(game.settings.get(q, e));
}
function tw(e) {
	let t = game.settings.get(q, e);
	return typeof t == "string" ? t : "";
}
function nw(e) {
	return rw(tw(e));
}
function rw(e) {
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/xp-curve/configuration.ts
function iw() {
	let e = XC();
	return {
		...e,
		actors: HC(e.defaultSelection).actors,
		launchers: { tokenControls: QC($.showTokenControlsLauncher) }
	};
}
async function aw(e) {
	Y(J.xpCurveConsole), await ZC({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: Ib(e.parameters)
	}), await game.settings.set(q, $.showTokenControlsLauncher, e.launchers.tokenControls), ui.notifications.info("XP Curve Console configuration saved.");
}
//#endregion
//#region src/module/apps/xp-curve-configurator/XpCurveConfiguratorApplication.ts
var ow = class extends Oc {
	static ACCESS_POLICY = J.xpCurveConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-xp-curve-configurator`],
		id: `${q}-xp-curve-configurator`,
		position: {
			height: 760,
			width: 920
		},
		window: {
			icon: "fa-solid fa-chart-line",
			resizable: !0,
			title: `${wc} — XP Curve Configurator`
		}
	};
	#e;
	constructor(e = {}) {
		super(), this.#e = e;
	}
	getVueComponent() {
		return LC;
	}
	getVueProps() {
		return {
			actions: { saveConfiguration: async (e) => {
				await aw(e), await this.#e.onSaved?.();
			} },
			initialization: iw()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-configurator/open.ts
async function sw(e = {}) {
	let t = new ow(e);
	return await t.render(!0), t;
}
function cw(e = {}) {
	sw(e).catch((e) => {
		console.error(`${q} | Failed to open the XP Curve Configurator.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Configurator. See the browser console for details.");
	});
}
//#endregion
//#region src/module/xp-curve/initialization.ts
function lw() {
	let e = XC(), t = HC(e.defaultSelection);
	return {
		...e,
		...t,
		reasonContext: uw()
	};
}
function uw() {
	return {
		date: game.world.nextSession?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		session: Yy()
	};
}
//#endregion
//#region src/module/xp-curve/service.ts
async function dw(e) {
	Y(J.xpCurveConsole);
	let t = UC(Array.from(new Set(e.actorIds))), n = Ib(e.parameters), r = Lb(t.map((e) => e.choice), n);
	if (r.awards.length < 2) throw Error("Select at least two character actors to calculate catch-up XP.");
	if (r.totalAward < 1) throw Error("This curve produces no XP awards for the selected actors.");
	await ZC({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: n
	});
	let i = xy(e.defaultReason, uw()), a = [];
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
	return await fw(o), ui.notifications.info(`Awarded ${o.totalAward} total XP across ${a.length} actors.`), o;
}
async function fw(e) {
	let t = e.awards.filter((e) => e.award > 0).map((e) => `<li><strong>${Sy(e.actorName)}</strong>: +${e.award} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Curve Award</h2><p>${Sy(e.reason)}</p><ul>${t}</ul><p><strong>${e.totalAward} XP awarded in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
//#endregion
//#region src/module/apps/xp-curve-console/XpCurveConsoleApplication.ts
var pw = class extends Oc {
	static ACCESS_POLICY = J.xpCurveConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-xp-curve-console`],
		id: `${q}-xp-curve-console`,
		position: {
			height: 720,
			width: 820
		},
		window: {
			icon: "fa-solid fa-chart-line",
			resizable: !0,
			title: `${wc} — XP Curve Console`
		}
	};
	getVueComponent() {
		return Xx;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: dw,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${q} | Failed to close the XP Curve Console.`, e), ui.notifications.error("XP awards completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				},
				openConfigurator: () => {
					cw({ onSaved: () => this.render(!0) });
				}
			},
			initialization: lw()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-console/open.ts
async function mw() {
	let e = new pw();
	return await e.render(!0), e;
}
function hw() {
	mw().catch((e) => {
		console.error(`${q} | Failed to open the XP Curve Console.`, e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not open the XP Curve Console. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/session-management/form.ts
function gw(e) {
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
function _w(e, t) {
	return {
		chatExport: t.exportChat,
		fortuneReset: t.fortuneReset,
		holdingScene: t.holdingScene,
		pause: t.pause,
		xpAward: e.amount > 0,
		sessionReference: e.currentSessionReference,
		nextSessionReference: Ty(e.currentSessionReference),
		occurredAt: e.occurredAtLocal,
		xp: {
			...t.xp,
			defaultAmount: e.amount,
			actorIds: e.actors.filter((e) => e.selected).map((e) => e.id)
		}
	};
}
function vw(e, t, n) {
	return {
		...e,
		turnover: t.operation,
		...t.record ? {
			sessions: [t.record, ...e.sessions].slice(0, 500),
			currentSessionReference: t.operation.request?.nextSessionReference ?? n
		} : {}
	};
}
function yw(e, t, n, r) {
	return {
		form: {
			...e,
			amount: e.amount === n.xp.defaultAmount ? r.settings.xp.defaultAmount : e.amount,
			currentSessionReference: r.currentSessionReference === t ? e.currentSessionReference : r.currentSessionReference
		},
		reloadActors: r.settings.xp.defaultSelection !== n.xp.defaultSelection
	};
}
//#endregion
//#region src/functions/xp-award/calculate.ts
function bw(e, t) {
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
//#region src/state/apps/session-management/store.ts
var xw = As("session-management", () => {
	let e = /* @__PURE__ */ j(), t = /* @__PURE__ */ j(""), n = /* @__PURE__ */ j(""), r = /* @__PURE__ */ j(0), i = /* @__PURE__ */ j([]), a = /* @__PURE__ */ j("end"), o = /* @__PURE__ */ j(), s = /* @__PURE__ */ j(), c = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(!1), u, d = U(() => e.value.state), f = U(() => e.value.settings), p = U(() => d.value.turnover?.steps.some((e) => e.status === "failed" || e.status === "pending") ?? !1), m = U(() => {
		try {
			return Ty(t.value);
		} catch {
			return "";
		}
	}), h = U(() => !!n.value && !Number.isNaN(new Date(n.value).getTime())), g = U(() => bw(i.value, r.value)), _ = U(() => h.value ? Ey(f.value.xp, t.value, n.value) : ""), v = U(() => !c.value && !l.value && !!m.value && h.value && Number.isSafeInteger(r.value) && r.value >= 0 && (r.value === 0 || g.value.awards.length > 0));
	function y(t, n) {
		u = n;
		let r = gw(t);
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
				let n = _w(b(), f.value), r = await u.runSessionTurnover(n);
				e.value.state = vw(d.value, r, n.nextSessionReference), r.record && (t.value = d.value.currentSessionReference, s.value = `Session ${r.record.reference} completed. Ready for session ${t.value}.`);
			} catch (e) {
				console.error("Drowsy’s WFRP4e Toolkit | Session turnover failed.", e), o.value = e instanceof Error ? e.message : "The session could not be completed.", y(u.reload(), u);
			} finally {
				c.value = !1;
			}
		}
	}
	async function S() {
		if (!(c.value || p.value || l.value)) {
			l.value = !0;
			try {
				await u.openSettings((t) => {
					let n = yw(b(), d.value.currentSessionReference, f.value, t);
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
		openSettings: S,
		pending: p,
		plan: g,
		reason: _,
		settings: f,
		state: d,
		statusMessage: s
	};
}), Sw = { class: "tw:grid tw:min-h-0 tw:flex-1 tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:gap-4 tw:@max-[32rem]:grid-cols-1 tw:@max-[32rem]:grid-rows-[minmax(0,1.3fr)_minmax(0,1fr)]" }, Cw = { class: "tw:flex tw:min-h-0 tw:min-w-0 tw:flex-col tw:gap-3" }, ww = ["disabled"], Tw = {
	class: "tw:grid tw:gap-1 tw:text-sm tw:@max-[32rem]:col-span-2",
	for: "session-occurred-at"
}, Ew = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-xp"
}, Dw = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-number"
}, Ow = ["value"], kw = {
	"aria-labelledby": "session-preview-title",
	class: "tw:flex tw:min-h-0 tw:flex-1 tw:flex-col tw:gap-2"
}, Aw = {
	class: "tw:min-h-0 tw:overflow-y-auto tw:rounded-box tw:border tw:border-base-content/20 tw:bg-base-100! tw:p-3 tw:text-sm tw:break-words",
	"aria-live": "polite"
}, jw = { class: "tw:mt-1 tw:mb-3" }, Mw = { class: "tw:mt-1 tw:mb-0" }, Nw = {
	key: 0,
	class: "tw:mt-2 tw:mb-0 tw:text-xs tw:text-base-content/70!"
}, Pw = {
	class: "tw:flex tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:rounded-box tw:border tw:border-base-content/20 tw:bg-base-100!",
	"aria-labelledby": "session-recipients-title"
}, Fw = { class: "tw:shrink-0 tw:border-b tw:border-base-content/15 tw:p-3" }, Iw = {
	id: "session-recipients-title",
	class: "tw:m-0 tw:font-serif tw:text-lg"
}, Lw = { class: "tw:text-sm tw:font-normal" }, Rw = { class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:overscroll-contain tw:p-2" }, zw = { class: "tw:min-w-0 tw:flex-1 tw:break-words tw:text-sm" }, Bw = { class: "tw:block tw:font-semibold" }, Vw = { class: "tw:block tw:text-xs tw:text-base-content/65!" }, Hw = [
	"onUpdate:modelValue",
	"aria-label",
	"disabled"
], Uw = {
	key: 0,
	class: "tw:p-3 tw:text-sm"
}, Ww = { class: "tw:flex tw:shrink-0 tw:items-center tw:justify-between tw:gap-3 tw:border-t tw:border-base-content/15 tw:pt-3" }, Gw = { class: "tw:min-w-0 tw:text-sm" }, Kw = { class: "tw:m-0" }, qw = { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/65!" }, Jw = ["disabled"], Yw = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Xw = /* @__PURE__ */ P({
	__name: "SessionEndPanel",
	setup(e) {
		let t = xw(), { actors: n, amount: r, canConfirm: i, currentSessionReference: a, isSettingsOpen: o, isWorking: s, nextSessionReference: c, occurredAtLocal: l, pending: u, plan: d, reason: f, settings: p } = js(t);
		return (e, m) => (L(), R("form", {
			id: "session-end",
			role: "tabpanel",
			"aria-labelledby": "session-tab-end",
			class: "tw:flex tw:min-h-0 tw:flex-1 tw:flex-col tw:gap-3 tw:p-4",
			onSubmit: m[3] ||= Go((...e) => M(t).confirm && M(t).confirm(...e), ["prevent"])
		}, [z("div", Sw, [z("div", Cw, [z("fieldset", {
			class: "tw:m-0 tw:grid tw:gap-3 tw:border-0 tw:p-0 tw:@max-[32rem]:grid-cols-2",
			disabled: M(s) || M(u) || M(o)
		}, [
			z("label", Tw, [m[4] ||= z("span", null, "Date & time", -1), N(z("input", {
				id: "session-occurred-at",
				"onUpdate:modelValue": m[0] ||= (e) => /* @__PURE__ */ A(l) ? l.value = e : null,
				class: "dui-input dui-input-sm tw:min-w-0 tw:w-full tw:bg-base-100!",
				type: "datetime-local",
				required: ""
			}, null, 512), [[W, M(l)]])]),
			z("label", Ew, [m[5] ||= z("span", null, "Session XP", -1), N(z("input", {
				id: "session-xp",
				"onUpdate:modelValue": m[1] ||= (e) => /* @__PURE__ */ A(r) ? r.value = e : null,
				class: "dui-input dui-input-sm tw:w-full tw:bg-base-100!",
				type: "number",
				min: "0",
				step: "1",
				required: ""
			}, null, 512), [[
				W,
				M(r),
				void 0,
				{ number: !0 }
			]])]),
			z("label", Dw, [m[6] ||= z("span", null, "Session number", -1), z("input", {
				id: "session-number",
				value: M(a),
				class: "dui-input dui-input-sm tw:w-full tw:bg-base-100!",
				type: "number",
				min: "0",
				step: "1",
				required: "",
				onInput: m[2] ||= (e) => a.value = e.target.value
			}, null, 40, Ow)])
		], 8, ww), z("section", kw, [m[9] ||= z("h2", {
			id: "session-preview-title",
			class: "tw:m-0 tw:font-serif tw:text-lg"
		}, "Preview", -1), z("div", Aw, [
			m[7] ||= z("p", { class: "tw:m-0 tw:font-semibold" }, "Session log", -1),
			z("p", jw, D(M(ky)(M(a), M(l))), 1),
			m[8] ||= z("p", { class: "tw:m-0 tw:font-semibold" }, "XP entries", -1),
			z("p", Mw, D(M(r) > 0 ? M(f) || "Choose a date and time" : "No XP will be awarded."), 1),
			M(r) > 0 ? (L(), R("p", Nw, " Amounts appear beside each selected recipient. Companions receive half XP. ")) : H("", !0)
		])])]), z("section", Pw, [z("div", Fw, [z("h2", Iw, [m[10] ||= V(" Recipients ", -1), z("span", Lw, "(" + D(M(d).awards.length) + ")", 1)])]), z("div", Rw, [(L(!0), R(I, null, F(M(n), (e) => (L(), R("label", {
			key: e.id,
			class: "tw:flex tw:cursor-pointer tw:items-center tw:gap-3 tw:rounded-box tw:p-3 tw:hover:bg-base-200"
		}, [
			m[11] ||= z("i", {
				class: "fa-solid fa-user tw:shrink-0 tw:text-xl tw:text-base-content/60!",
				"aria-hidden": "true"
			}, null, -1),
			z("span", zw, [z("span", Bw, D(e.name), 1), z("span", Vw, [V(D(e.category === "companion" ? "Companion" : "Character"), 1), e.selected ? (L(), R(I, { key: 0 }, [V(" · +" + D(M(d).awards.find((t) => t.actorId === e.id)?.amount ?? 0) + " XP", 1)], 64)) : H("", !0)])]),
			N(z("input", {
				"onUpdate:modelValue": (t) => e.selected = t,
				class: "dui-checkbox dui-checkbox-sm dui-checkbox-primary tw:shrink-0",
				"aria-label": `Include ${e.name}`,
				disabled: M(s) || M(u) || M(o),
				type: "checkbox"
			}, null, 8, Hw), [[G, e.selected]])
		]))), 128)), M(n).length ? H("", !0) : (L(), R("p", Uw, "No character actors are available."))])])]), z("footer", Ww, [z("div", Gw, [z("p", Kw, [m[12] ||= V(" Next session: ", -1), z("strong", null, D(M(c) || "—"), 1)]), z("p", qw, D([
			M(p).pause && "Pause play",
			M(p).fortuneReset && "Restore Fortune",
			M(p).holdingScene && "Holding scene",
			M(p).exportChat && "Export chat"
		].filter(Boolean).join(" · ")), 1)]), z("button", {
			class: "dui-btn dui-btn-primary tw:shrink-0",
			disabled: !M(i),
			type: "submit"
		}, [M(s) ? (L(), R("span", Yw)) : H("", !0), V(D(M(u) ? "Retry" : "Confirm"), 1)], 8, Jw)])], 32));
	}
}), Zw = {
	id: "session-log",
	role: "tabpanel",
	"aria-labelledby": "session-tab-log",
	class: "tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:p-4"
}, Qw = {
	key: 0,
	class: "tw:text-sm"
}, $w = {
	key: 1,
	class: "tw:m-0 tw:grid tw:[list-style:none] tw:gap-2 tw:p-0"
}, eT = { class: "tw:m-0 tw:text-sm" }, tT = { class: "tw:mt-1 tw:mb-0 tw:text-xs tw:text-base-content/65!" }, nT = /* @__PURE__ */ P({
	__name: "SessionLogPanel",
	setup(e) {
		let { state: t } = js(xw());
		function n(e) {
			return new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(new Date(e));
		}
		return (e, r) => (L(), R("section", Zw, [M(t).sessions.length ? (L(), R("ol", $w, [(L(!0), R(I, null, F(M(t).sessions, (e) => (L(), R("li", {
			key: e.id,
			class: "tw:rounded-box tw:border tw:border-base-content/15 tw:bg-base-100! tw:p-3"
		}, [z("p", eT, D(M(ky)(e.reference, e.occurredAt)), 1), z("p", tT, " Recorded " + D(n(e.recordedAt)), 1)]))), 128))])) : (L(), R("p", Qw, "No sessions recorded yet."))]));
	}
}), rT = { class: "tw:@container tw:flex tw:h-full tw:min-h-0 tw:flex-col tw:overflow-hidden tw:bg-base-200! tw:text-base-content!" }, iT = { class: "tw:flex tw:shrink-0 tw:items-center tw:gap-2 tw:border-b tw:border-base-content/20 tw:px-4 tw:pt-2" }, aT = ["aria-selected", "tabindex"], oT = ["aria-selected", "tabindex"], sT = ["disabled"], cT = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mx-4 tw:mt-3 tw:shrink-0 tw:text-sm",
	role: "alert"
}, lT = {
	key: 1,
	class: "dui-alert dui-alert-success tw:mx-4 tw:mt-3 tw:shrink-0 tw:text-sm",
	role: "status"
}, uT = /* @__PURE__ */ P({
	__name: "SessionManagementConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = xw();
		n.initialize(t.initialization, t.actions);
		let { activeTab: r, errorMessage: i, isWorking: a, isSettingsOpen: o, pending: s, statusMessage: c } = js(n);
		function l(e) {
			[
				"ArrowLeft",
				"ArrowRight",
				"Home",
				"End"
			].includes(e.key) && (e.preventDefault(), r.value = e.key === "Home" ? "end" : e.key === "End" || r.value === "end" ? "log" : "end", e.currentTarget.querySelector(`#session-tab-${r.value}`)?.focus());
		}
		return (e, t) => (L(), R("main", rT, [
			z("header", iT, [z("div", {
				class: "dui-tabs dui-tabs-border tw:flex-1",
				role: "tablist",
				"aria-label": "Session management",
				onKeydown: l
			}, [z("button", {
				id: "session-tab-end",
				class: E(["dui-tab tw:flex-1 tw:font-serif tw:text-lg", { "dui-tab-active": M(r) === "end" }]),
				type: "button",
				role: "tab",
				"aria-selected": M(r) === "end",
				"aria-controls": "session-end",
				tabindex: M(r) === "end" ? 0 : -1,
				onClick: t[0] ||= (e) => r.value = "end"
			}, " End of Session ", 10, aT), z("button", {
				id: "session-tab-log",
				class: E(["dui-tab tw:flex-1 tw:font-serif tw:text-lg", { "dui-tab-active": M(r) === "log" }]),
				type: "button",
				role: "tab",
				"aria-selected": M(r) === "log",
				"aria-controls": "session-log",
				tabindex: M(r) === "log" ? 0 : -1,
				onClick: t[1] ||= (e) => r.value = "log"
			}, " Log ", 10, oT)], 32), z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-square dui-btn-sm tw:mb-2",
				type: "button",
				"aria-label": "Session settings",
				title: "Session settings",
				disabled: M(a) || M(s) || M(o),
				onClick: t[2] ||= (...e) => M(n).openSettings && M(n).openSettings(...e)
			}, [...t[3] ||= [z("i", {
				class: "fa-solid fa-gear",
				"aria-hidden": "true"
			}, null, -1)]], 8, sT)]),
			M(i) ? (L(), R("div", cT, D(M(i)), 1)) : H("", !0),
			M(c) ? (L(), R("div", lT, D(M(c)), 1)) : H("", !0),
			N(B(Xw, null, null, 512), [[io, M(r) === "end"]]),
			N(B(nT, null, null, 512), [[io, M(r) === "log"]])
		]));
	}
});
//#endregion
//#region src/module/session-management/initialization.ts
function dT() {
	let e = Jy(), t = Xy();
	return {
		actors: HC(t.xp.defaultSelection).actors,
		occurredAtLocal: fT(/* @__PURE__ */ new Date()),
		scenes: Array.from(game.scenes).map(({ name: e, uuid: t }) => ({
			label: e,
			uuid: t
		})).sort((e, t) => e.label.localeCompare(t.label)),
		settings: t,
		state: e
	};
}
function fT(e) {
	return (/* @__PURE__ */ new Date(e.getTime() - e.getTimezoneOffset() * 6e4)).toISOString().slice(0, 16);
}
//#endregion
//#region src/module/session-management/fortune.ts
async function pT(e) {
	Y(J.sessionManagementConsole);
	let t = hy(), n = e ?? HC(t.defaultSelection).actors.filter(({ selected: e }) => e).map(({ id: e }) => e), r = 0;
	for (let e of n) {
		let t = game.actors.get(e);
		if (!t) continue;
		let n = mT(t);
		hT(t.system, [
			"status",
			"fortune",
			"value"
		]) !== n && (await t.update({ "system.status.fortune.value": n }), r += 1);
	}
	return `Fortune restored for ${r} of ${n.length} characters.`;
}
function mT(e) {
	let t = hT(e.system, [
		"status",
		"fate",
		"value"
	]), n = game.i18n.localize("NAME.Luck"), r = Array.from(e.items ?? []).filter((e) => e.type === "talent" && e.name === n).reduce((e, t) => e + hT(t.system, ["advances", "value"]), 0);
	return Math.max(0, t + r);
}
function hT(e, t) {
	let n = e;
	for (let e of t) {
		if (!n || typeof n != "object") return 0;
		n = n[e];
	}
	let r = Number(n);
	return Number.isFinite(r) ? Math.round(r) : 0;
}
//#endregion
//#region src/module/xp-award/service.ts
async function gT(e, t) {
	Y(J.xpAwardConsole);
	let n = Array.from(new Set(e.actorIds));
	if (n.length === 0) throw Error("Select at least one character actor.");
	if (!Number.isFinite(e.defaultAmount) || Math.round(e.defaultAmount) === 0) throw Error("Enter a non-zero whole-number XP change.");
	let r = UC(n), i = bw(r.map((e) => e.choice), e.defaultAmount), a = (/* @__PURE__ */ new Date()).toISOString(), o = t?.reference ?? Yy(), s = t?.reason ?? Cy(e.defaultReason, {
		date: a.slice(0, 10),
		datetime: wy(a),
		session: o
	}, e.includeTimestampInReason);
	t || await gy({
		defaultAmount: Math.round(e.defaultAmount),
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		includeTimestampInReason: e.includeTimestampInReason
	});
	let c = [];
	for (let [e, t] of r.entries()) {
		let n = i.awards[e];
		try {
			await t.awardExperience(n.amount, s), c.push(n);
		} catch (e) {
			let t = c.length > 0 ? ` XP was already changed for ${c.map((e) => e.actorName).join(", ")}.` : "", r = e instanceof Error ? ` ${e.message}` : "";
			throw Error(`Could not change XP for ${n.actorName}.${t}${r}`, { cause: e });
		}
	}
	let l = {
		...i,
		awardedAt: a,
		reason: s,
		sessionReference: o
	}, u = {
		...l,
		id: crypto.randomUUID()
	};
	return await vy(uy(_y(), u)), await _T(l), ui.notifications.info(`Applied ${vT(l.totalChange)} XP across ${l.awards.length} actors.`), l;
}
async function _T(e) {
	let t = e.awards.map((e) => `<li><strong>${Sy(e.actorName)}</strong>: ${vT(e.amount)} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Award</h2><p>${Sy(e.reason || "No reason")}</p><p><small>${Sy(wy(e.awardedAt))}</small></p><ul>${t}</ul><p><strong>${vT(e.totalChange)} XP in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s WFRP4e Toolkit" });
	await ChatMessage.create(r);
}
function vT(e) {
	return e > 0 ? `+${e}` : String(e);
}
//#endregion
//#region src/module/session-management/service.ts
async function yT(e) {
	Y(J.sessionManagementConsole);
	let t = e.trim();
	if (!t) throw Error("Enter a current session reference.");
	await Qy({
		...Jy(),
		currentSessionReference: t
	}), ui.notifications.info(`Current session reference saved as ${t}.`);
}
async function bT(e) {
	Y(J.sessionManagementConsole);
	let t = Iy(Jy(), e, {
		id: crypto.randomUUID(),
		recordedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	return await Qy(t.state), ui.notifications.info(`Session ${t.record.reference} recorded. Current session is now ${t.state.currentSessionReference}.`), t.record;
}
async function xT(e) {
	Y(J.sessionManagementConsole), await Zy(e), ui.notifications.info("Session turnover options saved.");
}
async function ST() {
	Y(J.sessionManagementConsole);
	let e = OT(), t = e.scenes.viewed;
	if (!t) throw Error("View a Scene before pulling players.");
	let n = Xy().pullPolicy;
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
async function CT(e) {
	Y(J.sessionManagementConsole), Dy(e);
	let t = Jy();
	t.turnover?.request && t.turnover.steps.some((e) => e.status === "failed" || e.status === "pending") && (e = t.turnover.request);
	let n = TT(t.turnover, e);
	t = {
		...t,
		turnover: n
	}, await Qy(t);
	for (let r of n.steps) if (!(r.status === "completed" || r.status === "skipped")) try {
		if (r.id === "record") {
			n = zy(n, r.id, "completed", DT());
			let i = Iy({
				...t,
				turnover: n
			}, e, {
				id: crypto.randomUUID(),
				recordedAt: DT()
			});
			return await Qy(i.state), ui.notifications.info(`Session ${i.record.reference} turnover completed.`), {
				operation: n,
				record: i.record
			};
		}
		let i = await wT(r.id, e);
		n = zy(n, r.id, "completed", DT(), i), t = {
			...t,
			turnover: n
		}, await Qy(t);
	} catch (e) {
		let i = e instanceof Error ? e.message : "The step failed.";
		throw n = zy(n, r.id, "failed", DT(), i), await Qy({
			...t,
			turnover: n
		}), Error(`${ET(r.id)} failed: ${i}`, { cause: e });
	}
	return { operation: n };
}
async function wT(e, t) {
	let n = OT();
	if (e === "pause") return await n.togglePause(!0, { broadcast: !0 }), "Game paused for all users.";
	if (e === "holding-scene") {
		let e = Xy().holdingSceneUuid;
		if (!e) throw Error("Choose a holding Scene first.");
		let t = await n.fromUuid(e);
		if (!t || t.documentName !== "Scene") throw Error("The configured holding Scene no longer exists.");
		return await t.activate(), `${t.name} activated.`;
	}
	if (e === "xp") {
		let e = t.xp ?? hy(), n = t.xp?.actorIds ?? HC(e.defaultSelection).actors.filter(({ selected: e }) => e).map(({ id: e }) => e);
		return await gT({
			...e,
			actorIds: n
		}, {
			reference: t.sessionReference.trim(),
			reason: Ey(e, t.sessionReference, t.occurredAt)
		}), `XP applied to ${n.length} character${n.length === 1 ? "" : "s"}.`;
	}
	if (e === "fortune") return pT(t.xp?.actorIds);
	if (!n.messages.export) throw Error("Chat export is unavailable in this Foundry version.");
	return await n.messages.export(), "Chat log exported.";
}
function TT(e, t) {
	if (e?.sessionReference === t.sessionReference.trim() && e.steps.some(({ status: e }) => e === "failed" || e === "pending")) return e;
	let n = new Set(["record"]);
	return t.pause && n.add("pause"), t.holdingScene && n.add("holding-scene"), t.xpAward && n.add("xp"), t.fortuneReset && n.add("fortune"), t.chatExport && n.add("chat-export"), {
		...Ry(crypto.randomUUID(), t.sessionReference, DT(), n),
		request: structuredClone(t)
	};
}
function ET(e) {
	return {
		"chat-export": "Chat export",
		fortune: "Fortune reset",
		"holding-scene": "Holding Scene",
		pause: "Pause",
		record: "Session recording",
		xp: "XP award"
	}[e];
}
function DT() {
	return (/* @__PURE__ */ new Date()).toISOString();
}
function OT() {
	let e = globalThis;
	return {
		...game,
		fromUuid: e.fromUuid
	};
}
//#endregion
//#region src/state/apps/session-management/configuration.ts
var kT = As("session-configuration", () => {
	let e = /* @__PURE__ */ j(), t = /* @__PURE__ */ j(""), n = /* @__PURE__ */ j(!1), r = /* @__PURE__ */ j(), i;
	function a(n, r) {
		e.value = structuredClone(n.settings), t.value = n.currentSessionReference || "1", i = r;
	}
	async function o() {
		if (!(n.value || !e.value)) {
			n.value = !0, r.value = void 0;
			try {
				if (Ty(t.value), !Number.isSafeInteger(e.value.xp.defaultAmount) || e.value.xp.defaultAmount < 0) throw Error("Enter a whole XP amount of zero or more.");
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
}), AT = ["disabled"], jT = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-current-setting"
}, MT = ["value"], NT = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-xp-default"
}, PT = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-recipient-default"
}, FT = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-reason"
}, IT = { class: "dui-label tw:justify-start tw:gap-2 tw:whitespace-normal" }, LT = { class: "tw:grid tw:gap-3 tw:border-t tw:border-base-content/20 tw:pt-3" }, RT = { class: "dui-label tw:justify-start tw:gap-2" }, zT = { class: "dui-label tw:justify-start tw:gap-2" }, BT = { class: "dui-label tw:justify-start tw:gap-2" }, VT = { class: "dui-label tw:justify-start tw:gap-2" }, HT = {
	key: 0,
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-holding-scene"
}, UT = ["value"], WT = {
	class: "tw:grid tw:gap-1 tw:text-sm",
	for: "session-pull-policy"
}, GT = { class: "tw:flex tw:shrink-0 tw:justify-end tw:border-t tw:border-base-content/20 tw:p-3" }, KT = ["disabled"], qT = /* @__PURE__ */ P({
	__name: "SessionSettingsApp",
	props: {
		initialization: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = kT();
		n.initialize(t.initialization, t.actions);
		let { errorMessage: r, isWorking: i, reference: a, settings: o } = js(n);
		return (t, s) => (L(), ua(Qs, {
			title: "Session settings",
			description: "Defaults and occasional corrections.",
			icon: "fa-solid fa-gear",
			"error-message": M(r)
		}, {
			footer: Xn(() => [z("footer", GT, [z("button", {
				class: "dui-btn dui-btn-primary",
				type: "submit",
				form: "session-settings-form",
				disabled: M(i)
			}, " Save settings ", 8, KT)])]),
			default: Xn(() => [M(o) ? (L(), R("form", {
				key: 0,
				id: "session-settings-form",
				class: "tw:grid tw:gap-4",
				onSubmit: s[11] ||= Go((...e) => M(n).save && M(n).save(...e), ["prevent"])
			}, [z("fieldset", {
				class: "tw:m-0 tw:grid tw:gap-3 tw:border-0 tw:p-0",
				disabled: M(i)
			}, [
				z("label", jT, [
					s[12] ||= z("span", null, "Current session number", -1),
					z("input", {
						id: "session-current-setting",
						value: M(a),
						class: "dui-input dui-input-sm tw:w-full",
						type: "number",
						min: "0",
						step: "1",
						required: "",
						onInput: s[0] ||= (e) => a.value = e.target.value
					}, null, 40, MT),
					s[13] ||= z("span", { class: "tw:text-xs tw:text-base-content/65!" }, "Correct the current number without recording a session or awarding XP.", -1)
				]),
				z("label", NT, [s[14] ||= z("span", null, "Default session XP", -1), N(z("input", {
					id: "session-xp-default",
					"onUpdate:modelValue": s[1] ||= (e) => M(o).xp.defaultAmount = e,
					class: "dui-input dui-input-sm tw:w-full",
					type: "number",
					min: "0",
					step: "1",
					required: ""
				}, null, 512), [[
					W,
					M(o).xp.defaultAmount,
					void 0,
					{ number: !0 }
				]])]),
				z("label", PT, [s[16] ||= z("span", null, "Default recipients", -1), N(z("select", {
					id: "session-recipient-default",
					"onUpdate:modelValue": s[2] ||= (e) => M(o).xp.defaultSelection = e,
					class: "dui-select dui-select-sm tw:w-full"
				}, [...s[15] ||= [
					z("option", { value: "party" }, "Party", -1),
					z("option", { value: "company" }, "Company (party and companions)", -1),
					z("option", { value: "world" }, "All characters", -1)
				]], 512), [[zo, M(o).xp.defaultSelection]])]),
				z("label", FT, [
					s[17] ||= z("span", null, "XP entry text", -1),
					N(z("input", {
						id: "session-reason",
						"onUpdate:modelValue": s[3] ||= (e) => M(o).xp.defaultReason = e,
						class: "dui-input dui-input-sm tw:w-full",
						type: "text"
					}, null, 512), [[W, M(o).xp.defaultReason]]),
					s[18] ||= z("span", { class: "tw:text-xs tw:text-base-content/65!" }, "Use %session%, %date%, and %datetime% for the submitted session.", -1)
				]),
				z("label", IT, [N(z("input", {
					"onUpdate:modelValue": s[4] ||= (e) => M(o).xp.includeTimestampInReason = e,
					"aria-label": "Include date and time in XP entries",
					class: "dui-checkbox dui-checkbox-sm",
					type: "checkbox"
				}, null, 512), [[G, M(o).xp.includeTimestampInReason]]), s[19] ||= V("Include date and time in XP entries", -1)]),
				z("div", LT, [
					z("label", RT, [N(z("input", {
						"onUpdate:modelValue": s[5] ||= (e) => M(o).pause = e,
						"aria-label": "Pause play",
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[G, M(o).pause]]), s[20] ||= V("Pause play", -1)]),
					z("label", zT, [N(z("input", {
						"onUpdate:modelValue": s[6] ||= (e) => M(o).fortuneReset = e,
						"aria-label": "Restore recipients' Fortune",
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[G, M(o).fortuneReset]]), s[21] ||= V("Restore recipients’ Fortune", -1)]),
					z("label", BT, [N(z("input", {
						"onUpdate:modelValue": s[7] ||= (e) => M(o).exportChat = e,
						"aria-label": "Export chat log",
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[G, M(o).exportChat]]), s[22] ||= V("Export chat log", -1)]),
					z("label", VT, [N(z("input", {
						"onUpdate:modelValue": s[8] ||= (e) => M(o).holdingScene = e,
						"aria-label": "Move to a holding scene",
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[G, M(o).holdingScene]]), s[23] ||= V("Move to a holding scene", -1)]),
					M(o).holdingScene ? (L(), R("label", HT, [s[25] ||= z("span", null, "Holding scene", -1), N(z("select", {
						id: "session-holding-scene",
						"onUpdate:modelValue": s[9] ||= (e) => M(o).holdingSceneUuid = e,
						class: "dui-select dui-select-sm tw:w-full",
						required: ""
					}, [s[24] ||= z("option", { value: "" }, "Choose a scene", -1), (L(!0), R(I, null, F(e.initialization.scenes, (e) => (L(), R("option", {
						key: e.uuid,
						value: e.uuid
					}, D(e.label), 9, UT))), 128))], 512), [[zo, M(o).holdingSceneUuid]])])) : H("", !0),
					z("label", WT, [s[27] ||= z("span", null, "Standalone Pull Everyone action", -1), N(z("select", {
						id: "session-pull-policy",
						"onUpdate:modelValue": s[10] ||= (e) => M(o).pullPolicy = e,
						class: "dui-select dui-select-sm tw:w-full"
					}, [...s[26] ||= [
						z("option", { value: "pull" }, "Pull connected players", -1),
						z("option", { value: "activate" }, "Activate scene for everyone", -1),
						z("option", { value: "prompt" }, "Ask each time", -1)
					]], 512), [[zo, M(o).pullPolicy]])])
				])
			], 8, AT)], 32)) : H("", !0)]),
			_: 1
		}, 8, ["error-message"]));
	}
}), JT = class extends Oc {
	static ACCESS_POLICY = J.sessionManagementConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${q}-session-settings`,
		position: {
			width: 480,
			height: 720
		},
		window: {
			title: `${wc} — Session settings`,
			icon: "fa-solid fa-gear",
			resizable: !0
		}
	};
	onSaved;
	onClosed;
	getVueComponent() {
		return qT;
	}
	getVueProps() {
		let e = dT();
		return {
			actions: { save: async (t, n) => {
				await xT(t), n !== e.state.currentSessionReference && await yT(n), this.onSaved?.({
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
async function YT(e) {
	let t = new JT();
	t.onSaved = e;
	let n = new Promise((e) => {
		t.onClosed = e;
	});
	await t.render(!0), await n;
}
//#endregion
//#region src/module/apps/session-management/SessionManagementApplication.ts
var XT = class extends Oc {
	static ACCESS_POLICY = J.sessionManagementConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-session-management`],
		id: `${q}-session-management`,
		position: {
			height: 590,
			width: 700
		},
		window: {
			icon: "fa-solid fa-calendar-check",
			resizable: !0,
			title: `${wc} — Session Management Console`
		}
	};
	getVueComponent() {
		return uT;
	}
	getVueProps() {
		return {
			actions: {
				openSettings: YT,
				reload: dT,
				runSessionTurnover: CT
			},
			initialization: dT()
		};
	}
};
//#endregion
//#region src/module/apps/session-management/open.ts
async function ZT() {
	let e = new XT();
	return await e.render(!0), e;
}
//#endregion
//#region src/state/apps/xp-award-console/store.ts
var QT = As("xp-award-console", () => {
	let { actors: e, initializeActors: t, resetSelection: n, selectedActors: r, setActorSelected: i, setAllActorsSelected: a } = Kb("The XP Award Console"), o = /* @__PURE__ */ j(20), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j("party"), l = /* @__PURE__ */ j(!0), u = /* @__PURE__ */ j("default"), d = /* @__PURE__ */ j(), f = /* @__PURE__ */ j(!1), p, m, h = U(() => bw(e.value, o.value)), g = U(() => r.value.length > 0 && Number.isFinite(o.value) && Math.round(o.value) !== 0 && !f.value), _ = U(() => {
		let e = x().reasonContext;
		return Cy(s.value, e, l.value);
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
}), $T = { class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:whitespace-normal tw:py-1" }, eE = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[62rem]:grid-cols-[1.2fr_0.8fr]" }, tE = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-recipients"
}, nE = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, rE = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, iE = { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, aE = { class: "tw:flex tw:flex-wrap tw:gap-1" }, oE = ["disabled"], sE = ["disabled"], cE = ["disabled"], lE = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-content/20!"
}, uE = { class: "dui-table dui-table-sm tw:min-w-[34rem]" }, dE = {
	class: "tw:min-w-44",
	scope: "row"
}, fE = { class: "tw:block tw:font-semibold" }, pE = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, mE = { class: "tw:text-right tw:tabular-nums" }, hE = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, gE = { class: "tw:text-right tw:tabular-nums" }, _E = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, vE = {
	class: "dui-card dui-card-border tw:min-w-0 tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:shadow-md",
	"aria-labelledby": "fixed-xp-details"
}, yE = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, bE = { class: "dui-label tw:w-full tw:min-w-0 tw:cursor-pointer tw:items-start tw:justify-start tw:gap-3 tw:whitespace-normal" }, xE = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200! tw:p-3 tw:text-sm" }, SE = { class: "tw:m-0 tw:break-words tw:font-semibold" }, CE = /* @__PURE__ */ P({
	__name: "XpAwardConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = QT();
		n.initialize(t.initialization, t.actions);
		let { actors: r, amount: i, canApply: a, defaultReason: o, defaultSelection: s, errorMessage: c, includeTimestampInReason: l, isWorking: u, plan: d, resolvedReason: f, selectedActors: p, selectionSource: m } = js(n), h = U(() => m.value === "targets" ? "Targeted tokens seeded this award." : `The ${s.value} default seeded this award.`);
		function g(e) {
			return d.value.awards.find((t) => t.actorId === e);
		}
		function _(e) {
			return e > 0 ? `+${e}` : String(e);
		}
		return (e, t) => (L(), ua(Qs, {
			description: "Apply one reviewed XP change to selected characters using your saved recipient and reason defaults.",
			"error-message": M(c),
			icon: "fa-solid fa-award",
			title: "XP Award Console"
		}, {
			"header-end": Xn(() => [z("span", $T, D(M(p).length) + " selected ", 1)]),
			footer: Xn(() => [B(Zb, {
				disabled: !M(a),
				icon: "fa-solid fa-award",
				label: `Apply ${_(M(d).totalChange)} XP`,
				working: M(u),
				onAction: M(n).applyAwards
			}, null, 8, [
				"disabled",
				"label",
				"working",
				"onAction"
			])]),
			default: Xn(() => [z("div", eE, [z("section", tE, [z("div", nE, [z("div", rE, [z("div", null, [t[7] ||= z("h2", {
				id: "fixed-xp-recipients",
				class: "dui-card-title tw:font-serif tw:text-lg"
			}, " Recipients ", -1), z("p", iE, D(h.value), 1)]), z("div", aE, [
				z("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: M(u),
					type: "button",
					onClick: t[0] ||= (e) => M(n).setAllActorsSelected(!0)
				}, " All ", 8, oE),
				z("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: M(u),
					type: "button",
					onClick: t[1] ||= (e) => M(n).setAllActorsSelected(!1)
				}, " None ", 8, sE),
				z("button", {
					class: "dui-btn dui-btn-ghost dui-btn-sm",
					disabled: M(u),
					type: "button",
					onClick: t[2] ||= (...e) => M(n).resetSelection && M(n).resetSelection(...e)
				}, " Reset ", 8, cE)
			])]), M(r).length ? (L(), R("div", lE, [z("table", uE, [t[8] ||= z("thead", { class: "tw:bg-base-300/60!" }, [z("tr", null, [
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
			])], -1), z("tbody", null, [(L(!0), R(I, null, F(M(r), (e) => (L(), R("tr", {
				key: e.id,
				class: E({ "tw:bg-base-200!": e.selected })
			}, [
				z("td", null, [B(tx, {
					"actor-id": e.id,
					"actor-name": e.name,
					checked: e.selected,
					disabled: M(u),
					purpose: "the XP award",
					onChange: M(n).setActorSelected
				}, null, 8, [
					"actor-id",
					"actor-name",
					"checked",
					"disabled",
					"onChange"
				])]),
				z("th", dE, [z("span", fE, D(e.name), 1), e.category === "companion" ? (L(), R("span", pE, " Half award ")) : H("", !0)]),
				z("td", mE, D(e.totalXp), 1),
				z("td", hE, D(g(e.id) ? _(g(e.id)?.amount ?? 0) : "—"), 1),
				z("td", gE, D(g(e.id)?.afterXp ?? "—"), 1)
			], 2))), 128))])])])) : (L(), R("div", _E, [...t[9] ||= [z("i", {
				class: "fa-solid fa-user-slash",
				"aria-hidden": "true"
			}, null, -1), z("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]), z("section", vE, [z("div", yE, [
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
					"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ A(i) ? i.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!",
					inputmode: "numeric",
					step: "1",
					type: "number"
				}, null, 512), [[
					W,
					M(i),
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
					"onUpdate:modelValue": t[4] ||= (e) => /* @__PURE__ */ A(s) ? s.value = e : null,
					class: "dui-select dui-select-sm tw:w-full tw:border-base-content/25! tw:bg-base-100!"
				}, [...t[10] ||= [
					z("option", { value: "party" }, "Party", -1),
					z("option", { value: "company" }, "Company", -1),
					z("option", { value: "world" }, "World", -1)
				]], 512), [[zo, M(s)]]),
				t[17] ||= z("label", {
					class: "dui-label tw:whitespace-normal",
					for: "fixed-xp-reason"
				}, " Experience log reason ", -1),
				N(z("input", {
					id: "fixed-xp-reason",
					"onUpdate:modelValue": t[5] ||= (e) => /* @__PURE__ */ A(o) ? o.value = e : null,
					class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:border-base-content/25! tw:bg-base-100!",
					type: "text"
				}, null, 512), [[W, M(o)]]),
				t[18] ||= z("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65!" }, [
					V(" Supports "),
					z("code", null, "%session%"),
					V(", "),
					z("code", null, "%date%"),
					V(", and "),
					z("code", null, "%datetime%"),
					V(". ")
				], -1),
				z("label", bE, [N(z("input", {
					"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ A(l) ? l.value = e : null,
					class: "dui-toggle dui-toggle-primary dui-toggle-sm tw:mt-0.5 tw:shrink-0 tw:appearance-none! tw:border-2! tw:border-primary! tw:bg-base-100! tw:bg-none! tw:shadow-none! tw:checked:border-primary! tw:checked:bg-primary! tw:checked:bg-none! tw:checked:text-primary-content!",
					type: "checkbox"
				}, null, 512), [[G, M(l)]]), t[11] ||= z("span", { class: "tw:min-w-0 tw:flex-1 tw:break-words" }, [z("span", { class: "tw:block tw:font-semibold" }, "Include timestamp in WFRP4e reason"), z("span", { class: "tw:block tw:text-xs tw:text-base-content/65!" }, " WFRP4e’s log schema has no timestamp field, so this appends UTC text to the reason. ")], -1)]),
				z("div", xE, [t[12] ||= z("span", { class: "tw:text-xs tw:text-base-content/60!" }, "WFRP4e will record", -1), z("p", SE, D(M(f) || "No reason"), 1)]),
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
function wE() {
	let e = hy(), t = HC(e.defaultSelection), n = (/* @__PURE__ */ new Date()).toISOString();
	return {
		...e,
		...t,
		awardedAt: n,
		reasonContext: {
			date: n.slice(0, 10),
			datetime: wy(n),
			session: Yy()
		}
	};
}
//#endregion
//#region src/module/apps/xp-award-console/XpAwardConsoleApplication.ts
var TE = class extends Oc {
	static ACCESS_POLICY = J.xpAwardConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-xp-award-console`],
		id: `${q}-xp-award-console`,
		position: {
			height: 720,
			width: 780
		},
		window: {
			icon: "fa-solid fa-award",
			resizable: !0,
			title: `${wc} — XP Award Console`
		}
	};
	getVueComponent() {
		return CE;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: gT,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${q} | Failed to close the XP Award Console.`, e), ui.notifications.error("XP changes completed, but Drowsy’s WFRP4e Toolkit could not close the console.");
					});
				}
			},
			initialization: wE()
		};
	}
};
//#endregion
//#region src/module/apps/xp-award-console/open.ts
async function EE() {
	let e = new TE();
	return await e.render(!0), e;
}
//#endregion
//#region src/view/apps/shared/LauncherConsole.vue?vue&type=script&setup=true&lang.ts
var DE = { class: "tw:grid tw:min-w-0 tw:gap-4" }, OE = { class: "tw:m-0 tw:font-serif tw:text-lg tw:text-base-content!" }, kE = { class: "tw:grid tw:min-w-0 tw:gap-2 tw:min-[38rem]:grid-cols-2" }, AE = ["disabled", "onClick"], jE = { class: "dui-card-body tw:w-full tw:min-w-0 tw:flex-row tw:items-start tw:gap-3 tw:p-4" }, ME = { class: "tw:min-w-0 tw:flex-1" }, NE = { class: "tw:block tw:font-semibold tw:text-base-content!" }, PE = { class: "tw:block tw:text-xs tw:text-base-content/75!" }, FE = {
	key: 0,
	class: "dui-loading dui-loading-sm dui-loading-spinner tw:shrink-0",
	"aria-label": "Working"
}, IE = /* @__PURE__ */ P({
	__name: "LauncherConsole",
	props: {
		description: {},
		icon: {},
		sections: {},
		title: {}
	},
	setup(e) {
		let t = /* @__PURE__ */ j(), n = /* @__PURE__ */ j();
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
		return (i, a) => (L(), ua(Qs, {
			description: e.description,
			"error-message": t.value,
			icon: e.icon,
			title: e.title
		}, {
			default: Xn(() => [z("div", DE, [(L(!0), R(I, null, F(e.sections, (e) => (L(), R("section", {
				key: e.id,
				class: "tw:grid tw:gap-2"
			}, [z("h2", OE, D(e.label), 1), z("div", kE, [(L(!0), R(I, null, F(e.actions, (e) => (L(), R("button", {
				key: e.id,
				class: "dui-card dui-card-border tw:m-0! tw:h-auto! tw:min-h-0! tw:w-full! tw:min-w-0 tw:cursor-pointer tw:items-stretch! tw:justify-start! tw:gap-0! tw:border-2 tw:border-base-content/20! tw:bg-base-100! tw:p-0! tw:text-left tw:text-base-content! tw:shadow-sm tw:transition tw:leading-normal! hover:tw:border-primary/60!",
				disabled: n.value !== void 0,
				type: "button",
				onClick: (t) => r(e)
			}, [z("span", jE, [
				z("i", {
					class: E([e.icon, "tw:mt-1 tw:w-6 tw:shrink-0 tw:text-center tw:text-lg tw:text-primary!"]),
					"aria-hidden": "true"
				}, null, 2),
				z("span", ME, [z("span", NE, D(e.label), 1), z("span", PE, D(e.description), 1)]),
				n.value === e.id ? (L(), R("span", FE)) : H("", !0)
			])], 8, AE))), 128))])]))), 128))])]),
			_: 1
		}, 8, [
			"description",
			"error-message",
			"icon",
			"title"
		]));
	}
}), LE = /* @__PURE__ */ P({
	__name: "ToolkitHomeApp",
	props: { sections: {} },
	setup(e) {
		return (t, n) => (L(), ua(IE, {
			description: "Open the tools you need without relying on world macro names.",
			icon: "fa-solid fa-toolbox",
			sections: e.sections,
			title: "Drowsy’s WFRP4e Toolkit"
		}, null, 8, ["sections"]));
	}
}), RE = class extends Oc {
	sections;
	static ACCESS_POLICY = J.toolkitHome;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-toolkit-home`],
		id: `${q}-toolkit-home`,
		position: {
			height: 720,
			width: 760
		},
		window: {
			icon: "fa-solid fa-toolbox",
			resizable: !0,
			title: wc
		}
	};
	constructor(e) {
		super(), this.sections = e;
	}
	getVueComponent() {
		return LE;
	}
	getVueProps() {
		return { sections: this.sections };
	}
};
//#endregion
//#region src/functions/grid-scale/calculate.ts
function zE(e) {
	return Number.isFinite(e.size) && e.size > 0 && Number.isFinite(e.distance) && e.distance > 0;
}
function BE(e, t) {
	return e.size / t.size * (t.distance / e.distance);
}
//#endregion
//#region src/module/grid-scale/service.ts
async function VE() {
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
	if (!zE(n)) {
		ui.notifications.error("The current Scene has an invalid grid size or distance.");
		return;
	}
	let r = await HE(n);
	if (r) {
		if (!zE(r)) {
			ui.notifications.error("Grid size and distance must both be positive numbers.");
			return;
		}
		await UE(e, n, r);
	}
}
async function HE(e) {
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
async function UE(e, t, n) {
	let r = BE(t, n), i = e.lights.map((e) => ({
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
		a.length > 0 && (await e.updateEmbeddedDocuments("AmbientLight", a), c = !0), s.length > 0 && (await e.updateEmbeddedDocuments("Token", s), l = !0), await e.update(GE(n)), ui.notifications.info(`Grid updated from ${KE(t)} to ${KE(n)}.`);
	} catch (n) {
		let r = await WE({
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
async function WE(e) {
	let t = [];
	return (e.scene.grid.size !== e.oldGrid.size || e.scene.grid.distance !== e.oldGrid.distance || e.scene.grid.units !== e.oldGrid.units) && t.push(e.scene.update(GE(e.oldGrid))), e.ambientLightsChanged && t.push(e.scene.updateEmbeddedDocuments("AmbientLight", e.oldAmbientLights)), e.tokenLightsChanged && t.push(e.scene.updateEmbeddedDocuments("Token", e.oldTokenLights)), Promise.allSettled(t);
}
function GE(e) {
	return {
		"grid.distance": e.distance,
		"grid.size": e.size,
		"grid.units": e.units
	};
}
function KE(e) {
	return `${e.size}px/${e.distance}${e.units}`;
}
//#endregion
//#region src/view/apps/scene-management-console/SceneManagementConsoleApp.vue
var qE = /* @__PURE__ */ P({
	__name: "SceneManagementConsoleApp",
	props: { sections: {} },
	setup(e) {
		return (t, n) => (L(), ua(IE, {
			description: "Run common Scene and token-viewing actions from one place.",
			icon: "fa-solid fa-map",
			sections: e.sections,
			title: "Scene Management Console"
		}, null, 8, ["sections"]));
	}
}), JE = class extends Oc {
	sections;
	static ACCESS_POLICY = J.sceneManagementConsole;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [q, `${q}-scene-management`],
		id: `${q}-scene-management`,
		position: {
			height: 580,
			width: 680
		},
		window: {
			icon: "fa-solid fa-map",
			resizable: !0,
			title: `${wc} — Scene Management`
		}
	};
	constructor(e) {
		super(), this.sections = e;
	}
	getVueComponent() {
		return qE;
	}
	getVueProps() {
		return { sections: this.sections };
	}
};
//#endregion
//#region src/module/apps/scene-management-console/open.ts
async function YE() {
	let e = new JE([{
		id: "scene",
		label: "Viewed Scene",
		actions: [
			XE("grid-scale", "Change Grid Scale (Preserve Lighting)", "Change grid measurements while preserving rendered light sizes.", "fa-solid fa-grid-2", VE),
			XE("pull-everyone", "Pull Everyone to Scene", "Activate this Scene or pull connected players using your saved policy.", "fa-solid fa-people-pulling", ST),
			XE("token-vision", "Use Token Vision", "Enable Token Vision and disable global illumination for this Scene.", "fa-solid fa-eye", () => Hu("token-vision")),
			XE("global-light", "Use Global Light", "Enable global illumination and disable Token Vision for this Scene.", "fa-solid fa-sun", () => Hu("global-light"))
		]
	}, {
		id: "tokens",
		label: "Controlled Tokens",
		actions: [XE("token-tools", "Open Token Vision & Light", "Apply vision modes and light presets to controlled tokens.", "fa-solid fa-lightbulb", async () => {
			await mh();
		})]
	}]);
	return await e.render(!0), e;
}
function XE(e, t, n, r, i) {
	return {
		description: n,
		icon: r,
		id: e,
		label: t,
		open: i
	};
}
//#endregion
//#region src/module/apps/toolkit-home/open.ts
async function ZE() {
	let e = new RE([{
		id: "gameplay",
		label: "Gameplay",
		actions: [
			QE("combat", "Combat Console", "Manage Advantage and condition checks.", "fa-solid fa-swords", qd),
			QE("damage", "Damage Console", "Apply damage to several actors.", "fa-solid fa-bolt", Of),
			QE("group-test", "Secret Group Tests", "Run private WFRP4e tests for a group.", "fa-solid fa-dice-d100", Fm),
			QE("dark-whispers", "Dark Whispers", "Send temptations to characters with Corruption.", "fa-solid fa-comment-dots", Sp),
			QE("fear", "Fear Console", "Apply Fear and Terror through WFRP4e.", "fa-solid fa-ghost", au),
			QE("xp-curve", "XP Curve Console", "Review and award campaign catch-up XP.", "fa-solid fa-chart-line", mw),
			QE("xp-award", "XP Award Console", "Apply a fixed XP change to selected characters.", "fa-solid fa-award", EE),
			QE("token-tools", "Token Vision & Light", "Apply vision modes and light presets.", "fa-solid fa-eye", mh)
		]
	}, {
		id: "campaign",
		label: "Campaign",
		actions: [
			QE("imperial-calendar", "Imperial Calendar Calculator", "Measure elapsed time between Imperial dates and times.", "fa-solid fa-calendar-days", Ac),
			QE("scene-management", "Scene Management", "Open common Scene and token-viewing actions.", "fa-solid fa-map", YE),
			QE("session", "Session Management", "Record session turnover and history.", "fa-solid fa-calendar-check", ZT),
			QE("administration", "Administration Console", "Manage Scenes, compendium visibility, players, and utility rolls.", "fa-solid fa-screwdriver-wrench", qu),
			QE("import", "Import from GM Toolkit", "Copy supported settings, prompts, and launchers.", "fa-solid fa-file-import", Nb)
		]
	}]);
	return await e.render(!0), e;
}
function QE(e, t, n, r, i) {
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
//#endregion
//#region src/module/api/create-module-api.ts
function $E() {
	return {
		calculateImperialElapsedTime: i,
		openImperialCalendarCalculator: Ac,
		adjustAdvantage: Nd,
		applyDamage: xf,
		applyTokenTools: uh,
		openAdministrationConsole: qu,
		openCombatConsole: qd,
		openDamageConsole: Of,
		openDarkWhispersConsole: Sp,
		applyToSelectedActors: Zl,
		awardXp: gT,
		awardXpCurve: dw,
		changeGridScalePreservingLighting: VE,
		checkConditions: Ld,
		completeSession: bT,
		copyLink: $l,
		getGmToolkitCutoverReport: wb,
		getGmToolkitMigrationPreview: Cb,
		importGmToolkitDarkWhispers: kb,
		importGmToolkitSettings: Db,
		importGmToolkitSessionData: Ob,
		openFearConsole: au,
		openGmToolkitMigration: Nb,
		openGroupTestConsole: Fm,
		openSessionManagementConsole: ZT,
		openSceneManagementConsole: YE,
		openToolkitHome: ZE,
		openTokenToolsConsole: mh,
		openXpAwardConsole: EE,
		openXpCurveConsole: mw,
		openWorkbench: au,
		postPrompt: Ql,
		postSummaryPrompt: eu,
		reviewGmToolkitCutover: jb,
		resetFortune: pT,
		rollD100: Wu,
		runGroupTest: vm,
		runSessionTurnover: CT,
		sendDarkWhispers: gp,
		setCompendiumVisibility: Uu,
		setSceneLighting: Hu,
		pullEveryoneToViewedScene: ST
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function eD() {
	let e = game.modules.get(q);
	if (!e) throw Error(`Foundry module registry entry was not found for ${q}.`);
	e.api = $E();
}
//#endregion
//#region src/module/administration/hooks.ts
function tD() {
	Hooks.on("getChatMessageContextOptions", (e, t) => {
		t.push({
			callback: rD,
			condition: () => game.user?.isGM === !0,
			icon: "<i class=\"fa-solid fa-pen-fancy\"></i>",
			name: "Edit message flavor"
		});
	});
}
function nD() {
	if (game.settings.get("wfrp4e-enhanced-fear-terror", Bu.showUnassignedPlayerWarning) !== !0) return;
	let e = Array.from(game.users).filter((e) => !e.isGM && e.active !== !1 && !e.character).map(({ name: e }) => e);
	e.length > 0 && ui.notifications.warn(`${e.join(", ")} ${e.length === 1 ? "has" : "have"} no assigned character.`);
}
async function rD(e) {
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
function iD(e, t) {
	game.settings.register(q, e, {
		config: !1,
		default: !0,
		hint: `${K}.Settings.${t}.Hint`,
		name: `${K}.Settings.${t}.Name`,
		requiresReload: !0,
		scope: "client",
		type: Boolean
	});
}
function aD(e, t, n, r, i = {}) {
	game.settings.register(q, e, {
		...i,
		config: !1,
		default: t,
		hint: `${r}.Hint`,
		name: `${r}.Name`,
		scope: "world",
		type: n
	});
}
//#endregion
//#region src/module/administration/settings/register.ts
function oD() {
	aD(Bu.showUnassignedPlayerWarning, !0, Boolean, `${K}.Settings.Administration.ShowUnassignedPlayerWarning`), game.settings.registerMenu(q, "administrationConsole", {
		hint: `${K}.Menu.AdministrationConsole.Hint`,
		icon: "fa-solid fa-screwdriver-wrench",
		label: `${K}.Menu.AdministrationConsole.Label`,
		name: `${K}.Menu.AdministrationConsole.Name`,
		restricted: Ku.ACCESS_POLICY.gmOnly,
		type: Ku
	});
}
//#endregion
//#region src/functions/combat/advantage.ts
function sD(e, t) {
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
function cD(e) {
	return e.filter(({ currentAdvantage: e, roundStartAdvantage: t }) => e > 0 && e <= t).map(({ actorId: e }) => e);
}
//#endregion
//#region src/module/combat/hooks.ts
var lD = /* @__PURE__ */ new Set();
function uD() {
	Hooks.on("wfrp4e:opposedTestResult", dD), Hooks.on("wfrp4e:applyDamage", fD), Hooks.on("createActiveEffect", pD), Hooks.on("createCombatant", (e) => void mD(e, "join")), Hooks.on("deleteCombatant", (e) => void mD(e, "leave")), Hooks.on("preUpdateCombat", (e, t) => void hD(e, t)), Hooks.on("updateCombat", (e, t) => void _D(e, t));
}
async function dD(...e) {
	if (!CD() || !Hd().automateOpposed) return;
	let [t, n, r] = e;
	if (!t || !n || !r || r.context?.unopposed === !0) return;
	let i = n.data?.result;
	if (i?.options?.preventAdvantage === !0 || i?.canDualWield === !0) return;
	let a = t.result, o = Id(n.actor), s = Id(r.actor);
	if (!o || !s || !a) return;
	let c = bD(n);
	if (c && lD.has(c)) return;
	c && xD(c);
	let l = a.winner === "attacker" ? o : s, u = l === o ? s : o, d = {
		attacker: o,
		defender: s
	}, f = sD(l === o ? "attacker" : "defender", SD());
	for (let e of f) {
		let t = d[e.participant];
		e.mode === "set" ? await Fd(t, e.amount) : await Pd(t, e.amount);
	}
	wD(`${l.name} gained Advantage; ${u.name} lost Advantage.`);
}
async function fD(e) {
	if (!CD() || !Hd().automateDamage || !TD(e)) return;
	let t = e.opposedTest;
	if (t?.defenderTest?.context?.unopposed !== !0) return;
	let n = Id(e.attacker), r = Id(e.actor);
	if (!n || !r) return;
	let i = t?.attackerTest, a = i ? bD(i) : "";
	a && lD.has(a) || (a && xD(a), SD() || await Fd(r, 0), await Pd(n, 1), wD(`${n.name} gained Advantage for outmanoeuvring ${r.name}.`));
}
async function pD(e) {
	if (!CD() || !Hd().automateCondition || !TD(e) || e.isCondition !== !0 || SD()) return;
	let t = String(e.conditionId ?? "");
	if ([
		"dead",
		"engaged",
		"fear",
		"grappling"
	].includes(t)) return;
	let n = Id(e.parent);
	n && n.inCombat === !0 && (await Fd(n, 0), wD(`${n.name} lost Advantage after receiving a condition.`));
}
async function mD(e, t) {
	if (!CD() || !TD(e)) return;
	let n = Hd();
	if (t === "join" && !n.clearOnJoin || t === "leave" && !n.clearOnLeave || t === "join" && SD()) return;
	let r = Id(e.actor);
	r && await Fd(r, 0);
}
async function hD(e, t) {
	if (!CD() || SD() || !Hd().promptMomentumLoss || !TD(e) || !TD(t)) return;
	let n = Number(t.round), r = Number(e.round);
	if (!Number.isFinite(n) || n <= r || r <= 0) return;
	let i = vD(e), a = new Set(cD(i.flatMap((e) => {
		let t = Id(e.actor);
		return t ? [{
			actorId: t.id,
			currentAdvantage: Number(t.system.status?.advantage?.value ?? 0),
			roundStartAdvantage: Number(yD(e, "roundStartAdvantage") ?? 0)
		}] : [];
	}))), o = i.filter((e) => {
		let t = Id(e.actor);
		return t ? a.has(t.id) : !1;
	});
	if (o.length === 0) return;
	let s = o.map((e) => Id(e.actor)?.name).join(", ");
	if (await foundry.applications.api.DialogV2.confirm({
		content: `<p>Reduce Advantage by 1 for combatants who gained no momentum this round?</p><p><strong>${foundry.utils.escapeHTML(s)}</strong></p>`,
		modal: !0,
		rejectClose: !1,
		window: { title: "Lose Momentum" }
	})) {
		for (let e of o) {
			let t = Id(e.actor);
			t && await Pd(t, -1);
		}
		await gD(o.flatMap((e) => {
			let t = Id(e.actor)?.name;
			return t ? [t] : [];
		})), wD(`Reduced Advantage for ${o.length} combatant${o.length === 1 ? "" : "s"}.`);
	}
}
async function gD(e) {
	let t = Array.from(game.users).filter((e) => e.isGM).map((e) => e.id), n = e.map((e) => `<li>${foundry.utils.escapeHTML(e)}</li>`).join("");
	await ChatMessage.create({
		content: `<h3>Momentum Loss</h3><p>Advantage reduced by 1:</p><ul>${n}</ul>`,
		whisper: t
	});
}
async function _D(e, t) {
	if (!(!CD() || !TD(e) || !TD(t) || !("round" in t))) for (let t of vD(e)) {
		let e = Id(t.actor), n = t.setFlag;
		e && typeof n == "function" && await n.call(t, q, "roundStartAdvantage", Number(e.system.status?.advantage?.value ?? 0));
	}
}
function vD(e) {
	let t = e.combatants;
	return t && typeof t == "object" ? Array.from(t) : [];
}
function yD(e, t) {
	let n = e.getFlag;
	return typeof n == "function" ? n.call(e, q, t) : void 0;
}
function bD(e) {
	let t = e.message;
	return String(t?.id ?? "");
}
function xD(e) {
	lD.add(e), lD.size > 100 && lD.delete(lD.values().next().value ?? "");
}
function SD() {
	return game.settings.get("wfrp4e", "useGroupAdvantage") === !0;
}
function CD() {
	return game.user?.isGM === !0 && game.user.isUniqueGM !== !1;
}
function wD(e) {
	ui.notifications.info(e, { permanent: Hd().persistentNotifications });
}
function TD(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/combat/settings/register.ts
function ED() {
	for (let [e, t] of Object.entries(Vd)) game.settings.register(q, t, {
		config: !1,
		default: e !== "persistentNotifications",
		hint: `${K}.Settings.Advantage.${e}.Hint`,
		name: `${K}.Settings.Advantage.${e}.Name`,
		scope: "world",
		type: Boolean
	});
}
//#endregion
//#region src/module/fear-terror/actor-sheet/register.ts
var DD = "openFearConsole", OD = "wfrp4e-enhanced-fear-terror-actor-header", kD = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], AD = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function jD() {
	for (let e of kD) Hooks.on(e, (e, t) => {
		MD() && ND(e, t);
	});
	for (let e of AD) Hooks.on(e, (e) => {
		MD() && PD(e);
	});
}
function MD() {
	return iu.canCurrentUserAccess() && Ll(Il.actorSheet);
}
function ND(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === DD) || (t.push({
		action: DD,
		icon: "fa-solid fa-skull",
		label: "Fear Console"
	}), e.options.actions ??= {}, e.options.actions[DD] = function() {
		FD(this.document);
	}));
}
function PD(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${OD}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(OD, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = DD, i.dataset.tooltip = "Fear Console", i.ariaLabel = "Open Drowsy’s WFRP4e Toolkit Fear Console", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), FD(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function FD(e) {
	try {
		ou({ initialPayload: Gl(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Drowsy’s WFRP4e Toolkit could not read this actor. See the browser console for details.");
	}
}
//#endregion
//#region src/module/dark-whispers/settings/register.ts
function ID() {
	aD(sp.promptLibrary, JSON.stringify({
		prompts: [],
		version: 1
	}), String, `${K}.Settings.DarkWhispers.PromptLibrary`), aD(sp.defaultGroup, "party", String, `${K}.Settings.DarkWhispers.DefaultGroup`), aD(sp.messageStyle, "taunt", String, `${K}.Settings.DarkWhispers.MessageStyle`);
}
//#endregion
//#region src/module/gm-toolkit/settings/register.ts
function LD() {
	aD(sb.state, JSON.stringify({ version: 1 }), String, `${K}.Settings.GmToolkitMigration.State`), game.settings.registerMenu(q, "gmToolkitMigration", {
		hint: `${K}.Menu.GmToolkitMigration.Hint`,
		icon: "fa-solid fa-box-archive",
		label: `${K}.Menu.GmToolkitMigration.Label`,
		name: `${K}.Menu.GmToolkitMigration.Name`,
		restricted: Mb.ACCESS_POLICY.gmOnly,
		type: Mb
	});
}
//#endregion
//#region src/module/group-test/settings/register.ts
var RD = {
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
function zD() {
	for (let [e, t] of Object.entries(tm)) {
		let n = RD[e];
		game.settings.register(q, t, {
			config: !1,
			default: n,
			hint: `${K}.Settings.GroupTest.${e}.Hint`,
			name: `${K}.Settings.GroupTest.${e}.Name`,
			scope: "world",
			type: typeof n == "boolean" ? Boolean : typeof n == "number" ? Number : String
		});
	}
}
//#endregion
//#region src/functions/scene-controls/toolclip.ts
function BD(e, t) {
	return {
		heading: e,
		items: [{ paragraph: t }]
	};
}
//#endregion
//#region src/module/fear-terror/scene-controls/register.ts
var VD = "openFearConsole";
function HD() {
	Hooks.on("getSceneControlButtons", (e) => {
		!iu.canCurrentUserAccess() || !Ll(Il.tokenControls) || UD(e);
	});
}
function UD(e) {
	let t = e.tokens;
	t && (t.tools[VD] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: VD,
		onChange: () => {
			ou();
		},
		order: 99,
		title: "Fear Console",
		toolclip: BD("Fear Console", `${K}.SceneControls.OpenFearConsole`)
	});
}
//#endregion
//#region src/module/fear-terror/settings/register.ts
function WD() {
	iD(Il.tokenControls, "TokenControlsLauncher"), iD(Il.actorSheet, "ActorSheetLauncher"), game.settings.registerMenu(q, "fearConsole", {
		hint: `${K}.Menu.FearConsoleConfigurator.Hint`,
		icon: "fa-solid fa-gears",
		label: `${K}.Menu.FearConsoleConfigurator.Label`,
		name: `${K}.Menu.FearConsoleConfigurator.Name`,
		restricted: Bl.ACCESS_POLICY.gmOnly,
		type: Bl
	});
}
//#endregion
//#region src/module/session-management/settings/register.ts
function GD() {
	aD(qy.options, "{}", String, `${K}.Settings.SessionManagement.State`), aD(qy.state, JSON.stringify({
		currentSessionReference: "",
		sessions: [],
		version: 1
	}), String, `${K}.Settings.SessionManagement.State`), aD(qy.holdingSceneUuid, "", String, `${K}.Settings.SessionManagement.HoldingSceneUuid`), aD(qy.exportChat, !1, Boolean, `${K}.Settings.SessionManagement.ExportChat`), aD(qy.pullPolicy, "pull", String, `${K}.Settings.SessionManagement.PullPolicy`, { choices: {
		activate: `${K}.Settings.SessionManagement.PullPolicy.Activate`,
		pull: `${K}.Settings.SessionManagement.PullPolicy.Pull`
	} }), game.settings.registerMenu(q, "sessionManagementConsole", {
		hint: `${K}.Menu.SessionManagementConsole.Hint`,
		icon: "fa-solid fa-calendar-check",
		label: `${K}.Menu.SessionManagementConsole.Label`,
		name: `${K}.Menu.SessionManagementConsole.Name`,
		restricted: XT.ACCESS_POLICY.gmOnly,
		type: XT
	});
}
//#endregion
//#region src/module/session-management/hooks.ts
function KD() {
	Hooks.on("preUpdateToken", qD);
}
function qD(e, t) {
	if (game.user?.isGM || !JD(e) || !JD(t)) return;
	let n = Xy().holdingSceneUuid, r = canvas?.scene?.uuid;
	!n || r !== n || (t.x !== void 0 && (t.x = e.x), t.y !== void 0 && (t.y = e.y));
}
function JD(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/toolkit-home/settings/register.ts
function YD() {
	class e extends RE {
		constructor() {
			super([]);
		}
		async render(e) {
			return await ZE(), this;
		}
	}
	game.settings.registerMenu(q, "toolkitHome", {
		hint: `${K}.Menu.ToolkitHome.Hint`,
		icon: "fa-solid fa-toolbox",
		label: `${K}.Menu.ToolkitHome.Label`,
		name: `${K}.Menu.ToolkitHome.Name`,
		restricted: RE.ACCESS_POLICY.gmOnly,
		type: e
	});
}
//#endregion
//#region src/module/token-tools/settings/register.ts
function XD() {
	let e = {
		darkRange: 120,
		normalRange: 2,
		overrideDarkVision: !1,
		overrideNightVision: !1
	};
	for (let [t, n] of Object.entries(ah)) {
		let r = e[t];
		game.settings.register(q, n, {
			config: !1,
			default: r,
			hint: `${K}.Settings.Vision.${t}.Hint`,
			name: `${K}.Settings.Vision.${t}.Name`,
			scope: "world",
			type: typeof r == "boolean" ? Boolean : Number
		});
	}
}
//#endregion
//#region src/module/xp-curve/scene-controls/register.ts
var ZD = "openXpCurveConsole";
function QD() {
	Hooks.on("getSceneControlButtons", (e) => {
		if (!pw.canCurrentUserAccess() || !QC($.showTokenControlsLauncher)) return;
		let t = e.tokens;
		t && (t.tools[ZD] = {
			button: !0,
			icon: "fa-solid fa-chart-line",
			name: ZD,
			onChange: hw,
			order: 98,
			title: "XP Curve Console",
			toolclip: BD("XP Curve Console", `${K}.SceneControls.OpenXpCurveConsole`)
		});
	});
}
//#endregion
//#region src/module/xp-curve/settings/register.ts
function $D() {
	iD($.showTokenControlsLauncher, "XpCurveTokenControlsLauncher"), eO($.maximumAward, Gb.parameters.maximumAward, Number, "MaximumAward", { range: {
		max: 1e5,
		min: 0,
		step: 1
	} }), eO($.gapForMaximumAward, Gb.parameters.gapForMaximumAward, Number, "GapForMaximumAward", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), eO($.curveExponent, Gb.parameters.curveExponent, Number, "CurveExponent", { range: {
		max: 5,
		min: .1,
		step: .05
	} }), eO($.scalePivot, Gb.parameters.scalePivot, Number, "ScalePivot", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), eO($.scaleExponent, Gb.parameters.scaleExponent, Number, "ScaleExponent", { range: {
		max: 2,
		min: 0,
		step: .05
	} }), eO($.companionMultiplier, Gb.parameters.companionMultiplier, Number, "CompanionMultiplier", { range: {
		max: 1,
		min: 0,
		step: .05
	} }), eO($.defaultReason, Gb.defaultReason, String, "DefaultReason"), eO($.defaultSelection, Gb.defaultSelection, String, "DefaultSelection", { choices: {
		company: `${K}.Settings.XpCurve.DefaultSelection.Company`,
		party: `${K}.Settings.XpCurve.DefaultSelection.Party`,
		world: `${K}.Settings.XpCurve.DefaultSelection.World`
	} }), game.settings.registerMenu(q, "xpCurveConsole", {
		hint: `${K}.Menu.XpCurveConfigurator.Hint`,
		icon: "fa-solid fa-sliders",
		label: `${K}.Menu.XpCurveConfigurator.Label`,
		name: `${K}.Menu.XpCurveConfigurator.Name`,
		restricted: ow.ACCESS_POLICY.gmOnly,
		type: ow
	});
}
function eO(e, t, n, r, i = {}) {
	aD(e, t, n, `${K}.Settings.XpCurve.${r}`, i);
}
//#endregion
//#region src/module/xp-award/settings/register.ts
function tO() {
	nO(my.auditLog, JSON.stringify({
		batches: [],
		version: 1
	}), String, "AuditLog"), nO(my.defaultAmount, 20, Number, "DefaultAmount", { range: {
		max: 1e5,
		min: -1e5,
		step: 1
	} }), nO(my.defaultReason, "Session %session% (%date%)", String, "DefaultReason"), nO(my.defaultSelection, "party", String, "DefaultSelection", { choices: {
		company: `${K}.Settings.XpAward.DefaultSelection.Company`,
		party: `${K}.Settings.XpAward.DefaultSelection.Party`,
		world: `${K}.Settings.XpAward.DefaultSelection.World`
	} }), nO(my.includeTimestampInReason, !0, Boolean, "IncludeTimestampInReason"), game.settings.registerMenu(q, "xpAwardConsole", {
		hint: `${K}.Menu.XpAwardConsole.Hint`,
		icon: "fa-solid fa-award",
		label: `${K}.Menu.XpAwardConsole.Label`,
		name: `${K}.Menu.XpAwardConsole.Name`,
		restricted: TE.ACCESS_POLICY.gmOnly,
		type: TE
	});
}
function nO(e, t, n, r, i = {}) {
	aD(e, t, n, `${K}.Settings.XpAward.${r}`, i);
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function rO() {
	tD(), uD(), _p(), xm(), KD(), Hooks.once("init", () => {
		console.info(`${q} | Initializing`), oD(), ED(), WD(), ID(), LD(), zD(), GD(), YD(), XD(), tO(), $D(), jD(), HD(), QD();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${q} | Loaded outside ${Ec}; skipping module API registration.`);
			return;
		}
		eD(), nD(), console.info(`${q} | Ready`);
	});
}
//#endregion
//#region src/main.ts
rO();
//#endregion

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map