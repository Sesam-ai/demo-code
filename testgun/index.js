const server = require('http').createServer().listen(8080);
const GUN = require('gun');
const gun = GUN({web: server});
const fs = require('fs');
const readline = require('readline');
const rp = require('request-promise');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var exec = require('child_process').execFile;

var fun =function(){
   console.log("fun() start");
   exec('HelloJithin.exe', function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });  
}
fun();


processLineByLine();
  
async function processLineByLine() {
  const fileStream = fs.createReadStream('f1.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let x=0;
  let freq;
  //for await (const line of rl) {
    x+=1
    line="https://ipfs.io/ipfs/bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq/wiki/Vincent_van_Gogh.html";
    
    rp(line)
      .then(function(html){
        //success!
        console.log(html);
        const dom = new JSDOM(html); 
        freq=wordFreq(dom.window.document.querySelector("p").textContent);
        console.log(freq);
      }).catch(function(err){
        console.log(err);
      });
      



    console.log(`Line from file: ${line} ${x}`);
 // }
}

function wordFreq(string) {
  var words = string.replace(/[.]/g, '').split(/\s/);
  var freqMap = {};
  words.forEach(function(w) {
     if (!freqMap[w]) {
        freqMap[w] = 0;
     }
     freqMap[w] += 1;
  });

  return freqMap;
}









/*
putData(400000,500000);
console.log("s");
gun.get('mark100000').on((data, key) => {
  console.log("realtime updates 1:", data);
});
console.log("2");

  //setInterval(() => { gun.get('mark300').get('live').put(Math.random()) }, 9);

  function putData(start,lenght){
    for(let i=start;i<lenght;i++){
        gun.get('mark'+i).put({
            name: "Mark",
            email: "mark@gun.eco"+i,
        });
       // console.log(i);
        if(i%100000==0){
            console.log(i);
        }
    }
  }
  */