import { Client } from 'pg';
import { createTable } from './db/setup';
import { createUser, getUser } from './db/user';
import { createTodo, updateTodo } from './db/todo';

export const mainClient = new Client({
    port: 5432,
    database: 'toDo',
    user: 'postgres',
    password: 'Vinay@2071',
});

async function initializeDatabase() {
    // Connect to the default `postgres` database to create `toDo` if it doesn’t exist
    const setupClient = new Client({
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'Vinay@2071',
    });

    try {
        await setupClient.connect();
        console.log("Connected to the default database");

        // Check if 'toDo' database exists, and create it if it doesn’t
        const res = await setupClient.query(`SELECT 1 FROM pg_database WHERE datname = 'toDo'`);
        
        if (res.rowCount === 0) {
            await setupClient.query(`CREATE DATABASE "toDo"`);
            console.log("Database 'toDo' created successfully.");
        } else {
            console.log("Database 'toDo' already exists.");
        }
    } catch (err) {
        console.error("Error creating database:", err);
    } finally {
        await setupClient.end();
    }
    
    // Connect to the 'toDo' database
    try {
        await mainClient.connect();
        console.log("Connected to the 'toDo' database");
    } catch (error) {
        console.error("Error connecting to 'toDo' database:", error);
    }
}

// Call initializeDatabase to set up the database, and export `mainClient` for use in other files
// initializeDatabase();
// createTable()
// createUser("vinayakdhsjkhcks","vinay@34dkjhskjks567890987654");

// getUser([1,3]);
// createTodo(1,"software developmetn","I am sde at a remote startup and earning enough")
updateTodo(1)
// export { mainClient };
