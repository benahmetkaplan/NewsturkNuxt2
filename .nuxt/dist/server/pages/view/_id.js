exports.ids = [3];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/view/_id.vue?vue&type=template&id=916077fe&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "web-view",
    attrs: {
      "id": "appCapsule"
    }
  }, [_vm._ssrNode("<iframe" + _vm._ssrAttr("src", _vm.url) + " frameborder=\"0\"></iframe>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/view/_id.vue?vue&type=template&id=916077fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/view/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      slug: this.$route.params.id,
      url: ''
    };
  },
  async created() {
    this.url = `https://www.newsturk.com.tr/${this.slug}/?app=1`;
  }
});
// CONCATENATED MODULE: ./pages/view/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var view_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/view/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  view_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "faeaedee"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map