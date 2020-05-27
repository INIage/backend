import DataBase from "../DataBase/DataBase.js";
import { Endpoint } from "../Rout/Meta.js";

export default
class BooksController
{
    Data:DataBase;
    constructor()
    {
        this.Data = new DataBase();
    }

    // /books
    // /books?skip=0&take=5
    // /books/isbn
    // /books/isbn/authors
    // /books/isbn/authors?skip=0&take=5
    // /books/isbn/authors/id
    @Endpoint
    get( isbn:string|boolean, authors:string|boolean = false, skip:number = 0, take:number ):any
    {
        if(isbn == true)
        {
            if(!take) return this.Data.Books.Get();
    
            return this.Data.Books.GetPage(skip, take);
        }
        else if(isbn != false)
        {
            if (authors == true) return this.Data.Books.GetAuthors(isbn);
        
            if (authors && authors != "false") return this.Data.Books.GetAuthor(isbn, parseInt(authors));
            
            return this.Data.Books.GetBook(isbn);
        }
    }
    
    // /books?isbn=...&key=value& ...
    @Endpoint
    post( isbn?:string, title?:string, pages?:string, inStock?:string, authors?:string ):any
    {
        
    }

    // /books?isbn=...&key=value& ...
    @Endpoint
    put( isbn?:string, title?:string, pages?:string, inStock?:string, authors?:string ):any
    {

    }

    // /books/isbn
    @Endpoint
    delete( isbn?:string ):any
    {

    }
}