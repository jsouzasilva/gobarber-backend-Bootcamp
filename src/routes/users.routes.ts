import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRoutes = Router();

userRoutes.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();
    const user = await createUser.execute({ name, email, password });
    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

userRoutes.patch('/avatar', ensureAuthenticated, async (request, response) => {
  return response.json({ ok: true });
});
export default userRoutes;
