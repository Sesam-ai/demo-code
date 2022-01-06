const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

async function main() {
  const ipfs = await IPFS.create();
  const orbitdb = await OrbitDB.createInstance(ipfs);

  const options = {
    // Give write access to everyone
    accessController: {
      type: 'orbitdb', //OrbitDBAccessController
      write: "*"
    }
  }
 // const db = await orbitdb.docs('first-database')
 // await db.put({ _id: 'QmAwesomeIpfsHash', name: 'shamb0t', followers: 500 })
 // await db.put({ _id: 'QmAwesomeIpfsHash1', name: 'shamb0t1', followers: 1 })
 // await db.close()
   const db = await orbitdb.docs('databaseTest')
   await db.load()
   //console.log(db.all);
   //am stat 4 minute pentru query-ul asta
   const all = db.query((doc) => doc.followers >20290 )
   await db.close()
   console.log(all)
}

main();