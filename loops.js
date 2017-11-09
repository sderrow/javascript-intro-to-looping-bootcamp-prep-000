function whileLoop(n) {
  while ( n >= 0 ) {
    console.log(n--)
  }
  console.log('done')
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(myArray) {
  do {
    myArray.pop()
  } while ( myArray.length > 0 && maybeTrue() )
}
