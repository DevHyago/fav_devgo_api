import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';
import UserRepository from '../../repositories/UserRepository.js';

class CreateUserService{

   async execute({name, email, password}){
      const userRepository = new UserRepository();
      
      if(!name || !email || !password){
         throw new Error('Data required');
      }

      const findByEmail = await userRepository.findByEmail(email)
      if(findByEmail){
         throw new Error('This email is already being used.');
      }

      const id = randomUUID();
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await userRepository.save({
         id: id,
         name: name,
         email: email,
         password: hashedPassword
      });

      return user;
   }
}

export default CreateUserService;