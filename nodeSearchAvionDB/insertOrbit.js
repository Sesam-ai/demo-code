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
  console.log(orbitdb.identity.id);
/*
  const options = {
    // Setup write access
    accessController: {
      write: [
        // Give access to ourselves
        orbitdb.identity.id,
        // Give access to the second peer
        '042c07044e7ea51a489c02854db5e09f0191690dc59db0afd95328c9db614a2976e088cab7c86d7e48183191258fc59dc699653508ce25bf0369d67f33d5d77839',
      ]
    }
  }
  */
  const db = await orbitdb.docs('first-database')
  await db.load()
  for(let i=0;i<10000;i++){
    await db.put("ana"+i,{ _id: 'QmAwesomeIpfsHash3111'+i, name: 'shamb0t2'+i, followers: 1211 })
    if(i%1000==0){
      console.log(i);
    }
  }
  console.log(db.get("ana"+i));
  await db.close()
  console.log("exit");
  
}

main();