const updateForm = document.querySelector('#update-form');
const title_update = document.getElementById('title-update');
const author_update = document.getElementById('author-update');
const date_published_update = document.getElementById('dp-update');
const updateMessage = document.querySelector('#message-suc');

// get the current URL
// append the id from the URL above to call the API
const feUrl = document.URL;
const bookId = feUrl.substring(27);

fetch('http://localhost:7071/api/GetBookById?id=' + bookId)
    .then((response) => response.json())
    .then((data) => {
        title_update.value = data[0].title
        author_update.value = data[0].author
        date_published_update.value = data[0].date_published
    });

updateForm.addEventListener('submit', (event) => updateBook(event));

function updateBook(event) {
    event.preventDefault();
    let updateInfo = gatherFormDataUpdate();

    console.log('came through here')

    return fetch('http://localhost:7071/api/UpdateBookById?id=' + bookId, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateInfo)
    })
    .then(res => res.json());
}

function deleteBook() {
    let text = "Ok or Cancel";
    if (confirm(text) == true) {
        fetch('http://localhost:7071/api/DeleteBookById?id=' + bookId, {method: "DELETE"})
        .then(() => text = "delete successfully");
        document.location.href = 'http://localhost:3000'
    } else {
        text = "action canceled!";
    }
}

function gatherFormDataUpdate() {
    return {
        title: event.target.title_update.value,
        author: event.target.author_update.value,
        date_published: event.target.date_published_update.value
    }
}