import CreateUserService from '../useCases/user/CreateUserService.js';
import UpdateUserService from '../useCases/user/UpdateUserService.js';
import AuthUserService from '../useCases/user/AuthUserService.js';

class UserController{
   async create(request, response){
      const { name, email, password } = request.body;
      const createUserService = new CreateUserService();
      const user = await createUserService.execute({name, email, password});
      return response.json(user);
   }

   async update(request, response){
      const { name, email } = request.body;
      const { id } = request.params;
      const updateUserService = new UpdateUserService();
      const user = await updateUserService.execute({id, name, email});
      return response.json(user);
   }

   async auth(request, response){
      const { email, password } = request.body;
      const authUserService = new AuthUserService();
      const auth = await authUserService.execute({email, password});
      return response.json(auth);
   }
}

export default UserController;