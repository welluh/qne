var path = require('path');

// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: root('/src')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  }
}

var commonConfig = {
  resolve: {
    extensions: ['.ts', '.json']
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['ts-loader'] },
      // JSON files
      { test: /\.json$/, loader: 'raw-loader' }
    ],
  },
  plugins: [
  ]
};

var coreConfig = {
  target: 'node',
  entry: './src/index',
  output: {
    path: root('dist'),
    libraryTarget: 'commonjs2'
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};

var webpackMerge = require('webpack-merge');
module.exports = [
  // Server
  webpackMerge({}, defaultConfig, commonConfig, coreConfig)
]

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
