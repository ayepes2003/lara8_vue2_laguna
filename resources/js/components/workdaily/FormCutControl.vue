<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Crear Registro Corte {{ opendate }}</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group mb-3">
                                    <label for="fecharegistro"
                                        >Fecha Registro</label
                                    >
                                    <datepicker
                                        :bootstrap-styling="true"
                                        input-class="form-control"
                                        :open-date="openDate"
                                        :format="customFormatter"
                                        :value="openDate"
                                        :disabled-dates="{ to: new Date() }"
                                        v-model="fecharegistro"
                                        :required="true"
                                    >
                                    </datepicker>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="fecharegistro"
                                        >Fecha Registro</label
                                    >
                                    <input
                                        v-model="cutcontrol.fecharegistro"
                                        type="date"
                                        class="form-control"
                                        id="fecharegistro"
                                        placeholder="Fecha Registro"
                                        name=""
                                        value=""
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="cortador">Id Cortador</label>
                                    <select
                                        class="form-control"
                                        v-model="cutcontrol.cortador"
                                    >
                                        <option>Francisco Perez</option>
                                        <option>Esperanza Galido</option>
                                        <option>Juan Restrepo</option>
                                        <option>Ivan Calderon</option>
                                    </select>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="empaque">Tipo Empaque</label>
                                    <select
                                        v-model="cutcontrol.empaque"
                                        class="form-control"
                                        id="empaque"
                                        value="ICOPOR"
                                    >
                                        <option>CANASTILLA</option>
                                        <option>ICOPOR</option>
                                    </select>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="first_name">No Empaque</label>
                                    <input
                                        v-model="cutcontrol.qtyempaque"
                                        type="number"
                                        class="form-control"
                                        id="qtyempaque"
                                        placeholder="00"
                                        name=""
                                        value=""
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="lote">No Lote</label>
                                    <select
                                        v-model="cutcontrol.lote"
                                        type="text"
                                        class="form-control"
                                        id="Lote"
                                        placeholder="Lote"
                                        name=""
                                        value=""
                                    >
                                        <option>24</option>
                                        <option>25</option>
                                        <option>4L</option>
                                    </select>
                                </div>

                                <div class="form-group mb-3">
                                    <label for="first_name">Producto</label>
                                    <select
                                        v-model="cutcontrol.product"
                                        type="text"
                                        class="form-control"
                                        id="product"
                                        placeholder="TOMILLO"
                                        name=""
                                        value=""
                                    >
                                        <option>Albaca</option>
                                        <option>Menta</option>
                                    </select>
                                </div>

                                <div class="form-group mb-3">
                                    <label for="qtybolsa">Cantidad Bolsa</label>
                                    <input
                                        v-model="cutcontrol.qtybolsa"
                                        type="number"
                                        class="form-control"
                                        id="qtybolsa"
                                        placeholder="00"
                                        name=""
                                        value=""
                                    />
                                </div>
                                <div class="form-group mb-3 disable">
                                    <label for="peso_bolsa">Peso Bolsa</label>
                                    <select
                                        v-model="cutcontrol.peso_bolsa"
                                        type="number"
                                        class="form-control"
                                        id="peso_bolsa"
                                        placeholder="00"
                                        name=""
                                        value=""
                                    >
                                        <option>460</option>
                                        <option>500</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Guardar
                    </button>

                    <button
                        @click="changedata()"
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
export default {
    name: "formcutcontrol",
    components: {
        Datepicker,
    },
    data() {
        return {
            cutcontrol: {
                fecharegistro: moment(new Date()).format("YYYY-MM-d"),
                cortador: "",
                lote: "",
                product: "",
                qtyempaque: 0.0,
                qtybolsa: 0.0,
                peso_bolsa: 0.0,
                total_peso: 0.0,
            },

            id: 0,
            update: true,
            modal: 0,
            titleModal: "",
            cutcontrols: [],
        };
    },
    created() {
        openDate: new Date();
    },
    mounted() {
        this.mostrarBlog();
    },
    methods: {
        customFormatter(date) {
            return moment(date).format("yyyy-MM-dd");
        },
        async mostrarBlog() {
            await this.axios
                .get(`/api/blog/${this.$route.params.id}`)
                .then((response) => {
                    const { titulo, contenido } = response.data;
                    this.blog.titulo = titulo;
                    this.blog.contenido = contenido;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async actualizar() {
            await this.axios
                .put(`/api/blog/${this.$route.params.id}`, this.blog)
                .then((response) => {
                    this.$router.push({ name: "mostrarBlogs" });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
