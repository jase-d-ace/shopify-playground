<script>
    import { getShopifyToken } from "@/services.js";
    export default {
        name: "ProductsIndex",
        data() {
            return {
                stuff: "things",
                token: null,
            }
        },
        mounted() {
            getShopifyToken(this.$route.query.code, (res) => {this.token = res})
        }
    };
</script>

<template>
    <div class="some-class">
        <h1>
            Products!
        </h1>
    </div>
</template>

<style lang="scss">
</style>
