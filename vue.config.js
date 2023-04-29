const { defineConfig } = require("@vue/cli-service"); 
const Dotenv = require("dotenv-webpack");

module.exports = defineConfig({
    devServer: {
        port: 3000
    },
    configureWebpack: {
        plugins: [
            new Dotenv()
        ]
    }
})
