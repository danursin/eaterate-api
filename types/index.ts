import DataService from "../services/DataService";

export type RequestContext = {
    dataSources: {
        dataService: DataService;
    };
};

export interface CookTable {
    id: number;
    dish_id: number;
    title: string | null;
    date_created: string;
}

export interface CookEventTable {
    id: number;
    cook_id: number;
    date_created: string;
    probe_temp: number | null;
    ambient_temp: number | null;
    notes: string | null;
}

export interface CookIngredientTable {
    cook_id: number;
    ingredient_id: number;
    unit_id: number | null;
    amount: number | null;
    description: string | null;
}

export interface DishTable {
    id: number;
    title: string;
    date_created: string;
}

export interface IngredientTable {
    id: number;
    title: string;
    date_created: string;
}

export interface UnitTable {
    id: number;
    title: string;
    abbreviation: string | null;
}
