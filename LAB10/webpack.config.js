const TerserPlugin = require("terser-webpack-plugin");
const config = 
{
  entry: "./src/index.js",
  output: 
  {
    path: `${__dirname}/out`,
    filename: "out.js",
  },
  optimization: 
  {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

module.exports = config;
