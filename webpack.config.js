const path = require('path');
module.exports = {
     watch : true,
     entry : [
          './src/scripts/index.js'
     ],
     output:{
          filename : 'app.js',
          path: path.resolve(__dirname, 'dist'),
     },
     module : {
          rules : [
               {
                    test: /\.s[ac]ss$/i,
                    use : ['style-loader' , 'css-loader', "sass-loader",]
               }
          ]
     },
   };