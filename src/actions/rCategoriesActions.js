import { RestaurantCategoryModel } from '../database/models/index';

export const createRestaurantCategory = async rCategory => {
  try {
    return await RestaurantCategoryModel.create(rCategory);
  } catch (err) {
    return null;
  }
};

export const getRestaurantCategories = async () => {
  try {
    return await RestaurantCategoryModel.find().populate('restaurants', ['name', 'address']);
  } catch (err) {
    console.log(err);
  }
};

export const getRestaurantCategorie = async (rCategoryID) => {
  try {
    return await RestaurantCategoryModel.findOne({ _id: rCategoryID })
      .populate('restaurants', [
        'name',
        'address'
      ]);

  } catch (err) {
    return err;
  }
};

export const updateRestaurantCategory = async (filter, update) => {
  try {
    const modified = RestaurantCategoryModel.findOneAndUpdate(filter, update, { new: true });
    return await modified;
  } catch (err) {
    return err;
  }
};
