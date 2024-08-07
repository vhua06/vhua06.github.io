import {
  c as L,
  d as g,
  r as S,
  o as c,
  a as l,
  b as _,
  e as d,
  M as N,
  s as V,
  f as u,
  w as R,
  v as T,
  t as q,
  F as D,
  g as z,
  n as v,
  h as B,
  i as k,
  j as w,
  k as C,
  l as j
} from "./vendor.js";
const O = function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver(o => {
      for (const i of o)
          if (i.type === "childList")
              for (const r of i.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && s(r)
  }).observe(document, {
      childList: !0,
      subtree: !0
  });

  function n(o) {
      const i = {};
      return o.integrity && (i.integrity = o.integrity), o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? i.credentials = "include" : o.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
  }

  function s(o) {
      if (o.ep) return;
      o.ep = !0;
      const i = n(o);
      fetch(o.href, i)
  }
};
O();
const H = "https://jexpcababkrsoibblglb.supabase.co",
  K = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpleHBjYWJhYmtyc29pYmJsZ2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MDk1OTQsImV4cCI6MTk2MjI4NTU5NH0.F2MU8sqYQiQD2mF-jpm_jNoFssItWKTtWcRzrMPJgzc",
  F = L(H, K);
var f = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t) n[s] = o;
  return n
};
const J = g({
      components: {
          SearchIcon: S
      }
  }),
  P = {
      class: "fixed right-10 bottom-10 bg-gray-800 rounded-full p-2 drop-shadow-lg cursor-pointer border border-gray-100 border-2 text-gray-100"
  };

function U(e, t, n, s, o, i) {
  const r = d("SearchIcon");
  return c(), l("div", P, [_(r, {
      class: "h-6 w-6"
  })])
}
var Y = f(J, [
  ["render", U]
]);

function Z(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
const W = .9;
async function Q(e) {
  const t = new N({
      idField: "url",
      fields: ["title", "text"],
      storeFields: ["url", "title", "text"],
      searchOptions: {
          boost: {
              title: 100
          }
      }
  });
  return t.addAll(e.map(n => ({
      id: n.id,
      url: n.url,
      title: n.title,
      text: n.text
  }))), t
}

function M(e, t, n = -1, s = -1, o = "<b>", i = "</b>") {
  const r = V(e, [t], {
      returnMatchData: !0,
      threshold: W
  });
  if (!r.length) return {
      highlight: t,
      matchLength: 0
  };
  const a = r[0].match.index,
      h = r[0].match.index + r[0].match.length;
  let p = t.slice(a, h);
  p.match(/([A-Z|a-z])$/) || (p = p.slice(0, -1));
  const E = new RegExp(`((.|
)*)(s|^|[^(A-Z|a-z|')])(.*?${Z(p)})((.|
)*)`, "gi");

  function A(Ee, b, Ae, x, I, $) {
      if (n < 0 && s < 0) return b + x + o + I + i + $; {
          let m = b,
              y = $;
          return n > 0 ? m = b.split(/\s/).slice(-n).join(" ") : n === 0 && (m = ""), s > 0 ? y = $.split(/\s/).slice(0, s).join(" ") : s === 0 && (y = ""), m.length < b.length && (m = "\u2026" + m), y.length < $.length && (y = y + "\u2026"), m + x + o + I + i + y
      }
  }
  return {
      highlight: t.replace(E, A),
      matchLength: p.length
  }
}
const G = g({
      props: {
          modelValue: {
              type: String,
              default: ""
          }
      },
      components: {
          SearchIcon: S
      },
      data() {
          return {}
      },
      computed: {
          inputValue: {
              get() {
                  return this.modelValue
              },
              set(e) {
                  this.$emit("update:modelValue", e)
              }
          },
          ctrlKey() {
              let e = "";
              return navigator.platform ? e = navigator.platform.toLowerCase() : navigator.userAgentData && (e = navigator.userAgentData.platform.toLowerCase()), e.includes("mac") || e.includes("iphone") || e.includes("ipad") ? "\u2318" : "Ctrl"
          }
      },
      methods: {
          focus() {
              this.$refs.input.focus()
          },
          unfocus() {
              this.$refs.input.blur()
          }
      }
  }),
  X = {
      class: "relative flex gap-4 p-4"
  },
  ee = {
      class: "flex items-center pointer-events-none"
  },
  te = {
      class: "hidden sm:flex absolute inset-y-0 right-4 text-xs text-gray-300 justify-center items-center"
  },
  se = {
      id: "catche-shortcut",
      class: "border rounded flex justify-center items-center py-0.5 px-1"
  };

function ne(e, t, n, s, o, i) {
  const r = d("SearchIcon");
  return c(), l("div", X, [u("div", ee, [_(r, {
      class: "h-7 w-7 text-gray-400",
      "aria-hidden": "true"
  })]), R(u("input", {
      ref: "input",
      "onUpdate:modelValue": t[0] || (t[0] = a => e.inputValue = a),
      type: "text",
      placeholder: "Search...",
      class: "focus:ring-0 focus:border-0 focus-visible:outline-none p-0 w-full bg-transparent border-0 text-lg"
  }, null, 512), [
      [T, e.inputValue]
  ]), u("div", te, [u("span", se, q(e.ctrlKey) + " + K", 1)])])
}
var oe = f(G, [
  ["render", ne]
]);
const re = g({
      emits: ["close"],
      props: {
          results: {
              type: Array,
              default: []
          },
          selected: {
              type: Number,
              default: 0
          }
      },
      watch: {
          selected(e, t) {
              var n, s;
              if (e !== -1 && e !== t) {
                  const o = (n = document.getElementById("catche-search")) == null ? void 0 : n.shadowRoot;
                  (s = o == null ? void 0 : o.getElementById(`result-${e}`)) == null || s.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "nearest"
                  })
              }
          }
      }
  }),
  ie = {
      class: "text-gray-700 flex flex-col divide-y"
  },
  ae = ["id", "href"],
  ce = ["innerHTML"],
  le = ["innerHTML"],
  he = {
      key: 0
  },
  ue = {
      key: 1,
      class: "px-5 py-4"
  };

function de(e, t, n, s, o, i) {
  return c(), l("div", ie, [(c(!0), l(D, null, z(e.results, (r, a) => (c(), l("a", {
      key: a,
      id: `result-${a}`,
      class: v(["px-5 py-4 hover:bg-gray-100 cursor-pointer flex flex-col gap-1", e.selected === a ? "selected bg-gray-100" : ""]),
      href: r.url,
      onClick: t[0] || (t[0] = h => e.$emit("close"))
  }, [u("h1", {
      class: "text-xl truncate",
      innerHTML: r.title
  }, null, 8, ce), u("p", {
      class: "truncate",
      innerHTML: r.text
  }, null, 8, le)], 10, ae))), 128)), e.results.length ? (c(), l("div", he)) : (c(), l("a", ue, " No results "))])
}
var pe = f(re, [
  ["render", de]
]);
const fe = {},
  me = {
      id: "catche-branding",
      class: "text-gray-300 flex gap-1 justify-end px-3 py-2 text-xs font-bold"
  },
  ye = u("span", null, [B("Powered by "), u("a", {
      class: "text-gray-400",
      href: "https://try.catche.co"
  }, "Catche")], -1),
  ge = [ye];

function _e(e, t) {
  return c(), l("div", me, ge)
}
var be = f(fe, [
  ["render", _e]
]);
const $e = g({
  async mounted() {
      this.searcher = await Q(this.data), document.addEventListener("keydown", e => {
          const t = e.key;
          if (t === "ArrowUp") e.preventDefault(), this.selected = Math.max(0, this.selected - 1);
          else if (t === "ArrowDown") e.preventDefault(), this.selected = Math.min(Math.max(this.results.length - 1, 0), this.selected + 1);
          else if (t === "Enter") {
              e.preventDefault();
              const n = this.results[this.selected].url;
              this.query = "", this.selected = -1, this.open = !1, this.$emit("close"), setTimeout(() => window.location.href = n, 10)
          }
      }, !1)
  },
  props: {
      show: {
          type: Boolean,
          default: !1
      },
      data: {
          type: Array,
          default: []
      }
  },
  components: {
      SearchBox: oe,
      Results: pe,
      Branding: be
  },
  watch: {
      query(e) {
          this.selected = 0, this.debounceTimerId && clearTimeout(this.debounceTimerId), e ? (this.open = !0, this.debounceTimerId = setTimeout(() => {
              this.search()
          }, this.debounceTimeout)) : this.open = !1
      },
      show(e) {
          e ? this.$refs.searchBox.focus() : this.$refs.searchBox.unfocus()
      }
  },
  data() {
      return {
          open: !1,
          query: "",
          searcher: null,
          numResults: 10,
          results: [],
          selected: 0,
          debounceTimerId: null,
          debounceTimeout: 50
      }
  },
  methods: {
      search() {
          const e = performance.now(),
              t = this.searcher.search(this.query, {
                  prefix: s => s.length <= 3,
                  fuzzy: s => s.length > 3 ? .1 : !1,
                  combineWith: "AND"
              });
          let n = [];
          t.length < this.numResults && (n = this.searcher.search(this.query, {
              prefix: s => s.length <= 3,
              fuzzy: s => s.length > 3 ? .3 : !1,
              combineWith: "OR"
          }).filter(s => !t.map(o => o.url).includes(s.url))), this.results = t.concat(n).slice(0, this.numResults).map(s => ({
              url: s.url || "",
              title: M(this.query, k(s.title)).highlight || "",
              text: M(this.query, k(s.text), 3, 10).highlight || ""
          })), this.updateDebounce(performance.now() - e)
      },
      close() {
          this.open = !1, this.query = "", this.$emit("close")
      },
      updateDebounce(e) {
          this.debounceTimeout = .9 * this.debounceTimeout + .1 * e
      }
  }
});

function we(e, t, n, s, o, i) {
  const r = d("SearchBox"),
      a = d("Results"),
      h = d("Branding");
  return c(), l("div", {
      class: v(["font-sans w-full sm:w-128 max-w-full bg-white shadow-catche fixed top-0 sm:top-1/2 left-1/2 -translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl flex flex-col divide-y overflow-hidden", [e.show ? "opacity-100" : "opacity-0 pointer-events-none", e.open ? "h-96" : "h-[3.75rem]"]]),
      style: {
          transition: "opacity 300ms, height 300ms"
      }
  }, [_(r, {
      class: "catche-input",
      modelValue: e.query,
      "onUpdate:modelValue": t[0] || (t[0] = p => e.query = p),
      ref: "searchBox"
  }, null, 8, ["modelValue"]), _(a, {
      class: "h-96 overflow-y-scroll",
      results: e.results,
      onClose: e.close,
      selected: e.selected
  }, null, 8, ["results", "onClose", "selected"]), _(h)], 2)
}
var ve = f($e, [
  ["render", we]
]);
const xe = g({
  async mounted() {
      const e = document.querySelector("script[catche-key],script[catche-data]");
      let t = null;
      e && (t = e.getAttribute("catche-data"), this.catcheKey = e.getAttribute("catche-key")), t ? await this.loadCustomData(t) : await this.loadData(), document.addEventListener("keydown", n => {
          const s = n.key;
          (n.ctrlKey || n.metaKey) && s === "k" ? (n.preventDefault(), this.show = !this.show) : s === "Escape" && (this.show = !1)
      }, !1)
  },
  components: {
      Icon: Y,
      SearchMenu: ve
  },
  data() {
      return {
          catcheKey: "00000000-0000-0000-0000-000000000000",
          show: !1,
          searcher: null,
          data: []
      }
  },
  methods: {
      toggle() {
          this.show = !this.show
      },
      async loadData() {
          let {
              data: e,
              error: t
          } = await F.from("webpages_free").select().eq("catche_key", this.catcheKey);
          t ? (console.error(t), this.data = []) : this.data = e
      },
      async loadCustomData(e) {
          await fetch(e).then(t => t.json()).then(t => this.data = t)
      }
  }
});

function Ie(e, t, n, s, o, i) {
  const r = d("Icon"),
      a = d("SearchMenu");
  return c(), l(D, null, [e.data.length ? (c(), w(r, {
      key: 0,
      id: "catche-icon",
      class: "catche-icon",
      onClick: e.toggle,
      style: {
          "z-index": "2147483645"
      }
  }, null, 8, ["onClick"])) : C("", !0), u("div", {
      id: "catche-background",
      class: v(["fixed top-0 left-0 bg-white h-screen w-screen transition-all duration-300", e.show ? "show opacity-80" : "opacity-0 pointer-events-none"]),
      onClick: t[0] || (t[0] = h => e.show = !1),
      style: {
          "z-index": "2147483646"
      }
  }, null, 2), e.data.length ? (c(), w(a, {
      key: 1,
      id: "catche-menu",
      show: e.show,
      data: e.data,
      style: {
          "z-index": "2147483647"
      }
  }, null, 8, ["show", "data"])) : C("", !0)], 64)
}
var ke = f(xe, [
  ["render", Ie]
]);
const Ce = g({
  components: {
      Main: ke
  }
});

function Me(e, t, n, s, o, i) {
  const r = d("Main");
  return c(), w(r)
}
var Se = f(Ce, [
  ["render", Me]
]);

(function() {
  var a;
  const t = document.querySelector("script[catche-css]");
  let n = null;
  t && (n = t.getAttribute("catche-css"));
  const s = document.createElement("div");
  s.setAttribute("id", "catche-search");
  const o = ((a = s.attachShadow) == null ? void 0 : a.call(s, {
          mode: "open"
      })) || s,
      i = document.createElement("link");
  if (i.setAttribute("rel", "stylesheet"), i.setAttribute("href", "/css/catche.css"), o.appendChild(i), n) {
      const h = document.createElement("link");
      h.setAttribute("rel", "stylesheet"), h.setAttribute("href", n), o.appendChild(h)
  }
  const r = document.createElement("div");
  o.appendChild(r), j(Se).mount(r), document.body.appendChild(s)
})();
