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

    const res = await req.json();
    return res.access_token
};
