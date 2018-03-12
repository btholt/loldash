import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import uglify from "rollup-plugin-uglify";

const pkg = require("./package.json");

const libraryName = "loldash";

const isProduction = process.env.NODE_ENV === "production";

const plugins = [
  typescript({ useTsconfigDeclarationDir: false }),
  commonjs(),
  resolve()
];

if (isProduction) {
  plugins.push(uglify());
}

const banner = `/** loldash v${
  pkg.version
} - serious javascripts - written by Brian Holt - Apache 2.0 License */`;

export default {
  input: `src/index.ts`,
  output: [
    {
      file: `./dist/loldash${isProduction ? ".min" : ""}.umd.js`,
      name: libraryName,
      format: "umd",
      sourcemap: !isProduction,
      banner
    },
    {
      file: `./dist/loldash${isProduction ? ".min" : ""}.esm.js`,
      format: "es",
      sourcemap: !isProduction,
      banner
    }
  ],
  external: [],
  watch: {
    include: "src/**"
  },
  plugins
};
