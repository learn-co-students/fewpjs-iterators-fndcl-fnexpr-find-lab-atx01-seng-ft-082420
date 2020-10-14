const superbowlWin = (array) => {
  let result = array.find( winOrLoss => winOrLoss.result == "W")
  if(result == undefined){return undefined} else{return result.year}
}