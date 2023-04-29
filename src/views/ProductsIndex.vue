<script>
    import { getShopifyToken } from "@/services.js";
    import json from "@/dummy.json"
    export default {
        name: "ProductsIndex",
        data() {
            return {
                stuff: "things",
                token: null,
            }
        },
        mounted() {
            this.token = getShopifyToken(this.$route.query.code)
            console.log(json)
        },
        methods: {
            
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
