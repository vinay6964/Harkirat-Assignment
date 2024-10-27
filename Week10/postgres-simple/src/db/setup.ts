import { mainClient } from "..";

export async function createTable () {
    // await mainClient.connect();
    const res1 = await mainClient.query(
        `
        create table if not exists users (
        id serial primary key,
        username varchar(100) not null unique,
        password varchar(100) not null
        );
        `
    )
    console.log("🚀 ~ createTable ~ res1:", res1)

    const res2 = await mainClient.query(
        `
        create table if not exists todo (
        id serial primary key,
        title varchar (100) not null,
        description text not null,
        done boolean default false,
        user_id integer not null references users(id)
        )
        `
    )
    console.log("🚀 ~ createTable ~ res2:", res2)

    const res3 = await mainClient.query(
        `
        create table if not exists testing (
          name varchar (200)
        )
        `
    )
    console.log("🚀 ~ createTable ~ res3:", res3)
}

module.exports = {createTable}