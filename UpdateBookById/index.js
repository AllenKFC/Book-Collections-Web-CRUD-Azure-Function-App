const updateBookById = async (context, req, inputDocument) => {
    context.log('UpdateBookById Function Triggered');

    // Check if the book exist in the Database. Pass an error message if the array is empty
    if (inputDocument.length == 0) {
        context.res = {
            status: 404,
            body: "Book with given Id not found"
        };
    }
    else {
        // Since user can choose to update up to three fields of the book, we check the field listed 
        // present in the request body. If present, we assign that value. If not, it takes the existing
        // value stored in the Database
        const book = inputDocument[0];
        const author = req.body.author || book.author;
        const title = req.body.title || book.title;
        const date_published = req.body.date_published || book.date_published;
        
        // pass the existing id value of the book object to prevent adding a new object with a new id 
        const itemBody = {
            "id": req.query.id,
            "author": author,
            "title": title,
            "date_published": date_published
        }

        // assign the JSON string to the output binding variable
        context.bindings.outputDocument = JSON.stringify(itemBody);
     
        // pass the result back to the user using HTTP respond body
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: itemBody
        };
    }
};

module.exports = updateBookById;