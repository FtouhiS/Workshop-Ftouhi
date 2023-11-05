import { Category } from "./category";

export class Product{
    id!:number;
    code!:number;
    libelle!:string;
    prixunitaire!:number;
    tauxTva!:number;
    dateCreation!:Date;
    datedernieremodif!:Date;
    categorie!:Category;
    }