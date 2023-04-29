<script>
    import { getShopifyToken, populateProducts } from "@/services.js";
    import json from "@/dummy.json"
    export default {
        name: "ProductsIndex",
        data() {
            return {
                stuff: "things",
                token: null,
                products: null,
                hasToken: false,
            }
        },
        mounted() {
            getShopifyToken(this.$route.query.code).then(token => {
                this.token = token.access_token;
                this.hasToken = true;
            })
        },
        methods: {
            getProducts() {
                populateProducts(json, this.token)
                    .then(products => {
                        this.products = products
                        console.log("products!", products)
                })
            }
        }
    };
</script>

<template>
    <div class="some-class">
        <h1>
            Products!
        </h1>
        <button v-if="hasToken" @click="getProducts">Click me</button>
    </div>
</template>

<style lang="scss">
</style>
