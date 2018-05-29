module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./index.web.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'react-native': 'react-native-web'
        }
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "babel-loader!ts-loader" }
        ]
    }
};