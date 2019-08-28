"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doLoginDeliveriers = exports.getDeliveriers = exports.createDeliverier = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _index = require("../database/models/index");

// creamos una funcion para Date que nos regresa un nuevo date con N numero de dias agregados.
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

var createToken = function createToken(deliverier) {
  var exp = new Date().addDays(3).getTime();
  var payload = {
    _id: deliverier._id,
    email: deliverier.email,
    name: deliverier.name,
    exp: exp
  };

  var token = _jsonwebtoken["default"].sign(payload, process.env.SECRET);

  return {
    token: token
  };
};
/* Las fechas se introducirán en formato string en GRAPHQL pero siguiendo la nomenclatura de Date */


var createDeliverier =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(deliverier) {
    var newDeliverier, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index.DeliverierModel.create(deliverier);

          case 3:
            newDeliverier = _context.sent;
            token = createToken(newDeliverier);
            return _context.abrupt("return", token);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function createDeliverier(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createDeliverier = createDeliverier;

var getDeliveriers =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index.DeliverierModel.find();

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function getDeliveriers() {
    return _ref2.apply(this, arguments);
  };
}(); // Login para Deliveriers


exports.getDeliveriers = getDeliveriers;

var doLoginDeliveriers =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(email, password) {
    var deliverier, passwordb, token, _token;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index.DeliverierModel.findOne({
              email: email
            });

          case 3:
            deliverier = _context3.sent;

            if (!deliverier) {
              _context3.next = 15;
              break;
            }

            _context3.next = 7;
            return _bcrypt["default"].compare(password, deliverier.password);

          case 7:
            passwordb = _context3.sent;

            if (!passwordb) {
              _context3.next = 13;
              break;
            }

            token = createToken(deliverier);
            return _context3.abrupt("return", token);

          case 13:
            _token = null;
            return _context3.abrupt("return", _token);

          case 15:
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 17]]);
  }));

  return function doLoginDeliveriers(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.doLoginDeliveriers = doLoginDeliveriers;
//# sourceMappingURL=deliverierActions.js.map