<template>
    <div>
        <h1 class="text-center">Listado de Productos</h1>
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

        <table class="table table-striped table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Fecha Registro</th>
                    <th scope="col">Cortador</th>
                    <th scope="col">Lote</th>
                    <th scope="col">Empaque</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad Empaque</th>
                    <th scope="col">Cantidad Bolsa</th>
                    <th scope="col">Peso Bolsa</th>
                    <th scope="col">Total Peso</th>
                    <th scope="col" colspan="2" class="text-center">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" :key="contact.id">
                    <th scope="row">{{ contact.id }}</th>
                    <td>{{ contact.first_name }}</td>
                    <td>{{ contact.last_name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.phone }}</td>
                    <td>{{ contact.address }}</td>
                    <td>
                        <Button
                            @click="
                                update = true;
                                openModal(contact);
                            "
                            class="btn btn-warning"
                            >Editar</Button
                        >
                        <Button
                            @click="eliminar(contact.id)"
                            class="btn btn-danger"
                            >Eliminar</Button
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "products",
    created() {},
    data() {
        return {
            columns: [
                { label: "id", field: "id" },
                {
                    label: "Username",
                    field: "user.username",
                    headerClass: "class-in-header second-class",
                },
                { label: "First Name", field: "user.firstName" },
                { label: "Last Name", field: "user.lastName" },
                { label: "Email", field: "user.email" },
                {
                    label: "Address",
                    representedAs: ({ address, city, state }) =>
                        `${address}<br />${city}, ${state}`,
                    interpolate: true,
                },
            ],
            rows: [
                //...
                {
                    id: 1,
                    user: {
                        username: "dprice0",
                        firstName: "Daniel",
                        lastName: "Price",
                        email: "dprice0@blogs.com",
                    },
                    address: "3 Toban Park",
                    city: "Pocatello",
                    state: "Idaho",
                },
                //...
            ],
        };
    },
    props: {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
