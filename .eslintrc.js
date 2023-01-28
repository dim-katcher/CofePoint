module.exports = {
    'env': {
        es6: true,
        node: true,
        jest: true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        project: './tsconfig.json',
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint'
    ],
    'rules': {
        "max-len": ["error", { "code": 120 }],
        "react/jsx-one-expression-per-line": [1, { "allow": "literal" }],
        'indent': [
            'error',
            2,
            { SwitchCase: 1 }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single',
            { avoidEscape: true }
        ],
        'semi': [
            'error',
            'always'
        ],
        'prettier/prettier': 'error',
    }
};
