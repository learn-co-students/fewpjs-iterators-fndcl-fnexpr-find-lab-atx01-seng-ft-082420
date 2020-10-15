const superbowlWin = (array) => {
  
  let result = array.find( object => object.result === "W")

  if (result != undefined) {
    return result.year
  } else {
    return undefined
  }
}