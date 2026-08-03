const myLibrary = [
    {
        id: crypto.randomUUID(),
        title: 'Atomic Habits',
        author: 'James Clear',
        pages: 320,
        read: true,
    },
    {
        id: crypto.randomUUID(),
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        pages: 208,
        read: true,
    },
    {
        id: crypto.randomUUID(),
        title: 'Deep Work',
        author: 'Cal Newport',
        pages: 304,
        read: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        pages: 256,
        read: true,
    },
    {
        id: crypto.randomUUID(),
        title: 'Ikigai',
        author: 'Héctor García',
        pages: 208,
        read: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'The Midnight Library',
        author: 'Matt Haig',
        pages: 304,
        read: true,
    },
    {
        id: crypto.randomUUID(),
        title: 'Think Like a Monk',
        author: 'Jay Shetty',
        pages: 352,
        read: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        pages: 336,
        read: true,
    },
    {
        id: crypto.randomUUID(),
        title: 'The Mountain Is You',
        author: 'Brianna Wiest',
        pages: 248,
        read: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 310,
        read: true,
    },
];




function Book(title, author, pages, read ) {
  // the constructor...
  this.id = crypto.randomUUID()
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}


function addBookToLibrary(title, author, pages, read) {
const book = new Book(title, author, pages, read)
myLibrary.push(book)

}
