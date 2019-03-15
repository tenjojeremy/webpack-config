// Manifest
const { manifest: webpackManifest } = require(`${process.cwd()}/.webpack.manifest.js`)
// Entry
const getEntry = require('../options/entry/entry.index')
const entry = getEntry(webpackManifest)
// Output
const getOutput = require('../options/output/output.index')
const output = getOutput(webpackManifest)
// Devtool
const getDevtool = require('../options/devtool/devtool.index')
const devtool = getDevtool(webpackManifest)
// DevServer
const getDevServer = require('../options/devServer/devServer.index')
const devServer = getDevServer(webpackManifest)
// Performance
const getPerformance = require('../options/performance/performance.index')
const performance = getPerformance(webpackManifest)
// Optimization
const getOptimization = require('../options/optimization/optimization.index')
const optimization = getOptimization(webpackManifest)
// Module
const modules = require('../options/module/module.index')
// Plugins
const getPlugins = require('../options/plugins/plugins.index')
const plugins = getPlugins(webpackManifest)

// Export
module.exports = {
  entry,
  output,
  devtool,
  devServer,
  performance,
  optimization,
  module: modules,
  plugins,
}
