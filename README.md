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
 1. At home page click on the the "Create Account" button.
 2. Fill out all required fields.
 3. Click the "Create Account" button

## Logging into Website:
  1. At home page input Email address and Password. * (If you don't have an account please create one)
  2. Click the "Login" button.

## As a Patient you have access to the following options.
1. View Record. (If you have a record created already)
2. Create a Record. (Only if you don't have a record already)
3. Change Password.
4. Logout.

   ## To View a Reocrd:
    1. Click on the "View Record" button.
  
       On the View Record page you can go home or edit.
       To go back to the Patient home page
       1. click the "Home" button.
          
       To Edit Record infomation:
         1. Click the "Edit" Button.

  ## To Creating a Record:


# Creating a Reocrd as a Staff Memeber:



# Creating a Login Account as a Admin:

