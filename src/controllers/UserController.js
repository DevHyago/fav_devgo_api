import CreateUserService from '../useCases/user/CreateUserService.js';
import UpdateUserService from '../useCases/user/UpdateUserService.js';

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
}

export default UserController;