const inquirer = require("inquirer")
const fs = require("fs")
inquirer.prompt([
  {
    type: "input",
    name: "managerName",
    message: "Enter manager's name: ",
    
  },
  {
    type: "input",
    name: "idNumber",
    message: "Enter manager's id number: ",
    
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter your manager's email: ",
  },
  {
    type: "input",
    name: "managerOfficeNum",
    message: "Enter the office number: ",
  },
  {
    type: "input",
    name: "engineerName",
    message: "Enter engineer's name: ",
    
  },
  {
    type: "input",
    name: "engineerId",
    message: "Enter engineer's id number: ",
    
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter your engineer's email: ",
  },
  {
    type: "input",
    name: "githubUserName",
    message: "Enter github username: ",
  },
  {
    type: "input",
    name: "internName",
    message: "Enter intern's name: ",
    
  },
  {
    type: "input",
    name: "internId",
    message: "Enter intern's id number: ",
    
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter your intern's email: ",
  },
  {
    type: "input",
    name: "schoolName",
    message: "which school did you graduate from? ",
  },
  


]).then((response) => {
  const data =`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="style.css">
<link href="https://fonts.googleapis.com/css?family=Montserrat|Varela+Round&display=swap" rel="stylesheet">

      
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-5 text-center">My team</h1>

    </div>

  </div>
  <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <h1 class="name"> Manager:<br>${response.managerName} </h1>
    <p class="idnum"> ID:${response.idNumber} </p>

    <p class="Email"> Email:${response.managerEmail}</p>
    <p class="num"> Office number:${response.managerOfficeNum}</p>
    </div>
    
    <div class="col">
    <h1 class="name"> Engineer:<br>${response.engineerName} </h1>
    <p class="idnum"> ID:${response.engineerId} </p>

    <p class="Email"> Email:${response.engineerEmail}</p>
    <p class="num"> Github:${response.githubUserName}</p>
    </div>
    <div class="col">
    <h1 class="name"> Intern:<br>${response.internName} </h1>
    <p class="idnum"> ID:${response.internId} </p>

    <p class="Email"> Email:${response.internEmail}</p>
    <p class="num"> School:${response.schoolName}</p>
    </div>
    
  </div>
  
    
      
  </body>
  </html> `

  
  

  
  
  
  fs.writeFile("index.html", data, function (error) {
    error ? console.error(error) : console.log('success')
  })
})