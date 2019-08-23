import  { UserModel }  from '../database/models/index';

export const createUser = async (user) => {
   try {
     return await UserModel.create(user);
     
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