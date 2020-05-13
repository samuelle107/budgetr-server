# Budgetr Server
### Introduction
This is a server to hold user transactions for their budgeting app. It is a Node.JS server that communicates with Heroku + Postgres to hold transactions.
### Getting Started
1. Create a Heroku application and add the add-on Postgres.
2. Clone the repository
3. Run `npm i` to install node_modules
4. Initialize git and Heroku
5. Look into install Heroku postgres CLI via the Heroku documentation
6. Run `heroku pg:psql` to open the Heroku Postgres CLI
7. Run the query from init.sql to create a table
8. Run `\d transactions` to confirm that it works
