# Tech Blog [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Tech Blog is a full-stack project that follows the Model-View-Controller paradigm that allows users to create an account to publish articles, blog posts, and thoughts and opinions.
This project is part of a challenge from Full Stack Coding Bootcamp at the University of Minnesota.

## Installation

If you wish to run this application locally, please use `https://nodejs.org/en/` to install Node.js (version 16 is recommended).\
Run `npm i` in the terminal to install dependencies bcrypt, connect-session-sequelize, dotenv, Express, Express-handlebars, Express-session, Handlebars, MySQL2 and Sequelize and Nodemon.

## Usage

1. If you wish to run this application locally:
   1. Clone this project's repository
   1. Use .env.EXAMPLE to enter your MySQL username and password (remane file to remove .EXAMPLE)
   1. To create the database:
      - In the command line (CLI), navigate to db folder
      - Type `mysql -u root -p`
      - Enter your password
      - Type `SOURCE schema.sql`
   1. To seed data to the database:
      - In the CLI, type `npm run seed`
   1. To connect to server:
      - In the CLI, type `npm i` to guarantee dependencies are installed
      - Type `npm start`
      - Open `http://localhost:3001/` on your browser to see the application

## Credits

With the help of instruction and guidance of the staff of the UofM coding boot camp, nor without the resources at W3 and the Mozilla Developers Network. I was able to write the code the best I can.

## License

The license for this project is **The MIT License**<br>
To learn more about this license, please access https://opensource.org/licenses/MIT
