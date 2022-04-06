import { Variation } from "./variation";

export interface Product {
    id: string;

    name: string;
    price: number;
    variations: Variation[];
}