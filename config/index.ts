type Config = {
    DB_CATALOG: string;
    DB_HOST: string;
    DB_PASSWORD: string;
    DB_USERNAME: string;
};

const { DB_HOST, DB_CATALOG, DB_USERNAME, DB_PASSWORD } = process.env as Config;

const config: Config = {
    DB_CATALOG,
    DB_HOST,
    DB_PASSWORD,
    DB_USERNAME
};

export default config;
