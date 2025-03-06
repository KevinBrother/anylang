export default {
  input: "./esm/a.mjs",
  output: [
    {
      file: "dist/esm/bundle.mjs",
      format: "es",
    },
    {
      file: "dist/esm/bundle.cjs",
      format: "cjs",
    },
  ],
};
