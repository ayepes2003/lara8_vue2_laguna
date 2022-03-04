"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_workdaily_FormSalaControl_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/FormSalaControl.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/FormSalaControl.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue_select_picker_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select-picker-bootstrap */ "./node_modules/vue-select-picker-bootstrap/dist/vue-select-picker-bootstrap.esm.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty({
  name: "FormSalaControl",
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    VSelect: vue_select_picker_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      cutcontrol: {
        empaque: "ICOPOR"
      },
      id: 0,
      update: true,
      modal: 0,
      titleModal: "",
      cutcontrols: [],
      datospacking: [],
      datoslote: [],
      datosbolsa: [],
      datosproduct: [],
      datoscortador: [],
      weight_box: [{
        value: 1,
        text: "460"
      }, {
        value: 0,
        text: "500"
      }],
      products_box: [{
        value: 1,
        text: "Albaca"
      }, {
        value: 2,
        text: "Tomillo"
      }],
      employee_cut: [{
        value: 1,
        text: "Francisco Perez"
      }, {
        value: 2,
        text: "Esperanza Galido"
      }, {
        value: 3,
        text: "Juan Restrepo"
      }],
      lote_box: [{
        value: 1,
        text: "24"
      }, {
        value: 2,
        text: "25"
      }, {
        value: 3,
        text: "4L"
      }],
      type_packing: [{
        value: 1,
        text: "ICOPOR"
      }, {
        value: 2,
        text: "CANASTILLA"
      }]
    };
  },
  computed: {},
  activated: function activated() {
    this.conwebsocketcket();
  },
  created: function created() {},
  mounted: function mounted() {
    console.log(process.env.VUE_APP_RUTA_API);
  },
  methods: {
    sendMessage: function sendMessage(message) {
      console.log(this.connection);
      this.connection.send(message);
    },
    conwebsocket: function conwebsocket() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("Starting connection to WebSocket Server");
                _this.connection = new WebSocket("ws://172.16.10.173:81/");

                _this.connection.onmessage = function (event) {
                  console.log(event.data);
                };

                _this.connection.onopen = function (event) {
                  console.log(event);
                  console.log("Successfully connected to the echo websocket server...");
                };

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    beforeUpdate: function beforeUpdate() {},
    customFormatter: function customFormatter(date) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("yyyy-MM-d");
    },
    closeModal: function closeModal() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$router.push({
                  name: "controlcorte"
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    crear: function crear() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // custom request
                _this3.cutcontrol.cortador = _this3.cutcontrol.datoscortador.value;
                _this3.cutcontrol.lote = _this3.cutcontrol.datoslote.text;
                _this3.cutcontrol.empaque = _this3.cutcontrol.datospacking.text;
                _this3.cutcontrol.product = _this3.cutcontrol.datosproduct.text;
                _this3.cutcontrol.peso_bolsa = _this3.cutcontrol.datosbolsa.text;
                _this3.cutcontrol.qtyempaque = 1;
                _this3.cutcontrol.total_peso = _this3.cutcontrol.qtybolsa * _this3.cutcontrol.peso_bolsa;
                _context3.next = 9;
                return _this3.axios.post("/api/v1/cutcontrols", _this3.cutcontrol).then(function (response) {
                  if (response.data.code == 200) {
                    _this3.customAlert(response.data.message, "\n success");

                    _this3.cutcontrol.datosbolsa = null;
                    _this3.cutcontrol.qtybolsa = null;
                    _this3.cutcontrol.fecharegistro = new date();
                  } else {
                    _this3.customAlert(response.data.message, "error");
                  }

                  console.log(response.data);
                })["catch"](function (error) {
                  console.log(error);
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    customAlert: function customAlert(str, type) {
      this.$notify({
        type: type,
        title: "Sistema agroOnline",
        text: str
      });
    }
  }
}, "computed", {
  validateForm: function validateForm() {
    // if (!this.cutcontrol.fecharegistro) {
    //     // this.customAlert("Debe indicar una fecha de registro.")
    //     return false;
    // }
    if (!this.cutcontrol.datoscortador) {
      // this.customAlert("Debe indicar un cortador.")
      return false;
    }

    if (!this.cutcontrol.datospacking) {
      // this.customAlert("Debe indicar un packig.")
      return false;
    }

    if (!this.cutcontrol.datoslote) {
      // this.customAlert("Debe indicar un lote.")
      return false;
    }

    if (!this.cutcontrol.datosproduct) {
      // this.customAlert("Debe indicar un producto.")
      return false;
    }

    if (!this.cutcontrol.datosbolsa) {
      // this.customAlert("Debe indicar el dato de la bolsa.")
      return false;
    }

    if (!this.cutcontrol.qtybolsa || this.cutcontrol.qtybolsa < 1 || this.cutcontrol.qtybolsa > 99) {
      return false;
    }

    return true;
  }
}));

/***/ }),

/***/ "./resources/js/components/workdaily/FormSalaControl.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/workdaily/FormSalaControl.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormSalaControl_vue_vue_type_template_id_14efc274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSalaControl.vue?vue&type=template&id=14efc274& */ "./resources/js/components/workdaily/FormSalaControl.vue?vue&type=template&id=14efc274&");
/* harmony import */ var _FormSalaControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSalaControl.vue?vue&type=script&lang=js& */ "./resources/js/components/workdaily/FormSalaControl.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSalaControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSalaControl_vue_vue_type_template_id_14efc274___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormSalaControl_vue_vue_type_template_id_14efc274___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/workdaily/FormSalaControl.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/workdaily/FormSalaControl.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/workdaily/FormSalaControl.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSalaControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormSalaControl.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/FormSalaControl.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSalaControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/workdaily/FormSalaControl.vue?vue&type=template&id=14efc274&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/workdaily/FormSalaControl.vue?vue&type=template&id=14efc274& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSalaControl_vue_vue_type_template_id_14efc274___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSalaControl_vue_vue_type_template_id_14efc274___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSalaControl_vue_vue_type_template_id_14efc274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormSalaControl.vue?vue&type=template&id=14efc274& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/FormSalaControl.vue?vue&type=template&id=14efc274&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/FormSalaControl.vue?vue&type=template&id=14efc274&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workdaily/FormSalaControl.vue?vue&type=template&id=14efc274& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-12" },
      [
        _c("h1", { staticClass: "text-center text-success" }, [
          _vm._v("Registro Diario En Sala"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 mb-2" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  _vm.websocket = false
                  _vm.conwebsocket()
                },
              },
            },
            [_vm._v("\n                Bascula\n            ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-success",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.sendMessage("poweron")
                },
              },
            },
            [_vm._v("\n                Peso\n            ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.sendMessage("poweroff")
                },
              },
            },
            [_vm._v("\n                PowerOff\n            ")]
          ),
        ]),
        _vm._v(" "),
        _c("notifications", { attrs: { position: "top center" } }),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.crear.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 mb-2" }, [
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
                        attrs: { type: "date", id: "fecharegistro" },
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
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("label", { attrs: { for: "cutcontrol.cortador" } }, [
                          _vm._v(
                            "Nombre Cortador\n                                    "
                          ),
                          _c("span", { staticClass: "text-primary" }, [
                            _vm._v(
                              _vm._s(
                                _vm.cutcontrol.datoscortador &&
                                  _vm.cutcontrol.datoscortador.text
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("VSelect", {
                          attrs: {
                            type: "text",
                            defaultTitle: "Selecione Cortador",
                            options: _vm.employee_cut,
                            id: "employee_cut",
                            requerid: "",
                          },
                          model: {
                            value: _vm.cutcontrol.datoscortador,
                            callback: function ($$v) {
                              _vm.$set(_vm.cutcontrol, "datoscortador", $$v)
                            },
                            expression: "cutcontrol.datoscortador",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("label", { attrs: { for: "empaque" } }, [
                          _vm._v(
                            "Tipo Empaque\n                                    " +
                              _vm._s(_vm.datospacking.text) +
                              "\n                                "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("VSelect", {
                          attrs: {
                            defaultTitle: "Selecione Tipo Empaque",
                            options: _vm.type_packing,
                            id: "type_packing",
                            requerid: "",
                          },
                          model: {
                            value: _vm.cutcontrol.datospacking,
                            callback: function ($$v) {
                              _vm.$set(_vm.cutcontrol, "datospacking", $$v)
                            },
                            expression: "cutcontrol.datospacking",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("label", { attrs: { for: "lote1" } }, [
                          _vm._v("No Lote " + _vm._s(_vm.datoslote.text)),
                        ]),
                        _vm._v(" "),
                        _c("VSelect", {
                          attrs: {
                            defaultTitle: "Selecione Lote",
                            options: _vm.lote_box,
                            id: "lote",
                            requerid: "",
                          },
                          model: {
                            value: _vm.cutcontrol.datoslote,
                            callback: function ($$v) {
                              _vm.$set(_vm.cutcontrol, "datoslote", $$v)
                            },
                            expression: "cutcontrol.datoslote",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("label", { attrs: { for: "cutcontrol.product" } }, [
                          _vm._v("Producto " + _vm._s(_vm.datosproduct.text)),
                        ]),
                        _vm._v(" "),
                        _c("VSelect", {
                          attrs: {
                            defaultTitle: "Selecione Producto",
                            options: _vm.products_box,
                            id: "product",
                            requerid: "",
                          },
                          model: {
                            value: _vm.cutcontrol.datosproduct,
                            callback: function ($$v) {
                              _vm.$set(_vm.cutcontrol, "datosproduct", $$v)
                            },
                            expression: "cutcontrol.datosproduct",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("label", { attrs: { for: "peso_bolsa" } }, [
                          _vm._v(
                            "Peso Bolsa\n                                    " +
                              _vm._s(_vm.datosbolsa.text) +
                              " gr"
                          ),
                        ]),
                        _vm._v(" "),
                        _c("VSelect", {
                          attrs: {
                            defaultTitle: "Seleccione Peso Bolsa",
                            options: _vm.weight_box,
                            id: "peso_bolsa",
                            requerid: "",
                          },
                          model: {
                            value: _vm.cutcontrol.datosbolsa,
                            callback: function ($$v) {
                              _vm.$set(_vm.cutcontrol, "datosbolsa", $$v)
                            },
                            expression: "cutcontrol.datosbolsa",
                          },
                        }),
                      ],
                      1
                    ),
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
                        attrs: { type: "number", id: "qtybolsa" },
                        domProps: { value: _vm.cutcontrol.qtybolsa },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.cutcontrol,
                              "qtybolsa",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
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
              [_vm._v("\n                    Cerrar\n                ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                attrs: {
                  disabled: _vm.validateForm ? !_vm.validateForm : "disabled",
                  type: "button",
                },
                on: {
                  click: function ($event) {
                    return _vm.crear()
                  },
                },
              },
              [_vm._v("\n                    Guardar\n                ")]
            ),
          ]),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "text-danger" }, [_vm._v("Datos")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);