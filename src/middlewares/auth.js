import jwt from 'jsonwebtoken';

function isAuthenticated(request, response, next){
   const authToken = request.headers.authorization;

   if(!authToken){
      return response.status(401).end();
   }

   const [, token] = authToken.split(" ");

   try{
      const {sub} = jwt.verify(token, process.env.JWT_SECRET);
      request.user_id = sub;
      return next();
   }catch(e){
      return response.status(401).end();
   }
}

export default isAuthenticated;