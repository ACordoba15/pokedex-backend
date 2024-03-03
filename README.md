## RUN DB
- docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Prueba001." -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest

## RUN SERVER
- nodemon dist/app.js
- tsc --watch

## SEQUELIZE
- CREATE NEW MIGRATION
  * npx sequelize migration:generate --name migration-skeleton
- ADD DATA FROM SEED
  * npx sequelize seed:generate --name demo-user
- RUN MIGRATION
  * npx sequelize db:migrate
- RUN SEED
  * npx sequelize db:seed:all
