const express = require('express');
const router = new express.Router();

// router.get('/getallbooks', async (context, req, inputDocument) => {
//     context.log('GetAllBooks Function Triggered');

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: inputDocument
//     };
// });

// module.exports = router;

const getAllBooks = async (context, req, inputDocument) => {
    context.log('GetAllBooks Function Triggered');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: inputDocument
    };
};

module.exports = getAllBooks;