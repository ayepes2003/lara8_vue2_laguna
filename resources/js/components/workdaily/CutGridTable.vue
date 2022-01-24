<template>
    <div>
        <h1 class="text-center">Trabajo Diario Corte</h1>
        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <router-link
                :to="{ name: 'formcutcontrol' }"
                class="btn btn-success"
                ><i class="fas fa-plus-circle"></i
            ></router-link>
        </div>
        <button
            @click="
                update = false;
                openModal();
            "
            type="button"
            class="btn btn-primary"
        >
            Nuevo Registro
        </button>
        <div class="modal" :class="{ show: modal }">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ titleModal }}
                        </h5>
                        <button
                            @click="closeModal()"
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group mb-3">
                            <datepicker
                                :bootstrap-styling="true"
                                input-class="form-control"
                                :open-date="openDate"
                                :format="customFormatter"
                                :value="openDate"
                                :disabled-dates="{ to: new Date() }"
                                v-model="cutcontrol.fecharegistro"
                                :required="true"
                            >
                            </datepicker>
                        </div>
                        <div class="form-group mb-3">
                            <label for="fecharegistro">Fecha Registro</label>
                            <input
                                v-model="cutcontrol.fecharegistro"
                                type="date"
                                class="form-control"
                                id="fecharegistro"
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
                    <div class="modal-footer">
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
        <table class="table table-striped table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Codigo</th>
                    <th scope="col">No</th>
                    <th scope="col">Tipo de</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Peso Bolsa</th>
                    <th scope="col">Total Peso</th>
                    <th scope="col" colspan="2" class="text-center"></th>
                </tr>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Fecha Registro</th>
                    <th scope="col">Cortador</th>
                    <th scope="col">Lote</th>
                    <th scope="col">Empaque</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Empaque</th>
                    <th scope="col">Bolsas</th>
                    <th scope="col">Gramos</th>
                    <th scope="col">Kilos</th>
                    <th scope="col" colspan="2" class="text-center">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cutcontrol in cutcontrols" :key="cutcontrol.id">
                    <th scope="row">{{ cutcontrol.id }}</th>
                    <td>{{ cutcontrol.fecharegistro }}</td>
                    <td>{{ cutcontrol.cortador }}</td>
                    <td>{{ cutcontrol.lote }}</td>
                    <td>{{ cutcontrol.empaque }}</td>
                    <td>{{ cutcontrol.product }}</td>
                    <td>{{ cutcontrol.qtyempaque }}</td>
                    <td>{{ cutcontrol.qtybolsa }}</td>
                    <td>{{ cutcontrol.peso_bolsa }}</td>
                    <td>{{ cutcontrol.total_peso }}</td>
                    <td>
                        <Button
                            @click="
                                update = true;
                                openModal(cutcontrol);
                            "
                            class="btn btn-warning"
                            >Ver</Button
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import moment from "moment";
import Datepicker from "vuejs-datepicker";

export default {
    name: "cutgridtable",
    components: {
        Datepicker,
        Dialog,
    },
    created() {
        this.list();
    },
    data() {
        return {
            visible: false,
            cutcontrol: {
                fecharegistro: 0,
                cortador: "",
                lote: "",
                product: "",
                qtyempaque: 0,
                qtybolsa: 0,
                peso_bolsa: 0,
                total_peso: 0,
            },
            openDate: new Date(),
            id: 0,
            update: true,
            modal: 0,
            titleModal: "",
            cutcontrols: [],
        };
    },
    props: {},
    methods: {
        openDialog() {
            this.visible = true; // Controla explícitamente el diálogo a través de los datos
        },

        async list() {
            console.log(this.$route);
            const api_url = "http://172.16.10.108:8001/api/cutcontrols";
            const res = await axios.get(api_url);
            this.cutcontrols = res.data;
        },

        openModal(data = {}) {
            this.modal = 1;
            if (this.update) {
                this.titleModal = "Modificar Contacto";
            } else {
                this.id = 0;
                this.titleModal = "Crear Datos para Tipo Empaque";
                this.cutcontrol.fecharegistro = moment(new Date()).format(
                    "yyyy-MM-dd"
                );
                this.cutcontrol.cortador = "";
                this.cutcontrol.product = "";
                this.cutcontrol.qtyempaque = 0;
                this.cutcontrol.qtybolsa = 0;
                this.cutcontrol.peso_bolsa = 0;
                this.cutcontrol.total_peso = 0;
            }
        },
        closeModal() {
            this.modal = 0;
        },
        customFormatter(date) {
            return moment(date).format("yyyy-MM-dd");
        },
    },
};
</script>

<style lang="scss" scoped>
.show {
    display: list-item;
    opacity: 1;
    background: rgba(44, 38, 75, 0.849);
}
</style>
