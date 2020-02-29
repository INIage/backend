import Author from "./Author.js"

export default class Book
{
    ID:number;
    ISBN: string;
    Title: string;
    Pages: number;
    InStock: number;
    Authors: Array<Author>;
    
    constructor(ID:number, ISBN: string, Title: string, Pages: number, InStock: number, Authors: Author[]) 
    {
        this.ID = ID;
        this.ISBN = ISBN;          
        this.Title = Title;
        this.Pages = Pages;
        this.InStock = InStock;
        this.Authors = Authors;
    }
}