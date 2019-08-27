import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import  { UserModel }  from '../database/models/index';

// creamos una funcion para Date que nos regresa un nuevo date con N numero de dias agregados.
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

// creamos una funcion que recibe la data del usuario y genera un token nuevo con fecha de expiracion
// paso 1 - crea una fecha de expiracion
// paso 2 - crea un payload para el token con base a la informacion del usuario
// paso 3 - regresa un token firmado por nuesto servidor con base en una clave secreta
const createToken = (user) => {
  const exp = new Date().addDays(3).getTime();
  const payload = {
    _id: user._id,
    email: user.email,
    name: user.name,
    exp,
  };
  const token = jwt.sign(payload, process.env.SECRET);
  return { token }
}

// userActions GRAPHQL
export const createUser = async (user) => {
   try {
     const newUser = await UserModel.create(user);
     const token = createToken(newUser);
     return token;
   } catch(err) {
     return null;
   }
};

export const getUsers = async () => {
    try {
        return await UserModel.find();
    } catch (err) {
        console.log(err)
    }
};

export const updateUser = async (filter, update) => {
  // ver el { new: true }
  try {
    const modified = UserModel.findOneAndUpdate(filter, update, { new: true });
    return await modified;
  } catch (err) {
      return err;
  }

}

// Login User with JWT y bcrypt

// loginAction - funcion que loguea al usuario, si sus credenciales son correctas te envia un login de autenticacion.
// Paso 1 - creamos una promesa.
// Paso 2 - buscamos en la base de datos un usario con un email en especifico
// Paso 3 - si existe el usuario comparamos el password ingresado con el password en la base de datos(encriptada)
// Paso 4 - si es valida la comparacion regresa un token con un mensaje
// Paso 5 - si alguna validacion falla o hay algun error regresa un error

 export const doLoginAction = async (email, password) => {
   try {

     const user = await UserModel.findOne({ email: email })
     if (user) {
       const passwordb = await bcrypt.compare(password, user.password);
       if (passwordb) {
         let token = createToken(user);
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
