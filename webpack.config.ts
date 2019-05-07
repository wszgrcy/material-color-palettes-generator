import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
export const config: webpack.Configuration = {
    mode: 'development',
    entry: './main.ts',
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            // template:
        })
    ],
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}
export default config