import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accAlice= await stdlib.newTestAccount(startingBalance);

console.log('Launching...');
const ctcAlice= accAlice.contract(backend);

//create an Array for the new user
const arrayBobs=[];

//creating a function to reuse when creating new Senate

const newBobs=async()=>{
  const newSelect = async(who)=>{
  const accBobs= await stdlib.newTestAccount(startingBalance);
  const ctcBobs= accBobs.contract(backend, ctcAlice.getInfo());
  arrayBobs.push(accBobs.getAddress());
  }
  await newSelect("Bob");
  await newSelect("Bob");
  
  console.log(arrayBobs);
  
};




//push the address of each user to my array

console.log('Starting backends...');
 await ctcAlice.p.Alice({
  
    ready: ()=>{
      console.log("Alice is ready to accept attachment")
      console.log("creating new Bob users...")
      console.log("new bob users addresses: ")
      newBobs()
    },
   
   
 
  
  });

console.log('Goodbye, Alice and Bobs');
