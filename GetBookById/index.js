const getBookById = async (context, req, inputDocument) => {
    context.log('GetBookById Function Triggered');

    if (inputDocument.length == 0) {
        context.res = {
            status: 404,
            body: "Book with given Id not found"
        }
    } else {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: inputDocument
        };
    }
};

module.exports = getBookById;