webpackHotUpdate(6,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ethereum_factory_js__ = __webpack_require__("./src/ethereum/factory.js");

var _jsxFileName = "/Users/macdecker/Documents/galvanize/capstone-ideas/Ethereum-password-manager/capstone/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import logo from './logo.svg';
// import './App.css';
// import web3 from './web3'
// import Passwords from './components/Passwords'
// import Encrypt from './components/Encrypt'
// import Decrypt from './components/Decrypt'
// import QrCode from './components/QrCode'
// const bcrypt = require('bcryptjs');
// const AES = require("crypto-js/aes");
// const SHA256 = require("crypto-js/sha256");
// const QRCode = require('qrcode')
// const canvas = document.getElementById('canvas')
// const CryptoJS = require("crypto-js")



var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "componentDidMount",
    // state = {
    //   address: '', //'0x...'
    //   message: 'Click a button to get started',
    //   encryptedPasswords: 'encrypted',
    //   decryptedPasswords: [],
    //   qrCode: '',
    //   passwordList: []
    // }
    //
    // //updates eth address and adds qr code
    // onSubmit = async (event) => {
    //   event.preventDefault()
    //   const accounts = await web3.eth.getAccounts();
    //   const chain = web3.eth.net.getId()
    //   .then(console.log);
    //   if (!accounts[0]) {
    //     this.setState({message: 'Please open metamask'})
    //   } else {
    //     this.setState({message: `Your ethereum address is ${accounts[0]}`})
    //   }
    //   QRCode.toCanvas(document.getElementById('canvas'), accounts[0], function (error, url) {
    //     console.log(url);
    //   })
    // }
    //
    // encrypt = async (event) => {
    //   event.preventDefault()
    //   //get elements from form
    //   const name = document.getElementById('name').value
    //   const password = document.getElementById('password').value
    //   const superSecretKey = document.getElementById('privateKey').value
    //
    //   //create data from elements
    //   const data = JSON.stringify(this.state.passwordList)
    //   const data2 = this.state.passwordList.toString()
    //
    //   console.log(data+`+`+data2);
    //   //create strigified encrypted passwords
    //   let ciphertext = CryptoJS.AES.encrypt(data, superSecretKey).toString();
    //   console.log(ciphertext);
    //   this.setState({encryptedPasswords: ciphertext})
    // }
    //
    // decrypt = async (e) => {
    //   e.preventDefault()
    //
    //   const superSecretKey = document.getElementById('superSecretInput').value
    //   let ciphertext = document.getElementById('decrypt').value
    //   console.log(ciphertext);
    //   console.log(superSecretKey);
    //   let bytes = CryptoJS.AES.decrypt(ciphertext, superSecretKey);
    //   console.log(bytes);
    //   let decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    //   console.log(decryptedData);
    //
    //   this.setState({decryptedPasswords: decryptedData})
    // }
    //
    // addPassword = async(e) => {
    //   e.preventDefault()
    //
    //   const name = document.getElementById('name').value
    //   const password = document.getElementById('password').value
    //
    //   let passwordList = this.state.passwordList;
    //   passwordList.push({
    //     name: name,
    //     password: password
    //   })
    //   console.log(passwordList);
    //   this.setState({passwordList: passwordList})
    // }
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var passwordBlocks;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__src_ethereum_factory_js__["a" /* default */].methods.getDeployedPasswordBlocks;

              case 2:
                passwordBlocks = _context.sent;
                console.log(passwordBlocks);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "HULLO URF");
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.b9735ddcda07c3496529.hot-update.js.map