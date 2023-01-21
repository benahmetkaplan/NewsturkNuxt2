exports.ids = [4];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/view/_slug.vue?vue&type=template&id=a9ac3d0e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "web-view",
    attrs: {
      "id": "appCapsule"
    }
  }, [_vm._ssrNode("<iframe" + _vm._ssrAttr("src", _vm.source) + " frameborder=\"0\"></iframe>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/view/_slug.vue?vue&type=template&id=a9ac3d0e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/view/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  data() {
    return {
      source: ''
    };
  },
  async created() {
    this.source = `https://www.newsturk.com.tr/${this.$route.params.slug}/?app=1`;
  }
});
// CONCATENATED MODULE: ./pages/view/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var view_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/view/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  view_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "383ec119"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map