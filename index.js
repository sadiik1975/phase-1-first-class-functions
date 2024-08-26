// Function that receives a callback function as an argument and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    };
  }
  
  // Example usage:
  
  // Test `receivesAFunction`
  receivesAFunction(() => console.log("Callback function called!"));
  
  // Test `returnsANamedFunction`
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Should log: "I am a named function!"
  
  // Test `returnsAnAnonymousFunction`
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); // Should log: "I am an anonymous function!"
  