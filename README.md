# TypeScript and TSX

## Quick Start

```bash
npm i
npm run start
```

## [ts-loader](https://github.com/TypeStrong/ts-loader)

```bash
npm install typescript ts-loader -D
```

Configured in [webpack.config.js](./webpack.config.js): module.rules. TS compile configuration is in [tsconfig.json](./tsconfig.json).

ts-loader can parse JSX as well (`"jsx": "react-jsx"` in [tsconfig.json](./tsconfig.json)), so we don't need babel-loader and @preset/react any more.

```bash
npm install @types/react @types/react-dom -D
```

After ts-loader configured, we also need to install type libs of React.js packages.

Then `.ts` file will not show error......Maybe.

**Attention：** `.ts` file cannot understand JSX, but can import `.tsx` file.