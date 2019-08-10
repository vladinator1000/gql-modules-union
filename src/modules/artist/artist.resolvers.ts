export default {
  Artist: {
    name: artist => artist.name,
    genre: artist => artist.genre,
    // __isTypeOf: (stuff) => {
    //   console.log(stuff)
    //   // doesn't work
    //   // "TypeError: Cannot read property 'session' of undefined",
    // }
  }
}