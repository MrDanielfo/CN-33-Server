"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doLoginAction = exports.updateUser = exports.getUsers = exports.createUser = void 0;

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
}; // creamos una funcion que recibe la data del usuario y genera un token nuevo con fecha de expiracion
// paso 1 - crea una fecha de expiracion
// paso 2 - crea un payload para el token con base a la informacion del usuario
// paso 3 - regresa un token firmado por nuesto servidor con base en una clave secreta


var createToken = function createToken(user) {
  var exp = new Date().addDays(3).getTime();
  var payload = {
    _id: user._id,
    email: user.email,
    name: user.name,
    exp: exp
  };

  var token = _jsonwebtoken["default"].sign(payload, process.env.SECRET);

  return {
    token: token
  };
}; // userActions GRAPHQL


var createUser =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(user) {
    var newUser, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index.UserModel.create(user);

          case 3:
            newUser = _context.sent;
            token = createToken(newUser);
            return _context.abrupt("return", token);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", null);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function createUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers =
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
            return _index.UserModel.find();

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function getUsers() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var updateUser =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(filter, update) {
    var modified;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            modified = _index.UserModel.findOneAndUpdate(filter, update, {
              "new": true
            });
            _context3.next = 4;
            return modified;

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function updateUser(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}(); // Login User with JWT y bcrypt
// loginAction - funcion que loguea al usuario, si sus credenciales son correctas te envia un login de autenticacion.
// Paso 1 - creamos una promesa.
// Paso 2 - buscamos en la base de datos un usario con un email en especifico
// Paso 3 - si existe el usuario comparamos el password ingresado con el password en la base de datos(encriptada)
// Paso 4 - si es valida la comparacion regresa un token con un mensaje
// Paso 5 - si alguna validacion falla o hay algun error regresa un error


exports.updateUser = updateUser;

var doLoginAction =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(email, password) {
    var user, passwordb, token, _token;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index.UserModel.findOne({
              email: email
            });

          case 3:
            user = _context4.sent;

            if (!user) {
              _context4.next = 15;
              break;
            }

            _context4.next = 7;
            return _bcrypt["default"].compare(password, user.password);

          case 7:
            passwordb = _context4.sent;

            if (!passwordb) {
              _context4.next = 13;
              break;
            }

            token = createToken(user);
            return _context4.abrupt("return", token);

          case 13:
            _token = null;
            return _context4.abrupt("return", _token);

          case 15:
            _context4.next = 20;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 17]]);
  }));

  return function doLoginAction(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.doLoginAction = doLoginAction;
//# sourceMappingURL=userActions.js.map