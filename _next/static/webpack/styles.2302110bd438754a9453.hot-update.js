webpackHotUpdate("styles",{

/***/ "./styles/popup.scss":
/*!***************************!*\
  !*** ./styles/popup.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"popup":"_32mK3KmXrbSysw9F-Mn1pk","mask":"_2t4-0MvP4dFLINVD_v2RHm","container":"_3fTYve7cttPihId5Gz44ZB","bounceIn":"UoWy94YREByPxcYtNaYk8","content":"l1ie2A5JpdjMOntRyXXU","title":"_1EwEYiW5UHUSuzV4uedk1d"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1571922187959");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2302110bd438754a9453.hot-update.js.map