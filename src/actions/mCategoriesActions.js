import { MenuCategoryModel } from '../database/models/index';

export const createMenuCategory = async mCategory => {
  try {
    return await MenuCategoryModel.create(mCategory);
  } catch (err) {
    return null;
  }
};

export const getMenuCategories = async () => {
  try {
    return await MenuCategoryModel.find().populate('menus', [
      'name',
      'description',
      'menuImage',
      'price'
    ]);
  } catch (err) {
    console.log(err);
  }
};

export const getMenuCategory = async (mCategoryID) => {
  try {
    return await MenuCategoryModel.findOne({_id: mCategoryID }).populate('menus', [
      'name',
      'description',
      'menuImage',
      'price',
      'restaurantID'
    ]);
  } catch (err) {
    console.log(err);
  }
};

export const updateMenuCategory = async (filter, update) => {
  try {
    const modified = MenuCategoryModel.findOneAndUpdate(filter, update, {new: true});
    return await modified;
  } catch (err) {
    return err;
  }
};
