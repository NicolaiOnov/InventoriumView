import { LocalVariationQuantity } from "./localVariationQuantity";

export interface Variation {
    id: string;

    name: String;
    price: number;
    sku: number;
    isDefault: boolean;
    
    localVariationQuantities: LocalVariationQuantity[];
}