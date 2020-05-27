export default class Author 
{
    ID: number;
    FullName: string;
    Address: string;
    Email: string;
    Phone: string;
    Rating?: number;
    
    constructor(ID: number, FullName: string, Address: string, Email: string, Phone: string, Rating?: number) 
    {
        this.ID = ID;
        this.FullName = FullName;
        this.Address = Address;
        this.Email = Email;
        this.Phone = Phone;
        this.Rating = Rating;
    }
}