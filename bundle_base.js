'use strict';

// 引入bootstrap
window.moment = require('moment');
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

require('./src/asset/truelayer.css');
require('./src/asset/main.css');
require('./src/asset/mobile.css');
require('./src/asset/syntax.css');

// 依照順序引入css檔
import './src/scss/style.scss';
// 引入js檔
require('./src/asset/custom.js');
require('./src/js/base.js');

var $base = require('./src/js/base.js');
window.$base = new $base();