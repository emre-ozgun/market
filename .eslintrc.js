module.exports = {
  root: true,
  env: {
      "browser": true,
      "amd": true,
      "node": true
  },
  extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:import/typescript",
      "plugin:jest/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
      sourceType: "module",
      project: [
          "./tsconfig.eslint.json",
          "./packages/*/tsconfig.json"
      ],
      tsconfigRootDir: __dirname
  },
  plugins: [
      "react",
      "react-hooks",
      "jest",
      "@typescript-eslint",
      "import"
  ],
  rules: {
      "camelcase": "error",
      "quotes": [
          "error",
          "double"
      ],
      "import/no-unresolved": [
          0,
          {
              "caseSensitive": false
          }
      ],
      "no-case-declarations": 0,
      "react/no-children-prop": 0,
      // "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/no-unsafe-return": 0,
      "@typescript-eslint/no-unsafe-argument": 0,
      "@typescript-eslint/no-unsafe-call": 0,
      "@typescript-eslint/no-misused-promises": 0,
      "@typescript-eslint/restrict-template-expressions": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unsafe-assignment": 0,
      "@typescript-eslint/no-unsafe-member-access": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-this-alias": [
          "error",
          {
              "allowDestructuring": false,
              "allowedNames": [
                  "self"
              ]
          }
      ],
      "@typescript-eslint/strict-boolean-expressions": [
          0,
          {
              "allowString": false,
              "allowNumber": false
          }
      ],
      "@typescript-eslint/member-ordering": [
          "error",
          {
              "default": [
                  "public-instance-method",
                  "public-static-field"
              ]
          }
      ],
      "no-duplicate-imports": "error"
  },
  ignorePatterns: [
      "src/**/*.test.ts",
      "src/**/*.spec.tsx"
  ]
}