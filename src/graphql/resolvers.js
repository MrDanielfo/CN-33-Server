 import {  createUser, getUsers, updateUser } from '../actions/userActions';
 import { createRestaurantCategory, getRestaurantCategories, updateRestaurantCategory } from '../actions/rCategoriesActions';
 import {
   createMenuCategory,
   getMenuCategories,
   updateMenuCategory
 } from '../actions/mCategoriesActions';
 
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
     getRestaurantCategories: async (parent, args, context, info) => {
       try {
         return await getRestaurantCategories();
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
       await createUser(args.data);
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
     addRestaurantCategory: async (parent, args, context, info) => {
       try {
         const newRCategory = await createRestaurantCategory(args.data);
         return newRCategory;
       } catch (err) {
         return err;
       }
     },
     updateRestaurantCategory: async (parent, { data, rCategoryID }, context, info) => {
       try {
         const filter = { _id: rCategoryID };
         const update = { $set: { ...data } };
         return await updateRestaurantCategory(filter, update);
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
     updateMenuCategory: async (parent, { data, mCategoryID }, context, info) => {
       try {
         const filter = { _id: mCategoryID };
         const update = { $set: { ...data } };
         return await updateMenuCategory(filter, update);
       } catch (err) {
         return err;
       }
     },
   }
 };

 export default resolvers;
