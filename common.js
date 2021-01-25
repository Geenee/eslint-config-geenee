module.exports = {
    parser: '@typescript-eslint/parser',

    env: {
        browser: true,
        node:    true
    },

    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
    ],

    plugins: [
        '@typescript-eslint',
        'simple-import-sort',
        'arca'
    ],

    parserOptions: {
        ecmaVersion: 2018,
        sourceType:  'module'
    },

    rules: {
        // JavaScript
        'no-underscore-dangle':        'off', // Disable for react (remove after moved to hooks)
        'no-unused-expressions':       'off', // See: https://github.com/facebook/create-react-app/issues/8107
        'consistent-return':           'off',
        'lines-between-class-members': 'off',
        'class-methods-use-this':      'off',
        'no-useless-constructor':      'off',
        'function-paren-newline':      ['error', 'multiline-arguments'],
        'key-spacing':                 ['error', { 'align': 'value' }],
        'array-bracket-spacing':       ['error', 'always'],
        'comma-dangle':                ['error', 'never'],
        'max-len':                     ['error', 150],
        'template-curly-spacing':      ['error', 'always'],
        'object-curly-spacing':        ['error', 'always'],
        'computed-property-spacing':   ['error', 'always'],
        indent:                        ['error', 4, {
            SwitchCase:         1,
            VariableDeclarator: 'first'
        }],
        'no-multi-spaces':             ['error', {
            'exceptions': {
                'Property':             true,
                'VariableDeclarator':   true,
                'ImportDeclaration':    true,
                'AssignmentExpression': true,
                'ClassProperty':        true
            }
        }],
        'object-curly-newline':        ['error', {
            'ObjectExpression':  {
                'multiline':     true,
                'minProperties': 5
            },
            'ObjectPattern':     {
                'multiline':     true,
                'minProperties': 5
            },
            'ImportDeclaration': {
                'multiline':     true,
                'minProperties': 6
            }
        }],

        // TypeScript
        '@typescript-eslint/camelcase':                     'off',
        '@typescript-eslint/ban-ts-ignore':                 'warn',
        '@typescript-eslint/no-unused-vars':                'error',
        '@typescript-eslint/class-name-casing':             'off',
        '@typescript-eslint/explicit-function-return-type': 'off',

        // Imports
        'sort-imports':                      'off',
        'import/order':                      'off',
        'import/no-unresolved':              'off',
        'import/no-cycle':                   'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions':                 'off',
        'import/prefer-default-export':      'off',
        'arca/curly':                        'off',
        'arca/import-ordering':              'off',
        'arca/melted-constructs':            'off',
        'arca/newline-after-import-section': 'off',
        'arca/no-default-export':            'error',
        'arca/import-align':                 ['error', {
            'collapseExtraSpaces': true
        }],
        'simple-import-sort/sort':           ['error', {
            'groups': [
                [
                    '^\\u0000',
                    '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                    '^react',
                    '^@?\\w',
                    '^(~)(/.*|$)',
                    '^\\.\\.(?!/?$)',
                    '^\\.\\./?$',
                    '^\\./(?=.*/)(?!/?$)',
                    '^\\.(?!/?$)',
                    '^\\./?$',
                    '^.+\\.s?css$'
                ]
            ]
        }]
    }
};
