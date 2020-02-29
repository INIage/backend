import Author from "./Model/Author.js";
import Book from "./Model/Book.js";

export default class DBContext
{
    Authors!:Array<Author>;
    Books!:Array<Book>;

    constructor()
    {
        this.Authors = [];
        this.Books = [];
        
        this.init();
    }

    private init()
    {
        const Sapkowski = new Author(
            1,
            "Andrzej Sapkowski",
            "Polska",
            "Andrzej_Sapkowski@gmail.com",
            "+1(234)567-89-01",);
        const Salvatore = new Author(
            2,
            "Robert Anthony Salvatore",
            "USA",
            "Robert_Salvatore@gmail.com",
            "+1(234)567-89-01",);
        const Hawking = new Author(
            3,
            "Stephen William Hawking",
            "Great Britain",
            "Stephen_Hawking@gmail.com",
            "+1(234)567-89-01",);
        const Mlodinow = new Author(
            4,
            "Leonard Mlodinow",
            "USA",
            "Leonard_Mlodinow@gmail.com",
            "+1(234)567-89-01",);
        
        this.Authors.push(Sapkowski)
        this.Authors.push(Salvatore)
        this.Authors.push(Hawking)
        this.Authors.push(Mlodinow)

        const book1 = new Book(
            1,
            "5-7921-0081-0",
            "Ostatnie życzenie",
            1,
            640,
            [ Sapkowski ] );
        const book2 = new Book(
            2,
            "83-7054-037-6",
            "Miecz przeznaczenia",
            2,
            384,
            [ Sapkowski ] );
        const book3 = new Book(
            3,
            "5-697-00017-0",
            "Krew elfów",
            3,
            480,
            [ Sapkowski ] );
        const book4 = new Book(
            4,
            "5-697-00185-1",
            "Czas pogardy",
            4,
            464,
            [ Sapkowski ] );
        const book5 = new Book(
            5,
            "5-15-000402-2",
            "Chrzest ognia",
            5,
            480,
            [ Sapkowski ] );
        const book6 = new Book(
            6,
            "5-237-01215-9",
            "Wieża Jaskółki",
            5,
            480,
            [ Sapkowski ] );
        const book7 = new Book(
            7,
            "5-237-04237-6",
            "Pani Jeziora",
            3,
            512,
            [ Sapkowski ] );
        const book8 = new Book(
            8,
            "978-5-17-087830-7",
            "Sezon burz",
            2,
            384,
            [ Sapkowski ] );
        const book9 = new Book(
            9,
            "0880389052",
            "Homeland",
            4,
            352,
            [ Salvatore ] );
        const book10 = new Book(
            10,
            "978-0880389204",
            "Exile",
            6,
            320,
            [ Salvatore ] );
        const book11 = new Book(
            11,
            "1-56076-047-8",
            "Sojourn",
            2,
            309,
            [ Salvatore ] );
        const book12 = new Book(
            12,
            "978-5-367-02274-2",
            "A Briefer History of Time",
            3,
            184,
            [ Hawking, Mlodinow ] );
        const book13 = new Book(
            13,
            "978-5-367-02218-6",
            "The Grand Design",
            4,
            208,
            [ Hawking, Mlodinow ] );
        const book14 = new Book(
            14,
            "978-5-367-01085-5",
            "The Future of Spacetime",
            3,
            256,
            [ Hawking ] );

        this.Books.push(book1);            
        this.Books.push(book2);
        this.Books.push(book3);
        this.Books.push(book4);
        this.Books.push(book5);
        this.Books.push(book6);
        this.Books.push(book7);
        this.Books.push(book8);
        this.Books.push(book9);
        this.Books.push(book10);
        this.Books.push(book11);
        this.Books.push(book12);
        this.Books.push(book13);
        this.Books.push(book14);
    }    
}