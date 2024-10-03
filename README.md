# Medical Record System v1.0

This is a medical record system using a React frontend for the UI that a patient, employee, or admin can log into and save a medical record to a database.
The backend uses javascript and AXIOS to connect to the database.
With this application I used a SQL database. (I used MAMP to create and manage my database)
  - The database had 2 tables, a login table that keeps track of all the login information and passwords (which is saved as a hash).
  - and a reocrds table that keeps track of the patients information and medical information.

## Installation:
  1. Create the SQL database. (in the main Github directory there is a MEDRECSYS sql script file that can be used.)
  2. Configure the backend (.env file) to connect to the database. 
  3. Create the first account as a admin account. * (All accounts are created as patient accounts by default. Can skip if you used the SQL script)
  4. Need to log into database and change the ROLE of the first account to A for admin. * (can skip if you used the SQL script)
  5. Login as Admin and created employees accounts.



## Creating a Login Account:
![Login](screenshots/login.png).
 1. At home page click on the the "Create Account" button.
 2. Fill out all required fields.
 3. Click the "Create Account" button.
    
![CreateAccount](screenshots/create_account.png)

## Logging into Website:
![Login](screenshots/login.png).
  1. At home page input Email address and Password. * (If you don't have an account please create one)
  2. Click the "Login" button.


## As a Patient you have access to the following actions.
 ![patienthome](screenshots/patienthome.png)
1. View Record. (If you have a record created already)
2. Create a Record. (Only if you don't have a record already)
3. Change Password.
4. Logout.

   ### To View a Reocrd:
   Click on the "View Record" button.
   
  ![patientview](screenshots/viewrecord.png)
  
  On the View Record page you have two options.
      1. Home
      2. Edit

  ### Edit Patient.
  
  ### Creating a Record.
  
  ### Change Password.
  
  ### Loging out.


## As a Staff Memeber you have acces to the following actions:
1. View patient reocrd.
2. Change Password.
3. Logout.
   
   ### View Patient Record:

   ### Change Password:

   ### Logout:


## As a Admin you have access t othe following actions:
1. Create Account.
2. Update Account.
3. Change Password.
4. Logout.

   ### Create Account:

   ### Update Account:

   ### Change Password:

   ### Logout:

