let a = [ 
    "INITIALIZING HACK TOOL...@#43$3",
    "CONNECTING TO FACEBOOK...@#43$3",
    "CONNECTING TO SERVER...@#43$3",
    "CONNECTION FAILED RETRYING...@#43$3",
    "USER PASSWORD HACKED...@#43$3",
    "ALL DATA FETCHED...@#43$3",
    "ALL SERVERS ARE HACKED...@#43$3",
    "CONNECTION FAILED...@#43$3",
    "CONNECTION FAILED RETRYING...@#43$3",
    "USER PASSWORD HACKED...@#43$3",
    "SYSTEM HACKED...@#43$3",
    "SECURITY ALERT...@#43$3",
    "SYSTEM IS GOING TO SLEEP...@#43$3",
    "ALL ACCESS DENIED...@#43$3"
  ]
  const sleep= async (seconds)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(true);
      },seconds*1000)
    })
  }
  const showhack= async(messages)=>{
    await sleep(0.5);
    // console.log(messages);
    text.innerHTML=text.innerHTML + messages + "</br>";
  }
  
  //iife function immediately invoked function expression
  (async()=>{
    for(let i =0;i<a.length;i++){
       await showhack(a[i]);
    }
  })()