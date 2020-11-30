module.exports = {
    env: {
        mocha: true,
    },
    globals: {
        'browser': true,
        '_browsers': true,
        '$': true,
        '$$': true,
        '__dirname': true,
        'expect': true,
        'assert': true,
        'sprintf': true,
        '_view': true
    },
    rules: {
        'no-shadow': 'off',
        'consistent-return': 'off',
        'array-callback-return': 'off'
    },
    parser: "babel-eslint"
};