import { MenuModel } from '../database/models/index';
import { updateMenuCategory } from './mCategoriesActions';
import { updateRestaurant } from './restaurantActions';

export const createMenu = async (menu) => {
    try {
        const MenuCreated = await MenuModel.create(menu);
        const filterCategory = { _id: menu.menuCategoryID };
        const filterRestaurant = { _id: menu.restaurantID }
        const update = { $push: { 'menus': MenuCreated._id } }
        await updateMenuCategory(filterCategory, update);
        await updateRestaurant(filterRestaurant, update);
        return MenuCreated;

    } catch (err) {
        return null;
    }
};

export const getMenus = async () => {
    try {
        return await MenuModel.find();
    } catch (err) {
        console.log(err)
    }
};

export const updateMenu = async (filter, update) => {
    // ver el { new: true }
    try {
        const modified = MenuModel.findOneAndUpdate(filter, update, { new: true });
        return await modified;
    } catch (err) {
        return err;
    }

}