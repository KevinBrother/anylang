import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "./cjs/a.cjs",
  output: [
    {
      file: "dist/cjs/bundle.mjs",
      format: "es",
    },
    {
      file: "dist/cjs/bundle.cjs",
      format: "cjs",
    },
  ],
  plugins: [resolve(), commonjs()],
};
