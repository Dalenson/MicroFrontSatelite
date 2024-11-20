const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.html',
    devServer: {
        hot: true,
        static: path.join(__dirname, 'dist'), // Substituindo contentBase por static
        compress: true,
        historyApiFallback: true,
        port: 8000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,  // Regex para identificar arquivos .html
                loader: 'html-loader',  // Usando o html-loader para processar arquivos .html
            },
        ],
    },
};