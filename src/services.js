export const getShopifyToken = async (code) => {
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            client_id: process.env.SHOPIFY_CLIENT_ID,
            client_secret: process.env.SHOPIFY_CLIENT_SECRET,
            code
        })
    };

    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://${process.env.SHOPIFY_STORE_NAME}/admin/oauth/access_token`, options)

    return await req.json();
};

export const populateProducts = async (json, token) => {
    const products = json.products;
    const productMap = products.map(product => ({"product": product}));
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origins": "*",
            "X-Shopify-Access-Token": token
        },
        body: JSON.stringify({products: productMap})
    };

    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://${process.env.SHOPIFY_STORE_NAME}/admin/api/2023-04/products.json`, options);

    return await req.json();
}
