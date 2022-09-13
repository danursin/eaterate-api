import Knex from "knex";
import config from "../config";

const { DB_CATALOG, DB_HOST, DB_PASSWORD, DB_USERNAME } = config;

const connection = Knex({
    client: "mssql",
    connection: {
        host: DB_HOST,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_CATALOG,
        dateStrings: true
    }
});

export default connection;
