module.exports = {
    extends: [
        './common'
    ],

    rules: {
        'no-multi-spaces': 'off' // https://github.com/eslint/eslint/issues/12788
    },

    overrides: [
        {
            'files': '*.dto.ts',
            'rules': {
                'max-classes-per-file': 'off'
            }
        }
    ]
};
