!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports._vantaEffect = t())
    : (e._vantaEffect = t());
})("undefined" != typeof self ? self : this, () =>
  (() => {
    "use strict";
    var e = {
        d: (t, s) => {
          for (var i in s)
            e.o(s, i) &&
              !e.o(t, i) &&
              Object.defineProperty(t, i, { enumerable: !0, get: s[i] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        },
      },
      t = {};
    e.r(t),
      e.d(t, { default: () => u }),
      (Number.prototype.clamp = function (e, t) {
        return Math.min(Math.max(this, e), t);
      });
    const s = (e) =>
      "number" == typeof e ? "#" + ("00000" + e.toString(16)).slice(-6) : e;
    function i(e) {
      for (; e.children && e.children.length > 0; )
        i(e.children[0]), e.remove(e.children[0]);
      e.geometry && e.geometry.dispose(),
        e.material &&
          (Object.keys(e.material).forEach((t) => {
            e.material[t] &&
              null !== e.material[t] &&
              "function" == typeof e.material[t].dispose &&
              e.material[t].dispose();
          }),
          e.material.dispose());
    }
    const o = "object" == typeof window;
    let n = (o && window.THREE) || {};
    o && !window.VANTA && (window.VANTA = {});
    const r = (o && window.VANTA) || {};
    (r.register = (e, t) => (r[e] = (e) => new t(e))), (r.version = "0.5.24");
    const h = function () {
      return (
        Array.prototype.unshift.call(arguments, "[VANTA]"),
        console.error.apply(this, arguments)
      );
    };
    r.VantaBase = class {
      constructor(e = {}) {
        if (!o) return !1;
        (r.current = this),
          (this.windowMouseMoveWrapper =
            this.windowMouseMoveWrapper.bind(this)),
          (this.windowTouchWrapper = this.windowTouchWrapper.bind(this)),
          (this.windowGyroWrapper = this.windowGyroWrapper.bind(this)),
          (this.resize = this.resize.bind(this)),
          (this.animationLoop = this.animationLoop.bind(this)),
          (this.restart = this.restart.bind(this));
        const t =
          "function" == typeof this.getDefaultOptions
            ? this.getDefaultOptions()
            : this.defaultOptions;
        if (
          ((this.options = Object.assign(
            {
              mouseControls: !0,
              touchControls: !0,
              gyroControls: !1,
              // minHeight: 200,
              // minWidth: 200,
              scale: 1,
              scaleMobile: 1,
            },
            t
          )),
          (e instanceof HTMLElement || "string" == typeof e) && (e = { el: e }),
          Object.assign(this.options, e),
          this.options.THREE && (n = this.options.THREE),
          (this.el = this.options.el),
          null == this.el)
        )
          h('Instance needs "el" param!');
        else if (!(this.options.el instanceof HTMLElement)) {
          const e = this.el;
          if (((this.el = ((i = e), document.querySelector(i))), !this.el))
            return void h("Cannot find element", e);
        }
        // this.el.style.width = "100%";
        // this.el.style.height = "100%";
        var i;
        this.prepareEl(), this.initThree(), this.setSize();
        try {
          this.init();
        } catch (e) {
          return (
            h("Init error", e),
            this.renderer &&
              this.renderer.domElement &&
              this.el.removeChild(this.renderer.domElement),
            void (
              this.options.backgroundColor &&
              (console.log("[VANTA] Falling back to backgroundColor"),
              (this.el.style.background = s(this.options.backgroundColor)))
            )
          );
        }
        this.initMouse(), this.resize(), this.animationLoop();
        const a = window.addEventListener;
        a("resize", this.resize),
          window.requestAnimationFrame(this.resize),
          this.options.mouseControls &&
            (a("scroll", this.windowMouseMoveWrapper),
            a("mousemove", this.windowMouseMoveWrapper)),
          this.options.touchControls &&
            (a("touchstart", this.windowTouchWrapper),
            a("touchmove", this.windowTouchWrapper)),
          this.options.gyroControls &&
            a("deviceorientation", this.windowGyroWrapper);
      }
      setOptions(e = {}) {
        Object.assign(this.options, e), this.triggerMouseMove();
      }
      prepareEl() {
        let e, t;
        if ("undefined" != typeof Node && Node.TEXT_NODE)
          for (e = 0; e < this.el.childNodes.length; e++) {
            const t = this.el.childNodes[e];
            if (t.nodeType === Node.TEXT_NODE) {
              const e = document.createElement("span");
              (e.textContent = t.textContent),
                t.parentElement.insertBefore(e, t),
                t.remove();
            }
          }
        for (e = 0; e < this.el.children.length; e++)
          (t = this.el.children[e]),
            "static" === getComputedStyle(t).position &&
              (t.style.position = "relative"),
            "auto" === getComputedStyle(t).zIndex && (t.style.zIndex = 1);
        "static" === getComputedStyle(this.el).position &&
          (this.el.style.position = "relative");
      }
      applyCanvasStyles(e, t = {}) {
        Object.assign(e.style, {
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          background: "",
        }),
          Object.assign(e.style, t),
          e.classList.add("vanta-canvas");
      }
      initThree() {
        n.WebGLRenderer
          ? ((this.renderer = new n.WebGLRenderer({
              alpha: !0,
              antialias: !0,
            })),
            this.el.appendChild(this.renderer.domElement),
            this.applyCanvasStyles(this.renderer.domElement),
            isNaN(this.options.backgroundAlpha) &&
              (this.options.backgroundAlpha = 1),
            (this.scene = new n.Scene()))
          : console.warn("[VANTA] No THREE defined on window");
      }
      getCanvasElement() {
        return this.renderer
          ? this.renderer.domElement
          : this.p5renderer
          ? this.p5renderer.canvas
          : void 0;
      }
      getCanvasRect() {
        const e = this.getCanvasElement();
        return !!e && e.getBoundingClientRect();
      }
      windowMouseMoveWrapper(e) {
        const t = this.getCanvasRect();
        if (!t) return !1;
        const s = e.clientX - t.left,
          i = e.clientY - t.top;
        s >= 0 &&
          i >= 0 &&
          s <= t.width &&
          i <= t.height &&
          ((this.mouseX = s),
          (this.mouseY = i),
          this.options.mouseEase || this.triggerMouseMove(s, i));
      }
      windowTouchWrapper(e) {
        const t = this.getCanvasRect();
        if (!t) return !1;
        if (1 === e.touches.length) {
          const s = e.touches[0].clientX - t.left,
            i = e.touches[0].clientY - t.top;
          s >= 0 &&
            i >= 0 &&
            s <= t.width &&
            i <= t.height &&
            ((this.mouseX = s),
            (this.mouseY = i),
            this.options.mouseEase || this.triggerMouseMove(s, i));
        }
      }
      windowGyroWrapper(e) {
        const t = this.getCanvasRect();
        if (!t) return !1;
        const s = Math.round(2 * e.alpha) - t.left,
          i = Math.round(2 * e.beta) - t.top;
        s >= 0 &&
          i >= 0 &&
          s <= t.width &&
          i <= t.height &&
          ((this.mouseX = s),
          (this.mouseY = i),
          this.options.mouseEase || this.triggerMouseMove(s, i));
      }
      triggerMouseMove(e, t) {
        void 0 === e &&
          void 0 === t &&
          (this.options.mouseEase
            ? ((e = this.mouseEaseX), (t = this.mouseEaseY))
            : ((e = this.mouseX), (t = this.mouseY))),
          this.uniforms &&
            ((this.uniforms.iMouse.value.x = e / this.scale),
            (this.uniforms.iMouse.value.y = t / this.scale));
        const s = e / this.width,
          i = t / this.height;
        "function" == typeof this.onMouseMove && this.onMouseMove(s, i);
      }
      setSize() {
        this.scale || (this.scale = 1),
          "undefined" != typeof navigator &&
          (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) ||
            window.innerWidth < 600) &&
          this.options.scaleMobile
            ? (this.scale = this.options.scaleMobile)
            : this.options.scale && (this.scale = this.options.scale),
          (this.width = Math.max(this.el.offsetWidth, this.options.minWidth)),
          (this.height = Math.max(
            this.el.offsetHeight,
            this.options.minHeight
          ));
      }
      initMouse() {
        ((!this.mouseX && !this.mouseY) ||
          (this.mouseX === this.options.minWidth / 2 &&
            this.mouseY === this.options.minHeight / 2)) &&
          ((this.mouseX = this.width / 2),
          (this.mouseY = this.height / 2),
          this.triggerMouseMove(this.mouseX, this.mouseY));
      }
      resize() {
        this.setSize(),
          this.camera &&
            ((this.camera.aspect = this.width / this.height),
            "function" == typeof this.camera.updateProjectionMatrix &&
              this.camera.updateProjectionMatrix()),
          this.renderer &&
            (this.renderer.setSize(this.width, this.height),
            this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)),
          "function" == typeof this.onResize && this.onResize();
      }
      isOnScreen() {
        const e = this.el.offsetHeight,
          t = this.el.getBoundingClientRect(),
          s =
            window.pageYOffset ||
            (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop,
          i = t.top + s;
        return i - window.innerHeight <= s && s <= i + e;
      }
      animationLoop() {
        this.t || (this.t = 0), this.t2 || (this.t2 = 0);
        const e = performance.now();
        if (this.prevNow) {
          let t = (e - this.prevNow) / (1e3 / 60);
          (t = Math.max(0.2, Math.min(t, 5))),
            (this.t += t),
            (this.t2 += (this.options.speed || 1) * t),
            this.uniforms && (this.uniforms.iTime.value = 0.016667 * this.t2);
        }
        return (
          (this.prevNow = e),
          this.options.mouseEase &&
            ((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
            (this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
            Math.abs(this.mouseEaseX - this.mouseX) +
              Math.abs(this.mouseEaseY - this.mouseY) >
              0.1 &&
              ((this.mouseEaseX += 0.05 * (this.mouseX - this.mouseEaseX)),
              (this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY)),
              this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
          (this.isOnScreen() || this.options.forceAnimate) &&
            ("function" == typeof this.onUpdate && this.onUpdate(),
            this.scene &&
              this.camera &&
              (this.renderer.render(this.scene, this.camera),
              this.renderer.setClearColor(
                this.options.backgroundColor,
                this.options.backgroundAlpha
              )),
            this.fps && this.fps.update && this.fps.update(),
            "function" == typeof this.afterRender && this.afterRender()),
          (this.req = window.requestAnimationFrame(this.animationLoop))
        );
      }
      restart() {
        if (this.scene)
          for (; this.scene.children.length; )
            this.scene.remove(this.scene.children[0]);
        "function" == typeof this.onRestart && this.onRestart(), this.init();
      }
      init() {
        "function" == typeof this.onInit && this.onInit();
      }
      destroy() {
        "function" == typeof this.onDestroy && this.onDestroy();
        const e = window.removeEventListener;
        e("touchstart", this.windowTouchWrapper),
          e("touchmove", this.windowTouchWrapper),
          e("scroll", this.windowMouseMoveWrapper),
          e("mousemove", this.windowMouseMoveWrapper),
          e("deviceorientation", this.windowGyroWrapper),
          e("resize", this.resize),
          window.cancelAnimationFrame(this.req);
        const t = this.scene;
        t && t.children && i(t),
          this.renderer &&
            (this.renderer.domElement &&
              this.el.removeChild(this.renderer.domElement),
            (this.renderer = null),
            (this.scene = null)),
          r.current === this && (r.current = null);
      }
    };
    const a = r.VantaBase;
    let c = "object" == typeof window && window.p5;
    class p extends a {
      constructor(e) {
        (c = e.p5 || c), super(e), (this.mode = "p5");
      }
      initP5(e) {
        const t = this,
          i = e.createCanvas(t.width, t.height);
        i.parent(t.el),
          t.applyCanvasStyles(e.canvas, {
            background: s(t.options.backgroundColor),
          }),
          (t.p5renderer = i),
          (t.p5canvas = e.canvas),
          (t.p5 = e);
      }
      restart() {
        this.p5 && "object" == typeof this.p5 && this.p5.remove(),
          super.restart();
      }
      destroy() {
        this.p5 && "object" == typeof this.p5 && this.p5.remove(),
          super.destroy();
      }
      resize() {
        super.resize(),
          this.p5 &&
            this.p5.resizeCanvas &&
            this.p5.resizeCanvas(this.width, this.height);
      }
    }
    let l = "object" == typeof window && window.p5;
    class d extends p {
      static initClass() {
        (this.prototype.p5 = !0),
          (this.prototype.defaultOptions = {
            color: 9016910,
            backgroundColor: 8738,
          });
      }
      constructor(e) {
        (l = e.p5 || l), super(e);
      }
      onInit() {
        const e = this;
        new l(function (t) {
          let i = e.width,
            o = e.height,
            n = (i + 200) / 10,
            r = (o + 200) / 10,
            h = [],
            a = [],
            c = 0;
          function p(e, s, i) {
            let o = 0,
              n = 1,
              r = t.createVector(0, 0),
              h = t.createVector(0, 0);
            for (let a = 0; a < 100; a++) {
              let c = (a / 100) * t.TAU,
                p = t.createVector(e + t.cos(c) * i, s + t.sin(c) * i),
                l = t.noise(p.x, p.y);
              l > o && ((o = l), (r.x = p.x), (r.y = p.y)),
                l < n && ((n = l), (h.x = p.x), (h.y = p.y));
            }
            let a = t.createVector(h.x - r.x, h.y - r.y);
            return a.normalize().mult(o - n), a;
          }
          function d(e, t) {
            return ((e % t) + t) % t;
          }
          (t.setup = function () {
            e.initP5(t),
              t.smooth(),
              t.noStroke(),
              (function () {
                for (let e = 0; e < 4500; e++) {
                  let s = t.random(t.width + 200),
                    i = t.random(t.height + 200);
                  a.push({
                    prev: t.createVector(s, i),
                    pos: t.createVector(s, i),
                    vel: t.createVector(0, 0),
                    acc: t.createVector(0, 0),
                    col: t.random(255),
                    seed: e,
                  });
                }
              })(),
              (function () {
                for (let e = 0; e < r; e++) {
                  let t = [];
                  for (let s = 0; s < n; s++)
                    t.push(p(0.003 * s, 0.003 * e, 0.1));
                  h.push(t);
                }
              })();
          }),
            (t.draw = function () {
              t.translate(-100, -100),
                (function () {
                  for (let i = 0; i < 4500; i++) {
                    let o = a[i],
                      n =
                        ((e = o.pos.x),
                        (s = o.pos.y),
                        (e = t.constrain(e, 0, t.width + 200)),
                        (s = t.constrain(s, 0, t.height + 200)),
                        h[t.floor(s / 10)][t.floor(e / 10)]);
                    (o.prev.x = o.pos.x),
                      (o.prev.y = o.pos.y),
                      (o.pos.x = d(o.pos.x + o.vel.x, t.width + 200)),
                      (o.pos.y = d(o.pos.y + o.vel.y, t.height + 200)),
                      o.vel.add(o.acc).normalize().mult(2.2),
                      (o.acc = t.createVector(0, 0)),
                      o.acc.add(n).mult(3);
                  }
                  var e, s;
                })(),
                (function () {
                  t.strokeWeight(1),
                    t.stroke(
                      ((e, t = 1) => {
                        const i = s(e),
                          o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                            i
                          ),
                          n = o
                            ? {
                                r: parseInt(o[1], 16),
                                g: parseInt(o[2], 16),
                                b: parseInt(o[3], 16),
                              }
                            : null;
                        return (
                          "rgba(" + n.r + "," + n.g + "," + n.b + "," + t + ")"
                        );
                      })(e.options.color, 0.05)
                    );
                  for (let e = 0; e < a.length; e++)
                    l.Vector.dist(a[e].prev, a[e].pos) < 10 &&
                      t.line(a[e].prev.x, a[e].prev.y, a[e].pos.x, a[e].pos.y);
                })(),
                (c += 0.002);
            });
        });
      }
    }
    d.initClass();
    const u = r.register("TOPOLOGY", d);
    return t;
  })()
);
