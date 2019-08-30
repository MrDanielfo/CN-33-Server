// paquetes que necesitamos importar
const JWT = require('jsonwebtoken');
import { findUser  } from '../actions/userActions';
import { SECRET } from '../config/index';

const { SchemaDirectiveVisitor, AuthenticationError } = require('apollo-server-express');

class AuthDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = async function (...args) {
            const ctx = args[2];
            if (ctx.user) {
                return await resolve.apply(this, args);
            } else {
                throw new AuthenticationError("You need to be logged in.");
            }
        };
    }
}

const getContext = (req) => {
    try {
        const token = req.headers.authorization;
        if (typeof token === typeof undefined) return req;
        // return JWT.verify(token, process.env.SECRET, async function (err, result) {
        return JWT.verify(token, SECRET, async function (err, result) {
            if (err) return req;
            try {
                const user = await findUser({ _id: result._id });
                return { ...req, user };
            } catch (error) {
                return req;
            }
        });
    } catch (err) {
        return req;
    }
}

module.exports = {
    getContext,
    AuthDirective,
}