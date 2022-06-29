# React.js with JSX

## Quick Start

```bash
npm i
npm run start
```

## [babel-loader](https://www.webpackjs.com/loaders/babel-loader/)

```bash
npm install babel-loader @babel/core @babel/preset-react -D
```

Configured in [webpack.config.js](./webpack.config.js): module.rules

JSX is just syntactic sugar for calling `React.createElement()`, so it need to be parsed and transformed.
babel-loader will do this for you.
 
Besides setting babel-loader as the loader to parse `.js`/`.jsx` files, we also need to declare preset `@babel/preset-react`, which tells babel-loader how to handle React.js code.
