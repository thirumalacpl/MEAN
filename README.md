# MEAN



nodemon installed and configured so use below command to start the nodejs 
run command - npm run dev


API end point details for individual user creation, login, get is profile and update his profile after logout

1. User registration API - http://localhost:5000/api/users
    request body paramater  
    name- thirumal , email-thirumal@gmail.com, password-12345678

2. Login API - http://localhost:5000/api/users/login
    request body paramater  
    email : thirumal@gmail.com   pass: 12345678

3. Getting last user registered profile from DB - http://localhost:5000/api/users/profile

4. update profile using PUT method - http://localhost:5000/api/users/profile
    request body paramater  
    name: thirumalUpdate password: 123456789

5. Logout - http://localhost:5000/api/users/logout



// Need to create admin API end point to access all profile details

6. create API to fetch All user registered profile from DB with token

















commented code
app.js
// application object - can't reused
// app.get("/", (req, res) => {
//     res.send("okay");

// })

// custom error middle ware

// throw error directly
// app.get("/api", (req,res)=>{
//     throw new Error("something went wrong"); // html error
// })