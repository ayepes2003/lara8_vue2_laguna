<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img
                        src="img/icons8-plant-64.png"
                        alt=""
                        width="30"
                        height="24"
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/"
                                class="nav-link active"
                                aria-current="page"
                                >Inicio</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/employees"
                                class="nav-link"
                                >Empleados</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/products"
                                class="nav-link"
                                >Productos</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/lotes"
                                class="nav-link"
                                >Lotes</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/sales"
                                class="nav-link"
                                >Pedidos</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/salacontrol"
                                class="nav-link"
                                >Control Sala</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/controlcorte"
                                class="nav-link"
                                >Control Corte</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/formcutcontrol"
                                class="nav-link"
                                >Registro Corte</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                exact-active-class="active"
                                to="/FormSalaControl"
                                class="nav-link"
                                >Registro Sala</router-link
                            >
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button class="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>

        <div class="container-md mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
export default {};
</script>
<style></style>
