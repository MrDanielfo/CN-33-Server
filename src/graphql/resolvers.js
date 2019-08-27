 import {  createUser, getUsers, updateUser, doLoginAction } from '../actions/userActions';

 import { createRestaurant, getRestaurants, updateRestaurant } from '../actions/restaurantActions';

 import { createRestaurantCategory, getRestaurantCategories, updateRestaurantCategory } from '../actions/rCategoriesActions';

 import {
   createMenuCategory,
   getMenuCategories,
   updateMenuCategory
 } from '../actions/mCategoriesActions';

 import { createMenu, getMenus, updateMenu } from '../actions/menuActions';

 import { storeUpload } from '../utils/uploader';

 
 const books = [
   {
     title: 'Harry Potter and the Chamber of Secrets',
     author: 'J.K. Rowling'
   },
   {
     title: 'Jurassic Park',
     author: 'Michael Crichton'
   }
 ];

 const resolvers = {
   Query: {
     books: () => books,
     getUsers: async (parent, args, context, info) => {
       try {
         return await getUsers();
       } catch (err) {
         return err;
       }
     },
     getRestaurants: async (parent, args, context, info) => {
       try {
         return await getRestaurants();
       } catch (err) {
         return err;
       }
     },
     getRestaurantCategories: async (parent, args, context, info) => {
       try {
         return await getRestaurantCategories();
       } catch (err) {
         return err;
       }
     },
     getMenus: async (parent, args, context, info) => {
       try {
         return await getMenus();
       } catch (err) {
         return err;
       }
     },
     getMenuCategories: async (parent, args, context, info) => {
       try {
         return await getMenuCategories();
       } catch (err) {
         return err;
       }
     }
   },
   Mutation: {
     addUser: async (parent, args, context, info) => {
       try {
         return await createUser(args.data);
       } catch (err) {
         return err;
       }
       
     },
    doLogin: async (parent, { email, password }, context, info) => {
        try {
          return await doLoginAction(email, password);
        } catch (err) {
          return error; 
      }
    },
     updateUser: async (parent, { data, userID }, context, info) => {
       try {
         const filter = { _id: userID };
         const update = { $set: { ...data } };
         return await updateUser(filter, update);
       } catch (err) {
         return err;
       }
     },
     addRestaurant: async (parent, args, context, info) => {
       try {
         const newRestaurant = await createRestaurant(args.data);
         return newRestaurant;
       } catch (err) {
         return err;
       }
     },
     updateRestaurant: async (parent, { data, restaurantID }, context, info ) => {
       try {
         const filter = { _id: restaurantID };
         const update = { $set: { ...data } };
         return await updateRestaurant(filter, update);
       } catch (err) {
         return err;
       }
     },
     addRestaurantCategory: async (parent, args, context, info) => {
       try {
         const newRCategory = await createRestaurantCategory(args.data);
         return newRCategory;
       } catch (err) {
         return err;
       }
     },
     updateRestaurantCategory: async (
       parent,
       { data, rCategoryID },
       context,
       info
     ) => {
       try {
         const filter = { _id: rCategoryID };
         const update = { $set: { ...data } };
         return await updateRestaurantCategory(filter, update);
       } catch (err) {
         return err;
       }
     },
     addMenu: async (parent, { data }, context, info) => {
       try {
         const { createReadStream } = await data.menuImage;
         const stream = createReadStream();
         const { url } = await storeUpload(stream);
         const newMenuInfo = {
           ...data,
           menuImage: url
         }

         const newMenu = await createMenu(newMenuInfo);
         return newMenu;
       } catch (err) {
         return err;
       }
     },
     updateMenu: async (parent, { data, menuID }, context, info ) => {
       try {
         const filter = { _id: menuID };
         const update = { $set: { ...data } };
         return await updateMenu(filter, update);
       } catch (err) {
         return err;
       }
     },
     addMenuCategory: async (parent, args, context, info) => {
       try {
         const newMCategory = await createMenuCategory(args.data);
         return newMCategory;
       } catch (err) {
         return err;
       }
     },
     updateMenuCategory: async (
       parent,
       { data, mCategoryID },
       context,
       info
     ) => {
       try {
         const filter = { _id: mCategoryID };
         const update = { $set: { ...data } };
         return await updateMenuCategory(filter, update);
       } catch (err) {
         return err;
       }
     }
   }
 };

 export default resolvers;
