import { install } from './main'

if (!window.$docsify) {
  window.$docsify = {}
}

window.$docsify.plugins = (window.$docsify.plugins || []).concat(install)