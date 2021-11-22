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

    rules: {
        "@typescript-eslint/ban-ts-ignore": "off",
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
        "@typescript-eslint/ban-ts-comment":       "off",
        'simple-import-sort/sort': 'error',
        "simple-import-sort/imports": ['error', 4],
        "simple-import-sort/exports": ['error', 4],
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
