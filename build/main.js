require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Router config
  */
  router: {
    // mode: 'hash'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo',
    meta: [{ charset: 'utf-8' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: '/common/common.css' }, { rel: 'stylesheet', href: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  vender: ['axios']
  // babel: {
  //   'plugins': [['component', [
  //     {
  //       'libraryName': 'element-ui',
  //       'styleLibraryName': 'theme-default'
  //     },
  //     'transform-async-to-generator'
  //   ]]],
  //   comments: true
  // },
  // plugins: [
  //   { src: '~plugins/element-ui', ssr: true }
  // ]
  // css: [
  //   'element-ui/lib/theme-default/index.css'
  // ]

};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testData__ = __webpack_require__(5);




var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add USERS Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__testData__["a" /* default */]);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
// index router
//老师信息
router.get('/teacherList', function (req, res, next) {
  var obj = {
    'teacherList': [{
      'teacherName': '傻明',
      'head': '/images/head.jpg',
      'grade': 1, // 1 是小学  2是初中   3是高中  4 是大学    5是研究生导师
      'subject': '数学',
      'Seniority': 9,
      'honor': [{ 'tip': '优秀青年教师，山东省‘优秀辅导教师’，省市教育能手，市学科带头人，市骨干教师。' }, { 'tip': '省市教育能手，市学科带头人，优秀青年教师，山东省‘优秀辅导教师’，市骨干教师。' }, { 'tip': '市学科带头人，相信各位在工作或者业余自己玩技术的时候，市骨干教师,优秀青年教师，山东省‘优秀辅导教师’，省市教育能手。' }]
    }, {
      'teacherName': '麻辣香锅',
      'head': '/images/head.jpg',
      'grade': 4, // 1 是小学  2是初中   3是高中  4 是大学    5是研究生导师
      'subject': '物理',
      'Seniority': 5,
      'honor': [{ 'tip': '省市教育能手，市学科带头人，优秀青年教师，山东省‘优秀辅导教师’，市骨干教师。' }, { 'tip': '市学科带头人，相信各位在工作或者业余自己玩技术的时候，市骨干教师,优秀青年教师，山东省‘优秀辅导教师’，省市教育能手。' }, { 'tip': '优秀青年教师，山东省‘优秀辅导教师’，省市教育能手，市学科带头人，市骨干教师。' }]
    }, {
      'teacherName': '尼古拉斯',
      'head': '/images/head.jpg',
      'grade': 2, // 1 是小学  2是初中   3是高中  4 是大学    5是研究生导师
      'subject': '英语',
      'Seniority': 7,
      'honor': [{ 'tip': '省市教育能手，相信各位在工作或者业余自己玩技术的时候，市学科带头人，优秀青年教师，山东省‘优秀辅导教师’，市骨干教师。' }, { 'tip': '优秀青年教师，山东省‘优秀辅导教师’，省市教育能手，市学科带头人，市骨干教师。' }, { 'tip': '市学科带头人，市骨干教师,优秀青年教师，山东省‘优秀辅导教师’，省市教育能手。' }]
    }, {
      'teacherName': '撒大手动',
      'head': '/images/head.jpg',
      'grade': 4, // 1 是小学  2是初中   3是高中  4 是大学    5是研究生导师
      'subject': '生物',
      'Seniority': 4,
      'honor': [{ 'tip': '省市教育能手，市学科带头人，优秀青年教师，山东省‘优秀辅导教师’，市骨干教师。' }, { 'tip': '相信各位在工作或者业余自己玩技术的时候，或多或少会去网上找轮子来实现某个需求，那么，一些拥有高度开源精神的技术爱好者和团队就渐渐出现在了技术圈。' }, { 'tip': '市学科带头人，市骨干教师相信各位在工作或者业余自己玩技术的时候,优秀青年教师，山东省‘优秀辅导教师’，省市教育能手。' }]
    }, {
      'teacherName': '明年冲动',
      'head': '/images/head.jpg',
      'grade': 1, // 1 是小学  2是初中   3是高中  4 是大学    5是研究生导师
      'subject': '生物',
      'Seniority': 2,
      'honor': [{ 'tip': '省市教育能手，市学科带头人，优秀青年教师，山东省‘优秀辅导教师’，市骨干教师。会去网上找轮子来实现某个。' }, { 'tip': '相信各位在工作或者业余自己玩技术的时候，或多或少会去网上找轮子来实现某个需求，那么，一些拥有高度开源精神的技术爱好者和团队就渐渐出现在了技术圈。' }, { 'tip': '市学科带头人，市骨干教师相信各位在工作或者业余自己玩技术的时候,优秀青年教师，山东省‘优秀辅导教师’，省市教育能手。' }]
    }]
  };
  res.json(obj);
});
// 消息列表
router.get('/messageList', function (reqq, res, next) {
  var obj = [{
    'type': 'system',
    'head': '/images/head.jpg',
    'time': '2017-09-22 10:30:00',
    'title': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！',
    'tip': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！以‘白日梦’为主题展开联想。'
  }, {
    'type': 'system',
    'head': '/images/head.jpg',
    'time': '2017-09-22 10:30:00',
    'title': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！',
    'tip': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！以‘白日梦’为主题展开联想。'
  }, {
    'type': 'self',
    'head': '/images/head.jpg',
    'time': '2017-09-22 10:30:00',
    'title': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！',
    'tip': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！以‘白日梦’为主题展开联想。'
  }, {
    'type': 'system',
    'head': '/images/head.jpg',
    'time': '2017-09-22 10:30:00',
    'title': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！',
    'tip': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！以‘白日梦’为主题展开联想。'
  }, {
    'type': 'self',
    'head': '/images/head.jpg',
    'time': '2017-09-22 10:30:00',
    'title': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！',
    'tip': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！以‘白日梦’为主题展开联想。'
  }, {
    'type': 'system',
    'head': '/images/head.jpg',
    'time': '2017-09-22 10:30:00',
    'title': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！',
    'tip': '以‘白日梦’为主题展开联想，10万元基金共你风向基金共你风向！以‘白日梦’为主题展开联想。'
  }];

  res.json(obj);
});

/* harmony default export */ exports["a"] = router;

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jinhaidi_Documents_nuxt_demo_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jinhaidi_Documents_nuxt_demo_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jinhaidi_Documents_nuxt_demo_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(2);


// Start nuxt.js
var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jinhaidi_Documents_nuxt_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var config, nuxt;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jinhaidi_Documents_nuxt_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Import and Set Nuxt.js options
            config = __webpack_require__(1);

            config.dev = !("development" === 'production');
            // Instanciate nuxt.js
            _context.next = 4;
            return new __WEBPACK_IMPORTED_MODULE_1_nuxt___default.a(config);

          case 4:
            nuxt = _context.sent;

            // Add nuxt.js middleware
            app.use(nuxt.render);
            // Build in development

            if (!config.dev) {
              _context.next = 16;
              break;
            }

            _context.prev = 7;
            _context.next = 10;
            return nuxt.build();

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](7);

            console.error(_context.t0); // eslint-disable-line no-console
            process.exit(1);

          case 16:
            // Listen the server
            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[7, 12]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */]);

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map