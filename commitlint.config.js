module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['feat', 'bug', 'chore', 'docs', 'style', 'refactor', 'test', 'perf']
      ]
    }
  };
  