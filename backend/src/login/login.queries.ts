export const loginQueries = {
    readLogin:`
      SELECT
        ID AS ID, FIRST_NAME AS FIRST_NAME, LAST_NAME AS LAST_NAME, EMAIL AS EMAIL,
        PASSWORD AS PASSWORD, ROLE AS ROLE
        FROM login
      `,
    readLoginById:`
      SELECT
      *
      FROM login
      WHERE ID = ?
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
      INSERT INTO LOGIN(FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, ROLE) VALUE(?,?,?,?,?)
      `,
    updateLogin:`
      UPDATE login
      SET FIRST_NAME = ?, LAST_NAME = ?, EMAIL = ?, PASSWORD = ?, ROLE = ?
      WHERE ID = ?
    `,
    deleteLogin:`
      DELETE FROM login
      WHERE ID = ?
      `,
  }