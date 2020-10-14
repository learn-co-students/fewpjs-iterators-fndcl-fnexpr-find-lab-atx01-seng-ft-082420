const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
  console.log(array)
  // array.find( function(result) { return result === "W" })
  let result = array.find( object => object.result === "W")
   return !!result ? result.year :undefined
}