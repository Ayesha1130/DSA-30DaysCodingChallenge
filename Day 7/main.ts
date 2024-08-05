/* Day 7:   Question 1
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

class Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;

  constructor(
    title: string,
    author: string,
    publicationYear: number,
    genre,
    string
  ) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
  }

  displayDetails(): void {
    console.log(`title: ${this.title}`);
    console.log(`author: ${this.author}`);
    console.log(`publication Year: ${this.publicationYear}`);
    console.log(`genre: ${this.genre}`);
  }

  isRecent(): boolean {
    const currentYear = new Date().getFullYear();
    return currentYear - this.publicationYear <= 5;
  }

  changeGenre(newGenre: string): void {
    this.genre = newGenre;
  }

  isAuthor(authorName: string): boolean {
    return this.author === authorName;
  }
}

// Example usage:

const book1 = new Book(
  "The Reluctant Fundamentalist",
  ",Mohsin Hamid",
  2024,
  "Fiction",
  "Thriller"
);

book1.displayDetails(); // Output: title:"The Reluctant Fundamentalist",",Mohsin Hamid",2024,"Fiction, Thriller"

console.log(book1.isRecent()); // Output: true (book was published within the last 5 years)
book1.changeGenre("Classic");



/*Question : 2 ,Nested Object with Interfaces
Create an interface Person that includes properties for name, age, email, phone, and addresses. 
The addresses property should be an array of objects, each containing street, city, state, and zipcode. 
Write a function to find the first person living in a specific city and return their name and email.

*Hints:*
- Define the Address and Person interfaces with the required properties.
- Use nested loops to iterate through the people array and each person's addresses array.
- Check if the city property matches the given city in the function.
- Return the name and email of the first matching person or undefined if no match is found.*/


interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Person {
  name: string;
  age: number;
  email: string;
  phone: string;
  addresses: Address[];
}

function findPersonInCity(
  people: Person[],
  city: string
): { name: string; email: string } | undefined {
  for (const person of people) {
    for (const address of person.addresses) {
      if (address.city === city) {
        return { name: person.name, email: person.email };
      }
    }
  }
  return undefined;
}

// Example usage
const people: Person[] = [
  {
    name: "Sana Ali",
    age: 32,
    email: "sana.ali@example.com",
    phone: "0301-7654321",
    addresses: [
      {
        street: "789 Garden Street",
        city: "Islamabad",
        state: "Islamabad",
        zipcode: "44000",
      },
    ],
  },
  {
    name: "Bilal Ahmed",
    age: 28,
    email: "bilal.ahmed@example.com",
    phone: "0312-3456789",
    addresses: [
      {
        street: "101 Park Road",
        city: "Karachi",
        state: "Sindh",
        zipcode: "74001",
      },
    ],
  },
];

const result = findPersonInCity(people, "Karachi");
if (result) {
  console.log(`Name: ${result.name}, Email: ${result.email}`);
} else {
  console.log("No person found in the specified city.");
}
