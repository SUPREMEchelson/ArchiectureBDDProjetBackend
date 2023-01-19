// CRUD CREATE READ UPDATE DELETE
require('dotenv').config();
const {MongoClient, ListCollectionsCursor} = require('mongodb');
const client = new MongoClient(process.env.MONGO_URL);

async function main(){
    await client.connect();
    console.log('Connection OK!');
    const db = client.db('myTask');
    const collection =db.collection('documents');
    
    // //Create 
    // try{
    //     const insertData = await collection.insertMany([
    //         {
    //             name: 'Alex',
    //             age: 30,
    //             sexe: 'Masculin',
    //             hobby: 'Coding',
    //         },
    //         {
    //             name: 'Justine',
    //             age:30,
    //             sexe: 'Féminin',
    //             hobby: 'Coding'
    //         },
    //         {
    //             name: 'Pierre',
    //             age: 35,
    //             sexe: 'Masculin',
    //             hobby: 'Escalade'
    //         }
    //     ])
    //     console.log('Documents insérés =>', insertData)
    // }catch(e) {throw e;}


// Read 
try{
    const findData = await collection.findOne({name: 'Justine'});
    console.log('Document trouvé:', findData); 
} catch(e){ throw e;}

// // Read Many
// try{
//     const findMultipleData = await collection.find({age: 30});
//     console.log(await findMultipleData.toArray()); 
// } catch(e){ throw e;}

// Update

// try{
//     const updatePierre = collection.updateOne({name: 'Pierre'}, {
//         $set: {name: 'Pauline', sexe: 'Féminin'}

//     });
//     console.log(await updatePierre);
// } catch(e) {throw e;}


// Update many
// try{
// const updateAge = collection.updateMany({age: 30 }, {
//     $set: { age: 31}
// });
// console.log(await updateAge);

// } catch(e) {throw e;}

// // Delete
// try{
//     const deletePierre = await collection.deleteOne({ name: 'Pauline'});
//     console.log(await deletePierre);
// }catch(e) {throw e};



// // Delete Many
// try{
//     const deleteEveryone = await collection.deleteMany({age: 31});
//     console.log(await deleteEveryone);
// } catch(e) {throw e;}
return 'done';
}



main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close())

