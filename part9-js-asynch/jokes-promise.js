//promise example

import axios from "axios";

//axios a promise based API : "https://api.chucknorris.io/jokes/random"

//https://api.chucknorris.io/jokes/random

// axios.get("https://api.chucknorris.io/jokes/random")
// .then(res=>{
//     console.log(res.data)
// }).catch(err=>{
//     console.log(err)
// })

const anxiosURL= "https://api.chucknorris.io/jokes/random";

const fetchJoke = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

fetchJoke(anxiosURL);