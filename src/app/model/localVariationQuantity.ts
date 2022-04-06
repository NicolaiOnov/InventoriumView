import { Variation } from "./variation";
import { Location } from "./location";

export interface LocalVariationQuantity {
    id: string;

    variation: Variation;
    variationId: number;
    location: Location
    locationId: number;

    quantity: number;
}