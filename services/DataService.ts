import { CookEventTable, CookIngredientTable, CookTable, DishTable, IngredientTable, RequestContext, UnitTable } from "../types";

import { SQLDataSource } from "datasource-sql";

const SCHEMA = "eat";

class DataService extends SQLDataSource<RequestContext> {
    // Cook
    getCook(id: number): Promise<CookTable> {
        return this.db.withSchema(SCHEMA).table("Cook").where({ id }).first();
    }
    getCooks(): Promise<CookTable[]> {
        return this.db.withSchema(SCHEMA).table("Cook");
    }

    // Dish
    getDish(id: number): Promise<DishTable> {
        return this.db.withSchema(SCHEMA).table("Dish").where({ id }).first();
    }
    getDishes(): Promise<DishTable[]> {
        return this.db.withSchema(SCHEMA).table("Dish");
    }

    // Unit
    getUnit(id: number): Promise<UnitTable> {
        return this.db.withSchema(SCHEMA).table("Unit").where({ id }).first();
    }
    getUnits(): Promise<UnitTable[]> {
        return this.db.withSchema(SCHEMA).table("Unit");
    }

    // Ingredient
    getIngredient(id: number): Promise<IngredientTable> {
        return this.db.withSchema(SCHEMA).table("Ingredient").where({ id }).first();
    }
    getIngredients(): Promise<IngredientTable[]> {
        return this.db.withSchema(SCHEMA).table("Ingredient");
    }
    getCookIngredients(cook_id: number): Promise<CookIngredientTable[]> {
        return this.db.withSchema(SCHEMA).table("CookIngredient").where({ cook_id });
    }

    // Events
    getCookEvents(cook_id: number): Promise<CookEventTable[]> {
        return this.db.withSchema(SCHEMA).table("CookEvent").where({ cook_id });
    }
}

export default DataService;
