!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
      return e[t];
    }.bind(null, i));
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  n(1), e.exports = n(2);
}, function (e, t, n) {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#bornDate", {}), flatpickr("#analysDate", {
      enableTime: !0,
      dateFormat: "Y-m-d H:i:s"
    }), flatpickr("#testDate", {
      enableTime: !0,
      dateFormat: "Y-m-d H:i:s"
    });
  });
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    new Swiper("#indexHeroSlider", {
      navigation: {
        nextEl: "#indexHeroSliderNextBtn",
        prevEl: "#indexHeroSliderPrevBtn"
      },
      pagination: {
        el: "#indexHeroSliderPagination",
        type: "fraction"
      },
      slidesPerView: 1,
      spaceBetween: 10
    });
    const e = document.querySelectorAll(".product-line");
    Array.prototype.slice.call(e).forEach(e => {
      const t = e.querySelector(".section-header__btn.prev"),
            n = e.querySelector(".section-header__btn.next"),
            r = e.querySelector(".swiper-container");
      new Swiper(r, {
        navigation: {
          nextEl: n,
          prevEl: t
        },
        watchOverflow: !0,
        breakpoints: {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      });
    });
    new Swiper("#reviewsSlider", {
      navigation: {
        nextEl: "#reviewsSliderNextBtn",
        prevEl: "#reviewsSliderPrevBtn"
      },
      pagination: {
        el: "#reviewsSliderPagination",
        type: "bullets",
        clickable: !0
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    }), new Swiper("#chanceSlider", {
      pagination: {
        el: "#chanceSliderPagination",
        type: "bullets",
        clickable: !0
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: !0
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
          centeredSlides: !0,
          loop: !0,
          width: 768
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: !0,
          loop: !0,
          width: 1170
        }
      }
    });
  };
}]);