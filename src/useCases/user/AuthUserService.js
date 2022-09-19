import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/UserRepository.js';

class AuthUserService{
   async execute({email, password}){
      const userRepository = new UserRepository();
      const user = await userRepository.findByEmail(email);
      if(!user){
         throw new Error('User/password incorrect');
      }

      const passwordMatch = await compare(password, user.password);
      if(!passwordMatch){
         throw new Error('User/password incorrect');
      }

      const token = jwt.sign({
         name: user.name,
         email: user.email
      },
      process.env.JWT_SECRET,
      {
         subject: user.id,
         expiresIn: '30d'
      });

      return {
         id: user.id,
         name: user.name,
         email: user.email,
         token: token
      }
   }
}

export default AuthUserService;