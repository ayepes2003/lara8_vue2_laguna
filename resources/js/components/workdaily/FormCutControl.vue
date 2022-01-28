<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Crear Registro Corte</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
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
                                        {{ datoscortador.text }}</label
                                    >
                                    <VSelect
                                        v-model="datoscortador"
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
                                        v-model="datospacking"
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
                                        v-model="datoslote"
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
                                        v-model="datosproduct"
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
                                        v-model="datosbolsa"
                                        defaultTitle="Seleccione Peso Bolsa"
                                        :options="weight_box"
                                        id="peso_bolsa"
                                        requerid
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="qtybolsa">Cantidad Bolsa</label>
                                    <input
                                        @click="select"
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
                        @click="cleardata()"
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                    >
                        Limpiar Datos
                    </button>
                    <button
                        @click="closeModal()"
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Cerrar
                    </button>
                    <button
                        @click="save()"
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
                fecharegistro: "",
                cortador: "",
                lote: "",
                product: "",
                qtyempaque: 0,
                empaque: "ICOPOR",
                qtybolsa: 0,
                peso_bolsa: 0,
                total_peso: 0,
            },

            id: 0,
            update: true,
            modal: 0,
            titleModal: "",
            cutcontrols: [],
            datospacking: [
                {
                    value: 0,
                    text: "",
                },
            ],
            datoslote: [
                {
                    value: 0,
                    text: "",
                },
            ],
            datosbolsa: [
                {
                    value: 0,
                    text: "",
                },
            ],
            datosproduct: [
                {
                    value: 0,
                    text: "",
                },
            ],
            datoscortador: [
                {
                    value: 0,
                    text: "",
                },
            ],
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
        select: function (event) {
            event.target.setSelectionRange(0, this.text.length);
        },
        customFormatter(date) {
            return moment(date).format("yyyy-MM-dd");
        },

        async closeModal() {
            this.$router.push({ name: "controlcorte" });
        },
        async save() {
            (this.cutcontrol.cortador = this.datoscortador.value),
                (this.cutcontrol.lote = this.datoslote.text),
                (this.cutcontrol.empaque = this.datospacking.text),
                (this.cutcontrol.product = this.datosproduct.text),
                (this.cutcontrol.peso_bolsa = this.datosbolsa.text),
                (this.cutcontrol.qtyempaque = 1),
                (this.cutcontrol.total_peso =
                    this.cutcontrol.qtybolsa * this.cutcontrol.peso_bolsa);
            console.log(this.cutcontrol);
            this.crear();
        },
        async crear() {
            await this.axios
                .post(
                    "http://172.16.10.108:8001/api/cutcontrols",
                    this.cutcontrol
                )
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            (this.qtybolsa = 0),
                (this.peso_bolsa = 0),
                (this.total_peso = 0),
                (this.datosbolsa.value = 0);
        },
    },
};
</script>
