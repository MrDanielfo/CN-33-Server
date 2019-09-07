import { RestaurantModel } from '../database/models/index';
import { updateRestaurantCategory  } from './rCategoriesActions';

export const createRestaurant = async (restaurant) => {
    try {
        const RestaurantCreated = await RestaurantModel.create(restaurant);
        const filter =  { _id : restaurant.restaurantCategoryID };
        const update = { $push: { 'restaurants': RestaurantCreated._id } }
        await updateRestaurantCategory(filter, update);
        return RestaurantCreated;

    } catch (err) {
        return null;
    }
};

export const getRestaurants = async () => {
    try {
        return await RestaurantModel.find()
          .populate('menus', ['name', 'description', 'menuImage', 'price'])
          .populate('restaurantCategoryID', ['name', 'restaurantCategoryImage']);
    } catch (err) {
        console.log(err)
    }
};

export const getRestaurant = async (restaurantID) => {
    try {
        return await RestaurantModel.findOne({ _id: restaurantID })
          .populate('menus', ['name', 'description', 'menuImage', 'price'])
          .populate('restaurantCategoryID', [
            'name',
            'restaurantCategoryImage'
          ]);

    } catch (err) {
        console.log(err);
    }
}

export const updateRestaurant = async (filter, update) => {
    try {
        const modified = RestaurantModel.findOneAndUpdate(filter, update, { new: true });
        return await modified;
    } catch (err) {
        return err;
    }

}