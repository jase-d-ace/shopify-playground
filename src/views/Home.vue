<script>
    export default {
        name: "Home",
        data() {
            return {
                stuff: "things",
            };
        },
        methods: {
            login() {
                const redirectUri = process.env.SHOPIFY_REDIRECT_URL;
                const clientId = process.env.SHOPIFY_CLIENT_ID;
                const scopes = "read_products,write_products,read_orders,write_orders";
                const authUrl = `https://${process.env.SHOPIFY_STORE_NAME}/admin/oauth/authorize?client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`

                window.location.href = authUrl;
            }
        }
    }
</script>

<template>
    <div class="some-class">
        <h1>
            Home!
        </h1>
        <button @click="login()">Link Shopify</button>
    </div>
</template>

