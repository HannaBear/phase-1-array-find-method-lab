// superbowlWin = (record) => {
//     const result = record.find( record => record.result === "W" );
//     return !!result ? result.year : undefined;
//   }

const record = [
  { year: "2018", result: "N/A"},
  { year: "2017", result: "N/A"},
  { year: "2016", result: "N/A"},
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  { year: "2012", result: "N/A"},
  { year: "2011", result: "N/A"},
  { year: "2010", result: "N/A"}]
  
function isWin(){
 if (record.result === "W"){
  return record.year

 }
  else {
    return undefined
  }
}

function superbowlWin(record){
  record.find(isWin)

}
// superbowlWin(record)

// this code works ^ unsure how to change it to something that would pass test

// function superbowlWin(record){
//   function isWin(record){
//     //for(result in record)
//     if (record.result === "W"){
//      return record.year
//     }
//      else {
//        return undefined
//      }
//      record.find(isWin)
//    }
 
// }
// superbowlWin

//passes one test but unsure how to get it to recognize the result win