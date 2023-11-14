module.exports = () => ({
   module: {
      rules: [
         {
            test: /\.sa?css$/,
            use: ["style-loader", "css-loader", "sass-loader"] // [{ loader: 'style-loader' }, { loader: 'css-loader', }, { loader: 'sass-loader' }]
         }
      ]
   }
});