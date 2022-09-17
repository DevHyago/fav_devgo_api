import UserModel from '../models/UserModel.js'

class UserRepository{

   async findByEmail(email){
      const user = await UserModel.findOne({
         where: {
            email: email
         }
      });
      return user;
   }

   async findById(id){
      const user = await UserModel.findByPk(id);
      return user;
   }

   async save({id, name, email, password}){
      try{
         const user = await UserModel.create({
            id: id,
            name: name,
            email: email, 
            password: password
         });
         return user;
      }catch(e){
         throw new Error('Error saving data to database');
      }
   }

   async update({id, name, email}){
      try{
         const user = await UserModel.update({
            name: name,
            email: email, 
         }, {
            where: {
               id: id
            },
            returning: true,
            plain: true
         });

         return user[1];
      }catch(e){
         throw new Error('Error updating data to database');
      }
   }
}

export default UserRepository;