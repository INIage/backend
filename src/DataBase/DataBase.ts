import DBContext from "./DBContext.js";
import AuthorRepository from "./Repositories/AuthorRepository.js";
import BookRepository from "./Repositories/BookRepository.js";

export default class DataBase
{
    Author!: AuthorRepository;
    Books!: BookRepository;
    constructor() 
    {
        const db = new DBContext();
        this.Author = new AuthorRepository(db);
        this.Books = new BookRepository(db);
    }
}