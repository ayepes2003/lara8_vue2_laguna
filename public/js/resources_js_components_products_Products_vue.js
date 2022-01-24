"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_Products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Products.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Products.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "products",
  created: function created() {},
  data: function data() {
    return {
      columns: [{
        label: "id",
        field: "id"
      }, {
        label: "Username",
        field: "user.username",
        headerClass: "class-in-header second-class"
      }, {
        label: "First Name",
        field: "user.firstName"
      }, {
        label: "Last Name",
        field: "user.lastName"
      }, {
        label: "Email",
        field: "user.email"
      }, {
        label: "Address",
        representedAs: function representedAs(_ref) {
          var address = _ref.address,
              city = _ref.city,
              state = _ref.state;
          return "".concat(address, "<br />").concat(city, ", ").concat(state);
        },
        interpolate: true
      }],
      rows: [//...
      {
        id: 1,
        user: {
          username: "dprice0",
          firstName: "Daniel",
          lastName: "Price",
          email: "dprice0@blogs.com"
        },
        address: "3 Toban Park",
        city: "Pocatello",
        state: "Idaho"
      } //...
      ]
    };
  },
  props: {},
  methods: {}
});

/***/ }),

/***/ "./resources/js/components/products/Products.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/products/Products.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_6df41394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=6df41394&scoped=true& */ "./resources/js/components/products/Products.vue?vue&type=template&id=6df41394&scoped=true&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/products/Products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_6df41394_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_6df41394_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6df41394",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/Products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/Products.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/products/Products.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/Products.vue?vue&type=template&id=6df41394&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/products/Products.vue?vue&type=template&id=6df41394&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6df41394_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6df41394_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_6df41394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=template&id=6df41394&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Products.vue?vue&type=template&id=6df41394&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Products.vue?vue&type=template&id=6df41394&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Products.vue?vue&type=template&id=6df41394&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    _c("h1", { staticClass: "text-center" }, [_vm._v("Listado de Productos")]),
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
    _c("table", { staticClass: "table table-striped table-hover" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.contacts, function (contact) {
          return _c("tr", { key: contact.id }, [
            _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(contact.id))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(contact.first_name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(contact.last_name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(contact.email))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(contact.phone))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(contact.address))]),
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
                        _vm.openModal(contact)
                      },
                    },
                  },
                  [_vm._v("Editar")]
                ),
                _vm._v(" "),
                _c(
                  "Button",
                  {
                    staticClass: "btn btn-danger",
                    on: {
                      click: function ($event) {
                        return _vm.eliminar(contact.id)
                      },
                    },
                  },
                  [_vm._v("Eliminar")]
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cantidad Empaque")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cantidad Bolsa")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Peso Bolsa")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total Peso")]),
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