import DBContext from "../DBContext.js";
import Book from "../Model/Book.js";
import Author from "../Model/Author.js";

export default class BookRepository
{
    private db!:DBContext;
    constructor(db:DBContext)
    {
        this.db = db;
    }
    
    Count()
    {
        return this.db.Books.length;
    }
    
    Get():Book[]
    {
        return this.db.Books;
    }

    GetBook(isbn:string):Book
    {
        return this.db.Books.filter( b => b.ISBN == isbn)[0];
    }

    GetAuthors(isbn:string):Author[]
    {
        return this.GetBook(isbn).Authors
    }

    GetAuthor(isbn:string, authors:number):Author
    {
        return this.GetBook(isbn).Authors.filter( a => a.ID == authors)[0]
    }

    GetPage(skip:number, take:number)
    {
        return this.db.Books
        .sort((a, b) => a.ID - b.ID )
        .Skip(skip)
        .Take(take);
    }
}