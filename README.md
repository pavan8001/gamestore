# GameStore
## MERN stack Application

**Description:**  A simple MERN stack application for college group project.  
The project contains:  
`Homepage`: Link to all categories hosted and ``New Releases`` games.  
`Preview`: page containing games of repective categories.  
`Content`: Information for particular game based on request Id.  
`cart`: Gives an overlook of all games and prices that are put to purchase list.  
`Registration`, `login` and `Payment` pages respectively.

Static version of this app is running at [gh-pages](https://pavan-n-654.github.io/gamestore).

Authors:  
>Nishanth S @[Nishanth-S1142001](https://github.com/Nishanth-S1142001)  
>Pavan N @[pavan-n-654](https://github.com/pavan-n-654)  
>Prerana Umakant Bandekar @[Prerana-bandekar](https://github.com/Prerana-bandekar)  
>Rahul RadhaKrishna @[rahul0311](https://github.com/rahul0311)

Clone the repo:
```
git clone https://github.com/pavan-n-654/gamestore
```
or download `zip` file
```
cd gamestore
```
Install `node modules`
```
npm install
```
Install `node modules` for `backend`
```
cd backend && npm install
```
Install and run `mongod` and `mongo` DB services  
Create database named `users`.

Run `nodemon` server:

``(...gamestore/backend)$`` ``nodemon server``  
or  
``(...gamestore/backend)$`` ``node node_modules/nodemon/bin/nodemon.js server``

Run the frontend:  
``(...gamestore)$`` `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
