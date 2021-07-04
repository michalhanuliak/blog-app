module.exports = {

    extends: ['airbnb-typescript'],
    overrides: [{
        files: ['*.ts', '*.tsx'],
        parserOptions: {
            project: ['./tsconfig.json'],
        },
    }],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        files: ['*.ts', '.tsx'],
        project: "./tsconfig.eslint.json",
    },
    ignorePatterns: ['.eslintrc.js', 'tailwind.config.js'],
    rules: {
        "linebreak-style": ["error", "windows"],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "react/jsx-props-no-spreading": ["error", { "custom": "ignore" }],
        "class-methods-use-this": 0,
        "react/prop-types": 0,
        "no-param-reassign": 0,
        "no-shadow": 0,
        "@typescript-eslint/space-infix-ops": 0,
        "@typescript-eslint/object-curly-spacing": 0,
    }
};