const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

async function main() {
const ipfs = new IPFS.create();
const orbitdb = await OrbitDB.createInstance(ipfs)
const docstore = await orbitdb.docstore('dbname')

docstore.put({ _id: 'hello world', doc: 'all the things' })
  .then(() => docstore.put({ _id: 'sup world', doc: 'other things' }))
  .then(() => docstore.get('hello'))
  .then((value) => console.log(value))


}

main();