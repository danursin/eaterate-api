type Config = {
    DB_CATALOG: string;
    DB_HOST: string;
    DB_PASSWORD: string;
    DB_USERNAME: string;
    DEBUG: unknown;
};

const { DB_HOST, DB_CATALOG, DB_USERNAME, DB_PASSWORD, DEBUG } = process.env as Config;

const config: Config = {
    DB_CATALOG,
    DB_HOST,
    DB_PASSWORD,
    DB_USERNAME,
    DEBUG
};

export default config;
