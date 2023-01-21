exports.ids = [2];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=57ee6860&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "appCapsule"
    }
  }, [_vm._ssrNode("<div class=\"appContent\"><div class=\"sectionTitle mt-2 mb-2\"><div class=\"title\"><h1>Gündem</h1></div></div> <div class=\"row\">" + _vm._ssrList(_vm.getGundemRecords(), function (record) {
    return "<div class=\"col-6\"><a class=\"postItem\"><div class=\"imageWrapper\"><img" + _vm._ssrAttr("src", record.jetpack_featured_media_url) + " alt=\"image\" class=\"image\"></div> <h2 class=\"title\">" + _vm._s(record.title.rendered) + "</h2></a></div>";
  }) + "</div> <div class=\"sectionTitle mt-2 mb-2\"><div class=\"title\"><h1>Dünya</h1></div></div> <div class=\"row\">" + _vm._ssrList(_vm.getDunyaRecords(), function (record) {
    return "<div class=\"col-6\"><a class=\"postItem\"><div class=\"imageWrapper\"><img" + _vm._ssrAttr("src", record.jetpack_featured_media_url) + " alt=\"image\" class=\"image\"></div> <h2 class=\"title\">" + _vm._s(record.title.rendered) + "</h2></a></div>";
  }) + "</div> <div class=\"sectionTitle mt-2 mb-2\"><div class=\"title\"><h1>Spor</h1></div></div> <div class=\"row\">" + _vm._ssrList(_vm.getSporRecords(), function (record) {
    return "<div class=\"col-6\"><a class=\"postItem\"><div class=\"imageWrapper\"><img" + _vm._ssrAttr("src", record.jetpack_featured_media_url) + " alt=\"image\" class=\"image\"></div> <h2 class=\"title\">" + _vm._s(record.title.rendered) + "</h2></a></div>";
  }) + "</div> <div class=\"sectionTitle mt-2 mb-2\"><div class=\"title\"><h1>Ekonomi</h1></div></div> <div class=\"row\">" + _vm._ssrList(_vm.getEkonomiRecords(), function (record) {
    return "<div class=\"col-6\"><a class=\"postItem\"><div class=\"imageWrapper\"><img" + _vm._ssrAttr("src", record.jetpack_featured_media_url) + " alt=\"image\" class=\"image\"></div> <h2 class=\"title\">" + _vm._s(record.title.rendered) + "</h2></a></div>";
  }) + "</div> <div class=\"sectionTitle mt-2 mb-2\"><div class=\"title\"><h1>Teknoloji</h1></div></div> <div class=\"row\">" + _vm._ssrList(_vm.getTeknolojiRecords(), function (record) {
    return "<div class=\"col-6\"><a class=\"postItem\"><div class=\"imageWrapper\"><img" + _vm._ssrAttr("src", record.jetpack_featured_media_url) + " alt=\"image\" class=\"image\"></div> <h2 class=\"title\">" + _vm._s(record.title.rendered) + "</h2></a></div>";
  }) + "</div></div> <footer class=\"appFooter\"><div class=\"heading\">" + _vm._ssrEscape("Copyright © " + _vm._s(new Date().getFullYear()) + ". Tüm hakları saklıdır.") + "</div> <br> <a target=\"_blank\" href=\"https://twitter.com/newsturksocial\" class=\"btn btn-twitter btn-icon me-1\"><i class=\"icon ion-logo-twitter\"></i></a> <a target=\"_blank\" href=\"https://instagram.com/newsturksocial\" class=\"btn btn-instagram btn-icon me-1\"><i class=\"icon ion-logo-instagram\"></i></a> <a target=\"_blank\" href=\"https://www.youtube.com/@newsturksocial\" class=\"btn btn-youtube btn-icon me-1\"><i class=\"icon ion-logo-youtube\"></i></a></footer>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=57ee6860&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "MainNews",
  computed: {
    ...Object(external_vuex_["mapGetters"])(["getGundem"]),
    ...Object(external_vuex_["mapGetters"])(["getDunya"]),
    ...Object(external_vuex_["mapGetters"])(["getSpor"]),
    ...Object(external_vuex_["mapGetters"])(["getTeknoloji"]),
    ...Object(external_vuex_["mapGetters"])(["getEkonomi"])
  },
  async created() {
    await this.$store.dispatch("getGundemPosts");
    await this.$store.dispatch("getDunyaPosts");
    await this.$store.dispatch("getSporPosts");
    await this.$store.dispatch("getTeknolojiPosts");
    await this.$store.dispatch("getEkonomiPosts");
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(["setIsLoading"]),
    ...Object(external_vuex_["mapActions"])(["getGundemPosts"]),
    ...Object(external_vuex_["mapActions"])(["getDunyaPosts"]),
    ...Object(external_vuex_["mapActions"])(["getSporPosts"]),
    ...Object(external_vuex_["mapActions"])(["getTeknolojiPosts"]),
    ...Object(external_vuex_["mapActions"])(["getEkonomiPosts"]),
    goToRecord(record) {
      this.setIsLoading(true);
      setTimeout(() => {
        this.setIsLoading(false);
      }, 3000);
      return this.$nuxt.$options.router.push(`/post/${record.id}`);
    },
    getGundemRecords() {
      return this.getGundem();
    },
    getDunyaRecords() {
      return this.getDunya();
    },
    getSporRecords() {
      return this.getSpor();
    },
    getTeknolojiRecords() {
      return this.getTeknoloji();
    },
    getEkonomiRecords() {
      return this.getEkonomi();
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1f9f6d3c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map