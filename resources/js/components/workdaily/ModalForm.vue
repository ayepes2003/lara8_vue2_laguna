<template>
    <div>
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
                                v-model="fecharegistro"
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
    </div>
</template>

<script>
export default {
    name: "Test",
    created() {},
    data() {
        return {};
    },
    props: {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
