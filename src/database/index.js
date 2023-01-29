import { Sequelize } from 'sequelize';
import path from 'path';

import * as config from '@/config/sequelize';

// import models
// import userModel from './models/user';
// import tweetModel from './models/tweet';
import expedition from './models/master/expedition';
import user from "./models/master/user"
const fs = require('fs')
// Configuration
const env = process.env.NODE_ENV;
const sequelizeConfig = config[env];

const model_list = ["expedition","user"]
// Create sequelize instance
const sequelize = new Sequelize(sequelizeConfig);

const models_path = `${__dirname}/models/master`;// Import all model files

fs
  .readdirSync(models_path)
  .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(models_path,file))
    model[model.name] = model;
  });

// Associations
Object.keys(sequelize.models)
  .forEach((modelName) => {
    if (sequelize.models[modelName].associate) {
      sequelize.models[modelName].associate(sequelize.models);
    }
  });
  sequelize.sync();

export default sequelize;
