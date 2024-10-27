import { mainClient } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    await mainClient.connect()

    const query = `insert into todo (user_id, title, description) values ($1,$2,$3)`
    const res = await mainClient.query(query,[userId,title,description])
    console.log("🚀 ~ res:", res)
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    await mainClient.connect()
    const query = `update todo set done = true where id = $1`
    const res = await mainClient.query(query,[todoId])
    console.log("🚀 ~ res:", res)
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {

}