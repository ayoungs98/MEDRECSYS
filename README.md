Medical Record System v1.0

This is a medical record system using a React frontend for the UI that a patient, employee, or admin can log into and save a medical record to a database.
The backend uses javascript and AXIOS to connect to the database.
With this application I used a SQL database. (I used MAMP to create and manage my database)
  - The database had 2 tables, a login table that keeps track of all the login information and passwords (which is saved as a hash).
  - and a reocrds table that keeps track of the patients information and medical information.

Installation:
  1. Create the SQL database. (in the main Github directory there is a MEDRECSYS sql script file that can be used.)
  2. Configure the backend (.env file) to connect to the database. 
  3. Create the first account as a admin account. (All accounts are created as patient accounts by default.)
  4. Need to log into database and change the ROLE of the first account to A for admin.
  5. Login as Admin and created employees accounts.
