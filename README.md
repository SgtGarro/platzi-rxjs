# Platzi Wordle (con TypeScript)

## Desarrollo del Proyecto

1. Intruciones para inicializar nuestro proyecto.

```
npm i rxjs webpack webpack-dev-server
npm i -D webpack-cli typescript ts-loader
```

2. Crea tu archivo de configuracion de webpack

```js
const path = require("path");
module.exports = {
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
```

3. En la propied de `scripts` de package.json añade o ejecuta:

```json
"scripts": {
  "start": "webpack serve --o"
}
```
