<template>
    <div>
        <h1 class="text-center text-success">Trabajo Diario Corte</h1>
        <div class="col-12 mb-2">
            <button
                @click="
                    websocket = false;
                    conwebsocket();
                "
                type="button"
                class="btn btn-primary"
            >
                Conection Bascula
            </button>
        </div>
        <div class="col-12 mb-2">
            <button
                @click="sendMessage('poweron')"
                type="button"
                class="btn btn-success"
            >
                Peso
            </button>

            <button
                @click="sendMessage('poweroff')"
                type="button"
                class="btn btn-danger"
            >
                PowerOff
            </button>
        </div>

        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <router-link
                :to="{ name: 'formcutcontrol' }"
                class="btn btn-success"
            >
                Nuevo Registro</router-link
            >
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
        <div class="card-footer">
            <!-- <pagination
                :data="products"
                @pagination-change-page="getResults"
            ></pagination> -->
        </div>
    </div>
</template>

<script>
import moment from "moment";
import Datepicker from "vuejs-datepicker";

export default {
    name: "cutgridtable",
    components: {
        Datepicker,
    },
    created() {
        console.log(process.env.VUE_APP_RUTA_API);
        this.list();
        //  this.conwebsocket();
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
        sendMessage: function (message) {
            console.log(this.connection);
            this.connection.send(message);
        },
        async conwebsocket() {
            console.log("Starting connection to WebSocket Server");
            this.connection = new WebSocket("ws://172.16.10.173:81/");
            this.connection.onmessage = function (event) {
                console.log(event.data);
            };

            this.connection.onopen = function (event) {
                console.log(event);
                console.log(
                    "Successfully connected to the echo websocket server..."
                );
            };
        },
        async list() {
            // console.log(this.$route);
            const api_url = "/api/v1/cutcontrols";
            const res = await axios.get(api_url);
            this.cutcontrols = res.data.data;
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
