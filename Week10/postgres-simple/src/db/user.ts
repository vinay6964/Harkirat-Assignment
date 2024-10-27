// import { client } from "..";

import { mainClient } from ".."

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string) {
    await mainClient.connect()
    const insertQuery = "insert into users (username,password) values ($1,$2) "
    const res = await mainClient.query(insertQuery,[username,password])
    console.log("🚀 ~ createUser ~ res:", res)
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId : number []) {
    await mainClient.connect()
    const getQuery = "SELECT * FROM users WHERE id in ($1,$2)";
    try {
        const res = await mainClient.query(getQuery, [userId[0],userId[1]]);
        console.log("query",getQuery)
        console.log("🚀 ~ getUser ~ res:", res.rows);
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error; // Throw the error if you want to handle it in calling code
    }
}

