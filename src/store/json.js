import json from './jsondata.json'
export async function getData() {
  return json;
    
  // const url = "http://localhost:3001/sample";
  // try {
  //   const response = await fetch(url);
  //   const jsonResponse = await response.json();
  // //   // console.log("JSON response", jsonResponse);
  //   return jsonResponse;
  // } catch (err) {
  //   console.log("ERROR", err);
  // }
}
