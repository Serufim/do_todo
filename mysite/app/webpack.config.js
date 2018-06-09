const path = require('path')
module.exports = {
   entry: "./assets/js",
   output:{
       path: path.resolve(__dirname,"static/app/"),
       filename: "index.js"
   },
   module: {
      rules: [
         {
         test: /\.vue$/,
         loader: 'vue-loader'
        }
      ]
   }

}