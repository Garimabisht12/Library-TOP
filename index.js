
// create new book

function Book(title, author, pages, status) {
    // the constructor...
    if (!new.target) {
        console.log("Use 'new' to create a new Book")
        return
    }
    this.id = crypto.randomUUID()
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status
}


function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status)
    myLibrary.push(book)
}

// dom Manipulation

const myLibrary = [
    {
        id: crypto.randomUUID(),
        title: 'Atomic Habits',
        author: 'James Clear',
        pages: 320,
        status: true,
    },
    {
        id: crypto.randomUUID(),
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        pages: 208,
        status: true,
    },
    {
        id: crypto.randomUUID(),
        title: 'Deep Work',
        author: 'Cal Newport',
        pages: 304,
        status: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        pages: 256,
        status: true,
    },
    {
        id: crypto.randomUUID(),
        title: 'Ikigai',
        author: 'Héctor García',
        pages: 208,
        status: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'The Midnight Library',
        author: 'Matt Haig',
        pages: 304,
        status: true,
    },


];

const container = document.querySelector('#container')
const form = document.querySelector('form')



// display books to user


// create a card for a book object
function addCard(id, title, author, pages, status) {
    const card = document.createElement('div')
    const buttonDiv = document.createElement('div')
    const titleTag = document.createElement('p')
    const authorTag = document.createElement('p')
    const pagesTag = document.createElement('p')
    const statusRead = document.createElement('p')
    const removeButton = document.createElement('button')
    const changeStatus = document.createElement('button')

    removeButton.textContent = 'Remove'
    removeButton.dataset.id = id

    changeStatus.textContent = 'Change Status'
    changeStatus.id = 'statusBtn'
    changeStatus.dataset.id = id

    titleTag.textContent = title
    authorTag.textContent = author
    pagesTag.textContent = pages
    statusRead.textContent = (status && 'Finished') || 'In progress'
    statusRead.classList.add('status')

    card.classList.add('card')
    buttonDiv.classList.add('btnDiv')
    buttonDiv.append(changeStatus, removeButton)
    card.append(titleTag, authorTag, pagesTag, statusRead, buttonDiv)
    container.appendChild(card)
}

function displayBooks() {
    for (const book of myLibrary) {
        addCard(book.id, book.title, book.author, book.pages, book.status)
    }
}
displayBooks()



