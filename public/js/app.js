console.log('Client side javascript file is loaded')

const allBooks = document.querySelector('#all-books');
const bookInfo = document.querySelector('#book-info');
const buttonListAll = document.querySelector('#List-Button');

buttonListAll.addEventListener('click', async (event) => {
    buttonListAll.disabled = true

    fetch('http://localhost:7071/api/GetAllBooks')
        .then(response => response.json())
        .then(allBooks => allBooks.forEach(slapItOnTheDOM));
})

function slapItOnTheDOM(book) {
    const bookList = document.createElement('a');
    const br = document.createElement('br');

    bookList.dataset.id = book.id;
    bookList.innerHTML = `<span > ${book.title}. Author: ${book.author}</span>`;
    bookList.setAttribute("href", "http://localhost:3000/book/" + book.id);

    allBooks.appendChild(bookList);
    allBooks.appendChild(br);
}