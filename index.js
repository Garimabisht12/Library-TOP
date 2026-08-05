const container = document.querySelector('#container')
const form = document.querySelector('form')

let myLibrary = [];
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

Book.prototype.changeStatus = function () {
    this.status = !this.status
}


function addBookToLibrary(title, author, pages, status) {

    const book = new Book(title, author, pages, status)
    console.log(book)
    myLibrary.push(book)
}

addBookToLibrary('Atomic Habits', 'James Clear', 320, true)
addBookToLibrary('The Alchemist', 'Paulo Coelho', 208, true)

// dom Manipulation


// create display for books
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
    removeButton.id = 'removeBtn'


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



// update book

container.addEventListener('click', (e) => {
    const btn = (e.target.id)

    if (btn === 'statusBtn') {
        for (let book of myLibrary) {
            if (book.id === e.target.dataset.id) {
                book.changeStatus()
                updateContainer()
                return
            }
        }

    }

    // remove books

    if (btn == 'removeBtn') {
        myLibrary = myLibrary.filter(obj => obj.id !== e.target.dataset.id)
        updateContainer()
        return
    }
})


// add books
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = form.elements['title'].value
    const author = form.elements['author'].value
    const pages = form.elements['pages'].value
    const status = form.elements['status'].value

    if (title.length < 2) {
        return alert('title should be more than 2 words')
    }
    else if (author.length < 2) {
        return alert('author name should be more than 2 words')
    }
    else if (!(Number.isInteger(Number(pages))) || pages.length < 0) {
        return alert('Pages are required and should be positive integer')
    }

    addBookToLibrary(title, author, pages, status)

    container.innerHTML = ''
    displayBooks()
    form.submit()
})



const updateContainer = () => {
    container.innerHTML = ''
    displayBooks()
}

updateContainer();