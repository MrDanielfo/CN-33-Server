"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMenu = exports.getMenus = exports.createMenu = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = require("../database/models/index");

var _mCategoriesActions = require("./mCategoriesActions");

var _restaurantActions = require("./restaurantActions");

var createMenu =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(menu) {
    var MenuCreated, filterCategory, filterRestaurant, update;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index.MenuModel.create(menu);

          case 3:
            MenuCreated = _context.sent;
            filterCategory = {
              _id: menu.menuCategoryID
            };
            filterRestaurant = {
              _id: menu.restaurantID
            };
            update = {
              $push: {
                'menus': MenuCreated._id
              }
            };
            _context.next = 9;
            return (0, _mCategoriesActions.updateMenuCategory)(filterCategory, update);

          case 9:
            _context.next = 11;
            return (0, _restaurantActions.updateRestaurant)(filterRestaurant, update);

          case 11:
            return _context.abrupt("return", MenuCreated);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", null);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function createMenu(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createMenu = createMenu;

var getMenus =
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
            return _index.MenuModel.find().populate('menuCategoryID', ['name', 'menuCategoryImage']).populate('restaurantID', ['name', 'address', 'restaurantImage']);

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

  return function getMenus() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMenus = getMenus;

var updateMenu =
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
            modified = _index.MenuModel.findOneAndUpdate(filter, update, {
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

  return function updateMenu(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateMenu = updateMenu;
//# sourceMappingURL=menuActions.js.map