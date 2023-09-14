/* ### Searching and counting data in Arrays

    Based on the Array of Books by Category below, complete the following 
    challenges

    - Count the number of categories and the number of books in each category
    - Count the number of authors
    - Show books by author Augusto Cury
    - Transform the function above into a function that will receive the 
      author's name and return that author's books
*/

const booksByCategory = [
    {
        category: "Wealth",
        books: [
            {
                title: "Secrets of the Millionaire Mind",
                author: "T. Harv Eker",
            },
            {
                title: "The Richest Man in Babylon",
                author: "George S. Clason",
            },
            {
                title: "Rich Dad Poor Dad",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Emotional intelligence",
        books: [
            {
                title: "You are Irreplaceable",
                author: "Augusto Cury",
            },
            {
                title: "Anxiety - How to Face the Evil of the Century",
                author: "Augusto Cury",
            },
            {
                title: "The 7 Habits of Highly Effective People",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log(totalCategories)

for(let category of booksByCategory) {
    console.log('Total books in the category: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total of authors: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Books by author ${author}: ${books.join(", ")}`)
}

booksOfAuthor('George S. Clason');