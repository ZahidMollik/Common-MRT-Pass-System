# COMMON MRT PASS SYSTEM

## Project Setup

- clone this repository

  ```
    git clone https://github.com/ZahidMollik/Common-MRT-Pass-System.git

  ```

- Go inside the folder path and execute the following command:

  ```
    npm install

  ```

- In the root directory create a `.env` file and add the following variable

  ```
    PORT=<Port number of you choice>
    SECRETKEY=<Your Secret key for jwt>
    ORIGIN=<Your client URL that request this server>
    STORE_ID=<Your sslcommerz Store id>
    STORE_PASSD=<Your sslcommerz Store passd>
    IP=<Your network IP Address>
    USERGMAIL= <Your Gmail>
    PASS=<Your pass for enable nodemailer>

  ```

- Go inside the `src` folder and execute the following command:

  ```
    npx sequelize init

  ```

- After executing the above command you get a `config.json` file in the `config` folder and a message already exists migrations and seeders folder ignore it and you need to modify that `config.json` file like below:
  ```
        {
      "development": {
        "username": <your mysql username>,
        "password": <your mysql password>,
        "database": <database name>,
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
  ```
- Go inside the `src` folder and execute the following command:

  ```
    npx sequelize db:create
  ```

- After creating the database you need to execute the following command:

  ```
    npx sequelize db:migrate
  ```

- After executing the above command you will get following table in the database:

  - Airplanes
  - buses
  - launches
  - metros
  - stations
  - registrations
  - userInfos
  - cards
  - recharges
  - journeys

- Go inside the `src` folder and execute the following command to commit the seeds file into the database:

  ```
    npx sequelize db:seed --seed 20240425140503-add-stations.js
    npx sequelize db:seed --seed 20240426051958-add-metros.js

  ```

- To run the server execute:

  ```
    npn run dev

  ```

  ## API Reference

  ### Base URL

  ```
   http://localhost:<Port Number>/api/v1/
  ```

  ### Endpoints

  ### AUTH

  `POST /registration`

   Description: create a new user.

   Request Body example:
  ```javascript
  {
    "username": 'mollik',
    "email": 'example@gmail.com',
    "password":34556,
    "role":'admin' //default user
  }
  ```

  `POST /login`

   Description: login the system.

   Request Body example:
  ```javascript
  {
    "username": 'mollik',
    "password":34556
  }
  ```

  `POST /logout`

   Description: logout the system.


   `POST /password/forget-password`

   Description: recover the password.

   Request Body example:
  ```javascript
  {
    "email":"example@gmail.com"
  }
  ``` 
   `POST /password/reset_password/:username/:token`

   Description: after clicking forget password you will receive an email with a link to reset the password.

   Request Body example:
  ```javascript
  {
    "password":"password"
  }
  ```
  ### userInfos

   `POST /users/profile`

  Description: create a new user info.

      POST http://localhost:<Port Number>/api/v1/users/profile

  Request Body example:
  ```javascript
  {
    "FullName":"Zahid Mollik",
    "phoneNumber":"0170000000",
    "dateOfBirth":"1990-06-24",
    "address":"Dhaka,Bangladesh",
    "postCode":1216

  }
  ```

  `GET /users/profile`  
  Description:Get login user info

      POST http://localhost:<Port Number>/api/v1/users/profile


  `PATCH /users/profile/update`  
  Description:  Update login user details.

      PATCH http://localhost:<Port Number>/api/v1/users/profile/update


  `DELETE /users`  
  Description: Delete login userInfo info.

      DELETE http://localhost:<Port Number>/api/v1/users/


  ### Airplanes

  `POST /services/airplanes/addInfo`

  Description: create a new Airplane info and this endpoint is authorized for admin only.

      POST http://localhost:<Port Number>/api/v1/services/airplanes/addInfo

  Request Body example:
  ```javascript
  {
    "name": "US-Bangla",
    "departureAirport": "hazrat shahjalal international airport",
    "arrivalAirport": "barishal airport",
    "departureTime": "2024-10-17 12:00",
    "arrivalTime": "2024-10-17  13:00",
    "price": 4000,
  }
  ```

  `POST /services/airplanes/info`  
  Description:Get a list of Airplanes By departureAirport & arrivalAirport.

      POST http://localhost:<Port Number>/api/v1/services/airplanes/info
  Request Body example:
  ```javascript
  {
    "departureAirport": "hazrat shahjalal international airport",
    "arrivalAirport": "barishal airport",
    
  }
  ```

  `POST /services/airplanes/departingInfo`  
  Description:Get departureTime info.

      POST http://localhost:<Port Number>/api/v1/services/airplanes/departingInfo
  Request Body example:
  ```javascript
  {
    "name": "US-Bangla",
    "departureAirport": "hazrat shahjalal international airport",
    "arrivalAirport": "barishal airport"
    
  }
  ```

  `GET /services/airplanes`  
  Description: Get all airplane details.

      GET http://localhost:<Port Number>/api/v1/services/airplanes/


  `PATCH /services/airplanes/:id`  
  Description: Update a specific airplane details and this endpoint is authorized for admin only.

      PATCH http://localhost:<Port Number>/api/v1/services/airplanes/2

  `DELETE /services/airplanes/:id`  
  Description: Delete a airplane by id and this endpoint is authorized for admin only.

      DELETE http://localhost:<Port Number>/api/v1/services/airplanes/2

### Buses

  `POST /services/buses/addInfo`

  Description: create a new bus info and this endpoint is authorized for admin only.

      POST http://localhost:<Port Number>/api/v1/services/buses/addInfo

  Request Body example:
  ```javascript
  {
    "name": "projapoti",
    "originStation": "mirpur-1",
    "destinationStation": "shyamoli",
    "price": 10,
  }
  ```

  `POST /services/buses/info`  
  Description:Get a list of bus By originStation & destinationStation.

      POST http://localhost:<Port Number>/api/v1/services/buses/info
  Request Body example:
  ```javascript
  {
    "originStation": "mirpur-1",
    "destinationStation": "shyamoli",
    
  }
  ```


  `GET /services/buses`  
  Description: Get all bus details.

      GET http://localhost:<Port Number>/api/v1/services/buses/


  `PATCH /services/buses/:id`  
  Description: Update a specific bus details and this endpoint is authorized for admin only.

      PATCH http://localhost:<Port Number>/api/v1/services/buses/2

  `DELETE /services/buses/:id`  
  Description: Delete a bus info by id and this endpoint is authorized for admin only.

      DELETE http://localhost:<Port Number>/api/v1/services/buses/2

### Metros

  `POST /services/metros/addInfo`

  Description: create a new metros info and this endpoint is authorized for admin only.

      POST http://localhost:<Port Number>/api/v1/services/metros/addInfo

  Request Body example:
  ```javascript
  {
    "name": "dhaka metro",
    "originStation": "mirpur-10",
    "destinationStation": "mirpur-11",
    "price": "20",
  }
  ```

  `POST /services/metros/info`  
  Description:Get a list of metro By originStation & destinationStation.

      POST http://localhost:<Port Number>/api/v1/services/metro/info
  Request Body example:
  ```javascript
  {
    "originStation": "mirpur-10",
    "destinationStation": "mirpur-11",
    
  }
  ```


  `GET /services/metros`  
  Description: Get all metro details.

      GET http://localhost:<Port Number>/api/v1/services/metro/


  `PATCH /services/metros/:id`  
  Description: Update a specific metro details and this endpoint is authorized for admin only.

      PATCH http://localhost:<Port Number>/api/v1/services/metros/2

  `DELETE /services/metros/:id`  
  Description: Delete a metro info by id and this endpoint is authorized for admin only.

      DELETE http://localhost:<Port Number>/api/v1/services/metros/2

### Launches

  `POST /services/launches/addInfo`

  Description: create a new launch info and this endpoint is authorized for admin only.

      POST http://localhost:<Port Number>/api/v1/services/launches/addInfo

  Request Body example:
  ```javascript
  {
    "name": "M.V.Bangali",
    "originTerminal": "Dhaka",
    "destinationTerminal": "Barishal",
    "cabinType": "single",
    "price": "1500"
  }
  ```

  `POST /services/launches/info`  
  Description:Get a list of launch By originTerminal & destinationTerminal.

      POST http://localhost:<Port Number>/api/v1/services/launches/info
  Request Body example:
  ```javascript
  {
    "originTerminal": "Dhaka",
    "destinationTerminal": "Barishal",
    
  }
  ```

  `POST /services/launches/cabinInfo`  
  Description:Get cabinInfo by originTerminal & destinationTerminal .

      POST http://localhost:<Port Number>/api/v1/services/launches/cabinInfo
  Request Body example:
  ```javascript
  {
    "name": "M.V.Bangali",
    "originTerminal": "Dhaka",
    "destinationTerminal": "Barishal",
    
  }
  ```

  `GET /services/launches`  
  Description: Get all launch details.

      GET http://localhost:<Port Number>/api/v1/services/launches/


  `PATCH /services/launches/:id`  
  Description: Update a specific launch details and this endpoint is authorized for admin only.

      PATCH http://localhost:<Port Number>/api/v1/services/launches/2

  `DELETE /services/launches/:id`  
  Description: Delete a launches by id and this endpoint is authorized for admin only.

      DELETE http://localhost:<Port Number>/api/v1/services/launches/2

### Stations

  `POST /stations`

  Description: create a new station info and this endpoint is authorized for admin only.

      POST http://localhost:<Port Number>/api/v1/stations/

  Request Body example:
  ```javascript
  {
    "name": "dhaka metro",
    "originStation": "mirpur-10",
    "destinationStation": "mirpur-11",
    "price": "20",
  }
  ```

  `POST /stations/:medium`  
  Description:Get a list of station By medium.

      POST http://localhost:<Port Number>/api/v1/stations/metro
  Request Body example:
  ```javascript
  {
    "originStation": "mirpur-10",
    "destinationStation": "mirpur-11",
    
  }
  ```


  `GET /stations`  
  Description: Get all stations details.

      GET http://localhost:<Port Number>/api/v1/stations/


  `PATCH /stations/:id`  
  Description: Update a specific station details and this endpoint is authorized for admin only.

      PATCH http://localhost:<Port Number>/api/v1/stations/2

  `DELETE /stations/:id`  
  Description: Delete a stations info by id and this endpoint is authorized for admin only.

      DELETE http://localhost:<Port Number>/api/v1/services/stations/2

### Cards

  `POST /card/generate`

  Description: generate the card.

      POST http://localhost:<Port Number>/api/v1/card/generate


  `GET /card/cardInfo`  
  Description:Get the card details.

      POST http://localhost:<Port Number>/api/v1/card/cardInfo
 

  `POST /card/recharge`  
  Description: for recharge the card.

      POST http://localhost:<Port Number>/api/v1/card/recharge
  Request Body example:
  ```javascript
  {
    "cardnumber": "cfd438bf916b",
    "amount": "1000",
    
  }
  ```


  `POST /card/recharge/success/:tran_Id`  
  Description: for a successful recharge.

      POST http://localhost:<Port Number>/api/v1/card/recharge/success/:tran_Id

  `POST /card/recharge/fail/:tran_Id`  
  Description: for a fail  recharge.

      POST http://localhost:<Port Number>/api/v1//card/recharge/fail/:tran_Id
  `GET /card/rechargehistory`  
  Description: Get login user recharge history .

      GET http://localhost:<Port Number>/api/v1/card/rechargehistory
  `DELETE /card/rechargehistory`  
  Description: Delete  login user recharge history .

      DELETE http://localhost:<Port Number>/api/v1/card/rechargehistory
### fare calculation

`POST /fare/calculate/metro`  
  Description: calculate metro fare.

      POST http://localhost:<Port Number>/api/v1/fare/calculate/metro
  Request Body example:
  ```javascript
  {
    "originStation": "Mirpur-10",
    "destinationStation": "Mirpur-11",
    "numOfPassenger":2
    
  }
  ```
  `POST /fare/calculate/bus`  
  Description: calculate bus fare.

      POST http://localhost:<Port Number>/api/v1/fare/calculate/bus
  Request Body example:
  ```javascript
  {
    "name":"Transilva",
    "originStation": "Mirpur-1",
    "destinationStation": "Mirpur-10",
    "numOfPassenger":2
    
  }
  ```
  `POST /fare/calculate/airplane`  
  Description: calculate airplane fare.

      POST http://localhost:<Port Number>/api/v1/fare/calculate/airplane
  Request Body example:
  ```javascript
  {
    "name":"US-Bangla",
    "departureAirport": "hazrat shahjalal international airport",
    "arrivalAirport": "barishal airport"
    "numOfPassenger":2
    
  }
  ```

  `POST /fare/calculate/launch`  
  Description: calculate launch fare.

      POST http://localhost:<Port Number>/api/v1/fare/calculate/launch
  Request Body example:
  ```javascript
  {
    "name": "M.V.Bangali",
    "originTerminal": "Dhaka",
    "destinationTerminal": "Barishal",
    "cabinType": "single",
    "numOfPassenger":2
    
  }
  ```

  `POST /fare/pay`  
  Description: Pay the total fare and generate a QRCODE.

      POST http://localhost:<Port Number>/api/v1/fare/pay
  Request Body example:
  ```javascript
  {
    "transportName": "M.V.Bangali",
    "originTerminal": "Dhaka",
    "destinationTerminal": "Barishal",
    "cabinType": "single",
    "numOfPassenger":2,
    "transportMedium":"launch",
    "fare":3000
    
  }
  ```
`GET /fare/payhistory`  
  Description: Get login user all paymenthistory.

      GET http://localhost:<Port Number>/api/v1/fare/payhistory

`DELETE /fare/payhistory/delete`  
  Description: Delete login user all paymenthistory.

      DELETE http://localhost:<Port Number>/api/v1/fare/payhistory/delete

## QRCODE SCAN

`GET /QRCode/:token`  
  Description: Verify QRCODE.

      GET http://localhost:<Port Number>/api/v1/QRCode/:token
  



