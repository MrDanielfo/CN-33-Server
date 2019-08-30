"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _userActions = require("../actions/userActions");

var _deliverierActions = require("../actions/deliverierActions");

var _restaurantActions = require("../actions/restaurantActions");

var _rCategoriesActions = require("../actions/rCategoriesActions");

var _mCategoriesActions = require("../actions/mCategoriesActions");

var _menuActions = require("../actions/menuActions");

var _uploader = require("../utils/uploader");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var pubsub = new _apolloServer.PubSub();
var RESTAURANTS = 'RESTAURANTS';
var _books = [{
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J.K. Rowling'
}, {
  title: 'Jurassic Park',
  author: 'Michael Crichton'
}];
var resolvers = {
  Subscription: {
    restaurants: {
      subscribe: function subscribe(parent, args, context, info) {
        return pubsub.asyncIterator([RESTAURANTS]);
      }
    }
  },
  Query: {
    books: function books() {
      return _books;
    },
    getUsers: function () {
      var _getUsers2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parent, args, context, info) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _userActions.getUsers)();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getUsers(_x, _x2, _x3, _x4) {
        return _getUsers2.apply(this, arguments);
      }

      return getUsers;
    }(),
    getDeliveriers: function () {
      var _getDeliveriers2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _deliverierActions.getDeliveriers)();

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

      function getDeliveriers() {
        return _getDeliveriers2.apply(this, arguments);
      }

      return getDeliveriers;
    }(),
    getRestaurants: function () {
      var _getRestaurants2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(parent, args, context, info) {
        var restaurants;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return (0, _restaurantActions.getRestaurants)();

              case 3:
                restaurants = _context3.sent;
                pubsub.publish(RESTAURANTS, {
                  restaurants: restaurants
                });
                return _context3.abrupt("return", restaurants);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      function getRestaurants(_x5, _x6, _x7, _x8) {
        return _getRestaurants2.apply(this, arguments);
      }

      return getRestaurants;
    }(),
    getRestaurantCategories: function () {
      var _getRestaurantCategories2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(parent, args, context, info) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return (0, _rCategoriesActions.getRestaurantCategories)();

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", _context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function getRestaurantCategories(_x9, _x10, _x11, _x12) {
        return _getRestaurantCategories2.apply(this, arguments);
      }

      return getRestaurantCategories;
    }(),
    getMenus: function () {
      var _getMenus2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parent, args, context, info) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return (0, _menuActions.getMenus)();

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", _context5.t0);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }));

      function getMenus(_x13, _x14, _x15, _x16) {
        return _getMenus2.apply(this, arguments);
      }

      return getMenus;
    }(),
    getMenuCategories: function () {
      var _getMenuCategories2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(parent, args, context, info) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return (0, _mCategoriesActions.getMenuCategories)();

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                return _context6.abrupt("return", _context6.t0);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }));

      function getMenuCategories(_x17, _x18, _x19, _x20) {
        return _getMenuCategories2.apply(this, arguments);
      }

      return getMenuCategories;
    }()
  },
  Mutation: {
    addUser: function () {
      var _addUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(parent, args, context, info) {
        var newUser;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return (0, _userActions.createUser)(args.data);

              case 3:
                newUser = _context7.sent;
                return _context7.abrupt("return", newUser);

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                return _context7.abrupt("return", _context7.t0);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }));

      function addUser(_x21, _x22, _x23, _x24) {
        return _addUser.apply(this, arguments);
      }

      return addUser;
    }(),
    addDeliverier: function () {
      var _addDeliverier = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(parent, args, context, info) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return (0, _deliverierActions.createDeliverier)(args.data);

              case 3:
                return _context8.abrupt("return", _context8.sent);

              case 6:
                _context8.prev = 6;
                _context8.t0 = _context8["catch"](0);
                return _context8.abrupt("return", _context8.t0);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 6]]);
      }));

      function addDeliverier(_x25, _x26, _x27, _x28) {
        return _addDeliverier.apply(this, arguments);
      }

      return addDeliverier;
    }(),
    doLogin: function () {
      var _doLogin = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(parent, _ref, context, info) {
        var email, password, login;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                email = _ref.email, password = _ref.password;
                _context9.prev = 1;
                _context9.next = 4;
                return (0, _userActions.doLoginAction)(email, password);

              case 4:
                login = _context9.sent;
                return _context9.abrupt("return", login);

              case 8:
                _context9.prev = 8;
                _context9.t0 = _context9["catch"](1);
                return _context9.abrupt("return", error);

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[1, 8]]);
      }));

      function doLogin(_x29, _x30, _x31, _x32) {
        return _doLogin.apply(this, arguments);
      }

      return doLogin;
    }(),
    doLoginDeliveriers: function () {
      var _doLoginDeliveriers2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(parent, _ref2, context, info) {
        var email, password;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                email = _ref2.email, password = _ref2.password;
                _context10.prev = 1;
                _context10.next = 4;
                return (0, _deliverierActions.doLoginDeliveriers)(email, password);

              case 4:
                return _context10.abrupt("return", _context10.sent);

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](1);
                return _context10.abrupt("return", error);

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[1, 7]]);
      }));

      function doLoginDeliveriers(_x33, _x34, _x35, _x36) {
        return _doLoginDeliveriers2.apply(this, arguments);
      }

      return doLoginDeliveriers;
    }(),
    updateUser: function () {
      var _updateUser2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(parent, _ref3, context, info) {
        var data, userID, filter, update;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                data = _ref3.data, userID = _ref3.userID;
                _context11.prev = 1;
                filter = {
                  _id: userID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context11.next = 6;
                return (0, _userActions.updateUser)(filter, update);

              case 6:
                return _context11.abrupt("return", _context11.sent);

              case 9:
                _context11.prev = 9;
                _context11.t0 = _context11["catch"](1);
                return _context11.abrupt("return", _context11.t0);

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[1, 9]]);
      }));

      function updateUser(_x37, _x38, _x39, _x40) {
        return _updateUser2.apply(this, arguments);
      }

      return updateUser;
    }(),
    addRestaurant: function () {
      var _addRestaurant = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(parent, _ref4, context, info) {
        var data, _ref5, createReadStream, stream, _ref6, url, newRestaurantInfo, newRestaurant;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                data = _ref4.data;
                _context12.prev = 1;
                _context12.next = 4;
                return data.restaurantImage;

              case 4:
                _ref5 = _context12.sent;
                createReadStream = _ref5.createReadStream;
                stream = createReadStream();
                _context12.next = 9;
                return (0, _uploader.storeUpload)(stream);

              case 9:
                _ref6 = _context12.sent;
                url = _ref6.url;
                newRestaurantInfo = _objectSpread({}, data, {
                  restaurantImage: url
                });
                _context12.next = 14;
                return (0, _restaurantActions.createRestaurant)(newRestaurantInfo);

              case 14:
                newRestaurant = _context12.sent;
                return _context12.abrupt("return", newRestaurant);

              case 18:
                _context12.prev = 18;
                _context12.t0 = _context12["catch"](1);
                return _context12.abrupt("return", _context12.t0);

              case 21:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[1, 18]]);
      }));

      function addRestaurant(_x41, _x42, _x43, _x44) {
        return _addRestaurant.apply(this, arguments);
      }

      return addRestaurant;
    }(),
    updateRestaurant: function () {
      var _updateRestaurant2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(parent, _ref7, context, info) {
        var data, restaurantID, filter, update;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                data = _ref7.data, restaurantID = _ref7.restaurantID;
                _context13.prev = 1;
                filter = {
                  _id: restaurantID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context13.next = 6;
                return (0, _restaurantActions.updateRestaurant)(filter, update);

              case 6:
                return _context13.abrupt("return", _context13.sent);

              case 9:
                _context13.prev = 9;
                _context13.t0 = _context13["catch"](1);
                return _context13.abrupt("return", _context13.t0);

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[1, 9]]);
      }));

      function updateRestaurant(_x45, _x46, _x47, _x48) {
        return _updateRestaurant2.apply(this, arguments);
      }

      return updateRestaurant;
    }(),
    addRestaurantCategory: function () {
      var _addRestaurantCategory = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(parent, _ref8, context, info) {
        var data, _ref9, createReadStream, stream, _ref10, url, newRestaurantCategoryInfo, newRCategory;

        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                data = _ref8.data;
                _context14.prev = 1;
                _context14.next = 4;
                return data.restaurantCategoryImage;

              case 4:
                _ref9 = _context14.sent;
                createReadStream = _ref9.createReadStream;
                stream = createReadStream();
                _context14.next = 9;
                return (0, _uploader.storeUpload)(stream);

              case 9:
                _ref10 = _context14.sent;
                url = _ref10.url;
                newRestaurantCategoryInfo = _objectSpread({}, data, {
                  restaurantCategoryImage: url
                });
                _context14.next = 14;
                return (0, _rCategoriesActions.createRestaurantCategory)(newRestaurantCategoryInfo);

              case 14:
                newRCategory = _context14.sent;
                return _context14.abrupt("return", newRCategory);

              case 18:
                _context14.prev = 18;
                _context14.t0 = _context14["catch"](1);
                return _context14.abrupt("return", _context14.t0);

              case 21:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[1, 18]]);
      }));

      function addRestaurantCategory(_x49, _x50, _x51, _x52) {
        return _addRestaurantCategory.apply(this, arguments);
      }

      return addRestaurantCategory;
    }(),
    updateRestaurantCategory: function () {
      var _updateRestaurantCategory2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(parent, _ref11, context, info) {
        var data, rCategoryID, filter, update;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                data = _ref11.data, rCategoryID = _ref11.rCategoryID;
                _context15.prev = 1;
                filter = {
                  _id: rCategoryID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context15.next = 6;
                return (0, _rCategoriesActions.updateRestaurantCategory)(filter, update);

              case 6:
                return _context15.abrupt("return", _context15.sent);

              case 9:
                _context15.prev = 9;
                _context15.t0 = _context15["catch"](1);
                return _context15.abrupt("return", _context15.t0);

              case 12:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, null, [[1, 9]]);
      }));

      function updateRestaurantCategory(_x53, _x54, _x55, _x56) {
        return _updateRestaurantCategory2.apply(this, arguments);
      }

      return updateRestaurantCategory;
    }(),
    addMenu: function () {
      var _addMenu = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(parent, _ref12, context, info) {
        var data, _ref13, createReadStream, stream, _ref14, url, newMenuInfo, newMenu;

        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                data = _ref12.data;
                _context16.prev = 1;
                _context16.next = 4;
                return data.menuImage;

              case 4:
                _ref13 = _context16.sent;
                createReadStream = _ref13.createReadStream;
                stream = createReadStream();
                _context16.next = 9;
                return (0, _uploader.storeUpload)(stream);

              case 9:
                _ref14 = _context16.sent;
                url = _ref14.url;
                newMenuInfo = _objectSpread({}, data, {
                  menuImage: url
                });
                _context16.next = 14;
                return (0, _menuActions.createMenu)(newMenuInfo);

              case 14:
                newMenu = _context16.sent;
                return _context16.abrupt("return", newMenu);

              case 18:
                _context16.prev = 18;
                _context16.t0 = _context16["catch"](1);
                return _context16.abrupt("return", _context16.t0);

              case 21:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[1, 18]]);
      }));

      function addMenu(_x57, _x58, _x59, _x60) {
        return _addMenu.apply(this, arguments);
      }

      return addMenu;
    }(),
    updateMenu: function () {
      var _updateMenu2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(parent, _ref15, context, info) {
        var data, menuID, filter, update;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                data = _ref15.data, menuID = _ref15.menuID;
                _context17.prev = 1;
                filter = {
                  _id: menuID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context17.next = 6;
                return (0, _menuActions.updateMenu)(filter, update);

              case 6:
                return _context17.abrupt("return", _context17.sent);

              case 9:
                _context17.prev = 9;
                _context17.t0 = _context17["catch"](1);
                return _context17.abrupt("return", _context17.t0);

              case 12:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[1, 9]]);
      }));

      function updateMenu(_x61, _x62, _x63, _x64) {
        return _updateMenu2.apply(this, arguments);
      }

      return updateMenu;
    }(),
    addMenuCategory: function () {
      var _addMenuCategory = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(parent, _ref16, context, info) {
        var data, _ref17, createReadStream, stream, _ref18, url, newMenuCategoryInfo, newMCategory;

        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                data = _ref16.data;
                _context18.prev = 1;
                _context18.next = 4;
                return data.menuCategoryImage;

              case 4:
                _ref17 = _context18.sent;
                createReadStream = _ref17.createReadStream;
                stream = createReadStream();
                _context18.next = 9;
                return (0, _uploader.storeUpload)(stream);

              case 9:
                _ref18 = _context18.sent;
                url = _ref18.url;
                newMenuCategoryInfo = _objectSpread({}, data, {
                  menuCategoryImage: url
                });
                _context18.next = 14;
                return (0, _mCategoriesActions.createMenuCategory)(newMenuCategoryInfo);

              case 14:
                newMCategory = _context18.sent;
                return _context18.abrupt("return", newMCategory);

              case 18:
                _context18.prev = 18;
                _context18.t0 = _context18["catch"](1);
                return _context18.abrupt("return", _context18.t0);

              case 21:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, null, [[1, 18]]);
      }));

      function addMenuCategory(_x65, _x66, _x67, _x68) {
        return _addMenuCategory.apply(this, arguments);
      }

      return addMenuCategory;
    }(),
    updateMenuCategory: function () {
      var _updateMenuCategory2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(parent, _ref19, context, info) {
        var data, mCategoryID, filter, update;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                data = _ref19.data, mCategoryID = _ref19.mCategoryID;
                _context19.prev = 1;
                filter = {
                  _id: mCategoryID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context19.next = 6;
                return (0, _mCategoriesActions.updateMenuCategory)(filter, update);

              case 6:
                return _context19.abrupt("return", _context19.sent);

              case 9:
                _context19.prev = 9;
                _context19.t0 = _context19["catch"](1);
                return _context19.abrupt("return", _context19.t0);

              case 12:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, null, [[1, 9]]);
      }));

      function updateMenuCategory(_x69, _x70, _x71, _x72) {
        return _updateMenuCategory2.apply(this, arguments);
      }

      return updateMenuCategory;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;
//# sourceMappingURL=resolvers.js.map