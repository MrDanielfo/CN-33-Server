"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _authActions = require("./actions/authActions");

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));

_mongoose["default"].connect('mongodb+srv://mrdanielfo:corvettez6@clustercintanegra-gzdvg.mongodb.net/cintanegra?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

var connection = _mongoose["default"].connection;
connection.on('error', console.error.bind(console, 'Error de Conexión'));
connection.on('open', function () {
  return console.log('DB Conectada');
});
var server = new _apolloServer.ApolloServer({
  typeDefs: _schema["default"],
  resolvers: _resolvers["default"],
  schemaDirectives: {
    AuthDirective: _authActions.AuthDirective
  },
  context: function () {
    var _context = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(_ref) {
      var req;
      return _regenerator["default"].wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref.req;
              return _context2.abrupt("return", (0, _authActions.getContext)(req));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    function context(_x) {
      return _context.apply(this, arguments);
    }

    return context;
  }()
});
server.listen(process.env.PORT || 8080).then(function () {
  console.log("\uD83D\uDE80  Server ready at 8080");
});
/* TESTING */

var _default = server;
exports["default"] = _default;
//# sourceMappingURL=index.js.map