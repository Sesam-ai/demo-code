// Import modules
// Import modules
/*
const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

async function main() {
  const ipfs = await IPFS.create();
  const orbitdb = await OrbitDB.createInstance(ipfs);
  const db = await orbitdb.docs('opews-db-test1');
  const address = db.address;
}

main();

*/

const AvionDB = require("aviondb");
const IPFS = require("ipfs");
/*
async function main() {
    const ipfs = await IPFS.create();
  
    const aviondb = await AvionDB.init("DatabaseName1", ipfs); 
  //  const collection = await aviondb.initCollection("employees1");
    //const getDBS= await AvionDB.listDatabases();
   // const getCollection = await aviondb.listCollections() 
   // console.log(getDBS,getCollection);

    const col= await aviondb.collection("employees");
    const col1 = await aviondb.openCollection("employees");
    console.log(col1); 
    await col1.insertOne({
        hourly_pay: "$15121",
        name: "Elon Musk11",
        ssn: "562-48-538 asa 421",
        weekly_hours: 10021,
      });

      var employee = await col1.findOne({
        name: "Elon Musk11", 
      });
      await aviondb.closeCollection("employees");
      console.log(employee);

     /*
    
    await col.insertOne({
        hourly_pay: "$15121",
        name: "Elon Musk11",
        ssn: "562-48-538 asa 421",
        weekly_hours: 10021,
      });
      var employee = await col.findOne({
        name: "Elon Musk11", 
      });

    console.log(employee); 

   
    // Returns the List of collection names
    await aviondb.listCollections() 
    // prints ['employees'] 
   
    // Adding an employee document
    await collection.insertOne({
      hourly_pay: "$1512",
      name: "Elon Musk2",
      ssn: "562-48-538 asa 42",
      weekly_hours: 1002,
    });
   

    // Search by a single field Or many!
    var employee = await collection.findOne({
      name: "Elon Musk", 
    });

    console.log(employee); 
   //
  }
  
  main();
 */

  async function main() {

  const ipfs = await IPFS.create();
  
  const aviondb = await AvionDB.init("DatabaseName1", ipfs); 
  const col1 = await aviondb.openCollection("employees");
    console.log(col1);
    
  } 
  
  main();


  













