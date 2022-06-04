import express from 'express';

import error from '../middleware/error.js';
import defautlRoute from '../routes/default.js';
import questions from '../routes/questions.js';
import categories from '../routes/categories.js';
import {users} from '../routes/users.js';

export const routes = (app) => {
  app.use(express.json());
  app.use('/', defautlRoute);
  app.use('/api/questions', questions);
  app.use('/api/categories', categories);
  app.use('/api/users', users);
  app.use(error);
};
