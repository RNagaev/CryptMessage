const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./react-app/src/index.js",
    output: {
        path: path.join(__dirname, "/react-app/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin ({
            template: "./react-app/src/index.html"
        })
    ]
};