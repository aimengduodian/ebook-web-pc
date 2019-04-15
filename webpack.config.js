const path = require("path");

module.exports = {
    entry: ['./src/page/plugins/viewport.js','./src/main.js'],
    module: {
        loaders: [{
            //识别，告诉webpack什么样的文件用什么样的解析器
            test:/\.html$/,
            loader: "html-loader"
        },{
            test:/\.vue$/,
            loader: "vue-loader"
        },{
            test:/\.scss$/,
            loader:"style-loader!styles-loader!sass-loader"
        }]
    },
    plugins: {},
    output: {
        filename:"[name]", //name和app对应，不能乱写
        path: path.resolve(__dirname, "dist")
    }
};
