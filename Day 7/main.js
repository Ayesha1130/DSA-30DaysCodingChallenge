/* Day
Question 1
 a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
1. Display the book details.
2. Check if the book is a recent publication (within the last 5 years).
3. Change the genre of the book.
4. Check if the book's author matches a given author name.

*Hints:*
- Use console.log to print book details in the displayDetails method.
- In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
- Update the genre property in the changeGenre method.
- In the isAuthor method, compare the author property with the given author name.*/
var Book = /** @class */ (function () {
    function Book(title, author, publicationYear, genre, string) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }
    Book.prototype.displayDetails = function () {
        console.log("title: ".concat(this.title));
        console.log("author: ".concat(this.author));
        console.log("publication Year: ".concat(this.publicationYear));
        console.log("genre: ".concat(this.genre));
    };
    Book.prototype.isRecent = function () {
        var currentYear = new Date().getFullYear();
        return currentYear - this.publicationYear <= 5;
    };
    Book.prototype.changeGenre = function (newGenre) {
        this.genre = newGenre;
    };
    Book.prototype.isAuthor = function (authorName) {
        return this.author === authorName;
    };
    return Book;
}());
// Example usage:
var book1 = new Book("The Reluctant Fundamentalist", ",Mohsin Hamid", 2024, "Fiction", "Thriller");
book1.displayDetails(); // Output: title:"The Reluctant Fundamentalist",",Mohsin Hamid",2024,"Fiction, Thriller"
console.log(book1.isRecent()); // Output: true (book was published within the last 5 years)
book1.changeGenre("Classic");
function findPersonInCity(people, city) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        for (var _a = 0, _b = person.addresses; _a < _b.length; _a++) {
            var address = _b[_a];
            if (address.city === city) {
                return { name: person.name, email: person.email };
            }
        }
    }
    return undefined;
}
// Example usage with Pakistani cities
var people = [
    {
        name: 'Ahmed Khan',
        age: 40,
        email: 'ahmed.khan@example.com',
        phone: '0301-1234567',
        addresses: [
            { street: '123 Main Blvd', city: 'Karachi', state: 'Sindh', zipcode: '74000' },
            { street: '456 Industrial Area', city: 'Lahore', state: 'Punjab', zipcode: '54000' }
        ]
    },
    {
        name: 'Sana Ali',
        age: 32,
        email: 'sana.ali@example.com',
        phone: '0301-7654321',
        addresses: [
            { street: '789 Garden Street', city: 'Islamabad', state: 'Islamabad', zipcode: '44000' }
        ]
    },
    {
        name: 'Bilal Ahmed',
        age: 28,
        email: 'bilal.ahmed@example.com',
        phone: '0312-3456789',
        addresses: [
            { street: '101 Park Road', city: 'Karachi', state: 'Sindh', zipcode: '74001' }
        ]
    }
];
var result = findPersonInCity(people, 'Karachi');
if (result) {
    console.log("Name: ".concat(result.name, ", Email: ").concat(result.email));
}
else {
    console.log('No person found in the specified city.');
}
