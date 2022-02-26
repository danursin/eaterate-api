import { Knex } from "knex";

export interface RequestContext {
    db: Knex;
}
