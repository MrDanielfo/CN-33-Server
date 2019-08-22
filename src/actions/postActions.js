import  { UserModel }  from '../database/models/index';

export const createUser = async (user) => {
   try {
     return await UserModel.create(user);
     
   } catch(err) {
     console.log(err)
   }
}