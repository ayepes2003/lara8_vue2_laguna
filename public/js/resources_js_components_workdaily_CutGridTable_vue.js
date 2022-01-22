"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_workdaily_CutGridTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "cutgridtable",
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    this.list();
  },
  data: function data() {
    return {
      cutcontrol: {
        fecharegistro: moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date()).format("YYYY-MM-d"),
        cortador: "",
        lote: "",
        product: "",
        qtyempaque: 0.0,
        qtybolsa: 0.0,
        peso_bolsa: 0.0,
        total_peso: 0.0
      },
      openDate: new Date(),
      id: 0,
      update: true,
      modal: 0,
      titleModal: "",
      cutcontrols: []
    };
  },
  props: {},
  methods: {
    list: function list() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var api_url, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                api_url = "http://172.16.10.108:8001/api/cutcontrols";
                _context.next = 3;
                return axios.get(api_url);

              case 3:
                res = _context.sent;
                _this.cutcontrols = res.data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    openModal: function openModal() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.modal = 1;

      if (this.update) {
        this.titleModal = "Modificar Contacto";
      } else {
        this.id = 0;
        this.titleModal = "Crear Datos para Tipo Empaque";
        this.cutcontrol.fecharegistro = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date()).format("yyyy-MM-dd");
        this.cutcontrol.cortador = "";
        this.cutcontrol.product = "";
        this.cutcontrol.qtyempaque = 0;
        this.cutcontrol.qtybolsa = 0;
        this.cutcontrol.peso_bolsa = 0;
        this.cutcontrol.total_peso = 0;
      }
    },
    closeModal: function closeModal() {
      this.modal = 0;
    },
    customFormatter: function customFormatter(date) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("yyyy-MM-dd");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".show[data-v-31a9aeb8] {\n  display: list-item;\n  opacity: 1;\n  background: rgba(44, 38, 75, 0.849);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CutGridTable_vue_vue_type_style_index_0_id_31a9aeb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CutGridTable_vue_vue_type_style_index_0_id_31a9aeb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CutGridTable_vue_vue_type_style_index_0_id_31a9aeb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/workdaily/CutGridTable.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/workdaily/CutGridTable.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CutGridTable_vue_vue_type_template_id_31a9aeb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CutGridTable.vue?vue&type=template&id=31a9aeb8&scoped=true& */ "./resources/js/components/workdaily/CutGridTable.vue?vue&type=template&id=31a9aeb8&scoped=true&");
/* harmony import */ var _CutGridTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CutGridTable.vue?vue&type=script&lang=js& */ "./resources/js/components/workdaily/CutGridTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _CutGridTable_vue_vue_type_style_index_0_id_31a9aeb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true& */ "./resources/js/components/workdaily/CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CutGridTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CutGridTable_vue_vue_type_template_id_31a9aeb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CutGridTable_vue_vue_type_template_id_31a9aeb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "31a9aeb8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/workdaily/CutGridTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/workdaily/CutGridTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/workdaily/CutGridTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CutGridTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CutGridTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CutGridTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/workdaily/CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/workdaily/CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CutGridTable_vue_vue_type_style_index_0_id_31a9aeb8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=style&index=0&id=31a9aeb8&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/workdaily/CutGridTable.vue?vue&type=template&id=31a9aeb8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/workdaily/CutGridTable.vue?vue&type=template&id=31a9aeb8&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CutGridTable_vue_vue_type_template_id_31a9aeb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CutGridTable_vue_vue_type_template_id_31a9aeb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CutGridTable_vue_vue_type_template_id_31a9aeb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CutGridTable.vue?vue&type=template&id=31a9aeb8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=template&id=31a9aeb8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=template&id=31a9aeb8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/CutGridTable.vue?vue&type=template&id=31a9aeb8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", { staticClass: "text-center" }, [_vm._v("Trabajo Diario Corte")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 mb-2" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-success",
            attrs: { to: { name: "formcutcontrol" } },
          },
          [_c("i", { staticClass: "fas fa-plus-circle" })]
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btn-primary",
        attrs: { type: "button" },
        on: {
          click: function ($event) {
            _vm.update = false
            _vm.openModal()
          },
        },
      },
      [_vm._v("\n        Nuevo Registro\n    ")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal", class: { show: _vm.modal } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c(
              "h5",
              {
                staticClass: "modal-title",
                attrs: { id: "exampleModalLabel" },
              },
              [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.titleModal) +
                    "\n                    "
                ),
              ]
            ),
            _vm._v(" "),
            _c("button", {
              staticClass: "btn-close",
              attrs: {
                type: "button",
                "data-bs-dismiss": "modal",
                "aria-label": "Close",
              },
              on: {
                click: function ($event) {
                  return _vm.closeModal()
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "div",
              { staticClass: "form-group mb-3" },
              [
                _c("datepicker", {
                  attrs: {
                    "bootstrap-styling": true,
                    "input-class": "form-control",
                    "open-date": _vm.openDate,
                    format: _vm.customFormatter,
                    value: _vm.openDate,
                    "disabled-dates": { to: new Date() },
                    required: true,
                  },
                  model: {
                    value: _vm.fecharegistro,
                    callback: function ($$v) {
                      _vm.fecharegistro = $$v
                    },
                    expression: "fecharegistro",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c("label", { attrs: { for: "fecharegistro" } }, [
                _vm._v("Fecha Registro"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cutcontrol.fecharegistro,
                    expression: "cutcontrol.fecharegistro",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  type: "date",
                  id: "fecharegistro",
                  placeholder: "Fecha Registro",
                  name: "",
                  value: "",
                },
                domProps: { value: _vm.cutcontrol.fecharegistro },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.cutcontrol,
                      "fecharegistro",
                      $event.target.value
                    )
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c("label", { attrs: { for: "cortador" } }, [
                _vm._v("Id Cortador"),
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cutcontrol.cortador,
                      expression: "cutcontrol.cortador",
                    },
                  ],
                  staticClass: "form-control",
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.cutcontrol,
                        "cortador",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", [_vm._v("Francisco Perez")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Esperanza Galido")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Juan Restrepo")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Ivan Calderon")]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c("label", { attrs: { for: "empaque" } }, [
                _vm._v("Tipo Empaque"),
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cutcontrol.empaque,
                      expression: "cutcontrol.empaque",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { id: "empaque", value: "ICOPOR" },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.cutcontrol,
                        "empaque",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", [_vm._v("CANASTILLA")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("ICOPOR")]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c("label", { attrs: { for: "first_name" } }, [
                _vm._v("No Empaque"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cutcontrol.qtyempaque,
                    expression: "cutcontrol.qtyempaque",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  type: "number",
                  id: "qtyempaque",
                  placeholder: "00",
                  name: "",
                  value: "",
                },
                domProps: { value: _vm.cutcontrol.qtyempaque },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.cutcontrol, "qtyempaque", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c("label", { attrs: { for: "lote" } }, [_vm._v("No Lote")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cutcontrol.lote,
                      expression: "cutcontrol.lote",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "Lote",
                    placeholder: "Lote",
                    name: "",
                    value: "",
                  },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.cutcontrol,
                        "lote",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", [_vm._v("24")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("25")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("4L")]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c("label", { attrs: { for: "first_name" } }, [
                _vm._v("Producto"),
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cutcontrol.product,
                      expression: "cutcontrol.product",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "product",
                    placeholder: "TOMILLO",
                    name: "",
                    value: "",
                  },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.cutcontrol,
                        "product",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", [_vm._v("Albaca")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Menta")]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c("label", { attrs: { for: "qtybolsa" } }, [
                _vm._v("Cantidad Bolsa"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cutcontrol.qtybolsa,
                    expression: "cutcontrol.qtybolsa",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  type: "number",
                  id: "qtybolsa",
                  placeholder: "00",
                  name: "",
                  value: "",
                },
                domProps: { value: _vm.cutcontrol.qtybolsa },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.cutcontrol, "qtybolsa", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3 disable" }, [
              _c("label", { attrs: { for: "peso_bolsa" } }, [
                _vm._v("Peso Bolsa"),
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cutcontrol.peso_bolsa,
                      expression: "cutcontrol.peso_bolsa",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    id: "peso_bolsa",
                    placeholder: "00",
                    name: "",
                    value: "",
                  },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.cutcontrol,
                        "peso_bolsa",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", [_vm._v("460")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("500")]),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "button", "data-bs-dismiss": "modal" },
                on: {
                  click: function ($event) {
                    return _vm.changedata()
                  },
                },
              },
              [
                _vm._v(
                  "\n                        Limpiar Datos\n                    "
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", "data-bs-dismiss": "modal" },
                on: {
                  click: function ($event) {
                    return _vm.closeModal()
                  },
                },
              },
              [_vm._v("\n                        Cerrar\n                    ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                attrs: { type: "button" },
                on: {
                  click: function ($event) {
                    return _vm.save()
                  },
                },
              },
              [
                _vm._v(
                  "\n                        Guardar\n                    "
                ),
              ]
            ),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-striped table-hover" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.cutcontrols, function (cutcontrol) {
          return _c("tr", { key: cutcontrol.id }, [
            _c("th", { attrs: { scope: "row" } }, [
              _vm._v(_vm._s(cutcontrol.id)),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(cutcontrol.fecharegistro))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(cutcontrol.cortador))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(cutcontrol.lote))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(cutcontrol.empaque))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(cutcontrol.product))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(cutcontrol.qtyempaque))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(cutcontrol.qtybolsa))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(cutcontrol.peso_bolsa))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(cutcontrol.total_peso))]),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "Button",
                  {
                    staticClass: "btn btn-warning",
                    on: {
                      click: function ($event) {
                        _vm.update = true
                        _vm.openModal(cutcontrol)
                      },
                    },
                  },
                  [_vm._v("Ver")]
                ),
              ],
              1
            ),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-dark" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Codigo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("No")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tipo de")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Peso Bolsa")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total Peso")]),
        _vm._v(" "),
        _c("th", {
          staticClass: "text-center",
          attrs: { scope: "col", colspan: "2" },
        }),
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fecha Registro")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cortador")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Lote")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Empaque")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Empaque")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Bolsas")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Gramos")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Kilos")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", attrs: { scope: "col", colspan: "2" } },
          [_vm._v("Acción")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);