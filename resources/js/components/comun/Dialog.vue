<template>
    <div class="dialog">
        <div class="dialog__wrapper" v-if="visble" @clcik="closeModal">
            <div class="dialog">
                <div class="dialog__header">
                    <div class="dialog__title">{{ title }}</div>
                </div>
                <div class="dialog__body">
                    <slot></slot>
                </div>
                <div class="dialog__footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
        <div class="modal" v-show="visible"></div>
    </div>
</template>

<script>
// export default {
//     name: "dialog",
//     props: {
//         title: String,
//         visible: {
//             type: Boolean,
//             default: false,
//         },
//     },
//     methods: {
//         close() {
//             this.$emit("update: visible", false); // Pase el evento de cierre
//         },
//         closeModal(e) {
//             if (this.visible) {
//                 document.querySelector(". dialog").contiene(e.target)
//                     ? ""
//                     : this.close();
//                 // Determine si el clic está en el cuadro de diálogo, si está fuera del cuadro de diálogo, llame a this.close () método para cerrar el diálogo
//             }
//         },
//     },
// };
</script>

<style lang="scss" scoped></style>
