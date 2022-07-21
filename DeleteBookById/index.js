// Programmatically connect to the database using Azure Cosmos Library
const { CosmosClient } = require("@azure/cosmos");

// Access the keys from local.settings.json file
var endpoint = process.env.CosmosDBEndpoint;
var key = process.env.CosmosDBAuthKey;
var databaseName = process.env.DatabaseName;
var collectionName = process.env.CollectionName;

// initiate the comsomclient
const client = new CosmosClient({ endpoint, key });

const deleteBookById = async (context, req, inputDocument) => {
    context.log('DeleteBookById Function Triggered');

    // Check if the book with the id is in the database. If empty, pass an error message
    if (inputDocument.length != 0)
    {
        const itemBody = inputDocument[0];

        try {
            // Delete call happens here. If deleted successfully, send an HTTP 200 response. If not, send an 500 internal server error message
            await client.database(databaseName).container(collectionName).item(itemBody.id, itemBody.author).delete();
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "Item deleted successfully"
            };
        } catch (err) { 
            console.log(err);
            context.res = {
                status: 500,
                body: err
            };
        };
    }
    else
    {
        context.res = {
            status: 404,
            body: "Item not found"
        };
    }

};

// const deleteBookById = async function (context, req, inputDocument) {
//     context.log('DeleteBookById Function Triggered');

//     // Check if the book with the id is in the database. If empty, pass an error message
//     if(inputDocument.length != 0)
//     {
//         const itemBody = inputDocument[0];

//         // Delete call happens here. If deleted successfully, send an HTTP 200 response. If not, send an 500 internal server error message
//         await client.database(databaseName).container(collectionName).item(itemBody.id, itemBody.author).delete()
//         .then((status) => { 
//             context.res = {
//                 // status: 200, /* Defaults to 200 */
//                 body: "Item deleted successfully"
//             };
//         })
//         .catch((err) => { 
//             console.log(err);
//             context.res = {
//                 status: 500,
//                 body: err
//             };
//         });
//     }
//     else
//     {
//         context.res = {
//             status: 404,
//             body: "Item not found"
//         };
//     }

// };

module.exports = deleteBookById;