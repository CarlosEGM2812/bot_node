module.exports = {
    build: {
      environment: {
        NODE_VERSION: '18',
      },
      command: 'npm start',
      install: true, // Install packages during the build
      files: ['package.json', 'index.js', 'package-lock.json', '.env'],
    },
    run: {
      entry: './index.js',
    },
  };
