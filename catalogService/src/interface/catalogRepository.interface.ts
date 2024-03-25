import { Product } from "../models/product.model";

export interface IcatalogRepository{
    create(data:  Product): Promise<Product>;
    update(data:any):Promise<{}>;
    delete(id:any):Promise<{}>;
    find():Promise<Product[]>;
    findOne(id:number):Promise<Product>;
}

