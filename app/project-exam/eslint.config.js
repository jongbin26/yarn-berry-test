import custom from "@monorepo/eslint-config-custom";

export default [
  {
    ignores: ["**/dist/**"],
  },
  ...custom,
];
