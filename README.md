# Show HTML page in browser

## Quick Start

```bash
npm i
npm run start
```

## [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)

```bash
npm i html-webpack-plugin -D
```

Configured in [webpack.config.js](./webpack.config.js): plugins.

This plugin will generate or use exsited `.html` file, and import your `.js` and `.css` file in output path with `<script>` and `<link>`, which simplifies your work for connecting them.

## [WebpackDevServer](https://webpack.js.org/configuration/dev-server/)

```bash
npm i webpack-dev-server -D
```

Configured in [webpack.config.js](./webpack.config.js): devServer.

This tool will develop your web application quickly, and support hot uploading.
