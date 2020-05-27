import DataBase from "../DataBase/DataBase.js";
import { Endpoint } from "../Rout/Meta.js";

export default
class AuthorsController
{
    private Data:DataBase;
    constructor() 
    {
        this.Data = new DataBase();
    }

    // /authors
    // /authors?skip=0&take=5
    // /authors/id
    @Endpoint
    get( id?:string, skip?:number, take?:number ):any
    {
        
    }
    
    // /authors?id=1&key=value& ...
    @Endpoint
    post( id?:string, fullName?:string, address?:string, email?:string, phone?:string, rating?:number ):any
    {
        
    }

    // /authors?id=1&key=value& ...
    @Endpoint
    put( id?:string, fullName?:string, address?:string, email?:string, phone?:string, rating?:number ):any
    {

    }

    // /authors/id
    @Endpoint
    delete( id?:string ):any
    {

    }
}