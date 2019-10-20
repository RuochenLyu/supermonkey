webpackHotUpdate("styles",{

/***/ "./styles/loading.scss":
/*!*****************************!*\
  !*** ./styles/loading.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"spinner":"_36cis3lQj3Jlj5DYEiDXqm","sk-bouncedelay":"_3h-Hfp2kKxDnLLHUn0Izik","bounce1":"_2HhxV6T2e-6NnRhxQHQyPp","bounce2":"_12-nbF51NiX-BQ6EQCiJ7"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1571497975323");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.a564c1ab80a4d86e94d2.hot-update.js.map