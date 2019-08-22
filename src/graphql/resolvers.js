 import {  createUser } from '../actions/postActions';
 
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
     books: () => books
   },
   Mutation: {
       addUser: async (parent, args, context, info ) => await createUser(args.data)
   }
 };

 export default resolvers;
