exports.ids = [3];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_id.vue?vue&type=template&id=0064abce&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "appCapsule"
    }
  }, [_vm._ssrNode(_vm.getActive() !== null && _vm.getCategories().length > 0 ? "<div class=\"appContent\"><h1 class=\"title-lg mt-2 mb-2\">" + _vm._s(_vm.getActive().title.rendered) + "</h1> <div class=\"postHeader mb-2\"><div class=\"category-title\">" + _vm._s(_vm.categoryTitle(_vm.getActive().categories[0])) + "</div> <div>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatDate(_vm.getActive().date)) + "\n            ") + "</div></div> <div class=\"postBody\"><div class=\"content\">" + _vm._s(_vm.getActive().content.rendered) + "</div></div></div>" : "<!---->")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/post/_id.vue?vue&type=template&id=0064abce&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_id.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      id: this.$route.params.id,
      post: {
        title: '',
        date: '',
        content: '',
        categoryTitle: ''
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["getCategories"]),
    ...Object(external_vuex_["mapGetters"])(["getActive"])
  },
  created() {
    this.$store.dispatch("getActivePost", this.id);
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(["getActivePost"]),
    formatDate(dateString) {
      if (dateString !== "") {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('default', {
          dateStyle: 'long'
        }).format(date);
      } else {
        return "";
      }
    },
    categoryTitle(id) {
      return this.getCategories().find(x => x.id === id).name;
    }
  }
});
// CONCATENATED MODULE: ./pages/post/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/post/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "70f3bc04"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map