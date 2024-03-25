export const recordQueries = {
    readRecord:`
      SELECT
      ID AS ID, RECORD_ID AS RECORD_ID, HEIGHT_FEET AS HEIGHT_FEET, HEIGHT_INCH AS HEIGHT_INCH, WEIGHT AS WEIGHT,
      SEX AS SEX, AGE AS AGE, DOB AS DOB, ADDRESS AS ADDRESS, CITY AS CITY, STATE AS STATE, ZIP AS ZIP,
      NOTES AS NOTES, HISTORY AS HISTORY, TEST_RESUALTS AS TEST_RESUALTS
      FROM records
      `,
    readRecordByRecord_Id:`
      SELECT
      *
      FROM records
      WHERE RECORD_ID = ?
      `,
    createRecord:`
      INSERT INTO RECORDS(RECORD_ID, HEIGHT_FEET, HEIGHT_INCH, WEIGHT, SEX, AGE, DOB,
        ADDRESS, CITY, STATE, ZIP, NOTES, HISTORY, TEST_RESUALTS) 
      VALUE(?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `,
    updateRecord:`
      UPDATE records
      SET HEIGHT_FEET = ?, HEIGHT_INCH = ?, WEIGHT = ?, SEX = ?, AGE = ?, DOB = ?, ADDRESS = ?,
      CITY = ?, STATE = ?, ZIP = ?, NOTES = ?, HISTORY = ?, TEST_RESUALTS = ?
      WHERE RECORD_ID = ?
    `,
    updateNotes:`
      UPDATE records
      SET NOTES = ?
      WHERE RECORD_ID = ?
    `,
    updateHistory:`
      UPDATE records
      SET HISTORY = ?
      WHERE RECORD_ID = ?
    `,
    updateTestResualts:`
      UPDATE records
      SET TEST_RESUALTS = ?
      WHERE RECORD_ID = ?
    `,
    deleteRecord:`
      DELETE FROM records
      WHERE ID = ?
      `,
  }