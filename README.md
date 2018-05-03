# nodeboilerplate

	instal node with npm
	npm install yarn -g

	create project folder
	npm init (package.json main : app.js)
	npm install express (package-lock.json, node_modules)
	create app.js (initialize dependency)
	npm install nodemon -g -save

	npm install sequelize -save
	npm install sequelize-cli -save

	yarn add sequelize
	yarn add sequelize-cli

	create .sequelizerc file for sequelize
	node_modules/.bin/sequelize init
	cofig variable set in db config file

	http://docs.sequelizejs.com/manual/tutorial/migrations.html
	node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

	node_modules/.bin/sequelize db:migrate
	node_modules/.bin/sequelize db:migrate:undo







