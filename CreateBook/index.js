const createBook = async (context, req) => {
    context.log('CreateBook Function Triggered');

    // Title is required. Send an error message if title not provided
    if (req.body && req.body.title)
    {
        try {
            const itemBody = {
                "author": req.body.author,
                "title": req.body.title,
                "date_published": req.body.date_published
            }
            context.bindings.outputDocument = JSON.stringify(itemBody);
            context.res = {
                status: 200,
                body: "Item added successfully"
            };
        } catch (e) {
            console.log(e);
        }
        
    }
    else {
        context.res = {
            status: 400,
            body: "Parameter missing: Title of the book"
        };
    }    
};

module.exports = createBook;