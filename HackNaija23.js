const {MongoClient} = require('mongodb');

async function main() {
    // set the connection string to a uri variable
    const uri = "mongodb://localhost:27017/Schools"
    // create a new client and pass in the uri
    const client = new MongoClient(uri);
    // connect client to the DB ->returns a promise

    documents = [
        {'name': 'Caleb Oke', 'age': 37, 'class': 'six'},
        {'name': 'Meghan Rapinoe', 'age': 30, 'class': 'five'},
        {'name': 'Viola Davis', 'age': 32, 'class': 'two'},
        {'name': 'John Wick', 'age': 27, 'class': 'six'},
    ];
    document_in_document =[
        {'name': 'Dwayne Johnson', 'age': 52, movies: [{
            'title': 'Central Intelligence',
            'year of release': 2017
        },
        {
            'title': 'Red Notice',
            'year of release': 2021,
            'Rating': '87%'
        }
    ]}
    ];
    try{
        await client.connect();
        await create_collection(client);
        // await create_one_document(client, {'name': 'John Doe', 'age': 30, 'class': 'six'});
        // await create_many_documents(client, documents);
        // await create_documents_in_documents(client, document_in_document);
        // await read_one_document_by_name(client, 'Caleb Oke');
        // await read_many_documents(client, 'six');
        // await read_all_documents(client);
        // await read_all_documents_except(client );
        // await sort_all_asc_documents(client);
        // await sort_all_desc_documents(client);
        // await delete_document(client, 'five' );
        // await delete_many_documents(client, /^C/ );
        // await update_one_document(client, 'Leandro Trossard', {age:22});
        // await update_many_documents(client, 'Harvard University');
        // await drop_collection(client );
        
    } catch(error) {
        console.log(error);
    } finally {
        await client.close();
    }

}


/*  This create async functions create a collection, a document, documents and documents in documents
*   remember a collection -> table in SQL, a document -> row in sql, documents-> rows in sql,
*   documents in documents-> I'd explain
*/

async function create_collection(client){
    const result = await client.db("Schools").createCollection("Students");
    
}


async function create_one_document(client, document) {
    
}

async function create_many_documents(client, documents) {
    
}

async function create_documents_in_documents(client, document_in_document){
    
}


async function read_one_document_by_name(client, name){
    
    
}

async function read_many_documents(client, className ) {
    

}

async function read_all_documents(client ) {
    

}

async function read_all_documents_except(client ) {
    

}

async function sort_all_asc_documents(client) {
        
}

async function sort_all_desc_documents(client) {
    
}

async function delete_document(client, className ) {
    
}

async function delete_many_documents(client, name ) {
   

}

// $set, $unset etc
async function update_one_document(client, name, updated_document) {
    
}

async function update_many_documents(client, school) {
    
}

// look at limit and //greater than or less than if there's time
// limit just add ".limit(4)" --> limits it to the first 4 documents that are found
// find({age: {$gte: 35}}) -> find everyone with ages greater than or equal to 35
// find({age: {$lte: 35}}) -> find everyone with ages less than or equal to 35

async function drop_collection(client ){
    
}



main().catch(console.error);