import { LocalVariationQuantity } from "./localVariationQuantity";

export interface Location {
    id: string;

    name: string;
    address: string;

    localVariationQuantities: LocalVariationQuantity[];
}