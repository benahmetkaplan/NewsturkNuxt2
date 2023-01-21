exports.ids = [2];
exports.modules = {

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_id.vue?vue&type=template&id=62fa3a94&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "appCapsule"
    }
  }, [_vm._ssrNode("<div class=\"appContent\"><h1 class=\"title-lg mt-2 mb-2\">" + _vm._s(_vm.post.title) + "</h1> <div class=\"postHeader mb-2\"><div>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatDate(_vm.post.date)) + "\n            ") + "</div></div> <div class=\"postBody\"><div class=\"content\">" + _vm._s(_vm.post.content) + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/post/_id.vue?vue&type=template&id=62fa3a94&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_id.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      slug: this.$route.params.id,
      post: {
        title: '',
        date: '',
        content: ''
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["getActive"])
  },
  async created() {
    await this.$store.dispatch("getActivePost", this.slug);
    this.getActiveRecord();
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
    getActiveRecord() {
      let rec = this.getActive();
      this.post = {
        title: rec.title.rendered,
        date: rec.date,
        content: rec.content.rendered
      };
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