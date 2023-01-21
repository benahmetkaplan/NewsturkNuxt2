exports.ids = [1];
exports.modules = {

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/category/_id.vue?vue&type=template&id=9d7cd642&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "appCapsule"
    }
  }, [_vm._ssrNode(_vm.getCategoryRecords().length > 0 ? "<div class=\"appContent\"><div class=\"sectionTitle mt-2 mb-2\"><div class=\"title\"><h1>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1></div></div> <div class=\"row\">" + _vm._ssrList(_vm.getCategoryRecords(), function (record) {
    return "<div class=\"col-6\"><a class=\"postItem\"><div class=\"imageWrapper\"><img" + _vm._ssrAttr("src", record.jetpack_featured_media_url) + " alt=\"image\" class=\"image\"></div> <h2 class=\"title\">" + _vm._s(record.title.rendered) + "</h2></a></div>";
  }) + "</div></div>" : "<!---->")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/category/_id.vue?vue&type=template&id=9d7cd642&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/category/_id.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      id: this.$route.params.id,
      title: ''
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["getCategories"]),
    ...Object(external_vuex_["mapGetters"])(["getCategory"])
  },
  async created() {
    await this.$store.dispatch("getCategoryPosts", this.id);
    this.getCategoryTitle();
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(["getCategoryPosts"]),
    ...Object(external_vuex_["mapMutations"])(["setIsLoading"]),
    getCategoryRecords() {
      return this.getCategory();
    },
    goPost(id) {
      this.setIsLoading(true);
      setTimeout(() => {
        this.setIsLoading(false);
      }, 3000);
      return this.$nuxt.$options.router.push(`/post/` + id);
    },
    getCategoryTitle() {
      this.title = this.getCategories().find(x => x.id === parseInt(this.id)).name;
    }
  }
});
// CONCATENATED MODULE: ./pages/category/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var category_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/category/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  category_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "49aa093c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map