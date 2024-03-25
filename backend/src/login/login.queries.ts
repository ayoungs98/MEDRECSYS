export const loginQueries = {
    readLogin:`
      SELECT
        ID AS ID, FIRST_NAME AS FIRST_NAME, LAST_NAME AS LAST_NAME, EMAIL AS EMAIL,
        PASSWORD AS PASSWORD, ROLE AS ROLE, RECORD_ID AS RECORD_ID
        FROM login
      `,
    readLoginById:`
      SELECT
      *
      FROM login
      WHERE ID = ?
      `,
    readLoginByRecord_Id:`
      SELECT
      *
      FROM login
      WHERE RECORD_ID = ?
      `,
    readLoginByName:`
      SELECT
      *
      FROM login
      WHERE FIRST_NAME LIKE ? OR LAST_NAME LIKE ?
      `,
    readLoginByEmail:`
      SELECT
      *
      FROM login
      WHERE EMAIL LIKE ?
      `,
    createLogin:`
      INSERT INTO LOGIN(FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, ROLE, RECORD_ID) VALUE(?,?,?,?,?,?)
      `,
    updateLogin:`
      UPDATE login
      SET FIRST_NAME = ?, LAST_NAME = ?, EMAIL = ?, PASSWORD = ?, ROLE = ?, RECORD_ID = ?
      WHERE ID = ?
    `,
    deleteLogin:`
      DELETE FROM login
      WHERE ID = ?
      `,
  }