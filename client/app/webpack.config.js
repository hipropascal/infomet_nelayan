const path = require('path');

const index = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    }
};

module.exports = [index];