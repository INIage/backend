import DBContext from "../DBContext.js";

export default class AuthorRepository 
{
    private db!:DBContext;
    constructor(db:DBContext) 
    {
        this.db = db;
    }
    
    Get()
    {
        return this.db.Authors;
    }        
}