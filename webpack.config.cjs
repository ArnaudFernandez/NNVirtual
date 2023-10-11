const path = require('path');

module.exports = {
    entry: './js/internationalization.js',  // point d'entrée de votre application
    output: {
        filename: 'bundle-webpack.js',  // fichier de sortie
        path: __dirname + '/dist'  // dossier de sortie
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // transpile tous les fichiers .js
                exclude: /node_modules/,  // exclure le dossier node_modules
                use: {
                    loader: 'babel-loader',  // utilise babel-loader
                    options: {
                        presets: ['@babel/preset-env']  // transpile en ES5
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: false,
        port: 9000
    }
};