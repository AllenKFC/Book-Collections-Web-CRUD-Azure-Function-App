const bookForm = document.querySelector('#create-book');
const title_create = document.getElementById('title-id');
const author_create = document.getElementById('author-id');
const date_published_create = document.getElementById('dp-id');

bookForm.addEventListener('submit', (event) => createNewBook(event))

function createNewBook(event) {
    event.preventDefault();
    let newBook = gatherFormData();

    title_create.value = '';
    author_create.value = '';
    date_published_create.value = '';

    return fetch('http://localhost:7071/api/CreateBook', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
    .then(() => {return})
    .catch(err => {
        console.log(err);
    })
}

function gatherFormData() {
    return {
        title: event.target.title.value,
        author: event.target.author.value,
        date_published: event.target.date_published.value
    }
}