 import {  createUser, getUsers, updateUser } from '../actions/postActions';
 
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
     getUsers: async(parent, args, context, info) => {
         try {
            return await getUsers();
         } catch (err) {
            return null;
         }
     }
   },
   Mutation: {
     addUser: async (parent, args, context, info) => {
        await createUser(args.data);
     },
     updateUser: async(parent, {data, userID }, context, info) => {
       try {
         const filter  = { _id: userID}
         const update = { $set: {...data} }
         return await updateUser(filter, update);
       } catch (err) {
         return err;
       }
     }
       
   }
 };

 export default resolvers;
