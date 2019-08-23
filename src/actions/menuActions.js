import { MenuModel } from '../database/models/index';

export const createMenu = async (menu) => {
    try {
        const MenuCreated = await MenuModel.create(menu);
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