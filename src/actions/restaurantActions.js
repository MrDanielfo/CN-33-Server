import { RestaurantModel } from '../database/models/index';

export const createRestaurant = async (menu) => {
    try {
        const RestaurantCreated = await RestaurantModel.create(menu);
        return RestaurantCreated;

    } catch (err) {
        return null;
    }
};

export const getRestaurants = async () => {
    try {
        return await RestaurantModel.find();
    } catch (err) {
        console.log(err)
    }
};

export const updateRestaurant = async (filter, update) => {
    try {
        const modified = RestaurantModel.findOneAndUpdate(filter, update, { new: true });
        return await modified;
    } catch (err) {
        return err;
    }

}