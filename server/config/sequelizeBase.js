//sequelize基础配置文件
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mall','root','1234567890',{
	host:'127.0.0.1',
	dialect:'mysql',
})

module.exports = sequelize;