import { Category } from "../category";
export class Product {
    constructor(public id?: Number,
        public name?: String,
        public description?: String,
        public imageurl?: String,
        public price?: Number,
        public category?:Category) {}
}