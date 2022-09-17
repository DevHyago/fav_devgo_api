import UserRepository from "../../repositories/UserRepository.js";

class UpdateUserService{
   async execute({id, name, email}){
      const userRepository = new UserRepository();

      const findById = await userRepository.findById(id);
      if(!findById){
         throw new Error('User does not exist');
      }

      const user = await userRepository.update({id, name, email});

      return user;

   }
}

export default UpdateUserService;