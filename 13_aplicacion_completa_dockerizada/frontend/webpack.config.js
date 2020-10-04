const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: './src/',
    mode: 'production',

    output: {
        path: path.resolve('../static/bundles/'),
        filename: '[name].js',
    },

    plugins: [
        new BundleTracker(
            {
                path: path.resolve('/static/'), filename: 'webpack-stats.json'}
            ),
        // Makes jQuery available in every module
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        rules: [
            // Expresión regular para que WebPack utilice este loader en todos los .js y .jsx
            {
                test: /\.jsx?$/,
                // Evitamos que Babel haga la transpliación de los ficheros de ./node_modules/
                exclude: /node_modules/,
                //use the babel loader
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/, loader: "file-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader",
            },
        ]
    },

    resolve: {
        // Especificamos dónde se encuentran los módulos
        modules: ['node_modules'],
        // Tipos de fichero asociados
        extensions: ['.js', '.jsx']
    }
};