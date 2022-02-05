<template>
    <div class="row">
        <div class="col-12">
            <notifications position="top center" />
            <div class="card">
                <div class="card-header">
                    <h4 class="text-danger">Crear Registro Corte</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group mb-3">
                                    <label for="fecharegistro"
                                        >Fecha Registro</label
                                    >
                                    <input
                                        v-model="cutcontrol.fecharegistro"
                                        type="date"
                                        class="form-control"
                                        id="fecharegistro"
                                        value="cutcontrol.fecharegistro"
                                    />
                                    <!-- <datepicker
                                        :bootstrap-styling="true"
                                        input-class="form-control"
                                        :format="customFormatter"
                                        :language="en"
                                        :disabled-dates="{ to: new Date() }"
                                        v-model="cutcontrol.fecharegistro"
                                        :required="true"
                                    >
                                    </datepicker> -->
                                </div>

                                <div class="form-group mb-3">
                                    <label for="cutcontrol.cortador"
                                        >Nombre Cortador
                                        <span class="text-primary">{{
                                            cutcontrol.datoscortador &&
                                            cutcontrol.datoscortador.text
                                        }}</span></label
                                    >
                                    <VSelect
                                        v-model="cutcontrol.datoscortador"
                                        type="text"
                                        defaultTitle="Selecione Cortador"
                                        :options="employee_cut"
                                        id="employee_cut"
                                        requerid
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="empaque"
                                        >Tipo Empaque
                                        {{ datospacking.text }}
                                    </label>

                                    <VSelect
                                        v-model="cutcontrol.datospacking"
                                        defaultTitle="Selecione Tipo Empaque"
                                        :options="type_packing"
                                        id="type_packing"
                                        requerid
                                    />
                                </div>
                                <!-- <div class="form-group mb-3">
                                    <label for="cutcontrol.qtyempaque"
                                        >No Empaque</label
                                    >
                                    <input
                                        v-model="cutcontrol.qtyempaque"
                                        value="1"
                                        class="form-control"
                                        id="qtyempaque"
                                    />
                                </div> -->
                                <div class="form-group mb-3">
                                    <label for="lote1"
                                        >No Lote {{ datoslote.text }}</label
                                    >
                                    <VSelect
                                        v-model="cutcontrol.datoslote"
                                        defaultTitle="Selecione Lote"
                                        :options="lote_box"
                                        id="lote"
                                        requerid
                                    />
                                </div>

                                <div class="form-group mb-3">
                                    <label for="cutcontrol.product"
                                        >Producto {{ datosproduct.text }}</label
                                    >
                                    <VSelect
                                        v-model="cutcontrol.datosproduct"
                                        defaultTitle="Selecione Producto"
                                        :options="products_box"
                                        id="product"
                                        requerid
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="peso_bolsa"
                                        >Peso Bolsa
                                        {{ datosbolsa.text }} gr</label
                                    >
                                    <VSelect
                                        v-model="cutcontrol.datosbolsa"
                                        defaultTitle="Seleccione Peso Bolsa"
                                        :options="weight_box"
                                        id="peso_bolsa"
                                        requerid
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="qtybolsa">Cantidad Bolsa</label>
                                    <input
                                        v-model="cutcontrol.qtybolsa"
                                        type="number"
                                        class="form-control"
                                        id="qtybolsa"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button
                        @click="closeModal()"
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Cerrar
                    </button>
                    <button
                        :disabled="validateForm ? !validateForm : 'disabled'"
                        @click="crear()"
                        type="button"
                        class="btn btn-success"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import Datepicker from "vuejs-datepicker";
import VSelect from "vue-select-picker-bootstrap";

export default {
    name: "formcutcontrol",
    components: {
        Datepicker,
        VSelect,
    },
    data() {
        return {
            cutcontrol: {
                empaque: "ICOPOR",
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
            weight_box: [
                {
                    value: 1,
                    text: "460",
                },
                {
                    value: 0,
                    text: "500",
                },
            ],

            products_box: [
                {
                    value: 1,
                    text: "Albaca",
                },
                {
                    value: 2,
                    text: "Tomillo",
                },
            ],
            employee_cut: [
                {
                    value: 1,
                    text: "Francisco Perez",
                },
                {
                    value: 2,
                    text: "Esperanza Galido",
                },
                {
                    value: 3,
                    text: "Juan Restrepo",
                },
            ],
            lote_box: [
                {
                    value: 1,
                    text: "24",
                },
                {
                    value: 2,
                    text: "25",
                },
                {
                    value: 3,
                    text: "4L",
                },
            ],
            type_packing: [
                {
                    value: 1,
                    text: "ICOPOR",
                },
                {
                    value: 2,
                    text: "CANASTILLA",
                },
            ],
        };
    },
    computed: {},
    created() {},
    mounted() {
        console.log(process.env.VUE_APP_RUTA_API);
    },
    methods: {
        customFormatter(date) {
            return moment(date).format("yyyy-MM-dd");
        },

        async closeModal() {
            this.$router.push({ name: "controlcorte" });
        },

        async crear() {
            // Validaciones
            if (!this.cutcontrol.fecharegistro) {
                this.customAlert("Debe indicar una fecha de registro.", "warn");
                return;
            }
            if (!this.cutcontrol.datoscortador) {
                this.customAlert("Debe indicar un cortador.", "warn");
                return;
            }
            if (!this.cutcontrol.datospacking) {
                this.customAlert("Debe indicar un packig.", "warn");
                return;
            }

            if (!this.cutcontrol.datoslote) {
                this.customAlert("Debe indicar un lote.", "warn");
                return;
            }

            if (!this.cutcontrol.datosproduct) {
                this.customAlert("Debe indicar un producto.", "warn");
                return;
            }

            if (!this.cutcontrol.datosbolsa) {
                this.customAlert("Debe indicar el dato de la bolsa.", "warn");
                return;
            }

            if (
                !this.cutcontrol.qtybolsa ||
                this.cutcontrol.qtybolsa < 1 ||
                this.cutcontrol.qtybolsa > 99
            ) {
                this.customAlert("Cantidad Bolsa Errada", "warn");
                return;
            }

            // custom request
            this.cutcontrol.cortador = this.cutcontrol.datoscortador.value;
            this.cutcontrol.lote = this.cutcontrol.datoslote.text;
            this.cutcontrol.empaque = this.cutcontrol.datospacking.text;
            this.cutcontrol.product = this.cutcontrol.datosproduct.text;
            this.cutcontrol.peso_bolsa = this.cutcontrol.datosbolsa.text;
            this.cutcontrol.qtyempaque = 1;
            this.cutcontrol.total_peso =
                this.cutcontrol.qtybolsa * this.cutcontrol.peso_bolsa;

            await this.axios
                .post("/api/cutcontrols", this.cutcontrol)
                .then((response) => {
                    if (response.data.code == 200) {
                        this.customAlert(response.data.message, "success");
                        this.cutcontrol.datosbolsa = null;
                        this.cutcontrol.qtybolsa = null;
                    } else {
                        this.customAlert(response.data.message, "error");
                    }
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        customAlert(str, type) {
            this.$notify({
                type: type,
                title: "Sistema agroOnline",
                text: str,
            });
            // alert(str);
        },
    },
    computed: {
        validateForm() {
            if (!this.cutcontrol.fecharegistro) {
                // this.customAlert("Debe indicar una fecha de registro.")
                return false;
            }
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

            if (
                !this.cutcontrol.qtybolsa ||
                this.cutcontrol.qtybolsa < 1 ||
                this.cutcontrol.qtybolsa > 99
            ) {
                return false;
            }

            return true;
        },
    },
};
</script>
