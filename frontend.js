module.exports = {
    extends: [
        'airbnb',
        'plugin:react/recommended',
        './common'
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["simple-import-sort"],
    rules: {
        'no-tabs': 'warn',
        'no-param-reassign': 'warn',
        "arca/no-default-export": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        '@typescript-eslint/ban-ts-comment' : 'off',
        'camelcase': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/ban-ts-ignore': 'off',
        'jsx-a11y/anchor-is-valid' : 'off',
        'jsx-a11y/click-events-have-key-events':   'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/destructuring-assignment':          'off',
        'react/state-in-constructor':              'off',
        'react/jsx-props-no-spreading':            'off',
        'react/static-property-placement':         'off',
        'react/display-name':                      'off',
        'react/prop-types':                        'off',
        'react/sort-comp':                         'off',
        'react/no-array-index-key':                'off',
        'react/jsx-indent':                        ['error', 4],
        'react/jsx-indent-props':                  ['error', 4],
        'react/jsx-filename-extension':            ['error', {
            'extensions': [
                '.tsx'
            ]
        }],
        'react/jsx-curly-spacing':                 ['error', {
            'when':     'always',
            'children': true
        }],
        'react/require-default-props': 'off'
    },

    overrides: [
        {
            'files': '*.story.tsx',
            'rules': {
                'arca/no-default-export': 'off'
            }
        }
    ]
};
