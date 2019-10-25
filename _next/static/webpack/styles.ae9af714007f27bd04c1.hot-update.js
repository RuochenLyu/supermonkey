webpackHotUpdate("styles",{

/***/ "./styles/course.scss":
/*!****************************!*\
  !*** ./styles/course.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"course":"_2rCOHlF9VCur_rKM1d9WF7","header":"_4jpVKahGx6uLOPqQjWukL","time":"_12uCPw9lN72mBdIatGmuAl","price":"_19Fmhu4mgBgxokFYCaQJlE","title":"_1DwxU2hoX4Na6HWtDftt9v","info":"_2bzDH6sAEO5ugjLpggsWv4","avatar":"_3PLjNIFOHMNKlyeNZf2hBz","info-main":"_1FWtZI39DwTSvix7gd_Izl","tags":"obeJ21OlLgcaK3T5KT1Yw","status":"_1oWhTtepolqDnmqvLCFQVK"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1572026056360");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.ae9af714007f27bd04c1.hot-update.js.map