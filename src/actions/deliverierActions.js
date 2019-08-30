import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { SECRET } from '../config/index';

import { DeliverierModel } from '../database/models/index';

// creamos una funcion para Date que nos regresa un nuevo date con N numero de dias agregados.
Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const createToken = (deliverier) => {
    const exp = new Date().addDays(3).getTime();
    const payload = {
        _id: deliverier._id,
        email: deliverier.email,
        name: deliverier.name,
        exp,
    };
    // const token = jwt.sign(payload, process.env.SECRET);
    const token = jwt.sign(payload, SECRET);
    return { token }
}

/* Las fechas se introducirán en formato string en GRAPHQL pero siguiendo la nomenclatura de Date */

export const createDeliverier = async (deliverier) => {
    try {
        const newDeliverier = await DeliverierModel.create(deliverier);
        const token = createToken(newDeliverier);
        return token;
    } catch (err) {
        return err;
    }
};

export const getDeliveriers = async () => {
    try {
        return await DeliverierModel.find();
    } catch (err) {
        return err;
    }
};

// Login para Deliveriers

export const doLoginDeliveriers = async (email, password) => {
    try {
        const deliverier = await DeliverierModel.findOne({ email: email })
        if (deliverier) {
            const passwordb = await bcrypt.compare(password, deliverier.password);
            if (passwordb) {
                let token = createToken(deliverier);
                return token;
            } else {
                let token = null;
                return token;
            }
        }
    } catch (err) {
        console.log(err)
    }
}