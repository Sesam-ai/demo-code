const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')
async function main() {
    const ipfs = await IPFS.create();
    const options = {
      // Give write access to everyone
      accessController: {
          type: 'orbitdb', //OrbitDBAccessController
          write: "*"
      }
    }
    const orbitdb = await OrbitDB.createInstance(ipfs, options);
  
    console.log(orbitdb.identity.id);
 
    const db = await orbitdb.docs('databaseTest')
    await db.load()

    //pana la 20000 mi-a luat 17 minute 
    for(var i=1000;i<1000000;i++){
        await db.put({ _id: 'id'+i, name: 'name'+i, followers: i })
        console.log(i);
    }
    await db.close()
  
    
  }
  
  main();