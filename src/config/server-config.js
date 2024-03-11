const dotenv=require('dotenv');
const config=require('./config.json');
dotenv.config();

const developmentConfig = config.development;
developmentConfig.username = process.env.DB_USERNAME;
developmentConfig.password = process.env.DB_PASSWORD;
developmentConfig.database = process.env.DB_NAME;
developmentConfig.host = process.env.DB_HOST;

const productionConfig = config.production;
productionConfig.username = process.env.DB_USERNAME;
productionConfig.password = process.env.DB_PASSWORD;
productionConfig.database = process.env.DB_NAME;
productionConfig.host = process.env.DB_HOST;

module.exports={
  PORT:process.env.PORT
}