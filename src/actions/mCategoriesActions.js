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
    return await MenuCategoryModel.find();
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
