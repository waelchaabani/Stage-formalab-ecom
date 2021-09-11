import { Product } from "./product/product";

export class Category {
    constructor(
        public id?: Number,
        public name?: String,
        public products?:Product[]
    ) {}

}
