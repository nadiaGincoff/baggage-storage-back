# Starting

This project was created with
[Node.js] (https://nodejs.org/en/) as a server,
[Postgres] (https://www.postgresql.org/n) as a database,
[Sequelize] (https://sequelize.org/) as ORM.

## Server setup

Requirements:

1- Install Postgresql locally and create a database server in your favorite database manager. You will need your password to use in the project later.

2- Create a local connection and add a database called "baggagestorage"

3- Replace the password in the database/config/config.js file and "root" in the database/config/db.js file with your Postgres password

4- Run in your directory project "npx sequelize-cli db:seed:undo:all"

## Run

Run server with "yarn run dev"
