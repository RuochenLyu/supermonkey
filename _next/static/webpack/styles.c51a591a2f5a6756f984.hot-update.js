webpackHotUpdate("styles",{

/***/ "./styles/mobile.scss":
/*!****************************!*\
  !*** ./styles/mobile.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"mobile":"_1iAlKZOvJaeDo9BzP3QWm1","main":"_1X7ESDJY2EsbPFgTmd-VV3"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1571932624654");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c51a591a2f5a6756f984.hot-update.js.map