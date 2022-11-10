const path = require("path");
const fs = require("fs");
const { VuetifyPlugin } = require("webpack-plugin-vuetify");

// Generate pages object
const pages = {};

function getEntryFile(entryPath) {
  let files = fs.readdirSync(entryPath);
  return files;
}

const chromeName = getEntryFile(path.resolve(`src/entry`));

function getFileExtension(filename) {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
}
chromeName.forEach((name) => {
  const fileExtension = getFileExtension(name);
  const fileName = name.replace("." + fileExtension, "");
  pages[fileName] = {
    entry: `src/entry/${name}`,
    template: "public/index.html",
    filename: `${fileName}.html`,
  };
});

const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
  pages,
  filenameHashing: false,
  chainWebpack: (config) => {
    config.plugin("copy").use(require("copy-webpack-plugin"), [
      {
        patterns: [
          {
            from: path.resolve(`src/manifest.json`),
            to: `${path.resolve("dist")}/manifest.json`,
          },
          {
            from: path.resolve(`public/`),
            to: `${path.resolve("dist")}/`,
          },
          {
            from: path.resolve(`src/assets/`),
            to: `${path.resolve("dist/assets")}/`,
          },
        ],
      },
    ]);
  },
  configureWebpack: {
    plugins: [new VuetifyPlugin()],
    output: {
      filename: `[name].js`,
      chunkFilename: `[name].js`,
    },
    devtool: isDevMode ? "inline-source-map" : false,
  },
  css: {
    extract: false, // Make sure the css is the same
  },
};
